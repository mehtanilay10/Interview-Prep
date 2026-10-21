-- Rename enum values that carried the old "interview" terminology.
-- `ALTER TYPE ... RENAME VALUE` keeps existing rows intact: Postgres rewrites
-- the label in place rather than dropping and recreating the enum.

ALTER TYPE "ProgressCategory" RENAME VALUE 'interviewQuestions' TO 'questionAnswers';

ALTER TYPE "BookmarkType" RENAME VALUE 'interview' TO 'questionAnswer';
