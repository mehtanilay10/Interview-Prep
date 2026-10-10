'use client';

/**
 * Pipeline dashboard: totals by state, per-course progress, measured review
 * throughput (drives the ETA), recent runs and the failure list.
 */
import Link from 'next/link';
import type { VideoDashboardStats, VideoFailure } from '@/lib/videoAssets';

interface VideosDashboardProps {
  stats: VideoDashboardStats;
  failures: VideoFailure[];
  staleCount: number;
}

const STATUS_LABELS: Record<string, string> = {
  pending: 'Queued',
  generating: 'Generating',
  awaiting_review: 'Awaiting review',
  approved: 'Approved',
  uploading: 'Uploading',
  published: 'Published',
  failed: 'Failed',
  stale: 'Needs rebuild',
  rejected: 'Rejected',
};

function formatDuration(ms: number | null): string {
  if (ms === null) return '—';
  const totalSeconds = Math.round(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}m ${String(seconds).padStart(2, '0')}s`;
}

export function VideosDashboard({ stats, failures, staleCount }: VideosDashboardProps) {
  const totalAssets = stats.totals.reduce((sum, row) => sum + row.count, 0);

  return (
    <div className="space-y-8">
      {/* Headline numbers */}
      <section aria-labelledby="totals-heading">
        <h2 id="totals-heading" className="mb-3 text-lg font-bold text-fg-default">
          Pipeline totals
        </h2>
        <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Articles tracked" value={stats.articles.total.toLocaleString()} />
          <Stat label="With video assets" value={stats.articles.withVideo.toLocaleString()} />
          <Stat label="Published" value={stats.queue.published.toLocaleString()} accent />
          <Stat label="Assets in flight" value={Math.max(0, totalAssets - stats.queue.published).toLocaleString()} />
        </dl>
      </section>

      {/* Status breakdown */}
      <section aria-labelledby="states-heading">
        <h2 id="states-heading" className="mb-3 text-lg font-bold text-fg-default">
          Assets by state
        </h2>
        <ul className="flex flex-wrap gap-2">
          {stats.totals.map((row) => (
            <li key={row.status} className="rounded-full border border-border bg-canvas-subtle px-3 py-1 text-sm text-fg-muted">
              {STATUS_LABELS[row.status] ?? row.status}
              <span className="ml-2 font-semibold text-fg-default">{row.count.toLocaleString()}</span>
            </li>
          ))}
          {stats.totals.length === 0 && <li className="text-sm text-fg-muted">No assets yet.</li>}
        </ul>
      </section>

      {/* Review queue and pacing */}
      <section aria-labelledby="queue-heading" className="rounded-lg border border-border bg-canvas-subtle p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 id="queue-heading" className="text-lg font-bold text-fg-default">
            Review queue
          </h2>
          <Link
            href="/videos/review"
            className="rounded-lg border border-accent-fg px-3 py-2 text-sm font-medium text-accent-fg transition-colors hover:bg-accent-fg hover:text-canvas-default"
          >
            Open review queue ({stats.queue.awaitingReview})
          </Link>
        </div>
        <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <Stat label="Awaiting review" value={stats.queue.awaitingReview.toLocaleString()} />
          <Stat label="Approved" value={stats.queue.approved.toLocaleString()} />
          <Stat label="Rejected" value={stats.queue.rejected.toLocaleString()} />
          <Stat label="Needs rebuild" value={staleCount.toLocaleString()} />
          <Stat label="Failed" value={stats.queue.failed.toLocaleString()} />
          <Stat label="Reviews / day" value={stats.eta.reviewsPerDay === null ? '—' : stats.eta.reviewsPerDay.toFixed(1)} />
        </dl>
        <p className="mt-3 text-sm text-fg-muted">
          {stats.eta.daysRemaining === null
            ? 'The ETA will appear once reviewers start clearing the queue.'
            : `At the current review rate, the queue clears in about ${stats.eta.daysRemaining} days.`}
        </p>
      </section>

      {/* Per-course progress */}
      <section aria-labelledby="courses-heading">
        <h2 id="courses-heading" className="mb-3 text-lg font-bold text-fg-default">
          Coverage by course
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-canvas-subtle text-xs uppercase tracking-wider text-fg-subtle">
              <tr>
                <th scope="col" className="px-4 py-2">Course</th>
                <th scope="col" className="px-4 py-2">Area</th>
                <th scope="col" className="px-4 py-2 text-right">Articles</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {stats.perCourse.map((course) => (
                <tr key={`${course.area}-${course.courseSlug}`}>
                  <td className="px-4 py-2 text-fg-default">{course.title}</td>
                  <td className="px-4 py-2 text-fg-muted">{course.area === 'problems' ? 'Problems' : 'Courses'}</td>
                  <td className="px-4 py-2 text-right text-fg-muted">{course.total.toLocaleString()}</td>
                </tr>
              ))}
              {stats.perCourse.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-4 py-6 text-center text-fg-muted">
                    No articles discovered yet — run the discover job.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Recent runs */}
      <section aria-labelledby="runs-heading">
        <h2 id="runs-heading" className="mb-3 text-lg font-bold text-fg-default">
          Recent pipeline runs
        </h2>
        <ul className="divide-y divide-border rounded-lg border border-border">
          {stats.recentRuns.map((run) => (
            <li key={run.id} className="flex flex-wrap items-center justify-between gap-2 px-4 py-2 text-sm">
              <span className="font-medium text-fg-default">{run.kind}</span>
              <span className="text-fg-subtle">{new Date(run.startedAt).toLocaleString()}</span>
              <span className="text-fg-muted">
                {run.jobsSucceeded} ok, {run.jobsFailed} failed of {run.jobsClaimed} claimed
              </span>
              {run.error && <span className="text-red-600 dark:text-red-400">{run.error.slice(0, 120)}</span>}
            </li>
          ))}
          {stats.recentRuns.length === 0 && <li className="px-4 py-6 text-center text-fg-muted">No runs recorded yet.</li>}
        </ul>
      </section>

      {/* Failures */}
      <section aria-labelledby="failures-heading">
        <h2 id="failures-heading" className="mb-3 text-lg font-bold text-fg-default">
          Failed assets
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-canvas-subtle text-xs uppercase tracking-wider text-fg-subtle">
              <tr>
                <th scope="col" className="px-4 py-2">Article</th>
                <th scope="col" className="px-4 py-2">Area</th>
                <th scope="col" className="px-4 py-2 text-right">Duration</th>
                <th scope="col" className="px-4 py-2">Last error</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {failures.map((failure) => (
                <tr key={failure.assetId}>
                  <td className="px-4 py-2 text-fg-default">
                    {failure.title} <span className="text-fg-subtle">v{failure.version}</span>
                  </td>
                  <td className="px-4 py-2 text-fg-muted">{failure.area === 'problems' ? 'Problems' : 'Courses'}</td>
                  <td className="px-4 py-2 text-right text-fg-muted">{formatDuration(failure.durationMs)}</td>
                  <td className="px-4 py-2 text-red-600 dark:text-red-400">{failure.lastError ?? '—'}</td>
                </tr>
              ))}
              {failures.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-4 py-6 text-center text-fg-muted">
                    No failed assets. Nothing to repair.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-sm text-fg-muted">
          Assets marked <em>article-too-small</em> are lessons with too little content to narrate; they can be
          requeued after the article is expanded or after switching to the LLM writer.
        </p>
      </section>
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-lg border border-border bg-canvas-default px-3 py-2">
      <dt className="text-xs uppercase tracking-wider text-fg-subtle">{label}</dt>
      <dd className={accent ? 'mt-1 text-xl font-bold text-accent-fg' : 'mt-1 text-xl font-bold text-fg-default'}>{value}</dd>
    </div>
  );
}

export { STATUS_LABELS };
