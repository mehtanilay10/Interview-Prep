import type { Metadata } from 'next';
import { requireReviewerPage } from '@/lib/videoReviewer';
import { getReviewQueue } from '@/lib/videoAssets';
import { ReviewQueue } from '@/components/video/ReviewQueue';

export const metadata: Metadata = {
  title: 'Video Review Queue | Interview Prep',
  description: 'Review generated educational videos before they are published to YouTube.',
};


export default async function VideoReviewPage() {
  const reviewer = await requireReviewerPage();
  const queue = await getReviewQueue(20);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-fg">Video pipeline</p>
        <h1 className="mt-1 text-2xl font-bold text-fg-default sm:text-3xl">Review queue</h1>
        <p className="mt-2 max-w-2xl text-base text-fg-muted">
          Approving publishes the video to YouTube immediately; rejecting returns it to the pipeline with your
          reason. Every decision is recorded with your account. Keyboard: <kbd>A</kbd> approve, <kbd>R</kbd> reject,{' '}
          <kbd>N</kbd> next.
        </p>
        <p className="mt-1 text-sm text-fg-subtle">Signed in as reviewer: {reviewer.email}</p>
      </header>

      <ReviewQueue initialQueue={serialiseQueue(queue)} />
    </main>
  );
}

/**
 * Server components cannot pass Dates to client components, so the queue is
 * serialised here. The client re-fetches fresh state through the API.
 */
function serialiseQueue(queue: Awaited<ReturnType<typeof getReviewQueue>>) {
  return queue.map((item) => ({
    assetId: item.assetId,
    articleId: item.articleId,
    title: item.title,
    description: item.description,
    area: item.area,
    courseTitle: item.courseTitle,
    moduleTitle: item.moduleTitle,
    version: item.version,
    durationMs: item.durationMs,
    canonicalUrl: item.canonicalUrl,
    youtubeVideoId: item.youtubeVideoId,
    claimedBy: item.claimedBy,
    script: item.script,
    qa: item.qa,
  }));
}
