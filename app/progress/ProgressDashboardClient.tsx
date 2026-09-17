'use client';

import { useEffect, useState, useMemo } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Bookmark,
  CheckCircle2,
  LogOut,
  TrendingUp,
  Award,
  Target,
  BookOpen,
  BarChart3,
  ClipboardList,
  StickyNote,
} from 'lucide-react';
import { cn, formatRelativeTime } from '@/lib/utils';
import { getLessonBySlug, getModuleBySlug, getLessonsForCourse, courses, lessons, modules } from '@/lib/content';
import type { Lesson, Course, Module } from '@/types';

interface LessonProgress {
  lessonSlug: string;
  moduleSlug: string;
  completedAt: string;
  title: string;
  href: string;
}

interface CategoryProgress {
  completedLessons: LessonProgress[];
  lastVisitedLesson?: string;
  startedAt?: string;
}

interface BookmarkItem {
  id: string;
  type: string;
  slug: string;
  title: string;
  courseSlug: string;
  moduleSlug: string;
  addedAt: string;
}

interface LessonNote {
  courseSlug: string;
  moduleSlug: string;
  lessonSlug: string;
  content: string;
  updatedAt: string;
}

interface CourseProgressInfo {
  courseSlug: string;
  courseTitle: string;
  completedCount: number;
  totalCount: number;
  percent: number;
}

type TabId = 'overview' | 'completed' | 'bookmarks' | 'notes' | 'courses';

const TABS: { id: TabId; label: string; icon: React.ElementType }[] = [
  { id: 'overview', label: 'Overview', icon: BarChart3 },
  { id: 'completed', label: 'Completed', icon: ClipboardList },
  { id: 'bookmarks', label: 'Bookmarks', icon: Bookmark },
  { id: 'notes', label: 'Notes', icon: StickyNote },
  { id: 'courses', label: 'Course Progress', icon: Target },
];

function bookmarkHref(item: BookmarkItem): string {
  if (item.type === 'interview') {
    return `/interview-questions/${item.moduleSlug}/${item.slug}`;
  }
  if (item.type === 'problem') {
    return `/problems/${item.courseSlug}/${item.moduleSlug}/${item.slug}`;
  }
  return `/courses/${item.courseSlug}/${item.moduleSlug}/${item.slug}`;
}

function resolveLesson(note: LessonNote): { title: string; href: string } {
  const lesson = getLessonBySlug(note.lessonSlug, note.courseSlug);
  if (lesson) {
    if (note.courseSlug === 'interview-qa') {
      return { title: lesson.title, href: `/interview-questions/${note.moduleSlug}/${note.lessonSlug}` };
    }
    if (note.courseSlug === 'csharp-problems' || note.courseSlug === 'sql-problems') {
      return { title: lesson.title, href: `/problems/${note.courseSlug}/${note.moduleSlug}/${note.lessonSlug}` };
    }
    return { title: lesson.title, href: `/courses/${note.courseSlug}/${note.moduleSlug}/${note.lessonSlug}` };
  }
  return {
    title: note.lessonSlug.replace(/-/g, ' '),
    href: note.courseSlug === 'interview-qa'
      ? `/interview-questions/${note.moduleSlug}/${note.lessonSlug}`
      : `/courses/${note.courseSlug}/${note.moduleSlug}/${note.lessonSlug}`,
  };
}

function getCourseForModule(moduleSlug: string): { courseSlug: string; courseTitle: string } | null {
  const mod = getModuleBySlug(moduleSlug);
  if (!mod) return null;
  if (mod.courseSlug === 'interview-qa') {
    return { courseSlug: 'interview-qa', courseTitle: 'Technical Interview Questions' };
  }
  const course = courses.find((c) => c.slug === mod.courseSlug);
  if (!course) return null;
  return { courseSlug: course.slug, courseTitle: course.title };
}

