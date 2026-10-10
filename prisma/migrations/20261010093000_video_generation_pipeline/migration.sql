-- Video generation pipeline models (article registry, job queue with leases,
-- publications, review decisions, run metrics, runtime settings).
-- Generated from prisma/schema.prisma; apply with `yarn prisma migrate deploy`.

-- CreateEnum
CREATE TYPE "VideoArea" AS ENUM ('courses', 'problems');


-- CreateEnum
CREATE TYPE "VideoAssetStatus" AS ENUM ('pending', 'generating', 'awaiting_review', 'approved', 'rejected', 'uploading', 'published', 'failed', 'stale');


-- CreateEnum
CREATE TYPE "VideoJobStage" AS ENUM ('script', 'voice', 'render', 'qa', 'upload', 'publish');


-- CreateEnum
CREATE TYPE "VideoJobState" AS ENUM ('pending', 'processing', 'completed', 'failed', 'cancelled');


-- CreateEnum
CREATE TYPE "VideoPrivacyStatus" AS ENUM ('private', 'unlisted', 'public', 'deleted');


-- CreateEnum
CREATE TYPE "VideoReviewDecisionKind" AS ENUM ('approved', 'rejected', 'regeneration_requested');


-- CreateTable
CREATE TABLE "video_articles" (
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


-- CreateTable
CREATE TABLE "video_assets" (
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


-- CreateTable
CREATE TABLE "video_jobs" (
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


-- CreateTable
CREATE TABLE "video_job_attempts" (
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


-- CreateTable
CREATE TABLE "video_publications" (
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


-- CreateTable
CREATE TABLE "video_review_decisions" (
    "id" UUID NOT NULL,
    "assetId" UUID NOT NULL,
    "reviewerEmail" TEXT NOT NULL,
    "reviewerUserId" TEXT,
    "decision" "VideoReviewDecisionKind" NOT NULL,
    "reason" TEXT,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "video_review_decisions_pkey" PRIMARY KEY ("id")
);


-- CreateTable
CREATE TABLE "video_pipeline_runs" (
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


-- CreateTable
CREATE TABLE "video_pipeline_settings" (
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "video_pipeline_settings_pkey" PRIMARY KEY ("key")
);


-- CreateIndex
CREATE INDEX "video_articles_area_courseSlug_idx" ON "video_articles"("area", "courseSlug");


-- CreateIndex
CREATE INDEX "video_articles_deletedAt_idx" ON "video_articles"("deletedAt");


-- CreateIndex
CREATE UNIQUE INDEX "video_articles_area_courseSlug_moduleSlug_lessonSlug_key" ON "video_articles"("area", "courseSlug", "moduleSlug", "lessonSlug");


-- CreateIndex
CREATE INDEX "video_assets_status_createdAt_idx" ON "video_assets"("status", "createdAt");


-- CreateIndex
CREATE INDEX "video_assets_reviewClaimExpiresAt_idx" ON "video_assets"("reviewClaimExpiresAt");


-- CreateIndex
CREATE UNIQUE INDEX "video_assets_articleId_version_key" ON "video_assets"("articleId", "version");


-- CreateIndex
CREATE INDEX "video_jobs_state_stage_notBefore_priority_idx" ON "video_jobs"("state", "stage", "notBefore", "priority");


-- CreateIndex
CREATE INDEX "video_jobs_assetId_stage_idx" ON "video_jobs"("assetId", "stage");


-- CreateIndex
CREATE INDEX "video_job_attempts_jobId_attemptNo_idx" ON "video_job_attempts"("jobId", "attemptNo");


-- CreateIndex
CREATE UNIQUE INDEX "video_publications_youtubeVideoId_key" ON "video_publications"("youtubeVideoId");


-- CreateIndex
CREATE INDEX "video_publications_assetId_idx" ON "video_publications"("assetId");


-- CreateIndex
CREATE INDEX "video_publications_privacyStatus_removedAt_idx" ON "video_publications"("privacyStatus", "removedAt");


-- CreateIndex
CREATE INDEX "video_review_decisions_assetId_createdAt_idx" ON "video_review_decisions"("assetId", "createdAt");


-- CreateIndex
CREATE INDEX "video_review_decisions_reviewerEmail_idx" ON "video_review_decisions"("reviewerEmail");


-- CreateIndex
CREATE INDEX "video_pipeline_runs_kind_startedAt_idx" ON "video_pipeline_runs"("kind", "startedAt");


-- AddForeignKey
ALTER TABLE "video_assets" ADD CONSTRAINT "video_assets_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "video_articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;


-- AddForeignKey
ALTER TABLE "video_jobs" ADD CONSTRAINT "video_jobs_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "video_articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;


-- AddForeignKey
ALTER TABLE "video_jobs" ADD CONSTRAINT "video_jobs_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "video_assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;


-- AddForeignKey
ALTER TABLE "video_job_attempts" ADD CONSTRAINT "video_job_attempts_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "video_jobs"("id") ON DELETE CASCADE ON UPDATE CASCADE;


-- AddForeignKey
ALTER TABLE "video_publications" ADD CONSTRAINT "video_publications_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "video_assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;


-- AddForeignKey
ALTER TABLE "video_review_decisions" ADD CONSTRAINT "video_review_decisions_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "video_assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

