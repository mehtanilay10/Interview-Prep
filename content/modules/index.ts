import type { Module } from "@/types";

import mod01AiBackendTerminologyModule from "../courses/ai/dotnet-ai-backend/01-ai-backend-terminology/content.json";
import mod01ApolloBasicsModule from "../courses/frontend/apollo/01-apollo-basics/content.json";
import mod01ArrayProblemsModule from "../problems/dotnet/csharp/01-array-problems/content.json";
import mod01AuthBasicsModule from "../courses/dotnet/authentication-authorization/01-auth-basics/content.json";
import mod01AwsForDotnetOverviewModule from "../courses/dotnet/aws-for-aspnet/01-aws-for-dotnet-overview/content.json";
import mod01AwsFundamentalsCloudConceptsModule from "../courses/cloud/aws/01-aws-fundamentals-cloud-concepts/content.json";
import mod01AzureDeveloperFoundationsModule from "../courses/cloud/azure/01-azure-developer-foundations/content.json";
import mod01AzureForDotnetOverviewModule from "../courses/dotnet/azure-for-aspnet/01-azure-for-dotnet-overview/content.json";
import mod01AzureFoundationsProblemsModule from "../problems/cloud/azure/01-azure-foundations-problems/content.json";
import mod01BeginnerQuestionsModule from "../interview-qa/01-beginner-questions/content.json";
import mod01CorsConfigurationModule from "../courses/architecture/fullstack-security/01-cors-configuration/content.json";
import mod01CreationalPatternsModule from "../courses/architecture/design-patterns/01-creational-patterns/content.json";
import mod01DockerFundamentalsModule from "../courses/devops/devops/01-docker-fundamentals/content.json";
import mod01GettingStartedModule from "../courses/database/sql-server/01-getting-started/content.json";
import mod01GettingStartedModule1 from "../courses/dotnet/aspnet-core/01-getting-started/content.json";
import mod01GettingStartedModule2 from "../courses/dotnet/aspnet-core-web-api/01-getting-started/content.json";
import mod01GettingStartedModule3 from "../courses/dotnet/csharp-fundamentals/01-getting-started/content.json";
import mod01GettingStartedModule4 from "../courses/dotnet/graphql-dotnet/01-getting-started/content.json";
import mod01GettingStartedModule5 from "../courses/frontend/react-fundamentals/01-getting-started/content.json";
import mod01GettingStartedEfCoreModule from "../courses/dotnet/ef-core/01-getting-started-ef-core/content.json";
import mod01GettingStartedLinqModule from "../courses/dotnet/linq/01-getting-started-linq/content.json";
import mod01MvcFundamentalsProblemsModule from "../problems/dotnet/aspnet-core/01-mvc-fundamentals-problems/content.json";
import mod01NugetFundamentalsModule from "../courses/dotnet/dotnet-nuget-packages/01-nuget-fundamentals/content.json";
import mod01OopFundamentalsModule from "../courses/fundamentals/oops-concepts/01-oop-fundamentals/content.json";
import mod01PrismaBasicsModule from "../courses/frontend/prisma/01-prisma-basics/content.json";
import mod01QueryBasicsModule from "../courses/frontend/react-query/01-query-basics/content.json";
import mod01ReduxFundamentalsModule from "../courses/frontend/redux/01-redux-fundamentals/content.json";
import mod01RenderPropsModule from "../courses/frontend/react-advanced-patterns/01-render-props/content.json";
import mod01SolidPrinciplesModule from "../courses/architecture/clean-code-csharp/01-solid-principles/content.json";
import mod01SqlBasicsModule from "../problems/database/sql/01-sql-basics/content.json";
import mod01TestingFundamentalsModule from "../courses/dotnet/unit-testing-dotnet/01-testing-fundamentals/content.json";
import mod01TestingFundamentalsModule1 from "../courses/frontend/react-testing/01-testing-fundamentals/content.json";
import mod01TypescriptBasicsModule from "../courses/frontend/typescript-for-react/01-typescript-basics/content.json";
import mod02AzureAppServiceDeploymentModule from "../courses/dotnet/azure-for-aspnet/02-azure-app-service-deployment/content.json";
import mod02AzureComputeProblemsModule from "../problems/cloud/azure/02-azure-compute-problems/content.json";
import mod02ComponentsPropsModule from "../courses/frontend/react-fundamentals/02-components-props/content.json";
import mod02ComputeAndAppHostingModule from "../courses/cloud/azure/02-compute-and-app-hosting/content.json";
import mod02ControllersRoutingModule from "../courses/dotnet/aspnet-core-web-api/02-controllers-routing/content.json";
import mod02CoreExtensionsModule from "../courses/dotnet/dotnet-nuget-packages/02-core-extensions/content.json";
import mod02CreationalPatternsModule from "../courses/architecture/clean-code-csharp/02-creational-patterns/content.json";
import mod02DbcontextConfigurationModule from "../courses/dotnet/ef-core/02-dbcontext-configuration/content.json";
import mod02DockerAdvancedModule from "../courses/devops/devops/02-docker-advanced/content.json";
import mod02ElasticBeanstalkEcsDeploymentModule from "../courses/dotnet/aws-for-aspnet/02-elastic-beanstalk-ecs-deployment/content.json";
import mod02EncapsulationDataHidingModule from "../courses/fundamentals/oops-concepts/02-encapsulation-data-hiding/content.json";
import mod02HigherOrderComponentsModule from "../courses/frontend/react-advanced-patterns/02-higher-order-components/content.json";
import mod02IdentityAccessGovernanceModule from "../courses/cloud/aws/02-identity-access-governance/content.json";
import mod02IntermediateQuestionsModule from "../interview-qa/02-intermediate-questions/content.json";
import mod02JestBasicsModule from "../courses/frontend/react-testing/02-jest-basics/content.json";
import mod02JwtModule from "../courses/dotnet/authentication-authorization/02-jwt/content.json";
import mod02JwtAuthenticationModule from "../courses/architecture/fullstack-security/02-jwt-authentication/content.json";
import mod02LinqFundamentalsSyntaxModule from "../courses/dotnet/linq/02-linq-fundamentals-syntax/content.json";
import mod02MvcFundamentalsModule from "../courses/dotnet/aspnet-core/02-mvc-fundamentals/content.json";
import mod02PrismaSchemaDesignModule from "../courses/frontend/prisma/02-prisma-schema-design/content.json";
import mod02QueriesMutationsModule from "../courses/frontend/apollo/02-queries-mutations/content.json";
import mod02QueryHooksModule from "../courses/frontend/react-query/02-query-hooks/content.json";
import mod02QueryingDataModule from "../courses/database/sql-server/02-querying-data/content.json";
import mod02RagImplementationModule from "../courses/ai/dotnet-ai-backend/02-rag-implementation/content.json";
import mod02RazorViewsProblemsModule from "../problems/dotnet/aspnet-core/02-razor-views-problems/content.json";
import mod02ReduxToolkitModule from "../courses/frontend/redux/02-redux-toolkit/content.json";
import mod02SchemaTypesModule from "../courses/dotnet/graphql-dotnet/02-schema-types/content.json";
import mod02SqlIntermediateModule from "../problems/database/sql/02-sql-intermediate/content.json";
import mod02StringProblemsModule from "../problems/dotnet/csharp/02-string-problems/content.json";
import mod02StructuralPatternsModule from "../courses/architecture/design-patterns/02-structural-patterns/content.json";
import mod02TypesInReactModule from "../courses/frontend/typescript-for-react/02-types-in-react/content.json";
import mod02VariablesTypesModule from "../courses/dotnet/csharp-fundamentals/02-variables-types/content.json";
import mod02XunitBasicsModule from "../courses/dotnet/unit-testing-dotnet/02-xunit-basics/content.json";
import mod03AdvancedQuestionsModule from "../interview-qa/03-advanced-questions/content.json";
import mod03ApiDesignProblemsModule from "../problems/dotnet/aspnet-core/03-api-design-problems/content.json";
import mod03AspnetWebModule from "../courses/dotnet/dotnet-nuget-packages/03-aspnet-web/content.json";
import mod03AzureServerlessProblemsModule from "../problems/cloud/azure/03-azure-serverless-problems/content.json";
import mod03AzureStorageBlobsQueuesModule from "../courses/dotnet/azure-for-aspnet/03-azure-storage-blobs-queues/content.json";
import mod03BehavioralPatternsModule from "../courses/architecture/design-patterns/03-behavioral-patterns/content.json";
import mod03CachingModule from "../courses/frontend/apollo/03-caching/content.json";
import mod03CompoundComponentsModule from "../courses/frontend/react-advanced-patterns/03-compound-components/content.json";
import mod03ComputeServicesModule from "../courses/cloud/aws/03-compute-services/content.json";
import mod03ControlFlowModule from "../courses/dotnet/csharp-fundamentals/03-control-flow/content.json";
import mod03ConventionsRelationshipsModule from "../courses/dotnet/ef-core/03-conventions-relationships/content.json";
import mod03FilteringProjectionModule from "../courses/dotnet/linq/03-filtering-projection/content.json";
import mod03IdentityModule from "../courses/dotnet/authentication-authorization/03-identity/content.json";
import mod03InheritanceModule from "../courses/fundamentals/oops-concepts/03-inheritance/content.json";
import mod03JoinsModule from "../courses/database/sql-server/03-joins/content.json";
import mod03KubernetesFundamentalsModule from "../courses/devops/devops/03-kubernetes-fundamentals/content.json";
import mod03LinkedListProblemsModule from "../problems/dotnet/csharp/03-linked-list-problems/content.json";
import mod03McpFundamentalsModule from "../courses/ai/dotnet-ai-backend/03-mcp-fundamentals/content.json";
import mod03MockingFakesModule from "../courses/dotnet/unit-testing-dotnet/03-mocking-fakes/content.json";
import mod03ModelBindingModule from "../courses/dotnet/aspnet-core-web-api/03-model-binding/content.json";
import mod03MutationsModule from "../courses/frontend/react-query/03-mutations/content.json";
import mod03PrismaQueriesMutationsModule from "../courses/frontend/prisma/03-prisma-queries-mutations/content.json";
import mod03QueriesMutationsModule from "../courses/dotnet/graphql-dotnet/03-queries-mutations/content.json";
import mod03ReactReduxModule from "../courses/frontend/redux/03-react-redux/content.json";
import mod03ReactTestingLibraryModule from "../courses/frontend/react-testing/03-react-testing-library/content.json";
import mod03RoutingUrlsModule from "../courses/dotnet/aspnet-core/03-routing-urls/content.json";
import mod03S3StorageCsharpModule from "../courses/dotnet/aws-for-aspnet/03-s3-storage-csharp/content.json";
import mod03ServerlessAndAzureFunctionsModule from "../courses/cloud/azure/03-serverless-and-azure-functions/content.json";
import mod03SqlAdvancedModule from "../problems/database/sql/03-sql-advanced/content.json";
import mod03StateEventsModule from "../courses/frontend/react-fundamentals/03-state-events/content.json";
import mod03StructuralPatternsModule from "../courses/architecture/clean-code-csharp/03-structural-patterns/content.json";
import mod03TypingHooksModule from "../courses/frontend/typescript-for-react/03-typing-hooks/content.json";
import mod03XssCsrfProtectionModule from "../courses/architecture/fullstack-security/03-xss-csrf-protection/content.json";
import mod04AdvancedFeaturesModule from "../courses/frontend/react-query/04-advanced-features/content.json";
import mod04AdvancedPatternsModule from "../courses/frontend/apollo/04-advanced-patterns/content.json";
import mod04AdvancedTypesModule from "../courses/frontend/typescript-for-react/04-advanced-types/content.json";
import mod04ApiSecurityRateLimitingModule from "../courses/architecture/fullstack-security/04-api-security-rate-limiting/content.json";
import mod04AwsSecretsManagerModule from "../courses/dotnet/aws-for-aspnet/04-aws-secrets-manager/content.json";
import mod04AzureKeyVaultSecretsModule from "../courses/dotnet/azure-for-aspnet/04-azure-key-vault-secrets/content.json";
import mod04AzureStorageProblemsModule from "../problems/cloud/azure/04-azure-storage-problems/content.json";
import mod04BehavioralPatternsModule from "../courses/architecture/clean-code-csharp/04-behavioral-patterns/content.json";
import mod04ComponentTestingModule from "../courses/frontend/react-testing/04-component-testing/content.json";
import mod04ContainersAndContainerPlatformsModule from "../courses/cloud/azure/04-containers-and-container-platforms/content.json";
import mod04DataOperationsConnectedModule from "../courses/dotnet/ef-core/04-data-operations-connected/content.json";
import mod04DatabaseDataAccessModule from "../courses/dotnet/dotnet-nuget-packages/04-database-data-access/content.json";
import mod04EnterprisePatternsModule from "../courses/architecture/design-patterns/04-enterprise-patterns/content.json";
import mod04FilteringPaginationModule from "../courses/dotnet/graphql-dotnet/04-filtering-pagination/content.json";
import mod04FormsInputModule from "../courses/frontend/react-fundamentals/04-forms-input/content.json";
import mod04IntegrationTestingModule from "../courses/dotnet/unit-testing-dotnet/04-integration-testing/content.json";
import mod04KubernetesAdvancedModule from "../courses/devops/devops/04-kubernetes-advanced/content.json";
import mod04McpServersToolsModule from "../courses/ai/dotnet-ai-backend/04-mcp-servers-tools/content.json";
import mod04MiddlewareModule from "../courses/dotnet/aspnet-core-web-api/04-middleware/content.json";
import mod04MiddlewarePipelineProblemsModule from "../problems/dotnet/aspnet-core/04-middleware-pipeline-problems/content.json";
import mod04ModelBindingValidationModule from "../courses/dotnet/aspnet-core/04-model-binding-validation/content.json";
import mod04NetworkingModule from "../courses/cloud/aws/04-networking/content.json";
import mod04OauthModule from "../courses/dotnet/authentication-authorization/04-oauth/content.json";
import mod04OopModule from "../courses/dotnet/csharp-fundamentals/04-oop/content.json";
import mod04PolymorphismModule from "../courses/fundamentals/oops-concepts/04-polymorphism/content.json";
import mod04PrismaRelationsModule from "../courses/frontend/prisma/04-prisma-relations/content.json";
import mod04ReduxMiddlewareModule from "../courses/frontend/redux/04-redux-middleware/content.json";
import mod04ScenarioBasedModule from "../interview-qa/04-scenario-based/content.json";
import mod04SetOperationsModule from "../courses/database/sql-server/04-set-operations/content.json";
import mod04SortingGroupingModule from "../courses/dotnet/linq/04-sorting-grouping/content.json";
import mod04StateReducersModule from "../courses/frontend/react-advanced-patterns/04-state-reducers/content.json";
import mod04TreeGraphProblemsModule from "../problems/dotnet/csharp/04-tree-graph-problems/content.json";
import mod05AbstractionModule from "../courses/fundamentals/oops-concepts/05-abstraction/content.json";
import mod05AdvancedFeaturesModule from "../courses/dotnet/csharp-fundamentals/05-advanced-features/content.json";
import mod05AiAgentsDotnetModule from "../courses/ai/dotnet-ai-backend/05-ai-agents-dotnet/content.json";
import mod05AuthenticationModule from "../courses/dotnet/graphql-dotnet/05-authentication/content.json";
import mod05AzureDatabasesProblemsModule from "../problems/cloud/azure/05-azure-databases-problems/content.json";
import mod05AzureSqlEfCoreModule from "../courses/dotnet/azure-for-aspnet/05-azure-sql-ef-core/content.json";
import mod05CachingStrategiesModule from "../courses/frontend/react-query/05-caching-strategies/content.json";
import mod05CiCdFundamentalsModule from "../courses/devops/devops/05-ci-cd-fundamentals/content.json";
import mod05CleanCodePracticesModule from "../courses/architecture/clean-code-csharp/05-clean-code-practices/content.json";
import mod05ClientSideCachingAdvancedModule from "../courses/frontend/apollo/05-client-side-caching-advanced/content.json";
import mod05ConcurrencyPatternsModule from "../courses/architecture/design-patterns/05-concurrency-patterns/content.json";
import mod05ControlPropsModule from "../courses/frontend/react-advanced-patterns/05-control-props/content.json";
import mod05DataOperationsDisconnectedModule from "../courses/dotnet/ef-core/05-data-operations-disconnected/content.json";
import mod05DependencyInjectionModule from "../courses/dotnet/aspnet-core-web-api/05-dependency-injection/content.json";
import mod05DependencyInjectionProblemsModule from "../problems/dotnet/aspnet-core/05-dependency-injection-problems/content.json";
import mod05DynamicProgrammingProblemsModule from "../problems/dotnet/csharp/05-dynamic-programming-problems/content.json";
import mod05E2eTestingModule from "../courses/frontend/react-testing/05-e2e-testing/content.json";
import mod05GenericComponentsModule from "../courses/frontend/typescript-for-react/05-generic-components/content.json";
import mod05GroupingAggregationSubqueriesModule from "../courses/database/sql-server/05-grouping-aggregation-subqueries/content.json";
import mod05JoiningDataModule from "../courses/dotnet/linq/05-joining-data/content.json";
import mod05LifecycleEffectsModule from "../courses/frontend/react-fundamentals/05-lifecycle-effects/content.json";
import mod05Oauth2FlowsDeepDiveModule from "../courses/dotnet/authentication-authorization/05-oauth2-flows-deep-dive/content.json";
import mod05PrismaMigrationsModule from "../courses/frontend/prisma/05-prisma-migrations/content.json";
import mod05RazorViewsModule from "../courses/dotnet/aspnet-core/05-razor-views/content.json";
import mod05RdsDynamodbModule from "../courses/dotnet/aws-for-aspnet/05-rds-dynamodb/content.json";
import mod05ReduxPatternsModule from "../courses/frontend/redux/05-redux-patterns/content.json";
import mod05SecureApiDesignModule from "../courses/architecture/fullstack-security/05-secure-api-design/content.json";
import mod05SerializationMappingModule from "../courses/dotnet/dotnet-nuget-packages/05-serialization-mapping/content.json";
import mod05StorageAndDataServicesModule from "../courses/cloud/azure/05-storage-and-data-services/content.json";
import mod05StorageServicesModule from "../courses/cloud/aws/05-storage-services/content.json";
import mod05SystemDesignModule from "../interview-qa/05-system-design/content.json";
import mod05TddModule from "../courses/dotnet/unit-testing-dotnet/05-tdd/content.json";
import mod06AdvancedAuthorizationModule from "../courses/dotnet/authentication-authorization/06-advanced-authorization/content.json";
import mod06AdvancedTestingPatternsModule from "../courses/frontend/react-testing/06-advanced-testing-patterns/content.json";
import mod06ArchitecturalPatternsModule from "../courses/architecture/design-patterns/06-architectural-patterns/content.json";
import mod06ArchitecturePatternsModule from "../courses/architecture/clean-code-csharp/06-architecture-patterns/content.json";
import mod06AzureNetworkingProblemsModule from "../problems/cloud/azure/06-azure-networking-problems/content.json";
import mod06ChangeTrackingModule from "../courses/dotnet/ef-core/06-change-tracking/content.json";
import mod06CiCdModernToolsModule from "../courses/devops/devops/06-ci-cd-modern-tools/content.json";
import mod06CloudwatchCicdModule from "../courses/dotnet/aws-for-aspnet/06-cloudwatch-cicd/content.json";
import mod06ContextRefsModule from "../courses/frontend/react-fundamentals/06-context-refs/content.json";
import mod06DataModificationDmlModule from "../courses/database/sql-server/06-data-modification-dml/content.json";
import mod06DatabasesModule from "../courses/cloud/aws/06-databases/content.json";
import mod06DatabasesAndCachingModule from "../courses/cloud/azure/06-databases-and-caching/content.json";
import mod06DependencyInjectionModule from "../courses/dotnet/aspnet-core/06-dependency-injection/content.json";
import mod06DependencySecurityModule from "../courses/architecture/fullstack-security/06-dependency-security/content.json";
import mod06EfCoreProblemsModule from "../problems/dotnet/aspnet-core/06-ef-core-problems/content.json";
import mod06ErrorHandlingModule from "../courses/dotnet/csharp-fundamentals/06-error-handling/content.json";
import mod06ErrorHandlingOptimisticModule from "../courses/frontend/apollo/06-error-handling-optimistic/content.json";
import mod06ErrorHandlingValidationModule from "../courses/dotnet/aspnet-core-web-api/06-error-handling-validation/content.json";
import mod06InterfacesAbstractClassesModule from "../courses/fundamentals/oops-concepts/06-interfaces-abstract-classes/content.json";
import mod06MessagingEventsModule from "../courses/dotnet/dotnet-nuget-packages/06-messaging-events/content.json";
import mod06MonitoringCachingCicdModule from "../courses/dotnet/azure-for-aspnet/06-monitoring-caching-cicd/content.json";
import mod06OfflineSupportPersistenceModule from "../courses/frontend/react-query/06-offline-support-persistence/content.json";
import mod06PerformanceModule from "../courses/dotnet/graphql-dotnet/06-performance/content.json";
import mod06PerformancePatternsModule from "../courses/frontend/react-advanced-patterns/06-performance-patterns/content.json";
import mod06PrismaAdvancedFeaturesModule from "../courses/frontend/prisma/06-prisma-advanced-features/content.json";
import mod06ProductionPatternsModule from "../courses/ai/dotnet-ai-backend/06-production-patterns/content.json";
import mod06RapidFireModule from "../interview-qa/06-rapid-fire/content.json";
import mod06ReactPatternsModule from "../courses/frontend/typescript-for-react/06-react-patterns/content.json";
import mod06ReduxTestingModule from "../courses/frontend/redux/06-redux-testing/content.json";
import mod06SetOperationsModule from "../courses/dotnet/linq/06-set-operations/content.json";
import mod06SortingSearchingProblemsModule from "../problems/dotnet/csharp/06-sorting-searching-problems/content.json";
import mod06TestingPatternsModule from "../courses/dotnet/unit-testing-dotnet/06-testing-patterns/content.json";
import mod07AggregationOperatorsModule from "../courses/dotnet/linq/07-aggregation-operators/content.json";
import mod07AuthenticationAuthorizationProblemsModule from "../problems/dotnet/aspnet-core/07-authentication-authorization-problems/content.json";
import mod07AuthenticationBasicsModule from "../courses/dotnet/aspnet-core-web-api/07-authentication-basics/content.json";
import mod07AzureFunctionsModule from "../courses/dotnet/azure-for-aspnet/07-azure-functions/content.json";
import mod07AzureSecurityProblemsModule from "../problems/cloud/azure/07-azure-security-problems/content.json";
import mod07CodeCoverageModule from "../courses/dotnet/unit-testing-dotnet/07-code-coverage/content.json";
import mod07CustomHooksArchitectureModule from "../courses/frontend/react-advanced-patterns/07-custom-hooks-architecture/content.json";
import mod07DatabaseSchemaTableObjectsModule from "../courses/database/sql-server/07-database-schema-table-objects/content.json";
import mod07DesignPrinciplesModule from "../courses/fundamentals/oops-concepts/07-design-principles/content.json";
import mod07EnvironmentSecretsModule from "../courses/architecture/fullstack-security/07-environment-secrets/content.json";
import mod07ErrorHandlingModule from "../courses/dotnet/graphql-dotnet/07-error-handling/content.json";
import mod07IdentitySecurityAndConfigurationModule from "../courses/cloud/azure/07-identity-security-and-configuration/content.json";
import mod07InterviewTrapsModule from "../interview-qa/07-interview-traps/content.json";
import mod07LoadBalancingApplicationIntegrationModule from "../courses/cloud/aws/07-load-balancing-application-integration/content.json";
import mod07MiddlewarePipelineModule from "../courses/dotnet/aspnet-core/07-middleware-pipeline/content.json";
import mod07ModernCsharpModule from "../courses/dotnet/csharp-fundamentals/07-modern-csharp/content.json";
import mod07PrefetchingSsrModule from "../courses/frontend/react-query/07-prefetching-ssr/content.json";
import mod07PrismaNextjsIntegrationModule from "../courses/frontend/prisma/07-prisma-nextjs-integration/content.json";
import mod07QueryingModule from "../courses/dotnet/ef-core/07-querying/content.json";
import mod07ReactRouterModule from "../courses/frontend/react-fundamentals/07-react-router/content.json";
import mod07RecursionProblemsModule from "../problems/dotnet/csharp/07-recursion-problems/content.json";
import mod07ReduxAdvancedConceptsModule from "../courses/frontend/redux/07-redux-advanced-concepts/content.json";
import mod07RefreshTokenStrategiesModule from "../courses/dotnet/authentication-authorization/07-refresh-token-strategies/content.json";
import mod07SqsSnsEventsModule from "../courses/dotnet/aws-for-aspnet/07-sqs-sns-events/content.json";
import mod07SubscriptionsRealtimeModule from "../courses/frontend/apollo/07-subscriptions-realtime/content.json";
import mod07TestingBestPracticesModule from "../courses/frontend/typescript-for-react/07-testing-best-practices/content.json";
import mod07TestingQualityModule from "../courses/dotnet/dotnet-nuget-packages/07-testing-quality/content.json";
import mod07TestingReactQueryModule from "../courses/frontend/react-testing/07-testing-react-query/content.json";
import mod08AzureAiServicesProblemsModule from "../problems/cloud/azure/08-azure-ai-services-problems/content.json";
import mod08BitwiseProblemsModule from "../problems/dotnet/csharp/08-bitwise-problems/content.json";
import mod08DataTypesModule from "../courses/database/sql-server/08-data-types/content.json";
import mod08EntityFrameworkCoreModule from "../courses/dotnet/aspnet-core/08-entity-framework-core/content.json";
import mod08InheritanceStrategiesModule from "../courses/dotnet/ef-core/08-inheritance-strategies/content.json";
import mod08LambdaServerlessModule from "../courses/dotnet/aws-for-aspnet/08-lambda-serverless/content.json";
import mod08LocalStateManagementModule from "../courses/frontend/apollo/08-local-state-management/content.json";
import mod08LoggingConfigurationModule from "../courses/dotnet/aspnet-core-web-api/08-logging-configuration/content.json";
import mod08NetworkingAndApiPlatformsModule from "../courses/cloud/azure/08-networking-and-api-platforms/content.json";
import mod08PerformanceOptimizationModule from "../courses/frontend/react-query/08-performance-optimization/content.json";
import mod08PerformanceOptimizationModule1 from "../interview-qa/08-performance-optimization/content.json";
import mod08QuantifiersElementOperatorsModule from "../courses/dotnet/linq/08-quantifiers-element-operators/content.json";
import mod08ReduxRealWorldModule from "../courses/frontend/redux/08-redux-real-world/content.json";
import mod08SecurityCryptographyModule from "../courses/dotnet/dotnet-nuget-packages/08-security-cryptography/content.json";
import mod08SecurityTestingModule from "../courses/architecture/fullstack-security/08-security-testing/content.json";
import mod08ServerlessModule from "../courses/cloud/aws/08-serverless/content.json";
import mod08ServiceBusEventsModule from "../courses/dotnet/azure-for-aspnet/08-service-bus-events/content.json";
import mod08SsoIdentityProvidersModule from "../courses/dotnet/authentication-authorization/08-sso-identity-providers/content.json";
import mod08StateMachinesXstateModule from "../courses/frontend/react-advanced-patterns/08-state-machines-xstate/content.json";
import mod08StylingModule from "../courses/frontend/react-fundamentals/08-styling/content.json";
import mod08TestingDebuggingProblemsModule from "../problems/dotnet/aspnet-core/08-testing-debugging-problems/content.json";
import mod09AuthenticationAuthorizationModule from "../courses/dotnet/aspnet-core/09-authentication-authorization/content.json";
import mod09CicdPipelinesModule from "../interview-qa/09-cicd-pipelines/content.json";
import mod09ComponentCompositionStrategiesModule from "../courses/frontend/react-advanced-patterns/09-component-composition-strategies/content.json";
import mod09ConstraintsModule from "../courses/database/sql-server/09-constraints/content.json";
import mod09ContainersKubernetesModule from "../courses/cloud/aws/09-containers-kubernetes/content.json";
import mod09MessagingAndEventDrivenArchitectureModule from "../courses/cloud/azure/09-messaging-and-event-driven-architecture/content.json";
import mod09MigrationsModule from "../courses/dotnet/ef-core/09-migrations/content.json";
import mod09PartitioningOperatorsModule from "../courses/dotnet/linq/09-partitioning-operators/content.json";
import mod09PerformanceOptimizationModule from "../courses/frontend/react-fundamentals/09-performance-optimization/content.json";
import mod09RealWorldPatternsModule from "../courses/frontend/react-query/09-real-world-patterns/content.json";
import mod09SecurityBestPracticesModule from "../courses/dotnet/authentication-authorization/09-security-best-practices/content.json";
import mod09SsrNextjsPerformanceModule from "../courses/frontend/apollo/09-ssr-nextjs-performance/content.json";
import mod09UtilitiesHelpersModule from "../courses/dotnet/dotnet-nuget-packages/09-utilities-helpers/content.json";
import mod10AdvancedFeaturesModule from "../courses/dotnet/ef-core/10-advanced-features/content.json";
import mod10AdvancedHookPatternsModule from "../courses/frontend/react-advanced-patterns/10-advanced-hook-patterns/content.json";
import mod10ConversionGenerationOperatorsModule from "../courses/dotnet/linq/10-conversion-generation-operators/content.json";
import mod10DevopsCicdModule from "../courses/cloud/aws/10-devops-cicd/content.json";
import mod10IndexesModule from "../courses/database/sql-server/10-indexes/content.json";
import mod10ObservabilityAndApplicationMonitoringModule from "../courses/cloud/azure/10-observability-and-application-monitoring/content.json";
import mod10WebApiRestModule from "../courses/dotnet/aspnet-core/10-web-api-rest/content.json";
import mod11AdvancedLinqConceptsModule from "../courses/dotnet/linq/11-advanced-linq-concepts/content.json";
import mod11ApplicationDeploymentAndDevopsModule from "../courses/cloud/azure/11-application-deployment-and-devops/content.json";
import mod11DatabaseFirstDiagnosticsModule from "../courses/dotnet/ef-core/11-database-first-diagnostics/content.json";
import mod11MonitoringLoggingObservabilityModule from "../courses/cloud/aws/11-monitoring-logging-observability/content.json";
import mod11TestingDebuggingModule from "../courses/dotnet/aspnet-core/11-testing-debugging/content.json";
import mod11ViewsModule from "../courses/database/sql-server/11-views/content.json";
import mod12DeploymentProductionModule from "../courses/dotnet/aspnet-core/12-deployment-production/content.json";
import mod12InfrastructureAsCodeAndAutomationModule from "../courses/cloud/azure/12-infrastructure-as-code-and-automation/content.json";
import mod12PerformanceBulkOperationsModule from "../courses/dotnet/ef-core/12-performance-bulk-operations/content.json";
import mod12SecurityServicesModule from "../courses/cloud/aws/12-security-services/content.json";
import mod12StoredProceduresFunctionsModule from "../courses/database/sql-server/12-stored-procedures-functions/content.json";
import mod13AiServicesForAzureDevelopersModule from "../courses/cloud/azure/13-ai-services-for-azure-developers/content.json";
import mod13AnalyticsBigDataModule from "../courses/cloud/aws/13-analytics-big-data/content.json";
import mod13TriggersModule from "../courses/database/sql-server/13-triggers/content.json";
import mod14AiMachineLearningModule from "../courses/cloud/aws/14-ai-machine-learning/content.json";
import mod14TransactionsErrorHandlingBackupModule from "../courses/database/sql-server/14-transactions-error-handling-backup/content.json";
import mod15AdvancedTopicsModule from "../courses/database/sql-server/15-advanced-topics/content.json";
import mod15DeveloperToolsApplicationServicesModule from "../courses/cloud/aws/15-developer-tools-application-services/content.json";
import mod16IdentityForApplicationsModule from "../courses/cloud/aws/16-identity-for-applications/content.json";
import mod16PerformanceTuningModule from "../courses/database/sql-server/16-performance-tuning/content.json";
import mod17MigrationHybridCloudModule from "../courses/cloud/aws/17-migration-hybrid-cloud/content.json";
import mod17SecurityHardeningModule from "../courses/database/sql-server/17-security-hardening/content.json";
import mod18HighAvailabilityDrModule from "../courses/database/sql-server/18-high-availability-dr/content.json";
import mod18InfrastructureAutomationModule from "../courses/cloud/aws/18-infrastructure-automation/content.json";
import mod19DataWarehousingModule from "../courses/database/sql-server/19-data-warehousing/content.json";
import mod19HighAvailabilityDisasterRecoveryModule from "../courses/cloud/aws/19-high-availability-disaster-recovery/content.json";
import mod20AwsArchitectureDesignPatternsModule from "../courses/cloud/aws/20-aws-architecture-design-patterns/content.json";
import mod20AzureSqlModule from "../courses/database/sql-server/20-azure-sql/content.json";
import mod21ModernDataToolsModule from "../courses/database/sql-server/21-modern-data-tools/content.json";
import advancedAsyncConcurrencyThreadingModule from "../courses/dotnet/csharp-fundamentals/advanced-async-concurrency-threading/content.json";
import advancedCRuntimeMemoryConcurrencyModule from "../courses/dotnet/csharp-fundamentals/advanced-c-runtime-memory-concurrency/content.json";
import advancedGitWorkflowsModule from "../courses/devops/git-linux-developer-workflow/advanced-git-workflows/content.json";
import advancedPatternsModule from "../courses/dotnet/dotnet-nuget-packages/advanced-patterns/content.json";
import advancedPatternsModule1 from "../courses/frontend/yarn-npm-packages/advanced-patterns/content.json";
import advancedRebaseModule from "../courses/devops/git-linux-developer-workflow/advanced-rebase/content.json";
import advancedTopicsModule from "../courses/database/postgresql/advanced-topics/content.json";
import advancedTypeModelingRuntimeSafetyModule from "../courses/frontend/typescript-for-react/advanced-type-modeling-runtime-safety/content.json";
import aiBasicsModule from "../courses/ai/ai-basics/content.json";
import airbnbBookingModule from "../problems/architecture/lld/airbnb-booking/content.json";
import airbnbBookingHldModule from "../problems/architecture/hld/airbnb-booking-hld/content.json";
import amazonEcommerceModule from "../problems/architecture/lld/amazon-ecommerce/content.json";
import amazonEcommerceHldModule from "../problems/architecture/hld/amazon-ecommerce-hld/content.json";
import animationModule from "../courses/frontend/yarn-npm-packages/animation/content.json";
import apiDesignModule from "../courses/architecture/system-design-interviews/api-design/content.json";
import apiDesignModule1 from "../problems/backend/api-design/content.json";
import apiDocumentationSwaggerModule from "../courses/dotnet/dotnet-nuget-packages/api-documentation-swagger/content.json";
import apiGatewayPatternsModule from "../courses/architecture/microservices-architecture/api-gateway-patterns/content.json";
import apiVersioningProblemsModule from "../problems/backend/api-design/api-versioning-problems/content.json";
import apolloModule from "../courses/frontend/apollo/content.json";
import apolloModule1 from "../cheatsheet/frontend/apollo/content.json";
import appRouterRenderingModule from "../courses/frontend/next-js-full-stack-react/app-router-rendering/content.json";
import architectureFollowUpsModule from "../interview-qa/architecture-follow-ups/content.json";
import aspNetCoreInternalsProductionHostingModule from "../courses/dotnet/aspnet-core/asp-net-core-internals-production-hosting/content.json";
import aspnetCoreModule from "../courses/dotnet/aspnet-core/content.json";
import aspnetCoreModule1 from "../problems/dotnet/aspnet-core/content.json";
import aspnetCoreModule2 from "../cheatsheet/dotnet/aspnet-core/content.json";
import aspnetCoreWebApiModule from "../courses/dotnet/aspnet-core-web-api/content.json";
import aspnetSystemDesignModule from "../problems/architecture/system-design/aspnet-system-design/content.json";
import atmMachineModule from "../problems/architecture/lld/atm-machine/content.json";
import authenticationAuthorizationModule from "../courses/dotnet/authentication-authorization/content.json";
import awsModule from "../courses/cloud/aws/content.json";
import awsModule1 from "../cheatsheet/cloud/aws/content.json";
import awsForAspnetModule from "../courses/dotnet/aws-for-aspnet/content.json";
import azureModule from "../courses/cloud/azure/content.json";
import azureModule1 from "../problems/cloud/azure/content.json";
import azureModule2 from "../cheatsheet/cloud/azure/content.json";
import azureForAspnetModule from "../courses/dotnet/azure-for-aspnet/content.json";
import backendDatabaseFollowUpsModule from "../interview-qa/backend-database-follow-ups/content.json";
import bankingAppModule from "../problems/architecture/lld/banking-app/content.json";
import behavioralInterviewQuestionsModule from "../interview-qa/behavioral-interview-questions/content.json";
import browserReactPerformanceModule from "../courses/architecture/frontend-performance-engineering/browser-react-performance/content.json";
import buildOptimizationModule from "../courses/architecture/frontend-performance-engineering/build-optimization/content.json";
import buildToolsModule from "../courses/frontend/yarn-npm-packages/build-tools/content.json";
import cNetFollowUpsModule from "../interview-qa/c-net-follow-ups/content.json";
import cacheInvalidationModule from "../courses/architecture/redis-caching-strategies/cache-invalidation/content.json";
import cachingInAspnetCoreModule from "../courses/architecture/redis-caching-strategies/caching-in-aspnet-core/content.json";
import cachingInNodejsModule from "../courses/architecture/redis-caching-strategies/caching-in-nodejs/content.json";
import cachingPatternsModule from "../courses/architecture/redis-caching-strategies/caching-patterns/content.json";
import cachingStrategiesModule from "../courses/architecture/system-design-interviews/caching-strategies/content.json";
import capacityEstimationModule from "../courses/architecture/system-design-interviews/capacity-estimation/content.json";
import chatSystemHldModule from "../problems/architecture/hld/chat-system-hld/content.json";
import ciCdSafeDeliveryModule from "../courses/devops/devops/ci-cd-safe-delivery/content.json";
import cleanCodeCsharpModule from "../courses/architecture/clean-code-csharp/content.json";
import cloudIntegrationModule from "../courses/dotnet/dotnet-nuget-packages/cloud-integration/content.json";
import commonSystemDesignsModule from "../courses/architecture/system-design-interviews/common-system-designs/content.json";
import concurrencyProductionDatabaseProblemsModule from "../courses/database/sql-server/concurrency-production-database-problems/content.json";
import consistencyAvailabilityModule from "../courses/architecture/system-design-interviews/consistency-availability/content.json";
import constraintsModule from "../courses/database/postgresql/constraints/content.json";
import csharpModule from "../problems/dotnet/csharp/content.json";
import csharpModule1 from "../cheatsheet/dotnet/csharp/content.json";
import csharpFundamentalsModule from "../courses/dotnet/csharp-fundamentals/content.json";
import dataFetchingPatternsModule from "../courses/frontend/next-js-full-stack-react/data-fetching-patterns/content.json";
import dataManagementModule from "../courses/architecture/microservices-architecture/data-management/content.json";
import dataModificationDmlModule from "../courses/database/postgresql/data-modification-dml/content.json";
import dataStructuresDeepDiveModule from "../courses/fundamentals/programming-computer-web-foundations/data-structures-deep-dive/content.json";
import dataTypesModule from "../courses/database/postgresql/data-types/content.json";
import databaseDesignModule from "../courses/architecture/system-design-interviews/database-design/content.json";
import databaseDesignModule1 from "../problems/database/database-design/content.json";
import databaseInternalsQueryOptimizationModule from "../courses/database/sql-server/database-internals-query-optimization/content.json";
import databaseSchemaTableObjectsModule from "../courses/database/postgresql/database-schema-table-objects/content.json";
import deadLetterQueuesModule from "../courses/architecture/message-queues-event-streaming/dead-letter-queues/content.json";
import designPatternsModule from "../courses/architecture/design-patterns/content.json";
import devopsModule from "../courses/devops/devops/content.json";
import devopsSystemDesignModule from "../problems/architecture/system-design/devops-system-design/content.json";
import distributedCachingModule from "../courses/architecture/redis-caching-strategies/distributed-caching/content.json";
import distributedSystemsFundamentalsModule from "../problems/architecture/system-design/distributed-systems-fundamentals/content.json";
import distributedSystemsFundamentalsModule1 from "../problems/architecture/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/content.json";
import distributedTransactionsModule from "../courses/architecture/microservices-architecture/distributed-transactions/content.json";
import dockerComposeModule from "../cheatsheet/devops/docker-compose/content.json";
import dotnetAiBackendModule from "../courses/ai/dotnet-ai-backend/content.json";
import dotnetNugetPackagesModule from "../courses/dotnet/dotnet-nuget-packages/content.json";
import dropboxStorageModule from "../problems/architecture/hld/dropbox-storage/content.json";
import ecommerceHldModule from "../problems/architecture/hld/ecommerce-hld/content.json";
import efCoreModule from "../courses/dotnet/ef-core/content.json";
import efCoreModule1 from "../cheatsheet/dotnet/ef-core/content.json";
import efCorePerformanceOrmTradeOffsModule from "../courses/dotnet/ef-core/ef-core-performance-orm-trade-offs/content.json";
import elevatorSystemModule from "../problems/architecture/lld/elevator-system/content.json";
import errorHandlingDesignModule from "../problems/backend/api-design/error-handling-design/content.json";
import eventDrivenArchitectureModule from "../courses/architecture/microservices-architecture/event-driven-architecture/content.json";
import eventSourcingModule from "../courses/architecture/message-queues-event-streaming/event-sourcing/content.json";
import eventStreamingKafkaModule from "../courses/architecture/message-queues-event-streaming/event-streaming-kafka/content.json";
import facebookNewsFeedModule from "../problems/architecture/lld/facebook-news-feed/content.json";
import foodDeliveryModule from "../problems/architecture/lld/food-delivery/content.json";
import foodDeliveryHldModule from "../problems/architecture/hld/food-delivery-hld/content.json";
import formsModule from "../courses/frontend/yarn-npm-packages/forms/content.json";
import frontendFrameworksModule from "../courses/frontend/yarn-npm-packages/frontend-frameworks/content.json";
import frontendPerformanceEngineeringModule from "../courses/architecture/frontend-performance-engineering/content.json";
import fullStackApiDesignModule from "../courses/frontend/next-js-full-stack-react/full-stack-api-design/content.json";
import fullStackSeniorProjectsModule from "../problems/architecture/full-stack-senior-projects/content.json";
import fullstackSecurityModule from "../courses/architecture/fullstack-security/content.json";
import gettingStartedModule from "../courses/database/postgresql/getting-started/content.json";
import gitBisectDebuggingModule from "../courses/devops/git-linux-developer-workflow/git-bisect-debugging/content.json";
import gitForSeniorEngineersModule from "../courses/devops/git-linux-developer-workflow/git-for-senior-engineers/content.json";
import gitHooksModule from "../courses/devops/git-linux-developer-workflow/git-hooks/content.json";
import gitInternalsModule from "../courses/devops/git-linux-developer-workflow/git-internals/content.json";
import gitLinuxDeveloperWorkflowModule from "../courses/devops/git-linux-developer-workflow/content.json";
import gitPerformanceModule from "../courses/devops/git-linux-developer-workflow/git-performance/content.json";
import gitSecurityModule from "../courses/devops/git-linux-developer-workflow/git-security/content.json";
import gitWorkflowsModule from "../courses/devops/git-linux-developer-workflow/git-workflows/content.json";
import googleDriveStorageModule from "../problems/architecture/lld/google-drive-storage/content.json";
import googleSearchModule from "../problems/architecture/hld/google-search/content.json";
import graphqlModule from "../cheatsheet/dotnet/graphql/content.json";
import graphqlDotnetModule from "../courses/dotnet/graphql-dotnet/content.json";
import groupingAggregationSubqueriesModule from "../courses/database/postgresql/grouping-aggregation-subqueries/content.json";
import highAvailabilityDrModule from "../courses/database/postgresql/high-availability-dr/content.json";
import hldModule from "../problems/architecture/hld/content.json";
import hotelManagementModule from "../problems/architecture/lld/hotel-management/content.json";
import httpClientsModule from "../courses/frontend/yarn-npm-packages/http-clients/content.json";
import httpClientsResilienceModule from "../courses/dotnet/dotnet-nuget-packages/http-clients-resilience/content.json";
import indexOptimizationModule from "../problems/database/database-design/index-optimization/content.json";
import indexesModule from "../courses/database/postgresql/indexes/content.json";
import instagramFeedModule from "../problems/architecture/hld/instagram-feed/content.json";
import instagramPhotoSharingModule from "../problems/architecture/lld/instagram-photo-sharing/content.json";
import javascriptModule from "../cheatsheet/frontend/javascript/content.json";
import joinsModule from "../courses/database/postgresql/joins/content.json";
import leadershipOwnershipModule from "../interview-qa/leadership-ownership/content.json";
import libraryManagementModule from "../problems/architecture/lld/library-management/content.json";
import linkedinProfessionalModule from "../problems/architecture/lld/linkedin-professional/content.json";
import linkedinProfessionalHldModule from "../problems/architecture/hld/linkedin-professional-hld/content.json";
import linqModule from "../courses/dotnet/linq/content.json";
import linqModule1 from "../cheatsheet/dotnet/linq/content.json";
import linuxProductionTroubleshootingModule from "../courses/devops/git-linux-developer-workflow/linux-production-troubleshooting/content.json";
import lldModule from "../problems/architecture/lld/content.json";
import loadBalancingModule from "../courses/architecture/system-design-interviews/load-balancing/content.json";
import loggingMonitoringModule from "../courses/dotnet/dotnet-nuget-packages/logging-monitoring/content.json";
import messageBrokerSelectionModule from "../courses/architecture/message-queues-event-streaming/message-broker-selection/content.json";
import messageOrderingIdempotencyModule from "../courses/architecture/message-queues-event-streaming/message-ordering-idempotency/content.json";
import messageQueueFundamentalsModule from "../courses/architecture/message-queues-event-streaming/message-queue-fundamentals/content.json";
import messageQueuesEventStreamingModule from "../courses/architecture/message-queues-event-streaming/content.json";
import microservicesArchitectureModule from "../courses/architecture/microservices-architecture/content.json";
import microservicesFundamentalsModule from "../courses/architecture/microservices-architecture/microservices-fundamentals/content.json";
import mockInterviewScenariosModule from "../interview-qa/mock-interview-scenarios/content.json";
import modernDataToolsModule from "../courses/database/postgresql/modern-data-tools/content.json";
import modernStateApplicationArchitectureModule from "../courses/frontend/react-advanced-patterns/modern-state-application-architecture/content.json";
import modernWebSecurityIdentityModule from "../courses/architecture/fullstack-security/modern-web-security-identity/content.json";
import movieTicketBookingModule from "../problems/architecture/lld/movie-ticket-booking/content.json";
import netflixStreamingModule from "../problems/architecture/lld/netflix-streaming/content.json";
import networkingProtocolsModule from "../courses/fundamentals/programming-computer-web-foundations/networking-protocols/content.json";
import nextJsFullStackReactModule from "../courses/frontend/next-js-full-stack-react/content.json";
import normalizationExercisesModule from "../problems/database/database-design/normalization-exercises/content.json";
import notificationSystemModule from "../problems/architecture/hld/notification-system/content.json";
import observabilityModule from "../courses/architecture/microservices-architecture/observability/content.json";
import oopsConceptsModule from "../courses/fundamentals/oops-concepts/content.json";
import parkingLotSystemModule from "../problems/architecture/lld/parking-lot-system/content.json";
import paymentGatewayModule from "../problems/architecture/lld/payment-gateway/content.json";
import paymentGatewayHldModule from "../problems/architecture/hld/payment-gateway-hld/content.json";
import performanceObservabilityModule from "../courses/dotnet/aspnet-core/performance-observability/content.json";
import performanceOptimizationModule from "../courses/architecture/redis-caching-strategies/performance-optimization/content.json";
import performanceTuningModule from "../courses/database/postgresql/performance-tuning/content.json";
import phase1FoundationsAiToolsOverviewModule from "../courses/ai/ai-basics/phase-1-foundations-ai-tools-overview/content.json";
import phase1FoundationsPromptingBasicsModule from "../courses/ai/ai-basics/phase-1-foundations-prompting-basics/content.json";
import postgresqlModule from "../courses/database/postgresql/content.json";
import prismaModule from "../courses/frontend/prisma/content.json";
import productionApiDesignReliabilityModule from "../courses/dotnet/aspnet-core-web-api/production-api-design-reliability/content.json";
import productionArchitectureReliabilityCostModule from "../courses/cloud/azure/production-architecture-reliability-cost/content.json";
import productionDockerContainerSecurityModule from "../courses/devops/devops/production-docker-container-security/content.json";
import productionKubernetesDay2OperationsModule from "../courses/devops/devops/production-kubernetes-day-2-operations/content.json";
import productionOwnershipModule from "../courses/fundamentals/senior-software-engineering/production-ownership/content.json";
import productionReadinessModule from "../courses/devops/git-linux-developer-workflow/production-readiness/content.json";
import programmingComputerFundamentalsModule from "../courses/fundamentals/programming-computer-web-foundations/programming-computer-fundamentals/content.json";
import programmingComputerWebFoundationsModule from "../courses/fundamentals/programming-computer-web-foundations/content.json";
import project1EnterpriseExpensePlatformModule from "../problems/architecture/full-stack-senior-projects/project-1-enterprise-expense-platform/content.json";
import project2CollaborativeCommunicationPlatformModule from "../problems/architecture/full-stack-senior-projects/project-2-collaborative-communication-platform/content.json";
import project3ProductionIncidentSimulatorModule from "../problems/architecture/full-stack-senior-projects/project-3-production-incident-simulator/content.json";
import publishSubscribePatternsModule from "../courses/architecture/message-queues-event-streaming/publish-subscribe-patterns/content.json";
import queryOptimizationModule from "../problems/database/database-design/query-optimization/content.json";
import queryingDataModule from "../courses/database/postgresql/querying-data/content.json";
import rateLimiterModule from "../problems/architecture/hld/rate-limiter/content.json";
import rateLimitingDesignModule from "../problems/backend/api-design/rate-limiting-design/content.json";
import reactModule from "../cheatsheet/frontend/react/content.json";
import reactAdvancedPatternsModule from "../courses/frontend/react-advanced-patterns/content.json";
import reactDataFetchingModule from "../courses/frontend/yarn-npm-packages/react-data-fetching/content.json";
import reactEcosystemModule from "../courses/frontend/yarn-npm-packages/react-ecosystem/content.json";
import reactFormsInputModule from "../courses/frontend/yarn-npm-packages/react-forms-input/content.json";
import reactFrontendFollowUpsModule from "../interview-qa/react-frontend-follow-ups/content.json";
import reactFundamentalsModule from "../courses/frontend/react-fundamentals/content.json";
import reactHooksPatternsModule from "../courses/frontend/yarn-npm-packages/react-hooks-patterns/content.json";
import reactInternalsModernRenderingModule from "../courses/frontend/react-fundamentals/react-internals-modern-rendering/content.json";
import reactPerformanceModule from "../courses/frontend/yarn-npm-packages/react-performance/content.json";
import reactQueryModule from "../courses/frontend/react-query/content.json";
import reactRouterModule from "../cheatsheet/frontend/react-router/content.json";
import reactSystemDesignModule from "../problems/architecture/system-design/react-system-design/content.json";
import reactTestingModule from "../courses/frontend/react-testing/content.json";
import reactTestingModule1 from "../courses/frontend/yarn-npm-packages/react-testing/content.json";
import realWorldCaseStudiesModule from "../courses/architecture/system-design-interviews/real-world-case-studies/content.json";
import redisCachingStrategiesModule from "../courses/architecture/redis-caching-strategies/content.json";
import redisFundamentalsModule from "../courses/architecture/redis-caching-strategies/redis-fundamentals/content.json";
import redisUseCasesModule from "../courses/architecture/redis-caching-strategies/redis-use-cases/content.json";
import reduxModule from "../courses/frontend/redux/content.json";
import reduxModule1 from "../cheatsheet/frontend/redux/content.json";
import requirementClarificationModule from "../courses/architecture/system-design-interviews/requirement-clarification/content.json";
import resiliencePatternsModule from "../courses/architecture/microservices-architecture/resilience-patterns/content.json";
import restApiDesignScenariosModule from "../problems/backend/api-design/rest-api-design-scenarios/content.json";
import rideSharingHldModule from "../problems/architecture/hld/ride-sharing-hld/content.json";
import routingModule from "../courses/frontend/yarn-npm-packages/routing/content.json";
import runtimePerformanceModule from "../courses/architecture/frontend-performance-engineering/runtime-performance/content.json";
import scalabilityPatternsModule from "../courses/architecture/system-design-interviews/scalability-patterns/content.json";
import schemaDesignScenariosModule from "../problems/database/database-design/schema-design-scenarios/content.json";
import searchAutocompleteModule from "../problems/architecture/hld/search-autocomplete/content.json";
import securityHardeningModule from "../courses/database/postgresql/security-hardening/content.json";
import securityInMicroservicesModule from "../courses/architecture/microservices-architecture/security-in-microservices/content.json";
import seniorEngineeringJudgmentArchitectureDecisionsModule from "../courses/architecture/clean-code-csharp/senior-engineering-judgment-architecture-decisions/content.json";
import seniorSoftwareEngineeringModule from "../courses/fundamentals/senior-software-engineering/content.json";
import serviceDiscoveryModule from "../courses/architecture/microservices-architecture/service-discovery/content.json";
import serviceToServiceCommunicationModule from "../courses/architecture/microservices-architecture/service-to-service-communication/content.json";
import setOperationsModule from "../courses/database/postgresql/set-operations/content.json";
import slackMessagingModule from "../problems/architecture/lld/slack-messaging/content.json";
import slackMessagingHldModule from "../problems/architecture/hld/slack-messaging-hld/content.json";
import spotifyMusicModule from "../problems/architecture/lld/spotify-music/content.json";
import spotifyMusicHldModule from "../problems/architecture/hld/spotify-music-hld/content.json";
import sqlModule from "../problems/database/sql/content.json";
import sqlServerModule from "../courses/database/sql-server/content.json";
import sqlServerModule1 from "../cheatsheet/database/sql-server/content.json";
import stateManagementModule from "../courses/frontend/next-js-full-stack-react/state-management/content.json";
import stateManagementModule1 from "../courses/frontend/yarn-npm-packages/state-management/content.json";
import storedProceduresFunctionsModule from "../courses/database/postgresql/stored-procedures-functions/content.json";
import streamProcessingModule from "../courses/architecture/message-queues-event-streaming/stream-processing/content.json";
import stylingModule from "../courses/frontend/yarn-npm-packages/styling/content.json";
import submodulesSubtreesModule from "../courses/devops/git-linux-developer-workflow/submodules-subtrees/content.json";
import systemDesignModule from "../problems/architecture/system-design/content.json";
import systemDesignForSeniorsModule from "../courses/fundamentals/senior-software-engineering/system-design-for-seniors/content.json";
import systemDesignFrameworkModule from "../courses/architecture/system-design-interviews/system-design-framework/content.json";
import systemDesignInterviewsModule from "../courses/architecture/system-design-interviews/content.json";
import technicalDecisionMakingModule from "../courses/fundamentals/senior-software-engineering/technical-decision-making/content.json";
import technicalLeadershipModule from "../courses/fundamentals/senior-software-engineering/technical-leadership/content.json";
import testingModule from "../courses/frontend/yarn-npm-packages/testing/content.json";
import testingStrategyForSeniorFrontendEngineersModule from "../courses/frontend/react-testing/testing-strategy-for-senior-frontend-engineers/content.json";
import ticTacToeGameModule from "../problems/architecture/lld/tic-tac-toe-game/content.json";
import ticketBookingHldModule from "../problems/architecture/hld/ticket-booking-hld/content.json";
import transactionsErrorHandlingBackupModule from "../courses/database/postgresql/transactions-error-handling-backup/content.json";
import triggersModule from "../courses/database/postgresql/triggers/content.json";
import twitterSocialModule from "../problems/architecture/lld/twitter-social/content.json";
import twitterSocialHldModule from "../problems/architecture/hld/twitter-social-hld/content.json";
import typescriptModule from "../cheatsheet/frontend/typescript/content.json";
import typescriptForReactModule from "../courses/frontend/typescript-for-react/content.json";
import uberRideSharingModule from "../problems/architecture/lld/uber-ride-sharing/content.json";
import uberRideSharingHldModule from "../problems/architecture/hld/uber-ride-sharing-hld/content.json";
import unitTestingDotnetModule from "../courses/dotnet/unit-testing-dotnet/content.json";
import urlShortenerModule from "../problems/architecture/hld/url-shortener/content.json";
import utilitiesModule from "../courses/frontend/yarn-npm-packages/utilities/content.json";
import validationAuthorizationModule from "../courses/dotnet/dotnet-nuget-packages/validation-authorization/content.json";
import vendingMachineModule from "../problems/architecture/lld/vending-machine/content.json";
import videoStreamingHldModule from "../problems/architecture/hld/video-streaming-hld/content.json";
import viewsModule from "../courses/database/postgresql/views/content.json";
import webCrawlerModule from "../problems/architecture/hld/web-crawler/content.json";
import webNetworkingFundamentalsModule from "../courses/fundamentals/programming-computer-web-foundations/web-networking-fundamentals/content.json";
import whatsappChatModule from "../problems/architecture/lld/whatsapp-chat/content.json";
import whatsappChatHldModule from "../problems/architecture/hld/whatsapp-chat-hld/content.json";
import yarnNpmFundamentalsModule from "../courses/frontend/yarn-npm-packages/yarn-npm-fundamentals/content.json";
import yarnNpmPackagesModule from "../courses/frontend/yarn-npm-packages/content.json";
import youtubeStreamingModule from "../problems/architecture/hld/youtube-streaming/content.json";
import youtubeVideoModule from "../problems/architecture/lld/youtube-video/content.json";
import zoomConferencingModule from "../problems/architecture/lld/zoom-conferencing/content.json";
import zoomConferencingHldModule from "../problems/architecture/hld/zoom-conferencing-hld/content.json";

