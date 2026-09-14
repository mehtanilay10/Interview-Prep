'use client';

import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { useProgress } from '@/hooks/useProgress';
import { SignInPrompt } from '@/components/auth/SignInPrompt';

export function LessonNotesButton({
  courseSlug,
  moduleSlug,
  lessonSlug,
}: {
  courseSlug: string;
  moduleSlug: string;
  lessonSlug: string;
}) {
  const { isLoggedOut } = useProgress();
  const [showSignIn, setShowSignIn] = useState(false);

  const handleClick = () => {
    if (isLoggedOut) {
      setShowSignIn(true);
      return;
    }
    const notesSection = document.getElementById('lesson-notes');
    if (notesSection) {
      notesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="flex items-center gap-1.5 rounded-lg border border-border bg-canvas px-3 py-1.5 text-xs font-medium text-fg-muted transition-colors hover:bg-canvas-subtle hover:text-fg-default"
        aria-label="Jump to notes"
      >
        <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
        Notes
      </button>
      {showSignIn && <SignInPrompt onDismiss={() => setShowSignIn(false)} />}
    </>
  );
}
