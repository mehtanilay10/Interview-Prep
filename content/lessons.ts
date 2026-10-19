import type { Lesson } from '@/types';

import lesson01KnapsackLesson from "./backend/problems/csharp/05-dynamic-programming-problems/0-1-knapsack.json";
import lesson01AmazonCognitoUserPoolsLesson from "./devops/courses/aws/16-identity-for-applications/01-amazon-cognito-user-pools.json";
import lesson01ArchitecturePatternsLesson from "./devops/courses/aws/20-aws-architecture-design-patterns/01-architecture-patterns.json";
import lesson01CheckConstraintLesson from "./database/courses/sql-server/09-constraints/01-check-constraint.json";
import lesson01CiCdConceptsLesson from "./devops/courses/devops/05-ci-cd-fundamentals/01-ci-cd-concepts.json";
import lesson01CloudformationAdvancedLesson from "./devops/courses/aws/18-infrastructure-automation/01-cloudformation-advanced.json";
import lesson01ConfigmapsSecretsIngressLesson from "./devops/courses/devops/04-kubernetes-advanced/01-configmaps-secrets-ingress.json";
import lesson01CreateDatabaseLesson from "./database/courses/sql-server/07-database-schema-table-objects/01-create-database.json";
import lesson01CursorLesson from "./database/courses/sql-server/15-advanced-topics/01-cursor.json";
import lesson01DataTypesOverviewLesson from "./database/courses/sql-server/08-data-types/01-data-types-overview.json";
import lesson01DockerComposeMultiContainerLesson from "./devops/courses/devops/02-docker-advanced/01-docker-compose-multi-container.json";
import lesson01GithubActionsWorkflowsLesson from "./devops/courses/devops/06-ci-cd-modern-tools/01-github-actions-workflows.json";
import lesson01GroupByLesson from "./database/courses/sql-server/05-grouping-aggregation-subqueries/01-group-by.json";
import lesson01HighAvailabilityPatternsLesson from "./devops/courses/aws/19-high-availability-disaster-recovery/01-high-availability-patterns.json";
import lesson01IndexesOverviewLesson from "./database/courses/sql-server/10-indexes/01-indexes-overview.json";
import lesson01InsertAddRowLesson from "./database/courses/sql-server/06-data-modification-dml/01-insert-add-row.json";
import lesson01MigrationServicesLesson from "./devops/courses/aws/17-migration-hybrid-cloud/01-migration-services.json";
import lesson01SelectAllEmployeesLesson from "./database/problems/sql/01-sql-basics/01-select-all-employees.json";
import lesson01SelectStatementLesson from "./database/courses/sql-server/02-querying-data/01-select-statement.json";
import lesson01StoredProcedureGetEmployeesByDeptLesson from "./database/problems/sql/03-sql-advanced/01-stored-procedure-get-employees-by-dept.json";
import lesson01StoredProceduresBasicsLesson from "./database/courses/sql-server/12-stored-procedures-functions/01-stored-procedures-basics.json";
import lesson01SubqueryInWhereClauseLesson from "./database/problems/sql/02-sql-intermediate/01-subquery-in-where-clause.json";
import lesson01TransactionLesson from "./database/courses/sql-server/14-transactions-error-handling-backup/01-transaction.json";
import lesson01TriggersTutorialLesson from "./database/courses/sql-server/13-triggers/01-triggers-tutorial.json";
import lesson01UnionUltimateGuideLesson from "./database/courses/sql-server/04-set-operations/01-union-ultimate-guide.json";
import lesson01ViewsIntroductionLesson from "./database/courses/sql-server/11-views/01-views-introduction.json";
import lesson01VisualizationExplanationOfJoinsLesson from "./database/courses/sql-server/03-joins/01-visualization-explanation-of-joins.json";
import lesson01WhatIsDockerLesson from "./devops/courses/devops/01-docker-fundamentals/01-what-is-docker.json";
import lesson01WhatIsKubernetesLesson from "./devops/courses/devops/03-kubernetes-fundamentals/01-what-is-kubernetes.json";
import lesson01WhatIsSqlServerLesson from "./database/courses/sql-server/01-getting-started/01-what-is-sql-server.json";
import lesson026RsMigrationStrategyLesson from "./devops/courses/aws/17-migration-hybrid-cloud/02-6-rs-migration-strategy.json";
import lesson02AfterUpdateTriggerLogSalaryChangeLesson from "./database/problems/sql/03-sql-advanced/02-after-update-trigger-log-salary-change.json";
import lesson02AwsCdkAdvancedLesson from "./devops/courses/aws/18-infrastructure-automation/02-aws-cdk-advanced.json";
import lesson02BasicsLesson from "./database/courses/sql-server/01-getting-started/02-basics.json";
import lesson02BeginEndStatementLesson from "./database/courses/sql-server/14-transactions-error-handling-backup/02-begin-end-statement.json";
import lesson02CharDataTypeLesson from "./database/courses/sql-server/08-data-types/02-char-data-type.json";
import lesson02ClusteredIndexesLesson from "./database/courses/sql-server/10-indexes/02-clustered-indexes.json";
import lesson02CognitoIdentityPoolsLesson from "./devops/courses/aws/16-identity-for-applications/02-cognito-identity-pools.json";
import lesson02CreateTriggerLesson from "./database/courses/sql-server/13-triggers/02-create-trigger.json";
import lesson02CreateViewLesson from "./database/courses/sql-server/11-views/02-create-view.json";
import lesson02CteDepartmentSalaryStatsLesson from "./database/problems/sql/02-sql-intermediate/02-cte-department-salary-stats.json";
import lesson02DesignPrinciplesLesson from "./devops/courses/aws/20-aws-architecture-design-patterns/02-design-principles.json";
import lesson02DisasterRecoveryStrategiesLesson from "./devops/courses/aws/19-high-availability-disaster-recovery/02-disaster-recovery-strategies.json";
import lesson02DockerImagesContainersLesson from "./devops/courses/devops/01-docker-fundamentals/02-docker-images-containers.json";
import lesson02DockerVolumesNetworksLesson from "./devops/courses/devops/02-docker-advanced/02-docker-volumes-networks.json";
import lesson02DropDatabaseLesson from "./database/courses/sql-server/07-database-schema-table-objects/02-drop-database.json";
import lesson02ExceptLesson from "./database/courses/sql-server/04-set-operations/02-except.json";
import lesson02FilterEmployeesByDepartmentLesson from "./database/problems/sql/01-sql-basics/02-filter-employees-by-department.json";
import lesson02ForeignKeyConstraintLesson from "./database/courses/sql-server/09-constraints/02-foreign-key-constraint.json";
import lesson02GitlabCiPipelinesLesson from "./devops/courses/devops/06-ci-cd-modern-tools/02-gitlab-ci-pipelines.json";
import lesson02HavingClauseLesson from "./database/courses/sql-server/05-grouping-aggregation-subqueries/02-having-clause.json";
import lesson02HelmChartsLesson from "./devops/courses/devops/04-kubernetes-advanced/02-helm-charts.json";
import lesson02InnerJoinLesson from "./database/courses/sql-server/03-joins/02-inner-join.json";
import lesson02InsertIntoSelectLesson from "./database/courses/sql-server/06-data-modification-dml/02-insert-into-select.json";
import lesson02JenkinsBasicsLesson from "./devops/courses/devops/05-ci-cd-fundamentals/02-jenkins-basics.json";
import lesson02PodsDeploymentsServicesLesson from "./devops/courses/devops/03-kubernetes-fundamentals/02-pods-deployments-services.json";
import lesson02SelectDistinctLesson from "./database/courses/sql-server/02-querying-data/02-select-distinct.json";
import lesson02StoredProceduresTutorialLesson from "./database/courses/sql-server/12-stored-procedures-functions/02-stored-procedures-tutorial.json";
import lesson02TemporaryTablesLesson from "./database/courses/sql-server/15-advanced-topics/02-temporary-tables.json";
import lesson03AliasesLesson from "./database/courses/sql-server/01-getting-started/03-aliases.json";
import lesson03ApplicationAuthenticationLesson from "./devops/courses/aws/16-identity-for-applications/03-application-authentication.json";
import lesson03CreateIndexLesson from "./database/courses/sql-server/10-indexes/03-create-index.json";
import lesson03CreateNonclusteredIndexLesson from "./database/problems/sql/03-sql-advanced/03-create-nonclustered-index.json";
import lesson03CreateTableLesson from "./database/courses/sql-server/07-database-schema-table-objects/03-create-table.json";
import lesson03CubeLesson from "./database/courses/sql-server/05-grouping-aggregation-subqueries/03-cube.json";
import lesson03DdlTriggersLesson from "./database/courses/sql-server/13-triggers/03-ddl-triggers.json";
import lesson03DockerSecurityLesson from "./devops/courses/devops/02-docker-advanced/03-docker-security.json";
import lesson03DockerfileBasicsLesson from "./devops/courses/devops/01-docker-fundamentals/03-dockerfile-basics.json";
import lesson03DropViewLesson from "./database/courses/sql-server/11-views/03-drop-view.json";
import lesson03HybridCloudOptionsLesson from "./devops/courses/aws/17-migration-hybrid-cloud/03-hybrid-cloud-options.json";
import lesson03IfElseStatementLesson from "./database/courses/sql-server/14-transactions-error-handling-backup/03-if-else-statement.json";
import lesson03InsertMultipleRowsLesson from "./database/courses/sql-server/06-data-modification-dml/03-insert-multiple-rows.json";
import lesson03IntersectLesson from "./database/courses/sql-server/04-set-operations/03-intersect.json";
import lesson03JenkinsPipelinesLesson from "./devops/courses/devops/05-ci-cd-fundamentals/03-jenkins-pipelines.json";
import lesson03K8sMonitoringObservabilityLesson from "./devops/courses/devops/04-kubernetes-advanced/03-k8s-monitoring-observability.json";
import lesson03KubectlCommandsLesson from "./devops/courses/devops/03-kubernetes-fundamentals/03-kubectl-commands.json";
import lesson03LeftJoinLesson from "./database/courses/sql-server/03-joins/03-left-join.json";
import lesson03MultiRegionArchitectureLesson from "./devops/courses/aws/19-high-availability-disaster-recovery/03-multi-region-architecture.json";
import lesson03NotNullConstraintLesson from "./database/courses/sql-server/09-constraints/03-not-null-constraint.json";
import lesson03SelectTopLesson from "./database/courses/sql-server/02-querying-data/03-select-top.json";
import lesson03SortProductsByPriceLesson from "./database/problems/sql/01-sql-basics/03-sort-products-by-price.json";
import lesson03StoredProcedureParametersLesson from "./database/courses/sql-server/12-stored-procedures-functions/03-stored-procedure-parameters.json";
import lesson03TableVariablesLesson from "./database/courses/sql-server/15-advanced-topics/03-table-variables.json";
import lesson03TerraformAwsLesson from "./devops/courses/aws/18-infrastructure-automation/03-terraform-aws.json";
import lesson03VarcharDataTypeLesson from "./database/courses/sql-server/08-data-types/03-varchar-data-type.json";
import lesson03WellArchitectedDeepDiveLesson from "./devops/courses/aws/20-aws-architecture-design-patterns/03-well-architected-deep-dive.json";
import lesson03WindowFunctionRankLesson from "./database/problems/sql/02-sql-intermediate/03-window-function-rank.json";
import lesson04AlterTableAddColumnLesson from "./database/courses/sql-server/07-database-schema-table-objects/04-alter-table-add-column.json";
import lesson04ApplicationAuthenticationArchitectureLesson from "./devops/courses/aws/16-identity-for-applications/04-application-authentication-architecture.json";
import lesson04AwsSolutionsArchitectPatternsLesson from "./devops/courses/aws/20-aws-architecture-design-patterns/04-aws-solutions-architect-patterns.json";
import lesson04CaseExpressionLesson from "./database/courses/sql-server/15-advanced-topics/04-case-expression.json";
import lesson04CountEmployeesPerDepartmentLesson from "./database/problems/sql/01-sql-basics/04-count-employees-per-department.json";
import lesson04DatasyncSnowFamilyLesson from "./devops/courses/aws/17-migration-hybrid-cloud/04-datasync-snow-family.json";
import lesson04FilteredIndexesLesson from "./database/courses/sql-server/10-indexes/04-filtered-indexes.json";
import lesson04GetInformationAboutAViewLesson from "./database/courses/sql-server/11-views/04-get-information-about-a-view.json";
import lesson04IacBestPracticesLesson from "./devops/courses/aws/18-infrastructure-automation/04-iac-best-practices.json";
import lesson04InsteadOfTriggerLesson from "./database/courses/sql-server/13-triggers/04-instead-of-trigger.json";
import lesson04IntDataTypesLesson from "./database/courses/sql-server/08-data-types/04-int-data-types.json";
import lesson04LeadLagSalaryComparisonLesson from "./database/problems/sql/02-sql-intermediate/04-lead-lag-salary-comparison.json";
import lesson04OutputParametersLesson from "./database/courses/sql-server/12-stored-procedures-functions/04-output-parameters.json";
import lesson04RightJoinLesson from "./database/courses/sql-server/03-joins/04-right-join.json";
import lesson04RollupLesson from "./database/courses/sql-server/05-grouping-aggregation-subqueries/04-rollup.json";
import lesson04RtoRpoPlanningLesson from "./devops/courses/aws/19-high-availability-disaster-recovery/04-rto-rpo-planning.json";
import lesson04TransactionWithRollbackLesson from "./database/problems/sql/03-sql-advanced/04-transaction-with-rollback.json";
import lesson04TryCatchLesson from "./database/courses/sql-server/14-transactions-error-handling-backup/04-try-catch.json";
import lesson04UniqueConstraintLesson from "./database/courses/sql-server/09-constraints/04-unique-constraint.json";
import lesson04UpdateStatementLesson from "./database/courses/sql-server/06-data-modification-dml/04-update-statement.json";
import lesson04WhereClauseLesson from "./database/courses/sql-server/02-querying-data/04-where-clause.json";
import lesson05AlterTableAlterColumnLesson from "./database/courses/sql-server/07-database-schema-table-objects/05-alter-table-alter-column.json";
import lesson05AndOperatorLesson from "./database/courses/sql-server/02-querying-data/05-and-operator.json";
import lesson05CoalesceExpressionLesson from "./database/courses/sql-server/15-advanced-topics/05-coalesce-expression.json";
import lesson05CorrelatedSubqueryDepartmentAverageLesson from "./database/problems/sql/02-sql-intermediate/05-correlated-subquery-department-average.json";
import lesson05DisableTriggerLesson from "./database/courses/sql-server/13-triggers/05-disable-trigger.json";
import lesson05FilterGroupsWithHavingLesson from "./database/problems/sql/01-sql-basics/05-filter-groups-with-having.json";
import lesson05FullOuterJoinLesson from "./database/courses/sql-server/03-joins/05-full-outer-join.json";
import lesson05GroupingSetsLesson from "./database/courses/sql-server/05-grouping-aggregation-subqueries/05-grouping-sets.json";
import lesson05IndexesWithIncludedColumnsLesson from "./database/courses/sql-server/10-indexes/05-indexes-with-included-columns.json";
import lesson05IsolationLevelSerializableLesson from "./database/problems/sql/03-sql-advanced/05-isolation-level-serializable.json";
import lesson05NcharDataTypeLesson from "./database/courses/sql-server/08-data-types/05-nchar-data-type.json";
import lesson05RenameAViewLesson from "./database/courses/sql-server/11-views/05-rename-a-view.json";
import lesson05ThrowStatementLesson from "./database/courses/sql-server/14-transactions-error-handling-backup/05-throw-statement.json";
import lesson05UpdateWithJoinLesson from "./database/courses/sql-server/06-data-modification-dml/05-update-with-join.json";
import lesson05VariablesInStoredProceduresLesson from "./database/courses/sql-server/12-stored-procedures-functions/05-variables-in-stored-procedures.json";
import lesson06AlterTableDropColumnLesson from "./database/courses/sql-server/07-database-schema-table-objects/06-alter-table-drop-column.json";
import lesson06CrossJoinLesson from "./database/courses/sql-server/03-joins/06-cross-join.json";
import lesson06CteRunningTotalSalesLesson from "./database/problems/sql/02-sql-intermediate/06-cte-running-total-sales.json";
import lesson06DeleteStatementLesson from "./database/courses/sql-server/06-data-modification-dml/06-delete-statement.json";
import lesson06EnableTriggerLesson from "./database/courses/sql-server/13-triggers/06-enable-trigger.json";
import lesson06IndexOnComputedColumnLesson from "./database/courses/sql-server/10-indexes/06-index-on-computed-column.json";
import lesson06InnerJoinOrdersCustomersLesson from "./database/problems/sql/01-sql-basics/06-inner-join-orders-customers.json";
import lesson06ListAllViewsLesson from "./database/courses/sql-server/11-views/06-list-all-views.json";
import lesson06NullifLesson from "./database/courses/sql-server/15-advanced-topics/06-nullif.json";
import lesson06NvarcharDataTypeLesson from "./database/courses/sql-server/08-data-types/06-nvarchar-data-type.json";
import lesson06OrOperatorLesson from "./database/courses/sql-server/02-querying-data/06-or-operator.json";
import lesson06PivotOperatorLesson from "./database/courses/sql-server/05-grouping-aggregation-subqueries/06-pivot-operator.json";
import lesson06RaiserrorStatementLesson from "./database/courses/sql-server/14-transactions-error-handling-backup/06-raiserror-statement.json";
import lesson06ScalarFunctionsLesson from "./database/courses/sql-server/12-stored-procedures-functions/06-scalar-functions.json";
import lesson06TryCatchErrorHandlingLesson from "./database/problems/sql/03-sql-advanced/06-try-catch-error-handling.json";
import lesson07BetweenOperatorLesson from "./database/courses/sql-server/02-querying-data/07-between-operator.json";
import lesson07CommonTableExpressionsLesson from "./database/courses/sql-server/05-grouping-aggregation-subqueries/07-common-table-expressions.json";
import lesson07Datetime2DataTypeLesson from "./database/courses/sql-server/08-data-types/07-datetime2-data-type.json";
import lesson07DropTableLesson from "./database/courses/sql-server/07-database-schema-table-objects/07-drop-table.json";
import lesson07DropTriggerLesson from "./database/courses/sql-server/13-triggers/07-drop-trigger.json";
import lesson07DynamicSqlLesson from "./database/courses/sql-server/15-advanced-topics/07-dynamic-sql.json";
import lesson07DynamicSqlSearchLesson from "./database/problems/sql/03-sql-advanced/07-dynamic-sql-search.json";
import lesson07FullBackupLesson from "./database/courses/sql-server/14-transactions-error-handling-backup/07-full-backup.json";
import lesson07IndexedViewsLesson from "./database/courses/sql-server/11-views/07-indexed-views.json";
import lesson07LeftJoinCustomersOrdersLesson from "./database/problems/sql/01-sql-basics/07-left-join-customers-orders.json";
import lesson07SelfJoinLesson from "./database/courses/sql-server/03-joins/07-self-join.json";
import lesson07SelfJoinEmployeeManagerLesson from "./database/problems/sql/02-sql-intermediate/07-self-join-employee-manager.json";
import lesson07TableValuedFunctionsLesson from "./database/courses/sql-server/12-stored-procedures-functions/07-table-valued-functions.json";
import lesson07TruncateTableLesson from "./database/courses/sql-server/06-data-modification-dml/07-truncate-table.json";
import lesson07UniqueIndexLesson from "./database/courses/sql-server/10-indexes/07-unique-index.json";
import lesson08ClusteredColumnstoreIndexLesson from "./database/problems/sql/03-sql-advanced/08-clustered-columnstore-index.json";
import lesson08CrossApplyLesson from "./database/courses/sql-server/03-joins/08-cross-apply.json";
import lesson08DateDataTypeLesson from "./database/courses/sql-server/08-data-types/08-date-data-type.json";
import lesson08DeadlockLesson from "./database/courses/sql-server/15-advanced-topics/08-deadlock.json";
import lesson08DifferentialBackupLesson from "./database/courses/sql-server/14-transactions-error-handling-backup/08-differential-backup.json";
import lesson08DisableIndexesLesson from "./database/courses/sql-server/10-indexes/08-disable-indexes.json";
import lesson08InOperatorLesson from "./database/courses/sql-server/02-querying-data/08-in-operator.json";
import lesson08IntersectCommonProductsOrdersLesson from "./database/problems/sql/02-sql-intermediate/08-intersect-common-products-orders.json";
import lesson08ListAllTriggersLesson from "./database/courses/sql-server/13-triggers/08-list-all-triggers.json";
import lesson08MergeStatementLesson from "./database/courses/sql-server/06-data-modification-dml/08-merge-statement.json";
import lesson08RecursiveCteLesson from "./database/courses/sql-server/05-grouping-aggregation-subqueries/08-recursive-cte.json";
import lesson08RenameTableLesson from "./database/courses/sql-server/07-database-schema-table-objects/08-rename-table.json";
import lesson08RightJoinSuppliersProductsLesson from "./database/problems/sql/01-sql-basics/08-right-join-suppliers-products.json";
import lesson08UserDefinedFunctionsTutorialLesson from "./database/courses/sql-server/12-stored-procedures-functions/08-user-defined-functions-tutorial.json";
import lesson09AlterSchemaLesson from "./database/courses/sql-server/07-database-schema-table-objects/09-alter-schema.json";
import lesson09CorrelatedSubqueryLesson from "./database/courses/sql-server/05-grouping-aggregation-subqueries/09-correlated-subquery.json";
import lesson09DropFunctionLesson from "./database/courses/sql-server/12-stored-procedures-functions/09-drop-function.json";
import lesson09EnableIndexesLesson from "./database/courses/sql-server/10-indexes/09-enable-indexes.json";
import lesson09ExceptProductsNeverOrderedLesson from "./database/problems/sql/02-sql-intermediate/09-except-products-never-ordered.json";
import lesson09FullOuterJoinEmployeesDepartmentsLesson from "./database/problems/sql/01-sql-basics/09-full-outer-join-employees-departments.json";
import lesson09LikeOperatorLesson from "./database/courses/sql-server/02-querying-data/09-like-operator.json";
import lesson09SelectIntoLesson from "./database/courses/sql-server/06-data-modification-dml/09-select-into.json";
import lesson09SnapshotIsolationLesson from "./database/problems/sql/03-sql-advanced/09-snapshot-isolation.json";
import lesson09TimeDataTypeLesson from "./database/courses/sql-server/08-data-types/09-time-data-type.json";
import lesson09TransactionLogBackupLesson from "./database/courses/sql-server/14-transactions-error-handling-backup/09-transaction-log-backup.json";
import lesson09ViewTriggerDefinitionLesson from "./database/courses/sql-server/13-triggers/09-view-trigger-definition.json";
import lesson09WhileLoopLesson from "./database/courses/sql-server/15-advanced-topics/09-while-loop.json";
import lesson10BreakStatementLesson from "./database/courses/sql-server/15-advanced-topics/10-break-statement.json";
import lesson10CreateSchemaLesson from "./database/courses/sql-server/07-database-schema-table-objects/10-create-schema.json";
import lesson10DecimalDataTypeLesson from "./database/courses/sql-server/08-data-types/10-decimal-data-type.json";
import lesson10InsteadOfTriggerInsertViewLesson from "./database/problems/sql/03-sql-advanced/10-instead-of-trigger-insert-view.json";
import lesson10NullThreeValuedLogicLesson from "./database/courses/sql-server/02-querying-data/10-null-three-valued-logic.json";
import lesson10RecoveryModelLesson from "./database/courses/sql-server/14-transactions-error-handling-backup/10-recovery-model.json";
import lesson10RecursiveCteEmployeeHierarchyLesson from "./database/problems/sql/02-sql-intermediate/10-recursive-cte-employee-hierarchy.json";
import lesson10RenameIndexLesson from "./database/courses/sql-server/10-indexes/10-rename-index.json";
import lesson10SelectDistinctCitiesLesson from "./database/problems/sql/01-sql-basics/10-select-distinct-cities.json";
import lesson10SubqueryLesson from "./database/courses/sql-server/05-grouping-aggregation-subqueries/10-subquery.json";
import lesson11AnyOperatorLesson from "./database/courses/sql-server/05-grouping-aggregation-subqueries/11-any-operator.json";
import lesson11BetweenSalaryRangeLesson from "./database/problems/sql/01-sql-basics/11-between-salary-range.json";
import lesson11BitDataTypeLesson from "./database/courses/sql-server/08-data-types/11-bit-data-type.json";
import lesson11ContinueStatementLesson from "./database/courses/sql-server/15-advanced-topics/11-continue-statement.json";
import lesson11DatabaseSnapshotLesson from "./database/courses/sql-server/14-transactions-error-handling-backup/11-database-snapshot.json";
import lesson11DropIndexLesson from "./database/courses/sql-server/10-indexes/11-drop-index.json";
import lesson11DropSchemaLesson from "./database/courses/sql-server/07-database-schema-table-objects/11-drop-schema.json";
import lesson11MultipleJoinsOrderDetailsLesson from "./database/problems/sql/02-sql-intermediate/11-multiple-joins-order-details.json";
import lesson11OrderByClauseLesson from "./database/courses/sql-server/02-querying-data/11-order-by-clause.json";
import lesson12AllOperatorSalaryCheckLesson from "./database/problems/sql/02-sql-intermediate/12-all-operator-salary-check.json";
import lesson12DatetimeoffsetDataTypeLesson from "./database/courses/sql-server/08-data-types/12-datetimeoffset-data-type.json";
import lesson12ExistsOperatorLesson from "./database/courses/sql-server/05-grouping-aggregation-subqueries/12-exists-operator.json";
import lesson12InOperatorDepartmentsLesson from "./database/problems/sql/01-sql-basics/12-in-operator-departments.json";
import lesson12OffsetAndFetchLesson from "./database/courses/sql-server/02-querying-data/12-offset-and-fetch.json";
import lesson12SystemDatabasesLesson from "./database/courses/sql-server/07-database-schema-table-objects/12-system-databases.json";
import lesson13AllOperatorLesson from "./database/courses/sql-server/05-grouping-aggregation-subqueries/13-all-operator.json";
import lesson13DenseRankVsRankLesson from "./database/problems/sql/02-sql-intermediate/13-dense-rank-vs-rank.json";
import lesson13LikePatternMatchingLesson from "./database/problems/sql/01-sql-basics/13-like-pattern-matching.json";
import lesson13PartitionExistingTableLesson from "./database/courses/sql-server/07-database-schema-table-objects/13-partition-existing-table.json";
import lesson14AggregateFunctionsBasicsLesson from "./database/problems/sql/01-sql-basics/14-aggregate-functions-basics.json";
import lesson14StringFunctionsUppercaseEmailLesson from "./database/problems/sql/02-sql-intermediate/14-string-functions-uppercase-email.json";
import lesson14TablePartitioningLesson from "./database/courses/sql-server/07-database-schema-table-objects/14-table-partitioning.json";
import lesson15CaseExpressionSalaryBandLesson from "./database/problems/sql/02-sql-intermediate/15-case-expression-salary-band.json";
import lesson15NullHandlingIsnullLesson from "./database/problems/sql/01-sql-basics/15-null-handling-isnull.json";
import lesson15SequenceLesson from "./database/courses/sql-server/07-database-schema-table-objects/15-sequence.json";
import lesson16CrossApplyProductCategoriesLesson from "./database/problems/sql/02-sql-intermediate/16-cross-apply-product-categories.json";
import lesson16IdentityColumnLesson from "./database/courses/sql-server/07-database-schema-table-objects/16-identity-column.json";
import lesson16StringConcatenationLesson from "./database/problems/sql/01-sql-basics/16-string-concatenation.json";
import lesson17DateFunctionsCurrentDateLesson from "./database/problems/sql/01-sql-basics/17-date-functions-current-date.json";
import lesson17SynonymLesson from "./database/courses/sql-server/07-database-schema-table-objects/17-synonym.json";
import lesson17UnionAllCombinedCustomerOrdersLesson from "./database/problems/sql/02-sql-intermediate/17-union-all-combined-customer-orders.json";
import lesson18RowNumberDuplicateRemovalLesson from "./database/problems/sql/02-sql-intermediate/18-row-number-duplicate-removal.json";
import lesson18SynonymUltimateGuideLesson from "./database/courses/sql-server/07-database-schema-table-objects/18-synonym-ultimate-guide.json";
import lesson18UnionOrderCustomersSuppliersLesson from "./database/problems/sql/01-sql-basics/18-union-order-customers-suppliers.json";
import lesson19ExistsDepartmentEmployeesLesson from "./database/problems/sql/01-sql-basics/19-exists-department-employees.json";
import lesson19GrantLesson from "./database/courses/sql-server/07-database-schema-table-objects/19-grant.json";
import lesson19PivotSalesByQuarterLesson from "./database/problems/sql/02-sql-intermediate/19-pivot-sales-by-quarter.json";
import lesson1nfExercisesLesson from "./database/problems/database-design/normalization-exercises/1nf-exercises.json";
import lesson20CoalesceDisplayPreferredNameLesson from "./database/problems/sql/02-sql-intermediate/20-coalesce-display-preferred-name.json";
import lesson20ComputedColumnsLesson from "./database/courses/sql-server/07-database-schema-table-objects/20-computed-columns.json";
import lesson20TopNPerGroupLesson from "./database/problems/sql/01-sql-basics/20-top-n-per-group.json";
import lesson2nfExercisesLesson from "./database/problems/database-design/normalization-exercises/2nf-exercises.json";
import lesson3nfExercisesLesson from "./database/problems/database-design/normalization-exercises/3nf-exercises.json";
import lesson3sumLesson from "./backend/problems/csharp/01-array-problems/3sum.json";
import lesson7StepFrameworkLesson from "./architecture/courses/system-design-interviews/system-design-framework/7-step-framework.json";
import aProductionQuerySuddenlyBecameSlowAfterADeploymentWhatDoYouCheckLesson from "./interview-qa/backend-database-follow-ups/a-production-query-suddenly-became-slow-after-a-deployment-what-do-you-check.json";
import abstractClassesLesson from "./fundamentals/courses/oops-concepts/05-abstraction/abstract-classes.json";
import abstractVsInterfaceLesson from "./fundamentals/courses/oops-concepts/05-abstraction/abstract-vs-interface.json";
import abstractionBasicsLesson from "./fundamentals/courses/oops-concepts/05-abstraction/abstraction-basics.json";
import accessModifiersLesson from "./fundamentals/courses/oops-concepts/01-oop-fundamentals/access-modifiers.json";
import acrAuthenticationAndManagedIdentityLesson from "./devops/courses/azure/04-containers-and-container-platforms/acr-authentication-and-managed-identity.json";
import acrImagesTagsAndRepositoriesLesson from "./devops/courses/azure/04-containers-and-container-platforms/acr-images-tags-and-repositories.json";
import actionFiltersLesson from "./backend/problems/aspnet-core/01-mvc-fundamentals-problems/action-filters.json";
import adapterPatternLesson from "./architecture/courses/clean-code-csharp/03-structural-patterns/adapter-pattern.json";
import adapterPatternLesson1 from "./architecture/courses/design-patterns/02-structural-patterns/adapter-pattern.json";
import addStringsLesson from "./backend/problems/csharp/02-string-problems/add-strings.json";
import advancedDiPatternsLesson from "./backend/courses/aspnet-core/06-dependency-injection/advanced-di-patterns.json";
import advancedFeaturesLesson from "./backend/courses/ef-core/10-advanced-features/advanced-features.json";
import advancedGenericsForReusableApisLesson from "./frontend/courses/typescript-for-react/advanced-type-modeling-runtime-safety/advanced-generics-for-reusable-apis.json";
import advancedGitLogLesson from "./devops/courses/git-linux-developer-workflow/git-bisect-debugging/advanced-git-log.json";
import advancedPromptingPatternsLesson from "./ai/courses/codex/prompt-engineering-for-code/advanced-prompting-patterns.json";
import advancedQ1Lesson from "./interview-qa/03-advanced-questions/advanced-q1.json";
import advancedQ2Lesson from "./interview-qa/03-advanced-questions/advanced-q2.json";
import advancedQ3Lesson from "./interview-qa/03-advanced-questions/advanced-q3.json";
import advancedQ4Lesson from "./interview-qa/03-advanced-questions/advanced-q4.json";
import advancedQ5Lesson from "./interview-qa/03-advanced-questions/advanced-q5.json";
import agentArchitecturePatternsLesson from "./ai/courses/dotnet-ai-backend/05-ai-agents-dotnet/agent-architecture-patterns.json";
import agentGuardrailsAndApprovalsLesson from "./ai/courses/ai-basics/tool-calling-basics/agent-guardrails-and-approvals.json";
import agenticCodingIntroLesson from "./ai/courses/codex/agentic-workflows/agentic-coding-intro.json";
import aggregateFunctionsLesson from "./database/courses/postgresql/grouping-aggregation-subqueries/aggregate-functions.json";
import aggregatesLesson from "./database/courses/postgresql/stored-procedures-functions/aggregates.json";
import aggregationAggregateLesson from "./backend/courses/linq/07-aggregation-operators/aggregation-aggregate.json";
import aggregationAverageLesson from "./backend/courses/linq/07-aggregation-operators/aggregation-average.json";
import aggregationCountLesson from "./backend/courses/linq/07-aggregation-operators/aggregation-count.json";
import aggregationMaxLesson from "./backend/courses/linq/07-aggregation-operators/aggregation-max.json";
import aggregationSumLesson from "./backend/courses/linq/07-aggregation-operators/aggregation-sum.json";
import aiAgentsAndToolCallingLesson from "./ai/courses/dotnet-ai-backend/01-ai-backend-terminology/ai-agents-and-tool-calling.json";
import aiAndCopyrightLesson from "./ai/courses/ai-basics/privacy-and-data/ai-and-copyright.json";
import aiBackendEcosystemLesson from "./ai/courses/dotnet-ai-backend/01-ai-backend-terminology/ai-backend-ecosystem.json";
import aiEvaluationMetricsLesson from "./ai/courses/ai-basics/safety-and-limitations/ai-evaluation-metrics.json";
import aiForCodingLesson from "./ai/courses/ai-basics/chatbots-in-depth/ai-for-coding.json";
import aiForDataAnalysisLesson from "./ai/courses/ai-basics/automation-basics/ai-for-data-analysis.json";
import aiForResearchLesson from "./ai/courses/ai-basics/research-and-search-tools/ai-for-research.json";
import aiHallucinationDeepDiveLesson from "./ai/courses/ai-basics/hallucinations-and-accuracy/ai-hallucination-deep-dive.json";
import aiInEverydayLifeLesson from "./ai/courses/ai-basics/what-is-ai/ai-in-everyday-life.json";
import aiLimitationsLesson from "./ai/courses/ai-basics/safety-and-limitations/ai-limitations.json";
import aiProductDesignLifecycleLesson from "./ai/courses/ai-basics/ai-workflows/ai-product-design-lifecycle.json";
import aiProjectPortfolioAndCapstoneAssessmentsLesson from "./ai/courses/ai-basics/personal-ai-stack/ai-project-portfolio-and-capstone-assessments.json";
import aiRoadmapByRoleLesson from "./ai/courses/ai-basics/personal-ai-stack/ai-roadmap-by-role.json";
import aiSearchIndexesAndVectorSearchLesson from "./devops/courses/azure/13-ai-services-for-azure-developers/ai-search-indexes-and-vector-search.json";
import aiSecurityRisksLesson from "./ai/courses/codex/security-and-testing/ai-security-risks.json";
import aiSkillsExplainedLesson from "./ai/courses/ai-basics/mcp-and-skills/ai-skills-explained.json";
import aiVsMlVsGenerativeAiLesson from "./ai/courses/ai-basics/what-is-ai/ai-vs-ml-vs-generative-ai.json";
import aiWritingAssistantLesson from "./ai/courses/ai-basics/writing-and-content-tools/ai-writing-assistant.json";
import aifunctionfactoryStructuredToolsLesson from "./ai/courses/dotnet-ai-backend/05-ai-agents-dotnet/aifunctionfactory-structured-tools.json";
import airbnbBookingLesson from "./architecture/problems/lld/airbnb-booking/airbnb-booking.json";
import airbnbBookingHldLesson from "./architecture/problems/hld/airbnb-booking-hld/airbnb-booking-hld.json";
import aksConfigurationAndSecretsLesson from "./devops/courses/azure/04-containers-and-container-platforms/aks-configuration-and-secrets.json";
import aksDeploymentsServicesAndIngressLesson from "./devops/courses/azure/04-containers-and-container-platforms/aks-deployments-services-and-ingress.json";
import aksOverviewForDevelopersLesson from "./devops/courses/azure/04-containers-and-container-platforms/aks-overview-for-developers.json";
import aksScalingAndOperationsLesson from "./devops/courses/azure/04-containers-and-container-platforms/aks-scaling-and-operations.json";
import aksVsContainerAppsVsAppServiceLesson from "./devops/courses/azure/04-containers-and-container-platforms/aks-vs-container-apps-vs-app-service.json";
import alertingStrategiesLesson from "./architecture/courses/microservices-architecture/observability/alerting-strategies.json";
import alienDictionaryLesson from "./backend/problems/csharp/04-tree-graph-problems/alien-dictionary.json";
import allNodesDistanceKInBinaryTreeLesson from "./backend/problems/csharp/04-tree-graph-problems/all-nodes-distance-k-in-binary-tree.json";
import allocationPressureAndLatencyLesson from "./backend/courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/allocation-pressure-and-latency.json";
import alterTableLesson from "./database/courses/postgresql/database-schema-table-objects/alter-table.json";
import alwaysEncryptedLesson from "./database/courses/sql-server/17-security-hardening/always-encrypted.json";
import alwaysOnAvailabilityGroupsLesson from "./database/courses/sql-server/18-high-availability-dr/always-on-availability-groups.json";
import amazonAuroraLesson from "./devops/courses/aws/06-databases/amazon-aurora.json";
import amazonBedrockLesson from "./devops/courses/aws/14-ai-machine-learning/amazon-bedrock.json";
import amazonCloudwatchLesson from "./devops/courses/aws/11-monitoring-logging-observability/amazon-cloudwatch.json";
import amazonEcommerceLesson from "./architecture/problems/lld/amazon-ecommerce/amazon-ecommerce.json";
import amazonEcommerceHldLesson from "./architecture/problems/hld/amazon-ecommerce-hld/amazon-ecommerce-hld.json";
import amazonEcsLesson from "./devops/courses/aws/09-containers-kubernetes/amazon-ecs.json";
import amazonEksLesson from "./devops/courses/aws/09-containers-kubernetes/amazon-eks.json";
import amazonMqLesson from "./devops/courses/aws/07-load-balancing-application-integration/amazon-mq.json";
import amazonRdsLesson from "./devops/courses/aws/06-databases/amazon-rds.json";
import amazonRedshiftLesson from "./devops/courses/aws/13-analytics-big-data/amazon-redshift.json";
import amazonS3Lesson from "./backend/courses/dotnet-nuget-packages/cloud-integration/amazon-s3.json";
import amazonS3BasicsLesson from "./devops/courses/aws/05-storage-services/amazon-s3-basics.json";
import amazonSagemakerLesson from "./devops/courses/aws/14-ai-machine-learning/amazon-sagemaker.json";
import amazonSnsEventbridgeLesson from "./devops/courses/aws/07-load-balancing-application-integration/amazon-sns-eventbridge.json";
import amazonSqsLesson from "./devops/courses/aws/07-load-balancing-application-integration/amazon-sqs.json";
import amazonVpcLesson from "./devops/courses/aws/04-networking/amazon-vpc.json";
import anatomyOfAGoodPromptLesson from "./ai/courses/ai-basics/prompting-basics/anatomy-of-a-good-prompt.json";
import anatomyOfLambdaExpressionLesson from "./backend/courses/linq/02-linq-fundamentals-syntax/anatomy-of-lambda-expression.json";
import andOrOperatorsLesson from "./database/courses/postgresql/querying-data/and-or-operators.json";
import angularEssentialsLesson from "./frontend/courses/yarn-npm-packages/frontend-frameworks/angular-essentials.json";
import angularRouterLesson from "./frontend/courses/yarn-npm-packages/routing/angular-router.json";
import animeJsLesson from "./frontend/courses/yarn-npm-packages/animation/anime-js.json";
import apiAggregationLesson from "./architecture/courses/microservices-architecture/api-gateway-patterns/api-aggregation.json";
import apiAuthenticationLesson from "./architecture/courses/system-design-interviews/api-design/api-authentication.json";
import apiContractTestingLesson from "./frontend/courses/react-testing/testing-strategy-for-senior-frontend-engineers/api-contract-testing.json";
import apiContractsLesson from "./architecture/courses/system-design-interviews/requirement-clarification/api-contracts.json";
import apiControllersLesson from "./backend/courses/aspnet-core/10-web-api-rest/api-controllers.json";
import apiDesignLesson from "./fundamentals/courses/senior-software-engineering/system-design-for-seniors/api-design.json";
import apiDesignBestPracticesLesson from "./architecture/courses/microservices-architecture/service-to-service-communication/api-design-best-practices.json";
import apiDesignPrinciplesLesson from "./architecture/courses/fullstack-security/05-secure-api-design/api-design-principles.json";
import apiErrorHandlingLesson from "./backend/problems/aspnet-core/03-api-design-problems/api-error-handling.json";
import apiGatewayLesson from "./devops/courses/aws/08-serverless/api-gateway.json";
import apiGatewayCsharpLesson from "./backend/courses/aws-for-aspnet/08-lambda-serverless/api-gateway-csharp.json";
import apiGatewayFundamentalsLesson from "./architecture/courses/microservices-architecture/api-gateway-patterns/api-gateway-fundamentals.json";
import apiIntegrationLesson from "./devops/courses/aws/15-developer-tools-application-services/api-integration.json";
import apiLatencyIncreasedFrom100msTo4SecondsHowDoYouInvestigateLesson from "./interview-qa/backend-database-follow-ups/api-latency-increased-from-100ms-to-4-seconds-how-do-you-investigate.json";
import apiManagementApisProductsAndSubscriptionsLesson from "./devops/courses/azure/08-networking-and-api-platforms/api-management-apis-products-and-subscriptions.json";
import apiManagementAuthenticationAndSecurityLesson from "./devops/courses/azure/08-networking-and-api-platforms/api-management-authentication-and-security.json";
import apiManagementOverviewLesson from "./devops/courses/azure/08-networking-and-api-platforms/api-management-overview.json";
import apiManagementPoliciesLesson from "./devops/courses/azure/08-networking-and-api-platforms/api-management-policies.json";
import apiManagementVersioningAndRevisionsLesson from "./devops/courses/azure/08-networking-and-api-platforms/api-management-versioning-and-revisions.json";
import apiRoutesLesson from "./frontend/courses/next-js-full-stack-react/full-stack-api-design/api-routes.json";
import apiSecurityLesson from "./architecture/courses/microservices-architecture/security-in-microservices/api-security.json";
import apiSecurityFundamentalsLesson from "./architecture/courses/fullstack-security/04-api-security-rate-limiting/api-security-fundamentals.json";
import apiTestingLesson from "./backend/courses/unit-testing-dotnet/04-integration-testing/api-testing.json";
import apiVersioningLesson from "./architecture/courses/system-design-interviews/api-design/api-versioning.json";
import apiVersioningLesson1 from "./backend/problems/aspnet-core/03-api-design-problems/api-versioning.json";
import apiVersioningLesson2 from "./frontend/courses/next-js-full-stack-react/full-stack-api-design/api-versioning.json";
import apiVersioningAndCompatibilityLesson from "./backend/courses/aspnet-core-web-api/production-api-design-reliability/api-versioning-and-compatibility.json";
import apolloClientLesson from "./frontend/courses/yarn-npm-packages/http-clients/apollo-client.json";
import appConfigurationFeatureFlagsAndLabelsLesson from "./devops/courses/azure/07-identity-security-and-configuration/app-configuration-feature-flags-and-labels.json";
import appRegistrationsAndServicePrincipalsLesson from "./devops/courses/azure/07-identity-security-and-configuration/app-registrations-and-service-principals.json";
import appRunnerLesson from "./devops/courses/aws/09-containers-kubernetes/app-runner.json";
import appServiceAppConfigurationLesson from "./devops/courses/azure/02-compute-and-app-hosting/app-service-app-configuration.json";
import appServiceDeploymentLesson from "./devops/courses/azure/02-compute-and-app-hosting/app-service-deployment.json";
import appServiceDeploymentSlotsLesson from "./devops/courses/azure/02-compute-and-app-hosting/app-service-deployment-slots.json";
import appServiceOverviewLesson from "./devops/courses/azure/02-compute-and-app-hosting/app-service-overview.json";
import appServiceScalingAndAutoscaleLesson from "./devops/courses/azure/02-compute-and-app-hosting/app-service-scaling-and-autoscale.json";
import appServiceVsFunctionsVsContainerAppsLesson from "./devops/courses/azure/02-compute-and-app-hosting/app-service-vs-functions-vs-container-apps.json";
import applicationAuthenticationAndOauthLesson from "./devops/courses/azure/07-identity-security-and-configuration/application-authentication-and-oauth.json";
import applicationDeploymentStrategiesLesson from "./devops/courses/azure/11-application-deployment-and-devops/application-deployment-strategies.json";
import applicationGatewayOverviewLesson from "./devops/courses/azure/08-networking-and-api-platforms/application-gateway-overview.json";
import applicationGatewayWafAndRoutingLesson from "./devops/courses/azure/08-networking-and-api-platforms/application-gateway-waf-and-routing.json";
import applicationHealthDiagnosticsLesson from "./devops/courses/azure/10-observability-and-application-monitoring/application-health-diagnostics.json";
import applicationInsightsLesson from "./backend/courses/azure-for-aspnet/06-monitoring-caching-cicd/application-insights.json";
import applicationInsightsLesson1 from "./backend/courses/dotnet-nuget-packages/logging-monitoring/application-insights.json";
import applicationInsightsDistributedTracingLesson from "./devops/courses/azure/production-architecture-reliability-cost/application-insights-distributed-tracing.json";
import applicationInsightsInstrumentationLesson from "./devops/courses/azure/10-observability-and-application-monitoring/application-insights-instrumentation.json";
import applicationInsightsOverviewLesson from "./devops/courses/azure/10-observability-and-application-monitoring/application-insights-overview.json";
import applicationInsightsRequestsDependenciesAndFailuresLesson from "./devops/courses/azure/10-observability-and-application-monitoring/application-insights-requests-dependencies-and-failures.json";
import applicationInsightsVsAzureMonitorVsLogAnalyticsLesson from "./devops/courses/azure/10-observability-and-application-monitoring/application-insights-vs-azure-monitor-vs-log-analytics.json";
import applicationLevelCachingLesson from "./architecture/courses/system-design-interviews/caching-strategies/application-level-caching.json";
import applicationMetricsVsLogsVsTracesLesson from "./backend/courses/aspnet-core/performance-observability/application-metrics-vs-logs-vs-traces.json";
import applicationSecretsAndConfigurationPatternsLesson from "./devops/courses/azure/07-identity-security-and-configuration/application-secrets-and-configuration-patterns.json";
import approachingDesignQuestionsLesson from "./architecture/courses/system-design-interviews/system-design-framework/approaching-design-questions.json";
import architectureDecisionRecordsLesson from "./architecture/courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/architecture-decision-records.json";
import architectureOverviewLesson from "./database/courses/postgresql/getting-started/architecture-overview.json";
import architectureReviewsLesson from "./fundamentals/courses/senior-software-engineering/technical-leadership/architecture-reviews.json";
import areaRoutingLesson from "./backend/courses/aspnet-core/03-routing-urls/area-routing.json";
import arrangeActAssertLesson from "./backend/courses/unit-testing-dotnet/01-testing-fundamentals/arrange-act-assert.json";
import arraypooltAndMemorypooltLesson from "./backend/courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/arraypoolt-and-memorypoolt.json";
import arraysAndLinkedListsLesson from "./fundamentals/courses/programming-computer-web-foundations/data-structures-deep-dive/arrays-and-linked-lists.json";
import artifactVersioningLesson from "./devops/courses/devops/ci-cd-safe-delivery/artifact-versioning.json";
import artifactsIntroLesson from "./ai/courses/claude/claude-artifacts/artifacts-intro.json";
import artifactsWorkflowsLesson from "./ai/courses/claude/claude-artifacts/artifacts-workflows.json";
import aspnetApiGatewayGrpcLesson from "./architecture/problems/system-design/aspnet-system-design/aspnet-api-gateway-grpc.json";
import aspnetB01Lesson from "./interview-qa/01-beginner-questions/aspnet-b01.json";
import aspnetB02Lesson from "./interview-qa/01-beginner-questions/aspnet-b02.json";
import aspnetBackgroundJobsProcessingLesson from "./architecture/problems/system-design/aspnet-system-design/aspnet-background-jobs-processing.json";
import aspnetDatabaseScalingLesson from "./architecture/problems/system-design/aspnet-system-design/aspnet-database-scaling.json";
import aspnetDistributedCachingLesson from "./architecture/problems/system-design/aspnet-system-design/aspnet-distributed-caching.json";
import aspnetFiltersLesson from "./interview-qa/02-intermediate-questions/aspnet-filters.json";
import aspnetI01Lesson from "./interview-qa/02-intermediate-questions/aspnet-i01.json";
import aspnetI02Lesson from "./interview-qa/02-intermediate-questions/aspnet-i02.json";
import aspnetMessagingEventDrivenLesson from "./architecture/problems/system-design/aspnet-system-design/aspnet-messaging-event-driven.json";
import aspnetMicroservicesCommunicationLesson from "./architecture/problems/system-design/aspnet-system-design/aspnet-microservices-communication.json";
import aspnetResilienceCircuitBreakerLesson from "./architecture/problems/system-design/aspnet-system-design/aspnet-resilience-circuit-breaker.json";
import assemblyLoadingAndMetadataLesson from "./backend/courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/assembly-loading-and-metadata.json";
import assertionFrameworksLesson from "./backend/courses/unit-testing-dotnet/06-testing-patterns/assertion-frameworks.json";
import assertionsLesson from "./backend/courses/unit-testing-dotnet/02-xunit-basics/assertions.json";
import assetOptimizationLesson from "./architecture/courses/frontend-performance-engineering/build-optimization/asset-optimization.json";
import asyncAwaitLesson from "./backend/courses/csharp-fundamentals/05-advanced-features/async-await.json";
import asyncAwaitPatternsLesson from "./architecture/courses/design-patterns/05-concurrency-patterns/async-await-patterns.json";
import asyncIoVsCpuBoundWorkLesson from "./backend/courses/csharp-fundamentals/advanced-async-concurrency-threading/async-io-vs-cpu-bound-work.json";
import asyncTestingLesson from "./frontend/courses/react-testing/02-jest-basics/async-testing.json";
import asyncawaitExplainItThenExplainHowItCanCauseThreadStarvationLesson from "./interview-qa/c-net-follow-ups/asyncawait-explain-it-then-explain-how-it-can-cause-thread-starvation.json";
import atMostOnceVsAtLeastOnceDeliveryLesson from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/at-most-once-vs-at-least-once-delivery.json";
import athenaEmrLesson from "./devops/courses/aws/13-analytics-big-data/athena-emr.json";
import atmMachineLesson from "./architecture/problems/lld/atm-machine/atm-machine.json";
import attributeRoutingLesson from "./backend/courses/aspnet-core/03-routing-urls/attribute-routing.json";
import attributeRoutingLesson1 from "./backend/courses/aspnet-core-web-api/02-controllers-routing/attribute-routing.json";
import attributeRoutingLesson2 from "./backend/problems/aspnet-core/01-mvc-fundamentals-problems/attribute-routing.json";
import auditingLesson from "./database/courses/postgresql/security-hardening/auditing.json";
import authAndAuthorizationInMcpLesson from "./ai/courses/dotnet-ai-backend/04-mcp-servers-tools/auth-and-authorization-in-mcp.json";
import authBasicsLesson from "./backend/courses/aspnet-core/09-authentication-authorization/auth-basics.json";
import authBasicsLesson1 from "./backend/courses/graphql-dotnet/05-authentication/auth-basics.json";
import authFlowsTokenRefreshLesson from "./frontend/courses/react-query/09-real-world-patterns/auth-flows-token-refresh.json";
import authOverviewLesson from "./backend/courses/aspnet-core-web-api/07-authentication-basics/auth-overview.json";
import authOverviewLesson1 from "./backend/courses/authentication-authorization/01-auth-basics/auth-overview.json";
import auth0IntegrationLesson from "./backend/courses/authentication-authorization/08-sso-identity-providers/auth0-integration.json";
import authenticationAndAuthorizationBoundariesLesson from "./frontend/courses/next-js-full-stack-react/app-router-rendering/authentication-and-authorization-boundaries.json";
import authenticationFlowLesson from "./frontend/courses/redux/08-redux-real-world/authentication-flow.json";
import authenticationInApisLesson from "./frontend/courses/next-js-full-stack-react/full-stack-api-design/authentication-in-apis.json";
import authenticationModesLesson from "./database/courses/sql-server/17-security-hardening/authentication-modes.json";
import authenticationVsAuthorizationLesson from "./backend/courses/authentication-authorization/01-auth-basics/authentication-vs-authorization.json";
import authorizationLesson from "./backend/courses/graphql-dotnet/05-authentication/authorization.json";
import authorizationCodeFlowLesson from "./backend/courses/authentication-authorization/05-oauth2-flows-deep-dive/authorization-code-flow.json";
import authorizationCodeFlowWithPkceLesson from "./architecture/courses/fullstack-security/modern-web-security-identity/authorization-code-flow-with-pkce.json";
import authorizationPoliciesLesson from "./backend/courses/aspnet-core-web-api/07-authentication-basics/authorization-policies.json";
import autoPropertiesLesson from "./fundamentals/courses/oops-concepts/02-encapsulation-data-hiding/auto-properties.json";
import autoScalingLesson from "./architecture/courses/system-design-interviews/scalability-patterns/auto-scaling.json";
import autofixtureLesson from "./backend/courses/dotnet-nuget-packages/07-testing-quality/autofixture.json";
import autogenDotnetMultiAgentPatternsLesson from "./ai/courses/dotnet-ai-backend/05-ai-agents-dotnet/autogen-dotnet-multi-agent-patterns.json";
import automapperLesson from "./backend/courses/dotnet-nuget-packages/05-serialization-mapping/automapper.json";
import automatedBisectLesson from "./devops/courses/git-linux-developer-workflow/git-bisect-debugging/automated-bisect.json";
import automatedDlqProcessingLesson from "./architecture/courses/message-queues-event-streaming/dead-letter-queues/automated-dlq-processing.json";
import availabilityPatternsLesson from "./architecture/courses/system-design-interviews/consistency-availability/availability-patterns.json";
import avoidingUnsafeTypeAssertionsLesson from "./frontend/courses/typescript-for-react/advanced-type-modeling-runtime-safety/avoiding-unsafe-type-assertions.json";
import awsAccountSetupLesson from "./backend/courses/aws-for-aspnet/01-aws-for-dotnet-overview/aws-account-setup.json";
import awsAiServicesLesson from "./devops/courses/aws/14-ai-machine-learning/aws-ai-services.json";
import awsCdkLesson from "./devops/courses/aws/10-devops-cicd/aws-cdk.json";
import awsCloudtrailLesson from "./devops/courses/aws/11-monitoring-logging-observability/aws-cloudtrail.json";
import awsCodeToolsLesson from "./devops/courses/aws/10-devops-cicd/aws-code-tools.json";
import awsCodepipelineLesson from "./backend/courses/aws-for-aspnet/06-cloudwatch-cicd/aws-codepipeline.json";
import awsCostManagementLesson from "./backend/courses/aws-for-aspnet/06-cloudwatch-cicd/aws-cost-management.json";
import awsEcsFargateLesson from "./backend/courses/aws-for-aspnet/02-elastic-beanstalk-ecs-deployment/aws-ecs-fargate.json";
import awsGlobalInfrastructureLesson from "./devops/courses/aws/01-aws-fundamentals-cloud-concepts/aws-global-infrastructure.json";
import awsGlueEtlLesson from "./devops/courses/aws/13-analytics-big-data/aws-glue-etl.json";
import awsKmsSecretsManagerLesson from "./devops/courses/aws/12-security-services/aws-kms-secrets-manager.json";
import awsLambdaLesson from "./devops/courses/aws/08-serverless/aws-lambda.json";
import awsManagementToolsLesson from "./devops/courses/aws/01-aws-fundamentals-cloud-concepts/aws-management-tools.json";
import awsOrganizationsLesson from "./devops/courses/aws/02-identity-access-governance/aws-organizations.json";
import awsParameterStoreLesson from "./backend/courses/aws-for-aspnet/04-aws-secrets-manager/aws-parameter-store.json";
import awsSdkAppconfigLesson from "./devops/courses/aws/15-developer-tools-application-services/aws-sdk-appconfig.json";
import awsSdkCoreLesson from "./backend/courses/dotnet-nuget-packages/cloud-integration/aws-sdk-core.json";
import awsWellArchitectedFrameworkLesson from "./devops/courses/aws/01-aws-fundamentals-cloud-concepts/aws-well-architected-framework.json";
import awsXRayLesson from "./devops/courses/aws/11-monitoring-logging-observability/aws-x-ray.json";
import axiosLesson from "./frontend/courses/yarn-npm-packages/http-clients/axios.json";
import axiosReactLesson from "./frontend/courses/yarn-npm-packages/react-data-fetching/axios-react.json";
import azureAccountSetupLesson from "./backend/courses/azure-for-aspnet/01-azure-for-dotnet-overview/azure-account-setup.json";
import azureAdIntegrationLesson from "./backend/courses/authentication-authorization/08-sso-identity-providers/azure-ad-integration.json";
import azureAiFoundryAndModelBasedDevelopmentLesson from "./devops/courses/azure/13-ai-services-for-azure-developers/azure-ai-foundry-and-model-based-development.json";
import azureAiSearchAndAzureInferenceLesson from "./ai/courses/dotnet-ai-backend/02-rag-implementation/azure-ai-search-and-azure-inference.json";
import azureAiSearchOverviewLesson from "./devops/courses/azure/13-ai-services-for-azure-developers/azure-ai-search-overview.json";
import azureAiServicesOverviewLesson from "./devops/courses/azure/13-ai-services-for-azure-developers/azure-ai-services-overview.json";
import azureAiServicesVisionLanguageAndSpeechLesson from "./devops/courses/azure/13-ai-services-for-azure-developers/azure-ai-services-vision-language-and-speech.json";
import azureAppConfigurationOverviewLesson from "./devops/courses/azure/07-identity-security-and-configuration/azure-app-configuration-overview.json";
import azureArchitectureCostTradeOffsLesson from "./devops/courses/azure/production-architecture-reliability-cost/azure-architecture-cost-trade-offs.json";
import azureCacheForRedisOverviewLesson from "./devops/courses/azure/06-databases-and-caching/azure-cache-for-redis-overview.json";
import azureCliDeveloperToolingLesson from "./devops/courses/azure/01-azure-developer-foundations/azure-cli-developer-tooling.json";
import azureCloudShellLesson from "./devops/courses/azure/01-azure-developer-foundations/azure-cloud-shell.json";
import azureConfigurationLesson from "./backend/courses/azure-for-aspnet/04-azure-key-vault-secrets/azure-configuration.json";
import azureContainerRegistryOverviewLesson from "./devops/courses/azure/04-containers-and-container-platforms/azure-container-registry-overview.json";
import azureDeveloperWorkflowsLesson from "./devops/courses/azure/01-azure-developer-foundations/azure-developer-workflows.json";
import azureDevopsGithubActionsLesson from "./backend/courses/azure-for-aspnet/06-monitoring-caching-cicd/azure-devops-github-actions.json";
import azureDevopsOverviewLesson from "./devops/courses/azure/11-application-deployment-and-devops/azure-devops-overview.json";
import azureEventGridOverviewLesson from "./devops/courses/azure/09-messaging-and-event-driven-architecture/azure-event-grid-overview.json";
import azureEventHubsLesson from "./backend/courses/dotnet-nuget-packages/cloud-integration/azure-event-hubs.json";
import azureEventHubsOverviewLesson from "./devops/courses/azure/09-messaging-and-event-driven-architecture/azure-event-hubs-overview.json";
import azureFilesLesson from "./devops/courses/azure/05-storage-and-data-services/azure-files.json";
import azureFilesVsBlobStorageLesson from "./devops/problems/azure/04-azure-storage-problems/azure-files-vs-blob-storage.json";
import azureFrontDoorOverviewLesson from "./devops/courses/azure/08-networking-and-api-platforms/azure-front-door-overview.json";
import azureFunctionsOverviewLesson from "./devops/courses/azure/03-serverless-and-azure-functions/azure-functions-overview.json";
import azureFunctionsVsAppServiceLesson from "./devops/problems/azure/03-azure-serverless-problems/azure-functions-vs-app-service.json";
import azureIdentityLesson from "./backend/courses/dotnet-nuget-packages/cloud-integration/azure-identity.json";
import azureKeyVaultOverviewLesson from "./devops/courses/azure/07-identity-security-and-configuration/azure-key-vault-overview.json";
import azureKeyvaultLesson from "./backend/courses/dotnet-nuget-packages/cloud-integration/azure-keyvault.json";
import azureMlVsAiServicesLesson from "./devops/problems/azure/08-azure-ai-services-problems/azure-ml-vs-ai-services.json";
import azureMonitorLogsAndKqlLesson from "./devops/courses/azure/10-observability-and-application-monitoring/azure-monitor-logs-and-kql.json";
import azureMonitorOverviewLesson from "./devops/courses/azure/10-observability-and-application-monitoring/azure-monitor-overview.json";
import azureMonitoringStrategyLogsMetricsAndTracesLesson from "./devops/courses/azure/production-architecture-reliability-cost/azure-monitoring-strategy-logs-metrics-and-traces.json";
import azureOpenaiChatAndCompletionsLesson from "./devops/courses/azure/13-ai-services-for-azure-developers/azure-openai-chat-and-completions.json";
import azureOpenaiEmbeddingsAndGroundingLesson from "./devops/courses/azure/13-ai-services-for-azure-developers/azure-openai-embeddings-and-grounding.json";
import azureOpenaiServiceOverviewLesson from "./devops/courses/azure/13-ai-services-for-azure-developers/azure-openai-service-overview.json";
import azureOpenaiVsCognitiveServicesLesson from "./devops/problems/azure/08-azure-ai-services-problems/azure-openai-vs-cognitive-services.json";
import azurePipelinesCiCdLesson from "./devops/courses/azure/11-application-deployment-and-devops/azure-pipelines-ci-cd.json";
import azurePortalAndCloudShellLesson from "./devops/courses/azure/01-azure-developer-foundations/azure-portal-and-cloud-shell.json";
import azurePricingAndCostManagementLesson from "./devops/problems/azure/01-azure-foundations-problems/azure-pricing-and-cost-management.json";
import azureRbacScopesAndRolesLesson from "./devops/courses/azure/07-identity-security-and-configuration/azure-rbac-scopes-and-roles.json";
import azureRegionsAvailabilityZonesLesson from "./devops/courses/azure/01-azure-developer-foundations/azure-regions-availability-zones.json";
import azureReposAndAzurePipelinesLesson from "./devops/courses/azure/11-application-deployment-and-devops/azure-repos-and-azure-pipelines.json";
import azureResourceHierarchyLesson from "./devops/courses/azure/01-azure-developer-foundations/azure-resource-hierarchy.json";
import azureResourceManagerLesson from "./devops/courses/azure/01-azure-developer-foundations/azure-resource-manager.json";
import azureServiceBasicsLesson from "./architecture/courses/message-queues-event-streaming/message-queue-fundamentals/azure-service-basics.json";
import azureServiceBusOverviewLesson from "./devops/courses/azure/09-messaging-and-event-driven-architecture/azure-service-bus-overview.json";
import azureServicebusLesson from "./backend/courses/dotnet-nuget-packages/cloud-integration/azure-servicebus.json";
import azureSqlAuthenticationAndAuthorizationLesson from "./devops/courses/azure/06-databases-and-caching/azure-sql-authentication-and-authorization.json";
import azureSqlBackupHighAvailabilityAndResilienceLesson from "./devops/courses/azure/06-databases-and-caching/azure-sql-backup-high-availability-and-resilience.json";
import azureSqlDatabaseLesson from "./database/courses/sql-server/20-azure-sql/azure-sql-database.json";
import azureSqlDatabaseConnectivityLesson from "./devops/courses/azure/06-databases-and-caching/azure-sql-database-connectivity.json";
import azureSqlDatabaseOverviewLesson from "./devops/courses/azure/06-databases-and-caching/azure-sql-database-overview.json";
import azureSqlIntroLesson from "./backend/courses/azure-for-aspnet/05-azure-sql-ef-core/azure-sql-intro.json";
import azureSqlManagedInstanceLesson from "./database/courses/sql-server/20-azure-sql/azure-sql-managed-instance.json";
import azureSqlQueryPerformanceAndScalingLesson from "./devops/courses/azure/06-databases-and-caching/azure-sql-query-performance-and-scaling.json";
import azureSqlVsCosmosDbLesson from "./devops/courses/azure/06-databases-and-caching/azure-sql-vs-cosmos-db.json";
import azureSqlVsCosmosDbLesson1 from "./devops/problems/azure/05-azure-databases-problems/azure-sql-vs-cosmos-db.json";
import azureStorageBlobsLesson from "./backend/courses/dotnet-nuget-packages/cloud-integration/azure-storage-blobs.json";
import azureStorageIntroLesson from "./backend/courses/azure-for-aspnet/03-azure-storage-blobs-queues/azure-storage-intro.json";
import azureStorageOverviewLesson from "./devops/courses/azure/05-storage-and-data-services/azure-storage-overview.json";
import azureWorkloadScalingStrategiesLesson from "./devops/courses/azure/production-architecture-reliability-cost/azure-workload-scaling-strategies.json";
import bTreeIndexesAndPageStructureLesson from "./database/courses/sql-server/database-internals-query-optimization/b-tree-indexes-and-page-structure.json";
import babelLesson from "./frontend/courses/yarn-npm-packages/build-tools/babel.json";
import backendForFrontendBffLesson from "./architecture/courses/microservices-architecture/api-gateway-patterns/backend-for-frontend-bff.json";
import backgroundRefetchingLesson from "./frontend/courses/react-query/05-caching-strategies/background-refetching.json";
import backgroundServiceLesson from "./backend/courses/dotnet-nuget-packages/06-messaging-events/background-service.json";
import backgroundSyncLesson from "./frontend/courses/react-query/06-offline-support-persistence/background-sync.json";
import backgroundserviceAndHostedWorkloadsLesson from "./backend/courses/aspnet-core/asp-net-core-internals-production-hosting/backgroundservice-and-hosted-workloads.json";
import backpressureLesson from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/backpressure.json";
import backupAndRecoveryLesson from "./devops/courses/git-linux-developer-workflow/advanced-git-workflows/backup-and-recovery.json";
import backupArchivingLesson from "./devops/courses/aws/05-storage-services/backup-archiving.json";
import backupRestoreStrategiesLesson from "./database/courses/sql-server/18-high-availability-dr/backup-restore-strategies.json";
import backwardCompatibleDeploymentsLesson from "./devops/courses/devops/ci-cd-safe-delivery/backward-compatible-deployments.json";
import bandwidthEstimationLesson from "./architecture/courses/system-design-interviews/capacity-estimation/bandwidth-estimation.json";
import bankingAppLesson from "./architecture/problems/lld/banking-app/banking-app.json";
import barrierPatternLesson from "./architecture/courses/design-patterns/05-concurrency-patterns/barrier-pattern.json";
import baselineHealthyApplicationAndTelemetryLesson from "./architecture/problems/full-stack-senior-projects/project-3-production-incident-simulator/baseline-healthy-application-and-telemetry.json";
import basicPromptingForCodeLesson from "./ai/courses/codex/prompt-engineering-for-code/basic-prompting-for-code.json";
import basicTypesLesson from "./frontend/courses/typescript-for-react/01-typescript-basics/basic-types.json";
import bcnfExercisesLesson from "./database/problems/database-design/normalization-exercises/bcnf-exercises.json";
import bcryptLesson from "./backend/courses/dotnet-nuget-packages/08-security-cryptography/bcrypt.json";
import bcryptNetLesson from "./backend/courses/dotnet-nuget-packages/08-security-cryptography/bcrypt-net.json";
import beforeAfterTriggersLesson from "./database/courses/postgresql/triggers/before-after-triggers.json";
import beginnerQ1Lesson from "./interview-qa/01-beginner-questions/beginner-q1.json";
import beginnerQ10Lesson from "./interview-qa/01-beginner-questions/beginner-q10.json";
import beginnerQ11Lesson from "./interview-qa/01-beginner-questions/beginner-q11.json";
import beginnerQ12Lesson from "./interview-qa/01-beginner-questions/beginner-q12.json";
import beginnerQ13Lesson from "./interview-qa/01-beginner-questions/beginner-q13.json";
import beginnerQ14Lesson from "./interview-qa/01-beginner-questions/beginner-q14.json";
import beginnerQ15Lesson from "./interview-qa/01-beginner-questions/beginner-q15.json";
import beginnerQ16Lesson from "./interview-qa/01-beginner-questions/beginner-q16.json";
import beginnerQ17Lesson from "./interview-qa/01-beginner-questions/beginner-q17.json";
import beginnerQ18Lesson from "./interview-qa/01-beginner-questions/beginner-q18.json";
import beginnerQ19Lesson from "./interview-qa/01-beginner-questions/beginner-q19.json";
import beginnerQ2Lesson from "./interview-qa/01-beginner-questions/beginner-q2.json";
import beginnerQ20Lesson from "./interview-qa/01-beginner-questions/beginner-q20.json";
import beginnerQ21Lesson from "./interview-qa/01-beginner-questions/beginner-q21.json";
import beginnerQ3Lesson from "./interview-qa/01-beginner-questions/beginner-q3.json";
import beginnerQ4Lesson from "./interview-qa/01-beginner-questions/beginner-q4.json";
import beginnerQ5Lesson from "./interview-qa/01-beginner-questions/beginner-q5.json";
import beginnerQ6Lesson from "./interview-qa/01-beginner-questions/beginner-q6.json";
import beginnerQ7Lesson from "./interview-qa/01-beginner-questions/beginner-q7.json";
import beginnerQ8Lesson from "./interview-qa/01-beginner-questions/beginner-q8.json";
import beginnerQ9Lesson from "./interview-qa/01-beginner-questions/beginner-q9.json";
import behB01Lesson from "./interview-qa/04-scenario-based/beh-b01.json";
import benchmarkDotnetLesson from "./backend/courses/dotnet-nuget-packages/advanced-patterns/benchmark-dotnet.json";
import bestPracticesLesson from "./frontend/courses/react-testing/05-e2e-testing/best-practices.json";
import bestTimeToBuyAndSellStockLesson from "./backend/problems/csharp/01-array-problems/best-time-to-buy-and-sell-stock.json";
import bestTimeToBuyAndSellStockLesson1 from "./backend/problems/csharp/05-dynamic-programming-problems/best-time-to-buy-and-sell-stock.json";
import bestTimeToBuyAndSellStockIiLesson from "./backend/problems/csharp/05-dynamic-programming-problems/best-time-to-buy-and-sell-stock-ii.json";
import bestWaysBulkInsertsEntityFrameworkLesson from "./backend/courses/ef-core/12-performance-bulk-operations/best-ways-bulk-inserts-entity-framework.json";
import betweenInLikeLesson from "./database/courses/postgresql/querying-data/between-in-like.json";
import bicepDependenciesAndResourceReferencesLesson from "./devops/courses/azure/12-infrastructure-as-code-and-automation/bicep-dependencies-and-resource-references.json";
import bicepDeploymentAndValidationLesson from "./devops/courses/azure/12-infrastructure-as-code-and-automation/bicep-deployment-and-validation.json";
import bicepModulesAndReusableInfrastructureLesson from "./devops/courses/azure/12-infrastructure-as-code-and-automation/bicep-modules-and-reusable-infrastructure.json";
import bicepOverviewLesson from "./devops/courses/azure/12-infrastructure-as-code-and-automation/bicep-overview.json";
import bicepParametersVariablesAndOutputsLesson from "./devops/courses/azure/12-infrastructure-as-code-and-automation/bicep-parameters-variables-and-outputs.json";
import bicepResourcesAndPropertiesLesson from "./devops/courses/azure/12-infrastructure-as-code-and-automation/bicep-resources-and-properties.json";
import bicepWithAppServiceFunctionsAndStorageLesson from "./devops/courses/azure/12-infrastructure-as-code-and-automation/bicep-with-app-service-functions-and-storage.json";
import bicepWithDatabasesAndMessagingLesson from "./devops/courses/azure/12-infrastructure-as-code-and-automation/bicep-with-databases-and-messaging.json";
import bicepWithManagedIdentitiesAndRbacLesson from "./devops/courses/azure/12-infrastructure-as-code-and-automation/bicep-with-managed-identities-and-rbac.json";
import bicepWithNetworkingAndPrivateEndpointsLesson from "./devops/courses/azure/12-infrastructure-as-code-and-automation/bicep-with-networking-and-private-endpoints.json";
import binarySearchLesson from "./backend/problems/csharp/06-sorting-searching-problems/binary-search.json";
import binaryTreeLevelOrderTraversalLesson from "./backend/problems/csharp/04-tree-graph-problems/binary-tree-level-order-traversal.json";
import binaryTreeMaximumPathSumLesson from "./backend/problems/csharp/04-tree-graph-problems/binary-tree-maximum-path-sum.json";
import binaryTreeRightSideViewLesson from "./backend/problems/csharp/04-tree-graph-problems/binary-tree-right-side-view.json";
import binaryTreeZigzagLevelOrderTraversalLesson from "./backend/problems/csharp/04-tree-graph-problems/binary-tree-zigzag-level-order-traversal.json";
import bindingSourcesLesson from "./backend/courses/aspnet-core/04-model-binding-validation/binding-sources.json";
import bisectFundamentalsLesson from "./devops/courses/git-linux-developer-workflow/git-bisect-debugging/bisect-fundamentals.json";
import bisectWithScriptsLesson from "./devops/courses/git-linux-developer-workflow/git-bisect-debugging/bisect-with-scripts.json";
import blamelessPostmortemsLesson from "./fundamentals/courses/senior-software-engineering/production-ownership/blameless-postmortems.json";
import blobContainersObjectsAndMetadataLesson from "./devops/courses/azure/05-storage-and-data-services/blob-containers-objects-and-metadata.json";
import blobSasAndUserDelegationSasLesson from "./devops/courses/azure/05-storage-and-data-services/blob-sas-and-user-delegation-sas.json";
import blobStorageAccessTiersLesson from "./devops/problems/azure/04-azure-storage-problems/blob-storage-access-tiers.json";
import blobStorageAccessTiersAndLifecycleLesson from "./devops/courses/azure/05-storage-and-data-services/blob-storage-access-tiers-and-lifecycle.json";
import blobStorageBasicsLesson from "./devops/courses/azure/05-storage-and-data-services/blob-storage-basics.json";
import blobStorageCsharpLesson from "./backend/courses/azure-for-aspnet/03-azure-storage-blobs-queues/blob-storage-csharp.json";
import blobStorageFromApplicationsLesson from "./devops/courses/azure/05-storage-and-data-services/blob-storage-from-applications.json";
import blockFileStorageLesson from "./devops/courses/aws/05-storage-services/block-file-storage.json";
import bloomFiltersLesson from "./architecture/courses/redis-caching-strategies/redis-use-cases/bloom-filters.json";
import blueGreenCanaryAndRollingDeploymentsLesson from "./devops/courses/azure/11-application-deployment-and-devops/blue-green-canary-and-rolling-deployments.json";
import blueGreenDeploymentsLesson from "./devops/courses/devops/ci-cd-safe-delivery/blue-green-deployments.json";
import bogusLesson from "./backend/courses/dotnet-nuget-packages/07-testing-quality/bogus.json";
import bookingApiLesson from "./backend/problems/api-design/rest-api-design-scenarios/booking-api.json";
import bookingSystemSchemaLesson from "./database/problems/database-design/schema-design-scenarios/booking-system-schema.json";
import boxingAndHiddenAllocationsLesson from "./backend/courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/boxing-and-hidden-allocations.json";
import boxingUnboxingLesson from "./interview-qa/01-beginner-questions/boxing-unboxing.json";
import branchingStrategiesLesson from "./devops/courses/git-linux-developer-workflow/git-workflows/branching-strategies.json";
import branchingStrategiesAndTrunkBasedDevelopmentLesson from "./devops/courses/git-linux-developer-workflow/git-for-senior-engineers/branching-strategies-and-trunk-based-development.json";
import breakingChangesLesson from "./backend/problems/api-design/api-versioning-problems/breaking-changes.json";
import breakingDownLargeTechnicalInitiativesLesson from "./fundamentals/courses/senior-software-engineering/technical-leadership/breaking-down-large-technical-initiatives.json";
import brokenAccessControlAndIdorbolaLesson from "./architecture/courses/fullstack-security/modern-web-security-identity/broken-access-control-and-idorbola.json";
import brokerDecisionFrameworkLesson from "./architecture/courses/message-queues-event-streaming/message-broker-selection/broker-decision-framework.json";
import brokerMigrationLesson from "./architecture/courses/message-queues-event-streaming/message-broker-selection/broker-migration.json";
import brokerOperationalComplexityLesson from "./architecture/courses/message-queues-event-streaming/message-broker-selection/broker-operational-complexity.json";
import brokerPerformanceLesson from "./architecture/courses/message-queues-event-streaming/message-broker-selection/broker-performance.json";
import brokerUseCaseAnalysisLesson from "./architecture/courses/message-queues-event-streaming/message-broker-selection/broker-use-case-analysis.json";
import btreeIndexesLesson from "./database/courses/postgresql/indexes/btree-indexes.json";
import btreeVsHashIndexLesson from "./database/problems/database-design/index-optimization/btree-vs-hash-index.json";
import buildCachingLesson from "./architecture/courses/frontend-performance-engineering/build-optimization/build-caching.json";
import buildPipelineLesson from "./architecture/courses/frontend-performance-engineering/build-optimization/build-pipeline.json";
import buildTestPackageDeployPipelineDesignLesson from "./devops/courses/devops/ci-cd-safe-delivery/build-test-package-deploy-pipeline-design.json";
import buildVsBuyDecisionsLesson from "./architecture/courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/build-vs-buy-decisions.json";
import builderPatternLesson from "./architecture/courses/clean-code-csharp/02-creational-patterns/builder-pattern.json";
import builderPatternLesson1 from "./architecture/courses/design-patterns/01-creational-patterns/builder-pattern.json";
import buildingARepeatableProductionInvestigationWorkflowLesson from "./devops/courses/git-linux-developer-workflow/linux-production-troubleshooting/building-a-repeatable-production-investigation-workflow.json";
import buildingAiAgentsLesson from "./ai/courses/codex/agentic-workflows/building-ai-agents.json";
import buildingAiPoweredAppsOnAzureLesson from "./devops/problems/azure/08-azure-ai-services-problems/building-ai-powered-apps-on-azure.json";
import buildingHookLibrariesLesson from "./frontend/courses/react-advanced-patterns/07-custom-hooks-architecture/building-hook-libraries.json";
import buildingWithArtifactsLesson from "./ai/courses/claude/claude-artifacts/building-with-artifacts.json";
import buildingYourAiStackLesson from "./ai/courses/ai-basics/personal-ai-stack/building-your-ai-stack.json";
import buildingYourClaudeToolkitLesson from "./ai/courses/claude/mastering-claude/building-your-claude-toolkit.json";
import buildingYourFirstMcpServerLesson from "./ai/courses/dotnet-ai-backend/03-mcp-fundamentals/building-your-first-mcp-server.json";
import buildingYourFirstWorkflowLesson from "./ai/courses/ai-basics/ai-workflows/building-your-first-workflow.json";
import builtInMiddlewareLesson from "./backend/courses/aspnet-core/07-middleware-pipeline/built-in-middleware.json";
import builtInMiddlewareLesson1 from "./backend/courses/aspnet-core-web-api/04-middleware/built-in-middleware.json";
import bulkOperationsAndLargeDataChangesLesson from "./backend/courses/ef-core/ef-core-performance-orm-trade-offs/bulk-operations-and-large-data-changes.json";
import bulkheadPatternLesson from "./architecture/courses/microservices-architecture/resilience-patterns/bulkhead-pattern.json";
import bulkheadsAndLoadSheddingLesson from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/bulkheads-and-load-shedding.json";
import bundleAnalysisLesson from "./architecture/courses/frontend-performance-engineering/build-optimization/bundle-analysis.json";
import bundleAnalysisAndCodeSplittingLesson from "./architecture/courses/frontend-performance-engineering/browser-react-performance/bundle-analysis-and-code-splitting.json";
import bundlerFundamentalsLesson from "./architecture/courses/frontend-performance-engineering/build-optimization/bundler-fundamentals.json";
import burstBalloonsLesson from "./backend/problems/csharp/05-dynamic-programming-problems/burst-balloons.json";
import businessLogicErrorsLesson from "./backend/problems/api-design/error-handling-design/business-logic-errors.json";
import cacheAsidePatternLesson from "./architecture/courses/redis-caching-strategies/caching-patterns/cache-aside-pattern.json";
import cacheBasicsLesson from "./frontend/courses/apollo/03-caching/cache-basics.json";
import cacheCoherenceLesson from "./architecture/courses/system-design-interviews/caching-strategies/cache-coherence.json";
import cacheConfigurationLesson from "./frontend/courses/apollo/05-client-side-caching-advanced/cache-configuration.json";
import cacheConfigurationLesson1 from "./frontend/courses/react-query/05-caching-strategies/cache-configuration.json";
import cacheInvalidationLesson from "./architecture/courses/system-design-interviews/caching-strategies/cache-invalidation.json";
import cacheInvalidationLesson1 from "./frontend/courses/react-query/05-caching-strategies/cache-invalidation.json";
import cacheMiddlewareLesson from "./architecture/courses/redis-caching-strategies/caching-in-nodejs/cache-middleware.json";
import cachePersistenceLesson from "./frontend/courses/react-query/05-caching-strategies/cache-persistence.json";
import cacheRedirectsLesson from "./frontend/courses/apollo/05-client-side-caching-advanced/cache-redirects.json";
import cacheStampedePreventionLesson from "./architecture/courses/redis-caching-strategies/cache-invalidation/cache-stampede-prevention.json";
import cacheTagInvalidationLesson from "./architecture/courses/redis-caching-strategies/caching-in-aspnet-core/cache-tag-invalidation.json";
import cacheUpdatesLesson from "./frontend/courses/apollo/03-caching/cache-updates.json";
import cacheWarmingLesson from "./architecture/courses/redis-caching-strategies/cache-invalidation/cache-warming.json";
import cachingLesson from "./backend/courses/graphql-dotnet/06-performance/caching.json";
import cachingAndRevalidationLesson from "./frontend/courses/next-js-full-stack-react/app-router-rendering/caching-and-revalidation.json";
import cachingCostAndTokenManagementLesson from "./ai/courses/dotnet-ai-backend/06-production-patterns/caching-cost-and-token-management.json";
import cachingForScaleLesson from "./architecture/courses/system-design-interviews/scalability-patterns/caching-for-scale.json";
import cachingProfilingLesson from "./architecture/courses/redis-caching-strategies/caching-in-aspnet-core/caching-profiling.json";
import cachingStrategiesLesson from "./frontend/courses/next-js-full-stack-react/data-fetching-patterns/caching-strategies.json";
import canaryReleasesLesson from "./devops/courses/devops/ci-cd-safe-delivery/canary-releases.json";
import cancellationtokenDesignLesson from "./backend/courses/csharp-fundamentals/advanced-async-concurrency-threading/cancellationtoken-design.json";
import capTheoremLesson from "./architecture/courses/system-design-interviews/consistency-availability/cap-theorem.json";
import capTheoremLesson1 from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/cap-theorem.json";
import capacityEstimationLesson from "./architecture/courses/system-design-interviews/system-design-framework/capacity-estimation.json";
import capacityPlanningLesson from "./devops/courses/git-linux-developer-workflow/production-readiness/capacity-planning.json";
import capacityPlanningLesson1 from "./fundamentals/courses/senior-software-engineering/production-ownership/capacity-planning.json";
import capacityPlanningLesson2 from "./fundamentals/courses/senior-software-engineering/system-design-for-seniors/capacity-planning.json";
import capstoneBackendAiProjectLesson from "./ai/courses/dotnet-ai-backend/06-production-patterns/capstone-backend-ai-project.json";
import careerGrowthQuestionsLesson from "./interview-qa/behavioral-interview-questions/career-growth-questions.json";
import cartesianExplosionAndSplitQueriesLesson from "./backend/courses/ef-core/ef-core-performance-orm-trade-offs/cartesian-explosion-and-split-queries.json";
import cdnArchitectureLesson from "./fundamentals/courses/programming-computer-web-foundations/networking-protocols/cdn-architecture.json";
import cdnCachingLesson from "./architecture/courses/system-design-interviews/caching-strategies/cdn-caching.json";
import cdnReverseProxyAndLoadBalancerLesson from "./fundamentals/courses/programming-computer-web-foundations/web-networking-fundamentals/cdn-reverse-proxy-and-load-balancer.json";
import chainOfResponsibilityLesson from "./architecture/courses/clean-code-csharp/04-behavioral-patterns/chain-of-responsibility.json";
import chainOfThoughtPromptingLesson from "./ai/courses/ai-basics/advanced-prompting/chain-of-thought-prompting.json";
import changeTrackingLesson from "./backend/courses/ef-core/06-change-tracking/change-tracking.json";
import channelsAndProducerConsumerPipelinesLesson from "./backend/courses/csharp-fundamentals/advanced-async-concurrency-threading/channels-and-producer-consumer-pipelines.json";
import chatAssistantsForCodingLesson from "./ai/courses/codex/ai-coding-tools/chat-assistants-for-coding.json";
import chatSystemDesignLesson from "./architecture/courses/system-design-interviews/common-system-designs/chat-system-design.json";
import chatSystemHldLesson from "./architecture/problems/hld/chat-system-hld/chat-system-hld.json";
import chatbotLandscapeLesson from "./ai/courses/ai-basics/ai-tools-overview/chatbot-landscape.json";
import chatgptGuideLesson from "./ai/courses/ai-basics/chatbots-in-depth/chatgpt-guide.json";
import cheatsheetLesson from "./backend/cheatsheet/aspnet-core/cheatsheet.json";
import cheatsheetLesson1 from "./backend/cheatsheet/csharp/cheatsheet.json";
import cheatsheetLesson2 from "./backend/cheatsheet/ef-core/cheatsheet.json";
import cheatsheetLesson3 from "./backend/cheatsheet/graphql/cheatsheet.json";
import cheatsheetLesson4 from "./backend/cheatsheet/linq/cheatsheet.json";
import cheatsheetLesson5 from "./database/cheatsheet/sql-server/cheatsheet.json";
import cheatsheetLesson6 from "./devops/cheatsheet/aws/cheatsheet.json";
import cheatsheetLesson7 from "./devops/cheatsheet/azure/cheatsheet.json";
import cheatsheetLesson8 from "./devops/cheatsheet/docker-compose/cheatsheet.json";
import cheatsheetLesson9 from "./frontend/cheatsheet/apollo/cheatsheet.json";
import cheatsheetLesson10 from "./frontend/cheatsheet/javascript/cheatsheet.json";
import cheatsheetLesson11 from "./frontend/cheatsheet/react/cheatsheet.json";
import cheatsheetLesson12 from "./frontend/cheatsheet/react-router/cheatsheet.json";
import cheatsheetLesson13 from "./frontend/cheatsheet/redux/cheatsheet.json";
import cheatsheetLesson14 from "./frontend/cheatsheet/typescript/cheatsheet.json";
import checkIfArrayIsSortedLesson from "./backend/problems/csharp/01-array-problems/check-if-array-is-sorted.json";
import cherryPickRevertAndResetLesson from "./devops/courses/git-linux-developer-workflow/git-for-senior-engineers/cherry-pick-revert-and-reset.json";
import chooseAwsServiceLesson from "./backend/courses/aws-for-aspnet/01-aws-for-dotnet-overview/choose-aws-service.json";
import chooseAzureServiceLesson from "./backend/courses/azure-for-aspnet/01-azure-for-dotnet-overview/choose-azure-service.json";
import choosingAWorkflowLesson from "./devops/courses/git-linux-developer-workflow/git-workflows/choosing-a-workflow.json";
import choosingAnAzureHostingModelLesson from "./devops/courses/azure/02-compute-and-app-hosting/choosing-an-azure-hosting-model.json";
import choosingAzureRegionAndAvailabilityZoneLesson from "./devops/problems/azure/01-azure-foundations-problems/choosing-azure-region-and-availability-zone.json";
import choosingBetweenVmAndAppServiceLesson from "./devops/problems/azure/02-azure-compute-problems/choosing-between-vm-and-app-service.json";
import choosingStateOwnershipBoundariesLesson from "./frontend/courses/react-advanced-patterns/modern-state-application-architecture/choosing-state-ownership-boundaries.json";
import choosingTheRightStructureLesson from "./fundamentals/courses/programming-computer-web-foundations/data-structures-deep-dive/choosing-the-right-structure.json";
import choosingTheRightToolLesson from "./ai/courses/ai-basics/ai-tools-overview/choosing-the-right-tool.json";
import choreographyVsOrchestrationLesson from "./architecture/courses/microservices-architecture/distributed-transactions/choreography-vs-orchestration.json";
import chunkingAndEmbeddingDocumentsLesson from "./ai/courses/dotnet-ai-backend/02-rag-implementation/chunking-and-embedding-documents.json";
import ciCdForAppServiceLesson from "./devops/courses/azure/11-application-deployment-and-devops/ci-cd-for-app-service.json";
import ciCdForContainersAndAcrLesson from "./devops/courses/azure/11-application-deployment-and-devops/ci-cd-for-containers-and-acr.json";
import ciCdForFunctionsLesson from "./devops/courses/azure/11-application-deployment-and-devops/ci-cd-for-functions.json";
import cicdQ1Lesson from "./interview-qa/09-cicd-pipelines/cicd-q1.json";
import cicdQ2Lesson from "./interview-qa/09-cicd-pipelines/cicd-q2.json";
import cicdQ3Lesson from "./interview-qa/09-cicd-pipelines/cicd-q3.json";
import cicdQ4Lesson from "./interview-qa/09-cicd-pipelines/cicd-q4.json";
import circuitBreakerPatternLesson from "./architecture/courses/microservices-architecture/resilience-patterns/circuit-breaker-pattern.json";
import claimsBasedAuthorizationLesson from "./backend/courses/authentication-authorization/06-advanced-authorization/claims-based-authorization.json";
import clarifyingAmbiguousRequirementsLesson from "./architecture/courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/clarifying-ambiguous-requirements.json";
import clarifyingQuestionsLesson from "./architecture/courses/system-design-interviews/system-design-framework/clarifying-questions.json";
import classesObjectsLesson from "./backend/courses/csharp-fundamentals/04-oop/classes-objects.json";
import classesObjectsLesson1 from "./fundamentals/courses/oops-concepts/01-oop-fundamentals/classes-objects.json";
import claudeApiBasicsLesson from "./ai/courses/claude/claude-api-and-integrations/claude-api-basics.json";
import claudeForCodeLesson from "./ai/courses/codex/ai-coding-tools/claude-for-code.json";
import claudeInYourWorkflowLesson from "./ai/courses/claude/claude-api-and-integrations/claude-in-your-workflow.json";
import claudeInterfaceTourLesson from "./ai/courses/claude/getting-started/claude-interface-tour.json";
import claudeLimitationsLesson from "./ai/courses/claude/mastering-claude/claude-limitations.json";
import claudePhilosophyAndSafetyLesson from "./ai/courses/claude/what-is-claude/claude-philosophy-and-safety.json";
import claudeVsOtherChatbotsLesson from "./ai/courses/claude/what-is-claude/claude-vs-other-chatbots.json";
import cleanArchitectureLesson from "./architecture/courses/clean-code-csharp/06-architecture-patterns/clean-architecture.json";
import cleanArchitectureLesson1 from "./architecture/courses/design-patterns/06-architectural-patterns/clean-architecture.json";
import cleanupFunctionsLesson from "./frontend/courses/react-fundamentals/05-lifecycle-effects/cleanup-functions.json";
import clientConfigLesson from "./architecture/courses/redis-caching-strategies/caching-in-nodejs/client-config.json";
import clientCredentialsFlowLesson from "./backend/courses/authentication-authorization/05-oauth2-flows-deep-dive/client-credentials-flow.json";
import clientCredentialsForServiceToServiceCallsLesson from "./architecture/courses/fullstack-security/modern-web-security-identity/client-credentials-for-service-to-service-calls.json";
import clientEvaluationAndTranslationFailuresLesson from "./backend/courses/ef-core/ef-core-performance-orm-trade-offs/client-evaluation-and-translation-failures.json";
import clientSideDataFetchingLesson from "./frontend/courses/next-js-full-stack-react/data-fetching-patterns/client-side-data-fetching.json";
import clientSideDiscoveryLesson from "./architecture/courses/microservices-architecture/service-discovery/client-side-discovery.json";
import clientSideResolversLesson from "./frontend/courses/apollo/08-local-state-management/client-side-resolvers.json";
import clientSideValidationLesson from "./backend/courses/aspnet-core/04-model-binding-validation/client-side-validation.json";
import climbingStairsLesson from "./backend/problems/csharp/05-dynamic-programming-problems/climbing-stairs.json";
import cloneGraphLesson from "./backend/problems/csharp/04-tree-graph-problems/clone-graph.json";
import cloudDeploymentLesson from "./backend/courses/aspnet-core/12-deployment-production/cloud-deployment.json";
import cloudformationIacLesson from "./devops/courses/aws/10-devops-cicd/cloudformation-iac.json";
import cloudfrontCdnLesson from "./devops/courses/aws/04-networking/cloudfront-cdn.json";
import cloudwatchCsharpLesson from "./backend/courses/aws-for-aspnet/06-cloudwatch-cicd/cloudwatch-csharp.json";
import cloudwatchIntroLesson from "./backend/courses/aws-for-aspnet/06-cloudwatch-cicd/cloudwatch-intro.json";
import clrArchitectureAndExecutionModelLesson from "./backend/courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/clr-architecture-and-execution-model.json";
import clrCtsClsLesson from "./interview-qa/01-beginner-questions/clr-cts-cls.json";
import clusterTopologyShardingLesson from "./architecture/courses/redis-caching-strategies/distributed-caching/cluster-topology-sharding.json";
import clusteredVsNonclusteredIndexesLesson from "./database/courses/sql-server/database-internals-query-optimization/clustered-vs-nonclustered-indexes.json";
import codeFirstDbFirstLesson from "./interview-qa/02-intermediate-questions/code-first-db-first.json";
import codeOrganizationLesson from "./architecture/courses/clean-code-csharp/05-clean-code-practices/code-organization.json";
import codeReviewWithAiLesson from "./ai/courses/codex/practical-ai-workflows/code-review-with-ai.json";
import codeSplittingLesson from "./architecture/courses/frontend-performance-engineering/build-optimization/code-splitting.json";
import codeSplittingLesson1 from "./frontend/courses/redux/07-redux-advanced-concepts/code-splitting.json";
import codeSplittingLesson2 from "./frontend/courses/yarn-npm-packages/react-performance/code-splitting.json";
import codeSplittingLazyLesson from "./frontend/courses/react-advanced-patterns/06-performance-patterns/code-splitting-lazy.json";
import cognitoCsharpLesson from "./backend/courses/aws-for-aspnet/08-lambda-serverless/cognito-csharp.json";
import coinChangeLesson from "./backend/problems/csharp/05-dynamic-programming-problems/coin-change.json";
import collectionsLesson from "./backend/courses/csharp-fundamentals/05-advanced-features/collections.json";
import combinationSumIvLesson from "./backend/problems/csharp/05-dynamic-programming-problems/combination-sum-iv.json";
import commandPatternLesson from "./architecture/courses/clean-code-csharp/04-behavioral-patterns/command-pattern.json";
import commandPatternLesson1 from "./architecture/courses/design-patterns/03-behavioral-patterns/command-pattern.json";
import commitHygieneAndReleaseBranchesLesson from "./devops/courses/git-linux-developer-workflow/git-for-senior-engineers/commit-hygiene-and-release-branches.json";
import commitMsgHooksLesson from "./devops/courses/git-linux-developer-workflow/git-hooks/commit-msg-hooks.json";
import commonBehavioralTrapsLesson from "./interview-qa/behavioral-interview-questions/common-behavioral-traps.json";
import commonDataStructuresAndWhenToUseThemLesson from "./fundamentals/courses/programming-computer-web-foundations/programming-computer-fundamentals/common-data-structures-and-when-to-use-them.json";
import commonPitfallsLesson from "./frontend/courses/apollo/09-ssr-nextjs-performance/common-pitfalls.json";
import commonPromptingMistakesLesson from "./ai/courses/ai-basics/prompting-basics/common-prompting-mistakes.json";
import communicatingTechnicalRiskLesson from "./fundamentals/courses/senior-software-engineering/technical-leadership/communicating-technical-risk.json";
import communicationQuestionsLesson from "./interview-qa/behavioral-interview-questions/communication-questions.json";
import compensatingActionsLesson from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/compensating-actions.json";
import compileTimePolymorphismLesson from "./fundamentals/courses/oops-concepts/04-polymorphism/compile-time-polymorphism.json";
import compiledQueriesLesson from "./backend/courses/ef-core/ef-core-performance-orm-trade-offs/compiled-queries.json";
import compilerOptimizationsLesson from "./architecture/courses/frontend-performance-engineering/build-optimization/compiler-optimizations.json";
import compilerVsInterpreterVsRuntimeLesson from "./fundamentals/courses/programming-computer-web-foundations/programming-computer-fundamentals/compiler-vs-interpreter-vs-runtime.json";
import complexFiltersLesson from "./backend/courses/graphql-dotnet/04-filtering-pagination/complex-filters.json";
import complexityAnalysisLesson from "./fundamentals/courses/programming-computer-web-foundations/data-structures-deep-dive/complexity-analysis.json";
import complianceAndAuditingLesson from "./devops/courses/git-linux-developer-workflow/production-readiness/compliance-and-auditing.json";
import componentTestingVsIntegrationTestingLesson from "./frontend/courses/react-testing/testing-strategy-for-senior-frontend-engineers/component-testing-vs-integration-testing.json";
import composingComponentsLesson from "./frontend/courses/react-fundamentals/02-components-props/composing-components.json";
import compositeIndexDesignLesson from "./database/problems/database-design/index-optimization/composite-index-design.json";
import compositePatternLesson from "./architecture/courses/clean-code-csharp/03-structural-patterns/composite-pattern.json";
import compositeTypesLesson from "./database/courses/postgresql/data-types/composite-types.json";
import compoundBasicsLesson from "./frontend/courses/react-advanced-patterns/03-compound-components/compound-basics.json";
import compoundComponentsLesson from "./frontend/courses/typescript-for-react/06-react-patterns/compound-components.json";
import compoundExamplesLesson from "./frontend/courses/react-advanced-patterns/03-compound-components/compound-examples.json";
import compoundWithContextLesson from "./frontend/courses/react-advanced-patterns/03-compound-components/compound-with-context.json";
import computeOptionsForDevelopersLesson from "./devops/courses/azure/02-compute-and-app-hosting/compute-options-for-developers.json";
import concatConcatenationOperatorLesson from "./backend/courses/linq/06-set-operations/concat-concatenation-operator.json";
import concurrencyHowWouldYouDiagnoseARaceConditionThatOccursOnceADayLesson from "./interview-qa/c-net-follow-ups/concurrency-how-would-you-diagnose-a-race-condition-that-occurs-once-a-day.json";
import concurrencyVsParallelismLesson from "./fundamentals/courses/programming-computer-web-foundations/programming-computer-fundamentals/concurrency-vs-parallelism.json";
import concurrentCollectionsLesson from "./backend/courses/csharp-fundamentals/advanced-async-concurrency-threading/concurrent-collections.json";
import concurrentRenderingLesson from "./frontend/courses/react-fundamentals/react-internals-modern-rendering/concurrent-rendering.json";
import conditionalAndMappedTypesLesson from "./frontend/courses/typescript-for-react/04-advanced-types/conditional-and-mapped-types.json";
import conditionalRenderingLesson from "./frontend/courses/react-fundamentals/02-components-props/conditional-rendering.json";
import conditionalsLesson from "./backend/courses/csharp-fundamentals/03-control-flow/conditionals.json";
import configmapsAndSecretsLesson from "./devops/courses/devops/production-kubernetes-day-2-operations/configmaps-and-secrets.json";
import configurationOptionsLesson from "./backend/courses/aspnet-core-web-api/08-logging-configuration/configuration-options.json";
import configurationTuningLesson from "./database/courses/postgresql/performance-tuning/configuration-tuning.json";
import configurationsInEntityFrameworkCoreLesson from "./backend/courses/ef-core/02-dbcontext-configuration/configurations-in-entity-framework-core.json";
import configureManyToManyRelationshipsLesson from "./backend/courses/ef-core/03-conventions-relationships/configure-many-to-many-relationships.json";
import configureOneToManyRelationshipsFluentApiLesson from "./backend/courses/ef-core/03-conventions-relationships/configure-one-to-many-relationships-fluent-api.json";
import configureOneToOneRelationshipsFluentApiLesson from "./backend/courses/ef-core/03-conventions-relationships/configure-one-to-one-relationships-fluent-api.json";
import configureStoreLesson from "./frontend/courses/redux/02-redux-toolkit/configure-store.json";
import configuringServicesLesson from "./backend/courses/aspnet-core/06-dependency-injection/configuring-services.json";
import connectionManagementServerlessLesson from "./frontend/courses/prisma/06-prisma-advanced-features/connection-management-serverless.json";
import connectionPoolExhaustionLesson from "./backend/courses/aspnet-core/performance-observability/connection-pool-exhaustion.json";
import connectionPoolingLesson from "./architecture/courses/redis-caching-strategies/caching-in-nodejs/connection-pooling.json";
import connectionPoolingLesson1 from "./architecture/courses/redis-caching-strategies/performance-optimization/connection-pooling.json";
import connectionPoolingLesson2 from "./database/courses/postgresql/performance-tuning/connection-pooling.json";
import connectionPoolingAndExhaustionLesson from "./database/courses/sql-server/concurrency-production-database-problems/connection-pooling-and-exhaustion.json";
import connectionPoolingPgbouncerLesson from "./frontend/courses/prisma/06-prisma-advanced-features/connection-pooling-pgbouncer.json";
import connectionResilienceLesson from "./backend/courses/azure-for-aspnet/05-azure-sql-ef-core/connection-resilience.json";
import consistencyAvailabilityTradeOffsLesson from "./architecture/courses/system-design-interviews/consistency-availability/consistency-availability-trade-offs.json";
import consistencyModelsLesson from "./architecture/courses/system-design-interviews/consistency-availability/consistency-models.json";
import consistentHashingLesson from "./architecture/courses/redis-caching-strategies/distributed-caching/consistent-hashing.json";
import constructBinaryTreeFromPreorderAndInorderLesson from "./backend/problems/csharp/04-tree-graph-problems/construct-binary-tree-from-preorder-and-inorder.json";
import constructorInjectionLesson from "./backend/courses/aspnet-core/06-dependency-injection/constructor-injection.json";
import constructorsLesson from "./fundamentals/courses/oops-concepts/01-oop-fundamentals/constructors.json";
import consulServiceDiscoveryLesson from "./architecture/courses/microservices-architecture/service-discovery/consul-service-discovery.json";
import consumerGroupsLesson from "./architecture/courses/message-queues-event-streaming/publish-subscribe-patterns/consumer-groups.json";
import containerAppsOverviewLesson from "./devops/courses/azure/04-containers-and-container-platforms/container-apps-overview.json";
import containerAppsRevisionsAndIngressLesson from "./devops/courses/azure/04-containers-and-container-platforms/container-apps-revisions-and-ingress.json";
import containerAppsScalingAndDaprLesson from "./devops/courses/azure/04-containers-and-container-platforms/container-apps-scaling-and-dapr.json";
import containerAppsVsAksLesson from "./devops/courses/azure/04-containers-and-container-platforms/container-apps-vs-aks.json";
import containerHealthChecksLesson from "./devops/courses/devops/production-docker-container-security/container-health-checks.json";
import containerNetworkingLesson from "./devops/courses/devops/production-docker-container-security/container-networking.json";
import containerSecretsLesson from "./devops/courses/devops/production-docker-container-security/container-secrets.json";
import containerWithMostWaterLesson from "./backend/problems/csharp/01-array-problems/container-with-most-water.json";
import containersAndContainerImagesLesson from "./devops/courses/azure/04-containers-and-container-platforms/containers-and-container-images.json";
import containsDuplicateLesson from "./backend/problems/csharp/01-array-problems/contains-duplicate.json";
import containsQuantifierOperatorLesson from "./backend/courses/linq/08-quantifiers-element-operators/contains-quantifier-operator.json";
import contentNegotiationLesson from "./backend/problems/api-design/api-versioning-problems/content-negotiation.json";
import contentNegotiationLesson1 from "./backend/problems/aspnet-core/03-api-design-problems/content-negotiation.json";
import contentSafetyAndGuardrailsLesson from "./ai/courses/dotnet-ai-backend/06-production-patterns/content-safety-and-guardrails.json";
import contextApiDeepDiveLesson from "./frontend/courses/next-js-full-stack-react/state-management/context-api-deep-dive.json";
import contextWindowDeepDiveLesson from "./ai/courses/ai-basics/understanding-llms/context-window-deep-dive.json";
import continuousMonitoringLesson from "./architecture/courses/frontend-performance-engineering/runtime-performance/continuous-monitoring.json";
import controlPropsBasicsLesson from "./frontend/courses/react-advanced-patterns/05-control-props/control-props-basics.json";
import controlPropsExamplesLesson from "./frontend/courses/react-advanced-patterns/05-control-props/control-props-examples.json";
import controlPropsWithFormsLesson from "./frontend/courses/react-advanced-patterns/05-control-props/control-props-with-forms.json";
import controlledComponentsLesson from "./frontend/courses/react-fundamentals/03-state-events/controlled-components.json";
import controlledComponentsLesson1 from "./frontend/courses/yarn-npm-packages/react-forms-input/controlled-components.json";
import controlledComponentsLesson2 from "./interview-qa/02-intermediate-questions/controlled-components.json";
import controllerActionsAndResultsLesson from "./backend/problems/aspnet-core/01-mvc-fundamentals-problems/controller-actions-and-results.json";
import controllersAndActionsLesson from "./backend/courses/aspnet-core/02-mvc-fundamentals/controllers-and-actions.json";
import conventionsRelationshipsLesson from "./backend/courses/ef-core/03-conventions-relationships/conventions-relationships.json";
import conversionOperatorsLesson from "./backend/courses/linq/10-conversion-generation-operators/conversion-operators.json";
import cookieAuthLesson from "./backend/courses/authentication-authorization/01-auth-basics/cookie-auth.json";
import cookieAuthenticationLesson from "./backend/problems/aspnet-core/07-authentication-authorization-problems/cookie-authentication.json";
import cookiesSessionsAndBrowserStorageLesson from "./fundamentals/courses/programming-computer-web-foundations/web-networking-fundamentals/cookies-sessions-and-browser-storage.json";
import copyBulkLoadLesson from "./database/courses/postgresql/data-modification-dml/copy-bulk-load.json";
import coreWebVitalsLcpInpAndClsLesson from "./architecture/courses/frontend-performance-engineering/browser-react-performance/core-web-vitals-lcp-inp-and-cls.json";
import correlatedSubqueriesLesson from "./database/courses/postgresql/grouping-aggregation-subqueries/correlated-subqueries.json";
import correlationIdsLesson from "./architecture/courses/microservices-architecture/observability/correlation-ids.json";
import corsAndPreflightRequestsLesson from "./fundamentals/courses/programming-computer-web-foundations/web-networking-fundamentals/cors-and-preflight-requests.json";
import corsBestPracticesLesson from "./architecture/courses/fullstack-security/01-cors-configuration/cors-best-practices.json";
import corsConfigurationLesson from "./backend/problems/aspnet-core/04-middleware-pipeline-problems/cors-configuration.json";
import corsInAspnetCoreLesson from "./architecture/courses/fullstack-security/01-cors-configuration/cors-in-aspnet-core.json";
import corsWithReactLesson from "./architecture/courses/fullstack-security/01-cors-configuration/cors-with-react.json";
import cosmosDbConsistencyAndDistributionLesson from "./devops/courses/azure/06-databases-and-caching/cosmos-db-consistency-and-distribution.json";
import cosmosDbCsharpLesson from "./backend/courses/azure-for-aspnet/08-service-bus-events/cosmos-db-csharp.json";
import cosmosDbDataModelingLesson from "./devops/courses/azure/06-databases-and-caching/cosmos-db-data-modeling.json";
import cosmosDbOverviewLesson from "./devops/courses/azure/06-databases-and-caching/cosmos-db-overview.json";
import cosmosDbPartitionKeysLesson from "./devops/courses/azure/06-databases-and-caching/cosmos-db-partition-keys.json";
import cosmosDbRequestUnitsAndPerformanceLesson from "./devops/courses/azure/06-databases-and-caching/cosmos-db-request-units-and-performance.json";
import cosmosDbSdkAndDeveloperPatternsLesson from "./devops/courses/azure/06-databases-and-caching/cosmos-db-sdk-and-developer-patterns.json";
import costAsAnArchitectureConstraintLesson from "./architecture/courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/cost-as-an-architecture-constraint.json";
import costManagementLesson from "./backend/courses/azure-for-aspnet/06-monitoring-caching-cicd/cost-management.json";
import costOptimizationLesson from "./fundamentals/courses/senior-software-engineering/system-design-for-seniors/cost-optimization.json";
import countAndSayLesson from "./backend/problems/csharp/02-string-problems/count-and-say.json";
import countCompleteTreeNodesLesson from "./backend/problems/csharp/04-tree-graph-problems/count-complete-tree-nodes.json";
import countDigitsInNumberLesson from "./backend/problems/csharp/07-recursion-problems/count-digits-in-number.json";
import countTotalSetBitsLesson from "./backend/problems/csharp/08-bitwise-problems/count-total-set-bits.json";
import countingBitsLesson from "./backend/problems/csharp/05-dynamic-programming-problems/counting-bits.json";
import courseScheduleLesson from "./backend/problems/csharp/04-tree-graph-problems/course-schedule.json";
import coverageMetricsLesson from "./backend/courses/unit-testing-dotnet/07-code-coverage/coverage-metrics.json";
import coverageReportingLesson from "./backend/courses/unit-testing-dotnet/07-code-coverage/coverage-reporting.json";
import coveringIndexesLesson from "./database/courses/postgresql/indexes/covering-indexes.json";
import coveringIndexesLesson1 from "./database/problems/database-design/index-optimization/covering-indexes.json";
import coverletCollectorLesson from "./backend/courses/unit-testing-dotnet/07-code-coverage/coverlet-collector.json";
import cpuMemoryAndDiskInvestigationLesson from "./devops/courses/git-linux-developer-workflow/linux-production-troubleshooting/cpu-memory-and-disk-investigation.json";
import cpuMemoryStorageAndIoLesson from "./fundamentals/courses/programming-computer-web-foundations/programming-computer-fundamentals/cpu-memory-storage-and-io.json";
import cpuProfilingLesson from "./architecture/courses/frontend-performance-engineering/runtime-performance/cpu-profiling.json";
import cqrsLesson from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/cqrs.json";
import cqrsBasicsLesson from "./architecture/courses/design-patterns/04-enterprise-patterns/cqrs-basics.json";
import cqrsPatternLesson from "./architecture/courses/clean-code-csharp/06-architecture-patterns/cqrs-pattern.json";
import cqrsPatternLesson1 from "./architecture/courses/microservices-architecture/event-driven-architecture/cqrs-pattern.json";
import cqrsWithEventSourcingLesson from "./architecture/courses/message-queues-event-streaming/event-sourcing/cqrs-with-event-sourcing.json";
import createAsyncThunkLesson from "./frontend/courses/redux/02-redux-toolkit/create-async-thunk.json";
import createAzureSqlCsharpLesson from "./backend/courses/azure-for-aspnet/05-azure-sql-ef-core/create-azure-sql-csharp.json";
import createDatabaseLesson from "./database/courses/postgresql/database-schema-table-objects/create-database.json";
import createSchemaLesson from "./database/courses/postgresql/database-schema-table-objects/create-schema.json";
import createSliceLesson from "./frontend/courses/redux/02-redux-toolkit/create-slice.json";
import createTableLesson from "./database/courses/postgresql/database-schema-table-objects/create-table.json";
import createUpdateDeleteOpsLesson from "./frontend/courses/prisma/03-prisma-queries-mutations/create-update-delete-ops.json";
import creatingFirstGraphqlServerLesson from "./backend/courses/graphql-dotnet/01-getting-started/creating-first-graphql-server.json";
import creatingFirstProjectLesson from "./backend/courses/aspnet-core/01-getting-started/creating-first-project.json";
import creatingJwtLesson from "./backend/courses/authentication-authorization/02-jwt/creating-jwt.json";
import creatingPackagesLesson from "./backend/courses/dotnet-nuget-packages/01-nuget-fundamentals/creating-packages.json";
import creatingProjectLesson from "./backend/courses/aspnet-core-web-api/01-getting-started/creating-project.json";
import credentialHandlingLesson from "./architecture/courses/fullstack-security/07-environment-secrets/credential-handling.json";
import criticalEvaluationLesson from "./ai/courses/ai-basics/safety-and-limitations/critical-evaluation.json";
import cronosLesson from "./backend/courses/dotnet-nuget-packages/06-messaging-events/cronos.json";
import crossJoinLesson from "./database/courses/postgresql/joins/cross-join.json";
import crossServiceDataAccessLesson from "./architecture/courses/microservices-architecture/data-management/cross-service-data-access.json";
import cryptoJsLesson from "./frontend/courses/yarn-npm-packages/utilities/crypto-js.json";
import csharpA01Lesson from "./interview-qa/03-advanced-questions/csharp-a01.json";
import csharpA02Lesson from "./interview-qa/03-advanced-questions/csharp-a02.json";
import csharpA03Lesson from "./interview-qa/03-advanced-questions/csharp-a03.json";
import csharpB01Lesson from "./interview-qa/01-beginner-questions/csharp-b01.json";
import csharpB02Lesson from "./interview-qa/01-beginner-questions/csharp-b02.json";
import csharpI01Lesson from "./interview-qa/02-intermediate-questions/csharp-i01.json";
import csharpI02Lesson from "./interview-qa/02-intermediate-questions/csharp-i02.json";
import csharpI03Lesson from "./interview-qa/02-intermediate-questions/csharp-i03.json";
import csharpI04Lesson from "./interview-qa/02-intermediate-questions/csharp-i04.json";
import csharpI05Lesson from "./interview-qa/02-intermediate-questions/csharp-i05.json";
import csharpI06Lesson from "./interview-qa/02-intermediate-questions/csharp-i06.json";
import csharpPropertiesLesson from "./interview-qa/01-beginner-questions/csharp-properties.json";
import cspAndBrowserSecurityHeadersLesson from "./architecture/courses/fullstack-security/modern-web-security-identity/csp-and-browser-security-headers.json";
import csrfAndSameSiteCookiesLesson from "./architecture/courses/fullstack-security/modern-web-security-identity/csrf-and-same-site-cookies.json";
import csrfProtectionAspnetLesson from "./architecture/courses/fullstack-security/03-xss-csrf-protection/csrf-protection-aspnet.json";
import csrfXssProtectionLesson from "./backend/courses/authentication-authorization/09-security-best-practices/csrf-xss-protection.json";
import cssModulesLesson from "./frontend/courses/react-fundamentals/08-styling/css-modules.json";
import cssModulesLesson1 from "./frontend/courses/yarn-npm-packages/styling/css-modules.json";
import csvhelperLesson from "./backend/courses/dotnet-nuget-packages/05-serialization-mapping/csvhelper.json";
import ctesLesson from "./database/courses/postgresql/grouping-aggregation-subqueries/ctes.json";
import cursorIdeGuideLesson from "./ai/courses/codex/ai-coding-tools/cursor-ide-guide.json";
import customAuthorizationHandlersLesson from "./backend/courses/authentication-authorization/06-advanced-authorization/custom-authorization-handlers.json";
import customCacheResolversLesson from "./frontend/courses/apollo/05-client-side-caching-advanced/custom-cache-resolvers.json";
import customExceptionsLesson from "./backend/courses/graphql-dotnet/07-error-handling/custom-exceptions.json";
import customHookExamplesLesson from "./devops/courses/git-linux-developer-workflow/git-hooks/custom-hook-examples.json";
import customHookTestingLesson from "./frontend/courses/react-advanced-patterns/10-advanced-hook-patterns/custom-hook-testing.json";
import customHooksLesson from "./frontend/courses/react-fundamentals/05-lifecycle-effects/custom-hooks.json";
import customHooksLesson1 from "./frontend/courses/react-query/04-advanced-features/custom-hooks.json";
import customHooksLesson2 from "./frontend/courses/redux/07-redux-advanced-concepts/custom-hooks.json";
import customHooksLesson3 from "./frontend/courses/yarn-npm-packages/react-hooks-patterns/custom-hooks.json";
import customHooksTypesLesson from "./frontend/courses/typescript-for-react/03-typing-hooks/custom-hooks-types.json";
import customMiddlewareLesson from "./backend/courses/aspnet-core/07-middleware-pipeline/custom-middleware.json";
import customMiddlewareLesson1 from "./backend/courses/aspnet-core-web-api/04-middleware/custom-middleware.json";
import customMiddlewareLesson2 from "./backend/problems/aspnet-core/04-middleware-pipeline-problems/custom-middleware.json";
import customValidationLesson from "./backend/courses/aspnet-core/04-model-binding-validation/custom-validation.json";
import cypressLesson from "./frontend/courses/yarn-npm-packages/testing/cypress.json";
import cypressCommandsLesson from "./frontend/courses/react-testing/05-e2e-testing/cypress-commands.json";
import cypressComponentLesson from "./frontend/courses/yarn-npm-packages/react-testing/cypress-component.json";
import cypressIntroLesson from "./frontend/courses/react-testing/05-e2e-testing/cypress-intro.json";
import dapperLesson from "./backend/courses/dotnet-nuget-packages/04-database-data-access/dapper.json";
import dataConsistencyModelsLesson from "./architecture/courses/microservices-architecture/data-management/data-consistency-models.json";
import dataDrivenTestsLesson from "./backend/courses/unit-testing-dotnet/02-xunit-basics/data-driven-tests.json";
import dataModelingLesson from "./fundamentals/courses/senior-software-engineering/system-design-for-seniors/data-modeling.json";
import dataOperationsConnectedLesson from "./backend/courses/ef-core/04-data-operations-connected/data-operations-connected.json";
import dataOperationsDisconnectedLesson from "./backend/courses/ef-core/05-data-operations-disconnected/data-operations-disconnected.json";
import dataProtectionLesson from "./backend/courses/dotnet-nuget-packages/08-security-cryptography/data-protection.json";
import dataSynchronizationStrategiesLesson from "./architecture/courses/microservices-architecture/data-management/data-synchronization-strategies.json";
import dataVolumeEstimationLesson from "./architecture/courses/system-design-interviews/requirement-clarification/data-volume-estimation.json";
import dataWarehouseFundamentalsLesson from "./database/courses/sql-server/19-data-warehousing/data-warehouse-fundamentals.json";
import dataannotationsLesson from "./backend/courses/dotnet-nuget-packages/validation-authorization/dataannotations.json";
import databaseCachingLesson from "./architecture/courses/system-design-interviews/caching-strategies/database-caching.json";
import databaseCapacityPlanningLesson from "./database/courses/sql-server/concurrency-production-database-problems/database-capacity-planning.json";
import databaseChoosingLesson from "./backend/courses/aws-for-aspnet/05-rds-dynamodb/database-choosing.json";
import databaseEngineTuningAdvisorLesson from "./database/courses/sql-server/16-performance-tuning/database-engine-tuning-advisor.json";
import databaseFirstDiagnosticsLesson from "./backend/courses/ef-core/11-database-first-diagnostics/database-first-diagnostics.json";
import databaseMigrationAndDataMovementLesson from "./devops/courses/azure/06-databases-and-caching/database-migration-and-data-movement.json";
import databaseMigrationSafetyLesson from "./devops/courses/devops/ci-cd-safe-delivery/database-migration-safety.json";
import databaseMigrationStrategiesLesson from "./devops/problems/azure/05-azure-databases-problems/database-migration-strategies.json";
import databaseMirroringLesson from "./database/courses/sql-server/18-high-availability-dr/database-mirroring.json";
import databasePerServicePatternLesson from "./architecture/courses/microservices-architecture/data-management/database-per-service-pattern.json";
import databaseScalingLesson from "./architecture/courses/system-design-interviews/scalability-patterns/database-scaling.json";
import databaseShardingLesson from "./architecture/courses/system-design-interviews/database-design/database-sharding.json";
import databaseTestingLesson from "./backend/courses/unit-testing-dotnet/04-integration-testing/database-testing.json";
import dataloaderLesson from "./backend/courses/graphql-dotnet/06-performance/dataloader.json";
import dateFnsLesson from "./frontend/courses/yarn-npm-packages/utilities/date-fns.json";
import dateTimeTypesLesson from "./database/courses/postgresql/data-types/date-time-types.json";
import day2TroubleshootingWorkflowLesson from "./devops/courses/devops/production-kubernetes-day-2-operations/day-2-troubleshooting-workflow.json";
import dbcontextAndMigrationsLesson from "./backend/courses/aspnet-core/08-entity-framework-core/dbcontext-and-migrations.json";
import dbcontextConfigurationLesson from "./backend/courses/ef-core/02-dbcontext-configuration/dbcontext-configuration.json";
import dbcontextConfigurationLesson1 from "./backend/problems/aspnet-core/06-ef-core-problems/dbcontext-configuration.json";
import dbcontextInEntityFrameworkCoreLesson from "./backend/courses/ef-core/02-dbcontext-configuration/dbcontext-in-entity-framework-core.json";
import deadLetterQueuesLesson from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/dead-letter-queues.json";
import deadlocksAndDeadlockGraphsLesson from "./database/courses/sql-server/concurrency-production-database-problems/deadlocks-and-deadlock-graphs.json";
import deadlocksStarvationAndLivelocksLesson from "./backend/courses/csharp-fundamentals/advanced-async-concurrency-threading/deadlocks-starvation-and-livelocks.json";
import debuggingPerformanceLesson from "./architecture/courses/frontend-performance-engineering/runtime-performance/debugging-performance.json";
import debuggingTechniquesLesson from "./backend/courses/aspnet-core/11-testing-debugging/debugging-techniques.json";
import debuggingWithAiLesson from "./ai/courses/codex/practical-ai-workflows/debugging-with-ai.json";
import debuggingWithGitLesson from "./devops/courses/git-linux-developer-workflow/git-bisect-debugging/debugging-with-git.json";
import decisionDocumentationLesson from "./fundamentals/courses/senior-software-engineering/technical-decision-making/decision-documentation.json";
import decisionReviewsLesson from "./fundamentals/courses/senior-software-engineering/technical-decision-making/decision-reviews.json";
import declarationMergingAndModuleAugmentationLesson from "./frontend/courses/typescript-for-react/advanced-type-modeling-runtime-safety/declaration-merging-and-module-augmentation.json";
import decodeWaysLesson from "./backend/problems/csharp/02-string-problems/decode-ways.json";
import decodeWaysLesson1 from "./backend/problems/csharp/05-dynamic-programming-problems/decode-ways.json";
import decoratorPatternLesson from "./architecture/courses/clean-code-csharp/03-structural-patterns/decorator-pattern.json";
import decoratorPatternLesson1 from "./architecture/courses/design-patterns/02-structural-patterns/decorator-pattern.json";
import deduplicationLesson from "./architecture/courses/message-queues-event-streaming/message-ordering-idempotency/deduplication.json";
import defaultInterfaceMethodsLesson from "./fundamentals/courses/oops-concepts/06-interfaces-abstract-classes/default-interface-methods.json";
import defaultifemptyOperatorLesson from "./backend/courses/linq/10-conversion-generation-operators/defaultifempty-operator.json";
import delegatesEventsLesson from "./backend/courses/csharp-fundamentals/05-advanced-features/delegates-events.json";
import delegatesEventsLesson1 from "./interview-qa/01-beginner-questions/delegates-events.json";
import deleteLesson from "./database/courses/postgresql/data-modification-dml/delete.json";
import deleteDataDisconnectedScenarioLesson from "./backend/courses/ef-core/05-data-operations-disconnected/delete-data-disconnected-scenario.json";
import denormalizationTradeOffsLesson from "./database/problems/database-design/normalization-exercises/denormalization-trade-offs.json";
import dependencyInjectionLesson from "./architecture/courses/clean-code-csharp/06-architecture-patterns/dependency-injection.json";
import dependencyInjectionLesson1 from "./frontend/courses/yarn-npm-packages/advanced-patterns/dependency-injection.json";
import dependencyInjectionLifetimesAndScopeValidationLesson from "./backend/courses/aspnet-core/asp-net-core-internals-production-hosting/dependency-injection-lifetimes-and-scope-validation.json";
import dependencyInjectionWhatHappensWhenASingletonDependsOnAScopedServiceLesson from "./interview-qa/c-net-follow-ups/dependency-injection-what-happens-when-a-singleton-depends-on-a-scoped-service.json";
import dependencyInversionLesson from "./architecture/courses/clean-code-csharp/01-solid-principles/dependency-inversion.json";
import dependencyScanningLesson from "./architecture/courses/fullstack-security/06-dependency-security/dependency-scanning.json";
import dependentQueriesLesson from "./frontend/courses/react-query/02-query-hooks/dependent-queries.json";
import deployAspnetCoreAppServiceLesson from "./backend/courses/azure-for-aspnet/02-azure-app-service-deployment/deploy-aspnet-core-app-service.json";
import deployAspnetCoreBeanstalkLesson from "./backend/courses/aws-for-aspnet/02-elastic-beanstalk-ecs-deployment/deploy-aspnet-core-beanstalk.json";
import deployingContainerizedAppsOnAksLesson from "./devops/problems/azure/02-azure-compute-problems/deploying-containerized-apps-on-aks.json";
import deploymentAndScalingPatternsLesson from "./ai/courses/dotnet-ai-backend/06-production-patterns/deployment-and-scaling-patterns.json";
import deploymentArchitectureForNextjsLesson from "./frontend/courses/next-js-full-stack-react/app-router-rendering/deployment-architecture-for-nextjs.json";
import deploymentOptionsLesson from "./backend/courses/aspnet-core/12-deployment-production/deployment-options.json";
import deploymentPipelinesLesson from "./devops/courses/git-linux-developer-workflow/production-readiness/deployment-pipelines.json";
import deploymentSecretsAndEnvironmentConfigurationLesson from "./devops/courses/azure/11-application-deployment-and-devops/deployment-secrets-and-environment-configuration.json";
import deploymentSetupLesson from "./frontend/courses/redux/08-redux-real-world/deployment-setup.json";
import deploymentSlotsAndSlotSwappingLesson from "./devops/courses/azure/11-application-deployment-and-devops/deployment-slots-and-slot-swapping.json";
import deprecationStrategyLesson from "./backend/problems/api-design/api-versioning-problems/deprecation-strategy.json";
import derivedDataLesson from "./frontend/courses/redux/05-redux-patterns/derived-data.json";
import derivedStateAndAvoidingDuplicatedStateLesson from "./frontend/courses/react-advanced-patterns/modern-state-application-architecture/derived-state-and-avoiding-duplicated-state.json";
import designChatSystemLesson from "./interview-qa/05-system-design/design-chat-system.json";
import designDistributedCacheLesson from "./interview-qa/05-system-design/design-distributed-cache.json";
import designFileStorageLesson from "./interview-qa/05-system-design/design-file-storage.json";
import designNewsFeedLesson from "./interview-qa/05-system-design/design-news-feed.json";
import designNotificationSystemLesson from "./interview-qa/05-system-design/design-notification-system.json";
import designRateLimiterLesson from "./interview-qa/05-system-design/design-rate-limiter.json";
import designReviewsLesson from "./fundamentals/courses/senior-software-engineering/system-design-for-seniors/design-reviews.json";
import designTradeOffsLesson from "./architecture/courses/system-design-interviews/requirement-clarification/design-trade-offs.json";
import designUniqueIdGeneratorLesson from "./interview-qa/05-system-design/design-unique-id-generator.json";
import designingEventDrivenServerlessArchitectureLesson from "./devops/problems/azure/03-azure-serverless-problems/designing-event-driven-serverless-architecture.json";
import designingTypeSafeComponentApisLesson from "./frontend/courses/typescript-for-react/advanced-type-modeling-runtime-safety/designing-type-safe-component-apis.json";
import devtoolsLesson from "./frontend/courses/redux/01-redux-fundamentals/devtools.json";
import diBasicsLesson from "./backend/courses/aspnet-core/06-dependency-injection/di-basics.json";
import diBasicsLesson1 from "./backend/courses/aspnet-core-web-api/05-dependency-injection/di-basics.json";
import diagnosingAPortThatIsNotReachableLesson from "./devops/courses/git-linux-developer-workflow/linux-production-troubleshooting/diagnosing-a-port-that-is-not-reachable.json";
import diagnosingAsyncPerformanceProblemsLesson from "./backend/courses/csharp-fundamentals/advanced-async-concurrency-threading/diagnosing-async-performance-problems.json";
import digitalRootLesson from "./backend/problems/csharp/07-recursion-problems/digital-root.json";
import directExchangeLesson from "./architecture/courses/message-queues-event-streaming/publish-subscribe-patterns/direct-exchange.json";
import disasterRecoveryLesson from "./database/courses/postgresql/high-availability-dr/disaster-recovery.json";
import disasterRecoveryLesson1 from "./devops/courses/git-linux-developer-workflow/production-readiness/disaster-recovery.json";
import disasterRecoveryPlanningLesson from "./devops/courses/azure/production-architecture-reliability-cost/disaster-recovery-planning.json";
import disasterRecoveryTestingLesson from "./fundamentals/courses/senior-software-engineering/production-ownership/disaster-recovery-testing.json";
import discriminatedUnionsLesson from "./frontend/courses/typescript-for-react/advanced-type-modeling-runtime-safety/discriminated-unions.json";
import disjointSetsLesson from "./fundamentals/courses/programming-computer-web-foundations/data-structures-deep-dive/disjoint-sets.json";
import distinctSetOperatorLesson from "./backend/courses/linq/06-set-operations/distinct-set-operator.json";
import distributedCachingLesson from "./architecture/courses/system-design-interviews/caching-strategies/distributed-caching.json";
import distributedRateLimitingLesson from "./backend/problems/api-design/rate-limiting-design/distributed-rate-limiting.json";
import distributedTracingLesson from "./architecture/courses/microservices-architecture/observability/distributed-tracing.json";
import distributedTracingAcrossServicesLesson from "./backend/courses/aspnet-core/performance-observability/distributed-tracing-across-services.json";
import distributedTracingAndOpenTelemetryLesson from "./devops/courses/azure/10-observability-and-application-monitoring/distributed-tracing-and-open-telemetry.json";
import distributedTransactionChallengesLesson from "./architecture/courses/microservices-architecture/distributed-transactions/distributed-transaction-challenges.json";
import distributedTransactionsLesson from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/distributed-transactions.json";
import dlqConceptsLesson from "./architecture/courses/message-queues-event-streaming/dead-letter-queues/dlq-concepts.json";
import dlqErrorHandlingLesson from "./architecture/courses/message-queues-event-streaming/dead-letter-queues/dlq-error-handling.json";
import dlqMonitoringLesson from "./architecture/courses/message-queues-event-streaming/dead-letter-queues/dlq-monitoring.json";
import dlqRetryStrategiesLesson from "./architecture/courses/message-queues-event-streaming/dead-letter-queues/dlq-retry-strategies.json";
import dnsAndNetworkTroubleshootingFromLinuxLesson from "./devops/courses/git-linux-developer-workflow/linux-production-troubleshooting/dns-and-network-troubleshooting-from-linux.json";
import dnsInDepthLesson from "./fundamentals/courses/programming-computer-web-foundations/networking-protocols/dns-in-depth.json";
import dnsLoadBalancingLesson from "./architecture/courses/system-design-interviews/load-balancing/dns-load-balancing.json";
import dnsResolutionFromBrowserToServerLesson from "./fundamentals/courses/programming-computer-web-foundations/web-networking-fundamentals/dns-resolution-from-browser-to-server.json";
import dockerContainerizationLesson from "./backend/courses/aspnet-core/12-deployment-production/docker-containerization.json";
import dockerEcrLesson from "./devops/courses/aws/09-containers-kubernetes/docker-ecr.json";
import dockerfilesAndContainerDevelopmentLesson from "./devops/courses/azure/04-containers-and-container-platforms/dockerfiles-and-container-development.json";
import documentUnderstandingLesson from "./ai/courses/claude/claude-for-research/document-understanding.json";
import documentationLesson from "./frontend/courses/next-js-full-stack-react/full-stack-api-design/documentation.json";
import domainEventsLesson from "./architecture/courses/microservices-architecture/event-driven-architecture/domain-events.json";
import dotnetAwsSdkLesson from "./backend/courses/aws-for-aspnet/01-aws-for-dotnet-overview/dotnet-aws-sdk.json";
import dotnetAzureSdkLesson from "./backend/courses/azure-for-aspnet/01-azure-for-dotnet-overview/dotnet-azure-sdk.json";
import dotnetVersionsLesson from "./interview-qa/02-intermediate-questions/dotnet-versions.json";
import dropTableLesson from "./database/courses/postgresql/database-schema-table-objects/drop-table.json";
import dropboxStorageLesson from "./architecture/problems/hld/dropbox-storage/dropbox-storage.json";
import dryPrincipleLesson from "./fundamentals/courses/oops-concepts/07-design-principles/dry-principle.json";
import duplicateMessagesAndIdempotencyLesson from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/duplicate-messages-and-idempotency.json";
import dynamicImportsLesson from "./architecture/courses/frontend-performance-engineering/build-optimization/dynamic-imports.json";
import dynamodbCsharpLesson from "./backend/courses/aws-for-aspnet/05-rds-dynamodb/dynamodb-csharp.json";
import dynamodbNosqlLesson from "./devops/courses/aws/06-databases/dynamodb-nosql.json";
import eCommerceApiLesson from "./backend/problems/api-design/rest-api-design-scenarios/e-commerce-api.json";
import eCommerceSchemaLesson from "./database/problems/database-design/schema-design-scenarios/e-commerce-schema.json";
import eagerVsLazyLoadingLesson from "./backend/problems/aspnet-core/06-ef-core-problems/eager-vs-lazy-loading.json";
import ec2AutoScalingLesson from "./devops/courses/aws/03-compute-services/ec2-auto-scaling.json";
import ec2FundamentalsLesson from "./devops/courses/aws/03-compute-services/ec2-fundamentals.json";
import ec2InstancesStorageLesson from "./devops/courses/aws/03-compute-services/ec2-instances-storage.json";
import ecommerceHldLesson from "./architecture/problems/hld/ecommerce-hld/ecommerce-hld.json";
import edgeRuntimeVsNodeRuntimeLesson from "./frontend/courses/next-js-full-stack-react/app-router-rendering/edge-runtime-vs-node-runtime.json";
import editDistanceLesson from "./backend/problems/csharp/05-dynamic-programming-problems/edit-distance.json";
import editingAndPolishingLesson from "./ai/courses/claude/claude-for-writing/editing-and-polishing.json";
import editingWithAiLesson from "./ai/courses/ai-basics/writing-and-content-tools/editing-with-ai.json";
import efCoreAzureSqlLesson from "./backend/courses/azure-for-aspnet/05-azure-sql-ef-core/ef-core-azure-sql.json";
import efCoreMigrationsUsingCliLesson from "./backend/courses/ef-core/09-migrations/ef-core-migrations-using-cli.json";
import efCoreTablePerConcreteTypeTpcLesson from "./backend/courses/ef-core/08-inheritance-strategies/ef-core-table-per-concrete-type-tpc.json";
import efCoreTablePerHierarchyTphLesson from "./backend/courses/ef-core/08-inheritance-strategies/ef-core-table-per-hierarchy-tph.json";
import efCoreTablePerTypeTptLesson from "./backend/courses/ef-core/08-inheritance-strategies/ef-core-table-per-type-tpt.json";
import efCoreVsDapperVsRawSqlLesson from "./architecture/courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/ef-core-vs-dapper-vs-raw-sql.json";
import efCoreVsDapperVsRawSqlLesson1 from "./backend/courses/ef-core/ef-core-performance-orm-trade-offs/ef-core-vs-dapper-vs-raw-sql.json";
import efcoreIntroductionLesson from "./backend/courses/aspnet-core/08-entity-framework-core/efcore-introduction.json";
import effectiveCodeReviewsLesson from "./fundamentals/courses/senior-software-engineering/technical-leadership/effective-code-reviews.json";
import elasticLoadBalancingLesson from "./devops/courses/aws/07-load-balancing-application-integration/elastic-load-balancing.json";
import elasticsearchLesson from "./backend/courses/dotnet-nuget-packages/logging-monitoring/elasticsearch.json";
import elementatElementatordefaultLesson from "./backend/courses/linq/08-quantifiers-element-operators/elementat-elementatordefault.json";
import elevatorSystemLesson from "./architecture/problems/lld/elevator-system/elevator-system.json";
import emailCommunicationLesson from "./devops/courses/aws/15-developer-tools-application-services/email-communication.json";
import embeddingsAndVectorStoresLesson from "./ai/courses/dotnet-ai-backend/01-ai-backend-terminology/embeddings-and-vector-stores.json";
import embeddingsSimplyLesson from "./ai/courses/ai-basics/embeddings-and-vectors/embeddings-simply.json";
import emotionLesson from "./frontend/courses/yarn-npm-packages/styling/emotion.json";
import encapsulationLesson from "./backend/courses/csharp-fundamentals/04-oop/encapsulation.json";
import encapsulationBasicsLesson from "./fundamentals/courses/oops-concepts/02-encapsulation-data-hiding/encapsulation-basics.json";
import encryptionAtRestLesson from "./database/courses/postgresql/security-hardening/encryption-at-rest.json";
import encryptionTdeLesson from "./database/courses/sql-server/17-security-hardening/encryption-tde.json";
import endpointRoutingInternalsLesson from "./backend/courses/aspnet-core/asp-net-core-internals-production-hosting/endpoint-routing-internals.json";
import enterpriseAiImplementationPlaybookLesson from "./ai/courses/ai-basics/privacy-and-data/enterprise-ai-implementation-playbook.json";
import enterpriseCicdPipelineDesignLesson from "./architecture/problems/system-design/devops-system-design/enterprise-cicd-pipeline-design.json";
import enterpriseGitLesson from "./devops/courses/git-linux-developer-workflow/advanced-git-workflows/enterprise-git.json";
import entityAdapterLesson from "./frontend/courses/redux/05-redux-patterns/entity-adapter.json";
import entityFrameworkCoreLesson from "./backend/courses/dotnet-nuget-packages/04-database-data-access/entity-framework-core.json";
import entityFrameworkCoreChangeTrackingLesson from "./backend/courses/ef-core/06-change-tracking/entity-framework-core-change-tracking.json";
import entityFrameworkCoreConcurrencyConflictsLesson from "./backend/courses/ef-core/10-advanced-features/entity-framework-core-concurrency-conflicts.json";
import entityFrameworkCoreConventionsLesson from "./backend/courses/ef-core/03-conventions-relationships/entity-framework-core-conventions.json";
import entityFrameworkCoreInterceptorsLesson from "./backend/courses/ef-core/10-advanced-features/entity-framework-core-interceptors.json";
import entityFrameworkCoreSavingDataConnectedLesson from "./backend/courses/ef-core/04-data-operations-connected/entity-framework-core-saving-data-connected.json";
import entityFrameworkCoreTutorialsLesson from "./backend/courses/ef-core/01-getting-started-ef-core/entity-framework-core-tutorials.json";
import entityFrameworkCoreWithExistingDatabaseLesson from "./backend/courses/ef-core/11-database-first-diagnostics/entity-framework-core-with-existing-database.json";
import entityFrameworkExtensionsPerformanceLesson from "./backend/courses/ef-core/12-performance-bulk-operations/entity-framework-extensions-performance.json";
import enumsAndLiteralTypesLesson from "./frontend/courses/typescript-for-react/01-typescript-basics/enums-and-literal-types.json";
import enumsAndNativeTypesLesson from "./frontend/courses/prisma/02-prisma-schema-design/enums-and-native-types.json";
import environmentConfigurationLesson from "./architecture/courses/fullstack-security/07-environment-secrets/environment-configuration.json";
import environmentPromotionLesson from "./devops/courses/devops/ci-cd-safe-delivery/environment-promotion.json";
import errorBoundariesLesson from "./frontend/courses/react-fundamentals/05-lifecycle-effects/error-boundaries.json";
import errorBoundariesAndFailureIsolationLesson from "./frontend/courses/react-fundamentals/react-internals-modern-rendering/error-boundaries-and-failure-isolation.json";
import errorBoundariesLoadingLesson from "./frontend/courses/yarn-npm-packages/react-data-fetching/error-boundaries-loading.json";
import errorBoundariesTypedLesson from "./frontend/courses/typescript-for-react/06-react-patterns/error-boundaries-typed.json";
import errorBudgetsLesson from "./fundamentals/courses/senior-software-engineering/production-ownership/error-budgets.json";
import errorHandlingLesson from "./architecture/courses/clean-code-csharp/05-clean-code-practices/error-handling.json";
import errorHandlingLesson1 from "./backend/courses/csharp-fundamentals/06-error-handling/error-handling.json";
import errorHandlingLesson2 from "./frontend/courses/apollo/04-advanced-patterns/error-handling.json";
import errorHandlingLesson3 from "./frontend/courses/next-js-full-stack-react/full-stack-api-design/error-handling.json";
import errorHandlingLesson4 from "./frontend/courses/prisma/06-prisma-advanced-features/error-handling.json";
import errorHandlingLesson5 from "./frontend/courses/redux/08-redux-real-world/error-handling.json";
import errorHandlingAndValidationLesson from "./ai/courses/dotnet-ai-backend/04-mcp-servers-tools/error-handling-and-validation.json";
import errorHandlingBasicsLesson from "./backend/courses/graphql-dotnet/07-error-handling/error-handling-basics.json";
import errorHandlingBasicsLesson1 from "./frontend/courses/apollo/06-error-handling-optimistic/error-handling-basics.json";
import errorHandlingInDataFetchingLesson from "./frontend/courses/next-js-full-stack-react/data-fetching-patterns/error-handling-in-data-fetching.json";
import errorHandlingStrategiesLesson from "./frontend/courses/react-query/04-advanced-features/error-handling-strategies.json";
import errorLoggingMonitoringLesson from "./backend/courses/graphql-dotnet/07-error-handling/error-logging-monitoring.json";
import errorPoliciesLesson from "./frontend/courses/apollo/06-error-handling-optimistic/error-policies.json";
import errorResponseFormatLesson from "./backend/problems/api-design/error-handling-design/error-response-format.json";
import esbuildLesson from "./frontend/courses/yarn-npm-packages/build-tools/esbuild.json";
import estimationAndUncertaintyLesson from "./fundamentals/courses/senior-software-engineering/technical-leadership/estimation-and-uncertainty.json";
import etagsAndConditionalRequestsLesson from "./backend/courses/aspnet-core-web-api/production-api-design-reliability/etags-and-conditional-requests.json";
import evaluatingAiOutputLesson from "./ai/courses/ai-basics/hallucinations-and-accuracy/evaluating-ai-output.json";
import evaluatingRagAndAgentQualityLesson from "./ai/courses/dotnet-ai-backend/06-production-patterns/evaluating-rag-and-agent-quality.json";
import evaluatingTechnicalOptionsLesson from "./fundamentals/courses/senior-software-engineering/technical-decision-making/evaluating-technical-options.json";
import eventDrivenApplicationPatternsLesson from "./devops/courses/azure/09-messaging-and-event-driven-architecture/event-driven-application-patterns.json";
import eventDrivenArchitectureLesson from "./backend/courses/aws-for-aspnet/07-sqs-sns-events/event-driven-architecture.json";
import eventDrivenArchitectureFundamentalsLesson from "./architecture/courses/microservices-architecture/event-driven-architecture/event-driven-architecture-fundamentals.json";
import eventGridCsharpLesson from "./backend/courses/azure-for-aspnet/08-service-bus-events/event-grid-csharp.json";
import eventGridTopicsEventsAndEventSubscriptionsLesson from "./devops/courses/azure/09-messaging-and-event-driven-architecture/event-grid-topics-events-and-event-subscriptions.json";
import eventGridWithAzureFunctionsLesson from "./devops/courses/azure/09-messaging-and-event-driven-architecture/event-grid-with-azure-functions.json";
import eventHubsPartitionsAndConsumerGroupsLesson from "./devops/courses/azure/09-messaging-and-event-driven-architecture/event-hubs-partitions-and-consumer-groups.json";
import eventHubsStreamProcessingLesson from "./devops/courses/azure/09-messaging-and-event-driven-architecture/event-hubs-stream-processing.json";
import eventSchemaEvolutionLesson from "./architecture/courses/microservices-architecture/event-driven-architecture/event-schema-evolution.json";
import eventSourcingLesson from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/event-sourcing.json";
import eventSourcingFundamentalsLesson from "./architecture/courses/message-queues-event-streaming/event-sourcing/event-sourcing-fundamentals.json";
import eventSourcingPatternLesson from "./architecture/courses/microservices-architecture/event-driven-architecture/event-sourcing-pattern.json";
import eventSourcingProsConsLesson from "./architecture/courses/message-queues-event-streaming/event-sourcing/event-sourcing-pros-cons.json";
import eventStoreDesignLesson from "./architecture/courses/message-queues-event-streaming/event-sourcing/event-store-design.json";
import eventVersioningLesson from "./architecture/courses/message-queues-event-streaming/event-sourcing/event-versioning.json";
import eventualConsistencyLesson from "./architecture/courses/microservices-architecture/data-management/eventual-consistency.json";
import evictionPoliciesLesson from "./architecture/courses/redis-caching-strategies/cache-invalidation/eviction-policies.json";
import exactlyOnceSemanticsLesson from "./architecture/courses/message-queues-event-streaming/message-ordering-idempotency/exactly-once-semantics.json";
import exceptLesson from "./database/courses/postgresql/set-operations/except.json";
import exceptSetOperatorLesson from "./backend/courses/linq/06-set-operations/except-set-operator.json";
import exceptionHandlingLesson from "./backend/courses/aspnet-core/07-middleware-pipeline/exception-handling.json";
import exceptionHandlingLesson1 from "./database/courses/postgresql/transactions-error-handling-backup/exception-handling.json";
import exceptionHandlingMiddlewareLesson from "./backend/problems/aspnet-core/04-middleware-pipeline-problems/exception-handling-middleware.json";
import exceptionTypesLesson from "./backend/courses/csharp-fundamentals/06-error-handling/exception-types.json";
import exclusionConstraintsLesson from "./database/courses/postgresql/constraints/exclusion-constraints.json";
import executeDeleteInEntityFrameworkCoreLesson from "./backend/courses/ef-core/07-querying/execute-delete-in-entity-framework-core.json";
import executeRawSqlQueriesLesson from "./backend/courses/ef-core/07-querying/execute-raw-sql-queries.json";
import executeUpdateInEntityFrameworkCoreLesson from "./backend/courses/ef-core/07-querying/execute-update-in-entity-framework-core.json";
import executionPlanReadingWorkflowLesson from "./database/courses/sql-server/database-internals-query-optimization/execution-plan-reading-workflow.json";
import executionPlansLesson from "./database/courses/sql-server/16-performance-tuning/execution-plans.json";
import explainAnalyzeLesson from "./database/courses/postgresql/performance-tuning/explain-analyze.json";
import explicitInterfaceImplementationLesson from "./fundamentals/courses/oops-concepts/06-interfaces-abstract-classes/explicit-interface-implementation.json";
import expressCachingLesson from "./architecture/courses/redis-caching-strategies/caching-in-nodejs/express-caching.json";
import expressionTreesLesson from "./backend/courses/linq/11-advanced-linq-concepts/expression-trees.json";
import extensionMethodsLesson from "./backend/courses/csharp-fundamentals/05-advanced-features/extension-methods.json";
import extensionsLesson from "./database/courses/postgresql/advanced-topics/extensions.json";
import externalProvidersLesson from "./backend/courses/authentication-authorization/04-oauth/external-providers.json";
import extraReducersLesson from "./frontend/courses/redux/02-redux-toolkit/extra-reducers.json";
import facadePatternLesson from "./architecture/courses/clean-code-csharp/03-structural-patterns/facade-pattern.json";
import facadePatternLesson1 from "./architecture/courses/design-patterns/02-structural-patterns/facade-pattern.json";
import facebookNewsFeedLesson from "./architecture/problems/lld/facebook-news-feed/facebook-news-feed.json";
import factoryPatternLesson from "./architecture/courses/clean-code-csharp/02-creational-patterns/factory-pattern.json";
import factoryPatternLesson1 from "./architecture/courses/design-patterns/01-creational-patterns/factory-pattern.json";
import factoryPatternLesson2 from "./frontend/courses/yarn-npm-packages/advanced-patterns/factory-pattern.json";
import factoryPatternDiLesson from "./backend/problems/aspnet-core/05-dependency-injection-problems/factory-pattern-di.json";
import failoverRecoveryLesson from "./architecture/courses/redis-caching-strategies/distributed-caching/failover-recovery.json";
import failoverSwitchoverLesson from "./database/courses/postgresql/high-availability-dr/failover-switchover.json";
import failureStoriesLesson from "./interview-qa/behavioral-interview-questions/failure-stories.json";
import fallbackPatternsLesson from "./architecture/courses/microservices-architecture/resilience-patterns/fallback-patterns.json";
import fanoutExchangeLesson from "./architecture/courses/message-queues-event-streaming/publish-subscribe-patterns/fanout-exchange.json";
import featureFlagsLesson from "./devops/courses/devops/ci-cd-safe-delivery/feature-flags.json";
import fetchApiBasicsLesson from "./frontend/courses/yarn-npm-packages/react-data-fetching/fetch-api-basics.json";
import fetchingDataLesson from "./frontend/courses/react-fundamentals/05-lifecycle-effects/fetching-data.json";
import fewShotPromptingLesson from "./ai/courses/ai-basics/advanced-prompting/few-shot-prompting.json";
import fiberAndSchedulingConceptsLesson from "./frontend/courses/react-fundamentals/react-internals-modern-rendering/fiber-and-scheduling-concepts.json";
import fibonacciNumberLesson from "./backend/problems/csharp/05-dynamic-programming-problems/fibonacci-number.json";
import fieldTypesMappingLesson from "./frontend/courses/prisma/02-prisma-schema-design/field-types-mapping.json";
import fifoQueuesLesson from "./architecture/courses/message-queues-event-streaming/message-ordering-idempotency/fifo-queues.json";
import figgleLesson from "./backend/courses/dotnet-nuget-packages/09-utilities-helpers/figgle.json";
import fileDescriptorsAndOpenFilesLesson from "./devops/courses/git-linux-developer-workflow/linux-production-troubleshooting/file-descriptors-and-open-files.json";
import fileIoLesson from "./backend/courses/csharp-fundamentals/07-modern-csharp/file-io.json";
import fileShareCsharpLesson from "./backend/courses/azure-for-aspnet/03-azure-storage-blobs-queues/file-share-csharp.json";
import fileStorageDesignLesson from "./architecture/courses/system-design-interviews/common-system-designs/file-storage-design.json";
import fileUploadLesson from "./frontend/courses/yarn-npm-packages/react-forms-input/file-upload.json";
import fileUploadApiLesson from "./backend/problems/api-design/rest-api-design-scenarios/file-upload-api.json";
import fileUploadsLesson from "./frontend/courses/react-fundamentals/04-forms-input/file-uploads.json";
import filteringAndSortingLesson from "./frontend/courses/prisma/03-prisma-queries-mutations/filtering-and-sorting.json";
import filteringBasicsLesson from "./backend/courses/graphql-dotnet/04-filtering-pagination/filtering-basics.json";
import filteringOperatorWhereLesson from "./backend/courses/linq/03-filtering-projection/filtering-operator-where.json";
import finalFormLesson from "./frontend/courses/yarn-npm-packages/forms/final-form.json";
import findFirstSetBitLesson from "./backend/problems/csharp/08-bitwise-problems/find-first-set-bit.json";
import findMinimumInRotatedSortedArrayLesson from "./backend/problems/csharp/01-array-problems/find-minimum-in-rotated-sorted-array.json";
import finiteStateMachinesLesson from "./frontend/courses/react-advanced-patterns/08-state-machines-xstate/finite-state-machines.json";
import firewallsAndSecurityLesson from "./fundamentals/courses/programming-computer-web-foundations/networking-protocols/firewalls-and-security.json";
import firstEndpointLesson from "./backend/courses/aspnet-core-web-api/01-getting-started/first-endpoint.json";
import firstFirstordefaultLesson from "./backend/courses/linq/08-quantifiers-element-operators/first-firstordefault.json";
import firstProgramLesson from "./backend/courses/csharp-fundamentals/01-getting-started/first-program.json";
import firstQueryLesson from "./frontend/courses/apollo/01-apollo-basics/first-query.json";
import firstQueryLesson1 from "./frontend/courses/react-query/01-query-basics/first-query.json";
import firstReactAppLesson from "./frontend/courses/react-fundamentals/01-getting-started/first-react-app.json";
import firstUniqueCharLesson from "./backend/problems/csharp/02-string-problems/first-unique-char.json";
import fixupAutosquashLesson from "./devops/courses/git-linux-developer-workflow/advanced-rebase/fixup-autosquash.json";
import flakyTestDiagnosisLesson from "./frontend/courses/react-testing/testing-strategy-for-senior-frontend-engineers/flaky-test-diagnosis.json";
import flakyTestsLesson from "./backend/courses/unit-testing-dotnet/06-testing-patterns/flaky-tests.json";
import flexibleComponentApisLesson from "./frontend/courses/react-advanced-patterns/09-component-composition-strategies/flexible-component-apis.json";
import fluentApiInEntityFrameworkCoreLesson from "./backend/courses/ef-core/02-dbcontext-configuration/fluent-api-in-entity-framework-core.json";
import fluentAssertionsLesson from "./backend/courses/dotnet-nuget-packages/07-testing-quality/fluent-assertions.json";
import fluentEmailLesson from "./backend/courses/dotnet-nuget-packages/09-utilities-helpers/fluent-email.json";
import fluentvalidationLesson from "./backend/courses/dotnet-nuget-packages/validation-authorization/fluentvalidation.json";
import flurlLesson from "./backend/courses/dotnet-nuget-packages/http-clients-resilience/flurl.json";
import foodDeliveryLesson from "./architecture/problems/lld/food-delivery/food-delivery.json";
import foodDeliveryHldLesson from "./architecture/problems/hld/food-delivery-hld/food-delivery-hld.json";
import foreignDataWrappersLesson from "./database/courses/postgresql/advanced-topics/foreign-data-wrappers.json";
import foreignKeyLesson from "./database/courses/postgresql/constraints/foreign-key.json";
import formIntegrationLesson from "./frontend/courses/react-query/09-real-world-patterns/form-integration.json";
import formStateManagementLesson from "./frontend/courses/next-js-full-stack-react/state-management/form-state-management.json";
import formSubmissionLesson from "./frontend/courses/react-fundamentals/04-forms-input/form-submission.json";
import formValidationLesson from "./frontend/courses/react-fundamentals/04-forms-input/form-validation.json";
import formValidationLesson1 from "./frontend/courses/yarn-npm-packages/react-forms-input/form-validation.json";
import formikLesson from "./frontend/courses/yarn-npm-packages/forms/formik.json";
import forwardingRefsLesson from "./frontend/courses/react-fundamentals/06-context-refs/forwarding-refs.json";
import framerMotionLesson from "./frontend/courses/yarn-npm-packages/animation/framer-motion.json";
import fromBodyLesson from "./backend/courses/aspnet-core-web-api/03-model-binding/from-body.json";
import fromQueryLesson from "./backend/courses/aspnet-core-web-api/03-model-binding/from-query.json";
import frontDoorVsApplicationGatewayLesson from "./devops/problems/azure/06-azure-networking-problems/front-door-vs-application-gateway.json";
import frontDoorVsApplicationGatewayVsLoadBalancerLesson from "./devops/courses/azure/08-networking-and-api-platforms/front-door-vs-application-gateway-vs-load-balancer.json";
import frontendMemoryLeaksLesson from "./architecture/courses/frontend-performance-engineering/browser-react-performance/frontend-memory-leaks.json";
import fullOuterJoinLesson from "./database/courses/postgresql/joins/full-outer-join.json";
import fullstackPostgresqlPrismaNextjsLesson from "./frontend/courses/prisma/07-prisma-nextjs-integration/fullstack-postgresql-prisma-nextjs.json";
import functionalComponentsLesson from "./frontend/courses/react-fundamentals/02-components-props/functional-components.json";
import functionalVsNonFunctionalLesson from "./architecture/courses/system-design-interviews/requirement-clarification/functional-vs-non-functional.json";
import functionalVsNonFunctionalRequirementsLesson from "./architecture/courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/functional-vs-non-functional-requirements.json";
import functionsBindingsLesson from "./devops/courses/azure/03-serverless-and-azure-functions/functions-bindings.json";
import functionsCsharpLesson from "./backend/courses/azure-for-aspnet/07-azure-functions/functions-csharp.json";
import functionsDependencyInjectionLesson from "./backend/courses/azure-for-aspnet/07-azure-functions/functions-dependency-injection.json";
import functionsDependencyInjectionAndConfigurationLesson from "./devops/courses/azure/03-serverless-and-azure-functions/functions-dependency-injection-and-configuration.json";
import functionsDurableWorkflowsLesson from "./devops/courses/azure/03-serverless-and-azure-functions/functions-durable-workflows.json";
import functionsEventDrivenDevelopmentLesson from "./devops/courses/azure/03-serverless-and-azure-functions/functions-event-driven-development.json";
import functionsHttpApisLesson from "./devops/courses/azure/03-serverless-and-azure-functions/functions-http-apis.json";
import functionsIntroLesson from "./backend/courses/azure-for-aspnet/07-azure-functions/functions-intro.json";
import functionsLocalDevelopmentAndDebuggingLesson from "./devops/courses/azure/03-serverless-and-azure-functions/functions-local-development-and-debugging.json";
import functionsMethodsLesson from "./architecture/courses/clean-code-csharp/05-clean-code-practices/functions-methods.json";
import functionsProgrammingModelsLesson from "./devops/courses/azure/03-serverless-and-azure-functions/functions-programming-models.json";
import functionsScalingAndHostingPlansLesson from "./devops/courses/azure/03-serverless-and-azure-functions/functions-scaling-and-hosting-plans.json";
import functionsStorageQueuesAndTimersLesson from "./devops/courses/azure/03-serverless-and-azure-functions/functions-storage-queues-and-timers.json";
import functionsTriggersLesson from "./devops/courses/azure/03-serverless-and-azure-functions/functions-triggers.json";
import functionsTypesLesson from "./frontend/courses/typescript-for-react/01-typescript-basics/functions-types.json";
import garbageCollectionHowWouldYouInvestigateAllocationAndGcPressureLesson from "./interview-qa/c-net-follow-ups/garbage-collection-how-would-you-investigate-allocation-and-gc-pressure.json";
import gatewaySecurityLesson from "./architecture/courses/microservices-architecture/api-gateway-patterns/gateway-security.json";
import gcGenerationsLesson from "./interview-qa/03-advanced-questions/gc-generations.json";
import gcGenerationsAndCollectionBehaviorLesson from "./backend/courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/gc-generations-and-collection-behavior.json";
import genI01Lesson from "./interview-qa/02-intermediate-questions/gen-i01.json";
import generateSqlScriptFromModelLesson from "./backend/courses/ef-core/09-migrations/generate-sql-script-from-model.json";
import generationOperatorsLesson from "./backend/courses/linq/10-conversion-generation-operators/generation-operators.json";
import generativeAiArchitectureLesson from "./devops/courses/aws/14-ai-machine-learning/generative-ai-architecture.json";
import genericFormLesson from "./frontend/courses/typescript-for-react/05-generic-components/generic-form.json";
import genericHostAndApplicationLifetimeLesson from "./backend/courses/aspnet-core/asp-net-core-internals-production-hosting/generic-host-and-application-lifetime.json";
import genericListLesson from "./frontend/courses/typescript-for-react/05-generic-components/generic-list.json";
import genericsLesson from "./backend/courses/csharp-fundamentals/05-advanced-features/generics.json";
import genericsBasicsLesson from "./frontend/courses/typescript-for-react/04-advanced-types/generics-basics.json";
import genericsCsharpLesson from "./interview-qa/02-intermediate-questions/generics-csharp.json";
import geospatialQueriesLesson from "./architecture/courses/redis-caching-strategies/redis-use-cases/geospatial-queries.json";
import gettingStartedEfCoreLesson from "./backend/courses/ef-core/01-getting-started-ef-core/getting-started-ef-core.json";
import gettingStartedJestLesson from "./frontend/courses/react-testing/02-jest-basics/getting-started-jest.json";
import gettingStartedXunitLesson from "./backend/courses/unit-testing-dotnet/02-xunit-basics/getting-started-xunit.json";
import ginGistIndexesLesson from "./database/courses/postgresql/indexes/gin-gist-indexes.json";
import gitAndCiCdLesson from "./devops/courses/git-linux-developer-workflow/advanced-git-workflows/git-and-ci-cd.json";
import gitBestPracticesLesson from "./devops/courses/git-linux-developer-workflow/advanced-git-workflows/git-best-practices.json";
import gitBisectForRegressionInvestigationLesson from "./devops/courses/git-linux-developer-workflow/git-for-senior-engineers/git-bisect-for-regression-investigation.json";
import gitBlameAnnotateLesson from "./devops/courses/git-linux-developer-workflow/git-bisect-debugging/git-blame-annotate.json";
import gitDirectoryStructureLesson from "./devops/courses/git-linux-developer-workflow/git-internals/git-directory-structure.json";
import gitFlowLesson from "./devops/courses/git-linux-developer-workflow/git-workflows/git-flow.json";
import gitGarbageCollectionLesson from "./devops/courses/git-linux-developer-workflow/git-internals/git-garbage-collection.json";
import gitIndexStagingAreaLesson from "./devops/courses/git-linux-developer-workflow/git-internals/git-index-staging-area.json";
import gitInternalsLesson from "./devops/courses/git-linux-developer-workflow/advanced-git-workflows/git-internals.json";
import gitObjectsBlobsTreesCommitsLesson from "./devops/courses/git-linux-developer-workflow/git-internals/git-objects-blobs-trees-commits.json";
import gitPackFilesLesson from "./devops/courses/git-linux-developer-workflow/git-internals/git-pack-files.json";
import gitRefsAndHeadLesson from "./devops/courses/git-linux-developer-workflow/git-internals/git-refs-and-head.json";
import gitSecurityLesson from "./devops/courses/git-linux-developer-workflow/advanced-git-workflows/git-security.json";
import gitSecurityBestPracticesLesson from "./devops/courses/git-linux-developer-workflow/git-security/git-security-best-practices.json";
import githubActionsAzureAuthenticationLesson from "./devops/courses/azure/11-application-deployment-and-devops/github-actions-azure-authentication.json";
import githubActionsForAzureLesson from "./devops/courses/azure/11-application-deployment-and-devops/github-actions-for-azure.json";
import githubCopilotGuideLesson from "./ai/courses/codex/ai-coding-tools/github-copilot-guide.json";
import githubFlowLesson from "./devops/courses/git-linux-developer-workflow/git-workflows/github-flow.json";
import gitlabFlowLesson from "./devops/courses/git-linux-developer-workflow/git-workflows/gitlab-flow.json";
import globalErrorHandlingLesson from "./backend/courses/aspnet-core-web-api/06-error-handling-validation/global-error-handling.json";
import globalLoadBalancingLesson from "./architecture/courses/system-design-interviews/load-balancing/global-load-balancing.json";
import googleDriveStorageLesson from "./architecture/problems/lld/google-drive-storage/google-drive-storage.json";
import googleSearchLesson from "./architecture/problems/hld/google-search/google-search.json";
import googleSearchDesignLesson from "./architecture/courses/system-design-interviews/real-world-case-studies/google-search-design.json";
import governanceCostManagementLesson from "./devops/courses/aws/02-identity-access-governance/governance-cost-management.json";
import gpgCommitSigningLesson from "./devops/courses/git-linux-developer-workflow/git-security/gpg-commit-signing.json";
import graphValidTreeLesson from "./backend/problems/csharp/04-tree-graph-problems/graph-valid-tree.json";
import graphqlBasicsLesson from "./frontend/courses/apollo/01-apollo-basics/graphql-basics.json";
import graphqlRequestLesson from "./frontend/courses/yarn-npm-packages/http-clients/graphql-request.json";
import groupAnagramsLesson from "./backend/problems/csharp/02-string-problems/group-anagrams.json";
import groupByLesson from "./database/courses/postgresql/grouping-aggregation-subqueries/group-by.json";
import groupingOperatorGroupbyTolookupLesson from "./backend/courses/linq/04-sorting-grouping/grouping-operator-groupby-tolookup.json";
import groupjoinOperatorLesson from "./backend/courses/linq/05-joining-data/groupjoin-operator.json";
import growthProjectionsLesson from "./architecture/courses/system-design-interviews/capacity-estimation/growth-projections.json";
import grpcAndProtobufLesson from "./fundamentals/courses/programming-computer-web-foundations/networking-protocols/grpc-and-protobuf.json";
import gsapLesson from "./frontend/courses/yarn-npm-packages/animation/gsap.json";
import handlingEventsLesson from "./frontend/courses/react-fundamentals/03-state-events/handling-events.json";
import handlingTechnicalDisagreementLesson from "./fundamentals/courses/senior-software-engineering/technical-leadership/handling-technical-disagreement.json";
import handlingUserInputLesson from "./backend/courses/aspnet-core/02-mvc-fundamentals/handling-user-input.json";
import hangfireLesson from "./backend/courses/dotnet-nuget-packages/06-messaging-events/hangfire.json";
import hashTablesLesson from "./fundamentals/courses/programming-computer-web-foundations/data-structures-deep-dive/hash-tables.json";
import havingClauseLesson from "./database/courses/postgresql/grouping-aggregation-subqueries/having-clause.json";
import headerExchangeLesson from "./architecture/courses/message-queues-event-streaming/publish-subscribe-patterns/header-exchange.json";
import headerVersioningLesson from "./backend/problems/api-design/api-versioning-problems/header-versioning.json";
import headlessComponentsLesson from "./frontend/courses/react-advanced-patterns/09-component-composition-strategies/headless-components.json";
import healthChecksLesson from "./architecture/courses/system-design-interviews/load-balancing/health-checks.json";
import healthChecksLesson1 from "./backend/problems/aspnet-core/08-testing-debugging-problems/health-checks.json";
import healthChecksAndLoadBalancingLesson from "./architecture/courses/microservices-architecture/service-discovery/health-checks-and-load-balancing.json";
import healthChecksAndReadinessVsLivenessLesson from "./backend/courses/aspnet-core/asp-net-core-internals-production-hosting/health-checks-and-readiness-vs-liveness.json";
import healthEndpointsAndDependencyChecksLesson from "./backend/courses/aspnet-core/performance-observability/health-endpoints-and-dependency-checks.json";
import heapsLesson from "./fundamentals/courses/programming-computer-web-foundations/data-structures-deep-dive/heaps.json";
import highAvailabilityAndZoneAwareArchitectureLesson from "./devops/courses/azure/production-architecture-reliability-cost/high-availability-and-zone-aware-architecture.json";
import higherOrderComponentsTypedLesson from "./frontend/courses/typescript-for-react/05-generic-components/higher-order-components-typed.json";
import historyOfAiCodingLesson from "./ai/courses/codex/intro-to-ai-coding/history-of-ai-coding.json";
import hocBasicsLesson from "./frontend/courses/react-advanced-patterns/02-higher-order-components/hoc-basics.json";
import hocCompositionLesson from "./frontend/courses/react-advanced-patterns/02-higher-order-components/hoc-composition.json";
import hocExamplesLesson from "./frontend/courses/react-advanced-patterns/02-higher-order-components/hoc-examples.json";
import hookBestPracticesLesson from "./frontend/courses/react-advanced-patterns/10-advanced-hook-patterns/hook-best-practices.json";
import hookCompositionPatternsLesson from "./frontend/courses/react-advanced-patterns/07-custom-hooks-architecture/hook-composition-patterns.json";
import hookErrorHandlingLesson from "./frontend/courses/react-advanced-patterns/07-custom-hooks-architecture/hook-error-handling.json";
import hookFundamentalsLesson from "./devops/courses/git-linux-developer-workflow/git-hooks/hook-fundamentals.json";
import hooksAndAutomationLesson from "./devops/courses/git-linux-developer-workflow/advanced-git-workflows/hooks-and-automation.json";
import horizontalPodAutoscalerLesson from "./devops/courses/devops/production-kubernetes-day-2-operations/horizontal-pod-autoscaler.json";
import horizontalVsVerticalScalingLesson from "./architecture/courses/system-design-interviews/scalability-patterns/horizontal-vs-vertical-scaling.json";
import hospitalSystemSchemaLesson from "./database/problems/database-design/schema-design-scenarios/hospital-system-schema.json";
import hostingAndDeployingMcpServersLesson from "./ai/courses/dotnet-ai-backend/04-mcp-servers-tools/hosting-and-deploying-mcp-servers.json";
import hotchocolateProjectSetupLesson from "./backend/courses/graphql-dotnet/01-getting-started/hotchocolate-project-setup.json";
import hotelManagementLesson from "./architecture/problems/lld/hotel-management/hotel-management.json";
import houseRobberLesson from "./backend/problems/csharp/05-dynamic-programming-problems/house-robber.json";
import houseRobberIiLesson from "./backend/problems/csharp/05-dynamic-programming-problems/house-robber-ii.json";
import howAgentsWorkLesson from "./ai/courses/ai-basics/agents-introduction/how-agents-work.json";
import howDoYouGuaranteeAnOperationIsAppliedOnlyOnceLesson from "./interview-qa/architecture-follow-ups/how-do-you-guarantee-an-operation-is-applied-only-once.json";
import howDoYouHandleADatabaseTransactionThatSucceedsButEventPublishingFailsLesson from "./interview-qa/backend-database-follow-ups/how-do-you-handle-a-database-transaction-that-succeeds-but-event-publishing-fails.json";
import howLlmsWorkSimplyLesson from "./ai/courses/ai-basics/what-is-ai/how-llms-work-simply.json";
import howSourceCodeBecomesARunningProgramLesson from "./fundamentals/courses/programming-computer-web-foundations/programming-computer-fundamentals/how-source-code-becomes-a-running-program.json";
import howTheQueryOptimizerChoosesAPlanLesson from "./database/courses/sql-server/database-internals-query-optimization/how-the-query-optimizer-chooses-a-plan.json";
import howToTroubleshootAFailingHttpRequestLesson from "./fundamentals/courses/programming-computer-web-foundations/web-networking-fundamentals/how-to-troubleshoot-a-failing-http-request.json";
import howWouldYouDebugAPageWithPoorInpLesson from "./interview-qa/react-frontend-follow-ups/how-would-you-debug-a-page-with-poor-inp.json";
import howWouldYouDesignIdempotencyForAPaymentApiLesson from "./interview-qa/backend-database-follow-ups/how-would-you-design-idempotency-for-a-payment-api.json";
import howWouldYouDesignRetryBehaviorWithoutCreatingARetryStormLesson from "./interview-qa/backend-database-follow-ups/how-would-you-design-retry-behavior-without-creating-a-retry-storm.json";
import howWouldYouDiagnoseAReactMemoryLeakLesson from "./interview-qa/react-frontend-follow-ups/how-would-you-diagnose-a-react-memory-leak.json";
import howWouldYouEvolveAnApiWithoutBreakingOldClientsLesson from "./interview-qa/architecture-follow-ups/how-would-you-evolve-an-api-without-breaking-old-clients.json";
import howWouldYouHandleADatabaseDeadlockInProductionLesson from "./interview-qa/backend-database-follow-ups/how-would-you-handle-a-database-deadlock-in-production.json";
import howWouldYouImplementOptimisticUpdatesWithRollbackLesson from "./interview-qa/react-frontend-follow-ups/how-would-you-implement-optimistic-updates-with-rollback.json";
import howWouldYouPartitionADatabaseThatHasOutgrownOneNodeLesson from "./interview-qa/architecture-follow-ups/how-would-you-partition-a-database-that-has-outgrown-one-node.json";
import howWouldYouReduceAJavascriptBundleThatHasGrownTooLargeLesson from "./interview-qa/react-frontend-follow-ups/how-would-you-reduce-a-javascript-bundle-that-has-grown-too-large.json";
import howWouldYourArchitectureBehaveIfOneDependencyBecameUnavailableLesson from "./interview-qa/architecture-follow-ups/how-would-your-architecture-behave-if-one-dependency-became-unavailable.json";
import http11Http2Http3Lesson from "./fundamentals/courses/programming-computer-web-foundations/networking-protocols/http-1-1-http-2-http-3.json";
import httpMethodsAndStatusCodesLesson from "./backend/courses/aspnet-core/10-web-api-rest/http-methods-and-status-codes.json";
import httpMethodsStatusCodesLesson from "./architecture/courses/system-design-interviews/api-design/http-methods-status-codes.json";
import httpMethodsStatusCodesAndHeadersLesson from "./fundamentals/courses/programming-computer-web-foundations/web-networking-fundamentals/http-methods-status-codes-and-headers.json";
import httpRequestAndResponseLifecycleLesson from "./fundamentals/courses/programming-computer-web-foundations/web-networking-fundamentals/http-request-and-response-lifecycle.json";
import httpStatusCodeSelectionLesson from "./backend/problems/api-design/error-handling-design/http-status-code-selection.json";
import http11VsHttp2VsHttp3Lesson from "./fundamentals/courses/programming-computer-web-foundations/web-networking-fundamentals/http11-vs-http2-vs-http3.json";
import httpclientfactoryLesson from "./backend/courses/dotnet-nuget-packages/http-clients-resilience/httpclientfactory.json";
import humanInTheLoopAndApprovalFlowsLesson from "./ai/courses/dotnet-ai-backend/05-ai-agents-dotnet/human-in-the-loop-and-approval-flows.json";
import humanizerLesson from "./backend/courses/dotnet-nuget-packages/09-utilities-helpers/humanizer.json";
import huskyLintStagedLesson from "./devops/courses/git-linux-developer-workflow/git-hooks/husky-lint-staged.json";
import hydrationAndHydrationMismatchesLesson from "./frontend/courses/react-fundamentals/react-internals-modern-rendering/hydration-and-hydration-mismatches.json";
import hydrationStrategiesLesson from "./frontend/courses/react-query/07-prefetching-ssr/hydration-strategies.json";
import iamFundamentalsLesson from "./devops/courses/aws/02-identity-access-governance/iam-fundamentals.json";
import iamPoliciesPermissionsLesson from "./devops/courses/aws/02-identity-access-governance/iam-policies-permissions.json";
import iamRolesEcsLesson from "./backend/courses/aws-for-aspnet/04-aws-secrets-manager/iam-roles-ecs.json";
import iasyncdisposableAndAsyncResourceCleanupLesson from "./backend/courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/iasyncdisposable-and-async-resource-cleanup.json";
import idempotencyKeysAndDuplicateRequestHandlingLesson from "./backend/courses/aspnet-core-web-api/production-api-design-reliability/idempotency-keys-and-duplicate-request-handling.json";
import idempotentProcessingLesson from "./architecture/courses/message-queues-event-streaming/message-ordering-idempotency/idempotent-processing.json";
import identityFederationLesson from "./backend/courses/authentication-authorization/08-sso-identity-providers/identity-federation.json";
import identityIntegrationLesson from "./backend/courses/graphql-dotnet/05-authentication/identity-integration.json";
import identityModelLesson from "./backend/courses/dotnet-nuget-packages/08-security-cryptography/identity-model.json";
import identityOverviewLesson from "./backend/courses/authentication-authorization/03-identity/identity-overview.json";
import identityServerSetupLesson from "./backend/problems/aspnet-core/07-authentication-authorization-problems/identity-server-setup.json";
import identitySetupLesson from "./backend/courses/aspnet-core/09-authentication-authorization/identity-setup.json";
import identityserverLesson from "./backend/courses/dotnet-nuget-packages/validation-authorization/identityserver.json";
import idisposableFinalizationAndDeterministicCleanupLesson from "./backend/courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/idisposable-finalization-and-deterministic-cleanup.json";
import idistributedcacheRedisLesson from "./architecture/courses/redis-caching-strategies/caching-in-aspnet-core/idistributedcache-redis.json";
import ihttpclientfactoryAndHandlerLifetimesLesson from "./backend/courses/aspnet-core/asp-net-core-internals-production-hosting/ihttpclientfactory-and-handler-lifetimes.json";
import imageAndFontOptimizationLesson from "./architecture/courses/frontend-performance-engineering/browser-react-performance/image-and-font-optimization.json";
import imageLayersAndBuildCacheLesson from "./devops/courses/devops/production-docker-container-security/image-layers-and-build-cache.json";
import imageScanningAndSupplyChainSecurityLesson from "./devops/courses/devops/production-docker-container-security/image-scanning-and-supply-chain-security.json";
import imagesAndAiLesson from "./ai/courses/ai-basics/multimodal-ai/images-and-ai.json";
import imemorycacheLesson from "./architecture/courses/redis-caching-strategies/caching-in-aspnet-core/imemorycache.json";
import immerLesson from "./frontend/courses/yarn-npm-packages/utilities/immer.json";
import immutabilityLesson from "./frontend/courses/redux/01-redux-fundamentals/immutability.json";
import imperativeHandlePatternsLesson from "./frontend/courses/react-advanced-patterns/10-advanced-hook-patterns/imperative-handle-patterns.json";
import implementStrstrLesson from "./backend/problems/csharp/02-string-problems/implement-strstr.json";
import implementingApiKeysLesson from "./architecture/courses/fullstack-security/04-api-security-rate-limiting/implementing-api-keys.json";
import inboxdeduplicationPatternLesson from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/inboxdeduplication-pattern.json";
import incidentCommandAndCommunicationLesson from "./fundamentals/courses/senior-software-engineering/production-ownership/incident-command-and-communication.json";
import incidentResponseLesson from "./devops/courses/git-linux-developer-workflow/production-readiness/incident-response.json";
import incidentSeverityAndResponseLesson from "./fundamentals/courses/senior-software-engineering/production-ownership/incident-severity-and-response.json";
import includedColumnsAndCoveringIndexesLesson from "./database/courses/sql-server/database-internals-query-optimization/included-columns-and-covering-indexes.json";
import incrementalMigrationVsRewriteLesson from "./architecture/courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/incremental-migration-vs-rewrite.json";
import indexFundamentalsLesson from "./database/courses/postgresql/indexes/index-fundamentals.json";
import indexFundamentalsLesson1 from "./database/problems/database-design/index-optimization/index-fundamentals.json";
import indexMaintenanceLesson from "./database/courses/postgresql/indexes/index-maintenance.json";
import indexMaintenanceOverheadLesson from "./database/problems/database-design/index-optimization/index-maintenance-overhead.json";
import indexMaintenanceVsActualQueryPerformanceLesson from "./database/courses/sql-server/concurrency-production-database-problems/index-maintenance-vs-actual-query-performance.json";
import indexSelectivityLesson from "./database/problems/database-design/index-optimization/index-selectivity.json";
import indexeddbPersistenceLesson from "./frontend/courses/react-query/06-offline-support-persistence/indexeddb-persistence.json";
import indexingStrategiesLesson from "./architecture/courses/system-design-interviews/database-design/indexing-strategies.json";
import infiniteQueriesLesson from "./frontend/courses/react-query/02-query-hooks/infinite-queries.json";
import influencingWithoutAuthorityLesson from "./fundamentals/courses/senior-software-engineering/technical-leadership/influencing-without-authority.json";
import infrastructureAsCodeConceptsLesson from "./devops/courses/azure/12-infrastructure-as-code-and-automation/infrastructure-as-code-concepts.json";
import infrastructureAutomationWithCiCdLesson from "./devops/courses/azure/12-infrastructure-as-code-and-automation/infrastructure-automation-with-ci-cd.json";
import infrastructureErrorsLesson from "./backend/problems/api-design/error-handling-design/infrastructure-errors.json";
import ingressAndTrafficRoutingLesson from "./devops/courses/devops/production-kubernetes-day-2-operations/ingress-and-traffic-routing.json";
import inheritanceLesson from "./backend/courses/csharp-fundamentals/04-oop/inheritance.json";
import inheritanceBasicsLesson from "./fundamentals/courses/oops-concepts/03-inheritance/inheritance-basics.json";
import inheritanceHierarchiesLesson from "./fundamentals/courses/oops-concepts/03-inheritance/inheritance-hierarchies.json";
import inheritanceStrategiesLesson from "./backend/courses/ef-core/08-inheritance-strategies/inheritance-strategies.json";
import inheritanceStrategyInEfCoreLesson from "./backend/courses/ef-core/08-inheritance-strategies/inheritance-strategy-in-ef-core.json";
import initialDataPlaceholderLesson from "./frontend/courses/react-query/02-query-hooks/initial-data-placeholder.json";
import injectingServicesLesson from "./backend/courses/aspnet-core-web-api/05-dependency-injection/injecting-services.json";
import inlineStylesLesson from "./frontend/courses/react-fundamentals/08-styling/inline-styles.json";
import innerJoinLesson from "./database/courses/postgresql/joins/inner-join.json";
import inputTypesLesson from "./backend/courses/graphql-dotnet/02-schema-types/input-types.json";
import inputValidationLesson from "./architecture/courses/fullstack-security/05-secure-api-design/input-validation.json";
import insertLesson from "./database/courses/postgresql/data-modification-dml/insert.json";
import insertDataDisconnectedScenarioLesson from "./backend/courses/ef-core/05-data-operations-disconnected/insert-data-disconnected-scenario.json";
import insertIntervalLesson from "./backend/problems/csharp/01-array-problems/insert-interval.json";
import insertOnConflictLesson from "./database/courses/postgresql/data-modification-dml/insert-on-conflict.json";
import instagramFeedLesson from "./architecture/problems/hld/instagram-feed/instagram-feed.json";
import instagramFeedDesignLesson from "./architecture/courses/system-design-interviews/real-world-case-studies/instagram-feed-design.json";
import instagramPhotoSharingLesson from "./architecture/problems/lld/instagram-photo-sharing/instagram-photo-sharing.json";
import installEntityFrameworkCoreLesson from "./backend/courses/ef-core/01-getting-started-ef-core/install-entity-framework-core.json";
import installationSetupLesson from "./database/courses/postgresql/getting-started/installation-setup.json";
import installingHotchocolateLesson from "./backend/courses/graphql-dotnet/01-getting-started/installing-hotchocolate.json";
import installingPackagesLesson from "./backend/courses/dotnet-nuget-packages/01-nuget-fundamentals/installing-packages.json";
import installingPackagesLesson1 from "./frontend/courses/yarn-npm-packages/yarn-npm-fundamentals/installing-packages.json";
import installingPrismaInNextjsLesson from "./frontend/courses/prisma/01-prisma-basics/installing-prisma-in-nextjs.json";
import insteadOfTriggersLesson from "./database/courses/postgresql/triggers/instead-of-triggers.json";
import integratingAiServicesIntoAzureApplicationsLesson from "./devops/courses/azure/13-ai-services-for-azure-developers/integrating-ai-services-into-azure-applications.json";
import integratingXstateReactLesson from "./frontend/courses/react-advanced-patterns/08-state-machines-xstate/integrating-xstate-react.json";
import integrationTestingLesson from "./backend/courses/aspnet-core/11-testing-debugging/integration-testing.json";
import integrationTestingLesson1 from "./backend/problems/aspnet-core/08-testing-debugging-problems/integration-testing.json";
import integrationTestingBasicsLesson from "./backend/courses/unit-testing-dotnet/04-integration-testing/integration-testing-basics.json";
import interactiveRebaseLesson from "./devops/courses/git-linux-developer-workflow/git-for-senior-engineers/interactive-rebase.json";
import interactiveRebaseBasicsLesson from "./devops/courses/git-linux-developer-workflow/advanced-rebase/interactive-rebase-basics.json";
import interfaceBasicsLesson from "./fundamentals/courses/oops-concepts/06-interfaces-abstract-classes/interface-basics.json";
import interfaceSegregationLesson from "./architecture/courses/clean-code-csharp/01-solid-principles/interface-segregation.json";
import interfacesLesson from "./backend/courses/csharp-fundamentals/04-oop/interfaces.json";
import interfacesTypesLesson from "./frontend/courses/typescript-for-react/01-typescript-basics/interfaces-types.json";
import intermediateQ1Lesson from "./interview-qa/02-intermediate-questions/intermediate-q1.json";
import intermediateQ2Lesson from "./interview-qa/02-intermediate-questions/intermediate-q2.json";
import intermediateQ3Lesson from "./interview-qa/02-intermediate-questions/intermediate-q3.json";
import intermediateQ4Lesson from "./interview-qa/02-intermediate-questions/intermediate-q4.json";
import intermediateQ5Lesson from "./interview-qa/02-intermediate-questions/intermediate-q5.json";
import intersectLesson from "./database/courses/postgresql/set-operations/intersect.json";
import intersectSetOperatorLesson from "./backend/courses/linq/06-set-operations/intersect-set-operator.json";
import intersectionOfTwoLinkedListsLesson from "./backend/problems/csharp/03-linked-list-problems/intersection-of-two-linked-lists.json";
import interviewProblemsLesson from "./fundamentals/courses/programming-computer-web-foundations/data-structures-deep-dive/interview-problems.json";
import introduceBrokenDeploymentLesson from "./architecture/problems/full-stack-senior-projects/project-3-production-incident-simulator/introduce-broken-deployment.json";
import introduceCacheFailureLesson from "./architecture/problems/full-stack-senior-projects/project-3-production-incident-simulator/introduce-cache-failure.json";
import introduceDatabasePerformanceRegressionLesson from "./architecture/problems/full-stack-senior-projects/project-3-production-incident-simulator/introduce-database-performance-regression.json";
import introduceDownstreamTimeoutLesson from "./architecture/problems/full-stack-senior-projects/project-3-production-incident-simulator/introduce-downstream-timeout.json";
import introduceDuplicateMessageProcessingLesson from "./architecture/problems/full-stack-senior-projects/project-3-production-incident-simulator/introduce-duplicate-message-processing.json";
import introduceKubernetesHealthCheckFailureLesson from "./architecture/problems/full-stack-senior-projects/project-3-production-incident-simulator/introduce-kubernetes-health-check-failure.json";
import introduceMemoryLeakLesson from "./architecture/problems/full-stack-senior-projects/project-3-production-incident-simulator/introduce-memory-leak.json";
import introductionToGraphqlLesson from "./backend/courses/graphql-dotnet/01-getting-started/introduction-to-graphql.json";
import invalidationLesson from "./frontend/courses/react-query/03-mutations/invalidation.json";
import invalidationPropagationLesson from "./architecture/courses/redis-caching-strategies/cache-invalidation/invalidation-propagation.json";
import investigateUsingLogsMetricsAndTracesLesson from "./architecture/problems/full-stack-senior-projects/project-3-production-incident-simulator/investigate-using-logs-metrics-and-traces.json";
import iocContainerSetupLesson from "./backend/problems/aspnet-core/05-dependency-injection-problems/ioc-container-setup.json";
import ioredisLesson from "./architecture/courses/redis-caching-strategies/caching-in-nodejs/ioredis.json";
import isolationLevelsLesson from "./database/courses/postgresql/transactions-error-handling-backup/isolation-levels.json";
import isomorphicStringsLesson from "./backend/problems/csharp/02-string-problems/isomorphic-strings.json";
import iteratorPatternLesson from "./architecture/courses/design-patterns/03-behavioral-patterns/iterator-pattern.json";
import jankFreeAnimationsLesson from "./architecture/courses/frontend-performance-engineering/runtime-performance/jank-free-animations.json";
import jestLesson from "./frontend/courses/yarn-npm-packages/testing/jest.json";
import jitCompilationAndTieredCompilationLesson from "./backend/courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/jit-compilation-and-tiered-compilation.json";
import joinOperatorLesson from "./backend/courses/linq/05-joining-data/join-operator.json";
import joinOptimizationLesson from "./database/problems/database-design/query-optimization/join-optimization.json";
import joiningStreamsLesson from "./architecture/courses/message-queues-event-streaming/stream-processing/joining-streams.json";
import jotaiLesson from "./frontend/courses/yarn-npm-packages/state-management/jotai.json";
import jsA01Lesson from "./interview-qa/03-advanced-questions/js-a01.json";
import jsA02Lesson from "./interview-qa/03-advanced-questions/js-a02.json";
import jsB01Lesson from "./interview-qa/01-beginner-questions/js-b01.json";
import jsB02Lesson from "./interview-qa/01-beginner-questions/js-b02.json";
import jsEngineOptimizationLesson from "./architecture/courses/frontend-performance-engineering/runtime-performance/js-engine-optimization.json";
import jsI01Lesson from "./interview-qa/02-intermediate-questions/js-i01.json";
import jsI02Lesson from "./interview-qa/02-intermediate-questions/js-i02.json";
import jsI03Lesson from "./interview-qa/02-intermediate-questions/js-i03.json";
import jsI04Lesson from "./interview-qa/02-intermediate-questions/js-i04.json";
import jsI05Lesson from "./interview-qa/02-intermediate-questions/js-i05.json";
import jsonbAdvancedLesson from "./database/courses/postgresql/modern-data-tools/jsonb-advanced.json";
import jsonbArraysLesson from "./database/courses/postgresql/data-types/jsonb-arrays.json";
import jsonpatchLesson from "./backend/courses/dotnet-nuget-packages/09-utilities-helpers/jsonpatch.json";
import jsxBasicsLesson from "./frontend/courses/react-fundamentals/01-getting-started/jsx-basics.json";
import jsxBasicsLesson1 from "./interview-qa/01-beginner-questions/jsx-basics.json";
import jumpGameLesson from "./backend/problems/csharp/01-array-problems/jump-game.json";
import jwtLesson from "./backend/courses/dotnet-nuget-packages/08-security-cryptography/jwt.json";
import jwtAuthenticationLesson from "./backend/problems/aspnet-core/07-authentication-authorization-problems/jwt-authentication.json";
import jwtBasicsLesson from "./architecture/courses/fullstack-security/02-jwt-authentication/jwt-basics.json";
import jwtBasicsLesson1 from "./backend/courses/aspnet-core-web-api/07-authentication-basics/jwt-basics.json";
import jwtIntegrationLesson from "./backend/courses/graphql-dotnet/05-authentication/jwt-integration.json";
import jwtOverviewLesson from "./backend/courses/authentication-authorization/02-jwt/jwt-overview.json";
import jwtPitfallsAndTokenStorageLesson from "./architecture/courses/fullstack-security/modern-web-security-identity/jwt-pitfalls-and-token-storage.json";
import jwtStorageOptionsLesson from "./architecture/courses/fullstack-security/02-jwt-authentication/jwt-storage-options.json";
import jwtTokensLesson from "./backend/courses/aspnet-core/09-authentication-authorization/jwt-tokens.json";
import jwtbearerLesson from "./backend/courses/dotnet-nuget-packages/validation-authorization/jwtbearer.json";
import kafkaConfigurationLesson from "./architecture/courses/message-queues-event-streaming/event-streaming-kafka/kafka-configuration.json";
import kafkaConsumerGroupsLesson from "./architecture/courses/message-queues-event-streaming/event-streaming-kafka/kafka-consumer-groups.json";
import kafkaExactlyOnceProcessingLesson from "./architecture/courses/message-queues-event-streaming/event-streaming-kafka/kafka-exactly-once-processing.json";
import kafkaFundamentalsLesson from "./architecture/courses/message-queues-event-streaming/event-streaming-kafka/kafka-fundamentals.json";
import kafkaProducersConsumersLesson from "./architecture/courses/message-queues-event-streaming/event-streaming-kafka/kafka-producers-consumers.json";
import kafkaStreamsBasicsLesson from "./architecture/courses/message-queues-event-streaming/stream-processing/kafka-streams-basics.json";
import kafkaVsMessageQueuesLesson from "./architecture/courses/message-queues-event-streaming/event-streaming-kafka/kafka-vs-message-queues.json";
import kestrelAndTheAspnetCoreHostingModelLesson from "./backend/courses/aspnet-core/asp-net-core-internals-production-hosting/kestrel-and-the-aspnet-core-hosting-model.json";
import keyLookupAndBookmarkLookupLesson from "./database/courses/sql-server/database-internals-query-optimization/key-lookup-and-bookmark-lookup.json";
import keyVaultCsharpLesson from "./backend/courses/azure-for-aspnet/04-azure-key-vault-secrets/key-vault-csharp.json";
import keyVaultIntroLesson from "./backend/courses/azure-for-aspnet/04-azure-key-vault-secrets/key-vault-intro.json";
import keyVaultSecretsKeysAndCertificatesLesson from "./devops/courses/azure/07-identity-security-and-configuration/key-vault-secrets-keys-and-certificates.json";
import keyVaultSecretsManagementLesson from "./devops/problems/azure/07-azure-security-problems/key-vault-secrets-management.json";
import keyVaultVsAppConfigurationLesson from "./devops/courses/azure/07-identity-security-and-configuration/key-vault-vs-app-configuration.json";
import ksqldbBasicsLesson from "./architecture/courses/message-queues-event-streaming/stream-processing/ksqldb-basics.json";
import kubernetesMultiEnvArchitectureLesson from "./architecture/problems/system-design/devops-system-design/kubernetes-multi-env-architecture.json";
import kubernetesServiceDiscoveryLesson from "./architecture/courses/microservices-architecture/service-discovery/kubernetes-service-discovery.json";
import kustoQueryLanguageForDevelopersLesson from "./devops/courses/azure/10-observability-and-application-monitoring/kusto-query-language-for-developers.json";
import kyLesson from "./frontend/courses/yarn-npm-packages/http-clients/ky.json";
import l4VsL7LoadBalancingLesson from "./architecture/courses/system-design-interviews/load-balancing/l4-vs-l7-load-balancing.json";
import lambdaCsharpLesson from "./backend/courses/aws-for-aspnet/08-lambda-serverless/lambda-csharp.json";
import largeFileHandlingGitLfsLesson from "./devops/courses/git-linux-developer-workflow/git-performance/large-file-handling-git-lfs.json";
import largeObjectHeapAndPinnedObjectsLesson from "./backend/courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/large-object-heap-and-pinned-objects.json";
import largeRepositoriesLesson from "./devops/courses/git-linux-developer-workflow/advanced-git-workflows/large-repositories.json";
import largestElementInArrayLesson from "./backend/problems/csharp/01-array-problems/largest-element-in-array.json";
import lastLastordefaultLesson from "./backend/courses/linq/08-quantifiers-element-operators/last-lastordefault.json";
import lateralJoinLesson from "./database/courses/postgresql/joins/lateral-join.json";
import layoutCompositionLesson from "./frontend/courses/react-advanced-patterns/09-component-composition-strategies/layout-composition.json";
import layoutEffectPatternsLesson from "./frontend/courses/react-advanced-patterns/10-advanced-hook-patterns/layout-effect-patterns.json";
import layoutThrashingLesson from "./architecture/courses/frontend-performance-engineering/runtime-performance/layout-thrashing.json";
import layoutsAndPartialsLesson from "./backend/courses/aspnet-core/05-razor-views/layouts-and-partials.json";
import layoutsAndPartialsLesson1 from "./backend/problems/aspnet-core/02-razor-views-problems/layouts-and-partials.json";
import lazyEagerLoadingLesson from "./interview-qa/02-intermediate-questions/lazy-eager-loading.json";
import lazyLoadingAndPrefetchingLesson from "./architecture/courses/frontend-performance-engineering/browser-react-performance/lazy-loading-and-prefetching.json";
import leaderboardsSortedSetsLesson from "./architecture/courses/redis-caching-strategies/redis-use-cases/leaderboards-sorted-sets.json";
import leadersInArrayLesson from "./backend/problems/csharp/01-array-problems/leaders-in-array.json";
import leadershipQuestionsLesson from "./interview-qa/behavioral-interview-questions/leadership-questions.json";
import learnLinqStepByStepLesson from "./backend/courses/linq/01-getting-started-linq/learn-linq-step-by-step.json";
import leftRightJoinsLesson from "./database/courses/postgresql/joins/left-right-joins.json";
import legacyModernizationStrategiesLesson from "./architecture/courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/legacy-modernization-strategies.json";
import libraryManagementLesson from "./architecture/problems/lld/library-management/library-management.json";
import librarySystemSchemaLesson from "./database/problems/database-design/schema-design-scenarios/library-system-schema.json";
import limitOffsetFetchLesson from "./database/courses/postgresql/querying-data/limit-offset-fetch.json";
import linkedListCycleLesson from "./backend/problems/csharp/03-linked-list-problems/linked-list-cycle.json";
import linkedinProfessionalLesson from "./architecture/problems/lld/linkedin-professional/linkedin-professional.json";
import linkedinProfessionalHldLesson from "./architecture/problems/hld/linkedin-professional-hld/linkedin-professional-hld.json";
import linqApiInNetLesson from "./backend/courses/linq/01-getting-started-linq/linq-api-in-net.json";
import linqBasicsLesson from "./backend/courses/csharp-fundamentals/05-advanced-features/linq-basics.json";
import linqExpressionTreesAndSqlTranslationLesson from "./backend/courses/ef-core/ef-core-performance-orm-trade-offs/linq-expression-trees-and-sql-translation.json";
import linqHowDoYouIdentifyAQueryThatIsUnexpectedlyExpensiveLesson from "./interview-qa/c-net-follow-ups/linq-how-do-you-identify-a-query-that-is-unexpectedly-expensive.json";
import linqMethodSyntaxLesson from "./backend/courses/linq/02-linq-fundamentals-syntax/linq-method-syntax.json";
import linqQuerySyntaxLesson from "./backend/courses/linq/02-linq-fundamentals-syntax/linq-query-syntax.json";
import liskovSubstitutionLesson from "./architecture/courses/clean-code-csharp/01-solid-principles/liskov-substitution.json";
import listsAndKeysLesson from "./frontend/courses/react-fundamentals/02-components-props/lists-and-keys.json";
import livenessReadinessAndStartupProbesLesson from "./devops/courses/devops/production-kubernetes-day-2-operations/liveness-readiness-and-startup-probes.json";
import loadBalancerOverviewLesson from "./devops/courses/azure/08-networking-and-api-platforms/load-balancer-overview.json";
import loadBalancerVsApplicationGatewayLesson from "./devops/problems/azure/06-azure-networking-problems/load-balancer-vs-application-gateway.json";
import loadBalancersLesson from "./fundamentals/courses/programming-computer-web-foundations/networking-protocols/load-balancers.json";
import loadBalancingAlgorithmsLesson from "./architecture/courses/system-design-interviews/load-balancing/load-balancing-algorithms.json";
import loadingStatesLesson from "./frontend/courses/next-js-full-stack-react/data-fetching-patterns/loading-states.json";
import localAiOptionsLesson from "./ai/courses/ai-basics/local-vs-cloud-ai/local-ai-options.json";
import localOnlyFieldsLesson from "./frontend/courses/apollo/08-local-state-management/local-only-fields.json";
import localStateLesson from "./frontend/courses/apollo/04-advanced-patterns/local-state.json";
import localStateVsServerStateLesson from "./frontend/courses/next-js-full-stack-react/state-management/local-state-vs-server-state.json";
import localStateVsServerStateVsUrlStateLesson from "./frontend/courses/react-advanced-patterns/modern-state-application-architecture/local-state-vs-server-state-vs-url-state.json";
import lockAndMonitorLesson from "./backend/courses/csharp-fundamentals/advanced-async-concurrency-threading/lock-and-monitor.json";
import lockingRowsLesson from "./database/courses/postgresql/transactions-error-handling-backup/locking-rows.json";
import locksAndBlockingLesson from "./database/courses/sql-server/concurrency-production-database-problems/locks-and-blocking.json";
import lodashLesson from "./frontend/courses/yarn-npm-packages/utilities/lodash.json";
import logAnalyticsWorkspacesLesson from "./devops/courses/azure/10-observability-and-application-monitoring/log-analytics-workspaces.json";
import log4netLesson from "./backend/courses/dotnet-nuget-packages/logging-monitoring/log4net.json";
import loggingAndMonitoringLesson from "./architecture/courses/fullstack-security/04-api-security-rate-limiting/logging-and-monitoring.json";
import loggingAndMonitoringLesson1 from "./backend/courses/aspnet-core/11-testing-debugging/logging-and-monitoring.json";
import loggingBasicsLesson from "./backend/courses/aspnet-core-web-api/08-logging-configuration/logging-basics.json";
import loggingBestPracticesLesson from "./backend/problems/aspnet-core/08-testing-debugging-problems/logging-best-practices.json";
import loggingInEntityFrameworkCoreLesson from "./backend/courses/ef-core/11-database-first-diagnostics/logging-in-entity-framework-core.json";
import loggingStrategiesLesson from "./devops/courses/git-linux-developer-workflow/production-readiness/logging-strategies.json";
import logicalReplicationLesson from "./database/courses/postgresql/advanced-topics/logical-replication.json";
import logicalReplicationHaLesson from "./database/courses/postgresql/high-availability-dr/logical-replication-ha.json";
import longRunningTransactionsLesson from "./database/courses/sql-server/concurrency-production-database-problems/long-running-transactions.json";
import longTermImpactLesson from "./fundamentals/courses/senior-software-engineering/technical-decision-making/long-term-impact.json";
import longestCommonPrefixLesson from "./backend/problems/csharp/02-string-problems/longest-common-prefix.json";
import longestCommonSubsequenceLesson from "./backend/problems/csharp/05-dynamic-programming-problems/longest-common-subsequence.json";
import longestConsecutiveSequenceLesson from "./backend/problems/csharp/01-array-problems/longest-consecutive-sequence.json";
import longestIncreasingSubsequenceLesson from "./backend/problems/csharp/05-dynamic-programming-problems/longest-increasing-subsequence.json";
import longestPalindromicSubstringLesson from "./backend/problems/csharp/02-string-problems/longest-palindromic-substring.json";
import longestRepeatingCharReplacementLesson from "./backend/problems/csharp/02-string-problems/longest-repeating-char-replacement.json";
import longestSubstringLesson from "./backend/problems/csharp/02-string-problems/longest-substring.json";
import longestSubstringKDistinctLesson from "./backend/problems/csharp/02-string-problems/longest-substring-k-distinct.json";
import longestSubstringTwoDistinctLesson from "./backend/problems/csharp/02-string-problems/longest-substring-two-distinct.json";
import loopsLesson from "./backend/courses/csharp-fundamentals/03-control-flow/loops.json";
import lowestCommonAncestorOfBstLesson from "./backend/problems/csharp/04-tree-graph-problems/lowest-common-ancestor-of-bst.json";
import luaScriptingLesson from "./architecture/courses/redis-caching-strategies/performance-optimization/lua-scripting.json";
import mailkitLesson from "./backend/courses/dotnet-nuget-packages/09-utilities-helpers/mailkit.json";
import majorityElementLesson from "./backend/problems/csharp/01-array-problems/majority-element.json";
import makingAssumptionsLesson from "./architecture/courses/system-design-interviews/system-design-framework/making-assumptions.json";
import makingTechnicalTradeOffsExplicitLesson from "./architecture/courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/making-technical-trade-offs-explicit.json";
import manageDbConnectionStringLesson from "./backend/courses/ef-core/11-database-first-diagnostics/manage-db-connection-string.json";
import managedDisksAndApplicationStorageLesson from "./devops/courses/azure/05-storage-and-data-services/managed-disks-and-application-storage.json";
import managedHeapAndAllocationLifecycleLesson from "./backend/courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/managed-heap-and-allocation-lifecycle.json";
import managedIdentitiesLesson from "./backend/courses/azure-for-aspnet/04-azure-key-vault-secrets/managed-identities.json";
import managedIdentitiesLesson1 from "./devops/courses/azure/07-identity-security-and-configuration/managed-identities.json";
import managedIdentityArchitectureLesson from "./devops/courses/azure/production-architecture-reliability-cost/managed-identity-architecture.json";
import managedIdentityVsServicePrincipalLesson from "./devops/problems/azure/07-azure-security-problems/managed-identity-vs-service-principal.json";
import managedIdentityVsServicePrincipalsLesson from "./devops/courses/azure/07-identity-security-and-configuration/managed-identity-vs-service-principals.json";
import managedIdentityWithAzureSqlLesson from "./devops/courses/azure/06-databases-and-caching/managed-identity-with-azure-sql.json";
import managedIdentityWithAzureSqlLesson1 from "./devops/courses/azure/07-identity-security-and-configuration/managed-identity-with-azure-sql.json";
import managedIdentityWithKeyVaultLesson from "./devops/courses/azure/07-identity-security-and-configuration/managed-identity-with-key-vault.json";
import managedIdentityWithStorageLesson from "./devops/courses/azure/07-identity-security-and-configuration/managed-identity-with-storage.json";
import managingBreakingChangesAcrossBranchesLesson from "./devops/courses/git-linux-developer-workflow/git-for-senior-engineers/managing-breaking-changes-across-branches.json";
import managingDependenciesLesson from "./devops/courses/git-linux-developer-workflow/submodules-subtrees/managing-dependencies.json";
import managingTechnicalDebtLesson from "./architecture/courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/managing-technical-debt.json";
import manualInvalidationLesson from "./architecture/courses/redis-caching-strategies/cache-invalidation/manual-invalidation.json";
import manyToManyRelationsLesson from "./frontend/courses/prisma/04-prisma-relations/many-to-many-relations.json";
import mapsterLesson from "./backend/courses/dotnet-nuget-packages/05-serialization-mapping/mapster.json";
import masstransitLesson from "./backend/courses/dotnet-nuget-packages/06-messaging-events/masstransit.json";
import matchersAssertionsLesson from "./frontend/courses/react-testing/02-jest-basics/matchers-assertions.json";
import materializedViewsLesson from "./database/courses/postgresql/views/materialized-views.json";
import maxConsecutiveOnesLesson from "./backend/problems/csharp/08-bitwise-problems/max-consecutive-ones.json";
import maximumDepthOfBinaryTreeLesson from "./backend/problems/csharp/04-tree-graph-problems/maximum-depth-of-binary-tree.json";
import maximumProductSubarrayLesson from "./backend/problems/csharp/01-array-problems/maximum-product-subarray.json";
import maximumProductSubarrayLesson1 from "./backend/problems/csharp/05-dynamic-programming-problems/maximum-product-subarray.json";
import maximumSubarrayLesson from "./backend/problems/csharp/01-array-problems/maximum-subarray.json";
import maximumSubarrayLesson1 from "./backend/problems/csharp/05-dynamic-programming-problems/maximum-subarray.json";
import mcpAndBackendIntegrationLesson from "./ai/courses/dotnet-ai-backend/01-ai-backend-terminology/mcp-and-backend-integration.json";
import mcpArchitectureAndTransportsLesson from "./ai/courses/dotnet-ai-backend/03-mcp-fundamentals/mcp-architecture-and-transports.json";
import mcpResourcesPromptsAndToolsLesson from "./ai/courses/dotnet-ai-backend/03-mcp-fundamentals/mcp-resources-prompts-and-tools.json";
import mcpServerLifecycleLesson from "./ai/courses/dotnet-ai-backend/04-mcp-servers-tools/mcp-server-lifecycle.json";
import mcpVsRestGraphqlForAiLesson from "./ai/courses/dotnet-ai-backend/03-mcp-fundamentals/mcp-vs-rest-graphql-for-ai.json";
import meaningfulNamesLesson from "./architecture/courses/clean-code-csharp/05-clean-code-practices/meaningful-names.json";
import mediatorPatternLesson from "./architecture/courses/design-patterns/04-enterprise-patterns/mediator-pattern.json";
import mediatorPatternLesson1 from "./frontend/courses/yarn-npm-packages/advanced-patterns/mediator-pattern.json";
import mediatrLesson from "./backend/courses/dotnet-nuget-packages/06-messaging-events/mediatr.json";
import memoizationBasicsLesson from "./frontend/courses/react-advanced-patterns/06-performance-patterns/memoization-basics.json";
import memoizationStrategiesLesson from "./frontend/courses/react-query/08-performance-optimization/memoization-strategies.json";
import memoryAndContextManagementLesson from "./ai/courses/dotnet-ai-backend/05-ai-agents-dotnet/memory-and-context-management.json";
import memoryEstimationLesson from "./architecture/courses/system-design-interviews/capacity-estimation/memory-estimation.json";
import memoryManagementLesson from "./architecture/courses/frontend-performance-engineering/runtime-performance/memory-management.json";
import memoryOptimizationLesson from "./architecture/courses/redis-caching-strategies/performance-optimization/memory-optimization.json";
import memorystreamLesson from "./backend/courses/dotnet-nuget-packages/advanced-patterns/memorystream.json";
import mentoringJuniorEngineersLesson from "./fundamentals/courses/senior-software-engineering/technical-leadership/mentoring-junior-engineers.json";
import mergeLesson from "./database/courses/postgresql/data-modification-dml/merge.json";
import mergeIntervalsLesson from "./backend/problems/csharp/01-array-problems/merge-intervals.json";
import mergeTwoSortedListsLesson from "./backend/problems/csharp/03-linked-list-problems/merge-two-sorted-lists.json";
import mergeVsRebaseLesson from "./devops/courses/git-linux-developer-workflow/git-for-senior-engineers/merge-vs-rebase.json";
import messageBasicsLesson from "./architecture/courses/microservices-architecture/service-to-service-communication/message-basics.json";
import messageBrokerSelectionLesson from "./architecture/courses/microservices-architecture/event-driven-architecture/message-broker-selection.json";
import messageIdempotencyAndDuplicateHandlingLesson from "./architecture/problems/full-stack-senior-projects/project-2-collaborative-communication-platform/message-idempotency-and-duplicate-handling.json";
import messageOrderingLesson from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/message-ordering.json";
import messagePersistenceAndOrderingLesson from "./architecture/problems/full-stack-senior-projects/project-2-collaborative-communication-platform/message-persistence-and-ordering.json";
import messageStructureLesson from "./architecture/courses/message-queues-event-streaming/message-queue-fundamentals/message-structure.json";
import messagepackLesson from "./backend/courses/dotnet-nuget-packages/05-serialization-mapping/messagepack.json";
import messagingAndEventDrivenArchitectureLesson from "./devops/courses/azure/09-messaging-and-event-driven-architecture/messaging-and-event-driven-architecture.json";
import messagingReliabilityIdempotencyAndRetriesLesson from "./devops/courses/azure/09-messaging-and-event-driven-architecture/messaging-reliability-idempotency-and-retries.json";
import methodOverridingLesson from "./fundamentals/courses/oops-concepts/03-inheritance/method-overriding.json";
import methodsLesson from "./backend/courses/csharp-fundamentals/01-getting-started/methods.json";
import metricsAlertsAndActionGroupsLesson from "./devops/courses/azure/10-observability-and-application-monitoring/metrics-alerts-and-action-groups.json";
import metricsAndMonitoringLesson from "./architecture/courses/microservices-architecture/observability/metrics-and-monitoring.json";
import microFrontendsLesson from "./frontend/courses/yarn-npm-packages/advanced-patterns/micro-frontends.json";
import microservicesBasicsLesson from "./interview-qa/02-intermediate-questions/microservices-basics.json";
import microservicesDecompositionStrategiesLesson from "./architecture/courses/microservices-architecture/microservices-fundamentals/microservices-decomposition-strategies.json";
import microservicesSecurityFundamentalsLesson from "./architecture/courses/microservices-architecture/security-in-microservices/microservices-security-fundamentals.json";
import microservicesVsMonolithLesson from "./architecture/courses/system-design-interviews/scalability-patterns/microservices-vs-monolith.json";
import microsoftAspnetcoreAuthenticationLesson from "./backend/courses/dotnet-nuget-packages/03-aspnet-web/microsoft-aspnetcore-authentication.json";
import microsoftAspnetcoreAuthorizationLesson from "./backend/courses/dotnet-nuget-packages/03-aspnet-web/microsoft-aspnetcore-authorization.json";
import microsoftAspnetcoreCorsLesson from "./backend/courses/dotnet-nuget-packages/03-aspnet-web/microsoft-aspnetcore-cors.json";
import microsoftAspnetcoreMvcLesson from "./backend/courses/dotnet-nuget-packages/03-aspnet-web/microsoft-aspnetcore-mvc.json";
import microsoftEntraIdOverviewLesson from "./devops/courses/azure/07-identity-security-and-configuration/microsoft-entra-id-overview.json";
import microsoftExtensionsConfigurationLesson from "./backend/courses/dotnet-nuget-packages/02-core-extensions/microsoft-extensions-configuration.json";
import microsoftExtensionsDependencyinjectionLesson from "./backend/courses/dotnet-nuget-packages/02-core-extensions/microsoft-extensions-dependencyinjection.json";
import microsoftExtensionsLoggingLesson from "./backend/courses/dotnet-nuget-packages/02-core-extensions/microsoft-extensions-logging.json";
import microsoftExtensionsOptionsLesson from "./backend/courses/dotnet-nuget-packages/02-core-extensions/microsoft-extensions-options.json";
import microsoftOpenapiLesson from "./backend/courses/dotnet-nuget-packages/api-documentation-swagger/microsoft-openapi.json";
import middleOfLinkedListLesson from "./backend/problems/csharp/03-linked-list-problems/middle-of-linked-list.json";
import middlewareAndExtensionsLesson from "./frontend/courses/prisma/06-prisma-advanced-features/middleware-and-extensions.json";
import middlewareBasicsLesson from "./backend/courses/aspnet-core-web-api/04-middleware/middleware-basics.json";
import middlewareBasicsLesson1 from "./frontend/courses/redux/04-redux-middleware/middleware-basics.json";
import middlewareCompositionLesson from "./frontend/courses/redux/04-redux-middleware/middleware-composition.json";
import middlewareConceptsLesson from "./backend/courses/aspnet-core/07-middleware-pipeline/middleware-concepts.json";
import middlewareOrderingLesson from "./backend/problems/aspnet-core/04-middleware-pipeline-problems/middleware-ordering.json";
import migratingToTypescriptLesson from "./frontend/courses/typescript-for-react/07-testing-best-practices/migrating-to-typescript.json";
import migrationPatternsLesson from "./frontend/courses/react-query/09-real-world-patterns/migration-patterns.json";
import migrationStrategiesLesson from "./devops/courses/git-linux-developer-workflow/advanced-git-workflows/migration-strategies.json";
import migrationStrategiesLesson1 from "./frontend/courses/prisma/05-prisma-migrations/migration-strategies.json";
import migrationStrategiesLesson2 from "./fundamentals/courses/senior-software-engineering/system-design-for-seniors/migration-strategies.json";
import migrationsLesson from "./backend/courses/ef-core/09-migrations/migrations.json";
import migrationsBestPracticesLesson from "./backend/problems/aspnet-core/06-ef-core-problems/migrations-best-practices.json";
import migrationsInEntityFrameworkCoreLesson from "./backend/courses/ef-core/09-migrations/migrations-in-entity-framework-core.json";
import migrationsOverviewLesson from "./frontend/courses/prisma/05-prisma-migrations/migrations-overview.json";
import minimalAndSecureRuntimeImagesLesson from "./devops/courses/devops/production-docker-container-security/minimal-and-secure-runtime-images.json";
import minimumPathSumLesson from "./backend/problems/csharp/05-dynamic-programming-problems/minimum-path-sum.json";
import minimumSizeSubarraySumLesson from "./backend/problems/csharp/01-array-problems/minimum-size-subarray-sum.json";
import minioLesson from "./backend/courses/dotnet-nuget-packages/cloud-integration/minio.json";
import mobxLesson from "./frontend/courses/yarn-npm-packages/state-management/mobx.json";
import mockServiceWorkerLesson from "./frontend/courses/react-testing/06-advanced-testing-patterns/mock-service-worker.json";
import mockingAndTestUtilitiesLesson from "./frontend/courses/typescript-for-react/07-testing-best-practices/mocking-and-test-utilities.json";
import mockingBasicsLesson from "./backend/courses/unit-testing-dotnet/03-mocking-fakes/mocking-basics.json";
import mockingJestLesson from "./frontend/courses/react-testing/02-jest-basics/mocking-jest.json";
import modelAttributesAndConstraintsLesson from "./frontend/courses/prisma/02-prisma-schema-design/model-attributes-and-constraints.json";
import modelBindingBasicsLesson from "./backend/courses/aspnet-core-web-api/03-model-binding/model-binding-basics.json";
import modelBindingDeepDiveLesson from "./backend/problems/aspnet-core/01-mvc-fundamentals-problems/model-binding-deep-dive.json";
import modelBindingOverviewLesson from "./backend/courses/aspnet-core/04-model-binding-validation/model-binding-overview.json";
import modelComparisonLesson from "./ai/courses/ai-basics/chatbots-in-depth/model-comparison.json";
import modelSelectionAndCostOptimizationLesson from "./ai/courses/ai-basics/chatbots-in-depth/model-selection-and-cost-optimization.json";
import modelsAndViewdataLesson from "./backend/courses/aspnet-core/02-mvc-fundamentals/models-and-viewdata.json";
import modernDevopsPracticesLesson from "./devops/courses/aws/10-devops-cicd/modern-devops-practices.json";
import moduleFederationLesson from "./frontend/courses/yarn-npm-packages/advanced-patterns/module-federation.json";
import mongodbDriverLesson from "./backend/courses/dotnet-nuget-packages/04-database-data-access/mongodb-driver.json";
import monitoringLesson from "./database/courses/postgresql/performance-tuning/monitoring.json";
import monitoringAndAlertingLesson from "./backend/courses/aspnet-core/12-deployment-production/monitoring-and-alerting.json";
import monitoringAppServiceLesson from "./backend/courses/azure-for-aspnet/02-azure-app-service-deployment/monitoring-app-service.json";
import monitoringContainersAndAksLesson from "./devops/courses/azure/10-observability-and-application-monitoring/monitoring-containers-and-aks.json";
import monitoringElasticBeanstalkLesson from "./backend/courses/aws-for-aspnet/02-elastic-beanstalk-ecs-deployment/monitoring-elastic-beanstalk.json";
import monitoringFunctionsAndAppServiceLesson from "./devops/courses/azure/10-observability-and-application-monitoring/monitoring-functions-and-app-service.json";
import monitoringSetupLesson from "./devops/courses/git-linux-developer-workflow/production-readiness/monitoring-setup.json";
import monolithVsMicroservicesLesson from "./architecture/courses/microservices-architecture/microservices-fundamentals/monolith-vs-microservices.json";
import monolithVsModularMonolithVsMicroservicesLesson from "./architecture/courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/monolith-vs-modular-monolith-vs-microservices.json";
import monorepoStrategiesLesson from "./devops/courses/git-linux-developer-workflow/advanced-git-workflows/monorepo-strategies.json";
import moqLesson from "./backend/courses/dotnet-nuget-packages/07-testing-quality/moq.json";
import moqFrameworkLesson from "./backend/courses/unit-testing-dotnet/03-mocking-fakes/moq-framework.json";
import moreLinqLesson from "./backend/courses/dotnet-nuget-packages/09-utilities-helpers/more-linq.json";
import moveZeroesLesson from "./backend/problems/csharp/01-array-problems/move-zeroes.json";
import moveZeroesToEndLesson from "./backend/problems/csharp/01-array-problems/move-zeroes-to-end.json";
import movieTicketBookingLesson from "./architecture/problems/lld/movie-ticket-booking/movie-ticket-booking.json";
import mstestLesson from "./backend/courses/dotnet-nuget-packages/07-testing-quality/mstest.json";
import multiFactorAuthenticationLesson from "./backend/courses/authentication-authorization/09-security-best-practices/multi-factor-authentication.json";
import multiFileWorkflowsLesson from "./ai/courses/codex/agentic-workflows/multi-file-workflows.json";
import multiRegionCachingLesson from "./architecture/courses/redis-caching-strategies/distributed-caching/multi-region-caching.json";
import multiStageBuildsLesson from "./devops/courses/devops/production-docker-container-security/multi-stage-builds.json";
import multiStepFormsLesson from "./frontend/courses/react-fundamentals/04-forms-input/multi-step-forms.json";
import multiStepFormsLesson1 from "./frontend/courses/yarn-npm-packages/react-forms-input/multi-step-forms.json";
import multipleInterfacesLesson from "./fundamentals/courses/oops-concepts/06-interfaces-abstract-classes/multiple-interfaces.json";
import multiplyStringsLesson from "./backend/problems/csharp/02-string-problems/multiply-strings.json";
import mutationBasicsLesson from "./backend/courses/graphql-dotnet/03-queries-mutations/mutation-basics.json";
import mutationTestingAndTestQualityLesson from "./frontend/courses/react-testing/testing-strategy-for-senior-frontend-engineers/mutation-testing-and-test-quality.json";
import mvcArchitectureLesson from "./backend/courses/aspnet-core/02-mvc-fundamentals/mvc-architecture.json";
import mvcLifecycleLesson from "./interview-qa/02-intermediate-questions/mvc-lifecycle.json";
import mvcPatternLesson from "./architecture/courses/design-patterns/06-architectural-patterns/mvc-pattern.json";
import mvvmPatternLesson from "./architecture/courses/design-patterns/06-architectural-patterns/mvvm-pattern.json";
import mysqlconnectorLesson from "./backend/courses/dotnet-nuget-packages/04-database-data-access/mysqlconnector.json";
import n1ProblemLesson from "./database/problems/database-design/query-optimization/n1-problem.json";
import n1QueryDiagnosisLesson from "./backend/courses/ef-core/ef-core-performance-orm-trade-offs/n1-query-diagnosis.json";
import navigationLesson from "./frontend/courses/react-fundamentals/07-react-router/navigation.json";
import nestedLoopsHashJoinAndMergeJoinLesson from "./database/courses/sql-server/database-internals-query-optimization/nested-loops-hash-join-and-merge-join.json";
import nestedRoutesLesson from "./frontend/courses/react-fundamentals/07-react-router/nested-routes.json";
import netflixStreamingLesson from "./architecture/courses/system-design-interviews/real-world-case-studies/netflix-streaming.json";
import netflixStreamingLesson1 from "./architecture/problems/lld/netflix-streaming/netflix-streaming.json";
import networkInterruptionHandlingLesson from "./frontend/courses/react-query/06-offline-support-persistence/network-interruption-handling.json";
import networkSecurityGroupsLesson from "./devops/courses/azure/08-networking-and-api-platforms/network-security-groups.json";
import networkSecurityGroupsAndFirewallsLesson from "./devops/problems/azure/07-azure-security-problems/network-security-groups-and-firewalls.json";
import networkWaterfallsAndRequestPrioritizationLesson from "./architecture/courses/frontend-performance-engineering/browser-react-performance/network-waterfalls-and-request-prioritization.json";
import neverAndExhaustiveCheckingLesson from "./frontend/courses/typescript-for-react/advanced-type-modeling-runtime-safety/never-and-exhaustive-checking.json";
import newsFeedDesignLesson from "./architecture/courses/system-design-interviews/common-system-designs/news-feed-design.json";
import newtonsoftJsonLesson from "./backend/courses/dotnet-nuget-packages/05-serialization-mapping/newtonsoft-json.json";
import nextjsLesson from "./frontend/courses/yarn-npm-packages/frontend-frameworks/nextjs.json";
import nextjsAppRouterArchitectureLesson from "./frontend/courses/next-js-full-stack-react/app-router-rendering/nextjs-app-router-architecture.json";
import nextjsIntegrationLesson from "./frontend/courses/apollo/09-ssr-nextjs-performance/nextjs-integration.json";
import nextjsRoutingLesson from "./frontend/courses/yarn-npm-packages/routing/nextjs-routing.json";
import nlogLesson from "./backend/courses/dotnet-nuget-packages/logging-monitoring/nlog.json";
import noCodeAutomationToolsLesson from "./ai/courses/ai-basics/automation-basics/no-code-automation-tools.json";
import nodeCacheLesson from "./architecture/courses/redis-caching-strategies/caching-in-nodejs/node-cache.json";
import normalizationLesson from "./interview-qa/01-beginner-questions/normalization.json";
import normalizationVsDenormalizationLesson from "./architecture/courses/system-design-interviews/database-design/normalization-vs-denormalization.json";
import normalizingStateLesson from "./frontend/courses/redux/05-redux-patterns/normalizing-state.json";
import nosqlModelingLesson from "./architecture/courses/system-design-interviews/database-design/nosql-modeling.json";
import notNullLesson from "./database/courses/postgresql/constraints/not-null.json";
import notificationArchitectureLesson from "./architecture/problems/full-stack-senior-projects/project-2-collaborative-communication-platform/notification-architecture.json";
import notificationSystemLesson from "./architecture/problems/hld/notification-system/notification-system.json";
import npgsqlLesson from "./backend/courses/dotnet-nuget-packages/04-database-data-access/npgsql.json";
import npmSecurityLesson from "./architecture/courses/fullstack-security/06-dependency-security/npm-security.json";
import npxYarnPnpLesson from "./frontend/courses/yarn-npm-packages/yarn-npm-fundamentals/npx-yarn-pnp.json";
import nspecLesson from "./backend/courses/dotnet-nuget-packages/api-documentation-swagger/nspec.json";
import nsubstituteLesson from "./backend/courses/dotnet-nuget-packages/07-testing-quality/nsubstitute.json";
import nugetConfigLesson from "./backend/courses/dotnet-nuget-packages/01-nuget-fundamentals/nuget-config.json";
import nugetSecurityLesson from "./architecture/courses/fullstack-security/06-dependency-security/nuget-security.json";
import nullHandlingLesson from "./database/courses/postgresql/querying-data/null-handling.json";
import nullableTypesLesson from "./backend/courses/csharp-fundamentals/07-modern-csharp/nullable-types.json";
import numberOfConnectedComponentsLesson from "./backend/problems/csharp/04-tree-graph-problems/number-of-connected-components.json";
import numberOfIslandsLesson from "./backend/problems/csharp/04-tree-graph-problems/number-of-islands.json";
import numericTypesLesson from "./database/courses/postgresql/data-types/numeric-types.json";
import nunitLesson from "./backend/courses/dotnet-nuget-packages/07-testing-quality/nunit.json";
import nuxtjsLesson from "./frontend/courses/yarn-npm-packages/frontend-frameworks/nuxtjs.json";
import oauth20RolesAndFlowsLesson from "./architecture/courses/fullstack-security/modern-web-security-identity/oauth-20-roles-and-flows.json";
import oauthJwtLesson from "./interview-qa/02-intermediate-questions/oauth-jwt.json";
import oauthOverviewLesson from "./backend/courses/authentication-authorization/04-oauth/oauth-overview.json";
import oauthSecurityBestPracticesLesson from "./backend/courses/authentication-authorization/04-oauth/oauth-security-best-practices.json";
import oauth2AndJwtLesson from "./architecture/courses/microservices-architecture/security-in-microservices/oauth2-and-jwt.json";
import objectManagementLesson from "./database/courses/postgresql/database-schema-table-objects/object-management.json";
import observabilityAndFailureTestingLesson from "./architecture/problems/full-stack-senior-projects/project-2-collaborative-communication-platform/observability-and-failure-testing.json";
import observabilityAndTelemetryLesson from "./ai/courses/dotnet-ai-backend/06-production-patterns/observability-and-telemetry.json";
import observabilityArchitectureLesson from "./devops/courses/aws/11-monitoring-logging-observability/observability-architecture.json";
import observabilityFundamentalsLesson from "./architecture/courses/microservices-architecture/observability/observability-fundamentals.json";
import observabilityLoggingMetricsAndTracingLesson from "./devops/courses/azure/10-observability-and-application-monitoring/observability-logging-metrics-and-tracing.json";
import observabilityPlatformDesignLesson from "./architecture/problems/system-design/devops-system-design/observability-platform-design.json";
import observerPatternLesson from "./architecture/courses/clean-code-csharp/04-behavioral-patterns/observer-pattern.json";
import observerPatternLesson1 from "./architecture/courses/design-patterns/03-behavioral-patterns/observer-pattern.json";
import observerPatternLesson2 from "./frontend/courses/yarn-npm-packages/advanced-patterns/observer-pattern.json";
import oddEvenLinkedListLesson from "./backend/problems/csharp/03-linked-list-problems/odd-even-linked-list.json";
import ofetchLesson from "./frontend/courses/yarn-npm-packages/http-clients/ofetch.json";
import offlineHandlingAndReconnectBehaviorLesson from "./architecture/problems/full-stack-senior-projects/project-2-collaborative-communication-platform/offline-handling-and-reconnect-behavior.json";
import offlineSupportLesson from "./frontend/courses/next-js-full-stack-react/data-fetching-patterns/offline-support.json";
import offlineSupportLesson1 from "./frontend/courses/redux/08-redux-real-world/offline-support.json";
import oftypeFilteringOperatorLesson from "./backend/courses/linq/03-filtering-projection/oftype-filtering-operator.json";
import ollamaLocalAiLesson from "./ai/courses/dotnet-ai-backend/02-rag-implementation/ollama-local-ai.json";
import oneToManyRelationsLesson from "./frontend/courses/prisma/04-prisma-relations/one-to-many-relations.json";
import oneToManyRelationshipsConventionsLesson from "./backend/courses/ef-core/03-conventions-relationships/one-to-many-relationships-conventions.json";
import oneToOneRelationsLesson from "./frontend/courses/prisma/04-prisma-relations/one-to-one-relations.json";
import oneToOneRelationshipsConventionsLesson from "./backend/courses/ef-core/03-conventions-relationships/one-to-one-relationships-conventions.json";
import onionArchitectureLesson from "./architecture/courses/design-patterns/06-architectural-patterns/onion-architecture.json";
import oopA01Lesson from "./interview-qa/03-advanced-questions/oop-a01.json";
import oopB01Lesson from "./interview-qa/01-beginner-questions/oop-b01.json";
import oopI01Lesson from "./interview-qa/02-intermediate-questions/oop-i01.json";
import oopI02Lesson from "./interview-qa/02-intermediate-questions/oop-i02.json";
import openClosedLesson from "./architecture/courses/clean-code-csharp/01-solid-principles/open-closed.json";
import openRedirectsAndUrlValidationLesson from "./architecture/courses/fullstack-security/modern-web-security-identity/open-redirects-and-url-validation.json";
import openapiGeneratorLesson from "./backend/courses/dotnet-nuget-packages/api-documentation-swagger/openapi-generator.json";
import openidConnectLesson from "./architecture/courses/fullstack-security/modern-web-security-identity/openid-connect.json";
import openidConnectLesson1 from "./backend/courses/authentication-authorization/04-oauth/openid-connect.json";
import openiddictLesson from "./backend/courses/dotnet-nuget-packages/validation-authorization/openiddict.json";
import opensearchQuicksightLesson from "./devops/courses/aws/13-analytics-big-data/opensearch-quicksight.json";
import opentelemetryLesson from "./backend/courses/dotnet-nuget-packages/logging-monitoring/opentelemetry.json";
import opentelemetryBasicsLesson from "./architecture/courses/microservices-architecture/observability/opentelemetry-basics.json";
import operationalTipsLesson from "./database/courses/postgresql/modern-data-tools/operational-tips.json";
import operatorOverloadingLesson from "./fundamentals/courses/oops-concepts/04-polymorphism/operator-overloading.json";
import optimisticConcurrencyForApisLesson from "./backend/courses/aspnet-core-web-api/production-api-design-reliability/optimistic-concurrency-for-apis.json";
import optimisticResponsesLesson from "./frontend/courses/apollo/06-error-handling-optimistic/optimistic-responses.json";
import optimisticUpdatesLesson from "./frontend/courses/next-js-full-stack-react/data-fetching-patterns/optimistic-updates.json";
import optimisticUpdatesLesson1 from "./frontend/courses/react-query/03-mutations/optimistic-updates.json";
import optimisticUpdatesAndRollbackLesson from "./frontend/courses/react-advanced-patterns/modern-state-application-architecture/optimistic-updates-and-rollback.json";
import optionsPatternLesson from "./backend/problems/aspnet-core/05-dependency-injection-problems/options-pattern.json";
import optionsPatternAndConfigurationProvidersLesson from "./backend/courses/aspnet-core/asp-net-core-internals-production-hosting/options-pattern-and-configuration-providers.json";
import orderByLesson from "./database/courses/postgresql/querying-data/order-by.json";
import orderbyOrderbydescendingLesson from "./backend/courses/linq/04-sorting-grouping/orderby-orderbydescending.json";
import orderingChallengesLesson from "./architecture/courses/message-queues-event-streaming/message-ordering-idempotency/ordering-challenges.json";
import osiModelLesson from "./fundamentals/courses/programming-computer-web-foundations/networking-protocols/osi-model.json";
import otherComputeServicesLesson from "./devops/courses/aws/03-compute-services/other-compute-services.json";
import otherDatabaseServicesLesson from "./devops/courses/aws/06-databases/other-database-services.json";
import outboxPatternLesson from "./architecture/courses/microservices-architecture/distributed-transactions/outbox-pattern.json";
import outboxPatternLesson1 from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/outbox-pattern.json";
import outputCachingLesson from "./architecture/courses/redis-caching-strategies/caching-in-aspnet-core/output-caching.json";
import outputEncodingLesson from "./architecture/courses/fullstack-security/05-secure-api-design/output-encoding.json";
import pacelcLesson from "./architecture/courses/system-design-interviews/consistency-availability/pacelc.json";
import pacelcAndLatencyTradeOffsLesson from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/pacelc-and-latency-trade-offs.json";
import pacificAtlanticWaterFlowLesson from "./backend/problems/csharp/04-tree-graph-problems/pacific-atlantic-water-flow.json";
import packageJsonScriptsLesson from "./frontend/courses/yarn-npm-packages/yarn-npm-fundamentals/package-json-scripts.json";
import paginationLesson from "./frontend/courses/react-query/02-query-hooks/pagination.json";
import paginationBasicsLesson from "./backend/courses/graphql-dotnet/04-filtering-pagination/pagination-basics.json";
import paginationCachingLesson from "./frontend/courses/apollo/03-caching/pagination-caching.json";
import paginationFilteringAndSortingDesignLesson from "./backend/courses/aspnet-core-web-api/production-api-design-reliability/pagination-filtering-and-sorting-design.json";
import paginationOptimizationLesson from "./database/problems/database-design/query-optimization/pagination-optimization.json";
import paginationTechniquesLesson from "./frontend/courses/prisma/03-prisma-queries-mutations/pagination-techniques.json";
import paintingAndCompositingLesson from "./architecture/courses/frontend-performance-engineering/runtime-performance/painting-and-compositing.json";
import palindromeLinkedListLesson from "./backend/problems/csharp/03-linked-list-problems/palindrome-linked-list.json";
import palindromePartitioningLesson from "./backend/problems/csharp/05-dynamic-programming-problems/palindrome-partitioning.json";
import palindromicSubstringsLesson from "./backend/problems/csharp/02-string-problems/palindromic-substrings.json";
import parallelDataLoadingLesson from "./frontend/courses/next-js-full-stack-react/data-fetching-patterns/parallel-data-loading.json";
import parameterSniffingAndPlanInstabilityLesson from "./database/courses/sql-server/database-internals-query-optimization/parameter-sniffing-and-plan-instability.json";
import parkingLotSystemLesson from "./architecture/problems/lld/parking-lot-system/parking-lot-system.json";
import partialClonesLesson from "./devops/courses/git-linux-developer-workflow/git-performance/partial-clones.json";
import partialDataErrorHandlingLesson from "./frontend/courses/apollo/06-error-handling-optimistic/partial-data-error-handling.json";
import partialExpressionLesson from "./database/courses/postgresql/indexes/partial-expression.json";
import partialViewsLesson from "./backend/courses/aspnet-core/05-razor-views/partial-views.json";
import partitionToleranceLesson from "./architecture/courses/system-design-interviews/consistency-availability/partition-tolerance.json";
import partitioningLesson from "./database/courses/postgresql/advanced-topics/partitioning.json";
import passwordManagementLesson from "./backend/courses/authentication-authorization/03-identity/password-management.json";
import passwordValidatorLesson from "./backend/courses/dotnet-nuget-packages/08-security-cryptography/password-validator.json";
import passwordlessAuthenticationLesson from "./backend/courses/authentication-authorization/09-security-best-practices/passwordless-authentication.json";
import pathSumLesson from "./backend/problems/csharp/04-tree-graph-problems/path-sum.json";
import pathSumIiLesson from "./backend/problems/csharp/04-tree-graph-problems/path-sum-ii.json";
import pathSumIiiLesson from "./backend/problems/csharp/04-tree-graph-problems/path-sum-iii.json";
import pathTraversalAndFileUploadSecurityLesson from "./architecture/courses/fullstack-security/modern-web-security-identity/path-traversal-and-file-upload-security.json";
import patroniRepmgrLesson from "./database/courses/postgresql/high-availability-dr/patroni-repmgr.json";
import paymentGatewayLesson from "./architecture/problems/lld/payment-gateway/payment-gateway.json";
import paymentGatewayHldLesson from "./architecture/problems/hld/payment-gateway-hld/payment-gateway-hld.json";
import penetrationTestingBasicsLesson from "./architecture/courses/fullstack-security/08-security-testing/penetration-testing-basics.json";
import perfQ1Lesson from "./interview-qa/08-performance-optimization/perf-q1.json";
import perfQ2Lesson from "./interview-qa/08-performance-optimization/perf-q2.json";
import perfQ3Lesson from "./interview-qa/08-performance-optimization/perf-q3.json";
import perfQ4Lesson from "./interview-qa/08-performance-optimization/perf-q4.json";
import performanceAndReRendersLesson from "./frontend/courses/next-js-full-stack-react/state-management/performance-and-re-renders.json";
import performanceBudgetsLesson from "./architecture/courses/frontend-performance-engineering/build-optimization/performance-budgets.json";
import performanceBulkOperationsLesson from "./backend/courses/ef-core/12-performance-bulk-operations/performance-bulk-operations.json";
import performanceFundamentalsLesson from "./devops/courses/git-linux-developer-workflow/git-performance/performance-fundamentals.json";
import performanceMarkersLesson from "./architecture/courses/frontend-performance-engineering/runtime-performance/performance-markers.json";
import performanceOptimizationLesson from "./backend/courses/aspnet-core/08-entity-framework-core/performance-optimization.json";
import performanceOptimizationLesson1 from "./frontend/courses/apollo/09-ssr-nextjs-performance/performance-optimization.json";
import performanceOptimizationLesson2 from "./frontend/courses/react-fundamentals/09-performance-optimization/performance-optimization.json";
import performanceOptimizationLesson3 from "./frontend/courses/redux/07-redux-advanced-concepts/performance-optimization.json";
import performancePaginationLesson from "./backend/courses/graphql-dotnet/04-filtering-pagination/performance-pagination.json";
import performancePitfallsLesson from "./architecture/courses/redis-caching-strategies/performance-optimization/performance-pitfalls.json";
import performanceTuningLesson from "./backend/courses/aspnet-core/12-deployment-production/performance-tuning.json";
import permissionsAndEnvironmentVariablesLesson from "./devops/courses/git-linux-developer-workflow/linux-production-troubleshooting/permissions-and-environment-variables.json";
import permissionsGrantRevokeLesson from "./database/courses/sql-server/17-security-hardening/permissions-grant-revoke.json";
import persistedQueriesLesson from "./backend/courses/graphql-dotnet/06-performance/persisted-queries.json";
import persistenceBasicsLesson from "./frontend/courses/react-query/06-offline-support-persistence/persistence-basics.json";
import pgDumpRestoreLesson from "./database/courses/postgresql/transactions-error-handling-backup/pg-dump-restore.json";
import pgvectorAiLesson from "./database/courses/postgresql/modern-data-tools/pgvector-ai.json";
import phase1RequirementsDomainModelAndArchitectureLesson from "./architecture/problems/full-stack-senior-projects/project-1-enterprise-expense-platform/phase-1-requirements-domain-model-and-architecture.json";
import phase10DockerizedDeploymentAndCicdLesson from "./architecture/problems/full-stack-senior-projects/project-1-enterprise-expense-platform/phase-10-dockerized-deployment-and-cicd.json";
import phase11CloudDeploymentAndProductionHardeningLesson from "./architecture/problems/full-stack-senior-projects/project-1-enterprise-expense-platform/phase-11-cloud-deployment-and-production-hardening.json";
import phase12ScaleTheSystemAndDocumentTradeOffsLesson from "./architecture/problems/full-stack-senior-projects/project-1-enterprise-expense-platform/phase-12-scale-the-system-and-document-trade-offs.json";
import phase2AspnetCoreApiAndReactApplicationLesson from "./architecture/problems/full-stack-senior-projects/project-1-enterprise-expense-platform/phase-2-aspnet-core-api-and-react-application.json";
import phase3AuthenticationAndAuthorizationLesson from "./architecture/problems/full-stack-senior-projects/project-1-enterprise-expense-platform/phase-3-authentication-and-authorization.json";
import phase4SqlSchemaEfCoreAndTransactionBoundariesLesson from "./architecture/problems/full-stack-senior-projects/project-1-enterprise-expense-platform/phase-4-sql-schema-ef-core-and-transaction-boundaries.json";
import phase5ValidationErrorHandlingAndApiContractsLesson from "./architecture/problems/full-stack-senior-projects/project-1-enterprise-expense-platform/phase-5-validation-error-handling-and-api-contracts.json";
import phase6AutomatedUnitAndIntegrationTestsLesson from "./architecture/problems/full-stack-senior-projects/project-1-enterprise-expense-platform/phase-6-automated-unit-and-integration-tests.json";
import phase7RedisCachingAndCacheInvalidationLesson from "./architecture/problems/full-stack-senior-projects/project-1-enterprise-expense-platform/phase-7-redis-caching-and-cache-invalidation.json";
import phase8BackgroundJobsAndMessageProcessingLesson from "./architecture/problems/full-stack-senior-projects/project-1-enterprise-expense-platform/phase-8-background-jobs-and-message-processing.json";
import phase9ObservabilityWithLogsMetricsAndTracesLesson from "./architecture/problems/full-stack-senior-projects/project-1-enterprise-expense-platform/phase-9-observability-with-logs-metrics-and-traces.json";
import pkceFlowLesson from "./backend/courses/authentication-authorization/05-oauth2-flows-deep-dive/pkce-flow.json";
import playwrightLesson from "./frontend/courses/yarn-npm-packages/testing/playwright.json";
import playwrightBasedE2eTestingLesson from "./frontend/courses/react-testing/testing-strategy-for-senior-frontend-engineers/playwright-based-e2e-testing.json";
import plpgsqlBasicsLesson from "./database/courses/postgresql/stored-procedures-functions/plpgsql-basics.json";
import plpgsqlFunctionsLesson from "./database/courses/postgresql/stored-procedures-functions/plpgsql-functions.json";
import pmcPowershellCommandsMigrationsLesson from "./backend/courses/ef-core/09-migrations/pmc-powershell-commands-migrations.json";
import podsAndWorkloadControllersLesson from "./devops/courses/devops/production-kubernetes-day-2-operations/pods-and-workload-controllers.json";
import pointInTimeRecoveryLesson from "./database/courses/postgresql/transactions-error-handling-backup/point-in-time-recovery.json";
import pointToPointVsPubsubLesson from "./architecture/courses/message-queues-event-streaming/message-queue-fundamentals/point-to-point-vs-pubsub.json";
import policyBasedAuthorizationLesson from "./backend/courses/aspnet-core/09-authentication-authorization/policy-based-authorization.json";
import policyBasedAuthorizationLesson1 from "./backend/courses/authentication-authorization/06-advanced-authorization/policy-based-authorization.json";
import policyBasedAuthorizationLesson2 from "./backend/problems/aspnet-core/07-authentication-authorization-problems/policy-based-authorization.json";
import policyServerLesson from "./backend/courses/dotnet-nuget-packages/validation-authorization/policy-server.json";
import pollingLesson from "./frontend/courses/apollo/02-queries-mutations/polling.json";
import pollingRealTimeDataLesson from "./frontend/courses/react-query/09-real-world-patterns/polling-real-time-data.json";
import pollyLesson from "./backend/courses/dotnet-nuget-packages/http-clients-resilience/polly.json";
import pollySimmyLesson from "./backend/courses/dotnet-nuget-packages/http-clients-resilience/polly-simmy.json";
import polymorphicComponentsLesson from "./frontend/courses/react-advanced-patterns/09-component-composition-strategies/polymorphic-components.json";
import polymorphicComponentsLesson1 from "./frontend/courses/typescript-for-react/05-generic-components/polymorphic-components.json";
import polymorphismBasicsLesson from "./fundamentals/courses/oops-concepts/04-polymorphism/polymorphism-basics.json";
import popmotionLesson from "./frontend/courses/yarn-npm-packages/animation/popmotion.json";
import postcssLesson from "./frontend/courses/yarn-npm-packages/styling/postcss.json";
import postgisSpatialLesson from "./database/courses/postgresql/modern-data-tools/postgis-spatial.json";
import postmortemCultureLesson from "./devops/courses/git-linux-developer-workflow/production-readiness/postmortem-culture.json";
import powerLesson from "./backend/problems/csharp/07-recursion-problems/power.json";
import powxNLesson from "./backend/problems/csharp/06-sorting-searching-problems/powx-n.json";
import preCommitHooksLesson from "./devops/courses/git-linux-developer-workflow/git-hooks/pre-commit-hooks.json";
import prePushHooksLesson from "./devops/courses/git-linux-developer-workflow/git-hooks/pre-push-hooks.json";
import prefetchPatternsLesson from "./frontend/courses/react-query/07-prefetching-ssr/prefetch-patterns.json";
import prefetchingStrategiesLesson from "./frontend/courses/react-query/07-prefetching-ssr/prefetching-strategies.json";
import presenceAndTypingIndicatorsLesson from "./architecture/problems/full-stack-senior-projects/project-2-collaborative-communication-platform/presence-and-typing-indicators.json";
import primaryKeyLesson from "./database/courses/postgresql/constraints/primary-key.json";
import principalsUsersRolesLesson from "./database/courses/sql-server/17-security-hardening/principals-users-roles.json";
import prismaApiRoutesLesson from "./frontend/courses/prisma/07-prisma-nextjs-integration/prisma-api-routes.json";
import prismaCicdDeploymentLesson from "./frontend/courses/prisma/07-prisma-nextjs-integration/prisma-cicd-deployment.json";
import prismaClientQueriesLesson from "./frontend/courses/prisma/03-prisma-queries-mutations/prisma-client-queries.json";
import prismaEnvironmentVariablesLesson from "./frontend/courses/prisma/07-prisma-nextjs-integration/prisma-environment-variables.json";
import prismaInNextjsAppRouterLesson from "./frontend/courses/prisma/07-prisma-nextjs-integration/prisma-in-nextjs-app-router.json";
import prismaMigrateDeployLesson from "./frontend/courses/prisma/05-prisma-migrations/prisma-migrate-deploy.json";
import prismaMigrateDevLesson from "./frontend/courses/prisma/05-prisma-migrations/prisma-migrate-dev.json";
import prismaMigrateResetLesson from "./frontend/courses/prisma/05-prisma-migrations/prisma-migrate-reset.json";
import prismaPerformanceOptimizationLesson from "./frontend/courses/prisma/07-prisma-nextjs-integration/prisma-performance-optimization.json";
import prismaRouteHandlersLesson from "./frontend/courses/prisma/07-prisma-nextjs-integration/prisma-route-handlers.json";
import prismaSecurityBestPracticesLesson from "./frontend/courses/prisma/07-prisma-nextjs-integration/prisma-security-best-practices.json";
import prismaStudioIntroductionLesson from "./frontend/courses/prisma/01-prisma-basics/prisma-studio-introduction.json";
import prismaVsOtherOrmsLesson from "./frontend/courses/prisma/01-prisma-basics/prisma-vs-other-orms.json";
import prismaWithAuthenticationLesson from "./frontend/courses/prisma/07-prisma-nextjs-integration/prisma-with-authentication.json";
import prismaWithServerActionsLesson from "./frontend/courses/prisma/07-prisma-nextjs-integration/prisma-with-server-actions.json";
import privateDnsAndPrivateEndpointConnectivityLesson from "./devops/courses/azure/08-networking-and-api-platforms/private-dns-and-private-endpoint-connectivity.json";
import privateEndpointsAndNetworkIsolationLesson from "./devops/courses/azure/production-architecture-reliability-cost/private-endpoints-and-network-isolation.json";
import privateEndpointsAndPrivateLinkLesson from "./devops/courses/azure/08-networking-and-api-platforms/private-endpoints-and-private-link.json";
import privateIpAndPublicIpAddressingLesson from "./devops/courses/azure/08-networking-and-api-platforms/private-ip-and-public-ip-addressing.json";
import problemDetailsLesson from "./backend/courses/aspnet-core-web-api/06-error-handling-validation/problem-details.json";
import problemDetailsAndConsistentErrorContractsLesson from "./backend/courses/aspnet-core-web-api/production-api-design-reliability/problem-details-and-consistent-error-contracts.json";
import processesThreadsAndSignalsLesson from "./devops/courses/git-linux-developer-workflow/linux-production-troubleshooting/processes-threads-and-signals.json";
import processesVsThreadsLesson from "./fundamentals/courses/programming-computer-web-foundations/programming-computer-fundamentals/processes-vs-threads.json";
import producerConsumerPatternLesson from "./architecture/courses/design-patterns/05-concurrency-patterns/producer-consumer-pattern.json";
import productOfArrayExceptSelfLesson from "./backend/problems/csharp/01-array-problems/product-of-array-except-self.json";
import productionOutageLessonsLesson from "./architecture/courses/system-design-interviews/real-world-case-studies/production-outage-lessons.json";
import productionPerformanceRegressionAnalysisLesson from "./backend/courses/aspnet-core/performance-observability/production-performance-regression-analysis.json";
import profilingCpuAndAllocationsLesson from "./backend/courses/aspnet-core/performance-observability/profiling-cpu-and-allocations.json";
import profilingDebuggingLesson from "./backend/problems/aspnet-core/08-testing-debugging-problems/profiling-debugging.json";
import profilingDebuggingLesson1 from "./frontend/courses/react-query/08-performance-optimization/profiling-debugging.json";
import profilingDebuggingLesson2 from "./frontend/courses/yarn-npm-packages/react-performance/profiling-debugging.json";
import projectStructureLesson from "./backend/courses/aspnet-core-web-api/01-getting-started/project-structure.json";
import projectStructureLesson1 from "./frontend/courses/redux/08-redux-real-world/project-structure.json";
import projectionOperatorsLesson from "./backend/courses/linq/03-filtering-projection/projection-operators.json";
import projectionVsIncludeLesson from "./backend/courses/ef-core/ef-core-performance-orm-trade-offs/projection-vs-include.json";
import prometheusLesson from "./backend/courses/dotnet-nuget-packages/logging-monitoring/prometheus.json";
import promisesJsLesson from "./interview-qa/01-beginner-questions/promises-js.json";
import promptCachingLesson from "./ai/courses/claude/claude-api-and-integrations/prompt-caching.json";
import promptCompositionAndGenerationLesson from "./ai/courses/dotnet-ai-backend/02-rag-implementation/prompt-composition-and-generation.json";
import promptDebuggingWorkflowLesson from "./ai/courses/ai-basics/ai-workflows/prompt-debugging-workflow.json";
import promptEngineeringForClaudeLesson from "./ai/courses/claude/mastering-claude/prompt-engineering-for-claude.json";
import promptPatternsLesson from "./ai/courses/ai-basics/prompting-basics/prompt-patterns.json";
import promptSecurityAndJailbreakDefenseLesson from "./ai/courses/ai-basics/safety-and-limitations/prompt-security-and-jailbreak-defense.json";
import promptingForDebuggingLesson from "./ai/courses/codex/prompt-engineering-for-code/prompting-for-debugging.json";
import promptsTokensAndContextWindowsLesson from "./ai/courses/dotnet-ai-backend/01-ai-backend-terminology/prompts-tokens-and-context-windows.json";
import propertiesLesson from "./fundamentals/courses/oops-concepts/02-encapsulation-data-hiding/properties.json";
import propsAdvancedLesson from "./frontend/courses/react-fundamentals/02-components-props/props-advanced.json";
import propsBasicsLesson from "./frontend/courses/react-fundamentals/02-components-props/props-basics.json";
import prosAndConsOfMicroservicesLesson from "./architecture/courses/microservices-architecture/microservices-fundamentals/pros-and-cons-of-microservices.json";
import protectingYourDataLesson from "./ai/courses/ai-basics/privacy-and-data/protecting-your-data.json";
import protobufLesson from "./backend/courses/dotnet-nuget-packages/05-serialization-mapping/protobuf.json";
import prototypePatternLesson from "./architecture/courses/clean-code-csharp/02-creational-patterns/prototype-pattern.json";
import prototypePatternLesson1 from "./architecture/courses/design-patterns/01-creational-patterns/prototype-pattern.json";
import providerLesson from "./frontend/courses/redux/03-react-redux/provider.json";
import proxyPatternLesson from "./architecture/courses/design-patterns/02-structural-patterns/proxy-pattern.json";
import psTopSsLsofAndCurlForDiagnosisLesson from "./devops/courses/git-linux-developer-workflow/linux-production-troubleshooting/ps-top-ss-lsof-and-curl-for-diagnosis.json";
import psqlBasicsLesson from "./database/courses/postgresql/getting-started/psql-basics.json";
import pubSubLesson from "./architecture/courses/redis-caching-strategies/redis-use-cases/pub-sub.json";
import publicEndpointsVsPrivateEndpointsLesson from "./devops/courses/azure/08-networking-and-api-platforms/public-endpoints-vs-private-endpoints.json";
import pullRequestAndCodeReviewWorkflowLesson from "./devops/courses/git-linux-developer-workflow/git-for-senior-engineers/pull-request-and-code-review-workflow.json";
import qpsEstimationLesson from "./architecture/courses/system-design-interviews/capacity-estimation/qps-estimation.json";
import quantifierOperatorsLesson from "./backend/courses/linq/08-quantifiers-element-operators/quantifier-operators.json";
import quartzLesson from "./backend/courses/dotnet-nuget-packages/06-messaging-events/quartz.json";
import queriesLesson from "./frontend/courses/react-testing/03-react-testing-library/queries.json";
import queryBasicsLesson from "./backend/courses/graphql-dotnet/03-queries-mutations/query-basics.json";
import queryCachingLesson from "./database/problems/database-design/query-optimization/query-caching.json";
import queryCancellationLesson from "./frontend/courses/react-query/04-advanced-features/query-cancellation.json";
import queryClientLesson from "./frontend/courses/react-query/01-query-basics/query-client.json";
import queryComplexityLesson from "./backend/courses/graphql-dotnet/06-performance/query-complexity.json";
import queryLoggingAndPerformanceLesson from "./frontend/courses/prisma/06-prisma-advanced-features/query-logging-and-performance.json";
import queryOptimizationLesson from "./backend/problems/aspnet-core/06-ef-core-problems/query-optimization.json";
import queryOptimizationLesson1 from "./database/courses/sql-server/16-performance-tuning/query-optimization.json";
import queryOptionsLesson from "./frontend/courses/apollo/02-queries-mutations/query-options.json";
import queryOptionsLesson1 from "./frontend/courses/react-query/02-query-hooks/query-options.json";
import queryPlanningLesson from "./database/courses/postgresql/performance-tuning/query-planning.json";
import queryRegressionAfterDeploymentLesson from "./database/courses/sql-server/concurrency-production-database-problems/query-regression-after-deployment.json";
import queryStoreLesson from "./database/courses/sql-server/16-performance-tuning/query-store.json";
import queryingLesson from "./backend/courses/ef-core/07-querying/querying.json";
import queryingInEntityFrameworkCoreLesson from "./backend/courses/ef-core/07-querying/querying-in-entity-framework-core.json";
import queryingWithLinqLesson from "./backend/courses/aspnet-core/08-entity-framework-core/querying-with-linq.json";
import queueStorageCsharpLesson from "./backend/courses/azure-for-aspnet/03-azure-storage-blobs-queues/queue-storage-csharp.json";
import queuesVsPubsubVsEventStreamsLesson from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/queues-vs-pubsub-vs-event-streams.json";
import quorumConceptsLesson from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/quorum-concepts.json";
import rabbitmqClientLesson from "./backend/courses/dotnet-nuget-packages/06-messaging-events/rabbitmq-client.json";
import rabbitmqFundamentalsLesson from "./architecture/courses/message-queues-event-streaming/message-queue-fundamentals/rabbitmq-fundamentals.json";
import rabbitmqVsKafkaVsSqsLesson from "./architecture/courses/message-queues-event-streaming/message-broker-selection/rabbitmq-vs-kafka-vs-sqs.json";
import raceConditionsAndThreadSafetyLesson from "./backend/courses/csharp-fundamentals/advanced-async-concurrency-threading/race-conditions-and-thread-safety.json";
import ragArchitectureOverviewLesson from "./ai/courses/dotnet-ai-backend/02-rag-implementation/rag-architecture-overview.json";
import ragConceptsAndBenefitsLesson from "./ai/courses/dotnet-ai-backend/01-ai-backend-terminology/rag-concepts-and-benefits.json";
import ragExplainedLesson from "./ai/courses/ai-basics/rag-and-memory/rag-explained.json";
import ragWithLlamaindexDotnetLesson from "./ai/courses/dotnet-ai-backend/02-rag-implementation/rag-with-llamaindex-dotnet.json";
import ragWithMicrosoftExtensionsAiLesson from "./ai/courses/dotnet-ai-backend/02-rag-implementation/rag-with-microsoft-extensions-ai.json";
import ragWithSemanticKernelLesson from "./ai/courses/dotnet-ai-backend/02-rag-implementation/rag-with-semantic-kernel.json";
import rangeTypesLesson from "./database/courses/postgresql/data-types/range-types.json";
import ransomNoteLesson from "./backend/problems/csharp/02-string-problems/ransom-note.json";
import rapidQ1Lesson from "./interview-qa/06-rapid-fire/rapid-q1.json";
import rapidQ2Lesson from "./interview-qa/06-rapid-fire/rapid-q2.json";
import rapidQ3Lesson from "./interview-qa/06-rapid-fire/rapid-q3.json";
import rateLimitHeadersLesson from "./backend/problems/api-design/rate-limiting-design/rate-limit-headers.json";
import rateLimiterLesson from "./architecture/problems/hld/rate-limiter/rate-limiter.json";
import rateLimiterDesignLesson from "./architecture/courses/system-design-interviews/common-system-designs/rate-limiter-design.json";
import rateLimitingLesson from "./architecture/courses/redis-caching-strategies/redis-use-cases/rate-limiting.json";
import rateLimitingLesson1 from "./frontend/courses/next-js-full-stack-react/full-stack-api-design/rate-limiting.json";
import rateLimitingAlgorithmsLesson from "./backend/problems/api-design/rate-limiting-design/rate-limiting-algorithms.json";
import rateLimitingAndLoadSheddingLesson from "./backend/courses/aspnet-core-web-api/production-api-design-reliability/rate-limiting-and-load-shedding.json";
import rateLimitingEdgeCasesLesson from "./backend/problems/api-design/rate-limiting-design/rate-limiting-edge-cases.json";
import rateLimitingInAspnetLesson from "./architecture/courses/fullstack-security/04-api-security-rate-limiting/rate-limiting-in-aspnet.json";
import rateLimitingSecurityLesson from "./backend/courses/authentication-authorization/09-security-best-practices/rate-limiting-security.json";
import rateLimitingStrategiesLesson from "./architecture/courses/microservices-architecture/api-gateway-patterns/rate-limiting-strategies.json";
import razorSyntaxLesson from "./backend/courses/aspnet-core/05-razor-views/razor-syntax.json";
import razorSyntaxBasicsLesson from "./backend/problems/aspnet-core/02-razor-views-problems/razor-syntax-basics.json";
import rbacAndNamespacesLesson from "./devops/courses/devops/production-kubernetes-day-2-operations/rbac-and-namespaces.json";
import rbacOverviewLesson from "./devops/courses/azure/07-identity-security-and-configuration/rbac-overview.json";
import rdsCsharpLesson from "./backend/courses/aws-for-aspnet/05-rds-dynamodb/rds-csharp.json";
import rdsIntroLesson from "./backend/courses/aws-for-aspnet/05-rds-dynamodb/rds-intro.json";
import react19FeaturesLesson from "./frontend/courses/react-fundamentals/09-performance-optimization/react-19-features.json";
import reactA01Lesson from "./interview-qa/03-advanced-questions/react-a01.json";
import reactApplicationAndAuthenticationLesson from "./architecture/problems/full-stack-senior-projects/project-2-collaborative-communication-platform/react-application-and-authentication.json";
import reactB01Lesson from "./interview-qa/01-beginner-questions/react-b01.json";
import reactB02Lesson from "./interview-qa/01-beginner-questions/react-b02.json";
import reactContextLesson from "./frontend/courses/react-fundamentals/06-context-refs/react-context.json";
import reactEssentialsLesson from "./frontend/courses/yarn-npm-packages/frontend-frameworks/react-essentials.json";
import reactHookFormLesson from "./frontend/courses/yarn-npm-packages/forms/react-hook-form.json";
import reactHookFormLesson1 from "./frontend/courses/yarn-npm-packages/react-forms-input/react-hook-form.json";
import reactI01Lesson from "./interview-qa/02-intermediate-questions/react-i01.json";
import reactI02Lesson from "./interview-qa/02-intermediate-questions/react-i02.json";
import reactI03Lesson from "./interview-qa/02-intermediate-questions/react-i03.json";
import reactIntegrationLesson from "./backend/courses/authentication-authorization/02-jwt/react-integration.json";
import reactKeysLesson from "./interview-qa/01-beginner-questions/react-keys.json";
import reactMemoizationLesson from "./frontend/courses/yarn-npm-packages/react-performance/react-memoization.json";
import reactMicroFrontendsLesson from "./architecture/problems/system-design/react-system-design/react-micro-frontends.json";
import reactProfilerAndRenderInvestigationLesson from "./architecture/courses/frontend-performance-engineering/browser-react-performance/react-profiler-and-render-investigation.json";
import reactQueryLesson from "./frontend/courses/yarn-npm-packages/react-data-fetching/react-query.json";
import reactQueryForServerStateLesson from "./frontend/courses/next-js-full-stack-react/state-management/react-query-for-server-state.json";
import reactQueryserverCacheArchitectureLesson from "./frontend/courses/react-advanced-patterns/modern-state-application-architecture/react-queryserver-cache-architecture.json";
import reactRouterLesson from "./frontend/courses/yarn-npm-packages/routing/react-router.json";
import reactSpringLesson from "./frontend/courses/yarn-npm-packages/animation/react-spring.json";
import reactSsrSsgHybridLesson from "./architecture/problems/system-design/react-system-design/react-ssr-ssg-hybrid.json";
import reactTestingLibraryLesson from "./frontend/courses/yarn-npm-packages/react-testing/react-testing-library.json";
import reactVirtualLesson from "./frontend/courses/yarn-npm-packages/react-ecosystem/react-virtual.json";
import reactiveVariablesLesson from "./frontend/courses/apollo/08-local-state-management/reactive-variables.json";
import readOnlyFieldsLesson from "./fundamentals/courses/oops-concepts/02-encapsulation-data-hiding/read-only-fields.json";
import readReplicasAndReadwriteSeparationLesson from "./database/courses/sql-server/concurrency-production-database-problems/read-replicas-and-readwrite-separation.json";
import readThroughPatternLesson from "./architecture/courses/redis-caching-strategies/caching-patterns/read-through-pattern.json";
import readerWriterLocksLesson from "./architecture/courses/design-patterns/05-concurrency-patterns/reader-writer-locks.json";
import readingApplicationAndSystemLogsLesson from "./devops/courses/git-linux-developer-workflow/linux-production-troubleshooting/reading-application-and-system-logs.json";
import readingExecutionPlansLesson from "./database/problems/database-design/query-optimization/reading-execution-plans.json";
import readytorunAndNativeAotLesson from "./backend/courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/readytorun-and-native-aot.json";
import realTimeAnalyticsLesson from "./architecture/courses/message-queues-event-streaming/stream-processing/real-time-analytics.json";
import realTimePatternsLesson from "./frontend/courses/apollo/07-subscriptions-realtime/real-time-patterns.json";
import realWorldAbstractionLesson from "./fundamentals/courses/oops-concepts/05-abstraction/real-world-abstraction.json";
import rebaseConflictsLesson from "./devops/courses/git-linux-developer-workflow/advanced-rebase/rebase-conflicts.json";
import rebaseToBranchLesson from "./devops/courses/git-linux-developer-workflow/advanced-rebase/rebase-to-branch.json";
import rebaseVsMergeLesson from "./devops/courses/git-linux-developer-workflow/advanced-rebase/rebase-vs-merge.json";
import rebusLesson from "./backend/courses/dotnet-nuget-packages/06-messaging-events/rebus.json";
import reconciliationAndComponentIdentityLesson from "./frontend/courses/react-fundamentals/react-internals-modern-rendering/reconciliation-and-component-identity.json";
import recordsPatternsLesson from "./backend/courses/csharp-fundamentals/07-modern-csharp/records-patterns.json";
import recoverBinarySearchTreeLesson from "./backend/problems/csharp/04-tree-graph-problems/recover-binary-search-tree.json";
import redGreenRefactorLesson from "./backend/courses/unit-testing-dotnet/05-tdd/red-green-refactor.json";
import redisLesson from "./backend/courses/dotnet-nuget-packages/04-database-data-access/redis.json";
import redisBenchmarkingLesson from "./architecture/courses/redis-caching-strategies/performance-optimization/redis-benchmarking.json";
import redisCacheCsharpLesson from "./backend/courses/azure-for-aspnet/06-monitoring-caching-cicd/redis-cache-csharp.json";
import redisCachingPatternsLesson from "./devops/courses/azure/06-databases-and-caching/redis-caching-patterns.json";
import redisCachingPatternsLesson1 from "./devops/problems/azure/05-azure-databases-problems/redis-caching-patterns.json";
import redisCliBasicsLesson from "./architecture/courses/redis-caching-strategies/redis-fundamentals/redis-cli-basics.json";
import redisClusterLesson from "./architecture/courses/redis-caching-strategies/distributed-caching/redis-cluster.json";
import redisCommandsLesson from "./architecture/courses/redis-caching-strategies/redis-fundamentals/redis-commands.json";
import redisDataTypesLesson from "./architecture/courses/redis-caching-strategies/redis-fundamentals/redis-data-types.json";
import redisMemoryManagementLesson from "./architecture/courses/redis-caching-strategies/redis-fundamentals/redis-memory-management.json";
import redisPersistenceLesson from "./architecture/courses/redis-caching-strategies/redis-fundamentals/redis-persistence.json";
import redisPipeliningLesson from "./architecture/courses/redis-caching-strategies/performance-optimization/redis-pipelining.json";
import redisSentinelLesson from "./architecture/courses/redis-caching-strategies/distributed-caching/redis-sentinel.json";
import redisSetupLesson from "./architecture/courses/redis-caching-strategies/redis-fundamentals/redis-setup.json";
import reducerHooksPatternsLesson from "./frontend/courses/react-advanced-patterns/10-advanced-hook-patterns/reducer-hooks-patterns.json";
import reduxLesson from "./frontend/courses/yarn-npm-packages/state-management/redux.json";
import reduxAsAnApplicationArchitectureToolLesson from "./frontend/courses/react-advanced-patterns/modern-state-application-architecture/redux-as-an-application-architecture-tool.json";
import reduxSagaLesson from "./frontend/courses/redux/04-redux-middleware/redux-saga.json";
import reduxThunkLesson from "./frontend/courses/redux/04-redux-middleware/redux-thunk.json";
import refactoringWithAiLesson from "./ai/courses/codex/practical-ai-workflows/refactoring-with-ai.json";
import referenceTypesLesson from "./backend/courses/csharp-fundamentals/02-variables-types/reference-types.json";
import referencesValuesAndObjectLifetimeLesson from "./fundamentals/courses/programming-computer-web-foundations/programming-computer-fundamentals/references-values-and-object-lifetime.json";
import refetchingLesson from "./frontend/courses/apollo/02-queries-mutations/refetching.json";
import refitLesson from "./backend/courses/dotnet-nuget-packages/http-clients-resilience/refit.json";
import reflectionAndItsTradeOffsLesson from "./backend/courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/reflection-and-its-trade-offs.json";
import reflogAndRecoveringLostCommitsLesson from "./devops/courses/git-linux-developer-workflow/git-for-senior-engineers/reflog-and-recovering-lost-commits.json";
import refreshAheadPatternLesson from "./architecture/courses/redis-caching-strategies/caching-patterns/refresh-ahead-pattern.json";
import refreshTokenBasicsLesson from "./backend/courses/authentication-authorization/07-refresh-token-strategies/refresh-token-basics.json";
import refreshTokenRotationLesson from "./architecture/courses/fullstack-security/modern-web-security-identity/refresh-token-rotation.json";
import registeringAndDescribingToolsLesson from "./ai/courses/dotnet-ai-backend/04-mcp-servers-tools/registering-and-describing-tools.json";
import regularExpressionMatchingLesson from "./backend/problems/csharp/05-dynamic-programming-problems/regular-expression-matching.json";
import relationQueriesAndPaginationLesson from "./frontend/courses/prisma/04-prisma-relations/relation-queries-and-pagination.json";
import relationalDesignLesson from "./architecture/courses/system-design-interviews/database-design/relational-design.json";
import relationsOverviewLesson from "./frontend/courses/prisma/04-prisma-relations/relations-overview.json";
import relationshipsAndConfigurationsLesson from "./backend/courses/aspnet-core/08-entity-framework-core/relationships-and-configurations.json";
import relationshipsConfigurationLesson from "./backend/problems/aspnet-core/06-ef-core-problems/relationships-configuration.json";
import releaseValidationAndRollbackLesson from "./devops/courses/azure/11-application-deployment-and-devops/release-validation-and-rollback.json";
import reliabilityPatternsLesson from "./fundamentals/courses/senior-software-engineering/system-design-for-seniors/reliability-patterns.json";
import removeDuplicatesFromSortedArrayLesson from "./backend/problems/csharp/01-array-problems/remove-duplicates-from-sorted-array.json";
import removeDuplicatesFromSortedListLesson from "./backend/problems/csharp/03-linked-list-problems/remove-duplicates-from-sorted-list.json";
import removeLinkedListElementsLesson from "./backend/problems/csharp/03-linked-list-problems/remove-linked-list-elements.json";
import removeNthNodeFromEndLesson from "./backend/problems/csharp/03-linked-list-problems/remove-nth-node-from-end.json";
import renderOptimizationLesson from "./frontend/courses/react-advanced-patterns/06-performance-patterns/render-optimization.json";
import renderOptimizationLesson1 from "./frontend/courses/react-testing/06-advanced-testing-patterns/render-optimization.json";
import renderPhaseVsCommitPhaseLesson from "./frontend/courses/react-fundamentals/react-internals-modern-rendering/render-phase-vs-commit-phase.json";
import renderPropsBasicsLesson from "./frontend/courses/react-advanced-patterns/01-render-props/render-props-basics.json";
import renderPropsExamplesLesson from "./frontend/courses/react-advanced-patterns/01-render-props/render-props-examples.json";
import renderPropsVsHooksLesson from "./frontend/courses/react-advanced-patterns/01-render-props/render-props-vs-hooks.json";
import renderingOptimizationLesson from "./frontend/courses/yarn-npm-packages/react-performance/rendering-optimization.json";
import replicationAndPartitioningLesson from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/replication-and-partitioning.json";
import repositoryMaintenanceLesson from "./devops/courses/git-linux-developer-workflow/git-performance/repository-maintenance.json";
import repositoryPatternLesson from "./architecture/courses/clean-code-csharp/06-architecture-patterns/repository-pattern.json";
import repositoryPatternLesson1 from "./architecture/courses/design-patterns/04-enterprise-patterns/repository-pattern.json";
import repositoryPatternLesson2 from "./interview-qa/02-intermediate-questions/repository-pattern.json";
import requestCancellationAndGracefulShutdownLesson from "./backend/courses/aspnet-core/asp-net-core-internals-production-hosting/request-cancellation-and-graceful-shutdown.json";
import requestLatencyDecompositionLesson from "./backend/courses/aspnet-core/performance-observability/request-latency-decomposition.json";
import requestLoggingLesson from "./backend/problems/aspnet-core/04-middleware-pipeline-problems/request-logging.json";
import requestPipelineAndMiddlewareExecutionLesson from "./backend/courses/aspnet-core/asp-net-core-internals-production-hosting/request-pipeline-and-middleware-execution.json";
import requestResponsePatternsLesson from "./architecture/courses/microservices-architecture/service-to-service-communication/request-response-patterns.json";
import requestRoutingLesson from "./architecture/courses/microservices-architecture/api-gateway-patterns/request-routing.json";
import requestValidationLesson from "./frontend/courses/next-js-full-stack-react/full-stack-api-design/request-validation.json";
import requestsAndLimitsLesson from "./devops/courses/devops/production-kubernetes-day-2-operations/requests-and-limits.json";
import requirementsAndRealTimeCommunicationArchitectureLesson from "./architecture/problems/full-stack-senior-projects/project-2-collaborative-communication-platform/requirements-and-real-time-communication-architecture.json";
import requirementsGatheringLesson from "./fundamentals/courses/senior-software-engineering/system-design-for-seniors/requirements-gathering.json";
import researchAndAnalysisLesson from "./ai/courses/claude/claude-for-research/research-and-analysis.json";
import resilienceFundamentalsLesson from "./architecture/courses/microservices-architecture/resilience-patterns/resilience-fundamentals.json";
import resilienceLibrariesPollyHystrixLesson from "./architecture/courses/microservices-architecture/resilience-patterns/resilience-libraries-polly-hystrix.json";
import resolversLesson from "./backend/courses/graphql-dotnet/03-queries-mutations/resolvers.json";
import resolvingDifficultMergeConflictsLesson from "./devops/courses/git-linux-developer-workflow/git-for-senior-engineers/resolving-difficult-merge-conflicts.json";
import resourceBasedAuthorizationLesson from "./backend/courses/authentication-authorization/06-advanced-authorization/resource-based-authorization.json";
import resourceGroupsVsManagementGroupsLesson from "./devops/problems/azure/01-azure-foundations-problems/resource-groups-vs-management-groups.json";
import resourceLimitsLesson from "./devops/courses/devops/production-docker-container-security/resource-limits.json";
import resourceNamingLesson from "./architecture/courses/system-design-interviews/api-design/resource-naming.json";
import responseCachingLesson from "./architecture/courses/redis-caching-strategies/caching-in-aspnet-core/response-caching.json";
import responseCachingLesson1 from "./backend/problems/aspnet-core/03-api-design-problems/response-caching.json";
import responseCompressionLesson from "./backend/problems/aspnet-core/04-middleware-pipeline-problems/response-compression.json";
import responseFormattingLesson from "./frontend/courses/next-js-full-stack-react/full-stack-api-design/response-formatting.json";
import restApiDesignPrinciplesLesson from "./backend/problems/aspnet-core/03-api-design-problems/rest-api-design-principles.json";
import restPrinciplesLesson from "./backend/courses/aspnet-core/10-web-api-rest/rest-principles.json";
import restVsGraphqlDecisionFrameworkLesson from "./architecture/courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/rest-vs-graphql-decision-framework.json";
import restVsGrpcDecisionFrameworkLesson from "./architecture/courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/rest-vs-grpc-decision-framework.json";
import restVsGrpcVsGraphqlLesson from "./architecture/courses/microservices-architecture/service-to-service-communication/rest-vs-grpc-vs-graphql.json";
import restfulPrinciplesLesson from "./architecture/courses/system-design-interviews/api-design/restful-principles.json";
import restsharpLesson from "./backend/courses/dotnet-nuget-packages/http-clients-resilience/restsharp.json";
import retrievalAndRankingLesson from "./ai/courses/dotnet-ai-backend/02-rag-implementation/retrieval-and-ranking.json";
import retryPatternsLesson from "./architecture/courses/microservices-architecture/resilience-patterns/retry-patterns.json";
import retryWithExponentialBackoffAndJitterLesson from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/retry-with-exponential-backoff-and-jitter.json";
import revalidationPatternsLesson from "./frontend/courses/next-js-full-stack-react/data-fetching-patterns/revalidation-patterns.json";
import reverseAnArrayLesson from "./backend/problems/csharp/01-array-problems/reverse-an-array.json";
import reverseLinkedListLesson from "./backend/problems/csharp/03-linked-list-problems/reverse-linked-list.json";
import reverseStringLesson from "./backend/problems/csharp/02-string-problems/reverse-string.json";
import reverseWordsLesson from "./backend/problems/csharp/02-string-problems/reverse-words.json";
import reversibilityLesson from "./fundamentals/courses/senior-software-engineering/technical-decision-making/reversibility.json";
import rideSharingHldLesson from "./architecture/problems/hld/ride-sharing-hld/ride-sharing-hld.json";
import riskAssessmentLesson from "./fundamentals/courses/senior-software-engineering/technical-decision-making/risk-assessment.json";
import roleBasedAccessLesson from "./backend/courses/aspnet-core/09-authentication-authorization/role-based-access.json";
import roleBasedAccessLesson1 from "./backend/problems/aspnet-core/07-authentication-authorization-problems/role-based-access.json";
import roleBasedAuthorizationLesson from "./backend/courses/authentication-authorization/06-advanced-authorization/role-based-authorization.json";
import rolesAuthorizationLesson from "./backend/courses/authentication-authorization/03-identity/roles-authorization.json";
import rolesPrivilegesLesson from "./database/courses/postgresql/security-hardening/roles-privileges.json";
import rollbackStrategyLesson from "./devops/courses/devops/ci-cd-safe-delivery/rollback-strategy.json";
import rollbackVsForwardFixLesson from "./fundamentals/courses/senior-software-engineering/production-ownership/rollback-vs-forward-fix.json";
import rollingDeploymentsAndRollbackLesson from "./devops/courses/devops/production-kubernetes-day-2-operations/rolling-deployments-and-rollback.json";
import rollupLesson from "./frontend/courses/yarn-npm-packages/build-tools/rollup.json";
import rootCauseAnalysisLesson from "./fundamentals/courses/senior-software-engineering/production-ownership/root-cause-analysis.json";
import roslynAnalyzersLesson from "./backend/courses/dotnet-nuget-packages/advanced-patterns/roslyn-analyzers.json";
import rotateArrayLesson from "./backend/problems/csharp/01-array-problems/rotate-array.json";
import round1ExplainYourArchitectureForAProductionNetReactApplicationLesson from "./interview-qa/mock-interview-scenarios/round-1-explain-your-architecture-for-a-production-net-react-application.json";
import round10FinalSeniorLevelSystemDesignWithInterviewerFollowUpsLesson from "./interview-qa/mock-interview-scenarios/round-10-final-senior-level-system-design-with-interviewer-follow-ups.json";
import round2DiagnoseASlowApiWithDatabaseAndInfrastructureSymptomsLesson from "./interview-qa/mock-interview-scenarios/round-2-diagnose-a-slow-api-with-database-and-infrastructure-symptoms.json";
import round3DesignAScalableOrderProcessingSystemLesson from "./interview-qa/mock-interview-scenarios/round-3-design-a-scalable-order-processing-system.json";
import round4DebugAReactPerformanceRegressionLesson from "./interview-qa/mock-interview-scenarios/round-4-debug-a-react-performance-regression.json";
import round5ReviewAPullRequestAndIdentifyCorrectnessSecurityAndMaintainabilityIssuesLesson from "./interview-qa/mock-interview-scenarios/round-5-review-a-pull-request-and-identify-correctness-security-and-maintainability-issues.json";
import round6ExplainADistributedTransactionAndFailureRecoveryStrategyLesson from "./interview-qa/mock-interview-scenarios/round-6-explain-a-distributed-transaction-and-failure-recovery-strategy.json";
import round7DefendAnArchitectureDecisionAndDiscussRejectedAlternativesLesson from "./interview-qa/mock-interview-scenarios/round-7-defend-an-architecture-decision-and-discuss-rejected-alternatives.json";
import round8TellTheStoryOfAProductionIncidentYouOwnedLesson from "./interview-qa/mock-interview-scenarios/round-8-tell-the-story-of-a-production-incident-you-owned.json";
import round9DesignAMigrationFromMonolithToModularArchitectureLesson from "./interview-qa/mock-interview-scenarios/round-9-design-a-migration-from-monolith-to-modular-architecture.json";
import routeConstraintsLesson from "./backend/courses/aspnet-core/03-routing-urls/route-constraints.json";
import routeConstraintsLesson1 from "./backend/courses/aspnet-core-web-api/02-controllers-routing/route-constraints.json";
import routeHandlersLesson from "./frontend/courses/next-js-full-stack-react/full-stack-api-design/route-handlers.json";
import routeHandlersAndBackendForFrontendPatternsLesson from "./frontend/courses/next-js-full-stack-react/app-router-rendering/route-handlers-and-backend-for-frontend-patterns.json";
import routeParamsLesson from "./frontend/courses/react-fundamentals/07-react-router/route-params.json";
import route53DnsLesson from "./devops/courses/aws/04-networking/route53-dns.json";
import routingBasicsLesson from "./backend/courses/aspnet-core/03-routing-urls/routing-basics.json";
import routingBasicsLesson1 from "./backend/courses/aspnet-core-web-api/02-controllers-routing/routing-basics.json";
import routingBasicsLesson2 from "./backend/problems/aspnet-core/01-mvc-fundamentals-problems/routing-basics.json";
import routingBasicsLesson3 from "./frontend/courses/react-fundamentals/07-react-router/routing-basics.json";
import rowLevelSecurityLesson from "./database/courses/postgresql/security-hardening/row-level-security.json";
import rtkQueryLesson from "./frontend/courses/redux/05-redux-patterns/rtk-query.json";
import rtlIntroLesson from "./frontend/courses/react-testing/03-react-testing-library/rtl-intro.json";
import rtoAndRpoLesson from "./fundamentals/courses/senior-software-engineering/production-ownership/rto-and-rpo.json";
import rtoAndRpoForAzureApplicationsLesson from "./devops/courses/azure/production-architecture-reliability-cost/rto-and-rpo-for-azure-applications.json";
import runbookAutomationLesson from "./devops/courses/git-linux-developer-workflow/production-readiness/runbook-automation.json";
import runningAndDebuggingLesson from "./backend/courses/aspnet-core/01-getting-started/running-and-debugging.json";
import runtimePolymorphismLesson from "./fundamentals/courses/oops-concepts/04-polymorphism/runtime-polymorphism.json";
import runtimeValidationVsCompileTimeTypesLesson from "./frontend/courses/typescript-for-react/advanced-type-modeling-runtime-safety/runtime-validation-vs-compile-time-types.json";
import s3AdvancedFeaturesLesson from "./devops/courses/aws/05-storage-services/s3-advanced-features.json";
import s3CsharpLesson from "./backend/courses/aws-for-aspnet/03-s3-storage-csharp/s3-csharp.json";
import s3IntroLesson from "./backend/courses/aws-for-aspnet/03-s3-storage-csharp/s3-intro.json";
import s3LifecycleCorsLesson from "./backend/courses/aws-for-aspnet/03-s3-storage-csharp/s3-lifecycle-cors.json";
import s3PresignedUrlsLesson from "./backend/courses/aws-for-aspnet/03-s3-storage-csharp/s3-presigned-urls.json";
import sagaPatternLesson from "./architecture/courses/microservices-architecture/distributed-transactions/saga-pattern.json";
import sagaPatternLesson1 from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/saga-pattern.json";
import sameTreeLesson from "./backend/problems/csharp/04-tree-graph-problems/same-tree.json";
import saml2BasicsLesson from "./backend/courses/authentication-authorization/08-sso-identity-providers/saml2-basics.json";
import sampleLinqQueriesLesson from "./backend/courses/linq/11-advanced-linq-concepts/sample-linq-queries.json";
import sassLesson from "./frontend/courses/yarn-npm-packages/styling/sass.json";
import scalableAspnetApiDesignLesson from "./architecture/problems/system-design/aspnet-system-design/scalable-aspnet-api-design.json";
import scalableReactStateArchitectureLesson from "./architecture/problems/system-design/react-system-design/scalable-react-state-architecture.json";
import scalarsCustomTypesLesson from "./backend/courses/graphql-dotnet/02-schema-types/scalars-custom-types.json";
import scalingRealTimeConnectionsLesson from "./architecture/problems/full-stack-senior-projects/project-2-collaborative-communication-platform/scaling-real-time-connections.json";
import scalingStrategiesLesson from "./fundamentals/courses/senior-software-engineering/system-design-for-seniors/scaling-strategies.json";
import scenarioQ1Lesson from "./interview-qa/04-scenario-based/scenario-q1.json";
import scenarioQ2Lesson from "./interview-qa/04-scenario-based/scenario-q2.json";
import scenarioQ21Lesson from "./interview-qa/04-scenario-based/scenario-q21.json";
import scenarioQ22Lesson from "./interview-qa/04-scenario-based/scenario-q22.json";
import scenarioQ23Lesson from "./interview-qa/04-scenario-based/scenario-q23.json";
import scenarioQ24Lesson from "./interview-qa/04-scenario-based/scenario-q24.json";
import scenarioQ25Lesson from "./interview-qa/04-scenario-based/scenario-q25.json";
import scenarioQ3Lesson from "./interview-qa/04-scenario-based/scenario-q3.json";
import schemaBasicsLesson from "./backend/courses/graphql-dotnet/02-schema-types/schema-basics.json";
import schemaBestPracticesLesson from "./frontend/courses/prisma/02-prisma-schema-design/schema-best-practices.json";
import schemaPrismaStructureLesson from "./frontend/courses/prisma/02-prisma-schema-design/schema-prisma-structure.json";
import schemaValidationForApiBoundariesLesson from "./frontend/courses/typescript-for-react/advanced-type-modeling-runtime-safety/schema-validation-for-api-boundaries.json";
import scopeConstraintsLesson from "./architecture/courses/system-design-interviews/requirement-clarification/scope-constraints.json";
import scopedVsTransientVsSingletonLesson from "./backend/problems/aspnet-core/05-dependency-injection-problems/scoped-vs-transient-vs-singleton.json";
import scopesClaimsRolesAndPoliciesLesson from "./architecture/courses/fullstack-security/modern-web-security-identity/scopes-claims-roles-and-policies.json";
import sdB01Lesson from "./interview-qa/05-system-design/sd-b01.json";
import sealedClassesLesson from "./fundamentals/courses/oops-concepts/03-inheritance/sealed-classes.json";
import searchApiLesson from "./backend/problems/api-design/rest-api-design-scenarios/search-api.json";
import searchAutocompleteLesson from "./architecture/problems/hld/search-autocomplete/search-autocomplete.json";
import searchInRotatedSortedArrayLesson from "./backend/problems/csharp/01-array-problems/search-in-rotated-sorted-array.json";
import secretStorageAndRotationLesson from "./architecture/courses/fullstack-security/modern-web-security-identity/secret-storage-and-rotation.json";
import secretsManagementLesson from "./architecture/courses/fullstack-security/07-environment-secrets/secrets-management.json";
import secretsManagementLesson1 from "./architecture/courses/microservices-architecture/security-in-microservices/secrets-management.json";
import secretsManagerCsharpLesson from "./backend/courses/aws-for-aspnet/04-aws-secrets-manager/secrets-manager-csharp.json";
import secretsManagerIntroLesson from "./backend/courses/aws-for-aspnet/04-aws-secrets-manager/secrets-manager-intro.json";
import secureStorageStrategiesLesson from "./backend/courses/authentication-authorization/07-refresh-token-strategies/secure-storage-strategies.json";
import securingAiServicesWithManagedIdentityLesson from "./devops/courses/azure/13-ai-services-for-azure-developers/securing-ai-services-with-managed-identity.json";
import securingReactAppsLesson from "./architecture/courses/fullstack-security/03-xss-csrf-protection/securing-react-apps.json";
import securityFundamentalsLesson from "./devops/courses/git-linux-developer-workflow/git-security/security-fundamentals.json";
import securityHardeningLesson from "./devops/courses/git-linux-developer-workflow/production-readiness/security-hardening.json";
import securityTestingLesson from "./architecture/courses/microservices-architecture/security-in-microservices/security-testing.json";
import securityTestingFundamentalsLesson from "./architecture/courses/fullstack-security/08-security-testing/security-testing-fundamentals.json";
import seedScriptsLesson from "./frontend/courses/prisma/05-prisma-migrations/seed-scripts.json";
import seekVsScanLesson from "./database/courses/sql-server/database-internals-query-optimization/seek-vs-scan.json";
import selectAndIncludeLesson from "./frontend/courses/prisma/03-prisma-queries-mutations/select-and-include.json";
import selectStatementLesson from "./database/courses/postgresql/querying-data/select-statement.json";
import selectiveFetchingLesson from "./frontend/courses/react-query/08-performance-optimization/selective-fetching.json";
import semanticKernelAgentsAndPlannersLesson from "./ai/courses/dotnet-ai-backend/05-ai-agents-dotnet/semantic-kernel-agents-and-planners.json";
import semanticKernelProcessFrameworkLesson from "./ai/courses/dotnet-ai-backend/05-ai-agents-dotnet/semantic-kernel-process-framework.json";
import semaphoreslimAndBoundedConcurrencyLesson from "./backend/courses/csharp-fundamentals/advanced-async-concurrency-threading/semaphoreslim-and-bounded-concurrency.json";
import sendgridLesson from "./backend/courses/dotnet-nuget-packages/09-utilities-helpers/sendgrid.json";
import seqLesson from "./backend/courses/dotnet-nuget-packages/logging-monitoring/seq.json";
import sequenceequalOperatorLesson from "./backend/courses/linq/11-advanced-linq-concepts/sequenceequal-operator.json";
import serilogLesson from "./backend/courses/dotnet-nuget-packages/logging-monitoring/serilog.json";
import serverActionsAndMutationBoundariesLesson from "./frontend/courses/next-js-full-stack-react/app-router-rendering/server-actions-and-mutation-boundaries.json";
import serverComponentsAndClientComponentsLesson from "./frontend/courses/next-js-full-stack-react/app-router-rendering/server-components-and-client-components.json";
import serverComponentsDataFetchingLesson from "./frontend/courses/next-js-full-stack-react/data-fetching-patterns/server-components-data-fetching.json";
import serverComponentsVsClientComponentsLesson from "./frontend/courses/react-fundamentals/react-internals-modern-rendering/server-components-vs-client-components.json";
import serverGcVsWorkstationGcLesson from "./backend/courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/server-gc-vs-workstation-gc.json";
import serverSideDiscoveryLesson from "./architecture/courses/microservices-architecture/service-discovery/server-side-discovery.json";
import serverlessApiBestPracticesLesson from "./devops/problems/azure/03-azure-serverless-problems/serverless-api-best-practices.json";
import serverlessArchitecturePatternsLesson from "./devops/courses/aws/08-serverless/serverless-architecture-patterns.json";
import serviceBoundariesLesson from "./fundamentals/courses/senior-software-engineering/system-design-for-seniors/service-boundaries.json";
import serviceBoundariesDesignLesson from "./architecture/courses/microservices-architecture/microservices-fundamentals/service-boundaries-design.json";
import serviceBusCsharpLesson from "./backend/courses/azure-for-aspnet/08-service-bus-events/service-bus-csharp.json";
import serviceBusDeadLetteringAndRetriesLesson from "./devops/courses/azure/09-messaging-and-event-driven-architecture/service-bus-dead-lettering-and-retries.json";
import serviceBusFromAzureFunctionsLesson from "./devops/courses/azure/09-messaging-and-event-driven-architecture/service-bus-from-azure-functions.json";
import serviceBusQueuesLesson from "./devops/courses/azure/09-messaging-and-event-driven-architecture/service-bus-queues.json";
import serviceBusSessionsAndMessageProcessingLesson from "./devops/courses/azure/09-messaging-and-event-driven-architecture/service-bus-sessions-and-message-processing.json";
import serviceBusTopicsAndSubscriptionsLesson from "./devops/courses/azure/09-messaging-and-event-driven-architecture/service-bus-topics-and-subscriptions.json";
import serviceBusVsEventGridVsEventHubsLesson from "./devops/courses/azure/09-messaging-and-event-driven-architecture/service-bus-vs-event-grid-vs-event-hubs.json";
import serviceDiscoveryFundamentalsLesson from "./architecture/courses/microservices-architecture/service-discovery/service-discovery-fundamentals.json";
import serviceLifetimesLesson from "./backend/courses/aspnet-core/06-dependency-injection/service-lifetimes.json";
import serviceLifetimesLesson1 from "./backend/courses/aspnet-core-web-api/05-dependency-injection/service-lifetimes.json";
import serviceLifetimesLesson2 from "./backend/problems/aspnet-core/05-dependency-injection-problems/service-lifetimes.json";
import serviceToServiceAuthenticationLesson from "./architecture/courses/microservices-architecture/security-in-microservices/service-to-service-authentication.json";
import servicesAndServiceDiscoveryLesson from "./devops/courses/devops/production-kubernetes-day-2-operations/services-and-service-discovery.json";
import sessionManagementLesson from "./backend/courses/authentication-authorization/09-security-best-practices/session-management.json";
import sessionPersistenceLesson from "./architecture/courses/system-design-interviews/load-balancing/session-persistence.json";
import sessionStoreLesson from "./architecture/courses/redis-caching-strategies/redis-use-cases/session-store.json";
import sessionVsTokenLesson from "./backend/courses/authentication-authorization/01-auth-basics/session-vs-token.json";
import setMatrixZeroesLesson from "./backend/problems/csharp/01-array-problems/set-matrix-zeroes.json";
import setReturningFunctionsLesson from "./database/courses/postgresql/stored-procedures-functions/set-returning-functions.json";
import settingUpLesson from "./backend/courses/csharp-fundamentals/01-getting-started/setting-up.json";
import settingUpAiCodingEnvironmentLesson from "./ai/courses/codex/intro-to-ai-coding/setting-up-ai-coding-environment.json";
import settingUpClaudeLesson from "./ai/courses/claude/getting-started/setting-up-claude.json";
import settingUpEnvironmentLesson from "./backend/courses/aspnet-core/01-getting-started/setting-up-environment.json";
import settingUpEnvironmentLesson1 from "./frontend/courses/react-fundamentals/01-getting-started/setting-up-environment.json";
import settingUpPrismaClientLesson from "./frontend/courses/prisma/01-prisma-basics/setting-up-prisma-client.json";
import setupLesson from "./frontend/courses/react-query/01-query-basics/setup.json";
import setupClientLesson from "./frontend/courses/apollo/01-apollo-basics/setup-client.json";
import setupIdentityLesson from "./backend/courses/authentication-authorization/03-identity/setup-identity.json";
import shadowPropertyInEntityFrameworkCoreLesson from "./backend/courses/ef-core/10-advanced-features/shadow-property-in-entity-framework-core.json";
import shallowClonesLesson from "./devops/courses/git-linux-developer-workflow/git-performance/shallow-clones.json";
import shardingStrategiesLesson from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/sharding-strategies.json";
import sharedDatabaseAntiPatternLesson from "./architecture/courses/microservices-architecture/data-management/shared-database-anti-pattern.json";
import sharpcompressLesson from "./backend/courses/dotnet-nuget-packages/08-security-cryptography/sharpcompress.json";
import sharpcompressLesson1 from "./backend/courses/dotnet-nuget-packages/09-utilities-helpers/sharpcompress.json";
import simpleViewsLesson from "./database/courses/postgresql/views/simple-views.json";
import simplifyPathLesson from "./backend/problems/csharp/02-string-problems/simplify-path.json";
import singleResponsibilityLesson from "./architecture/courses/clean-code-csharp/01-solid-principles/single-responsibility.json";
import singleSingleordefaultLesson from "./backend/courses/linq/08-quantifiers-element-operators/single-singleordefault.json";
import singletonPatternLesson from "./architecture/courses/clean-code-csharp/02-creational-patterns/singleton-pattern.json";
import singletonPatternLesson1 from "./architecture/courses/design-patterns/01-creational-patterns/singleton-pattern.json";
import skipSkipwhileLesson from "./backend/courses/linq/09-partitioning-operators/skip-skipwhile.json";
import slackMessagingLesson from "./architecture/problems/lld/slack-messaging/slack-messaging.json";
import slackMessagingHldLesson from "./architecture/problems/hld/slack-messaging-hld/slack-messaging-hld.json";
import sliSloAndSlaLesson from "./fundamentals/courses/senior-software-engineering/production-ownership/sli-slo-and-sla.json";
import sliSloAndSlaInAzureWorkloadsLesson from "./devops/courses/azure/production-architecture-reliability-cost/sli-slo-and-sla-in-azure-workloads.json";
import slidingExpirationLesson from "./backend/courses/authentication-authorization/07-refresh-token-strategies/sliding-expiration.json";
import slidingWindowImplementationLesson from "./backend/problems/api-design/rate-limiting-design/sliding-window-implementation.json";
import slotPatternLesson from "./frontend/courses/react-advanced-patterns/09-component-composition-strategies/slot-pattern.json";
import slowApiInvestigationWorkflowLesson from "./backend/courses/aspnet-core/performance-observability/slow-api-investigation-workflow.json";
import snapshotIsolationAndRowVersioningLesson from "./database/courses/sql-server/concurrency-production-database-problems/snapshot-isolation-and-row-versioning.json";
import snapshotsReplayLesson from "./architecture/courses/message-queues-event-streaming/event-sourcing/snapshots-replay.json";
import snsCsharpLesson from "./backend/courses/aws-for-aspnet/07-sqs-sns-events/sns-csharp.json";
import socialMediaApiLesson from "./backend/problems/api-design/rest-api-design-scenarios/social-media-api.json";
import socialMediaSchemaLesson from "./database/problems/database-design/schema-design-scenarios/social-media-schema.json";
import solidPrinciplesLesson from "./fundamentals/courses/oops-concepts/07-design-principles/solid-principles.json";
import solidPrinciplesLesson1 from "./interview-qa/02-intermediate-questions/solid-principles.json";
import sortColorsLesson from "./backend/problems/csharp/01-array-problems/sort-colors.json";
import sourceGeneratorsLesson from "./backend/courses/dotnet-nuget-packages/advanced-patterns/source-generators.json";
import spantMemorytAndRefStructsLesson from "./backend/courses/csharp-fundamentals/advanced-c-runtime-memory-concurrency/spant-memoryt-and-ref-structs.json";
import spantWhatDoesItImproveAndWhatConstraintsDoesItIntroduceLesson from "./interview-qa/c-net-follow-ups/spant-what-does-it-improve-and-what-constraints-does-it-introduce.json";
import sparseCheckoutLesson from "./devops/courses/git-linux-developer-workflow/git-performance/sparse-checkout.json";
import spectreConsoleLesson from "./backend/courses/dotnet-nuget-packages/advanced-patterns/spectre-console.json";
import spiralMatrixLesson from "./backend/problems/csharp/01-array-problems/spiral-matrix.json";
import spotifyMusicLesson from "./architecture/problems/lld/spotify-music/spotify-music.json";
import spotifyMusicHldLesson from "./architecture/problems/hld/spotify-music-hld/spotify-music-hld.json";
import sqlA01Lesson from "./interview-qa/03-advanced-questions/sql-a01.json";
import sqlA02Lesson from "./interview-qa/03-advanced-questions/sql-a02.json";
import sqlB01Lesson from "./interview-qa/01-beginner-questions/sql-b01.json";
import sqlB02Lesson from "./interview-qa/01-beginner-questions/sql-b02.json";
import sqlB03Lesson from "./interview-qa/01-beginner-questions/sql-b03.json";
import sqlFunctionsLesson from "./database/courses/postgresql/stored-procedures-functions/sql-functions.json";
import sqlI01Lesson from "./interview-qa/02-intermediate-questions/sql-i01.json";
import sqlI02Lesson from "./interview-qa/02-intermediate-questions/sql-i02.json";
import sqlI03Lesson from "./interview-qa/02-intermediate-questions/sql-i03.json";
import sqlInjectionAndParameterizationLesson from "./architecture/courses/fullstack-security/modern-web-security-identity/sql-injection-and-parameterization.json";
import sqlServerIntegrationServicesLesson from "./database/courses/sql-server/21-modern-data-tools/sql-server-integration-services.json";
import sqlVsNosqlLesson from "./architecture/courses/system-design-interviews/database-design/sql-vs-nosql.json";
import sqlVsNosqlDecisionFrameworkLesson from "./architecture/courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/sql-vs-nosql-decision-framework.json";
import sqlclientLesson from "./backend/courses/dotnet-nuget-packages/04-database-data-access/sqlclient.json";
import sqsBasicsLesson from "./architecture/courses/message-queues-event-streaming/message-queue-fundamentals/sqs-basics.json";
import sqsCsharpLesson from "./backend/courses/aws-for-aspnet/07-sqs-sns-events/sqs-csharp.json";
import squashingCommitsLesson from "./devops/courses/git-linux-developer-workflow/advanced-rebase/squashing-commits.json";
import ssgHydrationLesson from "./frontend/courses/apollo/09-ssr-nextjs-performance/ssg-hydration.json";
import sshAndSecureRemoteAccessLesson from "./devops/courses/git-linux-developer-workflow/linux-production-troubleshooting/ssh-and-secure-remote-access.json";
import sshKeyManagementLesson from "./devops/courses/git-linux-developer-workflow/git-security/ssh-key-management.json";
import sslTlsLesson from "./database/courses/postgresql/security-hardening/ssl-tls.json";
import ssoAndIdentityProviderIntegrationLesson from "./architecture/courses/fullstack-security/modern-web-security-identity/sso-and-identity-provider-integration.json";
import ssoFundamentalsLesson from "./backend/courses/authentication-authorization/08-sso-identity-providers/sso-fundamentals.json";
import ssrIntegrationNextjsLesson from "./frontend/courses/react-query/07-prefetching-ssr/ssr-integration-nextjs.json";
import ssrSsgIsrAndDynamicRenderingLesson from "./frontend/courses/next-js-full-stack-react/app-router-rendering/ssr-ssg-isr-and-dynamic-rendering.json";
import ssrWithApolloLesson from "./frontend/courses/apollo/09-ssr-nextjs-performance/ssr-with-apollo.json";
import ssrfAndServerSideRequestValidationLesson from "./architecture/courses/fullstack-security/modern-web-security-identity/ssrf-and-server-side-request-validation.json";
import stackVsHeapLesson from "./fundamentals/courses/programming-computer-web-foundations/programming-computer-fundamentals/stack-vs-heap.json";
import stackexchangeRedisLesson from "./backend/courses/dotnet-nuget-packages/04-database-data-access/stackexchange-redis.json";
import stacksAndQueuesLesson from "./fundamentals/courses/programming-computer-web-foundations/data-structures-deep-dive/stacks-and-queues.json";
import stagingSlotsCustomDomainsLesson from "./backend/courses/azure-for-aspnet/02-azure-app-service-deployment/staging-slots-custom-domains.json";
import stakeholderAlignmentLesson from "./fundamentals/courses/senior-software-engineering/technical-decision-making/stakeholder-alignment.json";
import staleTimeGcLesson from "./frontend/courses/react-query/05-caching-strategies/stale-time-gc.json";
import standardQueryOperatorsLesson from "./backend/courses/linq/11-advanced-linq-concepts/standard-query-operators.json";
import starMethodFundamentalsLesson from "./interview-qa/behavioral-interview-questions/star-method-fundamentals.json";
import starSnowflakeSchemaLesson from "./database/courses/sql-server/19-data-warehousing/star-snowflake-schema.json";
import stateArchitectureLesson from "./frontend/courses/next-js-full-stack-react/state-management/state-architecture.json";
import stateBestPracticesLesson from "./frontend/courses/react-fundamentals/03-state-events/state-best-practices.json";
import stateCompositionLesson from "./frontend/courses/apollo/08-local-state-management/state-composition.json";
import stateReducerBasicsLesson from "./frontend/courses/react-advanced-patterns/04-state-reducers/state-reducer-basics.json";
import stateReducerCompositionLesson from "./frontend/courses/react-advanced-patterns/04-state-reducers/state-reducer-composition.json";
import stateReducerExamplesLesson from "./frontend/courses/react-advanced-patterns/04-state-reducers/state-reducer-examples.json";
import stateSharingBetweenHooksLesson from "./frontend/courses/react-advanced-patterns/07-custom-hooks-architecture/state-sharing-between-hooks.json";
import stateSynchronizationLesson from "./frontend/courses/next-js-full-stack-react/state-management/state-synchronization.json";
import stateSynchronizationAcrossBrowserTabsLesson from "./frontend/courses/react-advanced-patterns/modern-state-application-architecture/state-synchronization-across-browser-tabs.json";
import statechartsAdvancedLesson from "./frontend/courses/react-advanced-patterns/08-state-machines-xstate/statecharts-advanced.json";
import statelessDesignLesson from "./architecture/courses/system-design-interviews/scalability-patterns/stateless-design.json";
import statelessServicesAndDistributedStateLesson from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/stateless-services-and-distributed-state.json";
import staticFilesAndCachingLesson from "./backend/courses/aspnet-core/07-middleware-pipeline/static-files-and-caching.json";
import statisticsAndCardinalityEstimationLesson from "./database/courses/sql-server/database-internals-query-optimization/statistics-and-cardinality-estimation.json";
import statisticsMaintenanceLesson from "./database/courses/sql-server/16-performance-tuning/statistics-maintenance.json";
import stayingCurrentInAiLesson from "./ai/courses/ai-basics/staying-current/staying-current-in-ai.json";
import stepFunctionsLesson from "./devops/courses/aws/08-serverless/step-functions.json";
import storageEncryptionAndSecurityLesson from "./devops/problems/azure/04-azure-storage-problems/storage-encryption-and-security.json";
import storageEstimationLesson from "./architecture/courses/system-design-interviews/capacity-estimation/storage-estimation.json";
import storagePrivateEndpointsLesson from "./devops/courses/azure/05-storage-and-data-services/storage-private-endpoints.json";
import storageQueuesLesson from "./devops/courses/azure/05-storage-and-data-services/storage-queues.json";
import storageRedundancyAndReplicationLesson from "./devops/courses/azure/05-storage-and-data-services/storage-redundancy-and-replication.json";
import storageSecurityAndEncryptionLesson from "./devops/courses/azure/05-storage-and-data-services/storage-security-and-encryption.json";
import storeActionsReducersLesson from "./frontend/courses/redux/01-redux-fundamentals/store-actions-reducers.json";
import storeInitializationLesson from "./frontend/courses/redux/07-redux-advanced-concepts/store-initialization.json";
import storedProceduresLesson from "./database/courses/postgresql/stored-procedures-functions/stored-procedures.json";
import storedProceduresVsFunctionsLesson from "./interview-qa/01-beginner-questions/stored-procedures-vs-functions.json";
import storybookLesson from "./frontend/courses/yarn-npm-packages/testing/storybook.json";
import strategyPatternLesson from "./architecture/courses/clean-code-csharp/04-behavioral-patterns/strategy-pattern.json";
import strategyPatternLesson1 from "./architecture/courses/design-patterns/03-behavioral-patterns/strategy-pattern.json";
import streamVsTableLesson from "./architecture/courses/message-queues-event-streaming/stream-processing/stream-vs-table.json";
import streamingAndSuspenseLesson from "./frontend/courses/next-js-full-stack-react/app-router-rendering/streaming-and-suspense.json";
import streamingAndSuspenseLesson1 from "./frontend/courses/next-js-full-stack-react/data-fetching-patterns/streaming-and-suspense.json";
import streamingApisAndLargePayloadsLesson from "./backend/courses/aspnet-core-web-api/production-api-design-reliability/streaming-apis-and-large-payloads.json";
import streamingReplicationLesson from "./database/courses/postgresql/high-availability-dr/streaming-replication.json";
import stringCompressionLesson from "./backend/problems/csharp/02-string-problems/string-compression.json";
import strongVsEventualConsistencyLesson from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/strong-vs-eventual-consistency.json";
import structuredLoggingLesson from "./architecture/courses/microservices-architecture/observability/structured-logging.json";
import structuredLoggingLesson1 from "./backend/courses/aspnet-core-web-api/08-logging-configuration/structured-logging.json";
import structuredLoggingAndCorrelationIdsLesson from "./backend/courses/aspnet-core/performance-observability/structured-logging-and-correlation-ids.json";
import stubsFakesLesson from "./backend/courses/unit-testing-dotnet/03-mocking-fakes/stubs-fakes.json";
import styledComponentsLesson from "./frontend/courses/react-fundamentals/08-styling/styled-components.json";
import styledComponentsLesson1 from "./frontend/courses/yarn-npm-packages/styling/styled-components.json";
import subarraySumEqualsKLesson from "./backend/problems/csharp/01-array-problems/subarray-sum-equals-k.json";
import submoduleCommonPitfallsLesson from "./devops/courses/git-linux-developer-workflow/submodules-subtrees/submodule-common-pitfalls.json";
import submoduleFundamentalsLesson from "./devops/courses/git-linux-developer-workflow/submodules-subtrees/submodule-fundamentals.json";
import submoduleWorkflowsLesson from "./devops/courses/git-linux-developer-workflow/submodules-subtrees/submodule-workflows.json";
import subqueryVsJoinLesson from "./database/problems/database-design/query-optimization/subquery-vs-join.json";
import subscriptionLifecycleLesson from "./frontend/courses/apollo/07-subscriptions-realtime/subscription-lifecycle.json";
import subscriptionPatternsLesson from "./architecture/courses/message-queues-event-streaming/publish-subscribe-patterns/subscription-patterns.json";
import subscriptionsLesson from "./backend/courses/graphql-dotnet/03-queries-mutations/subscriptions.json";
import subscriptionsLesson1 from "./frontend/courses/apollo/04-advanced-patterns/subscriptions.json";
import subscriptionsBasicsLesson from "./frontend/courses/apollo/07-subscriptions-realtime/subscriptions-basics.json";
import subscriptionsResourceGroupsResourcesLesson from "./devops/courses/azure/01-azure-developer-foundations/subscriptions-resource-groups-resources.json";
import subtreeFundamentalsLesson from "./devops/courses/git-linux-developer-workflow/submodules-subtrees/subtree-fundamentals.json";
import subtreeVsSubmoduleLesson from "./devops/courses/git-linux-developer-workflow/submodules-subtrees/subtree-vs-submodule.json";
import supplyChainSecurityInCicdLesson from "./devops/courses/devops/ci-cd-safe-delivery/supply-chain-security-in-cicd.json";
import surroundedRegionsLesson from "./backend/problems/csharp/04-tree-graph-problems/surrounded-regions.json";
import suspenseLesson from "./frontend/courses/react-query/04-advanced-features/suspense.json";
import suspenseAndAsynchronousUiLesson from "./frontend/courses/react-fundamentals/react-internals-modern-rendering/suspense-and-asynchronous-ui.json";
import svelteLesson from "./frontend/courses/yarn-npm-packages/frontend-frameworks/svelte.json";
import swaggerAndOpenapiLesson from "./backend/courses/aspnet-core/10-web-api-rest/swagger-and-openapi.json";
import swaggerDocumentationLesson from "./backend/problems/aspnet-core/03-api-design-problems/swagger-documentation.json";
import swapNodesInPairsLesson from "./backend/problems/csharp/03-linked-list-problems/swap-nodes-in-pairs.json";
import swashbuckleLesson from "./backend/courses/dotnet-nuget-packages/api-documentation-swagger/swashbuckle.json";
import swashbuckleAspnetcoreLesson from "./backend/courses/dotnet-nuget-packages/api-documentation-swagger/swashbuckle-aspnetcore.json";
import switchStatementsLesson from "./backend/courses/csharp-fundamentals/03-control-flow/switch-statements.json";
import swrLesson from "./frontend/courses/yarn-npm-packages/react-data-fetching/swr.json";
import symmetricTreeLesson from "./backend/problems/csharp/04-tree-graph-problems/symmetric-tree.json";
import synchronousVsAsynchronousCommunicationLesson from "./architecture/courses/microservices-architecture/service-to-service-communication/synchronous-vs-asynchronous-communication.json";
import synchronousVsAsynchronousWorkLesson from "./fundamentals/courses/programming-computer-web-foundations/programming-computer-fundamentals/synchronous-vs-asynchronous-work.json";
import synchronousVsAsynchronousWorkflowsLesson from "./architecture/courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/synchronous-vs-asynchronous-workflows.json";
import systemIoPipelinesLesson from "./backend/courses/dotnet-nuget-packages/advanced-patterns/system-io-pipelines.json";
import systemPromptsAndCustomInstructionsLesson from "./ai/courses/ai-basics/prompting-basics/system-prompts-and-custom-instructions.json";
import systemQ1Lesson from "./interview-qa/05-system-design/system-q1.json";
import systemQ11Lesson from "./interview-qa/05-system-design/system-q11.json";
import systemQ12Lesson from "./interview-qa/05-system-design/system-q12.json";
import systemQ13Lesson from "./interview-qa/05-system-design/system-q13.json";
import systemQ14Lesson from "./interview-qa/05-system-design/system-q14.json";
import systemQ15Lesson from "./interview-qa/05-system-design/system-q15.json";
import systemQ2Lesson from "./interview-qa/05-system-design/system-q2.json";
import systemTextJsonLesson from "./backend/courses/dotnet-nuget-packages/05-serialization-mapping/system-text-json.json";
import systemTextJsonSourceGenLesson from "./backend/courses/dotnet-nuget-packages/advanced-patterns/system-text-json-source-gen.json";
import systemThreadingChannelsLesson from "./backend/courses/dotnet-nuget-packages/advanced-patterns/system-threading-channels.json";
import systemsManagerLesson from "./devops/courses/aws/12-security-services/systems-manager.json";
import tableInheritanceLesson from "./database/courses/postgresql/advanced-topics/table-inheritance.json";
import tableStorageLesson from "./devops/courses/azure/05-storage-and-data-services/table-storage.json";
import tagHelpersLesson from "./backend/courses/aspnet-core/05-razor-views/tag-helpers.json";
import tagHelpersLesson1 from "./backend/problems/aspnet-core/02-razor-views-problems/tag-helpers.json";
import tailwindCssLesson from "./frontend/courses/react-fundamentals/08-styling/tailwind-css.json";
import tailwindCssLesson1 from "./frontend/courses/yarn-npm-packages/styling/tailwind-css.json";
import takeTakewhileLesson from "./backend/courses/linq/09-partitioning-operators/take-takewhile.json";
import tanstackRouterLesson from "./frontend/courses/yarn-npm-packages/routing/tanstack-router.json";
import taskSchedulingAndContinuationsLesson from "./backend/courses/csharp-fundamentals/advanced-async-concurrency-threading/task-scheduling-and-continuations.json";
import taskrunWhenIsItAppropriateInAnAspnetCoreApplicationLesson from "./interview-qa/c-net-follow-ups/taskrun-when-is-it-appropriate-in-an-aspnet-core-application.json";
import tccPatternLesson from "./architecture/courses/microservices-architecture/distributed-transactions/tcc-pattern.json";
import tcpConnectionAndTlsHandshakeLesson from "./fundamentals/courses/programming-computer-web-foundations/web-networking-fundamentals/tcp-connection-and-tls-handshake.json";
import tcpIpStackLesson from "./fundamentals/courses/programming-computer-web-foundations/networking-protocols/tcp-ip-stack.json";
import tddAspnetCoreLesson from "./backend/courses/unit-testing-dotnet/05-tdd/tdd-aspnet-core.json";
import tddIntroLesson from "./backend/courses/unit-testing-dotnet/05-tdd/tdd-intro.json";
import tddPatternsLesson from "./backend/courses/unit-testing-dotnet/05-tdd/tdd-patterns.json";
import teamAiGovernanceLesson from "./ai/courses/ai-basics/privacy-and-data/team-ai-governance.json";
import teamConflictQuestionsLesson from "./interview-qa/behavioral-interview-questions/team-conflict-questions.json";
import technicalRoadmapsLesson from "./fundamentals/courses/senior-software-engineering/technical-decision-making/technical-roadmaps.json";
import tellMeAboutADifficultTechnicalDecisionYouMadeLesson from "./interview-qa/leadership-ownership/tell-me-about-a-difficult-technical-decision-you-made.json";
import tellMeAboutAProductionIncidentYouOwnedLesson from "./interview-qa/leadership-ownership/tell-me-about-a-production-incident-you-owned.json";
import tellMeAboutAProjectThatFailedAndWhatYouLearnedLesson from "./interview-qa/leadership-ownership/tell-me-about-a-project-that-failed-and-what-you-learned.json";
import tellMeAboutATechnicalDecisionYouWouldMakeDifferentlyTodayLesson from "./interview-qa/leadership-ownership/tell-me-about-a-technical-decision-you-would-make-differently-today.json";
import tellMeAboutATimeYouDisagreedWithAnotherEngineerLesson from "./interview-qa/leadership-ownership/tell-me-about-a-time-you-disagreed-with-another-engineer.json";
import tellMeAboutATimeYouInfluencedADecisionWithoutAuthorityLesson from "./interview-qa/leadership-ownership/tell-me-about-a-time-you-influenced-a-decision-without-authority.json";
import tellMeAboutATimeYouMentoredAnotherEngineerLesson from "./interview-qa/leadership-ownership/tell-me-about-a-time-you-mentored-another-engineer.json";
import tellMeAboutATimeYouPushedBackOnARequirementLesson from "./interview-qa/leadership-ownership/tell-me-about-a-time-you-pushed-back-on-a-requirement.json";
import tellMeAboutTechnicalDebtYouInheritedAndHowYouHandledItLesson from "./interview-qa/leadership-ownership/tell-me-about-technical-debt-you-inherited-and-how-you-handled-it.json";
import tellMeAboutTheMostDifficultMigrationYouLedLesson from "./interview-qa/leadership-ownership/tell-me-about-the-most-difficult-migration-you-led.json";
import templateLiteralTypesLesson from "./frontend/courses/typescript-for-react/04-advanced-types/template-literal-types.json";
import testDataBuildersLesson from "./backend/courses/unit-testing-dotnet/06-testing-patterns/test-data-builders.json";
import testDoublesMocksStubsAndFakesLesson from "./frontend/courses/react-testing/testing-strategy-for-senior-frontend-engineers/test-doubles-mocks-stubs-and-fakes.json";
import testFixturesLesson from "./backend/courses/unit-testing-dotnet/02-xunit-basics/test-fixtures.json";
import testNamingConventionsLesson from "./backend/courses/unit-testing-dotnet/01-testing-fundamentals/test-naming-conventions.json";
import testServerLesson from "./backend/courses/unit-testing-dotnet/04-integration-testing/test-server.json";
import testStructureLesson from "./frontend/courses/react-testing/01-testing-fundamentals/test-structure.json";
import testcontainersAndRealisticBackendIntegrationLesson from "./frontend/courses/react-testing/testing-strategy-for-senior-frontend-engineers/testcontainers-and-realistic-backend-integration.json";
import testingApiCallsLesson from "./frontend/courses/react-testing/04-component-testing/testing-api-calls.json";
import testingApisLesson from "./frontend/courses/next-js-full-stack-react/full-stack-api-design/testing-apis.json";
import testingAsyncLesson from "./frontend/courses/redux/06-redux-testing/testing-async.json";
import testingCacheInvalidationLesson from "./frontend/courses/react-testing/07-testing-react-query/testing-cache-invalidation.json";
import testingComponentsLesson from "./frontend/courses/redux/06-redux-testing/testing-components.json";
import testingContextLesson from "./frontend/courses/react-testing/04-component-testing/testing-context.json";
import testingFormsLesson from "./frontend/courses/react-testing/04-component-testing/testing-forms.json";
import testingFundamentalsLesson from "./backend/courses/aspnet-core/11-testing-debugging/testing-fundamentals.json";
import testingHooksLesson from "./frontend/courses/react-testing/03-react-testing-library/testing-hooks.json";
import testingHooksLesson1 from "./frontend/courses/yarn-npm-packages/react-testing/testing-hooks.json";
import testingLibraryLesson from "./frontend/courses/yarn-npm-packages/testing/testing-library.json";
import testingMutationsLesson from "./frontend/courses/react-testing/07-testing-react-query/testing-mutations.json";
import testingPrinciplesLesson from "./frontend/courses/react-testing/01-testing-fundamentals/testing-principles.json";
import testingPyramidLesson from "./backend/courses/unit-testing-dotnet/01-testing-fundamentals/testing-pyramid.json";
import testingReducersLesson from "./frontend/courses/redux/06-redux-testing/testing-reducers.json";
import testingRoutingLesson from "./frontend/courses/react-testing/04-component-testing/testing-routing.json";
import testingStateLesson from "./frontend/courses/next-js-full-stack-react/state-management/testing-state.json";
import testingStrategiesLesson from "./ai/courses/codex/security-and-testing/testing-strategies.json";
import testingTypesLesson from "./frontend/courses/react-testing/01-testing-fundamentals/testing-types.json";
import testingTypescriptReactLesson from "./frontend/courses/typescript-for-react/07-testing-best-practices/testing-typescript-react.json";
import textTypesLesson from "./database/courses/postgresql/data-types/text-types.json";
import thenbyThenbydescendingLesson from "./backend/courses/linq/04-sorting-grouping/thenby-thenbydescending.json";
import threadPoolPatternLesson from "./architecture/courses/design-patterns/05-concurrency-patterns/thread-pool-pattern.json";
import threadPoolStarvationLesson from "./backend/courses/aspnet-core/performance-observability/thread-pool-starvation.json";
import threadpoolInternalsAndThreadStarvationLesson from "./backend/courses/csharp-fundamentals/advanced-async-concurrency-threading/threadpool-internals-and-thread-starvation.json";
import threatDetectionComplianceLesson from "./devops/courses/aws/12-security-services/threat-detection-compliance.json";
import threePrinciplesLesson from "./frontend/courses/redux/01-redux-fundamentals/three-principles.json";
import ticTacToeGameLesson from "./architecture/problems/lld/tic-tac-toe-game/tic-tac-toe-game.json";
import ticketBookingHldLesson from "./architecture/problems/hld/ticket-booking-hld/ticket-booking-hld.json";
import timeComplexityAndBigOLesson from "./fundamentals/courses/programming-computer-web-foundations/programming-computer-fundamentals/time-complexity-and-big-o.json";
import timeManagementLesson from "./architecture/courses/system-design-interviews/system-design-framework/time-management.json";
import timeManagementQuestionsLesson from "./interview-qa/behavioral-interview-questions/time-management-questions.json";
import timeoutPatternsLesson from "./architecture/courses/microservices-architecture/resilience-patterns/timeout-patterns.json";
import timeoutsAndCircuitBreakersLesson from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/timeouts-and-circuit-breakers.json";
import timeoutsRetriesAndCancellationLesson from "./backend/courses/aspnet-core-web-api/production-api-design-reliability/timeouts-retries-and-cancellation.json";
import timescaledbTimeSeriesLesson from "./database/courses/postgresql/modern-data-tools/timescaledb-time-series.json";
import toastMvccLesson from "./database/courses/postgresql/advanced-topics/toast-mvcc.json";
import tokenBasedAuthLesson from "./devops/courses/git-linux-developer-workflow/git-security/token-based-auth.json";
import tokenBucketImplementationLesson from "./backend/problems/api-design/rate-limiting-design/token-bucket-implementation.json";
import tokenCountingAndUsageLesson from "./ai/courses/dotnet-ai-backend/06-production-patterns/token-counting-and-usage.json";
import tokenRevocationLesson from "./backend/courses/authentication-authorization/07-refresh-token-strategies/token-revocation.json";
import tokenRotationLesson from "./backend/courses/authentication-authorization/07-refresh-token-strategies/token-rotation.json";
import tokensExplainedLesson from "./ai/courses/ai-basics/understanding-llms/tokens-explained.json";
import toneAndStyleLesson from "./ai/courses/claude/claude-for-writing/tone-and-style.json";
import toolUseAndFunctionCallingLesson from "./ai/courses/dotnet-ai-backend/05-ai-agents-dotnet/tool-use-and-function-calling.json";
import topicExchangeLesson from "./architecture/courses/message-queues-event-streaming/publish-subscribe-patterns/topic-exchange.json";
import trackgraphInEntityFrameworkCoreLesson from "./backend/courses/ef-core/06-change-tracking/trackgraph-in-entity-framework-core.json";
import trackingChangesOfEntitiesLesson from "./backend/courses/ef-core/06-change-tracking/tracking-changes-of-entities.json";
import trackingVsAsnotrackingLesson from "./backend/courses/ef-core/ef-core-performance-orm-trade-offs/tracking-vs-asnotracking.json";
import tradeOffAnalysisLesson from "./fundamentals/courses/senior-software-engineering/technical-decision-making/trade-off-analysis.json";
import transactionFundamentalsLesson from "./database/courses/postgresql/transactions-error-handling-backup/transaction-fundamentals.json";
import transactionIsolationLevelsLesson from "./database/courses/sql-server/concurrency-production-database-problems/transaction-isolation-levels.json";
import transactionalMessagingLesson from "./architecture/courses/message-queues-event-streaming/message-ordering-idempotency/transactional-messaging.json";
import transactionalOutboxImplementationLesson from "./architecture/courses/microservices-architecture/distributed-transactions/transactional-outbox-implementation.json";
import transactionsAndInteractiveTransactionsLesson from "./frontend/courses/prisma/06-prisma-advanced-features/transactions-and-interactive-transactions.json";
import trapQ1Lesson from "./interview-qa/07-interview-traps/trap-q1.json";
import trapQ2Lesson from "./interview-qa/07-interview-traps/trap-q2.json";
import trappingRainWaterLesson from "./backend/problems/csharp/01-array-problems/trapping-rain-water.json";
import treeShakingLesson from "./architecture/courses/frontend-performance-engineering/build-optimization/tree-shaking.json";
import treeShakingAndDependencyCostLesson from "./architecture/courses/frontend-performance-engineering/browser-react-performance/tree-shaking-and-dependency-cost.json";
import treesAndGraphsLesson from "./fundamentals/courses/programming-computer-web-foundations/data-structures-deep-dive/trees-and-graphs.json";
import trieStructuresLesson from "./fundamentals/courses/programming-computer-web-foundations/data-structures-deep-dive/trie-structures.json";
import triggerBasicsLesson from "./database/courses/postgresql/triggers/trigger-basics.json";
import triggerManagementLesson from "./database/courses/postgresql/triggers/trigger-management.json";
import troubleshootingToolsLesson from "./fundamentals/courses/programming-computer-web-foundations/networking-protocols/troubleshooting-tools.json";
import trunkBasedDevelopmentLesson from "./devops/courses/git-linux-developer-workflow/git-workflows/trunk-based-development.json";
import tryCatchFinallyLesson from "./backend/courses/csharp-fundamentals/06-error-handling/try-catch-finally.json";
import ttfbAndFrontendPerformanceBudgetsLesson from "./architecture/courses/frontend-performance-engineering/browser-react-performance/ttfb-and-frontend-performance-budgets.json";
import ttlExpirationLesson from "./architecture/courses/redis-caching-strategies/cache-invalidation/ttl-expiration.json";
import turboLesson from "./frontend/courses/yarn-npm-packages/build-tools/turbo.json";
import twitterSocialLesson from "./architecture/problems/lld/twitter-social/twitter-social.json";
import twitterSocialHldLesson from "./architecture/problems/hld/twitter-social-hld/twitter-social-hld.json";
import twitterTimelineDesignLesson from "./architecture/courses/system-design-interviews/real-world-case-studies/twitter-timeline-design.json";
import twitterYoutubeCalculationsLesson from "./architecture/courses/system-design-interviews/capacity-estimation/twitter-youtube-calculations.json";
import twoPhaseCommit2pcLesson from "./architecture/courses/microservices-architecture/distributed-transactions/two-phase-commit-2pc.json";
import twoSumLesson from "./backend/problems/csharp/01-array-problems/two-sum.json";
import typeAssertionsAndAsLesson from "./frontend/courses/typescript-for-react/01-typescript-basics/type-assertions-and-as.json";
import typeConversionLesson from "./backend/courses/csharp-fundamentals/02-variables-types/type-conversion.json";
import typeDefinitionsLesson from "./backend/courses/graphql-dotnet/02-schema-types/type-definitions.json";
import typeGuardsLesson from "./frontend/courses/typescript-for-react/04-advanced-types/type-guards.json";
import typeNarrowingLesson from "./frontend/courses/typescript-for-react/07-testing-best-practices/type-narrowing.json";
import typePoliciesFieldPoliciesLesson from "./frontend/courses/apollo/05-client-side-caching-advanced/type-policies-field-policies.json";
import typePredicatesLesson from "./frontend/courses/typescript-for-react/advanced-type-modeling-runtime-safety/type-predicates.json";
import typeSafeContextLesson from "./frontend/courses/typescript-for-react/06-react-patterns/type-safe-context.json";
import typeSafetyPatternsLesson from "./frontend/courses/typescript-for-react/07-testing-best-practices/type-safety-patterns.json";
import typedFormHandlersLesson from "./frontend/courses/typescript-for-react/06-react-patterns/typed-form-handlers.json";
import typedReactQueryLesson from "./frontend/courses/typescript-for-react/06-react-patterns/typed-react-query.json";
import typedRouterLesson from "./frontend/courses/typescript-for-react/06-react-patterns/typed-router.json";
import typingChildrenAndSpecialPropsLesson from "./frontend/courses/typescript-for-react/02-types-in-react/typing-children-and-special-props.json";
import typingComponentsLesson from "./frontend/courses/typescript-for-react/02-types-in-react/typing-components.json";
import typingEventsLesson from "./frontend/courses/typescript-for-react/02-types-in-react/typing-events.json";
import typingPerformanceHooksLesson from "./frontend/courses/typescript-for-react/03-typing-hooks/typing-performance-hooks.json";
import typingPropsLesson from "./frontend/courses/typescript-for-react/02-types-in-react/typing-props.json";
import typingStateLesson from "./frontend/courses/typescript-for-react/02-types-in-react/typing-state.json";
import typingUsecontextAndReduxLesson from "./frontend/courses/typescript-for-react/03-typing-hooks/typing-usecontext-and-redux.json";
import typingUseeffectLesson from "./frontend/courses/typescript-for-react/03-typing-hooks/typing-useeffect.json";
import typingUserefLesson from "./frontend/courses/typescript-for-react/03-typing-hooks/typing-useref.json";
import uberRideMatchingLesson from "./architecture/courses/system-design-interviews/real-world-case-studies/uber-ride-matching.json";
import uberRideSharingLesson from "./architecture/problems/lld/uber-ride-sharing/uber-ride-sharing.json";
import uberRideSharingHldLesson from "./architecture/problems/hld/uber-ride-sharing-hld/uber-ride-sharing-hld.json";
import understandingCorsLesson from "./architecture/courses/fullstack-security/01-cors-configuration/understanding-cors.json";
import understandingProjectStructureLesson from "./backend/courses/aspnet-core/01-getting-started/understanding-project-structure.json";
import understandingStructureLesson from "./backend/courses/csharp-fundamentals/01-getting-started/understanding-structure.json";
import understandingXssCsrfLesson from "./architecture/courses/fullstack-security/03-xss-csrf-protection/understanding-xss-csrf.json";
import unionLesson from "./database/courses/postgresql/set-operations/union.json";
import unionSetOperatorLesson from "./backend/courses/linq/06-set-operations/union-set-operator.json";
import uniqueCheckLesson from "./database/courses/postgresql/constraints/unique-check.json";
import uniqueIdGeneratorDesignLesson from "./architecture/courses/system-design-interviews/common-system-designs/unique-id-generator-design.json";
import uniquePathsLesson from "./backend/problems/csharp/05-dynamic-programming-problems/unique-paths.json";
import uniquePathsIiLesson from "./backend/problems/csharp/05-dynamic-programming-problems/unique-paths-ii.json";
import unitOfWorkLesson from "./architecture/courses/design-patterns/04-enterprise-patterns/unit-of-work.json";
import unitTestingControllersLesson from "./backend/courses/aspnet-core/11-testing-debugging/unit-testing-controllers.json";
import unitTestingControllersLesson1 from "./backend/problems/aspnet-core/08-testing-debugging-problems/unit-testing-controllers.json";
import unknownVsAnyLesson from "./frontend/courses/typescript-for-react/advanced-type-modeling-runtime-safety/unknown-vs-any.json";
import updateLesson from "./database/courses/postgresql/data-modification-dml/update.json";
import updateDataDisconnectedScenarioLesson from "./backend/courses/ef-core/05-data-operations-disconnected/update-data-disconnected-scenario.json";
import urlAsStateLesson from "./frontend/courses/next-js-full-stack-react/state-management/url-as-state.json";
import urlGenerationLesson from "./backend/courses/aspnet-core/03-routing-urls/url-generation.json";
import urlShortenerLesson from "./architecture/problems/hld/url-shortener/url-shortener.json";
import urlShortenerDesignLesson from "./architecture/courses/system-design-interviews/common-system-designs/url-shortener-design.json";
import urlVersioningLesson from "./backend/problems/api-design/api-versioning-problems/url-versioning.json";
import useContextReducerLesson from "./frontend/courses/yarn-npm-packages/react-hooks-patterns/use-context-reducer.json";
import useDispatchLesson from "./frontend/courses/redux/03-react-redux/use-dispatch.json";
import useMemoDebugLesson from "./frontend/courses/yarn-npm-packages/react-hooks-patterns/use-memo-debug.json";
import useMutationLesson from "./frontend/courses/react-query/03-mutations/use-mutation.json";
import useMutationHookLesson from "./frontend/courses/apollo/02-queries-mutations/use-mutation-hook.json";
import useRefCallbackLesson from "./frontend/courses/yarn-npm-packages/react-hooks-patterns/use-ref-callback.json";
import useSelectorLesson from "./frontend/courses/redux/03-react-redux/use-selector.json";
import useStateEffectLesson from "./frontend/courses/yarn-npm-packages/react-hooks-patterns/use-state-effect.json";
import usecontextHookLesson from "./frontend/courses/react-fundamentals/06-context-refs/usecontext-hook.json";
import useeffectBasicsLesson from "./frontend/courses/react-fundamentals/05-lifecycle-effects/useeffect-basics.json";
import userCentricMetricsLesson from "./architecture/courses/frontend-performance-engineering/runtime-performance/user-centric-metrics.json";
import userEventsLesson from "./frontend/courses/react-testing/03-react-testing-library/user-events.json";
import userJourneyMappingLesson from "./architecture/courses/system-design-interviews/requirement-clarification/user-journey-mapping.json";
import userefHookLesson from "./frontend/courses/react-fundamentals/06-context-refs/useref-hook.json";
import useTateHookLesson from "./frontend/courses/react-fundamentals/03-state-events/useState-hook.json";
import utilityTypesLesson from "./frontend/courses/typescript-for-react/04-advanced-types/utility-types.json";
import uuidLesson from "./frontend/courses/yarn-npm-packages/utilities/uuid.json";
import vacuumAnalyzeLesson from "./database/courses/postgresql/performance-tuning/vacuum-analyze.json";
import validAnagramLesson from "./backend/problems/csharp/02-string-problems/valid-anagram.json";
import validPalindromeLesson from "./backend/problems/csharp/02-string-problems/valid-palindrome.json";
import validateBinarySearchTreeLesson from "./backend/problems/csharp/04-tree-graph-problems/validate-binary-search-tree.json";
import validatingJwtLesson from "./backend/courses/authentication-authorization/02-jwt/validating-jwt.json";
import validationAttributesLesson from "./backend/courses/aspnet-core/04-model-binding-validation/validation-attributes.json";
import validationAttributesLesson1 from "./backend/problems/aspnet-core/01-mvc-fundamentals-problems/validation-attributes.json";
import validationBasicsLesson from "./backend/courses/aspnet-core-web-api/06-error-handling-validation/validation-basics.json";
import validationErrorsLesson from "./backend/problems/api-design/error-handling-design/validation-errors.json";
import valueTypesLesson from "./backend/courses/csharp-fundamentals/02-variables-types/value-types.json";
import valuetaskAndWhenItIsAppropriateLesson from "./backend/courses/csharp-fundamentals/advanced-async-concurrency-threading/valuetask-and-when-it-is-appropriate.json";
import valuetaskWhatProblemDoesItSolveAndWhenCanItMakeCodeWorseLesson from "./interview-qa/c-net-follow-ups/valuetask-what-problem-does-it-solve-and-when-can-it-make-code-worse.json";
import variablesLesson from "./backend/courses/csharp-fundamentals/02-variables-types/variables.json";
import vectorDatabasesInPracticeLesson from "./ai/courses/ai-basics/embeddings-and-vectors/vector-databases-in-practice.json";
import vectorStoresInDotnetLesson from "./ai/courses/dotnet-ai-backend/02-rag-implementation/vector-stores-in-dotnet.json";
import vendingMachineLesson from "./architecture/problems/lld/vending-machine/vending-machine.json";
import verificationLesson from "./backend/courses/unit-testing-dotnet/03-mocking-fakes/verification.json";
import verifyingSignaturesLesson from "./devops/courses/git-linux-developer-workflow/git-security/verifying-signatures.json";
import versioningAndDocumentationLesson from "./backend/courses/aspnet-core/10-web-api-rest/versioning-and-documentation.json";
import versioningSemverLesson from "./frontend/courses/yarn-npm-packages/yarn-npm-fundamentals/versioning-semver.json";
import verticalVsHorizontalScalingLesson from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/vertical-vs-horizontal-scaling.json";
import videoStreamingHldLesson from "./architecture/problems/hld/video-streaming-hld/video-streaming-hld.json";
import viewComponentsLesson from "./backend/courses/aspnet-core/05-razor-views/view-components.json";
import viewComponentsLesson1 from "./backend/problems/aspnet-core/02-razor-views-problems/view-components.json";
import viewDataTempdataLesson from "./backend/problems/aspnet-core/02-razor-views-problems/view-data-tempdata.json";
import viewManagementLesson from "./database/courses/postgresql/views/view-management.json";
import viewbagViewdataTempdataLesson from "./interview-qa/01-beginner-questions/viewbag-viewdata-tempdata.json";
import viewsAndTemplatesLesson from "./backend/courses/aspnet-core/02-mvc-fundamentals/views-and-templates.json";
import virtualMachinesOverviewLesson from "./devops/courses/azure/02-compute-and-app-hosting/virtual-machines-overview.json";
import virtualNetworkDesignLesson from "./devops/problems/azure/06-azure-networking-problems/virtual-network-design.json";
import virtualNetworksAndSubnetsLesson from "./devops/courses/azure/08-networking-and-api-platforms/virtual-networks-and-subnets.json";
import virtualizationLesson from "./frontend/courses/yarn-npm-packages/react-performance/virtualization.json";
import virtualizationForLargeListsLesson from "./architecture/courses/frontend-performance-engineering/browser-react-performance/virtualization-for-large-lists.json";
import virtualizationLargeListsLesson from "./frontend/courses/react-advanced-patterns/06-performance-patterns/virtualization-large-lists.json";
import visualRegressionLesson from "./frontend/courses/react-testing/06-advanced-testing-patterns/visual-regression.json";
import visualizationJoinsLesson from "./database/courses/postgresql/joins/visualization-joins.json";
import viteLesson from "./frontend/courses/yarn-npm-packages/build-tools/vite.json";
import vitestLesson from "./frontend/courses/yarn-npm-packages/testing/vitest.json";
import vitestReactLesson from "./frontend/courses/yarn-npm-packages/react-testing/vitest-react.json";
import vmScaleSetsVsAvailabilitySetsLesson from "./devops/problems/azure/02-azure-compute-problems/vm-scale-sets-vs-availability-sets.json";
import voiceAndVideoAiLesson from "./ai/courses/ai-basics/multimodal-ai/voice-and-video-ai.json";
import volumesAndPersistentDataLesson from "./devops/courses/devops/production-docker-container-security/volumes-and-persistent-data.json";
import vpcConnectivityLesson from "./devops/courses/aws/04-networking/vpc-connectivity.json";
import vpnAndHybridConnectivityForDevelopersLesson from "./devops/courses/azure/08-networking-and-api-platforms/vpn-and-hybrid-connectivity-for-developers.json";
import vueEssentialsLesson from "./frontend/courses/yarn-npm-packages/frontend-frameworks/vue-essentials.json";
import vueRouterLesson from "./frontend/courses/yarn-npm-packages/routing/vue-router.json";
import wafShieldLesson from "./devops/courses/aws/12-security-services/waf-shield.json";
import webCrawlerLesson from "./architecture/problems/hld/web-crawler/web-crawler.json";
import webMobileAmplifyLesson from "./devops/courses/aws/15-developer-tools-application-services/web-mobile-amplify.json";
import webWorkersAndCpuHeavyBrowserWorkLesson from "./architecture/courses/frontend-performance-engineering/browser-react-performance/web-workers-and-cpu-heavy-browser-work.json";
import webhooksAndReliableCallbackProcessingLesson from "./backend/courses/aspnet-core-web-api/production-api-design-reliability/webhooks-and-reliable-callback-processing.json";
import webpackLesson from "./frontend/courses/yarn-npm-packages/build-tools/webpack.json";
import websocketConnectionLifecycleLesson from "./architecture/problems/full-stack-senior-projects/project-2-collaborative-communication-platform/websocket-connection-lifecycle.json";
import websocketSetupLesson from "./frontend/courses/apollo/07-subscriptions-realtime/websocket-setup.json";
import websocketsLesson from "./fundamentals/courses/programming-computer-web-foundations/networking-protocols/websockets.json";
import websocketsVsServerSentEventsLesson from "./fundamentals/courses/programming-computer-web-foundations/web-networking-fundamentals/websockets-vs-server-sent-events.json";
import whatAiCanAndCannotDoLesson from "./ai/courses/ai-basics/what-is-ai/what-ai-can-and-cannot-do.json";
import whatAreAgentsLesson from "./ai/courses/ai-basics/agents-introduction/what-are-agents.json";
import whatCausesHydrationMismatchesLesson from "./interview-qa/react-frontend-follow-ups/what-causes-hydration-mismatches.json";
import whatIsAiAutomationLesson from "./ai/courses/ai-basics/automation-basics/what-is-ai-automation.json";
import whatIsAiCodingLesson from "./ai/courses/codex/intro-to-ai-coding/what-is-ai-coding.json";
import whatIsApolloLesson from "./frontend/courses/apollo/01-apollo-basics/what-is-apollo.json";
import whatIsAppServiceLesson from "./backend/courses/azure-for-aspnet/02-azure-app-service-deployment/what-is-app-service.json";
import whatIsAspnetCoreLesson from "./backend/courses/aspnet-core/01-getting-started/what-is-aspnet-core.json";
import whatIsAwsForDotnetLesson from "./backend/courses/aws-for-aspnet/01-aws-for-dotnet-overview/what-is-aws-for-dotnet.json";
import whatIsAzureLesson from "./devops/courses/azure/01-azure-developer-foundations/what-is-azure.json";
import whatIsAzureForDotnetLesson from "./backend/courses/azure-for-aspnet/01-azure-for-dotnet-overview/what-is-azure-for-dotnet.json";
import whatIsClaudeLesson from "./ai/courses/claude/what-is-claude/what-is-claude.json";
import whatIsCloudComputingLesson from "./devops/courses/aws/01-aws-fundamentals-cloud-concepts/what-is-cloud-computing.json";
import whatIsCsharpLesson from "./backend/courses/csharp-fundamentals/01-getting-started/what-is-csharp.json";
import whatIsElasticBeanstalkLesson from "./backend/courses/aws-for-aspnet/02-elastic-beanstalk-ecs-deployment/what-is-elastic-beanstalk.json";
import whatIsLinqLesson from "./backend/courses/linq/01-getting-started-linq/what-is-linq.json";
import whatIsMcpLesson from "./ai/courses/ai-basics/mcp-and-skills/what-is-mcp.json";
import whatIsModelContextProtocolLesson from "./ai/courses/dotnet-ai-backend/03-mcp-fundamentals/what-is-model-context-protocol.json";
import whatIsNpmYarnLesson from "./frontend/courses/yarn-npm-packages/yarn-npm-fundamentals/what-is-npm-yarn.json";
import whatIsNugetLesson from "./backend/courses/dotnet-nuget-packages/01-nuget-fundamentals/what-is-nuget.json";
import whatIsOopLesson from "./fundamentals/courses/oops-concepts/01-oop-fundamentals/what-is-oop.json";
import whatIsPostgresqlLesson from "./database/courses/postgresql/getting-started/what-is-postgresql.json";
import whatIsPrismaLesson from "./frontend/courses/prisma/01-prisma-basics/what-is-prisma.json";
import whatIsReactLesson from "./frontend/courses/react-fundamentals/01-getting-started/what-is-react.json";
import whatIsReactQueryLesson from "./frontend/courses/react-query/01-query-basics/what-is-react-query.json";
import whatIsReduxLesson from "./frontend/courses/redux/01-redux-fundamentals/what-is-redux.json";
import whatIsToolCallingLesson from "./ai/courses/ai-basics/tool-calling-basics/what-is-tool-calling.json";
import whatIsTypescriptLesson from "./frontend/courses/typescript-for-react/01-typescript-basics/what-is-typescript.json";
import whatIsWebApiLesson from "./backend/courses/aspnet-core-web-api/01-getting-started/what-is-web-api.json";
import whatWouldYouMonitorToProveYourArchitectureIsHealthyLesson from "./interview-qa/architecture-follow-ups/what-would-you-monitor-to-prove-your-architecture-is-healthy.json";
import whatWouldYouSimplifyIfTheSystemHadOnly1OfTheExpectedTrafficLesson from "./interview-qa/architecture-follow-ups/what-would-you-simplify-if-the-system-had-only-1-of-the-expected-traffic.json";
import whatsappChatLesson from "./architecture/problems/lld/whatsapp-chat/whatsapp-chat.json";
import whatsappChatHldLesson from "./architecture/problems/hld/whatsapp-chat-hld/whatsapp-chat-hld.json";
import whenNotToMockLesson from "./frontend/courses/react-testing/testing-strategy-for-senior-frontend-engineers/when-not-to-mock.json";
import whenNotToUseCachingLesson from "./architecture/courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/when-not-to-use-caching.json";
import whenNotToUseKubernetesLesson from "./architecture/courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/when-not-to-use-kubernetes.json";
import whenNotToUseMicroservicesLesson from "./architecture/courses/clean-code-csharp/senior-engineering-judgment-architecture-decisions/when-not-to-use-microservices.json";
import whenShouldAComponentBeAServerComponentVsClientComponentLesson from "./interview-qa/react-frontend-follow-ups/when-should-a-component-be-a-server-component-vs-client-component.json";
import whenShouldASynchronousApiBecomeAsynchronousLesson from "./interview-qa/backend-database-follow-ups/when-should-a-synchronous-api-become-asynchronous.json";
import whenShouldStateLiveInReactQueryRatherThanReduxLesson from "./interview-qa/react-frontend-follow-ups/when-should-state-live-in-react-query-rather-than-redux.json";
import whenToBypassTheOrmLesson from "./backend/courses/ef-core/ef-core-performance-orm-trade-offs/when-to-bypass-the-orm.json";
import whenToUseContextAndWhenNotToLesson from "./frontend/courses/react-advanced-patterns/modern-state-application-architecture/when-to-use-context-and-when-not-to.json";
import whenToUseMicroservicesLesson from "./architecture/courses/microservices-architecture/microservices-fundamentals/when-to-use-microservices.json";
import whenToUseReduxLesson from "./frontend/courses/next-js-full-stack-react/state-management/when-to-use-redux.json";
import whenWouldYouChooseEfCoreDapperOrRawSqlLesson from "./interview-qa/backend-database-follow-ups/when-would-you-choose-ef-core-dapper-or-raw-sql.json";
import whereClauseLesson from "./database/courses/postgresql/querying-data/where-clause.json";
import whereWouldYouUseCachingAndHowWouldYouInvalidateItLesson from "./interview-qa/architecture-follow-ups/where-would-you-use-caching-and-how-would-you-invalidate-it.json";
import whyDidYouChooseMicroservicesInsteadOfAModularMonolithLesson from "./interview-qa/architecture-follow-ups/why-did-you-choose-microservices-instead-of-a-modular-monolith.json";
import whyExactlyOnceIsDifficultLesson from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/why-exactly-once-is-difficult.json";
import whyIsThisReactComponentReRenderingAndHowWouldYouProveTheCauseLesson from "./interview-qa/react-frontend-follow-ups/why-is-this-react-component-re-rendering-and-how-would-you-prove-the-cause.json";
import whyLinqLesson from "./backend/courses/linq/01-getting-started-linq/why-linq.json";
import whyTestReactLesson from "./frontend/courses/react-testing/01-testing-fundamentals/why-test-react.json";
import whyUnitTestingLesson from "./backend/courses/unit-testing-dotnet/01-testing-fundamentals/why-unit-testing.json";
import windowFunctionsLesson from "./database/courses/postgresql/grouping-aggregation-subqueries/window-functions.json";
import windowingAggregationLesson from "./architecture/courses/message-queues-event-streaming/stream-processing/windowing-aggregation.json";
import windowingLargeListsLesson from "./frontend/courses/react-query/08-performance-optimization/windowing-large-lists.json";
import windsurfAndAlternativesLesson from "./ai/courses/codex/ai-coding-tools/windsurf-and-alternatives.json";
import wordBreakLesson from "./backend/problems/csharp/05-dynamic-programming-problems/word-break.json";
import wordLadderLesson from "./backend/problems/csharp/04-tree-graph-problems/word-ladder.json";
import wordPatternLesson from "./backend/problems/csharp/02-string-problems/word-pattern.json";
import workflowOrchestrationVsChoreographyLesson from "./architecture/problems/system-design/distributed-systems-fundamentals/distributed-systems-fundamentals/workflow-orchestration-vs-choreography.json";
import workingWithDbcontextInEfCoreLesson from "./backend/courses/ef-core/01-getting-started-ef-core/working-with-dbcontext-in-ef-core.json";
import workingWithDisconnectedEntityGraphLesson from "./backend/courses/ef-core/05-data-operations-disconnected/working-with-disconnected-entity-graph.json";
import workingWithProductAndQaLesson from "./fundamentals/courses/senior-software-engineering/technical-leadership/working-with-product-and-qa.json";
import workingWithResourcesAndPromptsLesson from "./ai/courses/dotnet-ai-backend/04-mcp-servers-tools/working-with-resources-and-prompts.json";
import workingWithStoredProceduresLesson from "./backend/courses/ef-core/10-advanced-features/working-with-stored-procedures.json";
import workspacesMonoreposLesson from "./frontend/courses/yarn-npm-packages/yarn-npm-fundamentals/workspaces-monorepos.json";
import writeARootCauseAnalysisAndRemediationPlanLesson from "./architecture/problems/full-stack-senior-projects/project-3-production-incident-simulator/write-a-root-cause-analysis-and-remediation-plan.json";
import writeBackPatternLesson from "./architecture/courses/redis-caching-strategies/caching-patterns/write-back-pattern.json";
import writeThroughPatternLesson from "./architecture/courses/redis-caching-strategies/caching-patterns/write-through-pattern.json";
import writingE2eTestsLesson from "./frontend/courses/react-testing/05-e2e-testing/writing-e2e-tests.json";
import writingRfcsLesson from "./fundamentals/courses/senior-software-engineering/technical-decision-making/writing-rfcs.json";
import writingTechnicalProposalsLesson from "./fundamentals/courses/senior-software-engineering/technical-leadership/writing-technical-proposals.json";
import writingTestsWithAiLesson from "./ai/courses/codex/practical-ai-workflows/writing-tests-with-ai.json";
import writingWithClaudeLesson from "./ai/courses/claude/claude-for-writing/writing-with-claude.json";
import xssAndOutputEncodingLesson from "./architecture/courses/fullstack-security/modern-web-security-identity/xss-and-output-encoding.json";
import xssPreventionTechniquesLesson from "./architecture/courses/fullstack-security/03-xss-csrf-protection/xss-prevention-techniques.json";
import xstateLesson from "./frontend/courses/yarn-npm-packages/state-management/xstate.json";
import xstateFundamentalsLesson from "./frontend/courses/react-advanced-patterns/08-state-machines-xstate/xstate-fundamentals.json";
import xunitLesson from "./backend/courses/dotnet-nuget-packages/07-testing-quality/xunit.json";
import yamldotnetLesson from "./backend/courses/dotnet-nuget-packages/05-serialization-mapping/yamldotnet.json";
import yourFirstClaudeConversationLesson from "./ai/courses/claude/getting-started/your-first-claude-conversation.json";
import youtubeStreamingLesson from "./architecture/problems/hld/youtube-streaming/youtube-streaming.json";
import youtubeVideoLesson from "./architecture/problems/lld/youtube-video/youtube-video.json";
import yupLesson from "./frontend/courses/yarn-npm-packages/forms/yup.json";
import zeroTrustArchitectureLesson from "./architecture/courses/microservices-architecture/security-in-microservices/zero-trust-architecture.json";
import zodLesson from "./frontend/courses/yarn-npm-packages/utilities/zod.json";
import zodValidationLesson from "./frontend/courses/yarn-npm-packages/forms/zod-validation.json";
import zoomConferencingLesson from "./architecture/problems/lld/zoom-conferencing/zoom-conferencing.json";
import zoomConferencingHldLesson from "./architecture/problems/hld/zoom-conferencing-hld/zoom-conferencing-hld.json";
import zustandLesson from "./frontend/courses/yarn-npm-packages/state-management/zustand.json";

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
	lesson1nfExercisesLesson,
	lesson20CoalesceDisplayPreferredNameLesson,
	lesson20ComputedColumnsLesson,
	lesson20TopNPerGroupLesson,
	lesson2nfExercisesLesson,
	lesson3nfExercisesLesson,
	lesson3sumLesson,
	lesson7StepFrameworkLesson,
	aProductionQuerySuddenlyBecameSlowAfterADeploymentWhatDoYouCheckLesson,
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
	advancedGitLogLesson,
	advancedPromptingPatternsLesson,
	advancedQ1Lesson,
	advancedQ2Lesson,
	advancedQ3Lesson,
	advancedQ4Lesson,
	advancedQ5Lesson,
	agentArchitecturePatternsLesson,
	agentGuardrailsAndApprovalsLesson,
	agenticCodingIntroLesson,
	aggregateFunctionsLesson,
	aggregatesLesson,
	aggregationAggregateLesson,
	aggregationAverageLesson,
	aggregationCountLesson,
	aggregationMaxLesson,
	aggregationSumLesson,
	aiAgentsAndToolCallingLesson,
	aiAndCopyrightLesson,
	aiBackendEcosystemLesson,
	aiEvaluationMetricsLesson,
	aiForCodingLesson,
	aiForDataAnalysisLesson,
	aiForResearchLesson,
	aiHallucinationDeepDiveLesson,
	aiInEverydayLifeLesson,
	aiLimitationsLesson,
	aiProductDesignLifecycleLesson,
	aiProjectPortfolioAndCapstoneAssessmentsLesson,
	aiRoadmapByRoleLesson,
	aiSearchIndexesAndVectorSearchLesson,
	aiSecurityRisksLesson,
	aiSkillsExplainedLesson,
	aiVsMlVsGenerativeAiLesson,
	aiWritingAssistantLesson,
	aifunctionfactoryStructuredToolsLesson,
	airbnbBookingLesson,
	airbnbBookingHldLesson,
	aksConfigurationAndSecretsLesson,
	aksDeploymentsServicesAndIngressLesson,
	aksOverviewForDevelopersLesson,
	aksScalingAndOperationsLesson,
	aksVsContainerAppsVsAppServiceLesson,
	alertingStrategiesLesson,
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
	anatomyOfAGoodPromptLesson,
	anatomyOfLambdaExpressionLesson,
	andOrOperatorsLesson,
	angularEssentialsLesson,
	angularRouterLesson,
	animeJsLesson,
	apiAggregationLesson,
	apiAuthenticationLesson,
	apiContractTestingLesson,
	apiContractsLesson,
	apiControllersLesson,
	apiDesignLesson,
	apiDesignBestPracticesLesson,
	apiDesignPrinciplesLesson,
	apiErrorHandlingLesson,
	apiGatewayLesson,
	apiGatewayCsharpLesson,
	apiGatewayFundamentalsLesson,
	apiIntegrationLesson,
	apiLatencyIncreasedFrom100msTo4SecondsHowDoYouInvestigateLesson,
	apiManagementApisProductsAndSubscriptionsLesson,
	apiManagementAuthenticationAndSecurityLesson,
	apiManagementOverviewLesson,
	apiManagementPoliciesLesson,
	apiManagementVersioningAndRevisionsLesson,
	apiRoutesLesson,
	apiSecurityLesson,
	apiSecurityFundamentalsLesson,
	apiTestingLesson,
	apiVersioningLesson,
	apiVersioningLesson1,
	apiVersioningLesson2,
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
	applicationInsightsLesson1,
	applicationInsightsDistributedTracingLesson,
	applicationInsightsInstrumentationLesson,
	applicationInsightsOverviewLesson,
	applicationInsightsRequestsDependenciesAndFailuresLesson,
	applicationInsightsVsAzureMonitorVsLogAnalyticsLesson,
	applicationLevelCachingLesson,
	applicationMetricsVsLogsVsTracesLesson,
	applicationSecretsAndConfigurationPatternsLesson,
	approachingDesignQuestionsLesson,
	architectureDecisionRecordsLesson,
	architectureOverviewLesson,
	architectureReviewsLesson,
	areaRoutingLesson,
	arrangeActAssertLesson,
	arraypooltAndMemorypooltLesson,
	arraysAndLinkedListsLesson,
	artifactVersioningLesson,
	artifactsIntroLesson,
	artifactsWorkflowsLesson,
	aspnetApiGatewayGrpcLesson,
	aspnetB01Lesson,
	aspnetB02Lesson,
	aspnetBackgroundJobsProcessingLesson,
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
	authAndAuthorizationInMcpLesson,
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
	authorizationLesson,
	authorizationCodeFlowLesson,
	authorizationCodeFlowWithPkceLesson,
	authorizationPoliciesLesson,
	autoPropertiesLesson,
	autoScalingLesson,
	autofixtureLesson,
	autogenDotnetMultiAgentPatternsLesson,
	automapperLesson,
	automatedBisectLesson,
	automatedDlqProcessingLesson,
	availabilityPatternsLesson,
	avoidingUnsafeTypeAssertionsLesson,
	awsAccountSetupLesson,
	awsAiServicesLesson,
	awsCdkLesson,
	awsCloudtrailLesson,
	awsCodeToolsLesson,
	awsCodepipelineLesson,
	awsCostManagementLesson,
	awsEcsFargateLesson,
	awsGlobalInfrastructureLesson,
	awsGlueEtlLesson,
	awsKmsSecretsManagerLesson,
	awsLambdaLesson,
	awsManagementToolsLesson,
	awsOrganizationsLesson,
	awsParameterStoreLesson,
	awsSdkAppconfigLesson,
	awsSdkCoreLesson,
	awsWellArchitectedFrameworkLesson,
	awsXRayLesson,
	axiosLesson,
	axiosReactLesson,
	azureAccountSetupLesson,
	azureAdIntegrationLesson,
	azureAiFoundryAndModelBasedDevelopmentLesson,
	azureAiSearchAndAzureInferenceLesson,
	azureAiSearchOverviewLesson,
	azureAiServicesOverviewLesson,
	azureAiServicesVisionLanguageAndSpeechLesson,
	azureAppConfigurationOverviewLesson,
	azureArchitectureCostTradeOffsLesson,
	azureCacheForRedisOverviewLesson,
	azureCliDeveloperToolingLesson,
	azureCloudShellLesson,
	azureConfigurationLesson,
	azureContainerRegistryOverviewLesson,
	azureDeveloperWorkflowsLesson,
	azureDevopsGithubActionsLesson,
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
];

const rawLessonsPart2 = [
	azureResourceHierarchyLesson,
	azureResourceManagerLesson,
	azureServiceBasicsLesson,
	azureServiceBusOverviewLesson,
	azureServicebusLesson,
	azureSqlAuthenticationAndAuthorizationLesson,
	azureSqlBackupHighAvailabilityAndResilienceLesson,
	azureSqlDatabaseLesson,
	azureSqlDatabaseConnectivityLesson,
	azureSqlDatabaseOverviewLesson,
	azureSqlIntroLesson,
	azureSqlManagedInstanceLesson,
	azureSqlQueryPerformanceAndScalingLesson,
	azureSqlVsCosmosDbLesson,
	azureSqlVsCosmosDbLesson1,
	azureStorageBlobsLesson,
	azureStorageIntroLesson,
	azureStorageOverviewLesson,
	azureWorkloadScalingStrategiesLesson,
	bTreeIndexesAndPageStructureLesson,
	babelLesson,
	backendForFrontendBffLesson,
	backgroundRefetchingLesson,
	backgroundServiceLesson,
	backgroundSyncLesson,
	backgroundserviceAndHostedWorkloadsLesson,
	backpressureLesson,
	backupAndRecoveryLesson,
	backupArchivingLesson,
	backupRestoreStrategiesLesson,
	backwardCompatibleDeploymentsLesson,
	bandwidthEstimationLesson,
	bankingAppLesson,
	barrierPatternLesson,
	baselineHealthyApplicationAndTelemetryLesson,
	basicPromptingForCodeLesson,
	basicTypesLesson,
	bcnfExercisesLesson,
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
	bisectFundamentalsLesson,
	bisectWithScriptsLesson,
	blamelessPostmortemsLesson,
	blobContainersObjectsAndMetadataLesson,
	blobSasAndUserDelegationSasLesson,
	blobStorageAccessTiersLesson,
	blobStorageAccessTiersAndLifecycleLesson,
	blobStorageBasicsLesson,
	blobStorageCsharpLesson,
	blobStorageFromApplicationsLesson,
	blockFileStorageLesson,
	bloomFiltersLesson,
	blueGreenCanaryAndRollingDeploymentsLesson,
	blueGreenDeploymentsLesson,
	bogusLesson,
	bookingApiLesson,
	bookingSystemSchemaLesson,
	boxingAndHiddenAllocationsLesson,
	boxingUnboxingLesson,
	branchingStrategiesLesson,
	branchingStrategiesAndTrunkBasedDevelopmentLesson,
	breakingChangesLesson,
	breakingDownLargeTechnicalInitiativesLesson,
	brokenAccessControlAndIdorbolaLesson,
	brokerDecisionFrameworkLesson,
	brokerMigrationLesson,
	brokerOperationalComplexityLesson,
	brokerPerformanceLesson,
	brokerUseCaseAnalysisLesson,
	btreeIndexesLesson,
	btreeVsHashIndexLesson,
	buildCachingLesson,
	buildPipelineLesson,
	buildTestPackageDeployPipelineDesignLesson,
	buildVsBuyDecisionsLesson,
	builderPatternLesson,
	builderPatternLesson1,
	buildingARepeatableProductionInvestigationWorkflowLesson,
	buildingAiAgentsLesson,
	buildingAiPoweredAppsOnAzureLesson,
	buildingHookLibrariesLesson,
	buildingWithArtifactsLesson,
	buildingYourAiStackLesson,
	buildingYourClaudeToolkitLesson,
	buildingYourFirstMcpServerLesson,
	buildingYourFirstWorkflowLesson,
	builtInMiddlewareLesson,
	builtInMiddlewareLesson1,
	bulkOperationsAndLargeDataChangesLesson,
	bulkheadPatternLesson,
	bulkheadsAndLoadSheddingLesson,
	bundleAnalysisLesson,
	bundleAnalysisAndCodeSplittingLesson,
	bundlerFundamentalsLesson,
	burstBalloonsLesson,
	businessLogicErrorsLesson,
	cacheAsidePatternLesson,
	cacheBasicsLesson,
	cacheCoherenceLesson,
	cacheConfigurationLesson,
	cacheConfigurationLesson1,
	cacheInvalidationLesson,
	cacheInvalidationLesson1,
	cacheMiddlewareLesson,
	cachePersistenceLesson,
	cacheRedirectsLesson,
	cacheStampedePreventionLesson,
	cacheTagInvalidationLesson,
	cacheUpdatesLesson,
	cacheWarmingLesson,
	cachingLesson,
	cachingAndRevalidationLesson,
	cachingCostAndTokenManagementLesson,
	cachingForScaleLesson,
	cachingProfilingLesson,
	cachingStrategiesLesson,
	canaryReleasesLesson,
	cancellationtokenDesignLesson,
	capTheoremLesson,
	capTheoremLesson1,
	capacityEstimationLesson,
	capacityPlanningLesson,
	capacityPlanningLesson1,
	capacityPlanningLesson2,
	capstoneBackendAiProjectLesson,
	careerGrowthQuestionsLesson,
	cartesianExplosionAndSplitQueriesLesson,
	cdnArchitectureLesson,
	cdnCachingLesson,
	cdnReverseProxyAndLoadBalancerLesson,
	chainOfResponsibilityLesson,
	chainOfThoughtPromptingLesson,
	changeTrackingLesson,
	channelsAndProducerConsumerPipelinesLesson,
	chatAssistantsForCodingLesson,
	chatSystemDesignLesson,
	chatSystemHldLesson,
	chatbotLandscapeLesson,
	chatgptGuideLesson,
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
	chooseAwsServiceLesson,
	chooseAzureServiceLesson,
	choosingAWorkflowLesson,
	choosingAnAzureHostingModelLesson,
	choosingAzureRegionAndAvailabilityZoneLesson,
	choosingBetweenVmAndAppServiceLesson,
	choosingStateOwnershipBoundariesLesson,
	choosingTheRightStructureLesson,
	choosingTheRightToolLesson,
	choreographyVsOrchestrationLesson,
	chunkingAndEmbeddingDocumentsLesson,
	ciCdForAppServiceLesson,
	ciCdForContainersAndAcrLesson,
	ciCdForFunctionsLesson,
	cicdQ1Lesson,
	cicdQ2Lesson,
	cicdQ3Lesson,
	cicdQ4Lesson,
	circuitBreakerPatternLesson,
	claimsBasedAuthorizationLesson,
	clarifyingAmbiguousRequirementsLesson,
	clarifyingQuestionsLesson,
	classesObjectsLesson,
	classesObjectsLesson1,
	claudeApiBasicsLesson,
	claudeForCodeLesson,
	claudeInYourWorkflowLesson,
	claudeInterfaceTourLesson,
	claudeLimitationsLesson,
	claudePhilosophyAndSafetyLesson,
	claudeVsOtherChatbotsLesson,
	cleanArchitectureLesson,
	cleanArchitectureLesson1,
	cleanupFunctionsLesson,
	clientConfigLesson,
	clientCredentialsFlowLesson,
	clientCredentialsForServiceToServiceCallsLesson,
	clientEvaluationAndTranslationFailuresLesson,
	clientSideDataFetchingLesson,
	clientSideDiscoveryLesson,
	clientSideResolversLesson,
	clientSideValidationLesson,
	climbingStairsLesson,
	cloneGraphLesson,
	cloudDeploymentLesson,
	cloudformationIacLesson,
	cloudfrontCdnLesson,
	cloudwatchCsharpLesson,
	cloudwatchIntroLesson,
	clrArchitectureAndExecutionModelLesson,
	clrCtsClsLesson,
	clusterTopologyShardingLesson,
	clusteredVsNonclusteredIndexesLesson,
	codeFirstDbFirstLesson,
	codeOrganizationLesson,
	codeReviewWithAiLesson,
	codeSplittingLesson,
	codeSplittingLesson1,
	codeSplittingLesson2,
	codeSplittingLazyLesson,
	cognitoCsharpLesson,
	coinChangeLesson,
	collectionsLesson,
	combinationSumIvLesson,
	commandPatternLesson,
	commandPatternLesson1,
	commitHygieneAndReleaseBranchesLesson,
	commitMsgHooksLesson,
	commonBehavioralTrapsLesson,
	commonDataStructuresAndWhenToUseThemLesson,
	commonPitfallsLesson,
	commonPromptingMistakesLesson,
	communicatingTechnicalRiskLesson,
	communicationQuestionsLesson,
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
	compositeIndexDesignLesson,
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
	connectionPoolingLesson,
	connectionPoolingLesson1,
	connectionPoolingLesson2,
	connectionPoolingAndExhaustionLesson,
	connectionPoolingPgbouncerLesson,
	connectionResilienceLesson,
	consistencyAvailabilityTradeOffsLesson,
	consistencyModelsLesson,
	consistentHashingLesson,
	constructBinaryTreeFromPreorderAndInorderLesson,
	constructorInjectionLesson,
	constructorsLesson,
	consulServiceDiscoveryLesson,
	consumerGroupsLesson,
	containerAppsOverviewLesson,
	containerAppsRevisionsAndIngressLesson,
	containerAppsScalingAndDaprLesson,
	containerAppsVsAksLesson,
	containerHealthChecksLesson,
	containerNetworkingLesson,
	containerSecretsLesson,
	containerWithMostWaterLesson,
	containersAndContainerImagesLesson,
	containsDuplicateLesson,
	containsQuantifierOperatorLesson,
	contentNegotiationLesson,
	contentNegotiationLesson1,
	contentSafetyAndGuardrailsLesson,
	contextApiDeepDiveLesson,
	contextWindowDeepDiveLesson,
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
	coreWebVitalsLcpInpAndClsLesson,
	correlatedSubqueriesLesson,
	correlationIdsLesson,
	corsAndPreflightRequestsLesson,
	corsBestPracticesLesson,
	corsConfigurationLesson,
	corsInAspnetCoreLesson,
	corsWithReactLesson,
	cosmosDbConsistencyAndDistributionLesson,
	cosmosDbCsharpLesson,
	cosmosDbDataModelingLesson,
	cosmosDbOverviewLesson,
	cosmosDbPartitionKeysLesson,
	cosmosDbRequestUnitsAndPerformanceLesson,
	cosmosDbSdkAndDeveloperPatternsLesson,
	costAsAnArchitectureConstraintLesson,
	costManagementLesson,
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
	coveringIndexesLesson1,
	coverletCollectorLesson,
	cpuMemoryAndDiskInvestigationLesson,
	cpuMemoryStorageAndIoLesson,
	cpuProfilingLesson,
	cqrsLesson,
	cqrsBasicsLesson,
	cqrsPatternLesson,
	cqrsPatternLesson1,
	cqrsWithEventSourcingLesson,
	createAsyncThunkLesson,
	createAzureSqlCsharpLesson,
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
	criticalEvaluationLesson,
	cronosLesson,
	crossJoinLesson,
	crossServiceDataAccessLesson,
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
	cursorIdeGuideLesson,
	customAuthorizationHandlersLesson,
	customCacheResolversLesson,
	customExceptionsLesson,
	customHookExamplesLesson,
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
	dataConsistencyModelsLesson,
	dataDrivenTestsLesson,
	dataModelingLesson,
	dataOperationsConnectedLesson,
	dataOperationsDisconnectedLesson,
	dataProtectionLesson,
	dataSynchronizationStrategiesLesson,
	dataVolumeEstimationLesson,
	dataWarehouseFundamentalsLesson,
	dataannotationsLesson,
	databaseCachingLesson,
	databaseCapacityPlanningLesson,
	databaseChoosingLesson,
	databaseEngineTuningAdvisorLesson,
	databaseFirstDiagnosticsLesson,
	databaseMigrationAndDataMovementLesson,
	databaseMigrationSafetyLesson,
	databaseMigrationStrategiesLesson,
	databaseMirroringLesson,
	databasePerServicePatternLesson,
	databaseScalingLesson,
	databaseShardingLesson,
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
	deadlocksStarvationAndLivelocksLesson,
	debuggingPerformanceLesson,
	debuggingTechniquesLesson,
	debuggingWithAiLesson,
	debuggingWithGitLesson,
	decisionDocumentationLesson,
	decisionReviewsLesson,
	declarationMergingAndModuleAugmentationLesson,
	decodeWaysLesson,
	decodeWaysLesson1,
	decoratorPatternLesson,
	decoratorPatternLesson1,
	deduplicationLesson,
	defaultInterfaceMethodsLesson,
];

const rawLessonsPart3 = [
	defaultifemptyOperatorLesson,
	delegatesEventsLesson,
	delegatesEventsLesson1,
	deleteLesson,
	deleteDataDisconnectedScenarioLesson,
	denormalizationTradeOffsLesson,
	dependencyInjectionLesson,
	dependencyInjectionLesson1,
	dependencyInjectionLifetimesAndScopeValidationLesson,
	dependencyInjectionWhatHappensWhenASingletonDependsOnAScopedServiceLesson,
	dependencyInversionLesson,
	dependencyScanningLesson,
	dependentQueriesLesson,
	deployAspnetCoreAppServiceLesson,
	deployAspnetCoreBeanstalkLesson,
	deployingContainerizedAppsOnAksLesson,
	deploymentAndScalingPatternsLesson,
	deploymentArchitectureForNextjsLesson,
	deploymentOptionsLesson,
	deploymentPipelinesLesson,
	deploymentSecretsAndEnvironmentConfigurationLesson,
	deploymentSetupLesson,
	deploymentSlotsAndSlotSwappingLesson,
	deprecationStrategyLesson,
	derivedDataLesson,
	derivedStateAndAvoidingDuplicatedStateLesson,
	designChatSystemLesson,
	designDistributedCacheLesson,
	designFileStorageLesson,
	designNewsFeedLesson,
	designNotificationSystemLesson,
	designRateLimiterLesson,
	designReviewsLesson,
	designTradeOffsLesson,
	designUniqueIdGeneratorLesson,
	designingEventDrivenServerlessArchitectureLesson,
	designingTypeSafeComponentApisLesson,
	devtoolsLesson,
	diBasicsLesson,
	diBasicsLesson1,
	diagnosingAPortThatIsNotReachableLesson,
	diagnosingAsyncPerformanceProblemsLesson,
	digitalRootLesson,
	directExchangeLesson,
	disasterRecoveryLesson,
	disasterRecoveryLesson1,
	disasterRecoveryPlanningLesson,
	disasterRecoveryTestingLesson,
	discriminatedUnionsLesson,
	disjointSetsLesson,
	distinctSetOperatorLesson,
	distributedCachingLesson,
	distributedRateLimitingLesson,
	distributedTracingLesson,
	distributedTracingAcrossServicesLesson,
	distributedTracingAndOpenTelemetryLesson,
	distributedTransactionChallengesLesson,
	distributedTransactionsLesson,
	dlqConceptsLesson,
	dlqErrorHandlingLesson,
	dlqMonitoringLesson,
	dlqRetryStrategiesLesson,
	dnsAndNetworkTroubleshootingFromLinuxLesson,
	dnsInDepthLesson,
	dnsLoadBalancingLesson,
	dnsResolutionFromBrowserToServerLesson,
	dockerContainerizationLesson,
	dockerEcrLesson,
	dockerfilesAndContainerDevelopmentLesson,
	documentUnderstandingLesson,
	documentationLesson,
	domainEventsLesson,
	dotnetAwsSdkLesson,
	dotnetAzureSdkLesson,
	dotnetVersionsLesson,
	dropTableLesson,
	dropboxStorageLesson,
	dryPrincipleLesson,
	duplicateMessagesAndIdempotencyLesson,
	dynamicImportsLesson,
	dynamodbCsharpLesson,
	dynamodbNosqlLesson,
	eCommerceApiLesson,
	eCommerceSchemaLesson,
	eagerVsLazyLoadingLesson,
	ec2AutoScalingLesson,
	ec2FundamentalsLesson,
	ec2InstancesStorageLesson,
	ecommerceHldLesson,
	edgeRuntimeVsNodeRuntimeLesson,
	editDistanceLesson,
	editingAndPolishingLesson,
	editingWithAiLesson,
	efCoreAzureSqlLesson,
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
	embeddingsAndVectorStoresLesson,
	embeddingsSimplyLesson,
	emotionLesson,
	encapsulationLesson,
	encapsulationBasicsLesson,
	encryptionAtRestLesson,
	encryptionTdeLesson,
	endpointRoutingInternalsLesson,
	enterpriseAiImplementationPlaybookLesson,
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
	errorHandlingAndValidationLesson,
	errorHandlingBasicsLesson,
	errorHandlingBasicsLesson1,
	errorHandlingInDataFetchingLesson,
	errorHandlingStrategiesLesson,
	errorLoggingMonitoringLesson,
	errorPoliciesLesson,
	errorResponseFormatLesson,
	esbuildLesson,
	estimationAndUncertaintyLesson,
	etagsAndConditionalRequestsLesson,
	evaluatingAiOutputLesson,
	evaluatingRagAndAgentQualityLesson,
	evaluatingTechnicalOptionsLesson,
	eventDrivenApplicationPatternsLesson,
	eventDrivenArchitectureLesson,
	eventDrivenArchitectureFundamentalsLesson,
	eventGridCsharpLesson,
	eventGridTopicsEventsAndEventSubscriptionsLesson,
	eventGridWithAzureFunctionsLesson,
	eventHubsPartitionsAndConsumerGroupsLesson,
	eventHubsStreamProcessingLesson,
	eventSchemaEvolutionLesson,
	eventSourcingLesson,
	eventSourcingFundamentalsLesson,
	eventSourcingPatternLesson,
	eventSourcingProsConsLesson,
	eventStoreDesignLesson,
	eventVersioningLesson,
	eventualConsistencyLesson,
	evictionPoliciesLesson,
	exactlyOnceSemanticsLesson,
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
	expressCachingLesson,
	expressionTreesLesson,
	extensionMethodsLesson,
	extensionsLesson,
	externalProvidersLesson,
	extraReducersLesson,
	facadePatternLesson,
	facadePatternLesson1,
	facebookNewsFeedLesson,
	factoryPatternLesson,
	factoryPatternLesson1,
	factoryPatternLesson2,
	factoryPatternDiLesson,
	failoverRecoveryLesson,
	failoverSwitchoverLesson,
	failureStoriesLesson,
	fallbackPatternsLesson,
	fanoutExchangeLesson,
	featureFlagsLesson,
	fetchApiBasicsLesson,
	fetchingDataLesson,
	fewShotPromptingLesson,
	fiberAndSchedulingConceptsLesson,
	fibonacciNumberLesson,
	fieldTypesMappingLesson,
	fifoQueuesLesson,
	figgleLesson,
	fileDescriptorsAndOpenFilesLesson,
	fileIoLesson,
	fileShareCsharpLesson,
	fileStorageDesignLesson,
	fileUploadLesson,
	fileUploadApiLesson,
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
	fixupAutosquashLesson,
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
	frontendMemoryLeaksLesson,
	fullOuterJoinLesson,
	fullstackPostgresqlPrismaNextjsLesson,
	functionalComponentsLesson,
	functionalVsNonFunctionalLesson,
	functionalVsNonFunctionalRequirementsLesson,
	functionsBindingsLesson,
	functionsCsharpLesson,
	functionsDependencyInjectionLesson,
	functionsDependencyInjectionAndConfigurationLesson,
	functionsDurableWorkflowsLesson,
	functionsEventDrivenDevelopmentLesson,
	functionsHttpApisLesson,
	functionsIntroLesson,
	functionsLocalDevelopmentAndDebuggingLesson,
	functionsMethodsLesson,
	functionsProgrammingModelsLesson,
	functionsScalingAndHostingPlansLesson,
	functionsStorageQueuesAndTimersLesson,
	functionsTriggersLesson,
	functionsTypesLesson,
	garbageCollectionHowWouldYouInvestigateAllocationAndGcPressureLesson,
	gatewaySecurityLesson,
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
	geospatialQueriesLesson,
	gettingStartedEfCoreLesson,
	gettingStartedJestLesson,
	gettingStartedXunitLesson,
	ginGistIndexesLesson,
	gitAndCiCdLesson,
	gitBestPracticesLesson,
	gitBisectForRegressionInvestigationLesson,
	gitBlameAnnotateLesson,
	gitDirectoryStructureLesson,
	gitFlowLesson,
	gitGarbageCollectionLesson,
	gitIndexStagingAreaLesson,
	gitInternalsLesson,
	gitObjectsBlobsTreesCommitsLesson,
	gitPackFilesLesson,
	gitRefsAndHeadLesson,
	gitSecurityLesson,
	gitSecurityBestPracticesLesson,
	githubActionsAzureAuthenticationLesson,
	githubActionsForAzureLesson,
	githubCopilotGuideLesson,
	githubFlowLesson,
	gitlabFlowLesson,
	globalErrorHandlingLesson,
	globalLoadBalancingLesson,
	googleDriveStorageLesson,
	googleSearchLesson,
	googleSearchDesignLesson,
	governanceCostManagementLesson,
	gpgCommitSigningLesson,
	graphValidTreeLesson,
	graphqlBasicsLesson,
	graphqlRequestLesson,
	groupAnagramsLesson,
	groupByLesson,
	groupingOperatorGroupbyTolookupLesson,
	groupjoinOperatorLesson,
	growthProjectionsLesson,
	grpcAndProtobufLesson,
	gsapLesson,
	handlingEventsLesson,
	handlingTechnicalDisagreementLesson,
	handlingUserInputLesson,
	hangfireLesson,
	hashTablesLesson,
	havingClauseLesson,
	headerExchangeLesson,
	headerVersioningLesson,
	headlessComponentsLesson,
	healthChecksLesson,
	healthChecksLesson1,
	healthChecksAndLoadBalancingLesson,
	healthChecksAndReadinessVsLivenessLesson,
	healthEndpointsAndDependencyChecksLesson,
	heapsLesson,
	highAvailabilityAndZoneAwareArchitectureLesson,
	higherOrderComponentsTypedLesson,
	historyOfAiCodingLesson,
	hocBasicsLesson,
	hocCompositionLesson,
	hocExamplesLesson,
	hookBestPracticesLesson,
	hookCompositionPatternsLesson,
	hookErrorHandlingLesson,
	hookFundamentalsLesson,
	hooksAndAutomationLesson,
	horizontalPodAutoscalerLesson,
	horizontalVsVerticalScalingLesson,
	hospitalSystemSchemaLesson,
	hostingAndDeployingMcpServersLesson,
	hotchocolateProjectSetupLesson,
	hotelManagementLesson,
	houseRobberLesson,
	houseRobberIiLesson,
	howAgentsWorkLesson,
	howDoYouGuaranteeAnOperationIsAppliedOnlyOnceLesson,
	howDoYouHandleADatabaseTransactionThatSucceedsButEventPublishingFailsLesson,
	howLlmsWorkSimplyLesson,
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
	httpMethodsStatusCodesLesson,
	httpMethodsStatusCodesAndHeadersLesson,
	httpRequestAndResponseLifecycleLesson,
	httpStatusCodeSelectionLesson,
	http11VsHttp2VsHttp3Lesson,
	httpclientfactoryLesson,
	humanInTheLoopAndApprovalFlowsLesson,
	humanizerLesson,
	huskyLintStagedLesson,
	hydrationAndHydrationMismatchesLesson,
	hydrationStrategiesLesson,
	iamFundamentalsLesson,
	iamPoliciesPermissionsLesson,
	iamRolesEcsLesson,
	iasyncdisposableAndAsyncResourceCleanupLesson,
	idempotencyKeysAndDuplicateRequestHandlingLesson,
	idempotentProcessingLesson,
	identityFederationLesson,
	identityIntegrationLesson,
	identityModelLesson,
	identityOverviewLesson,
	identityServerSetupLesson,
	identitySetupLesson,
	identityserverLesson,
	idisposableFinalizationAndDeterministicCleanupLesson,
	idistributedcacheRedisLesson,
	ihttpclientfactoryAndHandlerLifetimesLesson,
	imageAndFontOptimizationLesson,
	imageLayersAndBuildCacheLesson,
	imageScanningAndSupplyChainSecurityLesson,
	imagesAndAiLesson,
	imemorycacheLesson,
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
	indexFundamentalsLesson1,
	indexMaintenanceLesson,
	indexMaintenanceOverheadLesson,
	indexMaintenanceVsActualQueryPerformanceLesson,
	indexSelectivityLesson,
	indexeddbPersistenceLesson,
	indexingStrategiesLesson,
	infiniteQueriesLesson,
	influencingWithoutAuthorityLesson,
	infrastructureAsCodeConceptsLesson,
	infrastructureAutomationWithCiCdLesson,
	infrastructureErrorsLesson,
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
	instagramFeedDesignLesson,
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
	interactiveRebaseBasicsLesson,
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
];

const rawLessonsPart4 = [
	introduceMemoryLeakLesson,
	introductionToGraphqlLesson,
	invalidationLesson,
	invalidationPropagationLesson,
	investigateUsingLogsMetricsAndTracesLesson,
	iocContainerSetupLesson,
	ioredisLesson,
	isolationLevelsLesson,
	isomorphicStringsLesson,
	iteratorPatternLesson,
	jankFreeAnimationsLesson,
	jestLesson,
	jitCompilationAndTieredCompilationLesson,
	joinOperatorLesson,
	joinOptimizationLesson,
	joiningStreamsLesson,
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
	kafkaConfigurationLesson,
	kafkaConsumerGroupsLesson,
	kafkaExactlyOnceProcessingLesson,
	kafkaFundamentalsLesson,
	kafkaProducersConsumersLesson,
	kafkaStreamsBasicsLesson,
	kafkaVsMessageQueuesLesson,
	kestrelAndTheAspnetCoreHostingModelLesson,
	keyLookupAndBookmarkLookupLesson,
	keyVaultCsharpLesson,
	keyVaultIntroLesson,
	keyVaultSecretsKeysAndCertificatesLesson,
	keyVaultSecretsManagementLesson,
	keyVaultVsAppConfigurationLesson,
	ksqldbBasicsLesson,
	kubernetesMultiEnvArchitectureLesson,
	kubernetesServiceDiscoveryLesson,
	kustoQueryLanguageForDevelopersLesson,
	kyLesson,
	l4VsL7LoadBalancingLesson,
	lambdaCsharpLesson,
	largeFileHandlingGitLfsLesson,
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
	leaderboardsSortedSetsLesson,
	leadersInArrayLesson,
	leadershipQuestionsLesson,
	learnLinqStepByStepLesson,
	leftRightJoinsLesson,
	legacyModernizationStrategiesLesson,
	libraryManagementLesson,
	librarySystemSchemaLesson,
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
	loadBalancingAlgorithmsLesson,
	loadingStatesLesson,
	localAiOptionsLesson,
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
	luaScriptingLesson,
	mailkitLesson,
	majorityElementLesson,
	makingAssumptionsLesson,
	makingTechnicalTradeOffsExplicitLesson,
	manageDbConnectionStringLesson,
	managedDisksAndApplicationStorageLesson,
	managedHeapAndAllocationLifecycleLesson,
	managedIdentitiesLesson,
	managedIdentitiesLesson1,
	managedIdentityArchitectureLesson,
	managedIdentityVsServicePrincipalLesson,
	managedIdentityVsServicePrincipalsLesson,
	managedIdentityWithAzureSqlLesson,
	managedIdentityWithAzureSqlLesson1,
	managedIdentityWithKeyVaultLesson,
	managedIdentityWithStorageLesson,
	managingBreakingChangesAcrossBranchesLesson,
	managingDependenciesLesson,
	managingTechnicalDebtLesson,
	manualInvalidationLesson,
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
	mcpAndBackendIntegrationLesson,
	mcpArchitectureAndTransportsLesson,
	mcpResourcesPromptsAndToolsLesson,
	mcpServerLifecycleLesson,
	mcpVsRestGraphqlForAiLesson,
	meaningfulNamesLesson,
	mediatorPatternLesson,
	mediatorPatternLesson1,
	mediatrLesson,
	memoizationBasicsLesson,
	memoizationStrategiesLesson,
	memoryAndContextManagementLesson,
	memoryEstimationLesson,
	memoryManagementLesson,
	memoryOptimizationLesson,
	memorystreamLesson,
	mentoringJuniorEngineersLesson,
	mergeLesson,
	mergeIntervalsLesson,
	mergeTwoSortedListsLesson,
	mergeVsRebaseLesson,
	messageBasicsLesson,
	messageBrokerSelectionLesson,
	messageIdempotencyAndDuplicateHandlingLesson,
	messageOrderingLesson,
	messagePersistenceAndOrderingLesson,
	messageStructureLesson,
	messagepackLesson,
	messagingAndEventDrivenArchitectureLesson,
	messagingReliabilityIdempotencyAndRetriesLesson,
	methodOverridingLesson,
	methodsLesson,
	metricsAlertsAndActionGroupsLesson,
	metricsAndMonitoringLesson,
	microFrontendsLesson,
	microservicesBasicsLesson,
	microservicesDecompositionStrategiesLesson,
	microservicesSecurityFundamentalsLesson,
	microservicesVsMonolithLesson,
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
	modelComparisonLesson,
	modelSelectionAndCostOptimizationLesson,
	modelsAndViewdataLesson,
	modernDevopsPracticesLesson,
	moduleFederationLesson,
	mongodbDriverLesson,
	monitoringLesson,
	monitoringAndAlertingLesson,
	monitoringAppServiceLesson,
	monitoringContainersAndAksLesson,
	monitoringElasticBeanstalkLesson,
	monitoringFunctionsAndAppServiceLesson,
	monitoringSetupLesson,
	monolithVsMicroservicesLesson,
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
	multiFileWorkflowsLesson,
	multiRegionCachingLesson,
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
	n1ProblemLesson,
	n1QueryDiagnosisLesson,
	navigationLesson,
	nestedLoopsHashJoinAndMergeJoinLesson,
	nestedRoutesLesson,
	netflixStreamingLesson,
	netflixStreamingLesson1,
	networkInterruptionHandlingLesson,
	networkSecurityGroupsLesson,
	networkSecurityGroupsAndFirewallsLesson,
	networkWaterfallsAndRequestPrioritizationLesson,
	neverAndExhaustiveCheckingLesson,
	newsFeedDesignLesson,
	newtonsoftJsonLesson,
	nextjsLesson,
	nextjsAppRouterArchitectureLesson,
	nextjsIntegrationLesson,
	nextjsRoutingLesson,
	nlogLesson,
	noCodeAutomationToolsLesson,
	nodeCacheLesson,
	normalizationLesson,
	normalizationVsDenormalizationLesson,
	normalizingStateLesson,
	nosqlModelingLesson,
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
	oauth2AndJwtLesson,
	objectManagementLesson,
	observabilityAndFailureTestingLesson,
	observabilityAndTelemetryLesson,
	observabilityArchitectureLesson,
	observabilityFundamentalsLesson,
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
	ollamaLocalAiLesson,
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
	opentelemetryBasicsLesson,
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
	orderingChallengesLesson,
	osiModelLesson,
	otherComputeServicesLesson,
	otherDatabaseServicesLesson,
	outboxPatternLesson,
	outboxPatternLesson1,
	outputCachingLesson,
	outputEncodingLesson,
	pacelcLesson,
	pacelcAndLatencyTradeOffsLesson,
	pacificAtlanticWaterFlowLesson,
	packageJsonScriptsLesson,
	paginationLesson,
	paginationBasicsLesson,
	paginationCachingLesson,
	paginationFilteringAndSortingDesignLesson,
	paginationOptimizationLesson,
	paginationTechniquesLesson,
	paintingAndCompositingLesson,
	palindromeLinkedListLesson,
	palindromePartitioningLesson,
	palindromicSubstringsLesson,
	parallelDataLoadingLesson,
	parameterSniffingAndPlanInstabilityLesson,
	parkingLotSystemLesson,
	partialClonesLesson,
	partialDataErrorHandlingLesson,
	partialExpressionLesson,
	partialViewsLesson,
	partitionToleranceLesson,
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
	performanceFundamentalsLesson,
	performanceMarkersLesson,
	performanceOptimizationLesson,
	performanceOptimizationLesson1,
	performanceOptimizationLesson2,
	performanceOptimizationLesson3,
	performancePaginationLesson,
	performancePitfallsLesson,
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
	pointToPointVsPubsubLesson,
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
	preCommitHooksLesson,
	prePushHooksLesson,
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
];

const rawLessonsPart5 = [
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
	productionOutageLessonsLesson,
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
	promptCachingLesson,
	promptCompositionAndGenerationLesson,
	promptDebuggingWorkflowLesson,
	promptEngineeringForClaudeLesson,
	promptPatternsLesson,
	promptSecurityAndJailbreakDefenseLesson,
	promptingForDebuggingLesson,
	promptsTokensAndContextWindowsLesson,
	propertiesLesson,
	propsAdvancedLesson,
	propsBasicsLesson,
	prosAndConsOfMicroservicesLesson,
	protectingYourDataLesson,
	protobufLesson,
	prototypePatternLesson,
	prototypePatternLesson1,
	providerLesson,
	proxyPatternLesson,
	psTopSsLsofAndCurlForDiagnosisLesson,
	psqlBasicsLesson,
	pubSubLesson,
	publicEndpointsVsPrivateEndpointsLesson,
	pullRequestAndCodeReviewWorkflowLesson,
	qpsEstimationLesson,
	quantifierOperatorsLesson,
	quartzLesson,
	queriesLesson,
	queryBasicsLesson,
	queryCachingLesson,
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
	queueStorageCsharpLesson,
	queuesVsPubsubVsEventStreamsLesson,
	quorumConceptsLesson,
	rabbitmqClientLesson,
	rabbitmqFundamentalsLesson,
	rabbitmqVsKafkaVsSqsLesson,
	raceConditionsAndThreadSafetyLesson,
	ragArchitectureOverviewLesson,
	ragConceptsAndBenefitsLesson,
	ragExplainedLesson,
	ragWithLlamaindexDotnetLesson,
	ragWithMicrosoftExtensionsAiLesson,
	ragWithSemanticKernelLesson,
	rangeTypesLesson,
	ransomNoteLesson,
	rapidQ1Lesson,
	rapidQ2Lesson,
	rapidQ3Lesson,
	rateLimitHeadersLesson,
	rateLimiterLesson,
	rateLimiterDesignLesson,
	rateLimitingLesson,
	rateLimitingLesson1,
	rateLimitingAlgorithmsLesson,
	rateLimitingAndLoadSheddingLesson,
	rateLimitingEdgeCasesLesson,
	rateLimitingInAspnetLesson,
	rateLimitingSecurityLesson,
	rateLimitingStrategiesLesson,
	razorSyntaxLesson,
	razorSyntaxBasicsLesson,
	rbacAndNamespacesLesson,
	rbacOverviewLesson,
	rdsCsharpLesson,
	rdsIntroLesson,
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
	readThroughPatternLesson,
	readerWriterLocksLesson,
	readingApplicationAndSystemLogsLesson,
	readingExecutionPlansLesson,
	readytorunAndNativeAotLesson,
	realTimeAnalyticsLesson,
	realTimePatternsLesson,
	realWorldAbstractionLesson,
	rebaseConflictsLesson,
	rebaseToBranchLesson,
	rebaseVsMergeLesson,
	rebusLesson,
	reconciliationAndComponentIdentityLesson,
	recordsPatternsLesson,
	recoverBinarySearchTreeLesson,
	redGreenRefactorLesson,
	redisLesson,
	redisBenchmarkingLesson,
	redisCacheCsharpLesson,
	redisCachingPatternsLesson,
	redisCachingPatternsLesson1,
	redisCliBasicsLesson,
	redisClusterLesson,
	redisCommandsLesson,
	redisDataTypesLesson,
	redisMemoryManagementLesson,
	redisPersistenceLesson,
	redisPipeliningLesson,
	redisSentinelLesson,
	redisSetupLesson,
	reducerHooksPatternsLesson,
	reduxLesson,
	reduxAsAnApplicationArchitectureToolLesson,
	reduxSagaLesson,
	reduxThunkLesson,
	refactoringWithAiLesson,
	referenceTypesLesson,
	referencesValuesAndObjectLifetimeLesson,
	refetchingLesson,
	refitLesson,
	reflectionAndItsTradeOffsLesson,
	reflogAndRecoveringLostCommitsLesson,
	refreshAheadPatternLesson,
	refreshTokenBasicsLesson,
	refreshTokenRotationLesson,
	registeringAndDescribingToolsLesson,
	regularExpressionMatchingLesson,
	relationQueriesAndPaginationLesson,
	relationalDesignLesson,
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
	repositoryMaintenanceLesson,
	repositoryPatternLesson,
	repositoryPatternLesson1,
	repositoryPatternLesson2,
	requestCancellationAndGracefulShutdownLesson,
	requestLatencyDecompositionLesson,
	requestLoggingLesson,
	requestPipelineAndMiddlewareExecutionLesson,
	requestResponsePatternsLesson,
	requestRoutingLesson,
	requestValidationLesson,
	requestsAndLimitsLesson,
	requirementsAndRealTimeCommunicationArchitectureLesson,
	requirementsGatheringLesson,
	researchAndAnalysisLesson,
	resilienceFundamentalsLesson,
	resilienceLibrariesPollyHystrixLesson,
	resolversLesson,
	resolvingDifficultMergeConflictsLesson,
	resourceBasedAuthorizationLesson,
	resourceGroupsVsManagementGroupsLesson,
	resourceLimitsLesson,
	resourceNamingLesson,
	responseCachingLesson,
	responseCachingLesson1,
	responseCompressionLesson,
	responseFormattingLesson,
	restApiDesignPrinciplesLesson,
	restPrinciplesLesson,
	restVsGraphqlDecisionFrameworkLesson,
	restVsGrpcDecisionFrameworkLesson,
	restVsGrpcVsGraphqlLesson,
	restfulPrinciplesLesson,
	restsharpLesson,
	retrievalAndRankingLesson,
	retryPatternsLesson,
	retryWithExponentialBackoffAndJitterLesson,
	revalidationPatternsLesson,
	reverseAnArrayLesson,
	reverseLinkedListLesson,
	reverseStringLesson,
	reverseWordsLesson,
	reversibilityLesson,
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
	s3CsharpLesson,
	s3IntroLesson,
	s3LifecycleCorsLesson,
	s3PresignedUrlsLesson,
	sagaPatternLesson,
	sagaPatternLesson1,
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
	scopeConstraintsLesson,
	scopedVsTransientVsSingletonLesson,
	scopesClaimsRolesAndPoliciesLesson,
	sdB01Lesson,
	sealedClassesLesson,
	searchApiLesson,
	searchAutocompleteLesson,
	searchInRotatedSortedArrayLesson,
	secretStorageAndRotationLesson,
	secretsManagementLesson,
	secretsManagementLesson1,
	secretsManagerCsharpLesson,
	secretsManagerIntroLesson,
	secureStorageStrategiesLesson,
	securingAiServicesWithManagedIdentityLesson,
	securingReactAppsLesson,
	securityFundamentalsLesson,
	securityHardeningLesson,
	securityTestingLesson,
	securityTestingFundamentalsLesson,
	seedScriptsLesson,
	seekVsScanLesson,
	selectAndIncludeLesson,
	selectStatementLesson,
	selectiveFetchingLesson,
	semanticKernelAgentsAndPlannersLesson,
	semanticKernelProcessFrameworkLesson,
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
	serverSideDiscoveryLesson,
	serverlessApiBestPracticesLesson,
	serverlessArchitecturePatternsLesson,
	serviceBoundariesLesson,
	serviceBoundariesDesignLesson,
	serviceBusCsharpLesson,
	serviceBusDeadLetteringAndRetriesLesson,
	serviceBusFromAzureFunctionsLesson,
	serviceBusQueuesLesson,
	serviceBusSessionsAndMessageProcessingLesson,
	serviceBusTopicsAndSubscriptionsLesson,
	serviceBusVsEventGridVsEventHubsLesson,
	serviceDiscoveryFundamentalsLesson,
	serviceLifetimesLesson,
	serviceLifetimesLesson1,
	serviceLifetimesLesson2,
	serviceToServiceAuthenticationLesson,
	servicesAndServiceDiscoveryLesson,
	sessionManagementLesson,
	sessionPersistenceLesson,
	sessionStoreLesson,
	sessionVsTokenLesson,
	setMatrixZeroesLesson,
	setReturningFunctionsLesson,
	settingUpLesson,
	settingUpAiCodingEnvironmentLesson,
	settingUpClaudeLesson,
	settingUpEnvironmentLesson,
	settingUpEnvironmentLesson1,
	settingUpPrismaClientLesson,
	setupLesson,
	setupClientLesson,
	setupIdentityLesson,
	shadowPropertyInEntityFrameworkCoreLesson,
	shallowClonesLesson,
	shardingStrategiesLesson,
	sharedDatabaseAntiPatternLesson,
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
	sliSloAndSlaLesson,
	sliSloAndSlaInAzureWorkloadsLesson,
	slidingExpirationLesson,
	slidingWindowImplementationLesson,
	slotPatternLesson,
	slowApiInvestigationWorkflowLesson,
	snapshotIsolationAndRowVersioningLesson,
	snapshotsReplayLesson,
	snsCsharpLesson,
	socialMediaApiLesson,
	socialMediaSchemaLesson,
	solidPrinciplesLesson,
	solidPrinciplesLesson1,
	sortColorsLesson,
	sourceGeneratorsLesson,
	spantMemorytAndRefStructsLesson,
	spantWhatDoesItImproveAndWhatConstraintsDoesItIntroduceLesson,
	sparseCheckoutLesson,
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
	sqlServerIntegrationServicesLesson,
	sqlVsNosqlLesson,
	sqlVsNosqlDecisionFrameworkLesson,
	sqlclientLesson,
	sqsBasicsLesson,
	sqsCsharpLesson,
	squashingCommitsLesson,
	ssgHydrationLesson,
	sshAndSecureRemoteAccessLesson,
	sshKeyManagementLesson,
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
	stagingSlotsCustomDomainsLesson,
	stakeholderAlignmentLesson,
	staleTimeGcLesson,
	standardQueryOperatorsLesson,
	starMethodFundamentalsLesson,
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
	statelessDesignLesson,
	statelessServicesAndDistributedStateLesson,
	staticFilesAndCachingLesson,
	statisticsAndCardinalityEstimationLesson,
	statisticsMaintenanceLesson,
	stayingCurrentInAiLesson,
	stepFunctionsLesson,
	storageEncryptionAndSecurityLesson,
	storageEstimationLesson,
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
	streamVsTableLesson,
	streamingAndSuspenseLesson,
	streamingAndSuspenseLesson1,
	streamingApisAndLargePayloadsLesson,
	streamingReplicationLesson,
	stringCompressionLesson,
	strongVsEventualConsistencyLesson,
	structuredLoggingLesson,
	structuredLoggingLesson1,
	structuredLoggingAndCorrelationIdsLesson,
	stubsFakesLesson,
	styledComponentsLesson,
	styledComponentsLesson1,
	subarraySumEqualsKLesson,
	submoduleCommonPitfallsLesson,
	submoduleFundamentalsLesson,
	submoduleWorkflowsLesson,
	subqueryVsJoinLesson,
	subscriptionLifecycleLesson,
];

const rawLessonsPart6 = [
	subscriptionPatternsLesson,
	subscriptionsLesson,
	subscriptionsLesson1,
	subscriptionsBasicsLesson,
	subscriptionsResourceGroupsResourcesLesson,
	subtreeFundamentalsLesson,
	subtreeVsSubmoduleLesson,
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
	synchronousVsAsynchronousCommunicationLesson,
	synchronousVsAsynchronousWorkLesson,
	synchronousVsAsynchronousWorkflowsLesson,
	systemIoPipelinesLesson,
	systemPromptsAndCustomInstructionsLesson,
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
	tccPatternLesson,
	tcpConnectionAndTlsHandshakeLesson,
	tcpIpStackLesson,
	tddAspnetCoreLesson,
	tddIntroLesson,
	tddPatternsLesson,
	teamAiGovernanceLesson,
	teamConflictQuestionsLesson,
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
	testingStrategiesLesson,
	testingTypesLesson,
	testingTypescriptReactLesson,
	textTypesLesson,
	thenbyThenbydescendingLesson,
	threadPoolPatternLesson,
	threadPoolStarvationLesson,
	threadpoolInternalsAndThreadStarvationLesson,
	threatDetectionComplianceLesson,
	threePrinciplesLesson,
	ticTacToeGameLesson,
	ticketBookingHldLesson,
	timeComplexityAndBigOLesson,
	timeManagementLesson,
	timeManagementQuestionsLesson,
	timeoutPatternsLesson,
	timeoutsAndCircuitBreakersLesson,
	timeoutsRetriesAndCancellationLesson,
	timescaledbTimeSeriesLesson,
	toastMvccLesson,
	tokenBasedAuthLesson,
	tokenBucketImplementationLesson,
	tokenCountingAndUsageLesson,
	tokenRevocationLesson,
	tokenRotationLesson,
	tokensExplainedLesson,
	toneAndStyleLesson,
	toolUseAndFunctionCallingLesson,
	topicExchangeLesson,
	trackgraphInEntityFrameworkCoreLesson,
	trackingChangesOfEntitiesLesson,
	trackingVsAsnotrackingLesson,
	tradeOffAnalysisLesson,
	transactionFundamentalsLesson,
	transactionIsolationLevelsLesson,
	transactionalMessagingLesson,
	transactionalOutboxImplementationLesson,
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
	trunkBasedDevelopmentLesson,
	tryCatchFinallyLesson,
	ttfbAndFrontendPerformanceBudgetsLesson,
	ttlExpirationLesson,
	turboLesson,
	twitterSocialLesson,
	twitterSocialHldLesson,
	twitterTimelineDesignLesson,
	twitterYoutubeCalculationsLesson,
	twoPhaseCommit2pcLesson,
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
	uberRideMatchingLesson,
	uberRideSharingLesson,
	uberRideSharingHldLesson,
	understandingCorsLesson,
	understandingProjectStructureLesson,
	understandingStructureLesson,
	understandingXssCsrfLesson,
	unionLesson,
	unionSetOperatorLesson,
	uniqueCheckLesson,
	uniqueIdGeneratorDesignLesson,
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
	urlShortenerDesignLesson,
	urlVersioningLesson,
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
	userJourneyMappingLesson,
	userefHookLesson,
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
	validationErrorsLesson,
	valueTypesLesson,
	valuetaskAndWhenItIsAppropriateLesson,
	valuetaskWhatProblemDoesItSolveAndWhenCanItMakeCodeWorseLesson,
	variablesLesson,
	vectorDatabasesInPracticeLesson,
	vectorStoresInDotnetLesson,
	vendingMachineLesson,
	verificationLesson,
	verifyingSignaturesLesson,
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
	voiceAndVideoAiLesson,
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
	whatAiCanAndCannotDoLesson,
	whatAreAgentsLesson,
	whatCausesHydrationMismatchesLesson,
	whatIsAiAutomationLesson,
	whatIsAiCodingLesson,
	whatIsApolloLesson,
	whatIsAppServiceLesson,
	whatIsAspnetCoreLesson,
	whatIsAwsForDotnetLesson,
	whatIsAzureLesson,
	whatIsAzureForDotnetLesson,
	whatIsClaudeLesson,
	whatIsCloudComputingLesson,
	whatIsCsharpLesson,
	whatIsElasticBeanstalkLesson,
	whatIsLinqLesson,
	whatIsMcpLesson,
	whatIsModelContextProtocolLesson,
	whatIsNpmYarnLesson,
	whatIsNugetLesson,
	whatIsOopLesson,
	whatIsPostgresqlLesson,
	whatIsPrismaLesson,
	whatIsReactLesson,
	whatIsReactQueryLesson,
	whatIsReduxLesson,
	whatIsToolCallingLesson,
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
	whenToUseMicroservicesLesson,
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
	windowingAggregationLesson,
	windowingLargeListsLesson,
	windsurfAndAlternativesLesson,
	wordBreakLesson,
	wordLadderLesson,
	wordPatternLesson,
	workflowOrchestrationVsChoreographyLesson,
	workingWithDbcontextInEfCoreLesson,
	workingWithDisconnectedEntityGraphLesson,
	workingWithProductAndQaLesson,
	workingWithResourcesAndPromptsLesson,
	workingWithStoredProceduresLesson,
	workspacesMonoreposLesson,
	writeARootCauseAnalysisAndRemediationPlanLesson,
	writeBackPatternLesson,
	writeThroughPatternLesson,
	writingE2eTestsLesson,
	writingRfcsLesson,
	writingTechnicalProposalsLesson,
	writingTestsWithAiLesson,
	writingWithClaudeLesson,
	xssAndOutputEncodingLesson,
	xssPreventionTechniquesLesson,
	xstateLesson,
	xstateFundamentalsLesson,
	xunitLesson,
	yamldotnetLesson,
	yourFirstClaudeConversationLesson,
	youtubeStreamingLesson,
	youtubeVideoLesson,
	yupLesson,
	zeroTrustArchitectureLesson,
	zodLesson,
	zodValidationLesson,
	zoomConferencingLesson,
	zoomConferencingHldLesson,
	zustandLesson,
];

const rawLessons: any[] = [rawLessonsPart1, rawLessonsPart2, rawLessonsPart3, rawLessonsPart4, rawLessonsPart5, rawLessonsPart6];

export const lessons: Lesson[] = rawLessons as unknown as Lesson[];

export function getLessonBySlug(slug: string): Lesson | undefined {
	return lessons.find((l) => l.slug === slug);
}

export function getLessonsByModule(moduleSlug: string, courseSlug?: string): Lesson[] {
	return lessons.filter((l) => l.moduleSlug === moduleSlug && (!courseSlug || l.courseSlug === courseSlug));
}
