import type { Module } from "@/types";

import mod01AiBackendTerminologyModule from "./ai/courses/dotnet-ai-backend/01-ai-backend-terminology/content.json";
import mod01ApolloBasicsModule from "./frontend/courses/apollo/01-apollo-basics/content.json";
import mod01ArrayProblemsModule from "./backend/problems/csharp/01-array-problems/content.json";
import mod01AuthBasicsModule from "./backend/courses/authentication-authorization/01-auth-basics/content.json";
import mod01AwsForDotnetOverviewModule from "./backend/courses/aws-for-aspnet/01-aws-for-dotnet-overview/content.json";
import mod01AwsFundamentalsCloudConceptsModule from "./devops/courses/aws/01-aws-fundamentals-cloud-concepts/content.json";
import mod01AzureDeveloperFoundationsModule from "./devops/courses/azure/01-azure-developer-foundations/content.json";
import mod01AzureForDotnetOverviewModule from "./backend/courses/azure-for-aspnet/01-azure-for-dotnet-overview/content.json";
import mod01AzureFoundationsProblemsModule from "./devops/problems/azure/01-azure-foundations-problems/content.json";
import mod01BeginnerQuestionsModule from "./interview-qa/01-beginner-questions/content.json";
import mod01CorsConfigurationModule from "./architecture/courses/fullstack-security/01-cors-configuration/content.json";
import mod01CreationalPatternsModule from "./architecture/courses/design-patterns/01-creational-patterns/content.json";
import mod01DockerFundamentalsModule from "./devops/courses/devops/01-docker-fundamentals/content.json";
import mod01GettingStartedModule from "./backend/courses/aspnet-core/01-getting-started/content.json";
import mod01GettingStartedModule1 from "./backend/courses/aspnet-core-web-api/01-getting-started/content.json";
import mod01GettingStartedModule2 from "./backend/courses/csharp-fundamentals/01-getting-started/content.json";
import mod01GettingStartedModule3 from "./backend/courses/graphql-dotnet/01-getting-started/content.json";
import mod01GettingStartedModule4 from "./database/courses/sql-server/01-getting-started/content.json";
import mod01GettingStartedModule5 from "./frontend/courses/react-fundamentals/01-getting-started/content.json";
import mod01GettingStartedEfCoreModule from "./backend/courses/ef-core/01-getting-started-ef-core/content.json";
import mod01GettingStartedLinqModule from "./backend/courses/linq/01-getting-started-linq/content.json";
import mod01MvcFundamentalsProblemsModule from "./backend/problems/aspnet-core/01-mvc-fundamentals-problems/content.json";
import mod01NugetFundamentalsModule from "./backend/courses/dotnet-nuget-packages/01-nuget-fundamentals/content.json";
import mod01OopFundamentalsModule from "./fundamentals/courses/oops-concepts/01-oop-fundamentals/content.json";
import mod01PrismaBasicsModule from "./frontend/courses/prisma/01-prisma-basics/content.json";
import mod01QueryBasicsModule from "./frontend/courses/react-query/01-query-basics/content.json";
import mod01ReduxFundamentalsModule from "./frontend/courses/redux/01-redux-fundamentals/content.json";
import mod01RenderPropsModule from "./frontend/courses/react-advanced-patterns/01-render-props/content.json";
import mod01SolidPrinciplesModule from "./architecture/courses/clean-code-csharp/01-solid-principles/content.json";
import mod01SqlBasicsModule from "./database/problems/sql/01-sql-basics/content.json";
import mod01TestingFundamentalsModule from "./backend/courses/unit-testing-dotnet/01-testing-fundamentals/content.json";
import mod01TestingFundamentalsModule1 from "./frontend/courses/react-testing/01-testing-fundamentals/content.json";
import mod01TypescriptBasicsModule from "./frontend/courses/typescript-for-react/01-typescript-basics/content.json";
import mod02AzureAppServiceDeploymentModule from "./backend/courses/azure-for-aspnet/02-azure-app-service-deployment/content.json";
import mod02AzureComputeProblemsModule from "./devops/problems/azure/02-azure-compute-problems/content.json";
import mod02ComponentsPropsModule from "./frontend/courses/react-fundamentals/02-components-props/content.json";
import mod02ComputeAndAppHostingModule from "./devops/courses/azure/02-compute-and-app-hosting/content.json";
import mod02ControllersRoutingModule from "./backend/courses/aspnet-core-web-api/02-controllers-routing/content.json";
import mod02CoreExtensionsModule from "./backend/courses/dotnet-nuget-packages/02-core-extensions/content.json";
import mod02CreationalPatternsModule from "./architecture/courses/clean-code-csharp/02-creational-patterns/content.json";
import mod02DbcontextConfigurationModule from "./backend/courses/ef-core/02-dbcontext-configuration/content.json";
import mod02DockerAdvancedModule from "./devops/courses/devops/02-docker-advanced/content.json";
import mod02ElasticBeanstalkEcsDeploymentModule from "./backend/courses/aws-for-aspnet/02-elastic-beanstalk-ecs-deployment/content.json";
import mod02EncapsulationDataHidingModule from "./fundamentals/courses/oops-concepts/02-encapsulation-data-hiding/content.json";
import mod02HigherOrderComponentsModule from "./frontend/courses/react-advanced-patterns/02-higher-order-components/content.json";
import mod02IdentityAccessGovernanceModule from "./devops/courses/aws/02-identity-access-governance/content.json";
import mod02IntermediateQuestionsModule from "./interview-qa/02-intermediate-questions/content.json";
import mod02JestBasicsModule from "./frontend/courses/react-testing/02-jest-basics/content.json";
import mod02JwtModule from "./backend/courses/authentication-authorization/02-jwt/content.json";
import mod02JwtAuthenticationModule from "./architecture/courses/fullstack-security/02-jwt-authentication/content.json";
import mod02LinqFundamentalsSyntaxModule from "./backend/courses/linq/02-linq-fundamentals-syntax/content.json";
import mod02MvcFundamentalsModule from "./backend/courses/aspnet-core/02-mvc-fundamentals/content.json";
import mod02PrismaSchemaDesignModule from "./frontend/courses/prisma/02-prisma-schema-design/content.json";
import mod02QueriesMutationsModule from "./frontend/courses/apollo/02-queries-mutations/content.json";
import mod02QueryHooksModule from "./frontend/courses/react-query/02-query-hooks/content.json";
import mod02QueryingDataModule from "./database/courses/sql-server/02-querying-data/content.json";
import mod02RagImplementationModule from "./ai/courses/dotnet-ai-backend/02-rag-implementation/content.json";
import mod02RazorViewsProblemsModule from "./backend/problems/aspnet-core/02-razor-views-problems/content.json";
import mod02ReduxToolkitModule from "./frontend/courses/redux/02-redux-toolkit/content.json";
import mod02SchemaTypesModule from "./backend/courses/graphql-dotnet/02-schema-types/content.json";
import mod02SqlIntermediateModule from "./database/problems/sql/02-sql-intermediate/content.json";
import mod02StringProblemsModule from "./backend/problems/csharp/02-string-problems/content.json";
import mod02StructuralPatternsModule from "./architecture/courses/design-patterns/02-structural-patterns/content.json";
import mod02TypesInReactModule from "./frontend/courses/typescript-for-react/02-types-in-react/content.json";
import mod02VariablesTypesModule from "./backend/courses/csharp-fundamentals/02-variables-types/content.json";
import mod02XunitBasicsModule from "./backend/courses/unit-testing-dotnet/02-xunit-basics/content.json";
import mod03AdvancedQuestionsModule from "./interview-qa/03-advanced-questions/content.json";
import mod03ApiDesignProblemsModule from "./backend/problems/aspnet-core/03-api-design-problems/content.json";
import mod03AspnetWebModule from "./backend/courses/dotnet-nuget-packages/03-aspnet-web/content.json";
import mod03AzureServerlessProblemsModule from "./devops/problems/azure/03-azure-serverless-problems/content.json";
import mod03AzureStorageBlobsQueuesModule from "./backend/courses/azure-for-aspnet/03-azure-storage-blobs-queues/content.json";
import mod03BehavioralPatternsModule from "./architecture/courses/design-patterns/03-behavioral-patterns/content.json";
import mod03CachingModule from "./frontend/courses/apollo/03-caching/content.json";
import mod03CompoundComponentsModule from "./frontend/courses/react-advanced-patterns/03-compound-components/content.json";
import mod03ComputeServicesModule from "./devops/courses/aws/03-compute-services/content.json";
import mod03ControlFlowModule from "./backend/courses/csharp-fundamentals/03-control-flow/content.json";
import mod03ConventionsRelationshipsModule from "./backend/courses/ef-core/03-conventions-relationships/content.json";
import mod03FilteringProjectionModule from "./backend/courses/linq/03-filtering-projection/content.json";
import mod03IdentityModule from "./backend/courses/authentication-authorization/03-identity/content.json";
import mod03InheritanceModule from "./fundamentals/courses/oops-concepts/03-inheritance/content.json";
import mod03JoinsModule from "./database/courses/sql-server/03-joins/content.json";
import mod03KubernetesFundamentalsModule from "./devops/courses/devops/03-kubernetes-fundamentals/content.json";
import mod03LinkedListProblemsModule from "./backend/problems/csharp/03-linked-list-problems/content.json";
import mod03McpFundamentalsModule from "./ai/courses/dotnet-ai-backend/03-mcp-fundamentals/content.json";
import mod03MockingFakesModule from "./backend/courses/unit-testing-dotnet/03-mocking-fakes/content.json";
import mod03ModelBindingModule from "./backend/courses/aspnet-core-web-api/03-model-binding/content.json";
import mod03MutationsModule from "./frontend/courses/react-query/03-mutations/content.json";
import mod03PrismaQueriesMutationsModule from "./frontend/courses/prisma/03-prisma-queries-mutations/content.json";
import mod03QueriesMutationsModule from "./backend/courses/graphql-dotnet/03-queries-mutations/content.json";
import mod03ReactReduxModule from "./frontend/courses/redux/03-react-redux/content.json";
import mod03ReactTestingLibraryModule from "./frontend/courses/react-testing/03-react-testing-library/content.json";
import mod03RoutingUrlsModule from "./backend/courses/aspnet-core/03-routing-urls/content.json";
import mod03S3StorageCsharpModule from "./backend/courses/aws-for-aspnet/03-s3-storage-csharp/content.json";
import mod03ServerlessAndAzureFunctionsModule from "./devops/courses/azure/03-serverless-and-azure-functions/content.json";
import mod03SqlAdvancedModule from "./database/problems/sql/03-sql-advanced/content.json";
import mod03StateEventsModule from "./frontend/courses/react-fundamentals/03-state-events/content.json";
import mod03StructuralPatternsModule from "./architecture/courses/clean-code-csharp/03-structural-patterns/content.json";
import mod03TypingHooksModule from "./frontend/courses/typescript-for-react/03-typing-hooks/content.json";
import mod03XssCsrfProtectionModule from "./architecture/courses/fullstack-security/03-xss-csrf-protection/content.json";
import mod04AdvancedFeaturesModule from "./frontend/courses/react-query/04-advanced-features/content.json";
import mod04AdvancedPatternsModule from "./frontend/courses/apollo/04-advanced-patterns/content.json";
import mod04AdvancedTypesModule from "./frontend/courses/typescript-for-react/04-advanced-types/content.json";
import mod04ApiSecurityRateLimitingModule from "./architecture/courses/fullstack-security/04-api-security-rate-limiting/content.json";
import mod04AwsSecretsManagerModule from "./backend/courses/aws-for-aspnet/04-aws-secrets-manager/content.json";
import mod04AzureKeyVaultSecretsModule from "./backend/courses/azure-for-aspnet/04-azure-key-vault-secrets/content.json";
import mod04AzureStorageProblemsModule from "./devops/problems/azure/04-azure-storage-problems/content.json";
import mod04BehavioralPatternsModule from "./architecture/courses/clean-code-csharp/04-behavioral-patterns/content.json";
import mod04ComponentTestingModule from "./frontend/courses/react-testing/04-component-testing/content.json";
import mod04ContainersAndContainerPlatformsModule from "./devops/courses/azure/04-containers-and-container-platforms/content.json";
import mod04DataOperationsConnectedModule from "./backend/courses/ef-core/04-data-operations-connected/content.json";
import mod04DatabaseDataAccessModule from "./backend/courses/dotnet-nuget-packages/04-database-data-access/content.json";
import mod04EnterprisePatternsModule from "./architecture/courses/design-patterns/04-enterprise-patterns/content.json";
import mod04FilteringPaginationModule from "./backend/courses/graphql-dotnet/04-filtering-pagination/content.json";
import mod04FormsInputModule from "./frontend/courses/react-fundamentals/04-forms-input/content.json";
import mod04IntegrationTestingModule from "./backend/courses/unit-testing-dotnet/04-integration-testing/content.json";
import mod04KubernetesAdvancedModule from "./devops/courses/devops/04-kubernetes-advanced/content.json";
import mod04McpServersToolsModule from "./ai/courses/dotnet-ai-backend/04-mcp-servers-tools/content.json";
import mod04MiddlewareModule from "./backend/courses/aspnet-core-web-api/04-middleware/content.json";
import mod04MiddlewarePipelineProblemsModule from "./backend/problems/aspnet-core/04-middleware-pipeline-problems/content.json";
import mod04ModelBindingValidationModule from "./backend/courses/aspnet-core/04-model-binding-validation/content.json";
import mod04NetworkingModule from "./devops/courses/aws/04-networking/content.json";
import mod04OauthModule from "./backend/courses/authentication-authorization/04-oauth/content.json";
import mod04OopModule from "./backend/courses/csharp-fundamentals/04-oop/content.json";
import mod04PolymorphismModule from "./fundamentals/courses/oops-concepts/04-polymorphism/content.json";
import mod04PrismaRelationsModule from "./frontend/courses/prisma/04-prisma-relations/content.json";
import mod04ReduxMiddlewareModule from "./frontend/courses/redux/04-redux-middleware/content.json";
import mod04ScenarioBasedModule from "./interview-qa/04-scenario-based/content.json";
import mod04SetOperationsModule from "./database/courses/sql-server/04-set-operations/content.json";
import mod04SortingGroupingModule from "./backend/courses/linq/04-sorting-grouping/content.json";
import mod04StateReducersModule from "./frontend/courses/react-advanced-patterns/04-state-reducers/content.json";
import mod04TreeGraphProblemsModule from "./backend/problems/csharp/04-tree-graph-problems/content.json";
import mod05AbstractionModule from "./fundamentals/courses/oops-concepts/05-abstraction/content.json";
import mod05AdvancedFeaturesModule from "./backend/courses/csharp-fundamentals/05-advanced-features/content.json";
import mod05AiAgentsDotnetModule from "./ai/courses/dotnet-ai-backend/05-ai-agents-dotnet/content.json";
import mod05AuthenticationModule from "./backend/courses/graphql-dotnet/05-authentication/content.json";
import mod05AzureDatabasesProblemsModule from "./devops/problems/azure/05-azure-databases-problems/content.json";
import mod05AzureSqlEfCoreModule from "./backend/courses/azure-for-aspnet/05-azure-sql-ef-core/content.json";
import mod05CachingStrategiesModule from "./frontend/courses/react-query/05-caching-strategies/content.json";
import mod05CiCdFundamentalsModule from "./devops/courses/devops/05-ci-cd-fundamentals/content.json";
import mod05CleanCodePracticesModule from "./architecture/courses/clean-code-csharp/05-clean-code-practices/content.json";
import mod05ClientSideCachingAdvancedModule from "./frontend/courses/apollo/05-client-side-caching-advanced/content.json";
import mod05ConcurrencyPatternsModule from "./architecture/courses/design-patterns/05-concurrency-patterns/content.json";
import mod05ControlPropsModule from "./frontend/courses/react-advanced-patterns/05-control-props/content.json";
import mod05DataOperationsDisconnectedModule from "./backend/courses/ef-core/05-data-operations-disconnected/content.json";
import mod05DependencyInjectionModule from "./backend/courses/aspnet-core-web-api/05-dependency-injection/content.json";
import mod05DependencyInjectionProblemsModule from "./backend/problems/aspnet-core/05-dependency-injection-problems/content.json";
import mod05DynamicProgrammingProblemsModule from "./backend/problems/csharp/05-dynamic-programming-problems/content.json";
import mod05E2eTestingModule from "./frontend/courses/react-testing/05-e2e-testing/content.json";
import mod05GenericComponentsModule from "./frontend/courses/typescript-for-react/05-generic-components/content.json";
import mod05GroupingAggregationSubqueriesModule from "./database/courses/sql-server/05-grouping-aggregation-subqueries/content.json";
import mod05JoiningDataModule from "./backend/courses/linq/05-joining-data/content.json";
import mod05LifecycleEffectsModule from "./frontend/courses/react-fundamentals/05-lifecycle-effects/content.json";
import mod05Oauth2FlowsDeepDiveModule from "./backend/courses/authentication-authorization/05-oauth2-flows-deep-dive/content.json";
import mod05PrismaMigrationsModule from "./frontend/courses/prisma/05-prisma-migrations/content.json";
import mod05RazorViewsModule from "./backend/courses/aspnet-core/05-razor-views/content.json";
import mod05RdsDynamodbModule from "./backend/courses/aws-for-aspnet/05-rds-dynamodb/content.json";
import mod05ReduxPatternsModule from "./frontend/courses/redux/05-redux-patterns/content.json";
import mod05SecureApiDesignModule from "./architecture/courses/fullstack-security/05-secure-api-design/content.json";
import mod05SerializationMappingModule from "./backend/courses/dotnet-nuget-packages/05-serialization-mapping/content.json";
import mod05StorageAndDataServicesModule from "./devops/courses/azure/05-storage-and-data-services/content.json";
import mod05StorageServicesModule from "./devops/courses/aws/05-storage-services/content.json";
import mod05SystemDesignModule from "./interview-qa/05-system-design/content.json";
import mod05TddModule from "./backend/courses/unit-testing-dotnet/05-tdd/content.json";
import mod06AdvancedAuthorizationModule from "./backend/courses/authentication-authorization/06-advanced-authorization/content.json";
import mod06AdvancedTestingPatternsModule from "./frontend/courses/react-testing/06-advanced-testing-patterns/content.json";
import mod06ArchitecturalPatternsModule from "./architecture/courses/design-patterns/06-architectural-patterns/content.json";
import mod06ArchitecturePatternsModule from "./architecture/courses/clean-code-csharp/06-architecture-patterns/content.json";
import mod06AzureNetworkingProblemsModule from "./devops/problems/azure/06-azure-networking-problems/content.json";
import mod06ChangeTrackingModule from "./backend/courses/ef-core/06-change-tracking/content.json";
import mod06CiCdModernToolsModule from "./devops/courses/devops/06-ci-cd-modern-tools/content.json";
import mod06CloudwatchCicdModule from "./backend/courses/aws-for-aspnet/06-cloudwatch-cicd/content.json";
import mod06ContextRefsModule from "./frontend/courses/react-fundamentals/06-context-refs/content.json";
import mod06DataModificationDmlModule from "./database/courses/sql-server/06-data-modification-dml/content.json";
import mod06DatabasesModule from "./devops/courses/aws/06-databases/content.json";
import mod06DatabasesAndCachingModule from "./devops/courses/azure/06-databases-and-caching/content.json";
import mod06DependencyInjectionModule from "./backend/courses/aspnet-core/06-dependency-injection/content.json";
import mod06DependencySecurityModule from "./architecture/courses/fullstack-security/06-dependency-security/content.json";
import mod06EfCoreProblemsModule from "./backend/problems/aspnet-core/06-ef-core-problems/content.json";
import mod06ErrorHandlingModule from "./backend/courses/csharp-fundamentals/06-error-handling/content.json";
import mod06ErrorHandlingOptimisticModule from "./frontend/courses/apollo/06-error-handling-optimistic/content.json";
import mod06ErrorHandlingValidationModule from "./backend/courses/aspnet-core-web-api/06-error-handling-validation/content.json";
import mod06InterfacesAbstractClassesModule from "./fundamentals/courses/oops-concepts/06-interfaces-abstract-classes/content.json";
import mod06MessagingEventsModule from "./backend/courses/dotnet-nuget-packages/06-messaging-events/content.json";
import mod06MonitoringCachingCicdModule from "./backend/courses/azure-for-aspnet/06-monitoring-caching-cicd/content.json";
import mod06OfflineSupportPersistenceModule from "./frontend/courses/react-query/06-offline-support-persistence/content.json";
import mod06PerformanceModule from "./backend/courses/graphql-dotnet/06-performance/content.json";
import mod06PerformancePatternsModule from "./frontend/courses/react-advanced-patterns/06-performance-patterns/content.json";
import mod06PrismaAdvancedFeaturesModule from "./frontend/courses/prisma/06-prisma-advanced-features/content.json";
import mod06ProductionPatternsModule from "./ai/courses/dotnet-ai-backend/06-production-patterns/content.json";
import mod06RapidFireModule from "./interview-qa/06-rapid-fire/content.json";
import mod06ReactPatternsModule from "./frontend/courses/typescript-for-react/06-react-patterns/content.json";
import mod06ReduxTestingModule from "./frontend/courses/redux/06-redux-testing/content.json";
import mod06SetOperationsModule from "./backend/courses/linq/06-set-operations/content.json";
import mod06SortingSearchingProblemsModule from "./backend/problems/csharp/06-sorting-searching-problems/content.json";
import mod06TestingPatternsModule from "./backend/courses/unit-testing-dotnet/06-testing-patterns/content.json";
import mod07AggregationOperatorsModule from "./backend/courses/linq/07-aggregation-operators/content.json";
import mod07AuthenticationAuthorizationProblemsModule from "./backend/problems/aspnet-core/07-authentication-authorization-problems/content.json";
import mod07AuthenticationBasicsModule from "./backend/courses/aspnet-core-web-api/07-authentication-basics/content.json";
import mod07AzureFunctionsModule from "./backend/courses/azure-for-aspnet/07-azure-functions/content.json";
import mod07AzureSecurityProblemsModule from "./devops/problems/azure/07-azure-security-problems/content.json";
import mod07CodeCoverageModule from "./backend/courses/unit-testing-dotnet/07-code-coverage/content.json";
import mod07CustomHooksArchitectureModule from "./frontend/courses/react-advanced-patterns/07-custom-hooks-architecture/content.json";
import mod07DatabaseSchemaTableObjectsModule from "./database/courses/sql-server/07-database-schema-table-objects/content.json";
import mod07DesignPrinciplesModule from "./fundamentals/courses/oops-concepts/07-design-principles/content.json";
import mod07EnvironmentSecretsModule from "./architecture/courses/fullstack-security/07-environment-secrets/content.json";
import mod07ErrorHandlingModule from "./backend/courses/graphql-dotnet/07-error-handling/content.json";
import mod07IdentitySecurityAndConfigurationModule from "./devops/courses/azure/07-identity-security-and-configuration/content.json";
import mod07InterviewTrapsModule from "./interview-qa/07-interview-traps/content.json";
import mod07LoadBalancingApplicationIntegrationModule from "./devops/courses/aws/07-load-balancing-application-integration/content.json";
import mod07MiddlewarePipelineModule from "./backend/courses/aspnet-core/07-middleware-pipeline/content.json";
import mod07ModernCsharpModule from "./backend/courses/csharp-fundamentals/07-modern-csharp/content.json";
import mod07PrefetchingSsrModule from "./frontend/courses/react-query/07-prefetching-ssr/content.json";
import mod07PrismaNextjsIntegrationModule from "./frontend/courses/prisma/07-prisma-nextjs-integration/content.json";
import mod07QueryingModule from "./backend/courses/ef-core/07-querying/content.json";
import mod07ReactRouterModule from "./frontend/courses/react-fundamentals/07-react-router/content.json";
import mod07RecursionProblemsModule from "./backend/problems/csharp/07-recursion-problems/content.json";
import mod07ReduxAdvancedConceptsModule from "./frontend/courses/redux/07-redux-advanced-concepts/content.json";
import mod07RefreshTokenStrategiesModule from "./backend/courses/authentication-authorization/07-refresh-token-strategies/content.json";
import mod07SqsSnsEventsModule from "./backend/courses/aws-for-aspnet/07-sqs-sns-events/content.json";
import mod07SubscriptionsRealtimeModule from "./frontend/courses/apollo/07-subscriptions-realtime/content.json";
import mod07TestingBestPracticesModule from "./frontend/courses/typescript-for-react/07-testing-best-practices/content.json";
import mod07TestingQualityModule from "./backend/courses/dotnet-nuget-packages/07-testing-quality/content.json";
import mod07TestingReactQueryModule from "./frontend/courses/react-testing/07-testing-react-query/content.json";
import mod08AzureAiServicesProblemsModule from "./devops/problems/azure/08-azure-ai-services-problems/content.json";
import mod08BitwiseProblemsModule from "./backend/problems/csharp/08-bitwise-problems/content.json";
import mod08DataTypesModule from "./database/courses/sql-server/08-data-types/content.json";
import mod08EntityFrameworkCoreModule from "./backend/courses/aspnet-core/08-entity-framework-core/content.json";
import mod08InheritanceStrategiesModule from "./backend/courses/ef-core/08-inheritance-strategies/content.json";
import mod08LambdaServerlessModule from "./backend/courses/aws-for-aspnet/08-lambda-serverless/content.json";
import mod08LocalStateManagementModule from "./frontend/courses/apollo/08-local-state-management/content.json";
import mod08LoggingConfigurationModule from "./backend/courses/aspnet-core-web-api/08-logging-configuration/content.json";
import mod08NetworkingAndApiPlatformsModule from "./devops/courses/azure/08-networking-and-api-platforms/content.json";
import mod08PerformanceOptimizationModule from "./frontend/courses/react-query/08-performance-optimization/content.json";
import mod08PerformanceOptimizationModule1 from "./interview-qa/08-performance-optimization/content.json";
import mod08QuantifiersElementOperatorsModule from "./backend/courses/linq/08-quantifiers-element-operators/content.json";
import mod08ReduxRealWorldModule from "./frontend/courses/redux/08-redux-real-world/content.json";
import mod08SecurityCryptographyModule from "./backend/courses/dotnet-nuget-packages/08-security-cryptography/content.json";
import mod08SecurityTestingModule from "./architecture/courses/fullstack-security/08-security-testing/content.json";
import mod08ServerlessModule from "./devops/courses/aws/08-serverless/content.json";
import mod08ServiceBusEventsModule from "./backend/courses/azure-for-aspnet/08-service-bus-events/content.json";
import mod08SsoIdentityProvidersModule from "./backend/courses/authentication-authorization/08-sso-identity-providers/content.json";
import mod08StateMachinesXstateModule from "./frontend/courses/react-advanced-patterns/08-state-machines-xstate/content.json";
import mod08StylingModule from "./frontend/courses/react-fundamentals/08-styling/content.json";
import mod08TestingDebuggingProblemsModule from "./backend/problems/aspnet-core/08-testing-debugging-problems/content.json";
import mod09AuthenticationAuthorizationModule from "./backend/courses/aspnet-core/09-authentication-authorization/content.json";
import mod09CicdPipelinesModule from "./interview-qa/09-cicd-pipelines/content.json";
import mod09ComponentCompositionStrategiesModule from "./frontend/courses/react-advanced-patterns/09-component-composition-strategies/content.json";
import mod09ConstraintsModule from "./database/courses/sql-server/09-constraints/content.json";
import mod09ContainersKubernetesModule from "./devops/courses/aws/09-containers-kubernetes/content.json";
import mod09MessagingAndEventDrivenArchitectureModule from "./devops/courses/azure/09-messaging-and-event-driven-architecture/content.json";
import mod09MigrationsModule from "./backend/courses/ef-core/09-migrations/content.json";
import mod09PartitioningOperatorsModule from "./backend/courses/linq/09-partitioning-operators/content.json";
import mod09PerformanceOptimizationModule from "./frontend/courses/react-fundamentals/09-performance-optimization/content.json";
import mod09RealWorldPatternsModule from "./frontend/courses/react-query/09-real-world-patterns/content.json";
import mod09SecurityBestPracticesModule from "./backend/courses/authentication-authorization/09-security-best-practices/content.json";
import mod09SsrNextjsPerformanceModule from "./frontend/courses/apollo/09-ssr-nextjs-performance/content.json";
import mod09UtilitiesHelpersModule from "./backend/courses/dotnet-nuget-packages/09-utilities-helpers/content.json";
import mod10AdvancedFeaturesModule from "./backend/courses/ef-core/10-advanced-features/content.json";
import mod10AdvancedHookPatternsModule from "./frontend/courses/react-advanced-patterns/10-advanced-hook-patterns/content.json";
import mod10ConversionGenerationOperatorsModule from "./backend/courses/linq/10-conversion-generation-operators/content.json";
import mod10DevopsCicdModule from "./devops/courses/aws/10-devops-cicd/content.json";
import mod10IndexesModule from "./database/courses/sql-server/10-indexes/content.json";
import mod10ObservabilityAndApplicationMonitoringModule from "./devops/courses/azure/10-observability-and-application-monitoring/content.json";
import mod10WebApiRestModule from "./backend/courses/aspnet-core/10-web-api-rest/content.json";
import mod11AdvancedLinqConceptsModule from "./backend/courses/linq/11-advanced-linq-concepts/content.json";
import mod11ApplicationDeploymentAndDevopsModule from "./devops/courses/azure/11-application-deployment-and-devops/content.json";
import mod11DatabaseFirstDiagnosticsModule from "./backend/courses/ef-core/11-database-first-diagnostics/content.json";
import mod11MonitoringLoggingObservabilityModule from "./devops/courses/aws/11-monitoring-logging-observability/content.json";
import mod11TestingDebuggingModule from "./backend/courses/aspnet-core/11-testing-debugging/content.json";
import mod11ViewsModule from "./database/courses/sql-server/11-views/content.json";
import mod12DeploymentProductionModule from "./backend/courses/aspnet-core/12-deployment-production/content.json";
import mod12InfrastructureAsCodeAndAutomationModule from "./devops/courses/azure/12-infrastructure-as-code-and-automation/content.json";
import mod12PerformanceBulkOperationsModule from "./backend/courses/ef-core/12-performance-bulk-operations/content.json";
import mod12SecurityServicesModule from "./devops/courses/aws/12-security-services/content.json";
import mod12StoredProceduresFunctionsModule from "./database/courses/sql-server/12-stored-procedures-functions/content.json";
import mod13AiServicesForAzureDevelopersModule from "./devops/courses/azure/13-ai-services-for-azure-developers/content.json";
import mod13AnalyticsBigDataModule from "./devops/courses/aws/13-analytics-big-data/content.json";
import mod13TriggersModule from "./database/courses/sql-server/13-triggers/content.json";
import mod14AiMachineLearningModule from "./devops/courses/aws/14-ai-machine-learning/content.json";
import mod14TransactionsErrorHandlingBackupModule from "./database/courses/sql-server/14-transactions-error-handling-backup/content.json";
import mod15AdvancedTopicsModule from "./database/courses/sql-server/15-advanced-topics/content.json";
import mod15DeveloperToolsApplicationServicesModule from "./devops/courses/aws/15-developer-tools-application-services/content.json";
import mod16IdentityForApplicationsModule from "./devops/courses/aws/16-identity-for-applications/content.json";
import mod16PerformanceTuningModule from "./database/courses/sql-server/16-performance-tuning/content.json";
import mod17MigrationHybridCloudModule from "./devops/courses/aws/17-migration-hybrid-cloud/content.json";
import mod17SecurityHardeningModule from "./database/courses/sql-server/17-security-hardening/content.json";
import mod18HighAvailabilityDrModule from "./database/courses/sql-server/18-high-availability-dr/content.json";
import mod18InfrastructureAutomationModule from "./devops/courses/aws/18-infrastructure-automation/content.json";
import mod19DataWarehousingModule from "./database/courses/sql-server/19-data-warehousing/content.json";
import mod19HighAvailabilityDisasterRecoveryModule from "./devops/courses/aws/19-high-availability-disaster-recovery/content.json";
import mod20AwsArchitectureDesignPatternsModule from "./devops/courses/aws/20-aws-architecture-design-patterns/content.json";
import mod20AzureSqlModule from "./database/courses/sql-server/20-azure-sql/content.json";
import mod21ModernDataToolsModule from "./database/courses/sql-server/21-modern-data-tools/content.json";
import advancedAsyncConcurrencyThreadingModule from "./backend/courses/csharp-fundamentals/advanced-async-concurrency-threading/content.json";
import advancedCRuntimeMemoryConcurrencyModule from "./backend/courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/content.json";
import advancedGitWorkflowsModule from "./devops/courses/git-linux-developer-workflow/advanced-git-workflows/content.json";
import advancedPatternsModule from "./backend/courses/dotnet-nuget-packages/advanced-patterns/content.json";
import advancedPatternsModule1 from "./frontend/courses/yarn-npm-packages/advanced-patterns/content.json";
import advancedPromptingModule from "./ai/courses/ai-basics/advanced-prompting/content.json";
import advancedRebaseModule from "./devops/courses/git-linux-developer-workflow/advanced-rebase/content.json";
import advancedTopicsModule from "./database/courses/postgresql/advanced-topics/content.json";
import advancedTypeModelingRuntimeSafetyModule from "./frontend/courses/typescript-for-react/advanced-type-modeling-runtime-safety/content.json";
import agenticWorkflowsModule from "./ai/courses/codex/agentic-workflows/content.json";
import agentsIntroductionModule from "./ai/courses/ai-basics/agents-introduction/content.json";
import aiBasicsModule from "./ai/courses/ai-basics/content.json";
import aiCodingToolsModule from "./ai/courses/codex/ai-coding-tools/content.json";
import aiToolsOverviewModule from "./ai/courses/ai-basics/ai-tools-overview/content.json";
import aiWorkflowsModule from "./ai/courses/ai-basics/ai-workflows/content.json";
import airbnbBookingModule from "./architecture/problems/lld/airbnb-booking/content.json";
import airbnbBookingHldModule from "./architecture/problems/hld/airbnb-booking-hld/content.json";
import amazonEcommerceModule from "./architecture/problems/lld/amazon-ecommerce/content.json";
import amazonEcommerceHldModule from "./architecture/problems/hld/amazon-ecommerce-hld/content.json";
import animationModule from "./frontend/courses/yarn-npm-packages/animation/content.json";
import apiDesignModule from "./architecture/courses/system-design-interviews/api-design/content.json";
import apiDesignModule1 from "./backend/problems/api-design/content.json";
import apiDocumentationSwaggerModule from "./backend/courses/dotnet-nuget-packages/api-documentation-swagger/content.json";
import apiGatewayPatternsModule from "./architecture/courses/microservices-architecture/api-gateway-patterns/content.json";
import apiVersioningProblemsModule from "./backend/problems/api-design/api-versioning-problems/content.json";
import apolloModule from "./frontend/courses/apollo/content.json";
import apolloModule1 from "./frontend/cheatsheet/apollo/content.json";
import appRouterRenderingModule from "./frontend/courses/next-js-full-stack-react/app-router-rendering/content.json";
import architectureFollowUpsModule from "./interview-qa/architecture-follow-ups/content.json";
import aspNetCoreInternalsProductionHostingModule from "./backend/courses/aspnet-core/asp-net-core-internals-production-hosting/content.json";
import aspnetCoreModule from "./backend/courses/aspnet-core/content.json";
import aspnetCoreModule1 from "./backend/problems/aspnet-core/content.json";
import aspnetCoreModule2 from "./backend/cheatsheet/aspnet-core/content.json";
import aspnetCoreWebApiModule from "./backend/courses/aspnet-core-web-api/content.json";
import aspnetSystemDesignModule from "./architecture/problems/system-design/aspnet-system-design/content.json";
import atmMachineModule from "./architecture/problems/lld/atm-machine/content.json";
import authenticationAuthorizationModule from "./backend/courses/authentication-authorization/content.json";
import automationBasicsModule from "./ai/courses/ai-basics/automation-basics/content.json";
import awsModule from "./devops/courses/aws/content.json";
import awsModule1 from "./devops/cheatsheet/aws/content.json";
import awsForAspnetModule from "./backend/courses/aws-for-aspnet/content.json";
import azureModule from "./devops/courses/azure/content.json";
import azureModule1 from "./devops/problems/azure/content.json";
import azureModule2 from "./devops/cheatsheet/azure/content.json";
import azureForAspnetModule from "./backend/courses/azure-for-aspnet/content.json";
import backendDatabaseFollowUpsModule from "./interview-qa/backend-database-follow-ups/content.json";
import bankingAppModule from "./architecture/problems/lld/banking-app/content.json";
import behavioralInterviewQuestionsModule from "./interview-qa/behavioral-interview-questions/content.json";
import browserReactPerformanceModule from "./architecture/courses/frontend-performance-engineering/browser-react-performance/content.json";
import buildOptimizationModule from "./architecture/courses/frontend-performance-engineering/build-optimization/content.json";
import buildToolsModule from "./frontend/courses/yarn-npm-packages/build-tools/content.json";
import cNetFollowUpsModule from "./interview-qa/c-net-follow-ups/content.json";
import cacheInvalidationModule from "./architecture/courses/redis-caching-strategies/cache-invalidation/content.json";
import cachingInAspnetCoreModule from "./architecture/courses/redis-caching-strategies/caching-in-aspnet-core/content.json";
import cachingInNodejsModule from "./architecture/courses/redis-caching-strategies/caching-in-nodejs/content.json";
import cachingPatternsModule from "./architecture/courses/redis-caching-strategies/caching-patterns/content.json";
import cachingStrategiesModule from "./architecture/courses/system-design-interviews/caching-strategies/content.json";
import capacityEstimationModule from "./architecture/courses/system-design-interviews/capacity-estimation/content.json";
import chatSystemHldModule from "./architecture/problems/hld/chat-system-hld/content.json";
import chatbotsInDepthModule from "./ai/courses/ai-basics/chatbots-in-depth/content.json";
import ciCdSafeDeliveryModule from "./devops/courses/devops/ci-cd-safe-delivery/content.json";
import claudeModule from "./ai/courses/claude/content.json";
import claudeApiAndIntegrationsModule from "./ai/courses/claude/claude-api-and-integrations/content.json";
import claudeArtifactsModule from "./ai/courses/claude/claude-artifacts/content.json";
import claudeForResearchModule from "./ai/courses/claude/claude-for-research/content.json";
import claudeForWritingModule from "./ai/courses/claude/claude-for-writing/content.json";
import cleanCodeCsharpModule from "./architecture/courses/clean-code-csharp/content.json";
import cloudIntegrationModule from "./backend/courses/dotnet-nuget-packages/cloud-integration/content.json";
import codexModule from "./ai/courses/codex/content.json";
import commonSystemDesignsModule from "./architecture/courses/system-design-interviews/common-system-designs/content.json";
import concurrencyProductionDatabaseProblemsModule from "./database/courses/sql-server/concurrency-production-database-problems/content.json";
import consistencyAvailabilityModule from "./architecture/courses/system-design-interviews/consistency-availability/content.json";
import constraintsModule from "./database/courses/postgresql/constraints/content.json";
import csharpModule from "./backend/problems/csharp/content.json";
import csharpModule1 from "./backend/cheatsheet/csharp/content.json";
import csharpFundamentalsModule from "./backend/courses/csharp-fundamentals/content.json";
import dataFetchingPatternsModule from "./frontend/courses/next-js-full-stack-react/data-fetching-patterns/content.json";
import dataManagementModule from "./architecture/courses/microservices-architecture/data-management/content.json";
import dataModificationDmlModule from "./database/courses/postgresql/data-modification-dml/content.json";
import dataStructuresDeepDiveModule from "./fundamentals/courses/programming-computer-web-foundations/data-structures-deep-dive/content.json";
import dataTypesModule from "./database/courses/postgresql/data-types/content.json";
import databaseDesignModule from "./architecture/courses/system-design-interviews/database-design/content.json";
import databaseDesignModule1 from "./database/problems/database-design/content.json";
import databaseInternalsQueryOptimizationModule from "./database/courses/sql-server/database-internals-query-optimization/content.json";
import databaseSchemaTableObjectsModule from "./database/courses/postgresql/database-schema-table-objects/content.json";
import deadLetterQueuesModule from "./architecture/courses/message-queues-event-streaming/dead-letter-queues/content.json";
import designPatternsModule from "./architecture/courses/design-patterns/content.json";
import devopsModule from "./devops/courses/devops/content.json";
import devopsSystemDesignModule from "./architecture/problems/system-design/devops-system-design/content.json";
import distributedCachingModule from "./architecture/courses/redis-caching-strategies/distributed-caching/content.json";
import distributedSystemsFundamentalsModule from "./architecture/problems/system-design/distributed-systems-fundamentals/content.json";
import distributedSystemsFundamentalsModule1 from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/content.json";
import distributedTransactionsModule from "./architecture/courses/microservices-architecture/distributed-transactions/content.json";
import dockerComposeModule from "./devops/cheatsheet/docker-compose/content.json";
import dotnetAiBackendModule from "./ai/courses/dotnet-ai-backend/content.json";
import dotnetNugetPackagesModule from "./backend/courses/dotnet-nuget-packages/content.json";
import dropboxStorageModule from "./architecture/problems/hld/dropbox-storage/content.json";
import ecommerceHldModule from "./architecture/problems/hld/ecommerce-hld/content.json";
import efCoreModule from "./backend/courses/ef-core/content.json";
import efCoreModule1 from "./backend/cheatsheet/ef-core/content.json";
import efCorePerformanceOrmTradeOffsModule from "./backend/courses/ef-core/ef-core-performance-orm-trade-offs/content.json";
import elevatorSystemModule from "./architecture/problems/lld/elevator-system/content.json";
import embeddingsAndVectorsModule from "./ai/courses/ai-basics/embeddings-and-vectors/content.json";
import errorHandlingDesignModule from "./backend/problems/api-design/error-handling-design/content.json";
import eventDrivenArchitectureModule from "./architecture/courses/microservices-architecture/event-driven-architecture/content.json";
import eventSourcingModule from "./architecture/courses/message-queues-event-streaming/event-sourcing/content.json";
import eventStreamingKafkaModule from "./architecture/courses/message-queues-event-streaming/event-streaming-kafka/content.json";
import facebookNewsFeedModule from "./architecture/problems/lld/facebook-news-feed/content.json";
import foodDeliveryModule from "./architecture/problems/lld/food-delivery/content.json";
import foodDeliveryHldModule from "./architecture/problems/hld/food-delivery-hld/content.json";
import formsModule from "./frontend/courses/yarn-npm-packages/forms/content.json";
import frontendFrameworksModule from "./frontend/courses/yarn-npm-packages/frontend-frameworks/content.json";
import frontendPerformanceEngineeringModule from "./architecture/courses/frontend-performance-engineering/content.json";
import fullStackApiDesignModule from "./frontend/courses/next-js-full-stack-react/full-stack-api-design/content.json";
import fullStackSeniorProjectsModule from "./architecture/problems/full-stack-senior-projects/content.json";
import fullstackSecurityModule from "./architecture/courses/fullstack-security/content.json";
import gettingStartedModule from "./ai/courses/claude/getting-started/content.json";
import gettingStartedModule1 from "./database/courses/postgresql/getting-started/content.json";
import gitBisectDebuggingModule from "./devops/courses/git-linux-developer-workflow/git-bisect-debugging/content.json";
import gitForSeniorEngineersModule from "./devops/courses/git-linux-developer-workflow/git-for-senior-engineers/content.json";
import gitHooksModule from "./devops/courses/git-linux-developer-workflow/git-hooks/content.json";
import gitInternalsModule from "./devops/courses/git-linux-developer-workflow/git-internals/content.json";
import gitLinuxDeveloperWorkflowModule from "./devops/courses/git-linux-developer-workflow/content.json";
import gitPerformanceModule from "./devops/courses/git-linux-developer-workflow/git-performance/content.json";
import gitSecurityModule from "./devops/courses/git-linux-developer-workflow/git-security/content.json";
import gitWorkflowsModule from "./devops/courses/git-linux-developer-workflow/git-workflows/content.json";
import googleDriveStorageModule from "./architecture/problems/lld/google-drive-storage/content.json";
import googleSearchModule from "./architecture/problems/hld/google-search/content.json";
import graphqlModule from "./backend/cheatsheet/graphql/content.json";
import graphqlDotnetModule from "./backend/courses/graphql-dotnet/content.json";
import groupingAggregationSubqueriesModule from "./database/courses/postgresql/grouping-aggregation-subqueries/content.json";
import hallucinationsAndAccuracyModule from "./ai/courses/ai-basics/hallucinations-and-accuracy/content.json";
import highAvailabilityDrModule from "./database/courses/postgresql/high-availability-dr/content.json";
import hldModule from "./architecture/problems/hld/content.json";
import hotelManagementModule from "./architecture/problems/lld/hotel-management/content.json";
import httpClientsModule from "./frontend/courses/yarn-npm-packages/http-clients/content.json";
import httpClientsResilienceModule from "./backend/courses/dotnet-nuget-packages/http-clients-resilience/content.json";
import indexOptimizationModule from "./database/problems/database-design/index-optimization/content.json";
import indexesModule from "./database/courses/postgresql/indexes/content.json";
import instagramFeedModule from "./architecture/problems/hld/instagram-feed/content.json";
import instagramPhotoSharingModule from "./architecture/problems/lld/instagram-photo-sharing/content.json";
import introToAiCodingModule from "./ai/courses/codex/intro-to-ai-coding/content.json";
import javascriptModule from "./frontend/cheatsheet/javascript/content.json";
import joinsModule from "./database/courses/postgresql/joins/content.json";
import leadershipOwnershipModule from "./interview-qa/leadership-ownership/content.json";
import libraryManagementModule from "./architecture/problems/lld/library-management/content.json";
import linkedinProfessionalModule from "./architecture/problems/lld/linkedin-professional/content.json";
import linkedinProfessionalHldModule from "./architecture/problems/hld/linkedin-professional-hld/content.json";
import linqModule from "./backend/courses/linq/content.json";
import linqModule1 from "./backend/cheatsheet/linq/content.json";
import linuxProductionTroubleshootingModule from "./devops/courses/git-linux-developer-workflow/linux-production-troubleshooting/content.json";
import lldModule from "./architecture/problems/lld/content.json";
import loadBalancingModule from "./architecture/courses/system-design-interviews/load-balancing/content.json";
import localVsCloudAiModule from "./ai/courses/ai-basics/local-vs-cloud-ai/content.json";
import loggingMonitoringModule from "./backend/courses/dotnet-nuget-packages/logging-monitoring/content.json";
import masteringClaudeModule from "./ai/courses/claude/mastering-claude/content.json";
import mcpAndSkillsModule from "./ai/courses/ai-basics/mcp-and-skills/content.json";
import messageBrokerSelectionModule from "./architecture/courses/message-queues-event-streaming/message-broker-selection/content.json";
import messageOrderingIdempotencyModule from "./architecture/courses/message-queues-event-streaming/message-ordering-idempotency/content.json";
import messageQueueFundamentalsModule from "./architecture/courses/message-queues-event-streaming/message-queue-fundamentals/content.json";
import messageQueuesEventStreamingModule from "./architecture/courses/message-queues-event-streaming/content.json";
import microservicesArchitectureModule from "./architecture/courses/microservices-architecture/content.json";
import microservicesFundamentalsModule from "./architecture/courses/microservices-architecture/microservices-fundamentals/content.json";
import mockInterviewScenariosModule from "./interview-qa/mock-interview-scenarios/content.json";
import modernDataToolsModule from "./database/courses/postgresql/modern-data-tools/content.json";
import modernStateApplicationArchitectureModule from "./frontend/courses/react-advanced-patterns/modern-state-application-architecture/content.json";
import modernWebSecurityIdentityModule from "./architecture/courses/fullstack-security/modern-web-security-identity/content.json";
import movieTicketBookingModule from "./architecture/problems/lld/movie-ticket-booking/content.json";
import multimodalAiModule from "./ai/courses/ai-basics/multimodal-ai/content.json";
import netflixStreamingModule from "./architecture/problems/lld/netflix-streaming/content.json";
import networkingProtocolsModule from "./fundamentals/courses/programming-computer-web-foundations/networking-protocols/content.json";
import nextJsFullStackReactModule from "./frontend/courses/next-js-full-stack-react/content.json";
import normalizationExercisesModule from "./database/problems/database-design/normalization-exercises/content.json";
import notificationSystemModule from "./architecture/problems/hld/notification-system/content.json";
import observabilityModule from "./architecture/courses/microservices-architecture/observability/content.json";
import oopsConceptsModule from "./fundamentals/courses/oops-concepts/content.json";
import parkingLotSystemModule from "./architecture/problems/lld/parking-lot-system/content.json";
import paymentGatewayModule from "./architecture/problems/lld/payment-gateway/content.json";
import paymentGatewayHldModule from "./architecture/problems/hld/payment-gateway-hld/content.json";
import performanceObservabilityModule from "./backend/courses/aspnet-core/performance-observability/content.json";
import performanceOptimizationModule from "./architecture/courses/redis-caching-strategies/performance-optimization/content.json";
import performanceTuningModule from "./database/courses/postgresql/performance-tuning/content.json";
import personalAiStackModule from "./ai/courses/ai-basics/personal-ai-stack/content.json";
import postgresqlModule from "./database/courses/postgresql/content.json";
import practicalAiWorkflowsModule from "./ai/courses/codex/practical-ai-workflows/content.json";
import prismaModule from "./frontend/courses/prisma/content.json";
import privacyAndDataModule from "./ai/courses/ai-basics/privacy-and-data/content.json";
import productionApiDesignReliabilityModule from "./backend/courses/aspnet-core-web-api/production-api-design-reliability/content.json";
import productionArchitectureReliabilityCostModule from "./devops/courses/azure/production-architecture-reliability-cost/content.json";
import productionDockerContainerSecurityModule from "./devops/courses/devops/production-docker-container-security/content.json";
import productionKubernetesDay2OperationsModule from "./devops/courses/devops/production-kubernetes-day-2-operations/content.json";
import productionOwnershipModule from "./fundamentals/courses/senior-software-engineering/production-ownership/content.json";
import productionReadinessModule from "./devops/courses/git-linux-developer-workflow/production-readiness/content.json";
import programmingComputerFundamentalsModule from "./fundamentals/courses/programming-computer-web-foundations/programming-computer-fundamentals/content.json";
import programmingComputerWebFoundationsModule from "./fundamentals/courses/programming-computer-web-foundations/content.json";
import project1EnterpriseExpensePlatformModule from "./architecture/problems/full-stack-senior-projects/project-1-enterprise-expense-platform/content.json";
import project2CollaborativeCommunicationPlatformModule from "./architecture/problems/full-stack-senior-projects/project-2-collaborative-communication-platform/content.json";
import project3ProductionIncidentSimulatorModule from "./architecture/problems/full-stack-senior-projects/project-3-production-incident-simulator/content.json";
import promptEngineeringForCodeModule from "./ai/courses/codex/prompt-engineering-for-code/content.json";
import promptingBasicsModule from "./ai/courses/ai-basics/prompting-basics/content.json";
import publishSubscribePatternsModule from "./architecture/courses/message-queues-event-streaming/publish-subscribe-patterns/content.json";
import queryOptimizationModule from "./database/problems/database-design/query-optimization/content.json";
import queryingDataModule from "./database/courses/postgresql/querying-data/content.json";
import ragAndMemoryModule from "./ai/courses/ai-basics/rag-and-memory/content.json";
import rateLimiterModule from "./architecture/problems/hld/rate-limiter/content.json";
import rateLimitingDesignModule from "./backend/problems/api-design/rate-limiting-design/content.json";
import reactModule from "./frontend/cheatsheet/react/content.json";
import reactAdvancedPatternsModule from "./frontend/courses/react-advanced-patterns/content.json";
import reactDataFetchingModule from "./frontend/courses/yarn-npm-packages/react-data-fetching/content.json";
import reactEcosystemModule from "./frontend/courses/yarn-npm-packages/react-ecosystem/content.json";
import reactFormsInputModule from "./frontend/courses/yarn-npm-packages/react-forms-input/content.json";
import reactFrontendFollowUpsModule from "./interview-qa/react-frontend-follow-ups/content.json";
import reactFundamentalsModule from "./frontend/courses/react-fundamentals/content.json";
import reactHooksPatternsModule from "./frontend/courses/yarn-npm-packages/react-hooks-patterns/content.json";
import reactInternalsModernRenderingModule from "./frontend/courses/react-fundamentals/react-internals-modern-rendering/content.json";
import reactPerformanceModule from "./frontend/courses/yarn-npm-packages/react-performance/content.json";
import reactQueryModule from "./frontend/courses/react-query/content.json";
import reactRouterModule from "./frontend/cheatsheet/react-router/content.json";
import reactSystemDesignModule from "./architecture/problems/system-design/react-system-design/content.json";
import reactTestingModule from "./frontend/courses/react-testing/content.json";
import reactTestingModule1 from "./frontend/courses/yarn-npm-packages/react-testing/content.json";
import realWorldCaseStudiesModule from "./architecture/courses/system-design-interviews/real-world-case-studies/content.json";
import redisCachingStrategiesModule from "./architecture/courses/redis-caching-strategies/content.json";
import redisFundamentalsModule from "./architecture/courses/redis-caching-strategies/redis-fundamentals/content.json";
import redisUseCasesModule from "./architecture/courses/redis-caching-strategies/redis-use-cases/content.json";
import reduxModule from "./frontend/courses/redux/content.json";
import reduxModule1 from "./frontend/cheatsheet/redux/content.json";
import requirementClarificationModule from "./architecture/courses/system-design-interviews/requirement-clarification/content.json";
import researchAndSearchToolsModule from "./ai/courses/ai-basics/research-and-search-tools/content.json";
import resiliencePatternsModule from "./architecture/courses/microservices-architecture/resilience-patterns/content.json";
import restApiDesignScenariosModule from "./backend/problems/api-design/rest-api-design-scenarios/content.json";
import rideSharingHldModule from "./architecture/problems/hld/ride-sharing-hld/content.json";
import routingModule from "./frontend/courses/yarn-npm-packages/routing/content.json";
import runtimePerformanceModule from "./architecture/courses/frontend-performance-engineering/runtime-performance/content.json";
import safetyAndLimitationsModule from "./ai/courses/ai-basics/safety-and-limitations/content.json";
import scalabilityPatternsModule from "./architecture/courses/system-design-interviews/scalability-patterns/content.json";
import schemaDesignScenariosModule from "./database/problems/database-design/schema-design-scenarios/content.json";
import searchAutocompleteModule from "./architecture/problems/hld/search-autocomplete/content.json";
import securityAndTestingModule from "./ai/courses/codex/security-and-testing/content.json";
import securityHardeningModule from "./database/courses/postgresql/security-hardening/content.json";
import securityInMicroservicesModule from "./architecture/courses/microservices-architecture/security-in-microservices/content.json";
import seniorEngineeringJudgmentArchitectureDecisionsModule from "./architecture/courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/content.json";
import seniorSoftwareEngineeringModule from "./fundamentals/courses/senior-software-engineering/content.json";
import serviceDiscoveryModule from "./architecture/courses/microservices-architecture/service-discovery/content.json";
import serviceToServiceCommunicationModule from "./architecture/courses/microservices-architecture/service-to-service-communication/content.json";
import setOperationsModule from "./database/courses/postgresql/set-operations/content.json";
import slackMessagingModule from "./architecture/problems/lld/slack-messaging/content.json";
import slackMessagingHldModule from "./architecture/problems/hld/slack-messaging-hld/content.json";
import spotifyMusicModule from "./architecture/problems/lld/spotify-music/content.json";
import spotifyMusicHldModule from "./architecture/problems/hld/spotify-music-hld/content.json";
import sqlModule from "./database/problems/sql/content.json";
import sqlServerModule from "./database/courses/sql-server/content.json";
import sqlServerModule1 from "./database/cheatsheet/sql-server/content.json";
import stateManagementModule from "./frontend/courses/next-js-full-stack-react/state-management/content.json";
import stateManagementModule1 from "./frontend/courses/yarn-npm-packages/state-management/content.json";
import stayingCurrentModule from "./ai/courses/ai-basics/staying-current/content.json";
import storedProceduresFunctionsModule from "./database/courses/postgresql/stored-procedures-functions/content.json";
import streamProcessingModule from "./architecture/courses/message-queues-event-streaming/stream-processing/content.json";
import stylingModule from "./frontend/courses/yarn-npm-packages/styling/content.json";
import submodulesSubtreesModule from "./devops/courses/git-linux-developer-workflow/submodules-subtrees/content.json";
import systemDesignModule from "./architecture/problems/system-design/content.json";
import systemDesignForSeniorsModule from "./fundamentals/courses/senior-software-engineering/system-design-for-seniors/content.json";
import systemDesignFrameworkModule from "./architecture/courses/system-design-interviews/system-design-framework/content.json";
import systemDesignInterviewsModule from "./architecture/courses/system-design-interviews/content.json";
import technicalDecisionMakingModule from "./fundamentals/courses/senior-software-engineering/technical-decision-making/content.json";
import technicalLeadershipModule from "./fundamentals/courses/senior-software-engineering/technical-leadership/content.json";
import testingModule from "./frontend/courses/yarn-npm-packages/testing/content.json";
import testingStrategyForSeniorFrontendEngineersModule from "./frontend/courses/react-testing/testing-strategy-for-senior-frontend-engineers/content.json";
import ticTacToeGameModule from "./architecture/problems/lld/tic-tac-toe-game/content.json";
import ticketBookingHldModule from "./architecture/problems/hld/ticket-booking-hld/content.json";
import toolCallingBasicsModule from "./ai/courses/ai-basics/tool-calling-basics/content.json";
import transactionsErrorHandlingBackupModule from "./database/courses/postgresql/transactions-error-handling-backup/content.json";
import triggersModule from "./database/courses/postgresql/triggers/content.json";
import twitterSocialModule from "./architecture/problems/lld/twitter-social/content.json";
import twitterSocialHldModule from "./architecture/problems/hld/twitter-social-hld/content.json";
import typescriptModule from "./frontend/cheatsheet/typescript/content.json";
import typescriptForReactModule from "./frontend/courses/typescript-for-react/content.json";
import uberRideSharingModule from "./architecture/problems/lld/uber-ride-sharing/content.json";
import uberRideSharingHldModule from "./architecture/problems/hld/uber-ride-sharing-hld/content.json";
import understandingLlmsModule from "./ai/courses/ai-basics/understanding-llms/content.json";
import unitTestingDotnetModule from "./backend/courses/unit-testing-dotnet/content.json";
import urlShortenerModule from "./architecture/problems/hld/url-shortener/content.json";
import utilitiesModule from "./frontend/courses/yarn-npm-packages/utilities/content.json";
import validationAuthorizationModule from "./backend/courses/dotnet-nuget-packages/validation-authorization/content.json";
import vendingMachineModule from "./architecture/problems/lld/vending-machine/content.json";
import videoStreamingHldModule from "./architecture/problems/hld/video-streaming-hld/content.json";
import viewsModule from "./database/courses/postgresql/views/content.json";
import webCrawlerModule from "./architecture/problems/hld/web-crawler/content.json";
import webNetworkingFundamentalsModule from "./fundamentals/courses/programming-computer-web-foundations/web-networking-fundamentals/content.json";
import whatIsAiModule from "./ai/courses/ai-basics/what-is-ai/content.json";
import whatIsClaudeModule from "./ai/courses/claude/what-is-claude/content.json";
import whatsappChatModule from "./architecture/problems/lld/whatsapp-chat/content.json";
import whatsappChatHldModule from "./architecture/problems/hld/whatsapp-chat-hld/content.json";
import writingAndContentToolsModule from "./ai/courses/ai-basics/writing-and-content-tools/content.json";
import yarnNpmFundamentalsModule from "./frontend/courses/yarn-npm-packages/yarn-npm-fundamentals/content.json";
import yarnNpmPackagesModule from "./frontend/courses/yarn-npm-packages/content.json";
import youtubeStreamingModule from "./architecture/problems/hld/youtube-streaming/content.json";
import youtubeVideoModule from "./architecture/problems/lld/youtube-video/content.json";
import zoomConferencingModule from "./architecture/problems/lld/zoom-conferencing/content.json";
import zoomConferencingHldModule from "./architecture/problems/hld/zoom-conferencing-hld/content.json";

