UPDATE public.subscriptions
SET
  tier = CASE
    WHEN current_period_end > now() THEN 'pro'::public.subscription_tier
    ELSE 'free'::public.subscription_tier
  END,
  credits_remaining = CASE
    WHEN current_period_end > now() THEN 0
    ELSE 10
  END,
  daily_credits_used = 0,
  updated_at = now()
WHERE tier = 'premium';
