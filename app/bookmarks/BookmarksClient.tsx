'use client';

import { useEffect, useState } from 'react';
import { Bookmark } from 'lucide-react';
import Link from 'next/link';
import { cn, formatRelativeTime } from '@/lib/utils';

interface BookmarkItem {
  id: string;
  type: string;
  slug: string;
  title: string;
  courseSlug: string;
  moduleSlug: string;
  addedAt: string;
}

interface BookmarksClientProps {
  user: {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

function bookmarkHref(item: BookmarkItem): string {
  if (item.type === 'interview') {
    return `/interview-questions/${item.moduleSlug}/${item.slug}`;
  }
  if (item.type === 'problem') {
    return `/problems/${item.courseSlug}/${item.moduleSlug}/${item.slug}`;
  }
  return `/courses/${item.courseSlug}/${item.moduleSlug}/${item.slug}`;
}

export function BookmarksClient({ user }: BookmarksClientProps) {
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/bookmarks');
        if (res.ok) {
          const data = await res.json();
          setBookmarks(data.items || []);
        }
      } catch (err) {
        console.error('Failed to fetch bookmarks:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-fg-default">Bookmarks</h1>
        <p className="mt-2 text-fg-muted">
          Your saved lessons, problems, and interview questions.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-canvas p-6">
        <div className="flex items-center gap-2 mb-4">
          <Bookmark className="h-5 w-5 text-accent-fg" aria-hidden="true" />
          <h2 className="text-lg font-semibold text-fg-default">Your Bookmarks</h2>
        </div>
        {loading ? (
          <div className="space-y-2">
            <div className="h-16 animate-pulse rounded-lg bg-canvas-inset" />
            <div className="h-16 animate-pulse rounded-lg bg-canvas-inset" />
          </div>
        ) : bookmarks.length === 0 ? (
          <p className="text-sm text-fg-muted">No bookmarks yet. Save lessons to access them quickly.</p>
        ) : (
          <ul className="space-y-2">
            {bookmarks.map((bookmark) => {
              const href = bookmarkHref(bookmark);
              return (
                <li
                  key={bookmark.id}
                  className="flex items-center justify-between rounded-lg border border-border bg-canvas-subtle px-3 py-2 transition-colors hover:border-accent-fg"
                >
                  <Link href={href} className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-fg-default">{bookmark.title}</p>
                    <p className="text-xs text-fg-muted capitalize">{bookmark.type}</p>
                  </Link>
                  <span className="text-xs text-fg-subtle">{formatRelativeTime(bookmark.addedAt)}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
