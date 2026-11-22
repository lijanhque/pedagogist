ALTER TYPE public.question_type ADD VALUE IF NOT EXISTS 'describe_image';
ALTER TYPE public.question_type ADD VALUE IF NOT EXISTS 'summarize_written_text_core';
ALTER TYPE public.question_type ADD VALUE IF NOT EXISTS 'write_email';

ALTER TABLE public.questions
  ADD COLUMN IF NOT EXISTS section TEXT CHECK (section IN ('speaking', 'writing', 'reading', 'listening')),
  ADD COLUMN IF NOT EXISTS title TEXT,
  ADD COLUMN IF NOT EXISTS instruction TEXT,
  ADD COLUMN IF NOT EXISTS content JSONB NOT NULL DEFAULT '{}'::JSONB,
  ADD COLUMN IF NOT EXISTS time_limit INTEGER,
  ADD COLUMN IF NOT EXISTS prep_time INTEGER,
  ADD COLUMN IF NOT EXISTS record_time INTEGER,
  ADD COLUMN IF NOT EXISTS min_words INTEGER,
  ADD COLUMN IF NOT EXISTS max_words INTEGER,
  ADD COLUMN IF NOT EXISTS audio_play_limit INTEGER,
  ADD COLUMN IF NOT EXISTS is_practice_bank BOOLEAN NOT NULL DEFAULT FALSE;

CREATE INDEX IF NOT EXISTS idx_practice_bank_section_type_id
  ON public.questions (section, question_type, id)
  WHERE is_practice_bank = TRUE;
