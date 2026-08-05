import type { Course } from '@/types';

import dummyCourse from './dummy-course/content.json';

const rawCourses = [dummyCourse];

export const courses: Course[] = rawCourses as unknown as Course[];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
