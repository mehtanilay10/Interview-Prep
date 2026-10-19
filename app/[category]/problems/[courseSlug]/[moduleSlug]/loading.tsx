import { notFound } from 'next/navigation';
import { getModuleBySlug, getCourseCategory } from '@/lib/content';

interface Params {
  params: Promise<{ category: string; courseSlug: string; moduleSlug: string }>;
}

export async function generateMetadata({ params }: Params): Promise<{ title: string }> {
  const resolvedParams = await params;
  const { moduleSlug } = resolvedParams;
  const mod = getModuleBySlug(moduleSlug);
  return { title: mod?.title ?? 'Loading...' };
}

export default async function ProblemsModuleLoading({ params }: Params) {
  const resolvedParams = await params;
  const { category, courseSlug, moduleSlug } = resolvedParams;
  
  const expectedCategory = getCourseCategory(courseSlug);
  if (category !== expectedCategory) notFound();
  
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-canvas-subtle rounded w-1/4" />
        <div className="h-8 bg-canvas-subtle rounded w-1/2" />
        <div className="h-4 bg-canvas-subtle rounded w-3/4" />
        <div className="space-y-3">
          <div className="h-16 bg-canvas-subtle rounded" />
          <div className="h-16 bg-canvas-subtle rounded" />
          <div className="h-16 bg-canvas-subtle rounded" />
        </div>
      </div>
    </div>
  );
}