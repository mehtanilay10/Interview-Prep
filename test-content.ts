import { searchAll, getCourseStats, getAllCourses, getProblemCourses, getLessonsForCourse, getAllModules, getAllLessons } from './lib/content';
import type { Module, Lesson } from './types';
import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content');

const MODULE_FIELDS = new Set(['id', 'slug', 'courseSlug', 'title', 'description', 'longDescription', 'order', 'difficulty', 'estimatedHours', 'icon', 'tags', 'lessonSlugs', 'isOptional', 'skipLabel', 'prerequisites', 'whatYouLearn']);
const LESSON_FIELDS = new Set(['id', 'slug', 'moduleSlug', 'courseSlug', 'title', 'description', 'order', 'difficulty', 'estimatedMinutes', 'tags', 'blocks', 'technology', 'relatedLessons', 'furtherReading', 'prerequisites']);

let passed = 0;
let failed = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    passed++;
    console.log(`✓ ${message}`);
  } else {
    failed++;
    console.error(`✗ ${message}`);
  }
}

function isJSONFile(filePath: string): boolean {
  return filePath.endsWith('.json');
}

function getCourseSlugFromPath(filePath: string): string | null {
  const relative = path.relative(contentDir, filePath);
  const parts = relative.split(path.sep);
  if (parts[0] === 'courses' || parts[0] === 'problems') {
    return parts[1] || null;
  }
  if (parts[0] === 'interview-qa') {
    return 'interview-qa';
  }
  return null;
}

function validateContentFiles() {
  console.log('Validating content schema...\n');

  const validLessonSlugs = new Map<string, Set<string>>();
  const validModuleSlugs = new Map<string, Set<string>>();

  function ensureCourseMap(map: Map<string, Set<string>>, courseSlug: string) {
    if (!map.has(courseSlug)) map.set(courseSlug, new Set());
  }

  function scanCourse(coursePath: string, courseSlug: string) {
    ensureCourseMap(validLessonSlugs, courseSlug);
    ensureCourseMap(validModuleSlugs, courseSlug);
    if (!fs.existsSync(coursePath) || !fs.statSync(coursePath).isDirectory()) return;
    for (const mod of fs.readdirSync(coursePath)) {
      const modPath = path.join(coursePath, mod);
      if (!fs.statSync(modPath).isDirectory()) continue;
      validModuleSlugs.get(courseSlug)!.add(mod);
      for (const file of fs.readdirSync(modPath)) {
        if (file.endsWith('.json') && file !== 'content.json') {
          validLessonSlugs.get(courseSlug)!.add(file.replace('.json', ''));
        }
      }
    }
  }

  const coursesDir = path.join(contentDir, 'courses');
  const problemsDir = path.join(contentDir, 'problems');
  const interviewDir = path.join(contentDir, 'interview-qa');

  if (fs.existsSync(coursesDir)) {
    for (const course of fs.readdirSync(coursesDir)) {
      const p = path.join(coursesDir, course);
      if (fs.statSync(p).isDirectory()) scanCourse(p, course);
    }
  }
  if (fs.existsSync(problemsDir)) {
    for (const course of fs.readdirSync(problemsDir)) {
      const p = path.join(problemsDir, course);
      if (fs.statSync(p).isDirectory()) scanCourse(p, course);
    }
  }
  if (fs.existsSync(interviewDir)) {
    scanCourse(interviewDir, 'interview-qa');
  }

  let moduleSchemaErrors = 0;
  let lessonSchemaErrors = 0;
  let brokenRelatedLessons = 0;
  let missingLessonRefs = 0;

  function validateFile(filePath: string) {
    if (!isJSONFile(filePath)) return;
    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      const courseSlug = getCourseSlugFromPath(filePath);
      const fileName = path.basename(filePath);

      if (fileName === 'content.json') {
        const modPath = path.dirname(filePath);
        const parentPath = path.dirname(modPath);
        const grandparentPath = path.dirname(parentPath);
        const grandparentName = path.basename(grandparentPath);
        const isModuleContent = fs.statSync(modPath).isDirectory() && ['courses', 'problems', 'interview-qa'].includes(grandparentName);

        if (isModuleContent) {
          for (const key of Object.keys(data)) {
            if (!MODULE_FIELDS.has(key)) {
              console.error(`  Invalid module field: ${key} in ${filePath}`);
              moduleSchemaErrors++;
            }
          }
          if (data.lessonSlugs && Array.isArray(data.lessonSlugs) && courseSlug) {
            const valid = validLessonSlugs.get(courseSlug) || new Set();
            for (const slug of data.lessonSlugs) {
              if (!valid.has(slug)) {
                console.error(`  Missing lesson ref: ${filePath} -> ${slug}`);
                missingLessonRefs++;
              }
            }
          }
        }
      } else {
        for (const key of Object.keys(data)) {
          if (!LESSON_FIELDS.has(key)) {
            console.error(`  Invalid lesson field: ${key} in ${filePath}`);
            lessonSchemaErrors++;
          }
        }
        if (data.relatedLessons && Array.isArray(data.relatedLessons) && courseSlug) {
          const valid = validLessonSlugs.get(courseSlug) || new Set();
          for (const slug of data.relatedLessons) {
            if (!valid.has(slug)) {
              console.error(`  Broken relatedLessons: ${filePath} -> ${slug}`);
              brokenRelatedLessons++;
            }
          }
        }
      }
    } catch (e) {
      console.error(`  Invalid JSON: ${filePath}`);
    }
  }

  function walkDir(dir: string) {
    if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) return;
    for (const entry of fs.readdirSync(dir)) {
      const fullPath = path.join(dir, entry);
      if (fs.statSync(fullPath).isDirectory()) {
        walkDir(fullPath);
      } else if (isJSONFile(entry)) {
        validateFile(fullPath);
      }
    }
  }

  walkDir(coursesDir);
  walkDir(problemsDir);
  walkDir(interviewDir);

  assert(moduleSchemaErrors === 0, `Module schema violations: ${moduleSchemaErrors} (expected 0)`);
  assert(lessonSchemaErrors === 0, `Lesson schema violations: ${lessonSchemaErrors} (expected 0)`);
  assert(brokenRelatedLessons === 0, `Broken relatedLessons references: ${brokenRelatedLessons} (expected 0)`);
  assert(missingLessonRefs === 0, `Missing lesson file references: ${missingLessonRefs} (expected 0)`);
}

