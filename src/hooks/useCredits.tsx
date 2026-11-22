import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";

interface CreditsContextValue {
  credits: number;
  tier: string;
  loading: boolean;
  refresh: () => Promise<void>;
  optimisticallySpendOne: () => void;
}

const FREE_DAILY_CREDITS = 10;
const CreditsContext = createContext<CreditsContextValue | null>(null);

function isPackTier(tier: string | null | undefined) {
  return tier === "pro" || tier === "vip";
}

function hasActivePack(tier: string | null | undefined, periodEnd: string | null | undefined) {
  if (!isPackTier(tier) || !periodEnd) return false;
  const endTime = Date.parse(periodEnd);
  return Number.isFinite(endTime) && endTime > Date.now();
}

export function CreditsProvider({ children }: { children: ReactNode }) {
  const { user, loading: authLoading } = useAuth();
  const [credits, setCredits] = useState(0);
  const [tier, setTier] = useState("free");
  const [packEndsAt, setPackEndsAt] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchCredits = useCallback(async () => {
    if (authLoading) return;
    if (!user) {
      setTier("free");
      setCredits(FREE_DAILY_CREDITS);
      setPackEndsAt(null);
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("subscriptions")
      .select("credits_remaining, tier, current_period_end")
      .eq("user_id", user.id)
      .maybeSingle();
    if (!error) {
      const activePack = hasActivePack(data?.tier, data?.current_period_end);
      const inactivePack = isPackTier(data?.tier) && !activePack;
      const nextTier = activePack ? data?.tier ?? "free" : inactivePack ? "free" : data?.tier ?? "free";
      setTier(nextTier);
      setCredits(activePack ? Number.POSITIVE_INFINITY : inactivePack ? FREE_DAILY_CREDITS : data?.credits_remaining ?? FREE_DAILY_CREDITS);
      setPackEndsAt(activePack ? data?.current_period_end ?? null : null);
    }
    setLoading(false);
  }, [authLoading, user]);

  const optimisticallySpendOne = useCallback(() => {
    setCredits((current) => Math.max(0, current - 1));
  }, []);

  useEffect(() => { void fetchCredits(); }, [fetchCredits]);

  useEffect(() => {
    if (!user) return;
    const channel = supabase
      .channel(`subs-${user.id}`)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "subscriptions", filter: `user_id=eq.${user.id}` },
        (payload) => {
          if (payload.new) {
            const subscription = payload.new as { credits_remaining?: number; tier?: string; current_period_end?: string | null };
            const activePack = hasActivePack(subscription.tier, subscription.current_period_end);
            const inactivePack = isPackTier(subscription.tier) && !activePack;
            if (subscription.tier) setTier(activePack ? subscription.tier : inactivePack ? "free" : subscription.tier);
            if (activePack) setCredits(Number.POSITIVE_INFINITY);
            else if (inactivePack) setCredits(FREE_DAILY_CREDITS);
            else if (subscription.credits_remaining != null) setCredits(subscription.credits_remaining);
            setPackEndsAt(activePack ? subscription.current_period_end ?? null : null);
          }
        },
      )
      .subscribe();
    return () => { void supabase.removeChannel(channel); };
  }, [user]);

  useEffect(() => {
    if (!packEndsAt) return;
    const remaining = Math.max(0, Date.parse(packEndsAt) - Date.now() + 50);
    const timeout = window.setTimeout(() => { void fetchCredits(); }, Math.min(remaining, 2_147_000_000));
    return () => window.clearTimeout(timeout);
  }, [fetchCredits, packEndsAt]);

  return (
    <CreditsContext.Provider value={{ credits, tier, loading, refresh: fetchCredits, optimisticallySpendOne }}>
      {children}
    </CreditsContext.Provider>
  );
}

export function useCredits() {
  const context = useContext(CreditsContext);
  if (!context) throw new Error("useCredits must be used within a CreditsProvider");
  return context;
}
