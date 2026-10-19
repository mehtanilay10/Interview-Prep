import { notFound } from 'next/navigation';
import { getLessonBySlug, getCourseCategory } from '@/lib/content';

interface Params {
  params: Promise<{ category: string; courseSlug: string; moduleSlug: string; lessonSlug: string }>;
}

export async function generateMetadata({ params }: Params): Promise<{ title: string }> {
  const resolvedParams = await params;
  const { courseSlug, lessonSlug } = resolvedParams;
  const lesson = getLessonBySlug(lessonSlug, courseSlug);
  return { title: lesson?.title ?? 'Loading...' };
}

export default async function ProblemLessonLoading({ params }: Params) {
  const resolvedParams = await params;
  const { category, courseSlug, moduleSlug, lessonSlug } = resolvedParams;
  
  const expectedCategory = getCourseCategory(courseSlug);
  if (category !== expectedCategory) notFound();
  
  return (
    <div className="mx-auto max-w-[800px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-canvas-subtle rounded w-3/4" />
        <div className="h-8 bg-canvas-subtle rounded w-1/2" />
        <div className="h-4 bg-canvas-subtle rounded" />
        <div className="h-4 bg-canvas-subtle rounded" />
        <div className="h-4 bg-canvas-subtle rounded w-5/6" />
        <div className="h-4 bg-canvas-subtle rounded w-4/5" />
        <div className="h-4 bg-canvas-subtle rounded w-3/4" />
        <div className="h-4 bg-canvas-subtle rounded w-2/3" />
        <div className="h-4 bg-canvas-subtle rounded w-1/2" />
      </div>
    </div>
  );
}