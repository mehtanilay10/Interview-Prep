import type { Module } from "@/types";

import sqlModule1 from "../courses/sql-server/01-getting-started/content.json";
import sqlModule2 from "../courses/sql-server/02-querying-data/content.json";
import sqlModule3 from "../courses/sql-server/03-joins/content.json";
import sqlModule4 from "../courses/sql-server/04-set-operations/content.json";
import sqlModule5 from "../courses/sql-server/05-grouping-aggregation-subqueries/content.json";
import sqlModule6 from "../courses/sql-server/06-data-modification-dml/content.json";
import sqlModule7 from "../courses/sql-server/07-database-schema-table-objects/content.json";
import sqlModule8 from "../courses/sql-server/08-data-types/content.json";
import sqlModule9 from "../courses/sql-server/09-constraints/content.json";
import sqlModule10 from "../courses/sql-server/10-indexes/content.json";
import sqlModule11 from "../courses/sql-server/11-views/content.json";
import sqlModule12 from "../courses/sql-server/12-stored-procedures-functions/content.json";
import sqlModule13 from "../courses/sql-server/13-triggers/content.json";
import sqlModule14 from "../courses/sql-server/14-transactions-error-handling-backup/content.json";
import sqlModule15 from "../courses/sql-server/15-advanced-topics/content.json";
import sqlModule16 from "../courses/sql-server/16-performance-tuning/content.json";
import sqlModule17 from "../courses/sql-server/17-security-hardening/content.json";
import sqlModule18 from "../courses/sql-server/18-high-availability-dr/content.json";
import sqlModule19 from "../courses/sql-server/19-data-warehousing/content.json";
import sqlModule20 from "../courses/sql-server/20-azure-sql/content.json";
import sqlModule21 from "../courses/sql-server/21-modern-data-tools/content.json";

import aspModule1 from "../courses/aspnet-core/01-getting-started-aspnet-core-mvc/content.json";
import aspModule2 from "../courses/aspnet-core/02-controllers-routing/content.json";
import aspModule3 from "../courses/aspnet-core/03-model-binding-validation/content.json";
import aspModule4 from "../courses/aspnet-core/04-views-tag-helpers/content.json";
import aspModule5 from "../courses/aspnet-core/05-dependency-injection-configuration/content.json";
import aspModule6 from "../courses/aspnet-core/06-filters/content.json";
import aspModule7 from "../courses/aspnet-core/07-web-api/content.json";
import aspModule8 from "../courses/aspnet-core/08-authentication-identity/content.json";
import aspModule9 from "../courses/aspnet-core/09-localization-globalization/content.json";
import aspModule10 from "../courses/aspnet-core/10-ado-net-data-access/content.json";
import aspModule11 from "../courses/aspnet-core/11-cors-cross-origin/content.json";

import linqModule1 from "../courses/linq/01-getting-started-linq/content.json";
import linqModule2 from "../courses/linq/02-linq-fundamentals-syntax/content.json";
import linqModule3 from "../courses/linq/03-filtering-projection/content.json";
import linqModule4 from "../courses/linq/04-sorting-grouping/content.json";
import linqModule5 from "../courses/linq/05-joining-data/content.json";
import linqModule6 from "../courses/linq/06-set-operations/content.json";
import linqModule7 from "../courses/linq/07-aggregation-operators/content.json";
import linqModule8 from "../courses/linq/08-quantifiers-element-operators/content.json";
import linqModule9 from "../courses/linq/09-partitioning-operators/content.json";
import linqModule10 from "../courses/linq/10-conversion-generation-operators/content.json";
import linqModule11 from "../courses/linq/11-advanced-linq-concepts/content.json";

import efModule1 from "../courses/ef-core/01-getting-started-ef-core/content.json";
import efModule2 from "../courses/ef-core/02-dbcontext-configuration/content.json";
import efModule3 from "../courses/ef-core/03-conventions-relationships/content.json";
import efModule4 from "../courses/ef-core/04-data-operations-connected/content.json";
import efModule5 from "../courses/ef-core/05-data-operations-disconnected/content.json";
import efModule6 from "../courses/ef-core/06-change-tracking/content.json";
import efModule7 from "../courses/ef-core/07-querying/content.json";
import efModule8 from "../courses/ef-core/08-inheritance-strategies/content.json";
import efModule9 from "../courses/ef-core/09-migrations/content.json";
import efModule10 from "../courses/ef-core/10-advanced-features/content.json";
import efModule11 from "../courses/ef-core/11-database-first-diagnostics/content.json";
import efModule12 from "../courses/ef-core/12-performance-bulk-operations/content.json";

