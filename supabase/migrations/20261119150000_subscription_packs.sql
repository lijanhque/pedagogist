ALTER TYPE public.subscription_tier ADD VALUE IF NOT EXISTS 'pro';
ALTER TYPE public.subscription_tier ADD VALUE IF NOT EXISTS 'vip';

ALTER TABLE public.subscriptions
  ADD COLUMN IF NOT EXISTS stripe_customer_id text,
  ADD COLUMN IF NOT EXISTS stripe_subscription_id text,
  ADD COLUMN IF NOT EXISTS stripe_checkout_session_id text,
  ADD COLUMN IF NOT EXISTS cancel_at_period_end boolean NOT NULL DEFAULT false;

CREATE TABLE IF NOT EXISTS public.stripe_checkout_receipts (
  session_id text PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.stripe_checkout_receipts ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.stripe_checkout_receipts FROM PUBLIC, anon, authenticated;

CREATE OR REPLACE FUNCTION public.activate_paid_pack(
  p_user_id uuid,
  p_session_id text,
  p_tier text,
  p_customer_id text,
  p_duration_days integer
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_existing_end timestamptz;
  v_start timestamptz;
BEGIN
  IF p_user_id IS NULL OR p_session_id IS NULL OR p_session_id = ''
     OR p_customer_id IS NULL
     OR NOT ((p_tier = 'pro' AND p_duration_days = 15) OR (p_tier = 'vip' AND p_duration_days = 30)) THEN
    RAISE EXCEPTION 'Invalid subscription pack';
  END IF;

  INSERT INTO public.stripe_checkout_receipts (session_id, user_id)
  VALUES (p_session_id, p_user_id)
  ON CONFLICT (session_id) DO NOTHING;

  IF NOT FOUND THEN
    RETURN false;
  END IF;

  SELECT current_period_end
    INTO v_existing_end
  FROM public.subscriptions
  WHERE user_id = p_user_id
    AND tier IN ('pro', 'vip')
    AND current_period_end > now()
  FOR UPDATE;

  v_start := GREATEST(now(), COALESCE(v_existing_end, now()));

  INSERT INTO public.subscriptions (
    user_id,
    tier,
    credits_remaining,
    daily_credits_used,
    status,
    current_period_start,
    current_period_end,
    stripe_customer_id,
    stripe_subscription_id,
    stripe_checkout_session_id,
    cancel_at_period_end,
    updated_at
  )
  VALUES (
    p_user_id,
    p_tier::public.subscription_tier,
    0,
    0,
    'active',
    v_start,
    v_start + make_interval(days => p_duration_days),
    p_customer_id,
    NULL,
    p_session_id,
    false,
    now()
  )
  ON CONFLICT (user_id) DO UPDATE SET
    tier = EXCLUDED.tier,
    credits_remaining = 0,
    daily_credits_used = 0,
    status = 'active',
    current_period_start = EXCLUDED.current_period_start,
    current_period_end = EXCLUDED.current_period_end,
    stripe_customer_id = EXCLUDED.stripe_customer_id,
    stripe_checkout_session_id = EXCLUDED.stripe_checkout_session_id,
    stripe_subscription_id = NULL,
    cancel_at_period_end = false,
    updated_at = now();

  RETURN true;
END;
$$;

REVOKE ALL ON FUNCTION public.activate_paid_pack(uuid, text, text, text, integer) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.activate_paid_pack(uuid, text, text, text, integer) TO service_role;

CREATE OR REPLACE FUNCTION public.consume_ai_score_credit(p_user_id uuid)
RETURNS TABLE(ok boolean, remaining integer, tier text)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_cur integer;
  v_tier text;
  v_period_end timestamptz;
BEGIN
  IF p_user_id IS NULL THEN
    RAISE EXCEPTION 'User required';
  END IF;

  UPDATE public.subscriptions
    SET tier = 'free',
        credits_remaining = 10,
        daily_credits_used = 0,
        current_period_start = NULL,
        current_period_end = NULL,
        updated_at = now()
  WHERE user_id = p_user_id
    AND tier IN ('pro', 'vip')
    AND (current_period_end IS NULL OR current_period_end <= now());

  SELECT s.credits_remaining, s.tier::text, s.current_period_end
    INTO v_cur, v_tier, v_period_end
  FROM public.subscriptions s
  WHERE s.user_id = p_user_id
  FOR UPDATE;

  IF NOT FOUND THEN
    INSERT INTO public.subscriptions (user_id, tier, credits_remaining)
    VALUES (p_user_id, 'free', 10)
    ON CONFLICT (user_id) DO NOTHING;
    SELECT s.credits_remaining, s.tier::text, s.current_period_end
      INTO v_cur, v_tier, v_period_end
    FROM public.subscriptions s
    WHERE s.user_id = p_user_id
    FOR UPDATE;
  END IF;

  IF v_tier IN ('pro', 'vip') AND v_period_end > now() THEN
    RETURN QUERY SELECT true, -1, v_tier;
    RETURN;
  END IF;

  IF COALESCE(v_cur, 0) <= 0 THEN
    RETURN QUERY SELECT false, 0, COALESCE(v_tier, 'free');
    RETURN;
  END IF;

  UPDATE public.subscriptions s
    SET credits_remaining = v_cur - 1, updated_at = now()
  WHERE s.user_id = p_user_id;

  RETURN QUERY SELECT true, v_cur - 1, COALESCE(v_tier, 'free');
END;
$$;

CREATE OR REPLACE FUNCTION public.begin_ai_score_request(p_user_id uuid, p_response_id uuid)
RETURNS TABLE(ok boolean, remaining integer, tier text, already_scored boolean, saved_score jsonb)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_status text;
  v_score jsonb;
  v_remaining integer;
  v_tier text;
  v_period_end timestamptz;
  v_ok boolean;
BEGIN
  IF p_user_id IS NULL OR p_response_id IS NULL THEN
    RAISE EXCEPTION 'User and response are required';
  END IF;

  SELECT pr.status, pr.score
    INTO v_status, v_score
  FROM public.practice_responses pr
  WHERE pr.id = p_response_id AND pr.user_id = p_user_id
  FOR UPDATE;

  IF NOT FOUND THEN
    RETURN QUERY SELECT false, 0, 'free'::text, false, NULL::jsonb;
    RETURN;
  END IF;

  UPDATE public.subscriptions
    SET tier = 'free',
        credits_remaining = 10,
        daily_credits_used = 0,
        current_period_start = NULL,
        current_period_end = NULL,
        updated_at = now()
  WHERE user_id = p_user_id
    AND tier IN ('pro', 'vip')
    AND (current_period_end IS NULL OR current_period_end <= now());

  SELECT s.credits_remaining, s.tier::text, s.current_period_end
    INTO v_remaining, v_tier, v_period_end
  FROM public.subscriptions s
  WHERE s.user_id = p_user_id
  FOR UPDATE;

  IF NOT FOUND THEN
    INSERT INTO public.subscriptions (user_id, tier, credits_remaining)
    VALUES (p_user_id, 'free', 10)
    ON CONFLICT (user_id) DO NOTHING;
    SELECT s.credits_remaining, s.tier::text, s.current_period_end
      INTO v_remaining, v_tier, v_period_end
    FROM public.subscriptions s
    WHERE s.user_id = p_user_id
    FOR UPDATE;
  END IF;

  IF v_status = 'scored' THEN
    RETURN QUERY SELECT true,
      CASE WHEN v_tier IN ('pro', 'vip') AND v_period_end > now() THEN -1 ELSE COALESCE(v_remaining, 0) END,
      COALESCE(v_tier, 'free'), true, v_score;
    RETURN;
  END IF;

  IF v_status <> 'submitted' THEN
    RETURN QUERY SELECT false, COALESCE(v_remaining, 0), COALESCE(v_tier, 'free'), false, NULL::jsonb;
    RETURN;
  END IF;

  IF v_tier IN ('pro', 'vip') AND v_period_end > now() THEN
    UPDATE public.practice_responses
      SET status = 'scoring'
    WHERE id = p_response_id AND user_id = p_user_id;
    RETURN QUERY SELECT true, -1, v_tier, false, NULL::jsonb;
    RETURN;
  END IF;

  IF COALESCE(v_remaining, 0) <= 0 THEN
    RETURN QUERY SELECT false, 0, COALESCE(v_tier, 'free'), false, NULL::jsonb;
    RETURN;
  END IF;

  SELECT credit.ok, credit.remaining, credit.tier
    INTO v_ok, v_remaining, v_tier
  FROM public.consume_ai_score_credit(p_user_id) AS credit;

  IF NOT COALESCE(v_ok, false) THEN
    RETURN QUERY SELECT false, COALESCE(v_remaining, 0), COALESCE(v_tier, 'free'), false, NULL::jsonb;
    RETURN;
  END IF;

  UPDATE public.practice_responses
    SET status = 'scoring'
  WHERE id = p_response_id AND user_id = p_user_id;

  RETURN QUERY SELECT true, v_remaining, COALESCE(v_tier, 'free'), false, NULL::jsonb;
END;
$$;

CREATE OR REPLACE FUNCTION public.refund_ai_score_request(p_user_id uuid, p_response_id uuid)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_remaining integer;
BEGIN
  UPDATE public.practice_responses
    SET status = 'submitted'
  WHERE id = p_response_id AND user_id = p_user_id AND status = 'scoring';

  IF NOT FOUND THEN
    SELECT s.credits_remaining INTO v_remaining
    FROM public.subscriptions s WHERE s.user_id = p_user_id;
    RETURN v_remaining;
  END IF;

  UPDATE public.subscriptions s
    SET credits_remaining = s.credits_remaining + 1,
        updated_at = now()
  WHERE s.user_id = p_user_id
    AND NOT (s.tier IN ('pro', 'vip') AND s.current_period_end > now())
  RETURNING s.credits_remaining INTO v_remaining;

  IF NOT FOUND THEN
    SELECT s.credits_remaining INTO v_remaining
    FROM public.subscriptions s WHERE s.user_id = p_user_id;
  END IF;

  RETURN v_remaining;
END;
$$;

CREATE OR REPLACE FUNCTION public.use_scoring_credit(p_user_id uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_tier text;
  v_period_end timestamptz;
  v_daily_used integer;
  v_daily_limit integer;
BEGIN
  IF p_user_id IS NULL OR p_user_id <> auth.uid() THEN
    RAISE EXCEPTION 'Cannot use credits for another user';
  END IF;

  INSERT INTO public.subscriptions (user_id, tier, credits_remaining)
  VALUES (p_user_id, 'free', 10)
  ON CONFLICT (user_id) DO NOTHING;

  UPDATE public.subscriptions
    SET tier = 'free',
        credits_remaining = 10,
        daily_credits_used = 0,
        current_period_start = NULL,
        current_period_end = NULL,
        updated_at = now()
  WHERE user_id = p_user_id
    AND tier IN ('pro', 'vip')
    AND (current_period_end IS NULL OR current_period_end <= now());

  SELECT tier::text, current_period_end
    INTO v_tier, v_period_end
  FROM public.subscriptions
  WHERE user_id = p_user_id
  FOR UPDATE;

  IF v_tier IN ('pro', 'vip') AND v_period_end > now() THEN
    RETURN true;
  END IF;

  PERFORM public.reset_daily_credits();

  SELECT tier::text, daily_credits_used
    INTO v_tier, v_daily_used
  FROM public.subscriptions
  WHERE user_id = p_user_id
  FOR UPDATE;

  v_daily_limit := CASE v_tier
    WHEN 'free' THEN 10
    WHEN 'basic' THEN 50
    WHEN 'premium' THEN 200
    WHEN 'enterprise' THEN 1000
    ELSE 10
  END;

  IF COALESCE(v_daily_used, 0) >= v_daily_limit THEN
    RETURN false;
  END IF;

  UPDATE public.subscriptions
    SET daily_credits_used = COALESCE(daily_credits_used, 0) + 1,
        updated_at = now()
  WHERE user_id = p_user_id;

  RETURN true;
END;
$$;

REVOKE ALL ON FUNCTION public.consume_ai_score_credit(uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.begin_ai_score_request(uuid, uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.refund_ai_score_request(uuid, uuid) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.consume_ai_score_credit(uuid) TO service_role;
GRANT EXECUTE ON FUNCTION public.begin_ai_score_request(uuid, uuid) TO service_role;
GRANT EXECUTE ON FUNCTION public.refund_ai_score_request(uuid, uuid) TO service_role;
REVOKE ALL ON FUNCTION public.use_scoring_credit(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.use_scoring_credit(uuid) TO authenticated;
