import type { Lesson } from '@/types';

import sqlLesson1 from "../courses/sql-server/01-getting-started/01-what-is-sql-server.json";
import sqlLesson2 from "../courses/sql-server/01-getting-started/02-basics.json";
import sqlLesson3 from "../courses/sql-server/01-getting-started/03-aliases.json";
import sqlLesson4 from "../courses/sql-server/02-querying-data/01-select-statement.json";
import sqlLesson5 from "../courses/sql-server/02-querying-data/02-select-distinct.json";
import sqlLesson6 from "../courses/sql-server/02-querying-data/03-select-top.json";
import sqlLesson7 from "../courses/sql-server/02-querying-data/04-where-clause.json";
import sqlLesson8 from "../courses/sql-server/02-querying-data/05-and-operator.json";
import sqlLesson9 from "../courses/sql-server/02-querying-data/06-or-operator.json";
import sqlLesson10 from "../courses/sql-server/02-querying-data/07-between-operator.json";
import sqlLesson11 from "../courses/sql-server/02-querying-data/08-in-operator.json";
import sqlLesson12 from "../courses/sql-server/02-querying-data/09-like-operator.json";
import sqlLesson13 from "../courses/sql-server/02-querying-data/10-null-three-valued-logic.json";
import sqlLesson14 from "../courses/sql-server/02-querying-data/11-order-by-clause.json";
import sqlLesson15 from "../courses/sql-server/02-querying-data/12-offset-and-fetch.json";
import sqlLesson16 from "../courses/sql-server/03-joins/01-visualization-explanation-of-joins.json";
import sqlLesson17 from "../courses/sql-server/03-joins/02-inner-join.json";
import sqlLesson18 from "../courses/sql-server/03-joins/03-left-join.json";
import sqlLesson19 from "../courses/sql-server/03-joins/04-right-join.json";
import sqlLesson20 from "../courses/sql-server/03-joins/05-full-outer-join.json";
import sqlLesson21 from "../courses/sql-server/03-joins/06-cross-join.json";
import sqlLesson22 from "../courses/sql-server/03-joins/07-self-join.json";
import sqlLesson23 from "../courses/sql-server/03-joins/08-cross-apply.json";
import sqlLesson24 from "../courses/sql-server/04-set-operations/01-union-ultimate-guide.json";
import sqlLesson25 from "../courses/sql-server/04-set-operations/02-except.json";
import sqlLesson26 from "../courses/sql-server/04-set-operations/03-intersect.json";
import sqlLesson27 from "../courses/sql-server/05-grouping-aggregation-subqueries/01-group-by.json";
import sqlLesson28 from "../courses/sql-server/05-grouping-aggregation-subqueries/02-having-clause.json";
import sqlLesson29 from "../courses/sql-server/05-grouping-aggregation-subqueries/03-cube.json";
import sqlLesson30 from "../courses/sql-server/05-grouping-aggregation-subqueries/04-rollup.json";
import sqlLesson31 from "../courses/sql-server/05-grouping-aggregation-subqueries/05-grouping-sets.json";
import sqlLesson32 from "../courses/sql-server/05-grouping-aggregation-subqueries/06-pivot-operator.json";
import sqlLesson33 from "../courses/sql-server/05-grouping-aggregation-subqueries/07-common-table-expressions.json";
import sqlLesson34 from "../courses/sql-server/05-grouping-aggregation-subqueries/08-recursive-cte.json";
import sqlLesson35 from "../courses/sql-server/05-grouping-aggregation-subqueries/09-correlated-subquery.json";
import sqlLesson36 from "../courses/sql-server/05-grouping-aggregation-subqueries/10-subquery.json";
import sqlLesson37 from "../courses/sql-server/05-grouping-aggregation-subqueries/11-any-operator.json";
import sqlLesson38 from "../courses/sql-server/05-grouping-aggregation-subqueries/12-exists-operator.json";
import sqlLesson39 from "../courses/sql-server/05-grouping-aggregation-subqueries/13-all-operator.json";
import sqlLesson40 from "../courses/sql-server/06-data-modification-dml/01-insert-add-row.json";
import sqlLesson41 from "../courses/sql-server/06-data-modification-dml/02-insert-into-select.json";
import sqlLesson42 from "../courses/sql-server/06-data-modification-dml/03-insert-multiple-rows.json";
import sqlLesson43 from "../courses/sql-server/06-data-modification-dml/04-update-statement.json";
import sqlLesson44 from "../courses/sql-server/06-data-modification-dml/05-update-with-join.json";
import sqlLesson45 from "../courses/sql-server/06-data-modification-dml/06-delete-statement.json";
import sqlLesson46 from "../courses/sql-server/06-data-modification-dml/07-truncate-table.json";
import sqlLesson47 from "../courses/sql-server/06-data-modification-dml/08-merge-statement.json";
import sqlLesson48 from "../courses/sql-server/06-data-modification-dml/09-select-into.json";
import sqlLesson49 from "../courses/sql-server/07-database-schema-table-objects/01-create-database.json";
import sqlLesson50 from "../courses/sql-server/07-database-schema-table-objects/02-drop-database.json";
import sqlLesson51 from "../courses/sql-server/07-database-schema-table-objects/03-create-table.json";
import sqlLesson52 from "../courses/sql-server/07-database-schema-table-objects/04-alter-table-add-column.json";
import sqlLesson53 from "../courses/sql-server/07-database-schema-table-objects/05-alter-table-alter-column.json";
import sqlLesson54 from "../courses/sql-server/07-database-schema-table-objects/06-alter-table-drop-column.json";
import sqlLesson55 from "../courses/sql-server/07-database-schema-table-objects/07-drop-table.json";
import sqlLesson56 from "../courses/sql-server/07-database-schema-table-objects/08-rename-table.json";
import sqlLesson57 from "../courses/sql-server/07-database-schema-table-objects/09-alter-schema.json";
import sqlLesson58 from "../courses/sql-server/07-database-schema-table-objects/10-create-schema.json";
import sqlLesson59 from "../courses/sql-server/07-database-schema-table-objects/11-drop-schema.json";
import sqlLesson60 from "../courses/sql-server/07-database-schema-table-objects/12-system-databases.json";
import sqlLesson61 from "../courses/sql-server/07-database-schema-table-objects/13-partition-existing-table.json";
import sqlLesson62 from "../courses/sql-server/07-database-schema-table-objects/14-table-partitioning.json";
import sqlLesson63 from "../courses/sql-server/07-database-schema-table-objects/15-sequence.json";
import sqlLesson64 from "../courses/sql-server/07-database-schema-table-objects/16-identity-column.json";
import sqlLesson65 from "../courses/sql-server/07-database-schema-table-objects/17-synonym.json";
import sqlLesson66 from "../courses/sql-server/07-database-schema-table-objects/18-synonym-ultimate-guide.json";
import sqlLesson67 from "../courses/sql-server/07-database-schema-table-objects/19-grant.json";
import sqlLesson68 from "../courses/sql-server/07-database-schema-table-objects/20-computed-columns.json";
import sqlLesson69 from "../courses/sql-server/08-data-types/01-data-types-overview.json";
import sqlLesson70 from "../courses/sql-server/08-data-types/02-char-data-type.json";
import sqlLesson71 from "../courses/sql-server/08-data-types/03-varchar-data-type.json";
import sqlLesson72 from "../courses/sql-server/08-data-types/04-int-data-types.json";
import sqlLesson73 from "../courses/sql-server/08-data-types/05-nchar-data-type.json";
import sqlLesson74 from "../courses/sql-server/08-data-types/06-nvarchar-data-type.json";
import sqlLesson75 from "../courses/sql-server/08-data-types/07-datetime2-data-type.json";
import sqlLesson76 from "../courses/sql-server/08-data-types/08-date-data-type.json";
import sqlLesson77 from "../courses/sql-server/08-data-types/09-time-data-type.json";
import sqlLesson78 from "../courses/sql-server/08-data-types/10-decimal-data-type.json";
import sqlLesson79 from "../courses/sql-server/08-data-types/11-bit-data-type.json";
import sqlLesson80 from "../courses/sql-server/08-data-types/12-datetimeoffset-data-type.json";
import sqlLesson81 from "../courses/sql-server/09-constraints/01-check-constraint.json";
import sqlLesson82 from "../courses/sql-server/09-constraints/02-foreign-key-constraint.json";
import sqlLesson83 from "../courses/sql-server/09-constraints/03-not-null-constraint.json";
import sqlLesson84 from "../courses/sql-server/09-constraints/04-unique-constraint.json";
import sqlLesson85 from "../courses/sql-server/10-indexes/01-indexes-overview.json";
import sqlLesson86 from "../courses/sql-server/10-indexes/02-clustered-indexes.json";
import sqlLesson87 from "../courses/sql-server/10-indexes/03-create-index.json";
import sqlLesson88 from "../courses/sql-server/10-indexes/04-filtered-indexes.json";
import sqlLesson89 from "../courses/sql-server/10-indexes/05-indexes-with-included-columns.json";
import sqlLesson90 from "../courses/sql-server/10-indexes/06-index-on-computed-column.json";
import sqlLesson91 from "../courses/sql-server/10-indexes/07-unique-index.json";
import sqlLesson92 from "../courses/sql-server/10-indexes/08-disable-indexes.json";
import sqlLesson93 from "../courses/sql-server/10-indexes/09-enable-indexes.json";
import sqlLesson94 from "../courses/sql-server/10-indexes/10-rename-index.json";
import sqlLesson95 from "../courses/sql-server/10-indexes/11-drop-index.json";
import sqlLesson96 from "../courses/sql-server/11-views/01-views-introduction.json";
import sqlLesson97 from "../courses/sql-server/11-views/02-create-view.json";
import sqlLesson98 from "../courses/sql-server/11-views/03-drop-view.json";
import sqlLesson99 from "../courses/sql-server/11-views/04-get-information-about-a-view.json";
import sqlLesson100 from "../courses/sql-server/11-views/05-rename-a-view.json";
import sqlLesson101 from "../courses/sql-server/11-views/06-list-all-views.json";
import sqlLesson102 from "../courses/sql-server/11-views/07-indexed-views.json";
import sqlLesson103 from "../courses/sql-server/12-stored-procedures-functions/01-stored-procedures-basics.json";
import sqlLesson104 from "../courses/sql-server/12-stored-procedures-functions/02-stored-procedures-tutorial.json";
import sqlLesson105 from "../courses/sql-server/12-stored-procedures-functions/03-stored-procedure-parameters.json";
import sqlLesson106 from "../courses/sql-server/12-stored-procedures-functions/04-output-parameters.json";
import sqlLesson107 from "../courses/sql-server/12-stored-procedures-functions/05-variables-in-stored-procedures.json";
import sqlLesson108 from "../courses/sql-server/12-stored-procedures-functions/06-scalar-functions.json";
import sqlLesson109 from "../courses/sql-server/12-stored-procedures-functions/07-table-valued-functions.json";
import sqlLesson110 from "../courses/sql-server/12-stored-procedures-functions/08-user-defined-functions-tutorial.json";
import sqlLesson111 from "../courses/sql-server/12-stored-procedures-functions/09-drop-function.json";
import sqlLesson112 from "../courses/sql-server/13-triggers/01-triggers-tutorial.json";
import sqlLesson113 from "../courses/sql-server/13-triggers/02-create-trigger.json";
import sqlLesson114 from "../courses/sql-server/13-triggers/03-ddl-triggers.json";
import sqlLesson115 from "../courses/sql-server/13-triggers/04-instead-of-trigger.json";
import sqlLesson116 from "../courses/sql-server/13-triggers/05-disable-trigger.json";
import sqlLesson117 from "../courses/sql-server/13-triggers/06-enable-trigger.json";
import sqlLesson118 from "../courses/sql-server/13-triggers/07-drop-trigger.json";
import sqlLesson119 from "../courses/sql-server/13-triggers/08-list-all-triggers.json";
import sqlLesson120 from "../courses/sql-server/13-triggers/09-view-trigger-definition.json";
import sqlLesson121 from "../courses/sql-server/14-transactions-error-handling-backup/01-transaction.json";
import sqlLesson122 from "../courses/sql-server/14-transactions-error-handling-backup/02-begin-end-statement.json";
import sqlLesson123 from "../courses/sql-server/14-transactions-error-handling-backup/03-if-else-statement.json";
import sqlLesson124 from "../courses/sql-server/14-transactions-error-handling-backup/04-try-catch.json";
import sqlLesson125 from "../courses/sql-server/14-transactions-error-handling-backup/05-throw-statement.json";
import sqlLesson126 from "../courses/sql-server/14-transactions-error-handling-backup/06-raiserror-statement.json";
import sqlLesson127 from "../courses/sql-server/14-transactions-error-handling-backup/07-full-backup.json";
import sqlLesson128 from "../courses/sql-server/14-transactions-error-handling-backup/08-differential-backup.json";
import sqlLesson129 from "../courses/sql-server/14-transactions-error-handling-backup/09-transaction-log-backup.json";
import sqlLesson130 from "../courses/sql-server/14-transactions-error-handling-backup/10-recovery-model.json";
import sqlLesson131 from "../courses/sql-server/14-transactions-error-handling-backup/11-database-snapshot.json";
import sqlLesson132 from "../courses/sql-server/15-advanced-topics/01-cursor.json";
import sqlLesson133 from "../courses/sql-server/15-advanced-topics/02-temporary-tables.json";
import sqlLesson134 from "../courses/sql-server/15-advanced-topics/03-table-variables.json";
import sqlLesson135 from "../courses/sql-server/15-advanced-topics/04-case-expression.json";
import sqlLesson136 from "../courses/sql-server/15-advanced-topics/05-coalesce-expression.json";
import sqlLesson137 from "../courses/sql-server/15-advanced-topics/06-nullif.json";
import sqlLesson138 from "../courses/sql-server/15-advanced-topics/07-dynamic-sql.json";
import sqlLesson139 from "../courses/sql-server/15-advanced-topics/08-deadlock.json";
import sqlLesson140 from "../courses/sql-server/15-advanced-topics/09-while-loop.json";
import sqlLesson141 from "../courses/sql-server/15-advanced-topics/10-break-statement.json";
import sqlLesson142 from "../courses/sql-server/15-advanced-topics/11-continue-statement.json";
import sqlLesson143 from "../courses/sql-server/16-performance-tuning/execution-plans.json";
import sqlLesson144 from "../courses/sql-server/16-performance-tuning/query-optimization.json";
import sqlLesson145 from "../courses/sql-server/16-performance-tuning/statistics-maintenance.json";
import sqlLesson146 from "../courses/sql-server/16-performance-tuning/database-engine-tuning-advisor.json";
import sqlLesson147 from "../courses/sql-server/16-performance-tuning/query-store.json";
import sqlLesson148 from "../courses/sql-server/17-security-hardening/authentication-modes.json";
import sqlLesson149 from "../courses/sql-server/17-security-hardening/principals-users-roles.json";
import sqlLesson150 from "../courses/sql-server/17-security-hardening/permissions-grant-revoke.json";
import sqlLesson151 from "../courses/sql-server/17-security-hardening/encryption-tde.json";
import sqlLesson152 from "../courses/sql-server/17-security-hardening/always-encrypted.json";
import sqlLesson153 from "../courses/sql-server/18-high-availability-dr/always-on-availability-groups.json";
import sqlLesson154 from "../courses/sql-server/18-high-availability-dr/database-mirroring.json";
import sqlLesson155 from "../courses/sql-server/18-high-availability-dr/backup-restore-strategies.json";
import sqlLesson156 from "../courses/sql-server/19-data-warehousing/star-snowflake-schema.json";
import sqlLesson157 from "../courses/sql-server/19-data-warehousing/data-warehouse-fundamentals.json";
import sqlLesson158 from "../courses/sql-server/20-azure-sql/azure-sql-database.json";
import sqlLesson159 from "../courses/sql-server/20-azure-sql/azure-sql-managed-instance.json";
import sqlLesson160 from "../courses/sql-server/21-modern-data-tools/sql-server-integration-services.json";

import devOpsLesson1 from "../courses/devops/01-docker-fundamentals/01-what-is-docker.json";
import devOpsLesson2 from "../courses/devops/01-docker-fundamentals/02-docker-images-containers.json";
import devOpsLesson3 from "../courses/devops/01-docker-fundamentals/03-dockerfile-basics.json";
import devOpsLesson4 from "../courses/devops/02-docker-advanced/01-docker-compose-multi-container.json";
import devOpsLesson5 from "../courses/devops/02-docker-advanced/02-docker-volumes-networks.json";
import devOpsLesson6 from "../courses/devops/03-kubernetes-fundamentals/01-what-is-kubernetes.json";
import devOpsLesson7 from "../courses/devops/03-kubernetes-fundamentals/02-pods-deployments-services.json";
import devOpsLesson8 from "../courses/devops/03-kubernetes-fundamentals/03-kubectl-commands.json";
import devOpsLesson9 from "../courses/devops/04-kubernetes-advanced/01-configmaps-secrets-ingress.json";
import devOpsLesson10 from "../courses/devops/04-kubernetes-advanced/02-helm-charts.json";
import devOpsLesson11 from "../courses/devops/05-ci-cd-fundamentals/01-ci-cd-concepts.json";
import devOpsLesson12 from "../courses/devops/05-ci-cd-fundamentals/02-jenkins-basics.json";
import devOpsLesson13 from "../courses/devops/05-ci-cd-fundamentals/03-jenkins-pipelines.json";
import devOpsLesson14 from "../courses/devops/06-ci-cd-modern-tools/01-github-actions-workflows.json";
import devOpsLesson15 from "../courses/devops/06-ci-cd-modern-tools/02-gitlab-ci-pipelines.json";
import devOpsLesson16 from "../courses/devops/02-docker-advanced/03-docker-security.json";
import devOpsLesson17 from "../courses/devops/04-kubernetes-advanced/03-k8s-monitoring-observability.json";

import lessonAspnetCore01gettingstartedwhatisaspnetcore from "../courses/aspnet-core/01-getting-started/what-is-aspnet-core.json";
import lessonAspnetCore01gettingstartedsettingupenvironment from "../courses/aspnet-core/01-getting-started/setting-up-environment.json";
import lessonAspnetCore01gettingstartedcreatingfirstproject from "../courses/aspnet-core/01-getting-started/creating-first-project.json";
import lessonAspnetCore01gettingstartedunderstandingprojectstructure from "../courses/aspnet-core/01-getting-started/understanding-project-structure.json";
import lessonAspnetCore01gettingstartedrunninganddebugging from "../courses/aspnet-core/01-getting-started/running-and-debugging.json";
import lessonAspnetCore02mvcfundamentalsmvcarchitecture from "../courses/aspnet-core/02-mvc-fundamentals/mvc-architecture.json";
import lessonAspnetCore02mvcfundamentalscontrollersandactions from "../courses/aspnet-core/02-mvc-fundamentals/controllers-and-actions.json";
import lessonAspnetCore02mvcfundamentalsviewsandtemplates from "../courses/aspnet-core/02-mvc-fundamentals/views-and-templates.json";
import lessonAspnetCore02mvcfundamentalsmodelsandviewdata from "../courses/aspnet-core/02-mvc-fundamentals/models-and-viewdata.json";
import lessonAspnetCore02mvcfundamentalshandlinguserinput from "../courses/aspnet-core/02-mvc-fundamentals/handling-user-input.json";
import lessonAspnetCore03routingurlsroutingbasics from "../courses/aspnet-core/03-routing-urls/routing-basics.json";
import lessonAspnetCore03routingurlsattributerouting from "../courses/aspnet-core/03-routing-urls/attribute-routing.json";
import lessonAspnetCore03routingurlsrouteconstraints from "../courses/aspnet-core/03-routing-urls/route-constraints.json";
import lessonAspnetCore03routingurlsurlgeneration from "../courses/aspnet-core/03-routing-urls/url-generation.json";
import lessonAspnetCore03routingurlsarearouting from "../courses/aspnet-core/03-routing-urls/area-routing.json";
import lessonAspnetCore04modelbindingvalidationmodelbindingoverview from "../courses/aspnet-core/04-model-binding-validation/model-binding-overview.json";
import lessonAspnetCore04modelbindingvalidationbindingsources from "../courses/aspnet-core/04-model-binding-validation/binding-sources.json";
import lessonAspnetCore04modelbindingvalidationvalidationattributes from "../courses/aspnet-core/04-model-binding-validation/validation-attributes.json";
import lessonAspnetCore04modelbindingvalidationcustomvalidation from "../courses/aspnet-core/04-model-binding-validation/custom-validation.json";
import lessonAspnetCore04modelbindingvalidationclientsidevalidation from "../courses/aspnet-core/04-model-binding-validation/client-side-validation.json";
import lessonAspnetCore05razorviewsrazorsyntax from "../courses/aspnet-core/05-razor-views/razor-syntax.json";
import lessonAspnetCore05razorviewslayoutsandpartials from "../courses/aspnet-core/05-razor-views/layouts-and-partials.json";
import lessonAspnetCore05razorviewsviewcomponents from "../courses/aspnet-core/05-razor-views/view-components.json";
import lessonAspnetCore05razorviewstaghelpers from "../courses/aspnet-core/05-razor-views/tag-helpers.json";
import lessonAspnetCore06dependencyinjectiondibasics from "../courses/aspnet-core/06-dependency-injection/di-basics.json";
import lessonAspnetCore06dependencyinjectionservicelifetimes from "../courses/aspnet-core/06-dependency-injection/service-lifetimes.json";
import lessonAspnetCore06dependencyinjectionconstructorinjection from "../courses/aspnet-core/06-dependency-injection/constructor-injection.json";
import lessonAspnetCore06dependencyinjectionconfiguringservices from "../courses/aspnet-core/06-dependency-injection/configuring-services.json";
import lessonAspnetCore06dependencyinjectionadvanceddipatterns from "../courses/aspnet-core/06-dependency-injection/advanced-di-patterns.json";
import lessonAspnetCore07middlewarepipelinemiddlewareconcepts from "../courses/aspnet-core/07-middleware-pipeline/middleware-concepts.json";
import lessonAspnetCore07middlewarepipelinebuiltinmiddleware from "../courses/aspnet-core/07-middleware-pipeline/built-in-middleware.json";
import lessonAspnetCore07middlewarepipelinecustommiddleware from "../courses/aspnet-core/07-middleware-pipeline/custom-middleware.json";
import lessonAspnetCore07middlewarepipelineexceptionhandling from "../courses/aspnet-core/07-middleware-pipeline/exception-handling.json";
import lessonAspnetCore07middlewarepipelinestaticfilesandcaching from "../courses/aspnet-core/07-middleware-pipeline/static-files-and-caching.json";
import lessonAspnetCore08entityframeworkcoreefcoreintroduction from "../courses/aspnet-core/08-entity-framework-core/efcore-introduction.json";
import lessonAspnetCore08entityframeworkcoredbcontextandmigrations from "../courses/aspnet-core/08-entity-framework-core/dbcontext-and-migrations.json";
import lessonAspnetCore08entityframeworkcorequeryingwithlinq from "../courses/aspnet-core/08-entity-framework-core/querying-with-linq.json";
import lessonAspnetCore08entityframeworkcorerelationshipsandconfigurations from "../courses/aspnet-core/08-entity-framework-core/relationships-and-configurations.json";
import lessonAspnetCore08entityframeworkcoreperformanceoptimization from "../courses/aspnet-core/08-entity-framework-core/performance-optimization.json";
import lessonAspnetCore09authenticationauthorizationauthbasics from "../courses/aspnet-core/09-authentication-authorization/auth-basics.json";
import lessonAspnetCore09authenticationauthorizationidentitysetup from "../courses/aspnet-core/09-authentication-authorization/identity-setup.json";
import lessonAspnetCore09authenticationauthorizationjwttokens from "../courses/aspnet-core/09-authentication-authorization/jwt-tokens.json";
import lessonAspnetCore09authenticationauthorizationrolebasedaccess from "../courses/aspnet-core/09-authentication-authorization/role-based-access.json";
import lessonAspnetCore09authenticationauthorizationpolicybasedauthorization from "../courses/aspnet-core/09-authentication-authorization/policy-based-authorization.json";
import lessonAspnetCore10webapirestrestprinciples from "../courses/aspnet-core/10-web-api-rest/rest-principles.json";
import lessonAspnetCore10webapirestapicontrollers from "../courses/aspnet-core/10-web-api-rest/api-controllers.json";
import lessonAspnetCore10webapiresthttpmethodsandstatuscodes from "../courses/aspnet-core/10-web-api-rest/http-methods-and-status-codes.json";
import lessonAspnetCore10webapirestversioninganddocumentation from "../courses/aspnet-core/10-web-api-rest/versioning-and-documentation.json";
import lessonAspnetCore10webapirestswaggerandopenapi from "../courses/aspnet-core/10-web-api-rest/swagger-and-openapi.json";
import lessonAspnetCore11testingdebuggingtestingfundamentals from "../courses/aspnet-core/11-testing-debugging/testing-fundamentals.json";
import lessonAspnetCore11testingdebuggingunittestingcontrollers from "../courses/aspnet-core/11-testing-debugging/unit-testing-controllers.json";
import lessonAspnetCore11testingdebuggingintegrationtesting from "../courses/aspnet-core/11-testing-debugging/integration-testing.json";
import lessonAspnetCore11testingdebuggingdebuggingtechniques from "../courses/aspnet-core/11-testing-debugging/debugging-techniques.json";
import lessonAspnetCore11testingdebuggingloggingandmonitoring from "../courses/aspnet-core/11-testing-debugging/logging-and-monitoring.json";
import lessonAspnetCore12deploymentproductiondeploymentoptions from "../courses/aspnet-core/12-deployment-production/deployment-options.json";
import lessonAspnetCore12deploymentproductiondockercontainerization from "../courses/aspnet-core/12-deployment-production/docker-containerization.json";
import lessonAspnetCore12deploymentproductionclouddeployment from "../courses/aspnet-core/12-deployment-production/cloud-deployment.json";
import lessonAspnetCore12deploymentproductionperformancetuning from "../courses/aspnet-core/12-deployment-production/performance-tuning.json";
import lessonAspnetCore12deploymentproductionmonitoringandalerting from "../courses/aspnet-core/12-deployment-production/monitoring-and-alerting.json";

