import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { getCourseBySlug, getModulesForCourse, getLessonsForCourse } from '@/lib/content';
import { formatHours } from '@/lib/utils';

export async function generateStaticParams() {
  const courses = ['csharp-problems', 'sql-problems'];
  return courses.map((slug) => ({ courseSlug: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ courseSlug: string }> }): Promise<Metadata> {
  const { courseSlug } = await params;
  const course = getCourseBySlug(courseSlug);
  if (!course) return {};
  return {
    title: `${course.title} — Problems`,
    description: course.description,
  };
}

export default async function ProblemsCoursePage({ params }: { params: Promise<{ courseSlug: string }> }) {
  const { courseSlug } = await params;
  const course = getCourseBySlug(courseSlug);
  if (!course) notFound();

  const modules = getModulesForCourse(courseSlug);
  const lessons = getLessonsForCourse(courseSlug);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { label: 'Problems', href: '/problems' },
          { label: course.title },
        ]}
        className="mb-4"
      />

      <div className="mb-8">
        <Link
          href="/problems"
          className="inline-flex items-center gap-1 text-sm text-fg-muted transition-colors hover:text-accent-fg"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to all problems
        </Link>
      </div>

      <SectionHeader
        eyebrow={`${course.icon} Problems`}
        title={course.title}
        description={course.description}
        titleAs="h1"
      />

      <div className="mb-6 flex items-center gap-4 text-sm text-fg-muted">
        <span className="flex items-center gap-1">
          <Clock className="h-4 w-4" aria-hidden="true" />
          {formatHours(modules.reduce((sum, m) => sum + m.estimatedHours, 0))}
        </span>
        <span>{lessons.length} problems</span>
      </div>

      <div className="space-y-3">
        {modules.map((mod) => (
          <Link
            key={mod.id}
            href={`/problems/${courseSlug}/${mod.slug}`}
            className="group flex items-center gap-4 rounded-lg border border-border bg-canvas p-4 transition-all hover:border-accent-fg hover:shadow-sm"
          >
            <div className="flex-1 min-w-0">
              <p className="font-medium text-fg-default group-hover:text-accent-fg transition-colors">
                {mod.title}
              </p>
              <p className="mt-1 text-sm text-fg-muted line-clamp-1">
                {mod.description}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-fg-subtle shrink-0">
              <span>{mod.lessonSlugs.length} problems</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
