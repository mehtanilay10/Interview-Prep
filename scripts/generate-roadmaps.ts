#!/usr/bin/env node

/**
 * Generates roadmaps for all courses based on their module structure.
 * Creates a hierarchical roadmap showing phases/modules and their lessons.
 */

import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(process.cwd());
const CONTENT_DIR = path.join(ROOT, 'content');
const ROADMAPS_DIR = path.join(CONTENT_DIR, 'roadmaps');

interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  order: number;
  category?: string;
  isInterview?: boolean;
  moduleSlugs: string[];
}

interface Module {
  id: string;
  slug: string;
  courseSlug: string;
  title: string;
  description: string;
  longDescription?: string;
  order: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedHours: number;
  icon: string;
  tags?: string[];
  lessonSlugs?: string[];
  isOptional?: boolean;
  skipLabel?: string;
  prerequisites?: string[];
  whatYouLearn?: string[];
}

interface RoadmapNode {
  id: string;
  title: string;
  type: 'phase' | 'module' | 'milestone';
  href?: string;
  children?: RoadmapNode[];
  isOptional?: boolean;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

function readJson<T>(filePath: string): T {
  const content = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(content);
}

function writeJson(filePath: string, data: any): void {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

function getAllCourses(): Course[] {
  const coursesPath = path.join(CONTENT_DIR, 'courses', 'index.ts');
  if (!fs.existsSync(coursesPath)) return [];

  // For now, scan the courses directory directly
  const coursesDir = path.join(CONTENT_DIR, 'courses');
  const courses: Course[] = [];

  const entries = fs.readdirSync(coursesDir);
  for (const entry of entries) {
    const fullPath = path.join(coursesDir, entry);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      const contentJsonPath = path.join(fullPath, 'content.json');
      if (fs.existsSync(contentJsonPath)) {
        try {
          const course = readJson<Course>(contentJsonPath);
          courses.push(course);
        } catch (e) {
          console.warn(`Failed to read course ${entry}:`, e);
        }
      }
    }
  }

  return courses.sort((a, b) => a.order - b.order);
}

function getModulesForCourse(courseSlug: string): Module[] {
  const modules: Module[] = [];
  const coursePath = path.join(CONTENT_DIR, 'courses', courseSlug);

  if (!fs.existsSync(coursePath)) return modules;

  const entries = fs.readdirSync(coursePath);
  for (const entry of entries) {
    const fullPath = path.join(coursePath, entry);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      const contentJsonPath = path.join(fullPath, 'content.json');
      if (fs.existsSync(contentJsonPath)) {
        try {
          const module = readJson<Module>(contentJsonPath);
          if (module.courseSlug === courseSlug) {
            modules.push(module);
          }
        } catch (e) {
          console.warn(`Failed to read module ${entry}:`, e);
        }
      }
    }
  }

  return modules.sort((a, b) => a.order - b.order);
}

function generateRoadmapForCourse(course: Course): RoadmapNode {
  const modules = getModulesForCourse(course.slug);

  // Group modules by prefix (for LearnAI phase structure)
  const phaseGroups = new Map<string, Module[]>();

  for (const module of modules) {
    // Check if module slug starts with a phase prefix (e.g., "phase-1-foundations-what-is-ai")
    const match = module.slug.match(/^(phase-\d+[^-]*)-(.+)$/);
    if (match) {
      const phaseSlug = match[1];
      if (!phaseGroups.has(phaseSlug)) {
        phaseGroups.set(phaseSlug, []);
      }
      phaseGroups.get(phaseSlug)!.push(module);
    } else {
      // No phase prefix, add to default group
      if (!phaseGroups.has('default')) {
        phaseGroups.set('default', []);
      }
      phaseGroups.get('default')!.push(module);
    }
  }

  const children: RoadmapNode[] = [];

  for (const [phaseSlug, phaseModules] of phaseGroups) {
    if (phaseSlug === 'default') {
      // Direct modules (no phase structure)
      for (const module of phaseModules) {
        children.push({
          id: `module-${module.slug}`,
          title: module.title,
          type: 'module',
          href: `/courses/${course.slug}/${module.slug}`,
          isOptional: module.isOptional,
          difficulty: module.difficulty,
        });
      }
    } else {
      // Phase with modules
      const phaseModule = phaseModules[0];
      const phaseTitle = phaseSlug
        .replace(/-/g, ' ')
        .replace(/phase \d+/i, (match) => match.toUpperCase());

      const phaseChildren: RoadmapNode[] = phaseModules.map((module) => ({
        id: `module-${module.slug}`,
        title: module.title,
        type: 'module',
        href: `/courses/${course.slug}/${module.slug}`,
        isOptional: module.isOptional,
        difficulty: module.difficulty,
      }));

      children.push({
        id: `phase-${phaseSlug}`,
        title: phaseTitle,
        type: 'phase',
        children: phaseChildren,
      });
    }
  }

  return {
    id: `roadmap-${course.slug}`,
    title: course.title,
    type: 'phase',
    children,
  };
}

function main() {
  console.log('Generating roadmaps for all courses...');

  const courses = getAllCourses();
  console.log(`Found ${courses.length} courses`);

  const roadmaps: RoadmapNode[] = [];

  for (const course of courses) {
    console.log(`  Generating roadmap for: ${course.slug}`);
    const roadmap = generateRoadmapForCourse(course);
    roadmaps.push(roadmap);

    // Save individual roadmap file
    const roadmapPath = path.join(ROADMAPS_DIR, `${course.slug}-roadmap.json`);
    writeJson(roadmapPath, roadmap);
    console.log(`    Saved: ${roadmapPath}`);
  }

  // Update index.ts
  const indexContent = `import type { RoadmapNode } from '@/types';

${courses.map((course) => `import ${course.slug.replace(/-/g, '')}Roadmap from './${course.slug}-roadmap.json';`).join('\n')}

const rawRoadmaps = [${courses.map((course) => course.slug.replace(/-/g, '') + 'Roadmap').join(', ')}];

export const roadmaps: RoadmapNode[] = rawRoadmaps as unknown as RoadmapNode[];

export function getRoadmapForCourse(courseSlug: string): RoadmapNode | undefined {
  return roadmaps.find((r) => r.id.includes(courseSlug));
}
`;

  const indexPath = path.join(ROADMAPS_DIR, 'index.ts');
  fs.writeFileSync(indexPath, indexContent);
  console.log(`Updated: ${indexPath}`);

  console.log('Roadmap generation complete!');
}

main();
