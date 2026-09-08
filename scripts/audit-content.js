#!/usr/bin/env node
'use strict';

/*
 * Content Audit Script for Interview-Prep
 *
 * Scans all lesson JSON files under content/courses and reports:
 *   1. Lessons with questionable estimatedMinutes (tiny lessons with high mins, huge lessons with low mins)
 *   2. Lessons with a heading block immediately before a key-terms block (redundant — key-terms renders its own header)
 *   3. Lessons with divider blocks immediately before or after heading blocks (redundant — headings have border-bottom)
 *   4. Module summaries: lesson count + total minutes per module
 *   5. Course summaries: module count + total lessons + total minutes per course
 *
 * This script is READ-ONLY: it never modifies any files.
 */

const fs = require('fs');
const path = require('path');

// ── Configuration ─────────────────────────────────────────────────────────────

const ROOT = path.resolve(__dirname, '..', 'content', 'courses');

// Blocks that carry real instructional content (each ~2.5 min on average).
// `divider` is a pure visual separator and is excluded from the weight count.
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

// Minutes per significant content block (midpoint of the 2-3 min guideline).
const MINUTES_PER_BLOCK = 2.5;

// Thresholds for flagging estimatedMinutes.
//  - ratioTooLow:  content-heavy lesson whose minutes are far below expectation
//  - ratioTooHigh: tiny lesson whose minutes are far above expectation
//  - minAbsDiff  : ignore differences smaller than this to reduce noise
const RATIO_LOW = 0.5;   // estimated < 50% of expected
const RATIO_HIGH = 2.0;  // estimated > 200% of expected
const MIN_ABS_DIFF = 5;  // require at least 5-minute absolute difference

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Recursively collect all *.json file paths under a directory.
 * @param {string} dir
 * @param {string[]} acc
 * @returns {string[]}
 */
function collectJsonFiles(dir, acc = []) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch (e) {
    return acc;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectJsonFiles(full, acc);
    } else if (entry.isFile() && entry.name.endsWith('.json')) {
      acc.push(full);
    }
  }
  return acc;
}

/**
 * Compute the weighted "significant block" count for a lesson.
 * @param {Array} blocks
 * @returns {number}
 */
function countSignificantBlocks(blocks) {
  if (!Array.isArray(blocks)) return 0;
  let count = 0;
  for (const block of blocks) {
    const weight = CONTENT_BLOCK_WEIGHTS[block.type];
    if (weight === undefined) {
      // Unknown block type — count it as significant to be safe.
      count += 1;
    } else {
      count += weight;
    }
  }
  return count;
}

/**
 * Format a file path relative to the repo root for readable output.
 * @param {string} fullPath
 * @returns {string}
 */
function relPath(fullPath) {
  return path.relative(path.join(__dirname, '..'), fullPath).replace(/\\/g, '/');
}

/**
 * Extract the course slug from a lesson file path.
 * content/courses/<courseSlug>/<moduleSlug>/<lessonSlug>.json
 * @param {string} fullPath
 * @returns {{ course: string, module: string }}
 */
function extractSlugs(fullPath) {
  const parts = relPath(fullPath).split('/');
  // parts: [ 'content', 'courses', <course>, <module>, <file> ]
  return { course: parts[2], module: parts[3] };
}

// ── Main audit logic ──────────────────────────────────────────────────────────

