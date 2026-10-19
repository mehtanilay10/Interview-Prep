import type { Course } from "@/types";

import aiBasicsCourse from "./ai/courses/ai-basics/content.json";
import apiDesignCourse from "./backend/problems/api-design/content.json";
import apolloCourse from "./frontend/courses/apollo/content.json";
import aspnetCoreCourse from "./backend/courses/aspnet-core/content.json";
import aspnetCoreCourse1 from "./backend/problems/aspnet-core/content.json";
import aspnetCoreWebApiCourse from "./backend/courses/aspnet-core-web-api/content.json";
import authenticationAuthorizationCourse from "./backend/courses/authentication-authorization/content.json";
import awsCourse from "./devops/courses/aws/content.json";
import awsForAspnetCourse from "./backend/courses/aws-for-aspnet/content.json";
import azureCourse from "./devops/courses/azure/content.json";
import azureCourse1 from "./devops/problems/azure/content.json";
import azureForAspnetCourse from "./backend/courses/azure-for-aspnet/content.json";
import cheatsheetCourse from "./cheatsheet.json";
import claudeCourse from "./ai/courses/claude/content.json";
import cleanCodeCsharpCourse from "./architecture/courses/clean-code-csharp/content.json";
import codexCourse from "./ai/courses/codex/content.json";
import csharpCourse from "./backend/problems/csharp/content.json";
import csharpFundamentalsCourse from "./backend/courses/csharp-fundamentals/content.json";
import databaseDesignCourse from "./database/problems/database-design/content.json";
import designPatternsCourse from "./architecture/courses/design-patterns/content.json";
import devopsCourse from "./devops/courses/devops/content.json";
import dotnetAiBackendCourse from "./ai/courses/dotnet-ai-backend/content.json";
import dotnetNugetPackagesCourse from "./backend/courses/dotnet-nuget-packages/content.json";
import efCoreCourse from "./backend/courses/ef-core/content.json";
import frontendPerformanceEngineeringCourse from "./architecture/courses/frontend-performance-engineering/content.json";
import fullStackSeniorProjectsCourse from "./architecture/problems/full-stack-senior-projects/content.json";
import fullstackSecurityCourse from "./architecture/courses/fullstack-security/content.json";
import gitLinuxDeveloperWorkflowCourse from "./devops/courses/git-linux-developer-workflow/content.json";
import graphqlDotnetCourse from "./backend/courses/graphql-dotnet/content.json";
import hldCourse from "./architecture/problems/hld/content.json";
import interviewQaCourse from "./interview-qa/content.json";
import linqCourse from "./backend/courses/linq/content.json";
import lldCourse from "./architecture/problems/lld/content.json";
import messageQueuesEventStreamingCourse from "./architecture/courses/message-queues-event-streaming/content.json";
import microservicesArchitectureCourse from "./architecture/courses/microservices-architecture/content.json";
import nextJsFullStackReactCourse from "./frontend/courses/next-js-full-stack-react/content.json";
import oopsConceptsCourse from "./fundamentals/courses/oops-concepts/content.json";
import postgresqlCourse from "./database/courses/postgresql/content.json";
import prismaCourse from "./frontend/courses/prisma/content.json";
import programmingComputerWebFoundationsCourse from "./fundamentals/courses/programming-computer-web-foundations/content.json";
import reactAdvancedPatternsCourse from "./frontend/courses/react-advanced-patterns/content.json";
import reactFundamentalsCourse from "./frontend/courses/react-fundamentals/content.json";
import reactQueryCourse from "./frontend/courses/react-query/content.json";
import reactTestingCourse from "./frontend/courses/react-testing/content.json";
import redisCachingStrategiesCourse from "./architecture/courses/redis-caching-strategies/content.json";
import reduxCourse from "./frontend/courses/redux/content.json";
import seniorSoftwareEngineeringCourse from "./fundamentals/courses/senior-software-engineering/content.json";
import sqlCourse from "./database/problems/sql/content.json";
import sqlServerCourse from "./database/courses/sql-server/content.json";
import systemDesignCourse from "./architecture/problems/system-design/content.json";
import systemDesignInterviewsCourse from "./architecture/courses/system-design-interviews/content.json";
import typescriptForReactCourse from "./frontend/courses/typescript-for-react/content.json";
import unitTestingDotnetCourse from "./backend/courses/unit-testing-dotnet/content.json";
import yarnNpmPackagesCourse from "./frontend/courses/yarn-npm-packages/content.json";