const rawModulesPart1 = [
	{ ...mod01AiBackendTerminologyModule, urlCategory: "ai" },
	{ ...mod01ApolloBasicsModule, urlCategory: "frontend" },
	{ ...mod01ArrayProblemsModule, urlCategory: "dotnet" },
	{ ...mod01AuthBasicsModule, urlCategory: "dotnet" },
	{ ...mod01AwsForDotnetOverviewModule, urlCategory: "dotnet" },
	{ ...mod01AwsFundamentalsCloudConceptsModule, urlCategory: "cloud" },
	{ ...mod01AzureDeveloperFoundationsModule, urlCategory: "cloud" },
	{ ...mod01AzureForDotnetOverviewModule, urlCategory: "dotnet" },
	{ ...mod01AzureFoundationsProblemsModule, urlCategory: "cloud" },
	{ ...mod01BeginnerQuestionsModule, urlCategory: "" },
	{ ...mod01CorsConfigurationModule, urlCategory: "architecture" },
	{ ...mod01CreationalPatternsModule, urlCategory: "architecture" },
	{ ...mod01DockerFundamentalsModule, urlCategory: "devops" },
	{ ...mod01GettingStartedModule, urlCategory: "database" },
	{ ...mod01GettingStartedModule1, urlCategory: "dotnet" },
	{ ...mod01GettingStartedModule2, urlCategory: "dotnet" },
	{ ...mod01GettingStartedModule3, urlCategory: "dotnet" },
	{ ...mod01GettingStartedModule4, urlCategory: "dotnet" },
	{ ...mod01GettingStartedModule5, urlCategory: "frontend" },
	{ ...mod01GettingStartedEfCoreModule, urlCategory: "dotnet" },
	{ ...mod01GettingStartedLinqModule, urlCategory: "dotnet" },
	{ ...mod01MvcFundamentalsProblemsModule, urlCategory: "dotnet" },
	{ ...mod01NugetFundamentalsModule, urlCategory: "dotnet" },
	{ ...mod01OopFundamentalsModule, urlCategory: "fundamentals" },
	{ ...mod01PrismaBasicsModule, urlCategory: "frontend" },
	{ ...mod01QueryBasicsModule, urlCategory: "frontend" },
	{ ...mod01ReduxFundamentalsModule, urlCategory: "frontend" },
	{ ...mod01RenderPropsModule, urlCategory: "frontend" },
	{ ...mod01SolidPrinciplesModule, urlCategory: "architecture" },
	{ ...mod01SqlBasicsModule, urlCategory: "database" },
	{ ...mod01TestingFundamentalsModule, urlCategory: "dotnet" },
	{ ...mod01TestingFundamentalsModule1, urlCategory: "frontend" },
	{ ...mod01TypescriptBasicsModule, urlCategory: "frontend" },
	{ ...mod02AzureAppServiceDeploymentModule, urlCategory: "dotnet" },
	{ ...mod02AzureComputeProblemsModule, urlCategory: "cloud" },
	{ ...mod02ComponentsPropsModule, urlCategory: "frontend" },
	{ ...mod02ComputeAndAppHostingModule, urlCategory: "cloud" },
	{ ...mod02ControllersRoutingModule, urlCategory: "dotnet" },
	{ ...mod02CoreExtensionsModule, urlCategory: "dotnet" },
	{ ...mod02CreationalPatternsModule, urlCategory: "architecture" },
	{ ...mod02DbcontextConfigurationModule, urlCategory: "dotnet" },
	{ ...mod02DockerAdvancedModule, urlCategory: "devops" },
	{ ...mod02ElasticBeanstalkEcsDeploymentModule, urlCategory: "dotnet" },
	{ ...mod02EncapsulationDataHidingModule, urlCategory: "fundamentals" },
	{ ...mod02HigherOrderComponentsModule, urlCategory: "frontend" },
	{ ...mod02IdentityAccessGovernanceModule, urlCategory: "cloud" },
	{ ...mod02IntermediateQuestionsModule, urlCategory: "" },
	{ ...mod02JestBasicsModule, urlCategory: "frontend" },
	{ ...mod02JwtModule, urlCategory: "dotnet" },
	{ ...mod02JwtAuthenticationModule, urlCategory: "architecture" },
	{ ...mod02LinqFundamentalsSyntaxModule, urlCategory: "dotnet" },
	{ ...mod02MvcFundamentalsModule, urlCategory: "dotnet" },
	{ ...mod02PrismaSchemaDesignModule, urlCategory: "frontend" },
	{ ...mod02QueriesMutationsModule, urlCategory: "frontend" },
	{ ...mod02QueryHooksModule, urlCategory: "frontend" },
	{ ...mod02QueryingDataModule, urlCategory: "database" },
	{ ...mod02RagImplementationModule, urlCategory: "ai" },
	{ ...mod02RazorViewsProblemsModule, urlCategory: "dotnet" },
	{ ...mod02ReduxToolkitModule, urlCategory: "frontend" },
	{ ...mod02SchemaTypesModule, urlCategory: "dotnet" },
	{ ...mod02SqlIntermediateModule, urlCategory: "database" },
	{ ...mod02StringProblemsModule, urlCategory: "dotnet" },
	{ ...mod02StructuralPatternsModule, urlCategory: "architecture" },
	{ ...mod02TypesInReactModule, urlCategory: "frontend" },
	{ ...mod02VariablesTypesModule, urlCategory: "dotnet" },
	{ ...mod02XunitBasicsModule, urlCategory: "dotnet" },
	{ ...mod03AdvancedQuestionsModule, urlCategory: "" },
	{ ...mod03ApiDesignProblemsModule, urlCategory: "dotnet" },
	{ ...mod03AspnetWebModule, urlCategory: "dotnet" },
	{ ...mod03AzureServerlessProblemsModule, urlCategory: "cloud" },
	{ ...mod03AzureStorageBlobsQueuesModule, urlCategory: "dotnet" },
	{ ...mod03BehavioralPatternsModule, urlCategory: "architecture" },
	{ ...mod03CachingModule, urlCategory: "frontend" },
	{ ...mod03CompoundComponentsModule, urlCategory: "frontend" },
	{ ...mod03ComputeServicesModule, urlCategory: "cloud" },
	{ ...mod03ControlFlowModule, urlCategory: "dotnet" },
	{ ...mod03ConventionsRelationshipsModule, urlCategory: "dotnet" },
	{ ...mod03FilteringProjectionModule, urlCategory: "dotnet" },
	{ ...mod03IdentityModule, urlCategory: "dotnet" },
	{ ...mod03InheritanceModule, urlCategory: "fundamentals" },
	{ ...mod03JoinsModule, urlCategory: "database" },
	{ ...mod03KubernetesFundamentalsModule, urlCategory: "devops" },
	{ ...mod03LinkedListProblemsModule, urlCategory: "dotnet" },
	{ ...mod03McpFundamentalsModule, urlCategory: "ai" },
	{ ...mod03MockingFakesModule, urlCategory: "dotnet" },
	{ ...mod03ModelBindingModule, urlCategory: "dotnet" },
	{ ...mod03MutationsModule, urlCategory: "frontend" },
	{ ...mod03PrismaQueriesMutationsModule, urlCategory: "frontend" },
	{ ...mod03QueriesMutationsModule, urlCategory: "dotnet" },
	{ ...mod03ReactReduxModule, urlCategory: "frontend" },
	{ ...mod03ReactTestingLibraryModule, urlCategory: "frontend" },
	{ ...mod03RoutingUrlsModule, urlCategory: "dotnet" },
	{ ...mod03S3StorageCsharpModule, urlCategory: "dotnet" },
	{ ...mod03ServerlessAndAzureFunctionsModule, urlCategory: "cloud" },
	{ ...mod03SqlAdvancedModule, urlCategory: "database" },
	{ ...mod03StateEventsModule, urlCategory: "frontend" },
	{ ...mod03StructuralPatternsModule, urlCategory: "architecture" },
	{ ...mod03TypingHooksModule, urlCategory: "frontend" },
	{ ...mod03XssCsrfProtectionModule, urlCategory: "architecture" },
	{ ...mod04AdvancedFeaturesModule, urlCategory: "frontend" },
	{ ...mod04AdvancedPatternsModule, urlCategory: "frontend" },
	{ ...mod04AdvancedTypesModule, urlCategory: "frontend" },
	{ ...mod04ApiSecurityRateLimitingModule, urlCategory: "architecture" },
	{ ...mod04AwsSecretsManagerModule, urlCategory: "dotnet" },
	{ ...mod04AzureKeyVaultSecretsModule, urlCategory: "dotnet" },
	{ ...mod04AzureStorageProblemsModule, urlCategory: "cloud" },
	{ ...mod04BehavioralPatternsModule, urlCategory: "architecture" },
	{ ...mod04ComponentTestingModule, urlCategory: "frontend" },
	{ ...mod04ContainersAndContainerPlatformsModule, urlCategory: "cloud" },
	{ ...mod04DataOperationsConnectedModule, urlCategory: "dotnet" },
	{ ...mod04DatabaseDataAccessModule, urlCategory: "dotnet" },
	{ ...mod04EnterprisePatternsModule, urlCategory: "architecture" },
	{ ...mod04FilteringPaginationModule, urlCategory: "dotnet" },
	{ ...mod04FormsInputModule, urlCategory: "frontend" },
	{ ...mod04IntegrationTestingModule, urlCategory: "dotnet" },
	{ ...mod04KubernetesAdvancedModule, urlCategory: "devops" },
	{ ...mod04McpServersToolsModule, urlCategory: "ai" },
	{ ...mod04MiddlewareModule, urlCategory: "dotnet" },
	{ ...mod04MiddlewarePipelineProblemsModule, urlCategory: "dotnet" },
	{ ...mod04ModelBindingValidationModule, urlCategory: "dotnet" },
	{ ...mod04NetworkingModule, urlCategory: "cloud" },
	{ ...mod04OauthModule, urlCategory: "dotnet" },
	{ ...mod04OopModule, urlCategory: "dotnet" },
	{ ...mod04PolymorphismModule, urlCategory: "fundamentals" },
	{ ...mod04PrismaRelationsModule, urlCategory: "frontend" },
	{ ...mod04ReduxMiddlewareModule, urlCategory: "frontend" },
	{ ...mod04ScenarioBasedModule, urlCategory: "" },
	{ ...mod04SetOperationsModule, urlCategory: "database" },
	{ ...mod04SortingGroupingModule, urlCategory: "dotnet" },
	{ ...mod04StateReducersModule, urlCategory: "frontend" },
	{ ...mod04TreeGraphProblemsModule, urlCategory: "dotnet" },
	{ ...mod05AbstractionModule, urlCategory: "fundamentals" },
	{ ...mod05AdvancedFeaturesModule, urlCategory: "dotnet" },
	{ ...mod05AiAgentsDotnetModule, urlCategory: "ai" },
	{ ...mod05AuthenticationModule, urlCategory: "dotnet" },
	{ ...mod05AzureDatabasesProblemsModule, urlCategory: "cloud" },
	{ ...mod05AzureSqlEfCoreModule, urlCategory: "dotnet" },
	{ ...mod05CachingStrategiesModule, urlCategory: "frontend" },
	{ ...mod05CiCdFundamentalsModule, urlCategory: "devops" },
	{ ...mod05CleanCodePracticesModule, urlCategory: "architecture" },
	{ ...mod05ClientSideCachingAdvancedModule, urlCategory: "frontend" },
	{ ...mod05ConcurrencyPatternsModule, urlCategory: "architecture" },
	{ ...mod05ControlPropsModule, urlCategory: "frontend" },
	{ ...mod05DataOperationsDisconnectedModule, urlCategory: "dotnet" },
	{ ...mod05DependencyInjectionModule, urlCategory: "dotnet" },
	{ ...mod05DependencyInjectionProblemsModule, urlCategory: "dotnet" },
	{ ...mod05DynamicProgrammingProblemsModule, urlCategory: "dotnet" },
	{ ...mod05E2eTestingModule, urlCategory: "frontend" },
	{ ...mod05GenericComponentsModule, urlCategory: "frontend" },
	{ ...mod05GroupingAggregationSubqueriesModule, urlCategory: "database" },
	{ ...mod05JoiningDataModule, urlCategory: "dotnet" },
	{ ...mod05LifecycleEffectsModule, urlCategory: "frontend" },
	{ ...mod05Oauth2FlowsDeepDiveModule, urlCategory: "dotnet" },
	{ ...mod05PrismaMigrationsModule, urlCategory: "frontend" },
	{ ...mod05RazorViewsModule, urlCategory: "dotnet" },
	{ ...mod05RdsDynamodbModule, urlCategory: "dotnet" },
	{ ...mod05ReduxPatternsModule, urlCategory: "frontend" },
	{ ...mod05SecureApiDesignModule, urlCategory: "architecture" },
	{ ...mod05SerializationMappingModule, urlCategory: "dotnet" },
	{ ...mod05StorageAndDataServicesModule, urlCategory: "cloud" },
	{ ...mod05StorageServicesModule, urlCategory: "cloud" },
	{ ...mod05SystemDesignModule, urlCategory: "" },
	{ ...mod05TddModule, urlCategory: "dotnet" },
	{ ...mod06AdvancedAuthorizationModule, urlCategory: "dotnet" },
	{ ...mod06AdvancedTestingPatternsModule, urlCategory: "frontend" },
	{ ...mod06ArchitecturalPatternsModule, urlCategory: "architecture" },
	{ ...mod06ArchitecturePatternsModule, urlCategory: "architecture" },
	{ ...mod06AzureNetworkingProblemsModule, urlCategory: "cloud" },
	{ ...mod06ChangeTrackingModule, urlCategory: "dotnet" },
	{ ...mod06CiCdModernToolsModule, urlCategory: "devops" },
	{ ...mod06CloudwatchCicdModule, urlCategory: "dotnet" },
	{ ...mod06ContextRefsModule, urlCategory: "frontend" },
	{ ...mod06DataModificationDmlModule, urlCategory: "database" },
	{ ...mod06DatabasesModule, urlCategory: "cloud" },
	{ ...mod06DatabasesAndCachingModule, urlCategory: "cloud" },
	{ ...mod06DependencyInjectionModule, urlCategory: "dotnet" },
	{ ...mod06DependencySecurityModule, urlCategory: "architecture" },
	{ ...mod06EfCoreProblemsModule, urlCategory: "dotnet" },
	{ ...mod06ErrorHandlingModule, urlCategory: "dotnet" },
	{ ...mod06ErrorHandlingOptimisticModule, urlCategory: "frontend" },
	{ ...mod06ErrorHandlingValidationModule, urlCategory: "dotnet" },
	{ ...mod06InterfacesAbstractClassesModule, urlCategory: "fundamentals" },
	{ ...mod06MessagingEventsModule, urlCategory: "dotnet" },
	{ ...mod06MonitoringCachingCicdModule, urlCategory: "dotnet" },
	{ ...mod06OfflineSupportPersistenceModule, urlCategory: "frontend" },
	{ ...mod06PerformanceModule, urlCategory: "dotnet" },
	{ ...mod06PerformancePatternsModule, urlCategory: "frontend" },
	{ ...mod06PrismaAdvancedFeaturesModule, urlCategory: "frontend" },
	{ ...mod06ProductionPatternsModule, urlCategory: "ai" },
	{ ...mod06RapidFireModule, urlCategory: "" },
	{ ...mod06ReactPatternsModule, urlCategory: "frontend" },
	{ ...mod06ReduxTestingModule, urlCategory: "frontend" },
	{ ...mod06SetOperationsModule, urlCategory: "dotnet" },
	{ ...mod06SortingSearchingProblemsModule, urlCategory: "dotnet" },
	{ ...mod06TestingPatternsModule, urlCategory: "dotnet" },
	{ ...mod07AggregationOperatorsModule, urlCategory: "dotnet" },
	{ ...mod07AuthenticationAuthorizationProblemsModule, urlCategory: "dotnet" },
	{ ...mod07AuthenticationBasicsModule, urlCategory: "dotnet" },
	{ ...mod07AzureFunctionsModule, urlCategory: "dotnet" },
	{ ...mod07AzureSecurityProblemsModule, urlCategory: "cloud" },
	{ ...mod07CodeCoverageModule, urlCategory: "dotnet" },
	{ ...mod07CustomHooksArchitectureModule, urlCategory: "frontend" },
	{ ...mod07DatabaseSchemaTableObjectsModule, urlCategory: "database" },
	{ ...mod07DesignPrinciplesModule, urlCategory: "fundamentals" },
	{ ...mod07EnvironmentSecretsModule, urlCategory: "architecture" },
	{ ...mod07ErrorHandlingModule, urlCategory: "dotnet" },
	{ ...mod07IdentitySecurityAndConfigurationModule, urlCategory: "cloud" },
	{ ...mod07InterviewTrapsModule, urlCategory: "" },
	{ ...mod07LoadBalancingApplicationIntegrationModule, urlCategory: "cloud" },
	{ ...mod07MiddlewarePipelineModule, urlCategory: "dotnet" },
	{ ...mod07ModernCsharpModule, urlCategory: "dotnet" },
	{ ...mod07PrefetchingSsrModule, urlCategory: "frontend" },
	{ ...mod07PrismaNextjsIntegrationModule, urlCategory: "frontend" },
	{ ...mod07QueryingModule, urlCategory: "dotnet" },
	{ ...mod07ReactRouterModule, urlCategory: "frontend" },
	{ ...mod07RecursionProblemsModule, urlCategory: "dotnet" },
	{ ...mod07ReduxAdvancedConceptsModule, urlCategory: "frontend" },
	{ ...mod07RefreshTokenStrategiesModule, urlCategory: "dotnet" },
	{ ...mod07SqsSnsEventsModule, urlCategory: "dotnet" },
	{ ...mod07SubscriptionsRealtimeModule, urlCategory: "frontend" },
	{ ...mod07TestingBestPracticesModule, urlCategory: "frontend" },
	{ ...mod07TestingQualityModule, urlCategory: "dotnet" },
	{ ...mod07TestingReactQueryModule, urlCategory: "frontend" },
	{ ...mod08AzureAiServicesProblemsModule, urlCategory: "cloud" },
	{ ...mod08BitwiseProblemsModule, urlCategory: "dotnet" },
	{ ...mod08DataTypesModule, urlCategory: "database" },
	{ ...mod08EntityFrameworkCoreModule, urlCategory: "dotnet" },
	{ ...mod08InheritanceStrategiesModule, urlCategory: "dotnet" },
	{ ...mod08LambdaServerlessModule, urlCategory: "dotnet" },
	{ ...mod08LocalStateManagementModule, urlCategory: "frontend" },
	{ ...mod08LoggingConfigurationModule, urlCategory: "dotnet" },
	{ ...mod08NetworkingAndApiPlatformsModule, urlCategory: "cloud" },
	{ ...mod08PerformanceOptimizationModule, urlCategory: "frontend" },
	{ ...mod08PerformanceOptimizationModule1, urlCategory: "" },
	{ ...mod08QuantifiersElementOperatorsModule, urlCategory: "dotnet" },
	{ ...mod08ReduxRealWorldModule, urlCategory: "frontend" },
	{ ...mod08SecurityCryptographyModule, urlCategory: "dotnet" },
	{ ...mod08SecurityTestingModule, urlCategory: "architecture" },
	{ ...mod08ServerlessModule, urlCategory: "cloud" },
	{ ...mod08ServiceBusEventsModule, urlCategory: "dotnet" },
	{ ...mod08SsoIdentityProvidersModule, urlCategory: "dotnet" },
	{ ...mod08StateMachinesXstateModule, urlCategory: "frontend" },
	{ ...mod08StylingModule, urlCategory: "frontend" },
	{ ...mod08TestingDebuggingProblemsModule, urlCategory: "dotnet" },
	{ ...mod09AuthenticationAuthorizationModule, urlCategory: "dotnet" },
	{ ...mod09CicdPipelinesModule, urlCategory: "" },
	{ ...mod09ComponentCompositionStrategiesModule, urlCategory: "frontend" },
	{ ...mod09ConstraintsModule, urlCategory: "database" },
	{ ...mod09ContainersKubernetesModule, urlCategory: "cloud" },
	{ ...mod09MessagingAndEventDrivenArchitectureModule, urlCategory: "cloud" },
	{ ...mod09MigrationsModule, urlCategory: "dotnet" },
	{ ...mod09PartitioningOperatorsModule, urlCategory: "dotnet" },
	{ ...mod09PerformanceOptimizationModule, urlCategory: "frontend" },
	{ ...mod09RealWorldPatternsModule, urlCategory: "frontend" },
	{ ...mod09SecurityBestPracticesModule, urlCategory: "dotnet" },
	{ ...mod09SsrNextjsPerformanceModule, urlCategory: "frontend" },
	{ ...mod09UtilitiesHelpersModule, urlCategory: "dotnet" },
	{ ...mod10AdvancedFeaturesModule, urlCategory: "dotnet" },
	{ ...mod10AdvancedHookPatternsModule, urlCategory: "frontend" },
	{ ...mod10ConversionGenerationOperatorsModule, urlCategory: "dotnet" },
	{ ...mod10DevopsCicdModule, urlCategory: "cloud" },
	{ ...mod10IndexesModule, urlCategory: "database" },
	{ ...mod10ObservabilityAndApplicationMonitoringModule, urlCategory: "cloud" },
	{ ...mod10WebApiRestModule, urlCategory: "dotnet" },
	{ ...mod11AdvancedLinqConceptsModule, urlCategory: "dotnet" },
	{ ...mod11ApplicationDeploymentAndDevopsModule, urlCategory: "cloud" },
	{ ...mod11DatabaseFirstDiagnosticsModule, urlCategory: "dotnet" },
	{ ...mod11MonitoringLoggingObservabilityModule, urlCategory: "cloud" },
	{ ...mod11TestingDebuggingModule, urlCategory: "dotnet" },
	{ ...mod11ViewsModule, urlCategory: "database" },
	{ ...mod12DeploymentProductionModule, urlCategory: "dotnet" },
	{ ...mod12InfrastructureAsCodeAndAutomationModule, urlCategory: "cloud" },
	{ ...mod12PerformanceBulkOperationsModule, urlCategory: "dotnet" },
	{ ...mod12SecurityServicesModule, urlCategory: "cloud" },
	{ ...mod12StoredProceduresFunctionsModule, urlCategory: "database" },
	{ ...mod13AiServicesForAzureDevelopersModule, urlCategory: "cloud" },
	{ ...mod13AnalyticsBigDataModule, urlCategory: "cloud" },
	{ ...mod13TriggersModule, urlCategory: "database" },
	{ ...mod14AiMachineLearningModule, urlCategory: "cloud" },
	{ ...mod14TransactionsErrorHandlingBackupModule, urlCategory: "database" },
	{ ...mod15AdvancedTopicsModule, urlCategory: "database" },
	{ ...mod15DeveloperToolsApplicationServicesModule, urlCategory: "cloud" },
	{ ...mod16IdentityForApplicationsModule, urlCategory: "cloud" },
	{ ...mod16PerformanceTuningModule, urlCategory: "database" },
	{ ...mod17MigrationHybridCloudModule, urlCategory: "cloud" },
	{ ...mod17SecurityHardeningModule, urlCategory: "database" },
	{ ...mod18HighAvailabilityDrModule, urlCategory: "database" },
	{ ...mod18InfrastructureAutomationModule, urlCategory: "cloud" },
	{ ...mod19DataWarehousingModule, urlCategory: "database" },
	{ ...mod19HighAvailabilityDisasterRecoveryModule, urlCategory: "cloud" },
	{ ...mod20AwsArchitectureDesignPatternsModule, urlCategory: "cloud" },
	{ ...mod20AzureSqlModule, urlCategory: "database" },
	{ ...mod21ModernDataToolsModule, urlCategory: "database" },
	{ ...advancedAsyncConcurrencyThreadingModule, urlCategory: "dotnet" },
	{ ...advancedCRuntimeMemoryConcurrencyModule, urlCategory: "dotnet" },
	{ ...advancedGitWorkflowsModule, urlCategory: "devops" },
	{ ...advancedPatternsModule, urlCategory: "dotnet" },
	{ ...advancedPatternsModule1, urlCategory: "frontend" },
	{ ...advancedRebaseModule, urlCategory: "devops" },
	{ ...advancedTopicsModule, urlCategory: "database" },
	{ ...advancedTypeModelingRuntimeSafetyModule, urlCategory: "frontend" },
	{ ...aiBasicsModule, urlCategory: "ai" },
	{ ...airbnbBookingModule, urlCategory: "architecture" },
	{ ...airbnbBookingHldModule, urlCategory: "architecture" },
	{ ...amazonEcommerceModule, urlCategory: "architecture" },
	{ ...amazonEcommerceHldModule, urlCategory: "architecture" },
	{ ...animationModule, urlCategory: "frontend" },
	{ ...apiDesignModule, urlCategory: "architecture" },
	{ ...apiDesignModule1, urlCategory: "backend" },
	{ ...apiDocumentationSwaggerModule, urlCategory: "dotnet" },
	{ ...apiGatewayPatternsModule, urlCategory: "architecture" },
	{ ...apiVersioningProblemsModule, urlCategory: "backend" },
	{ ...apolloModule, urlCategory: "frontend" },
	{ ...apolloModule1, urlCategory: "frontend" },
	{ ...appRouterRenderingModule, urlCategory: "frontend" },
	{ ...architectureFollowUpsModule, urlCategory: "" },
	{ ...aspNetCoreInternalsProductionHostingModule, urlCategory: "dotnet" },
	{ ...aspnetCoreModule, urlCategory: "dotnet" },
	{ ...aspnetCoreModule1, urlCategory: "dotnet" },
	{ ...aspnetCoreModule2, urlCategory: "dotnet" },
	{ ...aspnetCoreWebApiModule, urlCategory: "dotnet" },
	{ ...aspnetSystemDesignModule, urlCategory: "architecture" },
	{ ...atmMachineModule, urlCategory: "architecture" },
	{ ...authenticationAuthorizationModule, urlCategory: "dotnet" },
	{ ...awsModule, urlCategory: "cloud" },
	{ ...awsModule1, urlCategory: "cloud" },
	{ ...awsForAspnetModule, urlCategory: "dotnet" },
	{ ...azureModule, urlCategory: "cloud" },
	{ ...azureModule1, urlCategory: "cloud" },
	{ ...azureModule2, urlCategory: "cloud" },
	{ ...azureForAspnetModule, urlCategory: "dotnet" },
	{ ...backendDatabaseFollowUpsModule, urlCategory: "" },
	{ ...bankingAppModule, urlCategory: "architecture" },
	{ ...behavioralInterviewQuestionsModule, urlCategory: "" },
	{ ...browserReactPerformanceModule, urlCategory: "architecture" },
	{ ...buildOptimizationModule, urlCategory: "architecture" },
	{ ...buildToolsModule, urlCategory: "frontend" },
	{ ...cNetFollowUpsModule, urlCategory: "" },
	{ ...cacheInvalidationModule, urlCategory: "architecture" },
	{ ...cachingInAspnetCoreModule, urlCategory: "architecture" },
	{ ...cachingInNodejsModule, urlCategory: "architecture" },
	{ ...cachingPatternsModule, urlCategory: "architecture" },
	{ ...cachingStrategiesModule, urlCategory: "architecture" },
	{ ...capacityEstimationModule, urlCategory: "architecture" },
	{ ...chatSystemHldModule, urlCategory: "architecture" },
	{ ...ciCdSafeDeliveryModule, urlCategory: "devops" },
	{ ...cleanCodeCsharpModule, urlCategory: "architecture" },
	{ ...cloudIntegrationModule, urlCategory: "dotnet" },
	{ ...commonSystemDesignsModule, urlCategory: "architecture" },
	{ ...concurrencyProductionDatabaseProblemsModule, urlCategory: "database" },
	{ ...consistencyAvailabilityModule, urlCategory: "architecture" },
	{ ...constraintsModule, urlCategory: "database" },
	{ ...csharpModule, urlCategory: "dotnet" },
	{ ...csharpModule1, urlCategory: "dotnet" },
	{ ...csharpFundamentalsModule, urlCategory: "dotnet" },
	{ ...dataFetchingPatternsModule, urlCategory: "frontend" },
	{ ...dataManagementModule, urlCategory: "architecture" },
	{ ...dataModificationDmlModule, urlCategory: "database" },
	{ ...dataStructuresDeepDiveModule, urlCategory: "fundamentals" },
	{ ...dataTypesModule, urlCategory: "database" },
	{ ...databaseDesignModule, urlCategory: "architecture" },
	{ ...databaseDesignModule1, urlCategory: "database" },
	{ ...databaseInternalsQueryOptimizationModule, urlCategory: "database" },
	{ ...databaseSchemaTableObjectsModule, urlCategory: "database" },
	{ ...deadLetterQueuesModule, urlCategory: "architecture" },
	{ ...designPatternsModule, urlCategory: "architecture" },
	{ ...devopsModule, urlCategory: "devops" },
	{ ...devopsSystemDesignModule, urlCategory: "architecture" },
	{ ...distributedCachingModule, urlCategory: "architecture" },
	{ ...distributedSystemsFundamentalsModule, urlCategory: "architecture" },
	{ ...distributedSystemsFundamentalsModule1, urlCategory: "architecture" },
	{ ...distributedTransactionsModule, urlCategory: "architecture" },
	{ ...dockerComposeModule, urlCategory: "devops" },
	{ ...dotnetAiBackendModule, urlCategory: "ai" },
	{ ...dotnetNugetPackagesModule, urlCategory: "dotnet" },
	{ ...dropboxStorageModule, urlCategory: "architecture" },
	{ ...ecommerceHldModule, urlCategory: "architecture" },
	{ ...efCoreModule, urlCategory: "dotnet" },
	{ ...efCoreModule1, urlCategory: "dotnet" },
	{ ...efCorePerformanceOrmTradeOffsModule, urlCategory: "dotnet" },
	{ ...elevatorSystemModule, urlCategory: "architecture" },
	{ ...errorHandlingDesignModule, urlCategory: "backend" },
	{ ...eventDrivenArchitectureModule, urlCategory: "architecture" },
	{ ...eventSourcingModule, urlCategory: "architecture" },
	{ ...eventStreamingKafkaModule, urlCategory: "architecture" },
	{ ...facebookNewsFeedModule, urlCategory: "architecture" },
	{ ...foodDeliveryModule, urlCategory: "architecture" },
	{ ...foodDeliveryHldModule, urlCategory: "architecture" },
	{ ...formsModule, urlCategory: "frontend" },
	{ ...frontendFrameworksModule, urlCategory: "frontend" },
	{ ...frontendPerformanceEngineeringModule, urlCategory: "architecture" },
	{ ...fullStackApiDesignModule, urlCategory: "frontend" },
	{ ...fullStackSeniorProjectsModule, urlCategory: "architecture" },
	{ ...fullstackSecurityModule, urlCategory: "architecture" },
	{ ...gettingStartedModule, urlCategory: "database" },
	{ ...gitBisectDebuggingModule, urlCategory: "devops" },
	{ ...gitForSeniorEngineersModule, urlCategory: "devops" },
	{ ...gitHooksModule, urlCategory: "devops" },
	{ ...gitInternalsModule, urlCategory: "devops" },
	{ ...gitLinuxDeveloperWorkflowModule, urlCategory: "devops" },
	{ ...gitPerformanceModule, urlCategory: "devops" },
	{ ...gitSecurityModule, urlCategory: "devops" },
	{ ...gitWorkflowsModule, urlCategory: "devops" },
	{ ...googleDriveStorageModule, urlCategory: "architecture" },
	{ ...googleSearchModule, urlCategory: "architecture" },
	{ ...graphqlModule, urlCategory: "dotnet" },
	{ ...graphqlDotnetModule, urlCategory: "dotnet" },
	{ ...groupingAggregationSubqueriesModule, urlCategory: "database" },
	{ ...highAvailabilityDrModule, urlCategory: "database" },
	{ ...hldModule, urlCategory: "architecture" },
	{ ...hotelManagementModule, urlCategory: "architecture" },
	{ ...httpClientsModule, urlCategory: "frontend" },
	{ ...httpClientsResilienceModule, urlCategory: "dotnet" },
	{ ...indexOptimizationModule, urlCategory: "database" },
	{ ...indexesModule, urlCategory: "database" },
	{ ...instagramFeedModule, urlCategory: "architecture" },
	{ ...instagramPhotoSharingModule, urlCategory: "architecture" },
	{ ...javascriptModule, urlCategory: "frontend" },
	{ ...joinsModule, urlCategory: "database" },
	{ ...leadershipOwnershipModule, urlCategory: "" },
	{ ...libraryManagementModule, urlCategory: "architecture" },
	{ ...linkedinProfessionalModule, urlCategory: "architecture" },
	{ ...linkedinProfessionalHldModule, urlCategory: "architecture" },
	{ ...linqModule, urlCategory: "dotnet" },
	{ ...linqModule1, urlCategory: "dotnet" },
	{ ...linuxProductionTroubleshootingModule, urlCategory: "devops" },
	{ ...lldModule, urlCategory: "architecture" },
	{ ...loadBalancingModule, urlCategory: "architecture" },
	{ ...loggingMonitoringModule, urlCategory: "dotnet" },
	{ ...messageBrokerSelectionModule, urlCategory: "architecture" },
	{ ...messageOrderingIdempotencyModule, urlCategory: "architecture" },
	{ ...messageQueueFundamentalsModule, urlCategory: "architecture" },
	{ ...messageQueuesEventStreamingModule, urlCategory: "architecture" },
	{ ...microservicesArchitectureModule, urlCategory: "architecture" },
	{ ...microservicesFundamentalsModule, urlCategory: "architecture" },
	{ ...mockInterviewScenariosModule, urlCategory: "" },
	{ ...modernDataToolsModule, urlCategory: "database" },
	{ ...modernStateApplicationArchitectureModule, urlCategory: "frontend" },
	{ ...modernWebSecurityIdentityModule, urlCategory: "architecture" },
	{ ...movieTicketBookingModule, urlCategory: "architecture" },
	{ ...netflixStreamingModule, urlCategory: "architecture" },
	{ ...networkingProtocolsModule, urlCategory: "fundamentals" },
	{ ...nextJsFullStackReactModule, urlCategory: "frontend" },
	{ ...normalizationExercisesModule, urlCategory: "database" },
	{ ...notificationSystemModule, urlCategory: "architecture" },
	{ ...observabilityModule, urlCategory: "architecture" },
	{ ...oopsConceptsModule, urlCategory: "fundamentals" },
	{ ...parkingLotSystemModule, urlCategory: "architecture" },
	{ ...paymentGatewayModule, urlCategory: "architecture" },
	{ ...paymentGatewayHldModule, urlCategory: "architecture" },
	{ ...performanceObservabilityModule, urlCategory: "dotnet" },
	{ ...performanceOptimizationModule, urlCategory: "architecture" },
	{ ...performanceTuningModule, urlCategory: "database" },
	{ ...phase1FoundationsAiToolsOverviewModule, urlCategory: "ai" },
	{ ...phase1FoundationsPromptingBasicsModule, urlCategory: "ai" },
	{ ...postgresqlModule, urlCategory: "database" },
	{ ...prismaModule, urlCategory: "frontend" },
	{ ...productionApiDesignReliabilityModule, urlCategory: "dotnet" },
	{ ...productionArchitectureReliabilityCostModule, urlCategory: "cloud" },
	{ ...productionDockerContainerSecurityModule, urlCategory: "devops" },
	{ ...productionKubernetesDay2OperationsModule, urlCategory: "devops" },
	{ ...productionOwnershipModule, urlCategory: "fundamentals" },
	{ ...productionReadinessModule, urlCategory: "devops" },
	{ ...programmingComputerFundamentalsModule, urlCategory: "fundamentals" },
	{ ...programmingComputerWebFoundationsModule, urlCategory: "fundamentals" },
	{ ...project1EnterpriseExpensePlatformModule, urlCategory: "architecture" },
	{ ...project2CollaborativeCommunicationPlatformModule, urlCategory: "architecture" },
	{ ...project3ProductionIncidentSimulatorModule, urlCategory: "architecture" },
	{ ...publishSubscribePatternsModule, urlCategory: "architecture" },
	{ ...queryOptimizationModule, urlCategory: "database" },
	{ ...queryingDataModule, urlCategory: "database" },
	{ ...rateLimiterModule, urlCategory: "architecture" },
	{ ...rateLimitingDesignModule, urlCategory: "backend" },
	{ ...reactModule, urlCategory: "frontend" },
	{ ...reactAdvancedPatternsModule, urlCategory: "frontend" },
	{ ...reactDataFetchingModule, urlCategory: "frontend" },
	{ ...reactEcosystemModule, urlCategory: "frontend" },
	{ ...reactFormsInputModule, urlCategory: "frontend" },
	{ ...reactFrontendFollowUpsModule, urlCategory: "" },
	{ ...reactFundamentalsModule, urlCategory: "frontend" },
	{ ...reactHooksPatternsModule, urlCategory: "frontend" },
	{ ...reactInternalsModernRenderingModule, urlCategory: "frontend" },
	{ ...reactPerformanceModule, urlCategory: "frontend" },
	{ ...reactQueryModule, urlCategory: "frontend" },
	{ ...reactRouterModule, urlCategory: "frontend" },
	{ ...reactSystemDesignModule, urlCategory: "architecture" },
	{ ...reactTestingModule, urlCategory: "frontend" },
	{ ...reactTestingModule1, urlCategory: "frontend" },
	{ ...realWorldCaseStudiesModule, urlCategory: "architecture" },
	{ ...redisCachingStrategiesModule, urlCategory: "architecture" },
	{ ...redisFundamentalsModule, urlCategory: "architecture" },
	{ ...redisUseCasesModule, urlCategory: "architecture" },
	{ ...reduxModule, urlCategory: "frontend" },
	{ ...reduxModule1, urlCategory: "frontend" },
	{ ...requirementClarificationModule, urlCategory: "architecture" },
	{ ...resiliencePatternsModule, urlCategory: "architecture" },
	{ ...restApiDesignScenariosModule, urlCategory: "backend" },
	{ ...rideSharingHldModule, urlCategory: "architecture" },
	{ ...routingModule, urlCategory: "frontend" },
	{ ...runtimePerformanceModule, urlCategory: "architecture" },
];

