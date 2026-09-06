'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-16 text-center">
      <AlertTriangle className="mb-6 h-12 w-12 text-attention-fg" aria-hidden="true" />
      <h1 className="mb-2 text-2xl font-bold text-fg-default sm:text-3xl">Something went wrong</h1>
      <p className="mb-8 text-sm text-fg-muted sm:text-base">
        We hit an unexpected error while loading this page. You can try again or go back to the home page.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-lg bg-accent-fg px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-emphasis"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-fg-default transition-colors hover:border-accent-fg hover:text-accent-fg"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
