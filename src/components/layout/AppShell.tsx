import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CreditsBadge } from "@/components/dashboard/CreditsBadge";
import { useAuth } from "@/hooks/useAuth";
import { LogOut, Settings } from "lucide-react";
import logo from "@/assets/logo.png";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { cn } from "@/lib/utils";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar selectedSection={null} selectedType={null} />

        <div className="flex-1 flex flex-col min-w-0">
          <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
            <div className="flex min-h-16 items-center gap-2 px-3 py-2 sm:gap-4 sm:px-5">
              <SidebarTrigger className="size-9 shrink-0 rounded-md" />

              <Link
                to="/"
                className={cn("hidden shrink-0 items-center gap-2 lg:flex", location.pathname === "/" ? "text-primary" : "")}
              >
                <img src={logo} alt="PedagogistsPTE" className="h-7 w-auto" />
                <span className="text-sm font-semibold tracking-tight text-foreground">PedagogistsPTE</span>
              </Link>

              <div className="ml-auto flex min-w-0 items-center gap-1.5 sm:gap-3">
                {user && (
                  <>
                    <CreditsBadge />
                    <span className="hidden max-w-40 truncate text-sm text-muted-foreground xl:block">
                      {user.email}
                    </span>
                    <Button variant="ghost" size="icon" aria-label="Settings" className="hidden sm:inline-flex">
                      <Settings className="size-5" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={handleSignOut} aria-label="Sign out">
                      <LogOut className="size-5" />
                    </Button>
                  </>
                )}
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-auto p-4 sm:p-6 xl:p-8">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
