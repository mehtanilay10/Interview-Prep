import type { Metadata } from 'next';
import { requireReviewerPage } from '@/lib/videoReviewer';
import { getVideoDashboardStats, getVideoFailures, getStaleVideoCount } from '@/lib/videoAssets';
import { VideosDashboard } from '@/components/video/VideosDashboard';

export const metadata: Metadata = {
  title: 'Video Pipeline | Interview Prep',
  description: 'Monitor article-to-video generation, review queue, failures and publishing progress.',
};


export default async function VideosDashboardPage() {
  await requireReviewerPage();

  const [stats, failures, staleCount] = await Promise.all([
    getVideoDashboardStats(),
    getVideoFailures(25),
    getStaleVideoCount(),
  ]);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-fg">Video pipeline</p>
        <h1 className="mt-1 text-2xl font-bold text-fg-default sm:text-3xl">Generation dashboard</h1>
        <p className="mt-2 max-w-2xl text-base text-fg-muted">
          Every article that becomes a video moves through this pipeline. Videos only go public after a
          reviewer approves them in the review queue.
        </p>
      </header>

      <VideosDashboard stats={stats} failures={failures} staleCount={staleCount} />
    </main>
  );
}