function audit() {
  const allJsonFiles = collectJsonFiles(ROOT);

  // Lesson files are everything except `content.json` (module/course metadata).
  const lessonFiles = allJsonFiles.filter((f) => path.basename(f) !== 'content.json');

  const findings = {
    totalLessons: 0,
    parseErrors: [],
    questionableMinutes: [],
    headingBeforeKeyTerms: [],
    dividerNearHeading: [],
  };

  // For summaries: moduleStats[courseSlug][moduleSlug] = { lessons, minutes }
  const moduleStats = {};
  // courseStats[courseSlug] = { modules, lessons, minutes }
  const courseStats = {};

  for (const filePath of lessonFiles) {
    let data;
    try {
      const raw = fs.readFileSync(filePath, 'utf-8');
      data = JSON.parse(raw);
    } catch (e) {
      findings.parseErrors.push({ file: relPath(filePath), error: e.message });
      continue;
    }

    findings.totalLessons++;

    const { course, module: mod } = extractSlugs(filePath);
    const blocks = data.blocks || [];
    const blockCount = blocks.length;
    const significantCount = countSignificantBlocks(blocks);
    const estimatedMinutes = data.estimatedMinutes || 0;

    // Skip module content.json files that slipped through (defensive)
    if (!data.slug) continue;

    // ── 1. estimatedMinutes check ──
    const expectedMinutes = significantCount * MINUTES_PER_BLOCK;
    // Don't flag if expected is essentially zero (no content at all — different issue).
    if (expectedMinutes > 0) {
      const ratio = estimatedMinutes / expectedMinutes;
      const absDiff = Math.abs(estimatedMinutes - expectedMinutes);
      const isTooLow = ratio < RATIO_LOW && estimatedMinutes > 0 && absDiff >= MIN_ABS_DIFF && expectedMinutes >= 10;
      const isTooHigh = ratio > RATIO_HIGH && absDiff >= MIN_ABS_DIFF && estimatedMinutes > 10;
      if (isTooLow || isTooHigh) {
        findings.questionableMinutes.push({
          file: relPath(filePath),
          slug: data.slug,
          title: data.title,
          estimatedMinutes,
          expectedMinutes: Math.round(expectedMinutes),
          blockCount,
          significantBlockCount: significantCount,
          ratio: (ratio * 100).toFixed(1) + '%',
          issue: isTooLow ? 'underestimated' : 'overestimated',
        });
      }
    }

    // ── 2. heading immediately before key-terms ──
    for (let i = 1; i < blocks.length; i++) {
      if (blocks[i].type === 'key-terms' && blocks[i - 1].type === 'heading') {
        findings.headingBeforeKeyTerms.push({
          file: relPath(filePath),
          slug: data.slug,
          title: data.title,
          blockIndex: i,
          headingText: (blocks[i - 1].data && blocks[i - 1].data.text) || blocks[i - 1].text || '(no text)',
        });
      }
    }

    // ── 3. divider immediately before or after heading ──
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i].type === 'divider') {
        // Check if previous block is a heading
        if (i > 0 && blocks[i - 1].type === 'heading') {
          findings.dividerNearHeading.push({
            file: relPath(filePath),
            slug: data.slug,
            title: data.title,
            blockIndex: i,
            position: 'before',
            headingLevel: (blocks[i - 1].data && blocks[i - 1].data.level) || blocks[i - 1].level,
            headingText: (blocks[i - 1].data && blocks[i - 1].data.text) || blocks[i - 1].text || '(no text)',
          });
        }
        // Check if next block is a heading
        if (i < blocks.length - 1 && blocks[i + 1].type === 'heading') {
          findings.dividerNearHeading.push({
            file: relPath(filePath),
            slug: data.slug,
            title: data.title,
            blockIndex: i,
            position: 'after',
            headingLevel: (blocks[i + 1].data && blocks[i + 1].data.level) || blocks[i + 1].level,
            headingText: (blocks[i + 1].data && blocks[i + 1].data.text) || blocks[i + 1].text || '(no text)',
          });
        }
      }
    }

    // ── Collect summary stats ──
    // Module-level aggregation
    if (!moduleStats[course]) moduleStats[course] = {};
    if (!moduleStats[course][mod]) {
      moduleStats[course][mod] = { lessons: 0, minutes: 0 };
    }
    moduleStats[course][mod].lessons += 1;
    moduleStats[course][mod].minutes += estimatedMinutes;

    // Course-level aggregation
    if (!courseStats[course]) {
      courseStats[course] = { modules: new Set(), lessons: 0, minutes: 0 };
    }
    courseStats[course].modules.add(mod);
    courseStats[course].lessons += 1;
    courseStats[course].minutes += estimatedMinutes;
  }

  // ── Report ──────────────────────────────────────────────────────────────────

  console.log('═'.repeat(80));
  console.log('  CONTENT AUDIT REPORT');
  console.log('═'.repeat(80));
  console.log();
  console.log(`Total lesson JSON files processed: ${findings.totalLessons}`);

  if (findings.parseErrors.length > 0) {
    console.log(`\n⚠️  PARSE ERRORS: ${findings.parseErrors.length}`);
    for (const e of findings.parseErrors) {
      console.log(`  - ${e.file}: ${e.error}`);
    }
  }

  // 1. Questionable estimatedMinutes
  console.log('\n' + '─'.repeat(80));
  console.log(`1. QUESTIONABLE estimatedMinutes  (${findings.questionableMinutes.length} found)`);
  console.log('─'.repeat(80));
  if (findings.questionableMinutes.length === 0) {
    console.log('  ✓ No issues found.');
  } else {
    // Sort by ratio distance from 1.0 (most extreme first)
    findings.questionableMinutes
      .sort((a, b) => {
        const ra = Math.abs(parseFloat(a.ratio) - 100);
        const rb = Math.abs(parseFloat(b.ratio) - 100);
        return rb - ra;
      })
      .forEach((f) => {
        console.log(`  • [${f.issue.toUpperCase()}] ${f.slug} — "${f.title}"`);
        console.log(`    File: ${f.file}`);
        console.log(`    Estimated: ${f.estimatedMinutes} min | Expected: ~${f.expectedMinutes} min (${f.ratio} of expected)`);
        console.log(`    Blocks: ${f.blockCount} total, ${f.significantBlockCount} significant`);
        console.log();
      });
  }

  // 2. Heading before key-terms
  console.log('─'.repeat(80));
  console.log(`2. REDUNDANT HEADING BEFORE key-terms  (${findings.headingBeforeKeyTerms.length} found)`);
  console.log('─'.repeat(80));
  if (findings.headingBeforeKeyTerms.length === 0) {
    console.log('  ✓ No issues found.');
  } else {
    findings.headingBeforeKeyTerms.forEach((f) => {
      console.log(`  • ${f.slug} — "${f.title}"`);
      console.log(`    File: ${f.file}  (block index ${f.blockIndex})`);
      console.log(`    Redundant heading text: "${f.headingText}"`);
      console.log();
    });
  }

  // 3. Divider near heading
  console.log('─'.repeat(80));
  console.log(`3. REDUNDANT DIVIDER NEAR HEADING  (${findings.dividerNearHeading.length} found)`);
  console.log('─'.repeat(80));
  if (findings.dividerNearHeading.length === 0) {
    console.log('    ✓ No issues found.');
  } else {
    findings.dividerNearHeading.forEach((f) => {
      const side = f.position === 'before' ? 'immediately BEFORE' : 'immediately AFTER';
      console.log(`  • ${f.slug} — "${f.title}"`);
      console.log(`    File: ${f.file}  (block index ${f.blockIndex})`);
      console.log(`    Divider is ${side} heading (level ${f.headingLevel}): "${f.headingText}"`);
      console.log();
    });
  }

  // 4. Module summaries
  console.log('─'.repeat(80));
  console.log('4. MODULE SUMMARIES');
  console.log('─'.repeat(80));
  for (const course of Object.keys(moduleStats).sort()) {
    for (const mod of Object.keys(moduleStats[course]).sort()) {
      const stats = moduleStats[course][mod];
      console.log(`  ${course}/${mod}: ${stats.lessons} lesson(s), ${stats.minutes} total min`);
    }
  }

  // 5. Course summaries
  console.log('\n' + '─'.repeat(80));
  console.log('5. COURSE SUMMARIES');
  console.log('─'.repeat(80));
  for (const course of Object.keys(courseStats).sort()) {
    const stats = courseStats[course];
    console.log(`  ${course}:`);
    console.log(`    Modules:     ${stats.modules.size}`);
    console.log(`    Lessons:     ${stats.lessons}`);
    console.log(`    Total minutes: ${stats.minutes}`);
    console.log();
  }

  console.log('═'.repeat(80));
  console.log('  END OF REPORT');
  console.log('═'.repeat(80));
}

audit();
