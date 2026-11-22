import { supabase } from "@/integrations/supabase/client";

export interface BillingReceipt {
  session_id: string;
  created_at: string;
  plan?: string | null;
  tier?: string | null;
  amount?: number | null;
  currency?: string | null;
  status?: string | null;
  customer_email?: string | null;
}

async function billingRequest<T>(path: string, body: Record<string, unknown>): Promise<T> {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.access_token) throw new Error("Please sign in to manage billing.");

  const response = await fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.access_token}`,
      "Idempotency-Key": crypto.randomUUID(),
    },
    body: JSON.stringify(body),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error((result as { error?: string }).error || "Billing request failed.");
  return result as T;
}

export async function createCheckout(plan: "pro" | "vip") {
  return billingRequest<{ url: string }>("/api/stripe/checkout", { plan });
}

export async function verifyCheckout(sessionId: string) {
  return billingRequest<{ verified: boolean; tier: string; status: string }>("/api/stripe/verify-checkout", { sessionId });
}

export async function createBillingPortal() {
  return billingRequest<{ url: string }>("/api/stripe/portal", {});
}

export async function fetchReceipts(): Promise<BillingReceipt[]> {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.access_token) throw new Error("Please sign in to view purchase history.");

  const response = await fetch("/api/stripe/receipts", {
    headers: {
      Authorization: `Bearer ${session.access_token}`,
    },
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error((result as { error?: string }).error || "Failed to load purchase history.");
  return (result as { receipts?: BillingReceipt[] }).receipts ?? [];
}
