#!/usr/bin/env node

/**
 * Auto-generates content index files for modules and lessons.
 * Scans content directories and updates content/modules/index.ts and content/lessons/index.ts.
 */

import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(process.cwd());
const CONTENT_DIR = path.join(ROOT, 'content');
const MODULES_INDEX = path.join(CONTENT_DIR, 'modules', 'index.ts');
const LESSONS_INDEX = path.join(CONTENT_DIR, 'lessons', 'index.ts');

interface ModuleInfo {
  importPath: string;
  variableName: string;
  slug: string;
}

interface LessonInfo {
  importPath: string;
  variableName: string;
  slug: string;
}

function toVariableName(slug: string, prefix: string): string {
  const parts = slug.split('-');
  const cleaned = parts
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  
  // If starts with a number, prepend the prefix
  if (/^[0-9]/.test(cleaned)) {
    return `${prefix}${cleaned}`;
  }
  
  return `${prefix}${cleaned}`;
}

function scanModules(): ModuleInfo[] {
  const modules: ModuleInfo[] = [];
  const areas = ['courses', 'problems', 'sql-problems', 'interview-qa', 'cheatsheet'];

  for (const area of areas) {
    const areaPath = path.join(CONTENT_DIR, area);
    if (!fs.existsSync(areaPath)) continue;

    const walk = (dir: string, basePath: string) => {
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
            const variableName = toVariableName(slug, 'mod');
            modules.push({ importPath, variableName, slug });
          }
          walk(fullPath, basePath);
        }
      }
    };

    walk(areaPath, area);
  }

  return modules.sort((a, b) => a.slug.localeCompare(b.slug));
}

function scanLessons(): LessonInfo[] {
  const lessons: LessonInfo[] = [];
  const areas = ['courses', 'problems', 'sql-problems', 'interview-qa', 'cheatsheet'];
  const usedNames = new Set<string>();

  for (const area of areas) {
    const areaPath = path.join(CONTENT_DIR, area);
    if (!fs.existsSync(areaPath)) continue;

    const walk = (dir: string, parentDir: string = '') => {
      const entries = fs.readdirSync(dir);
      for (const entry of entries) {
        const fullPath = path.join(dir, entry);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          walk(fullPath, entry);
        } else if (entry.endsWith('.json') && entry !== 'content.json') {
          const relativePath = path.relative(CONTENT_DIR, fullPath);
          const importPath = `../${relativePath}`;
          const slug = entry.replace('.json', '');
          let variableName = toVariableName(slug, 'lesson');
          
          // Handle duplicates by appending parent directory info
          if (usedNames.has(variableName)) {
            const parent = parentDir || path.basename(path.dirname(fullPath));
            const parentPart = parent.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()).replace(/^[a-z]/, (letter) => letter.toUpperCase());
            variableName = toVariableName(slug, `lesson${parentPart}`);
          }
          
          // If still duplicate, append a number
          let finalName = variableName;
          let counter = 1;
          while (usedNames.has(finalName)) {
            finalName = `${variableName}${counter}`;
            counter++;
          }
          
          usedNames.add(finalName);
          lessons.push({ importPath, variableName: finalName, slug });
        }
      }
    };

    walk(areaPath);
  }

  return lessons.sort((a, b) => a.slug.localeCompare(b.slug));
}

function generateModulesIndex(modules: ModuleInfo[]): string {
  const imports = modules.map((m) => `import ${m.variableName} from "${m.importPath}";`).join('\n');
  const exports = modules.map((m) => `\t${m.variableName},`).join('\n');

  return `${imports}

export const modules = [
${exports}
] as const;

export type Module = typeof modules[number];

export function getModuleBySlug(slug: string): Module | undefined {
\treturn modules.find((m) => m.slug === slug);
}

export function getModulesByCourse(courseSlug: string): Module[] {
\treturn modules.filter((m) => m.courseSlug === courseSlug);
}

export function getCourseForModule(moduleSlug: string): Module | undefined {
\treturn modules.find((m) => m.slug === moduleSlug);
}
`;
}

function generateLessonsIndex(lessons: LessonInfo[]): string {
  const imports = lessons.map((l) => `import ${l.variableName} from "${l.importPath}";`).join('\n');
  const exports = lessons.map((l) => `\t${l.variableName},`).join('\n');

  return `${imports}

export const lessons = [
${exports}
] as const;

export type Lesson = typeof lessons[number];

export function getLessonBySlug(slug: string): Lesson | undefined {
\treturn lessons.find((l) => l.slug === slug);
}

export function getLessonsByModule(moduleSlug: string): Lesson[] {
\treturn lessons.filter((l) => l.moduleSlug === moduleSlug);
}
`;
}

function main() {
  console.log('Scanning content directories...');

  const modules = scanModules();
  const lessons = scanLessons();

  console.log(`Found ${modules.length} modules and ${lessons.length} lessons`);

  const modulesIndex = generateModulesIndex(modules);
  const lessonsIndex = generateLessonsIndex(lessons);

  fs.writeFileSync(MODULES_INDEX, modulesIndex);
  fs.writeFileSync(LESSONS_INDEX, lessonsIndex);

  console.log('Updated content/modules/index.ts and content/lessons/index.ts');
}

main();
