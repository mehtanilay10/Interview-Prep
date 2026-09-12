'use client';

import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import type { CourseProgress, LessonProgress, ProgressState } from '@/types';

const STORAGE_KEY = 'interview_prep_progress';

const DEFAULT_PROGRESS: ProgressState = {
  lessons: { completedLessons: [], lastVisitedLesson: undefined, startedAt: undefined },
  problems: { completedLessons: [], lastVisitedLesson: undefined, startedAt: undefined },
  interviewQuestions: { completedLessons: [], lastVisitedLesson: undefined, startedAt: undefined },
};

type Category = 'lessons' | 'problems' | 'interviewQuestions';

async function fetchProgressFromServer(): Promise<ProgressState | null> {
  try {
    const res = await fetch('/api/progress');
    if (!res.ok) return null;
    const data = await res.json();
    const progress: ProgressState = {
      lessons: { completedLessons: [], lastVisitedLesson: undefined, startedAt: undefined },
      problems: { completedLessons: [], lastVisitedLesson: undefined, startedAt: undefined },
      interviewQuestions: { completedLessons: [], lastVisitedLesson: undefined, startedAt: undefined },
    };
    if (data.progress) {
      for (const [cat, items] of Object.entries(data.progress)) {
        const category = cat as Category;
        if (Array.isArray(items)) {
          progress[category] = {
            completedLessons: items.map((item: { lessonSlug: string; moduleSlug: string; completedAt: string }) => ({
              lessonSlug: item.lessonSlug,
              moduleSlug: item.moduleSlug,
              completedAt: item.completedAt,
            })),
            lastVisitedLesson: undefined,
            startedAt: items[0]?.completedAt,
          };
        }
      }
    }
    return progress;
  } catch {
    return null;
  }
}

async function syncProgressToServer(progress: ProgressState): Promise<void> {
  try {
    const allEntries: Array<{ category: Category; lessonSlug: string; moduleSlug: string }> = [];
    for (const [cat, courseProgress] of Object.entries(progress)) {
      const category = cat as Category;
      for (const entry of courseProgress.completedLessons) {
        allEntries.push({ category, lessonSlug: entry.lessonSlug, moduleSlug: entry.moduleSlug });
      }
    }
    await fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ entries: allEntries }),
    });
  } catch (err) {
    console.warn('[useProgress] Failed to sync to server', err);
  }
}