const rawCoursesPart1 = [
	{ ...aiBasicsCourse, urlCategory: "ai" },
	{ ...apiDesignCourse, urlCategory: "backend" },
	{ ...apolloCourse, urlCategory: "frontend" },
	{ ...aspnetCoreCourse, urlCategory: "backend" },
	{ ...aspnetCoreCourse1, urlCategory: "backend" },
	{ ...aspnetCoreWebApiCourse, urlCategory: "backend" },
	{ ...authenticationAuthorizationCourse, urlCategory: "backend" },
	{ ...awsCourse, urlCategory: "devops" },
	{ ...awsForAspnetCourse, urlCategory: "backend" },
	{ ...azureCourse, urlCategory: "devops" },
	{ ...azureCourse1, urlCategory: "devops" },
	{ ...azureForAspnetCourse, urlCategory: "backend" },
	{ ...cheatsheetCourse, urlCategory: "cheatsheet" },
	{ ...claudeCourse, urlCategory: "ai" },
	{ ...cleanCodeCsharpCourse, urlCategory: "architecture" },
	{ ...codexCourse, urlCategory: "ai" },
	{ ...csharpCourse, urlCategory: "backend" },
	{ ...csharpFundamentalsCourse, urlCategory: "backend" },
	{ ...databaseDesignCourse, urlCategory: "database" },
	{ ...designPatternsCourse, urlCategory: "architecture" },
	{ ...devopsCourse, urlCategory: "devops" },
	{ ...dotnetAiBackendCourse, urlCategory: "ai" },
	{ ...dotnetNugetPackagesCourse, urlCategory: "backend" },
	{ ...efCoreCourse, urlCategory: "backend" },
	{ ...frontendPerformanceEngineeringCourse, urlCategory: "architecture" },
	{ ...fullStackSeniorProjectsCourse, urlCategory: "architecture" },
	{ ...fullstackSecurityCourse, urlCategory: "architecture" },
	{ ...gitLinuxDeveloperWorkflowCourse, urlCategory: "devops" },
	{ ...graphqlDotnetCourse, urlCategory: "backend" },
	{ ...hldCourse, urlCategory: "architecture" },
	{ ...interviewQaCourse, urlCategory: "interview-qa" },
	{ ...linqCourse, urlCategory: "backend" },
	{ ...lldCourse, urlCategory: "architecture" },
	{ ...messageQueuesEventStreamingCourse, urlCategory: "architecture" },
	{ ...microservicesArchitectureCourse, urlCategory: "architecture" },
	{ ...nextJsFullStackReactCourse, urlCategory: "frontend" },
	{ ...oopsConceptsCourse, urlCategory: "fundamentals" },
	{ ...postgresqlCourse, urlCategory: "database" },
	{ ...prismaCourse, urlCategory: "frontend" },
	{ ...programmingComputerWebFoundationsCourse, urlCategory: "fundamentals" },
	{ ...reactAdvancedPatternsCourse, urlCategory: "frontend" },
	{ ...reactFundamentalsCourse, urlCategory: "frontend" },
	{ ...reactQueryCourse, urlCategory: "frontend" },
	{ ...reactTestingCourse, urlCategory: "frontend" },
	{ ...redisCachingStrategiesCourse, urlCategory: "architecture" },
	{ ...reduxCourse, urlCategory: "frontend" },
	{ ...seniorSoftwareEngineeringCourse, urlCategory: "fundamentals" },
	{ ...sqlCourse, urlCategory: "database" },
	{ ...sqlServerCourse, urlCategory: "database" },
	{ ...systemDesignCourse, urlCategory: "architecture" },
	{ ...systemDesignInterviewsCourse, urlCategory: "architecture" },
	{ ...typescriptForReactCourse, urlCategory: "frontend" },
	{ ...unitTestingDotnetCourse, urlCategory: "backend" },
	{ ...yarnNpmPackagesCourse, urlCategory: "frontend" },
];

const rawCourses: any[] = [...rawCoursesPart1];

export const courses: Course[] = rawCourses as unknown as Course[];

export function getCourseBySlug(slug: string): Course | undefined {
	return courses.find((c) => c.slug === slug);
}