import linqLesson1 from "../courses/linq/01-getting-started-linq/learn-linq-step-by-step.json";
import linqLesson2 from "../courses/linq/01-getting-started-linq/linq-api-in-net.json";
import linqLesson3 from "../courses/linq/01-getting-started-linq/what-is-linq.json";
import linqLesson4 from "../courses/linq/01-getting-started-linq/why-linq.json";
import linqLesson5 from "../courses/linq/02-linq-fundamentals-syntax/anatomy-of-lambda-expression.json";
import linqLesson6 from "../courses/linq/02-linq-fundamentals-syntax/linq-method-syntax.json";
import linqLesson7 from "../courses/linq/02-linq-fundamentals-syntax/linq-query-syntax.json";
import linqLesson8 from "../courses/linq/03-filtering-projection/filtering-operator-where.json";
import linqLesson9 from "../courses/linq/03-filtering-projection/oftype-filtering-operator.json";
import linqLesson10 from "../courses/linq/03-filtering-projection/projection-operators.json";
import linqLesson11 from "../courses/linq/04-sorting-grouping/grouping-operator-groupby-tolookup.json";
import linqLesson12 from "../courses/linq/04-sorting-grouping/orderby-orderbydescending.json";
import linqLesson13 from "../courses/linq/04-sorting-grouping/thenby-thenbydescending.json";
import linqLesson14 from "../courses/linq/05-joining-data/groupjoin-operator.json";
import linqLesson15 from "../courses/linq/05-joining-data/join-operator.json";
import linqLesson16 from "../courses/linq/06-set-operations/concat-concatenation-operator.json";
import linqLesson17 from "../courses/linq/06-set-operations/distinct-set-operator.json";
import linqLesson18 from "../courses/linq/06-set-operations/except-set-operator.json";
import linqLesson19 from "../courses/linq/06-set-operations/intersect-set-operator.json";
import linqLesson20 from "../courses/linq/06-set-operations/union-set-operator.json";
import linqLesson21 from "../courses/linq/07-aggregation-operators/aggregation-aggregate.json";
import linqLesson22 from "../courses/linq/07-aggregation-operators/aggregation-average.json";
import linqLesson23 from "../courses/linq/07-aggregation-operators/aggregation-count.json";
import linqLesson24 from "../courses/linq/07-aggregation-operators/aggregation-max.json";
import linqLesson25 from "../courses/linq/07-aggregation-operators/aggregation-sum.json";
import linqLesson26 from "../courses/linq/08-quantifiers-element-operators/contains-quantifier-operator.json";
import linqLesson27 from "../courses/linq/08-quantifiers-element-operators/elementat-elementatordefault.json";
import linqLesson28 from "../courses/linq/08-quantifiers-element-operators/first-firstordefault.json";
import linqLesson29 from "../courses/linq/08-quantifiers-element-operators/last-lastordefault.json";
import linqLesson30 from "../courses/linq/08-quantifiers-element-operators/quantifier-operators.json";
import linqLesson31 from "../courses/linq/08-quantifiers-element-operators/single-singleordefault.json";
import linqLesson32 from "../courses/linq/09-partitioning-operators/skip-skipwhile.json";
import linqLesson33 from "../courses/linq/09-partitioning-operators/take-takewhile.json";
import linqLesson34 from "../courses/linq/10-conversion-generation-operators/conversion-operators.json";
import linqLesson35 from "../courses/linq/10-conversion-generation-operators/defaultifempty-operator.json";
import linqLesson36 from "../courses/linq/10-conversion-generation-operators/generation-operators.json";
import linqLesson37 from "../courses/linq/11-advanced-linq-concepts/expression-trees.json";
import linqLesson38 from "../courses/linq/11-advanced-linq-concepts/sample-linq-queries.json";
import linqLesson39 from "../courses/linq/11-advanced-linq-concepts/sequenceequal-operator.json";
import linqLesson40 from "../courses/linq/11-advanced-linq-concepts/standard-query-operators.json";

import efLesson1 from "../courses/ef-core/01-getting-started-ef-core/entity-framework-core-tutorials.json";
import efLesson2 from "../courses/ef-core/01-getting-started-ef-core/install-entity-framework-core.json";
import efLesson3 from "../courses/ef-core/01-getting-started-ef-core/working-with-dbcontext-in-ef-core.json";
import efLesson4 from "../courses/ef-core/02-dbcontext-configuration/dbcontext-in-entity-framework-core.json";
import efLesson5 from "../courses/ef-core/02-dbcontext-configuration/configurations-in-entity-framework-core.json";
import efLesson6 from "../courses/ef-core/02-dbcontext-configuration/fluent-api-in-entity-framework-core.json";
import efLesson7 from "../courses/ef-core/03-conventions-relationships/entity-framework-core-conventions.json";
import efLesson8 from "../courses/ef-core/03-conventions-relationships/one-to-many-relationships-conventions.json";
import efLesson9 from "../courses/ef-core/03-conventions-relationships/configure-one-to-many-relationships-fluent-api.json";
import efLesson10 from "../courses/ef-core/03-conventions-relationships/one-to-one-relationships-conventions.json";
import efLesson11 from "../courses/ef-core/03-conventions-relationships/configure-one-to-one-relationships-fluent-api.json";
import efLesson12 from "../courses/ef-core/03-conventions-relationships/configure-many-to-many-relationships.json";
import efLesson13 from "../courses/ef-core/04-data-operations-connected/entity-framework-core-saving-data-connected.json";
import efLesson14 from "../courses/ef-core/05-data-operations-disconnected/insert-data-disconnected-scenario.json";
import efLesson15 from "../courses/ef-core/05-data-operations-disconnected/update-data-disconnected-scenario.json";
import efLesson16 from "../courses/ef-core/05-data-operations-disconnected/delete-data-disconnected-scenario.json";
import efLesson17 from "../courses/ef-core/05-data-operations-disconnected/working-with-disconnected-entity-graph.json";
import efLesson18 from "../courses/ef-core/06-change-tracking/tracking-changes-of-entities.json";
import efLesson19 from "../courses/ef-core/06-change-tracking/entity-framework-core-change-tracking.json";
import efLesson20 from "../courses/ef-core/06-change-tracking/trackgraph-in-entity-framework-core.json";
import efLesson21 from "../courses/ef-core/07-querying/querying-in-entity-framework-core.json";
import efLesson22 from "../courses/ef-core/07-querying/execute-raw-sql-queries.json";
import efLesson23 from "../courses/ef-core/07-querying/execute-delete-in-entity-framework-core.json";
import efLesson24 from "../courses/ef-core/07-querying/execute-update-in-entity-framework-core.json";
import efLesson25 from "../courses/ef-core/08-inheritance-strategies/inheritance-strategy-in-ef-core.json";
import efLesson26 from "../courses/ef-core/08-inheritance-strategies/ef-core-table-per-hierarchy-tph.json";
import efLesson27 from "../courses/ef-core/08-inheritance-strategies/ef-core-table-per-type-tpt.json";
import efLesson28 from "../courses/ef-core/08-inheritance-strategies/ef-core-table-per-concrete-type-tpc.json";
import efLesson29 from "../courses/ef-core/09-migrations/migrations-in-entity-framework-core.json";
import efLesson30 from "../courses/ef-core/09-migrations/ef-core-migrations-using-cli.json";
import efLesson31 from "../courses/ef-core/09-migrations/pmc-powershell-commands-migrations.json";
import efLesson32 from "../courses/ef-core/09-migrations/generate-sql-script-from-model.json";
import efLesson33 from "../courses/ef-core/10-advanced-features/entity-framework-core-interceptors.json";
import efLesson34 from "../courses/ef-core/10-advanced-features/shadow-property-in-entity-framework-core.json";
import efLesson35 from "../courses/ef-core/10-advanced-features/entity-framework-core-concurrency-conflicts.json";
import efLesson36 from "../courses/ef-core/10-advanced-features/working-with-stored-procedures.json";
import efLesson37 from "../courses/ef-core/11-database-first-diagnostics/entity-framework-core-with-existing-database.json";
import efLesson38 from "../courses/ef-core/11-database-first-diagnostics/logging-in-entity-framework-core.json";
import efLesson39 from "../courses/ef-core/11-database-first-diagnostics/manage-db-connection-string.json";
import efLesson40 from "../courses/ef-core/12-performance-bulk-operations/entity-framework-extensions-performance.json";
import efLesson41 from "../courses/ef-core/12-performance-bulk-operations/best-ways-bulk-inserts-entity-framework.json";

import reactFundLesson1 from "../courses/react-fundamentals/01-getting-started/first-react-app.json";
import reactFundLesson2 from "../courses/react-fundamentals/01-getting-started/jsx-basics.json";
import reactFundLesson3 from "../courses/react-fundamentals/01-getting-started/setting-up-environment.json";
import reactFundLesson4 from "../courses/react-fundamentals/01-getting-started/what-is-react.json";
import reactFundLesson5 from "../courses/react-fundamentals/02-components-props/composing-components.json";
import reactFundLesson6 from "../courses/react-fundamentals/02-components-props/functional-components.json";
import reactFundLesson7 from "../courses/react-fundamentals/02-components-props/props-advanced.json";
import reactFundLesson8 from "../courses/react-fundamentals/02-components-props/props-basics.json";
import reactFundLesson9 from "../courses/react-fundamentals/03-state-events/controlled-components.json";
import reactFundLesson10 from "../courses/react-fundamentals/03-state-events/handling-events.json";
import reactFundLesson11 from "../courses/react-fundamentals/03-state-events/state-best-practices.json";
import reactFundLesson12 from "../courses/react-fundamentals/03-state-events/useState-hook.json";
import reactFundLesson13 from "../courses/react-fundamentals/04-forms-input/file-uploads.json";
import reactFundLesson14 from "../courses/react-fundamentals/04-forms-input/form-submission.json";
import reactFundLesson15 from "../courses/react-fundamentals/04-forms-input/form-validation.json";
import reactFundLesson16 from "../courses/react-fundamentals/04-forms-input/multi-step-forms.json";
import reactFundLesson17 from "../courses/react-fundamentals/05-lifecycle-effects/cleanup-functions.json";
import reactFundLesson18 from "../courses/react-fundamentals/05-lifecycle-effects/custom-hooks.json";
import reactFundLesson19 from "../courses/react-fundamentals/05-lifecycle-effects/fetching-data.json";
import reactFundLesson20 from "../courses/react-fundamentals/05-lifecycle-effects/useeffect-basics.json";
import reactFundLesson21 from "../courses/react-fundamentals/06-context-refs/forwarding-refs.json";
import reactFundLesson22 from "../courses/react-fundamentals/06-context-refs/react-context.json";
import reactFundLesson23 from "../courses/react-fundamentals/06-context-refs/usecontext-hook.json";
import reactFundLesson24 from "../courses/react-fundamentals/06-context-refs/useref-hook.json";
import reactFundLesson25 from "../courses/react-fundamentals/07-react-router/navigation.json";
import reactFundLesson26 from "../courses/react-fundamentals/07-react-router/nested-routes.json";
import reactFundLesson27 from "../courses/react-fundamentals/07-react-router/route-params.json";
import reactFundLesson28 from "../courses/react-fundamentals/07-react-router/routing-basics.json";
import reactFundLesson29 from "../courses/react-fundamentals/08-styling/css-modules.json";
import reactFundLesson30 from "../courses/react-fundamentals/08-styling/inline-styles.json";
import reactFundLesson31 from "../courses/react-fundamentals/08-styling/styled-components.json";
import reactFundLesson32 from "../courses/react-fundamentals/08-styling/tailwind-css.json";
import reactFundLesson33 from "../courses/react-fundamentals/02-components-props/conditional-rendering.json";
import reactFundLesson34 from "../courses/react-fundamentals/02-components-props/lists-and-keys.json";
import reactFundLesson35 from "../courses/react-fundamentals/05-lifecycle-effects/error-boundaries.json";
import reactFundLesson36 from "../courses/react-fundamentals/09-performance-optimization/performance-optimization.json";
import reactFundLesson37 from "../courses/react-fundamentals/09-performance-optimization/react-19-features.json";

import reactAdvLesson1 from "../courses/react-advanced-patterns/01-render-props/render-props-basics.json";
import reactAdvLesson2 from "../courses/react-advanced-patterns/01-render-props/render-props-examples.json";
import reactAdvLesson3 from "../courses/react-advanced-patterns/01-render-props/render-props-vs-hooks.json";
import reactAdvLesson4 from "../courses/react-advanced-patterns/02-higher-order-components/hoc-basics.json";
import reactAdvLesson5 from "../courses/react-advanced-patterns/02-higher-order-components/hoc-composition.json";
import reactAdvLesson6 from "../courses/react-advanced-patterns/02-higher-order-components/hoc-examples.json";
import reactAdvLesson7 from "../courses/react-advanced-patterns/03-compound-components/compound-basics.json";
import reactAdvLesson8 from "../courses/react-advanced-patterns/03-compound-components/compound-examples.json";
import reactAdvLesson9 from "../courses/react-advanced-patterns/03-compound-components/compound-with-context.json";
import reactAdvLesson10 from "../courses/react-advanced-patterns/04-state-reducers/state-reducer-basics.json";
import reactAdvLesson11 from "../courses/react-advanced-patterns/04-state-reducers/state-reducer-examples.json";
import reactAdvLesson12 from "../courses/react-advanced-patterns/04-state-reducers/state-reducer-composition.json";
import reactAdvLesson13 from "../courses/react-advanced-patterns/05-control-props/control-props-basics.json";
import reactAdvLesson14 from "../courses/react-advanced-patterns/05-control-props/control-props-examples.json";
import reactAdvLesson15 from "../courses/react-advanced-patterns/06-performance-patterns/memoization-basics.json";
import reactAdvLesson16 from "../courses/react-advanced-patterns/06-performance-patterns/code-splitting-lazy.json";
import reactAdvLesson17 from "../courses/react-advanced-patterns/06-performance-patterns/virtualization-large-lists.json";
import reactAdvLesson18 from "../courses/react-advanced-patterns/06-performance-patterns/render-optimization.json";
import reactAdvLesson19 from "../courses/react-advanced-patterns/07-custom-hooks-architecture/hook-composition-patterns.json";
import reactAdvLesson20 from "../courses/react-advanced-patterns/07-custom-hooks-architecture/state-sharing-between-hooks.json";
import reactAdvLesson21 from "../courses/react-advanced-patterns/07-custom-hooks-architecture/hook-error-handling.json";
import reactAdvLesson22 from "../courses/react-advanced-patterns/07-custom-hooks-architecture/building-hook-libraries.json";
import reactAdvLesson23 from "../courses/react-advanced-patterns/08-state-machines-xstate/finite-state-machines.json";
import reactAdvLesson24 from "../courses/react-advanced-patterns/08-state-machines-xstate/xstate-fundamentals.json";
import reactAdvLesson25 from "../courses/react-advanced-patterns/08-state-machines-xstate/statecharts-advanced.json";
import reactAdvLesson26 from "../courses/react-advanced-patterns/08-state-machines-xstate/integrating-xstate-react.json";
import reactAdvLesson27 from "../courses/react-advanced-patterns/09-component-composition-strategies/slot-pattern.json";
import reactAdvLesson28 from "../courses/react-advanced-patterns/09-component-composition-strategies/headless-components.json";
import reactAdvLesson29 from "../courses/react-advanced-patterns/09-component-composition-strategies/polymorphic-components.json";
import reactAdvLesson30 from "../courses/react-advanced-patterns/09-component-composition-strategies/layout-composition.json";
import reactAdvLesson31 from "../courses/react-advanced-patterns/09-component-composition-strategies/flexible-component-apis.json";
import reactAdvLesson32 from "../courses/react-advanced-patterns/10-advanced-hook-patterns/reducer-hooks-patterns.json";
import reactAdvLesson33 from "../courses/react-advanced-patterns/10-advanced-hook-patterns/imperative-handle-patterns.json";
import reactAdvLesson34 from "../courses/react-advanced-patterns/10-advanced-hook-patterns/layout-effect-patterns.json";
import reactAdvLesson35 from "../courses/react-advanced-patterns/10-advanced-hook-patterns/custom-hook-testing.json";
import reactAdvLesson36 from "../courses/react-advanced-patterns/10-advanced-hook-patterns/hook-best-practices.json";
import reactAdvLesson37 from "../courses/react-advanced-patterns/05-control-props/control-props-with-forms.json";

import tsrLesson1 from "../courses/typescript-for-react/01-typescript-basics/basic-types.json";
import tsrLesson2 from "../courses/typescript-for-react/01-typescript-basics/enums-and-literal-types.json";
import tsrLesson3 from "../courses/typescript-for-react/01-typescript-basics/functions-types.json";
import tsrLesson4 from "../courses/typescript-for-react/01-typescript-basics/interfaces-types.json";
import tsrLesson5 from "../courses/typescript-for-react/01-typescript-basics/type-assertions-and-as.json";
import tsrLesson6 from "../courses/typescript-for-react/01-typescript-basics/what-is-typescript.json";
import tsrLesson7 from "../courses/typescript-for-react/02-types-in-react/typing-children-and-special-props.json";
import tsrLesson8 from "../courses/typescript-for-react/02-types-in-react/typing-components.json";
import tsrLesson9 from "../courses/typescript-for-react/02-types-in-react/typing-events.json";
import tsrLesson10 from "../courses/typescript-for-react/02-types-in-react/typing-props.json";
import tsrLesson11 from "../courses/typescript-for-react/02-types-in-react/typing-state.json";
import tsrLesson12 from "../courses/typescript-for-react/03-typing-hooks/custom-hooks-types.json";
import tsrLesson13 from "../courses/typescript-for-react/03-typing-hooks/typing-useeffect.json";
import tsrLesson14 from "../courses/typescript-for-react/03-typing-hooks/typing-useref.json";
import tsrLesson15 from "../courses/typescript-for-react/04-advanced-types/generics-basics.json";
import tsrLesson16 from "../courses/typescript-for-react/04-advanced-types/type-guards.json";
import tsrLesson17 from "../courses/typescript-for-react/04-advanced-types/utility-types.json";
import tsrLesson18 from "../courses/typescript-for-react/05-generic-components/generic-form.json";
import tsrLesson19 from "../courses/typescript-for-react/05-generic-components/generic-list.json";
import tsrLesson20 from "../courses/typescript-for-react/05-generic-components/polymorphic-components.json";
import tsrLesson21 from "../courses/typescript-for-react/06-react-patterns/type-safe-context.json";
import tsrLesson22 from "../courses/typescript-for-react/06-react-patterns/typed-react-query.json";
import tsrLesson23 from "../courses/typescript-for-react/06-react-patterns/typed-form-handlers.json";
import tsrLesson24 from "../courses/typescript-for-react/06-react-patterns/typed-router.json";
import tsrLesson25 from "../courses/typescript-for-react/05-generic-components/higher-order-components-typed.json";
import tsrLesson26 from "../courses/typescript-for-react/06-react-patterns/compound-components.json";
import tsrLesson27 from "../courses/typescript-for-react/06-react-patterns/error-boundaries-typed.json";
import tsrLesson28 from "../courses/typescript-for-react/07-testing-best-practices/testing-typescript-react.json";
import tsrLesson29 from "../courses/typescript-for-react/07-testing-best-practices/type-narrowing.json";
import tsrLesson30 from "../courses/typescript-for-react/07-testing-best-practices/type-safety-patterns.json";
import tsrLesson31 from "../courses/typescript-for-react/07-testing-best-practices/migrating-to-typescript.json";
import tsrLesson32 from "../courses/typescript-for-react/03-typing-hooks/typing-usecontext-and-redux.json";
import tsrLesson33 from "../courses/typescript-for-react/03-typing-hooks/typing-performance-hooks.json";
import tsrLesson34 from "../courses/typescript-for-react/04-advanced-types/conditional-and-mapped-types.json";
import tsrLesson35 from "../courses/typescript-for-react/04-advanced-types/template-literal-types.json";
import tsrLesson36 from "../courses/typescript-for-react/07-testing-best-practices/mocking-and-test-utilities.json";

import reduxLesson1 from "../courses/redux/01-redux-fundamentals/three-principles.json";
import reduxLesson2 from "../courses/redux/01-redux-fundamentals/what-is-redux.json";
import reduxLesson3 from "../courses/redux/01-redux-fundamentals/store-actions-reducers.json";
import reduxLesson4 from "../courses/redux/01-redux-fundamentals/immutability.json";
import reduxLesson5 from "../courses/redux/01-redux-fundamentals/devtools.json";
import reduxLesson6 from "../courses/redux/02-redux-toolkit/configure-store.json";
import reduxLesson7 from "../courses/redux/02-redux-toolkit/create-slice.json";
import reduxLesson8 from "../courses/redux/02-redux-toolkit/create-async-thunk.json";
import reduxLesson9 from "../courses/redux/02-redux-toolkit/extra-reducers.json";
import reduxLesson10 from "../courses/redux/03-react-redux/provider.json";
import reduxLesson11 from "../courses/redux/03-react-redux/use-selector.json";
import reduxLesson12 from "../courses/redux/03-react-redux/use-dispatch.json";
import reduxLesson13 from "../courses/redux/04-redux-middleware/middleware-basics.json";
import reduxLesson14 from "../courses/redux/04-redux-middleware/redux-thunk.json";
import reduxLesson15 from "../courses/redux/04-redux-middleware/redux-saga.json";
import reduxLesson16 from "../courses/redux/04-redux-middleware/middleware-composition.json";
import reduxLesson17 from "../courses/redux/05-redux-patterns/normalizing-state.json";
import reduxLesson18 from "../courses/redux/05-redux-patterns/entity-adapter.json";
import reduxLesson19 from "../courses/redux/05-redux-patterns/rtk-query.json";
import reduxLesson20 from "../courses/redux/05-redux-patterns/derived-data.json";
import reduxLesson21 from "../courses/redux/06-redux-testing/testing-reducers.json";
import reduxLesson22 from "../courses/redux/06-redux-testing/testing-async.json";
import reduxLesson23 from "../courses/redux/06-redux-testing/testing-components.json";
import reduxLesson24 from "../courses/redux/07-redux-advanced-concepts/custom-hooks.json";
import reduxLesson25 from "../courses/redux/07-redux-advanced-concepts/store-initialization.json";
import reduxLesson26 from "../courses/redux/07-redux-advanced-concepts/performance-optimization.json";
import reduxLesson27 from "../courses/redux/07-redux-advanced-concepts/code-splitting.json";
import reduxLesson28 from "../courses/redux/08-redux-real-world/project-structure.json";
import reduxLesson29 from "../courses/redux/08-redux-real-world/authentication-flow.json";
import reduxLesson30 from "../courses/redux/08-redux-real-world/error-handling.json";
import reduxLesson31 from "../courses/redux/08-redux-real-world/deployment-setup.json";
import reduxLesson32 from "../courses/redux/08-redux-real-world/offline-support.json";