import reactFundModule1 from "../courses/react-fundamentals/01-getting-started/content.json";
import reactFundModule2 from "../courses/react-fundamentals/02-components-props/content.json";
import reactFundModule3 from "../courses/react-fundamentals/03-state-events/content.json";
import reactFundModule4 from "../courses/react-fundamentals/04-forms-input/content.json";
import reactFundModule5 from "../courses/react-fundamentals/05-lifecycle-effects/content.json";
import reactFundModule6 from "../courses/react-fundamentals/06-context-refs/content.json";
import reactFundModule7 from "../courses/react-fundamentals/07-react-router/content.json";
import reactFundModule8 from "../courses/react-fundamentals/08-styling/content.json";

import reactAdvModule1 from "../courses/react-advanced-patterns/01-render-props/content.json";
import reactAdvModule2 from "../courses/react-advanced-patterns/02-higher-order-components/content.json";
import reactAdvModule3 from "../courses/react-advanced-patterns/03-compound-components/content.json";
import reactAdvModule4 from "../courses/react-advanced-patterns/04-state-reducers/content.json";
import reactAdvModule5 from "../courses/react-advanced-patterns/05-control-props/content.json";
import reactAdvModule6 from "../courses/react-advanced-patterns/06-performance-patterns/content.json";
import reactAdvModule7 from "../courses/react-advanced-patterns/07-custom-hooks-architecture/content.json";
import reactAdvModule8 from "../courses/react-advanced-patterns/08-state-machines-xstate/content.json";
import reactAdvModule9 from "../courses/react-advanced-patterns/09-component-composition-strategies/content.json";
import reactAdvModule10 from "../courses/react-advanced-patterns/10-advanced-hook-patterns/content.json";

import tsrModule1 from "../courses/typescript-for-react/01-typescript-basics/content.json";
import tsrModule2 from "../courses/typescript-for-react/02-types-in-react/content.json";
import tsrModule3 from "../courses/typescript-for-react/03-typing-hooks/content.json";
import tsrModule4 from "../courses/typescript-for-react/04-advanced-types/content.json";
import tsrModule5 from "../courses/typescript-for-react/05-generic-components/content.json";
import tsrModule6 from "../courses/typescript-for-react/06-react-patterns/content.json";
import tsrModule7 from "../courses/typescript-for-react/07-testing-best-practices/content.json";

import reduxModule1 from "../courses/redux/01-redux-fundamentals/content.json";
import reduxModule2 from "../courses/redux/02-redux-toolkit/content.json";
import reduxModule3 from "../courses/redux/03-react-redux/content.json";
import reduxModule4 from "../courses/redux/04-redux-middleware/content.json";
import reduxModule5 from "../courses/redux/05-redux-patterns/content.json";
import reduxModule6 from "../courses/redux/06-redux-testing/content.json";
import reduxModule7 from "../courses/redux/07-redux-advanced-concepts/content.json";
import reduxModule8 from "../courses/redux/08-redux-real-world/content.json";

import rqModule1 from "../courses/react-query/01-query-basics/content.json";
import rqModule2 from "../courses/react-query/02-query-hooks/content.json";
import rqModule3 from "../courses/react-query/03-mutations/content.json";
import rqModule4 from "../courses/react-query/04-advanced-features/content.json";
import rqModule5 from "../courses/react-query/05-caching-strategies/content.json";
import rqModule6 from "../courses/react-query/06-offline-support-persistence/content.json";
import rqModule7 from "../courses/react-query/07-prefetching-ssr/content.json";
import rqModule8 from "../courses/react-query/08-performance-optimization/content.json";
import rqModule9 from "../courses/react-query/09-real-world-patterns/content.json";

