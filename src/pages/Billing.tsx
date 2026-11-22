import { useEffect, useRef } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ArrowLeft, Check, CreditCard, History, Loader2, ShieldCheck, Sparkles, Table, UserRound } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table as TablePrimitive, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAuth } from "@/hooks/useAuth";
import { useCredits } from "@/hooks/useCredits";
import { useUserData } from "@/contexts/UserDataContext";
import { createBillingPortal, createCheckout, fetchReceipts, verifyCheckout } from "@/lib/billing";
import { BillingReceipt } from "@/lib/billing";
import { AppShell } from "@/components/layout/AppShell";

const plans = [
  { id: "pro" as const, title: "Pro", price: "$10", duration: "15 days", description: "Unlimited practice and AI scoring for 15 days.", features: ["Unlimited AI scoring", "Unlimited mock tests", "Full practice question bank", "Full test history", "Detailed analytics"] },
  { id: "vip" as const, title: "VIP", price: "$30", duration: "30 days", description: "A full month of practice with live teacher support.", features: ["Unlimited AI scoring", "Unlimited mock tests", "Full practice question bank", "Full test history and analytics", "Live professional teacher support"] },
];

interface PurchaseRow {
  id: string;
  plan: string;
  tier: string;
  amount: number | null;
  status: string;
  periodStart: string | null;
  periodEnd: string | null;
  sessionId: string | null;
  createdAt: string;
}

