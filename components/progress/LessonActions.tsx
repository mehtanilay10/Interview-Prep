'use client';

import { useEffect, useState } from 'react';
import { BookmarkButton } from '@/components/ui/BookmarkButton';
import { useProgress } from '@/hooks/useProgress';
import { PdfDownloadButton } from '@/components/ui/PdfDownloadButton';
import { SignInPrompt } from '@/components/auth/SignInPrompt';

export function LessonActions({
  lesson,
  courseSlug,
  moduleSlug,
  category = 'lessons',
}: {
  lesson: {
    slug: string;
    title: string;
    difficulty: string;
    estimatedMinutes: number;
    isOptional?: boolean;
    tags: string[];
  };
  courseSlug: string;
  moduleSlug: string;
  category?: 'lessons' | 'problems' | 'interviewQuestions';
}) {
  const { markComplete, isCompleted, trackVisit, isLoggedOut } = useProgress();
  const [showSignIn, setShowSignIn] = useState(false);

  useEffect(() => {
    trackVisit(lesson.slug, category);
  }, [lesson.slug, trackVisit, category]);

  const completed = isCompleted(lesson.slug, category);

  const handleMarkComplete = () => {
    if (isLoggedOut) {
      setShowSignIn(true);
      return;
    }
    markComplete(lesson.slug, moduleSlug, category);
  };

  return (
    <div className="mb-3 flex flex-wrap items-center gap-2">
      <span className="rounded-full border border-border bg-canvas-subtle px-2 py-0.5 text-xs text-fg-subtle capitalize">
        {category === 'interviewQuestions' ? 'Interview' : category.slice(0, -1)}
      </span>
      <button
        onClick={handleMarkComplete}
        className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
          completed
            ? 'border-success-emphasis bg-success-subtle text-success-fg'
            : 'border-border bg-canvas text-fg-muted hover:bg-canvas-subtle hover:text-fg-default'
        }`}
        aria-pressed={completed}
      >
        {completed ? '✓ Completed' : 'Mark Complete'}
      </button>
      <BookmarkButton
        item={{
          type: category === 'interviewQuestions' ? 'interview' : category === 'problems' ? 'problem' : 'lesson',
          slug: lesson.slug,
          title: lesson.title,
          courseSlug,
          moduleSlug,
        }}
      />
      <PdfDownloadButton
        targetId={category === 'interviewQuestions' ? 'question-content' : category === 'problems' ? 'problem-content' : 'lesson-content'}
        filename={`${lesson.slug}.pdf`}
        label="Download PDF"
      />
      {showSignIn && <SignInPrompt onDismiss={() => setShowSignIn(false)} />}
    </div>
  );
}
