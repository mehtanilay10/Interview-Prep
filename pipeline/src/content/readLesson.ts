/**
 * Reads an article back from disk during a stage run.
 *
 * Stages always work from the current file bytes so that an edit made while a
 * job is queued is detected (the hash comparison in `discover` plus this re-read
 * is what prevents publishing a video built from stale content).
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import type { Lesson } from '../../../types/index.js';
import { sha256 } from '../util/hash.js';

export async function readLessonFile(
  repoRoot: string,
  article: { area: string; courseSlug: string; moduleSlug: string; lessonSlug: string },
): Promise<{ lesson: Lesson; fileHash: string } | { error: string }> {
  const filePath = path.join(repoRoot, 'content', article.area, article.courseSlug, article.moduleSlug, `${article.lessonSlug}.json`);
  try {
    const buffer = await fs.readFile(filePath);
    return { lesson: JSON.parse(buffer.toString('utf8')) as Lesson, fileHash: sha256(buffer) };
  } catch (error) {
    return { error: `lesson file unreadable (${filePath}): ${(error as Error).message}` };
  }
}
