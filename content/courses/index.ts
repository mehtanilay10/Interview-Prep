import type { Course } from '@/types';

import sqlServerCourse from './sql-server/content.json';
import aspnetCoreCourse from './aspnet-core/content.json';
import linqCourse from './linq/content.json';
import efCoreCourse from './ef-core/content.json';
import reactFundamentalsCourse from './react-fundamentals/content.json';
import reactAdvancedPatternsCourse from './react-advanced-patterns/content.json';
import typescriptForReactCourse from './typescript-for-react/content.json';
import reduxCourse from './redux/content.json';
import reactQueryCourse from './react-query/content.json';
import apolloCourse from './apollo/content.json';
import cleanCodeCsharpCourse from './clean-code-csharp/content.json';
import csharpFundamentalsCourse from './csharp-fundamentals/content.json';
import unitTestingDotnetCourse from './unit-testing-dotnet/content.json';
import aspnetCoreWebApiCourse from './aspnet-core-web-api/content.json';
import reactTestingCourse from './react-testing/content.json';
import authenticationAuthorizationCourse from './authentication-authorization/content.json';
import oopsConceptsCourse from './oops-concepts/content.json';
import interviewQaCourse from './interview-qa/content.json';
import graphqlDotnetCourse from './graphql-dotnet/content.json';
import designPatternsCourse from './design-patterns/content.json';
import fullstackSecurityCourse from './fullstack-security/content.json';

const rawCourses = [
  sqlServerCourse,
  aspnetCoreCourse,
  linqCourse,
  efCoreCourse,
  reactFundamentalsCourse,
  reactAdvancedPatternsCourse,
  typescriptForReactCourse,
  reduxCourse,
  reactQueryCourse,
  apolloCourse,
  cleanCodeCsharpCourse,
  csharpFundamentalsCourse,
  unitTestingDotnetCourse,
  aspnetCoreWebApiCourse,
  reactTestingCourse,
  authenticationAuthorizationCourse,
  oopsConceptsCourse,
  interviewQaCourse,
  graphqlDotnetCourse,
  designPatternsCourse,
  fullstackSecurityCourse,
];

export const courses: Course[] = rawCourses as unknown as Course[];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
