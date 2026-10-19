import { notFound } from 'next/navigation';
import { getCourseBySlug, getCourseCategory } from '@/lib/content';

interface Params {
  params: Promise<{ category: string; courseSlug: string }>;
}

export async function generateMetadata({ params }: Params): Promise<{ title: string }> {
  const resolvedParams = await params;
  const { courseSlug } = resolvedParams;
  const course = getCourseBySlug(courseSlug);
  return { title: course?.title ?? 'Loading...' };
}

export default async function ProblemsCourseLoading({ params }: Params) {
  const resolvedParams = await params;
  const { category, courseSlug } = resolvedParams;
  
  const expectedCategory = getCourseCategory(courseSlug);
  if (category !== expectedCategory) notFound();
  
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-canvas-subtle rounded w-1/4" />
        <div className="h-8 bg-canvas-subtle rounded w-1/2" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="h-48 bg-canvas-subtle rounded" />
          <div className="h-48 bg-canvas-subtle rounded" />
          <div className="h-48 bg-canvas-subtle rounded" />
        </div>
      </div>
    </div>
  );
}