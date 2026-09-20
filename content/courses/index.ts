import type { Course } from "@/types";

import sqlServerCourse from "./sql-server/content.json";
import aspNetCoreCourse from "./aspnet-core/content.json";
import linqCourse from "./linq/content.json";
import efCoreCourse from "./ef-core/content.json";
import reactFundamentalsCourse from "./react-fundamentals/content.json";
import reactAdvancedPatternsCourse from "./react-advanced-patterns/content.json";
import typescriptForReactCourse from "./typescript-for-react/content.json";
import reduxCourse from "./redux/content.json";
import reactQueryCourse from "./react-query/content.json";
import apolloCourse from "./apollo/content.json";
import csharpFundamentalsCourse from "./csharp-fundamentals/content.json";
import aspNetCoreWebApiCourse from "./aspnet-core-web-api/content.json";
import authCourse from "./authentication-authorization/content.json";
import cleanCodeCSharpCourse from "./clean-code-csharp/content.json";
import unitTestingDotNetCourse from "./unit-testing-dotnet/content.json";
import reactTestingCourse from "./react-testing/content.json";
import oopsCourse from "./oops-concepts/content.json";
import graphQlCourse from "./graphql-dotnet/content.json";
import designPatternsCourse from "./design-patterns/content.json";
import fullstackSecurityCourse from "./fullstack-security/content.json";
import devOpsCourse from "./devops/content.json";
import azureCourse from "./azure/content.json";
import awsCourse from "./aws/content.json";
import dotnetNugetPackagesCourse from "./dotnet-nuget-packages/content.json";
import yarnNpmPackagesCourse from "./yarn-npm-packages/content.json";
import csharpProblemsCourse from "../problems/csharp/content.json";
import sqlProblemsCourse from "../problems/sql/content.json";
import systemDesignProblemsCourse from "../problems/system-design/content.json";
import azureProblemsCourse from "../problems/azure/content.json";
import lldProblemsCourse from "../problems/lld/content.json";
import hldProblemsCourse from "../problems/hld/content.json";

const rawCourses = [sqlServerCourse, aspNetCoreCourse, linqCourse, efCoreCourse, reactFundamentalsCourse, reactAdvancedPatternsCourse, typescriptForReactCourse, reduxCourse, reactQueryCourse, apolloCourse, csharpFundamentalsCourse, aspNetCoreWebApiCourse, authCourse, cleanCodeCSharpCourse, unitTestingDotNetCourse, reactTestingCourse, oopsCourse, graphQlCourse, designPatternsCourse, fullstackSecurityCourse, devOpsCourse, azureCourse, awsCourse, dotnetNugetPackagesCourse, yarnNpmPackagesCourse, csharpProblemsCourse, sqlProblemsCourse, systemDesignProblemsCourse, azureProblemsCourse, lldProblemsCourse, hldProblemsCourse];

export const courses: Course[] = rawCourses as unknown as Course[];

export function getCourseBySlug(slug: string): Course | undefined {
	return courses.find((c) => c.slug === slug);
}