console.log('Running content helper tests...\n');

validateContentFiles();

// Test searchAll
const searchResults = searchAll('two sum');
assert(Array.isArray(searchResults), 'searchAll returns an array');
assert(searchResults.some(r => r.title.toLowerCase().includes('two sum')), 'searchAll finds "two sum"');

// Test getCourseStats
const stats = getCourseStats();
assert(typeof stats.totalLessons === 'number' && stats.totalLessons > 0, 'getCourseStats returns totalLessons > 0');
assert(typeof stats.totalModules === 'number' && stats.totalModules > 0, 'getCourseStats returns totalModules > 0');
assert(typeof stats.totalMinutes === 'number' && stats.totalMinutes > 0, 'getCourseStats returns totalMinutes > 0');
assert(typeof stats.totalHours === 'number' && stats.totalHours > 0, 'getCourseStats returns totalHours > 0');

// Test getAllCourses
const allCourses = getAllCourses();
assert(Array.isArray(allCourses), 'getAllCourses returns an array');
assert(allCourses.length > 0, 'getAllCourses returns at least one course');

// Test getProblemCourses
const problemCourses = getProblemCourses();
assert(Array.isArray(problemCourses), 'getProblemCourses returns an array');
assert(problemCourses.some(c => c.slug === 'csharp-problems'), 'getProblemCourses includes csharp-problems');
assert(problemCourses.some(c => c.slug === 'sql-problems'), 'getProblemCourses includes sql-problems');
assert(problemCourses.some(c => c.slug === 'system-design'), 'getProblemCourses includes system-design');
assert(problemCourses.some(c => c.slug === 'azure-problems'), 'getProblemCourses includes azure-problems');
assert(problemCourses.some(c => c.slug === 'lld-problems'), 'getProblemCourses includes lld-problems');
assert(problemCourses.some(c => c.slug === 'hld-problems'), 'getProblemCourses includes hld-problems');

// Test getLessonsForCourse
const csharpLessons = getLessonsForCourse('csharp-problems');
assert(Array.isArray(csharpLessons), 'getLessonsForCourse returns an array');
assert(csharpLessons.length > 0, 'getLessonsForCourse returns lessons for csharp-problems');
assert(csharpLessons.every(l => l.courseSlug === 'csharp-problems'), 'All returned lessons belong to csharp-problems');

const sqlLessons = getLessonsForCourse('sql-problems');
assert(Array.isArray(sqlLessons), 'getLessonsForCourse returns an array for sql-problems');
assert(sqlLessons.length > 0, 'getLessonsForCourse returns lessons for sql-problems');
assert(sqlLessons.every(l => l.courseSlug === 'sql-problems'), 'All returned lessons belong to sql-problems');

const systemDesignLessons = getLessonsForCourse('system-design');
assert(Array.isArray(systemDesignLessons), 'getLessonsForCourse returns an array for system-design');
assert(systemDesignLessons.length > 0, 'getLessonsForCourse returns lessons for system-design');
assert(systemDesignLessons.every(l => l.courseSlug === 'system-design'), 'All returned lessons belong to system-design');

const azureLessons = getLessonsForCourse('azure-problems');
assert(Array.isArray(azureLessons), 'getLessonsForCourse returns an array for azure-problems');
assert(azureLessons.length > 0, 'getLessonsForCourse returns lessons for azure-problems');
assert(azureLessons.every(l => l.courseSlug === 'azure-problems'), 'All returned lessons belong to azure-problems');

const lldLessons = getLessonsForCourse('lld-problems');
assert(Array.isArray(lldLessons), 'getLessonsForCourse returns an array for lld-problems');
assert(lldLessons.length > 0, 'getLessonsForCourse returns lessons for lld-problems');
assert(lldLessons.every(l => l.courseSlug === 'lld-problems'), 'All returned lessons belong to lld-problems');

const hldLessons = getLessonsForCourse('hld-problems');
assert(Array.isArray(hldLessons), 'getLessonsForCourse returns an array for hld-problems');
assert(hldLessons.length > 0, 'getLessonsForCourse returns lessons for hld-problems');
assert(hldLessons.every(l => l.courseSlug === 'hld-problems'), 'All returned lessons belong to hld-problems');

// Test search for problems
const problemSearch = searchAll('array');
assert(problemSearch.length > 0, 'searchAll finds array-related content');

// Test search for interview questions
const interviewSearch = searchAll('C#');
assert(interviewSearch.length > 0, 'searchAll finds C# interview questions');

console.log(`\nResults: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