export default function Billing() {
  const { user, loading: authLoading } = useAuth();
  const { subscription, refresh } = useUserData();
  const { credits, tier, refresh: refreshCredits } = useCredits();
  const [searchParams, setSearchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const handled = useRef(false);
  const currentTier = tier;
  const isPaid = currentTier === "pro" || currentTier === "vip";
  const currentPlanName = currentTier === "vip" ? "VIP" : currentTier === "pro" ? "Pro" : "Free";

  const verification = useQuery({
    queryKey: ["stripe-checkout-verification", user?.id, sessionId],
    queryFn: () => verifyCheckout(sessionId!),
    enabled: Boolean(user && sessionId),
    retry: 2,
  });

  useEffect(() => {
    if (!sessionId || handled.current || verification.isPending) return;
    handled.current = true;
    if (verification.isSuccess) {
      toast.success(verification.data.verified ? "Your pack is active" : "This payment was already processed", {
        description: verification.data.verified
          ? "Your access period has started."
          : "Your account has already received this purchase.",
      });
      void refresh();
      void refreshCredits();
    } else if (verification.isError) {
      toast.error(verification.error.message || "We could not verify your checkout.");
      return;
    }
    const next = new URLSearchParams(searchParams);
    next.delete("session_id");
    setSearchParams(next, { replace: true });
  }, [sessionId, verification.isPending, verification.isSuccess, verification.isError, verification.error, verification.data, refresh, refreshCredits, searchParams, setSearchParams]);

  const receipts = useQuery<BillingReceipt[]>({
    queryKey: ["billing-receipts", user?.id],
    enabled: Boolean(user),
    queryFn: fetchReceipts,
  });

  const checkout = useMutation({
    mutationFn: createCheckout,
    onSuccess: ({ url }) => { window.location.assign(url); },
    onError: (error: Error) => toast.error(error.message),
  });
  const portal = useMutation({
    mutationFn: createBillingPortal,
    onSuccess: ({ url }) => { window.location.assign(url); },
    onError: (error: Error) => toast.error(error.message),
  });

  if (!authLoading && !user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle>Sign in to manage billing</CardTitle>
            <CardDescription>Your subscription and payment details are available after you sign in.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild><Link to="/auth?redirect=%2Fbilling">Continue to sign in</Link></Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  const periodEnd = subscription?.current_period_end ? new Date(subscription.current_period_end).toLocaleDateString() : null;
  const periodStart = subscription?.current_period_start ? new Date(subscription.current_period_start).toLocaleDateString() : null;

  const hasActivePack = currentTier === "pro" || currentTier === "vip";
  const activePurchase: PurchaseRow | null = hasActivePack && subscription?.current_period_end
    ? {
        id: "current",
        plan: currentPlanName,
        tier: currentTier,
        amount: currentTier === "vip" ? 3000 : currentTier === "pro" ? 1000 : null,
        status: subscription.status ?? "active",
        periodStart,
        periodEnd,
        sessionId: subscription.stripe_checkout_session_id ?? subscription.stripe_subscription_id ?? null,
        createdAt: subscription.current_period_start ?? new Date().toISOString(),
      }
    : null;

  return (
    <AppShell>
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-bold tracking-tight">Billing & subscription</h1>
            <p className="text-muted-foreground">Manage your plan, payment method, and purchase history.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" asChild><Link to="/dashboard"><ArrowLeft data-icon="inline-start" />Dashboard</Link></Button>
            <Button variant="outline" asChild><Link to="/profile"><UserRound data-icon="inline-start" />Account profile</Link></Button>
          </div>
        </div>

        {searchParams.get("checkout") === "cancelled" && (
          <div className="mb-6 rounded-lg border bg-card p-4 text-sm text-muted-foreground">Checkout was canceled. You have not been charged.</div>
        )}

        {/* Current plan */}
        <Card className="mb-6 overflow-hidden border-primary/30 bg-gradient-to-br from-primary/10 via-card to-accent/10">
          <CardContent className="flex flex-col justify-between gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Current plan</p>
              <div className="mt-2 flex items-center gap-3">
                <h2 className="font-display text-3xl font-bold">{currentPlanName}</h2>
                <Badge variant={isPaid ? "default" : "secondary"}>{isPaid ? "Active pack" : "Free tier"}</Badge>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {isPaid ? "Unlimited AI scoring and mock tests" : `${credits} AI scoring credits available`}
              </p>
              {periodEnd && <p className="mt-1 text-sm text-muted-foreground">Pack ends {periodEnd}</p>}
            </div>
            {subscription?.stripe_customer_id && (
              <Button variant="outline" disabled={portal.isPending} onClick={() => portal.mutate()}>
                {portal.isPending ? <Loader2 className="animate-spin" data-icon="inline-start" /> : <CreditCard className="h-4 w-4 mr-1.5" data-icon="inline-start" />}
                Manage payment method
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Current purchase table */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Table className="h-5 w-5" />
              Current purchase
            </CardTitle>
            <CardDescription>Your active access pack.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border">
              <TablePrimitive>
                <TableHeader>
                  <TableRow>
                    <TableHead>Plan</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Period</TableHead>
                    <TableHead className="text-right">Checkout session</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activePurchase ? (
                    <TableRow key={activePurchase.id}>
                      <TableCell className="font-medium">{activePurchase.plan}</TableCell>
                      <TableCell className="text-right font-medium">
                        {activePurchase.amount ? `$${(activePurchase.amount / 100).toFixed(2)}` : "Free"}
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{activePurchase.status.charAt(0).toUpperCase() + activePurchase.status.slice(1)}</Badge>
                      </TableCell>
                      <TableCell className="text-right text-sm text-muted-foreground">
                        {activePurchase.periodStart && activePurchase.periodEnd ? `${activePurchase.periodStart} — ${activePurchase.periodEnd}` : "—"}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="text-xs text-muted-foreground truncate max-w-[200px]">{activePurchase.sessionId ?? "—"}</div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm" onClick={() => portal.mutate()} disabled={portal.isPending || !subscription?.stripe_customer_id}>
                          Manage
                        </Button>
                      </TableCell>
                    </TableRow>
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                        No active purchase. Choose a pack below to get started.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </TablePrimitive>
            </div>
          </CardContent>
        </Card>

        {/* Past purchase history */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <History className="h-5 w-5" />
              Past purchase history
            </CardTitle>
            <CardDescription>One-time packs purchased on this account.</CardDescription>
          </CardHeader>
          <CardContent>
            {receipts.isPending ? (
              <div className="h-64 flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin" /></div>
            ) : receipts.data && receipts.data.length === 0 ? (
              <div className="rounded-lg border p-8 text-center text-muted-foreground">No past purchases found.</div>
            ) : (
              <div className="rounded-lg border overflow-hidden">
                <TablePrimitive>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-right">Date</TableHead>
                      <TableHead>Checkout session</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {receipts.data.map((receipt) => (
                      <TableRow key={receipt.session_id}>
                        <TableCell className="text-right text-sm text-muted-foreground">
                          {new Date(receipt.created_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <div className="text-xs text-muted-foreground truncate max-w-[220px]">{receipt.session_id}</div>
                        </TableCell>
                        <TableCell className="font-medium">
                          {receipt.plan ? (receipt.plan === "vip" ? "VIP" : "Pro") : "—"}
                        </TableCell>
                        <TableCell className="text-right text-sm">
                          {receipt.amount != null && receipt.currency ? `$${(receipt.amount / 100).toFixed(2)} ${receipt.currency.toUpperCase()}` : "—"}
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">{receipt.status ? receipt.status.charAt(0).toUpperCase() + receipt.status.slice(1) : "Completed"}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(receipt.session_id)} title="Copy session ID">
                            <Check className="h-3.5 w-3.5 mr-1.5" />Copy
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </TablePrimitive>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Plans catalog */}
        <div className="mb-5 flex items-center gap-2">
          <Sparkles className="size-5 text-primary" />
          <h2 className="font-display text-2xl font-semibold">Choose your access pack</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {plans.map((plan) => {
            const isCurrent = currentTier === plan.id;
            return (
              <Card key={plan.id} className={`relative flex h-full flex-col ${plan.id === "pro" ? "border-primary shadow-lg" : "border-border"}`}>
                {plan.id === "pro" && <Badge className="absolute -top-3 left-6 gap-1"><Sparkles />Most popular</Badge>}
                <CardHeader className="pt-8">
                  <CardTitle className="font-display text-2xl">{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="pt-2"><span className="font-display text-4xl font-bold">{plan.price}</span><span className="ml-2 text-muted-foreground">/ {plan.duration}</span></div>
                  <p className="text-xs text-muted-foreground">One-time payment · No automatic renewal</p>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <ul className="flex flex-1 flex-col gap-3 text-sm text-muted-foreground">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="size-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="mt-8 w-full"
                    variant={plan.id === "pro" ? "default" : "outline"}
                    disabled={checkout.isPending || authLoading || !user}
                    onClick={() => checkout.mutate(plan.id)}
                  >
                    {checkout.isPending && checkout.variables === plan.id ? (
                      <Loader2 className="animate-spin" data-icon="inline-start" />
                    ) : (
                      <ShieldCheck data-icon="inline-start" />
                    )}
                    {isCurrent ? `Buy another ${plan.title} pack` : `Choose ${plan.title}`}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Payments are securely processed by Stripe. Pay $10 USD or $30 USD; a local BDT equivalent may be available at checkout. Each pack is one-time, and purchasing early adds its days after your current pack ends.
        </p>
      </div>
    </AppShell>
  );
}