import rqLesson1 from "../courses/react-query/01-query-basics/first-query.json";
import rqLesson2 from "../courses/react-query/01-query-basics/query-client.json";
import rqLesson3 from "../courses/react-query/01-query-basics/setup.json";
import rqLesson4 from "../courses/react-query/01-query-basics/what-is-react-query.json";
import rqLesson5 from "../courses/react-query/02-query-hooks/dependent-queries.json";
import rqLesson6 from "../courses/react-query/02-query-hooks/infinite-queries.json";
import rqLesson7 from "../courses/react-query/02-query-hooks/pagination.json";
import rqLesson8 from "../courses/react-query/02-query-hooks/query-options.json";
import rqLesson9 from "../courses/react-query/03-mutations/invalidation.json";
import rqLesson10 from "../courses/react-query/03-mutations/optimistic-updates.json";
import rqLesson11 from "../courses/react-query/03-mutations/use-mutation.json";
import rqLesson12 from "../courses/react-query/04-advanced-features/custom-hooks.json";
import rqLesson13 from "../courses/react-query/04-advanced-features/query-cancellation.json";
import rqLesson14 from "../courses/react-query/04-advanced-features/suspense.json";
import rqLesson15 from "../courses/react-query/05-caching-strategies/cache-configuration.json";
import rqLesson16 from "../courses/react-query/05-caching-strategies/stale-time-gc.json";
import rqLesson17 from "../courses/react-query/05-caching-strategies/cache-invalidation.json";
import rqLesson18 from "../courses/react-query/05-caching-strategies/background-refetching.json";
import rqLesson19 from "../courses/react-query/05-caching-strategies/cache-persistence.json";
import rqLesson20 from "../courses/react-query/06-offline-support-persistence/persistence-basics.json";
import rqLesson21 from "../courses/react-query/06-offline-support-persistence/indexeddb-persistence.json";
import rqLesson22 from "../courses/react-query/06-offline-support-persistence/network-interruption-handling.json";
import rqLesson23 from "../courses/react-query/06-offline-support-persistence/background-sync.json";
import rqLesson24 from "../courses/react-query/07-prefetching-ssr/prefetching-strategies.json";
import rqLesson25 from "../courses/react-query/07-prefetching-ssr/ssr-integration-nextjs.json";
import rqLesson26 from "../courses/react-query/07-prefetching-ssr/hydration-strategies.json";
import rqLesson27 from "../courses/react-query/07-prefetching-ssr/prefetch-patterns.json";
import rqLesson28 from "../courses/react-query/08-performance-optimization/selective-fetching.json";
import rqLesson29 from "../courses/react-query/08-performance-optimization/windowing-large-lists.json";
import rqLesson30 from "../courses/react-query/08-performance-optimization/memoization-strategies.json";
import rqLesson31 from "../courses/react-query/08-performance-optimization/profiling-debugging.json";
import rqLesson32 from "../courses/react-query/09-real-world-patterns/auth-flows-token-refresh.json";
import rqLesson33 from "../courses/react-query/09-real-world-patterns/form-integration.json";
import rqLesson34 from "../courses/react-query/09-real-world-patterns/polling-real-time-data.json";
import rqLesson35 from "../courses/react-query/09-real-world-patterns/migration-patterns.json";
import rqLesson36 from "../courses/react-query/02-query-hooks/initial-data-placeholder.json";
import rqLesson37 from "../courses/react-query/04-advanced-features/error-handling-strategies.json";

import apolloLesson1 from "../courses/apollo/01-apollo-basics/first-query.json";
import apolloLesson2 from "../courses/apollo/01-apollo-basics/graphql-basics.json";
import apolloLesson3 from "../courses/apollo/01-apollo-basics/setup-client.json";
import apolloLesson4 from "../courses/apollo/01-apollo-basics/what-is-apollo.json";
import apolloLesson5 from "../courses/apollo/02-queries-mutations/polling.json";
import apolloLesson6 from "../courses/apollo/02-queries-mutations/query-options.json";
import apolloLesson7 from "../courses/apollo/02-queries-mutations/refetching.json";
import apolloLesson8 from "../courses/apollo/02-queries-mutations/use-mutation-hook.json";
import apolloLesson9 from "../courses/apollo/03-caching/cache-basics.json";
import apolloLesson10 from "../courses/apollo/03-caching/cache-updates.json";
import apolloLesson11 from "../courses/apollo/03-caching/pagination-caching.json";
import apolloLesson12 from "../courses/apollo/04-advanced-patterns/error-handling.json";
import apolloLesson13 from "../courses/apollo/04-advanced-patterns/local-state.json";
import apolloLesson14 from "../courses/apollo/04-advanced-patterns/subscriptions.json";
import apolloLesson15 from "../courses/apollo/05-client-side-caching-advanced/cache-configuration.json";
import apolloLesson16 from "../courses/apollo/05-client-side-caching-advanced/type-policies-field-policies.json";
import apolloLesson17 from "../courses/apollo/05-client-side-caching-advanced/custom-cache-resolvers.json";
import apolloLesson18 from "../courses/apollo/05-client-side-caching-advanced/cache-redirects.json";
import apolloLesson19 from "../courses/apollo/06-error-handling-optimistic/error-handling-basics.json";
import apolloLesson20 from "../courses/apollo/06-error-handling-optimistic/error-policies.json";
import apolloLesson21 from "../courses/apollo/06-error-handling-optimistic/optimistic-responses.json";
import apolloLesson22 from "../courses/apollo/06-error-handling-optimistic/partial-data-error-handling.json";
import apolloLesson23 from "../courses/apollo/07-subscriptions-realtime/subscriptions-basics.json";
import apolloLesson24 from "../courses/apollo/07-subscriptions-realtime/websocket-setup.json";
import apolloLesson25 from "../courses/apollo/07-subscriptions-realtime/subscription-lifecycle.json";
import apolloLesson26 from "../courses/apollo/07-subscriptions-realtime/real-time-patterns.json";
import apolloLesson27 from "../courses/apollo/08-local-state-management/reactive-variables.json";
import apolloLesson28 from "../courses/apollo/08-local-state-management/local-only-fields.json";
import apolloLesson29 from "../courses/apollo/08-local-state-management/client-side-resolvers.json";
import apolloLesson30 from "../courses/apollo/08-local-state-management/state-composition.json";
import apolloLesson31 from "../courses/apollo/09-ssr-nextjs-performance/nextjs-integration.json";
import apolloLesson32 from "../courses/apollo/09-ssr-nextjs-performance/ssr-with-apollo.json";
import apolloLesson33 from "../courses/apollo/09-ssr-nextjs-performance/ssg-hydration.json";
import apolloLesson34 from "../courses/apollo/09-ssr-nextjs-performance/performance-optimization.json";
import apolloLesson35 from "../courses/apollo/09-ssr-nextjs-performance/common-pitfalls.json";
import graphqlLesson25 from "../courses/graphql-dotnet/07-error-handling/error-handling-basics.json";
import graphqlLesson26 from "../courses/graphql-dotnet/07-error-handling/custom-exceptions.json";
import graphqlLesson1 from "../courses/graphql-dotnet/01-getting-started/introduction-to-graphql.json";
import graphqlLesson2 from "../courses/graphql-dotnet/01-getting-started/installing-hotchocolate.json";
import graphqlLesson3 from "../courses/graphql-dotnet/01-getting-started/creating-first-graphql-server.json";
import graphqlLesson4 from "../courses/graphql-dotnet/01-getting-started/hotchocolate-project-setup.json";
import graphqlLesson5 from "../courses/graphql-dotnet/02-schema-types/schema-basics.json";
import graphqlLesson6 from "../courses/graphql-dotnet/02-schema-types/type-definitions.json";
import graphqlLesson7 from "../courses/graphql-dotnet/02-schema-types/input-types.json";
import graphqlLesson8 from "../courses/graphql-dotnet/02-schema-types/scalars-custom-types.json";
import graphqlLesson9 from "../courses/graphql-dotnet/03-queries-mutations/query-basics.json";
import graphqlLesson10 from "../courses/graphql-dotnet/03-queries-mutations/mutation-basics.json";
import graphqlLesson11 from "../courses/graphql-dotnet/03-queries-mutations/subscriptions.json";
import graphqlLesson12 from "../courses/graphql-dotnet/03-queries-mutations/resolvers.json";
import graphqlLesson13 from "../courses/graphql-dotnet/04-filtering-pagination/filtering-basics.json";
import graphqlLesson14 from "../courses/graphql-dotnet/04-filtering-pagination/pagination-basics.json";
import graphqlLesson15 from "../courses/graphql-dotnet/04-filtering-pagination/complex-filters.json";
import graphqlLesson16 from "../courses/graphql-dotnet/04-filtering-pagination/performance-pagination.json";
import graphqlLesson17 from "../courses/graphql-dotnet/05-authentication/auth-basics.json";
import graphqlLesson18 from "../courses/graphql-dotnet/05-authentication/authorization.json";
import graphqlLesson19 from "../courses/graphql-dotnet/05-authentication/jwt-integration.json";
import graphqlLesson20 from "../courses/graphql-dotnet/05-authentication/identity-integration.json";
import graphqlLesson21 from "../courses/graphql-dotnet/06-performance/dataloader.json";
import graphqlLesson22 from "../courses/graphql-dotnet/06-performance/caching.json";
import graphqlLesson23 from "../courses/graphql-dotnet/06-performance/query-complexity.json";
import graphqlLesson24 from "../courses/graphql-dotnet/06-performance/persisted-queries.json";

import csharpLesson1 from "../courses/csharp-fundamentals/01-getting-started/first-program.json";
import csharpLesson2 from "../courses/csharp-fundamentals/01-getting-started/setting-up.json";
import csharpLesson3 from "../courses/csharp-fundamentals/01-getting-started/understanding-structure.json";
import csharpLesson4 from "../courses/csharp-fundamentals/01-getting-started/what-is-csharp.json";
import csharpLesson5 from "../courses/csharp-fundamentals/02-variables-types/reference-types.json";
import csharpLesson6 from "../courses/csharp-fundamentals/02-variables-types/type-conversion.json";
import csharpLesson7 from "../courses/csharp-fundamentals/02-variables-types/value-types.json";
import csharpLesson8 from "../courses/csharp-fundamentals/02-variables-types/variables.json";
import csharpLesson9 from "../courses/csharp-fundamentals/03-control-flow/conditionals.json";
import csharpLesson10 from "../courses/csharp-fundamentals/03-control-flow/loops.json";
import csharpLesson11 from "../courses/csharp-fundamentals/03-control-flow/switch-statements.json";
import csharpLesson12 from "../courses/csharp-fundamentals/04-oop/classes-objects.json";
import csharpLesson13 from "../courses/csharp-fundamentals/04-oop/encapsulation.json";
import csharpLesson14 from "../courses/csharp-fundamentals/04-oop/inheritance.json";
import csharpLesson15 from "../courses/csharp-fundamentals/04-oop/interfaces.json";
import csharpLesson16 from "../courses/csharp-fundamentals/05-advanced-features/async-await.json";
import csharpLesson17 from "../courses/csharp-fundamentals/05-advanced-features/collections.json";
import csharpLesson18 from "../courses/csharp-fundamentals/05-advanced-features/generics.json";
import csharpLesson19 from "../courses/csharp-fundamentals/05-advanced-features/linq-basics.json";
import csharpLesson20 from "../courses/csharp-fundamentals/06-error-handling/error-handling.json";
import csharpLesson21 from "../courses/csharp-fundamentals/06-error-handling/exception-types.json";
import csharpLesson22 from "../courses/csharp-fundamentals/06-error-handling/try-catch-finally.json";
import csharpLesson23 from "../courses/csharp-fundamentals/07-modern-csharp/file-io.json";
import csharpLesson24 from "../courses/csharp-fundamentals/07-modern-csharp/records-patterns.json";
import csharpLesson25 from "../courses/csharp-fundamentals/07-modern-csharp/nullable-types.json";
import csharpLesson26 from "../courses/csharp-fundamentals/01-getting-started/methods.json";
import csharpLesson27 from "../courses/csharp-fundamentals/05-advanced-features/delegates-events.json";
import csharpLesson28 from "../courses/csharp-fundamentals/05-advanced-features/extension-methods.json";

import webApiLesson1 from "../courses/aspnet-core-web-api/01-getting-started/creating-project.json";
import webApiLesson2 from "../courses/aspnet-core-web-api/01-getting-started/first-endpoint.json";
import webApiLesson3 from "../courses/aspnet-core-web-api/01-getting-started/project-structure.json";
import webApiLesson4 from "../courses/aspnet-core-web-api/01-getting-started/what-is-web-api.json";
import webApiLesson5 from "../courses/aspnet-core-web-api/02-controllers-routing/attribute-routing.json";
import webApiLesson6 from "../courses/aspnet-core-web-api/02-controllers-routing/route-constraints.json";
import webApiLesson7 from "../courses/aspnet-core-web-api/02-controllers-routing/routing-basics.json";
import webApiLesson8 from "../courses/aspnet-core-web-api/03-model-binding/from-body.json";
import webApiLesson9 from "../courses/aspnet-core-web-api/03-model-binding/from-query.json";
import webApiLesson10 from "../courses/aspnet-core-web-api/03-model-binding/model-binding-basics.json";
import webApiLesson11 from "../courses/aspnet-core-web-api/04-middleware/built-in-middleware.json";
import webApiLesson12 from "../courses/aspnet-core-web-api/04-middleware/custom-middleware.json";
import webApiLesson13 from "../courses/aspnet-core-web-api/04-middleware/middleware-basics.json";
import webApiLesson14 from "../courses/aspnet-core-web-api/05-dependency-injection/di-basics.json";
import webApiLesson15 from "../courses/aspnet-core-web-api/05-dependency-injection/injecting-services.json";
import webApiLesson16 from "../courses/aspnet-core-web-api/05-dependency-injection/service-lifetimes.json";
import webApiLesson17 from "../courses/aspnet-core-web-api/06-error-handling-validation/validation-basics.json";
import webApiLesson18 from "../courses/aspnet-core-web-api/06-error-handling-validation/problem-details.json";
import webApiLesson19 from "../courses/aspnet-core-web-api/06-error-handling-validation/global-error-handling.json";
import webApiLesson20 from "../courses/aspnet-core-web-api/07-authentication-basics/auth-overview.json";
import webApiLesson21 from "../courses/aspnet-core-web-api/07-authentication-basics/jwt-basics.json";
import webApiLesson22 from "../courses/aspnet-core-web-api/07-authentication-basics/authorization-policies.json";
import webApiLesson23 from "../courses/aspnet-core-web-api/08-logging-configuration/logging-basics.json";
import webApiLesson24 from "../courses/aspnet-core-web-api/08-logging-configuration/structured-logging.json";
import webApiLesson25 from "../courses/aspnet-core-web-api/08-logging-configuration/configuration-options.json";

import authLesson1 from "../courses/authentication-authorization/01-auth-basics/auth-overview.json";
import authLesson2 from "../courses/authentication-authorization/01-auth-basics/authentication-vs-authorization.json";
import authLesson3 from "../courses/authentication-authorization/01-auth-basics/cookie-auth.json";
import authLesson4 from "../courses/authentication-authorization/01-auth-basics/session-vs-token.json";
import authLesson5 from "../courses/authentication-authorization/02-jwt/creating-jwt.json";
import authLesson6 from "../courses/authentication-authorization/02-jwt/jwt-overview.json";
import authLesson7 from "../courses/authentication-authorization/02-jwt/react-integration.json";
import authLesson8 from "../courses/authentication-authorization/02-jwt/validating-jwt.json";
import authLesson9 from "../courses/authentication-authorization/03-identity/identity-overview.json";
import authLesson10 from "../courses/authentication-authorization/03-identity/roles-authorization.json";
import authLesson11 from "../courses/authentication-authorization/03-identity/setup-identity.json";
import authLesson12 from "../courses/authentication-authorization/04-oauth/external-providers.json";
import authLesson13 from "../courses/authentication-authorization/04-oauth/oauth-overview.json";
import authLesson14 from "../courses/authentication-authorization/04-oauth/openid-connect.json";

import azureComputeHostingLesson1 from "../courses/azure/02-compute-and-app-hosting/compute-options-for-developers.json";
import azureComputeHostingLesson2 from "../courses/azure/02-compute-and-app-hosting/virtual-machines-overview.json";
import azureComputeHostingLesson3 from "../courses/azure/02-compute-and-app-hosting/app-service-overview.json";
import azureComputeHostingLesson4 from "../courses/azure/02-compute-and-app-hosting/app-service-app-configuration.json";
import azureComputeHostingLesson5 from "../courses/azure/02-compute-and-app-hosting/app-service-deployment.json";
import azureComputeHostingLesson6 from "../courses/azure/02-compute-and-app-hosting/app-service-deployment-slots.json";
import azureComputeHostingLesson7 from "../courses/azure/02-compute-and-app-hosting/app-service-scaling-and-autoscale.json";
import azureComputeHostingLesson8 from "../courses/azure/02-compute-and-app-hosting/app-service-vs-functions-vs-container-apps.json";
import azureComputeHostingLesson9 from "../courses/azure/02-compute-and-app-hosting/choosing-an-azure-hosting-model.json";
import azureIdentityLesson1 from "../courses/azure/07-identity-security-and-configuration/microsoft-entra-id-overview.json";
import azureIdentityLesson2 from "../courses/azure/07-identity-security-and-configuration/application-authentication-and-oauth.json";
import azureIdentityLesson3 from "../courses/azure/07-identity-security-and-configuration/app-registrations-and-service-principals.json";
import azureIdentityLesson4 from "../courses/azure/07-identity-security-and-configuration/rbac-overview.json";
import azureIdentityLesson5 from "../courses/azure/07-identity-security-and-configuration/azure-rbac-scopes-and-roles.json";
import azureIdentityLesson6 from "../courses/azure/07-identity-security-and-configuration/managed-identities.json";
import azureIdentityLesson7 from "../courses/azure/07-identity-security-and-configuration/managed-identity-vs-service-principals.json";
import azureIdentityLesson8 from "../courses/azure/07-identity-security-and-configuration/managed-identity-with-key-vault.json";
import azureIdentityLesson9 from "../courses/azure/07-identity-security-and-configuration/managed-identity-with-storage.json";
import azureIdentityLesson10 from "../courses/azure/07-identity-security-and-configuration/managed-identity-with-azure-sql.json";
import azureIdentityLesson11 from "../courses/azure/07-identity-security-and-configuration/azure-key-vault-overview.json";
import azureIdentityLesson12 from "../courses/azure/07-identity-security-and-configuration/key-vault-secrets-keys-and-certificates.json";
import azureIdentityLesson13 from "../courses/azure/07-identity-security-and-configuration/azure-app-configuration-overview.json";
import azureIdentityLesson14 from "../courses/azure/07-identity-security-and-configuration/app-configuration-feature-flags-and-labels.json";
import azureIdentityLesson15 from "../courses/azure/07-identity-security-and-configuration/key-vault-vs-app-configuration.json";
import azureIdentityLesson16 from "../courses/azure/07-identity-security-and-configuration/application-secrets-and-configuration-patterns.json";
import azureNetApiLesson1 from "../courses/azure/08-networking-and-api-platforms/virtual-networks-and-subnets.json";
import azureNetApiLesson2 from "../courses/azure/08-networking-and-api-platforms/private-ip-and-public-ip-addressing.json";
import azureNetApiLesson3 from "../courses/azure/08-networking-and-api-platforms/network-security-groups.json";
import azureNetApiLesson4 from "../courses/azure/08-networking-and-api-platforms/private-endpoints-and-private-link.json";
import azureNetApiLesson5 from "../courses/azure/08-networking-and-api-platforms/private-dns-and-private-endpoint-connectivity.json";
import azureNetApiLesson6 from "../courses/azure/08-networking-and-api-platforms/public-endpoints-vs-private-endpoints.json";
import azureNetApiLesson7 from "../courses/azure/08-networking-and-api-platforms/load-balancer-overview.json";
import azureNetApiLesson8 from "../courses/azure/08-networking-and-api-platforms/application-gateway-overview.json";
import azureNetApiLesson9 from "../courses/azure/08-networking-and-api-platforms/application-gateway-waf-and-routing.json";
import azureNetApiLesson10 from "../courses/azure/08-networking-and-api-platforms/azure-front-door-overview.json";
import azureNetApiLesson11 from "../courses/azure/08-networking-and-api-platforms/front-door-vs-application-gateway-vs-load-balancer.json";
import azureNetApiLesson12 from "../courses/azure/08-networking-and-api-platforms/api-management-overview.json";
import azureNetApiLesson13 from "../courses/azure/08-networking-and-api-platforms/api-management-apis-products-and-subscriptions.json";
import azureNetApiLesson14 from "../courses/azure/08-networking-and-api-platforms/api-management-policies.json";
import azureNetApiLesson15 from "../courses/azure/08-networking-and-api-platforms/api-management-authentication-and-security.json";
import azureNetApiLesson16 from "../courses/azure/08-networking-and-api-platforms/api-management-versioning-and-revisions.json";
import azureNetApiLesson17 from "../courses/azure/08-networking-and-api-platforms/vpn-and-hybrid-connectivity-for-developers.json";

import azureMessagingLesson1 from "../courses/azure/09-messaging-and-event-driven-architecture/messaging-and-event-driven-architecture.json";
import azureMessagingLesson2 from "../courses/azure/09-messaging-and-event-driven-architecture/azure-service-bus-overview.json";
import azureMessagingLesson3 from "../courses/azure/09-messaging-and-event-driven-architecture/service-bus-queues.json";
import azureMessagingLesson4 from "../courses/azure/09-messaging-and-event-driven-architecture/service-bus-topics-and-subscriptions.json";
import azureMessagingLesson5 from "../courses/azure/09-messaging-and-event-driven-architecture/service-bus-dead-lettering-and-retries.json";
import azureMessagingLesson6 from "../courses/azure/09-messaging-and-event-driven-architecture/service-bus-sessions-and-message-processing.json";
import azureMessagingLesson7 from "../courses/azure/09-messaging-and-event-driven-architecture/service-bus-from-azure-functions.json";
import azureMessagingLesson8 from "../courses/azure/09-messaging-and-event-driven-architecture/azure-event-grid-overview.json";
import azureMessagingLesson9 from "../courses/azure/09-messaging-and-event-driven-architecture/event-grid-topics-events-and-event-subscriptions.json";
import azureMessagingLesson10 from "../courses/azure/09-messaging-and-event-driven-architecture/event-grid-with-azure-functions.json";
import azureMessagingLesson11 from "../courses/azure/09-messaging-and-event-driven-architecture/azure-event-hubs-overview.json";
import azureMessagingLesson12 from "../courses/azure/09-messaging-and-event-driven-architecture/event-hubs-partitions-and-consumer-groups.json";
import azureMessagingLesson13 from "../courses/azure/09-messaging-and-event-driven-architecture/event-hubs-stream-processing.json";
import azureMessagingLesson14 from "../courses/azure/09-messaging-and-event-driven-architecture/service-bus-vs-event-grid-vs-event-hubs.json";
import azureMessagingLesson15 from "../courses/azure/09-messaging-and-event-driven-architecture/messaging-reliability-idempotency-and-retries.json";
import azureMessagingLesson16 from "../courses/azure/09-messaging-and-event-driven-architecture/event-driven-application-patterns.json";

