-- Interview Prep — Neon database schema
-- Run with: psql $DATABASE_URL -f scripts/schema.sql

CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  image TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  category TEXT NOT NULL CHECK (category IN ('lessons', 'problems', 'interviewQuestions')),
  lesson_slug TEXT NOT NULL,
  module_slug TEXT NOT NULL,
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, category, lesson_slug)
);

CREATE TABLE IF NOT EXISTS user_bookmarks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('lesson', 'problem', 'interview', 'cheatsheet')),
  slug TEXT NOT NULL,
  title TEXT NOT NULL,
  course_slug TEXT NOT NULL,
  module_slug TEXT NOT NULL,
  added_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, type, slug)
);

CREATE TABLE IF NOT EXISTS user_last_path (
  user_id TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  path TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_user_progress_user ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_bookmarks_user ON user_bookmarks(user_id);
