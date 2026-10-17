'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Roadmap page error:', error);
  }, [error]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <div className="rounded-xl border border-border bg-canvas p-8 text-center dark:bg-canvas-subtle">
        <h2 className="text-xl font-bold text-fg-default">Something went wrong</h2>
        <p className="mt-2 text-sm text-fg-muted">
          We could not load the learning roadmap. Please try again.
        </p>
        <button
          onClick={reset}
          className="mt-4 rounded-lg bg-accent-fg px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-emphasis"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