const rawModulesPart1 = [
	{ ...mod01AiBackendTerminologyModule, urlCategory: "ai" },
	{ ...mod01ApolloBasicsModule, urlCategory: "frontend" },
	{ ...mod01ArrayProblemsModule, urlCategory: "backend" },
	{ ...mod01AuthBasicsModule, urlCategory: "backend" },
	{ ...mod01AwsForDotnetOverviewModule, urlCategory: "backend" },
	{ ...mod01AwsFundamentalsCloudConceptsModule, urlCategory: "devops" },
	{ ...mod01AzureDeveloperFoundationsModule, urlCategory: "devops" },
	{ ...mod01AzureForDotnetOverviewModule, urlCategory: "backend" },
	{ ...mod01AzureFoundationsProblemsModule, urlCategory: "devops" },
	{ ...mod01BeginnerQuestionsModule, urlCategory: "" },
	{ ...mod01CorsConfigurationModule, urlCategory: "architecture" },
	{ ...mod01CreationalPatternsModule, urlCategory: "architecture" },
	{ ...mod01DockerFundamentalsModule, urlCategory: "devops" },
	{ ...mod01GettingStartedModule, urlCategory: "backend" },
	{ ...mod01GettingStartedModule1, urlCategory: "backend" },
	{ ...mod01GettingStartedModule2, urlCategory: "backend" },
	{ ...mod01GettingStartedModule3, urlCategory: "backend" },
	{ ...mod01GettingStartedModule4, urlCategory: "database" },
	{ ...mod01GettingStartedModule5, urlCategory: "frontend" },
	{ ...mod01GettingStartedEfCoreModule, urlCategory: "backend" },
	{ ...mod01GettingStartedLinqModule, urlCategory: "backend" },
	{ ...mod01MvcFundamentalsProblemsModule, urlCategory: "backend" },
	{ ...mod01NugetFundamentalsModule, urlCategory: "backend" },
	{ ...mod01OopFundamentalsModule, urlCategory: "fundamentals" },
	{ ...mod01PrismaBasicsModule, urlCategory: "frontend" },
	{ ...mod01QueryBasicsModule, urlCategory: "frontend" },
	{ ...mod01ReduxFundamentalsModule, urlCategory: "frontend" },
	{ ...mod01RenderPropsModule, urlCategory: "frontend" },
	{ ...mod01SolidPrinciplesModule, urlCategory: "architecture" },
	{ ...mod01SqlBasicsModule, urlCategory: "database" },
	{ ...mod01TestingFundamentalsModule, urlCategory: "backend" },
	{ ...mod01TestingFundamentalsModule1, urlCategory: "frontend" },
	{ ...mod01TypescriptBasicsModule, urlCategory: "frontend" },
	{ ...mod02AzureAppServiceDeploymentModule, urlCategory: "backend" },
	{ ...mod02AzureComputeProblemsModule, urlCategory: "devops" },
	{ ...mod02ComponentsPropsModule, urlCategory: "frontend" },
	{ ...mod02ComputeAndAppHostingModule, urlCategory: "devops" },
	{ ...mod02ControllersRoutingModule, urlCategory: "backend" },
	{ ...mod02CoreExtensionsModule, urlCategory: "backend" },
	{ ...mod02CreationalPatternsModule, urlCategory: "architecture" },
	{ ...mod02DbcontextConfigurationModule, urlCategory: "backend" },
	{ ...mod02DockerAdvancedModule, urlCategory: "devops" },
	{ ...mod02ElasticBeanstalkEcsDeploymentModule, urlCategory: "backend" },
	{ ...mod02EncapsulationDataHidingModule, urlCategory: "fundamentals" },
	{ ...mod02HigherOrderComponentsModule, urlCategory: "frontend" },
	{ ...mod02IdentityAccessGovernanceModule, urlCategory: "devops" },
	{ ...mod02IntermediateQuestionsModule, urlCategory: "" },
	{ ...mod02JestBasicsModule, urlCategory: "frontend" },
	{ ...mod02JwtModule, urlCategory: "backend" },
	{ ...mod02JwtAuthenticationModule, urlCategory: "architecture" },
	{ ...mod02LinqFundamentalsSyntaxModule, urlCategory: "backend" },
	{ ...mod02MvcFundamentalsModule, urlCategory: "backend" },
	{ ...mod02PrismaSchemaDesignModule, urlCategory: "frontend" },
	{ ...mod02QueriesMutationsModule, urlCategory: "frontend" },
	{ ...mod02QueryHooksModule, urlCategory: "frontend" },
	{ ...mod02QueryingDataModule, urlCategory: "database" },
	{ ...mod02RagImplementationModule, urlCategory: "ai" },
	{ ...mod02RazorViewsProblemsModule, urlCategory: "backend" },
	{ ...mod02ReduxToolkitModule, urlCategory: "frontend" },
	{ ...mod02SchemaTypesModule, urlCategory: "backend" },
	{ ...mod02SqlIntermediateModule, urlCategory: "database" },
	{ ...mod02StringProblemsModule, urlCategory: "backend" },
	{ ...mod02StructuralPatternsModule, urlCategory: "architecture" },
	{ ...mod02TypesInReactModule, urlCategory: "frontend" },
	{ ...mod02VariablesTypesModule, urlCategory: "backend" },
	{ ...mod02XunitBasicsModule, urlCategory: "backend" },
	{ ...mod03AdvancedQuestionsModule, urlCategory: "" },
	{ ...mod03ApiDesignProblemsModule, urlCategory: "backend" },
	{ ...mod03AspnetWebModule, urlCategory: "backend" },
	{ ...mod03AzureServerlessProblemsModule, urlCategory: "devops" },
	{ ...mod03AzureStorageBlobsQueuesModule, urlCategory: "backend" },
	{ ...mod03BehavioralPatternsModule, urlCategory: "architecture" },
	{ ...mod03CachingModule, urlCategory: "frontend" },
	{ ...mod03CompoundComponentsModule, urlCategory: "frontend" },
	{ ...mod03ComputeServicesModule, urlCategory: "devops" },
	{ ...mod03ControlFlowModule, urlCategory: "backend" },
	{ ...mod03ConventionsRelationshipsModule, urlCategory: "backend" },
	{ ...mod03FilteringProjectionModule, urlCategory: "backend" },
	{ ...mod03IdentityModule, urlCategory: "backend" },
	{ ...mod03InheritanceModule, urlCategory: "fundamentals" },
	{ ...mod03JoinsModule, urlCategory: "database" },
	{ ...mod03KubernetesFundamentalsModule, urlCategory: "devops" },
	{ ...mod03LinkedListProblemsModule, urlCategory: "backend" },
	{ ...mod03McpFundamentalsModule, urlCategory: "ai" },
	{ ...mod03MockingFakesModule, urlCategory: "backend" },
	{ ...mod03ModelBindingModule, urlCategory: "backend" },
	{ ...mod03MutationsModule, urlCategory: "frontend" },
	{ ...mod03PrismaQueriesMutationsModule, urlCategory: "frontend" },
	{ ...mod03QueriesMutationsModule, urlCategory: "backend" },
	{ ...mod03ReactReduxModule, urlCategory: "frontend" },
	{ ...mod03ReactTestingLibraryModule, urlCategory: "frontend" },
	{ ...mod03RoutingUrlsModule, urlCategory: "backend" },
	{ ...mod03S3StorageCsharpModule, urlCategory: "backend" },
	{ ...mod03ServerlessAndAzureFunctionsModule, urlCategory: "devops" },
	{ ...mod03SqlAdvancedModule, urlCategory: "database" },
	{ ...mod03StateEventsModule, urlCategory: "frontend" },
	{ ...mod03StructuralPatternsModule, urlCategory: "architecture" },
	{ ...mod03TypingHooksModule, urlCategory: "frontend" },
	{ ...mod03XssCsrfProtectionModule, urlCategory: "architecture" },
	{ ...mod04AdvancedFeaturesModule, urlCategory: "frontend" },
	{ ...mod04AdvancedPatternsModule, urlCategory: "frontend" },
	{ ...mod04AdvancedTypesModule, urlCategory: "frontend" },
	{ ...mod04ApiSecurityRateLimitingModule, urlCategory: "architecture" },
	{ ...mod04AwsSecretsManagerModule, urlCategory: "backend" },
	{ ...mod04AzureKeyVaultSecretsModule, urlCategory: "backend" },
	{ ...mod04AzureStorageProblemsModule, urlCategory: "devops" },
	{ ...mod04BehavioralPatternsModule, urlCategory: "architecture" },
	{ ...mod04ComponentTestingModule, urlCategory: "frontend" },
	{ ...mod04ContainersAndContainerPlatformsModule, urlCategory: "devops" },
	{ ...mod04DataOperationsConnectedModule, urlCategory: "backend" },
	{ ...mod04DatabaseDataAccessModule, urlCategory: "backend" },
	{ ...mod04EnterprisePatternsModule, urlCategory: "architecture" },
	{ ...mod04FilteringPaginationModule, urlCategory: "backend" },
	{ ...mod04FormsInputModule, urlCategory: "frontend" },
	{ ...mod04IntegrationTestingModule, urlCategory: "backend" },
	{ ...mod04KubernetesAdvancedModule, urlCategory: "devops" },
	{ ...mod04McpServersToolsModule, urlCategory: "ai" },
	{ ...mod04MiddlewareModule, urlCategory: "backend" },
	{ ...mod04MiddlewarePipelineProblemsModule, urlCategory: "backend" },
	{ ...mod04ModelBindingValidationModule, urlCategory: "backend" },
	{ ...mod04NetworkingModule, urlCategory: "devops" },
	{ ...mod04OauthModule, urlCategory: "backend" },
	{ ...mod04OopModule, urlCategory: "backend" },
	{ ...mod04PolymorphismModule, urlCategory: "fundamentals" },
	{ ...mod04PrismaRelationsModule, urlCategory: "frontend" },
	{ ...mod04ReduxMiddlewareModule, urlCategory: "frontend" },
	{ ...mod04ScenarioBasedModule, urlCategory: "" },
	{ ...mod04SetOperationsModule, urlCategory: "database" },
	{ ...mod04SortingGroupingModule, urlCategory: "backend" },
	{ ...mod04StateReducersModule, urlCategory: "frontend" },
	{ ...mod04TreeGraphProblemsModule, urlCategory: "backend" },
	{ ...mod05AbstractionModule, urlCategory: "fundamentals" },
	{ ...mod05AdvancedFeaturesModule, urlCategory: "backend" },
	{ ...mod05AiAgentsDotnetModule, urlCategory: "ai" },
	{ ...mod05AuthenticationModule, urlCategory: "backend" },
	{ ...mod05AzureDatabasesProblemsModule, urlCategory: "devops" },
	{ ...mod05AzureSqlEfCoreModule, urlCategory: "backend" },
	{ ...mod05CachingStrategiesModule, urlCategory: "frontend" },
	{ ...mod05CiCdFundamentalsModule, urlCategory: "devops" },
	{ ...mod05CleanCodePracticesModule, urlCategory: "architecture" },
	{ ...mod05ClientSideCachingAdvancedModule, urlCategory: "frontend" },
	{ ...mod05ConcurrencyPatternsModule, urlCategory: "architecture" },
	{ ...mod05ControlPropsModule, urlCategory: "frontend" },
	{ ...mod05DataOperationsDisconnectedModule, urlCategory: "backend" },
	{ ...mod05DependencyInjectionModule, urlCategory: "backend" },
	{ ...mod05DependencyInjectionProblemsModule, urlCategory: "backend" },
	{ ...mod05DynamicProgrammingProblemsModule, urlCategory: "backend" },
	{ ...mod05E2eTestingModule, urlCategory: "frontend" },
	{ ...mod05GenericComponentsModule, urlCategory: "frontend" },
	{ ...mod05GroupingAggregationSubqueriesModule, urlCategory: "database" },
	{ ...mod05JoiningDataModule, urlCategory: "backend" },
	{ ...mod05LifecycleEffectsModule, urlCategory: "frontend" },
	{ ...mod05Oauth2FlowsDeepDiveModule, urlCategory: "backend" },
	{ ...mod05PrismaMigrationsModule, urlCategory: "frontend" },
	{ ...mod05RazorViewsModule, urlCategory: "backend" },
	{ ...mod05RdsDynamodbModule, urlCategory: "backend" },
	{ ...mod05ReduxPatternsModule, urlCategory: "frontend" },
	{ ...mod05SecureApiDesignModule, urlCategory: "architecture" },
	{ ...mod05SerializationMappingModule, urlCategory: "backend" },
	{ ...mod05StorageAndDataServicesModule, urlCategory: "devops" },
	{ ...mod05StorageServicesModule, urlCategory: "devops" },
	{ ...mod05SystemDesignModule, urlCategory: "" },
	{ ...mod05TddModule, urlCategory: "backend" },
	{ ...mod06AdvancedAuthorizationModule, urlCategory: "backend" },
	{ ...mod06AdvancedTestingPatternsModule, urlCategory: "frontend" },
	{ ...mod06ArchitecturalPatternsModule, urlCategory: "architecture" },
	{ ...mod06ArchitecturePatternsModule, urlCategory: "architecture" },
	{ ...mod06AzureNetworkingProblemsModule, urlCategory: "devops" },
	{ ...mod06ChangeTrackingModule, urlCategory: "backend" },
	{ ...mod06CiCdModernToolsModule, urlCategory: "devops" },
	{ ...mod06CloudwatchCicdModule, urlCategory: "backend" },
	{ ...mod06ContextRefsModule, urlCategory: "frontend" },
	{ ...mod06DataModificationDmlModule, urlCategory: "database" },
	{ ...mod06DatabasesModule, urlCategory: "devops" },
	{ ...mod06DatabasesAndCachingModule, urlCategory: "devops" },
	{ ...mod06DependencyInjectionModule, urlCategory: "backend" },
	{ ...mod06DependencySecurityModule, urlCategory: "architecture" },
	{ ...mod06EfCoreProblemsModule, urlCategory: "backend" },
	{ ...mod06ErrorHandlingModule, urlCategory: "backend" },
	{ ...mod06ErrorHandlingOptimisticModule, urlCategory: "frontend" },
	{ ...mod06ErrorHandlingValidationModule, urlCategory: "backend" },
	{ ...mod06InterfacesAbstractClassesModule, urlCategory: "fundamentals" },
	{ ...mod06MessagingEventsModule, urlCategory: "backend" },
	{ ...mod06MonitoringCachingCicdModule, urlCategory: "backend" },
	{ ...mod06OfflineSupportPersistenceModule, urlCategory: "frontend" },
	{ ...mod06PerformanceModule, urlCategory: "backend" },
	{ ...mod06PerformancePatternsModule, urlCategory: "frontend" },
	{ ...mod06PrismaAdvancedFeaturesModule, urlCategory: "frontend" },
	{ ...mod06ProductionPatternsModule, urlCategory: "ai" },
	{ ...mod06RapidFireModule, urlCategory: "" },
	{ ...mod06ReactPatternsModule, urlCategory: "frontend" },
	{ ...mod06ReduxTestingModule, urlCategory: "frontend" },
	{ ...mod06SetOperationsModule, urlCategory: "backend" },
	{ ...mod06SortingSearchingProblemsModule, urlCategory: "backend" },
	{ ...mod06TestingPatternsModule, urlCategory: "backend" },
	{ ...mod07AggregationOperatorsModule, urlCategory: "backend" },
	{ ...mod07AuthenticationAuthorizationProblemsModule, urlCategory: "backend" },
	{ ...mod07AuthenticationBasicsModule, urlCategory: "backend" },
	{ ...mod07AzureFunctionsModule, urlCategory: "backend" },
	{ ...mod07AzureSecurityProblemsModule, urlCategory: "devops" },
	{ ...mod07CodeCoverageModule, urlCategory: "backend" },
	{ ...mod07CustomHooksArchitectureModule, urlCategory: "frontend" },
	{ ...mod07DatabaseSchemaTableObjectsModule, urlCategory: "database" },
	{ ...mod07DesignPrinciplesModule, urlCategory: "fundamentals" },
	{ ...mod07EnvironmentSecretsModule, urlCategory: "architecture" },
	{ ...mod07ErrorHandlingModule, urlCategory: "backend" },
	{ ...mod07IdentitySecurityAndConfigurationModule, urlCategory: "devops" },
	{ ...mod07InterviewTrapsModule, urlCategory: "" },
	{ ...mod07LoadBalancingApplicationIntegrationModule, urlCategory: "devops" },
	{ ...mod07MiddlewarePipelineModule, urlCategory: "backend" },
	{ ...mod07ModernCsharpModule, urlCategory: "backend" },
	{ ...mod07PrefetchingSsrModule, urlCategory: "frontend" },
	{ ...mod07PrismaNextjsIntegrationModule, urlCategory: "frontend" },
	{ ...mod07QueryingModule, urlCategory: "backend" },
	{ ...mod07ReactRouterModule, urlCategory: "frontend" },
	{ ...mod07RecursionProblemsModule, urlCategory: "backend" },
	{ ...mod07ReduxAdvancedConceptsModule, urlCategory: "frontend" },
	{ ...mod07RefreshTokenStrategiesModule, urlCategory: "backend" },
	{ ...mod07SqsSnsEventsModule, urlCategory: "backend" },
	{ ...mod07SubscriptionsRealtimeModule, urlCategory: "frontend" },
	{ ...mod07TestingBestPracticesModule, urlCategory: "frontend" },
	{ ...mod07TestingQualityModule, urlCategory: "backend" },
	{ ...mod07TestingReactQueryModule, urlCategory: "frontend" },
	{ ...mod08AzureAiServicesProblemsModule, urlCategory: "devops" },
	{ ...mod08BitwiseProblemsModule, urlCategory: "backend" },
	{ ...mod08DataTypesModule, urlCategory: "database" },
	{ ...mod08EntityFrameworkCoreModule, urlCategory: "backend" },
	{ ...mod08InheritanceStrategiesModule, urlCategory: "backend" },
	{ ...mod08LambdaServerlessModule, urlCategory: "backend" },
	{ ...mod08LocalStateManagementModule, urlCategory: "frontend" },
	{ ...mod08LoggingConfigurationModule, urlCategory: "backend" },
	{ ...mod08NetworkingAndApiPlatformsModule, urlCategory: "devops" },
	{ ...mod08PerformanceOptimizationModule, urlCategory: "frontend" },
	{ ...mod08PerformanceOptimizationModule1, urlCategory: "" },
	{ ...mod08QuantifiersElementOperatorsModule, urlCategory: "backend" },
	{ ...mod08ReduxRealWorldModule, urlCategory: "frontend" },
	{ ...mod08SecurityCryptographyModule, urlCategory: "backend" },
	{ ...mod08SecurityTestingModule, urlCategory: "architecture" },
	{ ...mod08ServerlessModule, urlCategory: "devops" },
	{ ...mod08ServiceBusEventsModule, urlCategory: "backend" },
	{ ...mod08SsoIdentityProvidersModule, urlCategory: "backend" },
	{ ...mod08StateMachinesXstateModule, urlCategory: "frontend" },
	{ ...mod08StylingModule, urlCategory: "frontend" },
	{ ...mod08TestingDebuggingProblemsModule, urlCategory: "backend" },
	{ ...mod09AuthenticationAuthorizationModule, urlCategory: "backend" },
	{ ...mod09CicdPipelinesModule, urlCategory: "" },
	{ ...mod09ComponentCompositionStrategiesModule, urlCategory: "frontend" },
	{ ...mod09ConstraintsModule, urlCategory: "database" },
	{ ...mod09ContainersKubernetesModule, urlCategory: "devops" },
	{ ...mod09MessagingAndEventDrivenArchitectureModule, urlCategory: "devops" },
	{ ...mod09MigrationsModule, urlCategory: "backend" },
	{ ...mod09PartitioningOperatorsModule, urlCategory: "backend" },
	{ ...mod09PerformanceOptimizationModule, urlCategory: "frontend" },
	{ ...mod09RealWorldPatternsModule, urlCategory: "frontend" },
	{ ...mod09SecurityBestPracticesModule, urlCategory: "backend" },
	{ ...mod09SsrNextjsPerformanceModule, urlCategory: "frontend" },
	{ ...mod09UtilitiesHelpersModule, urlCategory: "backend" },
	{ ...mod10AdvancedFeaturesModule, urlCategory: "backend" },
	{ ...mod10AdvancedHookPatternsModule, urlCategory: "frontend" },
	{ ...mod10ConversionGenerationOperatorsModule, urlCategory: "backend" },
	{ ...mod10DevopsCicdModule, urlCategory: "devops" },
	{ ...mod10IndexesModule, urlCategory: "database" },
	{ ...mod10ObservabilityAndApplicationMonitoringModule, urlCategory: "devops" },
	{ ...mod10WebApiRestModule, urlCategory: "backend" },
	{ ...mod11AdvancedLinqConceptsModule, urlCategory: "backend" },
	{ ...mod11ApplicationDeploymentAndDevopsModule, urlCategory: "devops" },
	{ ...mod11DatabaseFirstDiagnosticsModule, urlCategory: "backend" },
	{ ...mod11MonitoringLoggingObservabilityModule, urlCategory: "devops" },
	{ ...mod11TestingDebuggingModule, urlCategory: "backend" },
	{ ...mod11ViewsModule, urlCategory: "database" },
	{ ...mod12DeploymentProductionModule, urlCategory: "backend" },
	{ ...mod12InfrastructureAsCodeAndAutomationModule, urlCategory: "devops" },
	{ ...mod12PerformanceBulkOperationsModule, urlCategory: "backend" },
	{ ...mod12SecurityServicesModule, urlCategory: "devops" },
	{ ...mod12StoredProceduresFunctionsModule, urlCategory: "database" },
	{ ...mod13AiServicesForAzureDevelopersModule, urlCategory: "devops" },
	{ ...mod13AnalyticsBigDataModule, urlCategory: "devops" },
	{ ...mod13TriggersModule, urlCategory: "database" },
	{ ...mod14AiMachineLearningModule, urlCategory: "devops" },
	{ ...mod14TransactionsErrorHandlingBackupModule, urlCategory: "database" },
	{ ...mod15AdvancedTopicsModule, urlCategory: "database" },
	{ ...mod15DeveloperToolsApplicationServicesModule, urlCategory: "devops" },
	{ ...mod16IdentityForApplicationsModule, urlCategory: "devops" },
	{ ...mod16PerformanceTuningModule, urlCategory: "database" },
	{ ...mod17MigrationHybridCloudModule, urlCategory: "devops" },
	{ ...mod17SecurityHardeningModule, urlCategory: "database" },
	{ ...mod18HighAvailabilityDrModule, urlCategory: "database" },
	{ ...mod18InfrastructureAutomationModule, urlCategory: "devops" },
	{ ...mod19DataWarehousingModule, urlCategory: "database" },
	{ ...mod19HighAvailabilityDisasterRecoveryModule, urlCategory: "devops" },
	{ ...mod20AwsArchitectureDesignPatternsModule, urlCategory: "devops" },
	{ ...mod20AzureSqlModule, urlCategory: "database" },
	{ ...mod21ModernDataToolsModule, urlCategory: "database" },
	{ ...advancedAsyncConcurrencyThreadingModule, urlCategory: "backend" },
	{ ...advancedCRuntimeMemoryConcurrencyModule, urlCategory: "backend" },
	{ ...advancedGitWorkflowsModule, urlCategory: "devops" },
	{ ...advancedPatternsModule, urlCategory: "backend" },
	{ ...advancedPatternsModule1, urlCategory: "frontend" },
	{ ...advancedPromptingModule, urlCategory: "ai" },
	{ ...advancedRebaseModule, urlCategory: "devops" },
	{ ...advancedTopicsModule, urlCategory: "database" },
	{ ...advancedTypeModelingRuntimeSafetyModule, urlCategory: "frontend" },
	{ ...agenticWorkflowsModule, urlCategory: "ai" },
	{ ...agentsIntroductionModule, urlCategory: "ai" },
	{ ...aiBasicsModule, urlCategory: "ai" },
	{ ...aiCodingToolsModule, urlCategory: "ai" },
	{ ...aiToolsOverviewModule, urlCategory: "ai" },
	{ ...aiWorkflowsModule, urlCategory: "ai" },
	{ ...airbnbBookingModule, urlCategory: "architecture" },
	{ ...airbnbBookingHldModule, urlCategory: "architecture" },
	{ ...amazonEcommerceModule, urlCategory: "architecture" },
	{ ...amazonEcommerceHldModule, urlCategory: "architecture" },
	{ ...animationModule, urlCategory: "frontend" },
	{ ...apiDesignModule, urlCategory: "architecture" },
	{ ...apiDesignModule1, urlCategory: "backend" },
	{ ...apiDocumentationSwaggerModule, urlCategory: "backend" },
	{ ...apiGatewayPatternsModule, urlCategory: "architecture" },
	{ ...apiVersioningProblemsModule, urlCategory: "backend" },
	{ ...apolloModule, urlCategory: "frontend" },
	{ ...apolloModule1, urlCategory: "frontend" },
	{ ...appRouterRenderingModule, urlCategory: "frontend" },
	{ ...architectureFollowUpsModule, urlCategory: "" },
	{ ...aspNetCoreInternalsProductionHostingModule, urlCategory: "backend" },
	{ ...aspnetCoreModule, urlCategory: "backend" },
	{ ...aspnetCoreModule1, urlCategory: "backend" },
	{ ...aspnetCoreModule2, urlCategory: "backend" },
	{ ...aspnetCoreWebApiModule, urlCategory: "backend" },
	{ ...aspnetSystemDesignModule, urlCategory: "architecture" },
	{ ...atmMachineModule, urlCategory: "architecture" },
	{ ...authenticationAuthorizationModule, urlCategory: "backend" },
	{ ...automationBasicsModule, urlCategory: "ai" },
	{ ...awsModule, urlCategory: "devops" },
	{ ...awsModule1, urlCategory: "devops" },
	{ ...awsForAspnetModule, urlCategory: "backend" },
	{ ...azureModule, urlCategory: "devops" },
	{ ...azureModule1, urlCategory: "devops" },
	{ ...azureModule2, urlCategory: "devops" },
	{ ...azureForAspnetModule, urlCategory: "backend" },
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
	{ ...chatbotsInDepthModule, urlCategory: "ai" },
	{ ...ciCdSafeDeliveryModule, urlCategory: "devops" },
	{ ...claudeModule, urlCategory: "ai" },
	{ ...claudeApiAndIntegrationsModule, urlCategory: "ai" },
	{ ...claudeArtifactsModule, urlCategory: "ai" },
	{ ...claudeForResearchModule, urlCategory: "ai" },
	{ ...claudeForWritingModule, urlCategory: "ai" },
	{ ...cleanCodeCsharpModule, urlCategory: "architecture" },
	{ ...cloudIntegrationModule, urlCategory: "backend" },
	{ ...codexModule, urlCategory: "ai" },
	{ ...commonSystemDesignsModule, urlCategory: "architecture" },
	{ ...concurrencyProductionDatabaseProblemsModule, urlCategory: "database" },
	{ ...consistencyAvailabilityModule, urlCategory: "architecture" },
	{ ...constraintsModule, urlCategory: "database" },
	{ ...csharpModule, urlCategory: "backend" },
	{ ...csharpModule1, urlCategory: "backend" },
	{ ...csharpFundamentalsModule, urlCategory: "backend" },
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
	{ ...dotnetNugetPackagesModule, urlCategory: "backend" },
	{ ...dropboxStorageModule, urlCategory: "architecture" },
	{ ...ecommerceHldModule, urlCategory: "architecture" },
	{ ...efCoreModule, urlCategory: "backend" },
	{ ...efCoreModule1, urlCategory: "backend" },
	{ ...efCorePerformanceOrmTradeOffsModule, urlCategory: "backend" },
	{ ...elevatorSystemModule, urlCategory: "architecture" },
	{ ...embeddingsAndVectorsModule, urlCategory: "ai" },
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
	{ ...gettingStartedModule, urlCategory: "ai" },
	{ ...gettingStartedModule1, urlCategory: "database" },
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
	{ ...graphqlModule, urlCategory: "backend" },
	{ ...graphqlDotnetModule, urlCategory: "backend" },
	{ ...groupingAggregationSubqueriesModule, urlCategory: "database" },
	{ ...hallucinationsAndAccuracyModule, urlCategory: "ai" },
	{ ...highAvailabilityDrModule, urlCategory: "database" },
	{ ...hldModule, urlCategory: "architecture" },
	{ ...hotelManagementModule, urlCategory: "architecture" },
	{ ...httpClientsModule, urlCategory: "frontend" },
	{ ...httpClientsResilienceModule, urlCategory: "backend" },
	{ ...indexOptimizationModule, urlCategory: "database" },
	{ ...indexesModule, urlCategory: "database" },
	{ ...instagramFeedModule, urlCategory: "architecture" },
	{ ...instagramPhotoSharingModule, urlCategory: "architecture" },
	{ ...introToAiCodingModule, urlCategory: "ai" },
	{ ...javascriptModule, urlCategory: "frontend" },
	{ ...joinsModule, urlCategory: "database" },
	{ ...leadershipOwnershipModule, urlCategory: "" },
	{ ...libraryManagementModule, urlCategory: "architecture" },
	{ ...linkedinProfessionalModule, urlCategory: "architecture" },
	{ ...linkedinProfessionalHldModule, urlCategory: "architecture" },
	{ ...linqModule, urlCategory: "backend" },
	{ ...linqModule1, urlCategory: "backend" },
	{ ...linuxProductionTroubleshootingModule, urlCategory: "devops" },
	{ ...lldModule, urlCategory: "architecture" },
	{ ...loadBalancingModule, urlCategory: "architecture" },
	{ ...localVsCloudAiModule, urlCategory: "ai" },
	{ ...loggingMonitoringModule, urlCategory: "backend" },
	{ ...masteringClaudeModule, urlCategory: "ai" },
	{ ...mcpAndSkillsModule, urlCategory: "ai" },
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
	{ ...multimodalAiModule, urlCategory: "ai" },
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
	{ ...performanceObservabilityModule, urlCategory: "backend" },
	{ ...performanceOptimizationModule, urlCategory: "architecture" },
	{ ...performanceTuningModule, urlCategory: "database" },
	{ ...personalAiStackModule, urlCategory: "ai" },
	{ ...postgresqlModule, urlCategory: "database" },
	{ ...practicalAiWorkflowsModule, urlCategory: "ai" },
	{ ...prismaModule, urlCategory: "frontend" },
	{ ...privacyAndDataModule, urlCategory: "ai" },
	{ ...productionApiDesignReliabilityModule, urlCategory: "backend" },
	{ ...productionArchitectureReliabilityCostModule, urlCategory: "devops" },
	{ ...productionDockerContainerSecurityModule, urlCategory: "devops" },
	{ ...productionKubernetesDay2OperationsModule, urlCategory: "devops" },
	{ ...productionOwnershipModule, urlCategory: "fundamentals" },
	{ ...productionReadinessModule, urlCategory: "devops" },
	{ ...programmingComputerFundamentalsModule, urlCategory: "fundamentals" },
	{ ...programmingComputerWebFoundationsModule, urlCategory: "fundamentals" },
	{ ...project1EnterpriseExpensePlatformModule, urlCategory: "architecture" },
	{ ...project2CollaborativeCommunicationPlatformModule, urlCategory: "architecture" },
	{ ...project3ProductionIncidentSimulatorModule, urlCategory: "architecture" },
	{ ...promptEngineeringForCodeModule, urlCategory: "ai" },
	{ ...promptingBasicsModule, urlCategory: "ai" },
	{ ...publishSubscribePatternsModule, urlCategory: "architecture" },
	{ ...queryOptimizationModule, urlCategory: "database" },
	{ ...queryingDataModule, urlCategory: "database" },
	{ ...ragAndMemoryModule, urlCategory: "ai" },
	{ ...rateLimiterModule, urlCategory: "architecture" },
	{ ...rateLimitingDesignModule, urlCategory: "backend" },
	{ ...reactModule, urlCategory: "frontend" },
];

