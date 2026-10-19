import type { Course } from "@/types";

import aiBasicsCourse from "./ai/ai-basics/content.json";
import apiDesignCourse from "../problems/backend/api-design/content.json";
import apolloCourse from "./frontend/apollo/content.json";
import aspnetCoreCourse from "./dotnet/aspnet-core/content.json";
import aspnetCoreCourse1 from "../problems/dotnet/aspnet-core/content.json";
import aspnetCoreWebApiCourse from "./dotnet/aspnet-core-web-api/content.json";
import authenticationAuthorizationCourse from "./dotnet/authentication-authorization/content.json";
import awsCourse from "./cloud/aws/content.json";
import awsForAspnetCourse from "./dotnet/aws-for-aspnet/content.json";
import azureCourse from "./cloud/azure/content.json";
import azureCourse1 from "../problems/cloud/azure/content.json";
import azureForAspnetCourse from "./dotnet/azure-for-aspnet/content.json";
import cheatsheetCourse from "../cheatsheet/content.json";
import cleanCodeCsharpCourse from "./architecture/clean-code-csharp/content.json";
import csharpCourse from "../problems/dotnet/csharp/content.json";
import csharpFundamentalsCourse from "./dotnet/csharp-fundamentals/content.json";
import databaseDesignCourse from "../problems/database/database-design/content.json";
import designPatternsCourse from "./architecture/design-patterns/content.json";
import devopsCourse from "./devops/devops/content.json";
import dotnetAiBackendCourse from "./ai/dotnet-ai-backend/content.json";
import dotnetNugetPackagesCourse from "./dotnet/dotnet-nuget-packages/content.json";
import efCoreCourse from "./dotnet/ef-core/content.json";
import frontendPerformanceEngineeringCourse from "./architecture/frontend-performance-engineering/content.json";
import fullStackSeniorProjectsCourse from "../problems/architecture/full-stack-senior-projects/content.json";
import fullstackSecurityCourse from "./architecture/fullstack-security/content.json";
import gitLinuxDeveloperWorkflowCourse from "./devops/git-linux-developer-workflow/content.json";
import graphqlDotnetCourse from "./dotnet/graphql-dotnet/content.json";
import hldCourse from "../problems/architecture/hld/content.json";
import interviewQaCourse from "../interview-qa/content.json";
import linqCourse from "./dotnet/linq/content.json";
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
import unitTestingDotnetCourse from "./dotnet/unit-testing-dotnet/content.json";
import yarnNpmPackagesCourse from "./frontend/yarn-npm-packages/content.json";

const rawCoursesPart1 = [
	{ ...aiBasicsCourse, urlCategory: "ai" },
	{ ...apiDesignCourse, urlCategory: "backend" },
	{ ...apolloCourse, urlCategory: "frontend" },
	{ ...aspnetCoreCourse, urlCategory: "dotnet" },
	{ ...aspnetCoreCourse1, urlCategory: "dotnet" },
	{ ...aspnetCoreWebApiCourse, urlCategory: "dotnet" },
	{ ...authenticationAuthorizationCourse, urlCategory: "dotnet" },
	{ ...awsCourse, urlCategory: "cloud" },
	{ ...awsForAspnetCourse, urlCategory: "dotnet" },
	{ ...azureCourse, urlCategory: "cloud" },
	{ ...azureCourse1, urlCategory: "cloud" },
	{ ...azureForAspnetCourse, urlCategory: "dotnet" },
	{ ...cheatsheetCourse, urlCategory: "cheatsheet" },
	{ ...cleanCodeCsharpCourse, urlCategory: "architecture" },
	{ ...csharpCourse, urlCategory: "dotnet" },
	{ ...csharpFundamentalsCourse, urlCategory: "dotnet" },
	{ ...databaseDesignCourse, urlCategory: "database" },
	{ ...designPatternsCourse, urlCategory: "architecture" },
	{ ...devopsCourse, urlCategory: "devops" },
	{ ...dotnetAiBackendCourse, urlCategory: "ai" },
	{ ...dotnetNugetPackagesCourse, urlCategory: "dotnet" },
	{ ...efCoreCourse, urlCategory: "dotnet" },
	{ ...frontendPerformanceEngineeringCourse, urlCategory: "architecture" },
	{ ...fullStackSeniorProjectsCourse, urlCategory: "architecture" },
	{ ...fullstackSecurityCourse, urlCategory: "architecture" },
	{ ...gitLinuxDeveloperWorkflowCourse, urlCategory: "devops" },
	{ ...graphqlDotnetCourse, urlCategory: "dotnet" },
	{ ...hldCourse, urlCategory: "architecture" },
	{ ...interviewQaCourse, urlCategory: "interview-qa" },
	{ ...linqCourse, urlCategory: "dotnet" },
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
	{ ...unitTestingDotnetCourse, urlCategory: "dotnet" },
	{ ...yarnNpmPackagesCourse, urlCategory: "frontend" },
];


const rawCourses: any[] = [...rawCoursesPart1];

export const courses: Course[] = rawCourses as unknown as Course[];

export function getCourseBySlug(slug: string): Course | undefined {
	return courses.find((c) => c.slug === slug);
}
