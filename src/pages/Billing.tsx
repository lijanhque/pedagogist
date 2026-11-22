import { useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ArrowLeft, Check, CreditCard, Loader2, ShieldCheck, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { useCredits } from "@/hooks/useCredits";
import { useUserData } from "@/contexts/UserDataContext";
import { createBillingPortal, createCheckout, verifyCheckout } from "@/lib/billing";

const plans = [
  { id: "pro" as const, title: "Pro", price: "$10", duration: "15 days", description: "Unlimited practice and AI scoring for 15 days.", features: ["Unlimited AI scoring", "Unlimited mock tests", "Full practice question bank", "Full test history", "Detailed analytics"] },
  { id: "vip" as const, title: "VIP", price: "$30", duration: "30 days", description: "A full month of practice with live teacher support.", features: ["Unlimited AI scoring", "Unlimited mock tests", "Full practice question bank", "Full test history and analytics", "Live professional teacher support"] },
];

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
      handled.current = false;
      return;
    }
    const next = new URLSearchParams(searchParams);
    next.delete("session_id");
    setSearchParams(next, { replace: true });
  }, [sessionId, verification.isPending, verification.isSuccess, verification.isError, verification.error, verification.data, refresh, refreshCredits, searchParams, setSearchParams]);

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
          <CardHeader><CardTitle>Sign in to manage billing</CardTitle><CardDescription>Your subscription and payment details are available after you sign in.</CardDescription></CardHeader>
          <CardContent><Button asChild><Link to="/auth?redirect=%2Fbilling">Continue to sign in</Link></Button></CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Button variant="ghost" asChild><Link to="/dashboard"><ArrowLeft data-icon="inline-start" />Dashboard</Link></Button>
          <Button variant="outline" asChild><Link to="/profile">Account profile</Link></Button>
        </div>

        <header className="mb-10 max-w-2xl">
          <Badge variant="secondary" className="mb-4 gap-2"><CreditCard />Secure billing</Badge>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Simple packs. Focused progress.</h1>
          <p className="mt-4 text-muted-foreground">Choose a one-time access pack. Paid access ends after its stated period and then your account returns to Free.</p>
        </header>

        {verification.isPending && <div className="mb-6 flex items-center gap-2 rounded-lg border bg-card p-4 text-sm"><Loader2 className="size-4 animate-spin" />Confirming your purchase with Stripe…</div>}
        {searchParams.get("checkout") === "cancelled" && <div className="mb-6 rounded-lg border bg-card p-4 text-sm text-muted-foreground">Checkout was canceled. You have not been charged.</div>}

        <Card className="mb-10 overflow-hidden border-primary/30 bg-gradient-to-br from-primary/10 via-card to-accent/10">
          <CardContent className="flex flex-col justify-between gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Current plan</p>
              <div className="mt-2 flex items-center gap-3"><h2 className="font-display text-3xl font-bold">{currentPlanName}</h2><Badge variant={isPaid ? "default" : "secondary"}>{isPaid ? "Active pack" : "Free access"}</Badge></div>
              <p className="mt-2 text-sm text-muted-foreground">{isPaid ? "Unlimited AI scoring and mock tests" : `${credits} AI scoring credits available`}</p>
              {isPaid && subscription?.current_period_end && <p className="mt-1 text-sm text-muted-foreground">Access ends {new Date(subscription.current_period_end).toLocaleDateString()}</p>}
            </div>
            {subscription?.stripe_subscription_id && subscription.stripe_customer_id && <Button variant="outline" disabled={portal.isPending} onClick={() => portal.mutate()}>{portal.isPending ? <Loader2 className="animate-spin" data-icon="inline-start" /> : <CreditCard data-icon="inline-start" />}Manage legacy subscription</Button>}
          </CardContent>
        </Card>

        <div className="mb-5 flex items-center gap-2"><Sparkles className="size-5 text-primary" /><h2 className="font-display text-2xl font-semibold">Choose your access pack</h2></div>
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
                    {plan.features.map((feature) => <li key={feature} className="flex items-center gap-3"><Check className="size-4 shrink-0 text-primary" /><span>{feature}</span></li>)}
                  </ul>
                  <Button className="mt-8 w-full" variant={plan.id === "pro" ? "default" : "outline"} disabled={checkout.isPending || authLoading || !user} onClick={() => checkout.mutate(plan.id)}>
                    {checkout.isPending && checkout.variables === plan.id ? <Loader2 className="animate-spin" data-icon="inline-start" /> : <ShieldCheck data-icon="inline-start" />}
                    {isCurrent ? `Buy another ${plan.title} pack` : `Choose ${plan.title}`}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">Payments are securely processed by Stripe. Pay $10 USD or $30 USD; a local BDT equivalent may be available at checkout. Each pack is one-time, and purchasing early adds its days after your current pack ends.</p>
      </div>
    </main>
  );
}
