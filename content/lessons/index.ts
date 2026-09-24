import type { Lesson } from '@/types';

import lesson01KnapsackLesson from "../problems/csharp/05-dynamic-programming-problems/0-1-knapsack.json";
import lesson01AmazonCognitoUserPoolsLesson from "../courses/aws/16-identity-for-applications/01-amazon-cognito-user-pools.json";
import lesson01ArchitecturePatternsLesson from "../courses/aws/20-aws-architecture-design-patterns/01-architecture-patterns.json";
import lesson01CheckConstraintLesson from "../courses/sql-server/09-constraints/01-check-constraint.json";
import lesson01CiCdConceptsLesson from "../courses/devops/05-ci-cd-fundamentals/01-ci-cd-concepts.json";
import lesson01CloudformationAdvancedLesson from "../courses/aws/18-infrastructure-automation/01-cloudformation-advanced.json";
import lesson01ConfigmapsSecretsIngressLesson from "../courses/devops/04-kubernetes-advanced/01-configmaps-secrets-ingress.json";
import lesson01CreateDatabaseLesson from "../courses/sql-server/07-database-schema-table-objects/01-create-database.json";
import lesson01CursorLesson from "../courses/sql-server/15-advanced-topics/01-cursor.json";
import lesson01DataTypesOverviewLesson from "../courses/sql-server/08-data-types/01-data-types-overview.json";
import lesson01DockerComposeMultiContainerLesson from "../courses/devops/02-docker-advanced/01-docker-compose-multi-container.json";
import lesson01GithubActionsWorkflowsLesson from "../courses/devops/06-ci-cd-modern-tools/01-github-actions-workflows.json";
import lesson01GroupByLesson from "../courses/sql-server/05-grouping-aggregation-subqueries/01-group-by.json";
import lesson01HighAvailabilityPatternsLesson from "../courses/aws/19-high-availability-disaster-recovery/01-high-availability-patterns.json";
import lesson01IndexesOverviewLesson from "../courses/sql-server/10-indexes/01-indexes-overview.json";
import lesson01InsertAddRowLesson from "../courses/sql-server/06-data-modification-dml/01-insert-add-row.json";
import lesson01MigrationServicesLesson from "../courses/aws/17-migration-hybrid-cloud/01-migration-services.json";
import lesson01SelectAllEmployeesLesson from "../problems/sql/01-sql-basics/01-select-all-employees.json";
import lesson01SelectStatementLesson from "../courses/sql-server/02-querying-data/01-select-statement.json";
import lesson01StoredProcedureGetEmployeesByDeptLesson from "../problems/sql/03-sql-advanced/01-stored-procedure-get-employees-by-dept.json";
import lesson01StoredProceduresBasicsLesson from "../courses/sql-server/12-stored-procedures-functions/01-stored-procedures-basics.json";
import lesson01SubqueryInWhereClauseLesson from "../problems/sql/02-sql-intermediate/01-subquery-in-where-clause.json";
import lesson01TransactionLesson from "../courses/sql-server/14-transactions-error-handling-backup/01-transaction.json";
import lesson01TriggersTutorialLesson from "../courses/sql-server/13-triggers/01-triggers-tutorial.json";
import lesson01UnionUltimateGuideLesson from "../courses/sql-server/04-set-operations/01-union-ultimate-guide.json";
import lesson01ViewsIntroductionLesson from "../courses/sql-server/11-views/01-views-introduction.json";
import lesson01VisualizationExplanationOfJoinsLesson from "../courses/sql-server/03-joins/01-visualization-explanation-of-joins.json";
import lesson01WhatIsDockerLesson from "../courses/devops/01-docker-fundamentals/01-what-is-docker.json";
import lesson01WhatIsKubernetesLesson from "../courses/devops/03-kubernetes-fundamentals/01-what-is-kubernetes.json";
import lesson01WhatIsSqlServerLesson from "../courses/sql-server/01-getting-started/01-what-is-sql-server.json";
import lesson026RsMigrationStrategyLesson from "../courses/aws/17-migration-hybrid-cloud/02-6-rs-migration-strategy.json";
import lesson02AfterUpdateTriggerLogSalaryChangeLesson from "../problems/sql/03-sql-advanced/02-after-update-trigger-log-salary-change.json";
import lesson02AwsCdkAdvancedLesson from "../courses/aws/18-infrastructure-automation/02-aws-cdk-advanced.json";
import lesson02BasicsLesson from "../courses/sql-server/01-getting-started/02-basics.json";
import lesson02BeginEndStatementLesson from "../courses/sql-server/14-transactions-error-handling-backup/02-begin-end-statement.json";
import lesson02CharDataTypeLesson from "../courses/sql-server/08-data-types/02-char-data-type.json";
import lesson02ClusteredIndexesLesson from "../courses/sql-server/10-indexes/02-clustered-indexes.json";
import lesson02CognitoIdentityPoolsLesson from "../courses/aws/16-identity-for-applications/02-cognito-identity-pools.json";
import lesson02CreateTriggerLesson from "../courses/sql-server/13-triggers/02-create-trigger.json";
import lesson02CreateViewLesson from "../courses/sql-server/11-views/02-create-view.json";
import lesson02CteDepartmentSalaryStatsLesson from "../problems/sql/02-sql-intermediate/02-cte-department-salary-stats.json";
import lesson02DesignPrinciplesLesson from "../courses/aws/20-aws-architecture-design-patterns/02-design-principles.json";
import lesson02DisasterRecoveryStrategiesLesson from "../courses/aws/19-high-availability-disaster-recovery/02-disaster-recovery-strategies.json";
import lesson02DockerImagesContainersLesson from "../courses/devops/01-docker-fundamentals/02-docker-images-containers.json";
import lesson02DockerVolumesNetworksLesson from "../courses/devops/02-docker-advanced/02-docker-volumes-networks.json";
import lesson02DropDatabaseLesson from "../courses/sql-server/07-database-schema-table-objects/02-drop-database.json";
import lesson02ExceptLesson from "../courses/sql-server/04-set-operations/02-except.json";
import lesson02FilterEmployeesByDepartmentLesson from "../problems/sql/01-sql-basics/02-filter-employees-by-department.json";
import lesson02ForeignKeyConstraintLesson from "../courses/sql-server/09-constraints/02-foreign-key-constraint.json";
import lesson02GitlabCiPipelinesLesson from "../courses/devops/06-ci-cd-modern-tools/02-gitlab-ci-pipelines.json";
import lesson02HavingClauseLesson from "../courses/sql-server/05-grouping-aggregation-subqueries/02-having-clause.json";
import lesson02HelmChartsLesson from "../courses/devops/04-kubernetes-advanced/02-helm-charts.json";
import lesson02InnerJoinLesson from "../courses/sql-server/03-joins/02-inner-join.json";
import lesson02InsertIntoSelectLesson from "../courses/sql-server/06-data-modification-dml/02-insert-into-select.json";
import lesson02JenkinsBasicsLesson from "../courses/devops/05-ci-cd-fundamentals/02-jenkins-basics.json";
import lesson02PodsDeploymentsServicesLesson from "../courses/devops/03-kubernetes-fundamentals/02-pods-deployments-services.json";
import lesson02SelectDistinctLesson from "../courses/sql-server/02-querying-data/02-select-distinct.json";
import lesson02StoredProceduresTutorialLesson from "../courses/sql-server/12-stored-procedures-functions/02-stored-procedures-tutorial.json";
import lesson02TemporaryTablesLesson from "../courses/sql-server/15-advanced-topics/02-temporary-tables.json";
import lesson03AliasesLesson from "../courses/sql-server/01-getting-started/03-aliases.json";
import lesson03ApplicationAuthenticationLesson from "../courses/aws/16-identity-for-applications/03-application-authentication.json";
import lesson03CreateIndexLesson from "../courses/sql-server/10-indexes/03-create-index.json";
import lesson03CreateNonclusteredIndexLesson from "../problems/sql/03-sql-advanced/03-create-nonclustered-index.json";
import lesson03CreateTableLesson from "../courses/sql-server/07-database-schema-table-objects/03-create-table.json";
import lesson03CubeLesson from "../courses/sql-server/05-grouping-aggregation-subqueries/03-cube.json";
import lesson03DdlTriggersLesson from "../courses/sql-server/13-triggers/03-ddl-triggers.json";
import lesson03DockerSecurityLesson from "../courses/devops/02-docker-advanced/03-docker-security.json";
import lesson03DockerfileBasicsLesson from "../courses/devops/01-docker-fundamentals/03-dockerfile-basics.json";
import lesson03DropViewLesson from "../courses/sql-server/11-views/03-drop-view.json";
import lesson03HybridCloudOptionsLesson from "../courses/aws/17-migration-hybrid-cloud/03-hybrid-cloud-options.json";
import lesson03IfElseStatementLesson from "../courses/sql-server/14-transactions-error-handling-backup/03-if-else-statement.json";
import lesson03InsertMultipleRowsLesson from "../courses/sql-server/06-data-modification-dml/03-insert-multiple-rows.json";
import lesson03IntersectLesson from "../courses/sql-server/04-set-operations/03-intersect.json";
import lesson03JenkinsPipelinesLesson from "../courses/devops/05-ci-cd-fundamentals/03-jenkins-pipelines.json";
import lesson03K8sMonitoringObservabilityLesson from "../courses/devops/04-kubernetes-advanced/03-k8s-monitoring-observability.json";
import lesson03KubectlCommandsLesson from "../courses/devops/03-kubernetes-fundamentals/03-kubectl-commands.json";
import lesson03LeftJoinLesson from "../courses/sql-server/03-joins/03-left-join.json";
import lesson03MultiRegionArchitectureLesson from "../courses/aws/19-high-availability-disaster-recovery/03-multi-region-architecture.json";
import lesson03NotNullConstraintLesson from "../courses/sql-server/09-constraints/03-not-null-constraint.json";
import lesson03SelectTopLesson from "../courses/sql-server/02-querying-data/03-select-top.json";
import lesson03SortProductsByPriceLesson from "../problems/sql/01-sql-basics/03-sort-products-by-price.json";
import lesson03StoredProcedureParametersLesson from "../courses/sql-server/12-stored-procedures-functions/03-stored-procedure-parameters.json";
import lesson03TableVariablesLesson from "../courses/sql-server/15-advanced-topics/03-table-variables.json";
import lesson03TerraformAwsLesson from "../courses/aws/18-infrastructure-automation/03-terraform-aws.json";
import lesson03VarcharDataTypeLesson from "../courses/sql-server/08-data-types/03-varchar-data-type.json";
import lesson03WellArchitectedDeepDiveLesson from "../courses/aws/20-aws-architecture-design-patterns/03-well-architected-deep-dive.json";
import lesson03WindowFunctionRankLesson from "../problems/sql/02-sql-intermediate/03-window-function-rank.json";
import lesson04AlterTableAddColumnLesson from "../courses/sql-server/07-database-schema-table-objects/04-alter-table-add-column.json";
import lesson04ApplicationAuthenticationArchitectureLesson from "../courses/aws/16-identity-for-applications/04-application-authentication-architecture.json";
import lesson04AwsSolutionsArchitectPatternsLesson from "../courses/aws/20-aws-architecture-design-patterns/04-aws-solutions-architect-patterns.json";
import lesson04CaseExpressionLesson from "../courses/sql-server/15-advanced-topics/04-case-expression.json";
import lesson04CountEmployeesPerDepartmentLesson from "../problems/sql/01-sql-basics/04-count-employees-per-department.json";
import lesson04DatasyncSnowFamilyLesson from "../courses/aws/17-migration-hybrid-cloud/04-datasync-snow-family.json";
import lesson04FilteredIndexesLesson from "../courses/sql-server/10-indexes/04-filtered-indexes.json";
import lesson04GetInformationAboutAViewLesson from "../courses/sql-server/11-views/04-get-information-about-a-view.json";
import lesson04IacBestPracticesLesson from "../courses/aws/18-infrastructure-automation/04-iac-best-practices.json";
import lesson04InsteadOfTriggerLesson from "../courses/sql-server/13-triggers/04-instead-of-trigger.json";
import lesson04IntDataTypesLesson from "../courses/sql-server/08-data-types/04-int-data-types.json";
import lesson04LeadLagSalaryComparisonLesson from "../problems/sql/02-sql-intermediate/04-lead-lag-salary-comparison.json";
import lesson04OutputParametersLesson from "../courses/sql-server/12-stored-procedures-functions/04-output-parameters.json";
import lesson04RightJoinLesson from "../courses/sql-server/03-joins/04-right-join.json";
import lesson04RollupLesson from "../courses/sql-server/05-grouping-aggregation-subqueries/04-rollup.json";
import lesson04RtoRpoPlanningLesson from "../courses/aws/19-high-availability-disaster-recovery/04-rto-rpo-planning.json";
import lesson04TransactionWithRollbackLesson from "../problems/sql/03-sql-advanced/04-transaction-with-rollback.json";
import lesson04TryCatchLesson from "../courses/sql-server/14-transactions-error-handling-backup/04-try-catch.json";
import lesson04UniqueConstraintLesson from "../courses/sql-server/09-constraints/04-unique-constraint.json";
import lesson04UpdateStatementLesson from "../courses/sql-server/06-data-modification-dml/04-update-statement.json";
import lesson04WhereClauseLesson from "../courses/sql-server/02-querying-data/04-where-clause.json";
import lesson05AlterTableAlterColumnLesson from "../courses/sql-server/07-database-schema-table-objects/05-alter-table-alter-column.json";
import lesson05AndOperatorLesson from "../courses/sql-server/02-querying-data/05-and-operator.json";
import lesson05CoalesceExpressionLesson from "../courses/sql-server/15-advanced-topics/05-coalesce-expression.json";
import lesson05CorrelatedSubqueryDepartmentAverageLesson from "../problems/sql/02-sql-intermediate/05-correlated-subquery-department-average.json";
import lesson05DisableTriggerLesson from "../courses/sql-server/13-triggers/05-disable-trigger.json";
import lesson05FilterGroupsWithHavingLesson from "../problems/sql/01-sql-basics/05-filter-groups-with-having.json";
import lesson05FullOuterJoinLesson from "../courses/sql-server/03-joins/05-full-outer-join.json";
import lesson05GroupingSetsLesson from "../courses/sql-server/05-grouping-aggregation-subqueries/05-grouping-sets.json";
import lesson05IndexesWithIncludedColumnsLesson from "../courses/sql-server/10-indexes/05-indexes-with-included-columns.json";
import lesson05IsolationLevelSerializableLesson from "../problems/sql/03-sql-advanced/05-isolation-level-serializable.json";
import lesson05NcharDataTypeLesson from "../courses/sql-server/08-data-types/05-nchar-data-type.json";
import lesson05RenameAViewLesson from "../courses/sql-server/11-views/05-rename-a-view.json";
import lesson05ThrowStatementLesson from "../courses/sql-server/14-transactions-error-handling-backup/05-throw-statement.json";
import lesson05UpdateWithJoinLesson from "../courses/sql-server/06-data-modification-dml/05-update-with-join.json";
import lesson05VariablesInStoredProceduresLesson from "../courses/sql-server/12-stored-procedures-functions/05-variables-in-stored-procedures.json";
import lesson06AlterTableDropColumnLesson from "../courses/sql-server/07-database-schema-table-objects/06-alter-table-drop-column.json";
import lesson06CrossJoinLesson from "../courses/sql-server/03-joins/06-cross-join.json";
import lesson06CteRunningTotalSalesLesson from "../problems/sql/02-sql-intermediate/06-cte-running-total-sales.json";
import lesson06DeleteStatementLesson from "../courses/sql-server/06-data-modification-dml/06-delete-statement.json";
import lesson06EnableTriggerLesson from "../courses/sql-server/13-triggers/06-enable-trigger.json";
import lesson06IndexOnComputedColumnLesson from "../courses/sql-server/10-indexes/06-index-on-computed-column.json";
import lesson06InnerJoinOrdersCustomersLesson from "../problems/sql/01-sql-basics/06-inner-join-orders-customers.json";
import lesson06ListAllViewsLesson from "../courses/sql-server/11-views/06-list-all-views.json";
import lesson06NullifLesson from "../courses/sql-server/15-advanced-topics/06-nullif.json";
import lesson06NvarcharDataTypeLesson from "../courses/sql-server/08-data-types/06-nvarchar-data-type.json";
import lesson06OrOperatorLesson from "../courses/sql-server/02-querying-data/06-or-operator.json";
import lesson06PivotOperatorLesson from "../courses/sql-server/05-grouping-aggregation-subqueries/06-pivot-operator.json";
import lesson06RaiserrorStatementLesson from "../courses/sql-server/14-transactions-error-handling-backup/06-raiserror-statement.json";
import lesson06ScalarFunctionsLesson from "../courses/sql-server/12-stored-procedures-functions/06-scalar-functions.json";
import lesson06TryCatchErrorHandlingLesson from "../problems/sql/03-sql-advanced/06-try-catch-error-handling.json";
import lesson07BetweenOperatorLesson from "../courses/sql-server/02-querying-data/07-between-operator.json";
import lesson07CommonTableExpressionsLesson from "../courses/sql-server/05-grouping-aggregation-subqueries/07-common-table-expressions.json";
import lesson07Datetime2DataTypeLesson from "../courses/sql-server/08-data-types/07-datetime2-data-type.json";
import lesson07DropTableLesson from "../courses/sql-server/07-database-schema-table-objects/07-drop-table.json";
import lesson07DropTriggerLesson from "../courses/sql-server/13-triggers/07-drop-trigger.json";
import lesson07DynamicSqlLesson from "../courses/sql-server/15-advanced-topics/07-dynamic-sql.json";
import lesson07DynamicSqlSearchLesson from "../problems/sql/03-sql-advanced/07-dynamic-sql-search.json";
import lesson07FullBackupLesson from "../courses/sql-server/14-transactions-error-handling-backup/07-full-backup.json";
import lesson07IndexedViewsLesson from "../courses/sql-server/11-views/07-indexed-views.json";
import lesson07LeftJoinCustomersOrdersLesson from "../problems/sql/01-sql-basics/07-left-join-customers-orders.json";
import lesson07SelfJoinLesson from "../courses/sql-server/03-joins/07-self-join.json";
import lesson07SelfJoinEmployeeManagerLesson from "../problems/sql/02-sql-intermediate/07-self-join-employee-manager.json";
import lesson07TableValuedFunctionsLesson from "../courses/sql-server/12-stored-procedures-functions/07-table-valued-functions.json";
import lesson07TruncateTableLesson from "../courses/sql-server/06-data-modification-dml/07-truncate-table.json";
import lesson07UniqueIndexLesson from "../courses/sql-server/10-indexes/07-unique-index.json";
import lesson08ClusteredColumnstoreIndexLesson from "../problems/sql/03-sql-advanced/08-clustered-columnstore-index.json";
import lesson08CrossApplyLesson from "../courses/sql-server/03-joins/08-cross-apply.json";
import lesson08DateDataTypeLesson from "../courses/sql-server/08-data-types/08-date-data-type.json";
import lesson08DeadlockLesson from "../courses/sql-server/15-advanced-topics/08-deadlock.json";
import lesson08DifferentialBackupLesson from "../courses/sql-server/14-transactions-error-handling-backup/08-differential-backup.json";
import lesson08DisableIndexesLesson from "../courses/sql-server/10-indexes/08-disable-indexes.json";
import lesson08InOperatorLesson from "../courses/sql-server/02-querying-data/08-in-operator.json";
import lesson08IntersectCommonProductsOrdersLesson from "../problems/sql/02-sql-intermediate/08-intersect-common-products-orders.json";
import lesson08ListAllTriggersLesson from "../courses/sql-server/13-triggers/08-list-all-triggers.json";
import lesson08MergeStatementLesson from "../courses/sql-server/06-data-modification-dml/08-merge-statement.json";
import lesson08RecursiveCteLesson from "../courses/sql-server/05-grouping-aggregation-subqueries/08-recursive-cte.json";
import lesson08RenameTableLesson from "../courses/sql-server/07-database-schema-table-objects/08-rename-table.json";
import lesson08RightJoinSuppliersProductsLesson from "../problems/sql/01-sql-basics/08-right-join-suppliers-products.json";
import lesson08UserDefinedFunctionsTutorialLesson from "../courses/sql-server/12-stored-procedures-functions/08-user-defined-functions-tutorial.json";
import lesson09AlterSchemaLesson from "../courses/sql-server/07-database-schema-table-objects/09-alter-schema.json";
import lesson09CorrelatedSubqueryLesson from "../courses/sql-server/05-grouping-aggregation-subqueries/09-correlated-subquery.json";
import lesson09DropFunctionLesson from "../courses/sql-server/12-stored-procedures-functions/09-drop-function.json";
import lesson09EnableIndexesLesson from "../courses/sql-server/10-indexes/09-enable-indexes.json";
import lesson09ExceptProductsNeverOrderedLesson from "../problems/sql/02-sql-intermediate/09-except-products-never-ordered.json";
import lesson09FullOuterJoinEmployeesDepartmentsLesson from "../problems/sql/01-sql-basics/09-full-outer-join-employees-departments.json";
import lesson09LikeOperatorLesson from "../courses/sql-server/02-querying-data/09-like-operator.json";
import lesson09SelectIntoLesson from "../courses/sql-server/06-data-modification-dml/09-select-into.json";
import lesson09SnapshotIsolationLesson from "../problems/sql/03-sql-advanced/09-snapshot-isolation.json";
import lesson09TimeDataTypeLesson from "../courses/sql-server/08-data-types/09-time-data-type.json";
import lesson09TransactionLogBackupLesson from "../courses/sql-server/14-transactions-error-handling-backup/09-transaction-log-backup.json";
import lesson09ViewTriggerDefinitionLesson from "../courses/sql-server/13-triggers/09-view-trigger-definition.json";
import lesson09WhileLoopLesson from "../courses/sql-server/15-advanced-topics/09-while-loop.json";
import lesson10BreakStatementLesson from "../courses/sql-server/15-advanced-topics/10-break-statement.json";
import lesson10CreateSchemaLesson from "../courses/sql-server/07-database-schema-table-objects/10-create-schema.json";
import lesson10DecimalDataTypeLesson from "../courses/sql-server/08-data-types/10-decimal-data-type.json";
import lesson10InsteadOfTriggerInsertViewLesson from "../problems/sql/03-sql-advanced/10-instead-of-trigger-insert-view.json";
import lesson10NullThreeValuedLogicLesson from "../courses/sql-server/02-querying-data/10-null-three-valued-logic.json";
import lesson10RecoveryModelLesson from "../courses/sql-server/14-transactions-error-handling-backup/10-recovery-model.json";
import lesson10RecursiveCteEmployeeHierarchyLesson from "../problems/sql/02-sql-intermediate/10-recursive-cte-employee-hierarchy.json";
import lesson10RenameIndexLesson from "../courses/sql-server/10-indexes/10-rename-index.json";
import lesson10SelectDistinctCitiesLesson from "../problems/sql/01-sql-basics/10-select-distinct-cities.json";
import lesson10SubqueryLesson from "../courses/sql-server/05-grouping-aggregation-subqueries/10-subquery.json";
import lesson11AnyOperatorLesson from "../courses/sql-server/05-grouping-aggregation-subqueries/11-any-operator.json";
import lesson11BetweenSalaryRangeLesson from "../problems/sql/01-sql-basics/11-between-salary-range.json";
import lesson11BitDataTypeLesson from "../courses/sql-server/08-data-types/11-bit-data-type.json";
import lesson11ContinueStatementLesson from "../courses/sql-server/15-advanced-topics/11-continue-statement.json";
import lesson11DatabaseSnapshotLesson from "../courses/sql-server/14-transactions-error-handling-backup/11-database-snapshot.json";
import lesson11DropIndexLesson from "../courses/sql-server/10-indexes/11-drop-index.json";
import lesson11DropSchemaLesson from "../courses/sql-server/07-database-schema-table-objects/11-drop-schema.json";
import lesson11MultipleJoinsOrderDetailsLesson from "../problems/sql/02-sql-intermediate/11-multiple-joins-order-details.json";
import lesson11OrderByClauseLesson from "../courses/sql-server/02-querying-data/11-order-by-clause.json";
import lesson12AllOperatorSalaryCheckLesson from "../problems/sql/02-sql-intermediate/12-all-operator-salary-check.json";
import lesson12DatetimeoffsetDataTypeLesson from "../courses/sql-server/08-data-types/12-datetimeoffset-data-type.json";
import lesson12ExistsOperatorLesson from "../courses/sql-server/05-grouping-aggregation-subqueries/12-exists-operator.json";
import lesson12InOperatorDepartmentsLesson from "../problems/sql/01-sql-basics/12-in-operator-departments.json";
import lesson12OffsetAndFetchLesson from "../courses/sql-server/02-querying-data/12-offset-and-fetch.json";
import lesson12SystemDatabasesLesson from "../courses/sql-server/07-database-schema-table-objects/12-system-databases.json";
import lesson13AllOperatorLesson from "../courses/sql-server/05-grouping-aggregation-subqueries/13-all-operator.json";
import lesson13DenseRankVsRankLesson from "../problems/sql/02-sql-intermediate/13-dense-rank-vs-rank.json";
import lesson13LikePatternMatchingLesson from "../problems/sql/01-sql-basics/13-like-pattern-matching.json";
import lesson13PartitionExistingTableLesson from "../courses/sql-server/07-database-schema-table-objects/13-partition-existing-table.json";
import lesson14AggregateFunctionsBasicsLesson from "../problems/sql/01-sql-basics/14-aggregate-functions-basics.json";
import lesson14StringFunctionsUppercaseEmailLesson from "../problems/sql/02-sql-intermediate/14-string-functions-uppercase-email.json";
import lesson14TablePartitioningLesson from "../courses/sql-server/07-database-schema-table-objects/14-table-partitioning.json";
import lesson15CaseExpressionSalaryBandLesson from "../problems/sql/02-sql-intermediate/15-case-expression-salary-band.json";
import lesson15NullHandlingIsnullLesson from "../problems/sql/01-sql-basics/15-null-handling-isnull.json";
import lesson15SequenceLesson from "../courses/sql-server/07-database-schema-table-objects/15-sequence.json";
import lesson16CrossApplyProductCategoriesLesson from "../problems/sql/02-sql-intermediate/16-cross-apply-product-categories.json";
import lesson16IdentityColumnLesson from "../courses/sql-server/07-database-schema-table-objects/16-identity-column.json";
import lesson16StringConcatenationLesson from "../problems/sql/01-sql-basics/16-string-concatenation.json";
import lesson17DateFunctionsCurrentDateLesson from "../problems/sql/01-sql-basics/17-date-functions-current-date.json";
import lesson17SynonymLesson from "../courses/sql-server/07-database-schema-table-objects/17-synonym.json";
import lesson17UnionAllCombinedCustomerOrdersLesson from "../problems/sql/02-sql-intermediate/17-union-all-combined-customer-orders.json";
import lesson18RowNumberDuplicateRemovalLesson from "../problems/sql/02-sql-intermediate/18-row-number-duplicate-removal.json";
import lesson18SynonymUltimateGuideLesson from "../courses/sql-server/07-database-schema-table-objects/18-synonym-ultimate-guide.json";
import lesson18UnionOrderCustomersSuppliersLesson from "../problems/sql/01-sql-basics/18-union-order-customers-suppliers.json";
import lesson19ExistsDepartmentEmployeesLesson from "../problems/sql/01-sql-basics/19-exists-department-employees.json";
import lesson19GrantLesson from "../courses/sql-server/07-database-schema-table-objects/19-grant.json";
import lesson19PivotSalesByQuarterLesson from "../problems/sql/02-sql-intermediate/19-pivot-sales-by-quarter.json";
import lesson20CoalesceDisplayPreferredNameLesson from "../problems/sql/02-sql-intermediate/20-coalesce-display-preferred-name.json";
import lesson20ComputedColumnsLesson from "../courses/sql-server/07-database-schema-table-objects/20-computed-columns.json";
import lesson20TopNPerGroupLesson from "../problems/sql/01-sql-basics/20-top-n-per-group.json";
import lesson3sumLesson from "../problems/csharp/01-array-problems/3sum.json";
import aCacheOutageCausesTheDatabaseToBecomeOverloadedLesson from "../problems/production-incident-lab-problems/database-infrastructure-incidents/a-cache-outage-causes-the-database-to-become-overloaded.json";
import aDeploymentSucceedsButOldClientsStartReceiving500ResponsesLesson from "../problems/production-incident-lab-problems/backend-incidents/a-deployment-succeeds-but-old-clients-start-receiving-500-responses.json";
import aLargeTableFreezesTheBrowserLesson from "../problems/production-incident-lab-problems/frontend-incidents/a-large-table-freezes-the-browser.json";
import aMemoryLeakAppearsAfterOpeningAndClosingAModalRepeatedlyLesson from "../problems/production-incident-lab-problems/frontend-incidents/a-memory-leak-appears-after-opening-and-closing-a-modal-repeatedly.json";
import aProductionQuerySuddenlyBecameSlowAfterADeploymentWhatDoYouCheckLesson from "../interview-qa/backend-database-follow-ups/a-production-query-suddenly-became-slow-after-a-deployment-what-do-you-check.json";
import aRetryPolicyCreatesARetryStormDuringADownstreamOutageLesson from "../problems/production-incident-lab-problems/backend-incidents/a-retry-policy-creates-a-retry-storm-during-a-downstream-outage.json";
import aServiceCanResolveDnsButCannotConnectToItsDependencyLesson from "../problems/production-incident-lab-problems/database-infrastructure-incidents/a-service-can-resolve-dns-but-cannot-connect-to-its-dependency.json";
import abstractClassesLesson from "../courses/oops-concepts/05-abstraction/abstract-classes.json";
import abstractVsInterfaceLesson from "../courses/oops-concepts/05-abstraction/abstract-vs-interface.json";
import abstractionBasicsLesson from "../courses/oops-concepts/05-abstraction/abstraction-basics.json";
import accessModifiersLesson from "../courses/oops-concepts/01-oop-fundamentals/access-modifiers.json";
import acrAuthenticationAndManagedIdentityLesson from "../courses/azure/04-containers-and-container-platforms/acr-authentication-and-managed-identity.json";
import acrImagesTagsAndRepositoriesLesson from "../courses/azure/04-containers-and-container-platforms/acr-images-tags-and-repositories.json";
import actionFiltersLesson from "../problems/aspnet-core/01-mvc-fundamentals-problems/action-filters.json";
import adapterPatternLesson from "../courses/clean-code-csharp/03-structural-patterns/adapter-pattern.json";
import adapterPatternLesson1 from "../courses/design-patterns/02-structural-patterns/adapter-pattern.json";
import addStringsLesson from "../problems/csharp/02-string-problems/add-strings.json";
import advancedDiPatternsLesson from "../courses/aspnet-core/06-dependency-injection/advanced-di-patterns.json";
import advancedFeaturesLesson from "../courses/ef-core/10-advanced-features/advanced-features.json";
import advancedGenericsForReusableApisLesson from "../courses/typescript-for-react/advanced-type-modeling-runtime-safety/advanced-generics-for-reusable-apis.json";
import advancedQ1Lesson from "../interview-qa/03-advanced-questions/advanced-q1.json";
import advancedQ2Lesson from "../interview-qa/03-advanced-questions/advanced-q2.json";
import advancedQ3Lesson from "../interview-qa/03-advanced-questions/advanced-q3.json";
import advancedQ4Lesson from "../interview-qa/03-advanced-questions/advanced-q4.json";
import advancedQ5Lesson from "../interview-qa/03-advanced-questions/advanced-q5.json";
import aggregateFunctionsLesson from "../courses/postgresql/grouping-aggregation-subqueries/aggregate-functions.json";
import aggregatesLesson from "../courses/postgresql/stored-procedures-functions/aggregates.json";
import aggregationAggregateLesson from "../courses/linq/07-aggregation-operators/aggregation-aggregate.json";
import aggregationAverageLesson from "../courses/linq/07-aggregation-operators/aggregation-average.json";
import aggregationCountLesson from "../courses/linq/07-aggregation-operators/aggregation-count.json";
import aggregationMaxLesson from "../courses/linq/07-aggregation-operators/aggregation-max.json";
import aggregationSumLesson from "../courses/linq/07-aggregation-operators/aggregation-sum.json";
import aiSearchIndexesAndVectorSearchLesson from "../courses/azure/13-ai-services-for-azure-developers/ai-search-indexes-and-vector-search.json";
import airbnbBookingLesson from "../problems/lld/airbnb-booking/airbnb-booking.json";
import airbnbBookingHldLesson from "../problems/hld/airbnb-booking-hld/airbnb-booking-hld.json";
import aksConfigurationAndSecretsLesson from "../courses/azure/04-containers-and-container-platforms/aks-configuration-and-secrets.json";
import aksDeploymentsServicesAndIngressLesson from "../courses/azure/04-containers-and-container-platforms/aks-deployments-services-and-ingress.json";
import aksOverviewForDevelopersLesson from "../courses/azure/04-containers-and-container-platforms/aks-overview-for-developers.json";
import aksScalingAndOperationsLesson from "../courses/azure/04-containers-and-container-platforms/aks-scaling-and-operations.json";
import aksVsContainerAppsVsAppServiceLesson from "../courses/azure/04-containers-and-container-platforms/aks-vs-container-apps-vs-app-service.json";
import alienDictionaryLesson from "../problems/csharp/04-tree-graph-problems/alien-dictionary.json";
import allNodesDistanceKInBinaryTreeLesson from "../problems/csharp/04-tree-graph-problems/all-nodes-distance-k-in-binary-tree.json";
import allocationPressureAndLatencyLesson from "../courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/allocation-pressure-and-latency.json";
import alterTableLesson from "../courses/postgresql/database-schema-table-objects/alter-table.json";
import alwaysEncryptedLesson from "../courses/sql-server/17-security-hardening/always-encrypted.json";
import alwaysOnAvailabilityGroupsLesson from "../courses/sql-server/18-high-availability-dr/always-on-availability-groups.json";
import amazonAuroraLesson from "../courses/aws/06-databases/amazon-aurora.json";
import amazonBedrockLesson from "../courses/aws/14-ai-machine-learning/amazon-bedrock.json";
import amazonCloudwatchLesson from "../courses/aws/11-monitoring-logging-observability/amazon-cloudwatch.json";
import amazonEcommerceLesson from "../problems/lld/amazon-ecommerce/amazon-ecommerce.json";
import amazonEcommerceHldLesson from "../problems/hld/amazon-ecommerce-hld/amazon-ecommerce-hld.json";
import amazonEcsLesson from "../courses/aws/09-containers-kubernetes/amazon-ecs.json";
import amazonEksLesson from "../courses/aws/09-containers-kubernetes/amazon-eks.json";
import amazonMqLesson from "../courses/aws/07-load-balancing-application-integration/amazon-mq.json";
import amazonRdsLesson from "../courses/aws/06-databases/amazon-rds.json";
import amazonRedshiftLesson from "../courses/aws/13-analytics-big-data/amazon-redshift.json";
import amazonS3Lesson from "../courses/dotnet-nuget-packages/cloud-integration/amazon-s3.json";
import amazonS3BasicsLesson from "../courses/aws/05-storage-services/amazon-s3-basics.json";
import amazonSagemakerLesson from "../courses/aws/14-ai-machine-learning/amazon-sagemaker.json";
import amazonSnsEventbridgeLesson from "../courses/aws/07-load-balancing-application-integration/amazon-sns-eventbridge.json";
import amazonSqsLesson from "../courses/aws/07-load-balancing-application-integration/amazon-sqs.json";
import amazonVpcLesson from "../courses/aws/04-networking/amazon-vpc.json";
import anatomyOfLambdaExpressionLesson from "../courses/linq/02-linq-fundamentals-syntax/anatomy-of-lambda-expression.json";
import andOrOperatorsLesson from "../courses/postgresql/querying-data/and-or-operators.json";
import angularEssentialsLesson from "../courses/yarn-npm-packages/frontend-frameworks/angular-essentials.json";
import angularRouterLesson from "../courses/yarn-npm-packages/routing/angular-router.json";
import animeJsLesson from "../courses/yarn-npm-packages/animation/anime-js.json";
import apiContractTestingLesson from "../courses/react-testing/testing-strategy-for-senior-frontend-engineers/api-contract-testing.json";
import apiControllersLesson from "../courses/aspnet-core/10-web-api-rest/api-controllers.json";
import apiDesignLesson from "../courses/senior-software-engineering/system-design-for-seniors/api-design.json";
import apiDesignPrinciplesLesson from "../courses/fullstack-security/05-secure-api-design/api-design-principles.json";
import apiErrorHandlingLesson from "../problems/aspnet-core/03-api-design-problems/api-error-handling.json";
import apiGatewayLesson from "../courses/aws/08-serverless/api-gateway.json";
import apiIntegrationLesson from "../courses/aws/15-developer-tools-application-services/api-integration.json";
import apiLatencyIncreasedFrom100msTo4SecondsHowDoYouInvestigateLesson from "../interview-qa/backend-database-follow-ups/api-latency-increased-from-100ms-to-4-seconds-how-do-you-investigate.json";
import apiManagementApisProductsAndSubscriptionsLesson from "../courses/azure/08-networking-and-api-platforms/api-management-apis-products-and-subscriptions.json";
import apiManagementAuthenticationAndSecurityLesson from "../courses/azure/08-networking-and-api-platforms/api-management-authentication-and-security.json";
import apiManagementOverviewLesson from "../courses/azure/08-networking-and-api-platforms/api-management-overview.json";
import apiManagementPoliciesLesson from "../courses/azure/08-networking-and-api-platforms/api-management-policies.json";
import apiManagementVersioningAndRevisionsLesson from "../courses/azure/08-networking-and-api-platforms/api-management-versioning-and-revisions.json";
import apiReturnsIntermittent503ResponsesWhileCpuRemainsLowLesson from "../problems/production-incident-lab-problems/backend-incidents/api-returns-intermittent-503-responses-while-cpu-remains-low.json";
import apiRoutesLesson from "../courses/next-js-full-stack-react/full-stack-api-design/api-routes.json";
import apiSecurityFundamentalsLesson from "../courses/fullstack-security/04-api-security-rate-limiting/api-security-fundamentals.json";
import apiTestingLesson from "../courses/unit-testing-dotnet/04-integration-testing/api-testing.json";
import apiVersioningLesson from "../courses/next-js-full-stack-react/full-stack-api-design/api-versioning.json";
import apiVersioningLesson1 from "../problems/aspnet-core/03-api-design-problems/api-versioning.json";
import apiVersioningAndCompatibilityLesson from "../courses/aspnet-core-web-api/production-api-design-reliability/api-versioning-and-compatibility.json";
import apolloClientLesson from "../courses/yarn-npm-packages/http-clients/apollo-client.json";
import appConfigurationFeatureFlagsAndLabelsLesson from "../courses/azure/07-identity-security-and-configuration/app-configuration-feature-flags-and-labels.json";
import appRegistrationsAndServicePrincipalsLesson from "../courses/azure/07-identity-security-and-configuration/app-registrations-and-service-principals.json";
import appRunnerLesson from "../courses/aws/09-containers-kubernetes/app-runner.json";
import appServiceAppConfigurationLesson from "../courses/azure/02-compute-and-app-hosting/app-service-app-configuration.json";
import appServiceDeploymentLesson from "../courses/azure/02-compute-and-app-hosting/app-service-deployment.json";
import appServiceDeploymentSlotsLesson from "../courses/azure/02-compute-and-app-hosting/app-service-deployment-slots.json";
import appServiceOverviewLesson from "../courses/azure/02-compute-and-app-hosting/app-service-overview.json";
import appServiceScalingAndAutoscaleLesson from "../courses/azure/02-compute-and-app-hosting/app-service-scaling-and-autoscale.json";
import appServiceVsFunctionsVsContainerAppsLesson from "../courses/azure/02-compute-and-app-hosting/app-service-vs-functions-vs-container-apps.json";
import applicationAuthenticationAndOauthLesson from "../courses/azure/07-identity-security-and-configuration/application-authentication-and-oauth.json";
import applicationDeploymentStrategiesLesson from "../courses/azure/11-application-deployment-and-devops/application-deployment-strategies.json";
import applicationGatewayOverviewLesson from "../courses/azure/08-networking-and-api-platforms/application-gateway-overview.json";
import applicationGatewayWafAndRoutingLesson from "../courses/azure/08-networking-and-api-platforms/application-gateway-waf-and-routing.json";
import applicationHealthDiagnosticsLesson from "../courses/azure/10-observability-and-application-monitoring/application-health-diagnostics.json";
import applicationInsightsLesson from "../courses/dotnet-nuget-packages/logging-monitoring/application-insights.json";
import applicationInsightsDistributedTracingLesson from "../courses/azure/production-architecture-reliability-cost/application-insights-distributed-tracing.json";
import applicationInsightsInstrumentationLesson from "../courses/azure/10-observability-and-application-monitoring/application-insights-instrumentation.json";
import applicationInsightsOverviewLesson from "../courses/azure/10-observability-and-application-monitoring/application-insights-overview.json";
import applicationInsightsRequestsDependenciesAndFailuresLesson from "../courses/azure/10-observability-and-application-monitoring/application-insights-requests-dependencies-and-failures.json";
import applicationInsightsVsAzureMonitorVsLogAnalyticsLesson from "../courses/azure/10-observability-and-application-monitoring/application-insights-vs-azure-monitor-vs-log-analytics.json";
import applicationMetricsVsLogsVsTracesLesson from "../courses/aspnet-core/performance-observability/application-metrics-vs-logs-vs-traces.json";
import applicationSecretsAndConfigurationPatternsLesson from "../courses/azure/07-identity-security-and-configuration/application-secrets-and-configuration-patterns.json";
import architectureDecisionRecordsLesson from "../courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/architecture-decision-records.json";
import architectureOverviewLesson from "../courses/postgresql/getting-started/architecture-overview.json";
import architectureReviewsLesson from "../courses/senior-software-engineering/technical-leadership/architecture-reviews.json";
import areaRoutingLesson from "../courses/aspnet-core/03-routing-urls/area-routing.json";
import arrangeActAssertLesson from "../courses/unit-testing-dotnet/01-testing-fundamentals/arrange-act-assert.json";
import arraypooltAndMemorypooltLesson from "../courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/arraypoolt-and-memorypoolt.json";
import arraysAndLinkedListsLesson from "../courses/programming-computer-web-foundations/data-structures-deep-dive/arrays-and-linked-lists.json";
import artifactVersioningLesson from "../courses/devops/ci-cd-safe-delivery/artifact-versioning.json";
import aspnetApiGatewayGrpcLesson from "../problems/system-design/aspnet-system-design/aspnet-api-gateway-grpc.json";
import aspnetB01Lesson from "../interview-qa/01-beginner-questions/aspnet-b01.json";
import aspnetB02Lesson from "../interview-qa/01-beginner-questions/aspnet-b02.json";
import aspnetBackgroundJobsProcessingLesson from "../problems/system-design/aspnet-system-design/aspnet-background-jobs-processing.json";
import aspnetCoreApiLatencyIncreased40xAfterADeploymentLesson from "../problems/production-incident-lab-problems/backend-incidents/aspnet-core-api-latency-increased-40x-after-a-deployment.json";
import aspnetDatabaseScalingLesson from "../problems/system-design/aspnet-system-design/aspnet-database-scaling.json";
import aspnetDistributedCachingLesson from "../problems/system-design/aspnet-system-design/aspnet-distributed-caching.json";
import aspnetFiltersLesson from "../interview-qa/02-intermediate-questions/aspnet-filters.json";
import aspnetI01Lesson from "../interview-qa/02-intermediate-questions/aspnet-i01.json";
import aspnetI02Lesson from "../interview-qa/02-intermediate-questions/aspnet-i02.json";
import aspnetMessagingEventDrivenLesson from "../problems/system-design/aspnet-system-design/aspnet-messaging-event-driven.json";
import aspnetMicroservicesCommunicationLesson from "../problems/system-design/aspnet-system-design/aspnet-microservices-communication.json";
import aspnetResilienceCircuitBreakerLesson from "../problems/system-design/aspnet-system-design/aspnet-resilience-circuit-breaker.json";
import assemblyLoadingAndMetadataLesson from "../courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/assembly-loading-and-metadata.json";
import assertionFrameworksLesson from "../courses/unit-testing-dotnet/06-testing-patterns/assertion-frameworks.json";
import assertionsLesson from "../courses/unit-testing-dotnet/02-xunit-basics/assertions.json";
import assetOptimizationLesson from "../courses/frontend-performance-engineering/build-optimization/asset-optimization.json";
import asyncAwaitLesson from "../courses/csharp-fundamentals/05-advanced-features/async-await.json";
import asyncAwaitPatternsLesson from "../courses/design-patterns/05-concurrency-patterns/async-await-patterns.json";
import asyncIoVsCpuBoundWorkLesson from "../courses/csharp-fundamentals/advanced-async-concurrency-threading/async-io-vs-cpu-bound-work.json";
import asyncTestingLesson from "../courses/react-testing/02-jest-basics/async-testing.json";
import asyncawaitExplainItThenExplainHowItCanCauseThreadStarvationLesson from "../interview-qa/c-net-follow-ups/asyncawait-explain-it-then-explain-how-it-can-cause-thread-starvation.json";
import atMostOnceVsAtLeastOnceDeliveryLesson from "../problems/system-design-problems/distributed-systems-fundamentals/at-most-once-vs-at-least-once-delivery.json";
import athenaEmrLesson from "../courses/aws/13-analytics-big-data/athena-emr.json";
import atmMachineLesson from "../problems/lld/atm-machine/atm-machine.json";
import attributeRoutingLesson from "../courses/aspnet-core/03-routing-urls/attribute-routing.json";
import attributeRoutingLesson1 from "../courses/aspnet-core-web-api/02-controllers-routing/attribute-routing.json";
import attributeRoutingLesson2 from "../problems/aspnet-core/01-mvc-fundamentals-problems/attribute-routing.json";
import auditingLesson from "../courses/postgresql/security-hardening/auditing.json";
import authBasicsLesson from "../courses/aspnet-core/09-authentication-authorization/auth-basics.json";
import authBasicsLesson1 from "../courses/graphql-dotnet/05-authentication/auth-basics.json";
import authFlowsTokenRefreshLesson from "../courses/react-query/09-real-world-patterns/auth-flows-token-refresh.json";
import authOverviewLesson from "../courses/aspnet-core-web-api/07-authentication-basics/auth-overview.json";
import authOverviewLesson1 from "../courses/authentication-authorization/01-auth-basics/auth-overview.json";
import auth0IntegrationLesson from "../courses/authentication-authorization/08-sso-identity-providers/auth0-integration.json";
import authenticationAndAuthorizationBoundariesLesson from "../courses/next-js-full-stack-react/app-router-rendering/authentication-and-authorization-boundaries.json";
import authenticationFlowLesson from "../courses/redux/08-redux-real-world/authentication-flow.json";
import authenticationInApisLesson from "../courses/next-js-full-stack-react/full-stack-api-design/authentication-in-apis.json";
import authenticationModesLesson from "../courses/sql-server/17-security-hardening/authentication-modes.json";
import authenticationVsAuthorizationLesson from "../courses/authentication-authorization/01-auth-basics/authentication-vs-authorization.json";
import authenticationWorksLocallyButFailsBehindAReverseProxyLesson from "../problems/production-incident-lab-problems/frontend-incidents/authentication-works-locally-but-fails-behind-a-reverse-proxy.json";
import authorizationLesson from "../courses/graphql-dotnet/05-authentication/authorization.json";
import authorizationCodeFlowLesson from "../courses/authentication-authorization/05-oauth2-flows-deep-dive/authorization-code-flow.json";
import authorizationCodeFlowWithPkceLesson from "../courses/fullstack-security/modern-web-security-identity/authorization-code-flow-with-pkce.json";
import authorizationPoliciesLesson from "../courses/aspnet-core-web-api/07-authentication-basics/authorization-policies.json";
import autoPropertiesLesson from "../courses/oops-concepts/02-encapsulation-data-hiding/auto-properties.json";
import autofixtureLesson from "../courses/dotnet-nuget-packages/07-testing-quality/autofixture.json";
import automapperLesson from "../courses/dotnet-nuget-packages/05-serialization-mapping/automapper.json";
import avoidingUnsafeTypeAssertionsLesson from "../courses/typescript-for-react/advanced-type-modeling-runtime-safety/avoiding-unsafe-type-assertions.json";
import awsAiServicesLesson from "../courses/aws/14-ai-machine-learning/aws-ai-services.json";
import awsCdkLesson from "../courses/aws/10-devops-cicd/aws-cdk.json";
import awsCloudtrailLesson from "../courses/aws/11-monitoring-logging-observability/aws-cloudtrail.json";
import awsCodeToolsLesson from "../courses/aws/10-devops-cicd/aws-code-tools.json";
import awsGlobalInfrastructureLesson from "../courses/aws/01-aws-fundamentals-cloud-concepts/aws-global-infrastructure.json";
import awsGlueEtlLesson from "../courses/aws/13-analytics-big-data/aws-glue-etl.json";
import awsKmsSecretsManagerLesson from "../courses/aws/12-security-services/aws-kms-secrets-manager.json";
import awsLambdaLesson from "../courses/aws/08-serverless/aws-lambda.json";
import awsManagementToolsLesson from "../courses/aws/01-aws-fundamentals-cloud-concepts/aws-management-tools.json";
import awsOrganizationsLesson from "../courses/aws/02-identity-access-governance/aws-organizations.json";
import awsSdkAppconfigLesson from "../courses/aws/15-developer-tools-application-services/aws-sdk-appconfig.json";
import awsSdkCoreLesson from "../courses/dotnet-nuget-packages/cloud-integration/aws-sdk-core.json";
import awsWellArchitectedFrameworkLesson from "../courses/aws/01-aws-fundamentals-cloud-concepts/aws-well-architected-framework.json";
import awsXRayLesson from "../courses/aws/11-monitoring-logging-observability/aws-x-ray.json";
import axiosLesson from "../courses/yarn-npm-packages/http-clients/axios.json";
import axiosReactLesson from "../courses/yarn-npm-packages/react-data-fetching/axios-react.json";
import azureAdIntegrationLesson from "../courses/authentication-authorization/08-sso-identity-providers/azure-ad-integration.json";
import azureAiFoundryAndModelBasedDevelopmentLesson from "../courses/azure/13-ai-services-for-azure-developers/azure-ai-foundry-and-model-based-development.json";
import azureAiSearchOverviewLesson from "../courses/azure/13-ai-services-for-azure-developers/azure-ai-search-overview.json";
import azureAiServicesOverviewLesson from "../courses/azure/13-ai-services-for-azure-developers/azure-ai-services-overview.json";
import azureAiServicesVisionLanguageAndSpeechLesson from "../courses/azure/13-ai-services-for-azure-developers/azure-ai-services-vision-language-and-speech.json";
import azureAppConfigurationOverviewLesson from "../courses/azure/07-identity-security-and-configuration/azure-app-configuration-overview.json";
import azureApplicationWorksInOneRegionButNotAnotherLesson from "../problems/production-incident-lab-problems/database-infrastructure-incidents/azure-application-works-in-one-region-but-not-another.json";
import azureArchitectureCostTradeOffsLesson from "../courses/azure/production-architecture-reliability-cost/azure-architecture-cost-trade-offs.json";
import azureCacheForRedisOverviewLesson from "../courses/azure/06-databases-and-caching/azure-cache-for-redis-overview.json";
import azureCliDeveloperToolingLesson from "../courses/azure/01-azure-developer-foundations/azure-cli-developer-tooling.json";
import azureCloudShellLesson from "../courses/azure/01-azure-developer-foundations/azure-cloud-shell.json";
import azureContainerRegistryOverviewLesson from "../courses/azure/04-containers-and-container-platforms/azure-container-registry-overview.json";
import azureDeveloperWorkflowsLesson from "../courses/azure/01-azure-developer-foundations/azure-developer-workflows.json";
import azureDevopsOverviewLesson from "../courses/azure/11-application-deployment-and-devops/azure-devops-overview.json";
import azureEventGridOverviewLesson from "../courses/azure/09-messaging-and-event-driven-architecture/azure-event-grid-overview.json";
import azureEventHubsLesson from "../courses/dotnet-nuget-packages/cloud-integration/azure-event-hubs.json";
import azureEventHubsOverviewLesson from "../courses/azure/09-messaging-and-event-driven-architecture/azure-event-hubs-overview.json";
import azureFilesLesson from "../courses/azure/05-storage-and-data-services/azure-files.json";
import azureFilesVsBlobStorageLesson from "../problems/azure/04-azure-storage-problems/azure-files-vs-blob-storage.json";
import azureFrontDoorOverviewLesson from "../courses/azure/08-networking-and-api-platforms/azure-front-door-overview.json";
import azureFunctionsOverviewLesson from "../courses/azure/03-serverless-and-azure-functions/azure-functions-overview.json";
import azureFunctionsVsAppServiceLesson from "../problems/azure/03-azure-serverless-problems/azure-functions-vs-app-service.json";
import azureIdentityLesson from "../courses/dotnet-nuget-packages/cloud-integration/azure-identity.json";
import azureKeyVaultOverviewLesson from "../courses/azure/07-identity-security-and-configuration/azure-key-vault-overview.json";
import azureKeyvaultLesson from "../courses/dotnet-nuget-packages/cloud-integration/azure-keyvault.json";
import azureMlVsAiServicesLesson from "../problems/azure/08-azure-ai-services-problems/azure-ml-vs-ai-services.json";
import azureMonitorLogsAndKqlLesson from "../courses/azure/10-observability-and-application-monitoring/azure-monitor-logs-and-kql.json";
import azureMonitorOverviewLesson from "../courses/azure/10-observability-and-application-monitoring/azure-monitor-overview.json";
import azureMonitoringStrategyLogsMetricsAndTracesLesson from "../courses/azure/production-architecture-reliability-cost/azure-monitoring-strategy-logs-metrics-and-traces.json";
import azureOpenaiChatAndCompletionsLesson from "../courses/azure/13-ai-services-for-azure-developers/azure-openai-chat-and-completions.json";
import azureOpenaiEmbeddingsAndGroundingLesson from "../courses/azure/13-ai-services-for-azure-developers/azure-openai-embeddings-and-grounding.json";
import azureOpenaiServiceOverviewLesson from "../courses/azure/13-ai-services-for-azure-developers/azure-openai-service-overview.json";
import azureOpenaiVsCognitiveServicesLesson from "../problems/azure/08-azure-ai-services-problems/azure-openai-vs-cognitive-services.json";
import azurePipelinesCiCdLesson from "../courses/azure/11-application-deployment-and-devops/azure-pipelines-ci-cd.json";
import azurePortalAndCloudShellLesson from "../courses/azure/01-azure-developer-foundations/azure-portal-and-cloud-shell.json";
import azurePricingAndCostManagementLesson from "../problems/azure/01-azure-foundations-problems/azure-pricing-and-cost-management.json";
import azureRbacScopesAndRolesLesson from "../courses/azure/07-identity-security-and-configuration/azure-rbac-scopes-and-roles.json";
import azureRegionsAvailabilityZonesLesson from "../courses/azure/01-azure-developer-foundations/azure-regions-availability-zones.json";
import azureReposAndAzurePipelinesLesson from "../courses/azure/11-application-deployment-and-devops/azure-repos-and-azure-pipelines.json";
import azureResourceHierarchyLesson from "../courses/azure/01-azure-developer-foundations/azure-resource-hierarchy.json";
import azureResourceManagerLesson from "../courses/azure/01-azure-developer-foundations/azure-resource-manager.json";
import azureServiceBusOverviewLesson from "../courses/azure/09-messaging-and-event-driven-architecture/azure-service-bus-overview.json";
import azureServicebusLesson from "../courses/dotnet-nuget-packages/cloud-integration/azure-servicebus.json";
import azureSqlAuthenticationAndAuthorizationLesson from "../courses/azure/06-databases-and-caching/azure-sql-authentication-and-authorization.json";
import azureSqlBackupHighAvailabilityAndResilienceLesson from "../courses/azure/06-databases-and-caching/azure-sql-backup-high-availability-and-resilience.json";
import azureSqlDatabaseLesson from "../courses/sql-server/20-azure-sql/azure-sql-database.json";
import azureSqlDatabaseConnectivityLesson from "../courses/azure/06-databases-and-caching/azure-sql-database-connectivity.json";
import azureSqlDatabaseOverviewLesson from "../courses/azure/06-databases-and-caching/azure-sql-database-overview.json";
import azureSqlManagedInstanceLesson from "../courses/sql-server/20-azure-sql/azure-sql-managed-instance.json";
import azureSqlQueryPerformanceAndScalingLesson from "../courses/azure/06-databases-and-caching/azure-sql-query-performance-and-scaling.json";
import azureSqlVsCosmosDbLesson from "../courses/azure/06-databases-and-caching/azure-sql-vs-cosmos-db.json";
import azureSqlVsCosmosDbLesson1 from "../problems/azure/05-azure-databases-problems/azure-sql-vs-cosmos-db.json";
import azureStorageBlobsLesson from "../courses/dotnet-nuget-packages/cloud-integration/azure-storage-blobs.json";
import azureStorageOverviewLesson from "../courses/azure/05-storage-and-data-services/azure-storage-overview.json";
import azureWorkloadScalingStrategiesLesson from "../courses/azure/production-architecture-reliability-cost/azure-workload-scaling-strategies.json";
import bTreeIndexesAndPageStructureLesson from "../courses/sql-server/database-internals-query-optimization/b-tree-indexes-and-page-structure.json";
import babelLesson from "../courses/yarn-npm-packages/build-tools/babel.json";
import backgroundJobsProcessTheSameMessageTwiceLesson from "../problems/production-incident-lab-problems/backend-incidents/background-jobs-process-the-same-message-twice.json";
import backgroundRefetchingLesson from "../courses/react-query/05-caching-strategies/background-refetching.json";
import backgroundServiceLesson from "../courses/dotnet-nuget-packages/06-messaging-events/background-service.json";
import backgroundSyncLesson from "../courses/react-query/06-offline-support-persistence/background-sync.json";
import backgroundserviceAndHostedWorkloadsLesson from "../courses/aspnet-core/asp-net-core-internals-production-hosting/backgroundservice-and-hosted-workloads.json";
import backpressureLesson from "../problems/system-design-problems/distributed-systems-fundamentals/backpressure.json";
import backupAndRecoveryLesson from "../courses/git-linux-developer-workflow/advanced-git-workflows/backup-and-recovery.json";
import backupArchivingLesson from "../courses/aws/05-storage-services/backup-archiving.json";
import backupRestoreStrategiesLesson from "../courses/sql-server/18-high-availability-dr/backup-restore-strategies.json";
import backwardCompatibleDeploymentsLesson from "../courses/devops/ci-cd-safe-delivery/backward-compatible-deployments.json";
import bankingAppLesson from "../problems/lld/banking-app/banking-app.json";
import barrierPatternLesson from "../courses/design-patterns/05-concurrency-patterns/barrier-pattern.json";
import baselineHealthyApplicationAndTelemetryLesson from "../problems/full-stack-senior-projects/project-3-production-incident-simulator/baseline-healthy-application-and-telemetry.json";
import basicTypesLesson from "../courses/typescript-for-react/01-typescript-basics/basic-types.json";
import bcryptLesson from "../courses/dotnet-nuget-packages/08-security-cryptography/bcrypt.json";
import bcryptNetLesson from "../courses/dotnet-nuget-packages/08-security-cryptography/bcrypt-net.json";
import beforeAfterTriggersLesson from "../courses/postgresql/triggers/before-after-triggers.json";
import beginnerQ1Lesson from "../interview-qa/01-beginner-questions/beginner-q1.json";
import beginnerQ10Lesson from "../interview-qa/01-beginner-questions/beginner-q10.json";
import beginnerQ11Lesson from "../interview-qa/01-beginner-questions/beginner-q11.json";
import beginnerQ12Lesson from "../interview-qa/01-beginner-questions/beginner-q12.json";
import beginnerQ13Lesson from "../interview-qa/01-beginner-questions/beginner-q13.json";
import beginnerQ14Lesson from "../interview-qa/01-beginner-questions/beginner-q14.json";
import beginnerQ15Lesson from "../interview-qa/01-beginner-questions/beginner-q15.json";
import beginnerQ16Lesson from "../interview-qa/01-beginner-questions/beginner-q16.json";
import beginnerQ17Lesson from "../interview-qa/01-beginner-questions/beginner-q17.json";
import beginnerQ18Lesson from "../interview-qa/01-beginner-questions/beginner-q18.json";
import beginnerQ19Lesson from "../interview-qa/01-beginner-questions/beginner-q19.json";
import beginnerQ2Lesson from "../interview-qa/01-beginner-questions/beginner-q2.json";
import beginnerQ20Lesson from "../interview-qa/01-beginner-questions/beginner-q20.json";
import beginnerQ21Lesson from "../interview-qa/01-beginner-questions/beginner-q21.json";
import beginnerQ3Lesson from "../interview-qa/01-beginner-questions/beginner-q3.json";
import beginnerQ4Lesson from "../interview-qa/01-beginner-questions/beginner-q4.json";
import beginnerQ5Lesson from "../interview-qa/01-beginner-questions/beginner-q5.json";
import beginnerQ6Lesson from "../interview-qa/01-beginner-questions/beginner-q6.json";
import beginnerQ7Lesson from "../interview-qa/01-beginner-questions/beginner-q7.json";
import beginnerQ8Lesson from "../interview-qa/01-beginner-questions/beginner-q8.json";
import beginnerQ9Lesson from "../interview-qa/01-beginner-questions/beginner-q9.json";
import behB01Lesson from "../interview-qa/04-scenario-based/beh-b01.json";
import benchmarkDotnetLesson from "../courses/dotnet-nuget-packages/advanced-patterns/benchmark-dotnet.json";
import bestPracticesLesson from "../courses/react-testing/05-e2e-testing/best-practices.json";
import bestTimeToBuyAndSellStockLesson from "../problems/csharp/01-array-problems/best-time-to-buy-and-sell-stock.json";
import bestTimeToBuyAndSellStockLesson1 from "../problems/csharp/05-dynamic-programming-problems/best-time-to-buy-and-sell-stock.json";
import bestTimeToBuyAndSellStockIiLesson from "../problems/csharp/05-dynamic-programming-problems/best-time-to-buy-and-sell-stock-ii.json";
import bestWaysBulkInsertsEntityFrameworkLesson from "../courses/ef-core/12-performance-bulk-operations/best-ways-bulk-inserts-entity-framework.json";
import betweenInLikeLesson from "../courses/postgresql/querying-data/between-in-like.json";
import bicepDependenciesAndResourceReferencesLesson from "../courses/azure/12-infrastructure-as-code-and-automation/bicep-dependencies-and-resource-references.json";
import bicepDeploymentAndValidationLesson from "../courses/azure/12-infrastructure-as-code-and-automation/bicep-deployment-and-validation.json";
import bicepModulesAndReusableInfrastructureLesson from "../courses/azure/12-infrastructure-as-code-and-automation/bicep-modules-and-reusable-infrastructure.json";
import bicepOverviewLesson from "../courses/azure/12-infrastructure-as-code-and-automation/bicep-overview.json";
import bicepParametersVariablesAndOutputsLesson from "../courses/azure/12-infrastructure-as-code-and-automation/bicep-parameters-variables-and-outputs.json";
import bicepResourcesAndPropertiesLesson from "../courses/azure/12-infrastructure-as-code-and-automation/bicep-resources-and-properties.json";
import bicepWithAppServiceFunctionsAndStorageLesson from "../courses/azure/12-infrastructure-as-code-and-automation/bicep-with-app-service-functions-and-storage.json";
import bicepWithDatabasesAndMessagingLesson from "../courses/azure/12-infrastructure-as-code-and-automation/bicep-with-databases-and-messaging.json";
import bicepWithManagedIdentitiesAndRbacLesson from "../courses/azure/12-infrastructure-as-code-and-automation/bicep-with-managed-identities-and-rbac.json";
import bicepWithNetworkingAndPrivateEndpointsLesson from "../courses/azure/12-infrastructure-as-code-and-automation/bicep-with-networking-and-private-endpoints.json";
import binarySearchLesson from "../problems/csharp/06-sorting-searching-problems/binary-search.json";
import binaryTreeLevelOrderTraversalLesson from "../problems/csharp/04-tree-graph-problems/binary-tree-level-order-traversal.json";
import binaryTreeMaximumPathSumLesson from "../problems/csharp/04-tree-graph-problems/binary-tree-maximum-path-sum.json";
import binaryTreeRightSideViewLesson from "../problems/csharp/04-tree-graph-problems/binary-tree-right-side-view.json";
import binaryTreeZigzagLevelOrderTraversalLesson from "../problems/csharp/04-tree-graph-problems/binary-tree-zigzag-level-order-traversal.json";
import bindingSourcesLesson from "../courses/aspnet-core/04-model-binding-validation/binding-sources.json";
import blamelessPostmortemsLesson from "../courses/senior-software-engineering/production-ownership/blameless-postmortems.json";
import blobContainersObjectsAndMetadataLesson from "../courses/azure/05-storage-and-data-services/blob-containers-objects-and-metadata.json";
import blobSasAndUserDelegationSasLesson from "../courses/azure/05-storage-and-data-services/blob-sas-and-user-delegation-sas.json";
import blobStorageAccessTiersLesson from "../problems/azure/04-azure-storage-problems/blob-storage-access-tiers.json";
import blobStorageAccessTiersAndLifecycleLesson from "../courses/azure/05-storage-and-data-services/blob-storage-access-tiers-and-lifecycle.json";
import blobStorageBasicsLesson from "../courses/azure/05-storage-and-data-services/blob-storage-basics.json";
import blobStorageFromApplicationsLesson from "../courses/azure/05-storage-and-data-services/blob-storage-from-applications.json";
import blockFileStorageLesson from "../courses/aws/05-storage-services/block-file-storage.json";
import blueGreenCanaryAndRollingDeploymentsLesson from "../courses/azure/11-application-deployment-and-devops/blue-green-canary-and-rolling-deployments.json";
import blueGreenDeploymentsLesson from "../courses/devops/ci-cd-safe-delivery/blue-green-deployments.json";
import bogusLesson from "../courses/dotnet-nuget-packages/07-testing-quality/bogus.json";
import boxingAndHiddenAllocationsLesson from "../courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/boxing-and-hidden-allocations.json";
import boxingUnboxingLesson from "../interview-qa/01-beginner-questions/boxing-unboxing.json";
import branchingStrategiesAndTrunkBasedDevelopmentLesson from "../courses/git-linux-developer-workflow/git-for-senior-engineers/branching-strategies-and-trunk-based-development.json";
import breakingDownLargeTechnicalInitiativesLesson from "../courses/senior-software-engineering/technical-leadership/breaking-down-large-technical-initiatives.json";
import brokenAccessControlAndIdorbolaLesson from "../courses/fullstack-security/modern-web-security-identity/broken-access-control-and-idorbola.json";
import btreeIndexesLesson from "../courses/postgresql/indexes/btree-indexes.json";
import buildCachingLesson from "../courses/frontend-performance-engineering/build-optimization/build-caching.json";
import buildPipelineLesson from "../courses/frontend-performance-engineering/build-optimization/build-pipeline.json";
import buildTestPackageDeployPipelineDesignLesson from "../courses/devops/ci-cd-safe-delivery/build-test-package-deploy-pipeline-design.json";
import buildVsBuyDecisionsLesson from "../courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/build-vs-buy-decisions.json";
import builderPatternLesson from "../courses/clean-code-csharp/02-creational-patterns/builder-pattern.json";
import builderPatternLesson1 from "../courses/design-patterns/01-creational-patterns/builder-pattern.json";
import buildingARepeatableProductionInvestigationWorkflowLesson from "../courses/git-linux-developer-workflow/linux-production-troubleshooting/building-a-repeatable-production-investigation-workflow.json";
import buildingAiPoweredAppsOnAzureLesson from "../problems/azure/08-azure-ai-services-problems/building-ai-powered-apps-on-azure.json";
import buildingHookLibrariesLesson from "../courses/react-advanced-patterns/07-custom-hooks-architecture/building-hook-libraries.json";
import builtInMiddlewareLesson from "../courses/aspnet-core/07-middleware-pipeline/built-in-middleware.json";
import builtInMiddlewareLesson1 from "../courses/aspnet-core-web-api/04-middleware/built-in-middleware.json";
import bulkOperationsAndLargeDataChangesLesson from "../courses/ef-core/ef-core-performance-orm-trade-offs/bulk-operations-and-large-data-changes.json";
import bulkheadsAndLoadSheddingLesson from "../problems/system-design-problems/distributed-systems-fundamentals/bulkheads-and-load-shedding.json";
import bundleAnalysisLesson from "../courses/frontend-performance-engineering/build-optimization/bundle-analysis.json";
import bundleAnalysisAndCodeSplittingLesson from "../courses/frontend-performance-engineering/browser-react-performance/bundle-analysis-and-code-splitting.json";
import bundlerFundamentalsLesson from "../courses/frontend-performance-engineering/build-optimization/bundler-fundamentals.json";
import burstBalloonsLesson from "../problems/csharp/05-dynamic-programming-problems/burst-balloons.json";
import cacheBasicsLesson from "../courses/apollo/03-caching/cache-basics.json";
import cacheConfigurationLesson from "../courses/apollo/05-client-side-caching-advanced/cache-configuration.json";
import cacheConfigurationLesson1 from "../courses/react-query/05-caching-strategies/cache-configuration.json";
import cacheInvalidationLesson from "../courses/react-query/05-caching-strategies/cache-invalidation.json";
import cachePersistenceLesson from "../courses/react-query/05-caching-strategies/cache-persistence.json";
import cacheRedirectsLesson from "../courses/apollo/05-client-side-caching-advanced/cache-redirects.json";
import cacheUpdatesLesson from "../courses/apollo/03-caching/cache-updates.json";
import cachingLesson from "../courses/graphql-dotnet/06-performance/caching.json";
import cachingAndRevalidationLesson from "../courses/next-js-full-stack-react/app-router-rendering/caching-and-revalidation.json";
import cachingStrategiesLesson from "../courses/next-js-full-stack-react/data-fetching-patterns/caching-strategies.json";
import canaryReleasesLesson from "../courses/devops/ci-cd-safe-delivery/canary-releases.json";
import cancellationtokenDesignLesson from "../courses/csharp-fundamentals/advanced-async-concurrency-threading/cancellationtoken-design.json";
import capTheoremLesson from "../problems/system-design-problems/distributed-systems-fundamentals/cap-theorem.json";
import capacityPlanningLesson from "../courses/git-linux-developer-workflow/production-readiness/capacity-planning.json";
import capacityPlanningLesson1 from "../courses/senior-software-engineering/production-ownership/capacity-planning.json";
import capacityPlanningLesson2 from "../courses/senior-software-engineering/system-design-for-seniors/capacity-planning.json";
import cartesianExplosionAndSplitQueriesLesson from "../courses/ef-core/ef-core-performance-orm-trade-offs/cartesian-explosion-and-split-queries.json";
import cdnArchitectureLesson from "../courses/programming-computer-web-foundations/networking-protocols/cdn-architecture.json";
import cdnReverseProxyAndLoadBalancerLesson from "../courses/programming-computer-web-foundations/web-networking-fundamentals/cdn-reverse-proxy-and-load-balancer.json";
import chainOfResponsibilityLesson from "../courses/clean-code-csharp/04-behavioral-patterns/chain-of-responsibility.json";
import changeTrackingLesson from "../courses/ef-core/06-change-tracking/change-tracking.json";
import channelsAndProducerConsumerPipelinesLesson from "../courses/csharp-fundamentals/advanced-async-concurrency-threading/channels-and-producer-consumer-pipelines.json";
import chatSystemHldLesson from "../problems/hld/chat-system-hld/chat-system-hld.json";
import cheatsheetLesson from "../cheatsheet/apollo/cheatsheet.json";
import cheatsheetLesson1 from "../cheatsheet/aspnet-core/cheatsheet.json";
import cheatsheetLesson2 from "../cheatsheet/aws/cheatsheet.json";
import cheatsheetLesson3 from "../cheatsheet/azure/cheatsheet.json";
import cheatsheetLesson4 from "../cheatsheet/csharp/cheatsheet.json";
import cheatsheetLesson5 from "../cheatsheet/docker-compose/cheatsheet.json";
import cheatsheetLesson6 from "../cheatsheet/ef-core/cheatsheet.json";
import cheatsheetLesson7 from "../cheatsheet/graphql/cheatsheet.json";
import cheatsheetLesson8 from "../cheatsheet/javascript/cheatsheet.json";
import cheatsheetLesson9 from "../cheatsheet/linq/cheatsheet.json";
import cheatsheetLesson10 from "../cheatsheet/react/cheatsheet.json";
import cheatsheetLesson11 from "../cheatsheet/react-router/cheatsheet.json";
import cheatsheetLesson12 from "../cheatsheet/redux/cheatsheet.json";
import cheatsheetLesson13 from "../cheatsheet/sql-server/cheatsheet.json";
import cheatsheetLesson14 from "../cheatsheet/typescript/cheatsheet.json";
import checkIfArrayIsSortedLesson from "../problems/csharp/01-array-problems/check-if-array-is-sorted.json";
import cherryPickRevertAndResetLesson from "../courses/git-linux-developer-workflow/git-for-senior-engineers/cherry-pick-revert-and-reset.json";
import chooseAnApiEvolutionStrategyForThreeClientVersionsLesson from "../problems/architecture-decision-lab-problems/architecture-trade-offs/choose-an-api-evolution-strategy-for-three-client-versions.json";
import chooseBetweenModularMonolithAndMicroservicesForANewProductLesson from "../problems/architecture-decision-lab-problems/architecture-trade-offs/choose-between-modular-monolith-and-microservices-for-a-new-product.json";
import chooseKubernetesVsManagedApplicationHostingLesson from "../problems/architecture-decision-lab-problems/architecture-trade-offs/choose-kubernetes-vs-managed-application-hosting.json";
import chooseOrchestrationVsChoreographyForADistributedWorkflowLesson from "../problems/architecture-decision-lab-problems/architecture-trade-offs/choose-orchestration-vs-choreography-for-a-distributed-workflow.json";
import chooseRedisCachingVsDatabaseOptimizationLesson from "../problems/architecture-decision-lab-problems/architecture-trade-offs/choose-redis-caching-vs-database-optimization.json";
import chooseRestVsGraphqlForAMultiClientApplicationLesson from "../problems/architecture-decision-lab-problems/architecture-trade-offs/choose-rest-vs-graphql-for-a-multi-client-application.json";
import chooseRestVsGrpcForInternalServiceCommunicationLesson from "../problems/architecture-decision-lab-problems/architecture-trade-offs/choose-rest-vs-grpc-for-internal-service-communication.json";
import chooseSqlVsNosqlForAHighWriteWorkloadLesson from "../problems/architecture-decision-lab-problems/architecture-trade-offs/choose-sql-vs-nosql-for-a-high-write-workload.json";
import chooseSynchronousProcessingVsAMessageQueueLesson from "../problems/architecture-decision-lab-problems/architecture-trade-offs/choose-synchronous-processing-vs-a-message-queue.json";
import choosingAnAzureHostingModelLesson from "../courses/azure/02-compute-and-app-hosting/choosing-an-azure-hosting-model.json";
import choosingAzureRegionAndAvailabilityZoneLesson from "../problems/azure/01-azure-foundations-problems/choosing-azure-region-and-availability-zone.json";
import choosingBetweenVmAndAppServiceLesson from "../problems/azure/02-azure-compute-problems/choosing-between-vm-and-app-service.json";
import choosingStateOwnershipBoundariesLesson from "../courses/react-advanced-patterns/modern-state-application-architecture/choosing-state-ownership-boundaries.json";
import choosingTheRightStructureLesson from "../courses/programming-computer-web-foundations/data-structures-deep-dive/choosing-the-right-structure.json";
import ciCdForAppServiceLesson from "../courses/azure/11-application-deployment-and-devops/ci-cd-for-app-service.json";
import ciCdForContainersAndAcrLesson from "../courses/azure/11-application-deployment-and-devops/ci-cd-for-containers-and-acr.json";
import ciCdForFunctionsLesson from "../courses/azure/11-application-deployment-and-devops/ci-cd-for-functions.json";
import cicdQ1Lesson from "../interview-qa/09-cicd-pipelines/cicd-q1.json";
import cicdQ2Lesson from "../interview-qa/09-cicd-pipelines/cicd-q2.json";
import cicdQ3Lesson from "../interview-qa/09-cicd-pipelines/cicd-q3.json";
import cicdQ4Lesson from "../interview-qa/09-cicd-pipelines/cicd-q4.json";
import claimsBasedAuthorizationLesson from "../courses/authentication-authorization/06-advanced-authorization/claims-based-authorization.json";
import clarifyingAmbiguousRequirementsLesson from "../courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/clarifying-ambiguous-requirements.json";
import classesObjectsLesson from "../courses/csharp-fundamentals/04-oop/classes-objects.json";
import classesObjectsLesson1 from "../courses/oops-concepts/01-oop-fundamentals/classes-objects.json";
import cleanArchitectureLesson from "../courses/clean-code-csharp/06-architecture-patterns/clean-architecture.json";
import cleanArchitectureLesson1 from "../courses/design-patterns/06-architectural-patterns/clean-architecture.json";
import cleanupFunctionsLesson from "../courses/react-fundamentals/05-lifecycle-effects/cleanup-functions.json";
import clientCredentialsFlowLesson from "../courses/authentication-authorization/05-oauth2-flows-deep-dive/client-credentials-flow.json";
import clientCredentialsForServiceToServiceCallsLesson from "../courses/fullstack-security/modern-web-security-identity/client-credentials-for-service-to-service-calls.json";
import clientEvaluationAndTranslationFailuresLesson from "../courses/ef-core/ef-core-performance-orm-trade-offs/client-evaluation-and-translation-failures.json";
import clientSideDataFetchingLesson from "../courses/next-js-full-stack-react/data-fetching-patterns/client-side-data-fetching.json";
import clientSideResolversLesson from "../courses/apollo/08-local-state-management/client-side-resolvers.json";
import clientSideValidationLesson from "../courses/aspnet-core/04-model-binding-validation/client-side-validation.json";
import climbingStairsLesson from "../problems/csharp/05-dynamic-programming-problems/climbing-stairs.json";
import cloneGraphLesson from "../problems/csharp/04-tree-graph-problems/clone-graph.json";
import cloudDeploymentLesson from "../courses/aspnet-core/12-deployment-production/cloud-deployment.json";
import cloudformationIacLesson from "../courses/aws/10-devops-cicd/cloudformation-iac.json";
import cloudfrontCdnLesson from "../courses/aws/04-networking/cloudfront-cdn.json";
import clrArchitectureAndExecutionModelLesson from "../courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/clr-architecture-and-execution-model.json";
import clrCtsClsLesson from "../interview-qa/01-beginner-questions/clr-cts-cls.json";
import clusteredVsNonclusteredIndexesLesson from "../courses/sql-server/database-internals-query-optimization/clustered-vs-nonclustered-indexes.json";
import codeFirstDbFirstLesson from "../interview-qa/02-intermediate-questions/code-first-db-first.json";
import codeOrganizationLesson from "../courses/clean-code-csharp/05-clean-code-practices/code-organization.json";
import codeSplittingLesson from "../courses/frontend-performance-engineering/build-optimization/code-splitting.json";
import codeSplittingLesson1 from "../courses/redux/07-redux-advanced-concepts/code-splitting.json";
import codeSplittingLesson2 from "../courses/yarn-npm-packages/react-performance/code-splitting.json";
import codeSplittingLazyLesson from "../courses/react-advanced-patterns/06-performance-patterns/code-splitting-lazy.json";
import coinChangeLesson from "../problems/csharp/05-dynamic-programming-problems/coin-change.json";
import collectionsLesson from "../courses/csharp-fundamentals/05-advanced-features/collections.json";
import combinationSumIvLesson from "../problems/csharp/05-dynamic-programming-problems/combination-sum-iv.json";
import commandPatternLesson from "../courses/clean-code-csharp/04-behavioral-patterns/command-pattern.json";
import commandPatternLesson1 from "../courses/design-patterns/03-behavioral-patterns/command-pattern.json";
import commitHygieneAndReleaseBranchesLesson from "../courses/git-linux-developer-workflow/git-for-senior-engineers/commit-hygiene-and-release-branches.json";
import commonDataStructuresAndWhenToUseThemLesson from "../courses/programming-computer-web-foundations/programming-computer-fundamentals/common-data-structures-and-when-to-use-them.json";
import commonPitfallsLesson from "../courses/apollo/09-ssr-nextjs-performance/common-pitfalls.json";
import communicatingTechnicalRiskLesson from "../courses/senior-software-engineering/technical-leadership/communicating-technical-risk.json";
import compensatingActionsLesson from "../problems/system-design-problems/distributed-systems-fundamentals/compensating-actions.json";
import compileTimePolymorphismLesson from "../courses/oops-concepts/04-polymorphism/compile-time-polymorphism.json";
import compiledQueriesLesson from "../courses/ef-core/ef-core-performance-orm-trade-offs/compiled-queries.json";
import compilerOptimizationsLesson from "../courses/frontend-performance-engineering/build-optimization/compiler-optimizations.json";
import compilerVsInterpreterVsRuntimeLesson from "../courses/programming-computer-web-foundations/programming-computer-fundamentals/compiler-vs-interpreter-vs-runtime.json";
import complexFiltersLesson from "../courses/graphql-dotnet/04-filtering-pagination/complex-filters.json";
import complexityAnalysisLesson from "../courses/programming-computer-web-foundations/data-structures-deep-dive/complexity-analysis.json";
import complianceAndAuditingLesson from "../courses/git-linux-developer-workflow/production-readiness/compliance-and-auditing.json";
import componentTestingVsIntegrationTestingLesson from "../courses/react-testing/testing-strategy-for-senior-frontend-engineers/component-testing-vs-integration-testing.json";
import composingComponentsLesson from "../courses/react-fundamentals/02-components-props/composing-components.json";
import compositePatternLesson from "../courses/clean-code-csharp/03-structural-patterns/composite-pattern.json";
import compositeTypesLesson from "../courses/postgresql/data-types/composite-types.json";
import compoundBasicsLesson from "../courses/react-advanced-patterns/03-compound-components/compound-basics.json";
import compoundComponentsLesson from "../courses/typescript-for-react/06-react-patterns/compound-components.json";
import compoundExamplesLesson from "../courses/react-advanced-patterns/03-compound-components/compound-examples.json";
import compoundWithContextLesson from "../courses/react-advanced-patterns/03-compound-components/compound-with-context.json";
import computeOptionsForDevelopersLesson from "../courses/azure/02-compute-and-app-hosting/compute-options-for-developers.json";
import concatConcatenationOperatorLesson from "../courses/linq/06-set-operations/concat-concatenation-operator.json";
import concurrencyHowWouldYouDiagnoseARaceConditionThatOccursOnceADayLesson from "../interview-qa/c-net-follow-ups/concurrency-how-would-you-diagnose-a-race-condition-that-occurs-once-a-day.json";
import concurrencyVsParallelismLesson from "../courses/programming-computer-web-foundations/programming-computer-fundamentals/concurrency-vs-parallelism.json";
import concurrentCollectionsLesson from "../courses/csharp-fundamentals/advanced-async-concurrency-threading/concurrent-collections.json";
import concurrentRenderingLesson from "../courses/react-fundamentals/react-internals-modern-rendering/concurrent-rendering.json";
import conditionalAndMappedTypesLesson from "../courses/typescript-for-react/04-advanced-types/conditional-and-mapped-types.json";
import conditionalRenderingLesson from "../courses/react-fundamentals/02-components-props/conditional-rendering.json";
import conditionalsLesson from "../courses/csharp-fundamentals/03-control-flow/conditionals.json";
import configmapsAndSecretsLesson from "../courses/devops/production-kubernetes-day-2-operations/configmaps-and-secrets.json";
import configurationOptionsLesson from "../courses/aspnet-core-web-api/08-logging-configuration/configuration-options.json";
import configurationTuningLesson from "../courses/postgresql/performance-tuning/configuration-tuning.json";
import configurationsInEntityFrameworkCoreLesson from "../courses/ef-core/02-dbcontext-configuration/configurations-in-entity-framework-core.json";
import configureManyToManyRelationshipsLesson from "../courses/ef-core/03-conventions-relationships/configure-many-to-many-relationships.json";
import configureOneToManyRelationshipsFluentApiLesson from "../courses/ef-core/03-conventions-relationships/configure-one-to-many-relationships-fluent-api.json";
import configureOneToOneRelationshipsFluentApiLesson from "../courses/ef-core/03-conventions-relationships/configure-one-to-one-relationships-fluent-api.json";
import configureStoreLesson from "../courses/redux/02-redux-toolkit/configure-store.json";
import configuringServicesLesson from "../courses/aspnet-core/06-dependency-injection/configuring-services.json";
import connectionManagementServerlessLesson from "../courses/prisma/06-prisma-advanced-features/connection-management-serverless.json";
import connectionPoolExhaustionLesson from "../courses/aspnet-core/performance-observability/connection-pool-exhaustion.json";
import connectionPoolExhaustionCausesCascadingApiFailuresLesson from "../problems/production-incident-lab-problems/backend-incidents/connection-pool-exhaustion-causes-cascading-api-failures.json";
import connectionPoolingLesson from "../courses/postgresql/performance-tuning/connection-pooling.json";
import connectionPoolingAndExhaustionLesson from "../courses/sql-server/concurrency-production-database-problems/connection-pooling-and-exhaustion.json";
import connectionPoolingPgbouncerLesson from "../courses/prisma/06-prisma-advanced-features/connection-pooling-pgbouncer.json";
import constructBinaryTreeFromPreorderAndInorderLesson from "../problems/csharp/04-tree-graph-problems/construct-binary-tree-from-preorder-and-inorder.json";
import constructorInjectionLesson from "../courses/aspnet-core/06-dependency-injection/constructor-injection.json";
import constructorsLesson from "../courses/oops-concepts/01-oop-fundamentals/constructors.json";
import containerAppsOverviewLesson from "../courses/azure/04-containers-and-container-platforms/container-apps-overview.json";
import containerAppsRevisionsAndIngressLesson from "../courses/azure/04-containers-and-container-platforms/container-apps-revisions-and-ingress.json";
import containerAppsScalingAndDaprLesson from "../courses/azure/04-containers-and-container-platforms/container-apps-scaling-and-dapr.json";
import containerAppsVsAksLesson from "../courses/azure/04-containers-and-container-platforms/container-apps-vs-aks.json";
import containerHealthChecksLesson from "../courses/devops/production-docker-container-security/container-health-checks.json";
import containerImageDeploymentWorksLocallyButFailsInProductionLesson from "../problems/production-incident-lab-problems/database-infrastructure-incidents/container-image-deployment-works-locally-but-fails-in-production.json";
import containerNetworkingLesson from "../courses/devops/production-docker-container-security/container-networking.json";
import containerSecretsLesson from "../courses/devops/production-docker-container-security/container-secrets.json";
import containerWithMostWaterLesson from "../problems/csharp/01-array-problems/container-with-most-water.json";
import containersAndContainerImagesLesson from "../courses/azure/04-containers-and-container-platforms/containers-and-container-images.json";
import containsDuplicateLesson from "../problems/csharp/01-array-problems/contains-duplicate.json";
import containsQuantifierOperatorLesson from "../courses/linq/08-quantifiers-element-operators/contains-quantifier-operator.json";
import contentNegotiationLesson from "../problems/aspnet-core/03-api-design-problems/content-negotiation.json";
import contextApiDeepDiveLesson from "../courses/next-js-full-stack-react/state-management/context-api-deep-dive.json";
import continuousMonitoringLesson from "../courses/frontend-performance-engineering/runtime-performance/continuous-monitoring.json";
import controlPropsBasicsLesson from "../courses/react-advanced-patterns/05-control-props/control-props-basics.json";
import controlPropsExamplesLesson from "../courses/react-advanced-patterns/05-control-props/control-props-examples.json";
import controlPropsWithFormsLesson from "../courses/react-advanced-patterns/05-control-props/control-props-with-forms.json";
import controlledComponentsLesson from "../courses/react-fundamentals/03-state-events/controlled-components.json";
import controlledComponentsLesson1 from "../courses/yarn-npm-packages/react-forms-input/controlled-components.json";
import controlledComponentsLesson2 from "../interview-qa/02-intermediate-questions/controlled-components.json";
import controllerActionsAndResultsLesson from "../problems/aspnet-core/01-mvc-fundamentals-problems/controller-actions-and-results.json";
import controllersAndActionsLesson from "../courses/aspnet-core/02-mvc-fundamentals/controllers-and-actions.json";
import conventionsRelationshipsLesson from "../courses/ef-core/03-conventions-relationships/conventions-relationships.json";
import conversionOperatorsLesson from "../courses/linq/10-conversion-generation-operators/conversion-operators.json";
import cookieAuthLesson from "../courses/authentication-authorization/01-auth-basics/cookie-auth.json";
import cookieAuthenticationLesson from "../problems/aspnet-core/07-authentication-authorization-problems/cookie-authentication.json";
import cookiesSessionsAndBrowserStorageLesson from "../courses/programming-computer-web-foundations/web-networking-fundamentals/cookies-sessions-and-browser-storage.json";
import copyBulkLoadLesson from "../courses/postgresql/data-modification-dml/copy-bulk-load.json";
import coreWebVitalsDegradeAfterAddingANewDashboardLesson from "../problems/production-incident-lab-problems/frontend-incidents/core-web-vitals-degrade-after-adding-a-new-dashboard.json";
import coreWebVitalsLcpInpAndClsLesson from "../courses/frontend-performance-engineering/browser-react-performance/core-web-vitals-lcp-inp-and-cls.json";
import correlatedSubqueriesLesson from "../courses/postgresql/grouping-aggregation-subqueries/correlated-subqueries.json";
import corsAndPreflightRequestsLesson from "../courses/programming-computer-web-foundations/web-networking-fundamentals/cors-and-preflight-requests.json";
import corsBestPracticesLesson from "../courses/fullstack-security/01-cors-configuration/cors-best-practices.json";
import corsConfigurationLesson from "../problems/aspnet-core/04-middleware-pipeline-problems/cors-configuration.json";
import corsInAspnetCoreLesson from "../courses/fullstack-security/01-cors-configuration/cors-in-aspnet-core.json";
import corsWithReactLesson from "../courses/fullstack-security/01-cors-configuration/cors-with-react.json";
import cosmosDbConsistencyAndDistributionLesson from "../courses/azure/06-databases-and-caching/cosmos-db-consistency-and-distribution.json";
import cosmosDbDataModelingLesson from "../courses/azure/06-databases-and-caching/cosmos-db-data-modeling.json";
import cosmosDbOverviewLesson from "../courses/azure/06-databases-and-caching/cosmos-db-overview.json";
import cosmosDbPartitionKeysLesson from "../courses/azure/06-databases-and-caching/cosmos-db-partition-keys.json";
import cosmosDbRequestUnitsAndPerformanceLesson from "../courses/azure/06-databases-and-caching/cosmos-db-request-units-and-performance.json";
import cosmosDbSdkAndDeveloperPatternsLesson from "../courses/azure/06-databases-and-caching/cosmos-db-sdk-and-developer-patterns.json";
import costAsAnArchitectureConstraintLesson from "../courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/cost-as-an-architecture-constraint.json";
import costOptimizationLesson from "../courses/senior-software-engineering/system-design-for-seniors/cost-optimization.json";
import countAndSayLesson from "../problems/csharp/02-string-problems/count-and-say.json";
import countCompleteTreeNodesLesson from "../problems/csharp/04-tree-graph-problems/count-complete-tree-nodes.json";
import countDigitsInNumberLesson from "../problems/csharp/07-recursion-problems/count-digits-in-number.json";
import countTotalSetBitsLesson from "../problems/csharp/08-bitwise-problems/count-total-set-bits.json";
import countingBitsLesson from "../problems/csharp/05-dynamic-programming-problems/counting-bits.json";
import courseScheduleLesson from "../problems/csharp/04-tree-graph-problems/course-schedule.json";
import coverageMetricsLesson from "../courses/unit-testing-dotnet/07-code-coverage/coverage-metrics.json";
import coverageReportingLesson from "../courses/unit-testing-dotnet/07-code-coverage/coverage-reporting.json";
import coveringIndexesLesson from "../courses/postgresql/indexes/covering-indexes.json";
import coverletCollectorLesson from "../courses/unit-testing-dotnet/07-code-coverage/coverlet-collector.json";
import cpuMemoryAndDiskInvestigationLesson from "../courses/git-linux-developer-workflow/linux-production-troubleshooting/cpu-memory-and-disk-investigation.json";
import cpuMemoryStorageAndIoLesson from "../courses/programming-computer-web-foundations/programming-computer-fundamentals/cpu-memory-storage-and-io.json";
import cpuProfilingLesson from "../courses/frontend-performance-engineering/runtime-performance/cpu-profiling.json";
import cqrsLesson from "../problems/system-design-problems/distributed-systems-fundamentals/cqrs.json";
import cqrsBasicsLesson from "../courses/design-patterns/04-enterprise-patterns/cqrs-basics.json";
import cqrsPatternLesson from "../courses/clean-code-csharp/06-architecture-patterns/cqrs-pattern.json";
import createAsyncThunkLesson from "../courses/redux/02-redux-toolkit/create-async-thunk.json";
import createDatabaseLesson from "../courses/postgresql/database-schema-table-objects/create-database.json";
import createSchemaLesson from "../courses/postgresql/database-schema-table-objects/create-schema.json";
import createSliceLesson from "../courses/redux/02-redux-toolkit/create-slice.json";
import createTableLesson from "../courses/postgresql/database-schema-table-objects/create-table.json";
import createUpdateDeleteOpsLesson from "../courses/prisma/03-prisma-queries-mutations/create-update-delete-ops.json";
import creatingFirstGraphqlServerLesson from "../courses/graphql-dotnet/01-getting-started/creating-first-graphql-server.json";
import creatingFirstProjectLesson from "../courses/aspnet-core/01-getting-started/creating-first-project.json";
import creatingJwtLesson from "../courses/authentication-authorization/02-jwt/creating-jwt.json";
import creatingPackagesLesson from "../courses/dotnet-nuget-packages/01-nuget-fundamentals/creating-packages.json";
import creatingProjectLesson from "../courses/aspnet-core-web-api/01-getting-started/creating-project.json";
import credentialHandlingLesson from "../courses/fullstack-security/07-environment-secrets/credential-handling.json";
import cronosLesson from "../courses/dotnet-nuget-packages/06-messaging-events/cronos.json";
import crossJoinLesson from "../courses/postgresql/joins/cross-join.json";
import cryptoJsLesson from "../courses/yarn-npm-packages/utilities/crypto-js.json";
import csharpA01Lesson from "../interview-qa/03-advanced-questions/csharp-a01.json";
import csharpA02Lesson from "../interview-qa/03-advanced-questions/csharp-a02.json";
import csharpA03Lesson from "../interview-qa/03-advanced-questions/csharp-a03.json";
import csharpB01Lesson from "../interview-qa/01-beginner-questions/csharp-b01.json";
import csharpB02Lesson from "../interview-qa/01-beginner-questions/csharp-b02.json";
import csharpI01Lesson from "../interview-qa/02-intermediate-questions/csharp-i01.json";
import csharpI02Lesson from "../interview-qa/02-intermediate-questions/csharp-i02.json";
import csharpI03Lesson from "../interview-qa/02-intermediate-questions/csharp-i03.json";
import csharpI04Lesson from "../interview-qa/02-intermediate-questions/csharp-i04.json";
import csharpI05Lesson from "../interview-qa/02-intermediate-questions/csharp-i05.json";
import csharpI06Lesson from "../interview-qa/02-intermediate-questions/csharp-i06.json";
import csharpPropertiesLesson from "../interview-qa/01-beginner-questions/csharp-properties.json";
import cspAndBrowserSecurityHeadersLesson from "../courses/fullstack-security/modern-web-security-identity/csp-and-browser-security-headers.json";
import csrfAndSameSiteCookiesLesson from "../courses/fullstack-security/modern-web-security-identity/csrf-and-same-site-cookies.json";
import csrfProtectionAspnetLesson from "../courses/fullstack-security/03-xss-csrf-protection/csrf-protection-aspnet.json";
import csrfXssProtectionLesson from "../courses/authentication-authorization/09-security-best-practices/csrf-xss-protection.json";
import cssModulesLesson from "../courses/react-fundamentals/08-styling/css-modules.json";
import cssModulesLesson1 from "../courses/yarn-npm-packages/styling/css-modules.json";
import csvhelperLesson from "../courses/dotnet-nuget-packages/05-serialization-mapping/csvhelper.json";
import ctesLesson from "../courses/postgresql/grouping-aggregation-subqueries/ctes.json";
import customAuthorizationHandlersLesson from "../courses/authentication-authorization/06-advanced-authorization/custom-authorization-handlers.json";
import customCacheResolversLesson from "../courses/apollo/05-client-side-caching-advanced/custom-cache-resolvers.json";
import customExceptionsLesson from "../courses/graphql-dotnet/07-error-handling/custom-exceptions.json";
import customHookTestingLesson from "../courses/react-advanced-patterns/10-advanced-hook-patterns/custom-hook-testing.json";
import customHooksLesson from "../courses/react-fundamentals/05-lifecycle-effects/custom-hooks.json";
import customHooksLesson1 from "../courses/react-query/04-advanced-features/custom-hooks.json";
import customHooksLesson2 from "../courses/redux/07-redux-advanced-concepts/custom-hooks.json";
import customHooksLesson3 from "../courses/yarn-npm-packages/react-hooks-patterns/custom-hooks.json";
import customHooksTypesLesson from "../courses/typescript-for-react/03-typing-hooks/custom-hooks-types.json";
import customMiddlewareLesson from "../courses/aspnet-core/07-middleware-pipeline/custom-middleware.json";
import customMiddlewareLesson1 from "../courses/aspnet-core-web-api/04-middleware/custom-middleware.json";
import customMiddlewareLesson2 from "../problems/aspnet-core/04-middleware-pipeline-problems/custom-middleware.json";
import customValidationLesson from "../courses/aspnet-core/04-model-binding-validation/custom-validation.json";
import cypressLesson from "../courses/yarn-npm-packages/testing/cypress.json";
import cypressCommandsLesson from "../courses/react-testing/05-e2e-testing/cypress-commands.json";
import cypressComponentLesson from "../courses/yarn-npm-packages/react-testing/cypress-component.json";
import cypressIntroLesson from "../courses/react-testing/05-e2e-testing/cypress-intro.json";
import dapperLesson from "../courses/dotnet-nuget-packages/04-database-data-access/dapper.json";
import dataDrivenTestsLesson from "../courses/unit-testing-dotnet/02-xunit-basics/data-driven-tests.json";
import dataModelingLesson from "../courses/senior-software-engineering/system-design-for-seniors/data-modeling.json";
import dataOperationsConnectedLesson from "../courses/ef-core/04-data-operations-connected/data-operations-connected.json";
import dataOperationsDisconnectedLesson from "../courses/ef-core/05-data-operations-disconnected/data-operations-disconnected.json";
import dataProtectionLesson from "../courses/dotnet-nuget-packages/08-security-cryptography/data-protection.json";
import dataWarehouseFundamentalsLesson from "../courses/sql-server/19-data-warehousing/data-warehouse-fundamentals.json";
import dataannotationsLesson from "../courses/dotnet-nuget-packages/validation-authorization/dataannotations.json";
import databaseCapacityPlanningLesson from "../courses/sql-server/concurrency-production-database-problems/database-capacity-planning.json";
import databaseEngineTuningAdvisorLesson from "../courses/sql-server/16-performance-tuning/database-engine-tuning-advisor.json";
import databaseFirstDiagnosticsLesson from "../courses/ef-core/11-database-first-diagnostics/database-first-diagnostics.json";
import databaseMigrationAndDataMovementLesson from "../courses/azure/06-databases-and-caching/database-migration-and-data-movement.json";
import databaseMigrationSafetyLesson from "../courses/devops/ci-cd-safe-delivery/database-migration-safety.json";
import databaseMigrationStrategiesLesson from "../problems/azure/05-azure-databases-problems/database-migration-strategies.json";
import databaseMirroringLesson from "../courses/sql-server/18-high-availability-dr/database-mirroring.json";
import databaseTestingLesson from "../courses/unit-testing-dotnet/04-integration-testing/database-testing.json";
import dataloaderLesson from "../courses/graphql-dotnet/06-performance/dataloader.json";
import dateFnsLesson from "../courses/yarn-npm-packages/utilities/date-fns.json";
import dateTimeTypesLesson from "../courses/postgresql/data-types/date-time-types.json";
import day2TroubleshootingWorkflowLesson from "../courses/devops/production-kubernetes-day-2-operations/day-2-troubleshooting-workflow.json";
import dbcontextAndMigrationsLesson from "../courses/aspnet-core/08-entity-framework-core/dbcontext-and-migrations.json";
import dbcontextConfigurationLesson from "../courses/ef-core/02-dbcontext-configuration/dbcontext-configuration.json";
import dbcontextConfigurationLesson1 from "../problems/aspnet-core/06-ef-core-problems/dbcontext-configuration.json";
import dbcontextInEntityFrameworkCoreLesson from "../courses/ef-core/02-dbcontext-configuration/dbcontext-in-entity-framework-core.json";
import deadLetterQueuesLesson from "../problems/system-design-problems/distributed-systems-fundamentals/dead-letter-queues.json";
import deadlocksAndDeadlockGraphsLesson from "../courses/sql-server/concurrency-production-database-problems/deadlocks-and-deadlock-graphs.json";
import deadlocksIncreaseSharplyDuringPeakTrafficLesson from "../problems/production-incident-lab-problems/database-infrastructure-incidents/deadlocks-increase-sharply-during-peak-traffic.json";
import deadlocksStarvationAndLivelocksLesson from "../courses/csharp-fundamentals/advanced-async-concurrency-threading/deadlocks-starvation-and-livelocks.json";
import debuggingPerformanceLesson from "../courses/frontend-performance-engineering/runtime-performance/debugging-performance.json";
import debuggingTechniquesLesson from "../courses/aspnet-core/11-testing-debugging/debugging-techniques.json";
import decideWhetherAProposedMicroserviceShouldActuallyExistLesson from "../problems/architecture-decision-lab-problems/architecture-trade-offs/decide-whether-a-proposed-microservice-should-actually-exist.json";
import decisionDocumentationLesson from "../courses/senior-software-engineering/technical-decision-making/decision-documentation.json";
import decisionReviewsLesson from "../courses/senior-software-engineering/technical-decision-making/decision-reviews.json";
import declarationMergingAndModuleAugmentationLesson from "../courses/typescript-for-react/advanced-type-modeling-runtime-safety/declaration-merging-and-module-augmentation.json";
import decodeWaysLesson from "../problems/csharp/02-string-problems/decode-ways.json";
import decodeWaysLesson1 from "../problems/csharp/05-dynamic-programming-problems/decode-ways.json";
import decoratorPatternLesson from "../courses/clean-code-csharp/03-structural-patterns/decorator-pattern.json";
import decoratorPatternLesson1 from "../courses/design-patterns/02-structural-patterns/decorator-pattern.json";
import defaultInterfaceMethodsLesson from "../courses/oops-concepts/06-interfaces-abstract-classes/default-interface-methods.json";
import defaultifemptyOperatorLesson from "../courses/linq/10-conversion-generation-operators/defaultifempty-operator.json";
import delegatesEventsLesson from "../courses/csharp-fundamentals/05-advanced-features/delegates-events.json";
import delegatesEventsLesson1 from "../interview-qa/01-beginner-questions/delegates-events.json";
import deleteLesson from "../courses/postgresql/data-modification-dml/delete.json";
import deleteDataDisconnectedScenarioLesson from "../courses/ef-core/05-data-operations-disconnected/delete-data-disconnected-scenario.json";
import dependencyInjectionLesson from "../courses/clean-code-csharp/06-architecture-patterns/dependency-injection.json";
import dependencyInjectionLesson1 from "../courses/yarn-npm-packages/advanced-patterns/dependency-injection.json";
import dependencyInjectionLifetimesAndScopeValidationLesson from "../courses/aspnet-core/asp-net-core-internals-production-hosting/dependency-injection-lifetimes-and-scope-validation.json";
import dependencyInjectionWhatHappensWhenASingletonDependsOnAScopedServiceLesson from "../interview-qa/c-net-follow-ups/dependency-injection-what-happens-when-a-singleton-depends-on-a-scoped-service.json";
import dependencyInversionLesson from "../courses/clean-code-csharp/01-solid-principles/dependency-inversion.json";
import dependencyScanningLesson from "../courses/fullstack-security/06-dependency-security/dependency-scanning.json";
import dependentQueriesLesson from "../courses/react-query/02-query-hooks/dependent-queries.json";
import deployingContainerizedAppsOnAksLesson from "../problems/azure/02-azure-compute-problems/deploying-containerized-apps-on-aks.json";
import deploymentArchitectureForNextjsLesson from "../courses/next-js-full-stack-react/app-router-rendering/deployment-architecture-for-nextjs.json";
import deploymentOptionsLesson from "../courses/aspnet-core/12-deployment-production/deployment-options.json";
import deploymentPipelinesLesson from "../courses/git-linux-developer-workflow/production-readiness/deployment-pipelines.json";
import deploymentSecretsAndEnvironmentConfigurationLesson from "../courses/azure/11-application-deployment-and-devops/deployment-secrets-and-environment-configuration.json";
import deploymentSetupLesson from "../courses/redux/08-redux-real-world/deployment-setup.json";
import deploymentSlotsAndSlotSwappingLesson from "../courses/azure/11-application-deployment-and-devops/deployment-slots-and-slot-swapping.json";
import derivedDataLesson from "../courses/redux/05-redux-patterns/derived-data.json";
import derivedStateAndAvoidingDuplicatedStateLesson from "../courses/react-advanced-patterns/modern-state-application-architecture/derived-state-and-avoiding-duplicated-state.json";
import designReviewsLesson from "../courses/senior-software-engineering/system-design-for-seniors/design-reviews.json";
import designingEventDrivenServerlessArchitectureLesson from "../problems/azure/03-azure-serverless-problems/designing-event-driven-serverless-architecture.json";
import designingTypeSafeComponentApisLesson from "../courses/typescript-for-react/advanced-type-modeling-runtime-safety/designing-type-safe-component-apis.json";
import devtoolsLesson from "../courses/redux/01-redux-fundamentals/devtools.json";
import diBasicsLesson from "../courses/aspnet-core/06-dependency-injection/di-basics.json";
import diBasicsLesson1 from "../courses/aspnet-core-web-api/05-dependency-injection/di-basics.json";
import diagnosingAPortThatIsNotReachableLesson from "../courses/git-linux-developer-workflow/linux-production-troubleshooting/diagnosing-a-port-that-is-not-reachable.json";
import diagnosingAsyncPerformanceProblemsLesson from "../courses/csharp-fundamentals/advanced-async-concurrency-threading/diagnosing-async-performance-problems.json";
import digitalRootLesson from "../problems/csharp/07-recursion-problems/digital-root.json";
import disasterRecoveryLesson from "../courses/git-linux-developer-workflow/production-readiness/disaster-recovery.json";
import disasterRecoveryLesson1 from "../courses/postgresql/high-availability-dr/disaster-recovery.json";
import disasterRecoveryPlanningLesson from "../courses/azure/production-architecture-reliability-cost/disaster-recovery-planning.json";
import disasterRecoveryTestingLesson from "../courses/senior-software-engineering/production-ownership/disaster-recovery-testing.json";
import discriminatedUnionsLesson from "../courses/typescript-for-react/advanced-type-modeling-runtime-safety/discriminated-unions.json";
import disjointSetsLesson from "../courses/programming-computer-web-foundations/data-structures-deep-dive/disjoint-sets.json";
import distinctSetOperatorLesson from "../courses/linq/06-set-operations/distinct-set-operator.json";
import distributedTracingAcrossServicesLesson from "../courses/aspnet-core/performance-observability/distributed-tracing-across-services.json";
import distributedTracingAndOpenTelemetryLesson from "../courses/azure/10-observability-and-application-monitoring/distributed-tracing-and-open-telemetry.json";
import distributedTransactionsLesson from "../problems/system-design-problems/distributed-systems-fundamentals/distributed-transactions.json";
import dnsAndNetworkTroubleshootingFromLinuxLesson from "../courses/git-linux-developer-workflow/linux-production-troubleshooting/dns-and-network-troubleshooting-from-linux.json";
import dnsInDepthLesson from "../courses/programming-computer-web-foundations/networking-protocols/dns-in-depth.json";
import dnsResolutionFromBrowserToServerLesson from "../courses/programming-computer-web-foundations/web-networking-fundamentals/dns-resolution-from-browser-to-server.json";
import dockerContainerizationLesson from "../courses/aspnet-core/12-deployment-production/docker-containerization.json";
import dockerEcrLesson from "../courses/aws/09-containers-kubernetes/docker-ecr.json";
import dockerfilesAndContainerDevelopmentLesson from "../courses/azure/04-containers-and-container-platforms/dockerfiles-and-container-development.json";
import documentationLesson from "../courses/next-js-full-stack-react/full-stack-api-design/documentation.json";
import dotnetVersionsLesson from "../interview-qa/02-intermediate-questions/dotnet-versions.json";
import dropTableLesson from "../courses/postgresql/database-schema-table-objects/drop-table.json";
import dropboxStorageLesson from "../problems/hld/dropbox-storage/dropbox-storage.json";
import dryPrincipleLesson from "../courses/oops-concepts/07-design-principles/dry-principle.json";
import duplicateMessagesAndIdempotencyLesson from "../problems/system-design-problems/distributed-systems-fundamentals/duplicate-messages-and-idempotency.json";
import duplicatePaymentRequestsCreateDuplicateBusinessRecordsLesson from "../problems/production-incident-lab-problems/backend-incidents/duplicate-payment-requests-create-duplicate-business-records.json";
import dynamicImportsLesson from "../courses/frontend-performance-engineering/build-optimization/dynamic-imports.json";
import dynamodbNosqlLesson from "../courses/aws/06-databases/dynamodb-nosql.json";
import eagerVsLazyLoadingLesson from "../problems/aspnet-core/06-ef-core-problems/eager-vs-lazy-loading.json";
import ec2AutoScalingLesson from "../courses/aws/03-compute-services/ec2-auto-scaling.json";
import ec2FundamentalsLesson from "../courses/aws/03-compute-services/ec2-fundamentals.json";
import ec2InstancesStorageLesson from "../courses/aws/03-compute-services/ec2-instances-storage.json";
import ecommerceHldLesson from "../problems/hld/ecommerce-hld/ecommerce-hld.json";
import edgeRuntimeVsNodeRuntimeLesson from "../courses/next-js-full-stack-react/app-router-rendering/edge-runtime-vs-node-runtime.json";
import editDistanceLesson from "../problems/csharp/05-dynamic-programming-problems/edit-distance.json";
import efCoreMigrationsUsingCliLesson from "../courses/ef-core/09-migrations/ef-core-migrations-using-cli.json";
import efCoreTablePerConcreteTypeTpcLesson from "../courses/ef-core/08-inheritance-strategies/ef-core-table-per-concrete-type-tpc.json";
import efCoreTablePerHierarchyTphLesson from "../courses/ef-core/08-inheritance-strategies/ef-core-table-per-hierarchy-tph.json";
import efCoreTablePerTypeTptLesson from "../courses/ef-core/08-inheritance-strategies/ef-core-table-per-type-tpt.json";
import efCoreVsDapperVsRawSqlLesson from "../courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/ef-core-vs-dapper-vs-raw-sql.json";
import efCoreVsDapperVsRawSqlLesson1 from "../courses/ef-core/ef-core-performance-orm-trade-offs/ef-core-vs-dapper-vs-raw-sql.json";
import efcoreIntroductionLesson from "../courses/aspnet-core/08-entity-framework-core/efcore-introduction.json";
import effectiveCodeReviewsLesson from "../courses/senior-software-engineering/technical-leadership/effective-code-reviews.json";
import elasticLoadBalancingLesson from "../courses/aws/07-load-balancing-application-integration/elastic-load-balancing.json";
import elasticsearchLesson from "../courses/dotnet-nuget-packages/logging-monitoring/elasticsearch.json";
import elementatElementatordefaultLesson from "../courses/linq/08-quantifiers-element-operators/elementat-elementatordefault.json";
import elevatorSystemLesson from "../problems/lld/elevator-system/elevator-system.json";
import emailCommunicationLesson from "../courses/aws/15-developer-tools-application-services/email-communication.json";
import emotionLesson from "../courses/yarn-npm-packages/styling/emotion.json";
import encapsulationLesson from "../courses/csharp-fundamentals/04-oop/encapsulation.json";
import encapsulationBasicsLesson from "../courses/oops-concepts/02-encapsulation-data-hiding/encapsulation-basics.json";
import encryptionAtRestLesson from "../courses/postgresql/security-hardening/encryption-at-rest.json";
import encryptionTdeLesson from "../courses/sql-server/17-security-hardening/encryption-tde.json";
import endpointRoutingInternalsLesson from "../courses/aspnet-core/asp-net-core-internals-production-hosting/endpoint-routing-internals.json";
import enterpriseCicdPipelineDesignLesson from "../problems/system-design/devops-system-design/enterprise-cicd-pipeline-design.json";
import enterpriseGitLesson from "../courses/git-linux-developer-workflow/advanced-git-workflows/enterprise-git.json";
import entityAdapterLesson from "../courses/redux/05-redux-patterns/entity-adapter.json";
import entityFrameworkCoreLesson from "../courses/dotnet-nuget-packages/04-database-data-access/entity-framework-core.json";
import entityFrameworkCoreChangeTrackingLesson from "../courses/ef-core/06-change-tracking/entity-framework-core-change-tracking.json";
import entityFrameworkCoreConcurrencyConflictsLesson from "../courses/ef-core/10-advanced-features/entity-framework-core-concurrency-conflicts.json";
import entityFrameworkCoreConventionsLesson from "../courses/ef-core/03-conventions-relationships/entity-framework-core-conventions.json";
import entityFrameworkCoreInterceptorsLesson from "../courses/ef-core/10-advanced-features/entity-framework-core-interceptors.json";
import entityFrameworkCoreSavingDataConnectedLesson from "../courses/ef-core/04-data-operations-connected/entity-framework-core-saving-data-connected.json";
import entityFrameworkCoreTutorialsLesson from "../courses/ef-core/01-getting-started-ef-core/entity-framework-core-tutorials.json";
import entityFrameworkCoreWithExistingDatabaseLesson from "../courses/ef-core/11-database-first-diagnostics/entity-framework-core-with-existing-database.json";
import entityFrameworkExtensionsPerformanceLesson from "../courses/ef-core/12-performance-bulk-operations/entity-framework-extensions-performance.json";
import enumsAndLiteralTypesLesson from "../courses/typescript-for-react/01-typescript-basics/enums-and-literal-types.json";
import enumsAndNativeTypesLesson from "../courses/prisma/02-prisma-schema-design/enums-and-native-types.json";
import environmentConfigurationLesson from "../courses/fullstack-security/07-environment-secrets/environment-configuration.json";
import environmentPromotionLesson from "../courses/devops/ci-cd-safe-delivery/environment-promotion.json";
import errorBoundariesLesson from "../courses/react-fundamentals/05-lifecycle-effects/error-boundaries.json";
import errorBoundariesAndFailureIsolationLesson from "../courses/react-fundamentals/react-internals-modern-rendering/error-boundaries-and-failure-isolation.json";
import errorBoundariesLoadingLesson from "../courses/yarn-npm-packages/react-data-fetching/error-boundaries-loading.json";
import errorBoundariesTypedLesson from "../courses/typescript-for-react/06-react-patterns/error-boundaries-typed.json";
import errorBudgetsLesson from "../courses/senior-software-engineering/production-ownership/error-budgets.json";
import errorHandlingLesson from "../courses/apollo/04-advanced-patterns/error-handling.json";
import errorHandlingLesson1 from "../courses/clean-code-csharp/05-clean-code-practices/error-handling.json";
import errorHandlingLesson2 from "../courses/csharp-fundamentals/06-error-handling/error-handling.json";
import errorHandlingLesson3 from "../courses/next-js-full-stack-react/full-stack-api-design/error-handling.json";
import errorHandlingLesson4 from "../courses/prisma/06-prisma-advanced-features/error-handling.json";
import errorHandlingLesson5 from "../courses/redux/08-redux-real-world/error-handling.json";
import errorHandlingBasicsLesson from "../courses/apollo/06-error-handling-optimistic/error-handling-basics.json";
import errorHandlingBasicsLesson1 from "../courses/graphql-dotnet/07-error-handling/error-handling-basics.json";
import errorHandlingInDataFetchingLesson from "../courses/next-js-full-stack-react/data-fetching-patterns/error-handling-in-data-fetching.json";
import errorHandlingStrategiesLesson from "../courses/react-query/04-advanced-features/error-handling-strategies.json";
import errorLoggingMonitoringLesson from "../courses/graphql-dotnet/07-error-handling/error-logging-monitoring.json";
import errorPoliciesLesson from "../courses/apollo/06-error-handling-optimistic/error-policies.json";
import esbuildLesson from "../courses/yarn-npm-packages/build-tools/esbuild.json";
import estimationAndUncertaintyLesson from "../courses/senior-software-engineering/technical-leadership/estimation-and-uncertainty.json";
import etagsAndConditionalRequestsLesson from "../courses/aspnet-core-web-api/production-api-design-reliability/etags-and-conditional-requests.json";
import evaluatingTechnicalOptionsLesson from "../courses/senior-software-engineering/technical-decision-making/evaluating-technical-options.json";
import eventDrivenApplicationPatternsLesson from "../courses/azure/09-messaging-and-event-driven-architecture/event-driven-application-patterns.json";
import eventGridTopicsEventsAndEventSubscriptionsLesson from "../courses/azure/09-messaging-and-event-driven-architecture/event-grid-topics-events-and-event-subscriptions.json";
import eventGridWithAzureFunctionsLesson from "../courses/azure/09-messaging-and-event-driven-architecture/event-grid-with-azure-functions.json";
import eventHubsPartitionsAndConsumerGroupsLesson from "../courses/azure/09-messaging-and-event-driven-architecture/event-hubs-partitions-and-consumer-groups.json";
import eventHubsStreamProcessingLesson from "../courses/azure/09-messaging-and-event-driven-architecture/event-hubs-stream-processing.json";
import eventSourcingLesson from "../problems/system-design-problems/distributed-systems-fundamentals/event-sourcing.json";
import exceptLesson from "../courses/postgresql/set-operations/except.json";
import exceptSetOperatorLesson from "../courses/linq/06-set-operations/except-set-operator.json";
import exceptionHandlingLesson from "../courses/aspnet-core/07-middleware-pipeline/exception-handling.json";
import exceptionHandlingLesson1 from "../courses/postgresql/transactions-error-handling-backup/exception-handling.json";
import exceptionHandlingMiddlewareLesson from "../problems/aspnet-core/04-middleware-pipeline-problems/exception-handling-middleware.json";
import exceptionTypesLesson from "../courses/csharp-fundamentals/06-error-handling/exception-types.json";
import exclusionConstraintsLesson from "../courses/postgresql/constraints/exclusion-constraints.json";
import executeDeleteInEntityFrameworkCoreLesson from "../courses/ef-core/07-querying/execute-delete-in-entity-framework-core.json";
import executeRawSqlQueriesLesson from "../courses/ef-core/07-querying/execute-raw-sql-queries.json";
import executeUpdateInEntityFrameworkCoreLesson from "../courses/ef-core/07-querying/execute-update-in-entity-framework-core.json";
import executionPlanReadingWorkflowLesson from "../courses/sql-server/database-internals-query-optimization/execution-plan-reading-workflow.json";
import executionPlansLesson from "../courses/sql-server/16-performance-tuning/execution-plans.json";
import explainAnalyzeLesson from "../courses/postgresql/performance-tuning/explain-analyze.json";
import explicitInterfaceImplementationLesson from "../courses/oops-concepts/06-interfaces-abstract-classes/explicit-interface-implementation.json";
import expressionTreesLesson from "../courses/linq/11-advanced-linq-concepts/expression-trees.json";
import extensionMethodsLesson from "../courses/csharp-fundamentals/05-advanced-features/extension-methods.json";
import extensionsLesson from "../courses/postgresql/advanced-topics/extensions.json";
import externalProvidersLesson from "../courses/authentication-authorization/04-oauth/external-providers.json";
import extraReducersLesson from "../courses/redux/02-redux-toolkit/extra-reducers.json";
import facadePatternLesson from "../courses/clean-code-csharp/03-structural-patterns/facade-pattern.json";
import facadePatternLesson1 from "../courses/design-patterns/02-structural-patterns/facade-pattern.json";
import facebookNewsFeedLesson from "../problems/lld/facebook-news-feed/facebook-news-feed.json";
import factoryPatternLesson from "../courses/clean-code-csharp/02-creational-patterns/factory-pattern.json";
import factoryPatternLesson1 from "../courses/design-patterns/01-creational-patterns/factory-pattern.json";
import factoryPatternLesson2 from "../courses/yarn-npm-packages/advanced-patterns/factory-pattern.json";
import factoryPatternDiLesson from "../problems/aspnet-core/05-dependency-injection-problems/factory-pattern-di.json";
import failoverSwitchoverLesson from "../courses/postgresql/high-availability-dr/failover-switchover.json";
import featureFlagsLesson from "../courses/devops/ci-cd-safe-delivery/feature-flags.json";
import fetchApiBasicsLesson from "../courses/yarn-npm-packages/react-data-fetching/fetch-api-basics.json";
import fetchingDataLesson from "../courses/react-fundamentals/05-lifecycle-effects/fetching-data.json";
import fiberAndSchedulingConceptsLesson from "../courses/react-fundamentals/react-internals-modern-rendering/fiber-and-scheduling-concepts.json";
import fibonacciNumberLesson from "../problems/csharp/05-dynamic-programming-problems/fibonacci-number.json";
import fieldTypesMappingLesson from "../courses/prisma/02-prisma-schema-design/field-types-mapping.json";
import figgleLesson from "../courses/dotnet-nuget-packages/09-utilities-helpers/figgle.json";
import fileDescriptorsAndOpenFilesLesson from "../courses/git-linux-developer-workflow/linux-production-troubleshooting/file-descriptors-and-open-files.json";
import fileIoLesson from "../courses/csharp-fundamentals/07-modern-csharp/file-io.json";
import fileUploadLesson from "../courses/yarn-npm-packages/react-forms-input/file-upload.json";
import fileUploadsLesson from "../courses/react-fundamentals/04-forms-input/file-uploads.json";
import filteringAndSortingLesson from "../courses/prisma/03-prisma-queries-mutations/filtering-and-sorting.json";
import filteringBasicsLesson from "../courses/graphql-dotnet/04-filtering-pagination/filtering-basics.json";
import filteringOperatorWhereLesson from "../courses/linq/03-filtering-projection/filtering-operator-where.json";
import finalFormLesson from "../courses/yarn-npm-packages/forms/final-form.json";
import findFirstSetBitLesson from "../problems/csharp/08-bitwise-problems/find-first-set-bit.json";
import findMinimumInRotatedSortedArrayLesson from "../problems/csharp/01-array-problems/find-minimum-in-rotated-sorted-array.json";
import finiteStateMachinesLesson from "../courses/react-advanced-patterns/08-state-machines-xstate/finite-state-machines.json";
import firewallsAndSecurityLesson from "../courses/programming-computer-web-foundations/networking-protocols/firewalls-and-security.json";
import firstEndpointLesson from "../courses/aspnet-core-web-api/01-getting-started/first-endpoint.json";
import firstFirstordefaultLesson from "../courses/linq/08-quantifiers-element-operators/first-firstordefault.json";
import firstProgramLesson from "../courses/csharp-fundamentals/01-getting-started/first-program.json";
import firstQueryLesson from "../courses/apollo/01-apollo-basics/first-query.json";
import firstQueryLesson1 from "../courses/react-query/01-query-basics/first-query.json";
import firstReactAppLesson from "../courses/react-fundamentals/01-getting-started/first-react-app.json";
import firstUniqueCharLesson from "../problems/csharp/02-string-problems/first-unique-char.json";
import flakyTestDiagnosisLesson from "../courses/react-testing/testing-strategy-for-senior-frontend-engineers/flaky-test-diagnosis.json";
import flakyTestsLesson from "../courses/unit-testing-dotnet/06-testing-patterns/flaky-tests.json";
import flexibleComponentApisLesson from "../courses/react-advanced-patterns/09-component-composition-strategies/flexible-component-apis.json";
import fluentApiInEntityFrameworkCoreLesson from "../courses/ef-core/02-dbcontext-configuration/fluent-api-in-entity-framework-core.json";
import fluentAssertionsLesson from "../courses/dotnet-nuget-packages/07-testing-quality/fluent-assertions.json";
import fluentEmailLesson from "../courses/dotnet-nuget-packages/09-utilities-helpers/fluent-email.json";
import fluentvalidationLesson from "../courses/dotnet-nuget-packages/validation-authorization/fluentvalidation.json";
import flurlLesson from "../courses/dotnet-nuget-packages/http-clients-resilience/flurl.json";
import foodDeliveryLesson from "../problems/lld/food-delivery/food-delivery.json";
import foodDeliveryHldLesson from "../problems/hld/food-delivery-hld/food-delivery-hld.json";
import foreignDataWrappersLesson from "../courses/postgresql/advanced-topics/foreign-data-wrappers.json";
import foreignKeyLesson from "../courses/postgresql/constraints/foreign-key.json";
import formIntegrationLesson from "../courses/react-query/09-real-world-patterns/form-integration.json";
import formStateManagementLesson from "../courses/next-js-full-stack-react/state-management/form-state-management.json";
import formSubmissionLesson from "../courses/react-fundamentals/04-forms-input/form-submission.json";
import formValidationLesson from "../courses/react-fundamentals/04-forms-input/form-validation.json";
import formValidationLesson1 from "../courses/yarn-npm-packages/react-forms-input/form-validation.json";
import formikLesson from "../courses/yarn-npm-packages/forms/formik.json";
import forwardingRefsLesson from "../courses/react-fundamentals/06-context-refs/forwarding-refs.json";
import framerMotionLesson from "../courses/yarn-npm-packages/animation/framer-motion.json";
import fromBodyLesson from "../courses/aspnet-core-web-api/03-model-binding/from-body.json";
import fromQueryLesson from "../courses/aspnet-core-web-api/03-model-binding/from-query.json";
import frontDoorVsApplicationGatewayLesson from "../problems/azure/06-azure-networking-problems/front-door-vs-application-gateway.json";
import frontDoorVsApplicationGatewayVsLoadBalancerLesson from "../courses/azure/08-networking-and-api-platforms/front-door-vs-application-gateway-vs-load-balancer.json";
import frontendBundleSizeDoubledAfterADependencyChangeLesson from "../problems/production-incident-lab-problems/frontend-incidents/frontend-bundle-size-doubled-after-a-dependency-change.json";
import frontendMemoryLeaksLesson from "../courses/frontend-performance-engineering/browser-react-performance/frontend-memory-leaks.json";
import fullOuterJoinLesson from "../courses/postgresql/joins/full-outer-join.json";
import fullstackPostgresqlPrismaNextjsLesson from "../courses/prisma/07-prisma-nextjs-integration/fullstack-postgresql-prisma-nextjs.json";
import functionalComponentsLesson from "../courses/react-fundamentals/02-components-props/functional-components.json";
import functionalVsNonFunctionalRequirementsLesson from "../courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/functional-vs-non-functional-requirements.json";
import functionsBindingsLesson from "../courses/azure/03-serverless-and-azure-functions/functions-bindings.json";
import functionsDependencyInjectionAndConfigurationLesson from "../courses/azure/03-serverless-and-azure-functions/functions-dependency-injection-and-configuration.json";
import functionsDurableWorkflowsLesson from "../courses/azure/03-serverless-and-azure-functions/functions-durable-workflows.json";
import functionsEventDrivenDevelopmentLesson from "../courses/azure/03-serverless-and-azure-functions/functions-event-driven-development.json";
import functionsHttpApisLesson from "../courses/azure/03-serverless-and-azure-functions/functions-http-apis.json";
import functionsLocalDevelopmentAndDebuggingLesson from "../courses/azure/03-serverless-and-azure-functions/functions-local-development-and-debugging.json";
import functionsMethodsLesson from "../courses/clean-code-csharp/05-clean-code-practices/functions-methods.json";
import functionsProgrammingModelsLesson from "../courses/azure/03-serverless-and-azure-functions/functions-programming-models.json";
import functionsScalingAndHostingPlansLesson from "../courses/azure/03-serverless-and-azure-functions/functions-scaling-and-hosting-plans.json";
import functionsStorageQueuesAndTimersLesson from "../courses/azure/03-serverless-and-azure-functions/functions-storage-queues-and-timers.json";
import functionsTriggersLesson from "../courses/azure/03-serverless-and-azure-functions/functions-triggers.json";
import functionsTypesLesson from "../courses/typescript-for-react/01-typescript-basics/functions-types.json";
import garbageCollectionHowWouldYouInvestigateAllocationAndGcPressureLesson from "../interview-qa/c-net-follow-ups/garbage-collection-how-would-you-investigate-allocation-and-gc-pressure.json";
import gcGenerationsLesson from "../interview-qa/03-advanced-questions/gc-generations.json";
import gcGenerationsAndCollectionBehaviorLesson from "../courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/gc-generations-and-collection-behavior.json";
import genI01Lesson from "../interview-qa/02-intermediate-questions/gen-i01.json";
import generateSqlScriptFromModelLesson from "../courses/ef-core/09-migrations/generate-sql-script-from-model.json";
import generationOperatorsLesson from "../courses/linq/10-conversion-generation-operators/generation-operators.json";
import generativeAiArchitectureLesson from "../courses/aws/14-ai-machine-learning/generative-ai-architecture.json";
import genericFormLesson from "../courses/typescript-for-react/05-generic-components/generic-form.json";
import genericHostAndApplicationLifetimeLesson from "../courses/aspnet-core/asp-net-core-internals-production-hosting/generic-host-and-application-lifetime.json";
import genericListLesson from "../courses/typescript-for-react/05-generic-components/generic-list.json";
import genericsLesson from "../courses/csharp-fundamentals/05-advanced-features/generics.json";
import genericsBasicsLesson from "../courses/typescript-for-react/04-advanced-types/generics-basics.json";
import genericsCsharpLesson from "../interview-qa/02-intermediate-questions/generics-csharp.json";
import gettingStartedEfCoreLesson from "../courses/ef-core/01-getting-started-ef-core/getting-started-ef-core.json";
import gettingStartedJestLesson from "../courses/react-testing/02-jest-basics/getting-started-jest.json";
import gettingStartedXunitLesson from "../courses/unit-testing-dotnet/02-xunit-basics/getting-started-xunit.json";
import ginGistIndexesLesson from "../courses/postgresql/indexes/gin-gist-indexes.json";
import gitAndCiCdLesson from "../courses/git-linux-developer-workflow/advanced-git-workflows/git-and-ci-cd.json";
import gitBestPracticesLesson from "../courses/git-linux-developer-workflow/advanced-git-workflows/git-best-practices.json";
import gitBisectForRegressionInvestigationLesson from "../courses/git-linux-developer-workflow/git-for-senior-engineers/git-bisect-for-regression-investigation.json";
import gitInternalsLesson from "../courses/git-linux-developer-workflow/advanced-git-workflows/git-internals.json";
import gitSecurityLesson from "../courses/git-linux-developer-workflow/advanced-git-workflows/git-security.json";
import githubActionsAzureAuthenticationLesson from "../courses/azure/11-application-deployment-and-devops/github-actions-azure-authentication.json";
import githubActionsForAzureLesson from "../courses/azure/11-application-deployment-and-devops/github-actions-for-azure.json";
import globalErrorHandlingLesson from "../courses/aspnet-core-web-api/06-error-handling-validation/global-error-handling.json";
import googleDriveStorageLesson from "../problems/lld/google-drive-storage/google-drive-storage.json";
import googleSearchLesson from "../problems/hld/google-search/google-search.json";
import governanceCostManagementLesson from "../courses/aws/02-identity-access-governance/governance-cost-management.json";
import graphValidTreeLesson from "../problems/csharp/04-tree-graph-problems/graph-valid-tree.json";
import graphqlBasicsLesson from "../courses/apollo/01-apollo-basics/graphql-basics.json";
import graphqlRequestLesson from "../courses/yarn-npm-packages/http-clients/graphql-request.json";
import groupAnagramsLesson from "../problems/csharp/02-string-problems/group-anagrams.json";
import groupByLesson from "../courses/postgresql/grouping-aggregation-subqueries/group-by.json";
import groupingOperatorGroupbyTolookupLesson from "../courses/linq/04-sorting-grouping/grouping-operator-groupby-tolookup.json";
import groupjoinOperatorLesson from "../courses/linq/05-joining-data/groupjoin-operator.json";
import grpcAndProtobufLesson from "../courses/programming-computer-web-foundations/networking-protocols/grpc-and-protobuf.json";
import gsapLesson from "../courses/yarn-npm-packages/animation/gsap.json";
import handlingEventsLesson from "../courses/react-fundamentals/03-state-events/handling-events.json";
import handlingTechnicalDisagreementLesson from "../courses/senior-software-engineering/technical-leadership/handling-technical-disagreement.json";
import handlingUserInputLesson from "../courses/aspnet-core/02-mvc-fundamentals/handling-user-input.json";
import hangfireLesson from "../courses/dotnet-nuget-packages/06-messaging-events/hangfire.json";
import hashTablesLesson from "../courses/programming-computer-web-foundations/data-structures-deep-dive/hash-tables.json";
import havingClauseLesson from "../courses/postgresql/grouping-aggregation-subqueries/having-clause.json";
import headlessComponentsLesson from "../courses/react-advanced-patterns/09-component-composition-strategies/headless-components.json";
import healthChecksLesson from "../problems/aspnet-core/08-testing-debugging-problems/health-checks.json";
import healthChecksAndReadinessVsLivenessLesson from "../courses/aspnet-core/asp-net-core-internals-production-hosting/health-checks-and-readiness-vs-liveness.json";
import healthEndpointsAndDependencyChecksLesson from "../courses/aspnet-core/performance-observability/health-endpoints-and-dependency-checks.json";
import heapsLesson from "../courses/programming-computer-web-foundations/data-structures-deep-dive/heaps.json";
import highAvailabilityAndZoneAwareArchitectureLesson from "../courses/azure/production-architecture-reliability-cost/high-availability-and-zone-aware-architecture.json";
import higherOrderComponentsTypedLesson from "../courses/typescript-for-react/05-generic-components/higher-order-components-typed.json";
import hocBasicsLesson from "../courses/react-advanced-patterns/02-higher-order-components/hoc-basics.json";
import hocCompositionLesson from "../courses/react-advanced-patterns/02-higher-order-components/hoc-composition.json";
import hocExamplesLesson from "../courses/react-advanced-patterns/02-higher-order-components/hoc-examples.json";
import hookBestPracticesLesson from "../courses/react-advanced-patterns/10-advanced-hook-patterns/hook-best-practices.json";
import hookCompositionPatternsLesson from "../courses/react-advanced-patterns/07-custom-hooks-architecture/hook-composition-patterns.json";
import hookErrorHandlingLesson from "../courses/react-advanced-patterns/07-custom-hooks-architecture/hook-error-handling.json";
import hooksAndAutomationLesson from "../courses/git-linux-developer-workflow/advanced-git-workflows/hooks-and-automation.json";
import horizontalPodAutoscalerLesson from "../courses/devops/production-kubernetes-day-2-operations/horizontal-pod-autoscaler.json";
import hotchocolateProjectSetupLesson from "../courses/graphql-dotnet/01-getting-started/hotchocolate-project-setup.json";
import hotelManagementLesson from "../problems/lld/hotel-management/hotel-management.json";
import houseRobberLesson from "../problems/csharp/05-dynamic-programming-problems/house-robber.json";
import houseRobberIiLesson from "../problems/csharp/05-dynamic-programming-problems/house-robber-ii.json";
import howDoYouGuaranteeAnOperationIsAppliedOnlyOnceLesson from "../interview-qa/architecture-follow-ups/how-do-you-guarantee-an-operation-is-applied-only-once.json";
import howDoYouHandleADatabaseTransactionThatSucceedsButEventPublishingFailsLesson from "../interview-qa/backend-database-follow-ups/how-do-you-handle-a-database-transaction-that-succeeds-but-event-publishing-fails.json";
import howSourceCodeBecomesARunningProgramLesson from "../courses/programming-computer-web-foundations/programming-computer-fundamentals/how-source-code-becomes-a-running-program.json";
import howTheQueryOptimizerChoosesAPlanLesson from "../courses/sql-server/database-internals-query-optimization/how-the-query-optimizer-chooses-a-plan.json";
import howToTroubleshootAFailingHttpRequestLesson from "../courses/programming-computer-web-foundations/web-networking-fundamentals/how-to-troubleshoot-a-failing-http-request.json";
import howWouldYouDebugAPageWithPoorInpLesson from "../interview-qa/react-frontend-follow-ups/how-would-you-debug-a-page-with-poor-inp.json";
import howWouldYouDesignIdempotencyForAPaymentApiLesson from "../interview-qa/backend-database-follow-ups/how-would-you-design-idempotency-for-a-payment-api.json";
import howWouldYouDesignRetryBehaviorWithoutCreatingARetryStormLesson from "../interview-qa/backend-database-follow-ups/how-would-you-design-retry-behavior-without-creating-a-retry-storm.json";
import howWouldYouDiagnoseAReactMemoryLeakLesson from "../interview-qa/react-frontend-follow-ups/how-would-you-diagnose-a-react-memory-leak.json";
import howWouldYouEvolveAnApiWithoutBreakingOldClientsLesson from "../interview-qa/architecture-follow-ups/how-would-you-evolve-an-api-without-breaking-old-clients.json";
import howWouldYouHandleADatabaseDeadlockInProductionLesson from "../interview-qa/backend-database-follow-ups/how-would-you-handle-a-database-deadlock-in-production.json";
import howWouldYouImplementOptimisticUpdatesWithRollbackLesson from "../interview-qa/react-frontend-follow-ups/how-would-you-implement-optimistic-updates-with-rollback.json";
import howWouldYouPartitionADatabaseThatHasOutgrownOneNodeLesson from "../interview-qa/architecture-follow-ups/how-would-you-partition-a-database-that-has-outgrown-one-node.json";
import howWouldYouReduceAJavascriptBundleThatHasGrownTooLargeLesson from "../interview-qa/react-frontend-follow-ups/how-would-you-reduce-a-javascript-bundle-that-has-grown-too-large.json";
import howWouldYourArchitectureBehaveIfOneDependencyBecameUnavailableLesson from "../interview-qa/architecture-follow-ups/how-would-your-architecture-behave-if-one-dependency-became-unavailable.json";
import http11Http2Http3Lesson from "../courses/programming-computer-web-foundations/networking-protocols/http-1-1-http-2-http-3.json";
import httpMethodsAndStatusCodesLesson from "../courses/aspnet-core/10-web-api-rest/http-methods-and-status-codes.json";
import httpMethodsStatusCodesAndHeadersLesson from "../courses/programming-computer-web-foundations/web-networking-fundamentals/http-methods-status-codes-and-headers.json";
import httpRequestAndResponseLifecycleLesson from "../courses/programming-computer-web-foundations/web-networking-fundamentals/http-request-and-response-lifecycle.json";
import http11VsHttp2VsHttp3Lesson from "../courses/programming-computer-web-foundations/web-networking-fundamentals/http11-vs-http2-vs-http3.json";
import httpclientfactoryLesson from "../courses/dotnet-nuget-packages/http-clients-resilience/httpclientfactory.json";
import humanizerLesson from "../courses/dotnet-nuget-packages/09-utilities-helpers/humanizer.json";
import hydrationAndHydrationMismatchesLesson from "../courses/react-fundamentals/react-internals-modern-rendering/hydration-and-hydration-mismatches.json";
import hydrationMismatchesOccurOnlyInProductionLesson from "../problems/production-incident-lab-problems/frontend-incidents/hydration-mismatches-occur-only-in-production.json";
import hydrationStrategiesLesson from "../courses/react-query/07-prefetching-ssr/hydration-strategies.json";
import iamFundamentalsLesson from "../courses/aws/02-identity-access-governance/iam-fundamentals.json";
import iamPoliciesPermissionsLesson from "../courses/aws/02-identity-access-governance/iam-policies-permissions.json";
import iasyncdisposableAndAsyncResourceCleanupLesson from "../courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/iasyncdisposable-and-async-resource-cleanup.json";
import idempotencyKeysAndDuplicateRequestHandlingLesson from "../courses/aspnet-core-web-api/production-api-design-reliability/idempotency-keys-and-duplicate-request-handling.json";
import identityFederationLesson from "../courses/authentication-authorization/08-sso-identity-providers/identity-federation.json";
import identityIntegrationLesson from "../courses/graphql-dotnet/05-authentication/identity-integration.json";
import identityModelLesson from "../courses/dotnet-nuget-packages/08-security-cryptography/identity-model.json";
import identityOverviewLesson from "../courses/authentication-authorization/03-identity/identity-overview.json";
import identityServerSetupLesson from "../problems/aspnet-core/07-authentication-authorization-problems/identity-server-setup.json";
import identitySetupLesson from "../courses/aspnet-core/09-authentication-authorization/identity-setup.json";
import identityserverLesson from "../courses/dotnet-nuget-packages/validation-authorization/identityserver.json";
import idisposableFinalizationAndDeterministicCleanupLesson from "../courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/idisposable-finalization-and-deterministic-cleanup.json";
import ihttpclientfactoryAndHandlerLifetimesLesson from "../courses/aspnet-core/asp-net-core-internals-production-hosting/ihttpclientfactory-and-handler-lifetimes.json";
import imageAndFontOptimizationLesson from "../courses/frontend-performance-engineering/browser-react-performance/image-and-font-optimization.json";
import imageLayersAndBuildCacheLesson from "../courses/devops/production-docker-container-security/image-layers-and-build-cache.json";
import imageScanningAndSupplyChainSecurityLesson from "../courses/devops/production-docker-container-security/image-scanning-and-supply-chain-security.json";
import immerLesson from "../courses/yarn-npm-packages/utilities/immer.json";
import immutabilityLesson from "../courses/redux/01-redux-fundamentals/immutability.json";
import imperativeHandlePatternsLesson from "../courses/react-advanced-patterns/10-advanced-hook-patterns/imperative-handle-patterns.json";
import implementStrstrLesson from "../problems/csharp/02-string-problems/implement-strstr.json";
import implementingApiKeysLesson from "../courses/fullstack-security/04-api-security-rate-limiting/implementing-api-keys.json";
import inboxdeduplicationPatternLesson from "../problems/system-design-problems/distributed-systems-fundamentals/inboxdeduplication-pattern.json";
import incidentCommandAndCommunicationLesson from "../courses/senior-software-engineering/production-ownership/incident-command-and-communication.json";
import incidentResponseLesson from "../courses/git-linux-developer-workflow/production-readiness/incident-response.json";
import incidentSeverityAndResponseLesson from "../courses/senior-software-engineering/production-ownership/incident-severity-and-response.json";
import includedColumnsAndCoveringIndexesLesson from "../courses/sql-server/database-internals-query-optimization/included-columns-and-covering-indexes.json";
import incrementalMigrationVsRewriteLesson from "../courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/incremental-migration-vs-rewrite.json";
import indexFundamentalsLesson from "../courses/postgresql/indexes/index-fundamentals.json";
import indexMaintenanceLesson from "../courses/postgresql/indexes/index-maintenance.json";
import indexMaintenanceVsActualQueryPerformanceLesson from "../courses/sql-server/concurrency-production-database-problems/index-maintenance-vs-actual-query-performance.json";
import indexeddbPersistenceLesson from "../courses/react-query/06-offline-support-persistence/indexeddb-persistence.json";
import infiniteQueriesLesson from "../courses/react-query/02-query-hooks/infinite-queries.json";
import influencingWithoutAuthorityLesson from "../courses/senior-software-engineering/technical-leadership/influencing-without-authority.json";
import infrastructureAsCodeConceptsLesson from "../courses/azure/12-infrastructure-as-code-and-automation/infrastructure-as-code-concepts.json";
import infrastructureAutomationWithCiCdLesson from "../courses/azure/12-infrastructure-as-code-and-automation/infrastructure-automation-with-ci-cd.json";
import ingressAndTrafficRoutingLesson from "../courses/devops/production-kubernetes-day-2-operations/ingress-and-traffic-routing.json";
import inheritanceLesson from "../courses/csharp-fundamentals/04-oop/inheritance.json";
import inheritanceBasicsLesson from "../courses/oops-concepts/03-inheritance/inheritance-basics.json";
import inheritanceHierarchiesLesson from "../courses/oops-concepts/03-inheritance/inheritance-hierarchies.json";
import inheritanceStrategiesLesson from "../courses/ef-core/08-inheritance-strategies/inheritance-strategies.json";
import inheritanceStrategyInEfCoreLesson from "../courses/ef-core/08-inheritance-strategies/inheritance-strategy-in-ef-core.json";
import initialDataPlaceholderLesson from "../courses/react-query/02-query-hooks/initial-data-placeholder.json";
import injectingServicesLesson from "../courses/aspnet-core-web-api/05-dependency-injection/injecting-services.json";
import inlineStylesLesson from "../courses/react-fundamentals/08-styling/inline-styles.json";
import innerJoinLesson from "../courses/postgresql/joins/inner-join.json";
import inputTypesLesson from "../courses/graphql-dotnet/02-schema-types/input-types.json";
import inputValidationLesson from "../courses/fullstack-security/05-secure-api-design/input-validation.json";
import insertLesson from "../courses/postgresql/data-modification-dml/insert.json";
import insertDataDisconnectedScenarioLesson from "../courses/ef-core/05-data-operations-disconnected/insert-data-disconnected-scenario.json";
import insertIntervalLesson from "../problems/csharp/01-array-problems/insert-interval.json";
import insertOnConflictLesson from "../courses/postgresql/data-modification-dml/insert-on-conflict.json";
import instagramFeedLesson from "../problems/hld/instagram-feed/instagram-feed.json";
import instagramPhotoSharingLesson from "../problems/lld/instagram-photo-sharing/instagram-photo-sharing.json";
import installEntityFrameworkCoreLesson from "../courses/ef-core/01-getting-started-ef-core/install-entity-framework-core.json";
import installationSetupLesson from "../courses/postgresql/getting-started/installation-setup.json";
import installingHotchocolateLesson from "../courses/graphql-dotnet/01-getting-started/installing-hotchocolate.json";
import installingPackagesLesson from "../courses/dotnet-nuget-packages/01-nuget-fundamentals/installing-packages.json";
import installingPackagesLesson1 from "../courses/yarn-npm-packages/yarn-npm-fundamentals/installing-packages.json";
import installingPrismaInNextjsLesson from "../courses/prisma/01-prisma-basics/installing-prisma-in-nextjs.json";
import insteadOfTriggersLesson from "../courses/postgresql/triggers/instead-of-triggers.json";
import integratingAiServicesIntoAzureApplicationsLesson from "../courses/azure/13-ai-services-for-azure-developers/integrating-ai-services-into-azure-applications.json";
import integratingXstateReactLesson from "../courses/react-advanced-patterns/08-state-machines-xstate/integrating-xstate-react.json";
import integrationTestingLesson from "../courses/aspnet-core/11-testing-debugging/integration-testing.json";
import integrationTestingLesson1 from "../problems/aspnet-core/08-testing-debugging-problems/integration-testing.json";
import integrationTestingBasicsLesson from "../courses/unit-testing-dotnet/04-integration-testing/integration-testing-basics.json";
import interactiveRebaseLesson from "../courses/git-linux-developer-workflow/git-for-senior-engineers/interactive-rebase.json";
import interfaceBasicsLesson from "../courses/oops-concepts/06-interfaces-abstract-classes/interface-basics.json";
import interfaceSegregationLesson from "../courses/clean-code-csharp/01-solid-principles/interface-segregation.json";
import interfacesLesson from "../courses/csharp-fundamentals/04-oop/interfaces.json";
import interfacesTypesLesson from "../courses/typescript-for-react/01-typescript-basics/interfaces-types.json";
import intermediateQ1Lesson from "../interview-qa/02-intermediate-questions/intermediate-q1.json";
import intermediateQ2Lesson from "../interview-qa/02-intermediate-questions/intermediate-q2.json";
import intermediateQ3Lesson from "../interview-qa/02-intermediate-questions/intermediate-q3.json";
import intermediateQ4Lesson from "../interview-qa/02-intermediate-questions/intermediate-q4.json";
import intermediateQ5Lesson from "../interview-qa/02-intermediate-questions/intermediate-q5.json";
import intersectLesson from "../courses/postgresql/set-operations/intersect.json";
import intersectSetOperatorLesson from "../courses/linq/06-set-operations/intersect-set-operator.json";
import intersectionOfTwoLinkedListsLesson from "../problems/csharp/03-linked-list-problems/intersection-of-two-linked-lists.json";
import interviewProblemsLesson from "../courses/programming-computer-web-foundations/data-structures-deep-dive/interview-problems.json";
import introduceBrokenDeploymentLesson from "../problems/full-stack-senior-projects/project-3-production-incident-simulator/introduce-broken-deployment.json";
import introduceCacheFailureLesson from "../problems/full-stack-senior-projects/project-3-production-incident-simulator/introduce-cache-failure.json";
import introduceDatabasePerformanceRegressionLesson from "../problems/full-stack-senior-projects/project-3-production-incident-simulator/introduce-database-performance-regression.json";
import introduceDownstreamTimeoutLesson from "../problems/full-stack-senior-projects/project-3-production-incident-simulator/introduce-downstream-timeout.json";
import introduceDuplicateMessageProcessingLesson from "../problems/full-stack-senior-projects/project-3-production-incident-simulator/introduce-duplicate-message-processing.json";
import introduceKubernetesHealthCheckFailureLesson from "../problems/full-stack-senior-projects/project-3-production-incident-simulator/introduce-kubernetes-health-check-failure.json";
import introduceMemoryLeakLesson from "../problems/full-stack-senior-projects/project-3-production-incident-simulator/introduce-memory-leak.json";
import introductionToGraphqlLesson from "../courses/graphql-dotnet/01-getting-started/introduction-to-graphql.json";
import invalidationLesson from "../courses/react-query/03-mutations/invalidation.json";
import investigateUsingLogsMetricsAndTracesLesson from "../problems/full-stack-senior-projects/project-3-production-incident-simulator/investigate-using-logs-metrics-and-traces.json";
import iocContainerSetupLesson from "../problems/aspnet-core/05-dependency-injection-problems/ioc-container-setup.json";
import isolationLevelsLesson from "../courses/postgresql/transactions-error-handling-backup/isolation-levels.json";
import isomorphicStringsLesson from "../problems/csharp/02-string-problems/isomorphic-strings.json";
import iteratorPatternLesson from "../courses/design-patterns/03-behavioral-patterns/iterator-pattern.json";
import jankFreeAnimationsLesson from "../courses/frontend-performance-engineering/runtime-performance/jank-free-animations.json";
import jestLesson from "../courses/yarn-npm-packages/testing/jest.json";
import jitCompilationAndTieredCompilationLesson from "../courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/jit-compilation-and-tiered-compilation.json";
import joinOperatorLesson from "../courses/linq/05-joining-data/join-operator.json";
import jotaiLesson from "../courses/yarn-npm-packages/state-management/jotai.json";
import jsA01Lesson from "../interview-qa/03-advanced-questions/js-a01.json";
import jsA02Lesson from "../interview-qa/03-advanced-questions/js-a02.json";
import jsB01Lesson from "../interview-qa/01-beginner-questions/js-b01.json";
import jsB02Lesson from "../interview-qa/01-beginner-questions/js-b02.json";
import jsEngineOptimizationLesson from "../courses/frontend-performance-engineering/runtime-performance/js-engine-optimization.json";
import jsI01Lesson from "../interview-qa/02-intermediate-questions/js-i01.json";
import jsI02Lesson from "../interview-qa/02-intermediate-questions/js-i02.json";
import jsI03Lesson from "../interview-qa/02-intermediate-questions/js-i03.json";
import jsI04Lesson from "../interview-qa/02-intermediate-questions/js-i04.json";
import jsI05Lesson from "../interview-qa/02-intermediate-questions/js-i05.json";
import jsonbAdvancedLesson from "../courses/postgresql/modern-data-tools/jsonb-advanced.json";
import jsonbArraysLesson from "../courses/postgresql/data-types/jsonb-arrays.json";
import jsonpatchLesson from "../courses/dotnet-nuget-packages/09-utilities-helpers/jsonpatch.json";
import jsxBasicsLesson from "../courses/react-fundamentals/01-getting-started/jsx-basics.json";
import jsxBasicsLesson1 from "../interview-qa/01-beginner-questions/jsx-basics.json";
import jumpGameLesson from "../problems/csharp/01-array-problems/jump-game.json";
import jwtLesson from "../courses/dotnet-nuget-packages/08-security-cryptography/jwt.json";
import jwtAuthenticationLesson from "../problems/aspnet-core/07-authentication-authorization-problems/jwt-authentication.json";
import jwtBasicsLesson from "../courses/aspnet-core-web-api/07-authentication-basics/jwt-basics.json";
import jwtBasicsLesson1 from "../courses/fullstack-security/02-jwt-authentication/jwt-basics.json";
import jwtIntegrationLesson from "../courses/graphql-dotnet/05-authentication/jwt-integration.json";
import jwtOverviewLesson from "../courses/authentication-authorization/02-jwt/jwt-overview.json";
import jwtPitfallsAndTokenStorageLesson from "../courses/fullstack-security/modern-web-security-identity/jwt-pitfalls-and-token-storage.json";
import jwtStorageOptionsLesson from "../courses/fullstack-security/02-jwt-authentication/jwt-storage-options.json";
import jwtTokensLesson from "../courses/aspnet-core/09-authentication-authorization/jwt-tokens.json";
import jwtbearerLesson from "../courses/dotnet-nuget-packages/validation-authorization/jwtbearer.json";
import kestrelAndTheAspnetCoreHostingModelLesson from "../courses/aspnet-core/asp-net-core-internals-production-hosting/kestrel-and-the-aspnet-core-hosting-model.json";
import keyLookupAndBookmarkLookupLesson from "../courses/sql-server/database-internals-query-optimization/key-lookup-and-bookmark-lookup.json";
import keyVaultSecretsKeysAndCertificatesLesson from "../courses/azure/07-identity-security-and-configuration/key-vault-secrets-keys-and-certificates.json";
import keyVaultSecretsManagementLesson from "../problems/azure/07-azure-security-problems/key-vault-secrets-management.json";
import keyVaultVsAppConfigurationLesson from "../courses/azure/07-identity-security-and-configuration/key-vault-vs-app-configuration.json";
import kubernetesMultiEnvArchitectureLesson from "../problems/system-design/devops-system-design/kubernetes-multi-env-architecture.json";
import kubernetesPodsRestartEvenThoughApplicationLogsLookHealthyLesson from "../problems/production-incident-lab-problems/database-infrastructure-incidents/kubernetes-pods-restart-even-though-application-logs-look-healthy.json";
import kustoQueryLanguageForDevelopersLesson from "../courses/azure/10-observability-and-application-monitoring/kusto-query-language-for-developers.json";
import kyLesson from "../courses/yarn-npm-packages/http-clients/ky.json";
import largeObjectHeapAndPinnedObjectsLesson from "../courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/large-object-heap-and-pinned-objects.json";
import largeRepositoriesLesson from "../courses/git-linux-developer-workflow/advanced-git-workflows/large-repositories.json";
import largestElementInArrayLesson from "../problems/csharp/01-array-problems/largest-element-in-array.json";
import lastLastordefaultLesson from "../courses/linq/08-quantifiers-element-operators/last-lastordefault.json";
import lateralJoinLesson from "../courses/postgresql/joins/lateral-join.json";
import layoutCompositionLesson from "../courses/react-advanced-patterns/09-component-composition-strategies/layout-composition.json";
import layoutEffectPatternsLesson from "../courses/react-advanced-patterns/10-advanced-hook-patterns/layout-effect-patterns.json";
import layoutThrashingLesson from "../courses/frontend-performance-engineering/runtime-performance/layout-thrashing.json";
import layoutsAndPartialsLesson from "../courses/aspnet-core/05-razor-views/layouts-and-partials.json";
import layoutsAndPartialsLesson1 from "../problems/aspnet-core/02-razor-views-problems/layouts-and-partials.json";
import lazyEagerLoadingLesson from "../interview-qa/02-intermediate-questions/lazy-eager-loading.json";
import lazyLoadingAndPrefetchingLesson from "../courses/frontend-performance-engineering/browser-react-performance/lazy-loading-and-prefetching.json";
import leadersInArrayLesson from "../problems/csharp/01-array-problems/leaders-in-array.json";
import learnLinqStepByStepLesson from "../courses/linq/01-getting-started-linq/learn-linq-step-by-step.json";
import leftRightJoinsLesson from "../courses/postgresql/joins/left-right-joins.json";
import legacyModernizationStrategiesLesson from "../courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/legacy-modernization-strategies.json";
import libraryManagementLesson from "../problems/lld/library-management/library-management.json";
import limitOffsetFetchLesson from "../courses/postgresql/querying-data/limit-offset-fetch.json";
import linkedListCycleLesson from "../problems/csharp/03-linked-list-problems/linked-list-cycle.json";
import linkedinProfessionalLesson from "../problems/lld/linkedin-professional/linkedin-professional.json";
import linkedinProfessionalHldLesson from "../problems/hld/linkedin-professional-hld/linkedin-professional-hld.json";
import linqApiInNetLesson from "../courses/linq/01-getting-started-linq/linq-api-in-net.json";
import linqBasicsLesson from "../courses/csharp-fundamentals/05-advanced-features/linq-basics.json";
import linqExpressionTreesAndSqlTranslationLesson from "../courses/ef-core/ef-core-performance-orm-trade-offs/linq-expression-trees-and-sql-translation.json";
import linqHowDoYouIdentifyAQueryThatIsUnexpectedlyExpensiveLesson from "../interview-qa/c-net-follow-ups/linq-how-do-you-identify-a-query-that-is-unexpectedly-expensive.json";
import linqMethodSyntaxLesson from "../courses/linq/02-linq-fundamentals-syntax/linq-method-syntax.json";
import linqQuerySyntaxLesson from "../courses/linq/02-linq-fundamentals-syntax/linq-query-syntax.json";
import liskovSubstitutionLesson from "../courses/clean-code-csharp/01-solid-principles/liskov-substitution.json";
import listsAndKeysLesson from "../courses/react-fundamentals/02-components-props/lists-and-keys.json";
import livenessReadinessAndStartupProbesLesson from "../courses/devops/production-kubernetes-day-2-operations/liveness-readiness-and-startup-probes.json";
import loadBalancerOverviewLesson from "../courses/azure/08-networking-and-api-platforms/load-balancer-overview.json";
import loadBalancerVsApplicationGatewayLesson from "../problems/azure/06-azure-networking-problems/load-balancer-vs-application-gateway.json";
import loadBalancersLesson from "../courses/programming-computer-web-foundations/networking-protocols/load-balancers.json";
import loadingStatesLesson from "../courses/next-js-full-stack-react/data-fetching-patterns/loading-states.json";
import localOnlyFieldsLesson from "../courses/apollo/08-local-state-management/local-only-fields.json";
import localStateLesson from "../courses/apollo/04-advanced-patterns/local-state.json";
import localStateVsServerStateLesson from "../courses/next-js-full-stack-react/state-management/local-state-vs-server-state.json";
import localStateVsServerStateVsUrlStateLesson from "../courses/react-advanced-patterns/modern-state-application-architecture/local-state-vs-server-state-vs-url-state.json";
import lockAndMonitorLesson from "../courses/csharp-fundamentals/advanced-async-concurrency-threading/lock-and-monitor.json";
import lockingRowsLesson from "../courses/postgresql/transactions-error-handling-backup/locking-rows.json";
import locksAndBlockingLesson from "../courses/sql-server/concurrency-production-database-problems/locks-and-blocking.json";
import lodashLesson from "../courses/yarn-npm-packages/utilities/lodash.json";
import logAnalyticsWorkspacesLesson from "../courses/azure/10-observability-and-application-monitoring/log-analytics-workspaces.json";
import log4netLesson from "../courses/dotnet-nuget-packages/logging-monitoring/log4net.json";
import loggingAndMonitoringLesson from "../courses/aspnet-core/11-testing-debugging/logging-and-monitoring.json";
import loggingAndMonitoringLesson1 from "../courses/fullstack-security/04-api-security-rate-limiting/logging-and-monitoring.json";
import loggingBasicsLesson from "../courses/aspnet-core-web-api/08-logging-configuration/logging-basics.json";
import loggingBestPracticesLesson from "../problems/aspnet-core/08-testing-debugging-problems/logging-best-practices.json";
import loggingInEntityFrameworkCoreLesson from "../courses/ef-core/11-database-first-diagnostics/logging-in-entity-framework-core.json";
import loggingStrategiesLesson from "../courses/git-linux-developer-workflow/production-readiness/logging-strategies.json";
import logicalReplicationLesson from "../courses/postgresql/advanced-topics/logical-replication.json";
import logicalReplicationHaLesson from "../courses/postgresql/high-availability-dr/logical-replication-ha.json";
import longRunningTransactionsLesson from "../courses/sql-server/concurrency-production-database-problems/long-running-transactions.json";
import longTermImpactLesson from "../courses/senior-software-engineering/technical-decision-making/long-term-impact.json";
import longestCommonPrefixLesson from "../problems/csharp/02-string-problems/longest-common-prefix.json";
import longestCommonSubsequenceLesson from "../problems/csharp/05-dynamic-programming-problems/longest-common-subsequence.json";
import longestConsecutiveSequenceLesson from "../problems/csharp/01-array-problems/longest-consecutive-sequence.json";
import longestIncreasingSubsequenceLesson from "../problems/csharp/05-dynamic-programming-problems/longest-increasing-subsequence.json";
import longestPalindromicSubstringLesson from "../problems/csharp/02-string-problems/longest-palindromic-substring.json";
import longestRepeatingCharReplacementLesson from "../problems/csharp/02-string-problems/longest-repeating-char-replacement.json";
import longestSubstringLesson from "../problems/csharp/02-string-problems/longest-substring.json";
import longestSubstringKDistinctLesson from "../problems/csharp/02-string-problems/longest-substring-k-distinct.json";
import longestSubstringTwoDistinctLesson from "../problems/csharp/02-string-problems/longest-substring-two-distinct.json";
import loopsLesson from "../courses/csharp-fundamentals/03-control-flow/loops.json";
import lowestCommonAncestorOfBstLesson from "../problems/csharp/04-tree-graph-problems/lowest-common-ancestor-of-bst.json";
import mailkitLesson from "../courses/dotnet-nuget-packages/09-utilities-helpers/mailkit.json";
import majorityElementLesson from "../problems/csharp/01-array-problems/majority-element.json";
import makingTechnicalTradeOffsExplicitLesson from "../courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/making-technical-trade-offs-explicit.json";
import manageDbConnectionStringLesson from "../courses/ef-core/11-database-first-diagnostics/manage-db-connection-string.json";
import managedDisksAndApplicationStorageLesson from "../courses/azure/05-storage-and-data-services/managed-disks-and-application-storage.json";
import managedHeapAndAllocationLifecycleLesson from "../courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/managed-heap-and-allocation-lifecycle.json";
import managedIdentitiesLesson from "../courses/azure/07-identity-security-and-configuration/managed-identities.json";
import managedIdentityArchitectureLesson from "../courses/azure/production-architecture-reliability-cost/managed-identity-architecture.json";
import managedIdentityVsServicePrincipalLesson from "../problems/azure/07-azure-security-problems/managed-identity-vs-service-principal.json";
import managedIdentityVsServicePrincipalsLesson from "../courses/azure/07-identity-security-and-configuration/managed-identity-vs-service-principals.json";
import managedIdentityWithAzureSqlLesson from "../courses/azure/06-databases-and-caching/managed-identity-with-azure-sql.json";
import managedIdentityWithAzureSqlLesson1 from "../courses/azure/07-identity-security-and-configuration/managed-identity-with-azure-sql.json";
import managedIdentityWithKeyVaultLesson from "../courses/azure/07-identity-security-and-configuration/managed-identity-with-key-vault.json";
import managedIdentityWithStorageLesson from "../courses/azure/07-identity-security-and-configuration/managed-identity-with-storage.json";
import managingBreakingChangesAcrossBranchesLesson from "../courses/git-linux-developer-workflow/git-for-senior-engineers/managing-breaking-changes-across-branches.json";
import managingTechnicalDebtLesson from "../courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/managing-technical-debt.json";
import manyToManyRelationsLesson from "../courses/prisma/04-prisma-relations/many-to-many-relations.json";
import mapsterLesson from "../courses/dotnet-nuget-packages/05-serialization-mapping/mapster.json";
import masstransitLesson from "../courses/dotnet-nuget-packages/06-messaging-events/masstransit.json";
import matchersAssertionsLesson from "../courses/react-testing/02-jest-basics/matchers-assertions.json";
import materializedViewsLesson from "../courses/postgresql/views/materialized-views.json";
import maxConsecutiveOnesLesson from "../problems/csharp/08-bitwise-problems/max-consecutive-ones.json";
import maximumDepthOfBinaryTreeLesson from "../problems/csharp/04-tree-graph-problems/maximum-depth-of-binary-tree.json";
import maximumProductSubarrayLesson from "../problems/csharp/01-array-problems/maximum-product-subarray.json";
import maximumProductSubarrayLesson1 from "../problems/csharp/05-dynamic-programming-problems/maximum-product-subarray.json";
import maximumSubarrayLesson from "../problems/csharp/01-array-problems/maximum-subarray.json";
import maximumSubarrayLesson1 from "../problems/csharp/05-dynamic-programming-problems/maximum-subarray.json";
import meaningfulNamesLesson from "../courses/clean-code-csharp/05-clean-code-practices/meaningful-names.json";
import mediatorPatternLesson from "../courses/design-patterns/04-enterprise-patterns/mediator-pattern.json";
import mediatorPatternLesson1 from "../courses/yarn-npm-packages/advanced-patterns/mediator-pattern.json";
import mediatrLesson from "../courses/dotnet-nuget-packages/06-messaging-events/mediatr.json";
import memoizationBasicsLesson from "../courses/react-advanced-patterns/06-performance-patterns/memoization-basics.json";
import memoizationStrategiesLesson from "../courses/react-query/08-performance-optimization/memoization-strategies.json";
import memoryManagementLesson from "../courses/frontend-performance-engineering/runtime-performance/memory-management.json";
import memoryUsageGrowsContinuouslyAndPodsRestartLesson from "../problems/production-incident-lab-problems/backend-incidents/memory-usage-grows-continuously-and-pods-restart.json";
import memorystreamLesson from "../courses/dotnet-nuget-packages/advanced-patterns/memorystream.json";
import mentoringJuniorEngineersLesson from "../courses/senior-software-engineering/technical-leadership/mentoring-junior-engineers.json";
import mergeLesson from "../courses/postgresql/data-modification-dml/merge.json";
import mergeIntervalsLesson from "../problems/csharp/01-array-problems/merge-intervals.json";
import mergeTwoSortedListsLesson from "../problems/csharp/03-linked-list-problems/merge-two-sorted-lists.json";
import mergeVsRebaseLesson from "../courses/git-linux-developer-workflow/git-for-senior-engineers/merge-vs-rebase.json";
import messageIdempotencyAndDuplicateHandlingLesson from "../problems/full-stack-senior-projects/project-2-collaborative-communication-platform/message-idempotency-and-duplicate-handling.json";
import messageOrderingLesson from "../problems/system-design-problems/distributed-systems-fundamentals/message-ordering.json";
import messagePersistenceAndOrderingLesson from "../problems/full-stack-senior-projects/project-2-collaborative-communication-platform/message-persistence-and-ordering.json";
import messagepackLesson from "../courses/dotnet-nuget-packages/05-serialization-mapping/messagepack.json";
import messagingAndEventDrivenArchitectureLesson from "../courses/azure/09-messaging-and-event-driven-architecture/messaging-and-event-driven-architecture.json";
import messagingReliabilityIdempotencyAndRetriesLesson from "../courses/azure/09-messaging-and-event-driven-architecture/messaging-reliability-idempotency-and-retries.json";
import methodOverridingLesson from "../courses/oops-concepts/03-inheritance/method-overriding.json";
import methodsLesson from "../courses/csharp-fundamentals/01-getting-started/methods.json";
import metricsAlertsAndActionGroupsLesson from "../courses/azure/10-observability-and-application-monitoring/metrics-alerts-and-action-groups.json";
import microFrontendsLesson from "../courses/yarn-npm-packages/advanced-patterns/micro-frontends.json";
import microservicesBasicsLesson from "../interview-qa/02-intermediate-questions/microservices-basics.json";
import microsoftAspnetcoreAuthenticationLesson from "../courses/dotnet-nuget-packages/03-aspnet-web/microsoft-aspnetcore-authentication.json";
import microsoftAspnetcoreAuthorizationLesson from "../courses/dotnet-nuget-packages/03-aspnet-web/microsoft-aspnetcore-authorization.json";
import microsoftAspnetcoreCorsLesson from "../courses/dotnet-nuget-packages/03-aspnet-web/microsoft-aspnetcore-cors.json";
import microsoftAspnetcoreMvcLesson from "../courses/dotnet-nuget-packages/03-aspnet-web/microsoft-aspnetcore-mvc.json";
import microsoftEntraIdOverviewLesson from "../courses/azure/07-identity-security-and-configuration/microsoft-entra-id-overview.json";
import microsoftExtensionsConfigurationLesson from "../courses/dotnet-nuget-packages/02-core-extensions/microsoft-extensions-configuration.json";
import microsoftExtensionsDependencyinjectionLesson from "../courses/dotnet-nuget-packages/02-core-extensions/microsoft-extensions-dependencyinjection.json";
import microsoftExtensionsLoggingLesson from "../courses/dotnet-nuget-packages/02-core-extensions/microsoft-extensions-logging.json";
import microsoftExtensionsOptionsLesson from "../courses/dotnet-nuget-packages/02-core-extensions/microsoft-extensions-options.json";
import microsoftOpenapiLesson from "../courses/dotnet-nuget-packages/api-documentation-swagger/microsoft-openapi.json";
import middleOfLinkedListLesson from "../problems/csharp/03-linked-list-problems/middle-of-linked-list.json";
import middlewareAndExtensionsLesson from "../courses/prisma/06-prisma-advanced-features/middleware-and-extensions.json";
import middlewareBasicsLesson from "../courses/aspnet-core-web-api/04-middleware/middleware-basics.json";
import middlewareBasicsLesson1 from "../courses/redux/04-redux-middleware/middleware-basics.json";
import middlewareCompositionLesson from "../courses/redux/04-redux-middleware/middleware-composition.json";
import middlewareConceptsLesson from "../courses/aspnet-core/07-middleware-pipeline/middleware-concepts.json";
import middlewareOrderingLesson from "../problems/aspnet-core/04-middleware-pipeline-problems/middleware-ordering.json";
import migratingToTypescriptLesson from "../courses/typescript-for-react/07-testing-best-practices/migrating-to-typescript.json";
import migrationPatternsLesson from "../courses/react-query/09-real-world-patterns/migration-patterns.json";
import migrationStrategiesLesson from "../courses/git-linux-developer-workflow/advanced-git-workflows/migration-strategies.json";
import migrationStrategiesLesson1 from "../courses/prisma/05-prisma-migrations/migration-strategies.json";
import migrationStrategiesLesson2 from "../courses/senior-software-engineering/system-design-for-seniors/migration-strategies.json";
import migrationsLesson from "../courses/ef-core/09-migrations/migrations.json";
import migrationsBestPracticesLesson from "../problems/aspnet-core/06-ef-core-problems/migrations-best-practices.json";
import migrationsInEntityFrameworkCoreLesson from "../courses/ef-core/09-migrations/migrations-in-entity-framework-core.json";
import migrationsOverviewLesson from "../courses/prisma/05-prisma-migrations/migrations-overview.json";
import minimalAndSecureRuntimeImagesLesson from "../courses/devops/production-docker-container-security/minimal-and-secure-runtime-images.json";
import minimumPathSumLesson from "../problems/csharp/05-dynamic-programming-problems/minimum-path-sum.json";
import minimumSizeSubarraySumLesson from "../problems/csharp/01-array-problems/minimum-size-subarray-sum.json";
import minioLesson from "../courses/dotnet-nuget-packages/cloud-integration/minio.json";
import mobxLesson from "../courses/yarn-npm-packages/state-management/mobx.json";
import mockServiceWorkerLesson from "../courses/react-testing/06-advanced-testing-patterns/mock-service-worker.json";
import mockingAndTestUtilitiesLesson from "../courses/typescript-for-react/07-testing-best-practices/mocking-and-test-utilities.json";
import mockingBasicsLesson from "../courses/unit-testing-dotnet/03-mocking-fakes/mocking-basics.json";
import mockingJestLesson from "../courses/react-testing/02-jest-basics/mocking-jest.json";
import modelAttributesAndConstraintsLesson from "../courses/prisma/02-prisma-schema-design/model-attributes-and-constraints.json";
import modelBindingBasicsLesson from "../courses/aspnet-core-web-api/03-model-binding/model-binding-basics.json";
import modelBindingDeepDiveLesson from "../problems/aspnet-core/01-mvc-fundamentals-problems/model-binding-deep-dive.json";
import modelBindingOverviewLesson from "../courses/aspnet-core/04-model-binding-validation/model-binding-overview.json";
import modelsAndViewdataLesson from "../courses/aspnet-core/02-mvc-fundamentals/models-and-viewdata.json";
import modernDevopsPracticesLesson from "../courses/aws/10-devops-cicd/modern-devops-practices.json";
import moduleFederationLesson from "../courses/yarn-npm-packages/advanced-patterns/module-federation.json";
import mongodbDriverLesson from "../courses/dotnet-nuget-packages/04-database-data-access/mongodb-driver.json";
import monitoringLesson from "../courses/postgresql/performance-tuning/monitoring.json";
import monitoringAndAlertingLesson from "../courses/aspnet-core/12-deployment-production/monitoring-and-alerting.json";
import monitoringContainersAndAksLesson from "../courses/azure/10-observability-and-application-monitoring/monitoring-containers-and-aks.json";
import monitoringFunctionsAndAppServiceLesson from "../courses/azure/10-observability-and-application-monitoring/monitoring-functions-and-app-service.json";
import monitoringSetupLesson from "../courses/git-linux-developer-workflow/production-readiness/monitoring-setup.json";
import monolithVsModularMonolithVsMicroservicesLesson from "../courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/monolith-vs-modular-monolith-vs-microservices.json";
import monorepoStrategiesLesson from "../courses/git-linux-developer-workflow/advanced-git-workflows/monorepo-strategies.json";
import moqLesson from "../courses/dotnet-nuget-packages/07-testing-quality/moq.json";
import moqFrameworkLesson from "../courses/unit-testing-dotnet/03-mocking-fakes/moq-framework.json";
import moreLinqLesson from "../courses/dotnet-nuget-packages/09-utilities-helpers/more-linq.json";
import moveZeroesLesson from "../problems/csharp/01-array-problems/move-zeroes.json";
import moveZeroesToEndLesson from "../problems/csharp/01-array-problems/move-zeroes-to-end.json";
import movieTicketBookingLesson from "../problems/lld/movie-ticket-booking/movie-ticket-booking.json";
import mstestLesson from "../courses/dotnet-nuget-packages/07-testing-quality/mstest.json";
import multiFactorAuthenticationLesson from "../courses/authentication-authorization/09-security-best-practices/multi-factor-authentication.json";
import multiStageBuildsLesson from "../courses/devops/production-docker-container-security/multi-stage-builds.json";
import multiStepFormsLesson from "../courses/react-fundamentals/04-forms-input/multi-step-forms.json";
import multiStepFormsLesson1 from "../courses/yarn-npm-packages/react-forms-input/multi-step-forms.json";
import multipleInterfacesLesson from "../courses/oops-concepts/06-interfaces-abstract-classes/multiple-interfaces.json";
import multiplyStringsLesson from "../problems/csharp/02-string-problems/multiply-strings.json";
import mutationBasicsLesson from "../courses/graphql-dotnet/03-queries-mutations/mutation-basics.json";
import mutationTestingAndTestQualityLesson from "../courses/react-testing/testing-strategy-for-senior-frontend-engineers/mutation-testing-and-test-quality.json";
import mvcArchitectureLesson from "../courses/aspnet-core/02-mvc-fundamentals/mvc-architecture.json";
import mvcLifecycleLesson from "../interview-qa/02-intermediate-questions/mvc-lifecycle.json";
import mvcPatternLesson from "../courses/design-patterns/06-architectural-patterns/mvc-pattern.json";
import mvvmPatternLesson from "../courses/design-patterns/06-architectural-patterns/mvvm-pattern.json";
import mysqlconnectorLesson from "../courses/dotnet-nuget-packages/04-database-data-access/mysqlconnector.json";
import n1QueryDiagnosisLesson from "../courses/ef-core/ef-core-performance-orm-trade-offs/n1-query-diagnosis.json";
import navigationLesson from "../courses/react-fundamentals/07-react-router/navigation.json";
import nestedLoopsHashJoinAndMergeJoinLesson from "../courses/sql-server/database-internals-query-optimization/nested-loops-hash-join-and-merge-join.json";
import nestedRoutesLesson from "../courses/react-fundamentals/07-react-router/nested-routes.json";
import netflixStreamingLesson from "../problems/lld/netflix-streaming/netflix-streaming.json";
import networkInterruptionHandlingLesson from "../courses/react-query/06-offline-support-persistence/network-interruption-handling.json";
import networkSecurityGroupsLesson from "../courses/azure/08-networking-and-api-platforms/network-security-groups.json";
import networkSecurityGroupsAndFirewallsLesson from "../problems/azure/07-azure-security-problems/network-security-groups-and-firewalls.json";
import networkWaterfallsAndRequestPrioritizationLesson from "../courses/frontend-performance-engineering/browser-react-performance/network-waterfalls-and-request-prioritization.json";
import neverAndExhaustiveCheckingLesson from "../courses/typescript-for-react/advanced-type-modeling-runtime-safety/never-and-exhaustive-checking.json";
import newtonsoftJsonLesson from "../courses/dotnet-nuget-packages/05-serialization-mapping/newtonsoft-json.json";
import nextjsLesson from "../courses/yarn-npm-packages/frontend-frameworks/nextjs.json";
import nextjsAppRouterArchitectureLesson from "../courses/next-js-full-stack-react/app-router-rendering/nextjs-app-router-architecture.json";
import nextjsIntegrationLesson from "../courses/apollo/09-ssr-nextjs-performance/nextjs-integration.json";
import nextjsRoutingLesson from "../courses/yarn-npm-packages/routing/nextjs-routing.json";
import nlogLesson from "../courses/dotnet-nuget-packages/logging-monitoring/nlog.json";
import normalizationLesson from "../interview-qa/01-beginner-questions/normalization.json";
import normalizingStateLesson from "../courses/redux/05-redux-patterns/normalizing-state.json";
import notNullLesson from "../courses/postgresql/constraints/not-null.json";
import notificationArchitectureLesson from "../problems/full-stack-senior-projects/project-2-collaborative-communication-platform/notification-architecture.json";
import notificationSystemLesson from "../problems/hld/notification-system/notification-system.json";
import npgsqlLesson from "../courses/dotnet-nuget-packages/04-database-data-access/npgsql.json";
import npmSecurityLesson from "../courses/fullstack-security/06-dependency-security/npm-security.json";
import npxYarnPnpLesson from "../courses/yarn-npm-packages/yarn-npm-fundamentals/npx-yarn-pnp.json";
import nspecLesson from "../courses/dotnet-nuget-packages/api-documentation-swagger/nspec.json";
import nsubstituteLesson from "../courses/dotnet-nuget-packages/07-testing-quality/nsubstitute.json";
import nugetConfigLesson from "../courses/dotnet-nuget-packages/01-nuget-fundamentals/nuget-config.json";
import nugetSecurityLesson from "../courses/fullstack-security/06-dependency-security/nuget-security.json";
import nullHandlingLesson from "../courses/postgresql/querying-data/null-handling.json";
import nullableTypesLesson from "../courses/csharp-fundamentals/07-modern-csharp/nullable-types.json";
import numberOfConnectedComponentsLesson from "../problems/csharp/04-tree-graph-problems/number-of-connected-components.json";
import numberOfIslandsLesson from "../problems/csharp/04-tree-graph-problems/number-of-islands.json";
import numericTypesLesson from "../courses/postgresql/data-types/numeric-types.json";
import nunitLesson from "../courses/dotnet-nuget-packages/07-testing-quality/nunit.json";
import nuxtjsLesson from "../courses/yarn-npm-packages/frontend-frameworks/nuxtjs.json";
import oauth20RolesAndFlowsLesson from "../courses/fullstack-security/modern-web-security-identity/oauth-20-roles-and-flows.json";
import oauthJwtLesson from "../interview-qa/02-intermediate-questions/oauth-jwt.json";
import oauthOverviewLesson from "../courses/authentication-authorization/04-oauth/oauth-overview.json";
import oauthSecurityBestPracticesLesson from "../courses/authentication-authorization/04-oauth/oauth-security-best-practices.json";
import objectManagementLesson from "../courses/postgresql/database-schema-table-objects/object-management.json";
import observabilityAndFailureTestingLesson from "../problems/full-stack-senior-projects/project-2-collaborative-communication-platform/observability-and-failure-testing.json";
import observabilityArchitectureLesson from "../courses/aws/11-monitoring-logging-observability/observability-architecture.json";
import observabilityLoggingMetricsAndTracingLesson from "../courses/azure/10-observability-and-application-monitoring/observability-logging-metrics-and-tracing.json";
import observabilityPlatformDesignLesson from "../problems/system-design/devops-system-design/observability-platform-design.json";
import observerPatternLesson from "../courses/clean-code-csharp/04-behavioral-patterns/observer-pattern.json";
import observerPatternLesson1 from "../courses/design-patterns/03-behavioral-patterns/observer-pattern.json";
import observerPatternLesson2 from "../courses/yarn-npm-packages/advanced-patterns/observer-pattern.json";
import oddEvenLinkedListLesson from "../problems/csharp/03-linked-list-problems/odd-even-linked-list.json";
import ofetchLesson from "../courses/yarn-npm-packages/http-clients/ofetch.json";
import offlineHandlingAndReconnectBehaviorLesson from "../problems/full-stack-senior-projects/project-2-collaborative-communication-platform/offline-handling-and-reconnect-behavior.json";
import offlineSupportLesson from "../courses/next-js-full-stack-react/data-fetching-patterns/offline-support.json";
import offlineSupportLesson1 from "../courses/redux/08-redux-real-world/offline-support.json";
import oftypeFilteringOperatorLesson from "../courses/linq/03-filtering-projection/oftype-filtering-operator.json";
import oneDatabaseQueryCauses90OfProductionDatabaseCpuLesson from "../problems/production-incident-lab-problems/backend-incidents/one-database-query-causes-90-of-production-database-cpu.json";
import oneToManyRelationsLesson from "../courses/prisma/04-prisma-relations/one-to-many-relations.json";
import oneToManyRelationshipsConventionsLesson from "../courses/ef-core/03-conventions-relationships/one-to-many-relationships-conventions.json";
import oneToOneRelationsLesson from "../courses/prisma/04-prisma-relations/one-to-one-relations.json";
import oneToOneRelationshipsConventionsLesson from "../courses/ef-core/03-conventions-relationships/one-to-one-relationships-conventions.json";
import onionArchitectureLesson from "../courses/design-patterns/06-architectural-patterns/onion-architecture.json";
import oopA01Lesson from "../interview-qa/03-advanced-questions/oop-a01.json";
import oopB01Lesson from "../interview-qa/01-beginner-questions/oop-b01.json";
import oopI01Lesson from "../interview-qa/02-intermediate-questions/oop-i01.json";
import oopI02Lesson from "../interview-qa/02-intermediate-questions/oop-i02.json";
import openClosedLesson from "../courses/clean-code-csharp/01-solid-principles/open-closed.json";
import openRedirectsAndUrlValidationLesson from "../courses/fullstack-security/modern-web-security-identity/open-redirects-and-url-validation.json";
import openapiGeneratorLesson from "../courses/dotnet-nuget-packages/api-documentation-swagger/openapi-generator.json";
import openidConnectLesson from "../courses/authentication-authorization/04-oauth/openid-connect.json";
import openidConnectLesson1 from "../courses/fullstack-security/modern-web-security-identity/openid-connect.json";
import openiddictLesson from "../courses/dotnet-nuget-packages/validation-authorization/openiddict.json";
import opensearchQuicksightLesson from "../courses/aws/13-analytics-big-data/opensearch-quicksight.json";
import opentelemetryLesson from "../courses/dotnet-nuget-packages/logging-monitoring/opentelemetry.json";
import operationalTipsLesson from "../courses/postgresql/modern-data-tools/operational-tips.json";
import operatorOverloadingLesson from "../courses/oops-concepts/04-polymorphism/operator-overloading.json";
import optimisticConcurrencyForApisLesson from "../courses/aspnet-core-web-api/production-api-design-reliability/optimistic-concurrency-for-apis.json";
import optimisticResponsesLesson from "../courses/apollo/06-error-handling-optimistic/optimistic-responses.json";
import optimisticUpdatesLesson from "../courses/next-js-full-stack-react/data-fetching-patterns/optimistic-updates.json";
import optimisticUpdatesLesson1 from "../courses/react-query/03-mutations/optimistic-updates.json";
import optimisticUpdatesAndRollbackLesson from "../courses/react-advanced-patterns/modern-state-application-architecture/optimistic-updates-and-rollback.json";
import optionsPatternLesson from "../problems/aspnet-core/05-dependency-injection-problems/options-pattern.json";
import optionsPatternAndConfigurationProvidersLesson from "../courses/aspnet-core/asp-net-core-internals-production-hosting/options-pattern-and-configuration-providers.json";
import orderByLesson from "../courses/postgresql/querying-data/order-by.json";
import orderbyOrderbydescendingLesson from "../courses/linq/04-sorting-grouping/orderby-orderbydescending.json";
import osiModelLesson from "../courses/programming-computer-web-foundations/networking-protocols/osi-model.json";
import otherComputeServicesLesson from "../courses/aws/03-compute-services/other-compute-services.json";
import otherDatabaseServicesLesson from "../courses/aws/06-databases/other-database-services.json";
import outboxPatternLesson from "../problems/system-design-problems/distributed-systems-fundamentals/outbox-pattern.json";
import outputEncodingLesson from "../courses/fullstack-security/05-secure-api-design/output-encoding.json";
import pacelcAndLatencyTradeOffsLesson from "../problems/system-design-problems/distributed-systems-fundamentals/pacelc-and-latency-trade-offs.json";
import pacificAtlanticWaterFlowLesson from "../problems/csharp/04-tree-graph-problems/pacific-atlantic-water-flow.json";
import packageJsonScriptsLesson from "../courses/yarn-npm-packages/yarn-npm-fundamentals/package-json-scripts.json";
import paginationLesson from "../courses/react-query/02-query-hooks/pagination.json";
import paginationBasicsLesson from "../courses/graphql-dotnet/04-filtering-pagination/pagination-basics.json";
import paginationCachingLesson from "../courses/apollo/03-caching/pagination-caching.json";
import paginationFilteringAndSortingDesignLesson from "../courses/aspnet-core-web-api/production-api-design-reliability/pagination-filtering-and-sorting-design.json";
import paginationTechniquesLesson from "../courses/prisma/03-prisma-queries-mutations/pagination-techniques.json";
import paintingAndCompositingLesson from "../courses/frontend-performance-engineering/runtime-performance/painting-and-compositing.json";
import palindromeLinkedListLesson from "../problems/csharp/03-linked-list-problems/palindrome-linked-list.json";
import palindromePartitioningLesson from "../problems/csharp/05-dynamic-programming-problems/palindrome-partitioning.json";
import palindromicSubstringsLesson from "../problems/csharp/02-string-problems/palindromic-substrings.json";
import parallelDataLoadingLesson from "../courses/next-js-full-stack-react/data-fetching-patterns/parallel-data-loading.json";
import parameterSniffingAndPlanInstabilityLesson from "../courses/sql-server/database-internals-query-optimization/parameter-sniffing-and-plan-instability.json";
import parkingLotSystemLesson from "../problems/lld/parking-lot-system/parking-lot-system.json";
import partialDataErrorHandlingLesson from "../courses/apollo/06-error-handling-optimistic/partial-data-error-handling.json";
import partialExpressionLesson from "../courses/postgresql/indexes/partial-expression.json";
import partialViewsLesson from "../courses/aspnet-core/05-razor-views/partial-views.json";
import partitioningLesson from "../courses/postgresql/advanced-topics/partitioning.json";
import passwordManagementLesson from "../courses/authentication-authorization/03-identity/password-management.json";
import passwordValidatorLesson from "../courses/dotnet-nuget-packages/08-security-cryptography/password-validator.json";
import passwordlessAuthenticationLesson from "../courses/authentication-authorization/09-security-best-practices/passwordless-authentication.json";
import pathSumLesson from "../problems/csharp/04-tree-graph-problems/path-sum.json";
import pathSumIiLesson from "../problems/csharp/04-tree-graph-problems/path-sum-ii.json";
import pathSumIiiLesson from "../problems/csharp/04-tree-graph-problems/path-sum-iii.json";
import pathTraversalAndFileUploadSecurityLesson from "../courses/fullstack-security/modern-web-security-identity/path-traversal-and-file-upload-security.json";
import patroniRepmgrLesson from "../courses/postgresql/high-availability-dr/patroni-repmgr.json";
import paymentGatewayLesson from "../problems/lld/payment-gateway/payment-gateway.json";
import paymentGatewayHldLesson from "../problems/hld/payment-gateway-hld/payment-gateway-hld.json";
import penetrationTestingBasicsLesson from "../courses/fullstack-security/08-security-testing/penetration-testing-basics.json";
import perfQ1Lesson from "../interview-qa/08-performance-optimization/perf-q1.json";
import perfQ2Lesson from "../interview-qa/08-performance-optimization/perf-q2.json";
import perfQ3Lesson from "../interview-qa/08-performance-optimization/perf-q3.json";
import perfQ4Lesson from "../interview-qa/08-performance-optimization/perf-q4.json";
import performanceAndReRendersLesson from "../courses/next-js-full-stack-react/state-management/performance-and-re-renders.json";
import performanceBudgetsLesson from "../courses/frontend-performance-engineering/build-optimization/performance-budgets.json";
import performanceBulkOperationsLesson from "../courses/ef-core/12-performance-bulk-operations/performance-bulk-operations.json";
import performanceMarkersLesson from "../courses/frontend-performance-engineering/runtime-performance/performance-markers.json";
import performanceOptimizationLesson from "../courses/apollo/09-ssr-nextjs-performance/performance-optimization.json";
import performanceOptimizationLesson1 from "../courses/aspnet-core/08-entity-framework-core/performance-optimization.json";
import performanceOptimizationLesson2 from "../courses/react-fundamentals/09-performance-optimization/performance-optimization.json";
import performanceOptimizationLesson3 from "../courses/redux/07-redux-advanced-concepts/performance-optimization.json";
import performancePaginationLesson from "../courses/graphql-dotnet/04-filtering-pagination/performance-pagination.json";
import performanceTuningLesson from "../courses/aspnet-core/12-deployment-production/performance-tuning.json";
import permissionsAndEnvironmentVariablesLesson from "../courses/git-linux-developer-workflow/linux-production-troubleshooting/permissions-and-environment-variables.json";
import permissionsGrantRevokeLesson from "../courses/sql-server/17-security-hardening/permissions-grant-revoke.json";
import persistedQueriesLesson from "../courses/graphql-dotnet/06-performance/persisted-queries.json";
import persistenceBasicsLesson from "../courses/react-query/06-offline-support-persistence/persistence-basics.json";
import pgDumpRestoreLesson from "../courses/postgresql/transactions-error-handling-backup/pg-dump-restore.json";
import pgvectorAiLesson from "../courses/postgresql/modern-data-tools/pgvector-ai.json";
import phase1RequirementsDomainModelAndArchitectureLesson from "../problems/full-stack-senior-projects/project-1-enterprise-expense-platform/phase-1-requirements-domain-model-and-architecture.json";
import phase10DockerizedDeploymentAndCicdLesson from "../problems/full-stack-senior-projects/project-1-enterprise-expense-platform/phase-10-dockerized-deployment-and-cicd.json";
import phase11CloudDeploymentAndProductionHardeningLesson from "../problems/full-stack-senior-projects/project-1-enterprise-expense-platform/phase-11-cloud-deployment-and-production-hardening.json";
import phase12ScaleTheSystemAndDocumentTradeOffsLesson from "../problems/full-stack-senior-projects/project-1-enterprise-expense-platform/phase-12-scale-the-system-and-document-trade-offs.json";
import phase2AspnetCoreApiAndReactApplicationLesson from "../problems/full-stack-senior-projects/project-1-enterprise-expense-platform/phase-2-aspnet-core-api-and-react-application.json";
import phase3AuthenticationAndAuthorizationLesson from "../problems/full-stack-senior-projects/project-1-enterprise-expense-platform/phase-3-authentication-and-authorization.json";
import phase4SqlSchemaEfCoreAndTransactionBoundariesLesson from "../problems/full-stack-senior-projects/project-1-enterprise-expense-platform/phase-4-sql-schema-ef-core-and-transaction-boundaries.json";
import phase5ValidationErrorHandlingAndApiContractsLesson from "../problems/full-stack-senior-projects/project-1-enterprise-expense-platform/phase-5-validation-error-handling-and-api-contracts.json";
import phase6AutomatedUnitAndIntegrationTestsLesson from "../problems/full-stack-senior-projects/project-1-enterprise-expense-platform/phase-6-automated-unit-and-integration-tests.json";
import phase7RedisCachingAndCacheInvalidationLesson from "../problems/full-stack-senior-projects/project-1-enterprise-expense-platform/phase-7-redis-caching-and-cache-invalidation.json";
import phase8BackgroundJobsAndMessageProcessingLesson from "../problems/full-stack-senior-projects/project-1-enterprise-expense-platform/phase-8-background-jobs-and-message-processing.json";
import phase9ObservabilityWithLogsMetricsAndTracesLesson from "../problems/full-stack-senior-projects/project-1-enterprise-expense-platform/phase-9-observability-with-logs-metrics-and-traces.json";
import pkceFlowLesson from "../courses/authentication-authorization/05-oauth2-flows-deep-dive/pkce-flow.json";
import playwrightLesson from "../courses/yarn-npm-packages/testing/playwright.json";
import playwrightBasedE2eTestingLesson from "../courses/react-testing/testing-strategy-for-senior-frontend-engineers/playwright-based-e2e-testing.json";
import plpgsqlBasicsLesson from "../courses/postgresql/stored-procedures-functions/plpgsql-basics.json";
import plpgsqlFunctionsLesson from "../courses/postgresql/stored-procedures-functions/plpgsql-functions.json";
import pmcPowershellCommandsMigrationsLesson from "../courses/ef-core/09-migrations/pmc-powershell-commands-migrations.json";
import podsAndWorkloadControllersLesson from "../courses/devops/production-kubernetes-day-2-operations/pods-and-workload-controllers.json";
import pointInTimeRecoveryLesson from "../courses/postgresql/transactions-error-handling-backup/point-in-time-recovery.json";
import policyBasedAuthorizationLesson from "../courses/aspnet-core/09-authentication-authorization/policy-based-authorization.json";
import policyBasedAuthorizationLesson1 from "../courses/authentication-authorization/06-advanced-authorization/policy-based-authorization.json";
import policyBasedAuthorizationLesson2 from "../problems/aspnet-core/07-authentication-authorization-problems/policy-based-authorization.json";
import policyServerLesson from "../courses/dotnet-nuget-packages/validation-authorization/policy-server.json";
import pollingLesson from "../courses/apollo/02-queries-mutations/polling.json";
import pollingRealTimeDataLesson from "../courses/react-query/09-real-world-patterns/polling-real-time-data.json";
import pollyLesson from "../courses/dotnet-nuget-packages/http-clients-resilience/polly.json";
import pollySimmyLesson from "../courses/dotnet-nuget-packages/http-clients-resilience/polly-simmy.json";
import polymorphicComponentsLesson from "../courses/react-advanced-patterns/09-component-composition-strategies/polymorphic-components.json";
import polymorphicComponentsLesson1 from "../courses/typescript-for-react/05-generic-components/polymorphic-components.json";
import polymorphismBasicsLesson from "../courses/oops-concepts/04-polymorphism/polymorphism-basics.json";
import popmotionLesson from "../courses/yarn-npm-packages/animation/popmotion.json";
import postcssLesson from "../courses/yarn-npm-packages/styling/postcss.json";
import postgisSpatialLesson from "../courses/postgresql/modern-data-tools/postgis-spatial.json";
import postmortemCultureLesson from "../courses/git-linux-developer-workflow/production-readiness/postmortem-culture.json";
import powerLesson from "../problems/csharp/07-recursion-problems/power.json";
import powxNLesson from "../problems/csharp/06-sorting-searching-problems/powx-n.json";
import prefetchPatternsLesson from "../courses/react-query/07-prefetching-ssr/prefetch-patterns.json";
import prefetchingStrategiesLesson from "../courses/react-query/07-prefetching-ssr/prefetching-strategies.json";
import presenceAndTypingIndicatorsLesson from "../problems/full-stack-senior-projects/project-2-collaborative-communication-platform/presence-and-typing-indicators.json";
import primaryKeyLesson from "../courses/postgresql/constraints/primary-key.json";
import principalsUsersRolesLesson from "../courses/sql-server/17-security-hardening/principals-users-roles.json";
import prismaApiRoutesLesson from "../courses/prisma/07-prisma-nextjs-integration/prisma-api-routes.json";
import prismaCicdDeploymentLesson from "../courses/prisma/07-prisma-nextjs-integration/prisma-cicd-deployment.json";
import prismaClientQueriesLesson from "../courses/prisma/03-prisma-queries-mutations/prisma-client-queries.json";
import prismaEnvironmentVariablesLesson from "../courses/prisma/07-prisma-nextjs-integration/prisma-environment-variables.json";
import prismaInNextjsAppRouterLesson from "../courses/prisma/07-prisma-nextjs-integration/prisma-in-nextjs-app-router.json";
import prismaMigrateDeployLesson from "../courses/prisma/05-prisma-migrations/prisma-migrate-deploy.json";
import prismaMigrateDevLesson from "../courses/prisma/05-prisma-migrations/prisma-migrate-dev.json";
import prismaMigrateResetLesson from "../courses/prisma/05-prisma-migrations/prisma-migrate-reset.json";
import prismaPerformanceOptimizationLesson from "../courses/prisma/07-prisma-nextjs-integration/prisma-performance-optimization.json";
import prismaRouteHandlersLesson from "../courses/prisma/07-prisma-nextjs-integration/prisma-route-handlers.json";
import prismaSecurityBestPracticesLesson from "../courses/prisma/07-prisma-nextjs-integration/prisma-security-best-practices.json";
import prismaStudioIntroductionLesson from "../courses/prisma/01-prisma-basics/prisma-studio-introduction.json";
import prismaVsOtherOrmsLesson from "../courses/prisma/01-prisma-basics/prisma-vs-other-orms.json";
import prismaWithAuthenticationLesson from "../courses/prisma/07-prisma-nextjs-integration/prisma-with-authentication.json";
import prismaWithServerActionsLesson from "../courses/prisma/07-prisma-nextjs-integration/prisma-with-server-actions.json";
import privateDnsAndPrivateEndpointConnectivityLesson from "../courses/azure/08-networking-and-api-platforms/private-dns-and-private-endpoint-connectivity.json";
import privateEndpointsAndNetworkIsolationLesson from "../courses/azure/production-architecture-reliability-cost/private-endpoints-and-network-isolation.json";
import privateEndpointsAndPrivateLinkLesson from "../courses/azure/08-networking-and-api-platforms/private-endpoints-and-private-link.json";
import privateIpAndPublicIpAddressingLesson from "../courses/azure/08-networking-and-api-platforms/private-ip-and-public-ip-addressing.json";
import problemDetailsLesson from "../courses/aspnet-core-web-api/06-error-handling-validation/problem-details.json";
import problemDetailsAndConsistentErrorContractsLesson from "../courses/aspnet-core-web-api/production-api-design-reliability/problem-details-and-consistent-error-contracts.json";
import processesThreadsAndSignalsLesson from "../courses/git-linux-developer-workflow/linux-production-troubleshooting/processes-threads-and-signals.json";
import processesVsThreadsLesson from "../courses/programming-computer-web-foundations/programming-computer-fundamentals/processes-vs-threads.json";
import producerConsumerPatternLesson from "../courses/design-patterns/05-concurrency-patterns/producer-consumer-pattern.json";
import productOfArrayExceptSelfLesson from "../problems/csharp/01-array-problems/product-of-array-except-self.json";
import productionPerformanceRegressionAnalysisLesson from "../courses/aspnet-core/performance-observability/production-performance-regression-analysis.json";
import profilingCpuAndAllocationsLesson from "../courses/aspnet-core/performance-observability/profiling-cpu-and-allocations.json";
import profilingDebuggingLesson from "../courses/react-query/08-performance-optimization/profiling-debugging.json";
import profilingDebuggingLesson1 from "../courses/yarn-npm-packages/react-performance/profiling-debugging.json";
import profilingDebuggingLesson2 from "../problems/aspnet-core/08-testing-debugging-problems/profiling-debugging.json";
import projectStructureLesson from "../courses/aspnet-core-web-api/01-getting-started/project-structure.json";
import projectStructureLesson1 from "../courses/redux/08-redux-real-world/project-structure.json";
import projectionOperatorsLesson from "../courses/linq/03-filtering-projection/projection-operators.json";
import projectionVsIncludeLesson from "../courses/ef-core/ef-core-performance-orm-trade-offs/projection-vs-include.json";
import prometheusLesson from "../courses/dotnet-nuget-packages/logging-monitoring/prometheus.json";
import promisesJsLesson from "../interview-qa/01-beginner-questions/promises-js.json";
import propertiesLesson from "../courses/oops-concepts/02-encapsulation-data-hiding/properties.json";
import propsAdvancedLesson from "../courses/react-fundamentals/02-components-props/props-advanced.json";
import propsBasicsLesson from "../courses/react-fundamentals/02-components-props/props-basics.json";
import protobufLesson from "../courses/dotnet-nuget-packages/05-serialization-mapping/protobuf.json";
import prototypePatternLesson from "../courses/clean-code-csharp/02-creational-patterns/prototype-pattern.json";
import prototypePatternLesson1 from "../courses/design-patterns/01-creational-patterns/prototype-pattern.json";
import providerLesson from "../courses/redux/03-react-redux/provider.json";
import proxyPatternLesson from "../courses/design-patterns/02-structural-patterns/proxy-pattern.json";
import psTopSsLsofAndCurlForDiagnosisLesson from "../courses/git-linux-developer-workflow/linux-production-troubleshooting/ps-top-ss-lsof-and-curl-for-diagnosis.json";
import psqlBasicsLesson from "../courses/postgresql/getting-started/psql-basics.json";
import publicEndpointsVsPrivateEndpointsLesson from "../courses/azure/08-networking-and-api-platforms/public-endpoints-vs-private-endpoints.json";
import pullRequestAndCodeReviewWorkflowLesson from "../courses/git-linux-developer-workflow/git-for-senior-engineers/pull-request-and-code-review-workflow.json";
import quantifierOperatorsLesson from "../courses/linq/08-quantifiers-element-operators/quantifier-operators.json";
import quartzLesson from "../courses/dotnet-nuget-packages/06-messaging-events/quartz.json";
import queriesLesson from "../courses/react-testing/03-react-testing-library/queries.json";
import queryBasicsLesson from "../courses/graphql-dotnet/03-queries-mutations/query-basics.json";
import queryCancellationLesson from "../courses/react-query/04-advanced-features/query-cancellation.json";
import queryClientLesson from "../courses/react-query/01-query-basics/query-client.json";
import queryComplexityLesson from "../courses/graphql-dotnet/06-performance/query-complexity.json";
import queryLoggingAndPerformanceLesson from "../courses/prisma/06-prisma-advanced-features/query-logging-and-performance.json";
import queryOptimizationLesson from "../courses/sql-server/16-performance-tuning/query-optimization.json";
import queryOptimizationLesson1 from "../problems/aspnet-core/06-ef-core-problems/query-optimization.json";
import queryOptionsLesson from "../courses/apollo/02-queries-mutations/query-options.json";
import queryOptionsLesson1 from "../courses/react-query/02-query-hooks/query-options.json";
import queryPlanningLesson from "../courses/postgresql/performance-tuning/query-planning.json";
import queryRegressionAfterDeploymentLesson from "../courses/sql-server/concurrency-production-database-problems/query-regression-after-deployment.json";
import queryStoreLesson from "../courses/sql-server/16-performance-tuning/query-store.json";
import queryingLesson from "../courses/ef-core/07-querying/querying.json";
import queryingInEntityFrameworkCoreLesson from "../courses/ef-core/07-querying/querying-in-entity-framework-core.json";
import queryingWithLinqLesson from "../courses/aspnet-core/08-entity-framework-core/querying-with-linq.json";
import queuesVsPubsubVsEventStreamsLesson from "../problems/system-design-problems/distributed-systems-fundamentals/queues-vs-pubsub-vs-event-streams.json";
import quorumConceptsLesson from "../problems/system-design-problems/distributed-systems-fundamentals/quorum-concepts.json";
import rabbitmqClientLesson from "../courses/dotnet-nuget-packages/06-messaging-events/rabbitmq-client.json";
import raceConditionsAndThreadSafetyLesson from "../courses/csharp-fundamentals/advanced-async-concurrency-threading/race-conditions-and-thread-safety.json";
import rangeTypesLesson from "../courses/postgresql/data-types/range-types.json";
import ransomNoteLesson from "../problems/csharp/02-string-problems/ransom-note.json";
import rapidQ1Lesson from "../interview-qa/06-rapid-fire/rapid-q1.json";
import rapidQ2Lesson from "../interview-qa/06-rapid-fire/rapid-q2.json";
import rapidQ3Lesson from "../interview-qa/06-rapid-fire/rapid-q3.json";
import rateLimiterLesson from "../problems/hld/rate-limiter/rate-limiter.json";
import rateLimitingLesson from "../courses/next-js-full-stack-react/full-stack-api-design/rate-limiting.json";
import rateLimitingAndLoadSheddingLesson from "../courses/aspnet-core-web-api/production-api-design-reliability/rate-limiting-and-load-shedding.json";
import rateLimitingInAspnetLesson from "../courses/fullstack-security/04-api-security-rate-limiting/rate-limiting-in-aspnet.json";
import rateLimitingSecurityLesson from "../courses/authentication-authorization/09-security-best-practices/rate-limiting-security.json";
import razorSyntaxLesson from "../courses/aspnet-core/05-razor-views/razor-syntax.json";
import razorSyntaxBasicsLesson from "../problems/aspnet-core/02-razor-views-problems/razor-syntax-basics.json";
import rbacAndNamespacesLesson from "../courses/devops/production-kubernetes-day-2-operations/rbac-and-namespaces.json";
import rbacOverviewLesson from "../courses/azure/07-identity-security-and-configuration/rbac-overview.json";
import react19FeaturesLesson from "../courses/react-fundamentals/09-performance-optimization/react-19-features.json";
import reactA01Lesson from "../interview-qa/03-advanced-questions/react-a01.json";
import reactApplicationAndAuthenticationLesson from "../problems/full-stack-senior-projects/project-2-collaborative-communication-platform/react-application-and-authentication.json";
import reactB01Lesson from "../interview-qa/01-beginner-questions/react-b01.json";
import reactB02Lesson from "../interview-qa/01-beginner-questions/react-b02.json";
import reactContextLesson from "../courses/react-fundamentals/06-context-refs/react-context.json";
import reactEssentialsLesson from "../courses/yarn-npm-packages/frontend-frameworks/react-essentials.json";
import reactHookFormLesson from "../courses/yarn-npm-packages/forms/react-hook-form.json";
import reactHookFormLesson1 from "../courses/yarn-npm-packages/react-forms-input/react-hook-form.json";
import reactI01Lesson from "../interview-qa/02-intermediate-questions/react-i01.json";
import reactI02Lesson from "../interview-qa/02-intermediate-questions/react-i02.json";
import reactI03Lesson from "../interview-qa/02-intermediate-questions/react-i03.json";
import reactIntegrationLesson from "../courses/authentication-authorization/02-jwt/react-integration.json";
import reactKeysLesson from "../interview-qa/01-beginner-questions/react-keys.json";
import reactMemoizationLesson from "../courses/yarn-npm-packages/react-performance/react-memoization.json";
import reactMicroFrontendsLesson from "../problems/system-design/react-system-design/react-micro-frontends.json";
import reactPageBecomesProgressivelySlowerAfterNavigationLesson from "../problems/production-incident-lab-problems/frontend-incidents/react-page-becomes-progressively-slower-after-navigation.json";
import reactProfilerAndRenderInvestigationLesson from "../courses/frontend-performance-engineering/browser-react-performance/react-profiler-and-render-investigation.json";
import reactQueryLesson from "../courses/yarn-npm-packages/react-data-fetching/react-query.json";
import reactQueryForServerStateLesson from "../courses/next-js-full-stack-react/state-management/react-query-for-server-state.json";
import reactQueryserverCacheArchitectureLesson from "../courses/react-advanced-patterns/modern-state-application-architecture/react-queryserver-cache-architecture.json";
import reactRouterLesson from "../courses/yarn-npm-packages/routing/react-router.json";
import reactSpringLesson from "../courses/yarn-npm-packages/animation/react-spring.json";
import reactSsrSsgHybridLesson from "../problems/system-design/react-system-design/react-ssr-ssg-hybrid.json";
import reactTestingLibraryLesson from "../courses/yarn-npm-packages/react-testing/react-testing-library.json";
import reactVirtualLesson from "../courses/yarn-npm-packages/react-ecosystem/react-virtual.json";
import reactiveVariablesLesson from "../courses/apollo/08-local-state-management/reactive-variables.json";
import readOnlyFieldsLesson from "../courses/oops-concepts/02-encapsulation-data-hiding/read-only-fields.json";
import readReplicasAndReadwriteSeparationLesson from "../courses/sql-server/concurrency-production-database-problems/read-replicas-and-readwrite-separation.json";
import readerWriterLocksLesson from "../courses/design-patterns/05-concurrency-patterns/reader-writer-locks.json";
import readinessProbesFailDuringANormalTrafficSpikeLesson from "../problems/production-incident-lab-problems/database-infrastructure-incidents/readiness-probes-fail-during-a-normal-traffic-spike.json";
import readingApplicationAndSystemLogsLesson from "../courses/git-linux-developer-workflow/linux-production-troubleshooting/reading-application-and-system-logs.json";
import readytorunAndNativeAotLesson from "../courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/readytorun-and-native-aot.json";
import realTimePatternsLesson from "../courses/apollo/07-subscriptions-realtime/real-time-patterns.json";
import realWorldAbstractionLesson from "../courses/oops-concepts/05-abstraction/real-world-abstraction.json";
import rebusLesson from "../courses/dotnet-nuget-packages/06-messaging-events/rebus.json";
import reconciliationAndComponentIdentityLesson from "../courses/react-fundamentals/react-internals-modern-rendering/reconciliation-and-component-identity.json";
import recordsPatternsLesson from "../courses/csharp-fundamentals/07-modern-csharp/records-patterns.json";
import recoverBinarySearchTreeLesson from "../problems/csharp/04-tree-graph-problems/recover-binary-search-tree.json";
import redGreenRefactorLesson from "../courses/unit-testing-dotnet/05-tdd/red-green-refactor.json";
import redisLesson from "../courses/dotnet-nuget-packages/04-database-data-access/redis.json";
import redisCachingPatternsLesson from "../courses/azure/06-databases-and-caching/redis-caching-patterns.json";
import redisCachingPatternsLesson1 from "../problems/azure/05-azure-databases-problems/redis-caching-patterns.json";
import reducerHooksPatternsLesson from "../courses/react-advanced-patterns/10-advanced-hook-patterns/reducer-hooks-patterns.json";
import reduxLesson from "../courses/yarn-npm-packages/state-management/redux.json";
import reduxAsAnApplicationArchitectureToolLesson from "../courses/react-advanced-patterns/modern-state-application-architecture/redux-as-an-application-architecture-tool.json";
import reduxSagaLesson from "../courses/redux/04-redux-middleware/redux-saga.json";
import reduxThunkLesson from "../courses/redux/04-redux-middleware/redux-thunk.json";
import referenceTypesLesson from "../courses/csharp-fundamentals/02-variables-types/reference-types.json";
import referencesValuesAndObjectLifetimeLesson from "../courses/programming-computer-web-foundations/programming-computer-fundamentals/references-values-and-object-lifetime.json";
import refetchingLesson from "../courses/apollo/02-queries-mutations/refetching.json";
import refitLesson from "../courses/dotnet-nuget-packages/http-clients-resilience/refit.json";
import reflectionAndItsTradeOffsLesson from "../courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/reflection-and-its-trade-offs.json";
import reflogAndRecoveringLostCommitsLesson from "../courses/git-linux-developer-workflow/git-for-senior-engineers/reflog-and-recovering-lost-commits.json";
import refreshTokenBasicsLesson from "../courses/authentication-authorization/07-refresh-token-strategies/refresh-token-basics.json";
import refreshTokenRotationLesson from "../courses/fullstack-security/modern-web-security-identity/refresh-token-rotation.json";
import regularExpressionMatchingLesson from "../problems/csharp/05-dynamic-programming-problems/regular-expression-matching.json";
import relationQueriesAndPaginationLesson from "../courses/prisma/04-prisma-relations/relation-queries-and-pagination.json";
import relationsOverviewLesson from "../courses/prisma/04-prisma-relations/relations-overview.json";
import relationshipsAndConfigurationsLesson from "../courses/aspnet-core/08-entity-framework-core/relationships-and-configurations.json";
import relationshipsConfigurationLesson from "../problems/aspnet-core/06-ef-core-problems/relationships-configuration.json";
import releaseValidationAndRollbackLesson from "../courses/azure/11-application-deployment-and-devops/release-validation-and-rollback.json";
import reliabilityPatternsLesson from "../courses/senior-software-engineering/system-design-for-seniors/reliability-patterns.json";
import removeDuplicatesFromSortedArrayLesson from "../problems/csharp/01-array-problems/remove-duplicates-from-sorted-array.json";
import removeDuplicatesFromSortedListLesson from "../problems/csharp/03-linked-list-problems/remove-duplicates-from-sorted-list.json";
import removeLinkedListElementsLesson from "../problems/csharp/03-linked-list-problems/remove-linked-list-elements.json";
import removeNthNodeFromEndLesson from "../problems/csharp/03-linked-list-problems/remove-nth-node-from-end.json";
import renderOptimizationLesson from "../courses/react-advanced-patterns/06-performance-patterns/render-optimization.json";
import renderOptimizationLesson1 from "../courses/react-testing/06-advanced-testing-patterns/render-optimization.json";
import renderPhaseVsCommitPhaseLesson from "../courses/react-fundamentals/react-internals-modern-rendering/render-phase-vs-commit-phase.json";
import renderPropsBasicsLesson from "../courses/react-advanced-patterns/01-render-props/render-props-basics.json";
import renderPropsExamplesLesson from "../courses/react-advanced-patterns/01-render-props/render-props-examples.json";
import renderPropsVsHooksLesson from "../courses/react-advanced-patterns/01-render-props/render-props-vs-hooks.json";
import renderingOptimizationLesson from "../courses/yarn-npm-packages/react-performance/rendering-optimization.json";
import replicationAndPartitioningLesson from "../problems/system-design-problems/distributed-systems-fundamentals/replication-and-partitioning.json";
import repositoryPatternLesson from "../courses/clean-code-csharp/06-architecture-patterns/repository-pattern.json";
import repositoryPatternLesson1 from "../courses/design-patterns/04-enterprise-patterns/repository-pattern.json";
import repositoryPatternLesson2 from "../interview-qa/02-intermediate-questions/repository-pattern.json";
import requestCancellationAndGracefulShutdownLesson from "../courses/aspnet-core/asp-net-core-internals-production-hosting/request-cancellation-and-graceful-shutdown.json";
import requestLatencyDecompositionLesson from "../courses/aspnet-core/performance-observability/request-latency-decomposition.json";
import requestLoggingLesson from "../problems/aspnet-core/04-middleware-pipeline-problems/request-logging.json";
import requestPipelineAndMiddlewareExecutionLesson from "../courses/aspnet-core/asp-net-core-internals-production-hosting/request-pipeline-and-middleware-execution.json";
import requestValidationLesson from "../courses/next-js-full-stack-react/full-stack-api-design/request-validation.json";
import requestsAndLimitsLesson from "../courses/devops/production-kubernetes-day-2-operations/requests-and-limits.json";
import requirementsAndRealTimeCommunicationArchitectureLesson from "../problems/full-stack-senior-projects/project-2-collaborative-communication-platform/requirements-and-real-time-communication-architecture.json";
import requirementsGatheringLesson from "../courses/senior-software-engineering/system-design-for-seniors/requirements-gathering.json";
import resolversLesson from "../courses/graphql-dotnet/03-queries-mutations/resolvers.json";
import resolvingDifficultMergeConflictsLesson from "../courses/git-linux-developer-workflow/git-for-senior-engineers/resolving-difficult-merge-conflicts.json";
import resourceBasedAuthorizationLesson from "../courses/authentication-authorization/06-advanced-authorization/resource-based-authorization.json";
import resourceGroupsVsManagementGroupsLesson from "../problems/azure/01-azure-foundations-problems/resource-groups-vs-management-groups.json";
import resourceLimitsLesson from "../courses/devops/production-docker-container-security/resource-limits.json";
import responseCachingLesson from "../problems/aspnet-core/03-api-design-problems/response-caching.json";
import responseCompressionLesson from "../problems/aspnet-core/04-middleware-pipeline-problems/response-compression.json";
import responseFormattingLesson from "../courses/next-js-full-stack-react/full-stack-api-design/response-formatting.json";
import restApiDesignPrinciplesLesson from "../problems/aspnet-core/03-api-design-problems/rest-api-design-principles.json";
import restPrinciplesLesson from "../courses/aspnet-core/10-web-api-rest/rest-principles.json";
import restVsGraphqlDecisionFrameworkLesson from "../courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/rest-vs-graphql-decision-framework.json";
import restVsGrpcDecisionFrameworkLesson from "../courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/rest-vs-grpc-decision-framework.json";
import restsharpLesson from "../courses/dotnet-nuget-packages/http-clients-resilience/restsharp.json";
import retryWithExponentialBackoffAndJitterLesson from "../problems/system-design-problems/distributed-systems-fundamentals/retry-with-exponential-backoff-and-jitter.json";
import revalidationPatternsLesson from "../courses/next-js-full-stack-react/data-fetching-patterns/revalidation-patterns.json";
import reverseAnArrayLesson from "../problems/csharp/01-array-problems/reverse-an-array.json";
import reverseLinkedListLesson from "../problems/csharp/03-linked-list-problems/reverse-linked-list.json";
import reverseStringLesson from "../problems/csharp/02-string-problems/reverse-string.json";
import reverseWordsLesson from "../problems/csharp/02-string-problems/reverse-words.json";
import reversibilityLesson from "../courses/senior-software-engineering/technical-decision-making/reversibility.json";
import reviewABackgroundWorkerWithNoCancellationSupportLesson from "../problems/senior-code-review-lab-problems/c-aspnet-core-reviews/review-a-background-worker-with-no-cancellation-support.json";
import reviewAComponentThatRendersAHugeListWithoutVirtualizationLesson from "../problems/senior-code-review-lab-problems/react-typescript-reviews/review-a-component-that-renders-a-huge-list-without-virtualization.json";
import reviewAComponentWithUnnecessaryGlobalStateLesson from "../problems/senior-code-review-lab-problems/react-typescript-reviews/review-a-component-with-unnecessary-global-state.json";
import reviewAFrontendAuthenticationImplementationStoringSensitiveTokensUnsafelyLesson from "../problems/senior-code-review-lab-problems/react-typescript-reviews/review-a-frontend-authentication-implementation-storing-sensitive-tokens-unsafely.json";
import reviewAMutationFlowWithNoRollbackAfterOptimisticUpdateLesson from "../problems/senior-code-review-lab-problems/react-typescript-reviews/review-a-mutation-flow-with-no-rollback-after-optimistic-update.json";
import reviewAReactContextUsedForRapidlyChangingServerStateLesson from "../problems/senior-code-review-lab-problems/react-typescript-reviews/review-a-react-context-used-for-rapidly-changing-server-state.json";
import reviewAReactEffectThatCreatesASubscriptionLeakLesson from "../problems/senior-code-review-lab-problems/react-typescript-reviews/review-a-react-effect-that-creates-a-subscription-leak.json";
import reviewASingletonServiceThatCapturesAScopedDependencyLesson from "../problems/senior-code-review-lab-problems/c-aspnet-core-reviews/review-a-singleton-service-that-captures-a-scoped-dependency.json";
import reviewATypescriptApiClientFullOfUnsafeTypeAssertionsLesson from "../problems/senior-code-review-lab-problems/react-typescript-reviews/review-a-typescript-api-client-full-of-unsafe-type-assertions.json";
import reviewAnApiEndpointThatTrustsAnObjectIdFromTheClientLesson from "../problems/senior-code-review-lab-problems/c-aspnet-core-reviews/review-an-api-endpoint-that-trusts-an-object-id-from-the-client.json";
import reviewAnApiThatLogsSensitiveRequestDataLesson from "../problems/senior-code-review-lab-problems/c-aspnet-core-reviews/review-an-api-that-logs-sensitive-request-data.json";
import reviewAnApiThatRetriesEveryExceptionIndefinitelyLesson from "../problems/senior-code-review-lab-problems/c-aspnet-core-reviews/review-an-api-that-retries-every-exception-indefinitely.json";
import reviewAnAsyncMethodThatBlocksOnResultLesson from "../problems/senior-code-review-lab-problems/c-aspnet-core-reviews/review-an-async-method-that-blocks-on-result.json";
import reviewAnEfCoreQueryThatCausesN1DatabaseCallsLesson from "../problems/senior-code-review-lab-problems/c-aspnet-core-reviews/review-an-ef-core-query-that-causes-n1-database-calls.json";
import reviewAnHttpClientImplementationThatCreatesSocketsRepeatedlyLesson from "../problems/senior-code-review-lab-problems/c-aspnet-core-reviews/review-an-http-client-implementation-that-creates-sockets-repeatedly.json";
import rideSharingHldLesson from "../problems/hld/ride-sharing-hld/ride-sharing-hld.json";
import riskAssessmentLesson from "../courses/senior-software-engineering/technical-decision-making/risk-assessment.json";
import roleBasedAccessLesson from "../courses/aspnet-core/09-authentication-authorization/role-based-access.json";
import roleBasedAccessLesson1 from "../problems/aspnet-core/07-authentication-authorization-problems/role-based-access.json";
import roleBasedAuthorizationLesson from "../courses/authentication-authorization/06-advanced-authorization/role-based-authorization.json";
import rolesAuthorizationLesson from "../courses/authentication-authorization/03-identity/roles-authorization.json";
import rolesPrivilegesLesson from "../courses/postgresql/security-hardening/roles-privileges.json";
import rollbackStrategyLesson from "../courses/devops/ci-cd-safe-delivery/rollback-strategy.json";
import rollbackVsForwardFixLesson from "../courses/senior-software-engineering/production-ownership/rollback-vs-forward-fix.json";
import rollingDeploymentsAndRollbackLesson from "../courses/devops/production-kubernetes-day-2-operations/rolling-deployments-and-rollback.json";
import rollupLesson from "../courses/yarn-npm-packages/build-tools/rollup.json";
import rootCauseAnalysisLesson from "../courses/senior-software-engineering/production-ownership/root-cause-analysis.json";
import roslynAnalyzersLesson from "../courses/dotnet-nuget-packages/advanced-patterns/roslyn-analyzers.json";
import rotateArrayLesson from "../problems/csharp/01-array-problems/rotate-array.json";
import round1ExplainYourArchitectureForAProductionNetReactApplicationLesson from "../interview-qa/mock-interview-scenarios/round-1-explain-your-architecture-for-a-production-net-react-application.json";
import round10FinalSeniorLevelSystemDesignWithInterviewerFollowUpsLesson from "../interview-qa/mock-interview-scenarios/round-10-final-senior-level-system-design-with-interviewer-follow-ups.json";
import round2DiagnoseASlowApiWithDatabaseAndInfrastructureSymptomsLesson from "../interview-qa/mock-interview-scenarios/round-2-diagnose-a-slow-api-with-database-and-infrastructure-symptoms.json";
import round3DesignAScalableOrderProcessingSystemLesson from "../interview-qa/mock-interview-scenarios/round-3-design-a-scalable-order-processing-system.json";
import round4DebugAReactPerformanceRegressionLesson from "../interview-qa/mock-interview-scenarios/round-4-debug-a-react-performance-regression.json";
import round5ReviewAPullRequestAndIdentifyCorrectnessSecurityAndMaintainabilityIssuesLesson from "../interview-qa/mock-interview-scenarios/round-5-review-a-pull-request-and-identify-correctness-security-and-maintainability-issues.json";
import round6ExplainADistributedTransactionAndFailureRecoveryStrategyLesson from "../interview-qa/mock-interview-scenarios/round-6-explain-a-distributed-transaction-and-failure-recovery-strategy.json";
import round7DefendAnArchitectureDecisionAndDiscussRejectedAlternativesLesson from "../interview-qa/mock-interview-scenarios/round-7-defend-an-architecture-decision-and-discuss-rejected-alternatives.json";
import round8TellTheStoryOfAProductionIncidentYouOwnedLesson from "../interview-qa/mock-interview-scenarios/round-8-tell-the-story-of-a-production-incident-you-owned.json";
import round9DesignAMigrationFromMonolithToModularArchitectureLesson from "../interview-qa/mock-interview-scenarios/round-9-design-a-migration-from-monolith-to-modular-architecture.json";
import routeConstraintsLesson from "../courses/aspnet-core/03-routing-urls/route-constraints.json";
import routeConstraintsLesson1 from "../courses/aspnet-core-web-api/02-controllers-routing/route-constraints.json";
import routeHandlersLesson from "../courses/next-js-full-stack-react/full-stack-api-design/route-handlers.json";
import routeHandlersAndBackendForFrontendPatternsLesson from "../courses/next-js-full-stack-react/app-router-rendering/route-handlers-and-backend-for-frontend-patterns.json";
import routeParamsLesson from "../courses/react-fundamentals/07-react-router/route-params.json";
import route53DnsLesson from "../courses/aws/04-networking/route53-dns.json";
import routingBasicsLesson from "../courses/aspnet-core/03-routing-urls/routing-basics.json";
import routingBasicsLesson1 from "../courses/aspnet-core-web-api/02-controllers-routing/routing-basics.json";
import routingBasicsLesson2 from "../courses/react-fundamentals/07-react-router/routing-basics.json";
import routingBasicsLesson3 from "../problems/aspnet-core/01-mvc-fundamentals-problems/routing-basics.json";
import rowLevelSecurityLesson from "../courses/postgresql/security-hardening/row-level-security.json";
import rtkQueryLesson from "../courses/redux/05-redux-patterns/rtk-query.json";
import rtlIntroLesson from "../courses/react-testing/03-react-testing-library/rtl-intro.json";
import rtoAndRpoLesson from "../courses/senior-software-engineering/production-ownership/rto-and-rpo.json";
import rtoAndRpoForAzureApplicationsLesson from "../courses/azure/production-architecture-reliability-cost/rto-and-rpo-for-azure-applications.json";
import runbookAutomationLesson from "../courses/git-linux-developer-workflow/production-readiness/runbook-automation.json";
import runningAndDebuggingLesson from "../courses/aspnet-core/01-getting-started/running-and-debugging.json";
import runtimePolymorphismLesson from "../courses/oops-concepts/04-polymorphism/runtime-polymorphism.json";
import runtimeValidationVsCompileTimeTypesLesson from "../courses/typescript-for-react/advanced-type-modeling-runtime-safety/runtime-validation-vs-compile-time-types.json";
import s3AdvancedFeaturesLesson from "../courses/aws/05-storage-services/s3-advanced-features.json";
import sagaPatternLesson from "../problems/system-design-problems/distributed-systems-fundamentals/saga-pattern.json";
import sameTreeLesson from "../problems/csharp/04-tree-graph-problems/same-tree.json";
import saml2BasicsLesson from "../courses/authentication-authorization/08-sso-identity-providers/saml2-basics.json";
import sampleLinqQueriesLesson from "../courses/linq/11-advanced-linq-concepts/sample-linq-queries.json";
import sassLesson from "../courses/yarn-npm-packages/styling/sass.json";
import scalableAspnetApiDesignLesson from "../problems/system-design/aspnet-system-design/scalable-aspnet-api-design.json";
import scalableReactStateArchitectureLesson from "../problems/system-design/react-system-design/scalable-react-state-architecture.json";
import scalarsCustomTypesLesson from "../courses/graphql-dotnet/02-schema-types/scalars-custom-types.json";
import scalingRealTimeConnectionsLesson from "../problems/full-stack-senior-projects/project-2-collaborative-communication-platform/scaling-real-time-connections.json";
import scalingStrategiesLesson from "../courses/senior-software-engineering/system-design-for-seniors/scaling-strategies.json";
import scenarioQ1Lesson from "../interview-qa/04-scenario-based/scenario-q1.json";
import scenarioQ2Lesson from "../interview-qa/04-scenario-based/scenario-q2.json";
import scenarioQ21Lesson from "../interview-qa/04-scenario-based/scenario-q21.json";
import scenarioQ22Lesson from "../interview-qa/04-scenario-based/scenario-q22.json";
import scenarioQ23Lesson from "../interview-qa/04-scenario-based/scenario-q23.json";
import scenarioQ24Lesson from "../interview-qa/04-scenario-based/scenario-q24.json";
import scenarioQ25Lesson from "../interview-qa/04-scenario-based/scenario-q25.json";
import scenarioQ3Lesson from "../interview-qa/04-scenario-based/scenario-q3.json";
import schemaBasicsLesson from "../courses/graphql-dotnet/02-schema-types/schema-basics.json";
import schemaBestPracticesLesson from "../courses/prisma/02-prisma-schema-design/schema-best-practices.json";
import schemaPrismaStructureLesson from "../courses/prisma/02-prisma-schema-design/schema-prisma-structure.json";
import schemaValidationForApiBoundariesLesson from "../courses/typescript-for-react/advanced-type-modeling-runtime-safety/schema-validation-for-api-boundaries.json";
import scopedVsTransientVsSingletonLesson from "../problems/aspnet-core/05-dependency-injection-problems/scoped-vs-transient-vs-singleton.json";
import scopesClaimsRolesAndPoliciesLesson from "../courses/fullstack-security/modern-web-security-identity/scopes-claims-roles-and-policies.json";
import sdB01Lesson from "../interview-qa/05-system-design/sd-b01.json";
import sealedClassesLesson from "../courses/oops-concepts/03-inheritance/sealed-classes.json";
import searchAutocompleteLesson from "../problems/hld/search-autocomplete/search-autocomplete.json";
import searchInRotatedSortedArrayLesson from "../problems/csharp/01-array-problems/search-in-rotated-sorted-array.json";
import secretStorageAndRotationLesson from "../courses/fullstack-security/modern-web-security-identity/secret-storage-and-rotation.json";
import secretsManagementLesson from "../courses/fullstack-security/07-environment-secrets/secrets-management.json";
import secureStorageStrategiesLesson from "../courses/authentication-authorization/07-refresh-token-strategies/secure-storage-strategies.json";
import securingAiServicesWithManagedIdentityLesson from "../courses/azure/13-ai-services-for-azure-developers/securing-ai-services-with-managed-identity.json";
import securingReactAppsLesson from "../courses/fullstack-security/03-xss-csrf-protection/securing-react-apps.json";
import securityHardeningLesson from "../courses/git-linux-developer-workflow/production-readiness/security-hardening.json";
import securityTestingFundamentalsLesson from "../courses/fullstack-security/08-security-testing/security-testing-fundamentals.json";
import seedScriptsLesson from "../courses/prisma/05-prisma-migrations/seed-scripts.json";
import seekVsScanLesson from "../courses/sql-server/database-internals-query-optimization/seek-vs-scan.json";
import selectAndIncludeLesson from "../courses/prisma/03-prisma-queries-mutations/select-and-include.json";
import selectStatementLesson from "../courses/postgresql/querying-data/select-statement.json";
import selectiveFetchingLesson from "../courses/react-query/08-performance-optimization/selective-fetching.json";
import semaphoreslimAndBoundedConcurrencyLesson from "../courses/csharp-fundamentals/advanced-async-concurrency-threading/semaphoreslim-and-bounded-concurrency.json";
import sendgridLesson from "../courses/dotnet-nuget-packages/09-utilities-helpers/sendgrid.json";
import seqLesson from "../courses/dotnet-nuget-packages/logging-monitoring/seq.json";
import sequenceequalOperatorLesson from "../courses/linq/11-advanced-linq-concepts/sequenceequal-operator.json";
import serilogLesson from "../courses/dotnet-nuget-packages/logging-monitoring/serilog.json";
import serverActionsAndMutationBoundariesLesson from "../courses/next-js-full-stack-react/app-router-rendering/server-actions-and-mutation-boundaries.json";
import serverComponentsAndClientComponentsLesson from "../courses/next-js-full-stack-react/app-router-rendering/server-components-and-client-components.json";
import serverComponentsDataFetchingLesson from "../courses/next-js-full-stack-react/data-fetching-patterns/server-components-data-fetching.json";
import serverComponentsVsClientComponentsLesson from "../courses/react-fundamentals/react-internals-modern-rendering/server-components-vs-client-components.json";
import serverGcVsWorkstationGcLesson from "../courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/server-gc-vs-workstation-gc.json";
import serverlessApiBestPracticesLesson from "../problems/azure/03-azure-serverless-problems/serverless-api-best-practices.json";
import serverlessArchitecturePatternsLesson from "../courses/aws/08-serverless/serverless-architecture-patterns.json";
import serviceBoundariesLesson from "../courses/senior-software-engineering/system-design-for-seniors/service-boundaries.json";
import serviceBusDeadLetteringAndRetriesLesson from "../courses/azure/09-messaging-and-event-driven-architecture/service-bus-dead-lettering-and-retries.json";
import serviceBusFromAzureFunctionsLesson from "../courses/azure/09-messaging-and-event-driven-architecture/service-bus-from-azure-functions.json";
import serviceBusQueuesLesson from "../courses/azure/09-messaging-and-event-driven-architecture/service-bus-queues.json";
import serviceBusSessionsAndMessageProcessingLesson from "../courses/azure/09-messaging-and-event-driven-architecture/service-bus-sessions-and-message-processing.json";
import serviceBusTopicsAndSubscriptionsLesson from "../courses/azure/09-messaging-and-event-driven-architecture/service-bus-topics-and-subscriptions.json";
import serviceBusVsEventGridVsEventHubsLesson from "../courses/azure/09-messaging-and-event-driven-architecture/service-bus-vs-event-grid-vs-event-hubs.json";
import serviceLifetimesLesson from "../courses/aspnet-core/06-dependency-injection/service-lifetimes.json";
import serviceLifetimesLesson1 from "../courses/aspnet-core-web-api/05-dependency-injection/service-lifetimes.json";
import serviceLifetimesLesson2 from "../problems/aspnet-core/05-dependency-injection-problems/service-lifetimes.json";
import servicesAndServiceDiscoveryLesson from "../courses/devops/production-kubernetes-day-2-operations/services-and-service-discovery.json";
import sessionManagementLesson from "../courses/authentication-authorization/09-security-best-practices/session-management.json";
import sessionVsTokenLesson from "../courses/authentication-authorization/01-auth-basics/session-vs-token.json";
import setMatrixZeroesLesson from "../problems/csharp/01-array-problems/set-matrix-zeroes.json";
import setReturningFunctionsLesson from "../courses/postgresql/stored-procedures-functions/set-returning-functions.json";
import settingUpLesson from "../courses/csharp-fundamentals/01-getting-started/setting-up.json";
import settingUpEnvironmentLesson from "../courses/aspnet-core/01-getting-started/setting-up-environment.json";
import settingUpEnvironmentLesson1 from "../courses/react-fundamentals/01-getting-started/setting-up-environment.json";
import settingUpPrismaClientLesson from "../courses/prisma/01-prisma-basics/setting-up-prisma-client.json";
import setupLesson from "../courses/react-query/01-query-basics/setup.json";
import setupClientLesson from "../courses/apollo/01-apollo-basics/setup-client.json";
import setupIdentityLesson from "../courses/authentication-authorization/03-identity/setup-identity.json";
import shadowPropertyInEntityFrameworkCoreLesson from "../courses/ef-core/10-advanced-features/shadow-property-in-entity-framework-core.json";
import shardingStrategiesLesson from "../problems/system-design-problems/distributed-systems-fundamentals/sharding-strategies.json";
import sharpcompressLesson from "../courses/dotnet-nuget-packages/08-security-cryptography/sharpcompress.json";
import sharpcompressLesson1 from "../courses/dotnet-nuget-packages/09-utilities-helpers/sharpcompress.json";
import simpleViewsLesson from "../courses/postgresql/views/simple-views.json";
import simplifyPathLesson from "../problems/csharp/02-string-problems/simplify-path.json";
import singleResponsibilityLesson from "../courses/clean-code-csharp/01-solid-principles/single-responsibility.json";
import singleSingleordefaultLesson from "../courses/linq/08-quantifiers-element-operators/single-singleordefault.json";
import singletonPatternLesson from "../courses/clean-code-csharp/02-creational-patterns/singleton-pattern.json";
import singletonPatternLesson1 from "../courses/design-patterns/01-creational-patterns/singleton-pattern.json";
import skipSkipwhileLesson from "../courses/linq/09-partitioning-operators/skip-skipwhile.json";
import slackMessagingLesson from "../problems/lld/slack-messaging/slack-messaging.json";
import slackMessagingHldLesson from "../problems/hld/slack-messaging-hld/slack-messaging-hld.json";
import sliSloAndSlaLesson from "../courses/senior-software-engineering/production-ownership/sli-slo-and-sla.json";
import sliSloAndSlaInAzureWorkloadsLesson from "../courses/azure/production-architecture-reliability-cost/sli-slo-and-sla-in-azure-workloads.json";
import slidingExpirationLesson from "../courses/authentication-authorization/07-refresh-token-strategies/sliding-expiration.json";
import slotPatternLesson from "../courses/react-advanced-patterns/09-component-composition-strategies/slot-pattern.json";
import slowApiInvestigationWorkflowLesson from "../courses/aspnet-core/performance-observability/slow-api-investigation-workflow.json";
import snapshotIsolationAndRowVersioningLesson from "../courses/sql-server/concurrency-production-database-problems/snapshot-isolation-and-row-versioning.json";
import solidPrinciplesLesson from "../courses/oops-concepts/07-design-principles/solid-principles.json";
import solidPrinciplesLesson1 from "../interview-qa/02-intermediate-questions/solid-principles.json";
import sortColorsLesson from "../problems/csharp/01-array-problems/sort-colors.json";
import sourceGeneratorsLesson from "../courses/dotnet-nuget-packages/advanced-patterns/source-generators.json";
import spantMemorytAndRefStructsLesson from "../courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/spant-memoryt-and-ref-structs.json";
import spantWhatDoesItImproveAndWhatConstraintsDoesItIntroduceLesson from "../interview-qa/c-net-follow-ups/spant-what-does-it-improve-and-what-constraints-does-it-introduce.json";
import spectreConsoleLesson from "../courses/dotnet-nuget-packages/advanced-patterns/spectre-console.json";
import spiralMatrixLesson from "../problems/csharp/01-array-problems/spiral-matrix.json";
import spotifyMusicLesson from "../problems/lld/spotify-music/spotify-music.json";
import spotifyMusicHldLesson from "../problems/hld/spotify-music-hld/spotify-music-hld.json";
import sqlA01Lesson from "../interview-qa/03-advanced-questions/sql-a01.json";
import sqlA02Lesson from "../interview-qa/03-advanced-questions/sql-a02.json";
import sqlB01Lesson from "../interview-qa/01-beginner-questions/sql-b01.json";
import sqlB02Lesson from "../interview-qa/01-beginner-questions/sql-b02.json";
import sqlB03Lesson from "../interview-qa/01-beginner-questions/sql-b03.json";
import sqlFunctionsLesson from "../courses/postgresql/stored-procedures-functions/sql-functions.json";
import sqlI01Lesson from "../interview-qa/02-intermediate-questions/sql-i01.json";
import sqlI02Lesson from "../interview-qa/02-intermediate-questions/sql-i02.json";
import sqlI03Lesson from "../interview-qa/02-intermediate-questions/sql-i03.json";
import sqlInjectionAndParameterizationLesson from "../courses/fullstack-security/modern-web-security-identity/sql-injection-and-parameterization.json";
import sqlServerCpuReaches95AfterAReleaseLesson from "../problems/production-incident-lab-problems/database-infrastructure-incidents/sql-server-cpu-reaches-95-after-a-release.json";
import sqlServerIntegrationServicesLesson from "../courses/sql-server/21-modern-data-tools/sql-server-integration-services.json";
import sqlVsNosqlDecisionFrameworkLesson from "../courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/sql-vs-nosql-decision-framework.json";
import sqlclientLesson from "../courses/dotnet-nuget-packages/04-database-data-access/sqlclient.json";
import ssgHydrationLesson from "../courses/apollo/09-ssr-nextjs-performance/ssg-hydration.json";
import sshAndSecureRemoteAccessLesson from "../courses/git-linux-developer-workflow/linux-production-troubleshooting/ssh-and-secure-remote-access.json";
import sslTlsLesson from "../courses/postgresql/security-hardening/ssl-tls.json";
import ssoAndIdentityProviderIntegrationLesson from "../courses/fullstack-security/modern-web-security-identity/sso-and-identity-provider-integration.json";
import ssoFundamentalsLesson from "../courses/authentication-authorization/08-sso-identity-providers/sso-fundamentals.json";
import ssrIntegrationNextjsLesson from "../courses/react-query/07-prefetching-ssr/ssr-integration-nextjs.json";
import ssrSsgIsrAndDynamicRenderingLesson from "../courses/next-js-full-stack-react/app-router-rendering/ssr-ssg-isr-and-dynamic-rendering.json";
import ssrWithApolloLesson from "../courses/apollo/09-ssr-nextjs-performance/ssr-with-apollo.json";
import ssrfAndServerSideRequestValidationLesson from "../courses/fullstack-security/modern-web-security-identity/ssrf-and-server-side-request-validation.json";
import stackVsHeapLesson from "../courses/programming-computer-web-foundations/programming-computer-fundamentals/stack-vs-heap.json";
import stackexchangeRedisLesson from "../courses/dotnet-nuget-packages/04-database-data-access/stackexchange-redis.json";
import stacksAndQueuesLesson from "../courses/programming-computer-web-foundations/data-structures-deep-dive/stacks-and-queues.json";
import stakeholderAlignmentLesson from "../courses/senior-software-engineering/technical-decision-making/stakeholder-alignment.json";
import staleTimeGcLesson from "../courses/react-query/05-caching-strategies/stale-time-gc.json";
import standardQueryOperatorsLesson from "../courses/linq/11-advanced-linq-concepts/standard-query-operators.json";
import starSnowflakeSchemaLesson from "../courses/sql-server/19-data-warehousing/star-snowflake-schema.json";
import stateArchitectureLesson from "../courses/next-js-full-stack-react/state-management/state-architecture.json";
import stateBestPracticesLesson from "../courses/react-fundamentals/03-state-events/state-best-practices.json";
import stateCompositionLesson from "../courses/apollo/08-local-state-management/state-composition.json";
import stateReducerBasicsLesson from "../courses/react-advanced-patterns/04-state-reducers/state-reducer-basics.json";
import stateReducerCompositionLesson from "../courses/react-advanced-patterns/04-state-reducers/state-reducer-composition.json";
import stateReducerExamplesLesson from "../courses/react-advanced-patterns/04-state-reducers/state-reducer-examples.json";
import stateSharingBetweenHooksLesson from "../courses/react-advanced-patterns/07-custom-hooks-architecture/state-sharing-between-hooks.json";
import stateSynchronizationLesson from "../courses/next-js-full-stack-react/state-management/state-synchronization.json";
import stateSynchronizationAcrossBrowserTabsLesson from "../courses/react-advanced-patterns/modern-state-application-architecture/state-synchronization-across-browser-tabs.json";
import statechartsAdvancedLesson from "../courses/react-advanced-patterns/08-state-machines-xstate/statecharts-advanced.json";
import statelessServicesAndDistributedStateLesson from "../problems/system-design-problems/distributed-systems-fundamentals/stateless-services-and-distributed-state.json";
import staticFilesAndCachingLesson from "../courses/aspnet-core/07-middleware-pipeline/static-files-and-caching.json";
import statisticsAndCardinalityEstimationLesson from "../courses/sql-server/database-internals-query-optimization/statistics-and-cardinality-estimation.json";
import statisticsMaintenanceLesson from "../courses/sql-server/16-performance-tuning/statistics-maintenance.json";
import stepFunctionsLesson from "../courses/aws/08-serverless/step-functions.json";
import storageEncryptionAndSecurityLesson from "../problems/azure/04-azure-storage-problems/storage-encryption-and-security.json";
import storagePrivateEndpointsLesson from "../courses/azure/05-storage-and-data-services/storage-private-endpoints.json";
import storageQueuesLesson from "../courses/azure/05-storage-and-data-services/storage-queues.json";
import storageRedundancyAndReplicationLesson from "../courses/azure/05-storage-and-data-services/storage-redundancy-and-replication.json";
import storageSecurityAndEncryptionLesson from "../courses/azure/05-storage-and-data-services/storage-security-and-encryption.json";
import storeActionsReducersLesson from "../courses/redux/01-redux-fundamentals/store-actions-reducers.json";
import storeInitializationLesson from "../courses/redux/07-redux-advanced-concepts/store-initialization.json";
import storedProceduresLesson from "../courses/postgresql/stored-procedures-functions/stored-procedures.json";
import storedProceduresVsFunctionsLesson from "../interview-qa/01-beginner-questions/stored-procedures-vs-functions.json";
import storybookLesson from "../courses/yarn-npm-packages/testing/storybook.json";
import strategyPatternLesson from "../courses/clean-code-csharp/04-behavioral-patterns/strategy-pattern.json";
import strategyPatternLesson1 from "../courses/design-patterns/03-behavioral-patterns/strategy-pattern.json";
import streamingAndSuspenseLesson from "../courses/next-js-full-stack-react/app-router-rendering/streaming-and-suspense.json";
import streamingAndSuspenseLesson1 from "../courses/next-js-full-stack-react/data-fetching-patterns/streaming-and-suspense.json";
import streamingApisAndLargePayloadsLesson from "../courses/aspnet-core-web-api/production-api-design-reliability/streaming-apis-and-large-payloads.json";
import streamingReplicationLesson from "../courses/postgresql/high-availability-dr/streaming-replication.json";
import stringCompressionLesson from "../problems/csharp/02-string-problems/string-compression.json";
import strongVsEventualConsistencyLesson from "../problems/system-design-problems/distributed-systems-fundamentals/strong-vs-eventual-consistency.json";
import structuredLoggingLesson from "../courses/aspnet-core-web-api/08-logging-configuration/structured-logging.json";
import structuredLoggingAndCorrelationIdsLesson from "../courses/aspnet-core/performance-observability/structured-logging-and-correlation-ids.json";
import stubsFakesLesson from "../courses/unit-testing-dotnet/03-mocking-fakes/stubs-fakes.json";
import styledComponentsLesson from "../courses/react-fundamentals/08-styling/styled-components.json";
import styledComponentsLesson1 from "../courses/yarn-npm-packages/styling/styled-components.json";
import subarraySumEqualsKLesson from "../problems/csharp/01-array-problems/subarray-sum-equals-k.json";
import subscriptionLifecycleLesson from "../courses/apollo/07-subscriptions-realtime/subscription-lifecycle.json";
import subscriptionsLesson from "../courses/apollo/04-advanced-patterns/subscriptions.json";
import subscriptionsLesson1 from "../courses/graphql-dotnet/03-queries-mutations/subscriptions.json";
import subscriptionsBasicsLesson from "../courses/apollo/07-subscriptions-realtime/subscriptions-basics.json";
import subscriptionsResourceGroupsResourcesLesson from "../courses/azure/01-azure-developer-foundations/subscriptions-resource-groups-resources.json";
import supplyChainSecurityInCicdLesson from "../courses/devops/ci-cd-safe-delivery/supply-chain-security-in-cicd.json";
import surroundedRegionsLesson from "../problems/csharp/04-tree-graph-problems/surrounded-regions.json";
import suspenseLesson from "../courses/react-query/04-advanced-features/suspense.json";
import suspenseAndAsynchronousUiLesson from "../courses/react-fundamentals/react-internals-modern-rendering/suspense-and-asynchronous-ui.json";
import svelteLesson from "../courses/yarn-npm-packages/frontend-frameworks/svelte.json";
import swaggerAndOpenapiLesson from "../courses/aspnet-core/10-web-api-rest/swagger-and-openapi.json";
import swaggerDocumentationLesson from "../problems/aspnet-core/03-api-design-problems/swagger-documentation.json";
import swapNodesInPairsLesson from "../problems/csharp/03-linked-list-problems/swap-nodes-in-pairs.json";
import swashbuckleLesson from "../courses/dotnet-nuget-packages/api-documentation-swagger/swashbuckle.json";
import swashbuckleAspnetcoreLesson from "../courses/dotnet-nuget-packages/api-documentation-swagger/swashbuckle-aspnetcore.json";
import switchStatementsLesson from "../courses/csharp-fundamentals/03-control-flow/switch-statements.json";
import swrLesson from "../courses/yarn-npm-packages/react-data-fetching/swr.json";
import symmetricTreeLesson from "../problems/csharp/04-tree-graph-problems/symmetric-tree.json";
import synchronousVsAsynchronousWorkLesson from "../courses/programming-computer-web-foundations/programming-computer-fundamentals/synchronous-vs-asynchronous-work.json";
import synchronousVsAsynchronousWorkflowsLesson from "../courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/synchronous-vs-asynchronous-workflows.json";
import systemIoPipelinesLesson from "../courses/dotnet-nuget-packages/advanced-patterns/system-io-pipelines.json";
import systemQ1Lesson from "../interview-qa/05-system-design/system-q1.json";
import systemQ11Lesson from "../interview-qa/05-system-design/system-q11.json";
import systemQ12Lesson from "../interview-qa/05-system-design/system-q12.json";
import systemQ13Lesson from "../interview-qa/05-system-design/system-q13.json";
import systemQ14Lesson from "../interview-qa/05-system-design/system-q14.json";
import systemQ15Lesson from "../interview-qa/05-system-design/system-q15.json";
import systemQ2Lesson from "../interview-qa/05-system-design/system-q2.json";
import systemTextJsonLesson from "../courses/dotnet-nuget-packages/05-serialization-mapping/system-text-json.json";
import systemTextJsonSourceGenLesson from "../courses/dotnet-nuget-packages/advanced-patterns/system-text-json-source-gen.json";
import systemThreadingChannelsLesson from "../courses/dotnet-nuget-packages/advanced-patterns/system-threading-channels.json";
import systemsManagerLesson from "../courses/aws/12-security-services/systems-manager.json";
import tableInheritanceLesson from "../courses/postgresql/advanced-topics/table-inheritance.json";
import tableStorageLesson from "../courses/azure/05-storage-and-data-services/table-storage.json";
import tagHelpersLesson from "../courses/aspnet-core/05-razor-views/tag-helpers.json";
import tagHelpersLesson1 from "../problems/aspnet-core/02-razor-views-problems/tag-helpers.json";
import tailwindCssLesson from "../courses/react-fundamentals/08-styling/tailwind-css.json";
import tailwindCssLesson1 from "../courses/yarn-npm-packages/styling/tailwind-css.json";
import takeTakewhileLesson from "../courses/linq/09-partitioning-operators/take-takewhile.json";
import tanstackRouterLesson from "../courses/yarn-npm-packages/routing/tanstack-router.json";
import taskSchedulingAndContinuationsLesson from "../courses/csharp-fundamentals/advanced-async-concurrency-threading/task-scheduling-and-continuations.json";
import taskrunWhenIsItAppropriateInAnAspnetCoreApplicationLesson from "../interview-qa/c-net-follow-ups/taskrun-when-is-it-appropriate-in-an-aspnet-core-application.json";
import tcpConnectionAndTlsHandshakeLesson from "../courses/programming-computer-web-foundations/web-networking-fundamentals/tcp-connection-and-tls-handshake.json";
import tcpIpStackLesson from "../courses/programming-computer-web-foundations/networking-protocols/tcp-ip-stack.json";
import tddAspnetCoreLesson from "../courses/unit-testing-dotnet/05-tdd/tdd-aspnet-core.json";
import tddIntroLesson from "../courses/unit-testing-dotnet/05-tdd/tdd-intro.json";
import tddPatternsLesson from "../courses/unit-testing-dotnet/05-tdd/tdd-patterns.json";
import technicalRoadmapsLesson from "../courses/senior-software-engineering/technical-decision-making/technical-roadmaps.json";
import tellMeAboutADifficultTechnicalDecisionYouMadeLesson from "../interview-qa/leadership-ownership/tell-me-about-a-difficult-technical-decision-you-made.json";
import tellMeAboutAProductionIncidentYouOwnedLesson from "../interview-qa/leadership-ownership/tell-me-about-a-production-incident-you-owned.json";
import tellMeAboutAProjectThatFailedAndWhatYouLearnedLesson from "../interview-qa/leadership-ownership/tell-me-about-a-project-that-failed-and-what-you-learned.json";
import tellMeAboutATechnicalDecisionYouWouldMakeDifferentlyTodayLesson from "../interview-qa/leadership-ownership/tell-me-about-a-technical-decision-you-would-make-differently-today.json";
import tellMeAboutATimeYouDisagreedWithAnotherEngineerLesson from "../interview-qa/leadership-ownership/tell-me-about-a-time-you-disagreed-with-another-engineer.json";
import tellMeAboutATimeYouInfluencedADecisionWithoutAuthorityLesson from "../interview-qa/leadership-ownership/tell-me-about-a-time-you-influenced-a-decision-without-authority.json";
import tellMeAboutATimeYouMentoredAnotherEngineerLesson from "../interview-qa/leadership-ownership/tell-me-about-a-time-you-mentored-another-engineer.json";
import tellMeAboutATimeYouPushedBackOnARequirementLesson from "../interview-qa/leadership-ownership/tell-me-about-a-time-you-pushed-back-on-a-requirement.json";
import tellMeAboutTechnicalDebtYouInheritedAndHowYouHandledItLesson from "../interview-qa/leadership-ownership/tell-me-about-technical-debt-you-inherited-and-how-you-handled-it.json";
import tellMeAboutTheMostDifficultMigrationYouLedLesson from "../interview-qa/leadership-ownership/tell-me-about-the-most-difficult-migration-you-led.json";
import templateLiteralTypesLesson from "../courses/typescript-for-react/04-advanced-types/template-literal-types.json";
import testDataBuildersLesson from "../courses/unit-testing-dotnet/06-testing-patterns/test-data-builders.json";
import testDoublesMocksStubsAndFakesLesson from "../courses/react-testing/testing-strategy-for-senior-frontend-engineers/test-doubles-mocks-stubs-and-fakes.json";
import testFixturesLesson from "../courses/unit-testing-dotnet/02-xunit-basics/test-fixtures.json";
import testNamingConventionsLesson from "../courses/unit-testing-dotnet/01-testing-fundamentals/test-naming-conventions.json";
import testServerLesson from "../courses/unit-testing-dotnet/04-integration-testing/test-server.json";
import testStructureLesson from "../courses/react-testing/01-testing-fundamentals/test-structure.json";
import testcontainersAndRealisticBackendIntegrationLesson from "../courses/react-testing/testing-strategy-for-senior-frontend-engineers/testcontainers-and-realistic-backend-integration.json";
import testingApiCallsLesson from "../courses/react-testing/04-component-testing/testing-api-calls.json";
import testingApisLesson from "../courses/next-js-full-stack-react/full-stack-api-design/testing-apis.json";
import testingAsyncLesson from "../courses/redux/06-redux-testing/testing-async.json";
import testingCacheInvalidationLesson from "../courses/react-testing/07-testing-react-query/testing-cache-invalidation.json";
import testingComponentsLesson from "../courses/redux/06-redux-testing/testing-components.json";
import testingContextLesson from "../courses/react-testing/04-component-testing/testing-context.json";
import testingFormsLesson from "../courses/react-testing/04-component-testing/testing-forms.json";
import testingFundamentalsLesson from "../courses/aspnet-core/11-testing-debugging/testing-fundamentals.json";
import testingHooksLesson from "../courses/react-testing/03-react-testing-library/testing-hooks.json";
import testingHooksLesson1 from "../courses/yarn-npm-packages/react-testing/testing-hooks.json";
import testingLibraryLesson from "../courses/yarn-npm-packages/testing/testing-library.json";
import testingMutationsLesson from "../courses/react-testing/07-testing-react-query/testing-mutations.json";
import testingPrinciplesLesson from "../courses/react-testing/01-testing-fundamentals/testing-principles.json";
import testingPyramidLesson from "../courses/unit-testing-dotnet/01-testing-fundamentals/testing-pyramid.json";
import testingReducersLesson from "../courses/redux/06-redux-testing/testing-reducers.json";
import testingRoutingLesson from "../courses/react-testing/04-component-testing/testing-routing.json";
import testingStateLesson from "../courses/next-js-full-stack-react/state-management/testing-state.json";
import testingTypesLesson from "../courses/react-testing/01-testing-fundamentals/testing-types.json";
import testingTypescriptReactLesson from "../courses/typescript-for-react/07-testing-best-practices/testing-typescript-react.json";
import textTypesLesson from "../courses/postgresql/data-types/text-types.json";
import thenbyThenbydescendingLesson from "../courses/linq/04-sorting-grouping/thenby-thenbydescending.json";
import threadPoolPatternLesson from "../courses/design-patterns/05-concurrency-patterns/thread-pool-pattern.json";
import threadPoolStarvationLesson from "../courses/aspnet-core/performance-observability/thread-pool-starvation.json";
import threadPoolStarvationCausesRequestTimeoutsUnderLoadLesson from "../problems/production-incident-lab-problems/backend-incidents/thread-pool-starvation-causes-request-timeouts-under-load.json";
import threadpoolInternalsAndThreadStarvationLesson from "../courses/csharp-fundamentals/advanced-async-concurrency-threading/threadpool-internals-and-thread-starvation.json";
import threatDetectionComplianceLesson from "../courses/aws/12-security-services/threat-detection-compliance.json";
import threePrinciplesLesson from "../courses/redux/01-redux-fundamentals/three-principles.json";
import ticTacToeGameLesson from "../problems/lld/tic-tac-toe-game/tic-tac-toe-game.json";
import ticketBookingHldLesson from "../problems/hld/ticket-booking-hld/ticket-booking-hld.json";
import timeComplexityAndBigOLesson from "../courses/programming-computer-web-foundations/programming-computer-fundamentals/time-complexity-and-big-o.json";
import timeoutsAndCircuitBreakersLesson from "../problems/system-design-problems/distributed-systems-fundamentals/timeouts-and-circuit-breakers.json";
import timeoutsRetriesAndCancellationLesson from "../courses/aspnet-core-web-api/production-api-design-reliability/timeouts-retries-and-cancellation.json";
import timescaledbTimeSeriesLesson from "../courses/postgresql/modern-data-tools/timescaledb-time-series.json";
import toastMvccLesson from "../courses/postgresql/advanced-topics/toast-mvcc.json";
import tokenRevocationLesson from "../courses/authentication-authorization/07-refresh-token-strategies/token-revocation.json";
import tokenRotationLesson from "../courses/authentication-authorization/07-refresh-token-strategies/token-rotation.json";
import trackgraphInEntityFrameworkCoreLesson from "../courses/ef-core/06-change-tracking/trackgraph-in-entity-framework-core.json";
import trackingChangesOfEntitiesLesson from "../courses/ef-core/06-change-tracking/tracking-changes-of-entities.json";
import trackingVsAsnotrackingLesson from "../courses/ef-core/ef-core-performance-orm-trade-offs/tracking-vs-asnotracking.json";
import tradeOffAnalysisLesson from "../courses/senior-software-engineering/technical-decision-making/trade-off-analysis.json";
import transactionFundamentalsLesson from "../courses/postgresql/transactions-error-handling-backup/transaction-fundamentals.json";
import transactionIsolationLevelsLesson from "../courses/sql-server/concurrency-production-database-problems/transaction-isolation-levels.json";
import transactionsAndInteractiveTransactionsLesson from "../courses/prisma/06-prisma-advanced-features/transactions-and-interactive-transactions.json";
import trapQ1Lesson from "../interview-qa/07-interview-traps/trap-q1.json";
import trapQ2Lesson from "../interview-qa/07-interview-traps/trap-q2.json";
import trappingRainWaterLesson from "../problems/csharp/01-array-problems/trapping-rain-water.json";
import treeShakingLesson from "../courses/frontend-performance-engineering/build-optimization/tree-shaking.json";
import treeShakingAndDependencyCostLesson from "../courses/frontend-performance-engineering/browser-react-performance/tree-shaking-and-dependency-cost.json";
import treesAndGraphsLesson from "../courses/programming-computer-web-foundations/data-structures-deep-dive/trees-and-graphs.json";
import trieStructuresLesson from "../courses/programming-computer-web-foundations/data-structures-deep-dive/trie-structures.json";
import triggerBasicsLesson from "../courses/postgresql/triggers/trigger-basics.json";
import triggerManagementLesson from "../courses/postgresql/triggers/trigger-management.json";
import troubleshootingToolsLesson from "../courses/programming-computer-web-foundations/networking-protocols/troubleshooting-tools.json";
import tryCatchFinallyLesson from "../courses/csharp-fundamentals/06-error-handling/try-catch-finally.json";
import ttfbAndFrontendPerformanceBudgetsLesson from "../courses/frontend-performance-engineering/browser-react-performance/ttfb-and-frontend-performance-budgets.json";
import turboLesson from "../courses/yarn-npm-packages/build-tools/turbo.json";
import twitterSocialLesson from "../problems/lld/twitter-social/twitter-social.json";
import twitterSocialHldLesson from "../problems/hld/twitter-social-hld/twitter-social-hld.json";
import twoSumLesson from "../problems/csharp/01-array-problems/two-sum.json";
import typeAssertionsAndAsLesson from "../courses/typescript-for-react/01-typescript-basics/type-assertions-and-as.json";
import typeConversionLesson from "../courses/csharp-fundamentals/02-variables-types/type-conversion.json";
import typeDefinitionsLesson from "../courses/graphql-dotnet/02-schema-types/type-definitions.json";
import typeGuardsLesson from "../courses/typescript-for-react/04-advanced-types/type-guards.json";
import typeNarrowingLesson from "../courses/typescript-for-react/07-testing-best-practices/type-narrowing.json";
import typePoliciesFieldPoliciesLesson from "../courses/apollo/05-client-side-caching-advanced/type-policies-field-policies.json";
import typePredicatesLesson from "../courses/typescript-for-react/advanced-type-modeling-runtime-safety/type-predicates.json";
import typeSafeContextLesson from "../courses/typescript-for-react/06-react-patterns/type-safe-context.json";
import typeSafetyPatternsLesson from "../courses/typescript-for-react/07-testing-best-practices/type-safety-patterns.json";
import typedFormHandlersLesson from "../courses/typescript-for-react/06-react-patterns/typed-form-handlers.json";
import typedReactQueryLesson from "../courses/typescript-for-react/06-react-patterns/typed-react-query.json";
import typedRouterLesson from "../courses/typescript-for-react/06-react-patterns/typed-router.json";
import typingChildrenAndSpecialPropsLesson from "../courses/typescript-for-react/02-types-in-react/typing-children-and-special-props.json";
import typingComponentsLesson from "../courses/typescript-for-react/02-types-in-react/typing-components.json";
import typingEventsLesson from "../courses/typescript-for-react/02-types-in-react/typing-events.json";
import typingPerformanceHooksLesson from "../courses/typescript-for-react/03-typing-hooks/typing-performance-hooks.json";
import typingPropsLesson from "../courses/typescript-for-react/02-types-in-react/typing-props.json";
import typingStateLesson from "../courses/typescript-for-react/02-types-in-react/typing-state.json";
import typingUsecontextAndReduxLesson from "../courses/typescript-for-react/03-typing-hooks/typing-usecontext-and-redux.json";
import typingUseeffectLesson from "../courses/typescript-for-react/03-typing-hooks/typing-useeffect.json";
import typingUserefLesson from "../courses/typescript-for-react/03-typing-hooks/typing-useref.json";
import uberRideSharingLesson from "../problems/lld/uber-ride-sharing/uber-ride-sharing.json";
import uberRideSharingHldLesson from "../problems/hld/uber-ride-sharing-hld/uber-ride-sharing-hld.json";
import understandingCorsLesson from "../courses/fullstack-security/01-cors-configuration/understanding-cors.json";
import understandingProjectStructureLesson from "../courses/aspnet-core/01-getting-started/understanding-project-structure.json";
import understandingStructureLesson from "../courses/csharp-fundamentals/01-getting-started/understanding-structure.json";
import understandingXssCsrfLesson from "../courses/fullstack-security/03-xss-csrf-protection/understanding-xss-csrf.json";
import unionLesson from "../courses/postgresql/set-operations/union.json";
import unionSetOperatorLesson from "../courses/linq/06-set-operations/union-set-operator.json";
import uniqueCheckLesson from "../courses/postgresql/constraints/unique-check.json";
import uniquePathsLesson from "../problems/csharp/05-dynamic-programming-problems/unique-paths.json";
import uniquePathsIiLesson from "../problems/csharp/05-dynamic-programming-problems/unique-paths-ii.json";
import unitOfWorkLesson from "../courses/design-patterns/04-enterprise-patterns/unit-of-work.json";
import unitTestingControllersLesson from "../courses/aspnet-core/11-testing-debugging/unit-testing-controllers.json";
import unitTestingControllersLesson1 from "../problems/aspnet-core/08-testing-debugging-problems/unit-testing-controllers.json";
import unknownVsAnyLesson from "../courses/typescript-for-react/advanced-type-modeling-runtime-safety/unknown-vs-any.json";
import updateLesson from "../courses/postgresql/data-modification-dml/update.json";
import updateDataDisconnectedScenarioLesson from "../courses/ef-core/05-data-operations-disconnected/update-data-disconnected-scenario.json";
import urlAsStateLesson from "../courses/next-js-full-stack-react/state-management/url-as-state.json";
import urlGenerationLesson from "../courses/aspnet-core/03-routing-urls/url-generation.json";
import urlShortenerLesson from "../problems/hld/url-shortener/url-shortener.json";
import useContextReducerLesson from "../courses/yarn-npm-packages/react-hooks-patterns/use-context-reducer.json";
import useDispatchLesson from "../courses/redux/03-react-redux/use-dispatch.json";
import useMemoDebugLesson from "../courses/yarn-npm-packages/react-hooks-patterns/use-memo-debug.json";
import useMutationLesson from "../courses/react-query/03-mutations/use-mutation.json";
import useMutationHookLesson from "../courses/apollo/02-queries-mutations/use-mutation-hook.json";
import useRefCallbackLesson from "../courses/yarn-npm-packages/react-hooks-patterns/use-ref-callback.json";
import useSelectorLesson from "../courses/redux/03-react-redux/use-selector.json";
import useStateEffectLesson from "../courses/yarn-npm-packages/react-hooks-patterns/use-state-effect.json";
import usecontextHookLesson from "../courses/react-fundamentals/06-context-refs/usecontext-hook.json";
import useeffectBasicsLesson from "../courses/react-fundamentals/05-lifecycle-effects/useeffect-basics.json";
import userCentricMetricsLesson from "../courses/frontend-performance-engineering/runtime-performance/user-centric-metrics.json";
import userEventsLesson from "../courses/react-testing/03-react-testing-library/user-events.json";
import userefHookLesson from "../courses/react-fundamentals/06-context-refs/useref-hook.json";
import usersSeeStaleDataAfterASuccessfulUpdateLesson from "../problems/production-incident-lab-problems/frontend-incidents/users-see-stale-data-after-a-successful-update.json";
import useTateHookLesson from "../courses/react-fundamentals/03-state-events/useState-hook.json";
import utilityTypesLesson from "../courses/typescript-for-react/04-advanced-types/utility-types.json";
import uuidLesson from "../courses/yarn-npm-packages/utilities/uuid.json";
import vacuumAnalyzeLesson from "../courses/postgresql/performance-tuning/vacuum-analyze.json";
import validAnagramLesson from "../problems/csharp/02-string-problems/valid-anagram.json";
import validPalindromeLesson from "../problems/csharp/02-string-problems/valid-palindrome.json";
import validateBinarySearchTreeLesson from "../problems/csharp/04-tree-graph-problems/validate-binary-search-tree.json";
import validatingJwtLesson from "../courses/authentication-authorization/02-jwt/validating-jwt.json";
import validationAttributesLesson from "../courses/aspnet-core/04-model-binding-validation/validation-attributes.json";
import validationAttributesLesson1 from "../problems/aspnet-core/01-mvc-fundamentals-problems/validation-attributes.json";
import validationBasicsLesson from "../courses/aspnet-core-web-api/06-error-handling-validation/validation-basics.json";
import valueTypesLesson from "../courses/csharp-fundamentals/02-variables-types/value-types.json";
import valuetaskAndWhenItIsAppropriateLesson from "../courses/csharp-fundamentals/advanced-async-concurrency-threading/valuetask-and-when-it-is-appropriate.json";
import valuetaskWhatProblemDoesItSolveAndWhenCanItMakeCodeWorseLesson from "../interview-qa/c-net-follow-ups/valuetask-what-problem-does-it-solve-and-when-can-it-make-code-worse.json";
import variablesLesson from "../courses/csharp-fundamentals/02-variables-types/variables.json";
import vendingMachineLesson from "../problems/lld/vending-machine/vending-machine.json";
import verificationLesson from "../courses/unit-testing-dotnet/03-mocking-fakes/verification.json";
import versioningAndDocumentationLesson from "../courses/aspnet-core/10-web-api-rest/versioning-and-documentation.json";
import versioningSemverLesson from "../courses/yarn-npm-packages/yarn-npm-fundamentals/versioning-semver.json";
import verticalVsHorizontalScalingLesson from "../problems/system-design-problems/distributed-systems-fundamentals/vertical-vs-horizontal-scaling.json";
import videoStreamingHldLesson from "../problems/hld/video-streaming-hld/video-streaming-hld.json";
import viewComponentsLesson from "../courses/aspnet-core/05-razor-views/view-components.json";
import viewComponentsLesson1 from "../problems/aspnet-core/02-razor-views-problems/view-components.json";
import viewDataTempdataLesson from "../problems/aspnet-core/02-razor-views-problems/view-data-tempdata.json";
import viewManagementLesson from "../courses/postgresql/views/view-management.json";
import viewbagViewdataTempdataLesson from "../interview-qa/01-beginner-questions/viewbag-viewdata-tempdata.json";
import viewsAndTemplatesLesson from "../courses/aspnet-core/02-mvc-fundamentals/views-and-templates.json";
import virtualMachinesOverviewLesson from "../courses/azure/02-compute-and-app-hosting/virtual-machines-overview.json";
import virtualNetworkDesignLesson from "../problems/azure/06-azure-networking-problems/virtual-network-design.json";
import virtualNetworksAndSubnetsLesson from "../courses/azure/08-networking-and-api-platforms/virtual-networks-and-subnets.json";
import virtualizationLesson from "../courses/yarn-npm-packages/react-performance/virtualization.json";
import virtualizationForLargeListsLesson from "../courses/frontend-performance-engineering/browser-react-performance/virtualization-for-large-lists.json";
import virtualizationLargeListsLesson from "../courses/react-advanced-patterns/06-performance-patterns/virtualization-large-lists.json";
import visualRegressionLesson from "../courses/react-testing/06-advanced-testing-patterns/visual-regression.json";
import visualizationJoinsLesson from "../courses/postgresql/joins/visualization-joins.json";
import viteLesson from "../courses/yarn-npm-packages/build-tools/vite.json";
import vitestLesson from "../courses/yarn-npm-packages/testing/vitest.json";
import vitestReactLesson from "../courses/yarn-npm-packages/react-testing/vitest-react.json";
import vmScaleSetsVsAvailabilitySetsLesson from "../problems/azure/02-azure-compute-problems/vm-scale-sets-vs-availability-sets.json";
import volumesAndPersistentDataLesson from "../courses/devops/production-docker-container-security/volumes-and-persistent-data.json";
import vpcConnectivityLesson from "../courses/aws/04-networking/vpc-connectivity.json";
import vpnAndHybridConnectivityForDevelopersLesson from "../courses/azure/08-networking-and-api-platforms/vpn-and-hybrid-connectivity-for-developers.json";
import vueEssentialsLesson from "../courses/yarn-npm-packages/frontend-frameworks/vue-essentials.json";
import vueRouterLesson from "../courses/yarn-npm-packages/routing/vue-router.json";
import wafShieldLesson from "../courses/aws/12-security-services/waf-shield.json";
import webCrawlerLesson from "../problems/hld/web-crawler/web-crawler.json";
import webMobileAmplifyLesson from "../courses/aws/15-developer-tools-application-services/web-mobile-amplify.json";
import webWorkersAndCpuHeavyBrowserWorkLesson from "../courses/frontend-performance-engineering/browser-react-performance/web-workers-and-cpu-heavy-browser-work.json";
import webhooksAndReliableCallbackProcessingLesson from "../courses/aspnet-core-web-api/production-api-design-reliability/webhooks-and-reliable-callback-processing.json";
import webpackLesson from "../courses/yarn-npm-packages/build-tools/webpack.json";
import websocketConnectionLifecycleLesson from "../problems/full-stack-senior-projects/project-2-collaborative-communication-platform/websocket-connection-lifecycle.json";
import websocketSetupLesson from "../courses/apollo/07-subscriptions-realtime/websocket-setup.json";
import websocketsLesson from "../courses/programming-computer-web-foundations/networking-protocols/websockets.json";
import websocketsVsServerSentEventsLesson from "../courses/programming-computer-web-foundations/web-networking-fundamentals/websockets-vs-server-sent-events.json";
import whatCausesHydrationMismatchesLesson from "../interview-qa/react-frontend-follow-ups/what-causes-hydration-mismatches.json";
import whatIsApolloLesson from "../courses/apollo/01-apollo-basics/what-is-apollo.json";
import whatIsAspnetCoreLesson from "../courses/aspnet-core/01-getting-started/what-is-aspnet-core.json";
import whatIsAzureLesson from "../courses/azure/01-azure-developer-foundations/what-is-azure.json";
import whatIsCloudComputingLesson from "../courses/aws/01-aws-fundamentals-cloud-concepts/what-is-cloud-computing.json";
import whatIsCsharpLesson from "../courses/csharp-fundamentals/01-getting-started/what-is-csharp.json";
import whatIsLinqLesson from "../courses/linq/01-getting-started-linq/what-is-linq.json";
import whatIsNpmYarnLesson from "../courses/yarn-npm-packages/yarn-npm-fundamentals/what-is-npm-yarn.json";
import whatIsNugetLesson from "../courses/dotnet-nuget-packages/01-nuget-fundamentals/what-is-nuget.json";
import whatIsOopLesson from "../courses/oops-concepts/01-oop-fundamentals/what-is-oop.json";
import whatIsPostgresqlLesson from "../courses/postgresql/getting-started/what-is-postgresql.json";
import whatIsPrismaLesson from "../courses/prisma/01-prisma-basics/what-is-prisma.json";
import whatIsReactLesson from "../courses/react-fundamentals/01-getting-started/what-is-react.json";
import whatIsReactQueryLesson from "../courses/react-query/01-query-basics/what-is-react-query.json";
import whatIsReduxLesson from "../courses/redux/01-redux-fundamentals/what-is-redux.json";
import whatIsTypescriptLesson from "../courses/typescript-for-react/01-typescript-basics/what-is-typescript.json";
import whatIsWebApiLesson from "../courses/aspnet-core-web-api/01-getting-started/what-is-web-api.json";
import whatWouldYouMonitorToProveYourArchitectureIsHealthyLesson from "../interview-qa/architecture-follow-ups/what-would-you-monitor-to-prove-your-architecture-is-healthy.json";
import whatWouldYouSimplifyIfTheSystemHadOnly1OfTheExpectedTrafficLesson from "../interview-qa/architecture-follow-ups/what-would-you-simplify-if-the-system-had-only-1-of-the-expected-traffic.json";
import whatsappChatLesson from "../problems/lld/whatsapp-chat/whatsapp-chat.json";
import whatsappChatHldLesson from "../problems/hld/whatsapp-chat-hld/whatsapp-chat-hld.json";
import whenNotToMockLesson from "../courses/react-testing/testing-strategy-for-senior-frontend-engineers/when-not-to-mock.json";
import whenNotToUseCachingLesson from "../courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/when-not-to-use-caching.json";
import whenNotToUseKubernetesLesson from "../courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/when-not-to-use-kubernetes.json";
import whenNotToUseMicroservicesLesson from "../courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/when-not-to-use-microservices.json";
import whenShouldAComponentBeAServerComponentVsClientComponentLesson from "../interview-qa/react-frontend-follow-ups/when-should-a-component-be-a-server-component-vs-client-component.json";
import whenShouldASynchronousApiBecomeAsynchronousLesson from "../interview-qa/backend-database-follow-ups/when-should-a-synchronous-api-become-asynchronous.json";
import whenShouldStateLiveInReactQueryRatherThanReduxLesson from "../interview-qa/react-frontend-follow-ups/when-should-state-live-in-react-query-rather-than-redux.json";
import whenToBypassTheOrmLesson from "../courses/ef-core/ef-core-performance-orm-trade-offs/when-to-bypass-the-orm.json";
import whenToUseContextAndWhenNotToLesson from "../courses/react-advanced-patterns/modern-state-application-architecture/when-to-use-context-and-when-not-to.json";
import whenToUseReduxLesson from "../courses/next-js-full-stack-react/state-management/when-to-use-redux.json";
import whenWouldYouChooseEfCoreDapperOrRawSqlLesson from "../interview-qa/backend-database-follow-ups/when-would-you-choose-ef-core-dapper-or-raw-sql.json";
import whereClauseLesson from "../courses/postgresql/querying-data/where-clause.json";
import whereWouldYouUseCachingAndHowWouldYouInvalidateItLesson from "../interview-qa/architecture-follow-ups/where-would-you-use-caching-and-how-would-you-invalidate-it.json";
import whyDidYouChooseMicroservicesInsteadOfAModularMonolithLesson from "../interview-qa/architecture-follow-ups/why-did-you-choose-microservices-instead-of-a-modular-monolith.json";
import whyExactlyOnceIsDifficultLesson from "../problems/system-design-problems/distributed-systems-fundamentals/why-exactly-once-is-difficult.json";
import whyIsThisReactComponentReRenderingAndHowWouldYouProveTheCauseLesson from "../interview-qa/react-frontend-follow-ups/why-is-this-react-component-re-rendering-and-how-would-you-prove-the-cause.json";
import whyLinqLesson from "../courses/linq/01-getting-started-linq/why-linq.json";
import whyTestReactLesson from "../courses/react-testing/01-testing-fundamentals/why-test-react.json";
import whyUnitTestingLesson from "../courses/unit-testing-dotnet/01-testing-fundamentals/why-unit-testing.json";
import windowFunctionsLesson from "../courses/postgresql/grouping-aggregation-subqueries/window-functions.json";
import windowingLargeListsLesson from "../courses/react-query/08-performance-optimization/windowing-large-lists.json";
import wordBreakLesson from "../problems/csharp/05-dynamic-programming-problems/word-break.json";
import wordLadderLesson from "../problems/csharp/04-tree-graph-problems/word-ladder.json";
import wordPatternLesson from "../problems/csharp/02-string-problems/word-pattern.json";
import workflowOrchestrationVsChoreographyLesson from "../problems/system-design-problems/distributed-systems-fundamentals/workflow-orchestration-vs-choreography.json";
import workingWithDbcontextInEfCoreLesson from "../courses/ef-core/01-getting-started-ef-core/working-with-dbcontext-in-ef-core.json";
import workingWithDisconnectedEntityGraphLesson from "../courses/ef-core/05-data-operations-disconnected/working-with-disconnected-entity-graph.json";
import workingWithProductAndQaLesson from "../courses/senior-software-engineering/technical-leadership/working-with-product-and-qa.json";
import workingWithStoredProceduresLesson from "../courses/ef-core/10-advanced-features/working-with-stored-procedures.json";
import workspacesMonoreposLesson from "../courses/yarn-npm-packages/yarn-npm-fundamentals/workspaces-monorepos.json";
import writeARootCauseAnalysisAndRemediationPlanLesson from "../problems/full-stack-senior-projects/project-3-production-incident-simulator/write-a-root-cause-analysis-and-remediation-plan.json";
import writingE2eTestsLesson from "../courses/react-testing/05-e2e-testing/writing-e2e-tests.json";
import writingRfcsLesson from "../courses/senior-software-engineering/technical-decision-making/writing-rfcs.json";
import writingTechnicalProposalsLesson from "../courses/senior-software-engineering/technical-leadership/writing-technical-proposals.json";
import xssAndOutputEncodingLesson from "../courses/fullstack-security/modern-web-security-identity/xss-and-output-encoding.json";
import xssPreventionTechniquesLesson from "../courses/fullstack-security/03-xss-csrf-protection/xss-prevention-techniques.json";
import xstateLesson from "../courses/yarn-npm-packages/state-management/xstate.json";
import xstateFundamentalsLesson from "../courses/react-advanced-patterns/08-state-machines-xstate/xstate-fundamentals.json";
import xunitLesson from "../courses/dotnet-nuget-packages/07-testing-quality/xunit.json";
import yamldotnetLesson from "../courses/dotnet-nuget-packages/05-serialization-mapping/yamldotnet.json";
import youtubeStreamingLesson from "../problems/hld/youtube-streaming/youtube-streaming.json";
import youtubeVideoLesson from "../problems/lld/youtube-video/youtube-video.json";
import yupLesson from "../courses/yarn-npm-packages/forms/yup.json";
import zodLesson from "../courses/yarn-npm-packages/utilities/zod.json";
import zodValidationLesson from "../courses/yarn-npm-packages/forms/zod-validation.json";
import zoomConferencingLesson from "../problems/lld/zoom-conferencing/zoom-conferencing.json";
import zoomConferencingHldLesson from "../problems/hld/zoom-conferencing-hld/zoom-conferencing-hld.json";
import zustandLesson from "../courses/yarn-npm-packages/state-management/zustand.json";

const rawLessonsPart1 = [
	lesson01KnapsackLesson,
	lesson01AmazonCognitoUserPoolsLesson,
	lesson01ArchitecturePatternsLesson,
	lesson01CheckConstraintLesson,
	lesson01CiCdConceptsLesson,
	lesson01CloudformationAdvancedLesson,
	lesson01ConfigmapsSecretsIngressLesson,
	lesson01CreateDatabaseLesson,
	lesson01CursorLesson,
	lesson01DataTypesOverviewLesson,
	lesson01DockerComposeMultiContainerLesson,
	lesson01GithubActionsWorkflowsLesson,
	lesson01GroupByLesson,
	lesson01HighAvailabilityPatternsLesson,
	lesson01IndexesOverviewLesson,
	lesson01InsertAddRowLesson,
	lesson01MigrationServicesLesson,
	lesson01SelectAllEmployeesLesson,
	lesson01SelectStatementLesson,
	lesson01StoredProcedureGetEmployeesByDeptLesson,
	lesson01StoredProceduresBasicsLesson,
	lesson01SubqueryInWhereClauseLesson,
	lesson01TransactionLesson,
	lesson01TriggersTutorialLesson,
	lesson01UnionUltimateGuideLesson,
	lesson01ViewsIntroductionLesson,
	lesson01VisualizationExplanationOfJoinsLesson,
	lesson01WhatIsDockerLesson,
	lesson01WhatIsKubernetesLesson,
	lesson01WhatIsSqlServerLesson,
	lesson026RsMigrationStrategyLesson,
	lesson02AfterUpdateTriggerLogSalaryChangeLesson,
	lesson02AwsCdkAdvancedLesson,
	lesson02BasicsLesson,
	lesson02BeginEndStatementLesson,
	lesson02CharDataTypeLesson,
	lesson02ClusteredIndexesLesson,
	lesson02CognitoIdentityPoolsLesson,
	lesson02CreateTriggerLesson,
	lesson02CreateViewLesson,
	lesson02CteDepartmentSalaryStatsLesson,
	lesson02DesignPrinciplesLesson,
	lesson02DisasterRecoveryStrategiesLesson,
	lesson02DockerImagesContainersLesson,
	lesson02DockerVolumesNetworksLesson,
	lesson02DropDatabaseLesson,
	lesson02ExceptLesson,
	lesson02FilterEmployeesByDepartmentLesson,
	lesson02ForeignKeyConstraintLesson,
	lesson02GitlabCiPipelinesLesson,
	lesson02HavingClauseLesson,
	lesson02HelmChartsLesson,
	lesson02InnerJoinLesson,
	lesson02InsertIntoSelectLesson,
	lesson02JenkinsBasicsLesson,
	lesson02PodsDeploymentsServicesLesson,
	lesson02SelectDistinctLesson,
	lesson02StoredProceduresTutorialLesson,
	lesson02TemporaryTablesLesson,
	lesson03AliasesLesson,
	lesson03ApplicationAuthenticationLesson,
	lesson03CreateIndexLesson,
	lesson03CreateNonclusteredIndexLesson,
	lesson03CreateTableLesson,
	lesson03CubeLesson,
	lesson03DdlTriggersLesson,
	lesson03DockerSecurityLesson,
	lesson03DockerfileBasicsLesson,
	lesson03DropViewLesson,
	lesson03HybridCloudOptionsLesson,
	lesson03IfElseStatementLesson,
	lesson03InsertMultipleRowsLesson,
	lesson03IntersectLesson,
	lesson03JenkinsPipelinesLesson,
	lesson03K8sMonitoringObservabilityLesson,
	lesson03KubectlCommandsLesson,
	lesson03LeftJoinLesson,
	lesson03MultiRegionArchitectureLesson,
	lesson03NotNullConstraintLesson,
	lesson03SelectTopLesson,
	lesson03SortProductsByPriceLesson,
	lesson03StoredProcedureParametersLesson,
	lesson03TableVariablesLesson,
	lesson03TerraformAwsLesson,
	lesson03VarcharDataTypeLesson,
	lesson03WellArchitectedDeepDiveLesson,
	lesson03WindowFunctionRankLesson,
	lesson04AlterTableAddColumnLesson,
	lesson04ApplicationAuthenticationArchitectureLesson,
	lesson04AwsSolutionsArchitectPatternsLesson,
	lesson04CaseExpressionLesson,
	lesson04CountEmployeesPerDepartmentLesson,
	lesson04DatasyncSnowFamilyLesson,
	lesson04FilteredIndexesLesson,
	lesson04GetInformationAboutAViewLesson,
	lesson04IacBestPracticesLesson,
	lesson04InsteadOfTriggerLesson,
	lesson04IntDataTypesLesson,
	lesson04LeadLagSalaryComparisonLesson,
	lesson04OutputParametersLesson,
	lesson04RightJoinLesson,
	lesson04RollupLesson,
	lesson04RtoRpoPlanningLesson,
	lesson04TransactionWithRollbackLesson,
	lesson04TryCatchLesson,
	lesson04UniqueConstraintLesson,
	lesson04UpdateStatementLesson,
	lesson04WhereClauseLesson,
	lesson05AlterTableAlterColumnLesson,
	lesson05AndOperatorLesson,
	lesson05CoalesceExpressionLesson,
	lesson05CorrelatedSubqueryDepartmentAverageLesson,
	lesson05DisableTriggerLesson,
	lesson05FilterGroupsWithHavingLesson,
	lesson05FullOuterJoinLesson,
	lesson05GroupingSetsLesson,
	lesson05IndexesWithIncludedColumnsLesson,
	lesson05IsolationLevelSerializableLesson,
	lesson05NcharDataTypeLesson,
	lesson05RenameAViewLesson,
	lesson05ThrowStatementLesson,
	lesson05UpdateWithJoinLesson,
	lesson05VariablesInStoredProceduresLesson,
	lesson06AlterTableDropColumnLesson,
	lesson06CrossJoinLesson,
	lesson06CteRunningTotalSalesLesson,
	lesson06DeleteStatementLesson,
	lesson06EnableTriggerLesson,
	lesson06IndexOnComputedColumnLesson,
	lesson06InnerJoinOrdersCustomersLesson,
	lesson06ListAllViewsLesson,
	lesson06NullifLesson,
	lesson06NvarcharDataTypeLesson,
	lesson06OrOperatorLesson,
	lesson06PivotOperatorLesson,
	lesson06RaiserrorStatementLesson,
	lesson06ScalarFunctionsLesson,
	lesson06TryCatchErrorHandlingLesson,
	lesson07BetweenOperatorLesson,
	lesson07CommonTableExpressionsLesson,
	lesson07Datetime2DataTypeLesson,
	lesson07DropTableLesson,
	lesson07DropTriggerLesson,
	lesson07DynamicSqlLesson,
	lesson07DynamicSqlSearchLesson,
	lesson07FullBackupLesson,
	lesson07IndexedViewsLesson,
	lesson07LeftJoinCustomersOrdersLesson,
	lesson07SelfJoinLesson,
	lesson07SelfJoinEmployeeManagerLesson,
	lesson07TableValuedFunctionsLesson,
	lesson07TruncateTableLesson,
	lesson07UniqueIndexLesson,
	lesson08ClusteredColumnstoreIndexLesson,
	lesson08CrossApplyLesson,
	lesson08DateDataTypeLesson,
	lesson08DeadlockLesson,
	lesson08DifferentialBackupLesson,
	lesson08DisableIndexesLesson,
	lesson08InOperatorLesson,
	lesson08IntersectCommonProductsOrdersLesson,
	lesson08ListAllTriggersLesson,
	lesson08MergeStatementLesson,
	lesson08RecursiveCteLesson,
	lesson08RenameTableLesson,
	lesson08RightJoinSuppliersProductsLesson,
	lesson08UserDefinedFunctionsTutorialLesson,
	lesson09AlterSchemaLesson,
	lesson09CorrelatedSubqueryLesson,
	lesson09DropFunctionLesson,
	lesson09EnableIndexesLesson,
	lesson09ExceptProductsNeverOrderedLesson,
	lesson09FullOuterJoinEmployeesDepartmentsLesson,
	lesson09LikeOperatorLesson,
	lesson09SelectIntoLesson,
	lesson09SnapshotIsolationLesson,
	lesson09TimeDataTypeLesson,
	lesson09TransactionLogBackupLesson,
	lesson09ViewTriggerDefinitionLesson,
	lesson09WhileLoopLesson,
	lesson10BreakStatementLesson,
	lesson10CreateSchemaLesson,
	lesson10DecimalDataTypeLesson,
	lesson10InsteadOfTriggerInsertViewLesson,
	lesson10NullThreeValuedLogicLesson,
	lesson10RecoveryModelLesson,
	lesson10RecursiveCteEmployeeHierarchyLesson,
	lesson10RenameIndexLesson,
	lesson10SelectDistinctCitiesLesson,
	lesson10SubqueryLesson,
	lesson11AnyOperatorLesson,
	lesson11BetweenSalaryRangeLesson,
	lesson11BitDataTypeLesson,
	lesson11ContinueStatementLesson,
	lesson11DatabaseSnapshotLesson,
	lesson11DropIndexLesson,
	lesson11DropSchemaLesson,
	lesson11MultipleJoinsOrderDetailsLesson,
	lesson11OrderByClauseLesson,
	lesson12AllOperatorSalaryCheckLesson,
	lesson12DatetimeoffsetDataTypeLesson,
	lesson12ExistsOperatorLesson,
	lesson12InOperatorDepartmentsLesson,
	lesson12OffsetAndFetchLesson,
	lesson12SystemDatabasesLesson,
	lesson13AllOperatorLesson,
	lesson13DenseRankVsRankLesson,
	lesson13LikePatternMatchingLesson,
	lesson13PartitionExistingTableLesson,
	lesson14AggregateFunctionsBasicsLesson,
	lesson14StringFunctionsUppercaseEmailLesson,
	lesson14TablePartitioningLesson,
	lesson15CaseExpressionSalaryBandLesson,
	lesson15NullHandlingIsnullLesson,
	lesson15SequenceLesson,
	lesson16CrossApplyProductCategoriesLesson,
	lesson16IdentityColumnLesson,
	lesson16StringConcatenationLesson,
	lesson17DateFunctionsCurrentDateLesson,
	lesson17SynonymLesson,
	lesson17UnionAllCombinedCustomerOrdersLesson,
	lesson18RowNumberDuplicateRemovalLesson,
	lesson18SynonymUltimateGuideLesson,
	lesson18UnionOrderCustomersSuppliersLesson,
	lesson19ExistsDepartmentEmployeesLesson,
	lesson19GrantLesson,
	lesson19PivotSalesByQuarterLesson,
	lesson20CoalesceDisplayPreferredNameLesson,
	lesson20ComputedColumnsLesson,
	lesson20TopNPerGroupLesson,
	lesson3sumLesson,
	aCacheOutageCausesTheDatabaseToBecomeOverloadedLesson,
	aDeploymentSucceedsButOldClientsStartReceiving500ResponsesLesson,
	aLargeTableFreezesTheBrowserLesson,
	aMemoryLeakAppearsAfterOpeningAndClosingAModalRepeatedlyLesson,
	aProductionQuerySuddenlyBecameSlowAfterADeploymentWhatDoYouCheckLesson,
	aRetryPolicyCreatesARetryStormDuringADownstreamOutageLesson,
	aServiceCanResolveDnsButCannotConnectToItsDependencyLesson,
	abstractClassesLesson,
	abstractVsInterfaceLesson,
	abstractionBasicsLesson,
	accessModifiersLesson,
	acrAuthenticationAndManagedIdentityLesson,
	acrImagesTagsAndRepositoriesLesson,
	actionFiltersLesson,
	adapterPatternLesson,
	adapterPatternLesson1,
	addStringsLesson,
	advancedDiPatternsLesson,
	advancedFeaturesLesson,
	advancedGenericsForReusableApisLesson,
	advancedQ1Lesson,
	advancedQ2Lesson,
	advancedQ3Lesson,
	advancedQ4Lesson,
	advancedQ5Lesson,
	aggregateFunctionsLesson,
	aggregatesLesson,
	aggregationAggregateLesson,
	aggregationAverageLesson,
	aggregationCountLesson,
	aggregationMaxLesson,
	aggregationSumLesson,
	aiSearchIndexesAndVectorSearchLesson,
	airbnbBookingLesson,
	airbnbBookingHldLesson,
	aksConfigurationAndSecretsLesson,
	aksDeploymentsServicesAndIngressLesson,
	aksOverviewForDevelopersLesson,
	aksScalingAndOperationsLesson,
	aksVsContainerAppsVsAppServiceLesson,
	alienDictionaryLesson,
	allNodesDistanceKInBinaryTreeLesson,
	allocationPressureAndLatencyLesson,
	alterTableLesson,
	alwaysEncryptedLesson,
	alwaysOnAvailabilityGroupsLesson,
	amazonAuroraLesson,
	amazonBedrockLesson,
	amazonCloudwatchLesson,
	amazonEcommerceLesson,
	amazonEcommerceHldLesson,
	amazonEcsLesson,
	amazonEksLesson,
	amazonMqLesson,
	amazonRdsLesson,
	amazonRedshiftLesson,
	amazonS3Lesson,
	amazonS3BasicsLesson,
	amazonSagemakerLesson,
	amazonSnsEventbridgeLesson,
	amazonSqsLesson,
	amazonVpcLesson,
	anatomyOfLambdaExpressionLesson,
	andOrOperatorsLesson,
	angularEssentialsLesson,
	angularRouterLesson,
	animeJsLesson,
	apiContractTestingLesson,
	apiControllersLesson,
	apiDesignLesson,
	apiDesignPrinciplesLesson,
	apiErrorHandlingLesson,
	apiGatewayLesson,
	apiIntegrationLesson,
	apiLatencyIncreasedFrom100msTo4SecondsHowDoYouInvestigateLesson,
	apiManagementApisProductsAndSubscriptionsLesson,
	apiManagementAuthenticationAndSecurityLesson,
	apiManagementOverviewLesson,
	apiManagementPoliciesLesson,
	apiManagementVersioningAndRevisionsLesson,
	apiReturnsIntermittent503ResponsesWhileCpuRemainsLowLesson,
	apiRoutesLesson,
	apiSecurityFundamentalsLesson,
	apiTestingLesson,
	apiVersioningLesson,
	apiVersioningLesson1,
	apiVersioningAndCompatibilityLesson,
	apolloClientLesson,
	appConfigurationFeatureFlagsAndLabelsLesson,
	appRegistrationsAndServicePrincipalsLesson,
	appRunnerLesson,
	appServiceAppConfigurationLesson,
	appServiceDeploymentLesson,
	appServiceDeploymentSlotsLesson,
	appServiceOverviewLesson,
	appServiceScalingAndAutoscaleLesson,
	appServiceVsFunctionsVsContainerAppsLesson,
	applicationAuthenticationAndOauthLesson,
	applicationDeploymentStrategiesLesson,
	applicationGatewayOverviewLesson,
	applicationGatewayWafAndRoutingLesson,
	applicationHealthDiagnosticsLesson,
	applicationInsightsLesson,
	applicationInsightsDistributedTracingLesson,
	applicationInsightsInstrumentationLesson,
	applicationInsightsOverviewLesson,
	applicationInsightsRequestsDependenciesAndFailuresLesson,
	applicationInsightsVsAzureMonitorVsLogAnalyticsLesson,
	applicationMetricsVsLogsVsTracesLesson,
	applicationSecretsAndConfigurationPatternsLesson,
	architectureDecisionRecordsLesson,
	architectureOverviewLesson,
	architectureReviewsLesson,
	areaRoutingLesson,
	arrangeActAssertLesson,
	arraypooltAndMemorypooltLesson,
	arraysAndLinkedListsLesson,
	artifactVersioningLesson,
	aspnetApiGatewayGrpcLesson,
	aspnetB01Lesson,
	aspnetB02Lesson,
	aspnetBackgroundJobsProcessingLesson,
	aspnetCoreApiLatencyIncreased40xAfterADeploymentLesson,
	aspnetDatabaseScalingLesson,
	aspnetDistributedCachingLesson,
	aspnetFiltersLesson,
	aspnetI01Lesson,
	aspnetI02Lesson,
	aspnetMessagingEventDrivenLesson,
	aspnetMicroservicesCommunicationLesson,
	aspnetResilienceCircuitBreakerLesson,
	assemblyLoadingAndMetadataLesson,
	assertionFrameworksLesson,
	assertionsLesson,
	assetOptimizationLesson,
	asyncAwaitLesson,
	asyncAwaitPatternsLesson,
	asyncIoVsCpuBoundWorkLesson,
	asyncTestingLesson,
	asyncawaitExplainItThenExplainHowItCanCauseThreadStarvationLesson,
	atMostOnceVsAtLeastOnceDeliveryLesson,
	athenaEmrLesson,
	atmMachineLesson,
	attributeRoutingLesson,
	attributeRoutingLesson1,
	attributeRoutingLesson2,
	auditingLesson,
	authBasicsLesson,
	authBasicsLesson1,
	authFlowsTokenRefreshLesson,
	authOverviewLesson,
	authOverviewLesson1,
	auth0IntegrationLesson,
	authenticationAndAuthorizationBoundariesLesson,
	authenticationFlowLesson,
	authenticationInApisLesson,
	authenticationModesLesson,
	authenticationVsAuthorizationLesson,
	authenticationWorksLocallyButFailsBehindAReverseProxyLesson,
	authorizationLesson,
	authorizationCodeFlowLesson,
	authorizationCodeFlowWithPkceLesson,
	authorizationPoliciesLesson,
	autoPropertiesLesson,
	autofixtureLesson,
	automapperLesson,
	avoidingUnsafeTypeAssertionsLesson,
	awsAiServicesLesson,
	awsCdkLesson,
	awsCloudtrailLesson,
	awsCodeToolsLesson,
	awsGlobalInfrastructureLesson,
	awsGlueEtlLesson,
	awsKmsSecretsManagerLesson,
	awsLambdaLesson,
	awsManagementToolsLesson,
	awsOrganizationsLesson,
	awsSdkAppconfigLesson,
	awsSdkCoreLesson,
	awsWellArchitectedFrameworkLesson,
	awsXRayLesson,
	axiosLesson,
	axiosReactLesson,
	azureAdIntegrationLesson,
	azureAiFoundryAndModelBasedDevelopmentLesson,
	azureAiSearchOverviewLesson,
	azureAiServicesOverviewLesson,
	azureAiServicesVisionLanguageAndSpeechLesson,
	azureAppConfigurationOverviewLesson,
	azureApplicationWorksInOneRegionButNotAnotherLesson,
	azureArchitectureCostTradeOffsLesson,
	azureCacheForRedisOverviewLesson,
	azureCliDeveloperToolingLesson,
	azureCloudShellLesson,
	azureContainerRegistryOverviewLesson,
	azureDeveloperWorkflowsLesson,
	azureDevopsOverviewLesson,
	azureEventGridOverviewLesson,
	azureEventHubsLesson,
	azureEventHubsOverviewLesson,
	azureFilesLesson,
	azureFilesVsBlobStorageLesson,
	azureFrontDoorOverviewLesson,
	azureFunctionsOverviewLesson,
	azureFunctionsVsAppServiceLesson,
	azureIdentityLesson,
	azureKeyVaultOverviewLesson,
	azureKeyvaultLesson,
	azureMlVsAiServicesLesson,
	azureMonitorLogsAndKqlLesson,
	azureMonitorOverviewLesson,
	azureMonitoringStrategyLogsMetricsAndTracesLesson,
	azureOpenaiChatAndCompletionsLesson,
	azureOpenaiEmbeddingsAndGroundingLesson,
	azureOpenaiServiceOverviewLesson,
	azureOpenaiVsCognitiveServicesLesson,
	azurePipelinesCiCdLesson,
	azurePortalAndCloudShellLesson,
	azurePricingAndCostManagementLesson,
	azureRbacScopesAndRolesLesson,
	azureRegionsAvailabilityZonesLesson,
	azureReposAndAzurePipelinesLesson,
	azureResourceHierarchyLesson,
	azureResourceManagerLesson,
	azureServiceBusOverviewLesson,
	azureServicebusLesson,
	azureSqlAuthenticationAndAuthorizationLesson,
	azureSqlBackupHighAvailabilityAndResilienceLesson,
	azureSqlDatabaseLesson,
	azureSqlDatabaseConnectivityLesson,
	azureSqlDatabaseOverviewLesson,
	azureSqlManagedInstanceLesson,
	azureSqlQueryPerformanceAndScalingLesson,
	azureSqlVsCosmosDbLesson,
	azureSqlVsCosmosDbLesson1,
	azureStorageBlobsLesson,
	azureStorageOverviewLesson,
	azureWorkloadScalingStrategiesLesson,
	bTreeIndexesAndPageStructureLesson,
	babelLesson,
	backgroundJobsProcessTheSameMessageTwiceLesson,
	backgroundRefetchingLesson,
	backgroundServiceLesson,
	backgroundSyncLesson,
	backgroundserviceAndHostedWorkloadsLesson,
	backpressureLesson,
	backupAndRecoveryLesson,
	backupArchivingLesson,
	backupRestoreStrategiesLesson,
	backwardCompatibleDeploymentsLesson,
	bankingAppLesson,
	barrierPatternLesson,
	baselineHealthyApplicationAndTelemetryLesson,
	basicTypesLesson,
	bcryptLesson,
	bcryptNetLesson,
	beforeAfterTriggersLesson,
	beginnerQ1Lesson,
	beginnerQ10Lesson,
	beginnerQ11Lesson,
	beginnerQ12Lesson,
	beginnerQ13Lesson,
	beginnerQ14Lesson,
	beginnerQ15Lesson,
	beginnerQ16Lesson,
	beginnerQ17Lesson,
	beginnerQ18Lesson,
	beginnerQ19Lesson,
	beginnerQ2Lesson,
];

const rawLessonsPart2 = [
	beginnerQ20Lesson,
	beginnerQ21Lesson,
	beginnerQ3Lesson,
	beginnerQ4Lesson,
	beginnerQ5Lesson,
	beginnerQ6Lesson,
	beginnerQ7Lesson,
	beginnerQ8Lesson,
	beginnerQ9Lesson,
	behB01Lesson,
	benchmarkDotnetLesson,
	bestPracticesLesson,
	bestTimeToBuyAndSellStockLesson,
	bestTimeToBuyAndSellStockLesson1,
	bestTimeToBuyAndSellStockIiLesson,
	bestWaysBulkInsertsEntityFrameworkLesson,
	betweenInLikeLesson,
	bicepDependenciesAndResourceReferencesLesson,
	bicepDeploymentAndValidationLesson,
	bicepModulesAndReusableInfrastructureLesson,
	bicepOverviewLesson,
	bicepParametersVariablesAndOutputsLesson,
	bicepResourcesAndPropertiesLesson,
	bicepWithAppServiceFunctionsAndStorageLesson,
	bicepWithDatabasesAndMessagingLesson,
	bicepWithManagedIdentitiesAndRbacLesson,
	bicepWithNetworkingAndPrivateEndpointsLesson,
	binarySearchLesson,
	binaryTreeLevelOrderTraversalLesson,
	binaryTreeMaximumPathSumLesson,
	binaryTreeRightSideViewLesson,
	binaryTreeZigzagLevelOrderTraversalLesson,
	bindingSourcesLesson,
	blamelessPostmortemsLesson,
	blobContainersObjectsAndMetadataLesson,
	blobSasAndUserDelegationSasLesson,
	blobStorageAccessTiersLesson,
	blobStorageAccessTiersAndLifecycleLesson,
	blobStorageBasicsLesson,
	blobStorageFromApplicationsLesson,
	blockFileStorageLesson,
	blueGreenCanaryAndRollingDeploymentsLesson,
	blueGreenDeploymentsLesson,
	bogusLesson,
	boxingAndHiddenAllocationsLesson,
	boxingUnboxingLesson,
	branchingStrategiesAndTrunkBasedDevelopmentLesson,
	breakingDownLargeTechnicalInitiativesLesson,
	brokenAccessControlAndIdorbolaLesson,
	btreeIndexesLesson,
	buildCachingLesson,
	buildPipelineLesson,
	buildTestPackageDeployPipelineDesignLesson,
	buildVsBuyDecisionsLesson,
	builderPatternLesson,
	builderPatternLesson1,
	buildingARepeatableProductionInvestigationWorkflowLesson,
	buildingAiPoweredAppsOnAzureLesson,
	buildingHookLibrariesLesson,
	builtInMiddlewareLesson,
	builtInMiddlewareLesson1,
	bulkOperationsAndLargeDataChangesLesson,
	bulkheadsAndLoadSheddingLesson,
	bundleAnalysisLesson,
	bundleAnalysisAndCodeSplittingLesson,
	bundlerFundamentalsLesson,
	burstBalloonsLesson,
	cacheBasicsLesson,
	cacheConfigurationLesson,
	cacheConfigurationLesson1,
	cacheInvalidationLesson,
	cachePersistenceLesson,
	cacheRedirectsLesson,
	cacheUpdatesLesson,
	cachingLesson,
	cachingAndRevalidationLesson,
	cachingStrategiesLesson,
	canaryReleasesLesson,
	cancellationtokenDesignLesson,
	capTheoremLesson,
	capacityPlanningLesson,
	capacityPlanningLesson1,
	capacityPlanningLesson2,
	cartesianExplosionAndSplitQueriesLesson,
	cdnArchitectureLesson,
	cdnReverseProxyAndLoadBalancerLesson,
	chainOfResponsibilityLesson,
	changeTrackingLesson,
	channelsAndProducerConsumerPipelinesLesson,
	chatSystemHldLesson,
	cheatsheetLesson,
	cheatsheetLesson1,
	cheatsheetLesson2,
	cheatsheetLesson3,
	cheatsheetLesson4,
	cheatsheetLesson5,
	cheatsheetLesson6,
	cheatsheetLesson7,
	cheatsheetLesson8,
	cheatsheetLesson9,
	cheatsheetLesson10,
	cheatsheetLesson11,
	cheatsheetLesson12,
	cheatsheetLesson13,
	cheatsheetLesson14,
	checkIfArrayIsSortedLesson,
	cherryPickRevertAndResetLesson,
	chooseAnApiEvolutionStrategyForThreeClientVersionsLesson,
	chooseBetweenModularMonolithAndMicroservicesForANewProductLesson,
	chooseKubernetesVsManagedApplicationHostingLesson,
	chooseOrchestrationVsChoreographyForADistributedWorkflowLesson,
	chooseRedisCachingVsDatabaseOptimizationLesson,
	chooseRestVsGraphqlForAMultiClientApplicationLesson,
	chooseRestVsGrpcForInternalServiceCommunicationLesson,
	chooseSqlVsNosqlForAHighWriteWorkloadLesson,
	chooseSynchronousProcessingVsAMessageQueueLesson,
	choosingAnAzureHostingModelLesson,
	choosingAzureRegionAndAvailabilityZoneLesson,
	choosingBetweenVmAndAppServiceLesson,
	choosingStateOwnershipBoundariesLesson,
	choosingTheRightStructureLesson,
	ciCdForAppServiceLesson,
	ciCdForContainersAndAcrLesson,
	ciCdForFunctionsLesson,
	cicdQ1Lesson,
	cicdQ2Lesson,
	cicdQ3Lesson,
	cicdQ4Lesson,
	claimsBasedAuthorizationLesson,
	clarifyingAmbiguousRequirementsLesson,
	classesObjectsLesson,
	classesObjectsLesson1,
	cleanArchitectureLesson,
	cleanArchitectureLesson1,
	cleanupFunctionsLesson,
	clientCredentialsFlowLesson,
	clientCredentialsForServiceToServiceCallsLesson,
	clientEvaluationAndTranslationFailuresLesson,
	clientSideDataFetchingLesson,
	clientSideResolversLesson,
	clientSideValidationLesson,
	climbingStairsLesson,
	cloneGraphLesson,
	cloudDeploymentLesson,
	cloudformationIacLesson,
	cloudfrontCdnLesson,
	clrArchitectureAndExecutionModelLesson,
	clrCtsClsLesson,
	clusteredVsNonclusteredIndexesLesson,
	codeFirstDbFirstLesson,
	codeOrganizationLesson,
	codeSplittingLesson,
	codeSplittingLesson1,
	codeSplittingLesson2,
	codeSplittingLazyLesson,
	coinChangeLesson,
	collectionsLesson,
	combinationSumIvLesson,
	commandPatternLesson,
	commandPatternLesson1,
	commitHygieneAndReleaseBranchesLesson,
	commonDataStructuresAndWhenToUseThemLesson,
	commonPitfallsLesson,
	communicatingTechnicalRiskLesson,
	compensatingActionsLesson,
	compileTimePolymorphismLesson,
	compiledQueriesLesson,
	compilerOptimizationsLesson,
	compilerVsInterpreterVsRuntimeLesson,
	complexFiltersLesson,
	complexityAnalysisLesson,
	complianceAndAuditingLesson,
	componentTestingVsIntegrationTestingLesson,
	composingComponentsLesson,
	compositePatternLesson,
	compositeTypesLesson,
	compoundBasicsLesson,
	compoundComponentsLesson,
	compoundExamplesLesson,
	compoundWithContextLesson,
	computeOptionsForDevelopersLesson,
	concatConcatenationOperatorLesson,
	concurrencyHowWouldYouDiagnoseARaceConditionThatOccursOnceADayLesson,
	concurrencyVsParallelismLesson,
	concurrentCollectionsLesson,
	concurrentRenderingLesson,
	conditionalAndMappedTypesLesson,
	conditionalRenderingLesson,
	conditionalsLesson,
	configmapsAndSecretsLesson,
	configurationOptionsLesson,
	configurationTuningLesson,
	configurationsInEntityFrameworkCoreLesson,
	configureManyToManyRelationshipsLesson,
	configureOneToManyRelationshipsFluentApiLesson,
	configureOneToOneRelationshipsFluentApiLesson,
	configureStoreLesson,
	configuringServicesLesson,
	connectionManagementServerlessLesson,
	connectionPoolExhaustionLesson,
	connectionPoolExhaustionCausesCascadingApiFailuresLesson,
	connectionPoolingLesson,
	connectionPoolingAndExhaustionLesson,
	connectionPoolingPgbouncerLesson,
	constructBinaryTreeFromPreorderAndInorderLesson,
	constructorInjectionLesson,
	constructorsLesson,
	containerAppsOverviewLesson,
	containerAppsRevisionsAndIngressLesson,
	containerAppsScalingAndDaprLesson,
	containerAppsVsAksLesson,
	containerHealthChecksLesson,
	containerImageDeploymentWorksLocallyButFailsInProductionLesson,
	containerNetworkingLesson,
	containerSecretsLesson,
	containerWithMostWaterLesson,
	containersAndContainerImagesLesson,
	containsDuplicateLesson,
	containsQuantifierOperatorLesson,
	contentNegotiationLesson,
	contextApiDeepDiveLesson,
	continuousMonitoringLesson,
	controlPropsBasicsLesson,
	controlPropsExamplesLesson,
	controlPropsWithFormsLesson,
	controlledComponentsLesson,
	controlledComponentsLesson1,
	controlledComponentsLesson2,
	controllerActionsAndResultsLesson,
	controllersAndActionsLesson,
	conventionsRelationshipsLesson,
	conversionOperatorsLesson,
	cookieAuthLesson,
	cookieAuthenticationLesson,
	cookiesSessionsAndBrowserStorageLesson,
	copyBulkLoadLesson,
	coreWebVitalsDegradeAfterAddingANewDashboardLesson,
	coreWebVitalsLcpInpAndClsLesson,
	correlatedSubqueriesLesson,
	corsAndPreflightRequestsLesson,
	corsBestPracticesLesson,
	corsConfigurationLesson,
	corsInAspnetCoreLesson,
	corsWithReactLesson,
	cosmosDbConsistencyAndDistributionLesson,
	cosmosDbDataModelingLesson,
	cosmosDbOverviewLesson,
	cosmosDbPartitionKeysLesson,
	cosmosDbRequestUnitsAndPerformanceLesson,
	cosmosDbSdkAndDeveloperPatternsLesson,
	costAsAnArchitectureConstraintLesson,
	costOptimizationLesson,
	countAndSayLesson,
	countCompleteTreeNodesLesson,
	countDigitsInNumberLesson,
	countTotalSetBitsLesson,
	countingBitsLesson,
	courseScheduleLesson,
	coverageMetricsLesson,
	coverageReportingLesson,
	coveringIndexesLesson,
	coverletCollectorLesson,
	cpuMemoryAndDiskInvestigationLesson,
	cpuMemoryStorageAndIoLesson,
	cpuProfilingLesson,
	cqrsLesson,
	cqrsBasicsLesson,
	cqrsPatternLesson,
	createAsyncThunkLesson,
	createDatabaseLesson,
	createSchemaLesson,
	createSliceLesson,
	createTableLesson,
	createUpdateDeleteOpsLesson,
	creatingFirstGraphqlServerLesson,
	creatingFirstProjectLesson,
	creatingJwtLesson,
	creatingPackagesLesson,
	creatingProjectLesson,
	credentialHandlingLesson,
	cronosLesson,
	crossJoinLesson,
	cryptoJsLesson,
	csharpA01Lesson,
	csharpA02Lesson,
	csharpA03Lesson,
	csharpB01Lesson,
	csharpB02Lesson,
	csharpI01Lesson,
	csharpI02Lesson,
	csharpI03Lesson,
	csharpI04Lesson,
	csharpI05Lesson,
	csharpI06Lesson,
	csharpPropertiesLesson,
	cspAndBrowserSecurityHeadersLesson,
	csrfAndSameSiteCookiesLesson,
	csrfProtectionAspnetLesson,
	csrfXssProtectionLesson,
	cssModulesLesson,
	cssModulesLesson1,
	csvhelperLesson,
	ctesLesson,
	customAuthorizationHandlersLesson,
	customCacheResolversLesson,
	customExceptionsLesson,
	customHookTestingLesson,
	customHooksLesson,
	customHooksLesson1,
	customHooksLesson2,
	customHooksLesson3,
	customHooksTypesLesson,
	customMiddlewareLesson,
	customMiddlewareLesson1,
	customMiddlewareLesson2,
	customValidationLesson,
	cypressLesson,
	cypressCommandsLesson,
	cypressComponentLesson,
	cypressIntroLesson,
	dapperLesson,
	dataDrivenTestsLesson,
	dataModelingLesson,
	dataOperationsConnectedLesson,
	dataOperationsDisconnectedLesson,
	dataProtectionLesson,
	dataWarehouseFundamentalsLesson,
	dataannotationsLesson,
	databaseCapacityPlanningLesson,
	databaseEngineTuningAdvisorLesson,
	databaseFirstDiagnosticsLesson,
	databaseMigrationAndDataMovementLesson,
	databaseMigrationSafetyLesson,
	databaseMigrationStrategiesLesson,
	databaseMirroringLesson,
	databaseTestingLesson,
	dataloaderLesson,
	dateFnsLesson,
	dateTimeTypesLesson,
	day2TroubleshootingWorkflowLesson,
	dbcontextAndMigrationsLesson,
	dbcontextConfigurationLesson,
	dbcontextConfigurationLesson1,
	dbcontextInEntityFrameworkCoreLesson,
	deadLetterQueuesLesson,
	deadlocksAndDeadlockGraphsLesson,
	deadlocksIncreaseSharplyDuringPeakTrafficLesson,
	deadlocksStarvationAndLivelocksLesson,
	debuggingPerformanceLesson,
	debuggingTechniquesLesson,
	decideWhetherAProposedMicroserviceShouldActuallyExistLesson,
	decisionDocumentationLesson,
	decisionReviewsLesson,
	declarationMergingAndModuleAugmentationLesson,
	decodeWaysLesson,
	decodeWaysLesson1,
	decoratorPatternLesson,
	decoratorPatternLesson1,
	defaultInterfaceMethodsLesson,
	defaultifemptyOperatorLesson,
	delegatesEventsLesson,
	delegatesEventsLesson1,
	deleteLesson,
	deleteDataDisconnectedScenarioLesson,
	dependencyInjectionLesson,
	dependencyInjectionLesson1,
	dependencyInjectionLifetimesAndScopeValidationLesson,
	dependencyInjectionWhatHappensWhenASingletonDependsOnAScopedServiceLesson,
	dependencyInversionLesson,
	dependencyScanningLesson,
	dependentQueriesLesson,
	deployingContainerizedAppsOnAksLesson,
	deploymentArchitectureForNextjsLesson,
	deploymentOptionsLesson,
	deploymentPipelinesLesson,
	deploymentSecretsAndEnvironmentConfigurationLesson,
	deploymentSetupLesson,
	deploymentSlotsAndSlotSwappingLesson,
	derivedDataLesson,
	derivedStateAndAvoidingDuplicatedStateLesson,
	designReviewsLesson,
	designingEventDrivenServerlessArchitectureLesson,
	designingTypeSafeComponentApisLesson,
	devtoolsLesson,
	diBasicsLesson,
	diBasicsLesson1,
	diagnosingAPortThatIsNotReachableLesson,
	diagnosingAsyncPerformanceProblemsLesson,
	digitalRootLesson,
	disasterRecoveryLesson,
	disasterRecoveryLesson1,
	disasterRecoveryPlanningLesson,
	disasterRecoveryTestingLesson,
	discriminatedUnionsLesson,
	disjointSetsLesson,
	distinctSetOperatorLesson,
	distributedTracingAcrossServicesLesson,
	distributedTracingAndOpenTelemetryLesson,
	distributedTransactionsLesson,
	dnsAndNetworkTroubleshootingFromLinuxLesson,
	dnsInDepthLesson,
	dnsResolutionFromBrowserToServerLesson,
	dockerContainerizationLesson,
	dockerEcrLesson,
	dockerfilesAndContainerDevelopmentLesson,
	documentationLesson,
	dotnetVersionsLesson,
	dropTableLesson,
	dropboxStorageLesson,
	dryPrincipleLesson,
	duplicateMessagesAndIdempotencyLesson,
	duplicatePaymentRequestsCreateDuplicateBusinessRecordsLesson,
	dynamicImportsLesson,
	dynamodbNosqlLesson,
	eagerVsLazyLoadingLesson,
	ec2AutoScalingLesson,
	ec2FundamentalsLesson,
	ec2InstancesStorageLesson,
	ecommerceHldLesson,
	edgeRuntimeVsNodeRuntimeLesson,
	editDistanceLesson,
	efCoreMigrationsUsingCliLesson,
	efCoreTablePerConcreteTypeTpcLesson,
	efCoreTablePerHierarchyTphLesson,
	efCoreTablePerTypeTptLesson,
	efCoreVsDapperVsRawSqlLesson,
	efCoreVsDapperVsRawSqlLesson1,
	efcoreIntroductionLesson,
	effectiveCodeReviewsLesson,
	elasticLoadBalancingLesson,
	elasticsearchLesson,
	elementatElementatordefaultLesson,
	elevatorSystemLesson,
	emailCommunicationLesson,
	emotionLesson,
	encapsulationLesson,
	encapsulationBasicsLesson,
	encryptionAtRestLesson,
	encryptionTdeLesson,
	endpointRoutingInternalsLesson,
	enterpriseCicdPipelineDesignLesson,
	enterpriseGitLesson,
	entityAdapterLesson,
	entityFrameworkCoreLesson,
	entityFrameworkCoreChangeTrackingLesson,
	entityFrameworkCoreConcurrencyConflictsLesson,
	entityFrameworkCoreConventionsLesson,
	entityFrameworkCoreInterceptorsLesson,
	entityFrameworkCoreSavingDataConnectedLesson,
	entityFrameworkCoreTutorialsLesson,
	entityFrameworkCoreWithExistingDatabaseLesson,
	entityFrameworkExtensionsPerformanceLesson,
	enumsAndLiteralTypesLesson,
	enumsAndNativeTypesLesson,
	environmentConfigurationLesson,
	environmentPromotionLesson,
	errorBoundariesLesson,
	errorBoundariesAndFailureIsolationLesson,
	errorBoundariesLoadingLesson,
	errorBoundariesTypedLesson,
	errorBudgetsLesson,
	errorHandlingLesson,
	errorHandlingLesson1,
	errorHandlingLesson2,
	errorHandlingLesson3,
	errorHandlingLesson4,
	errorHandlingLesson5,
	errorHandlingBasicsLesson,
	errorHandlingBasicsLesson1,
	errorHandlingInDataFetchingLesson,
	errorHandlingStrategiesLesson,
	errorLoggingMonitoringLesson,
	errorPoliciesLesson,
	esbuildLesson,
	estimationAndUncertaintyLesson,
	etagsAndConditionalRequestsLesson,
	evaluatingTechnicalOptionsLesson,
	eventDrivenApplicationPatternsLesson,
	eventGridTopicsEventsAndEventSubscriptionsLesson,
	eventGridWithAzureFunctionsLesson,
	eventHubsPartitionsAndConsumerGroupsLesson,
	eventHubsStreamProcessingLesson,
	eventSourcingLesson,
	exceptLesson,
	exceptSetOperatorLesson,
	exceptionHandlingLesson,
	exceptionHandlingLesson1,
	exceptionHandlingMiddlewareLesson,
	exceptionTypesLesson,
	exclusionConstraintsLesson,
	executeDeleteInEntityFrameworkCoreLesson,
	executeRawSqlQueriesLesson,
	executeUpdateInEntityFrameworkCoreLesson,
	executionPlanReadingWorkflowLesson,
	executionPlansLesson,
	explainAnalyzeLesson,
	explicitInterfaceImplementationLesson,
	expressionTreesLesson,
	extensionMethodsLesson,
	extensionsLesson,
];

const rawLessonsPart3 = [
	externalProvidersLesson,
	extraReducersLesson,
	facadePatternLesson,
	facadePatternLesson1,
	facebookNewsFeedLesson,
	factoryPatternLesson,
	factoryPatternLesson1,
	factoryPatternLesson2,
	factoryPatternDiLesson,
	failoverSwitchoverLesson,
	featureFlagsLesson,
	fetchApiBasicsLesson,
	fetchingDataLesson,
	fiberAndSchedulingConceptsLesson,
	fibonacciNumberLesson,
	fieldTypesMappingLesson,
	figgleLesson,
	fileDescriptorsAndOpenFilesLesson,
	fileIoLesson,
	fileUploadLesson,
	fileUploadsLesson,
	filteringAndSortingLesson,
	filteringBasicsLesson,
	filteringOperatorWhereLesson,
	finalFormLesson,
	findFirstSetBitLesson,
	findMinimumInRotatedSortedArrayLesson,
	finiteStateMachinesLesson,
	firewallsAndSecurityLesson,
	firstEndpointLesson,
	firstFirstordefaultLesson,
	firstProgramLesson,
	firstQueryLesson,
	firstQueryLesson1,
	firstReactAppLesson,
	firstUniqueCharLesson,
	flakyTestDiagnosisLesson,
	flakyTestsLesson,
	flexibleComponentApisLesson,
	fluentApiInEntityFrameworkCoreLesson,
	fluentAssertionsLesson,
	fluentEmailLesson,
	fluentvalidationLesson,
	flurlLesson,
	foodDeliveryLesson,
	foodDeliveryHldLesson,
	foreignDataWrappersLesson,
	foreignKeyLesson,
	formIntegrationLesson,
	formStateManagementLesson,
	formSubmissionLesson,
	formValidationLesson,
	formValidationLesson1,
	formikLesson,
	forwardingRefsLesson,
	framerMotionLesson,
	fromBodyLesson,
	fromQueryLesson,
	frontDoorVsApplicationGatewayLesson,
	frontDoorVsApplicationGatewayVsLoadBalancerLesson,
	frontendBundleSizeDoubledAfterADependencyChangeLesson,
	frontendMemoryLeaksLesson,
	fullOuterJoinLesson,
	fullstackPostgresqlPrismaNextjsLesson,
	functionalComponentsLesson,
	functionalVsNonFunctionalRequirementsLesson,
	functionsBindingsLesson,
	functionsDependencyInjectionAndConfigurationLesson,
	functionsDurableWorkflowsLesson,
	functionsEventDrivenDevelopmentLesson,
	functionsHttpApisLesson,
	functionsLocalDevelopmentAndDebuggingLesson,
	functionsMethodsLesson,
	functionsProgrammingModelsLesson,
	functionsScalingAndHostingPlansLesson,
	functionsStorageQueuesAndTimersLesson,
	functionsTriggersLesson,
	functionsTypesLesson,
	garbageCollectionHowWouldYouInvestigateAllocationAndGcPressureLesson,
	gcGenerationsLesson,
	gcGenerationsAndCollectionBehaviorLesson,
	genI01Lesson,
	generateSqlScriptFromModelLesson,
	generationOperatorsLesson,
	generativeAiArchitectureLesson,
	genericFormLesson,
	genericHostAndApplicationLifetimeLesson,
	genericListLesson,
	genericsLesson,
	genericsBasicsLesson,
	genericsCsharpLesson,
	gettingStartedEfCoreLesson,
	gettingStartedJestLesson,
	gettingStartedXunitLesson,
	ginGistIndexesLesson,
	gitAndCiCdLesson,
	gitBestPracticesLesson,
	gitBisectForRegressionInvestigationLesson,
	gitInternalsLesson,
	gitSecurityLesson,
	githubActionsAzureAuthenticationLesson,
	githubActionsForAzureLesson,
	globalErrorHandlingLesson,
	googleDriveStorageLesson,
	googleSearchLesson,
	governanceCostManagementLesson,
	graphValidTreeLesson,
	graphqlBasicsLesson,
	graphqlRequestLesson,
	groupAnagramsLesson,
	groupByLesson,
	groupingOperatorGroupbyTolookupLesson,
	groupjoinOperatorLesson,
	grpcAndProtobufLesson,
	gsapLesson,
	handlingEventsLesson,
	handlingTechnicalDisagreementLesson,
	handlingUserInputLesson,
	hangfireLesson,
	hashTablesLesson,
	havingClauseLesson,
	headlessComponentsLesson,
	healthChecksLesson,
	healthChecksAndReadinessVsLivenessLesson,
	healthEndpointsAndDependencyChecksLesson,
	heapsLesson,
	highAvailabilityAndZoneAwareArchitectureLesson,
	higherOrderComponentsTypedLesson,
	hocBasicsLesson,
	hocCompositionLesson,
	hocExamplesLesson,
	hookBestPracticesLesson,
	hookCompositionPatternsLesson,
	hookErrorHandlingLesson,
	hooksAndAutomationLesson,
	horizontalPodAutoscalerLesson,
	hotchocolateProjectSetupLesson,
	hotelManagementLesson,
	houseRobberLesson,
	houseRobberIiLesson,
	howDoYouGuaranteeAnOperationIsAppliedOnlyOnceLesson,
	howDoYouHandleADatabaseTransactionThatSucceedsButEventPublishingFailsLesson,
	howSourceCodeBecomesARunningProgramLesson,
	howTheQueryOptimizerChoosesAPlanLesson,
	howToTroubleshootAFailingHttpRequestLesson,
	howWouldYouDebugAPageWithPoorInpLesson,
	howWouldYouDesignIdempotencyForAPaymentApiLesson,
	howWouldYouDesignRetryBehaviorWithoutCreatingARetryStormLesson,
	howWouldYouDiagnoseAReactMemoryLeakLesson,
	howWouldYouEvolveAnApiWithoutBreakingOldClientsLesson,
	howWouldYouHandleADatabaseDeadlockInProductionLesson,
	howWouldYouImplementOptimisticUpdatesWithRollbackLesson,
	howWouldYouPartitionADatabaseThatHasOutgrownOneNodeLesson,
	howWouldYouReduceAJavascriptBundleThatHasGrownTooLargeLesson,
	howWouldYourArchitectureBehaveIfOneDependencyBecameUnavailableLesson,
	http11Http2Http3Lesson,
	httpMethodsAndStatusCodesLesson,
	httpMethodsStatusCodesAndHeadersLesson,
	httpRequestAndResponseLifecycleLesson,
	http11VsHttp2VsHttp3Lesson,
	httpclientfactoryLesson,
	humanizerLesson,
	hydrationAndHydrationMismatchesLesson,
	hydrationMismatchesOccurOnlyInProductionLesson,
	hydrationStrategiesLesson,
	iamFundamentalsLesson,
	iamPoliciesPermissionsLesson,
	iasyncdisposableAndAsyncResourceCleanupLesson,
	idempotencyKeysAndDuplicateRequestHandlingLesson,
	identityFederationLesson,
	identityIntegrationLesson,
	identityModelLesson,
	identityOverviewLesson,
	identityServerSetupLesson,
	identitySetupLesson,
	identityserverLesson,
	idisposableFinalizationAndDeterministicCleanupLesson,
	ihttpclientfactoryAndHandlerLifetimesLesson,
	imageAndFontOptimizationLesson,
	imageLayersAndBuildCacheLesson,
	imageScanningAndSupplyChainSecurityLesson,
	immerLesson,
	immutabilityLesson,
	imperativeHandlePatternsLesson,
	implementStrstrLesson,
	implementingApiKeysLesson,
	inboxdeduplicationPatternLesson,
	incidentCommandAndCommunicationLesson,
	incidentResponseLesson,
	incidentSeverityAndResponseLesson,
	includedColumnsAndCoveringIndexesLesson,
	incrementalMigrationVsRewriteLesson,
	indexFundamentalsLesson,
	indexMaintenanceLesson,
	indexMaintenanceVsActualQueryPerformanceLesson,
	indexeddbPersistenceLesson,
	infiniteQueriesLesson,
	influencingWithoutAuthorityLesson,
	infrastructureAsCodeConceptsLesson,
	infrastructureAutomationWithCiCdLesson,
	ingressAndTrafficRoutingLesson,
	inheritanceLesson,
	inheritanceBasicsLesson,
	inheritanceHierarchiesLesson,
	inheritanceStrategiesLesson,
	inheritanceStrategyInEfCoreLesson,
	initialDataPlaceholderLesson,
	injectingServicesLesson,
	inlineStylesLesson,
	innerJoinLesson,
	inputTypesLesson,
	inputValidationLesson,
	insertLesson,
	insertDataDisconnectedScenarioLesson,
	insertIntervalLesson,
	insertOnConflictLesson,
	instagramFeedLesson,
	instagramPhotoSharingLesson,
	installEntityFrameworkCoreLesson,
	installationSetupLesson,
	installingHotchocolateLesson,
	installingPackagesLesson,
	installingPackagesLesson1,
	installingPrismaInNextjsLesson,
	insteadOfTriggersLesson,
	integratingAiServicesIntoAzureApplicationsLesson,
	integratingXstateReactLesson,
	integrationTestingLesson,
	integrationTestingLesson1,
	integrationTestingBasicsLesson,
	interactiveRebaseLesson,
	interfaceBasicsLesson,
	interfaceSegregationLesson,
	interfacesLesson,
	interfacesTypesLesson,
	intermediateQ1Lesson,
	intermediateQ2Lesson,
	intermediateQ3Lesson,
	intermediateQ4Lesson,
	intermediateQ5Lesson,
	intersectLesson,
	intersectSetOperatorLesson,
	intersectionOfTwoLinkedListsLesson,
	interviewProblemsLesson,
	introduceBrokenDeploymentLesson,
	introduceCacheFailureLesson,
	introduceDatabasePerformanceRegressionLesson,
	introduceDownstreamTimeoutLesson,
	introduceDuplicateMessageProcessingLesson,
	introduceKubernetesHealthCheckFailureLesson,
	introduceMemoryLeakLesson,
	introductionToGraphqlLesson,
	invalidationLesson,
	investigateUsingLogsMetricsAndTracesLesson,
	iocContainerSetupLesson,
	isolationLevelsLesson,
	isomorphicStringsLesson,
	iteratorPatternLesson,
	jankFreeAnimationsLesson,
	jestLesson,
	jitCompilationAndTieredCompilationLesson,
	joinOperatorLesson,
	jotaiLesson,
	jsA01Lesson,
	jsA02Lesson,
	jsB01Lesson,
	jsB02Lesson,
	jsEngineOptimizationLesson,
	jsI01Lesson,
	jsI02Lesson,
	jsI03Lesson,
	jsI04Lesson,
	jsI05Lesson,
	jsonbAdvancedLesson,
	jsonbArraysLesson,
	jsonpatchLesson,
	jsxBasicsLesson,
	jsxBasicsLesson1,
	jumpGameLesson,
	jwtLesson,
	jwtAuthenticationLesson,
	jwtBasicsLesson,
	jwtBasicsLesson1,
	jwtIntegrationLesson,
	jwtOverviewLesson,
	jwtPitfallsAndTokenStorageLesson,
	jwtStorageOptionsLesson,
	jwtTokensLesson,
	jwtbearerLesson,
	kestrelAndTheAspnetCoreHostingModelLesson,
	keyLookupAndBookmarkLookupLesson,
	keyVaultSecretsKeysAndCertificatesLesson,
	keyVaultSecretsManagementLesson,
	keyVaultVsAppConfigurationLesson,
	kubernetesMultiEnvArchitectureLesson,
	kubernetesPodsRestartEvenThoughApplicationLogsLookHealthyLesson,
	kustoQueryLanguageForDevelopersLesson,
	kyLesson,
	largeObjectHeapAndPinnedObjectsLesson,
	largeRepositoriesLesson,
	largestElementInArrayLesson,
	lastLastordefaultLesson,
	lateralJoinLesson,
	layoutCompositionLesson,
	layoutEffectPatternsLesson,
	layoutThrashingLesson,
	layoutsAndPartialsLesson,
	layoutsAndPartialsLesson1,
	lazyEagerLoadingLesson,
	lazyLoadingAndPrefetchingLesson,
	leadersInArrayLesson,
	learnLinqStepByStepLesson,
	leftRightJoinsLesson,
	legacyModernizationStrategiesLesson,
	libraryManagementLesson,
	limitOffsetFetchLesson,
	linkedListCycleLesson,
	linkedinProfessionalLesson,
	linkedinProfessionalHldLesson,
	linqApiInNetLesson,
	linqBasicsLesson,
	linqExpressionTreesAndSqlTranslationLesson,
	linqHowDoYouIdentifyAQueryThatIsUnexpectedlyExpensiveLesson,
	linqMethodSyntaxLesson,
	linqQuerySyntaxLesson,
	liskovSubstitutionLesson,
	listsAndKeysLesson,
	livenessReadinessAndStartupProbesLesson,
	loadBalancerOverviewLesson,
	loadBalancerVsApplicationGatewayLesson,
	loadBalancersLesson,
	loadingStatesLesson,
	localOnlyFieldsLesson,
	localStateLesson,
	localStateVsServerStateLesson,
	localStateVsServerStateVsUrlStateLesson,
	lockAndMonitorLesson,
	lockingRowsLesson,
	locksAndBlockingLesson,
	lodashLesson,
	logAnalyticsWorkspacesLesson,
	log4netLesson,
	loggingAndMonitoringLesson,
	loggingAndMonitoringLesson1,
	loggingBasicsLesson,
	loggingBestPracticesLesson,
	loggingInEntityFrameworkCoreLesson,
	loggingStrategiesLesson,
	logicalReplicationLesson,
	logicalReplicationHaLesson,
	longRunningTransactionsLesson,
	longTermImpactLesson,
	longestCommonPrefixLesson,
	longestCommonSubsequenceLesson,
	longestConsecutiveSequenceLesson,
	longestIncreasingSubsequenceLesson,
	longestPalindromicSubstringLesson,
	longestRepeatingCharReplacementLesson,
	longestSubstringLesson,
	longestSubstringKDistinctLesson,
	longestSubstringTwoDistinctLesson,
	loopsLesson,
	lowestCommonAncestorOfBstLesson,
	mailkitLesson,
	majorityElementLesson,
	makingTechnicalTradeOffsExplicitLesson,
	manageDbConnectionStringLesson,
	managedDisksAndApplicationStorageLesson,
	managedHeapAndAllocationLifecycleLesson,
	managedIdentitiesLesson,
	managedIdentityArchitectureLesson,
	managedIdentityVsServicePrincipalLesson,
	managedIdentityVsServicePrincipalsLesson,
	managedIdentityWithAzureSqlLesson,
	managedIdentityWithAzureSqlLesson1,
	managedIdentityWithKeyVaultLesson,
	managedIdentityWithStorageLesson,
	managingBreakingChangesAcrossBranchesLesson,
	managingTechnicalDebtLesson,
	manyToManyRelationsLesson,
	mapsterLesson,
	masstransitLesson,
	matchersAssertionsLesson,
	materializedViewsLesson,
	maxConsecutiveOnesLesson,
	maximumDepthOfBinaryTreeLesson,
	maximumProductSubarrayLesson,
	maximumProductSubarrayLesson1,
	maximumSubarrayLesson,
	maximumSubarrayLesson1,
	meaningfulNamesLesson,
	mediatorPatternLesson,
	mediatorPatternLesson1,
	mediatrLesson,
	memoizationBasicsLesson,
	memoizationStrategiesLesson,
	memoryManagementLesson,
	memoryUsageGrowsContinuouslyAndPodsRestartLesson,
	memorystreamLesson,
	mentoringJuniorEngineersLesson,
	mergeLesson,
	mergeIntervalsLesson,
	mergeTwoSortedListsLesson,
	mergeVsRebaseLesson,
	messageIdempotencyAndDuplicateHandlingLesson,
	messageOrderingLesson,
	messagePersistenceAndOrderingLesson,
	messagepackLesson,
	messagingAndEventDrivenArchitectureLesson,
	messagingReliabilityIdempotencyAndRetriesLesson,
	methodOverridingLesson,
	methodsLesson,
	metricsAlertsAndActionGroupsLesson,
	microFrontendsLesson,
	microservicesBasicsLesson,
	microsoftAspnetcoreAuthenticationLesson,
	microsoftAspnetcoreAuthorizationLesson,
	microsoftAspnetcoreCorsLesson,
	microsoftAspnetcoreMvcLesson,
	microsoftEntraIdOverviewLesson,
	microsoftExtensionsConfigurationLesson,
	microsoftExtensionsDependencyinjectionLesson,
	microsoftExtensionsLoggingLesson,
	microsoftExtensionsOptionsLesson,
	microsoftOpenapiLesson,
	middleOfLinkedListLesson,
	middlewareAndExtensionsLesson,
	middlewareBasicsLesson,
	middlewareBasicsLesson1,
	middlewareCompositionLesson,
	middlewareConceptsLesson,
	middlewareOrderingLesson,
	migratingToTypescriptLesson,
	migrationPatternsLesson,
	migrationStrategiesLesson,
	migrationStrategiesLesson1,
	migrationStrategiesLesson2,
	migrationsLesson,
	migrationsBestPracticesLesson,
	migrationsInEntityFrameworkCoreLesson,
	migrationsOverviewLesson,
	minimalAndSecureRuntimeImagesLesson,
	minimumPathSumLesson,
	minimumSizeSubarraySumLesson,
	minioLesson,
	mobxLesson,
	mockServiceWorkerLesson,
	mockingAndTestUtilitiesLesson,
	mockingBasicsLesson,
	mockingJestLesson,
	modelAttributesAndConstraintsLesson,
	modelBindingBasicsLesson,
	modelBindingDeepDiveLesson,
	modelBindingOverviewLesson,
	modelsAndViewdataLesson,
	modernDevopsPracticesLesson,
	moduleFederationLesson,
	mongodbDriverLesson,
	monitoringLesson,
	monitoringAndAlertingLesson,
	monitoringContainersAndAksLesson,
	monitoringFunctionsAndAppServiceLesson,
	monitoringSetupLesson,
	monolithVsModularMonolithVsMicroservicesLesson,
	monorepoStrategiesLesson,
	moqLesson,
	moqFrameworkLesson,
	moreLinqLesson,
	moveZeroesLesson,
	moveZeroesToEndLesson,
	movieTicketBookingLesson,
	mstestLesson,
	multiFactorAuthenticationLesson,
	multiStageBuildsLesson,
	multiStepFormsLesson,
	multiStepFormsLesson1,
	multipleInterfacesLesson,
	multiplyStringsLesson,
	mutationBasicsLesson,
	mutationTestingAndTestQualityLesson,
	mvcArchitectureLesson,
	mvcLifecycleLesson,
	mvcPatternLesson,
	mvvmPatternLesson,
	mysqlconnectorLesson,
	n1QueryDiagnosisLesson,
	navigationLesson,
	nestedLoopsHashJoinAndMergeJoinLesson,
	nestedRoutesLesson,
	netflixStreamingLesson,
	networkInterruptionHandlingLesson,
	networkSecurityGroupsLesson,
	networkSecurityGroupsAndFirewallsLesson,
	networkWaterfallsAndRequestPrioritizationLesson,
	neverAndExhaustiveCheckingLesson,
	newtonsoftJsonLesson,
	nextjsLesson,
	nextjsAppRouterArchitectureLesson,
	nextjsIntegrationLesson,
	nextjsRoutingLesson,
];

const rawLessonsPart4 = [
	nlogLesson,
	normalizationLesson,
	normalizingStateLesson,
	notNullLesson,
	notificationArchitectureLesson,
	notificationSystemLesson,
	npgsqlLesson,
	npmSecurityLesson,
	npxYarnPnpLesson,
	nspecLesson,
	nsubstituteLesson,
	nugetConfigLesson,
	nugetSecurityLesson,
	nullHandlingLesson,
	nullableTypesLesson,
	numberOfConnectedComponentsLesson,
	numberOfIslandsLesson,
	numericTypesLesson,
	nunitLesson,
	nuxtjsLesson,
	oauth20RolesAndFlowsLesson,
	oauthJwtLesson,
	oauthOverviewLesson,
	oauthSecurityBestPracticesLesson,
	objectManagementLesson,
	observabilityAndFailureTestingLesson,
	observabilityArchitectureLesson,
	observabilityLoggingMetricsAndTracingLesson,
	observabilityPlatformDesignLesson,
	observerPatternLesson,
	observerPatternLesson1,
	observerPatternLesson2,
	oddEvenLinkedListLesson,
	ofetchLesson,
	offlineHandlingAndReconnectBehaviorLesson,
	offlineSupportLesson,
	offlineSupportLesson1,
	oftypeFilteringOperatorLesson,
	oneDatabaseQueryCauses90OfProductionDatabaseCpuLesson,
	oneToManyRelationsLesson,
	oneToManyRelationshipsConventionsLesson,
	oneToOneRelationsLesson,
	oneToOneRelationshipsConventionsLesson,
	onionArchitectureLesson,
	oopA01Lesson,
	oopB01Lesson,
	oopI01Lesson,
	oopI02Lesson,
	openClosedLesson,
	openRedirectsAndUrlValidationLesson,
	openapiGeneratorLesson,
	openidConnectLesson,
	openidConnectLesson1,
	openiddictLesson,
	opensearchQuicksightLesson,
	opentelemetryLesson,
	operationalTipsLesson,
	operatorOverloadingLesson,
	optimisticConcurrencyForApisLesson,
	optimisticResponsesLesson,
	optimisticUpdatesLesson,
	optimisticUpdatesLesson1,
	optimisticUpdatesAndRollbackLesson,
	optionsPatternLesson,
	optionsPatternAndConfigurationProvidersLesson,
	orderByLesson,
	orderbyOrderbydescendingLesson,
	osiModelLesson,
	otherComputeServicesLesson,
	otherDatabaseServicesLesson,
	outboxPatternLesson,
	outputEncodingLesson,
	pacelcAndLatencyTradeOffsLesson,
	pacificAtlanticWaterFlowLesson,
	packageJsonScriptsLesson,
	paginationLesson,
	paginationBasicsLesson,
	paginationCachingLesson,
	paginationFilteringAndSortingDesignLesson,
	paginationTechniquesLesson,
	paintingAndCompositingLesson,
	palindromeLinkedListLesson,
	palindromePartitioningLesson,
	palindromicSubstringsLesson,
	parallelDataLoadingLesson,
	parameterSniffingAndPlanInstabilityLesson,
	parkingLotSystemLesson,
	partialDataErrorHandlingLesson,
	partialExpressionLesson,
	partialViewsLesson,
	partitioningLesson,
	passwordManagementLesson,
	passwordValidatorLesson,
	passwordlessAuthenticationLesson,
	pathSumLesson,
	pathSumIiLesson,
	pathSumIiiLesson,
	pathTraversalAndFileUploadSecurityLesson,
	patroniRepmgrLesson,
	paymentGatewayLesson,
	paymentGatewayHldLesson,
	penetrationTestingBasicsLesson,
	perfQ1Lesson,
	perfQ2Lesson,
	perfQ3Lesson,
	perfQ4Lesson,
	performanceAndReRendersLesson,
	performanceBudgetsLesson,
	performanceBulkOperationsLesson,
	performanceMarkersLesson,
	performanceOptimizationLesson,
	performanceOptimizationLesson1,
	performanceOptimizationLesson2,
	performanceOptimizationLesson3,
	performancePaginationLesson,
	performanceTuningLesson,
	permissionsAndEnvironmentVariablesLesson,
	permissionsGrantRevokeLesson,
	persistedQueriesLesson,
	persistenceBasicsLesson,
	pgDumpRestoreLesson,
	pgvectorAiLesson,
	phase1RequirementsDomainModelAndArchitectureLesson,
	phase10DockerizedDeploymentAndCicdLesson,
	phase11CloudDeploymentAndProductionHardeningLesson,
	phase12ScaleTheSystemAndDocumentTradeOffsLesson,
	phase2AspnetCoreApiAndReactApplicationLesson,
	phase3AuthenticationAndAuthorizationLesson,
	phase4SqlSchemaEfCoreAndTransactionBoundariesLesson,
	phase5ValidationErrorHandlingAndApiContractsLesson,
	phase6AutomatedUnitAndIntegrationTestsLesson,
	phase7RedisCachingAndCacheInvalidationLesson,
	phase8BackgroundJobsAndMessageProcessingLesson,
	phase9ObservabilityWithLogsMetricsAndTracesLesson,
	pkceFlowLesson,
	playwrightLesson,
	playwrightBasedE2eTestingLesson,
	plpgsqlBasicsLesson,
	plpgsqlFunctionsLesson,
	pmcPowershellCommandsMigrationsLesson,
	podsAndWorkloadControllersLesson,
	pointInTimeRecoveryLesson,
	policyBasedAuthorizationLesson,
	policyBasedAuthorizationLesson1,
	policyBasedAuthorizationLesson2,
	policyServerLesson,
	pollingLesson,
	pollingRealTimeDataLesson,
	pollyLesson,
	pollySimmyLesson,
	polymorphicComponentsLesson,
	polymorphicComponentsLesson1,
	polymorphismBasicsLesson,
	popmotionLesson,
	postcssLesson,
	postgisSpatialLesson,
	postmortemCultureLesson,
	powerLesson,
	powxNLesson,
	prefetchPatternsLesson,
	prefetchingStrategiesLesson,
	presenceAndTypingIndicatorsLesson,
	primaryKeyLesson,
	principalsUsersRolesLesson,
	prismaApiRoutesLesson,
	prismaCicdDeploymentLesson,
	prismaClientQueriesLesson,
	prismaEnvironmentVariablesLesson,
	prismaInNextjsAppRouterLesson,
	prismaMigrateDeployLesson,
	prismaMigrateDevLesson,
	prismaMigrateResetLesson,
	prismaPerformanceOptimizationLesson,
	prismaRouteHandlersLesson,
	prismaSecurityBestPracticesLesson,
	prismaStudioIntroductionLesson,
	prismaVsOtherOrmsLesson,
	prismaWithAuthenticationLesson,
	prismaWithServerActionsLesson,
	privateDnsAndPrivateEndpointConnectivityLesson,
	privateEndpointsAndNetworkIsolationLesson,
	privateEndpointsAndPrivateLinkLesson,
	privateIpAndPublicIpAddressingLesson,
	problemDetailsLesson,
	problemDetailsAndConsistentErrorContractsLesson,
	processesThreadsAndSignalsLesson,
	processesVsThreadsLesson,
	producerConsumerPatternLesson,
	productOfArrayExceptSelfLesson,
	productionPerformanceRegressionAnalysisLesson,
	profilingCpuAndAllocationsLesson,
	profilingDebuggingLesson,
	profilingDebuggingLesson1,
	profilingDebuggingLesson2,
	projectStructureLesson,
	projectStructureLesson1,
	projectionOperatorsLesson,
	projectionVsIncludeLesson,
	prometheusLesson,
	promisesJsLesson,
	propertiesLesson,
	propsAdvancedLesson,
	propsBasicsLesson,
	protobufLesson,
	prototypePatternLesson,
	prototypePatternLesson1,
	providerLesson,
	proxyPatternLesson,
	psTopSsLsofAndCurlForDiagnosisLesson,
	psqlBasicsLesson,
	publicEndpointsVsPrivateEndpointsLesson,
	pullRequestAndCodeReviewWorkflowLesson,
	quantifierOperatorsLesson,
	quartzLesson,
	queriesLesson,
	queryBasicsLesson,
	queryCancellationLesson,
	queryClientLesson,
	queryComplexityLesson,
	queryLoggingAndPerformanceLesson,
	queryOptimizationLesson,
	queryOptimizationLesson1,
	queryOptionsLesson,
	queryOptionsLesson1,
	queryPlanningLesson,
	queryRegressionAfterDeploymentLesson,
	queryStoreLesson,
	queryingLesson,
	queryingInEntityFrameworkCoreLesson,
	queryingWithLinqLesson,
	queuesVsPubsubVsEventStreamsLesson,
	quorumConceptsLesson,
	rabbitmqClientLesson,
	raceConditionsAndThreadSafetyLesson,
	rangeTypesLesson,
	ransomNoteLesson,
	rapidQ1Lesson,
	rapidQ2Lesson,
	rapidQ3Lesson,
	rateLimiterLesson,
	rateLimitingLesson,
	rateLimitingAndLoadSheddingLesson,
	rateLimitingInAspnetLesson,
	rateLimitingSecurityLesson,
	razorSyntaxLesson,
	razorSyntaxBasicsLesson,
	rbacAndNamespacesLesson,
	rbacOverviewLesson,
	react19FeaturesLesson,
	reactA01Lesson,
	reactApplicationAndAuthenticationLesson,
	reactB01Lesson,
	reactB02Lesson,
	reactContextLesson,
	reactEssentialsLesson,
	reactHookFormLesson,
	reactHookFormLesson1,
	reactI01Lesson,
	reactI02Lesson,
	reactI03Lesson,
	reactIntegrationLesson,
	reactKeysLesson,
	reactMemoizationLesson,
	reactMicroFrontendsLesson,
	reactPageBecomesProgressivelySlowerAfterNavigationLesson,
	reactProfilerAndRenderInvestigationLesson,
	reactQueryLesson,
	reactQueryForServerStateLesson,
	reactQueryserverCacheArchitectureLesson,
	reactRouterLesson,
	reactSpringLesson,
	reactSsrSsgHybridLesson,
	reactTestingLibraryLesson,
	reactVirtualLesson,
	reactiveVariablesLesson,
	readOnlyFieldsLesson,
	readReplicasAndReadwriteSeparationLesson,
	readerWriterLocksLesson,
	readinessProbesFailDuringANormalTrafficSpikeLesson,
	readingApplicationAndSystemLogsLesson,
	readytorunAndNativeAotLesson,
	realTimePatternsLesson,
	realWorldAbstractionLesson,
	rebusLesson,
	reconciliationAndComponentIdentityLesson,
	recordsPatternsLesson,
	recoverBinarySearchTreeLesson,
	redGreenRefactorLesson,
	redisLesson,
	redisCachingPatternsLesson,
	redisCachingPatternsLesson1,
	reducerHooksPatternsLesson,
	reduxLesson,
	reduxAsAnApplicationArchitectureToolLesson,
	reduxSagaLesson,
	reduxThunkLesson,
	referenceTypesLesson,
	referencesValuesAndObjectLifetimeLesson,
	refetchingLesson,
	refitLesson,
	reflectionAndItsTradeOffsLesson,
	reflogAndRecoveringLostCommitsLesson,
	refreshTokenBasicsLesson,
	refreshTokenRotationLesson,
	regularExpressionMatchingLesson,
	relationQueriesAndPaginationLesson,
	relationsOverviewLesson,
	relationshipsAndConfigurationsLesson,
	relationshipsConfigurationLesson,
	releaseValidationAndRollbackLesson,
	reliabilityPatternsLesson,
	removeDuplicatesFromSortedArrayLesson,
	removeDuplicatesFromSortedListLesson,
	removeLinkedListElementsLesson,
	removeNthNodeFromEndLesson,
	renderOptimizationLesson,
	renderOptimizationLesson1,
	renderPhaseVsCommitPhaseLesson,
	renderPropsBasicsLesson,
	renderPropsExamplesLesson,
	renderPropsVsHooksLesson,
	renderingOptimizationLesson,
	replicationAndPartitioningLesson,
	repositoryPatternLesson,
	repositoryPatternLesson1,
	repositoryPatternLesson2,
	requestCancellationAndGracefulShutdownLesson,
	requestLatencyDecompositionLesson,
	requestLoggingLesson,
	requestPipelineAndMiddlewareExecutionLesson,
	requestValidationLesson,
	requestsAndLimitsLesson,
	requirementsAndRealTimeCommunicationArchitectureLesson,
	requirementsGatheringLesson,
	resolversLesson,
	resolvingDifficultMergeConflictsLesson,
	resourceBasedAuthorizationLesson,
	resourceGroupsVsManagementGroupsLesson,
	resourceLimitsLesson,
	responseCachingLesson,
	responseCompressionLesson,
	responseFormattingLesson,
	restApiDesignPrinciplesLesson,
	restPrinciplesLesson,
	restVsGraphqlDecisionFrameworkLesson,
	restVsGrpcDecisionFrameworkLesson,
	restsharpLesson,
	retryWithExponentialBackoffAndJitterLesson,
	revalidationPatternsLesson,
	reverseAnArrayLesson,
	reverseLinkedListLesson,
	reverseStringLesson,
	reverseWordsLesson,
	reversibilityLesson,
	reviewABackgroundWorkerWithNoCancellationSupportLesson,
	reviewAComponentThatRendersAHugeListWithoutVirtualizationLesson,
	reviewAComponentWithUnnecessaryGlobalStateLesson,
	reviewAFrontendAuthenticationImplementationStoringSensitiveTokensUnsafelyLesson,
	reviewAMutationFlowWithNoRollbackAfterOptimisticUpdateLesson,
	reviewAReactContextUsedForRapidlyChangingServerStateLesson,
	reviewAReactEffectThatCreatesASubscriptionLeakLesson,
	reviewASingletonServiceThatCapturesAScopedDependencyLesson,
	reviewATypescriptApiClientFullOfUnsafeTypeAssertionsLesson,
	reviewAnApiEndpointThatTrustsAnObjectIdFromTheClientLesson,
	reviewAnApiThatLogsSensitiveRequestDataLesson,
	reviewAnApiThatRetriesEveryExceptionIndefinitelyLesson,
	reviewAnAsyncMethodThatBlocksOnResultLesson,
	reviewAnEfCoreQueryThatCausesN1DatabaseCallsLesson,
	reviewAnHttpClientImplementationThatCreatesSocketsRepeatedlyLesson,
	rideSharingHldLesson,
	riskAssessmentLesson,
	roleBasedAccessLesson,
	roleBasedAccessLesson1,
	roleBasedAuthorizationLesson,
	rolesAuthorizationLesson,
	rolesPrivilegesLesson,
	rollbackStrategyLesson,
	rollbackVsForwardFixLesson,
	rollingDeploymentsAndRollbackLesson,
	rollupLesson,
	rootCauseAnalysisLesson,
	roslynAnalyzersLesson,
	rotateArrayLesson,
	round1ExplainYourArchitectureForAProductionNetReactApplicationLesson,
	round10FinalSeniorLevelSystemDesignWithInterviewerFollowUpsLesson,
	round2DiagnoseASlowApiWithDatabaseAndInfrastructureSymptomsLesson,
	round3DesignAScalableOrderProcessingSystemLesson,
	round4DebugAReactPerformanceRegressionLesson,
	round5ReviewAPullRequestAndIdentifyCorrectnessSecurityAndMaintainabilityIssuesLesson,
	round6ExplainADistributedTransactionAndFailureRecoveryStrategyLesson,
	round7DefendAnArchitectureDecisionAndDiscussRejectedAlternativesLesson,
	round8TellTheStoryOfAProductionIncidentYouOwnedLesson,
	round9DesignAMigrationFromMonolithToModularArchitectureLesson,
	routeConstraintsLesson,
	routeConstraintsLesson1,
	routeHandlersLesson,
	routeHandlersAndBackendForFrontendPatternsLesson,
	routeParamsLesson,
	route53DnsLesson,
	routingBasicsLesson,
	routingBasicsLesson1,
	routingBasicsLesson2,
	routingBasicsLesson3,
	rowLevelSecurityLesson,
	rtkQueryLesson,
	rtlIntroLesson,
	rtoAndRpoLesson,
	rtoAndRpoForAzureApplicationsLesson,
	runbookAutomationLesson,
	runningAndDebuggingLesson,
	runtimePolymorphismLesson,
	runtimeValidationVsCompileTimeTypesLesson,
	s3AdvancedFeaturesLesson,
	sagaPatternLesson,
	sameTreeLesson,
	saml2BasicsLesson,
	sampleLinqQueriesLesson,
	sassLesson,
	scalableAspnetApiDesignLesson,
	scalableReactStateArchitectureLesson,
	scalarsCustomTypesLesson,
	scalingRealTimeConnectionsLesson,
	scalingStrategiesLesson,
	scenarioQ1Lesson,
	scenarioQ2Lesson,
	scenarioQ21Lesson,
	scenarioQ22Lesson,
	scenarioQ23Lesson,
	scenarioQ24Lesson,
	scenarioQ25Lesson,
	scenarioQ3Lesson,
	schemaBasicsLesson,
	schemaBestPracticesLesson,
	schemaPrismaStructureLesson,
	schemaValidationForApiBoundariesLesson,
	scopedVsTransientVsSingletonLesson,
	scopesClaimsRolesAndPoliciesLesson,
	sdB01Lesson,
	sealedClassesLesson,
	searchAutocompleteLesson,
	searchInRotatedSortedArrayLesson,
	secretStorageAndRotationLesson,
	secretsManagementLesson,
	secureStorageStrategiesLesson,
	securingAiServicesWithManagedIdentityLesson,
	securingReactAppsLesson,
	securityHardeningLesson,
	securityTestingFundamentalsLesson,
	seedScriptsLesson,
	seekVsScanLesson,
	selectAndIncludeLesson,
	selectStatementLesson,
	selectiveFetchingLesson,
	semaphoreslimAndBoundedConcurrencyLesson,
	sendgridLesson,
	seqLesson,
	sequenceequalOperatorLesson,
	serilogLesson,
	serverActionsAndMutationBoundariesLesson,
	serverComponentsAndClientComponentsLesson,
	serverComponentsDataFetchingLesson,
	serverComponentsVsClientComponentsLesson,
	serverGcVsWorkstationGcLesson,
	serverlessApiBestPracticesLesson,
	serverlessArchitecturePatternsLesson,
	serviceBoundariesLesson,
	serviceBusDeadLetteringAndRetriesLesson,
	serviceBusFromAzureFunctionsLesson,
	serviceBusQueuesLesson,
	serviceBusSessionsAndMessageProcessingLesson,
	serviceBusTopicsAndSubscriptionsLesson,
	serviceBusVsEventGridVsEventHubsLesson,
	serviceLifetimesLesson,
	serviceLifetimesLesson1,
	serviceLifetimesLesson2,
	servicesAndServiceDiscoveryLesson,
	sessionManagementLesson,
	sessionVsTokenLesson,
	setMatrixZeroesLesson,
	setReturningFunctionsLesson,
	settingUpLesson,
	settingUpEnvironmentLesson,
	settingUpEnvironmentLesson1,
	settingUpPrismaClientLesson,
	setupLesson,
	setupClientLesson,
	setupIdentityLesson,
	shadowPropertyInEntityFrameworkCoreLesson,
	shardingStrategiesLesson,
	sharpcompressLesson,
	sharpcompressLesson1,
	simpleViewsLesson,
	simplifyPathLesson,
	singleResponsibilityLesson,
	singleSingleordefaultLesson,
	singletonPatternLesson,
	singletonPatternLesson1,
	skipSkipwhileLesson,
	slackMessagingLesson,
	slackMessagingHldLesson,
];

const rawLessonsPart5 = [
	sliSloAndSlaLesson,
	sliSloAndSlaInAzureWorkloadsLesson,
	slidingExpirationLesson,
	slotPatternLesson,
	slowApiInvestigationWorkflowLesson,
	snapshotIsolationAndRowVersioningLesson,
	solidPrinciplesLesson,
	solidPrinciplesLesson1,
	sortColorsLesson,
	sourceGeneratorsLesson,
	spantMemorytAndRefStructsLesson,
	spantWhatDoesItImproveAndWhatConstraintsDoesItIntroduceLesson,
	spectreConsoleLesson,
	spiralMatrixLesson,
	spotifyMusicLesson,
	spotifyMusicHldLesson,
	sqlA01Lesson,
	sqlA02Lesson,
	sqlB01Lesson,
	sqlB02Lesson,
	sqlB03Lesson,
	sqlFunctionsLesson,
	sqlI01Lesson,
	sqlI02Lesson,
	sqlI03Lesson,
	sqlInjectionAndParameterizationLesson,
	sqlServerCpuReaches95AfterAReleaseLesson,
	sqlServerIntegrationServicesLesson,
	sqlVsNosqlDecisionFrameworkLesson,
	sqlclientLesson,
	ssgHydrationLesson,
	sshAndSecureRemoteAccessLesson,
	sslTlsLesson,
	ssoAndIdentityProviderIntegrationLesson,
	ssoFundamentalsLesson,
	ssrIntegrationNextjsLesson,
	ssrSsgIsrAndDynamicRenderingLesson,
	ssrWithApolloLesson,
	ssrfAndServerSideRequestValidationLesson,
	stackVsHeapLesson,
	stackexchangeRedisLesson,
	stacksAndQueuesLesson,
	stakeholderAlignmentLesson,
	staleTimeGcLesson,
	standardQueryOperatorsLesson,
	starSnowflakeSchemaLesson,
	stateArchitectureLesson,
	stateBestPracticesLesson,
	stateCompositionLesson,
	stateReducerBasicsLesson,
	stateReducerCompositionLesson,
	stateReducerExamplesLesson,
	stateSharingBetweenHooksLesson,
	stateSynchronizationLesson,
	stateSynchronizationAcrossBrowserTabsLesson,
	statechartsAdvancedLesson,
	statelessServicesAndDistributedStateLesson,
	staticFilesAndCachingLesson,
	statisticsAndCardinalityEstimationLesson,
	statisticsMaintenanceLesson,
	stepFunctionsLesson,
	storageEncryptionAndSecurityLesson,
	storagePrivateEndpointsLesson,
	storageQueuesLesson,
	storageRedundancyAndReplicationLesson,
	storageSecurityAndEncryptionLesson,
	storeActionsReducersLesson,
	storeInitializationLesson,
	storedProceduresLesson,
	storedProceduresVsFunctionsLesson,
	storybookLesson,
	strategyPatternLesson,
	strategyPatternLesson1,
	streamingAndSuspenseLesson,
	streamingAndSuspenseLesson1,
	streamingApisAndLargePayloadsLesson,
	streamingReplicationLesson,
	stringCompressionLesson,
	strongVsEventualConsistencyLesson,
	structuredLoggingLesson,
	structuredLoggingAndCorrelationIdsLesson,
	stubsFakesLesson,
	styledComponentsLesson,
	styledComponentsLesson1,
	subarraySumEqualsKLesson,
	subscriptionLifecycleLesson,
	subscriptionsLesson,
	subscriptionsLesson1,
	subscriptionsBasicsLesson,
	subscriptionsResourceGroupsResourcesLesson,
	supplyChainSecurityInCicdLesson,
	surroundedRegionsLesson,
	suspenseLesson,
	suspenseAndAsynchronousUiLesson,
	svelteLesson,
	swaggerAndOpenapiLesson,
	swaggerDocumentationLesson,
	swapNodesInPairsLesson,
	swashbuckleLesson,
	swashbuckleAspnetcoreLesson,
	switchStatementsLesson,
	swrLesson,
	symmetricTreeLesson,
	synchronousVsAsynchronousWorkLesson,
	synchronousVsAsynchronousWorkflowsLesson,
	systemIoPipelinesLesson,
	systemQ1Lesson,
	systemQ11Lesson,
	systemQ12Lesson,
	systemQ13Lesson,
	systemQ14Lesson,
	systemQ15Lesson,
	systemQ2Lesson,
	systemTextJsonLesson,
	systemTextJsonSourceGenLesson,
	systemThreadingChannelsLesson,
	systemsManagerLesson,
	tableInheritanceLesson,
	tableStorageLesson,
	tagHelpersLesson,
	tagHelpersLesson1,
	tailwindCssLesson,
	tailwindCssLesson1,
	takeTakewhileLesson,
	tanstackRouterLesson,
	taskSchedulingAndContinuationsLesson,
	taskrunWhenIsItAppropriateInAnAspnetCoreApplicationLesson,
	tcpConnectionAndTlsHandshakeLesson,
	tcpIpStackLesson,
	tddAspnetCoreLesson,
	tddIntroLesson,
	tddPatternsLesson,
	technicalRoadmapsLesson,
	tellMeAboutADifficultTechnicalDecisionYouMadeLesson,
	tellMeAboutAProductionIncidentYouOwnedLesson,
	tellMeAboutAProjectThatFailedAndWhatYouLearnedLesson,
	tellMeAboutATechnicalDecisionYouWouldMakeDifferentlyTodayLesson,
	tellMeAboutATimeYouDisagreedWithAnotherEngineerLesson,
	tellMeAboutATimeYouInfluencedADecisionWithoutAuthorityLesson,
	tellMeAboutATimeYouMentoredAnotherEngineerLesson,
	tellMeAboutATimeYouPushedBackOnARequirementLesson,
	tellMeAboutTechnicalDebtYouInheritedAndHowYouHandledItLesson,
	tellMeAboutTheMostDifficultMigrationYouLedLesson,
	templateLiteralTypesLesson,
	testDataBuildersLesson,
	testDoublesMocksStubsAndFakesLesson,
	testFixturesLesson,
	testNamingConventionsLesson,
	testServerLesson,
	testStructureLesson,
	testcontainersAndRealisticBackendIntegrationLesson,
	testingApiCallsLesson,
	testingApisLesson,
	testingAsyncLesson,
	testingCacheInvalidationLesson,
	testingComponentsLesson,
	testingContextLesson,
	testingFormsLesson,
	testingFundamentalsLesson,
	testingHooksLesson,
	testingHooksLesson1,
	testingLibraryLesson,
	testingMutationsLesson,
	testingPrinciplesLesson,
	testingPyramidLesson,
	testingReducersLesson,
	testingRoutingLesson,
	testingStateLesson,
	testingTypesLesson,
	testingTypescriptReactLesson,
	textTypesLesson,
	thenbyThenbydescendingLesson,
	threadPoolPatternLesson,
	threadPoolStarvationLesson,
	threadPoolStarvationCausesRequestTimeoutsUnderLoadLesson,
	threadpoolInternalsAndThreadStarvationLesson,
	threatDetectionComplianceLesson,
	threePrinciplesLesson,
	ticTacToeGameLesson,
	ticketBookingHldLesson,
	timeComplexityAndBigOLesson,
	timeoutsAndCircuitBreakersLesson,
	timeoutsRetriesAndCancellationLesson,
	timescaledbTimeSeriesLesson,
	toastMvccLesson,
	tokenRevocationLesson,
	tokenRotationLesson,
	trackgraphInEntityFrameworkCoreLesson,
	trackingChangesOfEntitiesLesson,
	trackingVsAsnotrackingLesson,
	tradeOffAnalysisLesson,
	transactionFundamentalsLesson,
	transactionIsolationLevelsLesson,
	transactionsAndInteractiveTransactionsLesson,
	trapQ1Lesson,
	trapQ2Lesson,
	trappingRainWaterLesson,
	treeShakingLesson,
	treeShakingAndDependencyCostLesson,
	treesAndGraphsLesson,
	trieStructuresLesson,
	triggerBasicsLesson,
	triggerManagementLesson,
	troubleshootingToolsLesson,
	tryCatchFinallyLesson,
	ttfbAndFrontendPerformanceBudgetsLesson,
	turboLesson,
	twitterSocialLesson,
	twitterSocialHldLesson,
	twoSumLesson,
	typeAssertionsAndAsLesson,
	typeConversionLesson,
	typeDefinitionsLesson,
	typeGuardsLesson,
	typeNarrowingLesson,
	typePoliciesFieldPoliciesLesson,
	typePredicatesLesson,
	typeSafeContextLesson,
	typeSafetyPatternsLesson,
	typedFormHandlersLesson,
	typedReactQueryLesson,
	typedRouterLesson,
	typingChildrenAndSpecialPropsLesson,
	typingComponentsLesson,
	typingEventsLesson,
	typingPerformanceHooksLesson,
	typingPropsLesson,
	typingStateLesson,
	typingUsecontextAndReduxLesson,
	typingUseeffectLesson,
	typingUserefLesson,
	uberRideSharingLesson,
	uberRideSharingHldLesson,
	understandingCorsLesson,
	understandingProjectStructureLesson,
	understandingStructureLesson,
	understandingXssCsrfLesson,
	unionLesson,
	unionSetOperatorLesson,
	uniqueCheckLesson,
	uniquePathsLesson,
	uniquePathsIiLesson,
	unitOfWorkLesson,
	unitTestingControllersLesson,
	unitTestingControllersLesson1,
	unknownVsAnyLesson,
	updateLesson,
	updateDataDisconnectedScenarioLesson,
	urlAsStateLesson,
	urlGenerationLesson,
	urlShortenerLesson,
	useContextReducerLesson,
	useDispatchLesson,
	useMemoDebugLesson,
	useMutationLesson,
	useMutationHookLesson,
	useRefCallbackLesson,
	useSelectorLesson,
	useStateEffectLesson,
	usecontextHookLesson,
	useeffectBasicsLesson,
	userCentricMetricsLesson,
	userEventsLesson,
	userefHookLesson,
	usersSeeStaleDataAfterASuccessfulUpdateLesson,
	useTateHookLesson,
	utilityTypesLesson,
	uuidLesson,
	vacuumAnalyzeLesson,
	validAnagramLesson,
	validPalindromeLesson,
	validateBinarySearchTreeLesson,
	validatingJwtLesson,
	validationAttributesLesson,
	validationAttributesLesson1,
	validationBasicsLesson,
	valueTypesLesson,
	valuetaskAndWhenItIsAppropriateLesson,
	valuetaskWhatProblemDoesItSolveAndWhenCanItMakeCodeWorseLesson,
	variablesLesson,
	vendingMachineLesson,
	verificationLesson,
	versioningAndDocumentationLesson,
	versioningSemverLesson,
	verticalVsHorizontalScalingLesson,
	videoStreamingHldLesson,
	viewComponentsLesson,
	viewComponentsLesson1,
	viewDataTempdataLesson,
	viewManagementLesson,
	viewbagViewdataTempdataLesson,
	viewsAndTemplatesLesson,
	virtualMachinesOverviewLesson,
	virtualNetworkDesignLesson,
	virtualNetworksAndSubnetsLesson,
	virtualizationLesson,
	virtualizationForLargeListsLesson,
	virtualizationLargeListsLesson,
	visualRegressionLesson,
	visualizationJoinsLesson,
	viteLesson,
	vitestLesson,
	vitestReactLesson,
	vmScaleSetsVsAvailabilitySetsLesson,
	volumesAndPersistentDataLesson,
	vpcConnectivityLesson,
	vpnAndHybridConnectivityForDevelopersLesson,
	vueEssentialsLesson,
	vueRouterLesson,
	wafShieldLesson,
	webCrawlerLesson,
	webMobileAmplifyLesson,
	webWorkersAndCpuHeavyBrowserWorkLesson,
	webhooksAndReliableCallbackProcessingLesson,
	webpackLesson,
	websocketConnectionLifecycleLesson,
	websocketSetupLesson,
	websocketsLesson,
	websocketsVsServerSentEventsLesson,
	whatCausesHydrationMismatchesLesson,
	whatIsApolloLesson,
	whatIsAspnetCoreLesson,
	whatIsAzureLesson,
	whatIsCloudComputingLesson,
	whatIsCsharpLesson,
	whatIsLinqLesson,
	whatIsNpmYarnLesson,
	whatIsNugetLesson,
	whatIsOopLesson,
	whatIsPostgresqlLesson,
	whatIsPrismaLesson,
	whatIsReactLesson,
	whatIsReactQueryLesson,
	whatIsReduxLesson,
	whatIsTypescriptLesson,
	whatIsWebApiLesson,
	whatWouldYouMonitorToProveYourArchitectureIsHealthyLesson,
	whatWouldYouSimplifyIfTheSystemHadOnly1OfTheExpectedTrafficLesson,
	whatsappChatLesson,
	whatsappChatHldLesson,
	whenNotToMockLesson,
	whenNotToUseCachingLesson,
	whenNotToUseKubernetesLesson,
	whenNotToUseMicroservicesLesson,
	whenShouldAComponentBeAServerComponentVsClientComponentLesson,
	whenShouldASynchronousApiBecomeAsynchronousLesson,
	whenShouldStateLiveInReactQueryRatherThanReduxLesson,
	whenToBypassTheOrmLesson,
	whenToUseContextAndWhenNotToLesson,
	whenToUseReduxLesson,
	whenWouldYouChooseEfCoreDapperOrRawSqlLesson,
	whereClauseLesson,
	whereWouldYouUseCachingAndHowWouldYouInvalidateItLesson,
	whyDidYouChooseMicroservicesInsteadOfAModularMonolithLesson,
	whyExactlyOnceIsDifficultLesson,
	whyIsThisReactComponentReRenderingAndHowWouldYouProveTheCauseLesson,
	whyLinqLesson,
	whyTestReactLesson,
	whyUnitTestingLesson,
	windowFunctionsLesson,
	windowingLargeListsLesson,
	wordBreakLesson,
	wordLadderLesson,
	wordPatternLesson,
	workflowOrchestrationVsChoreographyLesson,
	workingWithDbcontextInEfCoreLesson,
	workingWithDisconnectedEntityGraphLesson,
	workingWithProductAndQaLesson,
	workingWithStoredProceduresLesson,
	workspacesMonoreposLesson,
	writeARootCauseAnalysisAndRemediationPlanLesson,
	writingE2eTestsLesson,
	writingRfcsLesson,
	writingTechnicalProposalsLesson,
	xssAndOutputEncodingLesson,
	xssPreventionTechniquesLesson,
	xstateLesson,
	xstateFundamentalsLesson,
	xunitLesson,
	yamldotnetLesson,
	youtubeStreamingLesson,
	youtubeVideoLesson,
	yupLesson,
	zodLesson,
	zodValidationLesson,
	zoomConferencingLesson,
	zoomConferencingHldLesson,
	zustandLesson,
];

const rawLessons: any[] = [...rawLessonsPart1, ...rawLessonsPart2, ...rawLessonsPart3, ...rawLessonsPart4, ...rawLessonsPart5];

export const lessons: Lesson[] = rawLessons as unknown as Lesson[];

export function getLessonBySlug(slug: string): Lesson | undefined {
	return lessons.find((l) => l.slug === slug);
}

export function getLessonsByModule(moduleSlug: string, courseSlug?: string): Lesson[] {
	return lessons.filter((l) => l.moduleSlug === moduleSlug && (!courseSlug || l.courseSlug === courseSlug)).sort((a, b) => a.order - b.order);
}

export function getAdjacentLessons(lesson: Lesson, allLessons: Lesson[]): { prev: Lesson | null; next: Lesson | null } {
	const moduleLessons = allLessons.filter((l) => l.moduleSlug === lesson.moduleSlug).sort((a, b) => a.order - b.order);
	const idx = moduleLessons.findIndex((l) => l.slug === lesson.slug);
	return {
		prev: idx > 0 ? moduleLessons[idx - 1] : null,
		next: idx < moduleLessons.length - 1 ? moduleLessons[idx + 1] : null,
	};
}
