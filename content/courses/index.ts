import type { Course } from '@/types';

import sqlServerCourse from './sql-server/content.json';
import aspNetCoreCourse from './aspnet-core/content.json';

const rawCourses = [sqlServerCourse, aspNetCoreCourse];

export const courses: Course[] = rawCourses as unknown as Course[];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
