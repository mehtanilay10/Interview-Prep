import type { Course } from "@/types";

import aiBasicsCourse from "./ai/ai-basics/content.json";
import apiDesignCourse from "../problems/backend/api-design/content.json";
import apolloCourse from "./frontend/apollo/content.json";
import aspnetCoreCourse from "./backend/aspnet-core/content.json";
import aspnetCoreCourse1 from "../problems/backend/aspnet-core/content.json";
import aspnetCoreWebApiCourse from "./backend/aspnet-core-web-api/content.json";
import authenticationAuthorizationCourse from "./backend/authentication-authorization/content.json";
import awsCourse from "./devops/aws/content.json";
import awsForAspnetCourse from "./backend/aws-for-aspnet/content.json";
import azureCourse from "./devops/azure/content.json";
import azureCourse1 from "../problems/devops/azure/content.json";
import azureForAspnetCourse from "./backend/azure-for-aspnet/content.json";
import cheatsheetCourse from "../cheatsheet/content.json";
import claudeCourse from "./ai/claude/content.json";
import cleanCodeCsharpCourse from "./architecture/clean-code-csharp/content.json";
import codexCourse from "./ai/codex/content.json";
import csharpCourse from "../problems/backend/csharp/content.json";
import csharpFundamentalsCourse from "./backend/csharp-fundamentals/content.json";
import databaseDesignCourse from "../problems/database/database-design/content.json";
import designPatternsCourse from "./architecture/design-patterns/content.json";
import devopsCourse from "./devops/devops/content.json";
import dotnetAiBackendCourse from "./ai/dotnet-ai-backend/content.json";
import dotnetNugetPackagesCourse from "./backend/dotnet-nuget-packages/content.json";
import efCoreCourse from "./backend/ef-core/content.json";
import frontendPerformanceEngineeringCourse from "./architecture/frontend-performance-engineering/content.json";
import fullStackSeniorProjectsCourse from "../problems/architecture/full-stack-senior-projects/content.json";
import fullstackSecurityCourse from "./architecture/fullstack-security/content.json";
import gitLinuxDeveloperWorkflowCourse from "./devops/git-linux-developer-workflow/content.json";
import graphqlDotnetCourse from "./backend/graphql-dotnet/content.json";
import hldCourse from "../problems/architecture/hld/content.json";
import interviewQaCourse from "../interview-qa/content.json";
import linqCourse from "./backend/linq/content.json";
import lldCourse from "../problems/architecture/lld/content.json";
import messageQueuesEventStreamingCourse from "./architecture/message-queues-event-streaming/content.json";
import microservicesArchitectureCourse from "./architecture/microservices-architecture/content.json";
import nextJsFullStackReactCourse from "./frontend/next-js-full-stack-react/content.json";
import oopsConceptsCourse from "./fundamentals/oops-concepts/content.json";
import postgresqlCourse from "./database/postgresql/content.json";
import prismaCourse from "./frontend/prisma/content.json";
import programmingComputerWebFoundationsCourse from "./fundamentals/programming-computer-web-foundations/content.json";
import reactAdvancedPatternsCourse from "./frontend/react-advanced-patterns/content.json";
import reactFundamentalsCourse from "./frontend/react-fundamentals/content.json";
import reactQueryCourse from "./frontend/react-query/content.json";
import reactTestingCourse from "./frontend/react-testing/content.json";
import redisCachingStrategiesCourse from "./architecture/redis-caching-strategies/content.json";
import reduxCourse from "./frontend/redux/content.json";
import seniorSoftwareEngineeringCourse from "./fundamentals/senior-software-engineering/content.json";
import sqlCourse from "../problems/database/sql/content.json";
import sqlServerCourse from "./database/sql-server/content.json";
import systemDesignCourse from "../problems/architecture/system-design/content.json";
import systemDesignInterviewsCourse from "./architecture/system-design-interviews/content.json";
import typescriptForReactCourse from "./frontend/typescript-for-react/content.json";
import unitTestingDotnetCourse from "./backend/unit-testing-dotnet/content.json";
import yarnNpmPackagesCourse from "./frontend/yarn-npm-packages/content.json";

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
