'use client';

import { useEffect, useCallback, useState } from 'react';

type ShortcutHandler = () => void;

const shortcuts: Record<string, { description: string; handler: ShortcutHandler }> = {};

export function registerShortcut(key: string, description: string, handler: ShortcutHandler) {
  shortcuts[key] = { description, handler };
}

export function unregisterShortcut(key: string) {
  delete shortcuts[key];
}

export function useKeyboardShortcuts() {
  const [showHelp, setShowHelp] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const shortcut = shortcuts[key];
      if (shortcut) {
        e.preventDefault();
        shortcut.handler();
      }
      if (e.key === '?' && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setShowHelp((prev) => !prev);
      }
    },
    []
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return { showHelp, setShowHelp };
}

export function KeyboardShortcutsHelp() {
  const { showHelp, setShowHelp } = useKeyboardShortcuts();
  const entries = Object.entries(shortcuts);

  if (!showHelp) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={() => setShowHelp(false)}
    >
      <div
        className="max-w-md rounded-xl border border-border bg-canvas p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold text-fg-default">Keyboard Shortcuts</h3>
          <button
            onClick={() => setShowHelp(false)}
            className="rounded-lg p-1 text-fg-muted transition-colors hover:bg-canvas-subtle hover:text-fg-default"
            aria-label="Close shortcuts"
          >
            ✕
          </button>
        </div>
        <div className="space-y-2">
          {entries.length === 0 ? (
            <p className="text-sm text-fg-muted">No shortcuts registered.</p>
          ) : (
            entries.map((entry) => {
              const shortcutKey = entry[0];
              const shortcutData = entry[1];
              return (
                <div key={shortcutKey} className="flex items-center justify-between rounded-lg border border-border bg-canvas-subtle px-3 py-2">
                  <span className="text-sm text-fg-default">{shortcutData.description}</span>
                  <kbd className="rounded border border-border bg-canvas px-2 py-0.5 text-xs font-mono text-fg-muted">
                    {shortcutKey.toUpperCase()}
                  </kbd>
                </div>
              );
            })
          )}
        </div>
        <p className="mt-4 text-xs text-fg-subtle">
          Press <kbd className="rounded border border-border bg-canvas px-1.5 py-0.5 text-xs font-mono">?</kbd> to toggle this help.
        </p>
      </div>
    </div>
  );
}
