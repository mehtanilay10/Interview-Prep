import Link from 'next/link';
import { CheckCircle2, Circle, ArrowRight } from 'lucide-react';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';
import { ReadingTimeBadge } from '@/components/ui/ReadingTimeBadge';
import { cn } from '@/lib/utils';
import type { Lesson } from '@/types';

interface LessonCardProps {
  lesson: Lesson;
  moduleSlug: string;
  courseSlug?: string;
  isCompleted?: boolean;
  isCurrent?: boolean;
  className?: string;
  variant?: 'default' | 'list';
}

export function LessonCard({
  lesson,
  moduleSlug,
  courseSlug,
  isCompleted = false,
  isCurrent = false,
  className,
  variant = 'default',
}: LessonCardProps) {
  const lessonHref = courseSlug
    ? `/courses/${courseSlug}/${moduleSlug}/${lesson.slug}`
    : `/modules/${moduleSlug}/${lesson.slug}`;
  if (variant === 'list') {
    return (
      <Link
        href={lessonHref}
        className={cn(
          'group flex items-center gap-3 rounded-lg border border-border bg-canvas p-3',
          'transition-all hover:border-accent-fg hover:shadow-sm dark:bg-canvas-subtle',
          isCurrent && 'border-accent-fg bg-accent-subtle dark:bg-accent-subtle',
          isCompleted && 'opacity-80',
          className
        )}
      >
        {isCompleted ? (
          <CheckCircle2 className="h-4 w-4 shrink-0 text-success-fg" aria-label="Completed" />
        ) : (
          <Circle className="h-4 w-4 shrink-0 text-fg-subtle" aria-hidden="true" />
        )}
        <div className="flex-1 min-w-0">
          <p className={cn('truncate text-sm font-medium', isCurrent ? 'text-accent-fg' : 'text-fg-default')}>
            {lesson.title}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <ReadingTimeBadge minutes={lesson.estimatedMinutes} />
          <ArrowRight className="h-3.5 w-3.5 text-fg-subtle group-hover:text-accent-fg transition-colors" aria-hidden="true" />
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={lessonHref}
      className={cn(
        'group flex flex-col rounded-xl border border-border bg-canvas p-4',
        'transition-all hover:border-accent-fg hover:shadow-md dark:bg-canvas-subtle',
        isCompleted && 'opacity-85',
        className
      )}
    >
      <div className="mb-2 flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          {isCompleted ? (
            <CheckCircle2 className="h-4 w-4 text-success-fg shrink-0" aria-label="Completed" />
          ) : (
            <Circle className="h-4 w-4 text-fg-subtle shrink-0" aria-hidden="true" />
          )}
          <DifficultyBadge difficulty={lesson.difficulty} />
        </div>
        <ReadingTimeBadge minutes={lesson.estimatedMinutes} />
      </div>

      <h4 className="mb-1.5 font-medium text-fg-default group-hover:text-accent-fg transition-colors">
        {lesson.title}
      </h4>
      <p className="text-sm leading-relaxed text-fg-muted line-clamp-2">{lesson.description}</p>

      {lesson.isOptional && (
        <span className="mt-2 text-xs text-fg-subtle italic">
          Optional — {lesson.skipLabel ?? 'can skip if short on time'}
        </span>
      )}
    </Link>
  );
}
