'use client';

import { Bookmark } from 'lucide-react';
import { useBookmarks } from '@/hooks/useBookmarks';
import type { BookmarkItem } from '@/types';

export function BookmarkButton({
  item,
}: {
  item: Omit<BookmarkItem, 'id' | 'addedAt'>;
}) {
  const { toggleBookmark, isBookmarked } = useBookmarks();
  const bookmarked = isBookmarked(item.slug, item.type);

  return (
    <button
      onClick={() => toggleBookmark(item)}
      className={`no-print flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
        bookmarked
          ? 'border-accent-fg bg-accent-subtle text-accent-fg'
          : 'border-border bg-canvas text-fg-muted hover:bg-canvas-subtle hover:text-fg-default'
      }`}
      aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
      aria-pressed={bookmarked}
    >
      <Bookmark className={`h-3.5 w-3.5 ${bookmarked ? 'fill-current' : ''}`} aria-hidden="true" />
      {bookmarked ? 'Bookmarked' : 'Bookmark'}
    </button>
  );
}
