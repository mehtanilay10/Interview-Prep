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

-- ── Video generation pipeline ───────────────────────────────────────────────────────────────────────────────────
-- Append-only mirror of prisma/migrations/20261010093000_video_generation_pipeline.

DO $$
BEGIN
  CREATE TYPE "VideoArea" AS ENUM ('courses', 'problems');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

DO $$
BEGIN
  CREATE TYPE "VideoAssetStatus" AS ENUM ('pending', 'generating', 'awaiting_review', 'approved', 'rejected', 'uploading', 'published', 'failed', 'stale');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

DO $$
BEGIN
  CREATE TYPE "VideoJobStage" AS ENUM ('script', 'voice', 'render', 'qa', 'upload', 'publish');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

DO $$
BEGIN
  CREATE TYPE "VideoJobState" AS ENUM ('pending', 'processing', 'completed', 'failed', 'cancelled');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

DO $$
BEGIN
  CREATE TYPE "VideoPrivacyStatus" AS ENUM ('private', 'unlisted', 'public', 'deleted');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

DO $$
BEGIN
  CREATE TYPE "VideoReviewDecisionKind" AS ENUM ('approved', 'rejected', 'regeneration_requested');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

CREATE TABLE IF NOT EXISTS "video_articles" (
    "id" UUID NOT NULL,
    "area" "VideoArea" NOT NULL,
    "courseSlug" TEXT NOT NULL,
    "moduleSlug" TEXT NOT NULL,
    "lessonSlug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "courseTitle" TEXT,
    "moduleTitle" TEXT,
    "difficulty" TEXT,
    "canonicalUrl" TEXT NOT NULL,
    "contentHash" TEXT NOT NULL,
    "deletedAt" TIMESTAMPTZ(6),
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "video_articles_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "video_assets" (
    "id" UUID NOT NULL,
    "articleId" UUID NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "sourceHash" TEXT NOT NULL,
    "status" "VideoAssetStatus" NOT NULL DEFAULT 'pending',
    "narrative" TEXT NOT NULL,
    "scriptJson" JSONB,
    "scriptHash" TEXT,
    "voiceModel" TEXT,
    "templateVersion" TEXT NOT NULL,
    "durationMs" INTEGER,
    "width" INTEGER,
    "height" INTEGER,
    "fileSizeBytes" BIGINT,
    "qaJson" JSONB,
    "failureCount" INTEGER NOT NULL DEFAULT 0,
    "lastError" TEXT,
    "reviewClaimEmail" TEXT,
    "reviewClaimExpiresAt" TIMESTAMPTZ(6),
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "video_assets_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "video_jobs" (
    "id" UUID NOT NULL,
    "articleId" UUID NOT NULL,
    "assetId" UUID,
    "stage" "VideoJobStage" NOT NULL,
    "state" "VideoJobState" NOT NULL DEFAULT 'pending',
    "kind" TEXT NOT NULL,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "maxAttempts" INTEGER NOT NULL DEFAULT 5,
    "priority" INTEGER NOT NULL DEFAULT 100,
    "leaseOwner" TEXT,
    "leaseExpiresAt" TIMESTAMPTZ(6),
    "notBefore" TIMESTAMPTZ(6),
    "lastError" TEXT,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "video_jobs_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "video_job_attempts" (
    "id" UUID NOT NULL,
    "jobId" UUID NOT NULL,
    "attemptNo" INTEGER NOT NULL,
    "startedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finishedAt" TIMESTAMPTZ(6),
    "outcome" TEXT NOT NULL,
    "errorCode" TEXT,
    "errorMessage" TEXT,
    "metrics" JSONB,

    CONSTRAINT "video_job_attempts_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "video_publications" (
    "id" UUID NOT NULL,
    "assetId" UUID NOT NULL,
    "youtubeVideoId" TEXT NOT NULL,
    "privacyStatus" "VideoPrivacyStatus" NOT NULL DEFAULT 'unlisted',
    "playlistId" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "uploadedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publishedAt" TIMESTAMPTZ(6),
    "lastSyncedAt" TIMESTAMPTZ(6),
    "uploadAttempts" INTEGER NOT NULL DEFAULT 0,
    "removedAt" TIMESTAMPTZ(6),

    CONSTRAINT "video_publications_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "video_review_decisions" (
    "id" UUID NOT NULL,
    "assetId" UUID NOT NULL,
    "reviewerEmail" TEXT NOT NULL,
    "reviewerUserId" TEXT,
    "decision" "VideoReviewDecisionKind" NOT NULL,
    "reason" TEXT,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "video_review_decisions_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "video_pipeline_runs" (
    "id" UUID NOT NULL,
    "kind" TEXT NOT NULL,
    "trigger" TEXT NOT NULL,
    "startedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finishedAt" TIMESTAMPTZ(6),
    "jobsClaimed" INTEGER NOT NULL DEFAULT 0,
    "jobsSucceeded" INTEGER NOT NULL DEFAULT 0,
    "jobsFailed" INTEGER NOT NULL DEFAULT 0,
    "articlesSeen" INTEGER NOT NULL DEFAULT 0,
    "articlesAdded" INTEGER NOT NULL DEFAULT 0,
    "articlesStale" INTEGER NOT NULL DEFAULT 0,
    "llmCalls" INTEGER NOT NULL DEFAULT 0,
    "ttsCalls" INTEGER NOT NULL DEFAULT 0,
    "renderSeconds" INTEGER NOT NULL DEFAULT 0,
    "uploads" INTEGER NOT NULL DEFAULT 0,
    "skipped" INTEGER NOT NULL DEFAULT 0,
    "error" TEXT,
    "metrics" JSONB,

    CONSTRAINT "video_pipeline_runs_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "video_pipeline_settings" (
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "video_pipeline_settings_pkey" PRIMARY KEY ("key")
);

