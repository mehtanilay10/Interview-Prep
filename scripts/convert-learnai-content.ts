#!/usr/bin/env node

/**
 * Converts LearnAI course structure to Interview-Prep format.
 * LearnAI: Course → Phase → Module → Lesson
 * Interview-Prep: Course → Module → Lesson
 *
 * This script flattens the phase structure by treating each phase as a module.
 */

import fs from 'fs';
import path from 'path';

const LEARNAI_ROOT = path.resolve('D:\\GitHub\\LearnAI');
const INTERVIEW_PREP_ROOT = path.resolve('D:\\GitHub\\Interview-Prep');
const LEARNAI_CONTENT = path.join(LEARNAI_ROOT, 'content', 'courses');
const TARGET_CONTENT = path.join(INTERVIEW_PREP_ROOT, 'content', 'courses');

interface LearnAICourse {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  order: number;
  phaseSlugs: string[];
}

interface LearnAIPhase {
  id: string;
  slug: string;
  courseSlug: string;
  title: string;
  subtitle: string;
  description: string;
  order: number;
  icon: string;
  color: string;
  moduleSlug: string[];
  estimatedWeeks: number;
}

interface LearnAIModule {
  id: string;
  slug: string;
  phaseSlug: string;
  title: string;
  description: string;
  longDescription?: string;
  order: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedHours: number;
  icon: string;
  tags: string[];
  lessonSlugs: string[];
  isOptional?: boolean;
  skipLabel?: string;
  prerequisites?: string[];
  whatYouLearn?: string[];
}

interface LearnAILesson {
  id: string;
  slug: string;
  moduleSlug: string;
  title: string;
  description: string;
  order: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedMinutes: number;
  tags: string[];
  prerequisites?: string[];
  isOptional?: boolean;
  skipLabel?: string;
  blocks: any[];
  relatedLessons?: string[];
  relatedGlossaryTerms?: string[];
  furtherReading?: any[];
}