const rawModulesPart2 = [
	{ ...scalabilityPatternsModule, urlCategory: "architecture" },
	{ ...schemaDesignScenariosModule, urlCategory: "database" },
	{ ...searchAutocompleteModule, urlCategory: "architecture" },
	{ ...securityHardeningModule, urlCategory: "database" },
	{ ...securityInMicroservicesModule, urlCategory: "architecture" },
	{ ...seniorEngineeringJudgmentArchitectureDecisionsModule, urlCategory: "architecture" },
	{ ...seniorSoftwareEngineeringModule, urlCategory: "fundamentals" },
	{ ...serviceDiscoveryModule, urlCategory: "architecture" },
	{ ...serviceToServiceCommunicationModule, urlCategory: "architecture" },
	{ ...setOperationsModule, urlCategory: "database" },
	{ ...slackMessagingModule, urlCategory: "architecture" },
	{ ...slackMessagingHldModule, urlCategory: "architecture" },
	{ ...spotifyMusicModule, urlCategory: "architecture" },
	{ ...spotifyMusicHldModule, urlCategory: "architecture" },
	{ ...sqlModule, urlCategory: "database" },
	{ ...sqlServerModule, urlCategory: "database" },
	{ ...sqlServerModule1, urlCategory: "database" },
	{ ...stateManagementModule, urlCategory: "frontend" },
	{ ...stateManagementModule1, urlCategory: "frontend" },
	{ ...storedProceduresFunctionsModule, urlCategory: "database" },
	{ ...streamProcessingModule, urlCategory: "architecture" },
	{ ...stylingModule, urlCategory: "frontend" },
	{ ...submodulesSubtreesModule, urlCategory: "devops" },
	{ ...systemDesignModule, urlCategory: "architecture" },
	{ ...systemDesignForSeniorsModule, urlCategory: "fundamentals" },
	{ ...systemDesignFrameworkModule, urlCategory: "architecture" },
	{ ...systemDesignInterviewsModule, urlCategory: "architecture" },
	{ ...technicalDecisionMakingModule, urlCategory: "fundamentals" },
	{ ...technicalLeadershipModule, urlCategory: "fundamentals" },
	{ ...testingModule, urlCategory: "frontend" },
	{ ...testingStrategyForSeniorFrontendEngineersModule, urlCategory: "frontend" },
	{ ...ticTacToeGameModule, urlCategory: "architecture" },
	{ ...ticketBookingHldModule, urlCategory: "architecture" },
	{ ...transactionsErrorHandlingBackupModule, urlCategory: "database" },
	{ ...triggersModule, urlCategory: "database" },
	{ ...twitterSocialModule, urlCategory: "architecture" },
	{ ...twitterSocialHldModule, urlCategory: "architecture" },
	{ ...typescriptModule, urlCategory: "frontend" },
	{ ...typescriptForReactModule, urlCategory: "frontend" },
	{ ...uberRideSharingModule, urlCategory: "architecture" },
	{ ...uberRideSharingHldModule, urlCategory: "architecture" },
	{ ...unitTestingDotnetModule, urlCategory: "dotnet" },
	{ ...urlShortenerModule, urlCategory: "architecture" },
	{ ...utilitiesModule, urlCategory: "frontend" },
	{ ...validationAuthorizationModule, urlCategory: "dotnet" },
	{ ...vendingMachineModule, urlCategory: "architecture" },
	{ ...videoStreamingHldModule, urlCategory: "architecture" },
	{ ...viewsModule, urlCategory: "database" },
	{ ...webCrawlerModule, urlCategory: "architecture" },
	{ ...webNetworkingFundamentalsModule, urlCategory: "fundamentals" },
	{ ...whatsappChatModule, urlCategory: "architecture" },
	{ ...whatsappChatHldModule, urlCategory: "architecture" },
	{ ...yarnNpmFundamentalsModule, urlCategory: "frontend" },
	{ ...yarnNpmPackagesModule, urlCategory: "frontend" },
	{ ...youtubeStreamingModule, urlCategory: "architecture" },
	{ ...youtubeVideoModule, urlCategory: "architecture" },
	{ ...zoomConferencingModule, urlCategory: "architecture" },
	{ ...zoomConferencingHldModule, urlCategory: "architecture" },
];

const rawModules: any[] = [...rawModulesPart1, ...rawModulesPart2];

export const modules: Module[] = rawModules as unknown as Module[];

export function getModuleBySlug(slug: string): Module | undefined {
	return modules.find((m) => m.slug === slug);
}

export function getModulesByCourse(courseSlug: string): Module[] {
	return modules.filter((m) => m.courseSlug === courseSlug).sort((a, b) => a.order - b.order);
}
