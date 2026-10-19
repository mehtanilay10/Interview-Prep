import { Metadata } from 'next';
import { getCurrentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';
import {
  courses,
  modules,
  lessons,
  getCourseBySlug,
  getLessonsForCourse,
  getContentItemHref,
  isProblemCourseSlug,
} from '@/lib/content';
import { ProgressDashboardClient } from './ProgressDashboardClient';
import type { ProgressCatalog, ProgressModuleCourse } from './ProgressDashboardClient';
import { ProgressErrorBoundary } from '@/components/progress/ProgressErrorBoundary';

export const metadata: Metadata = {
  title: 'Progress Dashboard | Interview Prep',
  description: 'Track your learning progress across courses, problems, and interview questions.',
};

/**
 * Builds the compact catalog the dashboard needs. Lesson titles/hrefs are
 * resolved server-side so the client component never imports content data.
 */
function buildProgressCatalog(): ProgressCatalog {
  const courseEntries = courses.map((course) => {
    const courseLessons = getLessonsForCourse(course.slug);
    return {
      slug: course.slug,
      title: course.title,
      href: getContentItemHref(course.slug),
      lessonCount: courseLessons.length,
      totalMinutes: courseLessons.reduce((sum, lesson) => sum + lesson.estimatedMinutes, 0),
    };
  });

  // First module wins, mirroring `getModuleBySlug` in lib/content.ts.
  const moduleCourse: Record<string, ProgressModuleCourse> = {};
  for (const mod of modules) {
    if (mod.slug in moduleCourse) continue;
    if (mod.courseSlug === 'interview-qa') {
      moduleCourse[mod.slug] = {
        courseSlug: 'interview-qa',
        courseTitle: 'Technical Interview Questions',
      };
      continue;
    }
    const course = getCourseBySlug(mod.courseSlug);
    if (course) {
      moduleCourse[mod.slug] = { courseSlug: course.slug, courseTitle: course.title };
    }
  }

  const counts = {
    lessons: lessons.filter((lesson) => lesson.courseSlug !== 'interview-qa').length,
    problems: lessons.filter((lesson) => isProblemCourseSlug(lesson.courseSlug)).length,
    interview: lessons.filter((lesson) => lesson.courseSlug === 'interview-qa').length,
  };

  return { courses: courseEntries, moduleCourse, counts };
}

export default async function ProgressPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/user/login');
  }

  return (
    <ProgressErrorBoundary>
      <ProgressDashboardClient
        user={{ id: user.id || '', name: user.name ?? null, email: user.email ?? null, image: user.image ?? null }}
        catalog={buildProgressCatalog()}
      />
    </ProgressErrorBoundary>
  );
}