import apolloModule1 from "../courses/apollo/01-apollo-basics/content.json";
import apolloModule2 from "../courses/apollo/02-queries-mutations/content.json";
import apolloModule3 from "../courses/apollo/03-caching/content.json";
import apolloModule4 from "../courses/apollo/04-advanced-patterns/content.json";
import apolloModule5 from "../courses/apollo/05-client-side-caching-advanced/content.json";
import apolloModule6 from "../courses/apollo/06-error-handling-optimistic/content.json";
import apolloModule7 from "../courses/apollo/07-subscriptions-realtime/content.json";
import apolloModule8 from "../courses/apollo/08-local-state-management/content.json";
import apolloModule9 from "../courses/apollo/09-ssr-nextjs-performance/content.json";
import graphqlModule1 from "../courses/graphql-dotnet/01-getting-started/content.json";
import graphqlModule2 from "../courses/graphql-dotnet/02-schema-types/content.json";
import graphqlModule3 from "../courses/graphql-dotnet/03-queries-mutations/content.json";
import graphqlModule4 from "../courses/graphql-dotnet/04-filtering-pagination/content.json";
import graphqlModule5 from "../courses/graphql-dotnet/05-authentication/content.json";
import graphqlModule6 from "../courses/graphql-dotnet/06-performance/content.json";
import graphqlModule7 from "../courses/graphql-dotnet/07-error-handling/content.json";

import csharpModule1 from "../courses/csharp-fundamentals/01-getting-started/content.json";
import csharpModule2 from "../courses/csharp-fundamentals/02-variables-types/content.json";
import csharpModule3 from "../courses/csharp-fundamentals/03-control-flow/content.json";
import csharpModule4 from "../courses/csharp-fundamentals/04-oop/content.json";
import csharpModule5 from "../courses/csharp-fundamentals/05-advanced-features/content.json";
import csharpModule6 from "../courses/csharp-fundamentals/06-error-handling/content.json";
import csharpModule7 from "../courses/csharp-fundamentals/07-modern-csharp/content.json";

import webApiModule1 from "../courses/aspnet-core-web-api/01-getting-started/content.json";
import webApiModule2 from "../courses/aspnet-core-web-api/02-controllers-routing/content.json";
import webApiModule3 from "../courses/aspnet-core-web-api/03-model-binding/content.json";
import webApiModule4 from "../courses/aspnet-core-web-api/04-middleware/content.json";
import webApiModule5 from "../courses/aspnet-core-web-api/05-dependency-injection/content.json";
import webApiModule6 from "../courses/aspnet-core-web-api/06-error-handling-validation/content.json";
import webApiModule7 from "../courses/aspnet-core-web-api/07-authentication-basics/content.json";
import webApiModule8 from "../courses/aspnet-core-web-api/08-logging-configuration/content.json";

import authModule1 from "../courses/authentication-authorization/01-auth-basics/content.json";
import authModule2 from "../courses/authentication-authorization/02-jwt/content.json";
import authModule3 from "../courses/authentication-authorization/03-identity/content.json";
import authModule4 from "../courses/authentication-authorization/04-oauth/content.json";

import cleanCodeModule1 from "../courses/clean-code-csharp/01-solid-principles/content.json";
import cleanCodeModule2 from "../courses/clean-code-csharp/02-creational-patterns/content.json";
import cleanCodeModule3 from "../courses/clean-code-csharp/03-structural-patterns/content.json";
import cleanCodeModule4 from "../courses/clean-code-csharp/04-behavioral-patterns/content.json";
import cleanCodeModule5 from "../courses/clean-code-csharp/05-clean-code-practices/content.json";
import cleanCodeModule6 from "../courses/clean-code-csharp/06-architecture-patterns/content.json";
import designModule5 from "../courses/design-patterns/05-concurrency-patterns/content.json";
import designModule6 from "../courses/design-patterns/06-architectural-patterns/content.json";

import unitTestModule1 from "../courses/unit-testing-dotnet/01-testing-fundamentals/content.json";
import unitTestModule2 from "../courses/unit-testing-dotnet/02-xunit-basics/content.json";
import unitTestModule3 from "../courses/unit-testing-dotnet/03-mocking-fakes/content.json";
import unitTestModule4 from "../courses/unit-testing-dotnet/04-integration-testing/content.json";
import unitTestModule5 from "../courses/unit-testing-dotnet/05-tdd/content.json";
import unitTestModule6 from "../courses/unit-testing-dotnet/06-testing-patterns/content.json";
import unitTestModule7 from "../courses/unit-testing-dotnet/07-code-coverage/content.json";

