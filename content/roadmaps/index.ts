import type { RoadmapNode } from '@/types';

import aibasicsRoadmap from './ai-basics-roadmap.json';
import aspnetcoreRoadmap from './aspnet-core-roadmap.json';
import csharpfundamentalsRoadmap from './csharp-fundamentals-roadmap.json';
import codexRoadmap from './codex-roadmap.json';
import aspnetcorewebapiRoadmap from './aspnet-core-web-api-roadmap.json';
import claudeRoadmap from './claude-roadmap.json';
import dotnetreactaileadRoadmap from './dotnet-react-ai-lead-roadmap.json';
import linqRoadmap from './linq-roadmap.json';
import efcoreRoadmap from './ef-core-roadmap.json';
import graphqldotnetRoadmap from './graphql-dotnet-roadmap.json';
import unittestingdotnetRoadmap from './unit-testing-dotnet-roadmap.json';
import awsforaspnetRoadmap from './aws-for-aspnet-roadmap.json';
import azureforaspnetRoadmap from './azure-for-aspnet-roadmap.json';
import azureRoadmap from './azure-roadmap.json';
import reactfundamentalsRoadmap from './react-fundamentals-roadmap.json';
import reactqueryRoadmap from './react-query-roadmap.json';
import reduxRoadmap from './redux-roadmap.json';
import reactadvancedpatternsRoadmap from './react-advanced-patterns-roadmap.json';
import dotnetnugetpackagesRoadmap from './dotnet-nuget-packages-roadmap.json';
import typescriptforreactRoadmap from './typescript-for-react-roadmap.json';
import apolloRoadmap from './apollo-roadmap.json';
import yarnnpmpackagesRoadmap from './yarn-npm-packages-roadmap.json';
import reacttestingRoadmap from './react-testing-roadmap.json';
import dotnetaibackendRoadmap from './dotnet-ai-backend-roadmap.json';
import sqlserverRoadmap from './sql-server-roadmap.json';
import postgresqlRoadmap from './postgresql-roadmap.json';
import devopsRoadmap from './devops-roadmap.json';
import oopsconceptsRoadmap from './oops-concepts-roadmap.json';
import designpatternsRoadmap from './design-patterns-roadmap.json';
import authenticationauthorizationRoadmap from './authentication-authorization-roadmap.json';
import fullstacksecurityRoadmap from './fullstack-security-roadmap.json';
import cleancodecsharpRoadmap from './clean-code-csharp-roadmap.json';
import awsRoadmap from './aws-roadmap.json';
import microservicesarchitectureRoadmap from './microservices-architecture-roadmap.json';
import messagequeueseventstreamingRoadmap from './message-queues-event-streaming-roadmap.json';
import rediscachingstrategiesRoadmap from './redis-caching-strategies-roadmap.json';
import systemdesigninterviewsRoadmap from './system-design-interviews-roadmap.json';
import programmingcomputerwebfoundationsRoadmap from './programming-computer-web-foundations-roadmap.json';
import gitlinuxdeveloperworkflowRoadmap from './git-linux-developer-workflow-roadmap.json';
import nextjsfullstackreactRoadmap from './next-js-full-stack-react-roadmap.json';
import frontendperformanceengineeringRoadmap from './frontend-performance-engineering-roadmap.json';
import seniorsoftwareengineeringRoadmap from './senior-software-engineering-roadmap.json';
import prismaRoadmap from './prisma-roadmap.json';

const rawRoadmaps = [aibasicsRoadmap, aspnetcoreRoadmap, csharpfundamentalsRoadmap, codexRoadmap, aspnetcorewebapiRoadmap, claudeRoadmap, dotnetreactaileadRoadmap, linqRoadmap, efcoreRoadmap, graphqldotnetRoadmap, unittestingdotnetRoadmap, awsforaspnetRoadmap, azureforaspnetRoadmap, azureRoadmap, reactfundamentalsRoadmap, reactqueryRoadmap, reduxRoadmap, reactadvancedpatternsRoadmap, dotnetnugetpackagesRoadmap, typescriptforreactRoadmap, apolloRoadmap, yarnnpmpackagesRoadmap, reacttestingRoadmap, dotnetaibackendRoadmap, sqlserverRoadmap, postgresqlRoadmap, devopsRoadmap, oopsconceptsRoadmap, designpatternsRoadmap, authenticationauthorizationRoadmap, fullstacksecurityRoadmap, cleancodecsharpRoadmap, awsRoadmap, microservicesarchitectureRoadmap, messagequeueseventstreamingRoadmap, rediscachingstrategiesRoadmap, systemdesigninterviewsRoadmap, programmingcomputerwebfoundationsRoadmap, gitlinuxdeveloperworkflowRoadmap, nextjsfullstackreactRoadmap, frontendperformanceengineeringRoadmap, seniorsoftwareengineeringRoadmap, prismaRoadmap];

export const roadmaps: RoadmapNode[] = rawRoadmaps as unknown as RoadmapNode[];

export function getRoadmapForCourse(courseSlug: string): RoadmapNode | undefined {
  return roadmaps.find((r) => r.id.includes(courseSlug));
}
