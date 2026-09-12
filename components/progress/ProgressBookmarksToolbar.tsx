'use client';

import { useState, useEffect } from 'react';
import { Download, Upload, Bookmark, CheckCircle, Keyboard } from 'lucide-react';
import { useProgress } from '@/hooks/useProgress';
import { useBookmarks } from '@/hooks/useBookmarks';
import { KeyboardShortcutsHelp } from '@/hooks/useKeyboardShortcuts';
import { registerShortcut } from '@/hooks/useKeyboardShortcuts';

export function ProgressBookmarksToolbar() {
  const { exportProgress, importProgress, stats } = useProgress();
  const { exportBookmarks, importBookmarks, stats: bookmarkStats } = useBookmarks();
  const [showShortcuts, setShowShortcuts] = useState(false);

  useEffect(() => {
    registerShortcut('?', 'Show keyboard shortcuts', () => setShowShortcuts((prev) => !prev));
  }, []);

  return (
    <>
      <div className="no-print fixed bottom-4 right-4 z-40 flex flex-col gap-2">
        <div className="rounded-xl border border-border bg-canvas/95 p-2 shadow-lg backdrop-blur-sm">
          <div className="flex flex-col gap-1">
            <button
              onClick={exportProgress}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-fg-muted transition-colors hover:bg-canvas-subtle hover:text-fg-default"
              aria-label="Export progress"
              title="Export progress as JSON"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Export Progress
            </button>
            <button
              onClick={importProgress}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-fg-muted transition-colors hover:bg-canvas-subtle hover:text-fg-default"
              aria-label="Import progress"
              title="Import progress from JSON"
            >
              <Upload className="h-4 w-4" aria-hidden="true" />
              Import Progress
            </button>
            <button
              onClick={exportBookmarks}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-fg-muted transition-colors hover:bg-canvas-subtle hover:text-fg-default"
              aria-label="Export bookmarks"
              title="Export bookmarks as JSON"
            >
              <Bookmark className="h-4 w-4" aria-hidden="true" />
              Export Bookmarks
            </button>
            <button
              onClick={importBookmarks}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-fg-muted transition-colors hover:bg-canvas-subtle hover:text-fg-default"
              aria-label="Import bookmarks"
              title="Import bookmarks from JSON"
            >
              <Upload className="h-4 w-4" aria-hidden="true" />
              Import Bookmarks
            </button>
            <button
              onClick={() => setShowShortcuts(true)}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-fg-muted transition-colors hover:bg-canvas-subtle hover:text-fg-default"
              aria-label="Show keyboard shortcuts"
            >
              <Keyboard className="h-4 w-4" aria-hidden="true" />
              Shortcuts
            </button>
          </div>
          <div className="mt-2 border-t border-border pt-2">
            <div className="flex items-center gap-1 text-xs text-fg-subtle">
              <CheckCircle className="h-3 w-3" aria-hidden="true" />
              <span>{stats.totalCompleted} completed</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-fg-subtle">
              <Bookmark className="h-3 w-3" aria-hidden="true" />
              <span>{bookmarkStats.total} bookmarks</span>
            </div>
          </div>
        </div>
      </div>
      <KeyboardShortcutsHelp />
    </>
  );
}
