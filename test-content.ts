import { searchAll, getCourseStats, getAllCourses, getProblemCourses, getLessonsForCourse } from './lib/content';

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

console.log('Running content helper tests...\n');

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

// Test search for problems
const problemSearch = searchAll('array');
assert(problemSearch.length > 0, 'searchAll finds array-related content');

// Test search for interview questions
const interviewSearch = searchAll('C#');
assert(interviewSearch.length > 0, 'searchAll finds C# interview questions');

console.log(`\nResults: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