export function ProgressDashboardClient({ user }: { user: { id: string; name?: string | null; email?: string | null; image?: string | null } }) {
  const router = useRouter();
  const { data: session } = useSession();
  const [progress, setProgress] = useState<Record<string, CategoryProgress>>({});
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);
  const [notes, setNotes] = useState<LessonNote[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [progressRes, bookmarksRes, notesRes] = await Promise.all([
          fetch('/api/progress'),
          fetch('/api/bookmarks'),
          fetch('/api/user/notes'),
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
              })),
              lastVisitedLesson: undefined,
              startedAt: (items as LessonProgress[])[0]?.completedAt,
            };
          }
          setProgress(mapped);
        }

        if (bookmarksRes.ok) {
          const bookmarksData = await bookmarksRes.json();
          setBookmarks(bookmarksData.items || []);
        }

        if (notesRes.ok) {
          const notesData = await notesRes.json();
          setNotes(notesData.notes || []);
        }
      } catch (err) {
        console.error('Failed to fetch dashboard data:', err);
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

  const totalLessonsCount = useMemo(() => {
    return lessons.filter((l) => l.courseSlug !== 'interview-qa').length;
  }, []);

  const totalProblemsCount = useMemo(() => {
    return lessons.filter((l) => l.courseSlug === 'csharp-problems' || l.courseSlug === 'sql-problems').length;
  }, []);

  const totalInterviewCount = useMemo(() => {
    return lessons.filter((l) => l.courseSlug === 'interview-qa').length;
  }, []);

  const completionRate = useMemo(() => {
    const total = totalLessonsCount + totalProblemsCount + totalInterviewCount;
    if (total === 0) return 0;
    return Math.round(((lessonsCompleted + problemsCompleted + interviewCompleted) / total) * 100);
  }, [lessonsCompleted, problemsCompleted, interviewCompleted, totalLessonsCount, totalProblemsCount, totalInterviewCount]);

  const courseProgressList = useMemo<CourseProgressInfo[]>(() => {
    const courseMap = new Map<string, { title: string; completed: Set<string>; total: number }>();

    for (const [cat, catProgress] of Object.entries(progress)) {
      for (const item of catProgress.completedLessons) {
        const courseInfo = getCourseForModule(item.moduleSlug);
        if (!courseInfo) continue;
        const existing = courseMap.get(courseInfo.courseSlug);
        if (existing) {
          existing.completed.add(`${item.moduleSlug}:${item.lessonSlug}`);
        } else {
          courseMap.set(courseInfo.courseSlug, {
            title: courseInfo.courseTitle,
            completed: new Set([`${item.moduleSlug}:${item.lessonSlug}`]),
            total: 0,
          });
        }
      }
    }

    for (const course of courses) {
      const courseLessons = getLessonsForCourse(course.slug);
      const existing = courseMap.get(course.slug);
      if (existing) {
        existing.total = courseLessons.length;
      } else {
        courseMap.set(course.slug, {
          title: course.title,
          completed: new Set(),
          total: courseLessons.length,
        });
      }
    }

    const interviewTotal = lessons.filter((l) => l.courseSlug === 'interview-qa').length;
    if (interviewTotal > 0) {
      const existing = courseMap.get('interview-qa');
      if (existing) {
        existing.total = interviewTotal;
      } else {
        courseMap.set('interview-qa', {
          title: 'Technical Interview Questions',
          completed: new Set(),
          total: interviewTotal,
        });
      }
    }

    return Array.from(courseMap.entries())
      .map(([courseSlug, data]) => ({
        courseSlug,
        courseTitle: data.title,
        completedCount: data.completed.size,
        totalCount: data.total,
        percent: data.total > 0 ? Math.round((data.completed.size / data.total) * 100) : 0,
      }))
      .filter((c) => c.totalCount > 0)
      .sort((a, b) => b.percent - a.percent);
  }, [progress]);

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

  const bookmarkLinks = useMemo(() => bookmarks.slice(0, 50).map((bookmark) => ({
    ...bookmark,
    href: bookmarkHref(bookmark),
  })), [bookmarks]);

  const resolvedNotes = useMemo(() => notes.slice(0, 50).map((note) => ({
    ...note,
    ...resolveLesson(note),
  })), [notes]);

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-accent-fg" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-fg-default">Progress Dashboard</h1>
          <p className="mt-2 text-fg-muted">
            Track your learning journey across all content types.
          </p>
        </div>
        <button
          onClick={handleSignOut}
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-canvas px-4 py-2 text-sm font-medium text-fg-default transition-colors hover:border-accent-fg hover:text-accent-fg"
        >
          <LogOut className="h-4 w-4" aria-hidden="true" />
          Sign out
        </button>
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

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-canvas p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-fg-muted">Bookmarks</p>
                  <p className="mt-1 text-3xl font-bold text-fg-default">{bookmarks.length}</p>
                </div>
                <Bookmark className="h-8 w-8 text-accent-fg" aria-hidden="true" />
              </div>
            </div>
            <div className="rounded-xl border border-border bg-canvas p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-fg-muted">Notes</p>
                  <p className="mt-1 text-3xl font-bold text-fg-default">{notes.length}</p>
                </div>
                <BookOpen className="h-8 w-8 text-accent-fg" aria-hidden="true" />
              </div>
            </div>
            <div className="rounded-xl border border-border bg-canvas p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-fg-muted">Total Completed</p>
                  <p className="mt-1 text-3xl font-bold text-fg-default">{totalCompleted}</p>
                </div>
                <CheckCircle2 className="h-8 w-8 text-success-fg" aria-hidden="true" />
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

      {activeTab === 'bookmarks' && (
        <div className="rounded-xl border border-border bg-canvas p-6">
          <div className="flex items-center gap-2 mb-4">
            <Bookmark className="h-5 w-5 text-accent-fg" aria-hidden="true" />
            <h2 className="text-lg font-semibold text-fg-default">Your Bookmarks</h2>
          </div>
          {bookmarkLinks.length === 0 ? (
            <p className="text-sm text-fg-muted">No bookmarks yet. Save lessons to access them quickly.</p>
          ) : (
            <ul className="space-y-2">
              {bookmarkLinks.map((bookmark) => (
                <li
                  key={bookmark.id}
                  className="flex items-center justify-between rounded-lg border border-border bg-canvas-subtle px-3 py-2 transition-colors hover:border-accent-fg"
                >
                  <Link href={bookmark.href} className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-fg-default">{bookmark.title}</p>
                    <p className="text-xs text-fg-muted capitalize">{bookmark.type}</p>
                  </Link>
                  <span className="text-xs text-fg-subtle">{formatRelativeTime(bookmark.addedAt)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {activeTab === 'notes' && (
        <div className="rounded-xl border border-border bg-canvas p-6">
          <div className="flex items-center gap-2 mb-4">
            <StickyNote className="h-5 w-5 text-accent-fg" aria-hidden="true" />
            <h2 className="text-lg font-semibold text-fg-default">Your Notes</h2>
          </div>
          {resolvedNotes.length === 0 ? (
            <p className="text-sm text-fg-muted">No notes yet. Take notes while learning to remember key concepts.</p>
          ) : (
            <ul className="space-y-2">
              {resolvedNotes.map((note, idx) => (
                <li
                  key={`${note.courseSlug}-${note.moduleSlug}-${note.lessonSlug}-${idx}`}
                  className="rounded-lg border border-border bg-canvas-subtle px-3 py-2 transition-colors hover:border-accent-fg"
                >
                  <Link href={note.href} className="flex flex-col gap-1">
                    <p className="text-sm font-medium text-fg-default">{note.title}</p>
                    <p className="text-xs text-fg-muted line-clamp-2">{note.content}</p>
                    <span className="text-xs text-fg-subtle">{formatRelativeTime(note.updatedAt)}</span>
                  </Link>
                </li>
              ))}
            </ul>
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
            <div className="space-y-4">
              {courseProgressList.map((course) => (
                <Link
                  key={course.courseSlug}
                  href={
                    course.courseSlug === 'interview-qa'
                      ? '/interview-questions'
                      : course.courseSlug === 'csharp-problems' || course.courseSlug === 'sql-problems'
                        ? `/problems/${course.courseSlug}`
                        : `/courses/${course.courseSlug}`
                  }
                  className="block rounded-lg border border-border bg-canvas-subtle p-4 transition-colors hover:border-accent-fg"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm font-semibold text-fg-default">{course.courseTitle}</p>
                    <span className="text-xs text-fg-muted">{course.completedCount}/{course.totalCount}</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-canvas-inset">
                    <div
                      className="h-full rounded-full bg-success-emphasis transition-all duration-500"
                      style={{ width: `${course.percent}%` }}
                      role="progressbar"
                      aria-valuenow={course.percent}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${course.percent}% of ${course.courseTitle} completed`}
                    />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
