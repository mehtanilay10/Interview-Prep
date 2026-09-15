'use client';

import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { CourseProgress, LessonProgress, ProgressState } from '@/types';

const DEFAULT_PROGRESS: ProgressState = {
  lessons: { completedLessons: [], lastVisitedLesson: undefined, startedAt: undefined },
  problems: { completedLessons: [], lastVisitedLesson: undefined, startedAt: undefined },
  interviewQuestions: { completedLessons: [], lastVisitedLesson: undefined, startedAt: undefined },
};

type Category = keyof ProgressState;

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

function mergeProgress(base: ProgressState, incoming: ProgressState): ProgressState {
  const merged = { ...base };
  for (const category of Object.keys(merged) as Category[]) {
    const baseEntries = merged[category].completedLessons;
    const incomingEntries = incoming[category].completedLessons;
    const seen = new Set(baseEntries.map((e) => `${e.moduleSlug}:${e.lessonSlug}`));
    const mergedEntries = [...baseEntries];
    for (const entry of incomingEntries) {
      const key = `${entry.moduleSlug}:${entry.lessonSlug}`;
      if (!seen.has(key)) {
        mergedEntries.push(entry);
        seen.add(key);
      }
    }
    merged[category] = {
      completedLessons: mergedEntries,
      lastVisitedLesson: incoming[category].lastVisitedLesson ?? base[category].lastVisitedLesson,
      startedAt: incoming[category].startedAt ?? base[category].startedAt,
    };
  }
  return merged;
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

  const [serverProgress, setServerProgress] = useState<ProgressState | null>(null);
  const [mounted, setMounted] = useState(false);
  const [syncedToServer, setSyncedToServer] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const serverProgressRef = useRef(serverProgress);
  serverProgressRef.current = serverProgress;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isLoggedIn || serverProgress) return;
    setIsInitialLoad(true);
    setSyncedToServer(false);
    let cancelled = false;
    fetchProgressFromServer().then((data) => {
      if (cancelled) return;
      if (data) {
        setServerProgress(data);
      }
      setIsInitialLoad(false);
    });
    return () => {
      cancelled = true;
    };
  }, [isLoggedIn]); // intentionally ignore serverProgress to avoid refetch loops

  useEffect(() => {
    if (!isLoggedIn || !serverProgressRef.current || isInitialLoad) return;
    syncProgressToServer(serverProgressRef.current);
  }, [isLoggedIn, serverProgress, isInitialLoad]);

  useEffect(() => {
    if (isLoggedOut) {
      setServerProgress(null);
      setSyncedToServer(false);
      setIsInitialLoad(true);
    }
  }, [isLoggedOut]);

  const activeProgress = isLoggedIn && serverProgress ? serverProgress : DEFAULT_PROGRESS;

  const setActiveProgress = useCallback(
    (updater: ProgressState | ((prev: ProgressState) => ProgressState)) => {
      if (!isLoggedIn) return;
      setServerProgress((prev) => {
        const current = prev ?? DEFAULT_PROGRESS;
        if (typeof updater === 'function') {
          return (updater as (prev: ProgressState) => ProgressState)(current);
        }
        return updater;
      });
    },
    [isLoggedIn]
  );

  const getCategory = useCallback(
    (category: Category) => {
      return activeProgress[category] ?? DEFAULT_PROGRESS[category];
    },
    [activeProgress]
  );

  const setCategory = useCallback(
    (category: Category, value: CourseProgress | ((prev: CourseProgress) => CourseProgress)) => {
      if (!isLoggedIn) return;
      setActiveProgress((prev) => {
        const current = prev[category] ?? DEFAULT_PROGRESS[category];
        const next = typeof value === 'function' ? (value as (p: CourseProgress) => CourseProgress)(current) : value;
        return { ...prev, [category]: next };
      });
    },
    [setActiveProgress, isLoggedIn]
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
      if (!isLoggedIn) return;
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
    [setCategory, isLoggedIn]
  );

  const markIncomplete = useCallback(
    (lessonSlug: string, category: Category = 'lessons') => {
      if (!isLoggedIn) return;
      setCategory(category, (prev) => ({
        ...prev,
        completedLessons: prev.completedLessons.filter((l) => l.lessonSlug !== lessonSlug),
      }));
    },
    [setCategory, isLoggedIn]
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
      if (!isLoggedIn) return;
      setCategory(category, (prev) => ({
        ...prev,
        lastVisitedLesson: lessonSlug,
        startedAt: prev.startedAt ?? new Date().toISOString(),
      }));
    },
    [setCategory, isLoggedIn]
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
    if (!isLoggedIn) return;
    setServerProgress(DEFAULT_PROGRESS);
    syncProgressToServer(DEFAULT_PROGRESS);
  }, [isLoggedIn]);

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