interface InterviewPrepCourse {
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

interface InterviewPrepModule {
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

interface InterviewPrepLesson {
  id: string;
  slug: string;
  moduleSlug: string;
  courseSlug: string;
  title: string;
  description: string;
  order: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedMinutes: number;
  tags?: string[];
  technology?: string;
  prerequisites?: string[];
  isOptional?: boolean;
  skipLabel?: string;
  blocks: any[];
  relatedLessons?: string[];
  relatedGlossaryTerms?: string[];
  furtherReading?: any[];
}

function readJson<T>(filePath: string): T {
  const content = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(content);
}

function writeJson(filePath: string, data: any): void {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

function ensureDir(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function convertCourse(learnaiCourse: LearnAICourse): InterviewPrepCourse {
  return {
    id: learnaiCourse.id,
    slug: learnaiCourse.slug,
    title: learnaiCourse.title,
    subtitle: learnaiCourse.subtitle,
    description: learnaiCourse.description,
    icon: learnaiCourse.icon,
    color: learnaiCourse.color,
    order: learnaiCourse.order,
    category: 'ai',
    moduleSlugs: [], // Will be populated during conversion
  };
}

function convertPhaseToModule(phase: LearnAIPhase, courseSlug: string): InterviewPrepModule {
  return {
    id: phase.id,
    slug: phase.slug,
    courseSlug: courseSlug,
    title: phase.title,
    description: phase.subtitle || phase.description,
    longDescription: phase.description,
    order: phase.order,
    difficulty: 'beginner', // Default difficulty for phases
    estimatedHours: phase.estimatedWeeks * 2, // Rough estimate: 2 hours per week
    icon: phase.icon,
    tags: [],
    lessonSlugs: [], // Will be populated during conversion
    isOptional: false,
  };
}

function convertModuleToModule(module: LearnAIModule, courseSlug: string, phaseSlug: string): InterviewPrepModule {
  return {
    id: module.id,
    slug: `${phaseSlug}-${module.slug}`, // Prefix with phase slug to avoid conflicts
    courseSlug: courseSlug,
    title: module.title,
    description: module.description,
    longDescription: module.longDescription,
    order: module.order,
    difficulty: module.difficulty,
    estimatedHours: module.estimatedHours,
    icon: module.icon,
    tags: module.tags,
    lessonSlugs: module.lessonSlugs,
    isOptional: module.isOptional,
    skipLabel: module.skipLabel,
    prerequisites: module.prerequisites,
    whatYouLearn: module.whatYouLearn,
  };
}

function convertLesson(lesson: LearnAILesson, courseSlug: string, newModuleSlug: string): InterviewPrepLesson {
  return {
    id: lesson.id,
    slug: lesson.slug,
    moduleSlug: newModuleSlug,
    courseSlug: courseSlug,
    title: lesson.title,
    description: lesson.description,
    order: lesson.order,
    difficulty: lesson.difficulty,
    estimatedMinutes: lesson.estimatedMinutes,
    tags: lesson.tags,
    prerequisites: lesson.prerequisites,
    isOptional: lesson.isOptional,
    skipLabel: lesson.skipLabel,
    blocks: lesson.blocks,
    relatedLessons: lesson.relatedLessons,
    relatedGlossaryTerms: lesson.relatedGlossaryTerms,
    furtherReading: lesson.furtherReading,
  };
}

function convertCourseStructure(courseSlug: string): void {
  console.log(`Converting course: ${courseSlug}`);

  const coursePath = path.join(LEARNAI_CONTENT, courseSlug);
  const targetCoursePath = path.join(TARGET_CONTENT, courseSlug);

  // Read LearnAI course
  const learnaiCourse = readJson<LearnAICourse>(path.join(coursePath, 'content.json'));
  const interviewPrepCourse = convertCourse(learnaiCourse);

  ensureDir(targetCoursePath);

  const moduleSlugs: string[] = [];

  // Process each phase
  for (const phaseSlug of learnaiCourse.phaseSlugs) {
    const phasePath = path.join(coursePath, phaseSlug);
    if (!fs.existsSync(phasePath)) {
      console.warn(`  Phase not found: ${phaseSlug}`);
      continue;
    }

    const phase = readJson<LearnAIPhase>(path.join(phasePath, 'content.json'));

    // Two approaches:
    // 1. Convert phase to module (simpler, flatter structure)
    // 2. Convert phase's modules to modules (preserves more granularity)

    // We'll use approach 2: preserve modules but prefix with phase slug
    for (const moduleSlug of phase.moduleSlug) {
      const modulePath = path.join(phasePath, moduleSlug);
      if (!fs.existsSync(modulePath)) {
        console.warn(`    Module not found: ${moduleSlug}`);
        continue;
      }

      const module = readJson<LearnAIModule>(path.join(modulePath, 'content.json'));
      const newModuleSlug = `${phaseSlug}-${module.slug}`;
      const targetModulePath = path.join(targetCoursePath, newModuleSlug);

      ensureDir(targetModulePath);

      const interviewPrepModule = convertModuleToModule(module, courseSlug, phaseSlug);
      writeJson(path.join(targetModulePath, 'content.json'), interviewPrepModule);

      moduleSlugs.push(newModuleSlug);

      // Copy and convert lessons
      for (const lessonSlug of module.lessonSlugs) {
        const lessonPath = path.join(modulePath, `${lessonSlug}.json`);
        if (!fs.existsSync(lessonPath)) {
          console.warn(`      Lesson not found: ${lessonSlug}`);
          continue;
        }

        const lesson = readJson<LearnAILesson>(lessonPath);
        const interviewPrepLesson = convertLesson(lesson, courseSlug, newModuleSlug);
        writeJson(path.join(targetModulePath, `${lessonSlug}.json`), interviewPrepLesson);
      }

      console.log(`  Converted module: ${newModuleSlug} (${module.lessonSlugs.length} lessons)`);
    }
  }

  // Update course with module slugs
  interviewPrepCourse.moduleSlugs = moduleSlugs;
  writeJson(path.join(targetCoursePath, 'content.json'), interviewPrepCourse);

  console.log(`Converted course: ${courseSlug} (${moduleSlugs.length} modules)`);
}

function main() {
  console.log('Starting LearnAI to Interview-Prep content conversion...');

  const courses = ['ai-basics', 'codex', 'claude', 'dotnet-react-ai-lead'];

  for (const courseSlug of courses) {
    const coursePath = path.join(LEARNAI_CONTENT, courseSlug);
    if (fs.existsSync(coursePath)) {
      // Only convert if the course has actual content (phases)
      const learnaiCourse = readJson<LearnAICourse>(path.join(coursePath, 'content.json'));
      if (learnaiCourse.phaseSlugs.length > 0) {
        const hasContent = learnaiCourse.phaseSlugs.some(phaseSlug =>
          fs.existsSync(path.join(coursePath, phaseSlug))
        );
        if (hasContent) {
          convertCourseStructure(courseSlug);
        } else {
          console.log(`Skipping empty course: ${courseSlug}`);
        }
      } else {
        console.log(`Skipping course with no phases: ${courseSlug}`);
      }
    } else {
      console.warn(`Course not found: ${courseSlug}`);
    }
  }

  console.log('Conversion complete!');
}

main();