import azureObservabilityLesson1 from "../courses/azure/10-observability-and-application-monitoring/observability-logging-metrics-and-tracing.json";
import azureObservabilityLesson2 from "../courses/azure/10-observability-and-application-monitoring/azure-monitor-overview.json";
import azureObservabilityLesson3 from "../courses/azure/10-observability-and-application-monitoring/application-insights-overview.json";
import azureObservabilityLesson4 from "../courses/azure/10-observability-and-application-monitoring/application-insights-instrumentation.json";
import azureObservabilityLesson5 from "../courses/azure/10-observability-and-application-monitoring/application-insights-requests-dependencies-and-failures.json";
import azureObservabilityLesson6 from "../courses/azure/10-observability-and-application-monitoring/distributed-tracing-and-open-telemetry.json";
import azureObservabilityLesson7 from "../courses/azure/10-observability-and-application-monitoring/log-analytics-workspaces.json";
import azureObservabilityLesson8 from "../courses/azure/10-observability-and-application-monitoring/kusto-query-language-for-developers.json";
import azureObservabilityLesson9 from "../courses/azure/10-observability-and-application-monitoring/azure-monitor-logs-and-kql.json";
import azureObservabilityLesson10 from "../courses/azure/10-observability-and-application-monitoring/metrics-alerts-and-action-groups.json";
import azureObservabilityLesson11 from "../courses/azure/10-observability-and-application-monitoring/application-insights-vs-azure-monitor-vs-log-analytics.json";
import azureObservabilityLesson12 from "../courses/azure/10-observability-and-application-monitoring/monitoring-functions-and-app-service.json";
import azureObservabilityLesson13 from "../courses/azure/10-observability-and-application-monitoring/monitoring-containers-and-aks.json";
import azureObservabilityLesson14 from "../courses/azure/10-observability-and-application-monitoring/application-health-diagnostics.json";

import azureDevFoundationLesson1 from "../courses/azure/01-azure-developer-foundations/what-is-azure.json";
import azureDevFoundationLesson2 from "../courses/azure/01-azure-developer-foundations/azure-resource-hierarchy.json";
import azureDevFoundationLesson3 from "../courses/azure/01-azure-developer-foundations/subscriptions-resource-groups-resources.json";
import azureDevFoundationLesson4 from "../courses/azure/01-azure-developer-foundations/azure-portal-and-cloud-shell.json";
import azureDevFoundationLesson5 from "../courses/azure/01-azure-developer-foundations/azure-regions-availability-zones.json";
import azureDevFoundationLesson6 from "../courses/azure/01-azure-developer-foundations/azure-resource-manager.json";
import azureDevFoundationLesson7 from "../courses/azure/01-azure-developer-foundations/azure-cli-developer-tooling.json";
import azureDevFoundationLesson8 from "../courses/azure/01-azure-developer-foundations/azure-cloud-shell.json";
import azureDevFoundationLesson9 from "../courses/azure/01-azure-developer-foundations/azure-developer-workflows.json";

import azureStorageDataLesson1 from "../courses/azure/05-storage-and-data-services/azure-storage-overview.json";
import azureStorageDataLesson2 from "../courses/azure/05-storage-and-data-services/blob-storage-basics.json";
import azureStorageDataLesson3 from "../courses/azure/05-storage-and-data-services/blob-containers-objects-and-metadata.json";
import azureStorageDataLesson4 from "../courses/azure/05-storage-and-data-services/blob-storage-access-tiers-and-lifecycle.json";
import azureStorageDataLesson5 from "../courses/azure/05-storage-and-data-services/blob-sas-and-user-delegation-sas.json";
import azureStorageDataLesson6 from "../courses/azure/05-storage-and-data-services/blob-storage-from-applications.json";
import azureStorageDataLesson7 from "../courses/azure/05-storage-and-data-services/azure-files.json";
import azureStorageDataLesson8 from "../courses/azure/05-storage-and-data-services/storage-queues.json";
import azureStorageDataLesson9 from "../courses/azure/05-storage-and-data-services/table-storage.json";
import azureStorageDataLesson10 from "../courses/azure/05-storage-and-data-services/managed-disks-and-application-storage.json";
import azureStorageDataLesson11 from "../courses/azure/05-storage-and-data-services/storage-security-and-encryption.json";
import azureStorageDataLesson12 from "../courses/azure/05-storage-and-data-services/storage-redundancy-and-replication.json";
import azureStorageDataLesson13 from "../courses/azure/05-storage-and-data-services/storage-private-endpoints.json";

import azureDbCacheLesson1 from "../courses/azure/06-databases-and-caching/azure-sql-database-overview.json";
import azureDbCacheLesson2 from "../courses/azure/06-databases-and-caching/azure-sql-database-connectivity.json";
import azureDbCacheLesson3 from "../courses/azure/06-databases-and-caching/azure-sql-authentication-and-authorization.json";
import azureDbCacheLesson4 from "../courses/azure/06-databases-and-caching/managed-identity-with-azure-sql.json";
import azureDbCacheLesson5 from "../courses/azure/06-databases-and-caching/azure-sql-query-performance-and-scaling.json";
import azureDbCacheLesson6 from "../courses/azure/06-databases-and-caching/azure-sql-backup-high-availability-and-resilience.json";
import azureDbCacheLesson7 from "../courses/azure/06-databases-and-caching/cosmos-db-overview.json";
import azureDbCacheLesson8 from "../courses/azure/06-databases-and-caching/cosmos-db-data-modeling.json";
import azureDbCacheLesson9 from "../courses/azure/06-databases-and-caching/cosmos-db-partition-keys.json";
import azureDbCacheLesson10 from "../courses/azure/06-databases-and-caching/cosmos-db-request-units-and-performance.json";
import azureDbCacheLesson11 from "../courses/azure/06-databases-and-caching/cosmos-db-consistency-and-distribution.json";
import azureDbCacheLesson12 from "../courses/azure/06-databases-and-caching/cosmos-db-sdk-and-developer-patterns.json";
import azureDbCacheLesson13 from "../courses/azure/06-databases-and-caching/azure-sql-vs-cosmos-db.json";
import azureDbCacheLesson14 from "../courses/azure/06-databases-and-caching/azure-cache-for-redis-overview.json";
import azureDbCacheLesson15 from "../courses/azure/06-databases-and-caching/redis-caching-patterns.json";
import azureDbCacheLesson16 from "../courses/azure/06-databases-and-caching/database-migration-and-data-movement.json";

import awsFundamentalsLesson1 from "../courses/aws/01-aws-fundamentals-cloud-concepts/what-is-cloud-computing.json";
import awsFundamentalsLesson2 from "../courses/aws/01-aws-fundamentals-cloud-concepts/aws-global-infrastructure.json";
import awsFundamentalsLesson3 from "../courses/aws/01-aws-fundamentals-cloud-concepts/aws-management-tools.json";
import awsFundamentalsLesson4 from "../courses/aws/01-aws-fundamentals-cloud-concepts/aws-well-architected-framework.json";
import awsIamLesson1 from "../courses/aws/02-identity-access-governance/iam-fundamentals.json";
import awsIamLesson2 from "../courses/aws/02-identity-access-governance/iam-policies-permissions.json";
import awsIamLesson3 from "../courses/aws/02-identity-access-governance/aws-organizations.json";
import awsIamLesson4 from "../courses/aws/02-identity-access-governance/governance-cost-management.json";
import awsComputeLesson1 from "../courses/aws/03-compute-services/ec2-fundamentals.json";
import awsComputeLesson2 from "../courses/aws/03-compute-services/ec2-instances-storage.json";
import awsComputeLesson3 from "../courses/aws/03-compute-services/ec2-auto-scaling.json";
import awsComputeLesson4 from "../courses/aws/03-compute-services/other-compute-services.json";
import awsNetworkingLesson1 from "../courses/aws/04-networking/amazon-vpc.json";
import awsNetworkingLesson2 from "../courses/aws/04-networking/vpc-connectivity.json";
import awsNetworkingLesson3 from "../courses/aws/04-networking/route53-dns.json";
import awsNetworkingLesson4 from "../courses/aws/04-networking/cloudfront-cdn.json";
import awsStorageLesson1 from "../courses/aws/05-storage-services/amazon-s3-basics.json";
import awsStorageLesson2 from "../courses/aws/05-storage-services/s3-advanced-features.json";
import awsStorageLesson3 from "../courses/aws/05-storage-services/block-file-storage.json";
import awsStorageLesson4 from "../courses/aws/05-storage-services/backup-archiving.json";

import awsLesson6_1 from "../courses/aws/06-databases/amazon-rds.json";
import awsLesson6_2 from "../courses/aws/06-databases/amazon-aurora.json";
import awsLesson6_3 from "../courses/aws/06-databases/dynamodb-nosql.json";
import awsLesson6_4 from "../courses/aws/06-databases/other-database-services.json";
import awsLesson7_1 from "../courses/aws/07-load-balancing-application-integration/elastic-load-balancing.json";
import awsLesson7_2 from "../courses/aws/07-load-balancing-application-integration/amazon-sqs.json";
import awsLesson7_3 from "../courses/aws/07-load-balancing-application-integration/amazon-sns-eventbridge.json";
import awsLesson7_4 from "../courses/aws/07-load-balancing-application-integration/amazon-mq.json";
import awsLesson8_1 from "../courses/aws/08-serverless/aws-lambda.json";
import awsLesson8_2 from "../courses/aws/08-serverless/api-gateway.json";
import awsLesson8_3 from "../courses/aws/08-serverless/step-functions.json";
import awsLesson8_4 from "../courses/aws/08-serverless/serverless-architecture-patterns.json";
import awsLesson9_1 from "../courses/aws/09-containers-kubernetes/docker-ecr.json";
import awsLesson9_2 from "../courses/aws/09-containers-kubernetes/amazon-ecs.json";
import awsLesson9_3 from "../courses/aws/09-containers-kubernetes/amazon-eks.json";
import awsLesson9_4 from "../courses/aws/09-containers-kubernetes/app-runner.json";
import awsLesson10_1 from "../courses/aws/10-devops-cicd/aws-code-tools.json";
import awsLesson10_2 from "../courses/aws/10-devops-cicd/cloudformation-iac.json";
import awsLesson10_3 from "../courses/aws/10-devops-cicd/aws-cdk.json";
import awsLesson10_4 from "../courses/aws/10-devops-cicd/modern-devops-practices.json";
import awsLesson11_1 from "../courses/aws/11-monitoring-logging-observability/amazon-cloudwatch.json";
import awsLesson11_2 from "../courses/aws/11-monitoring-logging-observability/aws-cloudtrail.json";
import awsLesson11_3 from "../courses/aws/11-monitoring-logging-observability/aws-x-ray.json";
import awsLesson11_4 from "../courses/aws/11-monitoring-logging-observability/observability-architecture.json";
import awsLesson12_1 from "../courses/aws/12-security-services/aws-kms-secrets-manager.json";
import awsLesson12_2 from "../courses/aws/12-security-services/systems-manager.json";
import awsLesson12_3 from "../courses/aws/12-security-services/waf-shield.json";
import awsLesson12_4 from "../courses/aws/12-security-services/threat-detection-compliance.json";
import awsLesson13_1 from "../courses/aws/13-analytics-big-data/amazon-redshift.json";
import awsLesson13_2 from "../courses/aws/13-analytics-big-data/aws-glue-etl.json";
import awsLesson13_3 from "../courses/aws/13-analytics-big-data/athena-emr.json";
import awsLesson13_4 from "../courses/aws/13-analytics-big-data/opensearch-quicksight.json";
import awsLesson14_1 from "../courses/aws/14-ai-machine-learning/amazon-bedrock.json";
import awsLesson14_2 from "../courses/aws/14-ai-machine-learning/amazon-sagemaker.json";
import awsLesson14_3 from "../courses/aws/14-ai-machine-learning/aws-ai-services.json";
import awsLesson14_4 from "../courses/aws/14-ai-machine-learning/generative-ai-architecture.json";
import awsLesson15_1 from "../courses/aws/15-developer-tools-application-services/aws-sdk-appconfig.json";
import awsLesson15_2 from "../courses/aws/15-developer-tools-application-services/email-communication.json";
import awsLesson15_3 from "../courses/aws/15-developer-tools-application-services/api-integration.json";
import awsLesson15_4 from "../courses/aws/15-developer-tools-application-services/web-mobile-amplify.json";

import cleanCodeLesson1 from "../courses/clean-code-csharp/01-solid-principles/single-responsibility.json";
import cleanCodeLesson2 from "../courses/clean-code-csharp/01-solid-principles/open-closed.json";
import cleanCodeLesson3 from "../courses/clean-code-csharp/01-solid-principles/liskov-substitution.json";
import cleanCodeLesson4 from "../courses/clean-code-csharp/01-solid-principles/interface-segregation.json";
import cleanCodeLesson5 from "../courses/clean-code-csharp/01-solid-principles/dependency-inversion.json";
import cleanCodeLesson6 from "../courses/clean-code-csharp/02-creational-patterns/singleton-pattern.json";
import cleanCodeLesson7 from "../courses/clean-code-csharp/02-creational-patterns/factory-pattern.json";
import cleanCodeLesson8 from "../courses/clean-code-csharp/02-creational-patterns/builder-pattern.json";
import cleanCodeLesson9 from "../courses/clean-code-csharp/02-creational-patterns/prototype-pattern.json";
import cleanCodeLesson10 from "../courses/clean-code-csharp/03-structural-patterns/adapter-pattern.json";
import cleanCodeLesson11 from "../courses/clean-code-csharp/03-structural-patterns/decorator-pattern.json";
import cleanCodeLesson12 from "../courses/clean-code-csharp/03-structural-patterns/facade-pattern.json";
import cleanCodeLesson13 from "../courses/clean-code-csharp/03-structural-patterns/composite-pattern.json";
import cleanCodeLesson14 from "../courses/clean-code-csharp/04-behavioral-patterns/observer-pattern.json";
import cleanCodeLesson15 from "../courses/clean-code-csharp/04-behavioral-patterns/strategy-pattern.json";
import cleanCodeLesson16 from "../courses/clean-code-csharp/04-behavioral-patterns/command-pattern.json";
import cleanCodeLesson17 from "../courses/clean-code-csharp/04-behavioral-patterns/chain-of-responsibility.json";
import cleanCodeLesson18 from "../courses/clean-code-csharp/05-clean-code-practices/meaningful-names.json";
import cleanCodeLesson19 from "../courses/clean-code-csharp/05-clean-code-practices/functions-methods.json";
import cleanCodeLesson20 from "../courses/clean-code-csharp/05-clean-code-practices/error-handling.json";
import cleanCodeLesson21 from "../courses/clean-code-csharp/05-clean-code-practices/code-organization.json";
import cleanCodeLesson22 from "../courses/clean-code-csharp/06-architecture-patterns/repository-pattern.json";
import cleanCodeLesson23 from "../courses/clean-code-csharp/06-architecture-patterns/clean-architecture.json";
import cleanCodeLesson24 from "../courses/clean-code-csharp/06-architecture-patterns/cqrs-pattern.json";
import cleanCodeLesson25 from "../courses/clean-code-csharp/06-architecture-patterns/dependency-injection.json";
import designLesson1 from "../courses/design-patterns/01-creational-patterns/singleton-pattern.json";
import designLesson2 from "../courses/design-patterns/01-creational-patterns/factory-pattern.json";
import designLesson3 from "../courses/design-patterns/01-creational-patterns/builder-pattern.json";
import designLesson4 from "../courses/design-patterns/01-creational-patterns/prototype-pattern.json";
import designLesson5 from "../courses/design-patterns/02-structural-patterns/adapter-pattern.json";
import designLesson6 from "../courses/design-patterns/02-structural-patterns/decorator-pattern.json";
import designLesson7 from "../courses/design-patterns/02-structural-patterns/facade-pattern.json";
import designLesson8 from "../courses/design-patterns/02-structural-patterns/proxy-pattern.json";
import designLesson9 from "../courses/design-patterns/03-behavioral-patterns/strategy-pattern.json";
import designLesson10 from "../courses/design-patterns/03-behavioral-patterns/observer-pattern.json";
import designLesson11 from "../courses/design-patterns/03-behavioral-patterns/command-pattern.json";
import designLesson12 from "../courses/design-patterns/03-behavioral-patterns/iterator-pattern.json";
import designLesson13 from "../courses/design-patterns/04-enterprise-patterns/cqrs-basics.json";
import designLesson14 from "../courses/design-patterns/04-enterprise-patterns/mediator-pattern.json";
import designLesson15 from "../courses/design-patterns/04-enterprise-patterns/repository-pattern.json";
import designLesson16 from "../courses/design-patterns/04-enterprise-patterns/unit-of-work.json";
import designLesson17 from "../courses/design-patterns/05-concurrency-patterns/producer-consumer-pattern.json";
import designLesson18 from "../courses/design-patterns/05-concurrency-patterns/reader-writer-locks.json";
import designLesson19 from "../courses/design-patterns/05-concurrency-patterns/thread-pool-pattern.json";
import designLesson20 from "../courses/design-patterns/05-concurrency-patterns/async-await-patterns.json";
import designLesson21 from "../courses/design-patterns/05-concurrency-patterns/barrier-pattern.json";
import designLesson22 from "../courses/design-patterns/06-architectural-patterns/mvc-pattern.json";
import designLesson23 from "../courses/design-patterns/06-architectural-patterns/mvvm-pattern.json";
import designLesson24 from "../courses/design-patterns/06-architectural-patterns/clean-architecture.json";
import designLesson25 from "../courses/design-patterns/06-architectural-patterns/onion-architecture.json";

import unitTestLesson1 from "../courses/unit-testing-dotnet/01-testing-fundamentals/why-unit-testing.json";
import unitTestLesson2 from "../courses/unit-testing-dotnet/01-testing-fundamentals/testing-pyramid.json";
import unitTestLesson3 from "../courses/unit-testing-dotnet/01-testing-fundamentals/arrange-act-assert.json";
import unitTestLesson4 from "../courses/unit-testing-dotnet/01-testing-fundamentals/test-naming-conventions.json";
import unitTestLesson5 from "../courses/unit-testing-dotnet/02-xunit-basics/getting-started-xunit.json";
import unitTestLesson6 from "../courses/unit-testing-dotnet/02-xunit-basics/assertions.json";
import unitTestLesson7 from "../courses/unit-testing-dotnet/02-xunit-basics/test-fixtures.json";
import unitTestLesson8 from "../courses/unit-testing-dotnet/02-xunit-basics/data-driven-tests.json";
import unitTestLesson9 from "../courses/unit-testing-dotnet/03-mocking-fakes/mocking-basics.json";
import unitTestLesson10 from "../courses/unit-testing-dotnet/03-mocking-fakes/moq-framework.json";
import unitTestLesson11 from "../courses/unit-testing-dotnet/03-mocking-fakes/stubs-fakes.json";
import unitTestLesson12 from "../courses/unit-testing-dotnet/03-mocking-fakes/verification.json";
import unitTestLesson13 from "../courses/unit-testing-dotnet/04-integration-testing/integration-testing-basics.json";
import unitTestLesson14 from "../courses/unit-testing-dotnet/04-integration-testing/test-server.json";
import unitTestLesson15 from "../courses/unit-testing-dotnet/04-integration-testing/database-testing.json";
import unitTestLesson16 from "../courses/unit-testing-dotnet/04-integration-testing/api-testing.json";
import unitTestLesson17 from "../courses/unit-testing-dotnet/05-tdd/tdd-intro.json";
import unitTestLesson18 from "../courses/unit-testing-dotnet/05-tdd/red-green-refactor.json";
import unitTestLesson19 from "../courses/unit-testing-dotnet/05-tdd/tdd-patterns.json";
import unitTestLesson20 from "../courses/unit-testing-dotnet/05-tdd/tdd-aspnet-core.json";
import unitTestLesson21 from "../courses/unit-testing-dotnet/06-testing-patterns/test-data-builders.json";
import unitTestLesson22 from "../courses/unit-testing-dotnet/06-testing-patterns/assertion-frameworks.json";
import unitTestLesson23 from "../courses/unit-testing-dotnet/06-testing-patterns/flaky-tests.json";
import unitTestLesson24 from "../courses/unit-testing-dotnet/07-code-coverage/coverage-metrics.json";
import unitTestLesson25 from "../courses/unit-testing-dotnet/07-code-coverage/coverlet-collector.json";
import unitTestLesson26 from "../courses/unit-testing-dotnet/07-code-coverage/coverage-reporting.json";

import reactTestLesson1 from "../courses/react-testing/01-testing-fundamentals/why-test-react.json";
import reactTestLesson2 from "../courses/react-testing/01-testing-fundamentals/testing-types.json";
import reactTestLesson3 from "../courses/react-testing/01-testing-fundamentals/testing-principles.json";
import reactTestLesson4 from "../courses/react-testing/01-testing-fundamentals/test-structure.json";
import reactTestLesson5 from "../courses/react-testing/02-jest-basics/getting-started-jest.json";
import reactTestLesson6 from "../courses/react-testing/02-jest-basics/matchers-assertions.json";
import reactTestLesson7 from "../courses/react-testing/02-jest-basics/async-testing.json";
import reactTestLesson8 from "../courses/react-testing/02-jest-basics/mocking-jest.json";
import reactTestLesson9 from "../courses/react-testing/03-react-testing-library/rtl-intro.json";
import reactTestLesson10 from "../courses/react-testing/03-react-testing-library/queries.json";
import reactTestLesson11 from "../courses/react-testing/03-react-testing-library/user-events.json";
import reactTestLesson12 from "../courses/react-testing/03-react-testing-library/testing-hooks.json";
import reactTestLesson13 from "../courses/react-testing/04-component-testing/testing-forms.json";
import reactTestLesson14 from "../courses/react-testing/04-component-testing/testing-routing.json";
import reactTestLesson15 from "../courses/react-testing/04-component-testing/testing-context.json";
import reactTestLesson16 from "../courses/react-testing/04-component-testing/testing-api-calls.json";
import reactTestLesson17 from "../courses/react-testing/05-e2e-testing/cypress-intro.json";
import reactTestLesson18 from "../courses/react-testing/05-e2e-testing/writing-e2e-tests.json";
import reactTestLesson19 from "../courses/react-testing/05-e2e-testing/cypress-commands.json";
import reactTestLesson20 from "../courses/react-testing/05-e2e-testing/best-practices.json";
import reactTestLesson21 from "../courses/react-testing/06-advanced-testing-patterns/mock-service-worker.json";
import reactTestLesson22 from "../courses/react-testing/06-advanced-testing-patterns/render-optimization.json";
import reactTestLesson23 from "../courses/react-testing/06-advanced-testing-patterns/visual-regression.json";
import reactTestLesson24 from "../courses/react-testing/07-testing-react-query/testing-mutations.json";
import reactTestLesson25 from "../courses/react-testing/07-testing-react-query/testing-cache-invalidation.json";

import oopLesson1 from "../courses/oops-concepts/01-oop-fundamentals/what-is-oop.json";
import oopLesson2 from "../courses/oops-concepts/01-oop-fundamentals/classes-objects.json";
import oopLesson3 from "../courses/oops-concepts/01-oop-fundamentals/constructors.json";
import oopLesson4 from "../courses/oops-concepts/01-oop-fundamentals/access-modifiers.json";
import oopLesson5 from "../courses/oops-concepts/02-encapsulation-data-hiding/encapsulation-basics.json";
import oopLesson6 from "../courses/oops-concepts/02-encapsulation-data-hiding/properties.json";
import oopLesson7 from "../courses/oops-concepts/02-encapsulation-data-hiding/auto-properties.json";
import oopLesson8 from "../courses/oops-concepts/02-encapsulation-data-hiding/read-only-fields.json";
import oopLesson9 from "../courses/oops-concepts/03-inheritance/inheritance-basics.json";
import oopLesson10 from "../courses/oops-concepts/03-inheritance/method-overriding.json";
import oopLesson11 from "../courses/oops-concepts/03-inheritance/sealed-classes.json";
import oopLesson12 from "../courses/oops-concepts/03-inheritance/inheritance-hierarchies.json";
import oopLesson13 from "../courses/oops-concepts/04-polymorphism/polymorphism-basics.json";
import oopLesson14 from "../courses/oops-concepts/04-polymorphism/compile-time-polymorphism.json";
import oopLesson15 from "../courses/oops-concepts/04-polymorphism/runtime-polymorphism.json";
import oopLesson16 from "../courses/oops-concepts/04-polymorphism/operator-overloading.json";
import oopLesson17 from "../courses/oops-concepts/05-abstraction/abstraction-basics.json";
import oopLesson18 from "../courses/oops-concepts/05-abstraction/abstract-classes.json";
import oopLesson19 from "../courses/oops-concepts/05-abstraction/abstract-vs-interface.json";
import oopLesson20 from "../courses/oops-concepts/05-abstraction/real-world-abstraction.json";
import oopLesson21 from "../courses/oops-concepts/06-interfaces-abstract-classes/interface-basics.json";
import oopLesson22 from "../courses/oops-concepts/06-interfaces-abstract-classes/multiple-interfaces.json";
import oopLesson23 from "../courses/oops-concepts/06-interfaces-abstract-classes/default-interface-methods.json";
import oopLesson24 from "../courses/oops-concepts/06-interfaces-abstract-classes/explicit-interface-implementation.json";
import oopLesson25 from "../courses/oops-concepts/07-design-principles/solid-principles.json";
import oopLesson26 from "../courses/oops-concepts/07-design-principles/dry-principle.json";

