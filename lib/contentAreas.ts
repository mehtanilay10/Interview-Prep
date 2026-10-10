/**
 * Content-area helpers shared by the Next.js app and the video pipeline.
 *
 * Single source of truth for which course slugs belong to the "problems" area
 * (kept in sync with the directory layout under content/problems).
 */

export const VIDEO_AREAS = ['courses', 'problems'] as const;
export type VideoAreaName = (typeof VIDEO_AREAS)[number];

/** Course slugs that live under content/problems (mirrors content/problems/*). */
export const PROBLEM_COURSE_SLUGS = [
  'api-design-problems',
  'architecture-decision-lab-problems',
  'aspnet-core-problems',
  'azure-problems',
  'csharp-problems',
  'database-design-problems',
  'full-stack-senior-projects',
  'hld-problems',
  'lld-problems',
  'production-incident-lab-problems',
  'senior-code-review-lab-problems',
  'sql-problems',
  'system-design-problems',
  'system-design',
] as const;

const PROBLEM_COURSE_SLUG_SET = new Set<string>(PROBLEM_COURSE_SLUGS);

export function isProblemCourseSlug(slug: string | undefined): boolean {
  return slug !== undefined && PROBLEM_COURSE_SLUG_SET.has(slug);
}

/** URL prefix for a content area, used for canonical article links. */
export function areaPathPrefix(area: VideoAreaName): 'courses' | 'problems' {
  return area === 'problems' ? 'problems' : 'courses';
}

export function isVideoAreaName(value: string): value is VideoAreaName {
  return (VIDEO_AREAS as readonly string[]).includes(value);
}
