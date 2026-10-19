'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  TrendingUp,
  Award,
  Target,
  BarChart3,
  ClipboardList,
} from 'lucide-react';
import { cn, formatRelativeTime } from '@/lib/utils';
import { logger } from '@/lib/logger';

interface LessonProgress {
  lessonSlug: string;
  moduleSlug: string;
  completedAt: string;
  title: string;
  href: string;
  estimatedMinutes?: number;
}

/** Compact, server-computed course metadata (no lesson content). */
export interface ProgressCourseEntry {
  slug: string;
  title: string;
  href: string;
  lessonCount: number;
  totalMinutes: number;
}

/** Maps a module slug to the course it belongs to. */
export interface ProgressModuleCourse {
  courseSlug: string;
  courseTitle: string;
}

/**
 * Server-computed catalog used by the dashboard. Passing this in as props
 * keeps `lib/content.ts` (and therefore every lesson JSON) out of the client
 * bundle for this route.
 */
export interface ProgressCatalog {
  courses: ProgressCourseEntry[];
  moduleCourse: Record<string, ProgressModuleCourse>;
  counts: { lessons: number; problems: number; interview: number };
}

interface CategoryProgress {
  completedLessons: LessonProgress[];
  lastVisitedLesson?: string;
  startedAt?: string;
}

interface CourseProgressInfo {
  courseSlug: string;
  courseTitle: string;
  href: string;
  completedCount: number;
  totalCount: number;
  percent: number;
  estimatedMinutesRemaining: number;
}

type TabId = 'overview' | 'completed' | 'courses';

const TABS: { id: TabId; label: string; icon: React.ElementType }[] = [
  { id: 'overview', label: 'Overview', icon: BarChart3 },
  { id: 'completed', label: 'Completed', icon: ClipboardList },
  { id: 'courses', label: 'Course Progress', icon: Target },
];

function getProgressColor(percent: number) {
  if (percent === 0) return { bar: 'bg-canvas-inset', text: 'text-fg-muted', badge: 'bg-canvas-inset text-fg-muted', label: 'Not started' };
  if (percent < 25) return { bar: 'bg-severe-emphasis', text: 'text-severe-fg', badge: 'bg-severe-muted text-severe-fg', label: 'Just started' };
  if (percent < 50) return { bar: 'bg-attention-emphasis', text: 'text-attention-fg', badge: 'bg-attention-muted text-attention-fg', label: 'In progress' };
  if (percent < 75) return { bar: 'bg-accent-emphasis', text: 'text-accent-fg', badge: 'bg-accent-muted text-accent-fg', label: 'Good progress' };
  if (percent < 100) return { bar: 'bg-done-emphasis', text: 'text-done-fg', badge: 'bg-done-muted text-done-fg', label: 'Almost done' };
  return { bar: 'bg-success-emphasis', text: 'text-success-fg', badge: 'bg-success-muted text-success-fg', label: 'Completed' };
}

