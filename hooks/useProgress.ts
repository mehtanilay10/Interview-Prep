'use client';

import { useCallback, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';
import type { CourseProgress, LessonProgress } from '@/types';
import { safePercent } from '@/lib/utils';

const STORAGE_KEY = 'interview_prep_progress';

const DEFAULT_PROGRESS: CourseProgress = {
  completedLessons: [],
  lastVisitedLesson: undefined,
  startedAt: undefined,
};

export function useProgress() {
  const [progress, setProgress, resetProgress] = useLocalStorage<CourseProgress>(
    STORAGE_KEY,
    DEFAULT_PROGRESS
  );

  /** Check if a lesson is completed */
  const isCompleted = useCallback(
    (lessonSlug: string): boolean => {
      return progress.completedLessons.some((l) => l.lessonSlug === lessonSlug);
    },
    [progress]
  );

  /** Mark a lesson as complete */
  const markComplete = useCallback(
    (lessonSlug: string, moduleSlug: string) => {
      setProgress((prev) => {
        // Avoid duplicates
        if (prev.completedLessons.some((l) => l.lessonSlug === lessonSlug)) {
          return prev;
        }
        const entry: LessonProgress = {
          lessonSlug,
          moduleSlug,
          completedAt: new Date().toISOString(),
        };
        return {
          ...prev,
          completedLessons: [...prev.completedLessons, entry],
          startedAt: prev.startedAt ?? new Date().toISOString(),
          lastVisitedLesson: lessonSlug,
        };
      });
    },
    [setProgress]
  );

  /** Mark a lesson as incomplete (unmark) */
  const markIncomplete = useCallback(
    (lessonSlug: string) => {
      setProgress((prev) => ({
        ...prev,
        completedLessons: prev.completedLessons.filter((l) => l.lessonSlug !== lessonSlug),
      }));
    },
    [setProgress]
  );

  /** Toggle completion */
  const toggleComplete = useCallback(
    (lessonSlug: string, moduleSlug: string) => {
      if (isCompleted(lessonSlug)) {
        markIncomplete(lessonSlug);
      } else {
        markComplete(lessonSlug, moduleSlug);
      }
    },
    [isCompleted, markComplete, markIncomplete]
  );

  /** Track last visited lesson */
  const trackVisit = useCallback(
    (lessonSlug: string) => {
      setProgress((prev) => ({
        ...prev,
        lastVisitedLesson: lessonSlug,
        startedAt: prev.startedAt ?? new Date().toISOString(),
      }));
    },
    [setProgress]
  );

  /** Get module completion percentage */
  const getModuleProgress = useCallback(
    (moduleLessonSlugs: string[]): { completed: number; total: number; percent: number } => {
      const completed = moduleLessonSlugs.filter((slug) => isCompleted(slug)).length;
      const total = moduleLessonSlugs.length;
      return { completed, total, percent: safePercent(completed, total) };
    },
    [isCompleted]
  );

  /** Overall stats */
  const stats = useMemo(() => {
    return {
      totalCompleted: progress.completedLessons.length,
      lastVisited: progress.lastVisitedLesson,
      startedAt: progress.startedAt,
    };
  }, [progress]);

  return {
    progress,
    isCompleted,
    markComplete,
    markIncomplete,
    toggleComplete,
    trackVisit,
    getModuleProgress,
    resetProgress,
    stats,
  };
}
