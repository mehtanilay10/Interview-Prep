import type { Course } from "@/types";

import apolloCourse from "./apollo/content.json";
import architectureDecisionLabProblemsCourse from "../problems/architecture-decision-lab-problems/content.json";
import aspnetCoreCourse from "./aspnet-core/content.json";
import aspnetCoreCourse1 from "../problems/aspnet-core/content.json";
import aspnetCoreWebApiCourse from "./aspnet-core-web-api/content.json";
import authenticationAuthorizationCourse from "./authentication-authorization/content.json";
import awsCourse from "./aws/content.json";
import azureCourse from "./azure/content.json";
import azureCourse1 from "../problems/azure/content.json";
import cheatsheetCourse from "../cheatsheet/content.json";
import cleanCodeCsharpCourse from "./clean-code-csharp/content.json";
import csharpCourse from "../problems/csharp/content.json";
import csharpFundamentalsCourse from "./csharp-fundamentals/content.json";
import designPatternsCourse from "./design-patterns/content.json";
import devopsCourse from "./devops/content.json";
import dotnetAiBackendCourse from "./dotnet-ai-backend/content.json";
import dotnetNugetPackagesCourse from "./dotnet-nuget-packages/content.json";
import efCoreCourse from "./ef-core/content.json";
import frontendPerformanceEngineeringCourse from "./frontend-performance-engineering/content.json";
import fullStackSeniorProjectsCourse from "../problems/full-stack-senior-projects/content.json";
import fullstackSecurityCourse from "./fullstack-security/content.json";
import gitLinuxDeveloperWorkflowCourse from "./git-linux-developer-workflow/content.json";
import graphqlDotnetCourse from "./graphql-dotnet/content.json";
import hldCourse from "../problems/hld/content.json";
import interviewQaCourse from "../interview-qa/content.json";
import linqCourse from "./linq/content.json";
import lldCourse from "../problems/lld/content.json";
import nextJsFullStackReactCourse from "./next-js-full-stack-react/content.json";
import oopsConceptsCourse from "./oops-concepts/content.json";
import postgresqlCourse from "./postgresql/content.json";
import prismaCourse from "./prisma/content.json";
import productionIncidentLabProblemsCourse from "../problems/production-incident-lab-problems/content.json";
import programmingComputerWebFoundationsCourse from "./programming-computer-web-foundations/content.json";
import reactAdvancedPatternsCourse from "./react-advanced-patterns/content.json";
import reactFundamentalsCourse from "./react-fundamentals/content.json";
import reactQueryCourse from "./react-query/content.json";
import reactTestingCourse from "./react-testing/content.json";
import reduxCourse from "./redux/content.json";
import seniorCodeReviewLabProblemsCourse from "../problems/senior-code-review-lab-problems/content.json";
import seniorSoftwareEngineeringCourse from "./senior-software-engineering/content.json";
import sqlCourse from "../problems/sql/content.json";
import sqlServerCourse from "./sql-server/content.json";
import systemDesignCourse from "../problems/system-design/content.json";
import systemDesignProblemsCourse from "../problems/system-design-problems/content.json";
import typescriptForReactCourse from "./typescript-for-react/content.json";
import unitTestingDotnetCourse from "./unit-testing-dotnet/content.json";
import yarnNpmPackagesCourse from "./yarn-npm-packages/content.json";

const rawCoursesPart1 = [
	apolloCourse,
	architectureDecisionLabProblemsCourse,
	aspnetCoreCourse,
	aspnetCoreCourse1,
	aspnetCoreWebApiCourse,
	authenticationAuthorizationCourse,
	awsCourse,
	azureCourse,
	azureCourse1,
	cheatsheetCourse,
	cleanCodeCsharpCourse,
	csharpCourse,
	csharpFundamentalsCourse,
	designPatternsCourse,
	devopsCourse,
	dotnetAiBackendCourse,
	dotnetNugetPackagesCourse,
	efCoreCourse,
	frontendPerformanceEngineeringCourse,
	fullStackSeniorProjectsCourse,
	fullstackSecurityCourse,
	gitLinuxDeveloperWorkflowCourse,
	graphqlDotnetCourse,
	hldCourse,
	interviewQaCourse,
	linqCourse,
	lldCourse,
	nextJsFullStackReactCourse,
	oopsConceptsCourse,
	postgresqlCourse,
	prismaCourse,
	productionIncidentLabProblemsCourse,
	programmingComputerWebFoundationsCourse,
	reactAdvancedPatternsCourse,
	reactFundamentalsCourse,
	reactQueryCourse,
	reactTestingCourse,
	reduxCourse,
	seniorCodeReviewLabProblemsCourse,
	seniorSoftwareEngineeringCourse,
	sqlCourse,
	sqlServerCourse,
	systemDesignCourse,
	systemDesignProblemsCourse,
	typescriptForReactCourse,
	unitTestingDotnetCourse,
	yarnNpmPackagesCourse,
];


const rawCourses: any[] = [...rawCoursesPart1];

export const courses: Course[] = rawCourses as unknown as Course[];

export function getCourseBySlug(slug: string): Course | undefined {
	return courses.find((c) => c.slug === slug);
}
