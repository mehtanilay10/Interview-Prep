'use client';

import { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Bookmark, CheckCircle2, LogOut, TrendingUp, Award, Target, BookOpen } from 'lucide-react';
import { cn, formatRelativeTime } from '@/lib/utils';

interface LessonProgress {
  lessonSlug: string;
  moduleSlug: string;
  completedAt: string;
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

export function ProgressDashboardClient({ user }: { user: { id: string; name?: string | null; email?: string | null; image?: string | null } }) {
  const router = useRouter();
  const { data: session } = useSession();
  const [progress, setProgress] = useState<Record<string, CategoryProgress>>({});
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);
  const [notes, setNotes] = useState<LessonNote[]>([]);
  const [loading, setLoading] = useState(true);

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

  const totalCompleted = Object.values(progress).reduce(
    (sum, cat) => sum + cat.completedLessons.length,
    0
  );

  const lessonsCompleted = progress.lessons?.completedLessons.length || 0;
  const problemsCompleted = progress.problems?.completedLessons.length || 0;
  const interviewCompleted = progress.interviewQuestions?.completedLessons.length || 0;

  const categoryStats = [
    { label: 'Lessons', count: lessonsCompleted, href: '/courses', icon: CheckCircle2, color: 'text-success-fg' },
    { label: 'Problems', count: problemsCompleted, href: '/problems', icon: Target, color: 'text-accent-fg' },
    { label: 'Interviews', count: interviewCompleted, href: '/interview-questions', icon: TrendingUp, color: 'text-warning-fg' },
  ];

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
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-fg-default">Progress Dashboard</h1>
        <p className="mt-2 text-fg-muted">
          Track your learning journey across all content types.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {categoryStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-border bg-canvas p-5 transition-colors hover:border-accent-fg cursor-pointer"
            onClick={() => router.push(stat.href)}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-fg-muted">{stat.label}</p>
                <p className="mt-1 text-3xl font-bold text-fg-default">{stat.count}</p>
              </div>
              <stat.icon className={`h-8 w-8 ${stat.color}`} aria-hidden="true" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-canvas p-6">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="h-5 w-5 text-success-fg" aria-hidden="true" />
            <h2 className="text-lg font-semibold text-fg-default">Recent Completions</h2>
          </div>
          {totalCompleted === 0 ? (
            <p className="text-sm text-fg-muted">No completions yet. Start learning!</p>
          ) : (
            <ul className="space-y-2">
              {Object.values(progress)
                .flatMap((cat) =>
                  cat.completedLessons.map((lesson) => ({
                    ...lesson,
                    category: Object.keys(progress).find((key) => progress[key] === cat),
                  }))
                )
                .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
                .slice(0, 10)
                .map((lesson) => (
                  <li
                    key={`${lesson.category}-${lesson.lessonSlug}`}
                    className="flex items-center justify-between rounded-lg border border-border bg-canvas-subtle px-3 py-2"
                  >
                    <div>
                      <p className="text-sm font-medium text-fg-default">{lesson.lessonSlug.replace(/-/g, ' ')}</p>
                      <p className="text-xs text-fg-muted">{lesson.category}</p>
                    </div>
                    <span className="text-xs text-fg-subtle">{formatRelativeTime(lesson.completedAt)}</span>
                  </li>
                ))}
            </ul>
          )}
        </div>

        <div className="rounded-xl border border-border bg-canvas p-6">
          <div className="flex items-center gap-2 mb-4">
            <Bookmark className="h-5 w-5 text-accent-fg" aria-hidden="true" />
            <h2 className="text-lg font-semibold text-fg-default">Your Bookmarks</h2>
          </div>
          {bookmarks.length === 0 ? (
            <p className="text-sm text-fg-muted">No bookmarks yet. Save lessons to access them quickly.</p>
          ) : (
            <ul className="space-y-2">
              {bookmarks.slice(0, 10).map((bookmark) => (
                <li
                  key={bookmark.id}
                  className="flex items-center justify-between rounded-lg border border-border bg-canvas-subtle px-3 py-2"
                >
                  <div>
                    <p className="text-sm font-medium text-fg-default">{bookmark.title}</p>
                    <p className="text-xs text-fg-muted capitalize">{bookmark.type}</p>
                  </div>
                  <span className="text-xs text-fg-subtle">{formatRelativeTime(bookmark.addedAt)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {notes.length > 0 && (
        <div className="mt-8 rounded-xl border border-border bg-canvas p-6">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-5 w-5 text-accent-fg" aria-hidden="true" />
            <h2 className="text-lg font-semibold text-fg-default">Your Recent Notes</h2>
          </div>
          <ul className="space-y-2">
            {notes.slice(0, 10).map((note, idx) => (
              <li
                key={`${note.courseSlug}-${note.moduleSlug}-${note.lessonSlug}-${idx}`}
                className="rounded-lg border border-border bg-canvas-subtle px-3 py-2"
              >
                <p className="text-sm font-medium text-fg-default">{note.lessonSlug.replace(/-/g, ' ')}</p>
                <p className="text-xs text-fg-muted line-clamp-2">{note.content}</p>
                <span className="text-xs text-fg-subtle">{formatRelativeTime(note.updatedAt)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
