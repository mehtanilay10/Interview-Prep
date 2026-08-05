'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { X, Play } from 'lucide-react';

const STORAGE_KEY = 'interview_prep_last_path';
const PROMPT_SHOWN_KEY = 'interview_prep_prompt_shown';

export function ContinuePrompt() {
  const pathname = usePathname();
  const router = useRouter();
  const [lastPath, setLastPath] = useState<string | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    if (!pathname) return;

    // Check if we just loaded the app and there's a stored path
    const stored = localStorage.getItem(STORAGE_KEY);
    
    // We only want to prompt if we are at home or a different major section,
    // and we have a stored path that is a lesson or course.
    if (stored && stored !== pathname && stored !== '/' && !pathname.startsWith(stored)) {
      // Show prompt if the user hasn't seen it in this session
      const promptShown = sessionStorage.getItem(PROMPT_SHOWN_KEY);
      if (!promptShown) {
        setLastPath(stored);
        setShowPrompt(true);
        sessionStorage.setItem(PROMPT_SHOWN_KEY, 'true');
      }
    }

    // Always update the stored path to the current one
    // Only store significant pages, not simple static pages if possible, 
    // but storing all is fine for now.
    if (pathname !== '/') {
      localStorage.setItem(STORAGE_KEY, pathname);
    }
  }, [pathname]);

  if (!showPrompt || !lastPath) return null;

  return (
    <div className="fixed z-50 bottom-4 left-4 right-4 sm:bottom-6 sm:left-auto sm:right-6 sm:w-full sm:max-w-sm rounded-lg border border-border bg-canvas shadow-lg p-4 animate-slide-up">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-fg-default">Pick up where you left off?</h3>
            <p className="text-sm text-fg-muted mt-1">
              You were previously viewing a lesson. Would you like to continue?
            </p>
          </div>
          <button
            onClick={() => setShowPrompt(false)}
            className="text-fg-muted hover:text-fg-default p-1"
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="flex gap-2 justify-end mt-2">
          <button
            onClick={() => setShowPrompt(false)}
            className="px-3 py-1.5 text-sm font-medium text-fg-muted hover:text-fg-default transition-colors rounded-md hover:bg-canvas-subtle"
          >
            Dismiss
          </button>
          <button
            onClick={() => {
              setShowPrompt(false);
              router.push(lastPath);
            }}
            className="px-3 py-1.5 text-sm font-medium bg-accent-emphasis text-fg-onEmphasis rounded-md hover:opacity-90 transition-opacity flex items-center gap-1.5"
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