import iqLessonB01 from "../interview-qa/01-beginner-questions/beginner-q1.json";
import iqLessonB02 from "../interview-qa/01-beginner-questions/beginner-q2.json";
import iqLessonB03 from "../interview-qa/01-beginner-questions/beginner-q3.json";
import iqLessonB04 from "../interview-qa/01-beginner-questions/beginner-q4.json";
import iqLessonB05 from "../interview-qa/01-beginner-questions/beginner-q5.json";
import iqLessonB06 from "../interview-qa/01-beginner-questions/beginner-q6.json";
import iqLessonB07 from "../interview-qa/01-beginner-questions/beginner-q7.json";
import iqLessonB08 from "../interview-qa/01-beginner-questions/beginner-q8.json";
import iqLessonB09 from "../interview-qa/01-beginner-questions/beginner-q9.json";
import iqLessonB10 from "../interview-qa/01-beginner-questions/beginner-q10.json";
import iqLessonB11 from "../interview-qa/01-beginner-questions/beginner-q11.json";
import iqLessonB12 from "../interview-qa/01-beginner-questions/beginner-q12.json";
import iqLessonB13 from "../interview-qa/01-beginner-questions/beginner-q13.json";
import iqLessonB14 from "../interview-qa/01-beginner-questions/beginner-q14.json";
import iqLessonB15 from "../interview-qa/01-beginner-questions/beginner-q15.json";
import iqLessonB16 from "../interview-qa/01-beginner-questions/beginner-q16.json";
import iqLessonB17 from "../interview-qa/01-beginner-questions/beginner-q17.json";
import iqLessonB18 from "../interview-qa/01-beginner-questions/beginner-q18.json";
import iqLessonB19 from "../interview-qa/01-beginner-questions/beginner-q19.json";
import iqLessonB20 from "../interview-qa/01-beginner-questions/beginner-q20.json";
import iqLessonB21 from "../interview-qa/01-beginner-questions/beginner-q21.json";
import iqLessonAspnetB01 from "../interview-qa/01-beginner-questions/aspnet-b01.json";
import iqLessonAspnetB02 from "../interview-qa/01-beginner-questions/aspnet-b02.json";
import iqLessonCsharpB01 from "../interview-qa/01-beginner-questions/csharp-b01.json";
import iqLessonCsharpB02 from "../interview-qa/01-beginner-questions/csharp-b02.json";
import iqLessonJsB01 from "../interview-qa/01-beginner-questions/js-b01.json";
import iqLessonJsB02 from "../interview-qa/01-beginner-questions/js-b02.json";
import iqLessonOopB01 from "../interview-qa/01-beginner-questions/oop-b01.json";
import iqLessonReactB01 from "../interview-qa/01-beginner-questions/react-b01.json";
import iqLessonReactB02 from "../interview-qa/01-beginner-questions/react-b02.json";
import iqLessonSqlB01 from "../interview-qa/01-beginner-questions/sql-b01.json";
import iqLessonSqlB02 from "../interview-qa/01-beginner-questions/sql-b02.json";
import iqLessonSqlB03 from "../interview-qa/01-beginner-questions/sql-b03.json";
import iqLessonBoxingUnboxing from "../interview-qa/01-beginner-questions/boxing-unboxing.json";
import iqLessonClrCtsCls from "../interview-qa/01-beginner-questions/clr-cts-cls.json";
import iqLessonCsharpProperties from "../interview-qa/01-beginner-questions/csharp-properties.json";
import iqLessonDelegatesEvents from "../interview-qa/01-beginner-questions/delegates-events.json";
import iqLessonJsxBasics from "../interview-qa/01-beginner-questions/jsx-basics.json";
import iqLessonNormalization from "../interview-qa/01-beginner-questions/normalization.json";
import iqLessonPromisesJs from "../interview-qa/01-beginner-questions/promises-js.json";
import iqLessonReactKeys from "../interview-qa/01-beginner-questions/react-keys.json";
import iqLessonStoredProceduresVsFunctions from "../interview-qa/01-beginner-questions/stored-procedures-vs-functions.json";
import iqLessonViewbagViewdataTempdata from "../interview-qa/01-beginner-questions/viewbag-viewdata-tempdata.json";
import iqLessonI01 from "../interview-qa/02-intermediate-questions/intermediate-q1.json";
import iqLessonI02 from "../interview-qa/02-intermediate-questions/intermediate-q2.json";
import iqLessonI03 from "../interview-qa/02-intermediate-questions/intermediate-q3.json";
import iqLessonI04 from "../interview-qa/02-intermediate-questions/intermediate-q4.json";
import iqLessonI05 from "../interview-qa/02-intermediate-questions/intermediate-q5.json";
import iqLessonAspnetI01 from "../interview-qa/02-intermediate-questions/aspnet-i01.json";
import iqLessonAspnetI02 from "../interview-qa/02-intermediate-questions/aspnet-i02.json";
import iqLessonCsharpI01 from "../interview-qa/02-intermediate-questions/csharp-i01.json";
import iqLessonCsharpI02 from "../interview-qa/02-intermediate-questions/csharp-i02.json";
import iqLessonCsharpI03 from "../interview-qa/02-intermediate-questions/csharp-i03.json";
import iqLessonCsharpI04 from "../interview-qa/02-intermediate-questions/csharp-i04.json";
import iqLessonCsharpI05 from "../interview-qa/02-intermediate-questions/csharp-i05.json";
import iqLessonCsharpI06 from "../interview-qa/02-intermediate-questions/csharp-i06.json";
import iqLessonGenI01 from "../interview-qa/02-intermediate-questions/gen-i01.json";
import iqLessonJsI01 from "../interview-qa/02-intermediate-questions/js-i01.json";
import iqLessonJsI02 from "../interview-qa/02-intermediate-questions/js-i02.json";
import iqLessonJsI03 from "../interview-qa/02-intermediate-questions/js-i03.json";
import iqLessonJsI04 from "../interview-qa/02-intermediate-questions/js-i04.json";
import iqLessonJsI05 from "../interview-qa/02-intermediate-questions/js-i05.json";
import iqLessonOopI01 from "../interview-qa/02-intermediate-questions/oop-i01.json";
import iqLessonOopI02 from "../interview-qa/02-intermediate-questions/oop-i02.json";
import iqLessonReactI01 from "../interview-qa/02-intermediate-questions/react-i01.json";
import iqLessonReactI02 from "../interview-qa/02-intermediate-questions/react-i02.json";
import iqLessonReactI03 from "../interview-qa/02-intermediate-questions/react-i03.json";
import iqLessonSqlI01 from "../interview-qa/02-intermediate-questions/sql-i01.json";
import iqLessonSqlI02 from "../interview-qa/02-intermediate-questions/sql-i02.json";
import iqLessonSqlI03 from "../interview-qa/02-intermediate-questions/sql-i03.json";
import iqLessonAspnetFilters from "../interview-qa/02-intermediate-questions/aspnet-filters.json";
import iqLessonCodeFirstDbFirst from "../interview-qa/02-intermediate-questions/code-first-db-first.json";
import iqLessonControlledComponents from "../interview-qa/02-intermediate-questions/controlled-components.json";
import iqLessonDotnetVersions from "../interview-qa/02-intermediate-questions/dotnet-versions.json";
import iqLessonGenericsCsharp from "../interview-qa/02-intermediate-questions/generics-csharp.json";
import iqLessonLazyEagerLoading from "../interview-qa/02-intermediate-questions/lazy-eager-loading.json";
import iqLessonMicroservicesBasics from "../interview-qa/02-intermediate-questions/microservices-basics.json";
import iqLessonMvcLifecycle from "../interview-qa/02-intermediate-questions/mvc-lifecycle.json";
import iqLessonOauthJwt from "../interview-qa/02-intermediate-questions/oauth-jwt.json";
import iqLessonRepositoryPattern from "../interview-qa/02-intermediate-questions/repository-pattern.json";
import iqLessonSolidPrinciples from "../interview-qa/02-intermediate-questions/solid-principles.json";
import iqLessonA01 from "../interview-qa/03-advanced-questions/advanced-q1.json";
import iqLessonA02 from "../interview-qa/03-advanced-questions/advanced-q2.json";
import iqLessonA03 from "../interview-qa/03-advanced-questions/advanced-q3.json";
import iqLessonA04 from "../interview-qa/03-advanced-questions/advanced-q4.json";
import iqLessonA05 from "../interview-qa/03-advanced-questions/advanced-q5.json";
import iqLessonGcGenerations from "../interview-qa/03-advanced-questions/gc-generations.json";
import iqLessonCsharpA01 from "../interview-qa/03-advanced-questions/csharp-a01.json";
import iqLessonCsharpA02 from "../interview-qa/03-advanced-questions/csharp-a02.json";
import iqLessonCsharpA03 from "../interview-qa/03-advanced-questions/csharp-a03.json";
import iqLessonJsA01 from "../interview-qa/03-advanced-questions/js-a01.json";
import iqLessonJsA02 from "../interview-qa/03-advanced-questions/js-a02.json";
import iqLessonOopA01 from "../interview-qa/03-advanced-questions/oop-a01.json";
import iqLessonReactA01 from "../interview-qa/03-advanced-questions/react-a01.json";
import iqLessonSqlA01 from "../interview-qa/03-advanced-questions/sql-a01.json";
import iqLessonSqlA02 from "../interview-qa/03-advanced-questions/sql-a02.json";
import iqLessonS01 from "../interview-qa/04-scenario-based/scenario-q1.json";
import iqLessonS02 from "../interview-qa/04-scenario-based/scenario-q2.json";
import iqLessonS03 from "../interview-qa/04-scenario-based/scenario-q3.json";
import iqLessonBehB01 from "../interview-qa/04-scenario-based/beh-b01.json";
import iqLessonSD01 from "../interview-qa/05-system-design/system-q1.json";
import iqLessonSD02 from "../interview-qa/05-system-design/system-q2.json";
import iqLessonSystemQ11 from "../interview-qa/05-system-design/system-q11.json";
import iqLessonSystemQ12 from "../interview-qa/05-system-design/system-q12.json";
import iqLessonSystemQ13 from "../interview-qa/05-system-design/system-q13.json";
import iqLessonSystemQ14 from "../interview-qa/05-system-design/system-q14.json";
import iqLessonSystemQ15 from "../interview-qa/05-system-design/system-q15.json";
import iqLessonR01 from "../interview-qa/06-rapid-fire/rapid-q1.json";
import iqLessonR02 from "../interview-qa/06-rapid-fire/rapid-q2.json";
import iqLessonR03 from "../interview-qa/06-rapid-fire/rapid-q3.json";
import iqLessonT01 from "../interview-qa/07-interview-traps/trap-q1.json";
import iqLessonT02 from "../interview-qa/07-interview-traps/trap-q2.json";

import fsLesson1 from "../courses/fullstack-security/01-cors-configuration/understanding-cors.json";
import fsLesson2 from "../courses/fullstack-security/01-cors-configuration/cors-in-aspnet-core.json";
import fsLesson3 from "../courses/fullstack-security/01-cors-configuration/cors-with-react.json";
import fsLesson4 from "../courses/fullstack-security/01-cors-configuration/cors-best-practices.json";
import fsLesson5 from "../courses/fullstack-security/02-jwt-authentication/jwt-basics.json";
import fsLesson6 from "../courses/fullstack-security/02-jwt-authentication/jwt-storage-options.json";
import fsLesson7 from "../courses/fullstack-security/03-xss-csrf-protection/understanding-xss-csrf.json";
import fsLesson8 from "../courses/fullstack-security/03-xss-csrf-protection/xss-prevention-techniques.json";
import fsLesson9 from "../courses/fullstack-security/03-xss-csrf-protection/csrf-protection-aspnet.json";
import fsLesson10 from "../courses/fullstack-security/03-xss-csrf-protection/securing-react-apps.json";
import fsLesson11 from "../courses/fullstack-security/04-api-security-rate-limiting/api-security-fundamentals.json";
import fsLesson12 from "../courses/fullstack-security/04-api-security-rate-limiting/rate-limiting-in-aspnet.json";
import fsLesson13 from "../courses/fullstack-security/04-api-security-rate-limiting/implementing-api-keys.json";
import fsLesson14 from "../courses/fullstack-security/04-api-security-rate-limiting/logging-and-monitoring.json";
import fsLesson15 from "../courses/fullstack-security/05-secure-api-design/api-design-principles.json";
import fsLesson16 from "../courses/fullstack-security/05-secure-api-design/input-validation.json";
import fsLesson17 from "../courses/fullstack-security/05-secure-api-design/output-encoding.json";
import fsLesson18 from "../courses/fullstack-security/06-dependency-security/dependency-scanning.json";
import fsLesson19 from "../courses/fullstack-security/06-dependency-security/nuget-security.json";
import fsLesson20 from "../courses/fullstack-security/06-dependency-security/npm-security.json";
import fsLesson21 from "../courses/fullstack-security/07-environment-secrets/environment-configuration.json";
import fsLesson22 from "../courses/fullstack-security/07-environment-secrets/secrets-management.json";
import fsLesson23 from "../courses/fullstack-security/07-environment-secrets/credential-handling.json";
import fsLesson24 from "../courses/fullstack-security/08-security-testing/security-testing-fundamentals.json";
import fsLesson25 from "../courses/fullstack-security/08-security-testing/penetration-testing-basics.json";

import csLesson1 from "../cheatsheet/csharp/cheatsheet.json";
import csLesson2 from "../cheatsheet/sql-server/cheatsheet.json";
import csLesson3 from "../cheatsheet/react/cheatsheet.json";
import csLesson4 from "../cheatsheet/redux/cheatsheet.json";
import csLesson5 from "../cheatsheet/apollo/cheatsheet.json";
import csLesson6 from "../cheatsheet/graphql/cheatsheet.json";
import csLesson7 from "../cheatsheet/docker-compose/cheatsheet.json";
import csLesson8 from "../cheatsheet/javascript/cheatsheet.json";
import csLesson9 from "../cheatsheet/typescript/cheatsheet.json";
import csLesson10 from "../cheatsheet/react-router/cheatsheet.json";
import csLesson11 from '../cheatsheet/aws/cheatsheet.json';
import csLesson12 from '../cheatsheet/azure/cheatsheet.json';

import problemLesson1 from "../problems/csharp/01-array-problems/3sum.json";
import problemLesson2 from "../problems/csharp/01-array-problems/best-time-to-buy-and-sell-stock.json";
import problemLesson3 from "../problems/csharp/01-array-problems/container-with-most-water.json";
import problemLesson4 from "../problems/csharp/01-array-problems/contains-duplicate.json";
import problemLesson5 from "../problems/csharp/01-array-problems/find-minimum-in-rotated-sorted-array.json";
import problemLesson6 from "../problems/csharp/01-array-problems/insert-interval.json";
import problemLesson7 from "../problems/csharp/01-array-problems/jump-game.json";
import problemLesson8 from "../problems/csharp/01-array-problems/longest-consecutive-sequence.json";
import problemLesson9 from "../problems/csharp/01-array-problems/majority-element.json";
import problemLesson10 from "../problems/csharp/01-array-problems/maximum-product-subarray.json";
import problemLesson11 from "../problems/csharp/01-array-problems/maximum-subarray.json";
import problemLesson12 from "../problems/csharp/01-array-problems/merge-intervals.json";
import problemLesson13 from "../problems/csharp/01-array-problems/minimum-size-subarray-sum.json";
import problemLesson14 from "../problems/csharp/01-array-problems/move-zeroes.json";
import problemLesson15 from "../problems/csharp/01-array-problems/product-of-array-except-self.json";
import problemLesson16 from "../problems/csharp/01-array-problems/rotate-array.json";
import problemLesson17 from "../problems/csharp/01-array-problems/search-in-rotated-sorted-array.json";
import problemLesson18 from "../problems/csharp/01-array-problems/set-matrix-zeroes.json";
import problemLesson19 from "../problems/csharp/01-array-problems/sort-colors.json";
import problemLesson20 from "../problems/csharp/01-array-problems/spiral-matrix.json";
import problemLesson21 from "../problems/csharp/01-array-problems/subarray-sum-equals-k.json";
import problemLesson22 from "../problems/csharp/01-array-problems/trapping-rain-water.json";
import problemLesson23 from "../problems/csharp/01-array-problems/two-sum.json";
import problemLesson24 from "../problems/csharp/02-string-problems/add-strings.json";
import problemLesson25 from "../problems/csharp/02-string-problems/count-and-say.json";
import problemLesson26 from "../problems/csharp/02-string-problems/decode-ways.json";
import problemLesson27 from "../problems/csharp/02-string-problems/first-unique-char.json";
import problemLesson28 from "../problems/csharp/02-string-problems/group-anagrams.json";
import problemLesson29 from "../problems/csharp/02-string-problems/implement-strstr.json";
import problemLesson30 from "../problems/csharp/02-string-problems/isomorphic-strings.json";
import problemLesson31 from "../problems/csharp/02-string-problems/longest-common-prefix.json";
import problemLesson32 from "../problems/csharp/02-string-problems/longest-palindromic-substring.json";
import problemLesson33 from "../problems/csharp/02-string-problems/longest-repeating-char-replacement.json";
import problemLesson34 from "../problems/csharp/02-string-problems/longest-substring-k-distinct.json";
import problemLesson35 from "../problems/csharp/02-string-problems/longest-substring-two-distinct.json";
import problemLesson36 from "../problems/csharp/02-string-problems/longest-substring.json";
import problemLesson37 from "../problems/csharp/02-string-problems/multiply-strings.json";
import problemLesson38 from "../problems/csharp/02-string-problems/palindromic-substrings.json";
import problemLesson39 from "../problems/csharp/02-string-problems/ransom-note.json";
import problemLesson40 from "../problems/csharp/02-string-problems/reverse-string.json";
import problemLesson41 from "../problems/csharp/02-string-problems/reverse-words.json";
import problemLesson42 from "../problems/csharp/02-string-problems/simplify-path.json";
import problemLesson43 from "../problems/csharp/02-string-problems/string-compression.json";
import problemLesson44 from "../problems/csharp/02-string-problems/valid-anagram.json";
import problemLesson45 from "../problems/csharp/02-string-problems/valid-palindrome.json";
import problemLesson46 from "../problems/csharp/02-string-problems/word-pattern.json";
import problemLesson47 from "../problems/csharp/03-linked-list-problems/intersection-of-two-linked-lists.json";
import problemLesson48 from "../problems/csharp/03-linked-list-problems/linked-list-cycle.json";
import problemLesson49 from "../problems/csharp/03-linked-list-problems/merge-two-sorted-lists.json";
import problemLesson50 from "../problems/csharp/03-linked-list-problems/middle-of-linked-list.json";
import problemLesson51 from "../problems/csharp/03-linked-list-problems/odd-even-linked-list.json";
import problemLesson52 from "../problems/csharp/03-linked-list-problems/palindrome-linked-list.json";
import problemLesson53 from "../problems/csharp/03-linked-list-problems/remove-duplicates-from-sorted-list.json";
import problemLesson54 from "../problems/csharp/03-linked-list-problems/remove-linked-list-elements.json";
import problemLesson55 from "../problems/csharp/03-linked-list-problems/remove-nth-node-from-end.json";
import problemLesson56 from "../problems/csharp/03-linked-list-problems/reverse-linked-list.json";
import problemLesson57 from "../problems/csharp/03-linked-list-problems/swap-nodes-in-pairs.json";
import problemLesson58 from "../problems/csharp/04-tree-graph-problems/alien-dictionary.json";
import problemLesson59 from "../problems/csharp/04-tree-graph-problems/all-nodes-distance-k-in-binary-tree.json";
import problemLesson60 from "../problems/csharp/04-tree-graph-problems/binary-tree-level-order-traversal.json";
import problemLesson61 from "../problems/csharp/04-tree-graph-problems/binary-tree-maximum-path-sum.json";
import problemLesson62 from "../problems/csharp/04-tree-graph-problems/binary-tree-right-side-view.json";
import problemLesson63 from "../problems/csharp/04-tree-graph-problems/binary-tree-zigzag-level-order-traversal.json";
import problemLesson64 from "../problems/csharp/04-tree-graph-problems/clone-graph.json";
import problemLesson65 from "../problems/csharp/04-tree-graph-problems/construct-binary-tree-from-preorder-and-inorder.json";
import problemLesson66 from "../problems/csharp/04-tree-graph-problems/count-complete-tree-nodes.json";
import problemLesson67 from "../problems/csharp/04-tree-graph-problems/course-schedule.json";
import problemLesson68 from "../problems/csharp/04-tree-graph-problems/graph-valid-tree.json";
import problemLesson69 from "../problems/csharp/04-tree-graph-problems/lowest-common-ancestor-of-bst.json";
import problemLesson70 from "../problems/csharp/04-tree-graph-problems/maximum-depth-of-binary-tree.json";
import problemLesson71 from "../problems/csharp/04-tree-graph-problems/number-of-connected-components.json";
import problemLesson72 from "../problems/csharp/04-tree-graph-problems/number-of-islands.json";
import problemLesson73 from "../problems/csharp/04-tree-graph-problems/pacific-atlantic-water-flow.json";
import problemLesson74 from "../problems/csharp/04-tree-graph-problems/path-sum-ii.json";
import problemLesson75 from "../problems/csharp/04-tree-graph-problems/path-sum-iii.json";
import problemLesson76 from "../problems/csharp/04-tree-graph-problems/path-sum.json";
import problemLesson77 from "../problems/csharp/04-tree-graph-problems/recover-binary-search-tree.json";
import problemLesson78 from "../problems/csharp/04-tree-graph-problems/same-tree.json";
import problemLesson79 from "../problems/csharp/04-tree-graph-problems/surrounded-regions.json";
import problemLesson80 from "../problems/csharp/04-tree-graph-problems/symmetric-tree.json";
import problemLesson81 from "../problems/csharp/04-tree-graph-problems/validate-binary-search-tree.json";
import problemLesson82 from "../problems/csharp/04-tree-graph-problems/word-ladder.json";
import problemLesson83 from "../problems/csharp/05-dynamic-programming-problems/0-1-knapsack.json";
import problemLesson84 from "../problems/csharp/05-dynamic-programming-problems/best-time-to-buy-and-sell-stock-ii.json";
import problemLesson85 from "../problems/csharp/05-dynamic-programming-problems/best-time-to-buy-and-sell-stock.json";
import problemLesson86 from "../problems/csharp/05-dynamic-programming-problems/burst-balloons.json";
import problemLesson87 from "../problems/csharp/05-dynamic-programming-problems/climbing-stairs.json";
import problemLesson88 from "../problems/csharp/05-dynamic-programming-problems/coin-change.json";
import problemLesson89 from "../problems/csharp/05-dynamic-programming-problems/combination-sum-iv.json";
import problemLesson90 from "../problems/csharp/05-dynamic-programming-problems/counting-bits.json";
import problemLesson91 from "../problems/csharp/05-dynamic-programming-problems/decode-ways.json";
import problemLesson92 from "../problems/csharp/05-dynamic-programming-problems/edit-distance.json";
import problemLesson93 from "../problems/csharp/05-dynamic-programming-problems/fibonacci-number.json";
import problemLesson94 from "../problems/csharp/05-dynamic-programming-problems/house-robber-ii.json";
import problemLesson95 from "../problems/csharp/05-dynamic-programming-problems/house-robber.json";
import problemLesson96 from "../problems/csharp/05-dynamic-programming-problems/longest-common-subsequence.json";
import problemLesson97 from "../problems/csharp/05-dynamic-programming-problems/longest-increasing-subsequence.json";
import problemLesson98 from "../problems/csharp/05-dynamic-programming-problems/maximum-product-subarray.json";
import problemLesson99 from "../problems/csharp/05-dynamic-programming-problems/maximum-subarray.json";
import problemLesson100 from "../problems/csharp/05-dynamic-programming-problems/minimum-path-sum.json";
import problemLesson101 from "../problems/csharp/05-dynamic-programming-problems/palindrome-partitioning.json";
import problemLesson102 from "../problems/csharp/05-dynamic-programming-problems/regular-expression-matching.json";
import problemLesson103 from "../problems/csharp/05-dynamic-programming-problems/unique-paths-ii.json";
import problemLesson104 from "../problems/csharp/05-dynamic-programming-problems/unique-paths.json";
import problemLesson105 from "../problems/csharp/05-dynamic-programming-problems/word-break.json";
import problemLesson106 from "../problems/csharp/06-sorting-searching-problems/binary-search.json";
import problemLesson107 from "../problems/csharp/06-sorting-searching-problems/powx-n.json";

