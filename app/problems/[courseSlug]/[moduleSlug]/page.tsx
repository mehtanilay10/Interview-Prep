import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { getModuleBySlug, getLessonsForModule, getModulesForCourse, getCourseBySlug } from '@/lib/content';
import { formatHours } from '@/lib/utils';

const PROBLEM_ICONS: Record<string, string> = {
  'array-problems': '📊',
  'string-problems': '📝',
  'linked-list-problems': '🔗',
  'tree-graph-problems': '🌳',
  'dynamic-programming-problems': '📈',
  'sorting-searching-problems': '🔍',
  'sql-basics': '🟢',
  'sql-intermediate': '🟡',
  'sql-advanced': '🔴',
};

export async function generateStaticParams() {
  const courses = ['csharp-problems', 'sql-problems'];
  const params: { courseSlug: string; moduleSlug: string }[] = [];
  for (const courseSlug of courses) {
    const modules = getModulesForCourse(courseSlug);
    for (const mod of modules) {
      params.push({ courseSlug, moduleSlug: mod.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ courseSlug: string; moduleSlug: string }> }): Promise<Metadata> {
  const { courseSlug, moduleSlug } = await params;
  const mod = getModuleBySlug(moduleSlug);
  if (!mod || mod.courseSlug !== courseSlug) return {};
  const course = getCourseBySlug(courseSlug);
  return {
    title: `${mod.title} — ${course?.title ?? 'Problems'}`,
    description: mod.description,
  };
}

export default async function ProblemsModulePage({ params }: { params: Promise<{ courseSlug: string; moduleSlug: string }> }) {
  const { courseSlug, moduleSlug } = await params;
  const mod = getModuleBySlug(moduleSlug);
  if (!mod || mod.courseSlug !== courseSlug) notFound();

  const lessons = getLessonsForModule(moduleSlug, courseSlug);
  const icon = PROBLEM_ICONS[mod.slug] ?? '🧩';
  const course = getCourseBySlug(courseSlug);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { label: 'Problems', href: '/problems' },
          { label: course?.title ?? 'Problems', href: `/problems/${courseSlug}` },
          { label: mod.title },
        ]}
        className="mb-4"
      />

      <div className="mb-8">
        <Link
          href={`/problems/${courseSlug}`}
          className="inline-flex items-center gap-1 text-sm text-fg-muted transition-colors hover:text-accent-fg"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to {course?.title ?? 'problems'}
        </Link>
      </div>

      <SectionHeader
        eyebrow={`${icon} Practice`}
        title={mod.title}
        description={mod.description}
        titleAs="h1"
      />

      <div className="mb-6 flex items-center gap-4 text-sm text-fg-muted">
        <span className="flex items-center gap-1">
          <Clock className="h-4 w-4" aria-hidden="true" />
          {formatHours(mod.estimatedHours)}
        </span>
        <span>{lessons.length} problems</span>
      </div>

      <div className="space-y-3">
        {lessons.map((lesson) => (
          <Link
            key={lesson.id}
            href={`/problems/${courseSlug}/${moduleSlug}/${lesson.slug}`}
            className="group flex items-center gap-4 rounded-lg border border-border bg-canvas p-4 transition-all hover:border-accent-fg hover:shadow-sm"
          >
            <div className="flex-1 min-w-0">
              <p className="font-medium text-fg-default group-hover:text-accent-fg transition-colors">
                {lesson.title}
              </p>
              <p className="mt-1 text-sm text-fg-muted line-clamp-1">
                {lesson.description}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-fg-subtle shrink-0">
              <span>{lesson.estimatedMinutes} min</span>
              <span className="rounded-full border border-border px-2 py-0.5 capitalize">
                {lesson.difficulty}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
