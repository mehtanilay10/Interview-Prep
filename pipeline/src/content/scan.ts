/**
 * Content scanning: enumerates article JSON files on disk and hashes them.
 *
 * The pipeline reads the filesystem rather than the generated content index so
 * that the hash is of the actual file bytes (the input to change detection) and
 * so that no code generation step is required before discovery can run.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import type { Lesson } from '../../../types/index.js';
import { isProblemCourseSlug, type VideoAreaName } from '../../../lib/contentAreas.js';
import { sha256 } from '../util/hash.js';

export interface ScannedLesson {
  area: VideoAreaName;
  /** Absolute path of the lesson file (used for change detection + hashing). */
  filePath: string;
  /** Path relative to the repo root, used as the stable file identity. */
  relativePath: string;
  lesson: Lesson;
  /** Hash of the semantic lesson content. */
  contentHash: string;
  /** Hash of the raw file bytes, used to detect no-op edits. */
  fileHash: string;
}

interface CourseMeta {
  title?: string;
}

interface ModuleMeta {
  title?: string;
}

async function readJsonIfExists(filePath: string): Promise<Record<string, unknown> | null> {
  try {
    const raw = await fs.readFile(filePath, 'utf8');
    return JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return null;
  }
}

async function listJsonFiles(dir: string): Promise<string[]> {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return [];
  }
  const files: string[] = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listJsonFiles(full)));
    } else if (entry.isFile() && entry.name.endsWith('.json') && entry.name !== 'content.json') {
      files.push(full);
    }
  }
  return files.sort();
}

/**
 * Resolves the area for a file under content/courses or content/problems.
 *
 * The directory structure is authoritative: problem course slugs are arbitrary
 * (`api-design-problems`, `senior-code-review-lab-problems`, `system-design`, …)
 * so they cannot be reliably inferred from the slug alone. The slug is kept on
 * the article row because it is part of the public URL.
 */
export function resolveArea(relativePath: string, lesson: Lesson): VideoAreaName {
  const segments = relativePath.split(path.sep);
  const areaFromPath = segments[1];
  if (areaFromPath === 'courses' || areaFromPath === 'problems') return areaFromPath;
  // Files outside the two known areas fall back to the slug heuristic, which
  // keeps `discover` total rather than throwing on unexpected layout.
  return isProblemCourseSlug(lesson.courseSlug) ? 'problems' : 'courses';
}

/** Scans the course and problem lesson files that are in scope (decision D7). */
export async function scanLessons(repoRoot: string): Promise<ScannedLesson[]> {
  const contentRoot = path.join(repoRoot, 'content');
  const areas: VideoAreaName[] = ['courses', 'problems'];
  const scanned: ScannedLesson[] = [];

  for (const area of areas) {
    const areaRoot = path.join(contentRoot, area);
    const files = await listJsonFiles(areaRoot);

    for (const filePath of files) {
      const relativePath = path.relative(repoRoot, filePath);
      let lesson: Lesson;
      try {
        const raw = await fs.readFile(filePath, 'utf8');
        lesson = JSON.parse(raw) as Lesson;
      } catch (error) {
        throw new Error(`unreadable lesson file ${relativePath}: ${(error as Error).message}`);
      }

      if (!lesson || typeof lesson !== 'object' || typeof lesson.slug !== 'string') {
        throw new Error(`lesson file ${relativePath} is missing a slug`);
      }

      const resolvedArea = resolveArea(relativePath, lesson);
      const bytes = await fs.readFile(filePath);
      scanned.push({
        area: resolvedArea,
        filePath,
        relativePath,
        lesson,
        contentHash: sha256(stableStringify(lesson)),
        fileHash: sha256(bytes),
      });
    }
  }

  return scanned;
}

/** Deterministic JSON serialisation so hashes are stable across runs. */
export function stableStringify(value: unknown): string {
  if (value === null || typeof value !== 'object') return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(',')}]`;
  const entries = Object.entries(value as Record<string, unknown>)
    .filter(([, v]) => v !== undefined)
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0));
  return `{${entries.map(([k, v]) => `${JSON.stringify(k)}:${stableStringify(v)}`).join(',')}}`;
}

/** Loads course/module titles for display in the dashboard. */
export async function loadTitles(
  repoRoot: string,
  area: VideoAreaName,
  courseSlug: string,
  moduleSlug: string,
): Promise<{ courseTitle?: string; moduleTitle?: string }> {
  const [courseMeta, moduleMeta] = await Promise.all([
    readJsonIfExists(path.join(repoRoot, 'content', area, courseSlug, 'content.json')) as Promise<CourseMeta | null>,
    readJsonIfExists(path.join(repoRoot, 'content', area, courseSlug, moduleSlug, 'content.json')) as Promise<ModuleMeta | null>,
  ]);
  return { courseTitle: courseMeta?.title, moduleTitle: moduleMeta?.title };
}
