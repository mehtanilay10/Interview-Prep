import type { Course } from '@/types';

import sqlServerCourse from './sql-server/content.json';

const rawCourses = [sqlServerCourse];

export const courses: Course[] = rawCourses as unknown as Course[];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
