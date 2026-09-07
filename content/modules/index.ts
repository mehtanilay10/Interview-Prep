import type { Module } from '@/types';

import sqlServergettingStartedModule from '../courses/sql-server/01-getting-started/content.json';
import aspnetCoregettingStartedAspnetCoreMvcModule from '../courses/aspnet-core/01-getting-started-aspnet-core-mvc/content.json';
import linqgettingStartedLinqModule from '../courses/linq/01-getting-started-linq/content.json';
import efCoregettingStartedEfCoreModule from '../courses/ef-core/01-getting-started-ef-core/content.json';
import reactFundamentalsgettingStartedModule from '../courses/react-fundamentals/01-getting-started/content.json';
import reactAdvancedPatternsrenderPropsModule from '../courses/react-advanced-patterns/01-render-props/content.json';
import typescriptForReacttypescriptBasicsModule from '../courses/typescript-for-react/01-typescript-basics/content.json';
import reduxreduxFundamentalsModule from '../courses/redux/01-redux-fundamentals/content.json';
import reactQueryqueryBasicsModule from '../courses/react-query/01-query-basics/content.json';
import apolloapolloBasicsModule from '../courses/apollo/01-apollo-basics/content.json';
import cleanCodeCsharpsolidPrinciplesModule from '../courses/clean-code-csharp/01-solid-principles/content.json';
import csharpFundamentalsgettingStartedModule from '../courses/csharp-fundamentals/01-getting-started/content.json';
import unitTestingDotnettestingFundamentalsModule from '../courses/unit-testing-dotnet/01-testing-fundamentals/content.json';
import aspnetCoreWebApigettingStartedModule from '../courses/aspnet-core-web-api/01-getting-started/content.json';
import reactTestingtestingFundamentalsModule from '../courses/react-testing/01-testing-fundamentals/content.json';
import authenticationAuthorizationauthBasicsModule from '../courses/authentication-authorization/01-auth-basics/content.json';
import oopsConceptsoopFundamentalsModule from '../courses/oops-concepts/01-oop-fundamentals/content.json';
import interviewQabeginnerQuestionsModule from '../courses/interview-qa/01-beginner-questions/content.json';
import graphqlDotnetgettingStartedModule from '../courses/graphql-dotnet/01-getting-started/content.json';
import designPatternscreationalPatternsModule from '../courses/design-patterns/01-creational-patterns/content.json';
import fullstackSecuritycorsConfigurationModule from '../courses/fullstack-security/01-cors-configuration/content.json';
import sqlServerqueryingDataModule from '../courses/sql-server/02-querying-data/content.json';
import aspnetCorecontrollersRoutingModule from '../courses/aspnet-core/02-controllers-routing/content.json';
import linqlinqFundamentalsSyntaxModule from '../courses/linq/02-linq-fundamentals-syntax/content.json';
import efCoredbcontextConfigurationModule from '../courses/ef-core/02-dbcontext-configuration/content.json';
import reactFundamentalscomponentsPropsModule from '../courses/react-fundamentals/02-components-props/content.json';
import reactAdvancedPatternshigherOrderComponentsModule from '../courses/react-advanced-patterns/02-higher-order-components/content.json';
import typescriptForReacttypesInReactModule from '../courses/typescript-for-react/02-types-in-react/content.json';
import reduxreduxToolkitModule from '../courses/redux/02-redux-toolkit/content.json';
import reactQueryqueryHooksModule from '../courses/react-query/02-query-hooks/content.json';
import apolloqueriesMutationsModule from '../courses/apollo/02-queries-mutations/content.json';
import cleanCodeCsharpcreationalPatternsModule from '../courses/clean-code-csharp/02-creational-patterns/content.json';
import csharpFundamentalsvariablesTypesModule from '../courses/csharp-fundamentals/02-variables-types/content.json';
import unitTestingDotnetxunitBasicsModule from '../courses/unit-testing-dotnet/02-xunit-basics/content.json';
import aspnetCoreWebApicontrollersRoutingModule from '../courses/aspnet-core-web-api/02-controllers-routing/content.json';
import reactTestingjestBasicsModule from '../courses/react-testing/02-jest-basics/content.json';
import authenticationAuthorizationjwtModule from '../courses/authentication-authorization/02-jwt/content.json';
import oopsConceptsencapsulationDataHidingModule from '../courses/oops-concepts/02-encapsulation-data-hiding/content.json';
import interviewQaintermediateQuestionsModule from '../courses/interview-qa/02-intermediate-questions/content.json';
import graphqlDotnetschemaTypesModule from '../courses/graphql-dotnet/02-schema-types/content.json';
import designPatternsstructuralPatternsModule from '../courses/design-patterns/02-structural-patterns/content.json';
import fullstackSecurityjwtAuthenticationModule from '../courses/fullstack-security/02-jwt-authentication/content.json';
import sqlServerjoinsModule from '../courses/sql-server/03-joins/content.json';
import aspnetCoremodelBindingValidationModule from '../courses/aspnet-core/03-model-binding-validation/content.json';
import linqfilteringProjectionModule from '../courses/linq/03-filtering-projection/content.json';
import efCoreconventionsRelationshipsModule from '../courses/ef-core/03-conventions-relationships/content.json';
import reactFundamentalsstateEventsModule from '../courses/react-fundamentals/03-state-events/content.json';
import reactAdvancedPatternscompoundComponentsModule from '../courses/react-advanced-patterns/03-compound-components/content.json';
import typescriptForReacttypingHooksModule from '../courses/typescript-for-react/03-typing-hooks/content.json';
import reduxreactReduxModule from '../courses/redux/03-react-redux/content.json';
import reactQuerymutationsModule from '../courses/react-query/03-mutations/content.json';
import apollocachingModule from '../courses/apollo/03-caching/content.json';
import cleanCodeCsharpstructuralPatternsModule from '../courses/clean-code-csharp/03-structural-patterns/content.json';
import csharpFundamentalscontrolFlowModule from '../courses/csharp-fundamentals/03-control-flow/content.json';
import unitTestingDotnetmockingFakesModule from '../courses/unit-testing-dotnet/03-mocking-fakes/content.json';
import aspnetCoreWebApimodelBindingModule from '../courses/aspnet-core-web-api/03-model-binding/content.json';
import reactTestingreactTestingLibraryModule from '../courses/react-testing/03-react-testing-library/content.json';
import authenticationAuthorizationidentityModule from '../courses/authentication-authorization/03-identity/content.json';
import oopsConceptsinheritanceModule from '../courses/oops-concepts/03-inheritance/content.json';
import interviewQaadvancedQuestionsModule from '../courses/interview-qa/03-advanced-questions/content.json';
import graphqlDotnetqueriesMutationsModule from '../courses/graphql-dotnet/03-queries-mutations/content.json';
import designPatternsbehavioralPatternsModule from '../courses/design-patterns/03-behavioral-patterns/content.json';
import fullstackSecurityxssCsrfProtectionModule from '../courses/fullstack-security/03-xss-csrf-protection/content.json';
import sqlServersetOperationsModule from '../courses/sql-server/04-set-operations/content.json';
import aspnetCoreviewsTagHelpersModule from '../courses/aspnet-core/04-views-tag-helpers/content.json';
import linqsortingGroupingModule from '../courses/linq/04-sorting-grouping/content.json';
import efCoredataOperationsConnectedModule from '../courses/ef-core/04-data-operations-connected/content.json';
import reactFundamentalsformsInputModule from '../courses/react-fundamentals/04-forms-input/content.json';
import reactAdvancedPatternsstateReducersModule from '../courses/react-advanced-patterns/04-state-reducers/content.json';
import typescriptForReactadvancedTypesModule from '../courses/typescript-for-react/04-advanced-types/content.json';
import reduxreduxMiddlewareModule from '../courses/redux/04-redux-middleware/content.json';
import reactQueryadvancedFeaturesModule from '../courses/react-query/04-advanced-features/content.json';
import apolloadvancedPatternsModule from '../courses/apollo/04-advanced-patterns/content.json';
import cleanCodeCsharpbehavioralPatternsModule from '../courses/clean-code-csharp/04-behavioral-patterns/content.json';
import csharpFundamentalsoopModule from '../courses/csharp-fundamentals/04-oop/content.json';
import unitTestingDotnetintegrationTestingModule from '../courses/unit-testing-dotnet/04-integration-testing/content.json';
import aspnetCoreWebApimiddlewareModule from '../courses/aspnet-core-web-api/04-middleware/content.json';
import reactTestingcomponentTestingModule from '../courses/react-testing/04-component-testing/content.json';
import authenticationAuthorizationoauthModule from '../courses/authentication-authorization/04-oauth/content.json';
import oopsConceptspolymorphismModule from '../courses/oops-concepts/04-polymorphism/content.json';
import interviewQascenarioBasedModule from '../courses/interview-qa/04-scenario-based/content.json';
import graphqlDotnetfilteringPaginationModule from '../courses/graphql-dotnet/04-filtering-pagination/content.json';
import designPatternsenterprisePatternsModule from '../courses/design-patterns/04-enterprise-patterns/content.json';
import fullstackSecurityapiSecurityRateLimitingModule from '../courses/fullstack-security/04-api-security-rate-limiting/content.json';
import sqlServergroupingAggregationSubqueriesModule from '../courses/sql-server/05-grouping-aggregation-subqueries/content.json';
import aspnetCoredependencyInjectionConfigurationModule from '../courses/aspnet-core/05-dependency-injection-configuration/content.json';
import linqjoiningDataModule from '../courses/linq/05-joining-data/content.json';
import efCoredataOperationsDisconnectedModule from '../courses/ef-core/05-data-operations-disconnected/content.json';
import reactFundamentalslifecycleEffectsModule from '../courses/react-fundamentals/05-lifecycle-effects/content.json';
import reactAdvancedPatternscontrolPropsModule from '../courses/react-advanced-patterns/05-control-props/content.json';
import typescriptForReactgenericComponentsModule from '../courses/typescript-for-react/05-generic-components/content.json';
import reduxreduxPatternsModule from '../courses/redux/05-redux-patterns/content.json';
import reactQuerycachingStrategiesModule from '../courses/react-query/05-caching-strategies/content.json';
import apolloclientSideCachingAdvancedModule from '../courses/apollo/05-client-side-caching-advanced/content.json';
import cleanCodeCsharpcleanCodePracticesModule from '../courses/clean-code-csharp/05-clean-code-practices/content.json';
import csharpFundamentalsadvancedFeaturesModule from '../courses/csharp-fundamentals/05-advanced-features/content.json';
import unitTestingDotnettddModule from '../courses/unit-testing-dotnet/05-tdd/content.json';
import aspnetCoreWebApidependencyInjectionModule from '../courses/aspnet-core-web-api/05-dependency-injection/content.json';
import reactTestinge2eTestingModule from '../courses/react-testing/05-e2e-testing/content.json';
import authenticationAuthorizationoauth2FlowsDeepDiveModule from '../courses/authentication-authorization/05-oauth2-flows-deep-dive/content.json';
import oopsConceptsabstractionModule from '../courses/oops-concepts/05-abstraction/content.json';
import interviewQasystemDesignModule from '../courses/interview-qa/05-system-design/content.json';
import graphqlDotnetauthenticationModule from '../courses/graphql-dotnet/05-authentication/content.json';
import designPatternsconcurrencyPatternsModule from '../courses/design-patterns/05-concurrency-patterns/content.json';
import fullstackSecuritysecureApiDesignModule from '../courses/fullstack-security/05-secure-api-design/content.json';
import sqlServerdataModificationDmlModule from '../courses/sql-server/06-data-modification-dml/content.json';
import aspnetCorefiltersModule from '../courses/aspnet-core/06-filters/content.json';
import linqsetOperationsModule from '../courses/linq/06-set-operations/content.json';
import efCorechangeTrackingModule from '../courses/ef-core/06-change-tracking/content.json';
import reactFundamentalscontextRefsModule from '../courses/react-fundamentals/06-context-refs/content.json';
import reactAdvancedPatternsperformancePatternsModule from '../courses/react-advanced-patterns/06-performance-patterns/content.json';
import typescriptForReactreactPatternsModule from '../courses/typescript-for-react/06-react-patterns/content.json';
import reduxreduxTestingModule from '../courses/redux/06-redux-testing/content.json';
import reactQueryofflineSupportPersistenceModule from '../courses/react-query/06-offline-support-persistence/content.json';
import apolloerrorHandlingOptimisticModule from '../courses/apollo/06-error-handling-optimistic/content.json';
import cleanCodeCsharparchitecturePatternsModule from '../courses/clean-code-csharp/06-architecture-patterns/content.json';
import csharpFundamentalserrorHandlingModule from '../courses/csharp-fundamentals/06-error-handling/content.json';
import unitTestingDotnettestingPatternsModule from '../courses/unit-testing-dotnet/06-testing-patterns/content.json';
import aspnetCoreWebApierrorHandlingValidationModule from '../courses/aspnet-core-web-api/06-error-handling-validation/content.json';
import reactTestingadvancedTestingPatternsModule from '../courses/react-testing/06-advanced-testing-patterns/content.json';
import authenticationAuthorizationadvancedAuthorizationModule from '../courses/authentication-authorization/06-advanced-authorization/content.json';
import oopsConceptsinterfacesAbstractClassesModule from '../courses/oops-concepts/06-interfaces-abstract-classes/content.json';
import interviewQarapidFireModule from '../courses/interview-qa/06-rapid-fire/content.json';
import graphqlDotnetperformanceModule from '../courses/graphql-dotnet/06-performance/content.json';
import designPatternsarchitecturalPatternsModule from '../courses/design-patterns/06-architectural-patterns/content.json';
import fullstackSecuritydependencySecurityModule from '../courses/fullstack-security/06-dependency-security/content.json';
import sqlServerdatabaseSchemaTableObjectsModule from '../courses/sql-server/07-database-schema-table-objects/content.json';
import aspnetCorewebApiModule from '../courses/aspnet-core/07-web-api/content.json';
import linqaggregationOperatorsModule from '../courses/linq/07-aggregation-operators/content.json';
import efCorequeryingModule from '../courses/ef-core/07-querying/content.json';
import reactFundamentalsreactRouterModule from '../courses/react-fundamentals/07-react-router/content.json';
import reactAdvancedPatternscustomHooksArchitectureModule from '../courses/react-advanced-patterns/07-custom-hooks-architecture/content.json';
import typescriptForReacttestingBestPracticesModule from '../courses/typescript-for-react/07-testing-best-practices/content.json';
import reduxreduxAdvancedConceptsModule from '../courses/redux/07-redux-advanced-concepts/content.json';
import reactQueryprefetchingSsrModule from '../courses/react-query/07-prefetching-ssr/content.json';
import apollosubscriptionsRealtimeModule from '../courses/apollo/07-subscriptions-realtime/content.json';
import csharpFundamentalsmodernCsharpModule from '../courses/csharp-fundamentals/07-modern-csharp/content.json';
import unitTestingDotnetcodeCoverageModule from '../courses/unit-testing-dotnet/07-code-coverage/content.json';
import aspnetCoreWebApiauthenticationBasicsModule from '../courses/aspnet-core-web-api/07-authentication-basics/content.json';
import reactTestingtestingReactQueryModule from '../courses/react-testing/07-testing-react-query/content.json';
import authenticationAuthorizationrefreshTokenStrategiesModule from '../courses/authentication-authorization/07-refresh-token-strategies/content.json';
import oopsConceptsdesignPrinciplesModule from '../courses/oops-concepts/07-design-principles/content.json';
import interviewQainterviewTrapsModule from '../courses/interview-qa/07-interview-traps/content.json';
import graphqlDotneterrorHandlingModule from '../courses/graphql-dotnet/07-error-handling/content.json';
import fullstackSecurityenvironmentSecretsModule from '../courses/fullstack-security/07-environment-secrets/content.json';
import sqlServerdataTypesModule from '../courses/sql-server/08-data-types/content.json';
import aspnetCoreauthenticationIdentityModule from '../courses/aspnet-core/08-authentication-identity/content.json';
import linqquantifiersElementOperatorsModule from '../courses/linq/08-quantifiers-element-operators/content.json';
import efCoreinheritanceStrategiesModule from '../courses/ef-core/08-inheritance-strategies/content.json';
import reactFundamentalsstylingModule from '../courses/react-fundamentals/08-styling/content.json';
import reactAdvancedPatternsstateMachinesXstateModule from '../courses/react-advanced-patterns/08-state-machines-xstate/content.json';
import reduxreduxRealWorldModule from '../courses/redux/08-redux-real-world/content.json';
import reactQueryperformanceOptimizationModule from '../courses/react-query/08-performance-optimization/content.json';
import apollolocalStateManagementModule from '../courses/apollo/08-local-state-management/content.json';
import aspnetCoreWebApiloggingConfigurationModule from '../courses/aspnet-core-web-api/08-logging-configuration/content.json';
import authenticationAuthorizationssoIdentityProvidersModule from '../courses/authentication-authorization/08-sso-identity-providers/content.json';
import interviewQaperformanceOptimizationModule from '../courses/interview-qa/08-performance-optimization/content.json';
import fullstackSecuritysecurityTestingModule from '../courses/fullstack-security/08-security-testing/content.json';
import sqlServerconstraintsModule from '../courses/sql-server/09-constraints/content.json';
import aspnetCorelocalizationGlobalizationModule from '../courses/aspnet-core/09-localization-globalization/content.json';
import linqpartitioningOperatorsModule from '../courses/linq/09-partitioning-operators/content.json';
import efCoremigrationsModule from '../courses/ef-core/09-migrations/content.json';
import reactAdvancedPatternscomponentCompositionStrategiesModule from '../courses/react-advanced-patterns/09-component-composition-strategies/content.json';
import reactQueryrealWorldPatternsModule from '../courses/react-query/09-real-world-patterns/content.json';
import apollossrNextjsPerformanceModule from '../courses/apollo/09-ssr-nextjs-performance/content.json';
import authenticationAuthorizationsecurityBestPracticesModule from '../courses/authentication-authorization/09-security-best-practices/content.json';
import interviewQacicdPipelinesModule from '../courses/interview-qa/09-cicd-pipelines/content.json';
import sqlServerindexesModule from '../courses/sql-server/10-indexes/content.json';
import aspnetCoreadoNetDataAccessModule from '../courses/aspnet-core/10-ado-net-data-access/content.json';
import linqconversionGenerationOperatorsModule from '../courses/linq/10-conversion-generation-operators/content.json';
import efCoreadvancedFeaturesModule from '../courses/ef-core/10-advanced-features/content.json';
import reactAdvancedPatternsadvancedHookPatternsModule from '../courses/react-advanced-patterns/10-advanced-hook-patterns/content.json';
import sqlServerviewsModule from '../courses/sql-server/11-views/content.json';
import aspnetCorecorsCrossOriginModule from '../courses/aspnet-core/11-cors-cross-origin/content.json';
import linqadvancedLinqConceptsModule from '../courses/linq/11-advanced-linq-concepts/content.json';
import efCoredatabaseFirstDiagnosticsModule from '../courses/ef-core/11-database-first-diagnostics/content.json';
import sqlServerstoredProceduresFunctionsModule from '../courses/sql-server/12-stored-procedures-functions/content.json';
import efCoreperformanceBulkOperationsModule from '../courses/ef-core/12-performance-bulk-operations/content.json';
import sqlServertriggersModule from '../courses/sql-server/13-triggers/content.json';
import sqlServertransactionsErrorHandlingBackupModule from '../courses/sql-server/14-transactions-error-handling-backup/content.json';
import sqlServeradvancedTopicsModule from '../courses/sql-server/15-advanced-topics/content.json';
import sqlServerperformanceTuningModule from '../courses/sql-server/16-performance-tuning/content.json';
import sqlServersecurityHardeningModule from '../courses/sql-server/17-security-hardening/content.json';
import sqlServerhighAvailabilityDrModule from '../courses/sql-server/18-high-availability-dr/content.json';
import sqlServerdataWarehousingModule from '../courses/sql-server/19-data-warehousing/content.json';
import sqlServerazureSqlModule from '../courses/sql-server/20-azure-sql/content.json';
import sqlServermodernDataToolsModule from '../courses/sql-server/21-modern-data-tools/content.json';

