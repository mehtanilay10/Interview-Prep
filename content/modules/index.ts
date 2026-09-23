import type { Module } from "@/types";

import mod01ApolloBasicsModule from "../courses/apollo/01-apollo-basics/content.json";
import mod01ArrayProblemsModule from "../problems/csharp/01-array-problems/content.json";
import mod01AuthBasicsModule from "../courses/authentication-authorization/01-auth-basics/content.json";
import mod01AwsFundamentalsCloudConceptsModule from "../courses/aws/01-aws-fundamentals-cloud-concepts/content.json";
import mod01AzureDeveloperFoundationsModule from "../courses/azure/01-azure-developer-foundations/content.json";
import mod01AzureFoundationsProblemsModule from "../problems/azure/01-azure-foundations-problems/content.json";
import mod01BeginnerQuestionsModule from "../interview-qa/01-beginner-questions/content.json";
import mod01CorsConfigurationModule from "../courses/fullstack-security/01-cors-configuration/content.json";
import mod01CreationalPatternsModule from "../courses/design-patterns/01-creational-patterns/content.json";
import mod01DockerFundamentalsModule from "../courses/devops/01-docker-fundamentals/content.json";
import mod01GettingStartedModule from "../courses/aspnet-core/01-getting-started/content.json";
import mod01GettingStartedModule1 from "../courses/aspnet-core-web-api/01-getting-started/content.json";
import mod01GettingStartedModule2 from "../courses/csharp-fundamentals/01-getting-started/content.json";
import mod01GettingStartedModule3 from "../courses/graphql-dotnet/01-getting-started/content.json";
import mod01GettingStartedModule4 from "../courses/react-fundamentals/01-getting-started/content.json";
import mod01GettingStartedModule5 from "../courses/sql-server/01-getting-started/content.json";
import mod01GettingStartedEfCoreModule from "../courses/ef-core/01-getting-started-ef-core/content.json";
import mod01GettingStartedLinqModule from "../courses/linq/01-getting-started-linq/content.json";
import mod01MvcFundamentalsProblemsModule from "../problems/aspnet-core/01-mvc-fundamentals-problems/content.json";
import mod01NugetFundamentalsModule from "../courses/dotnet-nuget-packages/01-nuget-fundamentals/content.json";
import mod01OopFundamentalsModule from "../courses/oops-concepts/01-oop-fundamentals/content.json";
import mod01QueryBasicsModule from "../courses/react-query/01-query-basics/content.json";
import mod01ReduxFundamentalsModule from "../courses/redux/01-redux-fundamentals/content.json";
import mod01RenderPropsModule from "../courses/react-advanced-patterns/01-render-props/content.json";
import mod01SolidPrinciplesModule from "../courses/clean-code-csharp/01-solid-principles/content.json";
import mod01SqlBasicsModule from "../problems/sql/01-sql-basics/content.json";
import mod01TestingFundamentalsModule from "../courses/react-testing/01-testing-fundamentals/content.json";
import mod01TestingFundamentalsModule1 from "../courses/unit-testing-dotnet/01-testing-fundamentals/content.json";
import mod01TypescriptBasicsModule from "../courses/typescript-for-react/01-typescript-basics/content.json";
import mod02AzureComputeProblemsModule from "../problems/azure/02-azure-compute-problems/content.json";
import mod02ComponentsPropsModule from "../courses/react-fundamentals/02-components-props/content.json";
import mod02ComputeAndAppHostingModule from "../courses/azure/02-compute-and-app-hosting/content.json";
import mod02ControllersRoutingModule from "../courses/aspnet-core-web-api/02-controllers-routing/content.json";
import mod02CoreExtensionsModule from "../courses/dotnet-nuget-packages/02-core-extensions/content.json";
import mod02CreationalPatternsModule from "../courses/clean-code-csharp/02-creational-patterns/content.json";
import mod02DbcontextConfigurationModule from "../courses/ef-core/02-dbcontext-configuration/content.json";
import mod02DockerAdvancedModule from "../courses/devops/02-docker-advanced/content.json";
import mod02EncapsulationDataHidingModule from "../courses/oops-concepts/02-encapsulation-data-hiding/content.json";
import mod02HigherOrderComponentsModule from "../courses/react-advanced-patterns/02-higher-order-components/content.json";
import mod02IdentityAccessGovernanceModule from "../courses/aws/02-identity-access-governance/content.json";
import mod02IntermediateQuestionsModule from "../interview-qa/02-intermediate-questions/content.json";
import mod02JestBasicsModule from "../courses/react-testing/02-jest-basics/content.json";
import mod02JwtModule from "../courses/authentication-authorization/02-jwt/content.json";
import mod02JwtAuthenticationModule from "../courses/fullstack-security/02-jwt-authentication/content.json";
import mod02LinqFundamentalsSyntaxModule from "../courses/linq/02-linq-fundamentals-syntax/content.json";
import mod02MvcFundamentalsModule from "../courses/aspnet-core/02-mvc-fundamentals/content.json";
import mod02QueriesMutationsModule from "../courses/apollo/02-queries-mutations/content.json";
import mod02QueryHooksModule from "../courses/react-query/02-query-hooks/content.json";
import mod02QueryingDataModule from "../courses/sql-server/02-querying-data/content.json";
import mod02RazorViewsProblemsModule from "../problems/aspnet-core/02-razor-views-problems/content.json";
import mod02ReduxToolkitModule from "../courses/redux/02-redux-toolkit/content.json";
import mod02SchemaTypesModule from "../courses/graphql-dotnet/02-schema-types/content.json";
import mod02SqlIntermediateModule from "../problems/sql/02-sql-intermediate/content.json";
import mod02StringProblemsModule from "../problems/csharp/02-string-problems/content.json";
import mod02StructuralPatternsModule from "../courses/design-patterns/02-structural-patterns/content.json";
import mod02TypesInReactModule from "../courses/typescript-for-react/02-types-in-react/content.json";
import mod02VariablesTypesModule from "../courses/csharp-fundamentals/02-variables-types/content.json";
import mod02XunitBasicsModule from "../courses/unit-testing-dotnet/02-xunit-basics/content.json";
import mod03AdvancedQuestionsModule from "../interview-qa/03-advanced-questions/content.json";
import mod03ApiDesignProblemsModule from "../problems/aspnet-core/03-api-design-problems/content.json";
import mod03AspnetWebModule from "../courses/dotnet-nuget-packages/03-aspnet-web/content.json";
import mod03AzureServerlessProblemsModule from "../problems/azure/03-azure-serverless-problems/content.json";
import mod03BehavioralPatternsModule from "../courses/design-patterns/03-behavioral-patterns/content.json";
import mod03CachingModule from "../courses/apollo/03-caching/content.json";
import mod03CompoundComponentsModule from "../courses/react-advanced-patterns/03-compound-components/content.json";
import mod03ComputeServicesModule from "../courses/aws/03-compute-services/content.json";
import mod03ControlFlowModule from "../courses/csharp-fundamentals/03-control-flow/content.json";
import mod03ConventionsRelationshipsModule from "../courses/ef-core/03-conventions-relationships/content.json";
import mod03FilteringProjectionModule from "../courses/linq/03-filtering-projection/content.json";
import mod03IdentityModule from "../courses/authentication-authorization/03-identity/content.json";
import mod03InheritanceModule from "../courses/oops-concepts/03-inheritance/content.json";
import mod03JoinsModule from "../courses/sql-server/03-joins/content.json";
import mod03KubernetesFundamentalsModule from "../courses/devops/03-kubernetes-fundamentals/content.json";
import mod03LinkedListProblemsModule from "../problems/csharp/03-linked-list-problems/content.json";
import mod03MockingFakesModule from "../courses/unit-testing-dotnet/03-mocking-fakes/content.json";
import mod03ModelBindingModule from "../courses/aspnet-core-web-api/03-model-binding/content.json";
import mod03MutationsModule from "../courses/react-query/03-mutations/content.json";
import mod03QueriesMutationsModule from "../courses/graphql-dotnet/03-queries-mutations/content.json";
import mod03ReactReduxModule from "../courses/redux/03-react-redux/content.json";
import mod03ReactTestingLibraryModule from "../courses/react-testing/03-react-testing-library/content.json";
import mod03RoutingUrlsModule from "../courses/aspnet-core/03-routing-urls/content.json";
import mod03ServerlessAndAzureFunctionsModule from "../courses/azure/03-serverless-and-azure-functions/content.json";
import mod03SqlAdvancedModule from "../problems/sql/03-sql-advanced/content.json";
import mod03StateEventsModule from "../courses/react-fundamentals/03-state-events/content.json";
import mod03StructuralPatternsModule from "../courses/clean-code-csharp/03-structural-patterns/content.json";
import mod03TypingHooksModule from "../courses/typescript-for-react/03-typing-hooks/content.json";
import mod03XssCsrfProtectionModule from "../courses/fullstack-security/03-xss-csrf-protection/content.json";
import mod04AdvancedFeaturesModule from "../courses/react-query/04-advanced-features/content.json";
import mod04AdvancedPatternsModule from "../courses/apollo/04-advanced-patterns/content.json";
import mod04AdvancedTypesModule from "../courses/typescript-for-react/04-advanced-types/content.json";
import mod04ApiSecurityRateLimitingModule from "../courses/fullstack-security/04-api-security-rate-limiting/content.json";
import mod04AzureStorageProblemsModule from "../problems/azure/04-azure-storage-problems/content.json";
import mod04BehavioralPatternsModule from "../courses/clean-code-csharp/04-behavioral-patterns/content.json";
import mod04ComponentTestingModule from "../courses/react-testing/04-component-testing/content.json";
import mod04ContainersAndContainerPlatformsModule from "../courses/azure/04-containers-and-container-platforms/content.json";
import mod04DataOperationsConnectedModule from "../courses/ef-core/04-data-operations-connected/content.json";
import mod04DatabaseDataAccessModule from "../courses/dotnet-nuget-packages/04-database-data-access/content.json";
import mod04EnterprisePatternsModule from "../courses/design-patterns/04-enterprise-patterns/content.json";
import mod04FilteringPaginationModule from "../courses/graphql-dotnet/04-filtering-pagination/content.json";
import mod04FormsInputModule from "../courses/react-fundamentals/04-forms-input/content.json";
import mod04IntegrationTestingModule from "../courses/unit-testing-dotnet/04-integration-testing/content.json";
import mod04KubernetesAdvancedModule from "../courses/devops/04-kubernetes-advanced/content.json";
import mod04MiddlewareModule from "../courses/aspnet-core-web-api/04-middleware/content.json";
import mod04MiddlewarePipelineProblemsModule from "../problems/aspnet-core/04-middleware-pipeline-problems/content.json";
import mod04ModelBindingValidationModule from "../courses/aspnet-core/04-model-binding-validation/content.json";
import mod04NetworkingModule from "../courses/aws/04-networking/content.json";
import mod04OauthModule from "../courses/authentication-authorization/04-oauth/content.json";
import mod04OopModule from "../courses/csharp-fundamentals/04-oop/content.json";
import mod04PolymorphismModule from "../courses/oops-concepts/04-polymorphism/content.json";
import mod04ReduxMiddlewareModule from "../courses/redux/04-redux-middleware/content.json";
import mod04ScenarioBasedModule from "../interview-qa/04-scenario-based/content.json";
import mod04SetOperationsModule from "../courses/sql-server/04-set-operations/content.json";
import mod04SortingGroupingModule from "../courses/linq/04-sorting-grouping/content.json";
import mod04StateReducersModule from "../courses/react-advanced-patterns/04-state-reducers/content.json";
import mod04TreeGraphProblemsModule from "../problems/csharp/04-tree-graph-problems/content.json";
import mod05AbstractionModule from "../courses/oops-concepts/05-abstraction/content.json";
import mod05AdvancedFeaturesModule from "../courses/csharp-fundamentals/05-advanced-features/content.json";
import mod05AuthenticationModule from "../courses/graphql-dotnet/05-authentication/content.json";
import mod05AzureDatabasesProblemsModule from "../problems/azure/05-azure-databases-problems/content.json";
import mod05CachingStrategiesModule from "../courses/react-query/05-caching-strategies/content.json";
import mod05CiCdFundamentalsModule from "../courses/devops/05-ci-cd-fundamentals/content.json";
import mod05CleanCodePracticesModule from "../courses/clean-code-csharp/05-clean-code-practices/content.json";
import mod05ClientSideCachingAdvancedModule from "../courses/apollo/05-client-side-caching-advanced/content.json";
import mod05ConcurrencyPatternsModule from "../courses/design-patterns/05-concurrency-patterns/content.json";
import mod05ControlPropsModule from "../courses/react-advanced-patterns/05-control-props/content.json";
import mod05DataOperationsDisconnectedModule from "../courses/ef-core/05-data-operations-disconnected/content.json";
import mod05DependencyInjectionModule from "../courses/aspnet-core-web-api/05-dependency-injection/content.json";
import mod05DependencyInjectionProblemsModule from "../problems/aspnet-core/05-dependency-injection-problems/content.json";
import mod05DynamicProgrammingProblemsModule from "../problems/csharp/05-dynamic-programming-problems/content.json";
import mod05E2eTestingModule from "../courses/react-testing/05-e2e-testing/content.json";
import mod05GenericComponentsModule from "../courses/typescript-for-react/05-generic-components/content.json";
import mod05GroupingAggregationSubqueriesModule from "../courses/sql-server/05-grouping-aggregation-subqueries/content.json";
import mod05JoiningDataModule from "../courses/linq/05-joining-data/content.json";
import mod05LifecycleEffectsModule from "../courses/react-fundamentals/05-lifecycle-effects/content.json";
import mod05Oauth2FlowsDeepDiveModule from "../courses/authentication-authorization/05-oauth2-flows-deep-dive/content.json";
import mod05RazorViewsModule from "../courses/aspnet-core/05-razor-views/content.json";
import mod05ReduxPatternsModule from "../courses/redux/05-redux-patterns/content.json";
import mod05SecureApiDesignModule from "../courses/fullstack-security/05-secure-api-design/content.json";
import mod05SerializationMappingModule from "../courses/dotnet-nuget-packages/05-serialization-mapping/content.json";
import mod05StorageAndDataServicesModule from "../courses/azure/05-storage-and-data-services/content.json";
import mod05StorageServicesModule from "../courses/aws/05-storage-services/content.json";
import mod05SystemDesignModule from "../interview-qa/05-system-design/content.json";
import mod05TddModule from "../courses/unit-testing-dotnet/05-tdd/content.json";
import mod06AdvancedAuthorizationModule from "../courses/authentication-authorization/06-advanced-authorization/content.json";
import mod06AdvancedTestingPatternsModule from "../courses/react-testing/06-advanced-testing-patterns/content.json";
import mod06ArchitecturalPatternsModule from "../courses/design-patterns/06-architectural-patterns/content.json";
import mod06ArchitecturePatternsModule from "../courses/clean-code-csharp/06-architecture-patterns/content.json";
import mod06AzureNetworkingProblemsModule from "../problems/azure/06-azure-networking-problems/content.json";
import mod06ChangeTrackingModule from "../courses/ef-core/06-change-tracking/content.json";
import mod06CiCdModernToolsModule from "../courses/devops/06-ci-cd-modern-tools/content.json";
import mod06ContextRefsModule from "../courses/react-fundamentals/06-context-refs/content.json";
import mod06DataModificationDmlModule from "../courses/sql-server/06-data-modification-dml/content.json";
import mod06DatabasesModule from "../courses/aws/06-databases/content.json";
import mod06DatabasesAndCachingModule from "../courses/azure/06-databases-and-caching/content.json";
import mod06DependencyInjectionModule from "../courses/aspnet-core/06-dependency-injection/content.json";
import mod06DependencySecurityModule from "../courses/fullstack-security/06-dependency-security/content.json";
import mod06EfCoreProblemsModule from "../problems/aspnet-core/06-ef-core-problems/content.json";
import mod06ErrorHandlingModule from "../courses/csharp-fundamentals/06-error-handling/content.json";
import mod06ErrorHandlingOptimisticModule from "../courses/apollo/06-error-handling-optimistic/content.json";
import mod06ErrorHandlingValidationModule from "../courses/aspnet-core-web-api/06-error-handling-validation/content.json";
import mod06InterfacesAbstractClassesModule from "../courses/oops-concepts/06-interfaces-abstract-classes/content.json";
import mod06MessagingEventsModule from "../courses/dotnet-nuget-packages/06-messaging-events/content.json";
import mod06OfflineSupportPersistenceModule from "../courses/react-query/06-offline-support-persistence/content.json";
import mod06PerformanceModule from "../courses/graphql-dotnet/06-performance/content.json";
import mod06PerformancePatternsModule from "../courses/react-advanced-patterns/06-performance-patterns/content.json";
import mod06RapidFireModule from "../interview-qa/06-rapid-fire/content.json";
import mod06ReactPatternsModule from "../courses/typescript-for-react/06-react-patterns/content.json";
import mod06ReduxTestingModule from "../courses/redux/06-redux-testing/content.json";
import mod06SetOperationsModule from "../courses/linq/06-set-operations/content.json";
import mod06SortingSearchingProblemsModule from "../problems/csharp/06-sorting-searching-problems/content.json";
import mod06TestingPatternsModule from "../courses/unit-testing-dotnet/06-testing-patterns/content.json";
import mod07AggregationOperatorsModule from "../courses/linq/07-aggregation-operators/content.json";
import mod07AuthenticationAuthorizationProblemsModule from "../problems/aspnet-core/07-authentication-authorization-problems/content.json";
import mod07AuthenticationBasicsModule from "../courses/aspnet-core-web-api/07-authentication-basics/content.json";
import mod07AzureSecurityProblemsModule from "../problems/azure/07-azure-security-problems/content.json";
import mod07CodeCoverageModule from "../courses/unit-testing-dotnet/07-code-coverage/content.json";
import mod07CustomHooksArchitectureModule from "../courses/react-advanced-patterns/07-custom-hooks-architecture/content.json";
import mod07DatabaseSchemaTableObjectsModule from "../courses/sql-server/07-database-schema-table-objects/content.json";
import mod07DesignPrinciplesModule from "../courses/oops-concepts/07-design-principles/content.json";
import mod07EnvironmentSecretsModule from "../courses/fullstack-security/07-environment-secrets/content.json";
import mod07ErrorHandlingModule from "../courses/graphql-dotnet/07-error-handling/content.json";
import mod07IdentitySecurityAndConfigurationModule from "../courses/azure/07-identity-security-and-configuration/content.json";
import mod07InterviewTrapsModule from "../interview-qa/07-interview-traps/content.json";
import mod07LoadBalancingApplicationIntegrationModule from "../courses/aws/07-load-balancing-application-integration/content.json";
import mod07MiddlewarePipelineModule from "../courses/aspnet-core/07-middleware-pipeline/content.json";
import mod07ModernCsharpModule from "../courses/csharp-fundamentals/07-modern-csharp/content.json";
import mod07PrefetchingSsrModule from "../courses/react-query/07-prefetching-ssr/content.json";
import mod07QueryingModule from "../courses/ef-core/07-querying/content.json";
import mod07ReactRouterModule from "../courses/react-fundamentals/07-react-router/content.json";
import mod07RecursionProblemsModule from "../problems/csharp/07-recursion-problems/content.json";
import mod07ReduxAdvancedConceptsModule from "../courses/redux/07-redux-advanced-concepts/content.json";
import mod07RefreshTokenStrategiesModule from "../courses/authentication-authorization/07-refresh-token-strategies/content.json";
import mod07SubscriptionsRealtimeModule from "../courses/apollo/07-subscriptions-realtime/content.json";
import mod07TestingBestPracticesModule from "../courses/typescript-for-react/07-testing-best-practices/content.json";
import mod07TestingQualityModule from "../courses/dotnet-nuget-packages/07-testing-quality/content.json";
import mod07TestingReactQueryModule from "../courses/react-testing/07-testing-react-query/content.json";
import mod08AzureAiServicesProblemsModule from "../problems/azure/08-azure-ai-services-problems/content.json";
import mod08BitwiseProblemsModule from "../problems/csharp/08-bitwise-problems/content.json";
import mod08DataTypesModule from "../courses/sql-server/08-data-types/content.json";
import mod08EntityFrameworkCoreModule from "../courses/aspnet-core/08-entity-framework-core/content.json";
import mod08InheritanceStrategiesModule from "../courses/ef-core/08-inheritance-strategies/content.json";
import mod08LocalStateManagementModule from "../courses/apollo/08-local-state-management/content.json";
import mod08LoggingConfigurationModule from "../courses/aspnet-core-web-api/08-logging-configuration/content.json";
import mod08NetworkingAndApiPlatformsModule from "../courses/azure/08-networking-and-api-platforms/content.json";
import mod08PerformanceOptimizationModule from "../courses/react-query/08-performance-optimization/content.json";
import mod08PerformanceOptimizationModule1 from "../interview-qa/08-performance-optimization/content.json";
import mod08QuantifiersElementOperatorsModule from "../courses/linq/08-quantifiers-element-operators/content.json";
import mod08ReduxRealWorldModule from "../courses/redux/08-redux-real-world/content.json";
import mod08SecurityCryptographyModule from "../courses/dotnet-nuget-packages/08-security-cryptography/content.json";
import mod08SecurityTestingModule from "../courses/fullstack-security/08-security-testing/content.json";
import mod08ServerlessModule from "../courses/aws/08-serverless/content.json";
import mod08SsoIdentityProvidersModule from "../courses/authentication-authorization/08-sso-identity-providers/content.json";
import mod08StateMachinesXstateModule from "../courses/react-advanced-patterns/08-state-machines-xstate/content.json";
import mod08StylingModule from "../courses/react-fundamentals/08-styling/content.json";
import mod08TestingDebuggingProblemsModule from "../problems/aspnet-core/08-testing-debugging-problems/content.json";
import mod09AuthenticationAuthorizationModule from "../courses/aspnet-core/09-authentication-authorization/content.json";
import mod09CicdPipelinesModule from "../interview-qa/09-cicd-pipelines/content.json";
import mod09ComponentCompositionStrategiesModule from "../courses/react-advanced-patterns/09-component-composition-strategies/content.json";
import mod09ConstraintsModule from "../courses/sql-server/09-constraints/content.json";
import mod09ContainersKubernetesModule from "../courses/aws/09-containers-kubernetes/content.json";
import mod09MessagingAndEventDrivenArchitectureModule from "../courses/azure/09-messaging-and-event-driven-architecture/content.json";
import mod09MigrationsModule from "../courses/ef-core/09-migrations/content.json";
import mod09PartitioningOperatorsModule from "../courses/linq/09-partitioning-operators/content.json";
import mod09PerformanceOptimizationModule from "../courses/react-fundamentals/09-performance-optimization/content.json";
import mod09RealWorldPatternsModule from "../courses/react-query/09-real-world-patterns/content.json";
import mod09SecurityBestPracticesModule from "../courses/authentication-authorization/09-security-best-practices/content.json";
import mod09SsrNextjsPerformanceModule from "../courses/apollo/09-ssr-nextjs-performance/content.json";
import mod09UtilitiesHelpersModule from "../courses/dotnet-nuget-packages/09-utilities-helpers/content.json";
import mod10AdvancedFeaturesModule from "../courses/ef-core/10-advanced-features/content.json";
import mod10AdvancedHookPatternsModule from "../courses/react-advanced-patterns/10-advanced-hook-patterns/content.json";
import mod10ConversionGenerationOperatorsModule from "../courses/linq/10-conversion-generation-operators/content.json";
import mod10DevopsCicdModule from "../courses/aws/10-devops-cicd/content.json";
import mod10IndexesModule from "../courses/sql-server/10-indexes/content.json";
import mod10ObservabilityAndApplicationMonitoringModule from "../courses/azure/10-observability-and-application-monitoring/content.json";
import mod10WebApiRestModule from "../courses/aspnet-core/10-web-api-rest/content.json";
import mod11AdvancedLinqConceptsModule from "../courses/linq/11-advanced-linq-concepts/content.json";
import mod11ApplicationDeploymentAndDevopsModule from "../courses/azure/11-application-deployment-and-devops/content.json";
import mod11DatabaseFirstDiagnosticsModule from "../courses/ef-core/11-database-first-diagnostics/content.json";
import mod11MonitoringLoggingObservabilityModule from "../courses/aws/11-monitoring-logging-observability/content.json";
import mod11TestingDebuggingModule from "../courses/aspnet-core/11-testing-debugging/content.json";
import mod11ViewsModule from "../courses/sql-server/11-views/content.json";
import mod12DeploymentProductionModule from "../courses/aspnet-core/12-deployment-production/content.json";
import mod12InfrastructureAsCodeAndAutomationModule from "../courses/azure/12-infrastructure-as-code-and-automation/content.json";
import mod12PerformanceBulkOperationsModule from "../courses/ef-core/12-performance-bulk-operations/content.json";
import mod12SecurityServicesModule from "../courses/aws/12-security-services/content.json";
import mod12StoredProceduresFunctionsModule from "../courses/sql-server/12-stored-procedures-functions/content.json";
import mod13AiServicesForAzureDevelopersModule from "../courses/azure/13-ai-services-for-azure-developers/content.json";
import mod13AnalyticsBigDataModule from "../courses/aws/13-analytics-big-data/content.json";
import mod13TriggersModule from "../courses/sql-server/13-triggers/content.json";
import mod14AiMachineLearningModule from "../courses/aws/14-ai-machine-learning/content.json";
import mod14TransactionsErrorHandlingBackupModule from "../courses/sql-server/14-transactions-error-handling-backup/content.json";
import mod15AdvancedTopicsModule from "../courses/sql-server/15-advanced-topics/content.json";
import mod15DeveloperToolsApplicationServicesModule from "../courses/aws/15-developer-tools-application-services/content.json";
import mod16IdentityForApplicationsModule from "../courses/aws/16-identity-for-applications/content.json";
import mod16PerformanceTuningModule from "../courses/sql-server/16-performance-tuning/content.json";
import mod17MigrationHybridCloudModule from "../courses/aws/17-migration-hybrid-cloud/content.json";
import mod17SecurityHardeningModule from "../courses/sql-server/17-security-hardening/content.json";
import mod18HighAvailabilityDrModule from "../courses/sql-server/18-high-availability-dr/content.json";
import mod18InfrastructureAutomationModule from "../courses/aws/18-infrastructure-automation/content.json";
import mod19DataWarehousingModule from "../courses/sql-server/19-data-warehousing/content.json";
import mod19HighAvailabilityDisasterRecoveryModule from "../courses/aws/19-high-availability-disaster-recovery/content.json";
import mod20AwsArchitectureDesignPatternsModule from "../courses/aws/20-aws-architecture-design-patterns/content.json";
import mod20AzureSqlModule from "../courses/sql-server/20-azure-sql/content.json";
import mod21ModernDataToolsModule from "../courses/sql-server/21-modern-data-tools/content.json";
import advancedAsyncConcurrencyThreadingModule from "../courses/csharp-fundamentals/advanced-async-concurrency-threading/content.json";
import advancedCRuntimeMemoryConcurrencyModule from "../courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/content.json";
import advancedGitWorkflowsModule from "../courses/git-linux-developer-workflow/advanced-git-workflows/content.json";
import advancedPatternsModule from "../courses/dotnet-nuget-packages/advanced-patterns/content.json";
import advancedPatternsModule1 from "../courses/yarn-npm-packages/advanced-patterns/content.json";
import advancedTypeModelingRuntimeSafetyModule from "../courses/typescript-for-react/advanced-type-modeling-runtime-safety/content.json";
import airbnbBookingModule from "../problems/lld/airbnb-booking/content.json";
import airbnbBookingHldModule from "../problems/hld/airbnb-booking-hld/content.json";
import amazonEcommerceModule from "../problems/lld/amazon-ecommerce/content.json";
import amazonEcommerceHldModule from "../problems/hld/amazon-ecommerce-hld/content.json";
import animationModule from "../courses/yarn-npm-packages/animation/content.json";
import apiDocumentationSwaggerModule from "../courses/dotnet-nuget-packages/api-documentation-swagger/content.json";
import apolloModule from "../courses/apollo/content.json";
import apolloModule1 from "../cheatsheet/apollo/content.json";
import appRouterRenderingModule from "../courses/next-js-full-stack-react/app-router-rendering/content.json";
import architectureDecisionLabProblemsModule from "../problems/architecture-decision-lab-problems/content.json";
import architectureFollowUpsModule from "../interview-qa/architecture-follow-ups/content.json";
import architectureTradeOffsModule from "../problems/architecture-decision-lab-problems/architecture-trade-offs/content.json";
import aspNetCoreInternalsProductionHostingModule from "../courses/aspnet-core/asp-net-core-internals-production-hosting/content.json";
import aspnetCoreModule from "../courses/aspnet-core/content.json";
import aspnetCoreModule1 from "../problems/aspnet-core/content.json";
import aspnetCoreModule2 from "../cheatsheet/aspnet-core/content.json";
import aspnetCoreWebApiModule from "../courses/aspnet-core-web-api/content.json";
import aspnetSystemDesignModule from "../problems/system-design/aspnet-system-design/content.json";
import atmMachineModule from "../problems/lld/atm-machine/content.json";
import authenticationAuthorizationModule from "../courses/authentication-authorization/content.json";
import awsModule from "../courses/aws/content.json";
import awsModule1 from "../cheatsheet/aws/content.json";
import azureModule from "../courses/azure/content.json";
import azureModule1 from "../problems/azure/content.json";
import azureModule2 from "../cheatsheet/azure/content.json";
import backendDatabaseFollowUpsModule from "../interview-qa/backend-database-follow-ups/content.json";
import backendIncidentsModule from "../problems/production-incident-lab-problems/backend-incidents/content.json";
import bankingAppModule from "../problems/lld/banking-app/content.json";
import browserReactPerformanceModule from "../courses/frontend-performance-engineering/browser-react-performance/content.json";
import buildOptimizationModule from "../courses/frontend-performance-engineering/build-optimization/content.json";
import buildToolsModule from "../courses/yarn-npm-packages/build-tools/content.json";
import cAspnetCoreReviewsModule from "../problems/senior-code-review-lab-problems/c-aspnet-core-reviews/content.json";
import cNetFollowUpsModule from "../interview-qa/c-net-follow-ups/content.json";
import chatSystemHldModule from "../problems/hld/chat-system-hld/content.json";
import ciCdSafeDeliveryModule from "../courses/devops/ci-cd-safe-delivery/content.json";
import cleanCodeCsharpModule from "../courses/clean-code-csharp/content.json";
import cloudIntegrationModule from "../courses/dotnet-nuget-packages/cloud-integration/content.json";
import concurrencyProductionDatabaseProblemsModule from "../courses/sql-server/concurrency-production-database-problems/content.json";
import csharpModule from "../problems/csharp/content.json";
import csharpModule1 from "../cheatsheet/csharp/content.json";
import csharpFundamentalsModule from "../courses/csharp-fundamentals/content.json";
import dataFetchingPatternsModule from "../courses/next-js-full-stack-react/data-fetching-patterns/content.json";
import dataStructuresDeepDiveModule from "../courses/programming-computer-web-foundations/data-structures-deep-dive/content.json";
import databaseInfrastructureIncidentsModule from "../problems/production-incident-lab-problems/database-infrastructure-incidents/content.json";
import databaseInternalsQueryOptimizationModule from "../courses/sql-server/database-internals-query-optimization/content.json";
import designPatternsModule from "../courses/design-patterns/content.json";
import devopsModule from "../courses/devops/content.json";
import devopsSystemDesignModule from "../problems/system-design/devops-system-design/content.json";
import distributedSystemsFundamentalsModule from "../problems/system-design-problems/distributed-systems-fundamentals/content.json";
import dockerComposeModule from "../cheatsheet/docker-compose/content.json";
import dotnetNugetPackagesModule from "../courses/dotnet-nuget-packages/content.json";
import dropboxStorageModule from "../problems/hld/dropbox-storage/content.json";
import ecommerceHldModule from "../problems/hld/ecommerce-hld/content.json";
import efCoreModule from "../courses/ef-core/content.json";
import efCoreModule1 from "../cheatsheet/ef-core/content.json";
import efCorePerformanceOrmTradeOffsModule from "../courses/ef-core/ef-core-performance-orm-trade-offs/content.json";
import elevatorSystemModule from "../problems/lld/elevator-system/content.json";
import facebookNewsFeedModule from "../problems/lld/facebook-news-feed/content.json";
import foodDeliveryModule from "../problems/lld/food-delivery/content.json";
import foodDeliveryHldModule from "../problems/hld/food-delivery-hld/content.json";
import formsModule from "../courses/yarn-npm-packages/forms/content.json";
import frontendFrameworksModule from "../courses/yarn-npm-packages/frontend-frameworks/content.json";
import frontendIncidentsModule from "../problems/production-incident-lab-problems/frontend-incidents/content.json";
import frontendPerformanceEngineeringModule from "../courses/frontend-performance-engineering/content.json";
import fullStackApiDesignModule from "../courses/next-js-full-stack-react/full-stack-api-design/content.json";
import fullStackSeniorProjectsModule from "../problems/full-stack-senior-projects/content.json";
import fullstackSecurityModule from "../courses/fullstack-security/content.json";
import gitForSeniorEngineersModule from "../courses/git-linux-developer-workflow/git-for-senior-engineers/content.json";
import gitLinuxDeveloperWorkflowModule from "../courses/git-linux-developer-workflow/content.json";
import googleDriveStorageModule from "../problems/lld/google-drive-storage/content.json";
import googleSearchModule from "../problems/hld/google-search/content.json";
import graphqlModule from "../cheatsheet/graphql/content.json";
import graphqlDotnetModule from "../courses/graphql-dotnet/content.json";
import hldModule from "../problems/hld/content.json";
import hotelManagementModule from "../problems/lld/hotel-management/content.json";
import httpClientsModule from "../courses/yarn-npm-packages/http-clients/content.json";
import httpClientsResilienceModule from "../courses/dotnet-nuget-packages/http-clients-resilience/content.json";
import instagramFeedModule from "../problems/hld/instagram-feed/content.json";
import instagramPhotoSharingModule from "../problems/lld/instagram-photo-sharing/content.json";
import javascriptModule from "../cheatsheet/javascript/content.json";
import leadershipOwnershipModule from "../interview-qa/leadership-ownership/content.json";
import libraryManagementModule from "../problems/lld/library-management/content.json";
import linkedinProfessionalModule from "../problems/lld/linkedin-professional/content.json";
import linkedinProfessionalHldModule from "../problems/hld/linkedin-professional-hld/content.json";
import linqModule from "../courses/linq/content.json";
import linqModule1 from "../cheatsheet/linq/content.json";
import linuxProductionTroubleshootingModule from "../courses/git-linux-developer-workflow/linux-production-troubleshooting/content.json";
import lldModule from "../problems/lld/content.json";
import loggingMonitoringModule from "../courses/dotnet-nuget-packages/logging-monitoring/content.json";
import mockInterviewScenariosModule from "../interview-qa/mock-interview-scenarios/content.json";
import modernStateApplicationArchitectureModule from "../courses/react-advanced-patterns/modern-state-application-architecture/content.json";
import modernWebSecurityIdentityModule from "../courses/fullstack-security/modern-web-security-identity/content.json";
import movieTicketBookingModule from "../problems/lld/movie-ticket-booking/content.json";
import netflixStreamingModule from "../problems/lld/netflix-streaming/content.json";
import networkingProtocolsModule from "../courses/programming-computer-web-foundations/networking-protocols/content.json";
import nextJsFullStackReactModule from "../courses/next-js-full-stack-react/content.json";
import notificationSystemModule from "../problems/hld/notification-system/content.json";
import oopsConceptsModule from "../courses/oops-concepts/content.json";
import parkingLotSystemModule from "../problems/lld/parking-lot-system/content.json";
import paymentGatewayModule from "../problems/lld/payment-gateway/content.json";
import paymentGatewayHldModule from "../problems/hld/payment-gateway-hld/content.json";
import performanceObservabilityModule from "../courses/aspnet-core/performance-observability/content.json";
import productionApiDesignReliabilityModule from "../courses/aspnet-core-web-api/production-api-design-reliability/content.json";
import productionArchitectureReliabilityCostModule from "../courses/azure/production-architecture-reliability-cost/content.json";
import productionDockerContainerSecurityModule from "../courses/devops/production-docker-container-security/content.json";
import productionIncidentLabProblemsModule from "../problems/production-incident-lab-problems/content.json";
import productionKubernetesDay2OperationsModule from "../courses/devops/production-kubernetes-day-2-operations/content.json";
import productionOwnershipModule from "../courses/senior-software-engineering/production-ownership/content.json";
import productionReadinessModule from "../courses/git-linux-developer-workflow/production-readiness/content.json";
import programmingComputerFundamentalsModule from "../courses/programming-computer-web-foundations/programming-computer-fundamentals/content.json";
import programmingComputerWebFoundationsModule from "../courses/programming-computer-web-foundations/content.json";
import project1EnterpriseExpensePlatformModule from "../problems/full-stack-senior-projects/project-1-enterprise-expense-platform/content.json";
import project2CollaborativeCommunicationPlatformModule from "../problems/full-stack-senior-projects/project-2-collaborative-communication-platform/content.json";
import project3ProductionIncidentSimulatorModule from "../problems/full-stack-senior-projects/project-3-production-incident-simulator/content.json";
import rateLimiterModule from "../problems/hld/rate-limiter/content.json";
import reactModule from "../cheatsheet/react/content.json";
import reactAdvancedPatternsModule from "../courses/react-advanced-patterns/content.json";
import reactDataFetchingModule from "../courses/yarn-npm-packages/react-data-fetching/content.json";
import reactEcosystemModule from "../courses/yarn-npm-packages/react-ecosystem/content.json";
import reactFormsInputModule from "../courses/yarn-npm-packages/react-forms-input/content.json";
import reactFrontendFollowUpsModule from "../interview-qa/react-frontend-follow-ups/content.json";
import reactFundamentalsModule from "../courses/react-fundamentals/content.json";
import reactHooksPatternsModule from "../courses/yarn-npm-packages/react-hooks-patterns/content.json";
import reactInternalsModernRenderingModule from "../courses/react-fundamentals/react-internals-modern-rendering/content.json";
import reactPerformanceModule from "../courses/yarn-npm-packages/react-performance/content.json";
import reactQueryModule from "../courses/react-query/content.json";
import reactRouterModule from "../cheatsheet/react-router/content.json";
import reactSystemDesignModule from "../problems/system-design/react-system-design/content.json";
import reactTestingModule from "../courses/react-testing/content.json";
import reactTestingModule1 from "../courses/yarn-npm-packages/react-testing/content.json";
import reactTypescriptReviewsModule from "../problems/senior-code-review-lab-problems/react-typescript-reviews/content.json";
import reduxModule from "../courses/redux/content.json";
import reduxModule1 from "../cheatsheet/redux/content.json";
import rideSharingHldModule from "../problems/hld/ride-sharing-hld/content.json";
import routingModule from "../courses/yarn-npm-packages/routing/content.json";
import runtimePerformanceModule from "../courses/frontend-performance-engineering/runtime-performance/content.json";
import searchAutocompleteModule from "../problems/hld/search-autocomplete/content.json";
import seniorCodeReviewLabProblemsModule from "../problems/senior-code-review-lab-problems/content.json";
import seniorEngineeringJudgmentArchitectureDecisionsModule from "../courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/content.json";
import seniorSoftwareEngineeringModule from "../courses/senior-software-engineering/content.json";
import slackMessagingModule from "../problems/lld/slack-messaging/content.json";
import slackMessagingHldModule from "../problems/hld/slack-messaging-hld/content.json";
import spotifyMusicModule from "../problems/lld/spotify-music/content.json";
import spotifyMusicHldModule from "../problems/hld/spotify-music-hld/content.json";
import sqlModule from "../problems/sql/content.json";
import sqlServerModule from "../courses/sql-server/content.json";
import sqlServerModule1 from "../cheatsheet/sql-server/content.json";
import stateManagementModule from "../courses/next-js-full-stack-react/state-management/content.json";
import stateManagementModule1 from "../courses/yarn-npm-packages/state-management/content.json";
import stylingModule from "../courses/yarn-npm-packages/styling/content.json";
import systemDesignModule from "../problems/system-design/content.json";
import systemDesignForSeniorsModule from "../courses/senior-software-engineering/system-design-for-seniors/content.json";
import systemDesignProblemsModule from "../problems/system-design-problems/content.json";
import technicalDecisionMakingModule from "../courses/senior-software-engineering/technical-decision-making/content.json";
import technicalLeadershipModule from "../courses/senior-software-engineering/technical-leadership/content.json";
import testingModule from "../courses/yarn-npm-packages/testing/content.json";
import testingStrategyForSeniorFrontendEngineersModule from "../courses/react-testing/testing-strategy-for-senior-frontend-engineers/content.json";
import ticTacToeGameModule from "../problems/lld/tic-tac-toe-game/content.json";
import ticketBookingHldModule from "../problems/hld/ticket-booking-hld/content.json";
import twitterSocialModule from "../problems/lld/twitter-social/content.json";
import twitterSocialHldModule from "../problems/hld/twitter-social-hld/content.json";
import typescriptModule from "../cheatsheet/typescript/content.json";
import typescriptForReactModule from "../courses/typescript-for-react/content.json";
import uberRideSharingModule from "../problems/lld/uber-ride-sharing/content.json";
import uberRideSharingHldModule from "../problems/hld/uber-ride-sharing-hld/content.json";
import unitTestingDotnetModule from "../courses/unit-testing-dotnet/content.json";
import urlShortenerModule from "../problems/hld/url-shortener/content.json";
import utilitiesModule from "../courses/yarn-npm-packages/utilities/content.json";
import validationAuthorizationModule from "../courses/dotnet-nuget-packages/validation-authorization/content.json";
import vendingMachineModule from "../problems/lld/vending-machine/content.json";
import videoStreamingHldModule from "../problems/hld/video-streaming-hld/content.json";
import webCrawlerModule from "../problems/hld/web-crawler/content.json";
import webNetworkingFundamentalsModule from "../courses/programming-computer-web-foundations/web-networking-fundamentals/content.json";
import whatsappChatModule from "../problems/lld/whatsapp-chat/content.json";
import whatsappChatHldModule from "../problems/hld/whatsapp-chat-hld/content.json";
import yarnNpmFundamentalsModule from "../courses/yarn-npm-packages/yarn-npm-fundamentals/content.json";
import yarnNpmPackagesModule from "../courses/yarn-npm-packages/content.json";
import youtubeStreamingModule from "../problems/hld/youtube-streaming/content.json";
import youtubeVideoModule from "../problems/lld/youtube-video/content.json";
import zoomConferencingModule from "../problems/lld/zoom-conferencing/content.json";
import zoomConferencingHldModule from "../problems/hld/zoom-conferencing-hld/content.json";

