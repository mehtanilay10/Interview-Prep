import type { ContentBlock, Lesson, Module, BookmarkItem, ProgressState, BookmarkState } from '@/types';

export function isContentBlock(value: unknown): value is ContentBlock {
  if (!value || typeof value !== 'object') return false;
  const block = value as Record<string, unknown>;
  if (typeof block.type !== 'string') return false;
  return [
    'paragraph',
    'heading',
    'bullet-list',
    'numbered-list',
    'callout',
    'quote',
    'key-terms',
    'table',
    'example',
    'solution',
    'exercise',
    'checklist',
    'mermaid',
    'comparison-cards',
    'summary-box',
    'faq-block',
    'divider',
    'image',
  ].includes(block.type);
}

export function isLesson(value: unknown): value is Lesson {
  if (!value || typeof value !== 'object') return false;
  const lesson = value as Record<string, unknown>;
  return (
    typeof lesson.id === 'string' &&
    typeof lesson.slug === 'string' &&
    typeof lesson.moduleSlug === 'string' &&
    typeof lesson.courseSlug === 'string' &&
    typeof lesson.title === 'string' &&
    typeof lesson.order === 'number'
  );
}

export function isModule(value: unknown): value is Module {
  if (!value || typeof value !== 'object') return false;
  const module_ = value as Record<string, unknown>;
  return (
    typeof module_.id === 'string' &&
    typeof module_.slug === 'string' &&
    typeof module_.courseSlug === 'string' &&
    typeof module_.title === 'string' &&
    typeof module_.order === 'number' &&
    Array.isArray(module_.lessonSlugs)
  );
}

export function isBookmarkItem(value: unknown): value is BookmarkItem {
  if (!value || typeof value !== 'object') return false;
  const item = value as Record<string, unknown>;
  return (
    typeof item.id === 'string' &&
    typeof item.type === 'string' &&
    typeof item.slug === 'string' &&
    typeof item.title === 'string' &&
    typeof item.courseSlug === 'string' &&
    typeof item.moduleSlug === 'string' &&
    typeof item.addedAt === 'string'
  );
}

export function isProgressState(value: unknown): value is ProgressState {
  if (!value || typeof value !== 'object') return false;
  const state = value as Record<string, unknown>;
  return (
    typeof state.lessons === 'object' &&
    typeof state.problems === 'object' &&
    typeof state.interviewQuestions === 'object'
  );
}

export function isBookmarkState(value: unknown): value is BookmarkState {
  if (!value || typeof value !== 'object') return false;
  const state = value as Record<string, unknown>;
  return Array.isArray(state.items);
}