const rawModules = [
  sqlServergettingStartedModule,
  aspnetCoregettingStartedAspnetCoreMvcModule,
  linqgettingStartedLinqModule,
  efCoregettingStartedEfCoreModule,
  reactFundamentalsgettingStartedModule,
  reactAdvancedPatternsrenderPropsModule,
  typescriptForReacttypescriptBasicsModule,
  reduxreduxFundamentalsModule,
  reactQueryqueryBasicsModule,
  apolloapolloBasicsModule,
  cleanCodeCsharpsolidPrinciplesModule,
  csharpFundamentalsgettingStartedModule,
  unitTestingDotnettestingFundamentalsModule,
  aspnetCoreWebApigettingStartedModule,
  reactTestingtestingFundamentalsModule,
  authenticationAuthorizationauthBasicsModule,
  oopsConceptsoopFundamentalsModule,
  interviewQabeginnerQuestionsModule,
  graphqlDotnetgettingStartedModule,
  designPatternscreationalPatternsModule,
  fullstackSecuritycorsConfigurationModule,
  sqlServerqueryingDataModule,
  aspnetCorecontrollersRoutingModule,
  linqlinqFundamentalsSyntaxModule,
  efCoredbcontextConfigurationModule,
  reactFundamentalscomponentsPropsModule,
  reactAdvancedPatternshigherOrderComponentsModule,
  typescriptForReacttypesInReactModule,
  reduxreduxToolkitModule,
  reactQueryqueryHooksModule,
  apolloqueriesMutationsModule,
  cleanCodeCsharpcreationalPatternsModule,
  csharpFundamentalsvariablesTypesModule,
  unitTestingDotnetxunitBasicsModule,
  aspnetCoreWebApicontrollersRoutingModule,
  reactTestingjestBasicsModule,
  authenticationAuthorizationjwtModule,
  oopsConceptsencapsulationDataHidingModule,
  interviewQaintermediateQuestionsModule,
  graphqlDotnetschemaTypesModule,
  designPatternsstructuralPatternsModule,
  fullstackSecurityjwtAuthenticationModule,
  sqlServerjoinsModule,
  aspnetCoremodelBindingValidationModule,
  linqfilteringProjectionModule,
  efCoreconventionsRelationshipsModule,
  reactFundamentalsstateEventsModule,
  reactAdvancedPatternscompoundComponentsModule,
  typescriptForReacttypingHooksModule,
  reduxreactReduxModule,
  reactQuerymutationsModule,
  apollocachingModule,
  cleanCodeCsharpstructuralPatternsModule,
  csharpFundamentalscontrolFlowModule,
  unitTestingDotnetmockingFakesModule,
  aspnetCoreWebApimodelBindingModule,
  reactTestingreactTestingLibraryModule,
  authenticationAuthorizationidentityModule,
  oopsConceptsinheritanceModule,
  interviewQaadvancedQuestionsModule,
  graphqlDotnetqueriesMutationsModule,
  designPatternsbehavioralPatternsModule,
  fullstackSecurityxssCsrfProtectionModule,
  sqlServersetOperationsModule,
  aspnetCoreviewsTagHelpersModule,
  linqsortingGroupingModule,
  efCoredataOperationsConnectedModule,
  reactFundamentalsformsInputModule,
  reactAdvancedPatternsstateReducersModule,
  typescriptForReactadvancedTypesModule,
  reduxreduxMiddlewareModule,
  reactQueryadvancedFeaturesModule,
  apolloadvancedPatternsModule,
  cleanCodeCsharpbehavioralPatternsModule,
  csharpFundamentalsoopModule,
  unitTestingDotnetintegrationTestingModule,
  aspnetCoreWebApimiddlewareModule,
  reactTestingcomponentTestingModule,
  authenticationAuthorizationoauthModule,
  oopsConceptspolymorphismModule,
  interviewQascenarioBasedModule,
  graphqlDotnetfilteringPaginationModule,
  designPatternsenterprisePatternsModule,
  fullstackSecurityapiSecurityRateLimitingModule,
  sqlServergroupingAggregationSubqueriesModule,
  aspnetCoredependencyInjectionConfigurationModule,
  linqjoiningDataModule,
  efCoredataOperationsDisconnectedModule,
  reactFundamentalslifecycleEffectsModule,
  reactAdvancedPatternscontrolPropsModule,
  typescriptForReactgenericComponentsModule,
  reduxreduxPatternsModule,
  reactQuerycachingStrategiesModule,
  apolloclientSideCachingAdvancedModule,
  cleanCodeCsharpcleanCodePracticesModule,
  csharpFundamentalsadvancedFeaturesModule,
  unitTestingDotnettddModule,
  aspnetCoreWebApidependencyInjectionModule,
  reactTestinge2eTestingModule,
  authenticationAuthorizationoauth2FlowsDeepDiveModule,
  oopsConceptsabstractionModule,
  interviewQasystemDesignModule,
  graphqlDotnetauthenticationModule,
  designPatternsconcurrencyPatternsModule,
  fullstackSecuritysecureApiDesignModule,
  sqlServerdataModificationDmlModule,
  aspnetCorefiltersModule,
  linqsetOperationsModule,
  efCorechangeTrackingModule,
  reactFundamentalscontextRefsModule,
  reactAdvancedPatternsperformancePatternsModule,
  typescriptForReactreactPatternsModule,
  reduxreduxTestingModule,
  reactQueryofflineSupportPersistenceModule,
  apolloerrorHandlingOptimisticModule,
  cleanCodeCsharparchitecturePatternsModule,
  csharpFundamentalserrorHandlingModule,
  unitTestingDotnettestingPatternsModule,
  aspnetCoreWebApierrorHandlingValidationModule,
  reactTestingadvancedTestingPatternsModule,
  authenticationAuthorizationadvancedAuthorizationModule,
  oopsConceptsinterfacesAbstractClassesModule,
  interviewQarapidFireModule,
  graphqlDotnetperformanceModule,
  designPatternsarchitecturalPatternsModule,
  fullstackSecuritydependencySecurityModule,
  sqlServerdatabaseSchemaTableObjectsModule,
  aspnetCorewebApiModule,
  linqaggregationOperatorsModule,
  efCorequeryingModule,
  reactFundamentalsreactRouterModule,
  reactAdvancedPatternscustomHooksArchitectureModule,
  typescriptForReacttestingBestPracticesModule,
  reduxreduxAdvancedConceptsModule,
  reactQueryprefetchingSsrModule,
  apollosubscriptionsRealtimeModule,
  csharpFundamentalsmodernCsharpModule,
  unitTestingDotnetcodeCoverageModule,
  aspnetCoreWebApiauthenticationBasicsModule,
  reactTestingtestingReactQueryModule,
  authenticationAuthorizationrefreshTokenStrategiesModule,
  oopsConceptsdesignPrinciplesModule,
  interviewQainterviewTrapsModule,
  graphqlDotneterrorHandlingModule,
  fullstackSecurityenvironmentSecretsModule,
  sqlServerdataTypesModule,
  aspnetCoreauthenticationIdentityModule,
  linqquantifiersElementOperatorsModule,
  efCoreinheritanceStrategiesModule,
  reactFundamentalsstylingModule,
  reactAdvancedPatternsstateMachinesXstateModule,
  reduxreduxRealWorldModule,
  reactQueryperformanceOptimizationModule,
  apollolocalStateManagementModule,
  aspnetCoreWebApiloggingConfigurationModule,
  authenticationAuthorizationssoIdentityProvidersModule,
  interviewQaperformanceOptimizationModule,
  fullstackSecuritysecurityTestingModule,
  sqlServerconstraintsModule,
  aspnetCorelocalizationGlobalizationModule,
  linqpartitioningOperatorsModule,
  efCoremigrationsModule,
  reactAdvancedPatternscomponentCompositionStrategiesModule,
  reactQueryrealWorldPatternsModule,
  apollossrNextjsPerformanceModule,
  authenticationAuthorizationsecurityBestPracticesModule,
  interviewQacicdPipelinesModule,
  sqlServerindexesModule,
  aspnetCoreadoNetDataAccessModule,
  linqconversionGenerationOperatorsModule,
  efCoreadvancedFeaturesModule,
  reactAdvancedPatternsadvancedHookPatternsModule,
  sqlServerviewsModule,
  aspnetCorecorsCrossOriginModule,
  linqadvancedLinqConceptsModule,
  efCoredatabaseFirstDiagnosticsModule,
  sqlServerstoredProceduresFunctionsModule,
  efCoreperformanceBulkOperationsModule,
  sqlServertriggersModule,
  sqlServertransactionsErrorHandlingBackupModule,
  sqlServeradvancedTopicsModule,
  sqlServerperformanceTuningModule,
  sqlServersecurityHardeningModule,
  sqlServerhighAvailabilityDrModule,
  sqlServerdataWarehousingModule,
  sqlServerazureSqlModule,
  sqlServermodernDataToolsModule,
];

export const modules: Module[] = rawModules as unknown as Module[];

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}

export function getModulesByCourse(courseSlug: string): Module[] {
  return modules
    .filter((m) => m.courseSlug === courseSlug)
    .sort((a, b) => a.order - b.order);
}
