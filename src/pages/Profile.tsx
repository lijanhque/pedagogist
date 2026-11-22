import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  ArrowLeft,
  Calendar,
  ChevronRight,
  Copy,
  CreditCard,
  Loader2,
  Lock,
  Trash2,
  UserRound,
} from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useCredits } from "@/hooks/useCredits";
import { createBillingPortal } from "@/lib/billing";
import { AppShell } from "@/components/layout/AppShell";
import { cn } from "@/lib/utils";

type Tier = "free" | "basic" | "premium" | "enterprise" | "pro" | "vip";

interface SubscriptionRow {
  tier: Tier;
  credits_remaining: number | null;
  status?: string | null;
  current_period_end?: string | null;
  stripe_customer_id?: string | null;
}

interface ProfileRow {
  display_name: string | null;
  email: string | null;
  created_at: string | null;
}

const plans = [
  { id: "free" as const, title: "Free", price: "$0", description: "10 AI scoring credits per day", features: ["10 daily scoring credits", "Standard question access", "Basic progress tracking"] },
  { id: "pro" as const, title: "Pro", price: "$10", duration: "15 days", description: "Unlimited practice and AI scoring for 15 days.", features: ["Unlimited AI scoring", "Unlimited mock tests", "Full practice question bank", "Full test history", "Detailed analytics"] },
  { id: "vip" as const, title: "VIP", price: "$30", duration: "30 days", description: "A full month of practice with live teacher support.", features: ["Unlimited AI scoring", "Unlimited mock tests", "Full practice question bank", "Full test history and analytics", "Live professional teacher support"] },
];