import awsLesson1 from "../courses/aws/16-identity-for-applications/01-amazon-cognito-user-pools.json";
import awsLesson2 from "../courses/aws/16-identity-for-applications/02-cognito-identity-pools.json";
import awsLesson3 from "../courses/aws/16-identity-for-applications/03-application-authentication.json";
import awsLesson4 from "../courses/aws/16-identity-for-applications/04-application-authentication-architecture.json";
import awsLesson5 from "../courses/aws/17-migration-hybrid-cloud/01-migration-services.json";
import awsLesson6 from "../courses/aws/17-migration-hybrid-cloud/02-6-rs-migration-strategy.json";
import awsLesson7 from "../courses/aws/17-migration-hybrid-cloud/03-hybrid-cloud-options.json";
import awsLesson8 from "../courses/aws/17-migration-hybrid-cloud/04-datasync-snow-family.json";
import awsLesson9 from "../courses/aws/18-infrastructure-automation/01-cloudformation-advanced.json";
import awsLesson10 from "../courses/aws/18-infrastructure-automation/02-aws-cdk-advanced.json";
import awsLesson11 from "../courses/aws/18-infrastructure-automation/03-terraform-aws.json";
import awsLesson12 from "../courses/aws/18-infrastructure-automation/04-iac-best-practices.json";
import awsLesson13 from "../courses/aws/19-high-availability-disaster-recovery/01-high-availability-patterns.json";
import awsLesson14 from "../courses/aws/19-high-availability-disaster-recovery/02-disaster-recovery-strategies.json";
import awsLesson15 from "../courses/aws/19-high-availability-disaster-recovery/03-multi-region-architecture.json";
import awsLesson16 from "../courses/aws/19-high-availability-disaster-recovery/04-rto-rpo-planning.json";
import awsLesson17 from "../courses/aws/20-aws-architecture-design-patterns/01-architecture-patterns.json";
import awsLesson18 from "../courses/aws/20-aws-architecture-design-patterns/02-design-principles.json";
import awsLesson19 from "../courses/aws/20-aws-architecture-design-patterns/03-well-architected-deep-dive.json";
import awsLesson20 from "../courses/aws/20-aws-architecture-design-patterns/04-aws-solutions-architect-patterns.json";

import azureFuncLesson1 from "../courses/azure/03-serverless-and-azure-functions/azure-functions-overview.json";
import azureFuncLesson2 from "../courses/azure/03-serverless-and-azure-functions/functions-programming-models.json";
import azureFuncLesson3 from "../courses/azure/03-serverless-and-azure-functions/functions-triggers.json";
import azureFuncLesson4 from "../courses/azure/03-serverless-and-azure-functions/functions-bindings.json";
import azureFuncLesson5 from "../courses/azure/03-serverless-and-azure-functions/functions-http-apis.json";
import azureFuncLesson6 from "../courses/azure/03-serverless-and-azure-functions/functions-storage-queues-and-timers.json";
import azureFuncLesson7 from "../courses/azure/03-serverless-and-azure-functions/functions-event-driven-development.json";
import azureFuncLesson8 from "../courses/azure/03-serverless-and-azure-functions/functions-dependency-injection-and-configuration.json";
import azureFuncLesson9 from "../courses/azure/03-serverless-and-azure-functions/functions-scaling-and-hosting-plans.json";
import azureFuncLesson10 from "../courses/azure/03-serverless-and-azure-functions/functions-durable-workflows.json";
import azureFuncLesson11 from "../courses/azure/03-serverless-and-azure-functions/functions-local-development-and-debugging.json";
import azureContLesson1 from "../courses/azure/04-containers-and-container-platforms/containers-and-container-images.json";
import azureContLesson2 from "../courses/azure/04-containers-and-container-platforms/dockerfiles-and-container-development.json";
import azureContLesson3 from "../courses/azure/04-containers-and-container-platforms/azure-container-registry-overview.json";
import azureContLesson4 from "../courses/azure/04-containers-and-container-platforms/acr-images-tags-and-repositories.json";
import azureContLesson5 from "../courses/azure/04-containers-and-container-platforms/acr-authentication-and-managed-identity.json";
import azureContLesson6 from "../courses/azure/04-containers-and-container-platforms/container-apps-overview.json";
import azureContLesson7 from "../courses/azure/04-containers-and-container-platforms/container-apps-revisions-and-ingress.json";
import azureContLesson8 from "../courses/azure/04-containers-and-container-platforms/container-apps-scaling-and-dapr.json";
import azureContLesson9 from "../courses/azure/04-containers-and-container-platforms/container-apps-vs-aks.json";
import azureContLesson10 from "../courses/azure/04-containers-and-container-platforms/aks-overview-for-developers.json";
import azureContLesson11 from "../courses/azure/04-containers-and-container-platforms/aks-deployments-services-and-ingress.json";
import azureContLesson12 from "../courses/azure/04-containers-and-container-platforms/aks-configuration-and-secrets.json";
import azureContLesson13 from "../courses/azure/04-containers-and-container-platforms/aks-scaling-and-operations.json";
import azureContLesson14 from "../courses/azure/04-containers-and-container-platforms/aks-vs-container-apps-vs-app-service.json";
import azureDeployLesson1 from "../courses/azure/11-application-deployment-and-devops/application-deployment-strategies.json";
import azureDeployLesson2 from "../courses/azure/11-application-deployment-and-devops/deployment-slots-and-slot-swapping.json";
import azureDeployLesson3 from "../courses/azure/11-application-deployment-and-devops/blue-green-canary-and-rolling-deployments.json";
import azureDeployLesson4 from "../courses/azure/11-application-deployment-and-devops/azure-devops-overview.json";
import azureDeployLesson5 from "../courses/azure/11-application-deployment-and-devops/azure-repos-and-azure-pipelines.json";
import azureDeployLesson6 from "../courses/azure/11-application-deployment-and-devops/azure-pipelines-ci-cd.json";
import azureDeployLesson7 from "../courses/azure/11-application-deployment-and-devops/github-actions-for-azure.json";
import azureDeployLesson8 from "../courses/azure/11-application-deployment-and-devops/github-actions-azure-authentication.json";
import azureDeployLesson9 from "../courses/azure/11-application-deployment-and-devops/ci-cd-for-app-service.json";
import azureDeployLesson10 from "../courses/azure/11-application-deployment-and-devops/ci-cd-for-functions.json";
import azureDeployLesson11 from "../courses/azure/11-application-deployment-and-devops/ci-cd-for-containers-and-acr.json";
import azureDeployLesson12 from "../courses/azure/11-application-deployment-and-devops/deployment-secrets-and-environment-configuration.json";
import azureDeployLesson13 from "../courses/azure/11-application-deployment-and-devops/release-validation-and-rollback.json";
import azureBicepLesson1 from "../courses/azure/12-infrastructure-as-code-and-automation/infrastructure-as-code-concepts.json";
import azureBicepLesson2 from "../courses/azure/12-infrastructure-as-code-and-automation/bicep-overview.json";
import azureBicepLesson3 from "../courses/azure/12-infrastructure-as-code-and-automation/bicep-resources-and-properties.json";
import azureBicepLesson4 from "../courses/azure/12-infrastructure-as-code-and-automation/bicep-parameters-variables-and-outputs.json";
import azureBicepLesson5 from "../courses/azure/12-infrastructure-as-code-and-automation/bicep-modules-and-reusable-infrastructure.json";
import azureBicepLesson6 from "../courses/azure/12-infrastructure-as-code-and-automation/bicep-dependencies-and-resource-references.json";
import azureBicepLesson7 from "../courses/azure/12-infrastructure-as-code-and-automation/bicep-deployment-and-validation.json";
import azureBicepLesson8 from "../courses/azure/12-infrastructure-as-code-and-automation/bicep-with-managed-identities-and-rbac.json";
import azureBicepLesson9 from "../courses/azure/12-infrastructure-as-code-and-automation/bicep-with-app-service-functions-and-storage.json";
import azureBicepLesson10 from "../courses/azure/12-infrastructure-as-code-and-automation/bicep-with-networking-and-private-endpoints.json";
import azureBicepLesson11 from "../courses/azure/12-infrastructure-as-code-and-automation/bicep-with-databases-and-messaging.json";
import azureBicepLesson12 from "../courses/azure/12-infrastructure-as-code-and-automation/infrastructure-automation-with-ci-cd.json";
import azureAiServiceLesson1 from "../courses/azure/13-ai-services-for-azure-developers/azure-ai-services-overview.json";
import azureAiServiceLesson2 from "../courses/azure/13-ai-services-for-azure-developers/azure-ai-foundry-and-model-based-development.json";
import azureAiServiceLesson3 from "../courses/azure/13-ai-services-for-azure-developers/azure-openai-service-overview.json";
import azureAiServiceLesson4 from "../courses/azure/13-ai-services-for-azure-developers/azure-openai-chat-and-completions.json";
import azureAiServiceLesson5 from "../courses/azure/13-ai-services-for-azure-developers/azure-openai-embeddings-and-grounding.json";
import azureAiServiceLesson6 from "../courses/azure/13-ai-services-for-azure-developers/azure-ai-search-overview.json";
import azureAiServiceLesson7 from "../courses/azure/13-ai-services-for-azure-developers/ai-search-indexes-and-vector-search.json";
import azureAiServiceLesson8 from "../courses/azure/13-ai-services-for-azure-developers/azure-ai-services-vision-language-and-speech.json";
import azureAiServiceLesson9 from "../courses/azure/13-ai-services-for-azure-developers/securing-ai-services-with-managed-identity.json";
import azureAiServiceLesson10 from "../courses/azure/13-ai-services-for-azure-developers/integrating-ai-services-into-azure-applications.json";

import sqlProblemsLesson1 from "../problems/sql/01-sql-basics/01-select-all-employees.json";
import sqlProblemsLesson2 from "../problems/sql/01-sql-basics/02-filter-employees-by-department.json";
import sqlProblemsLesson3 from "../problems/sql/01-sql-basics/03-sort-products-by-price.json";
import sqlProblemsLesson4 from "../problems/sql/01-sql-basics/04-count-employees-per-department.json";
import sqlProblemsLesson5 from "../problems/sql/01-sql-basics/05-filter-groups-with-having.json";
import sqlProblemsLesson6 from "../problems/sql/01-sql-basics/06-inner-join-orders-customers.json";
import sqlProblemsLesson7 from "../problems/sql/01-sql-basics/07-left-join-customers-orders.json";
import sqlProblemsLesson8 from "../problems/sql/01-sql-basics/08-right-join-suppliers-products.json";
import sqlProblemsLesson9 from "../problems/sql/01-sql-basics/09-full-outer-join-employees-departments.json";
import sqlProblemsLesson10 from "../problems/sql/01-sql-basics/10-select-distinct-cities.json";
import sqlProblemsLesson11 from "../problems/sql/01-sql-basics/11-between-salary-range.json";
import sqlProblemsLesson12 from "../problems/sql/01-sql-basics/12-in-operator-departments.json";
import sqlProblemsLesson13 from "../problems/sql/01-sql-basics/13-like-pattern-matching.json";
import sqlProblemsLesson14 from "../problems/sql/01-sql-basics/14-aggregate-functions-basics.json";
import sqlProblemsLesson15 from "../problems/sql/01-sql-basics/15-null-handling-isnull.json";
import sqlProblemsLesson16 from "../problems/sql/01-sql-basics/16-string-concatenation.json";
import sqlProblemsLesson17 from "../problems/sql/01-sql-basics/17-date-functions-current-date.json";
import sqlProblemsLesson18 from "../problems/sql/01-sql-basics/18-union-order-customers-suppliers.json";
import sqlProblemsLesson19 from "../problems/sql/01-sql-basics/19-exists-department-employees.json";
import sqlProblemsLesson20 from "../problems/sql/01-sql-basics/20-top-n-per-group.json";
import sqlProblemsLesson21 from "../problems/sql/02-sql-intermediate/01-subquery-in-where-clause.json";
import sqlProblemsLesson22 from "../problems/sql/02-sql-intermediate/02-cte-department-salary-stats.json";
import sqlProblemsLesson23 from "../problems/sql/02-sql-intermediate/03-window-function-rank.json";
import sqlProblemsLesson24 from "../problems/sql/02-sql-intermediate/04-lead-lag-salary-comparison.json";
import sqlProblemsLesson25 from "../problems/sql/02-sql-intermediate/05-correlated-subquery-department-average.json";
import sqlProblemsLesson26 from "../problems/sql/02-sql-intermediate/06-cte-running-total-sales.json";
import sqlProblemsLesson27 from "../problems/sql/02-sql-intermediate/07-self-join-employee-manager.json";
import sqlProblemsLesson28 from "../problems/sql/02-sql-intermediate/08-intersect-common-products-orders.json";
import sqlProblemsLesson29 from "../problems/sql/02-sql-intermediate/09-except-products-never-ordered.json";
import sqlProblemsLesson30 from "../problems/sql/02-sql-intermediate/10-recursive-cte-employee-hierarchy.json";
import sqlProblemsLesson31 from "../problems/sql/02-sql-intermediate/11-multiple-joins-order-details.json";
import sqlProblemsLesson32 from "../problems/sql/02-sql-intermediate/12-all-operator-salary-check.json";
import sqlProblemsLesson33 from "../problems/sql/02-sql-intermediate/13-dense-rank-vs-rank.json";
import sqlProblemsLesson34 from "../problems/sql/02-sql-intermediate/14-string-functions-uppercase-email.json";
import sqlProblemsLesson35 from "../problems/sql/02-sql-intermediate/15-case-expression-salary-band.json";
import sqlProblemsLesson36 from "../problems/sql/02-sql-intermediate/16-cross-apply-product-categories.json";
import sqlProblemsLesson37 from "../problems/sql/02-sql-intermediate/17-union-all-combined-customer-orders.json";
import sqlProblemsLesson38 from "../problems/sql/02-sql-intermediate/18-row-number-duplicate-removal.json";
import sqlProblemsLesson39 from "../problems/sql/02-sql-intermediate/19-pivot-sales-by-quarter.json";
import sqlProblemsLesson40 from "../problems/sql/02-sql-intermediate/20-coalesce-display-preferred-name.json";
import sqlProblemsLesson41 from "../problems/sql/03-sql-advanced/01-stored-procedure-get-employees-by-dept.json";
import sqlProblemsLesson42 from "../problems/sql/03-sql-advanced/02-after-update-trigger-log-salary-change.json";
import sqlProblemsLesson43 from "../problems/sql/03-sql-advanced/03-create-nonclustered-index.json";
import sqlProblemsLesson44 from "../problems/sql/03-sql-advanced/04-transaction-with-rollback.json";
import sqlProblemsLesson45 from "../problems/sql/03-sql-advanced/05-isolation-level-serializable.json";
import sqlProblemsLesson46 from "../problems/sql/03-sql-advanced/06-try-catch-error-handling.json";
import sqlProblemsLesson47 from "../problems/sql/03-sql-advanced/07-dynamic-sql-search.json";
import sqlProblemsLesson48 from "../problems/sql/03-sql-advanced/08-clustered-columnstore-index.json";
import sqlProblemsLesson49 from "../problems/sql/03-sql-advanced/09-snapshot-isolation.json";
import sqlProblemsLesson50 from "../problems/sql/03-sql-advanced/10-instead-of-trigger-insert-view.json";

import systemDesignReactLesson1 from "../problems/system-design/react-system-design/scalable-react-state-architecture.json";
import systemDesignReactLesson2 from "../problems/system-design/react-system-design/react-micro-frontends.json";
import systemDesignReactLesson3 from "../problems/system-design/react-system-design/react-ssr-ssg-hybrid.json";
import systemDesignAspnetLesson1 from "../problems/system-design/aspnet-system-design/scalable-aspnet-api-design.json";
import systemDesignAspnetLesson2 from "../problems/system-design/aspnet-system-design/aspnet-microservices-communication.json";
import systemDesignAspnetLesson3 from "../problems/system-design/aspnet-system-design/aspnet-messaging-event-driven.json";
import systemDesignDevopsLesson1 from "../problems/system-design/devops-system-design/enterprise-cicd-pipeline-design.json";
import systemDesignDevopsLesson2 from "../problems/system-design/devops-system-design/kubernetes-multi-env-architecture.json";
import systemDesignDevopsLesson3 from "../problems/system-design/devops-system-design/observability-platform-design.json";


import dotnetLesson1 from "../courses/dotnet-nuget-packages/01-nuget-fundamentals/what-is-nuget.json";
import dotnetLesson2 from "../courses/dotnet-nuget-packages/01-nuget-fundamentals/installing-packages.json";
import dotnetLesson3 from "../courses/dotnet-nuget-packages/01-nuget-fundamentals/creating-packages.json";
import dotnetLesson4 from "../courses/dotnet-nuget-packages/01-nuget-fundamentals/nuget-config.json";
import dotnetLesson5 from "../courses/dotnet-nuget-packages/02-core-extensions/microsoft-extensions-options.json";
import dotnetLesson6 from "../courses/dotnet-nuget-packages/02-core-extensions/microsoft-extensions-logging.json";
import dotnetLesson7 from "../courses/dotnet-nuget-packages/02-core-extensions/microsoft-extensions-configuration.json";
import dotnetLesson8 from "../courses/dotnet-nuget-packages/02-core-extensions/microsoft-extensions-dependencyinjection.json";
import dotnetLesson9 from "../courses/dotnet-nuget-packages/03-aspnet-web/microsoft-aspnetcore-mvc.json";
import dotnetLesson10 from "../courses/dotnet-nuget-packages/03-aspnet-web/microsoft-aspnetcore-authentication.json";
import dotnetLesson11 from "../courses/dotnet-nuget-packages/03-aspnet-web/microsoft-aspnetcore-authorization.json";
import dotnetLesson12 from "../courses/dotnet-nuget-packages/03-aspnet-web/microsoft-aspnetcore-cors.json";
import dotnetLesson13 from "../courses/dotnet-nuget-packages/04-database-data-access/entity-framework-core.json";
import dotnetLesson14 from "../courses/dotnet-nuget-packages/04-database-data-access/dapper.json";
import dotnetLesson15 from "../courses/dotnet-nuget-packages/04-database-data-access/npgsql.json";
import dotnetLesson16 from "../courses/dotnet-nuget-packages/04-database-data-access/mysqlconnector.json";
import dotnetLesson17 from "../courses/dotnet-nuget-packages/04-database-data-access/sqlclient.json";
import dotnetLesson18 from "../courses/dotnet-nuget-packages/04-database-data-access/redis.json";
import dotnetLesson19 from "../courses/dotnet-nuget-packages/04-database-data-access/stackexchange-redis.json";
import dotnetLesson20 from "../courses/dotnet-nuget-packages/04-database-data-access/mongodb-driver.json";
import dotnetLesson21 from "../courses/dotnet-nuget-packages/05-serialization-mapping/system-text-json.json";
import dotnetLesson22 from "../courses/dotnet-nuget-packages/05-serialization-mapping/newtonsoft-json.json";
import dotnetLesson23 from "../courses/dotnet-nuget-packages/05-serialization-mapping/yamldotnet.json";
import dotnetLesson24 from "../courses/dotnet-nuget-packages/05-serialization-mapping/automapper.json";
import dotnetLesson25 from "../courses/dotnet-nuget-packages/05-serialization-mapping/mapster.json";
import dotnetLesson26 from "../courses/dotnet-nuget-packages/05-serialization-mapping/messagepack.json";
import dotnetLesson27 from "../courses/dotnet-nuget-packages/05-serialization-mapping/protobuf.json";
import dotnetLesson28 from "../courses/dotnet-nuget-packages/05-serialization-mapping/csvhelper.json";
import dotnetLesson29 from "../courses/dotnet-nuget-packages/06-messaging-events/masstransit.json";
import dotnetLesson30 from "../courses/dotnet-nuget-packages/06-messaging-events/rabbitmq-client.json";
import dotnetLesson31 from "../courses/dotnet-nuget-packages/06-messaging-events/rebus.json";
import dotnetLesson32 from "../courses/dotnet-nuget-packages/06-messaging-events/mediatr.json";
import dotnetLesson33 from "../courses/dotnet-nuget-packages/06-messaging-events/hangfire.json";
import dotnetLesson34 from "../courses/dotnet-nuget-packages/06-messaging-events/quartz.json";
import dotnetLesson35 from "../courses/dotnet-nuget-packages/06-messaging-events/cronos.json";
import dotnetLesson36 from "../courses/dotnet-nuget-packages/06-messaging-events/background-service.json";
import dotnetLesson37 from "../courses/dotnet-nuget-packages/cloud-integration/azure-storage-blobs.json";
import dotnetLesson38 from "../courses/dotnet-nuget-packages/cloud-integration/amazon-s3.json";
import dotnetLesson39 from "../courses/dotnet-nuget-packages/cloud-integration/azure-identity.json";
import dotnetLesson40 from "../courses/dotnet-nuget-packages/cloud-integration/azure-keyvault.json";
import dotnetLesson41 from "../courses/dotnet-nuget-packages/cloud-integration/aws-sdk-core.json";
import dotnetLesson42 from "../courses/dotnet-nuget-packages/cloud-integration/azure-servicebus.json";
import dotnetLesson43 from "../courses/dotnet-nuget-packages/cloud-integration/azure-event-hubs.json";
import dotnetLesson44 from "../courses/dotnet-nuget-packages/cloud-integration/minio.json";
import dotnetLesson45 from "../courses/dotnet-nuget-packages/api-documentation-swagger/swashbuckle.json";
import dotnetLesson46 from "../courses/dotnet-nuget-packages/api-documentation-swagger/nspec.json";
import dotnetLesson47 from "../courses/dotnet-nuget-packages/api-documentation-swagger/openapi-generator.json";
import dotnetLesson48 from "../courses/dotnet-nuget-packages/api-documentation-swagger/microsoft-openapi.json";
import dotnetLesson49 from "../courses/dotnet-nuget-packages/api-documentation-swagger/swashbuckle-aspnetcore.json";
import dotnetLesson50 from "../courses/dotnet-nuget-packages/advanced-patterns/system-threading-channels.json";
import dotnetLesson51 from "../courses/dotnet-nuget-packages/advanced-patterns/memorystream.json";
import dotnetLesson52 from "../courses/dotnet-nuget-packages/advanced-patterns/system-io-pipelines.json";
import dotnetLesson53 from "../courses/dotnet-nuget-packages/advanced-patterns/source-generators.json";
import dotnetLesson54 from "../courses/dotnet-nuget-packages/advanced-patterns/roslyn-analyzers.json";
import dotnetLesson55 from "../courses/dotnet-nuget-packages/advanced-patterns/spectre-console.json";
import dotnetLesson56 from "../courses/dotnet-nuget-packages/advanced-patterns/benchmark-dotnet.json";
import dotnetLesson57 from "../courses/dotnet-nuget-packages/advanced-patterns/system-text-json-source-gen.json";
import dotnetLesson701 from "../courses/dotnet-nuget-packages/07-testing-quality/xunit.json";
import dotnetLesson702 from "../courses/dotnet-nuget-packages/07-testing-quality/nunit.json";
import dotnetLesson703 from "../courses/dotnet-nuget-packages/07-testing-quality/mstest.json";
import dotnetLesson704 from "../courses/dotnet-nuget-packages/07-testing-quality/fluent-assertions.json";
import dotnetLesson705 from "../courses/dotnet-nuget-packages/07-testing-quality/moq.json";
import dotnetLesson706 from "../courses/dotnet-nuget-packages/07-testing-quality/nsubstitute.json";
import dotnetLesson707 from "../courses/dotnet-nuget-packages/07-testing-quality/autofixture.json";
import dotnetLesson708 from "../courses/dotnet-nuget-packages/07-testing-quality/bogus.json";
import dotnetLesson801 from "../courses/dotnet-nuget-packages/08-security-cryptography/bcrypt.json";
import dotnetLesson802 from "../courses/dotnet-nuget-packages/08-security-cryptography/bcrypt-net.json";
import dotnetLesson803 from "../courses/dotnet-nuget-packages/08-security-cryptography/data-protection.json";
import dotnetLesson804 from "../courses/dotnet-nuget-packages/08-security-cryptography/jwt.json";
import dotnetLesson805 from "../courses/dotnet-nuget-packages/08-security-cryptography/identity-model.json";
import dotnetLesson806 from "../courses/dotnet-nuget-packages/08-security-cryptography/sharpcompress.json";
import dotnetLesson807 from "../courses/dotnet-nuget-packages/08-security-cryptography/password-validator.json";
import dotnetLesson901 from "../courses/dotnet-nuget-packages/09-utilities-helpers/fluent-email.json";
import dotnetLesson902 from "../courses/dotnet-nuget-packages/09-utilities-helpers/mailkit.json";
import dotnetLesson903 from "../courses/dotnet-nuget-packages/09-utilities-helpers/sendgrid.json";
import dotnetLesson904 from "../courses/dotnet-nuget-packages/09-utilities-helpers/humanizer.json";
import dotnetLesson905 from "../courses/dotnet-nuget-packages/09-utilities-helpers/jsonpatch.json";
import dotnetLesson906 from "../courses/dotnet-nuget-packages/09-utilities-helpers/sharpcompress.json";
import dotnetLesson907 from "../courses/dotnet-nuget-packages/09-utilities-helpers/figgle.json";
import dotnetLesson908 from "../courses/dotnet-nuget-packages/09-utilities-helpers/more-linq.json";
import nugetLesson1 from "../courses/dotnet-nuget-packages/logging-monitoring/serilog.json";
import nugetLesson2 from "../courses/dotnet-nuget-packages/logging-monitoring/nlog.json";
import nugetLesson3 from "../courses/dotnet-nuget-packages/logging-monitoring/log4net.json";
import nugetLesson4 from "../courses/dotnet-nuget-packages/logging-monitoring/seq.json";
import nugetLesson5 from "../courses/dotnet-nuget-packages/logging-monitoring/elasticsearch.json";
import nugetLesson6 from "../courses/dotnet-nuget-packages/logging-monitoring/prometheus.json";
import nugetLesson7 from "../courses/dotnet-nuget-packages/logging-monitoring/application-insights.json";
import nugetLesson8 from "../courses/dotnet-nuget-packages/logging-monitoring/opentelemetry.json";
import nugetLesson9 from "../courses/dotnet-nuget-packages/validation-authorization/fluentvalidation.json";
import nugetLesson10 from "../courses/dotnet-nuget-packages/validation-authorization/dataannotations.json";
import nugetLesson11 from "../courses/dotnet-nuget-packages/validation-authorization/identityserver.json";
import nugetLesson12 from "../courses/dotnet-nuget-packages/validation-authorization/openiddict.json";
import nugetLesson13 from "../courses/dotnet-nuget-packages/validation-authorization/jwtbearer.json";
import nugetLesson14 from "../courses/dotnet-nuget-packages/validation-authorization/policy-server.json";
import nugetLesson15 from "../courses/dotnet-nuget-packages/http-clients-resilience/refit.json";
import nugetLesson16 from "../courses/dotnet-nuget-packages/http-clients-resilience/flurl.json";
import nugetLesson17 from "../courses/dotnet-nuget-packages/http-clients-resilience/restsharp.json";
import nugetLesson18 from "../courses/dotnet-nuget-packages/http-clients-resilience/polly.json";
import nugetLesson19 from "../courses/dotnet-nuget-packages/http-clients-resilience/polly-simmy.json";
import nugetLesson20 from "../courses/dotnet-nuget-packages/http-clients-resilience/httpclientfactory.json";

