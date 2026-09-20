/**
 * Content loading and indexing helpers.
 * All content is loaded from structured TypeScript files in /content/.
 * These helpers provide cross-content lookups and navigation utilities.
 */

import { modules, getModulesByCourse } from '@/content/modules';
import { lessons, getLessonsByModule } from '@/content/lessons';
import { courses } from '@/content/courses';
import cheatsheetContent from '@/content/cheatsheet/content.json';
import type {
  Module,
  Lesson,
  Course,
  TocEntry,
  ContentBlock,
  SearchResult,
  Difficulty,
} from '@/types';

// ── Re-exports for convenience ────────────────────────────────────────────────
export { modules, lessons, courses };

// ── Course helpers ────────────────────────────────────────────────────────────

export function getAllCourses(): Course[] {
  return [...courses]
    .filter((c) => c.category !== 'problems')
    .sort((a, b) => a.order - b.order);
}

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getProblemCourses(): Course[] {
  return courses
    .filter((c) => c.category === 'problems')
    .sort((a, b) => a.order - b.order);
}

export function getModulesForCourse(courseSlug: string): Module[] {
  return getModulesByCourse(courseSlug);
}

export function getLessonsForCourse(courseSlug: string): Lesson[] {
  const courseModules = getModulesByCourse(courseSlug);
  const moduleSlugs = new Set(courseModules.map((m) => m.slug));
  const moduleOrder = new Map(courseModules.map((m) => [m.slug, m.order]));
  return lessons
    .filter((l) => moduleSlugs.has(l.moduleSlug) && l.courseSlug === courseSlug)
    .sort((a, b) => {
      const modOrderA = moduleOrder.get(a.moduleSlug) ?? 0;
      const modOrderB = moduleOrder.get(b.moduleSlug) ?? 0;
      if (modOrderA !== modOrderB) return modOrderA - modOrderB;
      return a.order - b.order;
    });
}

// ── Module helpers ────────────────────────────────────────────────────────────

export function getAllModules(): Module[] {
  return [...modules].sort((a, b) => a.order - b.order);
}

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}

export function getCourseForModule(moduleSlug: string): Course | undefined {
  const mod = getModuleBySlug(moduleSlug);
  if (!mod) return undefined;
  return courses.find((c) => c.slug === mod.courseSlug);
}

export function filterModulesByDifficulty(difficulty: Difficulty): Module[] {
  return modules.filter((m) => m.difficulty === difficulty);
}

// ── Lesson helpers ────────────────────────────────────────────────────────────

export function getAllLessons(): Lesson[] {
  return [...lessons].sort((a, b) => a.order - b.order);
}

export function getLessonBySlug(slug: string, courseSlug?: string): Lesson | undefined {
  const candidates = courseSlug ? lessons.filter((l) => l.courseSlug === courseSlug) : lessons;
  return candidates.find((l) => l.slug === slug);
}

export function getLessonsForModule(moduleSlug: string, courseSlug?: string): Lesson[] {
  return getLessonsByModule(moduleSlug, courseSlug);
}

export function getAdjacentLessons(
  lesson: Lesson,
  courseSlug?: string
): { prev: Lesson | null; next: Lesson | null } {
  const orderedLessons = courseSlug
    ? getLessonsForCourse(courseSlug)
    : getAllModules().flatMap((m) => getLessonsByModule(m.slug));

  const idx = orderedLessons.findIndex((l) => l.slug === lesson.slug);

  if (idx === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: idx > 0 ? orderedLessons[idx - 1] : null,
    next: idx < orderedLessons.length - 1 ? orderedLessons[idx + 1] : null,
  };
}

/** Return full breadcrumb data for a lesson */
export function getLessonBreadcrumb(lesson: Lesson): {
  course: Course | undefined;
  module: Module | undefined;
  lesson: Lesson;
} {
  const mod = getModuleBySlug(lesson.moduleSlug);
  const course = mod ? getCourseBySlug(mod.courseSlug) : undefined;
  return { course, module: mod, lesson };
}

// ── Table of Contents extraction ─────────────────────────────────────────────

export function extractTOC(blocks: ContentBlock[]): TocEntry[] {
  const entries: TocEntry[] = [];
  for (const block of blocks) {
    if (block.type === 'heading') {
      const data = (block as { data?: { level: 2 | 3 | 4; text: string; anchor?: string } }).data;
      const level = data?.level ?? (block as { level?: 2 | 3 | 4 }).level;
      const text = data?.text ?? (block as { text?: string }).text;
      const anchor = data?.anchor;
      if (level && text) {
        entries.push({
          anchor: anchor || text.toLowerCase().replace(/\s+/g, '-'),
          text,
          level,
        });
      }
    }
  }
  return entries;
}

// ── Full-text search ──────────────────────────────────────────────────────────

function scoreText(text: string, q: string): number {
  const lower = text.toLowerCase();
  if (!lower.includes(q)) return 0;
  if (lower === q) return 10;
  if (lower.startsWith(q)) return 5;
  return 1;
}

