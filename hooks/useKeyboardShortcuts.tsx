'use client';

import { useEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

type ShortcutHandler = () => void;

const shortcuts: Record<string, { description: string; handler: ShortcutHandler }> = {};

export function registerShortcut(key: string, description: string, handler: ShortcutHandler) {
  shortcuts[key] = { description, handler };
}

export function unregisterShortcut(key: string) {
  delete shortcuts[key];
}

/** Whether the user is currently typing, so single-key shortcuts must not fire. */
function isTypingInField(target: EventTarget | null): boolean {
  const el = target as HTMLElement | null;
  if (!el) return false;
  return (
    el.tagName === 'INPUT' ||
    el.tagName === 'TEXTAREA' ||
    el.tagName === 'SELECT' ||
    el.isContentEditable
  );
}

/**
 * Global keyboard shortcut dispatcher.
 *
 * Registered shortcuts (`registerShortcut`) are matched by a single lowercase
 * key and only fire when the user is not typing. `?` toggles the help dialog.
 * Mounted once, in the root layout.
 */
export function KeyboardShortcuts() {
  const [showHelp, setShowHelp] = useState(false);
  const router = useRouter();

  // Built-in `j`/`k` navigation between lessons. The links themselves are
  // rendered by the lesson pages with `data-lesson-nav`, so this works for both
  // course and problem routes without either page knowing about shortcuts.
  const goToLessonNav = useCallback(
    (direction: 'prev' | 'next') => {
      const link = document.querySelector<HTMLAnchorElement>(
        `a[data-lesson-nav="${direction}"]`
      );
      if (link?.href) router.push(link.getAttribute('href') ?? link.href);
    },
    [router]
  );

  useEffect(() => {
    registerShortcut('j', 'Next lesson', () => goToLessonNav('next'));
    registerShortcut('k', 'Previous lesson', () => goToLessonNav('prev'));
    return () => {
      unregisterShortcut('j');
      unregisterShortcut('k');
    };
  }, [goToLessonNav]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (isTypingInField(document.activeElement)) return;

    if (e.key === '?' || (e.key === '/' && e.shiftKey)) {
      e.preventDefault();
      setShowHelp((prev) => !prev);
      return;
    }

    if (e.key === 'Escape') {
      setShowHelp(false);
      return;
    }

    const shortcut = shortcuts[e.key.toLowerCase()];
    if (shortcut) {
      e.preventDefault();
      shortcut.handler();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return <KeyboardShortcutsHelp open={showHelp} onClose={() => setShowHelp(false)} />;
}

/**
 * Modal listing every registered shortcut. Open/close state is owned by
 * `KeyboardShortcuts` so there is exactly one window keydown listener.
 */
interface HelpProps {
  open: boolean;
  onClose: () => void;
}
export function KeyboardShortcutsHelp({ open, onClose }: HelpProps) {
  if (!open) return null;
  // `?` toggles this dialog but isn't a "registered shortcut", so it is added
  // explicitly to the list it renders.
  const entries: [string, string][] = [
    ...Object.entries(shortcuts).map(([key, data]) => [key, data.description] as [string, string]),
    ['?', 'Toggle this help'],
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Keyboard shortcuts"
    >
      <div
        className="max-w-md rounded-xl border border-border bg-canvas-overlay p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold text-fg-default">Keyboard Shortcuts</h3>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-fg-muted transition-colors hover:bg-canvas-subtle hover:text-fg-default"
            aria-label="Close shortcuts"
          >
            ✕
          </button>
        </div>
        <div className="space-y-2">
          {entries.map(([key, description]) => (
            <div
              key={key}
              className="flex items-center justify-between rounded-lg border border-border bg-canvas-subtle px-3 py-2"
            >
              <span className="text-sm text-fg-default">{description}</span>
              <kbd className="rounded border border-border bg-canvas px-2 py-0.5 text-xs font-mono text-fg-muted">
                {key.toUpperCase()}
              </kbd>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-fg-subtle">
          Press <kbd className="rounded border border-border bg-canvas px-1.5 py-0.5 text-xs font-mono">?</kbd> to toggle this help.
        </p>
      </div>
    </div>
  );
}
