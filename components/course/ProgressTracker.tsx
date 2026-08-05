'use client';

import { CheckCircle2, RotateCcw } from 'lucide-react';
import { cn, safePercent } from '@/lib/utils';
import { useProgress } from '@/hooks/useProgress';

interface ProgressTrackerProps {
  lessonSlug: string;
  moduleSlug: string;
  allModuleLessonSlugs: string[];
  className?: string;
}

export function ProgressTracker({
  lessonSlug,
  moduleSlug,
  allModuleLessonSlugs,
  className,
}: ProgressTrackerProps) {
  const { isCompleted, toggleComplete } = useProgress();
  const done = isCompleted(lessonSlug);

  const completed = allModuleLessonSlugs.filter((s) => isCompleted(s)).length;
  const total = allModuleLessonSlugs.length;
  const percent = safePercent(completed, total);

  return (
    <div className={cn('rounded-xl border border-border bg-canvas-subtle p-4', className)}>
      {/* Module progress */}
      {total > 0 && (
        <div className="mb-4">
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

      {/* Mark complete button */}
      <button
        type="button"
        onClick={() => toggleComplete(lessonSlug, moduleSlug)}
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
  );
}
