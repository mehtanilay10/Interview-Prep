'use client';

/**
 * Multi-reviewer review queue (decision D5).
 *
 * - Items are claimed through the API with a soft lock, so two reviewers never
 *   spend attention on the same video.
 * - The script is rendered side-by-side with the article link, so review is a
 *   skim-and-compare instead of a full re-watch.
 * - QA results are shown as pass/fail badges so reviewers only judge what
 *   matters.
 * - Keyboard: A approve, R reject, N next.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { VideoScriptDocument, VideoQaReport } from '@/types';

export interface ReviewItem {
  assetId: string;
  articleId: string;
  title: string;
  description: string | null;
  area: 'courses' | 'problems';
  courseTitle: string | null;
  moduleTitle: string | null;
  version: number;
  durationMs: number | null;
  canonicalUrl: string;
  youtubeVideoId: string | null;
  claimedBy: string | null;
  script: VideoScriptDocument | null;
  qa: VideoQaReport | null;
}

interface ReviewQueueProps {
  initialQueue: ReviewItem[];
}

export function ReviewQueue({ initialQueue }: ReviewQueueProps) {
  const [queue, setQueue] = useState<ReviewItem[]>(initialQueue);
  const [index, setIndex] = useState(0);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [processed, setProcessed] = useState(0);
  const claimedRef = useRef<string | null>(null);

  const item = queue[index];
  const qa = useMemo(() => parseQa(item?.qa), [item?.qa]);
  const currentKey = item?.assetId ?? null;

  const claim = useCallback(async (assetId: string) => {
    try {
      const response = await fetch('/api/videos/review', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ action: 'claim', assetId }),
      });
      if (!response.ok) return;
      const data = (await response.json()) as { ok: boolean };
      if (data.ok) claimedRef.current = assetId;
    } catch {
      // A failed claim is not fatal: another reviewer may already hold it.
    }
  }, []);

  // Claim the item on screen so a second reviewer sees the lock immediately.
  useEffect(() => {
    if (!currentKey) return;
    if (claimedRef.current === currentKey) return;
    void claim(currentKey);
  }, [currentKey, claim]);

  const decide = useCallback(
    async (decision: 'approve' | 'reject', reason?: string) => {
      if (!item || busy) return;
      setBusy(true);
      setError(null);
      setMessage(null);
      try {
        const response = await fetch('/api/videos/review', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ action: 'decide', assetId: item.assetId, decision, ...(reason ? { reason } : {}) }),
        });
        const data = (await response.json()) as { ok: boolean; message?: string };
        if (!response.ok || !data.ok) {
          setError(data.message ?? 'The decision could not be recorded.');
          return;
        }
        setProcessed((count) => count + 1);
        setMessage(decision === 'approve' ? `Approved "${item.title}".` : `Rejected "${item.title}".`);
        setQueue((items) => items.filter((entry) => entry.assetId !== item.assetId));
        claimedRef.current = null;
        setIndex(0);
      } catch (fetchError) {
        setError((fetchError as Error).message);
      } finally {
        setBusy(false);
      }
    },
    [busy, item],
  );

  // Keyboard shortcuts.
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;
      if (event.key === 'a' || event.key === 'A') {
        event.preventDefault();
        void decide('approve');
      }
      if (event.key === 'r' || event.key === 'R') {
        event.preventDefault();
        const reason = window.prompt('Reason for rejection (recorded with your account):') ?? undefined;
        void decide('reject', reason);
      }
      if ((event.key === 'n' || event.key === 'N') && index < queue.length - 1) {
        event.preventDefault();
        setIndex(index + 1);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [decide, index, queue.length]);

  if (!item) {
    return (
      <div className="rounded-lg border border-border bg-canvas-subtle px-6 py-12 text-center">
        <p className="text-lg font-semibold text-fg-default">The review queue is empty.</p>
        <p className="mt-2 text-sm text-fg-muted">
          {processed > 0
            ? `You reviewed ${processed} video${processed === 1 ? '' : 's'} in this session.`
            : 'New videos appear here after they pass the automated QA gate.'}
        </p>
        {message && (
          <p className="mt-3 text-sm text-accent-fg" role="status">
            {message}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
      <section aria-labelledby="review-video-heading">
        <h2 id="review-video-heading" className="sr-only">
          Video under review
        </h2>
        {item.youtubeVideoId && !item.youtubeVideoId.startsWith('dryrun-') ? (
          <div className="overflow-hidden rounded-lg border border-border bg-black">
            <div className="relative aspect-video w-full">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${item.youtubeVideoId}?rel=0&autoplay=1`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ) : (
          <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-border text-sm text-fg-muted">
            No embed yet (the upload stage runs after QA).
          </div>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => void decide('approve')}
            disabled={busy}
            className="rounded-lg bg-accent-fg px-4 py-2.5 text-sm font-semibold text-canvas-default transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            Approve and publish
          </button>
          <button
            type="button"
            onClick={() => {
              const reason = window.prompt('Reason for rejection (recorded with your account):') ?? undefined;
              void decide('reject', reason);
            }}
            disabled={busy}
            className="rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-fg-muted transition-colors hover:border-red-400 hover:text-red-500 disabled:opacity-50"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => setIndex(Math.min(queue.length - 1, index + 1))}
            className="rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-fg-muted transition-colors hover:border-accent-fg hover:text-accent-fg"
          >
            Skip for now
          </button>
          <span className="text-sm text-fg-subtle">
            {index + 1} of {queue.length} in queue
          </span>
        </div>

        <div aria-live="polite" className="mt-2 text-sm">
          {message && <p className="text-accent-fg">{message}</p>}
          {error && <p className="text-red-600 dark:text-red-400">{error}</p>}
        </div>
      </section>

      <aside className="space-y-4">
        <div className="rounded-lg border border-border bg-canvas-subtle p-4">
          <p className="text-xs uppercase tracking-wider text-fg-subtle">{item.area === 'problems' ? 'Problem' : 'Course'}</p>
          <h3 className="mt-1 text-lg font-bold text-fg-default">{item.title}</h3>
          {item.courseTitle && <p className="text-sm text-fg-muted">{item.courseTitle}</p>}
          {item.moduleTitle && <p className="text-sm text-fg-subtle">{item.moduleTitle}</p>}
          <dl className="mt-3 space-y-1 text-sm">
            <div className="flex justify-between">
              <dt className="text-fg-subtle">Version</dt>
              <dd className="text-fg-muted">v{item.version}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-fg-subtle">Duration</dt>
              <dd className="text-fg-muted">{formatDuration(item.durationMs)}</dd>
            </div>
            {item.claimedBy && (
              <div className="flex justify-between">
                <dt className="text-fg-subtle">Claimed by</dt>
                <dd className="text-fg-muted">{item.claimedBy}</dd>
              </div>
            )}
          </dl>
          <a
            href={item.canonicalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm text-accent-fg hover:underline"
          >
            Open the article to compare
          </a>
        </div>

        <div className="rounded-lg border border-border p-4">
          <h4 className="text-sm font-semibold text-fg-default">Automated checks</h4>
          <ul className="mt-2 space-y-1 text-sm">
            {(qa?.checks ?? []).map((check) => (
              <li key={check.name} className="flex items-start gap-2">
                <span aria-hidden="true" className={check.skipped ? 'text-fg-subtle' : check.ok ? 'text-green-600' : 'text-red-600'}>
                  {check.skipped ? '–' : check.ok ? '✓' : '✗'}
                </span>
                <span className="text-fg-muted">
                  {humaniseCheck(check.name)}
                  {check.skipped ? ' (skipped)' : ''}
                </span>
              </li>
            ))}
            {!qa && <li className="text-fg-subtle">No QA report recorded for this version.</li>}
          </ul>
        </div>

        {item.script && (
          <div className="rounded-lg border border-border p-4">
            <h4 className="text-sm font-semibold text-fg-default">Narration script</h4>
            <ol className="mt-2 space-y-2 text-sm text-fg-muted">
              {item.script.sections.map((section) => (
                <li key={section.id}>
                  <span className="font-medium text-fg-default">{section.heading}.</span> {section.narration}
                </li>
              ))}
            </ol>
          </div>
        )}
      </aside>
    </div>
  );
}

function parseQa(value: unknown): VideoQaReport | null {
  if (!value || typeof value !== 'object') return null;
  const candidate = value as VideoQaReport;
  if (typeof candidate.ok !== 'boolean' || !Array.isArray(candidate.checks)) return null;
  return candidate;
}

function humaniseCheck(name: string): string {
  return name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function formatDuration(ms: number | null): string {
  if (ms === null) return '—';
  const totalSeconds = Math.round(ms / 1000);
  return `${Math.floor(totalSeconds / 60)}m ${String(totalSeconds % 60).padStart(2, '0')}s`;
}
