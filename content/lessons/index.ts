import type { Lesson } from '@/types';

import sqlServergettingStartedwhatIsSqlServerLesson from '../courses/sql-server/01-getting-started/01-what-is-sql-server.json';
import sqlServerqueryingDataselectStatementLesson from '../courses/sql-server/02-querying-data/01-select-statement.json';
import sqlServerjoinsvisualizationExplanationOfJoinsLesson from '../courses/sql-server/03-joins/01-visualization-explanation-of-joins.json';
import sqlServersetOperationsunionUltimateGuideLesson from '../courses/sql-server/04-set-operations/01-union-ultimate-guide.json';
import sqlServergroupingAggregationSubqueriesgroupByLesson from '../courses/sql-server/05-grouping-aggregation-subqueries/01-group-by.json';
import sqlServerdataModificationDmlinsertAddRowLesson from '../courses/sql-server/06-data-modification-dml/01-insert-add-row.json';
import sqlServerdatabaseSchemaTableObjectscreateDatabaseLesson from '../courses/sql-server/07-database-schema-table-objects/01-create-database.json';
import sqlServerdataTypesdataTypesOverviewLesson from '../courses/sql-server/08-data-types/01-data-types-overview.json';
import sqlServerconstraintscheckConstraintLesson from '../courses/sql-server/09-constraints/01-check-constraint.json';
import sqlServerindexesindexesOverviewLesson from '../courses/sql-server/10-indexes/01-indexes-overview.json';
import sqlServerviewsviewsIntroductionLesson from '../courses/sql-server/11-views/01-views-introduction.json';
import sqlServerstoredProceduresFunctionsstoredProceduresBasicsLesson from '../courses/sql-server/12-stored-procedures-functions/01-stored-procedures-basics.json';
import sqlServertriggerstriggersTutorialLesson from '../courses/sql-server/13-triggers/01-triggers-tutorial.json';
import sqlServertransactionsErrorHandlingBackuptransactionLesson from '../courses/sql-server/14-transactions-error-handling-backup/01-transaction.json';
import sqlServeradvancedTopicscursorLesson from '../courses/sql-server/15-advanced-topics/01-cursor.json';
import sqlServerperformanceTuningexecutionPlansLesson from '../courses/sql-server/16-performance-tuning/execution-plans.json';
import sqlServersecurityHardeningauthenticationModesLesson from '../courses/sql-server/17-security-hardening/authentication-modes.json';
import sqlServerhighAvailabilityDralwaysOnAvailabilityGroupsLesson from '../courses/sql-server/18-high-availability-dr/always-on-availability-groups.json';
import sqlServerdataWarehousingstarSnowflakeSchemaLesson from '../courses/sql-server/19-data-warehousing/star-snowflake-schema.json';
import sqlServerazureSqlazureSqlDatabaseLesson from '../courses/sql-server/20-azure-sql/azure-sql-database.json';
import sqlServermodernDataToolssqlServerIntegrationServicesLesson from '../courses/sql-server/21-modern-data-tools/sql-server-integration-services.json';
import aspnetCoregettingStartedAspnetCoreMvcfirstAspnetCore100MvcApplicationLesson from '../courses/aspnet-core/01-getting-started-aspnet-core-mvc/first-aspnet-core-10-0-mvc-application.json';
import aspnetCorecontrollersRoutingactionsInAspnetCoreLesson from '../courses/aspnet-core/02-controllers-routing/actions-in-aspnet-core.json';
import aspnetCoremodelBindingValidationadvancedModelBindingConceptsLesson from '../courses/aspnet-core/03-model-binding-validation/advanced-model-binding-concepts.json';
import aspnetCoreviewsTagHelpersbuiltInTagHelpersLesson from '../courses/aspnet-core/04-views-tag-helpers/built-in-tag-helpers.json';
import aspnetCoredependencyInjectionConfigurationaspnetCoreConfigurationsProgramMiddlewareAppsettingsLesson from '../courses/aspnet-core/05-dependency-injection-configuration/aspnet-core-configurations-program-middleware-appsettings.json';
import aspnetCorefiltersaspnetCoreFiltersDependencyInjectionGlobalFiltersLesson from '../courses/aspnet-core/06-filters/aspnet-core-filters-dependency-injection-global-filters.json';
import aspnetCorewebApicallWebApiJavascriptXmlhttprequestLesson from '../courses/aspnet-core/07-web-api/call-web-api-javascript-xmlhttprequest.json';
import aspnetCoreauthenticationIdentitycreateReadUpdateDeleteUsersAspnetCoreIdentityLesson from '../courses/aspnet-core/08-authentication-identity/create-read-update-delete-users-aspnet-core-identity.json';
import aspnetCorelocalizationGlobalizationglobalizationLocalizationResourceFilesLesson from '../courses/aspnet-core/09-localization-globalization/globalization-localization-resource-files.json';
import aspnetCoreadoNetDataAccesslearnAdoNetCrudOperationsAspnetCoreLesson from '../courses/aspnet-core/10-ado-net-data-access/learn-ado-net-crud-operations-aspnet-core.json';
import aspnetCorecorsCrossOriginenableCorsAspnetCoreLesson from '../courses/aspnet-core/11-cors-cross-origin/enable-cors-aspnet-core.json';
import linqgettingStartedLinqwhatIsLinqLesson from '../courses/linq/01-getting-started-linq/what-is-linq.json';
import linqlinqFundamentalsSyntaxlinqQuerySyntaxLesson from '../courses/linq/02-linq-fundamentals-syntax/linq-query-syntax.json';
import linqfilteringProjectionfilteringOperatorWhereLesson from '../courses/linq/03-filtering-projection/filtering-operator-where.json';
import linqsortingGroupingorderbyOrderbydescendingLesson from '../courses/linq/04-sorting-grouping/orderby-orderbydescending.json';
import linqjoiningDatajoinOperatorLesson from '../courses/linq/05-joining-data/join-operator.json';
import linqsetOperationsdistinctSetOperatorLesson from '../courses/linq/06-set-operations/distinct-set-operator.json';
import linqaggregationOperatorsaggregationCountLesson from '../courses/linq/07-aggregation-operators/aggregation-count.json';
import linqquantifiersElementOperatorsquantifierOperatorsLesson from '../courses/linq/08-quantifiers-element-operators/quantifier-operators.json';
import linqpartitioningOperatorsskipSkipwhileLesson from '../courses/linq/09-partitioning-operators/skip-skipwhile.json';
import linqconversionGenerationOperatorsconversionOperatorsLesson from '../courses/linq/10-conversion-generation-operators/conversion-operators.json';
import linqadvancedLinqConceptsexpressionTreesLesson from '../courses/linq/11-advanced-linq-concepts/expression-trees.json';
import efCoregettingStartedEfCoreentityFrameworkCoreTutorialsLesson from '../courses/ef-core/01-getting-started-ef-core/entity-framework-core-tutorials.json';
import efCoredbcontextConfigurationdbcontextInEntityFrameworkCoreLesson from '../courses/ef-core/02-dbcontext-configuration/dbcontext-in-entity-framework-core.json';
import efCoreconventionsRelationshipsentityFrameworkCoreConventionsLesson from '../courses/ef-core/03-conventions-relationships/entity-framework-core-conventions.json';
import efCoredataOperationsConnectedentityFrameworkCoreSavingDataConnectedLesson from '../courses/ef-core/04-data-operations-connected/entity-framework-core-saving-data-connected.json';
import efCoredataOperationsDisconnectedinsertDataDisconnectedScenarioLesson from '../courses/ef-core/05-data-operations-disconnected/insert-data-disconnected-scenario.json';
import efCorechangeTrackingtrackingChangesOfEntitiesLesson from '../courses/ef-core/06-change-tracking/tracking-changes-of-entities.json';
import efCorequeryingqueryingInEntityFrameworkCoreLesson from '../courses/ef-core/07-querying/querying-in-entity-framework-core.json';
import efCoreinheritanceStrategiesinheritanceStrategyInEfCoreLesson from '../courses/ef-core/08-inheritance-strategies/inheritance-strategy-in-ef-core.json';
import efCoremigrationsmigrationsInEntityFrameworkCoreLesson from '../courses/ef-core/09-migrations/migrations-in-entity-framework-core.json';
import efCoreadvancedFeaturesentityFrameworkCoreInterceptorsLesson from '../courses/ef-core/10-advanced-features/entity-framework-core-interceptors.json';
import efCoredatabaseFirstDiagnosticsentityFrameworkCoreWithExistingDatabaseLesson from '../courses/ef-core/11-database-first-diagnostics/entity-framework-core-with-existing-database.json';
import efCoreperformanceBulkOperationsentityFrameworkExtensionsPerformanceLesson from '../courses/ef-core/12-performance-bulk-operations/entity-framework-extensions-performance.json';
import reactFundamentalsgettingStartedwhatIsReactLesson from '../courses/react-fundamentals/01-getting-started/what-is-react.json';
import reactFundamentalscomponentsPropsfunctionalComponentsLesson from '../courses/react-fundamentals/02-components-props/functional-components.json';
import reactFundamentalsstateEventsuseStateHookLesson from '../courses/react-fundamentals/03-state-events/useState-hook.json';
import reactFundamentalsformsInputformValidationLesson from '../courses/react-fundamentals/04-forms-input/form-validation.json';
import reactFundamentalslifecycleEffectsuseeffectBasicsLesson from '../courses/react-fundamentals/05-lifecycle-effects/useeffect-basics.json';
import reactFundamentalscontextRefsreactContextLesson from '../courses/react-fundamentals/06-context-refs/react-context.json';
import reactFundamentalsreactRouterroutingBasicsReactFundamentalsLesson from '../courses/react-fundamentals/07-react-router/routing-basics.json';
import reactFundamentalsstylingcssModulesLesson from '../courses/react-fundamentals/08-styling/css-modules.json';
import reactAdvancedPatternsrenderPropsrenderPropsBasicsLesson from '../courses/react-advanced-patterns/01-render-props/render-props-basics.json';
import reactAdvancedPatternshigherOrderComponentshocBasicsLesson from '../courses/react-advanced-patterns/02-higher-order-components/hoc-basics.json';
import reactAdvancedPatternscompoundComponentscompoundBasicsLesson from '../courses/react-advanced-patterns/03-compound-components/compound-basics.json';
import reactAdvancedPatternsstateReducersstateReducerBasicsLesson from '../courses/react-advanced-patterns/04-state-reducers/state-reducer-basics.json';
import reactAdvancedPatternscontrolPropscontrolPropsBasicsLesson from '../courses/react-advanced-patterns/05-control-props/control-props-basics.json';
import reactAdvancedPatternsperformancePatternsmemoizationBasicsLesson from '../courses/react-advanced-patterns/06-performance-patterns/memoization-basics.json';
import reactAdvancedPatternscustomHooksArchitecturehookCompositionPatternsLesson from '../courses/react-advanced-patterns/07-custom-hooks-architecture/hook-composition-patterns.json';
import reactAdvancedPatternsstateMachinesXstatefiniteStateMachinesLesson from '../courses/react-advanced-patterns/08-state-machines-xstate/finite-state-machines.json';
import reactAdvancedPatternscomponentCompositionStrategiesslotPatternLesson from '../courses/react-advanced-patterns/09-component-composition-strategies/slot-pattern.json';
import reactAdvancedPatternsadvancedHookPatternsreducerHooksPatternsLesson from '../courses/react-advanced-patterns/10-advanced-hook-patterns/reducer-hooks-patterns.json';
import typescriptForReacttypescriptBasicswhatIsTypescriptLesson from '../courses/typescript-for-react/01-typescript-basics/what-is-typescript.json';
import typescriptForReacttypesInReacttypingComponentsLesson from '../courses/typescript-for-react/02-types-in-react/typing-components.json';
import typescriptForReacttypingHookstypingUseeffectLesson from '../courses/typescript-for-react/03-typing-hooks/typing-useeffect.json';
import typescriptForReactadvancedTypesgenericsBasicsLesson from '../courses/typescript-for-react/04-advanced-types/generics-basics.json';
import typescriptForReactgenericComponentsgenericListLesson from '../courses/typescript-for-react/05-generic-components/generic-list.json';
import typescriptForReactreactPatternstypeSafeContextLesson from '../courses/typescript-for-react/06-react-patterns/type-safe-context.json';
import typescriptForReacttestingBestPracticestestingTypescriptReactLesson from '../courses/typescript-for-react/07-testing-best-practices/testing-typescript-react.json';
import reduxreduxFundamentalswhatIsReduxLesson from '../courses/redux/01-redux-fundamentals/what-is-redux.json';
import reduxreduxToolkitconfigureStoreLesson from '../courses/redux/02-redux-toolkit/configure-store.json';
import reduxreactReduxproviderLesson from '../courses/redux/03-react-redux/provider.json';
import reduxreduxMiddlewaremiddlewareBasicsReduxLesson from '../courses/redux/04-redux-middleware/middleware-basics.json';
import reduxreduxPatternsnormalizingStateLesson from '../courses/redux/05-redux-patterns/normalizing-state.json';
import reduxreduxTestingtestingReducersLesson from '../courses/redux/06-redux-testing/testing-reducers.json';
import reduxreduxAdvancedConceptscustomHooksLesson from '../courses/redux/07-redux-advanced-concepts/custom-hooks.json';
import reduxreduxRealWorldprojectStructureLesson from '../courses/redux/08-redux-real-world/project-structure.json';
import reactQueryqueryBasicswhatIsReactQueryLesson from '../courses/react-query/01-query-basics/what-is-react-query.json';
import reactQueryqueryHooksqueryOptionsReactQueryLesson from '../courses/react-query/02-query-hooks/query-options.json';
import reactQuerymutationsuseMutationLesson from '../courses/react-query/03-mutations/use-mutation.json';
import reactQueryadvancedFeaturessuspenseLesson from '../courses/react-query/04-advanced-features/suspense.json';
import reactQuerycachingStrategiescacheConfigurationLesson from '../courses/react-query/05-caching-strategies/cache-configuration.json';
import reactQueryofflineSupportPersistencepersistenceBasicsLesson from '../courses/react-query/06-offline-support-persistence/persistence-basics.json';
import reactQueryprefetchingSsrprefetchingStrategiesLesson from '../courses/react-query/07-prefetching-ssr/prefetching-strategies.json';
import reactQueryperformanceOptimizationselectiveFetchingLesson from '../courses/react-query/08-performance-optimization/selective-fetching.json';
import reactQueryrealWorldPatternsauthFlowsTokenRefreshLesson from '../courses/react-query/09-real-world-patterns/auth-flows-token-refresh.json';
import apolloapolloBasicswhatIsApolloLesson from '../courses/apollo/01-apollo-basics/what-is-apollo.json';
import apolloqueriesMutationsqueryOptionsLesson from '../courses/apollo/02-queries-mutations/query-options.json';
import apollocachingcacheBasicsLesson from '../courses/apollo/03-caching/cache-basics.json';
import apolloadvancedPatternssubscriptionsLesson from '../courses/apollo/04-advanced-patterns/subscriptions.json';
import apolloclientSideCachingAdvancedcacheConfigurationLesson from '../courses/apollo/05-client-side-caching-advanced/cache-configuration.json';
import apolloerrorHandlingOptimisticerrorHandlingBasicsLesson from '../courses/apollo/06-error-handling-optimistic/error-handling-basics.json';
import apollosubscriptionsRealtimesubscriptionsBasicsLesson from '../courses/apollo/07-subscriptions-realtime/subscriptions-basics.json';
import apollolocalStateManagementreactiveVariablesLesson from '../courses/apollo/08-local-state-management/reactive-variables.json';
import apollossrNextjsPerformancenextjsIntegrationLesson from '../courses/apollo/09-ssr-nextjs-performance/nextjs-integration.json';
import cleanCodeCsharpsolidPrinciplessingleResponsibilityLesson from '../courses/clean-code-csharp/01-solid-principles/single-responsibility.json';
import cleanCodeCsharpcreationalPatternssingletonPatternLesson from '../courses/clean-code-csharp/02-creational-patterns/singleton-pattern.json';
import cleanCodeCsharpstructuralPatternsadapterPatternLesson from '../courses/clean-code-csharp/03-structural-patterns/adapter-pattern.json';
import cleanCodeCsharpbehavioralPatternsobserverPatternLesson from '../courses/clean-code-csharp/04-behavioral-patterns/observer-pattern.json';
import cleanCodeCsharpcleanCodePracticesmeaningfulNamesLesson from '../courses/clean-code-csharp/05-clean-code-practices/meaningful-names.json';
import cleanCodeCsharparchitecturePatternsrepositoryPatternLesson from '../courses/clean-code-csharp/06-architecture-patterns/repository-pattern.json';
import csharpFundamentalsgettingStartedwhatIsCsharpLesson from '../courses/csharp-fundamentals/01-getting-started/what-is-csharp.json';
import csharpFundamentalsvariablesTypesvariablesLesson from '../courses/csharp-fundamentals/02-variables-types/variables.json';
import csharpFundamentalscontrolFlowconditionalsLesson from '../courses/csharp-fundamentals/03-control-flow/conditionals.json';
import csharpFundamentalsoopclassesObjectsLesson from '../courses/csharp-fundamentals/04-oop/classes-objects.json';
import csharpFundamentalsadvancedFeaturescollectionsLesson from '../courses/csharp-fundamentals/05-advanced-features/collections.json';
import csharpFundamentalserrorHandlingerrorHandlingLesson from '../courses/csharp-fundamentals/06-error-handling/error-handling.json';
import csharpFundamentalsmodernCsharpfileIoLesson from '../courses/csharp-fundamentals/07-modern-csharp/file-io.json';
import unitTestingDotnettestingFundamentalswhyUnitTestingLesson from '../courses/unit-testing-dotnet/01-testing-fundamentals/why-unit-testing.json';
import unitTestingDotnetxunitBasicsgettingStartedXunitLesson from '../courses/unit-testing-dotnet/02-xunit-basics/getting-started-xunit.json';
import unitTestingDotnetmockingFakesmockingBasicsLesson from '../courses/unit-testing-dotnet/03-mocking-fakes/mocking-basics.json';
import unitTestingDotnetintegrationTestingintegrationTestingBasicsLesson from '../courses/unit-testing-dotnet/04-integration-testing/integration-testing-basics.json';
import unitTestingDotnettddtddIntroLesson from '../courses/unit-testing-dotnet/05-tdd/tdd-intro.json';
import unitTestingDotnettestingPatternstestDataBuildersLesson from '../courses/unit-testing-dotnet/06-testing-patterns/test-data-builders.json';
import unitTestingDotnetcodeCoveragecoverageMetricsLesson from '../courses/unit-testing-dotnet/07-code-coverage/coverage-metrics.json';
import aspnetCoreWebApigettingStartedwhatIsWebApiLesson from '../courses/aspnet-core-web-api/01-getting-started/what-is-web-api.json';
import aspnetCoreWebApicontrollersRoutingroutingBasicsLesson from '../courses/aspnet-core-web-api/02-controllers-routing/routing-basics.json';
import aspnetCoreWebApimodelBindingmodelBindingBasicsLesson from '../courses/aspnet-core-web-api/03-model-binding/model-binding-basics.json';
import aspnetCoreWebApimiddlewaremiddlewareBasicsLesson from '../courses/aspnet-core-web-api/04-middleware/middleware-basics.json';
import aspnetCoreWebApidependencyInjectiondiBasicsLesson from '../courses/aspnet-core-web-api/05-dependency-injection/di-basics.json';
import aspnetCoreWebApierrorHandlingValidationvalidationBasicsLesson from '../courses/aspnet-core-web-api/06-error-handling-validation/validation-basics.json';
import aspnetCoreWebApiauthenticationBasicsauthOverviewLesson from '../courses/aspnet-core-web-api/07-authentication-basics/auth-overview.json';
import aspnetCoreWebApiloggingConfigurationloggingBasicsLesson from '../courses/aspnet-core-web-api/08-logging-configuration/logging-basics.json';
import reactTestingtestingFundamentalswhyTestReactLesson from '../courses/react-testing/01-testing-fundamentals/why-test-react.json';
import reactTestingjestBasicsgettingStartedJestLesson from '../courses/react-testing/02-jest-basics/getting-started-jest.json';
import reactTestingreactTestingLibraryrtlIntroLesson from '../courses/react-testing/03-react-testing-library/rtl-intro.json';
import reactTestingcomponentTestingtestingFormsLesson from '../courses/react-testing/04-component-testing/testing-forms.json';
import reactTestinge2eTestingcypressIntroLesson from '../courses/react-testing/05-e2e-testing/cypress-intro.json';
import reactTestingadvancedTestingPatternsmockServiceWorkerLesson from '../courses/react-testing/06-advanced-testing-patterns/mock-service-worker.json';
import reactTestingtestingReactQuerytestingMutationsLesson from '../courses/react-testing/07-testing-react-query/testing-mutations.json';
import authenticationAuthorizationauthBasicsauthOverviewLesson from '../courses/authentication-authorization/01-auth-basics/auth-overview.json';
import authenticationAuthorizationjwtjwtOverviewLesson from '../courses/authentication-authorization/02-jwt/jwt-overview.json';
import authenticationAuthorizationidentityidentityOverviewLesson from '../courses/authentication-authorization/03-identity/identity-overview.json';
import authenticationAuthorizationoauthoauthOverviewLesson from '../courses/authentication-authorization/04-oauth/oauth-overview.json';
import authenticationAuthorizationoauth2FlowsDeepDiveauthorizationCodeFlowLesson from '../courses/authentication-authorization/05-oauth2-flows-deep-dive/authorization-code-flow.json';
import authenticationAuthorizationadvancedAuthorizationroleBasedAuthorizationLesson from '../courses/authentication-authorization/06-advanced-authorization/role-based-authorization.json';
import authenticationAuthorizationrefreshTokenStrategiesrefreshTokenBasicsLesson from '../courses/authentication-authorization/07-refresh-token-strategies/refresh-token-basics.json';
import authenticationAuthorizationssoIdentityProvidersssoFundamentalsLesson from '../courses/authentication-authorization/08-sso-identity-providers/sso-fundamentals.json';
import authenticationAuthorizationsecurityBestPracticespasswordlessAuthenticationLesson from '../courses/authentication-authorization/09-security-best-practices/passwordless-authentication.json';
import oopsConceptsoopFundamentalswhatIsOopLesson from '../courses/oops-concepts/01-oop-fundamentals/what-is-oop.json';
import oopsConceptsencapsulationDataHidingencapsulationBasicsLesson from '../courses/oops-concepts/02-encapsulation-data-hiding/encapsulation-basics.json';
import oopsConceptsinheritanceinheritanceBasicsLesson from '../courses/oops-concepts/03-inheritance/inheritance-basics.json';
import oopsConceptspolymorphismpolymorphismBasicsLesson from '../courses/oops-concepts/04-polymorphism/polymorphism-basics.json';
import oopsConceptsabstractionabstractionBasicsLesson from '../courses/oops-concepts/05-abstraction/abstraction-basics.json';
import oopsConceptsinterfacesAbstractClassesinterfaceBasicsLesson from '../courses/oops-concepts/06-interfaces-abstract-classes/interface-basics.json';
import oopsConceptsdesignPrinciplessolidPrinciplesLesson from '../courses/oops-concepts/07-design-principles/solid-principles.json';
import interviewQabeginnerQuestionscsharpB01Lesson from '../courses/interview-qa/01-beginner-questions/csharp-b01.json';
import interviewQaintermediateQuestionsintermediateQ1Lesson from '../courses/interview-qa/02-intermediate-questions/intermediate-q1.json';
import interviewQaadvancedQuestionsadvancedQ1Lesson from '../courses/interview-qa/03-advanced-questions/advanced-q1.json';
import interviewQascenarioBasedscenarioQ1Lesson from '../courses/interview-qa/04-scenario-based/scenario-q1.json';
import interviewQasystemDesignsystemQ1Lesson from '../courses/interview-qa/05-system-design/system-q1.json';
import interviewQarapidFirerapidQ1Lesson from '../courses/interview-qa/06-rapid-fire/rapid-q1.json';
import interviewQainterviewTrapstrapQ1Lesson from '../courses/interview-qa/07-interview-traps/trap-q1.json';
import interviewQaperformanceOptimizationperfQ1Lesson from '../courses/interview-qa/08-performance-optimization/perf-q1.json';
import interviewQacicdPipelinescicdQ1Lesson from '../courses/interview-qa/09-cicd-pipelines/cicd-q1.json';
import graphqlDotnetgettingStartedintroductionToGraphqlLesson from '../courses/graphql-dotnet/01-getting-started/introduction-to-graphql.json';
import graphqlDotnetschemaTypesschemaBasicsLesson from '../courses/graphql-dotnet/02-schema-types/schema-basics.json';
import graphqlDotnetqueriesMutationsqueryBasicsLesson from '../courses/graphql-dotnet/03-queries-mutations/query-basics.json';
import graphqlDotnetfilteringPaginationfilteringBasicsLesson from '../courses/graphql-dotnet/04-filtering-pagination/filtering-basics.json';
import graphqlDotnetauthenticationauthBasicsLesson from '../courses/graphql-dotnet/05-authentication/auth-basics.json';
import graphqlDotnetperformancedataloaderLesson from '../courses/graphql-dotnet/06-performance/dataloader.json';
import graphqlDotneterrorHandlingerrorHandlingBasicsLesson from '../courses/graphql-dotnet/07-error-handling/error-handling-basics.json';
import designPatternscreationalPatternssingletonPatternDesignPatternsLesson from '../courses/design-patterns/01-creational-patterns/singleton-pattern.json';
import designPatternsstructuralPatternsadapterPatternDesignPatternsLesson from '../courses/design-patterns/02-structural-patterns/adapter-pattern.json';
import designPatternsbehavioralPatternsobserverPatternDesignPatternsLesson from '../courses/design-patterns/03-behavioral-patterns/observer-pattern.json';
import designPatternsenterprisePatternsrepositoryPatternDesignPatternsLesson from '../courses/design-patterns/04-enterprise-patterns/repository-pattern.json';
import designPatternsconcurrencyPatternsproducerConsumerPatternDesignPatternsLesson from '../courses/design-patterns/05-concurrency-patterns/producer-consumer-pattern.json';
import designPatternsarchitecturalPatternsmvcPatternDesignPatternsLesson from '../courses/design-patterns/06-architectural-patterns/mvc-pattern.json';
import fullstackSecuritycorsConfigurationunderstandingCorsLesson from '../courses/fullstack-security/01-cors-configuration/understanding-cors.json';
import fullstackSecurityjwtAuthenticationjwtBasicsLesson from '../courses/fullstack-security/02-jwt-authentication/jwt-basics.json';
import fullstackSecurityxssCsrfProtectionunderstandingXssCsrfLesson from '../courses/fullstack-security/03-xss-csrf-protection/understanding-xss-csrf.json';
import fullstackSecurityapiSecurityRateLimitingapiSecurityFundamentalsLesson from '../courses/fullstack-security/04-api-security-rate-limiting/api-security-fundamentals.json';
import fullstackSecuritysecureApiDesignapiDesignPrinciplesLesson from '../courses/fullstack-security/05-secure-api-design/api-design-principles.json';
import fullstackSecuritydependencySecuritydependencyScanningLesson from '../courses/fullstack-security/06-dependency-security/dependency-scanning.json';
import fullstackSecurityenvironmentSecretsenvironmentConfigurationLesson from '../courses/fullstack-security/07-environment-secrets/environment-configuration.json';
import fullstackSecuritysecurityTestingsecurityTestingFundamentalsLesson from '../courses/fullstack-security/08-security-testing/security-testing-fundamentals.json';
import sqlServergettingStartedbasicsLesson from '../courses/sql-server/01-getting-started/02-basics.json';
import sqlServerqueryingDataselectDistinctLesson from '../courses/sql-server/02-querying-data/02-select-distinct.json';
import sqlServerjoinsinnerJoinLesson from '../courses/sql-server/03-joins/02-inner-join.json';
import sqlServersetOperationsexceptLesson from '../courses/sql-server/04-set-operations/02-except.json';
import sqlServergroupingAggregationSubquerieshavingClauseLesson from '../courses/sql-server/05-grouping-aggregation-subqueries/02-having-clause.json';
import sqlServerdataModificationDmlinsertIntoSelectLesson from '../courses/sql-server/06-data-modification-dml/02-insert-into-select.json';
import sqlServerdatabaseSchemaTableObjectsdropDatabaseLesson from '../courses/sql-server/07-database-schema-table-objects/02-drop-database.json';
import sqlServerdataTypescharDataTypeLesson from '../courses/sql-server/08-data-types/02-char-data-type.json';
import sqlServerconstraintsforeignKeyConstraintLesson from '../courses/sql-server/09-constraints/02-foreign-key-constraint.json';
import sqlServerindexesclusteredIndexesLesson from '../courses/sql-server/10-indexes/02-clustered-indexes.json';
import sqlServerviewscreateViewLesson from '../courses/sql-server/11-views/02-create-view.json';
import sqlServerstoredProceduresFunctionsstoredProceduresTutorialLesson from '../courses/sql-server/12-stored-procedures-functions/02-stored-procedures-tutorial.json';
import sqlServertriggerscreateTriggerLesson from '../courses/sql-server/13-triggers/02-create-trigger.json';
import sqlServertransactionsErrorHandlingBackupbeginEndStatementLesson from '../courses/sql-server/14-transactions-error-handling-backup/02-begin-end-statement.json';
import sqlServeradvancedTopicstemporaryTablesLesson from '../courses/sql-server/15-advanced-topics/02-temporary-tables.json';
import sqlServerperformanceTuningqueryOptimizationLesson from '../courses/sql-server/16-performance-tuning/query-optimization.json';
import sqlServersecurityHardeningprincipalsUsersRolesLesson from '../courses/sql-server/17-security-hardening/principals-users-roles.json';
import sqlServerhighAvailabilityDrdatabaseMirroringLesson from '../courses/sql-server/18-high-availability-dr/database-mirroring.json';
import sqlServerdataWarehousingdataWarehouseFundamentalsLesson from '../courses/sql-server/19-data-warehousing/data-warehouse-fundamentals.json';
import sqlServerazureSqlazureSqlManagedInstanceLesson from '../courses/sql-server/20-azure-sql/azure-sql-managed-instance.json';
import aspnetCoregettingStartedAspnetCoreMvcfirstCrudApplicationAspnetCoreMvcLesson from '../courses/aspnet-core/01-getting-started-aspnet-core-mvc/first-crud-application-aspnet-core-mvc.json';
import aspnetCorecontrollersRoutingcontrollersInAspnetCoreLesson from '../courses/aspnet-core/02-controllers-routing/controllers-in-aspnet-core.json';
import aspnetCoremodelBindingValidationmodelBindingAspnetCoreBeginnerAdvancedLesson from '../courses/aspnet-core/03-model-binding-validation/model-binding-aspnet-core-beginner-advanced.json';
import aspnetCoreviewsTagHelperscustomTagHelperLesson from '../courses/aspnet-core/04-views-tag-helpers/custom-tag-helper.json';
import aspnetCoredependencyInjectionConfigurationdependencyInjectionAspnetCoreLesson from '../courses/aspnet-core/05-dependency-injection-configuration/dependency-injection-aspnet-core.json';
import aspnetCorefiltersfiltersAspnetCoreBeginnerExpertLesson from '../courses/aspnet-core/06-filters/filters-aspnet-core-beginner-expert.json';
import aspnetCorewebApicallWebApiJqueryAspnetCoreLesson from '../courses/aspnet-core/07-web-api/call-web-api-jquery-aspnet-core.json';
import aspnetCoreauthenticationIdentityimplementCookieAuthenticationAspnetCoreLesson from '../courses/aspnet-core/08-authentication-identity/implement-cookie-authentication-aspnet-core.json';
import aspnetCorelocalizationGlobalizationlocalizationPortableObjectPoFilesLesson from '../courses/aspnet-core/09-localization-globalization/localization-portable-object-po-files.json';
import linqgettingStartedLinqwhyLinqLesson from '../courses/linq/01-getting-started-linq/why-linq.json';
import linqlinqFundamentalsSyntaxlinqMethodSyntaxLesson from '../courses/linq/02-linq-fundamentals-syntax/linq-method-syntax.json';
import linqfilteringProjectionoftypeFilteringOperatorLesson from '../courses/linq/03-filtering-projection/oftype-filtering-operator.json';
import linqsortingGroupingthenbyThenbydescendingLesson from '../courses/linq/04-sorting-grouping/thenby-thenbydescending.json';
import linqjoiningDatagroupjoinOperatorLesson from '../courses/linq/05-joining-data/groupjoin-operator.json';
import linqsetOperationsexceptSetOperatorLesson from '../courses/linq/06-set-operations/except-set-operator.json';
import linqaggregationOperatorsaggregationSumLesson from '../courses/linq/07-aggregation-operators/aggregation-sum.json';
import linqquantifiersElementOperatorscontainsQuantifierOperatorLesson from '../courses/linq/08-quantifiers-element-operators/contains-quantifier-operator.json';
import linqpartitioningOperatorstakeTakewhileLesson from '../courses/linq/09-partitioning-operators/take-takewhile.json';
import linqconversionGenerationOperatorsgenerationOperatorsLesson from '../courses/linq/10-conversion-generation-operators/generation-operators.json';
import linqadvancedLinqConceptssequenceequalOperatorLesson from '../courses/linq/11-advanced-linq-concepts/sequenceequal-operator.json';
import efCoregettingStartedEfCoregettingStartedEfCoreLesson from '../courses/ef-core/01-getting-started-ef-core/getting-started-ef-core.json';
import efCoredbcontextConfigurationconfigurationsInEntityFrameworkCoreLesson from '../courses/ef-core/02-dbcontext-configuration/configurations-in-entity-framework-core.json';
import efCoreconventionsRelationshipsoneToManyRelationshipsConventionsLesson from '../courses/ef-core/03-conventions-relationships/one-to-many-relationships-conventions.json';
import efCoredataOperationsConnecteddataOperationsConnectedLesson from '../courses/ef-core/04-data-operations-connected/data-operations-connected.json';
import efCoredataOperationsDisconnectedupdateDataDisconnectedScenarioLesson from '../courses/ef-core/05-data-operations-disconnected/update-data-disconnected-scenario.json';
import efCorechangeTrackingentityFrameworkCoreChangeTrackingLesson from '../courses/ef-core/06-change-tracking/entity-framework-core-change-tracking.json';
import efCorequeryingexecuteRawSqlQueriesLesson from '../courses/ef-core/07-querying/execute-raw-sql-queries.json';
import efCoreinheritanceStrategiesefCoreTablePerHierarchyTphLesson from '../courses/ef-core/08-inheritance-strategies/ef-core-table-per-hierarchy-tph.json';
import efCoremigrationsefCoreMigrationsUsingCliLesson from '../courses/ef-core/09-migrations/ef-core-migrations-using-cli.json';
import efCoreadvancedFeaturesshadowPropertyInEntityFrameworkCoreLesson from '../courses/ef-core/10-advanced-features/shadow-property-in-entity-framework-core.json';
import efCoredatabaseFirstDiagnosticsloggingInEntityFrameworkCoreLesson from '../courses/ef-core/11-database-first-diagnostics/logging-in-entity-framework-core.json';
import efCoreperformanceBulkOperationsbestWaysBulkInsertsEntityFrameworkLesson from '../courses/ef-core/12-performance-bulk-operations/best-ways-bulk-inserts-entity-framework.json';
import reactFundamentalsgettingStartedsettingUpEnvironmentLesson from '../courses/react-fundamentals/01-getting-started/setting-up-environment.json';
import reactFundamentalscomponentsPropspropsBasicsLesson from '../courses/react-fundamentals/02-components-props/props-basics.json';
import reactFundamentalsstateEventshandlingEventsLesson from '../courses/react-fundamentals/03-state-events/handling-events.json';
import reactFundamentalsformsInputformSubmissionLesson from '../courses/react-fundamentals/04-forms-input/form-submission.json';
import reactFundamentalslifecycleEffectscleanupFunctionsLesson from '../courses/react-fundamentals/05-lifecycle-effects/cleanup-functions.json';
import reactFundamentalscontextRefsusecontextHookLesson from '../courses/react-fundamentals/06-context-refs/usecontext-hook.json';
import reactFundamentalsreactRouternestedRoutesLesson from '../courses/react-fundamentals/07-react-router/nested-routes.json';
import reactFundamentalsstylingstyledComponentsLesson from '../courses/react-fundamentals/08-styling/styled-components.json';
import reactAdvancedPatternsrenderPropsrenderPropsExamplesLesson from '../courses/react-advanced-patterns/01-render-props/render-props-examples.json';
import reactAdvancedPatternshigherOrderComponentshocExamplesLesson from '../courses/react-advanced-patterns/02-higher-order-components/hoc-examples.json';
import reactAdvancedPatternscompoundComponentscompoundExamplesLesson from '../courses/react-advanced-patterns/03-compound-components/compound-examples.json';
import reactAdvancedPatternsstateReducersstateReducerExamplesLesson from '../courses/react-advanced-patterns/04-state-reducers/state-reducer-examples.json';
import reactAdvancedPatternscontrolPropscontrolPropsExamplesLesson from '../courses/react-advanced-patterns/05-control-props/control-props-examples.json';
import reactAdvancedPatternsperformancePatternscodeSplittingLazyLesson from '../courses/react-advanced-patterns/06-performance-patterns/code-splitting-lazy.json';
import reactAdvancedPatternscustomHooksArchitecturestateSharingBetweenHooksLesson from '../courses/react-advanced-patterns/07-custom-hooks-architecture/state-sharing-between-hooks.json';
import reactAdvancedPatternsstateMachinesXstatexstateFundamentalsLesson from '../courses/react-advanced-patterns/08-state-machines-xstate/xstate-fundamentals.json';
import reactAdvancedPatternscomponentCompositionStrategiesheadlessComponentsLesson from '../courses/react-advanced-patterns/09-component-composition-strategies/headless-components.json';
import reactAdvancedPatternsadvancedHookPatternsimperativeHandlePatternsLesson from '../courses/react-advanced-patterns/10-advanced-hook-patterns/imperative-handle-patterns.json';
import typescriptForReacttypescriptBasicsbasicTypesLesson from '../courses/typescript-for-react/01-typescript-basics/basic-types.json';
import typescriptForReacttypesInReacttypingPropsLesson from '../courses/typescript-for-react/02-types-in-react/typing-props.json';
import typescriptForReacttypingHookstypingUserefLesson from '../courses/typescript-for-react/03-typing-hooks/typing-useref.json';
import typescriptForReactadvancedTypesutilityTypesLesson from '../courses/typescript-for-react/04-advanced-types/utility-types.json';
import typescriptForReactgenericComponentsgenericFormLesson from '../courses/typescript-for-react/05-generic-components/generic-form.json';
import typescriptForReactreactPatternstypedReactQueryLesson from '../courses/typescript-for-react/06-react-patterns/typed-react-query.json';
import typescriptForReacttestingBestPracticestypeNarrowingLesson from '../courses/typescript-for-react/07-testing-best-practices/type-narrowing.json';
import reduxreduxFundamentalsstoreActionsReducersLesson from '../courses/redux/01-redux-fundamentals/store-actions-reducers.json';
import reduxreduxToolkitcreateSliceLesson from '../courses/redux/02-redux-toolkit/create-slice.json';
import reduxreactReduxuseSelectorLesson from '../courses/redux/03-react-redux/use-selector.json';
import reduxreduxMiddlewarereduxThunkLesson from '../courses/redux/04-redux-middleware/redux-thunk.json';
import reduxreduxPatternsentityAdapterLesson from '../courses/redux/05-redux-patterns/entity-adapter.json';
import reduxreduxTestingtestingComponentsLesson from '../courses/redux/06-redux-testing/testing-components.json';
import reduxreduxAdvancedConceptsstoreInitializationLesson from '../courses/redux/07-redux-advanced-concepts/store-initialization.json';
import reduxreduxRealWorldauthenticationFlowLesson from '../courses/redux/08-redux-real-world/authentication-flow.json';
import reactQueryqueryBasicssetupLesson from '../courses/react-query/01-query-basics/setup.json';
import reactQueryqueryHookspaginationLesson from '../courses/react-query/02-query-hooks/pagination.json';
import reactQuerymutationsoptimisticUpdatesLesson from '../courses/react-query/03-mutations/optimistic-updates.json';
import reactQueryadvancedFeaturesqueryCancellationLesson from '../courses/react-query/04-advanced-features/query-cancellation.json';
import reactQuerycachingStrategiesstaleTimeGcLesson from '../courses/react-query/05-caching-strategies/stale-time-gc.json';
import reactQueryofflineSupportPersistenceindexeddbPersistenceLesson from '../courses/react-query/06-offline-support-persistence/indexeddb-persistence.json';
import reactQueryprefetchingSsrssrIntegrationNextjsLesson from '../courses/react-query/07-prefetching-ssr/ssr-integration-nextjs.json';
import reactQueryperformanceOptimizationwindowingLargeListsLesson from '../courses/react-query/08-performance-optimization/windowing-large-lists.json';
import reactQueryrealWorldPatternsformIntegrationLesson from '../courses/react-query/09-real-world-patterns/form-integration.json';
import apolloapolloBasicssetupClientLesson from '../courses/apollo/01-apollo-basics/setup-client.json';
import apolloqueriesMutationsuseMutationHookLesson from '../courses/apollo/02-queries-mutations/use-mutation-hook.json';
import apollocachingcacheUpdatesLesson from '../courses/apollo/03-caching/cache-updates.json';
import apolloadvancedPatternserrorHandlingLesson from '../courses/apollo/04-advanced-patterns/error-handling.json';
import apolloclientSideCachingAdvancedtypePoliciesFieldPoliciesLesson from '../courses/apollo/05-client-side-caching-advanced/type-policies-field-policies.json';
import apolloerrorHandlingOptimisticerrorPoliciesLesson from '../courses/apollo/06-error-handling-optimistic/error-policies.json';
import apollosubscriptionsRealtimewebsocketSetupLesson from '../courses/apollo/07-subscriptions-realtime/websocket-setup.json';
import apollolocalStateManagementlocalOnlyFieldsLesson from '../courses/apollo/08-local-state-management/local-only-fields.json';
import apollossrNextjsPerformancessrWithApolloLesson from '../courses/apollo/09-ssr-nextjs-performance/ssr-with-apollo.json';
import cleanCodeCsharpsolidPrinciplesopenClosedLesson from '../courses/clean-code-csharp/01-solid-principles/open-closed.json';
import cleanCodeCsharpcreationalPatternsfactoryPatternLesson from '../courses/clean-code-csharp/02-creational-patterns/factory-pattern.json';
import cleanCodeCsharpstructuralPatternsdecoratorPatternLesson from '../courses/clean-code-csharp/03-structural-patterns/decorator-pattern.json';
import cleanCodeCsharpbehavioralPatternsstrategyPatternLesson from '../courses/clean-code-csharp/04-behavioral-patterns/strategy-pattern.json';
import cleanCodeCsharpcleanCodePracticesfunctionsMethodsLesson from '../courses/clean-code-csharp/05-clean-code-practices/functions-methods.json';
import cleanCodeCsharparchitecturePatternscleanArchitectureLesson from '../courses/clean-code-csharp/06-architecture-patterns/clean-architecture.json';
import csharpFundamentalsgettingStartedsettingUpLesson from '../courses/csharp-fundamentals/01-getting-started/setting-up.json';
import csharpFundamentalsvariablesTypesvalueTypesLesson from '../courses/csharp-fundamentals/02-variables-types/value-types.json';
import csharpFundamentalscontrolFlowloopsLesson from '../courses/csharp-fundamentals/03-control-flow/loops.json';
import csharpFundamentalsoopinheritanceLesson from '../courses/csharp-fundamentals/04-oop/inheritance.json';
import csharpFundamentalsadvancedFeaturesgenericsLesson from '../courses/csharp-fundamentals/05-advanced-features/generics.json';
import csharpFundamentalserrorHandlingexceptionTypesLesson from '../courses/csharp-fundamentals/06-error-handling/exception-types.json';
import csharpFundamentalsmodernCsharprecordsPatternsLesson from '../courses/csharp-fundamentals/07-modern-csharp/records-patterns.json';
import unitTestingDotnettestingFundamentalstestingPyramidLesson from '../courses/unit-testing-dotnet/01-testing-fundamentals/testing-pyramid.json';
import unitTestingDotnetxunitBasicsassertionsLesson from '../courses/unit-testing-dotnet/02-xunit-basics/assertions.json';
import unitTestingDotnetmockingFakesmoqFrameworkLesson from '../courses/unit-testing-dotnet/03-mocking-fakes/moq-framework.json';
import unitTestingDotnetintegrationTestingtestServerLesson from '../courses/unit-testing-dotnet/04-integration-testing/test-server.json';
import unitTestingDotnettddredGreenRefactorLesson from '../courses/unit-testing-dotnet/05-tdd/red-green-refactor.json';
import unitTestingDotnettestingPatternsassertionFrameworksLesson from '../courses/unit-testing-dotnet/06-testing-patterns/assertion-frameworks.json';
import unitTestingDotnetcodeCoveragecoverletCollectorLesson from '../courses/unit-testing-dotnet/07-code-coverage/coverlet-collector.json';
import aspnetCoreWebApigettingStartedcreatingProjectLesson from '../courses/aspnet-core-web-api/01-getting-started/creating-project.json';
import aspnetCoreWebApicontrollersRoutingattributeRoutingLesson from '../courses/aspnet-core-web-api/02-controllers-routing/attribute-routing.json';
import aspnetCoreWebApimodelBindingfromBodyLesson from '../courses/aspnet-core-web-api/03-model-binding/from-body.json';
import aspnetCoreWebApimiddlewarebuiltInMiddlewareLesson from '../courses/aspnet-core-web-api/04-middleware/built-in-middleware.json';
import aspnetCoreWebApidependencyInjectionserviceLifetimesLesson from '../courses/aspnet-core-web-api/05-dependency-injection/service-lifetimes.json';
import aspnetCoreWebApierrorHandlingValidationproblemDetailsLesson from '../courses/aspnet-core-web-api/06-error-handling-validation/problem-details.json';
import aspnetCoreWebApiauthenticationBasicsjwtBasicsLesson from '../courses/aspnet-core-web-api/07-authentication-basics/jwt-basics.json';
import aspnetCoreWebApiloggingConfigurationstructuredLoggingLesson from '../courses/aspnet-core-web-api/08-logging-configuration/structured-logging.json';
import reactTestingtestingFundamentalstestingTypesLesson from '../courses/react-testing/01-testing-fundamentals/testing-types.json';
import reactTestingjestBasicsmatchersAssertionsLesson from '../courses/react-testing/02-jest-basics/matchers-assertions.json';
import reactTestingreactTestingLibraryqueriesLesson from '../courses/react-testing/03-react-testing-library/queries.json';
import reactTestingcomponentTestingtestingRoutingLesson from '../courses/react-testing/04-component-testing/testing-routing.json';
import reactTestinge2eTestingwritingE2eTestsLesson from '../courses/react-testing/05-e2e-testing/writing-e2e-tests.json';
import reactTestingadvancedTestingPatternsrenderOptimizationLesson from '../courses/react-testing/06-advanced-testing-patterns/render-optimization.json';
import reactTestingtestingReactQuerytestingCacheInvalidationLesson from '../courses/react-testing/07-testing-react-query/testing-cache-invalidation.json';
import authenticationAuthorizationauthBasicsauthenticationVsAuthorizationLesson from '../courses/authentication-authorization/01-auth-basics/authentication-vs-authorization.json';
import authenticationAuthorizationjwtcreatingJwtLesson from '../courses/authentication-authorization/02-jwt/creating-jwt.json';
import authenticationAuthorizationidentitysetupIdentityLesson from '../courses/authentication-authorization/03-identity/setup-identity.json';
import authenticationAuthorizationoauthexternalProvidersLesson from '../courses/authentication-authorization/04-oauth/external-providers.json';
import authenticationAuthorizationoauth2FlowsDeepDivepkceFlowLesson from '../courses/authentication-authorization/05-oauth2-flows-deep-dive/pkce-flow.json';
import authenticationAuthorizationadvancedAuthorizationclaimsBasedAuthorizationLesson from '../courses/authentication-authorization/06-advanced-authorization/claims-based-authorization.json';
import authenticationAuthorizationrefreshTokenStrategiestokenRotationLesson from '../courses/authentication-authorization/07-refresh-token-strategies/token-rotation.json';
import authenticationAuthorizationssoIdentityProviderssaml2BasicsLesson from '../courses/authentication-authorization/08-sso-identity-providers/saml2-basics.json';
import authenticationAuthorizationsecurityBestPracticesmultiFactorAuthenticationLesson from '../courses/authentication-authorization/09-security-best-practices/multi-factor-authentication.json';
import oopsConceptsoopFundamentalsclassesObjectsOopsConceptsLesson from '../courses/oops-concepts/01-oop-fundamentals/classes-objects.json';
import oopsConceptsencapsulationDataHidingpropertiesLesson from '../courses/oops-concepts/02-encapsulation-data-hiding/properties.json';
import oopsConceptsinheritancemethodOverridingLesson from '../courses/oops-concepts/03-inheritance/method-overriding.json';
import oopsConceptspolymorphismcompileTimePolymorphismLesson from '../courses/oops-concepts/04-polymorphism/compile-time-polymorphism.json';
import oopsConceptsabstractionabstractClassesLesson from '../courses/oops-concepts/05-abstraction/abstract-classes.json';
import oopsConceptsinterfacesAbstractClassesmultipleInterfacesLesson from '../courses/oops-concepts/06-interfaces-abstract-classes/multiple-interfaces.json';
import oopsConceptsdesignPrinciplesdryPrincipleLesson from '../courses/oops-concepts/07-design-principles/dry-principle.json';
import interviewQabeginnerQuestionscsharpB02Lesson from '../courses/interview-qa/01-beginner-questions/csharp-b02.json';
import interviewQaintermediateQuestionsintermediateQ2Lesson from '../courses/interview-qa/02-intermediate-questions/intermediate-q2.json';
import interviewQaadvancedQuestionsadvancedQ2Lesson from '../courses/interview-qa/03-advanced-questions/advanced-q2.json';
import interviewQascenarioBasedscenarioQ2Lesson from '../courses/interview-qa/04-scenario-based/scenario-q2.json';
import interviewQasystemDesignsystemQ2Lesson from '../courses/interview-qa/05-system-design/system-q2.json';
import interviewQarapidFirerapidQ2Lesson from '../courses/interview-qa/06-rapid-fire/rapid-q2.json';
import interviewQainterviewTrapstrapQ2Lesson from '../courses/interview-qa/07-interview-traps/trap-q2.json';
import interviewQaperformanceOptimizationperfQ2Lesson from '../courses/interview-qa/08-performance-optimization/perf-q2.json';
import interviewQacicdPipelinescicdQ2Lesson from '../courses/interview-qa/09-cicd-pipelines/cicd-q2.json';
import graphqlDotnetgettingStartedinstallingHotchocolateLesson from '../courses/graphql-dotnet/01-getting-started/installing-hotchocolate.json';
import graphqlDotnetschemaTypestypeDefinitionsLesson from '../courses/graphql-dotnet/02-schema-types/type-definitions.json';
import graphqlDotnetqueriesMutationsmutationBasicsLesson from '../courses/graphql-dotnet/03-queries-mutations/mutation-basics.json';
import graphqlDotnetfilteringPaginationpaginationBasicsLesson from '../courses/graphql-dotnet/04-filtering-pagination/pagination-basics.json';
import graphqlDotnetauthenticationauthorizationLesson from '../courses/graphql-dotnet/05-authentication/authorization.json';
import graphqlDotnetperformancecachingLesson from '../courses/graphql-dotnet/06-performance/caching.json';
import graphqlDotneterrorHandlingcustomExceptionsLesson from '../courses/graphql-dotnet/07-error-handling/custom-exceptions.json';
import designPatternscreationalPatternsfactoryPatternDesignPatternsLesson from '../courses/design-patterns/01-creational-patterns/factory-pattern.json';
import designPatternsstructuralPatternsdecoratorPatternDesignPatternsLesson from '../courses/design-patterns/02-structural-patterns/decorator-pattern.json';
import designPatternsbehavioralPatternsstrategyPatternDesignPatternsLesson from '../courses/design-patterns/03-behavioral-patterns/strategy-pattern.json';
import designPatternsenterprisePatternsunitOfWorkLesson from '../courses/design-patterns/04-enterprise-patterns/unit-of-work.json';
import designPatternsconcurrencyPatternsreaderWriterLocksDesignPatternsLesson from '../courses/design-patterns/05-concurrency-patterns/reader-writer-locks.json';
import designPatternsarchitecturalPatternsmvvmPatternDesignPatternsLesson from '../courses/design-patterns/06-architectural-patterns/mvvm-pattern.json';
import fullstackSecuritycorsConfigurationcorsInAspnetCoreLesson from '../courses/fullstack-security/01-cors-configuration/cors-in-aspnet-core.json';
import fullstackSecurityjwtAuthenticationjwtStorageOptionsLesson from '../courses/fullstack-security/02-jwt-authentication/jwt-storage-options.json';
import fullstackSecurityxssCsrfProtectionxssPreventionTechniquesLesson from '../courses/fullstack-security/03-xss-csrf-protection/xss-prevention-techniques.json';
import fullstackSecurityapiSecurityRateLimitingrateLimitingInAspnetLesson from '../courses/fullstack-security/04-api-security-rate-limiting/rate-limiting-in-aspnet.json';
import fullstackSecuritysecureApiDesigninputValidationLesson from '../courses/fullstack-security/05-secure-api-design/input-validation.json';
import fullstackSecuritydependencySecuritynugetSecurityLesson from '../courses/fullstack-security/06-dependency-security/nuget-security.json';
import fullstackSecurityenvironmentSecretssecretsManagementLesson from '../courses/fullstack-security/07-environment-secrets/secrets-management.json';
import fullstackSecuritysecurityTestingpenetrationTestingBasicsLesson from '../courses/fullstack-security/08-security-testing/penetration-testing-basics.json';
import sqlServergettingStartedaliasesLesson from '../courses/sql-server/01-getting-started/03-aliases.json';
import sqlServerqueryingDataselectTopLesson from '../courses/sql-server/02-querying-data/03-select-top.json';
import sqlServerjoinsleftJoinLesson from '../courses/sql-server/03-joins/03-left-join.json';
import sqlServersetOperationsintersectLesson from '../courses/sql-server/04-set-operations/03-intersect.json';
import sqlServergroupingAggregationSubqueriescubeLesson from '../courses/sql-server/05-grouping-aggregation-subqueries/03-cube.json';
import sqlServerdataModificationDmlinsertMultipleRowsLesson from '../courses/sql-server/06-data-modification-dml/03-insert-multiple-rows.json';
import sqlServerdatabaseSchemaTableObjectscreateTableLesson from '../courses/sql-server/07-database-schema-table-objects/03-create-table.json';
import sqlServerdataTypesvarcharDataTypeLesson from '../courses/sql-server/08-data-types/03-varchar-data-type.json';
import sqlServerconstraintsnotNullConstraintLesson from '../courses/sql-server/09-constraints/03-not-null-constraint.json';
import sqlServerindexescreateIndexLesson from '../courses/sql-server/10-indexes/03-create-index.json';
import sqlServerviewsdropViewLesson from '../courses/sql-server/11-views/03-drop-view.json';
import sqlServerstoredProceduresFunctionsstoredProcedureParametersLesson from '../courses/sql-server/12-stored-procedures-functions/03-stored-procedure-parameters.json';
import sqlServertriggersddlTriggersLesson from '../courses/sql-server/13-triggers/03-ddl-triggers.json';
import sqlServertransactionsErrorHandlingBackupifElseStatementLesson from '../courses/sql-server/14-transactions-error-handling-backup/03-if-else-statement.json';
import sqlServeradvancedTopicstableVariablesLesson from '../courses/sql-server/15-advanced-topics/03-table-variables.json';
import sqlServerperformanceTuningstatisticsMaintenanceLesson from '../courses/sql-server/16-performance-tuning/statistics-maintenance.json';
import sqlServersecurityHardeningpermissionsGrantRevokeLesson from '../courses/sql-server/17-security-hardening/permissions-grant-revoke.json';
import sqlServerhighAvailabilityDrbackupRestoreStrategiesLesson from '../courses/sql-server/18-high-availability-dr/backup-restore-strategies.json';
import aspnetCoregettingStartedAspnetCoreMvcintroductionToAspnetCoreMvcLesson from '../courses/aspnet-core/01-getting-started-aspnet-core-mvc/introduction-to-aspnet-core-mvc.json';
import aspnetCorecontrollersRoutingaspnetCoreConventionBasedRoutingLesson from '../courses/aspnet-core/02-controllers-routing/aspnet-core-convention-based-routing.json';
import aspnetCoremodelBindingValidationmodelValidationAspnetCoreBeginnerExpertLesson from '../courses/aspnet-core/03-model-binding-validation/model-validation-aspnet-core-beginner-expert.json';
import aspnetCoreviewsTagHelpersintroductionToTagHelpersLesson from '../courses/aspnet-core/04-views-tag-helpers/introduction-to-tag-helpers.json';
import aspnetCorewebApicallWebApiAspnetCoreNet10Lesson from '../courses/aspnet-core/07-web-api/call-web-api-aspnet-core-net10.json';
import aspnetCoreauthenticationIdentitysetupConfigureAspnetCoreIdentityLesson from '../courses/aspnet-core/08-authentication-identity/setup-configure-aspnet-core-identity.json';
import aspnetCorelocalizationGlobalizationuseGlobalizationLocalizationAspnetCoreLesson from '../courses/aspnet-core/09-localization-globalization/use-globalization-localization-aspnet-core.json';
import linqgettingStartedLinqlinqApiInNetLesson from '../courses/linq/01-getting-started-linq/linq-api-in-net.json';
import linqlinqFundamentalsSyntaxanatomyOfLambdaExpressionLesson from '../courses/linq/02-linq-fundamentals-syntax/anatomy-of-lambda-expression.json';
import linqfilteringProjectionprojectionOperatorsLesson from '../courses/linq/03-filtering-projection/projection-operators.json';
import linqsortingGroupinggroupingOperatorGroupbyTolookupLesson from '../courses/linq/04-sorting-grouping/grouping-operator-groupby-tolookup.json';
import linqsetOperationsintersectSetOperatorLesson from '../courses/linq/06-set-operations/intersect-set-operator.json';
import linqaggregationOperatorsaggregationAverageLesson from '../courses/linq/07-aggregation-operators/aggregation-average.json';
import linqquantifiersElementOperatorselementatElementatordefaultLesson from '../courses/linq/08-quantifiers-element-operators/elementat-elementatordefault.json';
import linqconversionGenerationOperatorsdefaultifemptyOperatorLesson from '../courses/linq/10-conversion-generation-operators/defaultifempty-operator.json';
import linqadvancedLinqConceptssampleLinqQueriesLesson from '../courses/linq/11-advanced-linq-concepts/sample-linq-queries.json';
import efCoregettingStartedEfCoreinstallEntityFrameworkCoreLesson from '../courses/ef-core/01-getting-started-ef-core/install-entity-framework-core.json';
import efCoredbcontextConfigurationdbcontextConfigurationLesson from '../courses/ef-core/02-dbcontext-configuration/dbcontext-configuration.json';
import efCoreconventionsRelationshipsconfigureOneToManyRelationshipsFluentApiLesson from '../courses/ef-core/03-conventions-relationships/configure-one-to-many-relationships-fluent-api.json';
import efCoredataOperationsDisconnecteddeleteDataDisconnectedScenarioLesson from '../courses/ef-core/05-data-operations-disconnected/delete-data-disconnected-scenario.json';
import efCorechangeTrackingtrackgraphInEntityFrameworkCoreLesson from '../courses/ef-core/06-change-tracking/trackgraph-in-entity-framework-core.json';
import efCorequeryingexecuteDeleteInEntityFrameworkCoreLesson from '../courses/ef-core/07-querying/execute-delete-in-entity-framework-core.json';
import efCoreinheritanceStrategiesefCoreTablePerTypeTptLesson from '../courses/ef-core/08-inheritance-strategies/ef-core-table-per-type-tpt.json';
import efCoremigrationspmcPowershellCommandsMigrationsLesson from '../courses/ef-core/09-migrations/pmc-powershell-commands-migrations.json';
import efCoreadvancedFeaturesentityFrameworkCoreConcurrencyConflictsLesson from '../courses/ef-core/10-advanced-features/entity-framework-core-concurrency-conflicts.json';
import efCoredatabaseFirstDiagnosticsmanageDbConnectionStringLesson from '../courses/ef-core/11-database-first-diagnostics/manage-db-connection-string.json';
import efCoreperformanceBulkOperationsperformanceBulkOperationsLesson from '../courses/ef-core/12-performance-bulk-operations/performance-bulk-operations.json';
import reactFundamentalsgettingStartedjsxBasicsLesson from '../courses/react-fundamentals/01-getting-started/jsx-basics.json';
import reactFundamentalscomponentsPropspropsAdvancedLesson from '../courses/react-fundamentals/02-components-props/props-advanced.json';
import reactFundamentalsstateEventsstateBestPracticesLesson from '../courses/react-fundamentals/03-state-events/state-best-practices.json';
import reactFundamentalsformsInputmultiStepFormsLesson from '../courses/react-fundamentals/04-forms-input/multi-step-forms.json';
import reactFundamentalslifecycleEffectsfetchingDataLesson from '../courses/react-fundamentals/05-lifecycle-effects/fetching-data.json';
import reactFundamentalscontextRefsuserefHookLesson from '../courses/react-fundamentals/06-context-refs/useref-hook.json';
import reactFundamentalsreactRouterrouteParamsLesson from '../courses/react-fundamentals/07-react-router/route-params.json';
import reactFundamentalsstylingtailwindCssLesson from '../courses/react-fundamentals/08-styling/tailwind-css.json';
import reactAdvancedPatternsrenderPropsrenderPropsVsHooksLesson from '../courses/react-advanced-patterns/01-render-props/render-props-vs-hooks.json';
import reactAdvancedPatternshigherOrderComponentshocCompositionLesson from '../courses/react-advanced-patterns/02-higher-order-components/hoc-composition.json';
import reactAdvancedPatternscompoundComponentscompoundWithContextLesson from '../courses/react-advanced-patterns/03-compound-components/compound-with-context.json';
import reactAdvancedPatternsperformancePatternsvirtualizationLargeListsLesson from '../courses/react-advanced-patterns/06-performance-patterns/virtualization-large-lists.json';
import reactAdvancedPatternscustomHooksArchitecturehookErrorHandlingLesson from '../courses/react-advanced-patterns/07-custom-hooks-architecture/hook-error-handling.json';
import reactAdvancedPatternsstateMachinesXstatestatechartsAdvancedLesson from '../courses/react-advanced-patterns/08-state-machines-xstate/statecharts-advanced.json';
import reactAdvancedPatternscomponentCompositionStrategiespolymorphicComponentsLesson from '../courses/react-advanced-patterns/09-component-composition-strategies/polymorphic-components.json';
import reactAdvancedPatternsadvancedHookPatternslayoutEffectPatternsLesson from '../courses/react-advanced-patterns/10-advanced-hook-patterns/layout-effect-patterns.json';
import typescriptForReacttypescriptBasicsinterfacesTypesLesson from '../courses/typescript-for-react/01-typescript-basics/interfaces-types.json';
import typescriptForReacttypesInReacttypingStateLesson from '../courses/typescript-for-react/02-types-in-react/typing-state.json';
import typescriptForReacttypingHookscustomHooksTypesLesson from '../courses/typescript-for-react/03-typing-hooks/custom-hooks-types.json';
import typescriptForReactadvancedTypestypeGuardsLesson from '../courses/typescript-for-react/04-advanced-types/type-guards.json';
import typescriptForReactgenericComponentspolymorphicComponentsLesson from '../courses/typescript-for-react/05-generic-components/polymorphic-components.json';
import typescriptForReactreactPatternstypedFormHandlersLesson from '../courses/typescript-for-react/06-react-patterns/typed-form-handlers.json';
import typescriptForReacttestingBestPracticestypeSafetyPatternsLesson from '../courses/typescript-for-react/07-testing-best-practices/type-safety-patterns.json';
import reduxreduxFundamentalsimmutabilityLesson from '../courses/redux/01-redux-fundamentals/immutability.json';
import reduxreduxToolkitcreateAsyncThunkLesson from '../courses/redux/02-redux-toolkit/create-async-thunk.json';
import reduxreactReduxuseDispatchLesson from '../courses/redux/03-react-redux/use-dispatch.json';
import reduxreduxMiddlewarereduxSagaLesson from '../courses/redux/04-redux-middleware/redux-saga.json';
import reduxreduxPatternsrtkQueryLesson from '../courses/redux/05-redux-patterns/rtk-query.json';
import reduxreduxAdvancedConceptsperformanceOptimizationLesson from '../courses/redux/07-redux-advanced-concepts/performance-optimization.json';
import reduxreduxRealWorlderrorHandlingLesson from '../courses/redux/08-redux-real-world/error-handling.json';
import reactQueryqueryBasicsqueryClientLesson from '../courses/react-query/01-query-basics/query-client.json';
import reactQueryqueryHooksinfiniteQueriesLesson from '../courses/react-query/02-query-hooks/infinite-queries.json';
import reactQuerymutationsinvalidationLesson from '../courses/react-query/03-mutations/invalidation.json';
import reactQueryadvancedFeaturescustomHooksReactQueryLesson from '../courses/react-query/04-advanced-features/custom-hooks.json';
import reactQuerycachingStrategiescacheInvalidationLesson from '../courses/react-query/05-caching-strategies/cache-invalidation.json';
import reactQueryofflineSupportPersistencenetworkInterruptionHandlingLesson from '../courses/react-query/06-offline-support-persistence/network-interruption-handling.json';
import reactQueryprefetchingSsrhydrationStrategiesLesson from '../courses/react-query/07-prefetching-ssr/hydration-strategies.json';
import reactQueryperformanceOptimizationmemoizationStrategiesLesson from '../courses/react-query/08-performance-optimization/memoization-strategies.json';
import reactQueryrealWorldPatternspollingRealTimeDataLesson from '../courses/react-query/09-real-world-patterns/polling-real-time-data.json';
import apolloapolloBasicsfirstQueryLesson from '../courses/apollo/01-apollo-basics/first-query.json';
import apolloqueriesMutationsrefetchingLesson from '../courses/apollo/02-queries-mutations/refetching.json';
import apollocachingpaginationCachingLesson from '../courses/apollo/03-caching/pagination-caching.json';
import apolloadvancedPatternslocalStateLesson from '../courses/apollo/04-advanced-patterns/local-state.json';
import apolloclientSideCachingAdvancedcustomCacheResolversLesson from '../courses/apollo/05-client-side-caching-advanced/custom-cache-resolvers.json';
import apolloerrorHandlingOptimisticoptimisticResponsesLesson from '../courses/apollo/06-error-handling-optimistic/optimistic-responses.json';
import apollosubscriptionsRealtimesubscriptionLifecycleLesson from '../courses/apollo/07-subscriptions-realtime/subscription-lifecycle.json';
import apollolocalStateManagementclientSideResolversLesson from '../courses/apollo/08-local-state-management/client-side-resolvers.json';
import apollossrNextjsPerformancessgHydrationLesson from '../courses/apollo/09-ssr-nextjs-performance/ssg-hydration.json';
import cleanCodeCsharpsolidPrinciplesliskovSubstitutionLesson from '../courses/clean-code-csharp/01-solid-principles/liskov-substitution.json';
import cleanCodeCsharpcreationalPatternsbuilderPatternLesson from '../courses/clean-code-csharp/02-creational-patterns/builder-pattern.json';
import cleanCodeCsharpstructuralPatternsfacadePatternLesson from '../courses/clean-code-csharp/03-structural-patterns/facade-pattern.json';
import cleanCodeCsharpbehavioralPatternscommandPatternLesson from '../courses/clean-code-csharp/04-behavioral-patterns/command-pattern.json';
import cleanCodeCsharpcleanCodePracticeserrorHandlingCleanCodeCsharpLesson from '../courses/clean-code-csharp/05-clean-code-practices/error-handling.json';
import cleanCodeCsharparchitecturePatternscqrsPatternLesson from '../courses/clean-code-csharp/06-architecture-patterns/cqrs-pattern.json';
import csharpFundamentalsgettingStartedfirstProgramLesson from '../courses/csharp-fundamentals/01-getting-started/first-program.json';
import csharpFundamentalsvariablesTypesreferenceTypesLesson from '../courses/csharp-fundamentals/02-variables-types/reference-types.json';
import csharpFundamentalscontrolFlowswitchStatementsLesson from '../courses/csharp-fundamentals/03-control-flow/switch-statements.json';
import csharpFundamentalsoopinterfacesLesson from '../courses/csharp-fundamentals/04-oop/interfaces.json';
import csharpFundamentalsadvancedFeaturesasyncAwaitLesson from '../courses/csharp-fundamentals/05-advanced-features/async-await.json';
import csharpFundamentalserrorHandlingtryCatchFinallyLesson from '../courses/csharp-fundamentals/06-error-handling/try-catch-finally.json';
import csharpFundamentalsmodernCsharpnullableTypesLesson from '../courses/csharp-fundamentals/07-modern-csharp/nullable-types.json';
import unitTestingDotnettestingFundamentalsarrangeActAssertLesson from '../courses/unit-testing-dotnet/01-testing-fundamentals/arrange-act-assert.json';
import unitTestingDotnetxunitBasicstestFixturesLesson from '../courses/unit-testing-dotnet/02-xunit-basics/test-fixtures.json';
import unitTestingDotnetmockingFakesstubsFakesLesson from '../courses/unit-testing-dotnet/03-mocking-fakes/stubs-fakes.json';
import unitTestingDotnetintegrationTestingdatabaseTestingLesson from '../courses/unit-testing-dotnet/04-integration-testing/database-testing.json';
import unitTestingDotnettddtddPatternsLesson from '../courses/unit-testing-dotnet/05-tdd/tdd-patterns.json';
import unitTestingDotnettestingPatternsflakyTestsLesson from '../courses/unit-testing-dotnet/06-testing-patterns/flaky-tests.json';
import unitTestingDotnetcodeCoveragecoverageReportingLesson from '../courses/unit-testing-dotnet/07-code-coverage/coverage-reporting.json';
import aspnetCoreWebApigettingStartedprojectStructureLesson from '../courses/aspnet-core-web-api/01-getting-started/project-structure.json';
import aspnetCoreWebApicontrollersRoutingrouteConstraintsLesson from '../courses/aspnet-core-web-api/02-controllers-routing/route-constraints.json';
import aspnetCoreWebApimodelBindingfromQueryLesson from '../courses/aspnet-core-web-api/03-model-binding/from-query.json';
import aspnetCoreWebApimiddlewarecustomMiddlewareLesson from '../courses/aspnet-core-web-api/04-middleware/custom-middleware.json';
import aspnetCoreWebApidependencyInjectioninjectingServicesLesson from '../courses/aspnet-core-web-api/05-dependency-injection/injecting-services.json';
import aspnetCoreWebApierrorHandlingValidationglobalErrorHandlingLesson from '../courses/aspnet-core-web-api/06-error-handling-validation/global-error-handling.json';
import aspnetCoreWebApiauthenticationBasicsauthorizationPoliciesLesson from '../courses/aspnet-core-web-api/07-authentication-basics/authorization-policies.json';
import aspnetCoreWebApiloggingConfigurationconfigurationOptionsLesson from '../courses/aspnet-core-web-api/08-logging-configuration/configuration-options.json';
import reactTestingtestingFundamentalstestingPrinciplesLesson from '../courses/react-testing/01-testing-fundamentals/testing-principles.json';
import reactTestingjestBasicsasyncTestingLesson from '../courses/react-testing/02-jest-basics/async-testing.json';
import reactTestingreactTestingLibraryuserEventsLesson from '../courses/react-testing/03-react-testing-library/user-events.json';
import reactTestingcomponentTestingtestingContextLesson from '../courses/react-testing/04-component-testing/testing-context.json';
import reactTestinge2eTestingcypressCommandsLesson from '../courses/react-testing/05-e2e-testing/cypress-commands.json';
import reactTestingadvancedTestingPatternsvisualRegressionLesson from '../courses/react-testing/06-advanced-testing-patterns/visual-regression.json';
import authenticationAuthorizationauthBasicscookieAuthLesson from '../courses/authentication-authorization/01-auth-basics/cookie-auth.json';
import authenticationAuthorizationjwtvalidatingJwtLesson from '../courses/authentication-authorization/02-jwt/validating-jwt.json';
import authenticationAuthorizationidentityrolesAuthorizationLesson from '../courses/authentication-authorization/03-identity/roles-authorization.json';
import authenticationAuthorizationoauthopenidConnectLesson from '../courses/authentication-authorization/04-oauth/openid-connect.json';
import authenticationAuthorizationoauth2FlowsDeepDiveclientCredentialsFlowLesson from '../courses/authentication-authorization/05-oauth2-flows-deep-dive/client-credentials-flow.json';
import authenticationAuthorizationadvancedAuthorizationpolicyBasedAuthorizationLesson from '../courses/authentication-authorization/06-advanced-authorization/policy-based-authorization.json';
import authenticationAuthorizationrefreshTokenStrategiesslidingExpirationLesson from '../courses/authentication-authorization/07-refresh-token-strategies/sliding-expiration.json';
import authenticationAuthorizationssoIdentityProvidersazureAdIntegrationLesson from '../courses/authentication-authorization/08-sso-identity-providers/azure-ad-integration.json';
import authenticationAuthorizationsecurityBestPracticessessionManagementLesson from '../courses/authentication-authorization/09-security-best-practices/session-management.json';
import oopsConceptsoopFundamentalsconstructorsLesson from '../courses/oops-concepts/01-oop-fundamentals/constructors.json';
import oopsConceptsencapsulationDataHidingautoPropertiesLesson from '../courses/oops-concepts/02-encapsulation-data-hiding/auto-properties.json';
import oopsConceptsinheritancesealedClassesLesson from '../courses/oops-concepts/03-inheritance/sealed-classes.json';
import oopsConceptspolymorphismruntimePolymorphismLesson from '../courses/oops-concepts/04-polymorphism/runtime-polymorphism.json';
import oopsConceptsabstractionabstractVsInterfaceLesson from '../courses/oops-concepts/05-abstraction/abstract-vs-interface.json';
import oopsConceptsinterfacesAbstractClassesdefaultInterfaceMethodsLesson from '../courses/oops-concepts/06-interfaces-abstract-classes/default-interface-methods.json';
import interviewQabeginnerQuestionsbeginnerQ1Lesson from '../courses/interview-qa/01-beginner-questions/beginner-q1.json';
import interviewQaintermediateQuestionsintermediateQ3Lesson from '../courses/interview-qa/02-intermediate-questions/intermediate-q3.json';
import interviewQaadvancedQuestionsadvancedQ3Lesson from '../courses/interview-qa/03-advanced-questions/advanced-q3.json';
import interviewQascenarioBasedscenarioQ3Lesson from '../courses/interview-qa/04-scenario-based/scenario-q3.json';
import interviewQasystemDesignsystemQ11Lesson from '../courses/interview-qa/05-system-design/system-q11.json';
import interviewQarapidFirerapidQ3Lesson from '../courses/interview-qa/06-rapid-fire/rapid-q3.json';
import interviewQaperformanceOptimizationperfQ3Lesson from '../courses/interview-qa/08-performance-optimization/perf-q3.json';
import interviewQacicdPipelinescicdQ3Lesson from '../courses/interview-qa/09-cicd-pipelines/cicd-q3.json';
import graphqlDotnetgettingStartedcreatingFirstGraphqlServerLesson from '../courses/graphql-dotnet/01-getting-started/creating-first-graphql-server.json';
import graphqlDotnetschemaTypesinputTypesLesson from '../courses/graphql-dotnet/02-schema-types/input-types.json';
import graphqlDotnetqueriesMutationssubscriptionsGraphqlDotnetLesson from '../courses/graphql-dotnet/03-queries-mutations/subscriptions.json';
import graphqlDotnetfilteringPaginationcomplexFiltersLesson from '../courses/graphql-dotnet/04-filtering-pagination/complex-filters.json';
import graphqlDotnetauthenticationjwtIntegrationLesson from '../courses/graphql-dotnet/05-authentication/jwt-integration.json';
import graphqlDotnetperformancequeryComplexityLesson from '../courses/graphql-dotnet/06-performance/query-complexity.json';
import designPatternscreationalPatternsbuilderPatternDesignPatternsLesson from '../courses/design-patterns/01-creational-patterns/builder-pattern.json';
import designPatternsstructuralPatternsfacadePatternDesignPatternsLesson from '../courses/design-patterns/02-structural-patterns/facade-pattern.json';
import designPatternsbehavioralPatternscommandPatternDesignPatternsLesson from '../courses/design-patterns/03-behavioral-patterns/command-pattern.json';
import designPatternsenterprisePatternsmediatorPatternLesson from '../courses/design-patterns/04-enterprise-patterns/mediator-pattern.json';
import designPatternsconcurrencyPatternsthreadPoolPatternDesignPatternsLesson from '../courses/design-patterns/05-concurrency-patterns/thread-pool-pattern.json';
import designPatternsarchitecturalPatternscleanArchitectureDesignPatternsLesson from '../courses/design-patterns/06-architectural-patterns/clean-architecture.json';
import fullstackSecuritycorsConfigurationcorsWithReactLesson from '../courses/fullstack-security/01-cors-configuration/cors-with-react.json';
import fullstackSecurityxssCsrfProtectioncsrfProtectionAspnetLesson from '../courses/fullstack-security/03-xss-csrf-protection/csrf-protection-aspnet.json';
import fullstackSecurityapiSecurityRateLimitingimplementingApiKeysLesson from '../courses/fullstack-security/04-api-security-rate-limiting/implementing-api-keys.json';
import fullstackSecuritysecureApiDesignoutputEncodingLesson from '../courses/fullstack-security/05-secure-api-design/output-encoding.json';
import fullstackSecuritydependencySecuritynpmSecurityLesson from '../courses/fullstack-security/06-dependency-security/npm-security.json';
import fullstackSecurityenvironmentSecretscredentialHandlingLesson from '../courses/fullstack-security/07-environment-secrets/credential-handling.json';
import sqlServerqueryingDatawhereClauseLesson from '../courses/sql-server/02-querying-data/04-where-clause.json';
import sqlServerjoinsrightJoinLesson from '../courses/sql-server/03-joins/04-right-join.json';
import sqlServergroupingAggregationSubqueriesrollupLesson from '../courses/sql-server/05-grouping-aggregation-subqueries/04-rollup.json';
import sqlServerdataModificationDmlupdateStatementLesson from '../courses/sql-server/06-data-modification-dml/04-update-statement.json';
import sqlServerdatabaseSchemaTableObjectsalterTableAddColumnLesson from '../courses/sql-server/07-database-schema-table-objects/04-alter-table-add-column.json';
import sqlServerdataTypesintDataTypesLesson from '../courses/sql-server/08-data-types/04-int-data-types.json';
import sqlServerconstraintsuniqueConstraintLesson from '../courses/sql-server/09-constraints/04-unique-constraint.json';
import sqlServerindexesfilteredIndexesLesson from '../courses/sql-server/10-indexes/04-filtered-indexes.json';
import sqlServerviewsgetInformationAboutAViewLesson from '../courses/sql-server/11-views/04-get-information-about-a-view.json';
import sqlServerstoredProceduresFunctionsoutputParametersLesson from '../courses/sql-server/12-stored-procedures-functions/04-output-parameters.json';
import sqlServertriggersinsteadOfTriggerLesson from '../courses/sql-server/13-triggers/04-instead-of-trigger.json';
import sqlServertransactionsErrorHandlingBackuptryCatchLesson from '../courses/sql-server/14-transactions-error-handling-backup/04-try-catch.json';
import sqlServeradvancedTopicscaseExpressionLesson from '../courses/sql-server/15-advanced-topics/04-case-expression.json';
import sqlServerperformanceTuningdatabaseEngineTuningAdvisorLesson from '../courses/sql-server/16-performance-tuning/database-engine-tuning-advisor.json';
import sqlServersecurityHardeningencryptionTdeLesson from '../courses/sql-server/17-security-hardening/encryption-tde.json';
import aspnetCoregettingStartedAspnetCoreMvclearnAspnetCoreExamplesCodesLesson from '../courses/aspnet-core/01-getting-started-aspnet-core-mvc/learn-aspnet-core-examples-codes.json';
import aspnetCoreviewsTagHelpersviewsInAspnetCoreLesson from '../courses/aspnet-core/04-views-tag-helpers/views-in-aspnet-core.json';
import aspnetCorewebApicreateWebApisAspnetCoreRestfulPatternLesson from '../courses/aspnet-core/07-web-api/create-web-apis-aspnet-core-restful-pattern.json';
import aspnetCoreauthenticationIdentityaddCustomUserPropertiesAspnetCoreIdentityLesson from '../courses/aspnet-core/08-authentication-identity/add-custom-user-properties-aspnet-core-identity.json';
import linqgettingStartedLinqlearnLinqStepByStepLesson from '../courses/linq/01-getting-started-linq/learn-linq-step-by-step.json';
import linqsetOperationsunionSetOperatorLesson from '../courses/linq/06-set-operations/union-set-operator.json';
import linqaggregationOperatorsaggregationMaxLesson from '../courses/linq/07-aggregation-operators/aggregation-max.json';
import linqquantifiersElementOperatorsfirstFirstordefaultLesson from '../courses/linq/08-quantifiers-element-operators/first-firstordefault.json';
import linqadvancedLinqConceptsstandardQueryOperatorsLesson from '../courses/linq/11-advanced-linq-concepts/standard-query-operators.json';
import efCoregettingStartedEfCoreworkingWithDbcontextInEfCoreLesson from '../courses/ef-core/01-getting-started-ef-core/working-with-dbcontext-in-ef-core.json';
import efCoredbcontextConfigurationfluentApiInEntityFrameworkCoreLesson from '../courses/ef-core/02-dbcontext-configuration/fluent-api-in-entity-framework-core.json';
import efCoreconventionsRelationshipsconventionsRelationshipsLesson from '../courses/ef-core/03-conventions-relationships/conventions-relationships.json';
import efCoredataOperationsDisconnectedworkingWithDisconnectedEntityGraphLesson from '../courses/ef-core/05-data-operations-disconnected/working-with-disconnected-entity-graph.json';
import efCorechangeTrackingchangeTrackingLesson from '../courses/ef-core/06-change-tracking/change-tracking.json';
import efCorequeryingexecuteUpdateInEntityFrameworkCoreLesson from '../courses/ef-core/07-querying/execute-update-in-entity-framework-core.json';
import efCoreinheritanceStrategiesefCoreTablePerConcreteTypeTpcLesson from '../courses/ef-core/08-inheritance-strategies/ef-core-table-per-concrete-type-tpc.json';
import efCoremigrationsgenerateSqlScriptFromModelLesson from '../courses/ef-core/09-migrations/generate-sql-script-from-model.json';
import efCoreadvancedFeaturesworkingWithStoredProceduresLesson from '../courses/ef-core/10-advanced-features/working-with-stored-procedures.json';
import efCoredatabaseFirstDiagnosticsdatabaseFirstDiagnosticsLesson from '../courses/ef-core/11-database-first-diagnostics/database-first-diagnostics.json';
import reactFundamentalsgettingStartedfirstReactAppLesson from '../courses/react-fundamentals/01-getting-started/first-react-app.json';
import reactFundamentalscomponentsPropscomposingComponentsLesson from '../courses/react-fundamentals/02-components-props/composing-components.json';
import reactFundamentalsstateEventscontrolledComponentsLesson from '../courses/react-fundamentals/03-state-events/controlled-components.json';
import reactFundamentalsformsInputfileUploadsLesson from '../courses/react-fundamentals/04-forms-input/file-uploads.json';
import reactFundamentalslifecycleEffectscustomHooksLesson from '../courses/react-fundamentals/05-lifecycle-effects/custom-hooks.json';
import reactFundamentalscontextRefsforwardingRefsLesson from '../courses/react-fundamentals/06-context-refs/forwarding-refs.json';
import reactFundamentalsreactRouternavigationLesson from '../courses/react-fundamentals/07-react-router/navigation.json';
import reactFundamentalsstylinginlineStylesLesson from '../courses/react-fundamentals/08-styling/inline-styles.json';
import reactAdvancedPatternsperformancePatternsrenderOptimizationLesson from '../courses/react-advanced-patterns/06-performance-patterns/render-optimization.json';
import reactAdvancedPatternscustomHooksArchitecturebuildingHookLibrariesLesson from '../courses/react-advanced-patterns/07-custom-hooks-architecture/building-hook-libraries.json';
import reactAdvancedPatternsstateMachinesXstateintegratingXstateReactLesson from '../courses/react-advanced-patterns/08-state-machines-xstate/integrating-xstate-react.json';
import reactAdvancedPatternscomponentCompositionStrategieslayoutCompositionLesson from '../courses/react-advanced-patterns/09-component-composition-strategies/layout-composition.json';
import reactAdvancedPatternsadvancedHookPatternscustomHookTestingLesson from '../courses/react-advanced-patterns/10-advanced-hook-patterns/custom-hook-testing.json';
import typescriptForReacttypescriptBasicsfunctionsTypesLesson from '../courses/typescript-for-react/01-typescript-basics/functions-types.json';
import typescriptForReacttypesInReacttypingEventsLesson from '../courses/typescript-for-react/02-types-in-react/typing-events.json';
import typescriptForReactreactPatternstypedRouterLesson from '../courses/typescript-for-react/06-react-patterns/typed-router.json';
import typescriptForReacttestingBestPracticesmigratingToTypescriptLesson from '../courses/typescript-for-react/07-testing-best-practices/migrating-to-typescript.json';
import reduxreduxFundamentalsdevtoolsLesson from '../courses/redux/01-redux-fundamentals/devtools.json';
import reduxreduxRealWorlddeploymentSetupLesson from '../courses/redux/08-redux-real-world/deployment-setup.json';
import reactQueryqueryBasicsfirstQueryReactQueryLesson from '../courses/react-query/01-query-basics/first-query.json';
import reactQueryqueryHooksdependentQueriesLesson from '../courses/react-query/02-query-hooks/dependent-queries.json';
import reactQuerycachingStrategiesbackgroundRefetchingLesson from '../courses/react-query/05-caching-strategies/background-refetching.json';
import reactQueryofflineSupportPersistencebackgroundSyncLesson from '../courses/react-query/06-offline-support-persistence/background-sync.json';
import reactQueryprefetchingSsrprefetchPatternsLesson from '../courses/react-query/07-prefetching-ssr/prefetch-patterns.json';
import reactQueryperformanceOptimizationprofilingDebuggingLesson from '../courses/react-query/08-performance-optimization/profiling-debugging.json';
import reactQueryrealWorldPatternsmigrationPatternsLesson from '../courses/react-query/09-real-world-patterns/migration-patterns.json';
import apolloapolloBasicsgraphqlBasicsLesson from '../courses/apollo/01-apollo-basics/graphql-basics.json';
import apolloqueriesMutationspollingLesson from '../courses/apollo/02-queries-mutations/polling.json';
import apolloclientSideCachingAdvancedcacheRedirectsLesson from '../courses/apollo/05-client-side-caching-advanced/cache-redirects.json';
import apolloerrorHandlingOptimisticpartialDataErrorHandlingLesson from '../courses/apollo/06-error-handling-optimistic/partial-data-error-handling.json';
import apollosubscriptionsRealtimerealTimePatternsLesson from '../courses/apollo/07-subscriptions-realtime/real-time-patterns.json';
import apollolocalStateManagementstateCompositionLesson from '../courses/apollo/08-local-state-management/state-composition.json';
import apollossrNextjsPerformanceperformanceOptimizationLesson from '../courses/apollo/09-ssr-nextjs-performance/performance-optimization.json';
import cleanCodeCsharpsolidPrinciplesinterfaceSegregationLesson from '../courses/clean-code-csharp/01-solid-principles/interface-segregation.json';
import cleanCodeCsharpcreationalPatternsprototypePatternLesson from '../courses/clean-code-csharp/02-creational-patterns/prototype-pattern.json';
import cleanCodeCsharpstructuralPatternscompositePatternLesson from '../courses/clean-code-csharp/03-structural-patterns/composite-pattern.json';
import cleanCodeCsharpbehavioralPatternschainOfResponsibilityLesson from '../courses/clean-code-csharp/04-behavioral-patterns/chain-of-responsibility.json';
import cleanCodeCsharpcleanCodePracticescodeOrganizationLesson from '../courses/clean-code-csharp/05-clean-code-practices/code-organization.json';
import cleanCodeCsharparchitecturePatternsdependencyInjectionLesson from '../courses/clean-code-csharp/06-architecture-patterns/dependency-injection.json';
import csharpFundamentalsgettingStartedunderstandingStructureLesson from '../courses/csharp-fundamentals/01-getting-started/understanding-structure.json';
import csharpFundamentalsvariablesTypestypeConversionLesson from '../courses/csharp-fundamentals/02-variables-types/type-conversion.json';
import csharpFundamentalsoopencapsulationLesson from '../courses/csharp-fundamentals/04-oop/encapsulation.json';
import csharpFundamentalsadvancedFeatureslinqBasicsLesson from '../courses/csharp-fundamentals/05-advanced-features/linq-basics.json';
import unitTestingDotnettestingFundamentalstestNamingConventionsLesson from '../courses/unit-testing-dotnet/01-testing-fundamentals/test-naming-conventions.json';
import unitTestingDotnetxunitBasicsdataDrivenTestsLesson from '../courses/unit-testing-dotnet/02-xunit-basics/data-driven-tests.json';
import unitTestingDotnetmockingFakesverificationLesson from '../courses/unit-testing-dotnet/03-mocking-fakes/verification.json';
import unitTestingDotnetintegrationTestingapiTestingLesson from '../courses/unit-testing-dotnet/04-integration-testing/api-testing.json';
import unitTestingDotnettddtddAspnetCoreLesson from '../courses/unit-testing-dotnet/05-tdd/tdd-aspnet-core.json';
import aspnetCoreWebApigettingStartedfirstEndpointLesson from '../courses/aspnet-core-web-api/01-getting-started/first-endpoint.json';
import reactTestingtestingFundamentalstestStructureLesson from '../courses/react-testing/01-testing-fundamentals/test-structure.json';
import reactTestingjestBasicsmockingJestLesson from '../courses/react-testing/02-jest-basics/mocking-jest.json';
import reactTestingreactTestingLibrarytestingHooksLesson from '../courses/react-testing/03-react-testing-library/testing-hooks.json';
import reactTestingcomponentTestingtestingApiCallsLesson from '../courses/react-testing/04-component-testing/testing-api-calls.json';
import reactTestinge2eTestingbestPracticesLesson from '../courses/react-testing/05-e2e-testing/best-practices.json';
import authenticationAuthorizationauthBasicssessionVsTokenLesson from '../courses/authentication-authorization/01-auth-basics/session-vs-token.json';
import authenticationAuthorizationjwtreactIntegrationLesson from '../courses/authentication-authorization/02-jwt/react-integration.json';
import authenticationAuthorizationadvancedAuthorizationresourceBasedAuthorizationLesson from '../courses/authentication-authorization/06-advanced-authorization/resource-based-authorization.json';
import authenticationAuthorizationrefreshTokenStrategiestokenRevocationLesson from '../courses/authentication-authorization/07-refresh-token-strategies/token-revocation.json';
import authenticationAuthorizationssoIdentityProvidersauth0IntegrationLesson from '../courses/authentication-authorization/08-sso-identity-providers/auth0-integration.json';
import authenticationAuthorizationsecurityBestPracticescsrfXssProtectionLesson from '../courses/authentication-authorization/09-security-best-practices/csrf-xss-protection.json';
import oopsConceptsoopFundamentalsaccessModifiersLesson from '../courses/oops-concepts/01-oop-fundamentals/access-modifiers.json';
import oopsConceptsencapsulationDataHidingreadOnlyFieldsLesson from '../courses/oops-concepts/02-encapsulation-data-hiding/read-only-fields.json';
import oopsConceptsinheritanceinheritanceHierarchiesLesson from '../courses/oops-concepts/03-inheritance/inheritance-hierarchies.json';
import oopsConceptspolymorphismoperatorOverloadingLesson from '../courses/oops-concepts/04-polymorphism/operator-overloading.json';
import oopsConceptsabstractionrealWorldAbstractionLesson from '../courses/oops-concepts/05-abstraction/real-world-abstraction.json';
import oopsConceptsinterfacesAbstractClassesexplicitInterfaceImplementationLesson from '../courses/oops-concepts/06-interfaces-abstract-classes/explicit-interface-implementation.json';
import interviewQabeginnerQuestionsbeginnerQ2Lesson from '../courses/interview-qa/01-beginner-questions/beginner-q2.json';
import interviewQaintermediateQuestionsintermediateQ4Lesson from '../courses/interview-qa/02-intermediate-questions/intermediate-q4.json';
import interviewQaadvancedQuestionsadvancedQ4Lesson from '../courses/interview-qa/03-advanced-questions/advanced-q4.json';
import interviewQascenarioBasedscenarioQ21Lesson from '../courses/interview-qa/04-scenario-based/scenario-q21.json';
import interviewQasystemDesignsystemQ12Lesson from '../courses/interview-qa/05-system-design/system-q12.json';
import interviewQaperformanceOptimizationperfQ4Lesson from '../courses/interview-qa/08-performance-optimization/perf-q4.json';
import interviewQacicdPipelinescicdQ4Lesson from '../courses/interview-qa/09-cicd-pipelines/cicd-q4.json';
import graphqlDotnetgettingStartedhotchocolateProjectSetupLesson from '../courses/graphql-dotnet/01-getting-started/hotchocolate-project-setup.json';
import graphqlDotnetschemaTypesscalarsCustomTypesLesson from '../courses/graphql-dotnet/02-schema-types/scalars-custom-types.json';
import graphqlDotnetqueriesMutationsresolversLesson from '../courses/graphql-dotnet/03-queries-mutations/resolvers.json';
import graphqlDotnetfilteringPaginationperformancePaginationLesson from '../courses/graphql-dotnet/04-filtering-pagination/performance-pagination.json';
import graphqlDotnetauthenticationidentityIntegrationLesson from '../courses/graphql-dotnet/05-authentication/identity-integration.json';
import graphqlDotnetperformancepersistedQueriesLesson from '../courses/graphql-dotnet/06-performance/persisted-queries.json';
import designPatternscreationalPatternsprototypePatternDesignPatternsLesson from '../courses/design-patterns/01-creational-patterns/prototype-pattern.json';
import designPatternsstructuralPatternsproxyPatternLesson from '../courses/design-patterns/02-structural-patterns/proxy-pattern.json';
import designPatternsbehavioralPatternsiteratorPatternLesson from '../courses/design-patterns/03-behavioral-patterns/iterator-pattern.json';
import designPatternsenterprisePatternscqrsBasicsLesson from '../courses/design-patterns/04-enterprise-patterns/cqrs-basics.json';
import designPatternsconcurrencyPatternsasyncAwaitPatternsDesignPatternsLesson from '../courses/design-patterns/05-concurrency-patterns/async-await-patterns.json';
import designPatternsarchitecturalPatternsonionArchitectureDesignPatternsLesson from '../courses/design-patterns/06-architectural-patterns/onion-architecture.json';
import fullstackSecuritycorsConfigurationcorsBestPracticesLesson from '../courses/fullstack-security/01-cors-configuration/cors-best-practices.json';
import fullstackSecurityxssCsrfProtectionsecuringReactAppsLesson from '../courses/fullstack-security/03-xss-csrf-protection/securing-react-apps.json';
import fullstackSecurityapiSecurityRateLimitingloggingAndMonitoringLesson from '../courses/fullstack-security/04-api-security-rate-limiting/logging-and-monitoring.json';
import sqlServerqueryingDataandOperatorLesson from '../courses/sql-server/02-querying-data/05-and-operator.json';
import sqlServerjoinsfullOuterJoinLesson from '../courses/sql-server/03-joins/05-full-outer-join.json';
import sqlServergroupingAggregationSubqueriesgroupingSetsLesson from '../courses/sql-server/05-grouping-aggregation-subqueries/05-grouping-sets.json';
import sqlServerdataModificationDmlupdateWithJoinLesson from '../courses/sql-server/06-data-modification-dml/05-update-with-join.json';
import sqlServerdatabaseSchemaTableObjectsalterTableAlterColumnLesson from '../courses/sql-server/07-database-schema-table-objects/05-alter-table-alter-column.json';
import sqlServerdataTypesncharDataTypeLesson from '../courses/sql-server/08-data-types/05-nchar-data-type.json';
import sqlServerindexesindexesWithIncludedColumnsLesson from '../courses/sql-server/10-indexes/05-indexes-with-included-columns.json';
import sqlServerviewsrenameAViewLesson from '../courses/sql-server/11-views/05-rename-a-view.json';
import sqlServerstoredProceduresFunctionsvariablesInStoredProceduresLesson from '../courses/sql-server/12-stored-procedures-functions/05-variables-in-stored-procedures.json';
import sqlServertriggersdisableTriggerLesson from '../courses/sql-server/13-triggers/05-disable-trigger.json';
import sqlServertransactionsErrorHandlingBackupthrowStatementLesson from '../courses/sql-server/14-transactions-error-handling-backup/05-throw-statement.json';
import sqlServeradvancedTopicscoalesceExpressionLesson from '../courses/sql-server/15-advanced-topics/05-coalesce-expression.json';
import sqlServerperformanceTuningqueryStoreLesson from '../courses/sql-server/16-performance-tuning/query-store.json';
import sqlServersecurityHardeningalwaysEncryptedLesson from '../courses/sql-server/17-security-hardening/always-encrypted.json';
import aspnetCoreauthenticationIdentityauthenticationOfUsersAspnetCoreIdentityLesson from '../courses/aspnet-core/08-authentication-identity/authentication-of-users-aspnet-core-identity.json';
import linqsetOperationsconcatConcatenationOperatorLesson from '../courses/linq/06-set-operations/concat-concatenation-operator.json';
import linqaggregationOperatorsaggregationAggregateLesson from '../courses/linq/07-aggregation-operators/aggregation-aggregate.json';
import linqquantifiersElementOperatorslastLastordefaultLesson from '../courses/linq/08-quantifiers-element-operators/last-lastordefault.json';
import efCoreconventionsRelationshipsoneToOneRelationshipsConventionsLesson from '../courses/ef-core/03-conventions-relationships/one-to-one-relationships-conventions.json';
import efCoredataOperationsDisconnecteddataOperationsDisconnectedLesson from '../courses/ef-core/05-data-operations-disconnected/data-operations-disconnected.json';
import efCorequeryingqueryingLesson from '../courses/ef-core/07-querying/querying.json';
import efCoreinheritanceStrategiesinheritanceStrategiesLesson from '../courses/ef-core/08-inheritance-strategies/inheritance-strategies.json';
import efCoremigrationsmigrationsLesson from '../courses/ef-core/09-migrations/migrations.json';
import efCoreadvancedFeaturesadvancedFeaturesLesson from '../courses/ef-core/10-advanced-features/advanced-features.json';
import reactAdvancedPatternscomponentCompositionStrategiesflexibleComponentApisLesson from '../courses/react-advanced-patterns/09-component-composition-strategies/flexible-component-apis.json';
import reactAdvancedPatternsadvancedHookPatternshookBestPracticesLesson from '../courses/react-advanced-patterns/10-advanced-hook-patterns/hook-best-practices.json';
import reactQuerycachingStrategiescachePersistenceLesson from '../courses/react-query/05-caching-strategies/cache-persistence.json';
import apollossrNextjsPerformancecommonPitfallsLesson from '../courses/apollo/09-ssr-nextjs-performance/common-pitfalls.json';
import cleanCodeCsharpsolidPrinciplesdependencyInversionLesson from '../courses/clean-code-csharp/01-solid-principles/dependency-inversion.json';
import authenticationAuthorizationadvancedAuthorizationcustomAuthorizationHandlersLesson from '../courses/authentication-authorization/06-advanced-authorization/custom-authorization-handlers.json';
import authenticationAuthorizationrefreshTokenStrategiessecureStorageStrategiesLesson from '../courses/authentication-authorization/07-refresh-token-strategies/secure-storage-strategies.json';
import authenticationAuthorizationssoIdentityProvidersidentityFederationLesson from '../courses/authentication-authorization/08-sso-identity-providers/identity-federation.json';
import authenticationAuthorizationsecurityBestPracticesrateLimitingSecurityLesson from '../courses/authentication-authorization/09-security-best-practices/rate-limiting-security.json';
import interviewQabeginnerQuestionsbeginnerQ3Lesson from '../courses/interview-qa/01-beginner-questions/beginner-q3.json';
import interviewQaintermediateQuestionsintermediateQ5Lesson from '../courses/interview-qa/02-intermediate-questions/intermediate-q5.json';
import interviewQaadvancedQuestionsadvancedQ5Lesson from '../courses/interview-qa/03-advanced-questions/advanced-q5.json';
import interviewQascenarioBasedscenarioQ22Lesson from '../courses/interview-qa/04-scenario-based/scenario-q22.json';
import interviewQasystemDesignsystemQ13Lesson from '../courses/interview-qa/05-system-design/system-q13.json';
import designPatternsconcurrencyPatternsbarrierPatternDesignPatternsLesson from '../courses/design-patterns/05-concurrency-patterns/barrier-pattern.json';
import sqlServerqueryingDataorOperatorLesson from '../courses/sql-server/02-querying-data/06-or-operator.json';
import sqlServerjoinscrossJoinLesson from '../courses/sql-server/03-joins/06-cross-join.json';
import sqlServergroupingAggregationSubqueriespivotOperatorLesson from '../courses/sql-server/05-grouping-aggregation-subqueries/06-pivot-operator.json';
import sqlServerdataModificationDmldeleteStatementLesson from '../courses/sql-server/06-data-modification-dml/06-delete-statement.json';
import sqlServerdatabaseSchemaTableObjectsalterTableDropColumnLesson from '../courses/sql-server/07-database-schema-table-objects/06-alter-table-drop-column.json';
import sqlServerdataTypesnvarcharDataTypeLesson from '../courses/sql-server/08-data-types/06-nvarchar-data-type.json';
import sqlServerindexesindexOnComputedColumnLesson from '../courses/sql-server/10-indexes/06-index-on-computed-column.json';
import sqlServerviewslistAllViewsLesson from '../courses/sql-server/11-views/06-list-all-views.json';
import sqlServerstoredProceduresFunctionsscalarFunctionsLesson from '../courses/sql-server/12-stored-procedures-functions/06-scalar-functions.json';
import sqlServertriggersenableTriggerLesson from '../courses/sql-server/13-triggers/06-enable-trigger.json';
import sqlServertransactionsErrorHandlingBackupraiserrorStatementLesson from '../courses/sql-server/14-transactions-error-handling-backup/06-raiserror-statement.json';
import sqlServeradvancedTopicsnullifLesson from '../courses/sql-server/15-advanced-topics/06-nullif.json';
import aspnetCoreauthenticationIdentityintegrateGoogleLoginAspnetCoreIdentityLesson from '../courses/aspnet-core/08-authentication-identity/integrate-google-login-aspnet-core-identity.json';
import linqquantifiersElementOperatorssingleSingleordefaultLesson from '../courses/linq/08-quantifiers-element-operators/single-singleordefault.json';
import efCoreconventionsRelationshipsconfigureOneToOneRelationshipsFluentApiLesson from '../courses/ef-core/03-conventions-relationships/configure-one-to-one-relationships-fluent-api.json';
import interviewQabeginnerQuestionsbeginnerQ4Lesson from '../courses/interview-qa/01-beginner-questions/beginner-q4.json';
import interviewQaintermediateQuestionscsharpI01Lesson from '../courses/interview-qa/02-intermediate-questions/csharp-i01.json';
import interviewQaadvancedQuestionscsharpA01Lesson from '../courses/interview-qa/03-advanced-questions/csharp-a01.json';
import interviewQascenarioBasedscenarioQ23Lesson from '../courses/interview-qa/04-scenario-based/scenario-q23.json';
import interviewQasystemDesignsystemQ14Lesson from '../courses/interview-qa/05-system-design/system-q14.json';
import sqlServerqueryingDatabetweenOperatorLesson from '../courses/sql-server/02-querying-data/07-between-operator.json';
import sqlServerjoinsselfJoinLesson from '../courses/sql-server/03-joins/07-self-join.json';
import sqlServergroupingAggregationSubqueriescommonTableExpressionsLesson from '../courses/sql-server/05-grouping-aggregation-subqueries/07-common-table-expressions.json';
import sqlServerdataModificationDmltruncateTableLesson from '../courses/sql-server/06-data-modification-dml/07-truncate-table.json';
import sqlServerdatabaseSchemaTableObjectsdropTableLesson from '../courses/sql-server/07-database-schema-table-objects/07-drop-table.json';
import sqlServerdataTypesdatetime2DataTypeLesson from '../courses/sql-server/08-data-types/07-datetime2-data-type.json';
import sqlServerindexesuniqueIndexLesson from '../courses/sql-server/10-indexes/07-unique-index.json';
import sqlServerviewsindexedViewsLesson from '../courses/sql-server/11-views/07-indexed-views.json';
import sqlServerstoredProceduresFunctionstableValuedFunctionsLesson from '../courses/sql-server/12-stored-procedures-functions/07-table-valued-functions.json';
import sqlServertriggersdropTriggerLesson from '../courses/sql-server/13-triggers/07-drop-trigger.json';
import sqlServertransactionsErrorHandlingBackupfullBackupLesson from '../courses/sql-server/14-transactions-error-handling-backup/07-full-backup.json';
import sqlServeradvancedTopicsdynamicSqlLesson from '../courses/sql-server/15-advanced-topics/07-dynamic-sql.json';
import aspnetCoreauthenticationIdentityworkWithClaimsAspnetCoreIdentityLesson from '../courses/aspnet-core/08-authentication-identity/work-with-claims-aspnet-core-identity.json';
import efCoreconventionsRelationshipsconfigureManyToManyRelationshipsLesson from '../courses/ef-core/03-conventions-relationships/configure-many-to-many-relationships.json';
import interviewQabeginnerQuestionsbeginnerQ5Lesson from '../courses/interview-qa/01-beginner-questions/beginner-q5.json';
import interviewQaintermediateQuestionscsharpI02Lesson from '../courses/interview-qa/02-intermediate-questions/csharp-i02.json';
import interviewQaadvancedQuestionscsharpA02Lesson from '../courses/interview-qa/03-advanced-questions/csharp-a02.json';
import interviewQascenarioBasedscenarioQ24Lesson from '../courses/interview-qa/04-scenario-based/scenario-q24.json';
import interviewQasystemDesignsystemQ15Lesson from '../courses/interview-qa/05-system-design/system-q15.json';
import sqlServerqueryingDatainOperatorLesson from '../courses/sql-server/02-querying-data/08-in-operator.json';
import sqlServerjoinscrossApplyLesson from '../courses/sql-server/03-joins/08-cross-apply.json';
import sqlServergroupingAggregationSubqueriesrecursiveCteLesson from '../courses/sql-server/05-grouping-aggregation-subqueries/08-recursive-cte.json';
import sqlServerdataModificationDmlmergeStatementLesson from '../courses/sql-server/06-data-modification-dml/08-merge-statement.json';
import sqlServerdatabaseSchemaTableObjectsrenameTableLesson from '../courses/sql-server/07-database-schema-table-objects/08-rename-table.json';
import sqlServerdataTypesdateDataTypeLesson from '../courses/sql-server/08-data-types/08-date-data-type.json';
import sqlServerindexesdisableIndexesLesson from '../courses/sql-server/10-indexes/08-disable-indexes.json';
import sqlServerstoredProceduresFunctionsuserDefinedFunctionsTutorialLesson from '../courses/sql-server/12-stored-procedures-functions/08-user-defined-functions-tutorial.json';
import sqlServertriggerslistAllTriggersLesson from '../courses/sql-server/13-triggers/08-list-all-triggers.json';
import sqlServertransactionsErrorHandlingBackupdifferentialBackupLesson from '../courses/sql-server/14-transactions-error-handling-backup/08-differential-backup.json';
import sqlServeradvancedTopicsdeadlockLesson from '../courses/sql-server/15-advanced-topics/08-deadlock.json';
import aspnetCoreauthenticationIdentityworkWithPoliciesAspnetCoreIdentityLesson from '../courses/aspnet-core/08-authentication-identity/work-with-policies-aspnet-core-identity.json';
import interviewQabeginnerQuestionsbeginnerQ6Lesson from '../courses/interview-qa/01-beginner-questions/beginner-q6.json';
import interviewQaintermediateQuestionscsharpI03Lesson from '../courses/interview-qa/02-intermediate-questions/csharp-i03.json';
import interviewQaadvancedQuestionssqlA01Lesson from '../courses/interview-qa/03-advanced-questions/sql-a01.json';
import interviewQascenarioBasedscenarioQ25Lesson from '../courses/interview-qa/04-scenario-based/scenario-q25.json';
import interviewQasystemDesignsdB01Lesson from '../courses/interview-qa/05-system-design/sd-b01.json';
import sqlServerqueryingDatalikeOperatorLesson from '../courses/sql-server/02-querying-data/09-like-operator.json';
import sqlServergroupingAggregationSubqueriescorrelatedSubqueryLesson from '../courses/sql-server/05-grouping-aggregation-subqueries/09-correlated-subquery.json';
import sqlServerdataModificationDmlselectIntoLesson from '../courses/sql-server/06-data-modification-dml/09-select-into.json';
import sqlServerdatabaseSchemaTableObjectsalterSchemaLesson from '../courses/sql-server/07-database-schema-table-objects/09-alter-schema.json';
import sqlServerdataTypestimeDataTypeLesson from '../courses/sql-server/08-data-types/09-time-data-type.json';
import sqlServerindexesenableIndexesLesson from '../courses/sql-server/10-indexes/09-enable-indexes.json';
import sqlServerstoredProceduresFunctionsdropFunctionLesson from '../courses/sql-server/12-stored-procedures-functions/09-drop-function.json';
import sqlServertriggersviewTriggerDefinitionLesson from '../courses/sql-server/13-triggers/09-view-trigger-definition.json';
import sqlServertransactionsErrorHandlingBackuptransactionLogBackupLesson from '../courses/sql-server/14-transactions-error-handling-backup/09-transaction-log-backup.json';
import sqlServeradvancedTopicswhileLoopLesson from '../courses/sql-server/15-advanced-topics/09-while-loop.json';
import aspnetCoreauthenticationIdentityworkWithRolesAspnetCoreIdentityLesson from '../courses/aspnet-core/08-authentication-identity/work-with-roles-aspnet-core-identity.json';
import interviewQabeginnerQuestionsbeginnerQ7Lesson from '../courses/interview-qa/01-beginner-questions/beginner-q7.json';
import interviewQaintermediateQuestionscsharpI04Lesson from '../courses/interview-qa/02-intermediate-questions/csharp-i04.json';
import interviewQaadvancedQuestionsjsA01Lesson from '../courses/interview-qa/03-advanced-questions/js-a01.json';
import interviewQascenarioBasedbehB01Lesson from '../courses/interview-qa/04-scenario-based/beh-b01.json';
import sqlServerqueryingDatanullThreeValuedLogicLesson from '../courses/sql-server/02-querying-data/10-null-three-valued-logic.json';
import sqlServergroupingAggregationSubqueriessubqueryLesson from '../courses/sql-server/05-grouping-aggregation-subqueries/10-subquery.json';
import sqlServerdatabaseSchemaTableObjectscreateSchemaLesson from '../courses/sql-server/07-database-schema-table-objects/10-create-schema.json';
import sqlServerdataTypesdecimalDataTypeLesson from '../courses/sql-server/08-data-types/10-decimal-data-type.json';
import sqlServerindexesrenameIndexLesson from '../courses/sql-server/10-indexes/10-rename-index.json';
import sqlServertransactionsErrorHandlingBackuprecoveryModelLesson from '../courses/sql-server/14-transactions-error-handling-backup/10-recovery-model.json';
import sqlServeradvancedTopicsbreakStatementLesson from '../courses/sql-server/15-advanced-topics/10-break-statement.json';
import aspnetCoreauthenticationIdentityusernameEmailPasswordPolicyAspnetCoreIdentityLesson from '../courses/aspnet-core/08-authentication-identity/username-email-password-policy-aspnet-core-identity.json';
import interviewQabeginnerQuestionsbeginnerQ8Lesson from '../courses/interview-qa/01-beginner-questions/beginner-q8.json';
import interviewQaintermediateQuestionscsharpI05Lesson from '../courses/interview-qa/02-intermediate-questions/csharp-i05.json';
import interviewQaadvancedQuestionssqlA02Lesson from '../courses/interview-qa/03-advanced-questions/sql-a02.json';
import sqlServerqueryingDataorderByClauseLesson from '../courses/sql-server/02-querying-data/11-order-by-clause.json';
import sqlServergroupingAggregationSubqueriesanyOperatorLesson from '../courses/sql-server/05-grouping-aggregation-subqueries/11-any-operator.json';
import sqlServerdatabaseSchemaTableObjectsdropSchemaLesson from '../courses/sql-server/07-database-schema-table-objects/11-drop-schema.json';
import sqlServerdataTypesbitDataTypeLesson from '../courses/sql-server/08-data-types/11-bit-data-type.json';
import sqlServerindexesdropIndexLesson from '../courses/sql-server/10-indexes/11-drop-index.json';
import sqlServertransactionsErrorHandlingBackupdatabaseSnapshotLesson from '../courses/sql-server/14-transactions-error-handling-backup/11-database-snapshot.json';
import sqlServeradvancedTopicscontinueStatementLesson from '../courses/sql-server/15-advanced-topics/11-continue-statement.json';
import interviewQabeginnerQuestionsbeginnerQ9Lesson from '../courses/interview-qa/01-beginner-questions/beginner-q9.json';
import interviewQaintermediateQuestionsaspnetI01Lesson from '../courses/interview-qa/02-intermediate-questions/aspnet-i01.json';
import interviewQaadvancedQuestionsoopA01Lesson from '../courses/interview-qa/03-advanced-questions/oop-a01.json';
import sqlServerqueryingDataoffsetAndFetchLesson from '../courses/sql-server/02-querying-data/12-offset-and-fetch.json';
import sqlServergroupingAggregationSubqueriesexistsOperatorLesson from '../courses/sql-server/05-grouping-aggregation-subqueries/12-exists-operator.json';
import sqlServerdatabaseSchemaTableObjectssystemDatabasesLesson from '../courses/sql-server/07-database-schema-table-objects/12-system-databases.json';
import sqlServerdataTypesdatetimeoffsetDataTypeLesson from '../courses/sql-server/08-data-types/12-datetimeoffset-data-type.json';
import interviewQabeginnerQuestionsbeginnerQ10Lesson from '../courses/interview-qa/01-beginner-questions/beginner-q10.json';
import interviewQaintermediateQuestionsjsI01Lesson from '../courses/interview-qa/02-intermediate-questions/js-i01.json';
import interviewQaadvancedQuestionsreactA01Lesson from '../courses/interview-qa/03-advanced-questions/react-a01.json';
import sqlServergroupingAggregationSubqueriesallOperatorLesson from '../courses/sql-server/05-grouping-aggregation-subqueries/13-all-operator.json';
import sqlServerdatabaseSchemaTableObjectspartitionExistingTableLesson from '../courses/sql-server/07-database-schema-table-objects/13-partition-existing-table.json';
import interviewQabeginnerQuestionsbeginnerQ11Lesson from '../courses/interview-qa/01-beginner-questions/beginner-q11.json';
import interviewQaintermediateQuestionsreactI01Lesson from '../courses/interview-qa/02-intermediate-questions/react-i01.json';
import interviewQaadvancedQuestionscsharpA03Lesson from '../courses/interview-qa/03-advanced-questions/csharp-a03.json';
import sqlServerdatabaseSchemaTableObjectstablePartitioningLesson from '../courses/sql-server/07-database-schema-table-objects/14-table-partitioning.json';
import interviewQabeginnerQuestionsbeginnerQ12Lesson from '../courses/interview-qa/01-beginner-questions/beginner-q12.json';
import interviewQaintermediateQuestionssqlI01Lesson from '../courses/interview-qa/02-intermediate-questions/sql-i01.json';
import interviewQaadvancedQuestionsjsA02Lesson from '../courses/interview-qa/03-advanced-questions/js-a02.json';
import sqlServerdatabaseSchemaTableObjectssequenceLesson from '../courses/sql-server/07-database-schema-table-objects/15-sequence.json';
import interviewQabeginnerQuestionsbeginnerQ13Lesson from '../courses/interview-qa/01-beginner-questions/beginner-q13.json';
import interviewQaintermediateQuestionsjsI02Lesson from '../courses/interview-qa/02-intermediate-questions/js-i02.json';
import sqlServerdatabaseSchemaTableObjectsidentityColumnLesson from '../courses/sql-server/07-database-schema-table-objects/16-identity-column.json';
import interviewQabeginnerQuestionsbeginnerQ14Lesson from '../courses/interview-qa/01-beginner-questions/beginner-q14.json';
import interviewQaintermediateQuestionsreactI02Lesson from '../courses/interview-qa/02-intermediate-questions/react-i02.json';
import sqlServerdatabaseSchemaTableObjectssynonymLesson from '../courses/sql-server/07-database-schema-table-objects/17-synonym.json';
import interviewQabeginnerQuestionsbeginnerQ15Lesson from '../courses/interview-qa/01-beginner-questions/beginner-q15.json';
import interviewQaintermediateQuestionsoopI01Lesson from '../courses/interview-qa/02-intermediate-questions/oop-i01.json';
import sqlServerdatabaseSchemaTableObjectssynonymUltimateGuideLesson from '../courses/sql-server/07-database-schema-table-objects/18-synonym-ultimate-guide.json';
import interviewQabeginnerQuestionsbeginnerQ16Lesson from '../courses/interview-qa/01-beginner-questions/beginner-q16.json';
import interviewQaintermediateQuestionssqlI02Lesson from '../courses/interview-qa/02-intermediate-questions/sql-i02.json';
import sqlServerdatabaseSchemaTableObjectsgrantLesson from '../courses/sql-server/07-database-schema-table-objects/19-grant.json';
import interviewQabeginnerQuestionsbeginnerQ17Lesson from '../courses/interview-qa/01-beginner-questions/beginner-q17.json';
import interviewQaintermediateQuestionsoopI02Lesson from '../courses/interview-qa/02-intermediate-questions/oop-i02.json';
import sqlServerdatabaseSchemaTableObjectscomputedColumnsLesson from '../courses/sql-server/07-database-schema-table-objects/20-computed-columns.json';
import interviewQabeginnerQuestionsbeginnerQ18Lesson from '../courses/interview-qa/01-beginner-questions/beginner-q18.json';
import interviewQaintermediateQuestionscsharpI06Lesson from '../courses/interview-qa/02-intermediate-questions/csharp-i06.json';
import interviewQabeginnerQuestionsbeginnerQ19Lesson from '../courses/interview-qa/01-beginner-questions/beginner-q19.json';
import interviewQaintermediateQuestionsaspnetI02Lesson from '../courses/interview-qa/02-intermediate-questions/aspnet-i02.json';
import interviewQabeginnerQuestionsbeginnerQ20Lesson from '../courses/interview-qa/01-beginner-questions/beginner-q20.json';
import interviewQaintermediateQuestionsgenI01Lesson from '../courses/interview-qa/02-intermediate-questions/gen-i01.json';
import interviewQabeginnerQuestionsbeginnerQ21Lesson from '../courses/interview-qa/01-beginner-questions/beginner-q21.json';
import interviewQaintermediateQuestionsjsI03Lesson from '../courses/interview-qa/02-intermediate-questions/js-i03.json';
import interviewQabeginnerQuestionsaspnetB01Lesson from '../courses/interview-qa/01-beginner-questions/aspnet-b01.json';
import interviewQaintermediateQuestionsjsI04Lesson from '../courses/interview-qa/02-intermediate-questions/js-i04.json';
import interviewQabeginnerQuestionsaspnetB02Lesson from '../courses/interview-qa/01-beginner-questions/aspnet-b02.json';
import interviewQaintermediateQuestionssqlI03Lesson from '../courses/interview-qa/02-intermediate-questions/sql-i03.json';
import interviewQabeginnerQuestionsjsB01Lesson from '../courses/interview-qa/01-beginner-questions/js-b01.json';
import interviewQaintermediateQuestionsjsI05Lesson from '../courses/interview-qa/02-intermediate-questions/js-i05.json';
import interviewQabeginnerQuestionsjsB02Lesson from '../courses/interview-qa/01-beginner-questions/js-b02.json';
import interviewQaintermediateQuestionsreactI03Lesson from '../courses/interview-qa/02-intermediate-questions/react-i03.json';
import interviewQabeginnerQuestionsreactB01Lesson from '../courses/interview-qa/01-beginner-questions/react-b01.json';
import interviewQabeginnerQuestionsreactB02Lesson from '../courses/interview-qa/01-beginner-questions/react-b02.json';
import interviewQabeginnerQuestionsoopB01Lesson from '../courses/interview-qa/01-beginner-questions/oop-b01.json';
import interviewQabeginnerQuestionssqlB01Lesson from '../courses/interview-qa/01-beginner-questions/sql-b01.json';
import interviewQabeginnerQuestionssqlB02Lesson from '../courses/interview-qa/01-beginner-questions/sql-b02.json';
import interviewQabeginnerQuestionssqlB03Lesson from '../courses/interview-qa/01-beginner-questions/sql-b03.json';

