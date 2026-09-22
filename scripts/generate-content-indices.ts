#!/usr/bin/env node

/**
 * Auto-generates content index files for courses, modules, and lessons.
 * Scans content directories and regenerates:
 *   - content/courses/index.ts
 *   - content/modules/index.ts
 *   - content/lessons/index.ts
 *
 * Run automatically before dev/build so new JSON files are picked up without manual edits.
 */

import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(process.cwd());
const CONTENT_DIR = path.join(ROOT, 'content');

const COURSES_INDEX = path.join(CONTENT_DIR, 'courses', 'index.ts');
const MODULES_INDEX = path.join(CONTENT_DIR, 'modules', 'index.ts');
const LESSONS_INDEX = path.join(CONTENT_DIR, 'lessons', 'index.ts');

interface CourseInfo {
  importPath: string;
  variableName: string;
  slug: string;
}

interface ModuleInfo {
  importPath: string;
  variableName: string;
  slug: string;
  courseSlug: string;
}

interface LessonInfo {
  importPath: string;
  variableName: string;
  slug: string;
  courseSlug: string;
  moduleSlug: string;
}

function toVariableName(slug: string, prefix: string): string {
  const cleaned = slug
    .replace(/[^a-z0-9]+(.)?/g, (_, chr) => (chr ? chr.toUpperCase() : ''))
    .replace(/^[0-9]/, (m) => `${prefix}${m}`);
  const result = `${prefix}${cleaned}`;
  return result;
}

function scanCourses(): CourseInfo[] {
  const courses: CourseInfo[] = [];
  const usedNames = new Set<string>();

  for (const area of ['courses', 'problems', 'cheatsheet', 'interview-qa', 'projects']) {
    const areaPath = path.join(CONTENT_DIR, area);
    if (!fs.existsSync(areaPath)) continue;

    // For interview-qa and cheatsheet, the top-level content.json IS the course.
    // Modules are in subdirectories and should not be imported here.
    const topLevelContent = path.join(areaPath, 'content.json');
    if (fs.existsSync(topLevelContent)) {
      const importPath = area === 'courses' ? './content.json' :
                        area === 'problems' ? `../problems/content.json` :
                        area === 'cheatsheet' ? `../cheatsheet/content.json` :
                        area === 'interview-qa' ? `../interview-qa/content.json` :
                        `../projects/content.json`;
      const slug = area === 'courses' ? 'courses' : area;
      let variableName = toVariableName(slug, '');
      variableName = `${variableName}Course`;
      if (!/^[a-zA-Z]/.test(variableName)) {
        variableName = `course${variableName}`;
      }
      if (usedNames.has(variableName)) {
        let counter = 1;
        while (usedNames.has(`${variableName}${counter}`)) counter++;
        variableName = `${variableName}${counter}`;
      }
      usedNames.add(variableName);
      courses.push({ importPath, variableName, slug });
    }

    // For courses, problems, projects: each subdirectory with content.json is a course
    if (area === 'interview-qa' || area === 'cheatsheet') continue;

    const entries = fs.readdirSync(areaPath);
    for (const entry of entries) {
      const fullPath = path.join(areaPath, entry);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        const contentJsonPath = path.join(fullPath, 'content.json');
        if (fs.existsSync(contentJsonPath)) {
          const importPath = area === 'courses' ? `./${entry}/content.json` :
                            area === 'problems' ? `../problems/${entry}/content.json` :
                            `../projects/${entry}/content.json`;
          const slug = entry;
          let variableName = toVariableName(slug, '');
          variableName = `${variableName}Course`;
          if (!/^[a-zA-Z]/.test(variableName)) {
            variableName = `course${variableName}`;
          }
          if (usedNames.has(variableName)) {
            let counter = 1;
            while (usedNames.has(`${variableName}${counter}`)) counter++;
            variableName = `${variableName}${counter}`;
          }
          usedNames.add(variableName);
          courses.push({ importPath, variableName, slug });
        }
      }
    }
  }

  return courses.sort((a, b) => a.slug.localeCompare(b.slug));
}

