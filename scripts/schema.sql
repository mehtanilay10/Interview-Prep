-- Interview Prep — PostgreSQL schema generated from Prisma
-- Run with: psql "$DATABASE_URL" -f scripts/schema.sql

CREATE SCHEMA IF NOT EXISTS "public";

DO $$
BEGIN
  CREATE TYPE "ProgressCategory" AS ENUM ('lessons', 'problems', 'interviewQuestions');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

DO $$
BEGIN
  CREATE TYPE "BookmarkType" AS ENUM ('lesson', 'problem', 'interview', 'cheatsheet');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

DO $$
BEGIN
  CREATE TYPE "UserTheme" AS ENUM ('light', 'dark', 'system');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

CREATE TABLE IF NOT EXISTS "users" (
  "id" TEXT NOT NULL,
  "email" TEXT,
  "email_verified" TIMESTAMPTZ(6),
  "name" TEXT,
  "image" TEXT,
  "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "users" ALTER COLUMN "email" DROP NOT NULL;
ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "email_verified" TIMESTAMPTZ(6);

CREATE TABLE IF NOT EXISTS "accounts" (
  "user_id" TEXT NOT NULL,
  "type" TEXT NOT NULL,
  "provider" TEXT NOT NULL,
  "provider_account_id" TEXT NOT NULL,
  "refresh_token" TEXT,
  "access_token" TEXT,
  "expires_at" INTEGER,
  "token_type" TEXT,
  "scope" TEXT,
  "id_token" TEXT,
  "session_state" TEXT,
  CONSTRAINT "accounts_pkey" PRIMARY KEY ("provider", "provider_account_id")
);

CREATE TABLE IF NOT EXISTS "sessions" (
  "session_token" TEXT NOT NULL,
  "user_id" TEXT NOT NULL,
  "expires" TIMESTAMPTZ(6) NOT NULL,
  CONSTRAINT "sessions_pkey" PRIMARY KEY ("session_token")
);

CREATE TABLE IF NOT EXISTS "verification_tokens" (
  "identifier" TEXT NOT NULL,
  "token" TEXT NOT NULL,
  "expires" TIMESTAMPTZ(6) NOT NULL,
  CONSTRAINT "verification_tokens_pkey" PRIMARY KEY ("identifier", "token")
);

CREATE TABLE IF NOT EXISTS "authenticators" (
  "credential_id" TEXT NOT NULL,
  "user_id" TEXT NOT NULL,
  "provider_account_id" TEXT NOT NULL,
  "credential_public_key" TEXT NOT NULL,
  "counter" INTEGER NOT NULL DEFAULT 0,
  "credential_device_type" TEXT NOT NULL,
  "credential_backed_up" BOOLEAN NOT NULL,
  "transports" TEXT,
  CONSTRAINT "authenticators_pkey" PRIMARY KEY ("user_id", "credential_id")
);

CREATE TABLE IF NOT EXISTS "user_progress" (
  "id" UUID NOT NULL,
  "user_id" TEXT NOT NULL,
  "category" "ProgressCategory" NOT NULL,
  "lesson_slug" TEXT NOT NULL,
  "module_slug" TEXT NOT NULL,
  "completed_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "user_progress_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "user_bookmarks" (
  "id" UUID NOT NULL,
  "user_id" TEXT NOT NULL,
  "type" "BookmarkType" NOT NULL,
  "slug" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "course_slug" TEXT NOT NULL,
  "module_slug" TEXT NOT NULL,
  "added_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "user_bookmarks_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "user_last_path" (
  "user_id" TEXT NOT NULL,
  "path" TEXT NOT NULL,
  "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "user_last_path_pkey" PRIMARY KEY ("user_id")
);

CREATE TABLE IF NOT EXISTS "user_theme_preferences" (
  "user_id" TEXT NOT NULL,
  "theme" "UserTheme" NOT NULL,
  "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "user_theme_preferences_pkey" PRIMARY KEY ("user_id")
);

CREATE TABLE IF NOT EXISTS "user_lesson_notes" (
  "id" UUID NOT NULL,
  "user_id" TEXT NOT NULL,
  "course_slug" TEXT NOT NULL,
  "module_slug" TEXT NOT NULL,
  "lesson_slug" TEXT NOT NULL,
  "content" TEXT NOT NULL DEFAULT '',
  "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "user_lesson_notes_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "offline_reading_queue" (
  "id" UUID NOT NULL,
  "user_id" TEXT NOT NULL,
  "course_slug" TEXT NOT NULL,
  "module_slug" TEXT NOT NULL,
  "lesson_slug" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "queued_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "offline_reading_queue_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "users_email_key" ON "users"("email");
CREATE INDEX IF NOT EXISTS "accounts_user_id_idx" ON "accounts"("user_id");
CREATE UNIQUE INDEX IF NOT EXISTS "sessions_session_token_key" ON "sessions"("session_token");
CREATE INDEX IF NOT EXISTS "sessions_user_id_idx" ON "sessions"("user_id");
CREATE UNIQUE INDEX IF NOT EXISTS "authenticators_credential_id_key" ON "authenticators"("credential_id");
CREATE INDEX IF NOT EXISTS "authenticators_user_id_idx" ON "authenticators"("user_id");
CREATE INDEX IF NOT EXISTS "user_progress_user_id_idx" ON "user_progress"("user_id");
CREATE UNIQUE INDEX IF NOT EXISTS "user_progress_user_id_category_lesson_slug_key" ON "user_progress"("user_id", "category", "lesson_slug");
CREATE INDEX IF NOT EXISTS "user_bookmarks_user_id_idx" ON "user_bookmarks"("user_id");
CREATE UNIQUE INDEX IF NOT EXISTS "user_bookmarks_user_id_type_slug_key" ON "user_bookmarks"("user_id", "type", "slug");
CREATE INDEX IF NOT EXISTS "user_lesson_notes_user_id_idx" ON "user_lesson_notes"("user_id");
CREATE UNIQUE INDEX IF NOT EXISTS "user_lesson_notes_user_id_course_slug_module_slug_lesson_sl_key" ON "user_lesson_notes"("user_id", "course_slug", "module_slug", "lesson_slug");
CREATE INDEX IF NOT EXISTS "offline_reading_queue_user_id_idx" ON "offline_reading_queue"("user_id");
CREATE UNIQUE INDEX IF NOT EXISTS "offline_reading_queue_user_id_course_slug_module_slug_lesso_key" ON "offline_reading_queue"("user_id", "course_slug", "module_slug", "lesson_slug");

DO $$
BEGIN
  ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_fkey"
    FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

DO $$
BEGIN
  ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_fkey"
    FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

DO $$
BEGIN
  ALTER TABLE "authenticators" ADD CONSTRAINT "authenticators_user_id_fkey"
    FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

DO $$
BEGIN
  ALTER TABLE "user_progress" ADD CONSTRAINT "user_progress_user_id_fkey"
    FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

DO $$
BEGIN
  ALTER TABLE "user_bookmarks" ADD CONSTRAINT "user_bookmarks_user_id_fkey"
    FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

DO $$
BEGIN
  ALTER TABLE "user_last_path" ADD CONSTRAINT "user_last_path_user_id_fkey"
    FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

DO $$
BEGIN
  ALTER TABLE "user_theme_preferences" ADD CONSTRAINT "user_theme_preferences_user_id_fkey"
    FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

DO $$
BEGIN
  ALTER TABLE "user_lesson_notes" ADD CONSTRAINT "user_lesson_notes_user_id_fkey"
    FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

DO $$
BEGIN
  ALTER TABLE "offline_reading_queue" ADD CONSTRAINT "offline_reading_queue_user_id_fkey"
    FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;
