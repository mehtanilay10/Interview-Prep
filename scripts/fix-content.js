#!/usr/bin/env node
'use strict';

/*
 * Content Fix Script for Interview-Prep
 *
 * Fixes issues found by audit-content.js:
 *   1. Remove redundant heading blocks immediately before key-terms blocks
 *   2. Remove redundant divider blocks immediately before or after heading blocks
 *   3. Recalculate estimatedMinutes based on content block count (2.5 min per block)
 *   4. Update module estimatedHours based on sum of lesson estimatedMinutes
 *   5. Update course moduleSlugs counts
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', 'content', 'courses');

const CONTENT_BLOCK_WEIGHTS = {
  paragraph: 1,
  heading: 1,
  'bullet-list': 1,
  'numbered-list': 1,
  callout: 1,
  quote: 1,
  'key-terms': 1,
  table: 1,
  example: 1,
  exercise: 1,
  checklist: 1,
  mermaid: 1,
  'comparison-cards': 1,
  'summary-box': 1,
  'faq-block': 1,
  image: 1,
  divider: 0,
};

const MINUTES_PER_BLOCK = 2.5;

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

function countSignificantBlocks(blocks) {
  if (!Array.isArray(blocks)) return 0;
  let count = 0;
  for (const block of blocks) {
    const weight = CONTENT_BLOCK_WEIGHTS[block.type];
    count += weight === undefined ? 1 : weight;
  }
  return count;
}

function fixLesson(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  let data;
  try { data = JSON.parse(raw); }
  catch (e) { return { fixed: false, reason: 'parse error: ' + e.message, estimatedMinutes: 0 }; }

  if (!data.slug) return { fixed: false, reason: 'no slug (likely module content.json)', estimatedMinutes: 0 };

  let changed = false;
  const fixes = [];

  const blocks = data.blocks || [];
  const newBlocks = [];
  let i = 0;

  while (i < blocks.length) {
    const block = blocks[i];

    // Fix 1: Skip redundant heading immediately before key-terms
    if (block.type === 'heading' && i + 1 < blocks.length && blocks[i + 1].type === 'key-terms') {
      fixes.push(`removed redundant heading "${block.data?.text || block.text || ''}" before key-terms`);
      changed = true;
      i++;
      continue;
    }

    // Fix 2: Skip divider immediately after heading (heading has border-bottom)
    if (block.type === 'divider' && i > 0 && newBlocks.length > 0 && newBlocks[newBlocks.length - 1].type === 'heading') {
      const prevHeading = newBlocks[newBlocks.length - 1];
      fixes.push(`removed redundant divider after heading "${prevHeading.data?.text || prevHeading.text || ''}"`);
      changed = true;
      i++;
      continue;
    }

    // Fix 3: Skip divider immediately before heading
    if (block.type === 'divider' && i + 1 < blocks.length && blocks[i + 1].type === 'heading') {
      const nextHeading = blocks[i + 1];
      fixes.push(`removed redundant divider before heading "${nextHeading.data?.text || nextHeading.text || ''}"`);
      changed = true;
      i++;
      continue;
    }

    newBlocks.push(block);
    i++;
  }

  // Fix 4: Recalculate estimatedMinutes
  const significantCount = countSignificantBlocks(newBlocks);
  const expectedMinutes = significantCount * MINUTES_PER_BLOCK;
  const roundedExpected = Math.max(5, Math.round(expectedMinutes));

  if (data.estimatedMinutes !== roundedExpected) {
    fixes.push(`updated estimatedMinutes from ${data.estimatedMinutes} to ${roundedExpected} (${significantCount} significant blocks)`);
    data.estimatedMinutes = roundedExpected;
    changed = true;
  }

  if (!changed) return { fixed: false, reason: 'no issues found', estimatedMinutes: data.estimatedMinutes };

  data.blocks = newBlocks;
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  return { fixed: true, fixes, estimatedMinutes: data.estimatedMinutes };
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
  console.log('  CONTENT FIX SCRIPT');
  console.log('═'.repeat(80));
  console.log();

  const allJsonFiles = collectJsonFiles(ROOT);
  const lessonFiles = allJsonFiles.filter((f) => path.basename(f) !== 'content.json');
  const moduleFiles = allJsonFiles.filter((f) => path.basename(f) === 'content.json');

  let totalLessonFixes = 0;
  let totalModuleFixes = 0;
  const moduleStats = {};

  console.log('Pass 1: Fixing lessons...\n');

  for (const filePath of lessonFiles) {
    const result = fixLesson(filePath);
    if (result.fixed) {
      totalLessonFixes++;
      const { course, module: mod } = extractSlugs(filePath);
      if (!moduleStats[course]) moduleStats[course] = {};
      if (!moduleStats[course][mod]) moduleStats[course][mod] = { lessons: 0, minutes: 0 };
      moduleStats[course][mod].lessons++;
      moduleStats[course][mod].minutes += result.estimatedMinutes;

      if (totalLessonFixes % 100 === 0) {
        console.log(`  ... ${totalLessonFixes} lessons fixed so far`);
      }
    }
  }

  console.log(`\n  Total lessons fixed: ${totalLessonFixes}`);

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