function scanModules(): ModuleInfo[] {
  const modules: ModuleInfo[] = [];
  const usedNames = new Set<string>();
  const areas = ['courses', 'problems', 'interview-qa', 'cheatsheet', 'projects'];

  for (const area of areas) {
    const areaPath = path.join(CONTENT_DIR, area);
    if (!fs.existsSync(areaPath)) continue;

    const walk = (dir: string) => {
      const entries = fs.readdirSync(dir);
      for (const entry of entries) {
        const fullPath = path.join(dir, entry);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          const contentJsonPath = path.join(fullPath, 'content.json');
          if (fs.existsSync(contentJsonPath)) {
            const relativePath = path.relative(CONTENT_DIR, fullPath);
            const importPath = `../${relativePath}/content.json`;
            const slug = entry;
            let variableName = toVariableName(slug, '');
            variableName = `${variableName}Module`;
            if (!/^[a-zA-Z]/.test(variableName)) {
              variableName = `mod${variableName}`;
            }
            if (usedNames.has(variableName)) {
              let counter = 1;
              while (usedNames.has(`${variableName}${counter}`)) counter++;
              variableName = `${variableName}${counter}`;
            }
            usedNames.add(variableName);

            let courseSlug = '';
            try {
              const data = JSON.parse(fs.readFileSync(contentJsonPath, 'utf8'));
              courseSlug = data.courseSlug || '';
            } catch (e) {
              // ignore
            }

            modules.push({ importPath, variableName, slug, courseSlug });
          }
          walk(fullPath);
        }
      }
    };

    walk(areaPath);
  }

  return modules.sort((a, b) => a.slug.localeCompare(b.slug));
}

function scanLessons(): LessonInfo[] {
  const lessons: LessonInfo[] = [];
  const usedNames = new Set<string>();
  const areas = ['courses', 'problems', 'interview-qa', 'cheatsheet', 'projects'];

  for (const area of areas) {
    const areaPath = path.join(CONTENT_DIR, area);
    if (!fs.existsSync(areaPath)) continue;

    const walk = (dir: string) => {
      const entries = fs.readdirSync(dir);
      for (const entry of entries) {
        const fullPath = path.join(dir, entry);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          walk(fullPath);
        } else if (entry.endsWith('.json') && entry !== 'content.json') {
          const relativePath = path.relative(CONTENT_DIR, fullPath);
          const importPath = `../${relativePath}`;
          const slug = entry.replace('.json', '');
          let variableName = toVariableName(slug, '');
          variableName = `${variableName}Lesson`;
          if (!/^[a-zA-Z]/.test(variableName)) {
            variableName = `lesson${variableName}`;
          }
          if (usedNames.has(variableName)) {
            let counter = 1;
            while (usedNames.has(`${variableName}${counter}`)) counter++;
            variableName = `${variableName}${counter}`;
          }
          usedNames.add(variableName);

          let courseSlug = '';
          let moduleSlug = '';
          try {
            const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
            courseSlug = data.courseSlug || '';
            moduleSlug = data.moduleSlug || '';
          } catch (e) {
            // ignore
          }

          lessons.push({ importPath, variableName, slug, courseSlug, moduleSlug });
        }
      }
    };

    walk(areaPath);
  }

  return lessons.sort((a, b) => a.slug.localeCompare(b.slug));
}

function generateCoursesIndex(courses: CourseInfo[]): string {
  const CHUNK_SIZE = 500;
  const chunks: CourseInfo[][] = [];
  for (let i = 0; i < courses.length; i += CHUNK_SIZE) {
    chunks.push(courses.slice(i, i + CHUNK_SIZE));
  }

  const imports = courses.map((c) => `import ${c.variableName} from "${c.importPath}";`).join('\n');

  let partsDecl = '';
  let combineDecl = '';
  if (chunks.length === 1) {
    const exports = chunks[0].map((c) => `\t${c.variableName},`).join('\n');
    partsDecl = `const rawCoursesPart1 = [\n${exports}\n];\n`;
    combineDecl = `const rawCourses: any[] = [...rawCoursesPart1];`;
  } else {
    const partDecls = chunks.map((chunk, idx) => {
      const exports = chunk.map((c) => `\t${c.variableName},`).join('\n');
      return `const rawCoursesPart${idx + 1} = [\n${exports}\n];`;
    }).join('\n\n');

    const partRefs = chunks.map((_, idx) => `rawCoursesPart${idx + 1}`).join(', ');
    partsDecl = partDecls;
    combineDecl = `const rawCourses: any[] = [...${partRefs}];`;
  }

  return `import type { Course } from "@/types";

${imports}

${partsDecl}

${combineDecl}

export const courses: Course[] = rawCourses as unknown as Course[];

export function getCourseBySlug(slug: string): Course | undefined {
\treturn courses.find((c) => c.slug === slug);
}
`;
}

