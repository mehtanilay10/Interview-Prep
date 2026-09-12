'use client';

import { useCallback, useMemo, useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import type { CourseProgress, ProgressState, LessonProgress } from '@/types';

const STORAGE_KEY = 'interview_prep_progress';

const DEFAULT_PROGRESS: ProgressState = {
  lessons: {
    completedLessons: [],
    lastVisitedLesson: undefined,
    startedAt: undefined,
  },
  problems: {
    completedLessons: [],
    lastVisitedLesson: undefined,
    startedAt: undefined,
  },
  interviewQuestions: {
    completedLessons: [],
    lastVisitedLesson: undefined,
    startedAt: undefined,
  },
};

export function useProgress() {
  const [progress, setProgress, resetProgress] = useLocalStorage<ProgressState>(
    STORAGE_KEY,
    DEFAULT_PROGRESS
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getCategory = useCallback(
    (category: 'lessons' | 'problems' | 'interviewQuestions') => {
      return progress[category] ?? DEFAULT_PROGRESS[category];
    },
    [progress]
  );

  const setCategory = useCallback(
    (category: 'lessons' | 'problems' | 'interviewQuestions', value: CourseProgress | ((prev: CourseProgress) => CourseProgress)) => {
      setProgress((prev) => {
        const current = prev[category] ?? DEFAULT_PROGRESS[category];
        const next = typeof value === 'function' ? (value as (p: CourseProgress) => CourseProgress)(current) : value;
        return {
          ...prev,
          [category]: next,
        };
      });
    },
    [setProgress]
  );

  const isCompleted = useCallback(
    (lessonSlug: string, category: 'lessons' | 'problems' | 'interviewQuestions' = 'lessons'): boolean => {
      const cat = getCategory(category);
      return cat.completedLessons.some((l) => l.lessonSlug === lessonSlug);
    },
    [getCategory]
  );

  const markComplete = useCallback(
    (lessonSlug: string, moduleSlug: string, category: 'lessons' | 'problems' | 'interviewQuestions' = 'lessons') => {
      setCategory(category, (prev) => {
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
    [setCategory]
  );

  const markIncomplete = useCallback(
    (lessonSlug: string, category: 'lessons' | 'problems' | 'interviewQuestions' = 'lessons') => {
      setCategory(category, (prev) => ({
        ...prev,
        completedLessons: prev.completedLessons.filter((l) => l.lessonSlug !== lessonSlug),
      }));
    },
    [setCategory]
  );

  const toggleComplete = useCallback(
    (lessonSlug: string, moduleSlug: string, category: 'lessons' | 'problems' | 'interviewQuestions' = 'lessons') => {
      if (isCompleted(lessonSlug, category)) {
        markIncomplete(lessonSlug, category);
      } else {
        markComplete(lessonSlug, moduleSlug, category);
      }
    },
    [isCompleted, markComplete, markIncomplete]
  );

  const trackVisit = useCallback(
    (lessonSlug: string, category: 'lessons' | 'problems' | 'interviewQuestions' = 'lessons') => {
      setCategory(category, (prev) => ({
        ...prev,
        lastVisitedLesson: lessonSlug,
        startedAt: prev.startedAt ?? new Date().toISOString(),
      }));
    },
    [setCategory]
  );

  const getModuleProgress = useCallback(
    (moduleLessonSlugs: string[], category: 'lessons' | 'problems' | 'interviewQuestions' = 'lessons'): { completed: number; total: number; percent: number } => {
      const cat = getCategory(category);
      const completed = moduleLessonSlugs.filter((slug) => cat.completedLessons.some((l) => l.lessonSlug === slug)).length;
      const total = moduleLessonSlugs.length;
      const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
      return { completed, total, percent };
    },
    [getCategory]
  );

  const stats = useMemo(() => {
    const lessons = progress.lessons ?? DEFAULT_PROGRESS.lessons;
    const problems = progress.problems ?? DEFAULT_PROGRESS.problems;
    const interviewQuestions = progress.interviewQuestions ?? DEFAULT_PROGRESS.interviewQuestions;

    const lessonStats = {
      totalCompleted: lessons.completedLessons.length,
      lastVisited: lessons.lastVisitedLesson,
      startedAt: lessons.startedAt,
    };
    const problemStats = {
      totalCompleted: problems.completedLessons.length,
      lastVisited: problems.lastVisitedLesson,
      startedAt: problems.startedAt,
    };
    const interviewStats = {
      totalCompleted: interviewQuestions.completedLessons.length,
      lastVisited: interviewQuestions.lastVisitedLesson,
      startedAt: interviewQuestions.startedAt,
    };

    return {
      lessons: lessonStats,
      problems: problemStats,
      interviewQuestions: interviewStats,
      totalCompleted: lessonStats.totalCompleted + problemStats.totalCompleted + interviewStats.totalCompleted,
    };
  }, [progress]);

  const exportProgress = useCallback(() => {
    const data = JSON.stringify(progress, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `interview-prep-progress-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [progress]);

  const importProgress = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target?.result as string) as ProgressState;
          if (imported && typeof imported === 'object') {
            setProgress(imported);
            alert('Progress imported successfully!');
          } else {
            alert('Invalid progress file.');
          }
        } catch {
          alert('Failed to parse progress file.');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }, [setProgress]);

  return {
    progress,
    setProgress,
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
    exportProgress,
    importProgress,
  };
}