const rawModulesPart1 = [
	mod01ApolloBasicsModule,
	mod01ArrayProblemsModule,
	mod01AuthBasicsModule,
	mod01AwsFundamentalsCloudConceptsModule,
	mod01AzureDeveloperFoundationsModule,
	mod01AzureFoundationsProblemsModule,
	mod01BeginnerQuestionsModule,
	mod01CorsConfigurationModule,
	mod01CreationalPatternsModule,
	mod01DockerFundamentalsModule,
	mod01GettingStartedModule,
	mod01GettingStartedModule1,
	mod01GettingStartedModule2,
	mod01GettingStartedModule3,
	mod01GettingStartedModule4,
	mod01GettingStartedModule5,
	mod01GettingStartedEfCoreModule,
	mod01GettingStartedLinqModule,
	mod01MvcFundamentalsProblemsModule,
	mod01NugetFundamentalsModule,
	mod01OopFundamentalsModule,
	mod01QueryBasicsModule,
	mod01ReduxFundamentalsModule,
	mod01RenderPropsModule,
	mod01SolidPrinciplesModule,
	mod01SqlBasicsModule,
	mod01TestingFundamentalsModule,
	mod01TestingFundamentalsModule1,
	mod01TypescriptBasicsModule,
	mod02AzureComputeProblemsModule,
	mod02ComponentsPropsModule,
	mod02ComputeAndAppHostingModule,
	mod02ControllersRoutingModule,
	mod02CoreExtensionsModule,
	mod02CreationalPatternsModule,
	mod02DbcontextConfigurationModule,
	mod02DockerAdvancedModule,
	mod02EncapsulationDataHidingModule,
	mod02HigherOrderComponentsModule,
	mod02IdentityAccessGovernanceModule,
	mod02IntermediateQuestionsModule,
	mod02JestBasicsModule,
	mod02JwtModule,
	mod02JwtAuthenticationModule,
	mod02LinqFundamentalsSyntaxModule,
	mod02MvcFundamentalsModule,
	mod02QueriesMutationsModule,
	mod02QueryHooksModule,
	mod02QueryingDataModule,
	mod02RazorViewsProblemsModule,
	mod02ReduxToolkitModule,
	mod02SchemaTypesModule,
	mod02SqlIntermediateModule,
	mod02StringProblemsModule,
	mod02StructuralPatternsModule,
	mod02TypesInReactModule,
	mod02VariablesTypesModule,
	mod02XunitBasicsModule,
	mod03AdvancedQuestionsModule,
	mod03ApiDesignProblemsModule,
	mod03AspnetWebModule,
	mod03AzureServerlessProblemsModule,
	mod03BehavioralPatternsModule,
	mod03CachingModule,
	mod03CompoundComponentsModule,
	mod03ComputeServicesModule,
	mod03ControlFlowModule,
	mod03ConventionsRelationshipsModule,
	mod03FilteringProjectionModule,
	mod03IdentityModule,
	mod03InheritanceModule,
	mod03JoinsModule,
	mod03KubernetesFundamentalsModule,
	mod03LinkedListProblemsModule,
	mod03MockingFakesModule,
	mod03ModelBindingModule,
	mod03MutationsModule,
	mod03QueriesMutationsModule,
	mod03ReactReduxModule,
	mod03ReactTestingLibraryModule,
	mod03RoutingUrlsModule,
	mod03ServerlessAndAzureFunctionsModule,
	mod03SqlAdvancedModule,
	mod03StateEventsModule,
	mod03StructuralPatternsModule,
	mod03TypingHooksModule,
	mod03XssCsrfProtectionModule,
	mod04AdvancedFeaturesModule,
	mod04AdvancedPatternsModule,
	mod04AdvancedTypesModule,
	mod04ApiSecurityRateLimitingModule,
	mod04AzureStorageProblemsModule,
	mod04BehavioralPatternsModule,
	mod04ComponentTestingModule,
	mod04ContainersAndContainerPlatformsModule,
	mod04DataOperationsConnectedModule,
	mod04DatabaseDataAccessModule,
	mod04EnterprisePatternsModule,
	mod04FilteringPaginationModule,
	mod04FormsInputModule,
	mod04IntegrationTestingModule,
	mod04KubernetesAdvancedModule,
	mod04MiddlewareModule,
	mod04MiddlewarePipelineProblemsModule,
	mod04ModelBindingValidationModule,
	mod04NetworkingModule,
	mod04OauthModule,
	mod04OopModule,
	mod04PolymorphismModule,
	mod04ReduxMiddlewareModule,
	mod04ScenarioBasedModule,
	mod04SetOperationsModule,
	mod04SortingGroupingModule,
	mod04StateReducersModule,
	mod04TreeGraphProblemsModule,
	mod05AbstractionModule,
	mod05AdvancedFeaturesModule,
	mod05AuthenticationModule,
	mod05AzureDatabasesProblemsModule,
	mod05CachingStrategiesModule,
	mod05CiCdFundamentalsModule,
	mod05CleanCodePracticesModule,
	mod05ClientSideCachingAdvancedModule,
	mod05ConcurrencyPatternsModule,
	mod05ControlPropsModule,
	mod05DataOperationsDisconnectedModule,
	mod05DependencyInjectionModule,
	mod05DependencyInjectionProblemsModule,
	mod05DynamicProgrammingProblemsModule,
	mod05E2eTestingModule,
	mod05GenericComponentsModule,
	mod05GroupingAggregationSubqueriesModule,
	mod05JoiningDataModule,
	mod05LifecycleEffectsModule,
	mod05Oauth2FlowsDeepDiveModule,
	mod05RazorViewsModule,
	mod05ReduxPatternsModule,
	mod05SecureApiDesignModule,
	mod05SerializationMappingModule,
	mod05StorageAndDataServicesModule,
	mod05StorageServicesModule,
	mod05SystemDesignModule,
	mod05TddModule,
	mod06AdvancedAuthorizationModule,
	mod06AdvancedTestingPatternsModule,
	mod06ArchitecturalPatternsModule,
	mod06ArchitecturePatternsModule,
	mod06AzureNetworkingProblemsModule,
	mod06ChangeTrackingModule,
	mod06CiCdModernToolsModule,
	mod06ContextRefsModule,
	mod06DataModificationDmlModule,
	mod06DatabasesModule,
	mod06DatabasesAndCachingModule,
	mod06DependencyInjectionModule,
	mod06DependencySecurityModule,
	mod06EfCoreProblemsModule,
	mod06ErrorHandlingModule,
	mod06ErrorHandlingOptimisticModule,
	mod06ErrorHandlingValidationModule,
	mod06InterfacesAbstractClassesModule,
	mod06MessagingEventsModule,
	mod06OfflineSupportPersistenceModule,
	mod06PerformanceModule,
	mod06PerformancePatternsModule,
	mod06RapidFireModule,
	mod06ReactPatternsModule,
	mod06ReduxTestingModule,
	mod06SetOperationsModule,
	mod06SortingSearchingProblemsModule,
	mod06TestingPatternsModule,
	mod07AggregationOperatorsModule,
	mod07AuthenticationAuthorizationProblemsModule,
	mod07AuthenticationBasicsModule,
	mod07AzureSecurityProblemsModule,
	mod07CodeCoverageModule,
	mod07CustomHooksArchitectureModule,
	mod07DatabaseSchemaTableObjectsModule,
	mod07DesignPrinciplesModule,
	mod07EnvironmentSecretsModule,
	mod07ErrorHandlingModule,
	mod07IdentitySecurityAndConfigurationModule,
	mod07InterviewTrapsModule,
	mod07LoadBalancingApplicationIntegrationModule,
	mod07MiddlewarePipelineModule,
	mod07ModernCsharpModule,
	mod07PrefetchingSsrModule,
	mod07QueryingModule,
	mod07ReactRouterModule,
	mod07RecursionProblemsModule,
	mod07ReduxAdvancedConceptsModule,
	mod07RefreshTokenStrategiesModule,
	mod07SubscriptionsRealtimeModule,
	mod07TestingBestPracticesModule,
	mod07TestingQualityModule,
	mod07TestingReactQueryModule,
	mod08AzureAiServicesProblemsModule,
	mod08BitwiseProblemsModule,
	mod08DataTypesModule,
	mod08EntityFrameworkCoreModule,
	mod08InheritanceStrategiesModule,
	mod08LocalStateManagementModule,
	mod08LoggingConfigurationModule,
	mod08NetworkingAndApiPlatformsModule,
	mod08PerformanceOptimizationModule,
	mod08PerformanceOptimizationModule1,
	mod08QuantifiersElementOperatorsModule,
	mod08ReduxRealWorldModule,
	mod08SecurityCryptographyModule,
	mod08SecurityTestingModule,
	mod08ServerlessModule,
	mod08SsoIdentityProvidersModule,
	mod08StateMachinesXstateModule,
	mod08StylingModule,
	mod08TestingDebuggingProblemsModule,
	mod09AuthenticationAuthorizationModule,
	mod09CicdPipelinesModule,
	mod09ComponentCompositionStrategiesModule,
	mod09ConstraintsModule,
	mod09ContainersKubernetesModule,
	mod09MessagingAndEventDrivenArchitectureModule,
	mod09MigrationsModule,
	mod09PartitioningOperatorsModule,
	mod09PerformanceOptimizationModule,
	mod09RealWorldPatternsModule,
	mod09SecurityBestPracticesModule,
	mod09SsrNextjsPerformanceModule,
	mod09UtilitiesHelpersModule,
	mod10AdvancedFeaturesModule,
	mod10AdvancedHookPatternsModule,
	mod10ConversionGenerationOperatorsModule,
	mod10DevopsCicdModule,
	mod10IndexesModule,
	mod10ObservabilityAndApplicationMonitoringModule,
	mod10WebApiRestModule,
	mod11AdvancedLinqConceptsModule,
	mod11ApplicationDeploymentAndDevopsModule,
	mod11DatabaseFirstDiagnosticsModule,
	mod11MonitoringLoggingObservabilityModule,
	mod11TestingDebuggingModule,
	mod11ViewsModule,
	mod12DeploymentProductionModule,
	mod12InfrastructureAsCodeAndAutomationModule,
	mod12PerformanceBulkOperationsModule,
	mod12SecurityServicesModule,
	mod12StoredProceduresFunctionsModule,
	mod13AiServicesForAzureDevelopersModule,
	mod13AnalyticsBigDataModule,
	mod13TriggersModule,
	mod14AiMachineLearningModule,
	mod14TransactionsErrorHandlingBackupModule,
	mod15AdvancedTopicsModule,
	mod15DeveloperToolsApplicationServicesModule,
	mod16IdentityForApplicationsModule,
	mod16PerformanceTuningModule,
	mod17MigrationHybridCloudModule,
	mod17SecurityHardeningModule,
	mod18HighAvailabilityDrModule,
	mod18InfrastructureAutomationModule,
	mod19DataWarehousingModule,
	mod19HighAvailabilityDisasterRecoveryModule,
	mod20AwsArchitectureDesignPatternsModule,
	mod20AzureSqlModule,
	mod21ModernDataToolsModule,
	advancedAsyncConcurrencyThreadingModule,
	advancedCRuntimeMemoryConcurrencyModule,
	advancedGitWorkflowsModule,
	advancedPatternsModule,
	advancedPatternsModule1,
	advancedTypeModelingRuntimeSafetyModule,
	airbnbBookingModule,
	airbnbBookingHldModule,
	amazonEcommerceModule,
	amazonEcommerceHldModule,
	animationModule,
	apiDocumentationSwaggerModule,
	apolloModule,
	apolloModule1,
	appRouterRenderingModule,
	architectureDecisionLabProblemsModule,
	architectureFollowUpsModule,
	architectureTradeOffsModule,
	aspNetCoreInternalsProductionHostingModule,
	aspnetCoreModule,
	aspnetCoreModule1,
	aspnetCoreModule2,
	aspnetCoreWebApiModule,
	aspnetSystemDesignModule,
	atmMachineModule,
	authenticationAuthorizationModule,
	awsModule,
	awsModule1,
	azureModule,
	azureModule1,
	azureModule2,
	backendDatabaseFollowUpsModule,
	backendIncidentsModule,
	bankingAppModule,
	browserReactPerformanceModule,
	buildOptimizationModule,
	buildToolsModule,
	cAspnetCoreReviewsModule,
	cNetFollowUpsModule,
	chatSystemHldModule,
	ciCdSafeDeliveryModule,
	cleanCodeCsharpModule,
	cloudIntegrationModule,
	concurrencyProductionDatabaseProblemsModule,
	csharpModule,
	csharpModule1,
	csharpFundamentalsModule,
	dataFetchingPatternsModule,
	dataStructuresDeepDiveModule,
	databaseInfrastructureIncidentsModule,
	databaseInternalsQueryOptimizationModule,
	designPatternsModule,
	devopsModule,
	devopsSystemDesignModule,
	distributedSystemsFundamentalsModule,
	dockerComposeModule,
	dotnetNugetPackagesModule,
	dropboxStorageModule,
	ecommerceHldModule,
	efCoreModule,
	efCoreModule1,
	efCorePerformanceOrmTradeOffsModule,
	elevatorSystemModule,
	facebookNewsFeedModule,
	foodDeliveryModule,
	foodDeliveryHldModule,
	formsModule,
	frontendFrameworksModule,
	frontendIncidentsModule,
	frontendPerformanceEngineeringModule,
	fullStackApiDesignModule,
	fullStackSeniorProjectsModule,
	fullstackSecurityModule,
	gitForSeniorEngineersModule,
	gitLinuxDeveloperWorkflowModule,
	googleDriveStorageModule,
	googleSearchModule,
	graphqlModule,
	graphqlDotnetModule,
	hldModule,
	hotelManagementModule,
	httpClientsModule,
	httpClientsResilienceModule,
	instagramFeedModule,
	instagramPhotoSharingModule,
	javascriptModule,
	leadershipOwnershipModule,
	libraryManagementModule,
	linkedinProfessionalModule,
	linkedinProfessionalHldModule,
	linqModule,
	linqModule1,
	linuxProductionTroubleshootingModule,
	lldModule,
	loggingMonitoringModule,
	mockInterviewScenariosModule,
	modernStateApplicationArchitectureModule,
	modernWebSecurityIdentityModule,
	movieTicketBookingModule,
	netflixStreamingModule,
	networkingProtocolsModule,
	nextJsFullStackReactModule,
	notificationSystemModule,
	oopsConceptsModule,
	parkingLotSystemModule,
	paymentGatewayModule,
	paymentGatewayHldModule,
	performanceObservabilityModule,
	productionApiDesignReliabilityModule,
	productionArchitectureReliabilityCostModule,
	productionDockerContainerSecurityModule,
	productionIncidentLabProblemsModule,
	productionKubernetesDay2OperationsModule,
	productionOwnershipModule,
	productionReadinessModule,
	programmingComputerFundamentalsModule,
	programmingComputerWebFoundationsModule,
	project1EnterpriseExpensePlatformModule,
	project2CollaborativeCommunicationPlatformModule,
	project3ProductionIncidentSimulatorModule,
	rateLimiterModule,
	reactModule,
	reactAdvancedPatternsModule,
	reactDataFetchingModule,
	reactEcosystemModule,
	reactFormsInputModule,
	reactFrontendFollowUpsModule,
	reactFundamentalsModule,
	reactHooksPatternsModule,
	reactInternalsModernRenderingModule,
	reactPerformanceModule,
	reactQueryModule,
	reactRouterModule,
	reactSystemDesignModule,
	reactTestingModule,
	reactTestingModule1,
	reactTypescriptReviewsModule,
	reduxModule,
	reduxModule1,
	rideSharingHldModule,
	routingModule,
	runtimePerformanceModule,
	searchAutocompleteModule,
	seniorCodeReviewLabProblemsModule,
	seniorEngineeringJudgmentArchitectureDecisionsModule,
	seniorSoftwareEngineeringModule,
	slackMessagingModule,
	slackMessagingHldModule,
	spotifyMusicModule,
	spotifyMusicHldModule,
	sqlModule,
	sqlServerModule,
	sqlServerModule1,
	stateManagementModule,
	stateManagementModule1,
	stylingModule,
	systemDesignModule,
	systemDesignForSeniorsModule,
	systemDesignProblemsModule,
	technicalDecisionMakingModule,
	technicalLeadershipModule,
	testingModule,
	testingStrategyForSeniorFrontendEngineersModule,
	ticTacToeGameModule,
	ticketBookingHldModule,
	twitterSocialModule,
	twitterSocialHldModule,
	typescriptModule,
	typescriptForReactModule,
	uberRideSharingModule,
	uberRideSharingHldModule,
	unitTestingDotnetModule,
	urlShortenerModule,
	utilitiesModule,
	validationAuthorizationModule,
	vendingMachineModule,
	videoStreamingHldModule,
	webCrawlerModule,
	webNetworkingFundamentalsModule,
	whatsappChatModule,
	whatsappChatHldModule,
	yarnNpmFundamentalsModule,
	yarnNpmPackagesModule,
	youtubeStreamingModule,
	youtubeVideoModule,
	zoomConferencingModule,
	zoomConferencingHldModule,
];


const rawModules: any[] = [...rawModulesPart1];

export const modules: Module[] = rawModules as unknown as Module[];

export function getModuleBySlug(slug: string): Module | undefined {
	return modules.find((m) => m.slug === slug);
}

export function getModulesByCourse(courseSlug: string): Module[] {
	return modules.filter((m) => m.courseSlug === courseSlug).sort((a, b) => a.order - b.order);
}