function generateModulesIndex(modules: ModuleInfo[]): string {
  const CHUNK_SIZE = 500;
  const chunks: ModuleInfo[][] = [];
  for (let i = 0; i < modules.length; i += CHUNK_SIZE) {
    chunks.push(modules.slice(i, i + CHUNK_SIZE));
  }

  const imports = modules.map((m) => `import ${m.variableName} from "${m.importPath}";`).join('\n');

  let partsDecl = '';
  let combineDecl = '';
  if (chunks.length === 1) {
    const exports = chunks[0].map((m) => `\t${m.variableName},`).join('\n');
    partsDecl = `const rawModulesPart1 = [\n${exports}\n];\n`;
    combineDecl = `const rawModules: any[] = [...rawModulesPart1];`;
  } else {
    const partDecls = chunks.map((chunk, idx) => {
      const exports = chunk.map((m) => `\t${m.variableName},`).join('\n');
      return `const rawModulesPart${idx + 1} = [\n${exports}\n];`;
    }).join('\n\n');

    const partRefs = chunks.map((_, idx) => `rawModulesPart${idx + 1}`).join(', ');
    partsDecl = partDecls;
    combineDecl = `const rawModules: any[] = [...${partRefs}];`;
  }

  return `import type { Module } from "@/types";

${imports}

${partsDecl}

${combineDecl}

export const modules: Module[] = rawModules as unknown as Module[];

export function getModuleBySlug(slug: string): Module | undefined {
\treturn modules.find((m) => m.slug === slug);
}

export function getModulesByCourse(courseSlug: string): Module[] {
\treturn modules.filter((m) => m.courseSlug === courseSlug).sort((a, b) => a.order - b.order);
}
`;
}

function generateLessonsIndex(lessons: LessonInfo[]): string {
  const CHUNK_SIZE = 500;
  const chunks: LessonInfo[][] = [];
  for (let i = 0; i < lessons.length; i += CHUNK_SIZE) {
    chunks.push(lessons.slice(i, i + CHUNK_SIZE));
  }

  const imports = lessons.map((l) => `import ${l.variableName} from "${l.importPath}";`).join('\n');

  let partsDecl = '';
  let combineDecl = '';
  if (chunks.length === 1) {
    const exports = chunks[0].map((l) => `\t${l.variableName},`).join('\n');
    partsDecl = `const rawLessonsPart1 = [\n${exports}\n];\n`;
    combineDecl = `const rawLessons: any[] = [...rawLessonsPart1];`;
  } else {
    const partDecls = chunks.map((chunk, idx) => {
      const exports = chunk.map((l) => `\t${l.variableName},`).join('\n');
      return `const rawLessonsPart${idx + 1} = [\n${exports}\n];`;
    }).join('\n\n');

    const partRefs = chunks.map((_, idx) => `rawLessonsPart${idx + 1}`).join(', ');
    partsDecl = partDecls;
    combineDecl = `const rawLessons: any[] = [...${partRefs}];`;
  }

  return `import type { Lesson } from '@/types';

${imports}

${partsDecl}

${combineDecl}

export const lessons: Lesson[] = rawLessons as unknown as Lesson[];

export function getLessonBySlug(slug: string): Lesson | undefined {
\treturn lessons.find((l) => l.slug === slug);
}

export function getLessonsByModule(moduleSlug: string, courseSlug?: string): Lesson[] {
\treturn lessons.filter((l) => l.moduleSlug === moduleSlug && (!courseSlug || l.courseSlug === courseSlug)).sort((a, b) => a.order - b.order);
}

export function getAdjacentLessons(lesson: Lesson, allLessons: Lesson[]): { prev: Lesson | null; next: Lesson | null } {
\tconst moduleLessons = allLessons.filter((l) => l.moduleSlug === lesson.moduleSlug).sort((a, b) => a.order - b.order);
\tconst idx = moduleLessons.findIndex((l) => l.slug === lesson.slug);
\treturn {
\t\tprev: idx > 0 ? moduleLessons[idx - 1] : null,
\t\tnext: idx < moduleLessons.length - 1 ? moduleLessons[idx + 1] : null,
\t};
}
`;
}

function main() {
  console.log('Scanning content directories...');

  const courses = scanCourses();
  const modules = scanModules();
  const lessons = scanLessons();

  console.log(`Found ${courses.length} courses, ${modules.length} modules, ${lessons.length} lessons`);

  const coursesIndex = generateCoursesIndex(courses);
  const modulesIndex = generateModulesIndex(modules);
  const lessonsIndex = generateLessonsIndex(lessons);

  fs.writeFileSync(COURSES_INDEX, coursesIndex);
  fs.writeFileSync(MODULES_INDEX, modulesIndex);
  fs.writeFileSync(LESSONS_INDEX, lessonsIndex);

  console.log('Updated content/courses/index.ts, content/modules/index.ts, content/lessons/index.ts');
}

main();