export function ProgressDashboardClient({ user, catalog }: {
  user: { id: string; name?: string | null; email?: string | null; image?: string | null };
  catalog: ProgressCatalog;
}) {
  const [progress, setProgress] = useState<Record<string, CategoryProgress>>({});
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [progressRes] = await Promise.all([
          fetch('/api/progress'),
        ]);

        if (progressRes.ok) {
          const progressData = await progressRes.json();
          const mapped: Record<string, CategoryProgress> = {};
          for (const [cat, items] of Object.entries(progressData.progress || {})) {
            mapped[cat] = {
              completedLessons: (items as LessonProgress[]).map((item) => ({
                lessonSlug: item.lessonSlug,
                moduleSlug: item.moduleSlug,
                completedAt: item.completedAt,
                title: item.title,
                href: item.href,
                estimatedMinutes: item.estimatedMinutes ?? 0,
              })),
              lastVisitedLesson: undefined,
              startedAt: (items as LessonProgress[])[0]?.completedAt,
            };
          }
          setProgress(mapped);
        }
      } catch (err) {
        logger.error('ProgressDashboardClient', 'Failed to fetch dashboard data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalCompleted = useMemo(() => Object.values(progress).reduce(
    (sum, cat) => sum + cat.completedLessons.length,
    0
  ), [progress]);

  const lessonsCompleted = progress.lessons?.completedLessons.length || 0;
  const problemsCompleted = progress.problems?.completedLessons.length || 0;
  const interviewCompleted = progress.interviewQuestions?.completedLessons.length || 0;

  const totalLessonsCount = catalog.counts.lessons;
  const totalProblemsCount = catalog.counts.problems;
  const totalInterviewCount = catalog.counts.interview;

  const completionRate = useMemo(() => {
    const total = totalLessonsCount + totalProblemsCount + totalInterviewCount;
    if (total === 0) return 0;
    return Math.round(((lessonsCompleted + problemsCompleted + interviewCompleted) / total) * 100);
  }, [lessonsCompleted, problemsCompleted, interviewCompleted, totalLessonsCount, totalProblemsCount, totalInterviewCount]);

  const courseProgressList = useMemo<CourseProgressInfo[]>(() => {
    const catalogBySlug = new Map(catalog.courses.map((course) => [course.slug, course]));
    const courseMap = new Map<string, { title: string; href: string; completed: Set<string>; total: number; totalMinutes: number; completedMinutes: number }>();

    for (const catProgress of Object.values(progress)) {
      for (const item of catProgress.completedLessons) {
        const courseInfo = catalog.moduleCourse[item.moduleSlug];
        if (!courseInfo) continue;
        const key = `${item.moduleSlug}:${item.lessonSlug}`;
        const existing = courseMap.get(courseInfo.courseSlug);
        if (existing) {
          existing.completed.add(key);
          existing.completedMinutes += item.estimatedMinutes ?? 0;
        } else {
          courseMap.set(courseInfo.courseSlug, {
            title: courseInfo.courseTitle,
            href: catalogBySlug.get(courseInfo.courseSlug)?.href ?? '/',
            completed: new Set([key]),
            total: 0,
            totalMinutes: 0,
            completedMinutes: item.estimatedMinutes ?? 0,
          });
        }
      }
    }

    for (const course of catalog.courses) {
      const existing = courseMap.get(course.slug);
      if (existing) {
        existing.total = course.lessonCount;
        existing.totalMinutes = course.totalMinutes;
      } else {
        courseMap.set(course.slug, {
          title: course.title,
          href: course.href,
          completed: new Set(),
          total: course.lessonCount,
          totalMinutes: course.totalMinutes,
          completedMinutes: 0,
        });
      }
    }

    return Array.from(courseMap.entries())
      .map(([courseSlug, data]) => ({
        courseSlug,
        courseTitle: data.title,
        href: data.href,
        completedCount: data.completed.size,
        totalCount: data.total,
        percent: data.total > 0 ? Math.round((data.completed.size / data.total) * 100) : 0,
        estimatedMinutesRemaining: Math.max(0, data.totalMinutes - data.completedMinutes),
      }))
      .filter((c) => c.totalCount > 0)
      .sort((a, b) => b.percent - a.percent);
  }, [progress, catalog]);

  const recentCompletions = useMemo(() => {
    if (totalCompleted === 0) return [];
    return Object.values(progress)
      .flatMap((cat) =>
        cat.completedLessons.map((lesson) => ({
          ...lesson,
          category: Object.keys(progress).find((key) => progress[key] === cat),
        }))
      )
      .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
      .slice(0, 10);
  }, [progress, totalCompleted]);

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-accent-fg" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-fg-default">Progress Dashboard</h1>
        <p className="mt-2 text-fg-muted">
          Track your learning journey across all content types.
        </p>
      </div>

      <div className="mb-6 flex gap-1 overflow-x-auto rounded-xl border border-border bg-canvas p-1">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap',
              activeTab === tab.id
                ? 'bg-accent-emphasis text-accent-fg'
                : 'text-fg-muted hover:text-fg-default'
            )}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            <tab.icon className="h-4 w-4" aria-hidden="true" />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-canvas p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-fg-muted">Lessons Completed</p>
                  <p className="mt-1 text-3xl font-bold text-fg-default">{lessonsCompleted}</p>
                </div>
                <CheckCircle2 className="h-8 w-8 text-success-fg" aria-hidden="true" />
              </div>
            </div>
            <div className="rounded-xl border border-border bg-canvas p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-fg-muted">Problems Solved</p>
                  <p className="mt-1 text-3xl font-bold text-fg-default">{problemsCompleted}</p>
                </div>
                <Target className="h-8 w-8 text-accent-fg" aria-hidden="true" />
              </div>
            </div>
            <div className="rounded-xl border border-border bg-canvas p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-fg-muted">Interviews Done</p>
                  <p className="mt-1 text-3xl font-bold text-fg-default">{interviewCompleted}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-warning-fg" aria-hidden="true" />
              </div>
            </div>
            <div className="rounded-xl border border-border bg-canvas p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-fg-muted">Completion Rate</p>
                  <p className="mt-1 text-3xl font-bold text-fg-default">{completionRate}%</p>
                </div>
                <Award className="h-8 w-8 text-accent-fg" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-canvas p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="h-5 w-5 text-success-fg" aria-hidden="true" />
              <h2 className="text-lg font-semibold text-fg-default">Recent Completions</h2>
            </div>
            {recentCompletions.length === 0 ? (
              <p className="text-sm text-fg-muted">No completions yet. Start learning!</p>
            ) : (
              <ul className="space-y-2">
                {recentCompletions.map((lesson) => (
                  <li
                    key={`${lesson.category}-${lesson.lessonSlug}`}
                    className="flex items-center justify-between rounded-lg border border-border bg-canvas-subtle px-3 py-2 transition-colors hover:border-accent-fg"
                  >
                    <Link href={lesson.href} className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-fg-default group-hover:text-accent-fg transition-colors">{lesson.title}</p>
                      <p className="text-xs text-fg-muted capitalize">{lesson.category}</p>
                    </Link>
                    <span className="text-xs text-fg-subtle">{formatRelativeTime(lesson.completedAt)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {activeTab === 'completed' && (
        <div className="rounded-xl border border-border bg-canvas p-6">
          <div className="flex items-center gap-2 mb-4">
            <ClipboardList className="h-5 w-5 text-success-fg" aria-hidden="true" />
            <h2 className="text-lg font-semibold text-fg-default">All Completed Lessons</h2>
          </div>
          {totalCompleted === 0 ? (
            <p className="text-sm text-fg-muted">No completions yet. Start learning!</p>
          ) : (
            <div className="space-y-6">
              {(['lessons', 'problems', 'interviewQuestions'] as const).map((cat) => {
                const catProgress = progress[cat];
                if (!catProgress || catProgress.completedLessons.length === 0) return null;
                return (
                  <div key={cat}>
                    <h3 className="mb-2 text-sm font-semibold text-fg-muted capitalize">{cat.replace(/([A-Z])/g, ' $1')}</h3>
                    <ul className="space-y-2">
                      {catProgress.completedLessons
                        .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
                        .map((lesson) => (
                          <li
                            key={`${cat}-${lesson.lessonSlug}`}
                            className="flex items-center justify-between rounded-lg border border-border bg-canvas-subtle px-3 py-2 transition-colors hover:border-accent-fg"
                          >
                            <Link href={lesson.href} className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-fg-default">{lesson.title}</p>
                              <p className="text-xs text-fg-muted">{lesson.href}</p>
                            </Link>
                            <span className="text-xs text-fg-subtle">{formatRelativeTime(lesson.completedAt)}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {activeTab === 'courses' && (
        <div className="rounded-xl border border-border bg-canvas p-6">
          <div className="flex items-center gap-2 mb-4">
            <Target className="h-5 w-5 text-accent-fg" aria-hidden="true" />
            <h2 className="text-lg font-semibold text-fg-default">Course Level Progress</h2>
          </div>
          {courseProgressList.length === 0 ? (
            <p className="text-sm text-fg-muted">No course progress yet. Start learning!</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {courseProgressList.map((course) => {
                const colors = getProgressColor(course.percent);
                return (
                  <Link
                    key={course.courseSlug}
                    href={course.href}
                    className="group block rounded-xl border border-border bg-canvas p-5 transition-all hover:border-accent-fg hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-fg-default truncate group-hover:text-accent-fg transition-colors">{course.courseTitle}</p>
                        <p className="mt-1 text-xs text-fg-muted">
                          {course.completedCount} of {course.totalCount} lessons completed
                        </p>
                      </div>
                      <span className={cn('shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold', colors.badge)}>
                        {course.percent}%
                      </span>
                    </div>

                    <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-canvas-inset">
                      <div
                        className={cn('h-full rounded-full transition-all duration-500', colors.bar)}
                        style={{ width: `${course.percent}%` }}
                        role="progressbar"
                        aria-valuenow={course.percent}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${course.percent}% of ${course.courseTitle} completed`}
                      />
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <span className={cn('text-xs font-medium', colors.text)}>
                        {colors.label}
                      </span>
                      <span className="text-xs text-fg-subtle">
                        {course.estimatedMinutesRemaining} min left
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
