import type { ApiRequest, ApiResponse } from "../../src/server/stripe-billing.js";
import { getAdminClient, getUserId, getStripe, readJsonBody, sendError, tierForPlan } from "../../src/server/stripe-billing.js";

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "POST") return sendError(res, 405, "Method not allowed");
  try {
    const stripe = getStripe();
    const userId = await getUserId(req);
    if (!userId) return sendError(res, 401, "Sign in to verify your purchase");

    const { sessionId } = readJsonBody(req);
    if (typeof sessionId !== "string" || !/^cs_(test|live)_[A-Za-z0-9_-]+$/.test(sessionId)) {
      return sendError(res, 400, "Invalid checkout session");
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.client_reference_id !== userId || session.metadata?.user_id !== userId) {
      return sendError(res, 403, "This checkout session belongs to another account");
    }
    if (
      session.status !== "complete"
      || session.mode !== "payment"
      || !["paid", "no_payment_required"].includes(session.payment_status)
    ) {
      return sendError(res, 409, "Checkout has not been completed");
    }

    const plan = tierForPlan(session.metadata?.plan ?? "");
    const customerId = typeof session.customer === "string" ? session.customer : session.customer?.id;
    if (!plan || !customerId) return sendError(res, 400, "Checkout payment details are incomplete");

    const admin = getAdminClient();
    const { data: activated, error } = await admin.rpc("activate_paid_pack", {
      p_user_id: userId,
      p_session_id: session.id,
      p_tier: plan.tier,
      p_customer_id: customerId,
      p_duration_days: plan.durationDays,
    });
    if (error) throw error;

    return res.status(200).json({ verified: activated === true, tier: plan.tier, status: "active" });
  } catch (error) {
    console.error("Stripe checkout verification failed", error);
    return sendError(res, 500, "Unable to verify the checkout session");
  }
}
