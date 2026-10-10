'use client';

/**
 * Lazy YouTube player. Kept separate from the embed so the JSON-LD and headings
 * stay in the server component while the iframe (and its loading cost) is
 * client-side only.
 */
import { useState } from 'react';

interface LessonVideoPlayerProps {
  videoId: string;
  title: string;
}

export function LessonVideoPlayer({ videoId, title }: LessonVideoPlayerProps) {
  const [activated, setActivated] = useState(false);

  if (!activated) {
    return (
      <button
        type="button"
        onClick={() => setActivated(true)}
        className="group relative block aspect-video w-full bg-gradient-to-br from-canvas-subtle to-canvas-inset focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-fg"
        aria-label={`Play the video lesson: ${title}`}
      >
        {/* The thumbnail comes from YouTube's CDN (not our origin), matching the
            existing ImageBlock/ImageModal pattern in ContentBlockRenderer.tsx. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-90"
          loading="lazy"
        />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform group-hover:scale-105">
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
        <span className="absolute bottom-3 left-3 rounded bg-black/70 px-2 py-1 text-xs font-medium text-white">
          Watch on YouTube
        </span>
      </button>
    );
  }

  return (
    <div className="relative aspect-video w-full">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
