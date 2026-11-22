UPDATE public.subscriptions
SET
  tier = 'pro',
  credits_remaining = 0,
  daily_credits_used = 0,
  updated_at = now()
WHERE tier = 'basic'
  AND current_period_end > now();
