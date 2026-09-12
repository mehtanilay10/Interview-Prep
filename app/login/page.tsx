'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Bookmark, CheckCircle2, BarChart3 } from 'lucide-react';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn('google', { callbackUrl: '/' });
    } catch (err) {
      console.error('Sign in error:', err);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="rounded-xl border border-border bg-canvas shadow-lg p-8">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-subtle">
              <BarChart3 className="h-6 w-6 text-accent-fg" aria-hidden="true" />
            </div>
            <h1 className="text-2xl font-bold text-fg-default">Welcome to Interview Prep</h1>
            <p className="mt-2 text-sm text-fg-muted">
              Sign in to sync your progress and bookmarks across devices.
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <button
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-canvas px-4 py-2.5 text-sm font-medium text-fg-default transition-colors hover:bg-canvas-subtle disabled:opacity-50"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              {isLoading ? 'Signing in...' : 'Continue with Google'}
            </button>
          </div>

          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-2 text-xs text-fg-muted">
              <CheckCircle2 className="h-4 w-4 text-success-fg" aria-hidden="true" />
              <span>Track progress across all courses</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-fg-muted">
              <Bookmark className="h-4 w-4 text-accent-fg" aria-hidden="true" />
              <span>Save bookmarks across devices</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-fg-muted">
              <BarChart3 className="h-4 w-4 text-accent-fg" aria-hidden="true" />
              <span>View your progress dashboard</span>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-fg-subtle">
            By signing in, you agree to our terms of service.
          </p>
        </div>
      </div>
    </div>
  );
}
