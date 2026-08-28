// ─────────────────────────────────────────────────────────────────────────────
// Core domain types for Interview Prep course website
// ─────────────────────────────────────────────────────────────────────────────

// ── Shared primitives ────────────────────────────────────────────────────────

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export type CalloutVariant = 'info' | 'tip' | 'warning' | 'note' | 'important';

// ── Content block system ─────────────────────────────────────────────────────

export interface MermaidDiagram {
  id: string;
  caption?: string;
  definition: string;
}

export interface ComparisonCardItem {
  title: string;
  description: string;
  pros?: string[];
  cons?: string[];
  tags?: string[];
}

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface KeyTermItem {
  term: string;
  definition: string;
  learnMoreSlug?: string; // links to glossary
}

export interface ChecklistItem {
  text: string;
  hint?: string;
}

export interface ExerciseData {
  title: string;
  description: string;
  steps?: string[];
  expectedOutcome?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// Discriminated union of all block types for type-safe rendering
export type ContentBlock =
  | {
      type: 'paragraph';
      id?: string;
      data: { text: string };
    }
  | {
      type: 'heading';
      id?: string;
      data: { level: 2 | 3 | 4; text: string; anchor?: string };
    }
  | {
      type: 'bullet-list';
      id?: string;
      data: { items: string[]; title?: string };
    }
  | {
      type: 'numbered-list';
      id?: string;
      data: { items: string[]; title?: string };
    }
  | {
      type: 'callout';
      id?: string;
      data: { variant: CalloutVariant; title?: string; text: string };
    }
  | {
      type: 'quote';
      id?: string;
      data: { text: string; attribution?: string };
    }
  | {
      type: 'key-terms';
      id?: string;
      data: { terms: KeyTermItem[] };
    }
  | {
      type: 'table';
      id?: string;
      data: TableData;
    }
  | {
      type: 'example';
      id?: string;
      data: { title?: string; content: string; code?: string; language?: string };
    }
  | {
      type: 'exercise';
      id?: string;
      data: ExerciseData;
    }
  | {
      type: 'checklist';
      id?: string;
      data: { title?: string; items: ChecklistItem[] };
    }
  | {
      type: 'mermaid';
      id?: string;
      data: MermaidDiagram;
    }
  | {
      type: 'comparison-cards';
      id?: string;
      data: { title?: string; cards: ComparisonCardItem[] };
    }
  | {
      type: 'summary-box';
      id?: string;
      data: { title?: string; points: string[]; takeaway?: string };
    }
  | {
      type: 'faq-block';
      id?: string;
      data: { title?: string; items: FAQItem[] };
    }
  | {
      type: 'divider';
      id?: string;
      data: Record<string, never>;
    }
  | {
      type: 'image';
      id?: string;
      data: { src: string; alt: string; caption?: string };
    };

// ── Table of Contents ────────────────────────────────────────────────────────

export interface TocEntry {
  anchor: string;
  text: string;
  level: 2 | 3 | 4;
}

// ── Course ────────────────────────────────────────────────────────────────────

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  order: number;
  moduleSlugs: string[]; // ordered list of module slugs belonging to this course
}

// ── Module ───────────────────────────────────────────────────────────────────

export interface Module {
  id: string;
  slug: string;
  courseSlug: string;
  title: string;
  description: string;
  longDescription?: string;
  order: number;
  difficulty: Difficulty;
  estimatedHours: number;
  icon: string;
  tags: string[];
  lessonSlugs: string[]; // ordered list of lesson slugs
  isOptional?: boolean;
  skipLabel?: string;
  prerequisites?: string[]; // module slugs
  whatYouLearn?: string[];
}

// ── Further Reading ──────────────────────────────────────────────────────────

export type FurtherReadingType = 'article' | 'video' | 'course' | 'tool';

export interface FurtherReadingItem {
  title: string;
  url: string;
  type: FurtherReadingType;
  author?: string;
  description?: string;
}

// ── Lesson ───────────────────────────────────────────────────────────────────

export interface Lesson {
  id: string;
  slug: string;
  moduleSlug: string;
  courseSlug: string;
  title: string;
  description: string;
  order: number;
  difficulty: Difficulty;
  estimatedMinutes: number;
  tags: string[];
  prerequisites?: string[]; // lesson slugs
  isOptional?: boolean;
  skipLabel?: string;
  blocks: ContentBlock[];
  relatedLessons?: string[]; // lesson slugs
  furtherReading?: FurtherReadingItem[];
}

// ── Tool Comparison ──────────────────────────────────────────────────────────

// ── Weekly / 90-Day Plan ─────────────────────────────────────────────────────

export type PlanWeekFocus =
  | 'foundations'
  | 'tools'
  | 'prompting'
  | 'workflows'
  | 'automation'
  | 'agents'
  | 'advanced'
  | 'review';

export interface PlanWeek {
  id: string;
  week: number;
  title: string;
  focus: PlanWeekFocus;
  description: string;
  goals: string[];
  moduleSlugs?: string[];
  lessonSlugs?: string[];
  tools?: string[];
  tip?: string;
}

// ── FAQs ─────────────────────────────────────────────────────────────────────

export type FAQCategory =
  | 'getting-started'
  | 'tools'
  | 'learning-path'
  | 'concepts'
  | 'safety'
  | 'career';

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
  tags?: string[];
  relatedLessons?: string[];
}

// ── Advanced Concepts ────────────────────────────────────────────────────────

export type AdvancedConceptCategory =
  | 'llm-internals'
  | 'prompting-advanced'
  | 'rag-and-memory'
  | 'agents'
  | 'evaluation'
  | 'deployment'
  | 'safety';

export interface AdvancedConcept {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: AdvancedConceptCategory;
  difficulty: Exclude<Difficulty, 'beginner'>;
  prerequisites?: string[]; // lesson slugs
  blocks: ContentBlock[];
  relatedConcepts?: string[];
}

// ── Navigation ───────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  isNew?: boolean;
  children?: NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

// ── Progress ─────────────────────────────────────────────────────────────────

export interface LessonProgress {
  lessonSlug: string;
  moduleSlug: string;
  completedAt: string; // ISO date string
}

export interface CourseProgress {
  completedLessons: LessonProgress[];
  lastVisitedLesson?: string;
  startedAt?: string;
}

// ── Search ───────────────────────────────────────────────────────────────────

export interface SearchResult {
  type: 'lesson' | 'module' | 'concept';
  slug: string;
  title: string;
  description: string;
  moduleSlug?: string;
  difficulty?: Difficulty;
  tags?: string[];
}

// ── Roadmap node ─────────────────────────────────────────────────────────────

export interface RoadmapNode {
  id: string;
  title: string;
  type: 'phase' | 'module' | 'milestone';
  href?: string;
  children?: RoadmapNode[];
  isOptional?: boolean;
  difficulty?: Difficulty;
}
