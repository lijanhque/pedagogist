import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { ApiRequest, ApiResponse } from "./src/server/stripe-billing";

const stripeApiRoutes = new Map([
  ["/api/stripe/checkout", "/api/stripe/checkout.ts"],
  ["/api/stripe/verify-checkout", "/api/stripe/verify-checkout.ts"],
  ["/api/stripe/portal", "/api/stripe/portal.ts"],
]);

function stripeApiPlugin(): Plugin {
  return {
    name: "stripe-api-development-routes",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathname = new URL(req.url ?? "/", "http://localhost").pathname;
        const modulePath = stripeApiRoutes.get(pathname);
        if (!modulePath) return next();

        void (async () => {
          try {
            const chunks: Buffer[] = [];
            let bodySize = 0;
            for await (const chunk of req) {
              const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
              bodySize += buffer.length;
              if (bodySize > 64 * 1024) {
                res.statusCode = 413;
                res.setHeader("Content-Type", "application/json; charset=utf-8");
                res.end(JSON.stringify({ error: "Request body is too large" }));
                return;
              }
              chunks.push(buffer);
            }

            Object.assign(req, { body: Buffer.concat(chunks).toString("utf8") });
            if (!req.headers["x-forwarded-proto"] && req.headers.host?.startsWith("localhost")) {
              req.headers["x-forwarded-proto"] = "http";
            }

            const route = await server.ssrLoadModule(modulePath);
            const apiResponse = {
              status(code: number) {
                res.statusCode = code;
                return apiResponse;
              },
              json(payload: unknown) {
                res.setHeader("Content-Type", "application/json; charset=utf-8");
                res.end(JSON.stringify(payload));
              },
            };
            await (route.default as (request: ApiRequest, response: ApiResponse) => unknown)(
              req as ApiRequest,
              apiResponse as ApiResponse,
            );
          } catch (error) {
            server.config.logger.error("Stripe API development route failed", { error });
            if (!res.headersSent) {
              res.statusCode = 500;
              res.setHeader("Content-Type", "application/json; charset=utf-8");
              res.end(JSON.stringify({ error: "Unable to process billing request" }));
            }
          }
        })();
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  for (const key of [
    "STRIPE_SECRET_KEY",
    "STRIPE_SECRET_KEY_STRIPE_SECRET_KEY",
    "SUPABASE_URL",
    "VITE_SUPABASE_URL",
    "SUPABASE_ANON_KEY",
    "VITE_SUPABASE_PUBLISHABLE_KEY",
    "SUPABASE_SERVICE_ROLE_KEY",
  ]) {
    if (!process.env[key] && env[key]) process.env[key] = env[key];
  }
  if (!process.env.STRIPE_SECRET_KEY && env.STRIPE_SECRET_KEY_STRIPE_SECRET_KEY) {
    process.env.STRIPE_SECRET_KEY = env.STRIPE_SECRET_KEY_STRIPE_SECRET_KEY;
  }

  return {
    server: {
      host: "::",
      port: 8080,
      allowedHosts: [
        "sb-2082vfrd3p3r.vercel.run",
        "sb-2gk1meeo4jgr.vercel.run",
        "sb-4by8rqidz79w.vercel.run",
      ],
    },
    plugins: [react(), stripeApiPlugin(), mode === "development" && componentTagger()].filter(Boolean),
    envPrefix: "VITE_RUNTIME_",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      "import.meta.env.VITE_RUNTIME_SUPABASE_URL": JSON.stringify(
        env.VITE_SUPABASE_URL ?? env.SUPABASE_URL ?? env.NEXT_PUBLIC_SUPABASE_URL,
      ),
      "import.meta.env.VITE_RUNTIME_SUPABASE_PUBLISHABLE_KEY": JSON.stringify(
        env.VITE_SUPABASE_PUBLISHABLE_KEY ??
          env.SUPABASE_PUBLISHABLE_KEY ??
          env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
      ),
    },
  };
});