export function useProgress() {
  const { data: session, status } = useSession();
  const isLoggedIn = status === 'authenticated';
  const isLoggedOut = status === 'unauthenticated';

  const [localProgress, setLocalProgress, resetLocal] = useLocalStorage<ProgressState>(
    STORAGE_KEY,
    DEFAULT_PROGRESS
  );
  const [serverProgress, setServerProgress] = useState<ProgressState | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeProgress = isLoggedIn && serverProgress ? serverProgress : localProgress;
  const setActiveProgress = isLoggedIn
    ? (updater: ProgressState | ((prev: ProgressState) => ProgressState)) => {
        const next = typeof updater === 'function' ? updater(activeProgress) : updater;
        setServerProgress(next);
        syncProgressToServer(next);
      }
    : setLocalProgress;

  useEffect(() => {
    if (isLoggedIn && !serverProgress) {
      fetchProgressFromServer().then((data) => {
        if (data) {
          setServerProgress(data);
        }
      });
    }
  }, [isLoggedIn, serverProgress]);

  useEffect(() => {
    if (isLoggedIn && localProgress !== DEFAULT_PROGRESS) {
      const hasLocalData = Object.values(localProgress).some(
        (cp) => cp.completedLessons.length > 0
      );
      if (hasLocalData) {
        syncProgressToServer(localProgress);
      }
    }
  }, [isLoggedIn, localProgress]);

  const getCategory = useCallback(
    (category: Category) => {
      return activeProgress[category] ?? DEFAULT_PROGRESS[category];
    },
    [activeProgress]
  );

  const setCategory = useCallback(
    (category: Category, value: CourseProgress | ((prev: CourseProgress) => CourseProgress)) => {
      setActiveProgress((prev) => {
        const current = prev[category] ?? DEFAULT_PROGRESS[category];
        const next = typeof value === 'function' ? (value as (p: CourseProgress) => CourseProgress)(current) : value;
        return { ...prev, [category]: next };
      });
    },
    [setActiveProgress]
  );

  const isCompleted = useCallback(
    (lessonSlug: string, category: Category = 'lessons'): boolean => {
      const cat = getCategory(category);
      return cat.completedLessons.some((l) => l.lessonSlug === lessonSlug);
    },
    [getCategory]
  );

  const markComplete = useCallback(
    (lessonSlug: string, moduleSlug: string, category: Category = 'lessons') => {
      setCategory(category, (prev) => {
        if (prev.completedLessons.some((l) => l.lessonSlug === lessonSlug)) {
          return prev;
        }
        const entry: LessonProgress = { lessonSlug, moduleSlug, completedAt: new Date().toISOString() };
        return {
          ...prev,
          completedLessons: [...prev.completedLessons, entry],
          startedAt: prev.startedAt ?? new Date().toISOString(),
          lastVisitedLesson: lessonSlug,
        };
      });
    },
    [setCategory]
  );

  const markIncomplete = useCallback(
    (lessonSlug: string, category: Category = 'lessons') => {
      setCategory(category, (prev) => ({
        ...prev,
        completedLessons: prev.completedLessons.filter((l) => l.lessonSlug !== lessonSlug),
      }));
    },
    [setCategory]
  );

  const toggleComplete = useCallback(
    (lessonSlug: string, moduleSlug: string, category: Category = 'lessons') => {
      if (isCompleted(lessonSlug, category)) {
        markIncomplete(lessonSlug, category);
      } else {
        markComplete(lessonSlug, moduleSlug, category);
      }
    },
    [isCompleted, markComplete, markIncomplete]
  );

  const trackVisit = useCallback(
    (lessonSlug: string, category: Category = 'lessons') => {
      setCategory(category, (prev) => ({
        ...prev,
        lastVisitedLesson: lessonSlug,
        startedAt: prev.startedAt ?? new Date().toISOString(),
      }));
    },
    [setCategory]
  );

  const getModuleProgress = useCallback(
    (moduleLessonSlugs: string[], category: Category = 'lessons') => {
      const cat = getCategory(category);
      const completed = moduleLessonSlugs.filter((slug) => cat.completedLessons.some((l) => l.lessonSlug === slug)).length;
      const total = moduleLessonSlugs.length;
      const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
      return { completed, total, percent };
    },
    [getCategory]
  );

  const stats = useMemo(() => {
    const lessons = activeProgress.lessons ?? DEFAULT_PROGRESS.lessons;
    const problems = activeProgress.problems ?? DEFAULT_PROGRESS.problems;
    const interviewQuestions = activeProgress.interviewQuestions ?? DEFAULT_PROGRESS.interviewQuestions;

    const lessonStats = { totalCompleted: lessons.completedLessons.length, lastVisited: lessons.lastVisitedLesson, startedAt: lessons.startedAt };
    const problemStats = { totalCompleted: problems.completedLessons.length, lastVisited: problems.lastVisitedLesson, startedAt: problems.startedAt };
    const interviewStats = { totalCompleted: interviewQuestions.completedLessons.length, lastVisited: interviewQuestions.lastVisitedLesson, startedAt: interviewQuestions.startedAt };

    return {
      lessons: lessonStats,
      problems: problemStats,
      interviewQuestions: interviewStats,
      totalCompleted: lessonStats.totalCompleted + problemStats.totalCompleted + interviewStats.totalCompleted,
    };
  }, [activeProgress]);

  const resetProgress = useCallback(() => {
    setLocalProgress(DEFAULT_PROGRESS);
    if (isLoggedIn) {
      setServerProgress(DEFAULT_PROGRESS);
      syncProgressToServer(DEFAULT_PROGRESS);
    }
  }, [setLocalProgress, isLoggedIn]);

  return {
    progress: activeProgress,
    setProgress: setActiveProgress,
    resetProgress,
    isCompleted,
    markComplete,
    markIncomplete,
    toggleComplete,
    trackVisit,
    getModuleProgress,
    getCategory,
    setCategory,
    stats,
    mounted,
    isLoggedIn: isLoggedIn,
    isLoggedOut,
  };
}
