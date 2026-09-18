'use client';

import { useContext, useState } from 'react';
import { BookOpen } from 'lucide-react';
import { useProgress } from '@/hooks/useProgress';
import { SignInPrompt } from '@/components/auth/SignInPrompt';
import { useNotesModal } from './NotesModalContext';

interface LessonNotesButtonProps {
  courseSlug: string;
  moduleSlug: string;
  lessonSlug: string;
  onOpen?: () => void;
}

export function LessonNotesButton({ courseSlug, moduleSlug, lessonSlug, onOpen }: LessonNotesButtonProps) {
  const { isLoggedOut } = useProgress();
  const [showSignIn, setShowSignIn] = useState(false);
  const { openNotes } = useNotesModal();

  const handleClick = () => {
    if (isLoggedOut) {
      setShowSignIn(true);
      return;
    }
    if (onOpen) {
      onOpen();
    } else {
      openNotes();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="flex items-center gap-1.5 rounded-lg border border-border bg-canvas px-3 py-1.5 text-xs font-medium text-fg-muted transition-colors hover:bg-canvas-subtle hover:text-fg-default"
        aria-label="Open notes"
      >
        <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
        Notes
      </button>
      {showSignIn && <SignInPrompt onDismiss={() => setShowSignIn(false)} />}
    </>
  );
}
