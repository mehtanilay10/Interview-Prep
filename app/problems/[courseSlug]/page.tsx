import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { ProblemFilters } from '@/components/problems/ProblemFilters';
import { getCourseBySlug, getModulesForCourse, getLessonsForCourse, getProblemCourses } from '@/lib/content';

interface Params {
  params: Promise<{ courseSlug: string }>;
}

export async function generateStaticParams() {
  return getProblemCourses().map((c) => ({ courseSlug: c.slug }));
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

export default async function ProblemsCoursePage({ params }: Params) {
  const { courseSlug } = await params;
  const course = getCourseBySlug(courseSlug);
  if (!course || course.category !== 'problems') notFound();

  const allModules = getModulesForCourse(courseSlug);
  const allLessons = getLessonsForCourse(courseSlug);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow={`${course.icon} Problems`}
        title={course.title}
        description={course.description}
        titleAs="h1"
      />

      <ProblemFilters modules={allModules} lessons={allLessons} courseSlug={courseSlug} />
    </div>
  );
}