const rawLessons = [
  sqlServergettingStartedwhatIsSqlServerLesson,
  sqlServerqueryingDataselectStatementLesson,
  sqlServerjoinsvisualizationExplanationOfJoinsLesson,
  sqlServersetOperationsunionUltimateGuideLesson,
  sqlServergroupingAggregationSubqueriesgroupByLesson,
  sqlServerdataModificationDmlinsertAddRowLesson,
  sqlServerdatabaseSchemaTableObjectscreateDatabaseLesson,
  sqlServerdataTypesdataTypesOverviewLesson,
  sqlServerconstraintscheckConstraintLesson,
  sqlServerindexesindexesOverviewLesson,
  sqlServerviewsviewsIntroductionLesson,
  sqlServerstoredProceduresFunctionsstoredProceduresBasicsLesson,
  sqlServertriggerstriggersTutorialLesson,
  sqlServertransactionsErrorHandlingBackuptransactionLesson,
  sqlServeradvancedTopicscursorLesson,
  sqlServerperformanceTuningexecutionPlansLesson,
  sqlServersecurityHardeningauthenticationModesLesson,
  sqlServerhighAvailabilityDralwaysOnAvailabilityGroupsLesson,
  sqlServerdataWarehousingstarSnowflakeSchemaLesson,
  sqlServerazureSqlazureSqlDatabaseLesson,
  sqlServermodernDataToolssqlServerIntegrationServicesLesson,
  aspnetCoregettingStartedAspnetCoreMvcfirstAspnetCore100MvcApplicationLesson,
  aspnetCorecontrollersRoutingactionsInAspnetCoreLesson,
  aspnetCoremodelBindingValidationadvancedModelBindingConceptsLesson,
  aspnetCoreviewsTagHelpersbuiltInTagHelpersLesson,
  aspnetCoredependencyInjectionConfigurationaspnetCoreConfigurationsProgramMiddlewareAppsettingsLesson,
  aspnetCorefiltersaspnetCoreFiltersDependencyInjectionGlobalFiltersLesson,
  aspnetCorewebApicallWebApiJavascriptXmlhttprequestLesson,
  aspnetCoreauthenticationIdentitycreateReadUpdateDeleteUsersAspnetCoreIdentityLesson,
  aspnetCorelocalizationGlobalizationglobalizationLocalizationResourceFilesLesson,
  aspnetCoreadoNetDataAccesslearnAdoNetCrudOperationsAspnetCoreLesson,
  aspnetCorecorsCrossOriginenableCorsAspnetCoreLesson,
  linqgettingStartedLinqwhatIsLinqLesson,
  linqlinqFundamentalsSyntaxlinqQuerySyntaxLesson,
  linqfilteringProjectionfilteringOperatorWhereLesson,
  linqsortingGroupingorderbyOrderbydescendingLesson,
  linqjoiningDatajoinOperatorLesson,
  linqsetOperationsdistinctSetOperatorLesson,
  linqaggregationOperatorsaggregationCountLesson,
  linqquantifiersElementOperatorsquantifierOperatorsLesson,
  linqpartitioningOperatorsskipSkipwhileLesson,
  linqconversionGenerationOperatorsconversionOperatorsLesson,
  linqadvancedLinqConceptsexpressionTreesLesson,
  efCoregettingStartedEfCoreentityFrameworkCoreTutorialsLesson,
  efCoredbcontextConfigurationdbcontextInEntityFrameworkCoreLesson,
  efCoreconventionsRelationshipsentityFrameworkCoreConventionsLesson,
  efCoredataOperationsConnectedentityFrameworkCoreSavingDataConnectedLesson,
  efCoredataOperationsDisconnectedinsertDataDisconnectedScenarioLesson,
  efCorechangeTrackingtrackingChangesOfEntitiesLesson,
  efCorequeryingqueryingInEntityFrameworkCoreLesson,
  efCoreinheritanceStrategiesinheritanceStrategyInEfCoreLesson,
  efCoremigrationsmigrationsInEntityFrameworkCoreLesson,
  efCoreadvancedFeaturesentityFrameworkCoreInterceptorsLesson,
  efCoredatabaseFirstDiagnosticsentityFrameworkCoreWithExistingDatabaseLesson,
  efCoreperformanceBulkOperationsentityFrameworkExtensionsPerformanceLesson,
  reactFundamentalsgettingStartedwhatIsReactLesson,
  reactFundamentalscomponentsPropsfunctionalComponentsLesson,
  reactFundamentalsstateEventsuseStateHookLesson,
  reactFundamentalsformsInputformValidationLesson,
  reactFundamentalslifecycleEffectsuseeffectBasicsLesson,
  reactFundamentalscontextRefsreactContextLesson,
  reactFundamentalsreactRouterroutingBasicsReactFundamentalsLesson,
  reactFundamentalsstylingcssModulesLesson,
  reactAdvancedPatternsrenderPropsrenderPropsBasicsLesson,
  reactAdvancedPatternshigherOrderComponentshocBasicsLesson,
  reactAdvancedPatternscompoundComponentscompoundBasicsLesson,
  reactAdvancedPatternsstateReducersstateReducerBasicsLesson,
  reactAdvancedPatternscontrolPropscontrolPropsBasicsLesson,
  reactAdvancedPatternsperformancePatternsmemoizationBasicsLesson,
  reactAdvancedPatternscustomHooksArchitecturehookCompositionPatternsLesson,
  reactAdvancedPatternsstateMachinesXstatefiniteStateMachinesLesson,
  reactAdvancedPatternscomponentCompositionStrategiesslotPatternLesson,
  reactAdvancedPatternsadvancedHookPatternsreducerHooksPatternsLesson,
  typescriptForReacttypescriptBasicswhatIsTypescriptLesson,
  typescriptForReacttypesInReacttypingComponentsLesson,
  typescriptForReacttypingHookstypingUseeffectLesson,
  typescriptForReactadvancedTypesgenericsBasicsLesson,
  typescriptForReactgenericComponentsgenericListLesson,
  typescriptForReactreactPatternstypeSafeContextLesson,
  typescriptForReacttestingBestPracticestestingTypescriptReactLesson,
  reduxreduxFundamentalswhatIsReduxLesson,
  reduxreduxToolkitconfigureStoreLesson,
  reduxreactReduxproviderLesson,
  reduxreduxMiddlewaremiddlewareBasicsReduxLesson,
  reduxreduxPatternsnormalizingStateLesson,
  reduxreduxTestingtestingReducersLesson,
  reduxreduxAdvancedConceptscustomHooksLesson,
  reduxreduxRealWorldprojectStructureLesson,
  reactQueryqueryBasicswhatIsReactQueryLesson,
  reactQueryqueryHooksqueryOptionsReactQueryLesson,
  reactQuerymutationsuseMutationLesson,
  reactQueryadvancedFeaturessuspenseLesson,
  reactQuerycachingStrategiescacheConfigurationLesson,
  reactQueryofflineSupportPersistencepersistenceBasicsLesson,
  reactQueryprefetchingSsrprefetchingStrategiesLesson,
  reactQueryperformanceOptimizationselectiveFetchingLesson,
  reactQueryrealWorldPatternsauthFlowsTokenRefreshLesson,
  apolloapolloBasicswhatIsApolloLesson,
  apolloqueriesMutationsqueryOptionsLesson,
  apollocachingcacheBasicsLesson,
  apolloadvancedPatternssubscriptionsLesson,
  apolloclientSideCachingAdvancedcacheConfigurationLesson,
  apolloerrorHandlingOptimisticerrorHandlingBasicsLesson,
  apollosubscriptionsRealtimesubscriptionsBasicsLesson,
  apollolocalStateManagementreactiveVariablesLesson,
  apollossrNextjsPerformancenextjsIntegrationLesson,
  cleanCodeCsharpsolidPrinciplessingleResponsibilityLesson,
  cleanCodeCsharpcreationalPatternssingletonPatternLesson,
  cleanCodeCsharpstructuralPatternsadapterPatternLesson,
  cleanCodeCsharpbehavioralPatternsobserverPatternLesson,
  cleanCodeCsharpcleanCodePracticesmeaningfulNamesLesson,
  cleanCodeCsharparchitecturePatternsrepositoryPatternLesson,
  csharpFundamentalsgettingStartedwhatIsCsharpLesson,
  csharpFundamentalsvariablesTypesvariablesLesson,
  csharpFundamentalscontrolFlowconditionalsLesson,
  csharpFundamentalsoopclassesObjectsLesson,
  csharpFundamentalsadvancedFeaturescollectionsLesson,
  csharpFundamentalserrorHandlingerrorHandlingLesson,
  csharpFundamentalsmodernCsharpfileIoLesson,
  unitTestingDotnettestingFundamentalswhyUnitTestingLesson,
  unitTestingDotnetxunitBasicsgettingStartedXunitLesson,
  unitTestingDotnetmockingFakesmockingBasicsLesson,
  unitTestingDotnetintegrationTestingintegrationTestingBasicsLesson,
  unitTestingDotnettddtddIntroLesson,
  unitTestingDotnettestingPatternstestDataBuildersLesson,
  unitTestingDotnetcodeCoveragecoverageMetricsLesson,
  aspnetCoreWebApigettingStartedwhatIsWebApiLesson,
  aspnetCoreWebApicontrollersRoutingroutingBasicsLesson,
  aspnetCoreWebApimodelBindingmodelBindingBasicsLesson,
  aspnetCoreWebApimiddlewaremiddlewareBasicsLesson,
  aspnetCoreWebApidependencyInjectiondiBasicsLesson,
  aspnetCoreWebApierrorHandlingValidationvalidationBasicsLesson,
  aspnetCoreWebApiauthenticationBasicsauthOverviewLesson,
  aspnetCoreWebApiloggingConfigurationloggingBasicsLesson,
  reactTestingtestingFundamentalswhyTestReactLesson,
  reactTestingjestBasicsgettingStartedJestLesson,
  reactTestingreactTestingLibraryrtlIntroLesson,
  reactTestingcomponentTestingtestingFormsLesson,
  reactTestinge2eTestingcypressIntroLesson,
  reactTestingadvancedTestingPatternsmockServiceWorkerLesson,
  reactTestingtestingReactQuerytestingMutationsLesson,
  authenticationAuthorizationauthBasicsauthOverviewLesson,
  authenticationAuthorizationjwtjwtOverviewLesson,
  authenticationAuthorizationidentityidentityOverviewLesson,
  authenticationAuthorizationoauthoauthOverviewLesson,
  authenticationAuthorizationoauth2FlowsDeepDiveauthorizationCodeFlowLesson,
  authenticationAuthorizationadvancedAuthorizationroleBasedAuthorizationLesson,
  authenticationAuthorizationrefreshTokenStrategiesrefreshTokenBasicsLesson,
  authenticationAuthorizationssoIdentityProvidersssoFundamentalsLesson,
  authenticationAuthorizationsecurityBestPracticespasswordlessAuthenticationLesson,
  oopsConceptsoopFundamentalswhatIsOopLesson,
  oopsConceptsencapsulationDataHidingencapsulationBasicsLesson,
  oopsConceptsinheritanceinheritanceBasicsLesson,
  oopsConceptspolymorphismpolymorphismBasicsLesson,
  oopsConceptsabstractionabstractionBasicsLesson,
  oopsConceptsinterfacesAbstractClassesinterfaceBasicsLesson,
  oopsConceptsdesignPrinciplessolidPrinciplesLesson,
  interviewQabeginnerQuestionscsharpB01Lesson,
  interviewQaintermediateQuestionsintermediateQ1Lesson,
  interviewQaadvancedQuestionsadvancedQ1Lesson,
  interviewQascenarioBasedscenarioQ1Lesson,
  interviewQasystemDesignsystemQ1Lesson,
  interviewQarapidFirerapidQ1Lesson,
  interviewQainterviewTrapstrapQ1Lesson,
  interviewQaperformanceOptimizationperfQ1Lesson,
  interviewQacicdPipelinescicdQ1Lesson,
  graphqlDotnetgettingStartedintroductionToGraphqlLesson,
  graphqlDotnetschemaTypesschemaBasicsLesson,
  graphqlDotnetqueriesMutationsqueryBasicsLesson,
  graphqlDotnetfilteringPaginationfilteringBasicsLesson,
  graphqlDotnetauthenticationauthBasicsLesson,
  graphqlDotnetperformancedataloaderLesson,
  graphqlDotneterrorHandlingerrorHandlingBasicsLesson,
  designPatternscreationalPatternssingletonPatternDesignPatternsLesson,
  designPatternsstructuralPatternsadapterPatternDesignPatternsLesson,
  designPatternsbehavioralPatternsobserverPatternDesignPatternsLesson,
  designPatternsenterprisePatternsrepositoryPatternDesignPatternsLesson,
  designPatternsconcurrencyPatternsproducerConsumerPatternDesignPatternsLesson,
  designPatternsarchitecturalPatternsmvcPatternDesignPatternsLesson,
  fullstackSecuritycorsConfigurationunderstandingCorsLesson,
  fullstackSecurityjwtAuthenticationjwtBasicsLesson,
  fullstackSecurityxssCsrfProtectionunderstandingXssCsrfLesson,
  fullstackSecurityapiSecurityRateLimitingapiSecurityFundamentalsLesson,
  fullstackSecuritysecureApiDesignapiDesignPrinciplesLesson,
  fullstackSecuritydependencySecuritydependencyScanningLesson,
  fullstackSecurityenvironmentSecretsenvironmentConfigurationLesson,
  fullstackSecuritysecurityTestingsecurityTestingFundamentalsLesson,
  sqlServergettingStartedbasicsLesson,
  sqlServerqueryingDataselectDistinctLesson,
  sqlServerjoinsinnerJoinLesson,
  sqlServersetOperationsexceptLesson,
  sqlServergroupingAggregationSubquerieshavingClauseLesson,
  sqlServerdataModificationDmlinsertIntoSelectLesson,
  sqlServerdatabaseSchemaTableObjectsdropDatabaseLesson,
  sqlServerdataTypescharDataTypeLesson,
  sqlServerconstraintsforeignKeyConstraintLesson,
  sqlServerindexesclusteredIndexesLesson,
  sqlServerviewscreateViewLesson,
  sqlServerstoredProceduresFunctionsstoredProceduresTutorialLesson,
  sqlServertriggerscreateTriggerLesson,
  sqlServertransactionsErrorHandlingBackupbeginEndStatementLesson,
  sqlServeradvancedTopicstemporaryTablesLesson,
  sqlServerperformanceTuningqueryOptimizationLesson,
  sqlServersecurityHardeningprincipalsUsersRolesLesson,
  sqlServerhighAvailabilityDrdatabaseMirroringLesson,
  sqlServerdataWarehousingdataWarehouseFundamentalsLesson,
  sqlServerazureSqlazureSqlManagedInstanceLesson,
  aspnetCoregettingStartedAspnetCoreMvcfirstCrudApplicationAspnetCoreMvcLesson,
  aspnetCorecontrollersRoutingcontrollersInAspnetCoreLesson,
  aspnetCoremodelBindingValidationmodelBindingAspnetCoreBeginnerAdvancedLesson,
  aspnetCoreviewsTagHelperscustomTagHelperLesson,
  aspnetCoredependencyInjectionConfigurationdependencyInjectionAspnetCoreLesson,
  aspnetCorefiltersfiltersAspnetCoreBeginnerExpertLesson,
  aspnetCorewebApicallWebApiJqueryAspnetCoreLesson,
  aspnetCoreauthenticationIdentityimplementCookieAuthenticationAspnetCoreLesson,
  aspnetCorelocalizationGlobalizationlocalizationPortableObjectPoFilesLesson,
  linqgettingStartedLinqwhyLinqLesson,
  linqlinqFundamentalsSyntaxlinqMethodSyntaxLesson,
  linqfilteringProjectionoftypeFilteringOperatorLesson,
  linqsortingGroupingthenbyThenbydescendingLesson,
  linqjoiningDatagroupjoinOperatorLesson,
  linqsetOperationsexceptSetOperatorLesson,
  linqaggregationOperatorsaggregationSumLesson,
  linqquantifiersElementOperatorscontainsQuantifierOperatorLesson,
  linqpartitioningOperatorstakeTakewhileLesson,
  linqconversionGenerationOperatorsgenerationOperatorsLesson,
  linqadvancedLinqConceptssequenceequalOperatorLesson,
  efCoregettingStartedEfCoregettingStartedEfCoreLesson,
  efCoredbcontextConfigurationconfigurationsInEntityFrameworkCoreLesson,
  efCoreconventionsRelationshipsoneToManyRelationshipsConventionsLesson,
  efCoredataOperationsConnecteddataOperationsConnectedLesson,
  efCoredataOperationsDisconnectedupdateDataDisconnectedScenarioLesson,
  efCorechangeTrackingentityFrameworkCoreChangeTrackingLesson,
  efCorequeryingexecuteRawSqlQueriesLesson,
  efCoreinheritanceStrategiesefCoreTablePerHierarchyTphLesson,
  efCoremigrationsefCoreMigrationsUsingCliLesson,
  efCoreadvancedFeaturesshadowPropertyInEntityFrameworkCoreLesson,
  efCoredatabaseFirstDiagnosticsloggingInEntityFrameworkCoreLesson,
  efCoreperformanceBulkOperationsbestWaysBulkInsertsEntityFrameworkLesson,
  reactFundamentalsgettingStartedsettingUpEnvironmentLesson,
  reactFundamentalscomponentsPropspropsBasicsLesson,
  reactFundamentalsstateEventshandlingEventsLesson,
  reactFundamentalsformsInputformSubmissionLesson,
  reactFundamentalslifecycleEffectscleanupFunctionsLesson,
  reactFundamentalscontextRefsusecontextHookLesson,
  reactFundamentalsreactRouternestedRoutesLesson,
  reactFundamentalsstylingstyledComponentsLesson,
  reactAdvancedPatternsrenderPropsrenderPropsExamplesLesson,
  reactAdvancedPatternshigherOrderComponentshocExamplesLesson,
  reactAdvancedPatternscompoundComponentscompoundExamplesLesson,
  reactAdvancedPatternsstateReducersstateReducerExamplesLesson,
  reactAdvancedPatternscontrolPropscontrolPropsExamplesLesson,
  reactAdvancedPatternsperformancePatternscodeSplittingLazyLesson,
  reactAdvancedPatternscustomHooksArchitecturestateSharingBetweenHooksLesson,
  reactAdvancedPatternsstateMachinesXstatexstateFundamentalsLesson,
  reactAdvancedPatternscomponentCompositionStrategiesheadlessComponentsLesson,
  reactAdvancedPatternsadvancedHookPatternsimperativeHandlePatternsLesson,
  typescriptForReacttypescriptBasicsbasicTypesLesson,
  typescriptForReacttypesInReacttypingPropsLesson,
  typescriptForReacttypingHookstypingUserefLesson,
  typescriptForReactadvancedTypesutilityTypesLesson,
  typescriptForReactgenericComponentsgenericFormLesson,
  typescriptForReactreactPatternstypedReactQueryLesson,
  typescriptForReacttestingBestPracticestypeNarrowingLesson,
  reduxreduxFundamentalsstoreActionsReducersLesson,
  reduxreduxToolkitcreateSliceLesson,
  reduxreactReduxuseSelectorLesson,
  reduxreduxMiddlewarereduxThunkLesson,
  reduxreduxPatternsentityAdapterLesson,
  reduxreduxTestingtestingComponentsLesson,
  reduxreduxAdvancedConceptsstoreInitializationLesson,
  reduxreduxRealWorldauthenticationFlowLesson,
  reactQueryqueryBasicssetupLesson,
  reactQueryqueryHookspaginationLesson,
  reactQuerymutationsoptimisticUpdatesLesson,
  reactQueryadvancedFeaturesqueryCancellationLesson,
  reactQuerycachingStrategiesstaleTimeGcLesson,
  reactQueryofflineSupportPersistenceindexeddbPersistenceLesson,
  reactQueryprefetchingSsrssrIntegrationNextjsLesson,
  reactQueryperformanceOptimizationwindowingLargeListsLesson,
  reactQueryrealWorldPatternsformIntegrationLesson,
  apolloapolloBasicssetupClientLesson,
  apolloqueriesMutationsuseMutationHookLesson,
  apollocachingcacheUpdatesLesson,
  apolloadvancedPatternserrorHandlingLesson,
  apolloclientSideCachingAdvancedtypePoliciesFieldPoliciesLesson,
  apolloerrorHandlingOptimisticerrorPoliciesLesson,
  apollosubscriptionsRealtimewebsocketSetupLesson,
  apollolocalStateManagementlocalOnlyFieldsLesson,
  apollossrNextjsPerformancessrWithApolloLesson,
  cleanCodeCsharpsolidPrinciplesopenClosedLesson,
  cleanCodeCsharpcreationalPatternsfactoryPatternLesson,
  cleanCodeCsharpstructuralPatternsdecoratorPatternLesson,
  cleanCodeCsharpbehavioralPatternsstrategyPatternLesson,
  cleanCodeCsharpcleanCodePracticesfunctionsMethodsLesson,
  cleanCodeCsharparchitecturePatternscleanArchitectureLesson,
  csharpFundamentalsgettingStartedsettingUpLesson,
  csharpFundamentalsvariablesTypesvalueTypesLesson,
  csharpFundamentalscontrolFlowloopsLesson,
  csharpFundamentalsoopinheritanceLesson,
  csharpFundamentalsadvancedFeaturesgenericsLesson,
  csharpFundamentalserrorHandlingexceptionTypesLesson,
  csharpFundamentalsmodernCsharprecordsPatternsLesson,
  unitTestingDotnettestingFundamentalstestingPyramidLesson,
  unitTestingDotnetxunitBasicsassertionsLesson,
  unitTestingDotnetmockingFakesmoqFrameworkLesson,
  unitTestingDotnetintegrationTestingtestServerLesson,
  unitTestingDotnettddredGreenRefactorLesson,
  unitTestingDotnettestingPatternsassertionFrameworksLesson,
  unitTestingDotnetcodeCoveragecoverletCollectorLesson,
  aspnetCoreWebApigettingStartedcreatingProjectLesson,
  aspnetCoreWebApicontrollersRoutingattributeRoutingLesson,
  aspnetCoreWebApimodelBindingfromBodyLesson,
  aspnetCoreWebApimiddlewarebuiltInMiddlewareLesson,
  aspnetCoreWebApidependencyInjectionserviceLifetimesLesson,
  aspnetCoreWebApierrorHandlingValidationproblemDetailsLesson,
  aspnetCoreWebApiauthenticationBasicsjwtBasicsLesson,
  aspnetCoreWebApiloggingConfigurationstructuredLoggingLesson,
  reactTestingtestingFundamentalstestingTypesLesson,
  reactTestingjestBasicsmatchersAssertionsLesson,
  reactTestingreactTestingLibraryqueriesLesson,
  reactTestingcomponentTestingtestingRoutingLesson,
  reactTestinge2eTestingwritingE2eTestsLesson,
  reactTestingadvancedTestingPatternsrenderOptimizationLesson,
  reactTestingtestingReactQuerytestingCacheInvalidationLesson,
  authenticationAuthorizationauthBasicsauthenticationVsAuthorizationLesson,
  authenticationAuthorizationjwtcreatingJwtLesson,
  authenticationAuthorizationidentitysetupIdentityLesson,
  authenticationAuthorizationoauthexternalProvidersLesson,
  authenticationAuthorizationoauth2FlowsDeepDivepkceFlowLesson,
  authenticationAuthorizationadvancedAuthorizationclaimsBasedAuthorizationLesson,
  authenticationAuthorizationrefreshTokenStrategiestokenRotationLesson,
  authenticationAuthorizationssoIdentityProviderssaml2BasicsLesson,
  authenticationAuthorizationsecurityBestPracticesmultiFactorAuthenticationLesson,
  oopsConceptsoopFundamentalsclassesObjectsOopsConceptsLesson,
  oopsConceptsencapsulationDataHidingpropertiesLesson,
  oopsConceptsinheritancemethodOverridingLesson,
  oopsConceptspolymorphismcompileTimePolymorphismLesson,
  oopsConceptsabstractionabstractClassesLesson,
  oopsConceptsinterfacesAbstractClassesmultipleInterfacesLesson,
  oopsConceptsdesignPrinciplesdryPrincipleLesson,
  interviewQabeginnerQuestionscsharpB02Lesson,
  interviewQaintermediateQuestionsintermediateQ2Lesson,
  interviewQaadvancedQuestionsadvancedQ2Lesson,
  interviewQascenarioBasedscenarioQ2Lesson,
  interviewQasystemDesignsystemQ2Lesson,
  interviewQarapidFirerapidQ2Lesson,
  interviewQainterviewTrapstrapQ2Lesson,
  interviewQaperformanceOptimizationperfQ2Lesson,
  interviewQacicdPipelinescicdQ2Lesson,
  graphqlDotnetgettingStartedinstallingHotchocolateLesson,
  graphqlDotnetschemaTypestypeDefinitionsLesson,
  graphqlDotnetqueriesMutationsmutationBasicsLesson,
  graphqlDotnetfilteringPaginationpaginationBasicsLesson,
  graphqlDotnetauthenticationauthorizationLesson,
  graphqlDotnetperformancecachingLesson,
  graphqlDotneterrorHandlingcustomExceptionsLesson,
  designPatternscreationalPatternsfactoryPatternDesignPatternsLesson,
  designPatternsstructuralPatternsdecoratorPatternDesignPatternsLesson,
  designPatternsbehavioralPatternsstrategyPatternDesignPatternsLesson,
  designPatternsenterprisePatternsunitOfWorkLesson,
  designPatternsconcurrencyPatternsreaderWriterLocksDesignPatternsLesson,
  designPatternsarchitecturalPatternsmvvmPatternDesignPatternsLesson,
  fullstackSecuritycorsConfigurationcorsInAspnetCoreLesson,
  fullstackSecurityjwtAuthenticationjwtStorageOptionsLesson,
  fullstackSecurityxssCsrfProtectionxssPreventionTechniquesLesson,
  fullstackSecurityapiSecurityRateLimitingrateLimitingInAspnetLesson,
  fullstackSecuritysecureApiDesigninputValidationLesson,
  fullstackSecuritydependencySecuritynugetSecurityLesson,
  fullstackSecurityenvironmentSecretssecretsManagementLesson,
  fullstackSecuritysecurityTestingpenetrationTestingBasicsLesson,
  sqlServergettingStartedaliasesLesson,
  sqlServerqueryingDataselectTopLesson,
  sqlServerjoinsleftJoinLesson,
  sqlServersetOperationsintersectLesson,
  sqlServergroupingAggregationSubqueriescubeLesson,
  sqlServerdataModificationDmlinsertMultipleRowsLesson,
  sqlServerdatabaseSchemaTableObjectscreateTableLesson,
  sqlServerdataTypesvarcharDataTypeLesson,
  sqlServerconstraintsnotNullConstraintLesson,
  sqlServerindexescreateIndexLesson,
  sqlServerviewsdropViewLesson,
  sqlServerstoredProceduresFunctionsstoredProcedureParametersLesson,
  sqlServertriggersddlTriggersLesson,
  sqlServertransactionsErrorHandlingBackupifElseStatementLesson,
  sqlServeradvancedTopicstableVariablesLesson,
  sqlServerperformanceTuningstatisticsMaintenanceLesson,
  sqlServersecurityHardeningpermissionsGrantRevokeLesson,
  sqlServerhighAvailabilityDrbackupRestoreStrategiesLesson,
  aspnetCoregettingStartedAspnetCoreMvcintroductionToAspnetCoreMvcLesson,
  aspnetCorecontrollersRoutingaspnetCoreConventionBasedRoutingLesson,
  aspnetCoremodelBindingValidationmodelValidationAspnetCoreBeginnerExpertLesson,
  aspnetCoreviewsTagHelpersintroductionToTagHelpersLesson,
  aspnetCorewebApicallWebApiAspnetCoreNet10Lesson,
  aspnetCoreauthenticationIdentitysetupConfigureAspnetCoreIdentityLesson,
  aspnetCorelocalizationGlobalizationuseGlobalizationLocalizationAspnetCoreLesson,
  linqgettingStartedLinqlinqApiInNetLesson,
  linqlinqFundamentalsSyntaxanatomyOfLambdaExpressionLesson,
  linqfilteringProjectionprojectionOperatorsLesson,
  linqsortingGroupinggroupingOperatorGroupbyTolookupLesson,
  linqsetOperationsintersectSetOperatorLesson,
  linqaggregationOperatorsaggregationAverageLesson,
  linqquantifiersElementOperatorselementatElementatordefaultLesson,
  linqconversionGenerationOperatorsdefaultifemptyOperatorLesson,
  linqadvancedLinqConceptssampleLinqQueriesLesson,
  efCoregettingStartedEfCoreinstallEntityFrameworkCoreLesson,
  efCoredbcontextConfigurationdbcontextConfigurationLesson,
  efCoreconventionsRelationshipsconfigureOneToManyRelationshipsFluentApiLesson,
  efCoredataOperationsDisconnecteddeleteDataDisconnectedScenarioLesson,
  efCorechangeTrackingtrackgraphInEntityFrameworkCoreLesson,
  efCorequeryingexecuteDeleteInEntityFrameworkCoreLesson,
  efCoreinheritanceStrategiesefCoreTablePerTypeTptLesson,
  efCoremigrationspmcPowershellCommandsMigrationsLesson,
  efCoreadvancedFeaturesentityFrameworkCoreConcurrencyConflictsLesson,
  efCoredatabaseFirstDiagnosticsmanageDbConnectionStringLesson,
  efCoreperformanceBulkOperationsperformanceBulkOperationsLesson,
  reactFundamentalsgettingStartedjsxBasicsLesson,
  reactFundamentalscomponentsPropspropsAdvancedLesson,
  reactFundamentalsstateEventsstateBestPracticesLesson,
  reactFundamentalsformsInputmultiStepFormsLesson,
  reactFundamentalslifecycleEffectsfetchingDataLesson,
  reactFundamentalscontextRefsuserefHookLesson,
  reactFundamentalsreactRouterrouteParamsLesson,
  reactFundamentalsstylingtailwindCssLesson,
  reactAdvancedPatternsrenderPropsrenderPropsVsHooksLesson,
  reactAdvancedPatternshigherOrderComponentshocCompositionLesson,
  reactAdvancedPatternscompoundComponentscompoundWithContextLesson,
  reactAdvancedPatternsperformancePatternsvirtualizationLargeListsLesson,
  reactAdvancedPatternscustomHooksArchitecturehookErrorHandlingLesson,
  reactAdvancedPatternsstateMachinesXstatestatechartsAdvancedLesson,
  reactAdvancedPatternscomponentCompositionStrategiespolymorphicComponentsLesson,
  reactAdvancedPatternsadvancedHookPatternslayoutEffectPatternsLesson,
  typescriptForReacttypescriptBasicsinterfacesTypesLesson,
  typescriptForReacttypesInReacttypingStateLesson,
  typescriptForReacttypingHookscustomHooksTypesLesson,
  typescriptForReactadvancedTypestypeGuardsLesson,
  typescriptForReactgenericComponentspolymorphicComponentsLesson,
  typescriptForReactreactPatternstypedFormHandlersLesson,
  typescriptForReacttestingBestPracticestypeSafetyPatternsLesson,
  reduxreduxFundamentalsimmutabilityLesson,
  reduxreduxToolkitcreateAsyncThunkLesson,
  reduxreactReduxuseDispatchLesson,
  reduxreduxMiddlewarereduxSagaLesson,
  reduxreduxPatternsrtkQueryLesson,
  reduxreduxAdvancedConceptsperformanceOptimizationLesson,
  reduxreduxRealWorlderrorHandlingLesson,
  reactQueryqueryBasicsqueryClientLesson,
  reactQueryqueryHooksinfiniteQueriesLesson,
  reactQuerymutationsinvalidationLesson,
  reactQueryadvancedFeaturescustomHooksReactQueryLesson,
  reactQuerycachingStrategiescacheInvalidationLesson,
  reactQueryofflineSupportPersistencenetworkInterruptionHandlingLesson,
  reactQueryprefetchingSsrhydrationStrategiesLesson,
  reactQueryperformanceOptimizationmemoizationStrategiesLesson,
  reactQueryrealWorldPatternspollingRealTimeDataLesson,
  apolloapolloBasicsfirstQueryLesson,
  apolloqueriesMutationsrefetchingLesson,
  apollocachingpaginationCachingLesson,
  apolloadvancedPatternslocalStateLesson,
  apolloclientSideCachingAdvancedcustomCacheResolversLesson,
  apolloerrorHandlingOptimisticoptimisticResponsesLesson,
  apollosubscriptionsRealtimesubscriptionLifecycleLesson,
  apollolocalStateManagementclientSideResolversLesson,
  apollossrNextjsPerformancessgHydrationLesson,
  cleanCodeCsharpsolidPrinciplesliskovSubstitutionLesson,
  cleanCodeCsharpcreationalPatternsbuilderPatternLesson,
  cleanCodeCsharpstructuralPatternsfacadePatternLesson,
  cleanCodeCsharpbehavioralPatternscommandPatternLesson,
  cleanCodeCsharpcleanCodePracticeserrorHandlingCleanCodeCsharpLesson,
  cleanCodeCsharparchitecturePatternscqrsPatternLesson,
  csharpFundamentalsgettingStartedfirstProgramLesson,
  csharpFundamentalsvariablesTypesreferenceTypesLesson,
  csharpFundamentalscontrolFlowswitchStatementsLesson,
  csharpFundamentalsoopinterfacesLesson,
  csharpFundamentalsadvancedFeaturesasyncAwaitLesson,
  csharpFundamentalserrorHandlingtryCatchFinallyLesson,
  csharpFundamentalsmodernCsharpnullableTypesLesson,
  unitTestingDotnettestingFundamentalsarrangeActAssertLesson,
  unitTestingDotnetxunitBasicstestFixturesLesson,
  unitTestingDotnetmockingFakesstubsFakesLesson,
  unitTestingDotnetintegrationTestingdatabaseTestingLesson,
  unitTestingDotnettddtddPatternsLesson,
  unitTestingDotnettestingPatternsflakyTestsLesson,
  unitTestingDotnetcodeCoveragecoverageReportingLesson,
  aspnetCoreWebApigettingStartedprojectStructureLesson,
  aspnetCoreWebApicontrollersRoutingrouteConstraintsLesson,
  aspnetCoreWebApimodelBindingfromQueryLesson,
  aspnetCoreWebApimiddlewarecustomMiddlewareLesson,
  aspnetCoreWebApidependencyInjectioninjectingServicesLesson,
  aspnetCoreWebApierrorHandlingValidationglobalErrorHandlingLesson,
  aspnetCoreWebApiauthenticationBasicsauthorizationPoliciesLesson,
  aspnetCoreWebApiloggingConfigurationconfigurationOptionsLesson,
  reactTestingtestingFundamentalstestingPrinciplesLesson,
  reactTestingjestBasicsasyncTestingLesson,
  reactTestingreactTestingLibraryuserEventsLesson,
  reactTestingcomponentTestingtestingContextLesson,
  reactTestinge2eTestingcypressCommandsLesson,
  reactTestingadvancedTestingPatternsvisualRegressionLesson,
  authenticationAuthorizationauthBasicscookieAuthLesson,
  authenticationAuthorizationjwtvalidatingJwtLesson,
  authenticationAuthorizationidentityrolesAuthorizationLesson,
  authenticationAuthorizationoauthopenidConnectLesson,
  authenticationAuthorizationoauth2FlowsDeepDiveclientCredentialsFlowLesson,
  authenticationAuthorizationadvancedAuthorizationpolicyBasedAuthorizationLesson,
  authenticationAuthorizationrefreshTokenStrategiesslidingExpirationLesson,
  authenticationAuthorizationssoIdentityProvidersazureAdIntegrationLesson,
  authenticationAuthorizationsecurityBestPracticessessionManagementLesson,
  oopsConceptsoopFundamentalsconstructorsLesson,
  oopsConceptsencapsulationDataHidingautoPropertiesLesson,
  oopsConceptsinheritancesealedClassesLesson,
  oopsConceptspolymorphismruntimePolymorphismLesson,
  oopsConceptsabstractionabstractVsInterfaceLesson,
  oopsConceptsinterfacesAbstractClassesdefaultInterfaceMethodsLesson,
  interviewQabeginnerQuestionsbeginnerQ1Lesson,
  interviewQaintermediateQuestionsintermediateQ3Lesson,
  interviewQaadvancedQuestionsadvancedQ3Lesson,
  interviewQascenarioBasedscenarioQ3Lesson,
  interviewQasystemDesignsystemQ11Lesson,
  interviewQarapidFirerapidQ3Lesson,
  interviewQaperformanceOptimizationperfQ3Lesson,
  interviewQacicdPipelinescicdQ3Lesson,
  graphqlDotnetgettingStartedcreatingFirstGraphqlServerLesson,
  graphqlDotnetschemaTypesinputTypesLesson,
  graphqlDotnetqueriesMutationssubscriptionsGraphqlDotnetLesson,
  graphqlDotnetfilteringPaginationcomplexFiltersLesson,
  graphqlDotnetauthenticationjwtIntegrationLesson,
  graphqlDotnetperformancequeryComplexityLesson,
  designPatternscreationalPatternsbuilderPatternDesignPatternsLesson,
  designPatternsstructuralPatternsfacadePatternDesignPatternsLesson,
  designPatternsbehavioralPatternscommandPatternDesignPatternsLesson,
  designPatternsenterprisePatternsmediatorPatternLesson,
  designPatternsconcurrencyPatternsthreadPoolPatternDesignPatternsLesson,
  designPatternsarchitecturalPatternscleanArchitectureDesignPatternsLesson,
  fullstackSecuritycorsConfigurationcorsWithReactLesson,
  fullstackSecurityxssCsrfProtectioncsrfProtectionAspnetLesson,
  fullstackSecurityapiSecurityRateLimitingimplementingApiKeysLesson,
  fullstackSecuritysecureApiDesignoutputEncodingLesson,
  fullstackSecuritydependencySecuritynpmSecurityLesson,
  fullstackSecurityenvironmentSecretscredentialHandlingLesson,
  sqlServerqueryingDatawhereClauseLesson,
  sqlServerjoinsrightJoinLesson,
  sqlServergroupingAggregationSubqueriesrollupLesson,
  sqlServerdataModificationDmlupdateStatementLesson,
  sqlServerdatabaseSchemaTableObjectsalterTableAddColumnLesson,
  sqlServerdataTypesintDataTypesLesson,
  sqlServerconstraintsuniqueConstraintLesson,
  sqlServerindexesfilteredIndexesLesson,
  sqlServerviewsgetInformationAboutAViewLesson,
  sqlServerstoredProceduresFunctionsoutputParametersLesson,
  sqlServertriggersinsteadOfTriggerLesson,
  sqlServertransactionsErrorHandlingBackuptryCatchLesson,
  sqlServeradvancedTopicscaseExpressionLesson,
  sqlServerperformanceTuningdatabaseEngineTuningAdvisorLesson,
  sqlServersecurityHardeningencryptionTdeLesson,
  aspnetCoregettingStartedAspnetCoreMvclearnAspnetCoreExamplesCodesLesson,
  aspnetCoreviewsTagHelpersviewsInAspnetCoreLesson,
  aspnetCorewebApicreateWebApisAspnetCoreRestfulPatternLesson,
  aspnetCoreauthenticationIdentityaddCustomUserPropertiesAspnetCoreIdentityLesson,
  linqgettingStartedLinqlearnLinqStepByStepLesson,
  linqsetOperationsunionSetOperatorLesson,
  linqaggregationOperatorsaggregationMaxLesson,
  linqquantifiersElementOperatorsfirstFirstordefaultLesson,
  linqadvancedLinqConceptsstandardQueryOperatorsLesson,
  efCoregettingStartedEfCoreworkingWithDbcontextInEfCoreLesson,
  efCoredbcontextConfigurationfluentApiInEntityFrameworkCoreLesson,
  efCoreconventionsRelationshipsconventionsRelationshipsLesson,
  efCoredataOperationsDisconnectedworkingWithDisconnectedEntityGraphLesson,
  efCorechangeTrackingchangeTrackingLesson,
  efCorequeryingexecuteUpdateInEntityFrameworkCoreLesson,
  efCoreinheritanceStrategiesefCoreTablePerConcreteTypeTpcLesson,
  efCoremigrationsgenerateSqlScriptFromModelLesson,
  efCoreadvancedFeaturesworkingWithStoredProceduresLesson,
  efCoredatabaseFirstDiagnosticsdatabaseFirstDiagnosticsLesson,
  reactFundamentalsgettingStartedfirstReactAppLesson,
  reactFundamentalscomponentsPropscomposingComponentsLesson,
  reactFundamentalsstateEventscontrolledComponentsLesson,
  reactFundamentalsformsInputfileUploadsLesson,
  reactFundamentalslifecycleEffectscustomHooksLesson,
  reactFundamentalscontextRefsforwardingRefsLesson,
  reactFundamentalsreactRouternavigationLesson,
  reactFundamentalsstylinginlineStylesLesson,
  reactAdvancedPatternsperformancePatternsrenderOptimizationLesson,
  reactAdvancedPatternscustomHooksArchitecturebuildingHookLibrariesLesson,
  reactAdvancedPatternsstateMachinesXstateintegratingXstateReactLesson,
  reactAdvancedPatternscomponentCompositionStrategieslayoutCompositionLesson,
  reactAdvancedPatternsadvancedHookPatternscustomHookTestingLesson,
  typescriptForReacttypescriptBasicsfunctionsTypesLesson,
  typescriptForReacttypesInReacttypingEventsLesson,
  typescriptForReactreactPatternstypedRouterLesson,
  typescriptForReacttestingBestPracticesmigratingToTypescriptLesson,
  reduxreduxFundamentalsdevtoolsLesson,
  reduxreduxRealWorlddeploymentSetupLesson,
  reactQueryqueryBasicsfirstQueryReactQueryLesson,
  reactQueryqueryHooksdependentQueriesLesson,
  reactQuerycachingStrategiesbackgroundRefetchingLesson,
  reactQueryofflineSupportPersistencebackgroundSyncLesson,
  reactQueryprefetchingSsrprefetchPatternsLesson,
  reactQueryperformanceOptimizationprofilingDebuggingLesson,
  reactQueryrealWorldPatternsmigrationPatternsLesson,
  apolloapolloBasicsgraphqlBasicsLesson,
  apolloqueriesMutationspollingLesson,
  apolloclientSideCachingAdvancedcacheRedirectsLesson,
  apolloerrorHandlingOptimisticpartialDataErrorHandlingLesson,
  apollosubscriptionsRealtimerealTimePatternsLesson,
  apollolocalStateManagementstateCompositionLesson,
  apollossrNextjsPerformanceperformanceOptimizationLesson,
  cleanCodeCsharpsolidPrinciplesinterfaceSegregationLesson,
  cleanCodeCsharpcreationalPatternsprototypePatternLesson,
  cleanCodeCsharpstructuralPatternscompositePatternLesson,
  cleanCodeCsharpbehavioralPatternschainOfResponsibilityLesson,
  cleanCodeCsharpcleanCodePracticescodeOrganizationLesson,
  cleanCodeCsharparchitecturePatternsdependencyInjectionLesson,
  csharpFundamentalsgettingStartedunderstandingStructureLesson,
  csharpFundamentalsvariablesTypestypeConversionLesson,
  csharpFundamentalsoopencapsulationLesson,
  csharpFundamentalsadvancedFeatureslinqBasicsLesson,
  unitTestingDotnettestingFundamentalstestNamingConventionsLesson,
  unitTestingDotnetxunitBasicsdataDrivenTestsLesson,
  unitTestingDotnetmockingFakesverificationLesson,
  unitTestingDotnetintegrationTestingapiTestingLesson,
  unitTestingDotnettddtddAspnetCoreLesson,
  aspnetCoreWebApigettingStartedfirstEndpointLesson,
  reactTestingtestingFundamentalstestStructureLesson,
  reactTestingjestBasicsmockingJestLesson,
  reactTestingreactTestingLibrarytestingHooksLesson,
  reactTestingcomponentTestingtestingApiCallsLesson,
  reactTestinge2eTestingbestPracticesLesson,
  authenticationAuthorizationauthBasicssessionVsTokenLesson,
  authenticationAuthorizationjwtreactIntegrationLesson,
  authenticationAuthorizationadvancedAuthorizationresourceBasedAuthorizationLesson,
  authenticationAuthorizationrefreshTokenStrategiestokenRevocationLesson,
  authenticationAuthorizationssoIdentityProvidersauth0IntegrationLesson,
  authenticationAuthorizationsecurityBestPracticescsrfXssProtectionLesson,
  oopsConceptsoopFundamentalsaccessModifiersLesson,
  oopsConceptsencapsulationDataHidingreadOnlyFieldsLesson,
  oopsConceptsinheritanceinheritanceHierarchiesLesson,
  oopsConceptspolymorphismoperatorOverloadingLesson,
  oopsConceptsabstractionrealWorldAbstractionLesson,
  oopsConceptsinterfacesAbstractClassesexplicitInterfaceImplementationLesson,
  interviewQabeginnerQuestionsbeginnerQ2Lesson,
  interviewQaintermediateQuestionsintermediateQ4Lesson,
  interviewQaadvancedQuestionsadvancedQ4Lesson,
  interviewQascenarioBasedscenarioQ21Lesson,
  interviewQasystemDesignsystemQ12Lesson,
  interviewQaperformanceOptimizationperfQ4Lesson,
  interviewQacicdPipelinescicdQ4Lesson,
  graphqlDotnetgettingStartedhotchocolateProjectSetupLesson,
  graphqlDotnetschemaTypesscalarsCustomTypesLesson,
  graphqlDotnetqueriesMutationsresolversLesson,
  graphqlDotnetfilteringPaginationperformancePaginationLesson,
  graphqlDotnetauthenticationidentityIntegrationLesson,
  graphqlDotnetperformancepersistedQueriesLesson,
  designPatternscreationalPatternsprototypePatternDesignPatternsLesson,
  designPatternsstructuralPatternsproxyPatternLesson,
  designPatternsbehavioralPatternsiteratorPatternLesson,
  designPatternsenterprisePatternscqrsBasicsLesson,
  designPatternsconcurrencyPatternsasyncAwaitPatternsDesignPatternsLesson,
  designPatternsarchitecturalPatternsonionArchitectureDesignPatternsLesson,
  fullstackSecuritycorsConfigurationcorsBestPracticesLesson,
  fullstackSecurityxssCsrfProtectionsecuringReactAppsLesson,
  fullstackSecurityapiSecurityRateLimitingloggingAndMonitoringLesson,
  sqlServerqueryingDataandOperatorLesson,
  sqlServerjoinsfullOuterJoinLesson,
  sqlServergroupingAggregationSubqueriesgroupingSetsLesson,
  sqlServerdataModificationDmlupdateWithJoinLesson,
  sqlServerdatabaseSchemaTableObjectsalterTableAlterColumnLesson,
  sqlServerdataTypesncharDataTypeLesson,
  sqlServerindexesindexesWithIncludedColumnsLesson,
  sqlServerviewsrenameAViewLesson,
  sqlServerstoredProceduresFunctionsvariablesInStoredProceduresLesson,
  sqlServertriggersdisableTriggerLesson,
  sqlServertransactionsErrorHandlingBackupthrowStatementLesson,
  sqlServeradvancedTopicscoalesceExpressionLesson,
  sqlServerperformanceTuningqueryStoreLesson,
  sqlServersecurityHardeningalwaysEncryptedLesson,
  aspnetCoreauthenticationIdentityauthenticationOfUsersAspnetCoreIdentityLesson,
  linqsetOperationsconcatConcatenationOperatorLesson,
  linqaggregationOperatorsaggregationAggregateLesson,
  linqquantifiersElementOperatorslastLastordefaultLesson,
  efCoreconventionsRelationshipsoneToOneRelationshipsConventionsLesson,
  efCoredataOperationsDisconnecteddataOperationsDisconnectedLesson,
  efCorequeryingqueryingLesson,
  efCoreinheritanceStrategiesinheritanceStrategiesLesson,
  efCoremigrationsmigrationsLesson,
  efCoreadvancedFeaturesadvancedFeaturesLesson,
  reactAdvancedPatternscomponentCompositionStrategiesflexibleComponentApisLesson,
  reactAdvancedPatternsadvancedHookPatternshookBestPracticesLesson,
  reactQuerycachingStrategiescachePersistenceLesson,
  apollossrNextjsPerformancecommonPitfallsLesson,
  cleanCodeCsharpsolidPrinciplesdependencyInversionLesson,
  authenticationAuthorizationadvancedAuthorizationcustomAuthorizationHandlersLesson,
  authenticationAuthorizationrefreshTokenStrategiessecureStorageStrategiesLesson,
  authenticationAuthorizationssoIdentityProvidersidentityFederationLesson,
  authenticationAuthorizationsecurityBestPracticesrateLimitingSecurityLesson,
  interviewQabeginnerQuestionsbeginnerQ3Lesson,
  interviewQaintermediateQuestionsintermediateQ5Lesson,
  interviewQaadvancedQuestionsadvancedQ5Lesson,
  interviewQascenarioBasedscenarioQ22Lesson,
  interviewQasystemDesignsystemQ13Lesson,
  designPatternsconcurrencyPatternsbarrierPatternDesignPatternsLesson,
  sqlServerqueryingDataorOperatorLesson,
  sqlServerjoinscrossJoinLesson,
  sqlServergroupingAggregationSubqueriespivotOperatorLesson,
  sqlServerdataModificationDmldeleteStatementLesson,
  sqlServerdatabaseSchemaTableObjectsalterTableDropColumnLesson,
  sqlServerdataTypesnvarcharDataTypeLesson,
  sqlServerindexesindexOnComputedColumnLesson,
  sqlServerviewslistAllViewsLesson,
  sqlServerstoredProceduresFunctionsscalarFunctionsLesson,
  sqlServertriggersenableTriggerLesson,
  sqlServertransactionsErrorHandlingBackupraiserrorStatementLesson,
  sqlServeradvancedTopicsnullifLesson,
  aspnetCoreauthenticationIdentityintegrateGoogleLoginAspnetCoreIdentityLesson,
  linqquantifiersElementOperatorssingleSingleordefaultLesson,
  efCoreconventionsRelationshipsconfigureOneToOneRelationshipsFluentApiLesson,
  interviewQabeginnerQuestionsbeginnerQ4Lesson,
  interviewQaintermediateQuestionscsharpI01Lesson,
  interviewQaadvancedQuestionscsharpA01Lesson,
  interviewQascenarioBasedscenarioQ23Lesson,
  interviewQasystemDesignsystemQ14Lesson,
  sqlServerqueryingDatabetweenOperatorLesson,
  sqlServerjoinsselfJoinLesson,
  sqlServergroupingAggregationSubqueriescommonTableExpressionsLesson,
  sqlServerdataModificationDmltruncateTableLesson,
  sqlServerdatabaseSchemaTableObjectsdropTableLesson,
  sqlServerdataTypesdatetime2DataTypeLesson,
  sqlServerindexesuniqueIndexLesson,
  sqlServerviewsindexedViewsLesson,
  sqlServerstoredProceduresFunctionstableValuedFunctionsLesson,
  sqlServertriggersdropTriggerLesson,
  sqlServertransactionsErrorHandlingBackupfullBackupLesson,
  sqlServeradvancedTopicsdynamicSqlLesson,
  aspnetCoreauthenticationIdentityworkWithClaimsAspnetCoreIdentityLesson,
  efCoreconventionsRelationshipsconfigureManyToManyRelationshipsLesson,
  interviewQabeginnerQuestionsbeginnerQ5Lesson,
  interviewQaintermediateQuestionscsharpI02Lesson,
  interviewQaadvancedQuestionscsharpA02Lesson,
  interviewQascenarioBasedscenarioQ24Lesson,
  interviewQasystemDesignsystemQ15Lesson,
  sqlServerqueryingDatainOperatorLesson,
  sqlServerjoinscrossApplyLesson,
  sqlServergroupingAggregationSubqueriesrecursiveCteLesson,
  sqlServerdataModificationDmlmergeStatementLesson,
  sqlServerdatabaseSchemaTableObjectsrenameTableLesson,
  sqlServerdataTypesdateDataTypeLesson,
  sqlServerindexesdisableIndexesLesson,
  sqlServerstoredProceduresFunctionsuserDefinedFunctionsTutorialLesson,
  sqlServertriggerslistAllTriggersLesson,
  sqlServertransactionsErrorHandlingBackupdifferentialBackupLesson,
  sqlServeradvancedTopicsdeadlockLesson,
  aspnetCoreauthenticationIdentityworkWithPoliciesAspnetCoreIdentityLesson,
  interviewQabeginnerQuestionsbeginnerQ6Lesson,
  interviewQaintermediateQuestionscsharpI03Lesson,
  interviewQaadvancedQuestionssqlA01Lesson,
  interviewQascenarioBasedscenarioQ25Lesson,
  interviewQasystemDesignsdB01Lesson,
  sqlServerqueryingDatalikeOperatorLesson,
  sqlServergroupingAggregationSubqueriescorrelatedSubqueryLesson,
  sqlServerdataModificationDmlselectIntoLesson,
  sqlServerdatabaseSchemaTableObjectsalterSchemaLesson,
  sqlServerdataTypestimeDataTypeLesson,
  sqlServerindexesenableIndexesLesson,
  sqlServerstoredProceduresFunctionsdropFunctionLesson,
  sqlServertriggersviewTriggerDefinitionLesson,
  sqlServertransactionsErrorHandlingBackuptransactionLogBackupLesson,
  sqlServeradvancedTopicswhileLoopLesson,
  aspnetCoreauthenticationIdentityworkWithRolesAspnetCoreIdentityLesson,
  interviewQabeginnerQuestionsbeginnerQ7Lesson,
  interviewQaintermediateQuestionscsharpI04Lesson,
  interviewQaadvancedQuestionsjsA01Lesson,
  interviewQascenarioBasedbehB01Lesson,
  sqlServerqueryingDatanullThreeValuedLogicLesson,
  sqlServergroupingAggregationSubqueriessubqueryLesson,
  sqlServerdatabaseSchemaTableObjectscreateSchemaLesson,
  sqlServerdataTypesdecimalDataTypeLesson,
  sqlServerindexesrenameIndexLesson,
  sqlServertransactionsErrorHandlingBackuprecoveryModelLesson,
  sqlServeradvancedTopicsbreakStatementLesson,
  aspnetCoreauthenticationIdentityusernameEmailPasswordPolicyAspnetCoreIdentityLesson,
  interviewQabeginnerQuestionsbeginnerQ8Lesson,
  interviewQaintermediateQuestionscsharpI05Lesson,
  interviewQaadvancedQuestionssqlA02Lesson,
  sqlServerqueryingDataorderByClauseLesson,
  sqlServergroupingAggregationSubqueriesanyOperatorLesson,
  sqlServerdatabaseSchemaTableObjectsdropSchemaLesson,
  sqlServerdataTypesbitDataTypeLesson,
  sqlServerindexesdropIndexLesson,
  sqlServertransactionsErrorHandlingBackupdatabaseSnapshotLesson,
  sqlServeradvancedTopicscontinueStatementLesson,
  interviewQabeginnerQuestionsbeginnerQ9Lesson,
  interviewQaintermediateQuestionsaspnetI01Lesson,
  interviewQaadvancedQuestionsoopA01Lesson,
  sqlServerqueryingDataoffsetAndFetchLesson,
  sqlServergroupingAggregationSubqueriesexistsOperatorLesson,
  sqlServerdatabaseSchemaTableObjectssystemDatabasesLesson,
  sqlServerdataTypesdatetimeoffsetDataTypeLesson,
  interviewQabeginnerQuestionsbeginnerQ10Lesson,
  interviewQaintermediateQuestionsjsI01Lesson,
  interviewQaadvancedQuestionsreactA01Lesson,
  sqlServergroupingAggregationSubqueriesallOperatorLesson,
  sqlServerdatabaseSchemaTableObjectspartitionExistingTableLesson,
  interviewQabeginnerQuestionsbeginnerQ11Lesson,
  interviewQaintermediateQuestionsreactI01Lesson,
  interviewQaadvancedQuestionscsharpA03Lesson,
  sqlServerdatabaseSchemaTableObjectstablePartitioningLesson,
  interviewQabeginnerQuestionsbeginnerQ12Lesson,
  interviewQaintermediateQuestionssqlI01Lesson,
  interviewQaadvancedQuestionsjsA02Lesson,
  sqlServerdatabaseSchemaTableObjectssequenceLesson,
  interviewQabeginnerQuestionsbeginnerQ13Lesson,
  interviewQaintermediateQuestionsjsI02Lesson,
  sqlServerdatabaseSchemaTableObjectsidentityColumnLesson,
  interviewQabeginnerQuestionsbeginnerQ14Lesson,
  interviewQaintermediateQuestionsreactI02Lesson,
  sqlServerdatabaseSchemaTableObjectssynonymLesson,
  interviewQabeginnerQuestionsbeginnerQ15Lesson,
  interviewQaintermediateQuestionsoopI01Lesson,
  sqlServerdatabaseSchemaTableObjectssynonymUltimateGuideLesson,
  interviewQabeginnerQuestionsbeginnerQ16Lesson,
  interviewQaintermediateQuestionssqlI02Lesson,
  sqlServerdatabaseSchemaTableObjectsgrantLesson,
  interviewQabeginnerQuestionsbeginnerQ17Lesson,
  interviewQaintermediateQuestionsoopI02Lesson,
  sqlServerdatabaseSchemaTableObjectscomputedColumnsLesson,
  interviewQabeginnerQuestionsbeginnerQ18Lesson,
  interviewQaintermediateQuestionscsharpI06Lesson,
  interviewQabeginnerQuestionsbeginnerQ19Lesson,
  interviewQaintermediateQuestionsaspnetI02Lesson,
  interviewQabeginnerQuestionsbeginnerQ20Lesson,
  interviewQaintermediateQuestionsgenI01Lesson,
  interviewQabeginnerQuestionsbeginnerQ21Lesson,
  interviewQaintermediateQuestionsjsI03Lesson,
  interviewQabeginnerQuestionsaspnetB01Lesson,
  interviewQaintermediateQuestionsjsI04Lesson,
  interviewQabeginnerQuestionsaspnetB02Lesson,
  interviewQaintermediateQuestionssqlI03Lesson,
  interviewQabeginnerQuestionsjsB01Lesson,
  interviewQaintermediateQuestionsjsI05Lesson,
  interviewQabeginnerQuestionsjsB02Lesson,
  interviewQaintermediateQuestionsreactI03Lesson,
  interviewQabeginnerQuestionsreactB01Lesson,
  interviewQabeginnerQuestionsreactB02Lesson,
  interviewQabeginnerQuestionsoopB01Lesson,
  interviewQabeginnerQuestionssqlB01Lesson,
  interviewQabeginnerQuestionssqlB02Lesson,
  interviewQabeginnerQuestionssqlB03Lesson,
];

export const lessons: Lesson[] = rawLessons as unknown as Lesson[];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}

export function getLessonsByModule(moduleSlug: string, courseSlug?: string): Lesson[] {
  return lessons
    .filter((l) => l.moduleSlug === moduleSlug && (!courseSlug || l.courseSlug === courseSlug))
    .sort((a, b) => a.order - b.order);
}

export function getAdjacentLessons(
  lesson: Lesson,
  allLessons: Lesson[]
): { prev: Lesson | null; next: Lesson | null } {
  const moduleLessons = allLessons
    .filter((l) => l.moduleSlug === lesson.moduleSlug)
    .sort((a, b) => a.order - b.order);
  const idx = moduleLessons.findIndex((l) => l.slug === lesson.slug);
  return {
    prev: idx > 0 ? moduleLessons[idx - 1] : null,
    next: idx < moduleLessons.length - 1 ? moduleLessons[idx + 1] : null,
  };
}
