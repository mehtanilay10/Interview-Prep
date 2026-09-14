-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "ProgressCategory" AS ENUM ('lessons', 'problems', 'interviewQuestions');

-- CreateEnum
CREATE TYPE "BookmarkType" AS ENUM ('lesson', 'problem', 'interview', 'cheatsheet');

-- CreateEnum
CREATE TYPE "UserTheme" AS ENUM ('light', 'dark', 'system');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "image" TEXT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_progress" (
    "id" UUID NOT NULL,
    "user_id" TEXT NOT NULL,
    "category" "ProgressCategory" NOT NULL,
    "lesson_slug" TEXT NOT NULL,
    "module_slug" TEXT NOT NULL,
    "completed_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_bookmarks" (
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

-- CreateTable
CREATE TABLE "user_last_path" (
    "user_id" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_last_path_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "user_theme_preferences" (
    "user_id" TEXT NOT NULL,
    "theme" "UserTheme" NOT NULL,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_theme_preferences_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "user_lesson_notes" (
    "id" UUID NOT NULL,
    "user_id" TEXT NOT NULL,
    "course_slug" TEXT NOT NULL,
    "module_slug" TEXT NOT NULL,
    "lesson_slug" TEXT NOT NULL,
    "content" TEXT NOT NULL DEFAULT '',
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_lesson_notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "offline_reading_queue" (
    "id" UUID NOT NULL,
    "user_id" TEXT NOT NULL,
    "course_slug" TEXT NOT NULL,
    "module_slug" TEXT NOT NULL,
    "lesson_slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "queued_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "offline_reading_queue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "user_progress_user_id_idx" ON "user_progress"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_progress_user_id_category_lesson_slug_key" ON "user_progress"("user_id", "category", "lesson_slug");

-- CreateIndex
CREATE INDEX "user_bookmarks_user_id_idx" ON "user_bookmarks"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_bookmarks_user_id_type_slug_key" ON "user_bookmarks"("user_id", "type", "slug");

-- CreateIndex
CREATE INDEX "user_lesson_notes_user_id_idx" ON "user_lesson_notes"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_lesson_notes_user_id_course_slug_module_slug_lesson_sl_key" ON "user_lesson_notes"("user_id", "course_slug", "module_slug", "lesson_slug");

-- CreateIndex
CREATE INDEX "offline_reading_queue_user_id_idx" ON "offline_reading_queue"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "offline_reading_queue_user_id_course_slug_module_slug_lesso_key" ON "offline_reading_queue"("user_id", "course_slug", "module_slug", "lesson_slug");

-- AddForeignKey
ALTER TABLE "user_progress" ADD CONSTRAINT "user_progress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_bookmarks" ADD CONSTRAINT "user_bookmarks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_last_path" ADD CONSTRAINT "user_last_path_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_theme_preferences" ADD CONSTRAINT "user_theme_preferences_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_lesson_notes" ADD CONSTRAINT "user_lesson_notes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "offline_reading_queue" ADD CONSTRAINT "offline_reading_queue_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