import yarnLesson1 from "../courses/yarn-npm-packages/01-package-managers/npm-basics.json";
import yarnLesson2 from "../courses/yarn-npm-packages/01-package-managers/yarn-classic.json";
import yarnLesson3 from "../courses/yarn-npm-packages/01-package-managers/yarn-berry.json";
import yarnLesson4 from "../courses/yarn-npm-packages/01-package-managers/pnpm.json";
import yarnLesson5 from "../courses/yarn-npm-packages/02-build-tools/webpack.json";
import yarnLesson6 from "../courses/yarn-npm-packages/02-build-tools/vite.json";
import yarnLesson7 from "../courses/yarn-npm-packages/02-build-tools/esbuild.json";
import yarnLesson8 from "../courses/yarn-npm-packages/02-build-tools/rollup.json";
import yarnLesson9 from "../courses/yarn-npm-packages/02-build-tools/parcel.json";
import yarnLesson10 from "../courses/yarn-npm-packages/03-testing-libraries/jest.json";
import yarnLesson11 from "../courses/yarn-npm-packages/03-testing-libraries/vitest.json";
import yarnLesson12 from "../courses/yarn-npm-packages/03-testing-libraries/react-testing-library.json";
import yarnLesson13 from "../courses/yarn-npm-packages/03-testing-libraries/cypress.json";
import yarnLesson14 from "../courses/yarn-npm-packages/03-testing-libraries/playwright.json";
import yarnLesson15 from "../courses/yarn-npm-packages/04-styling/tailwind-css.json";
import yarnLesson16 from "../courses/yarn-npm-packages/04-styling/sass.json";
import yarnLesson17 from "../courses/yarn-npm-packages/04-styling/css-modules.json";
import yarnLesson18 from "../courses/yarn-npm-packages/04-styling/styled-components.json";
import yarnLesson19 from "../courses/yarn-npm-packages/04-styling/emotion.json";
import yarnLesson20 from "../courses/yarn-npm-packages/04-styling/postcss.json";
import yarnLesson21 from "../courses/yarn-npm-packages/05-state-management/redux-toolkit.json";
import yarnLesson22 from "../courses/yarn-npm-packages/05-state-management/zustand.json";
import yarnLesson23 from "../courses/yarn-npm-packages/05-state-management/mobx.json";
import yarnLesson24 from "../courses/yarn-npm-packages/05-state-management/jotai.json";
import yarnLesson25 from "../courses/yarn-npm-packages/05-state-management/react-query.json";
import yarnLesson26 from "../courses/yarn-npm-packages/05-state-management/swr.json";
import yarnLesson27 from "../courses/yarn-npm-packages/06-routing/react-router.json";
import yarnLesson28 from "../courses/yarn-npm-packages/06-routing/vue-router.json";
import yarnLesson29 from "../courses/yarn-npm-packages/06-routing/angular-router.json";
import yarnLesson30 from "../courses/yarn-npm-packages/06-routing/reach-router.json";
import yarnLesson31 from "../courses/yarn-npm-packages/06-routing/tanstack-router.json";
import yarnLesson32 from "../courses/yarn-npm-packages/http-clients/axios.json";
import yarnLesson33 from "../courses/yarn-npm-packages/http-clients/fetch-api.json";
import yarnLesson34 from "../courses/yarn-npm-packages/http-clients/graphql-request.json";
import yarnLesson35 from "../courses/yarn-npm-packages/http-clients/apollo-client.json";
import yarnLesson36 from "../courses/yarn-npm-packages/http-clients/urql.json";
import yarnLesson37 from "../courses/yarn-npm-packages/http-clients/socket.io.json";
import yarnLesson38 from "../courses/yarn-npm-packages/testing/jest.json";
import yarnLesson39 from "../courses/yarn-npm-packages/testing/vitest.json";
import yarnLesson40 from "../courses/yarn-npm-packages/testing/react-testing-library.json";
import yarnLesson41 from "../courses/yarn-npm-packages/testing/cypress.json";
import yarnLesson42 from "../courses/yarn-npm-packages/testing/playwright.json";
import yarnLesson43 from "../courses/yarn-npm-packages/testing/testing-library.json";
import yarnLesson44 from "../courses/yarn-npm-packages/utilities/lodash.json";
import yarnLesson45 from "../courses/yarn-npm-packages/utilities/dayjs.json";
import yarnLesson46 from "../courses/yarn-npm-packages/utilities/zod.json";
import yarnLesson47 from "../courses/yarn-npm-packages/utilities/axios-retry.json";
import yarnLesson48 from "../courses/yarn-npm-packages/utilities/clsx.json";
import yarnLesson49 from "../courses/yarn-npm-packages/utilities/tailwind-merge.json";

const rawLessonsPart1: any[] = [
	sqlLesson1,
	sqlLesson2,
	sqlLesson3,
	sqlLesson4,
	sqlLesson5,
	sqlLesson6,
	sqlLesson7,
	sqlLesson8,
	sqlLesson9,
	sqlLesson10,
	sqlLesson11,
	sqlLesson12,
	sqlLesson13,
	sqlLesson14,
	sqlLesson15,
	sqlLesson16,
	sqlLesson17,
	sqlLesson18,
	sqlLesson19,
	sqlLesson20,
	sqlLesson21,
	sqlLesson22,
	sqlLesson23,
	sqlLesson24,
	sqlLesson25,
	sqlLesson26,
	sqlLesson27,
	sqlLesson28,
	sqlLesson29,
	sqlLesson30,
	sqlLesson31,
	sqlLesson32,
	sqlLesson33,
	sqlLesson34,
	sqlLesson35,
	sqlLesson36,
	sqlLesson37,
	sqlLesson38,
	sqlLesson39,
	sqlLesson40,
	sqlLesson41,
	sqlLesson42,
	sqlLesson43,
	sqlLesson44,
	sqlLesson45,
	sqlLesson46,
	sqlLesson47,
	sqlLesson48,
	sqlLesson49,
	sqlLesson50,
	sqlLesson51,
	sqlLesson52,
	sqlLesson53,
	sqlLesson54,
	sqlLesson55,
	sqlLesson56,
	sqlLesson57,
	sqlLesson58,
	sqlLesson59,
	sqlLesson60,
	sqlLesson61,
	sqlLesson62,
	sqlLesson63,
	sqlLesson64,
	sqlLesson65,
	sqlLesson66,
	sqlLesson67,
	sqlLesson68,
	sqlLesson69,
	sqlLesson70,
	sqlLesson71,
	sqlLesson72,
	sqlLesson73,
	sqlLesson74,
	sqlLesson75,
	sqlLesson76,
	sqlLesson77,
	sqlLesson78,
	sqlLesson79,
	sqlLesson80,
	sqlLesson81,
	sqlLesson82,
	sqlLesson83,
	sqlLesson84,
	sqlLesson85,
	sqlLesson86,
	sqlLesson87,
	sqlLesson88,
	sqlLesson89,
	sqlLesson90,
	sqlLesson91,
	sqlLesson92,
	sqlLesson93,
	sqlLesson94,
	sqlLesson95,
	sqlLesson96,
	sqlLesson97,
	sqlLesson98,
	sqlLesson99,
	sqlLesson100,
	sqlLesson101,
	sqlLesson102,
	sqlLesson103,
	sqlLesson104,
	sqlLesson105,
	sqlLesson106,
	sqlLesson107,
	sqlLesson108,
	sqlLesson109,
	sqlLesson110,
	sqlLesson111,
	sqlLesson112,
	sqlLesson113,
	sqlLesson114,
	sqlLesson115,
	sqlLesson116,
	sqlLesson117,
	sqlLesson118,
	sqlLesson119,
	sqlLesson120,
	sqlLesson121,
	sqlLesson122,
	sqlLesson123,
	sqlLesson124,
	sqlLesson125,
	sqlLesson126,
	sqlLesson127,
	sqlLesson128,
	sqlLesson129,
	sqlLesson130,
	sqlLesson131,
	sqlLesson132,
	sqlLesson133,
	sqlLesson134,
	sqlLesson135,
	sqlLesson136,
	sqlLesson137,
	sqlLesson138,
	sqlLesson139,
	sqlLesson140,
	sqlLesson141,
	sqlLesson142,
	sqlLesson143,
	sqlLesson144,
	sqlLesson145,
	sqlLesson146,
	sqlLesson147,
	sqlLesson148,
	sqlLesson149,
	sqlLesson150,
	sqlLesson151,
	sqlLesson152,
	sqlLesson153,
	sqlLesson154,
	sqlLesson155,
	sqlLesson156,
	sqlLesson157,
	sqlLesson158,
	sqlLesson159,
	sqlLesson160,
	lessonAspnetCore01gettingstartedwhatisaspnetcore,
	lessonAspnetCore01gettingstartedsettingupenvironment,
	lessonAspnetCore01gettingstartedcreatingfirstproject,
	lessonAspnetCore01gettingstartedunderstandingprojectstructure,
	lessonAspnetCore01gettingstartedrunninganddebugging,
	lessonAspnetCore02mvcfundamentalsmvcarchitecture,
	lessonAspnetCore02mvcfundamentalscontrollersandactions,
	lessonAspnetCore02mvcfundamentalsviewsandtemplates,
	lessonAspnetCore02mvcfundamentalsmodelsandviewdata,
	lessonAspnetCore02mvcfundamentalshandlinguserinput,
	lessonAspnetCore03routingurlsroutingbasics,
	lessonAspnetCore03routingurlsattributerouting,
	lessonAspnetCore03routingurlsrouteconstraints,
	lessonAspnetCore03routingurlsurlgeneration,
	lessonAspnetCore03routingurlsarearouting,
	lessonAspnetCore04modelbindingvalidationmodelbindingoverview,
	lessonAspnetCore04modelbindingvalidationbindingsources,
	lessonAspnetCore04modelbindingvalidationvalidationattributes,
	lessonAspnetCore04modelbindingvalidationcustomvalidation,
	lessonAspnetCore04modelbindingvalidationclientsidevalidation,
	lessonAspnetCore05razorviewsrazorsyntax,
	lessonAspnetCore05razorviewslayoutsandpartials,
	lessonAspnetCore05razorviewsviewcomponents,
	lessonAspnetCore05razorviewstaghelpers,
	lessonAspnetCore06dependencyinjectiondibasics,
	lessonAspnetCore06dependencyinjectionservicelifetimes,
	lessonAspnetCore06dependencyinjectionconstructorinjection,
	lessonAspnetCore06dependencyinjectionconfiguringservices,
	lessonAspnetCore06dependencyinjectionadvanceddipatterns,
	lessonAspnetCore07middlewarepipelinemiddlewareconcepts,
	lessonAspnetCore07middlewarepipelinebuiltinmiddleware,
	lessonAspnetCore07middlewarepipelinecustommiddleware,
	lessonAspnetCore07middlewarepipelineexceptionhandling,
	lessonAspnetCore07middlewarepipelinestaticfilesandcaching,
	lessonAspnetCore08entityframeworkcoreefcoreintroduction,
	lessonAspnetCore08entityframeworkcoredbcontextandmigrations,
	lessonAspnetCore08entityframeworkcorequeryingwithlinq,
	lessonAspnetCore08entityframeworkcorerelationshipsandconfigurations,
	lessonAspnetCore08entityframeworkcoreperformanceoptimization,
	lessonAspnetCore09authenticationauthorizationauthbasics,
	lessonAspnetCore09authenticationauthorizationidentitysetup,
	lessonAspnetCore09authenticationauthorizationjwttokens,
	lessonAspnetCore09authenticationauthorizationrolebasedaccess,
	lessonAspnetCore09authenticationauthorizationpolicybasedauthorization,
	lessonAspnetCore10webapirestrestprinciples,
	lessonAspnetCore10webapirestapicontrollers,
	lessonAspnetCore10webapiresthttpmethodsandstatuscodes,
	lessonAspnetCore10webapirestversioninganddocumentation,
	lessonAspnetCore10webapirestswaggerandopenapi,
	lessonAspnetCore11testingdebuggingtestingfundamentals,
	lessonAspnetCore11testingdebuggingunittestingcontrollers,
	lessonAspnetCore11testingdebuggingintegrationtesting,
	lessonAspnetCore11testingdebuggingdebuggingtechniques,
	lessonAspnetCore11testingdebuggingloggingandmonitoring,
	lessonAspnetCore12deploymentproductiondeploymentoptions,
	lessonAspnetCore12deploymentproductiondockercontainerization,
	lessonAspnetCore12deploymentproductionclouddeployment,
	lessonAspnetCore12deploymentproductionperformancetuning,
	lessonAspnetCore12deploymentproductionmonitoringandalerting,
	linqLesson1,
	linqLesson2,
	linqLesson3,
	linqLesson4,
	linqLesson5,
	linqLesson6,
	linqLesson7,
	linqLesson8,
	linqLesson9,
	linqLesson10,
	linqLesson11,
	linqLesson12,
	linqLesson13,
	linqLesson14,
	linqLesson15,
	linqLesson16,
	linqLesson17,
	linqLesson18,
	linqLesson19,
	linqLesson20,
	linqLesson21,
	linqLesson22,
	linqLesson23,
	linqLesson24,
	linqLesson25,
	linqLesson26,
	linqLesson27,
	linqLesson28,
	linqLesson29,
	linqLesson30,
	linqLesson31,
	linqLesson32,
	linqLesson33,
	linqLesson34,
	linqLesson35,
	linqLesson36,
	linqLesson37,
	linqLesson38,
	linqLesson39,
	linqLesson40,
	efLesson1,
	efLesson2,
	efLesson3,
	efLesson4,
	efLesson5,
	efLesson6,
	efLesson7,
	efLesson8,
	efLesson9,
	efLesson10,
	efLesson11,
	efLesson12,
	efLesson13,
	efLesson14,
	efLesson15,
	efLesson16,
	efLesson17,
	efLesson18,
	efLesson19,
	efLesson20,
	efLesson21,
	efLesson22,
	efLesson23,
	efLesson24,
	efLesson25,
	efLesson26,
	efLesson27,
	efLesson28,
	efLesson29,
	efLesson30,
	efLesson31,
	efLesson32,
	efLesson33,
	efLesson34,
	efLesson35,
	efLesson36,
	efLesson37,
	efLesson38,
	efLesson39,
	efLesson40,
	efLesson41,
	reactFundLesson1,
	reactFundLesson2,
	reactFundLesson3,
	reactFundLesson4,
	reactFundLesson5,
	reactFundLesson6,
	reactFundLesson7,
	reactFundLesson8,
	reactFundLesson9,
	reactFundLesson10,
	reactFundLesson11,
	reactFundLesson12,
	reactFundLesson13,
	reactFundLesson14,
	reactFundLesson15,
	reactFundLesson16,
	reactFundLesson17,
	reactFundLesson18,
	reactFundLesson19,
	reactFundLesson20,
	reactFundLesson21,
	reactFundLesson22,
	reactFundLesson23,
	reactFundLesson24,
	reactFundLesson25,
	reactFundLesson26,
	reactFundLesson27,
	reactFundLesson28,
	reactFundLesson29,
	reactFundLesson30,
	reactFundLesson31,
	reactFundLesson32,
	reactFundLesson33,
	reactFundLesson34,
	reactFundLesson35,
	reactFundLesson36,
	reactFundLesson37,
	reactAdvLesson1,
	reactAdvLesson2,
	reactAdvLesson3,
	reactAdvLesson4,
	reactAdvLesson5,
	reactAdvLesson6,
	reactAdvLesson7,
	reactAdvLesson8,
	reactAdvLesson9,
	reactAdvLesson10,
	reactAdvLesson11,
	reactAdvLesson12,
	reactAdvLesson13,
	reactAdvLesson14,
	reactAdvLesson15,
	reactAdvLesson16,
	reactAdvLesson17,
	reactAdvLesson18,
	reactAdvLesson19,
	reactAdvLesson20,
	reactAdvLesson21,
	reactAdvLesson22,
	reactAdvLesson23,
	reactAdvLesson24,
	reactAdvLesson25,
	reactAdvLesson26,
	reactAdvLesson27,
	reactAdvLesson28,
	reactAdvLesson29,
	reactAdvLesson30,
	reactAdvLesson31,
	reactAdvLesson32,
	reactAdvLesson33,
	reactAdvLesson34,
	reactAdvLesson35,
	reactAdvLesson36,
	reactAdvLesson37,
	tsrLesson1,
	tsrLesson2,
	tsrLesson3,
	tsrLesson4,
	tsrLesson5,
	tsrLesson6,
	tsrLesson7,
	tsrLesson8,
	tsrLesson9,
	tsrLesson10,
	tsrLesson11,
	tsrLesson12,
	tsrLesson13,
	tsrLesson14,
	tsrLesson15,
	tsrLesson16,
	tsrLesson17,
	tsrLesson18,
	tsrLesson19,
	tsrLesson20,
	tsrLesson21,
	tsrLesson22,
	tsrLesson23,
	tsrLesson24,
	tsrLesson25,
	tsrLesson26,
	tsrLesson27,
	tsrLesson28,
	tsrLesson29,
	tsrLesson30,
	tsrLesson31,
	tsrLesson32,
	tsrLesson33,
	tsrLesson34,
	tsrLesson35,
	tsrLesson36,
	reduxLesson1,
	reduxLesson2,
	reduxLesson3,
	reduxLesson4,
	reduxLesson5,
	reduxLesson6,
	reduxLesson7,
	reduxLesson8,
	reduxLesson9,
	reduxLesson10,
	reduxLesson11,
	reduxLesson12,
	reduxLesson13,
	reduxLesson14,
	reduxLesson15,
	reduxLesson16,
	reduxLesson17,
	reduxLesson18,
	reduxLesson19,
	reduxLesson20,
	reduxLesson21,
	reduxLesson22,
	reduxLesson23,
	reduxLesson24,
	reduxLesson25,
	reduxLesson26,
	reduxLesson27,
	reduxLesson28,
	reduxLesson29,
	reduxLesson30,
	reduxLesson31,
	reduxLesson32,
	rqLesson1,
	rqLesson2,
	rqLesson3,
	rqLesson4,
	rqLesson5,
	rqLesson6,
	rqLesson7,
	rqLesson8,
	rqLesson9,
	rqLesson10,
	rqLesson11,
	rqLesson12,
	rqLesson13,
	rqLesson14,
	rqLesson15,
	rqLesson16,
	rqLesson17,
	rqLesson18,
	rqLesson19,
	rqLesson20,
	rqLesson21,
	rqLesson22,
	rqLesson23,
	rqLesson24,
	rqLesson25,
	rqLesson26,
	rqLesson27,
	rqLesson28,
	rqLesson29,
	rqLesson30,
	rqLesson31,
	rqLesson32,
	rqLesson33,
	rqLesson34,
	rqLesson35,
	rqLesson36,
	rqLesson37,
	apolloLesson1,
	apolloLesson2,
	apolloLesson3,
	apolloLesson4,
	apolloLesson5,
	apolloLesson6,
	apolloLesson7,
	apolloLesson8,
	apolloLesson9,
	apolloLesson10,
	apolloLesson11,
	apolloLesson12,
	apolloLesson13,
	apolloLesson14,
	apolloLesson15,
	apolloLesson16,
	apolloLesson17,
	apolloLesson18,
	apolloLesson19,
	apolloLesson20,
	apolloLesson21,
	apolloLesson22,
	apolloLesson23,
	apolloLesson24,
	apolloLesson25,
	apolloLesson26,
	apolloLesson27,
	apolloLesson28,
	apolloLesson29,
	apolloLesson30,
	apolloLesson31,
	apolloLesson32,
	apolloLesson33,
	apolloLesson34,
	apolloLesson35,
	graphqlLesson1,
	graphqlLesson2,
	graphqlLesson3,
	graphqlLesson4,
	graphqlLesson5,
	graphqlLesson6,
	graphqlLesson7,
	graphqlLesson8,
	graphqlLesson9,
	graphqlLesson10,
	graphqlLesson11,
	graphqlLesson12,
	graphqlLesson13,
	graphqlLesson14,
	graphqlLesson15,
	graphqlLesson16,
	graphqlLesson17,
	graphqlLesson18,
	graphqlLesson19,
	graphqlLesson20,
	graphqlLesson21,
	graphqlLesson22,
	graphqlLesson23,
	graphqlLesson24,
	graphqlLesson25,
	graphqlLesson26,
	csharpLesson1,
	csharpLesson2,
	csharpLesson3,
	csharpLesson4,
	csharpLesson5,
	csharpLesson6,
	csharpLesson7,
	csharpLesson8,
	csharpLesson9,
	csharpLesson10,
	csharpLesson11,
	csharpLesson12,
	csharpLesson13,
	csharpLesson14,
	csharpLesson15,
	csharpLesson16,
	csharpLesson17,
	csharpLesson18,
	csharpLesson19,
	csharpLesson20,
	csharpLesson21,
	csharpLesson22,
	csharpLesson23,
	csharpLesson24,
	csharpLesson25,
	csharpLesson26,
	csharpLesson27,
	csharpLesson28,
	webApiLesson1,
	webApiLesson2,
	webApiLesson3,
	webApiLesson4,
	webApiLesson5,
	webApiLesson6,
	webApiLesson7,
	webApiLesson8,
	webApiLesson9,
	webApiLesson10,
	webApiLesson11,
	webApiLesson12,
	webApiLesson13,
	webApiLesson14,
	webApiLesson15,
	webApiLesson16,
	webApiLesson17,
	webApiLesson18,
	webApiLesson19,
	webApiLesson20,
	webApiLesson21,
	webApiLesson22,
	webApiLesson23,
	webApiLesson24,
	webApiLesson25,
	authLesson1,
	authLesson2,
	authLesson3,
	authLesson4,
	authLesson5,
	authLesson6,
	authLesson7,
	authLesson8,
	authLesson9,
	authLesson10,
	authLesson11,
	authLesson12,
	authLesson13,
	authLesson14,
	azureFuncLesson1,
	azureFuncLesson2,
	azureFuncLesson3,
	azureFuncLesson4,
	azureFuncLesson5,
	azureFuncLesson6,
	azureFuncLesson7,
	azureFuncLesson8,
	azureFuncLesson9,
	azureFuncLesson10,
	azureFuncLesson11,
	azureContLesson1,
	azureContLesson2,
	azureContLesson3,
	azureContLesson4,
	azureContLesson5,
	azureContLesson6,
	azureContLesson7,
	azureContLesson8,
	azureContLesson9,
	azureContLesson10,
	azureContLesson11,
	azureContLesson12,
	azureContLesson13,
	azureContLesson14,
	azureDevFoundationLesson1,
	azureDevFoundationLesson2,
	azureDevFoundationLesson3,
	azureDevFoundationLesson4,
	azureDevFoundationLesson5,
	azureDevFoundationLesson6,
	azureDevFoundationLesson7,
	azureDevFoundationLesson8,
	azureDevFoundationLesson9,
	azureComputeHostingLesson1,
	azureComputeHostingLesson2,
	azureComputeHostingLesson3,
	azureComputeHostingLesson4,
	azureComputeHostingLesson5,
	azureComputeHostingLesson6,
	azureComputeHostingLesson7,
	azureComputeHostingLesson8,
	azureComputeHostingLesson9,
	azureIdentityLesson1,
	azureIdentityLesson2,
	azureIdentityLesson3,
	azureIdentityLesson4,
	azureIdentityLesson5,
	azureIdentityLesson6,
	azureIdentityLesson7,
	azureIdentityLesson8,
	azureIdentityLesson9,
	azureIdentityLesson10,
	azureIdentityLesson11,
	azureIdentityLesson12,
	azureIdentityLesson13,
	azureIdentityLesson14,
	azureIdentityLesson15,
	azureIdentityLesson16,
	azureNetApiLesson1,
	azureNetApiLesson2,
	azureNetApiLesson3,
];

