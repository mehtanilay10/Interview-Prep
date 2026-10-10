/**
 * YouTube embed for lesson pages (decision D3: YouTube hosts every video).
 *
 * Rendered only when a publication has been reviewed and made public, so the
 * player never appears for in-flight or rejected work. The privacy-enhanced
 * domain is used so no tracking cookies are set before the visitor plays.
 */
import { LessonVideoPlayer } from './LessonVideoPlayer';

interface LessonVideoEmbedProps {
  videoId: string;
  title: string;
  description: string | null;
  publishedAt: Date | null;
  /** Canonical article URL, used for the VideoObject markup. */
  articleUrl: string;
  /** Article author/host for the structured data. */
  authorName?: string;
}

export function LessonVideoEmbed({
  videoId,
  title,
  description,
  publishedAt,
  articleUrl,
  authorName = 'Interview Prep',
}: LessonVideoEmbedProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: title,
    ...(description ? { description: description.slice(0, 4000) } : {}),
    thumbnailUrl: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
    uploadDate: (publishedAt ?? new Date()).toISOString(),
    embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
    url: `https://www.youtube.com/watch?v=${videoId}`,
    publisher: {
      '@type': 'Organization',
      name: authorName,
    },
  };

  return (
    <section className="mb-8" aria-labelledby="lesson-video-heading">
      <h2 id="lesson-video-heading" className="mb-3 text-lg font-bold text-fg-default">
        Video lesson
      </h2>
      <div className="overflow-hidden rounded-lg border border-border bg-canvas-subtle">
        <LessonVideoPlayer videoId={videoId} title={title} />
      </div>
      <p className="mt-2 text-xs text-fg-subtle">
        Prefer reading? The full article continues below.{' '}
        <a href={articleUrl} className="text-accent-fg hover:underline">
          Jump to the article
        </a>
        .
      </p>
      <script
        type="application/ld+json"
        // JSON-LD is data, not markup; the fields are all locally derived.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </section>
  );
}
