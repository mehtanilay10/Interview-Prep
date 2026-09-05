/**
 * Content loading and indexing helpers.
 * All content is loaded from structured TypeScript files in /content/.
 * These helpers provide cross-content lookups and navigation utilities.
 */

import { modules, getModulesByCourse } from '@/content/modules';
import { lessons, getLessonsByModule } from '@/content/lessons';
import { courses, getCourseBySlug } from '@/content/courses';
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
  return [...courses].sort((a, b) => a.order - b.order);
}

export { getCourseBySlug };

export function getModulesForCourse(courseSlug: string): Module[] {
  return getModulesByCourse(courseSlug);
}

export function getLessonsForCourse(courseSlug: string): Lesson[] {
  const courseModules = getModulesByCourse(courseSlug);
  const moduleSlugs = new Set(courseModules.map((m) => m.slug));
  return lessons
    .filter((l) => moduleSlugs.has(l.moduleSlug))
    .sort((a, b) => a.order - b.order);
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

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}

export function getLessonsForModule(moduleSlug: string, courseSlug?: string): Lesson[] {
  return getLessonsByModule(moduleSlug, courseSlug);
}

export function getAdjacentLessons(
  lesson: Lesson
): { prev: Lesson | null; next: Lesson | null } {
  const orderedLessons = getAllModules()
    .flatMap((m) => getLessonsByModule(m.slug))
    .filter((l) => Boolean(l));

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
  module: Module | undefined;
  lesson: Lesson;
} {
  const mod = getModuleBySlug(lesson.moduleSlug);
  return { module: mod, lesson };
}

// ── Table of Contents extraction ─────────────────────────────────────────────

export function extractTOC(blocks: ContentBlock[]): TocEntry[] {
  const entries: TocEntry[] = [];
  for (const block of blocks) {
    if (block.type === 'heading' && block.data.anchor) {
      entries.push({
        anchor: block.data.anchor,
        text: block.data.text,
        level: block.data.level,
      });
    }
  }
  return entries;
}

// ── Full-text search ──────────────────────────────────────────────────────────

export function searchAll(query: string): SearchResult[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  const results: SearchResult[] = [];

  // Search lessons
  for (const lesson of lessons) {
    if (
      lesson.title.toLowerCase().includes(q) ||
      lesson.description.toLowerCase().includes(q) ||
      lesson.tags.some((t) => t.includes(q))
    ) {
      results.push({
        type: 'lesson',
        slug: lesson.slug,
        title: lesson.title,
        description: lesson.description,
        moduleSlug: lesson.moduleSlug,
        difficulty: lesson.difficulty,
        tags: lesson.tags,
      });
    }
  }

  // Search modules
  for (const mod of modules) {
    if (
      mod.title.toLowerCase().includes(q) ||
      mod.description.toLowerCase().includes(q) ||
      mod.tags.some((t) => t.includes(q))
    ) {
      results.push({
        type: 'module',
        slug: mod.slug,
        title: mod.title,
        description: mod.description,
        difficulty: mod.difficulty,
        tags: mod.tags,
      });
    }
  }

  return results;
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

export function getInterviewLevelsForTechnology(technology: string): string[] {
  const levelMap = new Map<string, Set<string>>();
  for (const l of lessons) {
    const tech = (l as Lesson & { technology?: string }).technology;
    const mod = getModuleBySlug(l.moduleSlug);
    if (tech === technology && mod) {
      if (!levelMap.has(technology)) levelMap.set(technology, new Set());
      levelMap.get(technology)!.add(mod.title);
    }
  }
  return Array.from(levelMap.get(technology) ?? []).sort();
}

export function getInterviewQuestions(technology: string, level: string): Lesson[] {
  return lessons
    .filter((l) => {
      const tech = (l as Lesson & { technology?: string }).technology;
      const mod = getModuleBySlug(l.moduleSlug);
      return tech === technology && mod?.title === level;
    })
    .sort((a, b) => a.order - b.order);
}

export function getInterviewQuestionCount(technology: string): number {
  return lessons.filter((l) => (l as Lesson & { technology?: string }).technology === technology).length;
}