import azureModule1 from "../courses/azure/01-azure-developer-foundations/content.json";
import azureModule2 from "../courses/azure/02-compute-and-app-hosting/content.json";
import azureModule3 from "../courses/azure/03-serverless-and-azure-functions/content.json";
import azureModule4 from "../courses/azure/04-containers-and-container-platforms/content.json";
import azureModule5 from "../courses/azure/05-storage-and-data-services/content.json";
import azureModule6 from "../courses/azure/06-databases-and-caching/content.json";
import azureModule7 from "../courses/azure/07-identity-security-and-configuration/content.json";
import azureModule8 from "../courses/azure/08-networking-and-api-platforms/content.json";
import azureModule9 from "../courses/azure/09-messaging-and-event-driven-architecture/content.json";
import azureModule10 from "../courses/azure/10-observability-and-application-monitoring/content.json";
import azureModule11 from "../courses/azure/11-application-deployment-and-devops/content.json";
import azureModule12 from "../courses/azure/12-infrastructure-as-code-and-automation/content.json";
import azureModule13 from "../courses/azure/13-ai-services-for-azure-developers/content.json";

import awsModule1 from "../courses/aws/01-aws-fundamentals-cloud-concepts/content.json";
import awsModule2 from "../courses/aws/02-identity-access-governance/content.json";
import awsModule3 from "../courses/aws/03-compute-services/content.json";
import awsModule4 from "../courses/aws/04-networking/content.json";
import awsModule5 from "../courses/aws/05-storage-services/content.json";
import awsModule6 from "../courses/aws/06-databases/content.json";
import awsModule7 from "../courses/aws/07-load-balancing-application-integration/content.json";
import awsModule8 from "../courses/aws/08-serverless/content.json";
import awsModule9 from "../courses/aws/09-containers-kubernetes/content.json";
import awsModule10 from "../courses/aws/10-devops-cicd/content.json";
import awsModule11 from "../courses/aws/11-monitoring-logging-observability/content.json";
import awsModule12 from "../courses/aws/12-security-services/content.json";
import awsModule13 from "../courses/aws/13-analytics-big-data/content.json";
import awsModule14 from "../courses/aws/14-ai-machine-learning/content.json";
import awsModule15 from "../courses/aws/15-developer-tools-application-services/content.json";

import awsModule16 from "../courses/aws/16-identity-for-applications/content.json";
import awsModule17 from "../courses/aws/17-migration-hybrid-cloud/content.json";
import awsModule18 from "../courses/aws/18-infrastructure-automation/content.json";
import awsModule19 from "../courses/aws/19-high-availability-disaster-recovery/content.json";
import awsModule20 from "../courses/aws/20-aws-architecture-design-patterns/content.json";

import reactTestModule1 from "../courses/react-testing/01-testing-fundamentals/content.json";
import reactTestModule2 from "../courses/react-testing/02-jest-basics/content.json";
import reactTestModule3 from "../courses/react-testing/03-react-testing-library/content.json";
import reactTestModule4 from "../courses/react-testing/04-component-testing/content.json";
import reactTestModule5 from "../courses/react-testing/05-e2e-testing/content.json";
import reactTestModule6 from "../courses/react-testing/06-advanced-testing-patterns/content.json";
import reactTestModule7 from "../courses/react-testing/07-testing-react-query/content.json";

import oopModule1 from "../courses/oops-concepts/01-oop-fundamentals/content.json";
import oopModule2 from "../courses/oops-concepts/02-encapsulation-data-hiding/content.json";
import oopModule3 from "../courses/oops-concepts/03-inheritance/content.json";
import oopModule4 from "../courses/oops-concepts/04-polymorphism/content.json";
import oopModule5 from "../courses/oops-concepts/05-abstraction/content.json";
import oopModule6 from "../courses/oops-concepts/06-interfaces-abstract-classes/content.json";
import oopModule7 from "../courses/oops-concepts/07-design-principles/content.json";

