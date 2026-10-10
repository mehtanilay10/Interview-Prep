import { createHash } from 'node:crypto';

/** Stable content hash used for change detection and caching (decision D4). */
export function sha256(input: string | Buffer): string {
  return createHash('sha256').update(input).digest('hex');
}

/**
 * Hash of the *semantic* article content: the lesson JSON re-serialised with
 * sorted keys, so whitespace-only formatting changes do not trigger a
 * regeneration while real edits always do.
 */
export function lessonHash(lesson: unknown): string {
  return sha256(JSON.stringify(lesson, Object.keys(lesson as object).sort()));
}

/** Short, human-friendly hash prefix for filenames. */
export function shortHash(hash: string, length = 12): string {
  return hash.slice(0, length);
}
