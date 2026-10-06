import { z } from 'zod';

export const ProgressEntrySchema = z.object({
  category: z.enum(['lessons', 'problems', 'interviewQuestions']),
  lessonSlug: z.string().min(1),
  moduleSlug: z.string().min(1),
});

export const ProgressPayloadSchema = z.object({
  entries: z.array(ProgressEntrySchema).optional(),
});

export const BookmarkEntrySchema = z.object({
  type: z.enum(['lesson', 'problem', 'interview', 'cheatsheet']),
  slug: z.string().min(1),
  title: z.string().min(1),
  courseSlug: z.string().min(1),
  moduleSlug: z.string().min(1),
});

export const BookmarkPayloadSchema = z.object({
  items: z.array(BookmarkEntrySchema).optional(),
});

export const NotePayloadSchema = z.object({
  courseSlug: z.string().min(1),
  moduleSlug: z.string().min(1),
  lessonSlug: z.string().min(1),
  content: z.string().min(1),
});

export const ThemePayloadSchema = z.object({
  theme: z.enum(['light', 'dark', 'system']),
});

export const LastPathPayloadSchema = z.object({
  path: z.string().min(1),
});

export const OfflineQueueEntrySchema = z.object({
  courseSlug: z.string().min(1),
  moduleSlug: z.string().min(1),
  lessonSlug: z.string().min(1),
  title: z.string().min(1),
});

export const OfflineQueuePayloadSchema = z.object({
  entries: z.array(OfflineQueueEntrySchema).optional(),
});