import devOpsModule1 from "../courses/devops/01-docker-fundamentals/content.json";
import devOpsModule2 from "../courses/devops/02-docker-advanced/content.json";
import devOpsModule3 from "../courses/devops/03-kubernetes-fundamentals/content.json";
import devOpsModule4 from "../courses/devops/04-kubernetes-advanced/content.json";
import devOpsModule5 from "../courses/devops/05-ci-cd-fundamentals/content.json";
import devOpsModule6 from "../courses/devops/06-ci-cd-modern-tools/content.json";

const rawModules = [
	sqlModule1,
	sqlModule2,
	sqlModule3,
	sqlModule4,
	sqlModule5,
	sqlModule6,
	sqlModule7,
	sqlModule8,
	sqlModule9,
	sqlModule10,
	sqlModule11,
	sqlModule12,
	sqlModule13,
	sqlModule14,
	sqlModule15,
	sqlModule16,
	sqlModule17,
	sqlModule18,
	sqlModule19,
	sqlModule20,
	sqlModule21,
	aspModule1,
	aspModule2,
	aspModule3,
	aspModule4,
	aspModule5,
	aspModule6,
	aspModule7,
	aspModule8,
	aspModule9,
	aspModule10,
	aspModule11,
	linqModule1,
	linqModule2,
	linqModule3,
	linqModule4,
	linqModule5,
	linqModule6,
	linqModule7,
	linqModule8,
	linqModule9,
	linqModule10,
	linqModule11,
	efModule1,
	efModule2,
	efModule3,
	efModule4,
	efModule5,
	efModule6,
	efModule7,
	efModule8,
	efModule9,
	efModule10,
	efModule11,
	efModule12,
	reactFundModule1,
	reactFundModule2,
	reactFundModule3,
	reactFundModule4,
	reactFundModule5,
	reactFundModule6,
	reactFundModule7,
	reactFundModule8,
	reactAdvModule1,
	reactAdvModule2,
	reactAdvModule3,
	reactAdvModule4,
	reactAdvModule5,
	reactAdvModule6,
	reactAdvModule7,
	reactAdvModule8,
	reactAdvModule9,
	reactAdvModule10,
	tsrModule1,
	tsrModule2,
	tsrModule3,
	tsrModule4,
	tsrModule5,
	tsrModule6,
	tsrModule7,
	reduxModule1,
	reduxModule2,
	reduxModule3,
	reduxModule4,
	reduxModule5,
	reduxModule6,
	reduxModule7,
	reduxModule8,
	rqModule1,
	rqModule2,
	rqModule3,
	rqModule4,
	rqModule5,
	rqModule6,
	rqModule7,
	rqModule8,
	rqModule9,
	apolloModule1,
	apolloModule2,
	apolloModule3,
	apolloModule4,
	apolloModule5,
	apolloModule6,
	apolloModule7,
	apolloModule8,
	apolloModule9,
	graphqlModule1,
	graphqlModule2,
	graphqlModule3,
	graphqlModule4,
	graphqlModule5,
	graphqlModule6,
	graphqlModule7,
	csharpModule1,
	csharpModule2,
	csharpModule3,
	csharpModule4,
	csharpModule5,
	csharpModule6,
	csharpModule7,
	webApiModule1,
	webApiModule2,
	webApiModule3,
	webApiModule4,
	webApiModule5,
	webApiModule6,
	webApiModule7,
	webApiModule8,
	authModule1,
	authModule2,
	authModule3,
	authModule4,
	cleanCodeModule1,
	cleanCodeModule2,
	cleanCodeModule3,
	cleanCodeModule4,
	cleanCodeModule5,
	cleanCodeModule6,
	designModule5,
	designModule6,
	unitTestModule1,
	unitTestModule2,
	unitTestModule3,
	unitTestModule4,
	unitTestModule5,
	unitTestModule6,
	unitTestModule7,
	reactTestModule1,
	reactTestModule2,
	reactTestModule3,
	reactTestModule4,
	reactTestModule5,
	reactTestModule6,
	reactTestModule7,
	oopModule1,
	oopModule2,
	oopModule3,
	oopModule4,
	oopModule5,
	oopModule6,
	oopModule7,
	iqModule1,
	iqModule2,
	iqModule3,
	iqModule4,
	iqModule5,
	iqModule6,
	iqModule7,
	fsModule1,
	fsModule2,
	fsModule3,
	fsModule4,
	fsModule5,
	fsModule6,
	fsModule7,
	fsModule8,
	csModule1,
	csModule2,
	csModule3,
	csModule4,
	csModule5,
	csModule6,
	csModule7,
	csModule8,
	csModule9,
	csModule10,
	csModule11, csModule12,
	problemModule1,
	problemModule2,
	problemModule3,
	problemModule4,
	problemModule5,
	devOpsModule1,
	devOpsModule2,
	devOpsModule3,
	devOpsModule4,
	devOpsModule5,
	devOpsModule6,
	azureModule1,
	azureModule2,
	azureModule3,
	azureModule4,
	azureModule5,
	azureModule6,
	azureModule7,
	azureModule8,
	azureModule9,
	azureModule10,
	azureModule11,
	azureModule12,
	azureModule13,
	awsModule1,
	awsModule2,
	awsModule3,
	awsModule4,
	awsModule5,
	awsModule6,
	awsModule7,
	awsModule8,
	awsModule9,
	awsModule10,
	awsModule11,
	awsModule12,
	awsModule13,
	awsModule14,
	awsModule15,
	awsModule16,
	awsModule17,
	awsModule18,
	awsModule19,
	awsModule20,
];

