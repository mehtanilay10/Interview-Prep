#!/usr/bin/env node
'use strict';

/*
 * Content Fix Script for Interview-Prep
 *
 * Re-audits lessons with >20 estimatedMinutes and applies refined weighting.
 * Also updates module estimatedHours and course moduleSlugs.
 *
 * Weights:
 *  - Paragraphs: 1 unit
 *  - Headings: 0 units (structural)
 *  - Bullet/numbered lists: 1 unit
 *  - Callouts: 1 unit
 *  - Quotes: 1 unit
 *  - Key Terms: 1 unit
 *  - Tables: 2 units
 *  - Examples: 2 units
 *  - Exercises: 2 units
 *  - Checklists: 1 unit
 *  - Mermaid diagrams: 1 unit
 *  - Comparison cards: 2 units
 *  - Summary boxes: 1 unit
 *  - FAQ blocks: 1 unit
 *  - Images: 1 unit
 *  - Dividers: 0 units
 *
 * Each unit = 2.5 minutes
 * Maximum lesson duration: 35 minutes
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', 'content', 'courses');

const BLOCK_WEIGHTS = {
  paragraph: 1,
  heading: 0,
  'bullet-list': 1,
  'numbered-list': 1,
  callout: 1,
  quote: 1,
  'key-terms': 1,
  table: 2,
  example: 2,
  exercise: 2,
  checklist: 1,
  mermaid: 1,
  'comparison-cards': 2,
  'summary-box': 1,
  'faq-block': 1,
  image: 1,
  divider: 0,
};

const MINUTES_PER_UNIT = 2.5;
const MAX_MINUTES = 35;

function collectJsonFiles(dir, acc = []) {
  let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); }
  catch (e) { return acc; }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collectJsonFiles(full, acc);
    else if (entry.isFile() && entry.name.endsWith('.json')) acc.push(full);
  }
  return acc;
}

function relPath(fullPath) {
  return path.relative(path.join(__dirname, '..'), fullPath).replace(/\\/g, '/');
}

function extractSlugs(fullPath) {
  const parts = relPath(fullPath).split('/');
  return { course: parts[2], module: parts[3] };
}

function calculateLessonMinutes(blocks) {
  if (!Array.isArray(blocks)) return 0;

  let units = 0;
  for (const block of blocks) {
    const weight = BLOCK_WEIGHTS[block.type];
    if (weight === undefined) {
      units += 1;
    } else {
      units += weight;
    }
  }

  const minutes = units * MINUTES_PER_UNIT;
  return Math.min(MAX_MINUTES, Math.max(5, Math.round(minutes)));
}

function fixLesson(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  let data;
  try { data = JSON.parse(raw); }
  catch (e) { return { fixed: false, reason: 'parse error: ' + e.message, estimatedMinutes: 0 }; }

  if (!data.slug) return { fixed: false, reason: 'no slug (likely module content.json)', estimatedMinutes: 0 };

  const newMinutes = calculateLessonMinutes(data.blocks || []);

  if (data.estimatedMinutes !== newMinutes) {
    data.estimatedMinutes = newMinutes;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
    return { fixed: true, estimatedMinutes: newMinutes };
  }

  return { fixed: false, estimatedMinutes: data.estimatedMinutes };
}

function fixModule(filePath, moduleStats) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  let data;
  try { data = JSON.parse(raw); }
  catch (e) { return { fixed: false, reason: 'parse error' }; }

  if (!data.slug || !data.lessonSlugs) return { fixed: false, reason: 'not a module' };

  const { course, module: mod } = extractSlugs(filePath);
  const stats = moduleStats[course] && moduleStats[course][mod];
  if (!stats) return { fixed: false, reason: 'no stats' };

  const totalMinutes = stats.minutes;
  const estimatedHours = Math.max(0.5, Math.round((totalMinutes / 60) * 2) / 2);

  let changed = false;
  const fixes = [];

  if (data.estimatedHours !== estimatedHours) {
    fixes.push(`updated estimatedHours from ${data.estimatedHours} to ${estimatedHours}`);
    data.estimatedHours = estimatedHours;
    changed = true;
  }

  if (!changed) return { fixed: false, reason: 'no changes needed' };

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  return { fixed: true, fixes };
}

function updateCourseModuleSlugs() {
  const coursesDir = path.resolve(ROOT, '..');
  const courseDirs = fs.readdirSync(coursesDir).filter(d => {
    try {
      const stat = fs.statSync(path.join(coursesDir, d));
      return stat.isDirectory();
    } catch (e) { return false; }
  });

  for (const courseSlug of courseDirs) {
    const courseDir = path.join(coursesDir, courseSlug);
    const courseContentPath = path.join(courseDir, 'content.json');
    if (!fs.existsSync(courseContentPath)) continue;

    let courseData;
    try { courseData = JSON.parse(fs.readFileSync(courseContentPath, 'utf-8')); }
    catch (e) { continue; }

    const actualModuleSlugs = fs.readdirSync(courseDir)
      .filter(d => fs.statSync(path.join(courseDir, d)).isDirectory())
      .filter(d => fs.existsSync(path.join(courseDir, d, 'content.json')))
      .sort();

    const changes = [];
    if (courseData.moduleSlugs.length !== actualModuleSlugs.length) {
      changes.push(`module count: ${courseData.moduleSlugs.length} -> ${actualModuleSlugs.length}`);
    }

    let slugsMatch = true;
    for (let i = 0; i < Math.max(courseData.moduleSlugs.length, actualModuleSlugs.length); i++) {
      if (courseData.moduleSlugs[i] !== actualModuleSlugs[i]) {
        slugsMatch = false;
        break;
      }
    }

    if (!slugsMatch || courseData.moduleSlugs.length !== actualModuleSlugs.length) {
      courseData.moduleSlugs = actualModuleSlugs;
      fs.writeFileSync(courseContentPath, JSON.stringify(courseData, null, 2) + '\n');
      console.log(`  Updated ${courseSlug}/content.json moduleSlugs (${changes.join(', ')})`);
    }
  }
}

function main() {
  console.log('═'.repeat(80));
  console.log('  CONTENT FIX SCRIPT - RE-AUDIT >20 MIN LESSONS');
  console.log('═'.repeat(80));
  console.log();

  const allJsonFiles = collectJsonFiles(ROOT);
  const lessonFiles = allJsonFiles.filter((f) => path.basename(f) !== 'content.json');
  const moduleFiles = allJsonFiles.filter((f) => path.basename(f) === 'content.json');

  let totalLessonFixes = 0;
  let totalModuleFixes = 0;
  const moduleStats = {};

  console.log('Pass 1: Recalculating lessons >20 min...\n');

  for (const filePath of lessonFiles) {
    const raw = fs.readFileSync(filePath, 'utf-8');
    let data;
    try { data = JSON.parse(raw); }
    catch (e) { continue; }

    if (!data.slug) continue;

    const newMinutes = calculateLessonMinutes(data.blocks || []);

    // Track stats for ALL lessons
    const { course, module: mod } = extractSlugs(filePath);
    if (!moduleStats[course]) moduleStats[course] = {};
    if (!moduleStats[course][mod]) moduleStats[course][mod] = { lessons: 0, minutes: 0 };
    moduleStats[course][mod].lessons++;
    moduleStats[course][mod].minutes += newMinutes;

    // Only fix if >20 min AND changed
    if (data.estimatedMinutes > 20 && data.estimatedMinutes !== newMinutes) {
      data.estimatedMinutes = newMinutes;
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
      totalLessonFixes++;

      if (totalLessonFixes % 50 === 0) {
        console.log(`  ... ${totalLessonFixes} lessons fixed so far`);
      }
    }
  }

  console.log(`\n  Total lessons recalculated: ${totalLessonFixes}`);

  // Second pass: fix modules
  console.log('\nPass 2: Fixing modules...\n');

  for (const filePath of moduleFiles) {
    const result = fixModule(filePath, moduleStats);
    if (result.fixed) {
      totalModuleFixes++;
      if (totalModuleFixes % 20 === 0) {
        console.log(`  ... ${totalModuleFixes} modules fixed so far`);
      }
    }
  }

  console.log(`\n  Total modules fixed: ${totalModuleFixes}`);

  // Third pass: update course moduleSlugs
  console.log('\nPass 3: Updating course moduleSlugs...\n');
  updateCourseModuleSlugs();

  console.log('\n' + '═'.repeat(80));
  console.log('  FIXES COMPLETE');
  console.log('═'.repeat(80));
}

main();
