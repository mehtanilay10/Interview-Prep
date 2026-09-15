'use client';

import { memo, useState } from 'react';
import { CheckCircle2, RotateCcw } from 'lucide-react';
import { cn, safePercent } from '@/lib/utils';
import { useProgress } from '@/hooks/useProgress';
import { SignInPrompt } from '@/components/auth/SignInPrompt';

interface ProgressTrackerProps {
  lessonSlug: string;
  moduleSlug: string;
  allModuleLessonSlugs: string[];
  category?: 'lessons' | 'problems' | 'interviewQuestions';
  className?: string;
}

export const ProgressTracker = memo(function ProgressTracker({
  lessonSlug,
  moduleSlug,
  allModuleLessonSlugs,
  category = 'lessons',
  className,
}: ProgressTrackerProps) {
  const { toggleComplete, isCompleted, isLoggedOut } = useProgress();
  const [showSignIn, setShowSignIn] = useState(false);
  const done = isCompleted(lessonSlug, category);

  const completed = allModuleLessonSlugs.filter((s) => isCompleted(s, category)).length;
  const total = allModuleLessonSlugs.length;
  const percent = safePercent(completed, total);

  const handleToggle = () => {
    if (isLoggedOut) {
      setShowSignIn(true);
      return;
    }
    toggleComplete(lessonSlug, moduleSlug, category);
  };

  return (
    <div className={cn('rounded-xl border border-border bg-canvas-subtle', className)}>
      {total > 0 && (
        <div className="px-4 pt-4 pb-2">
          <div className="mb-1.5 flex items-center justify-between text-xs text-fg-muted">
            <span>Module progress</span>
            <span className="font-medium">{completed}/{total} lessons</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-canvas-inset">
            <div
              className="h-full rounded-full bg-success-emphasis transition-all duration-500"
              style={{ width: `${percent}%` }}
              role="progressbar"
              aria-valuenow={percent}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${percent}% of module completed`}
            />
          </div>
        </div>
      )}

      <div className="px-4 pb-4">
        <button
          type="button"
          onClick={handleToggle}
          className={cn(
            'flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all',
            done
              ? 'border-success-muted bg-success-subtle text-success-fg hover:opacity-80'
              : 'border-border bg-canvas text-fg-default hover:border-success-emphasis hover:bg-success-subtle hover:text-success-fg'
          )}
          aria-pressed={done}
        >
          {done ? (
            <>
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              Lesson complete!
              <RotateCcw className="ml-auto h-3.5 w-3.5 opacity-60" aria-hidden="true" />
            </>
          ) : (
            <>
              <CheckCircle2 className="h-4 w-4 opacity-40" aria-hidden="true" />
              Mark as complete
            </>
          )}
        </button>
      </div>
      {showSignIn && <SignInPrompt onDismiss={() => setShowSignIn(false)} />}
    </div>
  );
});
