import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  ArrowLeft,
  ArrowRight,
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

type Tier =
  | "free"
  | "basic"
  | "premium"
  | "enterprise"
  | "pro"
  | "vip";

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
  {
    id: "free" as const,
    title: "Free",
    price: "$0",
    description: "10 AI scoring credits per day",
    features: [
      "10 daily scoring credits",
      "Standard question access",
      "Basic progress tracking",
    ],
  },
  {
    id: "pro" as const,
    title: "Pro",
    price: "$10",
    duration: "15 days",
    description: "Unlimited practice and AI scoring for 15 days.",
    features: [
      "Unlimited AI scoring",
      "Unlimited mock tests",
      "Full practice question bank",
      "Full test history",
      "Detailed analytics",
    ],
  },
  {
    id: "vip" as const,
    title: "VIP",
    price: "$30",
    duration: "30 days",
    description: "A full month of practice with live teacher support.",
    features: [
      "Unlimited AI scoring",
      "Unlimited mock tests",
      "Full practice question bank",
      "Full test history and analytics",
      "Live professional teacher support",
    ],
  },
];

export default function Profile() {
  const {
    user,
    loading: authLoading,
  } = useAuth();

  const { credits } = useCredits();

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [displayName, setDisplayName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);

  // Fetch profile information.
  const profile = useQuery<ProfileRow | null>({
    queryKey: ["profile", user?.id],
    enabled: Boolean(user),
    queryFn: async () => {
      if (!user) throw new Error("User not authenticated");

      const { data, error } = await supabase
        .from("profiles")
        .select("display_name, email, created_at")
        .eq("user_id", user.id)
        .maybeSingle();

      if (error) throw error;
      return data;
    },
  });

  // Fetch subscription information.
  const subscription = useQuery<SubscriptionRow>({
    queryKey: ["subscription", user?.id],
    enabled: Boolean(user),
    queryFn: async () => {
      if (!user) throw new Error("User not authenticated");

      const { data, error } = await supabase
        .from("subscriptions")
        .select(
          "tier, credits_remaining, status, current_period_end, stripe_customer_id"
        )
        .eq("user_id", user.id)
        .maybeSingle();

      if (error) throw error;

      return (
        (data as SubscriptionRow | null) ?? {
          tier: "free",
          credits_remaining: null,
          status: "active",
          current_period_end: null,
          stripe_customer_id: null,
        }
      );
    },
  });

  // Initialize the editable display name after the profile loads.
  useEffect(() => {
    if (profile.data?.display_name) {
      setDisplayName(profile.data.display_name);
    } else if (user?.user_metadata?.display_name) {
      setDisplayName(user.user_metadata.display_name);
    } else if (profile.isSuccess) {
      setDisplayName("");
    }
  }, [profile.data, profile.isSuccess, user]);

  // Save display name.
  const saveName = useMutation({
    mutationFn: async () => {
      if (!user) throw new Error("Please sign in first.");

      const name = displayName.trim();

      if (!name || name.length > 80) {
        throw new Error("Enter a name between 1 and 80 characters.");
      }

      const { error } = await supabase
        .from("profiles")
        .upsert(
          {
            user_id: user.id,
            email: user.email ?? "",
            display_name: name,
          },
          { onConflict: "user_id" }
        );

      if (error) throw error;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["profile", user?.id],
      });
      toast.success("Display name updated successfully.");
    },
    onError: (error: Error) => toast.error(error.message),
  });

  // Update password.
  const changePassword = useMutation({
    mutationFn: async () => {
      if (newPassword.length < 8) {
        throw new Error("Password must be at least 8 characters.");
      }

      if (newPassword !== confirmPassword) {
        throw new Error("Passwords do not match.");
      }

      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) throw error;
    },
    onSuccess: () => {
      setNewPassword("");
      setConfirmPassword("");
      toast.success("Password updated successfully.");
    },
    onError: (error: Error) => toast.error(error.message),
  });

  // Open the billing portal.
  const portal = useMutation({
    mutationFn: createBillingPortal,
    onSuccess: ({ url }) => {
      if (!url) {
        toast.error("Billing portal URL was not returned.");
        return;
      }

      window.location.assign(url);
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const email = profile.data?.email ?? user?.email ?? "";

  const copyEmail = async () => {
    if (!email) {
      toast.error("No email address available.");
      return;
    }

    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email copied successfully.");
    } catch {
      toast.error("Unable to copy email.");
    }
  };

  // Wait for authentication before rendering user-dependent content.
  if (authLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">
            Loading your account...
          </p>
        </div>
      </main>
    );
  }

  // Show sign-in prompt when there is no authenticated user.
  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle>Sign in to view your profile</CardTitle>
            <CardDescription>
              Your account details and subscription are available after you sign in.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link to="/auth?redirect=%2Fprofile">
                Continue to sign in
              </Link>
            </Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  const name =
    profile.data?.display_name ??
    user.user_metadata?.display_name ??
    "Learner";

  const memberSince = profile.data?.created_at
    ? new Date(profile.data.created_at).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
      })
    : null;

  const currentTier: Tier = subscription.data?.tier ?? "free";
  const isPaid = currentTier === "pro" || currentTier === "vip";

  const planName =
    currentTier === "vip"
      ? "VIP"
      : currentTier === "pro"
        ? "Pro"
        : currentTier === "free"
          ? "Free"
          : currentTier.charAt(0).toUpperCase() + currentTier.slice(1);

  const periodEnd = subscription.data?.current_period_end
    ? new Date(subscription.data.current_period_end).toLocaleDateString()
    : null;

  return (
    <AppShell>
      <div className="mx-auto max-w-6xl">
        {/* Page header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-bold tracking-tight">
              Account profile
            </h1>
            <p className="text-muted-foreground">
              Manage your personal details, subscription, and account settings.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="ghost" asChild>
              <Link to="/dashboard">
                <ArrowLeft data-icon="inline-start" />
                Dashboard
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/billing">
                <CreditCard data-icon="inline-start" />
                Billing & subscription
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Personal details */}
          <div className="lg:col-span-7">
            <Card>
              <CardHeader>
                <CardTitle>Personal details</CardTitle>
                <CardDescription>
                  Your name is shown across your learning dashboard.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-5">
                <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left">
                  <div className="mb-4 flex size-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary lg:mb-0 lg:mr-4">
                    <UserRound className="h-8 w-8" />
                  </div>

                  <div className="flex min-w-0 flex-col">
                    <p className="font-semibold text-foreground">{name}</p>
                    <p className="text-xs text-muted-foreground">{email}</p>

                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-2 w-fit"
                      onClick={copyEmail}
                    >
                      <Copy className="mr-1.5 h-4 w-4" />
                      Copy email
                    </Button>
                  </div>
                </div>

                {profile.isPending ? (
                  <div className="flex h-12 items-center justify-center">
                    <Loader2 className="h-5 w-5 animate-spin text-primary" />
                  </div>
                ) : profile.isError ? (
                  <div className="space-y-3">
                    <p className="text-sm text-destructive">
                      Unable to load your profile.
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => profile.refetch()}
                    >
                      Retry
                    </Button>
                  </div>
                ) : (
                  <form
                    className="flex flex-col gap-4"
                    onSubmit={(event) => {
                      event.preventDefault();
                      saveName.mutate();
                    }}
                  >
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="profile-name">Display name</Label>
                        <Input
                          id="profile-name"
                          autoComplete="name"
                          maxLength={80}
                          value={displayName}
                          onChange={(event) =>
                            setDisplayName(event.target.value)
                          }
                          placeholder="Enter your name"
                        />
                        <p className="text-xs text-muted-foreground">
                          Shown to other learners and on certificates.
                        </p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <Label htmlFor="profile-email">Email address</Label>
                        <Input
                          id="profile-email"
                          type="email"
                          value={email}
                          readOnly
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={copyEmail}
                        >
                          <Copy className="mr-1.5 h-4 w-4" />
                          Copy
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 shrink-0" />
                      <span>Member since {memberSince ?? "—"}</span>
                    </div>

                    <Button
                      type="submit"
                      disabled={saveName.isPending || !displayName.trim()}
                    >
                      {saveName.isPending && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      Save name
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Subscription and plans */}
          <div className="space-y-6 lg:col-span-5">
            <Card
              className={cn(
                "border-primary/30 bg-gradient-to-br from-primary/10 via-card to-accent/10",
                isPaid && "shadow-lg"
              )}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Subscription & plan
                </CardTitle>
                <CardDescription>
                  Your current pack and billing access.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {subscription.isPending ? (
                  <div className="flex justify-center py-6">
                    <Loader2 className="h-6 w-6 animate-spin text-primary" />
                  </div>
                ) : subscription.isError ? (
                  <div className="space-y-3">
                    <p className="text-sm text-destructive">
                      Unable to load subscription details.
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => subscription.refetch()}
                    >
                      Retry
                    </Button>
                  </div>
                ) : (
                  <>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Current plan
                      </p>
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="font-display text-2xl font-bold">
                          {planName}
                        </h2>
                        <Badge variant={isPaid ? "default" : "secondary"}>
                          {isPaid ? "Active pack" : "Free tier"}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {isPaid
                        ? "Unlimited AI scoring and mock tests"
                        : `${credits} AI scoring credits available`}
                    </p>

                    {periodEnd && (
                      <p className="text-sm text-muted-foreground">
                        Pack ends{" "}
                        <span className="font-medium text-foreground">
                          {periodEnd}
                        </span>
                      </p>
                    )}

                    {subscription.data?.status && (
                      <p className="text-xs text-muted-foreground">
                        Status: {subscription.data.status}
                      </p>
                    )}

                    <div className="grid gap-3 md:grid-cols-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => portal.mutate()}
                        disabled={portal.isPending}
                        className="w-full"
                      >
                        {portal.isPending ? (
                          <Loader2
                            className="animate-spin"
                            data-icon="inline-start"
                          />
                        ) : (
                          <CreditCard
                            className="mr-1.5 h-4 w-4"
                            data-icon="inline-start"
                          />
                        )}
                        Manage subscription
                      </Button>

                      <Button
                        type="button"
                        variant="outline"
                        asChild
                        className="w-full"
                      >
                        <Link to="/billing">
                          <ArrowRight data-icon="inline-start" />
                          Billing history
                        </Link>
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Change plan */}
            <Card>
              <CardHeader>
                <CardTitle>Change your plan</CardTitle>
                <CardDescription>
                  Upgrade or switch your access pack at any time.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                {plans.map((plan) => {
                  const isCurrent = currentTier === plan.id;

                  return (
                    <button
                      key={plan.id}
                      type="button"
                      disabled={subscription.isError || subscription.isPending}
                      onClick={() => navigate(`/billing?plan=${plan.id}`)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-colors hover:bg-muted/50 disabled:cursor-not-allowed disabled:opacity-60",
                        isCurrent
                          ? "border-primary bg-primary/10"
                          : "border-border"
                      )}
                    >
                      <div className="shrink-0">
                        <Badge
                          variant={isCurrent ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {isCurrent ? "Current" : plan.price}
                        </Badge>
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-foreground">
                          {plan.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {plan.description}
                        </p>
                        {plan.duration && (
                          <p className="mt-1 text-xs text-muted-foreground">
                            Duration: {plan.duration}
                          </p>
                        )}
                      </div>

                      <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </button>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Account settings */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Preferences */}
          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
              <CardDescription>
                Language and notification options.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="pref-language">Preferred language</Label>
                <Select defaultValue="en" onValueChange={() => {}}>
                  <SelectTrigger id="pref-language">
                    <SelectValue placeholder="English" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-2 text-sm">
                <Switch defaultChecked />
                <span>Email notifications</span>
              </div>

              <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-2 text-sm">
                <Switch defaultChecked={false} />
                <span>Product updates & offers</span>
              </div>
            </CardContent>
          </Card>

          {/* Security */}
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>
                Update your account password.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <form
                className="flex flex-col gap-3"
                onSubmit={(event) => {
                  event.preventDefault();
                  changePassword.mutate();
                }}
              >
                <div className="flex flex-col gap-2">
                  <Label htmlFor="security-password">New password</Label>
                  <Input
                    id="security-password"
                    type="password"
                    minLength={8}
                    autoComplete="new-password"
                    value={newPassword}
                    onChange={(event) =>
                      setNewPassword(event.target.value)
                    }
                    placeholder="Minimum 8 characters"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="security-confirm">
                    Confirm password
                  </Label>
                  <Input
                    id="security-confirm"
                    type="password"
                    minLength={8}
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(event) =>
                      setConfirmPassword(event.target.value)
                    }
                    placeholder="Confirm new password"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={
                    changePassword.isPending ||
                    !newPassword ||
                    !confirmPassword
                  }
                  className="w-full"
                >
                  {changePassword.isPending ? (
                    <Loader2
                      className="animate-spin"
                      data-icon="inline-start"
                    />
                  ) : (
                    <Lock
                      className="mr-2 h-4 w-4"
                      data-icon="inline-start"
                    />
                  )}
                  Update password
                </Button>
              </form>

              <p className="text-xs text-muted-foreground">
                Changing your password may affect other active sessions.
              </p>
            </CardContent>
          </Card>

          {/* Data and privacy */}
          <Card>
            <CardHeader>
              <CardTitle>Data & privacy</CardTitle>
              <CardDescription>
                Export your learning data or request account closure.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                disabled
              >
                <Copy
                  className="mr-2 h-4 w-4"
                  data-icon="inline-start"
                />
                Export learning data
              </Button>

              <AlertDialog
                open={deleteOpen}
                onOpenChange={setDeleteOpen}
              >
                <AlertDialogTrigger asChild>
                  <Button
                    type="button"
                    variant="destructive"
                    className="w-full"
                  >
                    <Trash2
                      className="mr-2 h-4 w-4"
                      data-icon="inline-start"
                    />
                    Close account
                  </Button>
                </AlertDialogTrigger>

                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Request account closure
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Account closure is handled by our support team.
                      Your account and learning history will not be deleted
                      by simply signing out.
                    </AlertDialogDescription>
                  </AlertDialogHeader>

                  <AlertDialogFooter>
                    <AlertDialogCancel>
                      Keep account
                    </AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => {
                        setDeleteOpen(false);
                        window.location.href =
                          "mailto:support@pedagogists.com?subject=Account%20Closure%20Request";
                      }}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
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