DO $$
BEGIN
  CREATE INDEX "video_articles_area_courseSlug_idx" ON "video_articles"("area", "courseSlug");
EXCEPTION
  WHEN duplicate_table THEN NULL;
END
$$;

DO $$
BEGIN
  CREATE INDEX "video_articles_deletedAt_idx" ON "video_articles"("deletedAt");
EXCEPTION
  WHEN duplicate_table THEN NULL;
END
$$;

DO $$
BEGIN
  CREATE UNIQUE INDEX "video_articles_area_courseSlug_moduleSlug_lessonSlug_key" ON "video_articles"("area", "courseSlug", "moduleSlug", "lessonSlug");
EXCEPTION
  WHEN duplicate_table THEN NULL;
END
$$;

DO $$
BEGIN
  CREATE INDEX "video_assets_status_createdAt_idx" ON "video_assets"("status", "createdAt");
EXCEPTION
  WHEN duplicate_table THEN NULL;
END
$$;

DO $$
BEGIN
  CREATE INDEX "video_assets_reviewClaimExpiresAt_idx" ON "video_assets"("reviewClaimExpiresAt");
EXCEPTION
  WHEN duplicate_table THEN NULL;
END
$$;

DO $$
BEGIN
  CREATE UNIQUE INDEX "video_assets_articleId_version_key" ON "video_assets"("articleId", "version");
EXCEPTION
  WHEN duplicate_table THEN NULL;
END
$$;

DO $$
BEGIN
  CREATE INDEX "video_jobs_state_stage_notBefore_priority_idx" ON "video_jobs"("state", "stage", "notBefore", "priority");
EXCEPTION
  WHEN duplicate_table THEN NULL;
END
$$;

DO $$
BEGIN
  CREATE INDEX "video_jobs_assetId_stage_idx" ON "video_jobs"("assetId", "stage");
EXCEPTION
  WHEN duplicate_table THEN NULL;
END
$$;

DO $$
BEGIN
  CREATE INDEX "video_job_attempts_jobId_attemptNo_idx" ON "video_job_attempts"("jobId", "attemptNo");
EXCEPTION
  WHEN duplicate_table THEN NULL;
END
$$;

DO $$
BEGIN
  CREATE UNIQUE INDEX "video_publications_youtubeVideoId_key" ON "video_publications"("youtubeVideoId");
EXCEPTION
  WHEN duplicate_table THEN NULL;
END
$$;

DO $$
BEGIN
  CREATE INDEX "video_publications_assetId_idx" ON "video_publications"("assetId");
EXCEPTION
  WHEN duplicate_table THEN NULL;
END
$$;

DO $$
BEGIN
  CREATE INDEX "video_publications_privacyStatus_removedAt_idx" ON "video_publications"("privacyStatus", "removedAt");
EXCEPTION
  WHEN duplicate_table THEN NULL;
END
$$;

DO $$
BEGIN
  CREATE INDEX "video_review_decisions_assetId_createdAt_idx" ON "video_review_decisions"("assetId", "createdAt");
EXCEPTION
  WHEN duplicate_table THEN NULL;
END
$$;

DO $$
BEGIN
  CREATE INDEX "video_review_decisions_reviewerEmail_idx" ON "video_review_decisions"("reviewerEmail");
EXCEPTION
  WHEN duplicate_table THEN NULL;
END
$$;

DO $$
BEGIN
  CREATE INDEX "video_pipeline_runs_kind_startedAt_idx" ON "video_pipeline_runs"("kind", "startedAt");
EXCEPTION
  WHEN duplicate_table THEN NULL;
END
$$;

DO $$
BEGIN
  ALTER TABLE "video_assets" ADD CONSTRAINT "video_assets_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "video_articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

DO $$
BEGIN
  ALTER TABLE "video_jobs" ADD CONSTRAINT "video_jobs_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "video_articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

DO $$
BEGIN
  ALTER TABLE "video_jobs" ADD CONSTRAINT "video_jobs_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "video_assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

DO $$
BEGIN
  ALTER TABLE "video_job_attempts" ADD CONSTRAINT "video_job_attempts_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "video_jobs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

DO $$
BEGIN
  ALTER TABLE "video_publications" ADD CONSTRAINT "video_publications_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "video_assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

DO $$
BEGIN
  ALTER TABLE "video_review_decisions" ADD CONSTRAINT "video_review_decisions_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "video_assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

