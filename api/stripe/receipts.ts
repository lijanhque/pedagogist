import type { ApiRequest, ApiResponse } from "../../src/server/stripe-billing.js";
import { getAdminClient, getUserId, sendError } from "../../src/server/stripe-billing.js";
import Stripe from "stripe";

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "GET") return sendError(res, 405, "Method not allowed");
  try {
    const userId = await getUserId(req);
    if (!userId) return sendError(res, 401, "Sign in to view your purchase history");

    const admin = getAdminClient();
    const { data: receipts, error } = await admin
      .from("stripe_checkout_receipts")
      .select("session_id, created_at")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });
    if (error) throw error;

    let stripe: Stripe | null = null;
    try {
      stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", { apiVersion: "2024-12-18.acacia" });
    } catch {
      stripe = null;
    }

    const enriched = await Promise.all(
      (receipts ?? []).map(async (receipt) => {
        const base = {
          session_id: receipt.session_id,
          created_at: receipt.created_at,
          plan: null as string | null,
          tier: null as string | null,
          amount: null as number | null,
          currency: null as string | null,
          status: null as string | null,
          customer_email: null as string | null,
        };
        if (!stripe) return base;
        try {
          const session = await stripe.checkout.sessions.retrieve(receipt.session_id);
          return {
            ...base,
            plan: typeof session.metadata?.plan === "string" ? session.metadata.plan : null,
            amount: session.amount_total ?? null,
            currency: session.currency ?? null,
            status: session.payment_status ?? null,
            customer_email:
              typeof session.customer_details?.email === "string"
                ? session.customer_details.email
                : typeof session.customer === "string"
                  ? session.customer
                  : null,
          };
        } catch {
          return base;
        }
      }),
    );

    return res.status(200).json({ receipts: enriched });
  } catch (error) {
    console.error("Failed to load billing receipts", error);
    return sendError(res, 500, "Unable to load purchase history right now");
  }
}