export default function Profile() {
  const { user, loading: authLoading, signOut } = useAuth();
  const { tier, credits, refresh: refreshCredits } = useCredits();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [displayName, setDisplayName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);

  const profile = useQuery<ProfileRow>({
    queryKey: ["profile", user?.id],
    enabled: Boolean(user),
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("display_name, email, created_at")
        .eq("user_id", user!.id)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  const subscription = useQuery<SubscriptionRow>({
    queryKey: ["subscription", user?.id],
    enabled: Boolean(user),
    queryFn: async () => {
      const { data, error } = await supabase
        .from("subscriptions")
        .select("tier, credits_remaining, status, current_period_end, stripe_customer_id")
        .eq("user_id", user!.id)
        .maybeSingle();
      if (error) throw error;
      return (data as SubscriptionRow | null) ?? { tier: "free", credits_remaining: null, status: null, current_period_end: null, stripe_customer_id: null };
    },
  });

  const saveName = useMutation({
    mutationFn: async () => {
      const name = displayName.trim();
      if (!name || name.length > 80) throw new Error("Enter a name between 1 and 80 characters.");
      const { error } = await supabase
        .from("profiles")
        .upsert({ user_id: user!.id, email: user!.email ?? "", display_name: name }, { onConflict: "user_id" });
      if (error) throw error;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["profile", user?.id] });
      setDisplayName("");
      toast.success("Display name updated");
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const changePassword = useMutation({
    mutationFn: async () => {
      if (newPassword.length < 8) throw new Error("Password must be at least 8 characters.");
      if (newPassword !== confirmPassword) throw new Error("Passwords do not match.");
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) throw error;
    },
    onSuccess: async () => {
      setNewPassword("");
      setConfirmPassword("");
      await queryClient.invalidateQueries({ queryKey: ["profile", user?.id] });
      toast.success("Password updated");
    },
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
            <CardTitle>Sign in to view your profile</CardTitle>
            <CardDescription>Your account details and subscription are available after you sign in.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild><Link to="/auth?redirect=%2Fprofile">Continue to sign in</Link></Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  const name = profile.data?.display_name ?? user.user_metadata?.display_name ?? "Learner";
  const email = profile.data?.email ?? user.email ?? "";
  const memberSince = profile.data?.created_at ? new Date(profile.data.created_at).toLocaleDateString(undefined, { year: "numeric", month: "long" }) : null;
  const currentTier = (subscription.data?.tier as Tier) ?? "free";
  const isPaid = currentTier === "pro" || currentTier === "vip";
  const planName = currentTier === "vip" ? "VIP" : currentTier === "pro" ? "Pro" : "Free";
  const periodEnd = subscription.data?.current_period_end ? new Date(subscription.data.current_period_end).toLocaleDateString() : null;
  const statusLabel = subscription.data?.status ?? (isPaid ? "active" : "active");

  return (
    <AppShell>
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-bold tracking-tight">Account profile</h1>
            <p className="text-muted-foreground">Manage your personal details, subscription, and account settings.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" asChild><Link to="/dashboard"><ArrowLeft data-icon="inline-start" />Dashboard</Link></Button>
            <Button variant="outline" asChild><Link to="/billing"><CreditCard data-icon="inline-start" />Billing & subscription</Link></Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Personal details */}
          <div className="lg:col-span-7">
            <Card>
              <CardHeader>
                <CardTitle>Personal details</CardTitle>
                <CardDescription>Your name is shown across your learning dashboard.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex flex-col items-center text-center lg:flex-col lg:items-start lg:text-left">
                  <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 lg:mb-0 lg:mr-4">
                    <UserRound className="h-8 w-8" />
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-end gap-4 lg:gap-0">
                    <div className="flex flex-col">
                      <p className="font-semibold text-foreground">{name}</p>
                      <p className="text-xs text-muted-foreground">{email}</p>
                    </div>
                    <Button variant="outline" size="sm" className="hidden lg:inline-flex">
                      <Copy className="h-4 w-4 mr-1.5" />Copy email
                    </Button>
                  </div>
                </div>

                {profile.isPending ? (
                  <div className="h-8 flex items-center justify-center"><div className="h-4 w-4 animate-pulse rounded-full bg-muted" /></div>
                ) : (
                  <form className="flex flex-col gap-4" onSubmit={(event) => { event.preventDefault(); saveName.mutate(); }}>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="profile-name">Display name</Label>
                        <Input
                          id="profile-name"
                          autoComplete="name"
                          maxLength={80}
                          value={displayName || name}
                          onChange={(event) => setDisplayName(event.target.value)}
                          placeholder={name}
                        />
                        <p className="text-xs text-muted-foreground">Shown to other learners and on certificates.</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="profile-email">Email address</Label>
                        <Input id="profile-email" type="email" value={email} readOnly />
                        <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(email)}>
                          <Copy className="h-4 w-4 mr-1.5" />Copy
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 shrink-0" />
                        <span>Member since {memberSince ?? "—"}</span>
                      </div>
                    </div>
                    <Button type="submit" disabled={saveName.isPending || !displayName.trim()}>
                      {saveName.isPending ? <Loader2 className="animate-spin mr-2" data-icon="inline-start" /> : null}Save name
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Subscription & plan */}
          <div className="lg:col-span-5">
            <Card className={cn("border-primary/30 bg-gradient-to-br from-primary/10 via-card to-accent/10", isPaid ? "shadow-lg" : "")}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Subscription & plan
                </CardTitle>
                <CardDescription>Your current pack and billing access.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Current plan</p>
                    <div className="flex items-center gap-2">
                      <h2 className="font-display text-2xl font-bold">{planName}</h2>
                      <Badge variant={isPaid ? "default" : "secondary"}>{isPaid ? "Active pack" : "Free tier"}</Badge>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {isPaid ? "Unlimited AI scoring and mock tests" : `${credits} AI scoring credits available`}
                </p>
                {periodEnd && <p className="text-sm text-muted-foreground">Pack ends <span className="font-medium">{periodEnd}</span></p>}
                <div className="grid gap-3 md:grid-cols-2">
                  <Button variant="outline" onClick={() => portal.mutate()} disabled={portal.isPending} className="w-full">
                    {portal.isPending ? <Loader2 className="animate-spin" data-icon="inline-start" /> : <CreditCard className="h-4 w-4 mr-1.5" data-icon="inline-start" />}
                    Manage subscription
                  </Button>
                  <Button variant="outline" asChild className="w-full"><Link to="/billing"><ArrowRight data-icon="inline-start" />Billing history</Link></Button>
                </div>
              </CardContent>
            </Card>

            {/* Change plan */}
            <Card>
              <CardHeader>
                <CardTitle>Change your plan</CardTitle>
                <CardDescription>Upgrade or switch your access pack at any time.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {plans.map((plan) => {
                  const isCurrent = currentTier === plan.id;
                  return (
                    <Card
                      key={plan.id}
                      className={cn(
                        "border p-3 flex items-center gap-3 cursor-pointer select-none hover:bg-muted/50 transition-colors",
                        isCurrent ? "border-primary bg-primary/50" : "border-border",
                      )}
                      onClick={() => navigate(`/billing?plan=${plan.id}`)}
                    >
                      <div className="shrink-0">
                        <Badge variant={isCurrent ? "default" : "secondary"} className="text-xs">
                          {isCurrent ? "Current" : plan.price}
                        </Badge>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-foreground line-clamp-1">{plan.title}</p>
                        <p className="text-xs text-muted-foreground truncate">{plan.description}</p>
                      </div>
                      <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </Card>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Preferences */}
          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
              <CardDescription>Language and notification options.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="pref-language">Preferred language</Label>
                <Select defaultValue="en" onValueChange={() => {}}>
                  <SelectTrigger>
                    <SelectValue placeholder="English" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/50 text-sm">
                <Switch defaultChecked />
                <span>Email notifications</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/50 text-sm">
                <Switch defaultChecked={false} />
                <span>Product updates & offers</span>
              </div>
            </CardContent>
          </Card>

          {/* Security */}
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>Update your account password.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form className="flex flex-col gap-3" onSubmit={(event) => { event.preventDefault(); changePassword.mutate(); }}>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="security-password">New password</Label>
                  <Input id="security-password" type="password" minLength={8} value={newPassword} onChange={(event) => setNewPassword(event.target.value)} />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="security-confirm">Confirm password</Label>
                  <Input id="security-confirm" type="password" minLength={8} value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
                </div>
                <Button type="submit" disabled={changePassword.isPending} className="w-full">
                  {changePassword.isPending ? <Loader2 className="animate-spin" data-icon="inline-start" /> : <Lock className="h-4 w-4 mr-2" data-icon="inline-start" />}Update password
                </Button>
              </form>
              <p className="text-xs text-muted-foreground">Changing your password signs out all other active sessions.</p>
            </CardContent>
          </Card>

          {/* Data export placeholder */}
          <Card>
            <CardHeader>
              <CardTitle>Data & privacy</CardTitle>
              <CardDescription>Export your learning data or close your account.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full" disabled>
                <Copy className="h-4 w-4 mr-2" data-icon="inline-start" />Export learning data
              </Button>
              <AlertDialog open={deleteOpen} onOpenChange={setDeleteOpen}>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" className="w-full">
                    <Trash2 className="h-4 w-4 mr-2" data-icon="inline-start" />Close account
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Close your account</AlertDialogTitle>
                    <AlertDialogDescription>This permanently deletes your profile and learning history. This action cannot be undone.</AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Keep account</AlertDialogCancel>
                    <AlertDialogAction onClick={() => { signOut(); toast.error("Account closure requests go to support@pedagogists.com"); setDeleteOpen(false); }} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                      Contact support
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
