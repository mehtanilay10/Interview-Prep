const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const baseDir = path.join(rootDir, 'content', 'courses');

function sanitizeId(str) {
  return str
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .replace(/^[0-9]+/, '')
    .trim()
    .replace(/ +([a-zA-Z0-9])/g, (_, c) => c.toUpperCase());
}

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

// Scan actual filesystem structure
const courses = [];
const courseDirs = fs.readdirSync(baseDir).filter(d => {
  const p = path.join(baseDir, d);
  return fs.statSync(p).isDirectory() && fs.existsSync(path.join(p, 'content.json'));
});
for (const dir of courseDirs) {
  const course = readJson(path.join(baseDir, dir, 'content.json'));
  courses.push(course);
}
courses.sort((a, b) => a.order - b.order);

// Scan actual module directories using filesystem entries
const modules = [];
const moduleDirMap = new Map(); // courseSlug -> array of {dirName, mod}
for (const course of courses) {
  const courseDir = path.join(baseDir, course.slug);
  const entries = fs.readdirSync(courseDir).filter(e => {
    const p = path.join(courseDir, e);
    return fs.statSync(p).isDirectory() && fs.existsSync(path.join(p, 'content.json'));
  });
  const mods = [];
  for (const entry of entries) {
    const modPath = path.join(courseDir, entry, 'content.json');
    const mod = readJson(modPath);
    mods.push({ dirName: entry, mod });
    modules.push(mod);
  }
  moduleDirMap.set(course.slug, mods);
}
modules.sort((a, b) => a.order - b.order);

// Scan actual lesson files using filesystem entries
const lessons = [];
for (const course of courses) {
  const courseDir = path.join(baseDir, course.slug);
  const entries = fs.readdirSync(courseDir).filter(e => {
    const p = path.join(courseDir, e);
    return fs.statSync(p).isDirectory();
  });
  for (const entry of entries) {
    const modDir = path.join(courseDir, entry);
    const contentPath = path.join(modDir, 'content.json');
    if (!fs.existsSync(contentPath)) continue;
    const files = fs.readdirSync(modDir).filter(f => f.endsWith('.json') && f !== 'content.json');
    for (const file of files) {
      const lesson = readJson(path.join(modDir, file));
      // Keep original moduleSlug and slug from JSON for data integrity
      // Use actual directory/filename only for import path generation
      lessons.push({
        ...lesson,
        _actualModuleDir: entry,
        _actualLessonFile: file.replace('.json', '')
      });
    }
  }
}
lessons.sort((a, b) => a.order - b.order);

console.log(`Found: ${courses.length} courses, ${modules.length} modules, ${lessons.length} lessons`);

// Generate courses/index.ts
let coursesTs = `import type { Course } from '@/types';\n\n`;
for (const course of courses) {
  const importName = sanitizeId(course.slug) + 'Course';
  coursesTs += `import ${importName} from './${course.slug}/content.json';\n`;
}
coursesTs += `\nconst rawCourses = [\n`;
for (const course of courses) {
  const importName = sanitizeId(course.slug) + 'Course';
  coursesTs += `  ${importName},\n`;
}
coursesTs += `];\n\nexport const courses: Course[] = rawCourses as unknown as Course[];\n\nexport function getCourseBySlug(slug: string): Course | undefined {\n  return courses.find((c) => c.slug === slug);\n}\n`;

fs.writeFileSync(path.join(rootDir, 'content', 'courses', 'index.ts'), coursesTs);

// Generate modules/index.ts using ACTUAL directory names for paths
let modulesTs = `import type { Module } from '@/types';\n\n`;
for (const mod of modules) {
  const courseMods = moduleDirMap.get(mod.courseSlug) || [];
  const found = courseMods.find(m => m.mod.slug === mod.slug);
  const actualDir = found ? found.dirName : mod.slug;
  const varName = sanitizeId(mod.courseSlug) + sanitizeId(mod.slug) + 'Module';
  modulesTs += `import ${varName} from '../courses/${mod.courseSlug}/${actualDir}/content.json';\n`;
}
modulesTs += `\nconst rawModules = [\n`;
for (const mod of modules) {
  const varName = sanitizeId(mod.courseSlug) + sanitizeId(mod.slug) + 'Module';
  modulesTs += `  ${varName},\n`;
}
modulesTs += `];\n\nexport const modules: Module[] = rawModules as unknown as Module[];\n\nexport function getModuleBySlug(slug: string): Module | undefined {\n  return modules.find((m) => m.slug === slug);\n}\n\nexport function getModulesByCourse(courseSlug: string): Module[] {\n  return modules\n    .filter((m) => m.courseSlug === courseSlug)\n    .sort((a, b) => a.order - b.order);\n}\n`;

fs.writeFileSync(path.join(rootDir, 'content', 'modules', 'index.ts'), modulesTs);

// Generate lessons/index.ts using ACTUAL filenames for paths
let lessonsTs = `import type { Lesson } from '@/types';\n\n`;
for (const lesson of lessons) {
  const varName = sanitizeId(lesson.courseSlug) + sanitizeId(lesson.moduleSlug) + sanitizeId(lesson.slug) + 'Lesson';
  lessonsTs += `import ${varName} from '../courses/${lesson.courseSlug}/${lesson._actualModuleDir}/${lesson._actualLessonFile}.json';\n`;
}
lessonsTs += `\nconst rawLessons = [\n`;
for (const lesson of lessons) {
  const varName = sanitizeId(lesson.courseSlug) + sanitizeId(lesson.moduleSlug) + sanitizeId(lesson.slug) + 'Lesson';
  lessonsTs += `  ${varName},\n`;
}
lessonsTs += `];\n\nexport const lessons: Lesson[] = rawLessons as unknown as Lesson[];\n\nexport function getLessonBySlug(slug: string): Lesson | undefined {\n  return lessons.find((l) => l.slug === slug);\n}\n\nexport function getLessonsByModule(moduleSlug: string, courseSlug?: string): Lesson[] {\n  return lessons\n    .filter((l) => l.moduleSlug === moduleSlug && (!courseSlug || l.courseSlug === courseSlug))\n    .sort((a, b) => a.order - b.order);\n}\n\nexport function getAdjacentLessons(\n  lesson: Lesson,\n  allLessons: Lesson[]\n): { prev: Lesson | null; next: Lesson | null } {\n  const moduleLessons = allLessons\n    .filter((l) => l.moduleSlug === lesson.moduleSlug)\n    .sort((a, b) => a.order - b.order);\n  const idx = moduleLessons.findIndex((l) => l.slug === lesson.slug);\n  return {\n    prev: idx > 0 ? moduleLessons[idx - 1] : null,\n    next: idx < moduleLessons.length - 1 ? moduleLessons[idx + 1] : null,\n  };\n}\n`;

fs.writeFileSync(path.join(rootDir, 'content', 'lessons', 'index.ts'), lessonsTs);

console.log('Index files regenerated with actual filesystem paths while preserving original slugs.');