const rawModulesPart2 = [
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
	{ ...researchAndSearchToolsModule, urlCategory: "ai" },
	{ ...resiliencePatternsModule, urlCategory: "architecture" },
	{ ...restApiDesignScenariosModule, urlCategory: "backend" },
	{ ...rideSharingHldModule, urlCategory: "architecture" },
	{ ...routingModule, urlCategory: "frontend" },
	{ ...runtimePerformanceModule, urlCategory: "architecture" },
	{ ...safetyAndLimitationsModule, urlCategory: "ai" },
	{ ...scalabilityPatternsModule, urlCategory: "architecture" },
	{ ...schemaDesignScenariosModule, urlCategory: "database" },
	{ ...searchAutocompleteModule, urlCategory: "architecture" },
	{ ...securityAndTestingModule, urlCategory: "ai" },
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
	{ ...stayingCurrentModule, urlCategory: "ai" },
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
	{ ...toolCallingBasicsModule, urlCategory: "ai" },
	{ ...transactionsErrorHandlingBackupModule, urlCategory: "database" },
	{ ...triggersModule, urlCategory: "database" },
	{ ...twitterSocialModule, urlCategory: "architecture" },
	{ ...twitterSocialHldModule, urlCategory: "architecture" },
	{ ...typescriptModule, urlCategory: "frontend" },
	{ ...typescriptForReactModule, urlCategory: "frontend" },
	{ ...uberRideSharingModule, urlCategory: "architecture" },
	{ ...uberRideSharingHldModule, urlCategory: "architecture" },
	{ ...understandingLlmsModule, urlCategory: "ai" },
	{ ...unitTestingDotnetModule, urlCategory: "backend" },
	{ ...urlShortenerModule, urlCategory: "architecture" },
	{ ...utilitiesModule, urlCategory: "frontend" },
	{ ...validationAuthorizationModule, urlCategory: "backend" },
	{ ...vendingMachineModule, urlCategory: "architecture" },
	{ ...videoStreamingHldModule, urlCategory: "architecture" },
	{ ...viewsModule, urlCategory: "database" },
	{ ...webCrawlerModule, urlCategory: "architecture" },
	{ ...webNetworkingFundamentalsModule, urlCategory: "fundamentals" },
	{ ...whatIsAiModule, urlCategory: "ai" },
	{ ...whatIsClaudeModule, urlCategory: "ai" },
	{ ...whatsappChatModule, urlCategory: "architecture" },
	{ ...whatsappChatHldModule, urlCategory: "architecture" },
	{ ...writingAndContentToolsModule, urlCategory: "ai" },
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
