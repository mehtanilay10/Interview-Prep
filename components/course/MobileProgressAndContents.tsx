'use client';

import { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { ProgressTracker } from '@/components/course/ProgressTracker';
import { LessonSidebar } from '@/components/layout/LessonSidebar';
import { cn } from '@/lib/utils';
import type { Module, Lesson } from '@/types';

interface MobileProgressAndContentsProps {
  lessonSlug: string;
  moduleSlug: string;
  courseSlug: string;
  allModuleLessonSlugs: string[];
  modules: Module[];
  lessonsByModule: Record<string, Lesson[]>;
  className?: string;
}

export function MobileProgressAndContents({
  lessonSlug,
  moduleSlug,
  courseSlug,
  allModuleLessonSlugs,
  modules,
  lessonsByModule,
  className,
}: MobileProgressAndContentsProps) {
  const [contentsOpen, setContentsOpen] = useState(false);

  return (
    <div className={cn('rounded-xl border border-border bg-canvas-subtle', className)}>
      <ProgressTracker
        lessonSlug={lessonSlug}
        moduleSlug={moduleSlug}
        allModuleLessonSlugs={allModuleLessonSlugs}
        className="border-0 bg-transparent rounded-none rounded-t-xl"
      />

      {/* Course Contents toggle */}
      <div className="border-t border-border px-4 pb-1">
        <button
          type="button"
          onClick={() => setContentsOpen((prev) => !prev)}
          className="flex w-full items-center justify-between py-3 text-sm font-medium text-fg-default transition-colors hover:text-accent-fg"
          aria-expanded={contentsOpen}
        >
          <span className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-accent-fg" aria-hidden="true" />
            Course Contents
          </span>
          {contentsOpen ? (
            <ChevronUp className="h-4 w-4 text-fg-subtle" aria-hidden="true" />
          ) : (
            <ChevronDown className="h-4 w-4 text-fg-subtle" aria-hidden="true" />
          )}
        </button>

        {contentsOpen && (
          <div className="pb-3">
            <LessonSidebar
              currentModuleSlug={moduleSlug}
              currentLessonSlug={lessonSlug}
              courseSlug={courseSlug}
              modules={modules}
              lessonsByModule={lessonsByModule}
            />
          </div>
        )}
      </div>
    </div>
  );
}