const rawLessonsPart2: any[] = [
	azureNetApiLesson4,
	azureNetApiLesson5,
	azureNetApiLesson6,
	azureNetApiLesson7,
	azureNetApiLesson8,
	azureNetApiLesson9,
	azureNetApiLesson10,
	azureNetApiLesson11,
	azureNetApiLesson12,
	azureNetApiLesson13,
	azureNetApiLesson14,
	azureNetApiLesson15,
	azureNetApiLesson16,
	azureNetApiLesson17,
	azureMessagingLesson1,
	azureMessagingLesson2,
	azureMessagingLesson3,
	azureMessagingLesson4,
	azureMessagingLesson5,
	azureMessagingLesson6,
	azureMessagingLesson7,
	azureMessagingLesson8,
	azureMessagingLesson9,
	azureMessagingLesson10,
	azureMessagingLesson11,
	azureMessagingLesson12,
	azureMessagingLesson13,
	azureMessagingLesson14,
	azureMessagingLesson15,
	azureMessagingLesson16,
	azureObservabilityLesson1,
	azureObservabilityLesson2,
	azureObservabilityLesson3,
	azureObservabilityLesson4,
	azureObservabilityLesson5,
	azureObservabilityLesson6,
	azureObservabilityLesson7,
	azureObservabilityLesson8,
	azureObservabilityLesson9,
	azureObservabilityLesson10,
	azureObservabilityLesson11,
	azureObservabilityLesson12,
	azureObservabilityLesson13,
	azureObservabilityLesson14,
	azureDeployLesson1,
	azureDeployLesson2,
	azureDeployLesson3,
	azureDeployLesson4,
	azureDeployLesson5,
	azureDeployLesson6,
	azureDeployLesson7,
	azureDeployLesson8,
	azureDeployLesson9,
	azureDeployLesson10,
	azureDeployLesson11,
	azureDeployLesson12,
	azureDeployLesson13,
	azureBicepLesson1,
	azureBicepLesson2,
	azureBicepLesson3,
	azureBicepLesson4,
	azureBicepLesson5,
	azureBicepLesson6,
	azureBicepLesson7,
	azureBicepLesson8,
	azureBicepLesson9,
	azureBicepLesson10,
	azureBicepLesson11,
	azureBicepLesson12,
	azureAiServiceLesson1,
	azureAiServiceLesson2,
	azureAiServiceLesson3,
	azureAiServiceLesson4,
	azureAiServiceLesson5,
	azureAiServiceLesson6,
	azureAiServiceLesson7,
	azureAiServiceLesson8,
	azureAiServiceLesson9,
	azureAiServiceLesson10,

	cleanCodeLesson1,
	cleanCodeLesson2,
	cleanCodeLesson3,
	cleanCodeLesson4,
	cleanCodeLesson5,
	cleanCodeLesson6,
	cleanCodeLesson7,
	cleanCodeLesson8,
	cleanCodeLesson9,
	cleanCodeLesson10,
	cleanCodeLesson11,
	cleanCodeLesson12,
	cleanCodeLesson13,
	cleanCodeLesson14,
	cleanCodeLesson15,
	cleanCodeLesson16,
	cleanCodeLesson17,
	cleanCodeLesson18,
	cleanCodeLesson19,
	cleanCodeLesson20,
	cleanCodeLesson21,
	cleanCodeLesson22,
	cleanCodeLesson23,
	cleanCodeLesson24,
	cleanCodeLesson25,
	designLesson1,
	designLesson2,
	designLesson3,
	designLesson4,
	designLesson5,
	designLesson6,
	designLesson7,
	designLesson8,
	designLesson9,
	designLesson10,
	designLesson11,
	designLesson12,
	designLesson13,
	designLesson14,
	designLesson15,
	designLesson16,
	designLesson17,
	designLesson18,
	designLesson19,
	designLesson20,
	designLesson21,
	designLesson22,
	designLesson23,
	designLesson24,
	designLesson25,
	unitTestLesson1,
	unitTestLesson2,
	unitTestLesson3,
	unitTestLesson4,
	unitTestLesson5,
	unitTestLesson6,
	unitTestLesson7,
	unitTestLesson8,
	unitTestLesson9,
	unitTestLesson10,
	unitTestLesson11,
	unitTestLesson12,
	unitTestLesson13,
	unitTestLesson14,
	unitTestLesson15,
	unitTestLesson16,
	unitTestLesson17,
	unitTestLesson18,
	unitTestLesson19,
	unitTestLesson20,
	unitTestLesson21,
	unitTestLesson22,
	unitTestLesson23,
	unitTestLesson24,
	unitTestLesson25,
	unitTestLesson26,
	reactTestLesson1,
	reactTestLesson2,
	reactTestLesson3,
	reactTestLesson4,
	reactTestLesson5,
	reactTestLesson6,
	reactTestLesson7,
	reactTestLesson8,
	reactTestLesson9,
	reactTestLesson10,
	reactTestLesson11,
	reactTestLesson12,
	reactTestLesson13,
	reactTestLesson14,
	reactTestLesson15,
	reactTestLesson16,
	reactTestLesson17,
	reactTestLesson18,
	reactTestLesson19,
	reactTestLesson20,
	reactTestLesson21,
	reactTestLesson22,
	reactTestLesson23,
	reactTestLesson24,
	reactTestLesson25,
	oopLesson1,
	oopLesson2,
	oopLesson3,
	oopLesson4,
	oopLesson5,
	oopLesson6,
	oopLesson7,
	oopLesson8,
	oopLesson9,
	oopLesson10,
	oopLesson11,
	oopLesson12,
	oopLesson13,
	oopLesson14,
	oopLesson15,
	oopLesson16,
	oopLesson17,
	oopLesson18,
	oopLesson19,
	oopLesson20,
	oopLesson21,
	oopLesson22,
	oopLesson23,
	oopLesson24,
	oopLesson25,
	oopLesson26,
	iqLessonB01,
	iqLessonB02,
	iqLessonB03,
	iqLessonB04,
	iqLessonB05,
	iqLessonB06,
	iqLessonB07,
	iqLessonB08,
	iqLessonB09,
	iqLessonB10,
	iqLessonB11,
	iqLessonB12,
	iqLessonB13,
	iqLessonB14,
	iqLessonB15,
	iqLessonB16,
	iqLessonB17,
	iqLessonB18,
	iqLessonB19,
	iqLessonB20,
	iqLessonB21,
	iqLessonAspnetB01,
	iqLessonAspnetB02,
	iqLessonCsharpB01,
	iqLessonCsharpB02,
	iqLessonJsB01,
	iqLessonJsB02,
	iqLessonOopB01,
	iqLessonReactB01,
	iqLessonReactB02,
	iqLessonSqlB01,
	iqLessonSqlB02,
	iqLessonSqlB03,
	iqLessonBoxingUnboxing,
	iqLessonClrCtsCls,
	iqLessonCsharpProperties,
	iqLessonDelegatesEvents,
	iqLessonJsxBasics,
	iqLessonNormalization,
	iqLessonPromisesJs,
	iqLessonReactKeys,
	iqLessonStoredProceduresVsFunctions,
	iqLessonViewbagViewdataTempdata,
	iqLessonI01,
	iqLessonI02,
	iqLessonI03,
	iqLessonI04,
	iqLessonI05,
	iqLessonAspnetI01,
	iqLessonAspnetI02,
	iqLessonCsharpI01,
	iqLessonCsharpI02,
	iqLessonCsharpI03,
	iqLessonCsharpI04,
	iqLessonCsharpI05,
	iqLessonCsharpI06,
	iqLessonGenI01,
	iqLessonJsI01,
	iqLessonJsI02,
	iqLessonJsI03,
	iqLessonJsI04,
	iqLessonJsI05,
	iqLessonOopI01,
	iqLessonOopI02,
	iqLessonReactI01,
	iqLessonReactI02,
	iqLessonReactI03,
	iqLessonSqlI01,
	iqLessonSqlI02,
	iqLessonSqlI03,
	iqLessonAspnetFilters,
	iqLessonCodeFirstDbFirst,
	iqLessonControlledComponents,
	iqLessonDotnetVersions,
	iqLessonGenericsCsharp,
	iqLessonLazyEagerLoading,
	iqLessonMicroservicesBasics,
	iqLessonMvcLifecycle,
	iqLessonOauthJwt,
	iqLessonRepositoryPattern,
	iqLessonSolidPrinciples,
	iqLessonA01,
	iqLessonA02,
	iqLessonA03,
	iqLessonA04,
	iqLessonA05,
	iqLessonGcGenerations,
	iqLessonCsharpA01,
	iqLessonCsharpA02,
	iqLessonCsharpA03,
	iqLessonJsA01,
	iqLessonJsA02,
	iqLessonOopA01,
	iqLessonReactA01,
	iqLessonSqlA01,
	iqLessonSqlA02,
	iqLessonS01,
	iqLessonS02,
	iqLessonS03,
	iqLessonBehB01,
	iqLessonSD01,
	iqLessonSD02,
	iqLessonSystemQ11,
	iqLessonSystemQ12,
	iqLessonSystemQ13,
	iqLessonSystemQ14,
	iqLessonSystemQ15,
	iqLessonR01,
	iqLessonR02,
	iqLessonR03,
	iqLessonT01,
	iqLessonT02,
	fsLesson1,
	fsLesson2,
	fsLesson3,
	fsLesson4,
	fsLesson5,
	fsLesson6,
	fsLesson7,
	fsLesson8,
	fsLesson9,
	fsLesson10,
	fsLesson11,
	fsLesson12,
	fsLesson13,
	fsLesson14,
	fsLesson15,
	fsLesson16,
	fsLesson17,
	fsLesson18,
	fsLesson19,
	fsLesson20,
	fsLesson21,
	fsLesson22,
	fsLesson23,
	fsLesson24,
	fsLesson25,
	csLesson1,
	csLesson2,
	csLesson3,
	csLesson4,
	csLesson5,
	csLesson6,
	csLesson7,
	csLesson8,
	csLesson9,
	csLesson10,
	csLesson11, csLesson12,
	problemLesson1,
	problemLesson2,
	problemLesson3,
	problemLesson4,
	problemLesson5,
	problemLesson6,
	problemLesson7,
	problemLesson8,
	problemLesson9,
	problemLesson10,
	problemLesson11,
	problemLesson12,
	problemLesson13,
	problemLesson14,
	problemLesson15,
	problemLesson16,
	problemLesson17,
	problemLesson18,
	problemLesson19,
	problemLesson20,
	problemLesson21,
	problemLesson22,
	problemLesson23,
	problemLesson24,
	problemLesson25,
	problemLesson26,
	problemLesson27,
	problemLesson28,
	problemLesson29,
	problemLesson30,
	problemLesson31,
	problemLesson32,
	problemLesson33,
	problemLesson34,
	problemLesson35,
	problemLesson36,
	problemLesson37,
	problemLesson38,
	problemLesson39,
	problemLesson40,
	problemLesson41,
	problemLesson42,
	problemLesson43,
	problemLesson44,
	problemLesson45,
	problemLesson46,
	problemLesson47,
	problemLesson48,
	problemLesson49,
	problemLesson50,
	problemLesson51,
	problemLesson52,
	problemLesson53,
	problemLesson54,
	problemLesson55,
	problemLesson56,
	problemLesson57,
	problemLesson58,
	problemLesson59,
	problemLesson60,
	problemLesson61,
	problemLesson62,
	problemLesson63,
	problemLesson64,
	problemLesson65,
	problemLesson66,
	problemLesson67,
	problemLesson68,
	problemLesson69,
	problemLesson70,
	problemLesson71,
	problemLesson72,
	problemLesson73,
	problemLesson74,
	problemLesson75,
	problemLesson76,
	problemLesson77,
	problemLesson78,
	problemLesson79,
	problemLesson80,
	problemLesson81,
	problemLesson82,
	problemLesson83,
	problemLesson84,
	problemLesson85,
	problemLesson86,
	problemLesson87,
	problemLesson88,
	problemLesson89,
	problemLesson90,
	problemLesson91,
	problemLesson92,
	problemLesson93,
	problemLesson94,
	problemLesson95,
	problemLesson96,
	problemLesson97,
	problemLesson98,
	problemLesson99,
	problemLesson100,
	problemLesson101,
	problemLesson102,
	problemLesson103,
	problemLesson104,
	problemLesson105,
	problemLesson106,
	problemLesson107,
	awsLesson1,
	awsLesson2,
	awsLesson3,
	awsLesson4,
	awsLesson5,
	awsLesson6,
	awsLesson7,
	awsLesson8,
	awsLesson9,
	awsLesson10,
	awsLesson11,
	awsLesson12,
	awsLesson13,
	awsLesson14,
	awsLesson15,
	awsLesson16,
	awsLesson17,
	awsLesson18,
	awsLesson19,
	awsLesson20,
	awsFundamentalsLesson1,
	awsFundamentalsLesson2,
	awsFundamentalsLesson3,
	awsFundamentalsLesson4,
	awsIamLesson1,
	awsIamLesson2,
	awsIamLesson3,
	awsIamLesson4,
	awsComputeLesson1,
	awsComputeLesson2,
	awsComputeLesson3,
	awsComputeLesson4,
	awsNetworkingLesson1,
	awsNetworkingLesson2,
	awsNetworkingLesson3,
	awsNetworkingLesson4,
	awsStorageLesson1,
	awsStorageLesson2,
	awsStorageLesson3,
	awsStorageLesson4,
	awsLesson6_1,
	awsLesson6_2,
	awsLesson6_3,
	awsLesson6_4,
	awsLesson7_1,
	awsLesson7_2,
	awsLesson7_3,
	awsLesson7_4,
	awsLesson8_1,
	awsLesson8_2,
	awsLesson8_3,
	awsLesson8_4,
	awsLesson9_1,
	awsLesson9_2,
	awsLesson9_3,
	awsLesson9_4,
	awsLesson10_1,
	awsLesson10_2,
	awsLesson10_3,
	awsLesson10_4,
	awsLesson11_1,
	awsLesson11_2,
	awsLesson11_3,
	awsLesson11_4,
	awsLesson12_1,
	awsLesson12_2,
	awsLesson12_3,
	awsLesson12_4,
	awsLesson13_1,
	awsLesson13_2,
	awsLesson13_3,
	awsLesson13_4,
	awsLesson14_1,
	awsLesson14_2,
	awsLesson14_3,
	awsLesson14_4,
	awsLesson15_1,
	awsLesson15_2,
	awsLesson15_3,
	awsLesson15_4,
	azureStorageDataLesson1,
	azureStorageDataLesson2,
	azureStorageDataLesson3,
	azureStorageDataLesson4,
	azureStorageDataLesson5,
	azureStorageDataLesson6,
	azureStorageDataLesson7,
	azureStorageDataLesson8,
	azureStorageDataLesson9,
	azureStorageDataLesson10,
	azureStorageDataLesson11,
	azureStorageDataLesson12,
	azureStorageDataLesson13,
	azureDbCacheLesson1,
	azureDbCacheLesson2,
	azureDbCacheLesson3,
	azureDbCacheLesson4,
	azureDbCacheLesson5,
	azureDbCacheLesson6,
	azureDbCacheLesson7,
	azureDbCacheLesson8,
	azureDbCacheLesson9,
	azureDbCacheLesson10,
	azureDbCacheLesson11,
	azureDbCacheLesson12,
	azureDbCacheLesson13,
	azureDbCacheLesson14,
	azureDbCacheLesson15,
	azureDbCacheLesson16,
	csLesson1,
	csLesson2,
	csLesson3,
	csLesson4,
	csLesson5,
	csLesson6,
	csLesson7,
	csLesson8,
	csLesson9,
	csLesson10,
	csLesson11, csLesson12,
	devOpsLesson1,
	devOpsLesson2,
	devOpsLesson3,
	devOpsLesson4,
	devOpsLesson5,
	devOpsLesson6,
	devOpsLesson7,
	devOpsLesson8,
	devOpsLesson9,
	devOpsLesson10,
	devOpsLesson11,
	devOpsLesson12,
	devOpsLesson13,
	devOpsLesson14,
	devOpsLesson15,
	devOpsLesson16,
	devOpsLesson17,
	sqlProblemsLesson1,
	sqlProblemsLesson2,
	sqlProblemsLesson3,
	sqlProblemsLesson4,
	sqlProblemsLesson5,
	sqlProblemsLesson6,
	sqlProblemsLesson7,
	sqlProblemsLesson8,
	sqlProblemsLesson9,
	sqlProblemsLesson10,
	sqlProblemsLesson11,
	sqlProblemsLesson12,
	sqlProblemsLesson13,
	sqlProblemsLesson14,
	sqlProblemsLesson15,
	sqlProblemsLesson16,
	sqlProblemsLesson17,
	sqlProblemsLesson18,
	sqlProblemsLesson19,
	sqlProblemsLesson20,
	sqlProblemsLesson21,
	sqlProblemsLesson22,
	sqlProblemsLesson23,
	sqlProblemsLesson24,
	sqlProblemsLesson25,
	sqlProblemsLesson26,
	sqlProblemsLesson27,
	sqlProblemsLesson28,
	sqlProblemsLesson29,
	sqlProblemsLesson30,
	sqlProblemsLesson31,
	sqlProblemsLesson32,
	sqlProblemsLesson33,
	sqlProblemsLesson34,
	sqlProblemsLesson35,
	sqlProblemsLesson36,
	sqlProblemsLesson37,
	sqlProblemsLesson38,
	sqlProblemsLesson39,
	sqlProblemsLesson40,
	sqlProblemsLesson41,
	sqlProblemsLesson42,
	sqlProblemsLesson43,
	sqlProblemsLesson44,
	sqlProblemsLesson45,
	sqlProblemsLesson46,
	sqlProblemsLesson47,
	sqlProblemsLesson48,
	sqlProblemsLesson49,
	sqlProblemsLesson50,
	dotnetLesson1,
	dotnetLesson2,
	dotnetLesson3,
	dotnetLesson4,
	dotnetLesson5,
	dotnetLesson6,
	dotnetLesson7,
	dotnetLesson8,
	dotnetLesson9,
	dotnetLesson10,
	dotnetLesson11,
	dotnetLesson12,
	dotnetLesson13,
	dotnetLesson14,
	dotnetLesson15,
	dotnetLesson16,
	dotnetLesson17,
	dotnetLesson18,
	dotnetLesson19,
	dotnetLesson20,
	dotnetLesson21,
	dotnetLesson22,
	dotnetLesson23,
	dotnetLesson24,
	dotnetLesson25,
	dotnetLesson26,
	dotnetLesson27,
	dotnetLesson28,
	dotnetLesson29,
	dotnetLesson30,
	dotnetLesson31,
	dotnetLesson32,
	dotnetLesson33,
	dotnetLesson34,
	dotnetLesson35,
	dotnetLesson36,
	dotnetLesson37,
	dotnetLesson38,
	dotnetLesson39,
	dotnetLesson40,
	dotnetLesson41,
	dotnetLesson42,
	dotnetLesson43,
	dotnetLesson44,
	dotnetLesson45,
	dotnetLesson46,
	dotnetLesson47,
	dotnetLesson48,
	dotnetLesson49,
	dotnetLesson50,
	dotnetLesson51,
	dotnetLesson52,
	dotnetLesson53,
	dotnetLesson54,
	dotnetLesson55,
	dotnetLesson56,
	dotnetLesson57,
	dotnetLesson701,
	dotnetLesson702,
	dotnetLesson703,
	dotnetLesson704,
	dotnetLesson705,
	dotnetLesson706,
	dotnetLesson707,
	dotnetLesson708,
	dotnetLesson801,
	dotnetLesson802,
	dotnetLesson803,
	dotnetLesson804,
	dotnetLesson805,
	dotnetLesson806,
	dotnetLesson807,
	dotnetLesson901,
	dotnetLesson902,
	dotnetLesson903,
	dotnetLesson904,
	dotnetLesson905,
	dotnetLesson906,
	dotnetLesson907,
	dotnetLesson908,
	nugetLesson1,
	nugetLesson2,
	nugetLesson3,
	nugetLesson4,
	nugetLesson5,
	nugetLesson6,
	nugetLesson7,
	nugetLesson8,
	nugetLesson9,
	nugetLesson10,
	nugetLesson11,
	nugetLesson12,
	nugetLesson13,
	nugetLesson14,
	nugetLesson15,
	nugetLesson16,
	nugetLesson17,
	nugetLesson18,
	nugetLesson19,
	nugetLesson20,
	systemDesignReactLesson1,
	systemDesignReactLesson2,
	systemDesignReactLesson3,
	systemDesignAspnetLesson1,
	systemDesignAspnetLesson2,
	systemDesignAspnetLesson3,
	systemDesignDevopsLesson1,
	systemDesignDevopsLesson2,
	systemDesignDevopsLesson3,
	yarnLesson1,
	yarnLesson2,
	yarnLesson3,
	yarnLesson4,
	yarnLesson5,
	yarnLesson6,
	yarnLesson7,
	yarnLesson8,
	yarnLesson9,
	yarnLesson10,
	yarnLesson11,
	yarnLesson12,
	yarnLesson13,
	yarnLesson14,
	yarnLesson15,
	yarnLesson16,
	yarnLesson17,
	yarnLesson18,
	yarnLesson19,
	yarnLesson20,
	yarnLesson21,
	yarnLesson22,
	yarnLesson23,
	yarnLesson24,
	yarnLesson25,
	yarnLesson26,
	yarnLesson27,
	yarnLesson28,
	yarnLesson29,
	yarnLesson30,
	yarnLesson31,
];

const rawLessons: any[] = [...rawLessonsPart1, ...rawLessonsPart2];


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
