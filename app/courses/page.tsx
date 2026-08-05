import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { getAllCourses, getModulesForCourse, getLessonsForCourse } from '@/lib/content';

export const metadata: Metadata = {
  title: 'All Courses',
  description: 'Browse all available courses on Interview Prep.',
};

export default function CoursesPage() {
  const courses = getAllCourses();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow="Learning paths"
        title="Courses"
        description="Choose a course to start your learning journey. Each course is a self-contained path with modules and hands-on lessons."
        titleAs="h1"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {courses.map((course) => {
          const modules = getModulesForCourse(course.slug);
          const lessons = getLessonsForCourse(course.slug);
          const totalMinutes = lessons.reduce((sum, l) => sum + l.estimatedMinutes, 0);

          return (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-canvas transition-all hover:border-accent-fg hover:shadow-md"
            >
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-3xl" aria-hidden="true">{course.icon}</span>
                  <div>
                    <h2 className="text-lg font-bold text-fg-default group-hover:text-accent-fg transition-colors">
                      {course.title}
                    </h2>
                    <p className="text-sm text-fg-muted">{course.subtitle}</p>
                  </div>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-fg-muted">
                  {course.description}
                </p>
                <div className="mt-auto flex flex-wrap items-center gap-4 text-xs text-fg-subtle">
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                    {modules.length} modules · {lessons.length} lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {Math.round(totalMinutes / 60)} hours
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-end border-t border-border bg-canvas-subtle px-6 py-3">
                <span className="flex items-center gap-1 text-sm font-medium text-accent-fg">
                  View course
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