export function searchAll(query: string): SearchResult[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  const scored: { result: SearchResult; score: number }[] = [];

  // Search lessons
  for (const lesson of lessons) {
    const titleScore = scoreText(lesson.title, q) * 3;
    const descScore = scoreText(lesson.description, q);
    const tagScore = (lesson.tags ?? []).reduce((sum, t) => sum + scoreText(t, q) * 2, 0);

    if (titleScore > 0 || descScore > 0 || tagScore > 0) {
      scored.push({
        result: {
          type: 'lesson',
          slug: lesson.slug,
          title: lesson.title,
          description: lesson.description,
          courseSlug: lesson.courseSlug,
          moduleSlug: lesson.moduleSlug,
          difficulty: lesson.difficulty,
          tags: lesson.tags,
          technology: lesson.technology,
        },
        score: titleScore + descScore + tagScore,
      });
    }
  }

  // Search modules
  for (const mod of modules) {
    const titleScore = scoreText(mod.title, q) * 3;
    const descScore = scoreText(mod.description, q);
    const tagScore = (mod.tags ?? []).reduce((sum, t) => sum + scoreText(t, q) * 2, 0);

    if (titleScore > 0 || descScore > 0 || tagScore > 0) {
      scored.push({
        result: {
          type: 'module',
          slug: mod.slug,
          title: mod.title,
          description: mod.description,
          courseSlug: mod.courseSlug,
          difficulty: mod.difficulty,
          tags: mod.tags,
        },
        score: titleScore + descScore + tagScore,
      });
    }
  }

  // Search courses
  for (const course of courses) {
    const titleScore = scoreText(course.title, q) * 3;
    const descScore = scoreText(course.description, q);

    if (titleScore > 0 || descScore > 0) {
      scored.push({
        result: {
          type: 'course',
          slug: course.slug,
          title: course.title,
          description: course.description,
        },
        score: titleScore + descScore,
      });
    }
  }

  // Search cheatsheet section
  const csTitleScore = scoreText(cheatsheetContent.title, q) * 3;
  const csDescScore = scoreText(cheatsheetContent.description, q);

  if (csTitleScore > 0 || csDescScore > 0) {
    scored.push({
      result: {
        type: 'cheatsheet',
        slug: cheatsheetContent.slug,
        title: cheatsheetContent.title,
        description: cheatsheetContent.description,
      },
      score: csTitleScore + csDescScore,
    });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 10).map((s) => s.result);
}

const PROBLEM_COURSE_SLUGS = new Set(['csharp-problems', 'sql-problems', 'system-design', 'azure-problems', 'lld-problems']);

export function isProblemCourseSlug(slug: string | undefined): boolean {
  return slug !== undefined && PROBLEM_COURSE_SLUGS.has(slug);
}

export function getSearchResultHref(result: SearchResult): string {
  if (result.type === 'lesson') {
    if (isProblemCourseSlug(result.courseSlug)) {
      return `/problems/${result.courseSlug}/${result.moduleSlug}/${result.slug}`;
    }
    if (result.courseSlug === 'interview-qa' && result.technology) {
      const techSlug = result.technology.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '').replace(/\//g, '-');
      return `/interview-questions/${techSlug}/${result.slug}`;
    }
    return `/courses/${result.courseSlug}/${result.moduleSlug}/${result.slug}`;
  }

  if (result.type === 'module') {
    if (result.courseSlug === 'cheatsheet') {
      return `/cheatsheet/${result.slug}`;
    }
    if (isProblemCourseSlug(result.courseSlug)) {
      return `/problems/${result.courseSlug}/${result.slug}`;
    }
    return `/courses/${result.courseSlug}/${result.slug}`;
  }

  if (result.type === 'course') {
    if (isProblemCourseSlug(result.slug)) {
      return `/problems/${result.slug}`;
    }
    return `/courses/${result.slug}`;
  }

  if (result.type === 'cheatsheet') {
    return '/cheatsheet';
  }

  return '/';
}

// ── Stats ─────────────────────────────────────────────────────────────────────

export function getCourseStats() {
  const totalLessons = lessons.length;
  const totalModules = modules.length;
  const totalMinutes = lessons.reduce((sum, l) => sum + l.estimatedMinutes, 0);

  return {
    totalLessons,
    totalModules,
    totalMinutes,
    totalHours: Math.round(totalMinutes / 60),
  };
}

// ── Interview question helpers ────────────────────────────────────────────────

export function getInterviewTechnologies(): string[] {
  const techs = new Set<string>();
  for (const l of lessons) {
    const tech = (l as Lesson & { technology?: string }).technology;
    if (tech) {
      techs.add(tech);
    }
  }
  return Array.from(techs).sort();
}

export function getInterviewLevelsForTechnology(technology: string): { slug: string; title: string; icon: string; estimatedHours: number; order: number }[] {
  const levelMap = new Map<string, { slug: string; title: string; icon: string; estimatedHours: number; order: number }>();
  for (const l of lessons) {
    const tech = (l as Lesson & { technology?: string }).technology;
    const mod = getModuleBySlug(l.moduleSlug);
    if (tech === technology && mod) {
      const slug = mod.slug;
      if (!levelMap.has(slug)) {
        levelMap.set(slug, {
          slug: mod.slug,
          title: mod.title,
          icon: mod.icon,
          estimatedHours: mod.estimatedHours,
          order: mod.order,
        });
      }
    }
  }
  return Array.from(levelMap.values()).sort((a, b) => a.order - b.order);
}

export function getInterviewQuestions(technology: string, moduleSlug?: string): Lesson[] {
  return lessons
    .filter((l) => {
      const tech = (l as Lesson & { technology?: string }).technology;
      if (tech !== technology) return false;
      if (moduleSlug && l.moduleSlug !== moduleSlug) return false;
      return true;
    })
    .sort((a, b) => a.order - b.order);
}

export function getInterviewQuestionCount(technology: string): number {
  return lessons.filter((l) => (l as Lesson & { technology?: string }).technology === technology).length;
}
