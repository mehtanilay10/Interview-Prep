import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { ModuleCard } from '@/components/course/ModuleCard';
import { getAllCourses, getCourseBySlug, getModulesForCourse } from '@/lib/content';

interface Params {
  params: Promise<{ courseSlug: string }>;
}

export async function generateStaticParams() {
  return getAllCourses().map((c) => ({ courseSlug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { courseSlug } = await params;
  const course = getCourseBySlug(courseSlug);
  if (!course) return {};
  return {
    title: course.title,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }: Params) {
  const { courseSlug } = await params;
  const course = getCourseBySlug(courseSlug);
  if (!course) notFound();

  const allModules = getModulesForCourse(courseSlug);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow={`${course.icon} Course`}
        title={course.title}
        description={course.description}
        titleAs="h1"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {allModules.map((mod) => (
          <ModuleCard
            key={mod.id}
            module={mod}
            courseSlug={courseSlug}
            lessonCount={mod.lessonSlugs.length}
          />
        ))}
      </div>
    </div>
  );
}