export const modules: Module[] = rawModules as unknown as Module[];

export function getModuleBySlug(slug: string): Module | undefined {
	return modules.find((m) => m.slug === slug);
}

export function getModulesByCourse(courseSlug: string): Module[] {
	return modules.filter((m) => m.courseSlug === courseSlug).sort((a, b) => a.order - b.order);
}

import iqModule1 from "../interview-qa/01-beginner-questions/content.json";
import iqModule2 from "../interview-qa/02-intermediate-questions/content.json";
import iqModule3 from "../interview-qa/03-advanced-questions/content.json";
import iqModule4 from "../interview-qa/04-scenario-based/content.json";
import iqModule5 from "../interview-qa/05-system-design/content.json";
import iqModule6 from "../interview-qa/06-rapid-fire/content.json";
import iqModule7 from "../interview-qa/07-interview-traps/content.json";

import fsModule1 from "../courses/fullstack-security/01-cors-configuration/content.json";
import fsModule2 from "../courses/fullstack-security/02-jwt-authentication/content.json";
import fsModule3 from "../courses/fullstack-security/03-xss-csrf-protection/content.json";
import fsModule4 from "../courses/fullstack-security/04-api-security-rate-limiting/content.json";
import fsModule5 from "../courses/fullstack-security/05-secure-api-design/content.json";
import fsModule6 from "../courses/fullstack-security/06-dependency-security/content.json";
import fsModule7 from "../courses/fullstack-security/07-environment-secrets/content.json";
import fsModule8 from "../courses/fullstack-security/08-security-testing/content.json";

import csModule1 from "../cheatsheet/csharp/content.json";
import csModule2 from "../cheatsheet/sql-server/content.json";
import csModule3 from "../cheatsheet/react/content.json";
import csModule4 from "../cheatsheet/redux/content.json";
import csModule5 from "../cheatsheet/apollo/content.json";
import csModule6 from "../cheatsheet/graphql/content.json";
import csModule7 from "../cheatsheet/docker-compose/content.json";
import csModule8 from "../cheatsheet/javascript/content.json";
import csModule9 from "../cheatsheet/typescript/content.json";
import csModule10 from "../cheatsheet/react-router/content.json";
import csModule11 from '../cheatsheet/aws/content.json';
import csModule12 from '../cheatsheet/azure/content.json';

import problemModule1 from "../problems/01-array-string-problems/content.json";
import problemModule2 from "../problems/02-linked-list-problems/content.json";
import problemModule3 from "../problems/03-tree-graph-problems/content.json";
import problemModule4 from "../problems/04-dynamic-programming-problems/content.json";
import problemModule5 from "../problems/05-sorting-searching-problems/content.json";
