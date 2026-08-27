import type { Course } from '@/types';

import sqlServerCourse from './sql-server/content.json';
import aspNetCoreCourse from './aspnet-core/content.json';
import linqCourse from './linq/content.json';
import efCoreCourse from './ef-core/content.json';
import reactFundamentalsCourse from './react-fundamentals/content.json';
import reactAdvancedPatternsCourse from './react-advanced-patterns/content.json';
import typescriptForReactCourse from './typescript-for-react/content.json';
import reduxCourse from './redux/content.json';
import reactQueryCourse from './react-query/content.json';
import apolloCourse from './apollo/content.json';
import csharpFundamentalsCourse from './csharp-fundamentals/content.json';
import aspNetCoreWebApiCourse from './aspnet-core-web-api/content.json';
import authenticationAuthorizationCourse from './authentication-authorization/content.json';

const rawCourses = [
  sqlServerCourse,
  aspNetCoreCourse,
  linqCourse,
  efCoreCourse,
  reactFundamentalsCourse,
  reactAdvancedPatternsCourse,
  typescriptForReactCourse,
  reduxCourse,
  reactQueryCourse,
  apolloCourse,
  csharpFundamentalsCourse,
  aspNetCoreWebApiCourse,
  authenticationAuthorizationCourse
];

export const courses: Course[] = rawCourses as unknown as Course[];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
