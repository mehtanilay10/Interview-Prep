import type { Lesson } from '@/types';

import sqlLesson1 from '../courses/sql-server/01-getting-started/01-what-is-sql-server.json';
import sqlLesson2 from '../courses/sql-server/01-getting-started/02-basics.json';
import sqlLesson3 from '../courses/sql-server/01-getting-started/03-aliases.json';
import sqlLesson4 from '../courses/sql-server/02-querying-data/01-select-statement.json';
import sqlLesson5 from '../courses/sql-server/02-querying-data/02-select-distinct.json';
import sqlLesson6 from '../courses/sql-server/02-querying-data/03-select-top.json';
import sqlLesson7 from '../courses/sql-server/02-querying-data/04-where-clause.json';
import sqlLesson8 from '../courses/sql-server/02-querying-data/05-and-operator.json';
import sqlLesson9 from '../courses/sql-server/02-querying-data/06-or-operator.json';
import sqlLesson10 from '../courses/sql-server/02-querying-data/07-between-operator.json';
import sqlLesson11 from '../courses/sql-server/02-querying-data/08-in-operator.json';
import sqlLesson12 from '../courses/sql-server/02-querying-data/09-like-operator.json';
import sqlLesson13 from '../courses/sql-server/02-querying-data/10-null-three-valued-logic.json';
import sqlLesson14 from '../courses/sql-server/02-querying-data/11-order-by-clause.json';
import sqlLesson15 from '../courses/sql-server/02-querying-data/12-offset-and-fetch.json';
import sqlLesson16 from '../courses/sql-server/03-joins/01-visualization-explanation-of-joins.json';
import sqlLesson17 from '../courses/sql-server/03-joins/02-inner-join.json';
import sqlLesson18 from '../courses/sql-server/03-joins/03-left-join.json';
import sqlLesson19 from '../courses/sql-server/03-joins/04-right-join.json';
import sqlLesson20 from '../courses/sql-server/03-joins/05-full-outer-join.json';
import sqlLesson21 from '../courses/sql-server/03-joins/06-cross-join.json';
import sqlLesson22 from '../courses/sql-server/03-joins/07-self-join.json';
import sqlLesson23 from '../courses/sql-server/03-joins/08-cross-apply.json';
import sqlLesson24 from '../courses/sql-server/04-set-operations/01-union-ultimate-guide.json';
import sqlLesson25 from '../courses/sql-server/04-set-operations/02-except.json';
import sqlLesson26 from '../courses/sql-server/04-set-operations/03-intersect.json';
import sqlLesson27 from '../courses/sql-server/05-grouping-aggregation-subqueries/01-group-by.json';
import sqlLesson28 from '../courses/sql-server/05-grouping-aggregation-subqueries/02-having-clause.json';
import sqlLesson29 from '../courses/sql-server/05-grouping-aggregation-subqueries/03-cube.json';
import sqlLesson30 from '../courses/sql-server/05-grouping-aggregation-subqueries/04-rollup.json';
import sqlLesson31 from '../courses/sql-server/05-grouping-aggregation-subqueries/05-grouping-sets.json';
import sqlLesson32 from '../courses/sql-server/05-grouping-aggregation-subqueries/06-pivot-operator.json';
import sqlLesson33 from '../courses/sql-server/05-grouping-aggregation-subqueries/07-common-table-expressions.json';
import sqlLesson34 from '../courses/sql-server/05-grouping-aggregation-subqueries/08-recursive-cte.json';
import sqlLesson35 from '../courses/sql-server/05-grouping-aggregation-subqueries/09-correlated-subquery.json';
import sqlLesson36 from '../courses/sql-server/05-grouping-aggregation-subqueries/10-subquery.json';
import sqlLesson37 from '../courses/sql-server/05-grouping-aggregation-subqueries/11-any-operator.json';
import sqlLesson38 from '../courses/sql-server/05-grouping-aggregation-subqueries/12-exists-operator.json';
import sqlLesson39 from '../courses/sql-server/05-grouping-aggregation-subqueries/13-all-operator.json';
import sqlLesson40 from '../courses/sql-server/06-data-modification-dml/01-insert-add-row.json';
import sqlLesson41 from '../courses/sql-server/06-data-modification-dml/02-insert-into-select.json';
import sqlLesson42 from '../courses/sql-server/06-data-modification-dml/03-insert-multiple-rows.json';
import sqlLesson43 from '../courses/sql-server/06-data-modification-dml/04-update-statement.json';
import sqlLesson44 from '../courses/sql-server/06-data-modification-dml/05-update-with-join.json';
import sqlLesson45 from '../courses/sql-server/06-data-modification-dml/06-delete-statement.json';
import sqlLesson46 from '../courses/sql-server/06-data-modification-dml/07-truncate-table.json';
import sqlLesson47 from '../courses/sql-server/06-data-modification-dml/08-merge-statement.json';
import sqlLesson48 from '../courses/sql-server/06-data-modification-dml/09-select-into.json';
import sqlLesson49 from '../courses/sql-server/07-database-schema-table-objects/01-create-database.json';
import sqlLesson50 from '../courses/sql-server/07-database-schema-table-objects/02-drop-database.json';
import sqlLesson51 from '../courses/sql-server/07-database-schema-table-objects/03-create-table.json';
import sqlLesson52 from '../courses/sql-server/07-database-schema-table-objects/04-alter-table-add-column.json';
import sqlLesson53 from '../courses/sql-server/07-database-schema-table-objects/05-alter-table-alter-column.json';
import sqlLesson54 from '../courses/sql-server/07-database-schema-table-objects/06-alter-table-drop-column.json';
import sqlLesson55 from '../courses/sql-server/07-database-schema-table-objects/07-drop-table.json';
import sqlLesson56 from '../courses/sql-server/07-database-schema-table-objects/08-rename-table.json';
import sqlLesson57 from '../courses/sql-server/07-database-schema-table-objects/09-alter-schema.json';
import sqlLesson58 from '../courses/sql-server/07-database-schema-table-objects/10-create-schema.json';
import sqlLesson59 from '../courses/sql-server/07-database-schema-table-objects/11-drop-schema.json';
import sqlLesson60 from '../courses/sql-server/07-database-schema-table-objects/12-system-databases.json';
import sqlLesson61 from '../courses/sql-server/07-database-schema-table-objects/13-partition-existing-table.json';
import sqlLesson62 from '../courses/sql-server/07-database-schema-table-objects/14-table-partitioning.json';
import sqlLesson63 from '../courses/sql-server/07-database-schema-table-objects/15-sequence.json';
import sqlLesson64 from '../courses/sql-server/07-database-schema-table-objects/16-identity-column.json';
import sqlLesson65 from '../courses/sql-server/07-database-schema-table-objects/17-synonym.json';
import sqlLesson66 from '../courses/sql-server/07-database-schema-table-objects/18-synonym-ultimate-guide.json';
import sqlLesson67 from '../courses/sql-server/07-database-schema-table-objects/19-grant.json';
import sqlLesson68 from '../courses/sql-server/07-database-schema-table-objects/20-computed-columns.json';
import sqlLesson69 from '../courses/sql-server/08-data-types/01-data-types-overview.json';
import sqlLesson70 from '../courses/sql-server/08-data-types/02-char-data-type.json';
import sqlLesson71 from '../courses/sql-server/08-data-types/03-varchar-data-type.json';
import sqlLesson72 from '../courses/sql-server/08-data-types/04-int-data-types.json';
import sqlLesson73 from '../courses/sql-server/08-data-types/05-nchar-data-type.json';
import sqlLesson74 from '../courses/sql-server/08-data-types/06-nvarchar-data-type.json';
import sqlLesson75 from '../courses/sql-server/08-data-types/07-datetime2-data-type.json';
import sqlLesson76 from '../courses/sql-server/08-data-types/08-date-data-type.json';
import sqlLesson77 from '../courses/sql-server/08-data-types/09-time-data-type.json';
import sqlLesson78 from '../courses/sql-server/08-data-types/10-decimal-data-type.json';
import sqlLesson79 from '../courses/sql-server/08-data-types/11-bit-data-type.json';
import sqlLesson80 from '../courses/sql-server/08-data-types/12-datetimeoffset-data-type.json';
import sqlLesson81 from '../courses/sql-server/09-constraints/01-check-constraint.json';
import sqlLesson82 from '../courses/sql-server/09-constraints/02-foreign-key-constraint.json';
import sqlLesson83 from '../courses/sql-server/09-constraints/03-not-null-constraint.json';
import sqlLesson84 from '../courses/sql-server/09-constraints/04-unique-constraint.json';
import sqlLesson85 from '../courses/sql-server/10-indexes/01-indexes-overview.json';
import sqlLesson86 from '../courses/sql-server/10-indexes/02-clustered-indexes.json';
import sqlLesson87 from '../courses/sql-server/10-indexes/03-create-index.json';
import sqlLesson88 from '../courses/sql-server/10-indexes/04-filtered-indexes.json';
import sqlLesson89 from '../courses/sql-server/10-indexes/05-indexes-with-included-columns.json';
import sqlLesson90 from '../courses/sql-server/10-indexes/06-index-on-computed-column.json';
import sqlLesson91 from '../courses/sql-server/10-indexes/07-unique-index.json';
import sqlLesson92 from '../courses/sql-server/10-indexes/08-disable-indexes.json';
import sqlLesson93 from '../courses/sql-server/10-indexes/09-enable-indexes.json';
import sqlLesson94 from '../courses/sql-server/10-indexes/10-rename-index.json';
import sqlLesson95 from '../courses/sql-server/10-indexes/11-drop-index.json';
import sqlLesson96 from '../courses/sql-server/11-views/01-views-introduction.json';
import sqlLesson97 from '../courses/sql-server/11-views/02-create-view.json';
import sqlLesson98 from '../courses/sql-server/11-views/03-drop-view.json';
import sqlLesson99 from '../courses/sql-server/11-views/04-get-information-about-a-view.json';
import sqlLesson100 from '../courses/sql-server/11-views/05-rename-a-view.json';
import sqlLesson101 from '../courses/sql-server/11-views/06-list-all-views.json';
import sqlLesson102 from '../courses/sql-server/11-views/07-indexed-views.json';
import sqlLesson103 from '../courses/sql-server/12-stored-procedures-functions/01-stored-procedures-basics.json';
import sqlLesson104 from '../courses/sql-server/12-stored-procedures-functions/02-stored-procedures-tutorial.json';
import sqlLesson105 from '../courses/sql-server/12-stored-procedures-functions/03-stored-procedure-parameters.json';
import sqlLesson106 from '../courses/sql-server/12-stored-procedures-functions/04-output-parameters.json';
import sqlLesson107 from '../courses/sql-server/12-stored-procedures-functions/05-variables-in-stored-procedures.json';
import sqlLesson108 from '../courses/sql-server/12-stored-procedures-functions/06-scalar-functions.json';
import sqlLesson109 from '../courses/sql-server/12-stored-procedures-functions/07-table-valued-functions.json';
import sqlLesson110 from '../courses/sql-server/12-stored-procedures-functions/08-user-defined-functions-tutorial.json';
import sqlLesson111 from '../courses/sql-server/12-stored-procedures-functions/09-drop-function.json';
import sqlLesson112 from '../courses/sql-server/13-triggers/01-triggers-tutorial.json';
import sqlLesson113 from '../courses/sql-server/13-triggers/02-create-trigger.json';
import sqlLesson114 from '../courses/sql-server/13-triggers/03-ddl-triggers.json';
import sqlLesson115 from '../courses/sql-server/13-triggers/04-instead-of-trigger.json';
import sqlLesson116 from '../courses/sql-server/13-triggers/05-disable-trigger.json';
import sqlLesson117 from '../courses/sql-server/13-triggers/06-enable-trigger.json';
import sqlLesson118 from '../courses/sql-server/13-triggers/07-drop-trigger.json';
import sqlLesson119 from '../courses/sql-server/13-triggers/08-list-all-triggers.json';
import sqlLesson120 from '../courses/sql-server/13-triggers/09-view-trigger-definition.json';
import sqlLesson121 from '../courses/sql-server/14-transactions-error-handling-backup/01-transaction.json';
import sqlLesson122 from '../courses/sql-server/14-transactions-error-handling-backup/02-begin-end-statement.json';
import sqlLesson123 from '../courses/sql-server/14-transactions-error-handling-backup/03-if-else-statement.json';
import sqlLesson124 from '../courses/sql-server/14-transactions-error-handling-backup/04-try-catch.json';
import sqlLesson125 from '../courses/sql-server/14-transactions-error-handling-backup/05-throw-statement.json';
import sqlLesson126 from '../courses/sql-server/14-transactions-error-handling-backup/06-raiserror-statement.json';
import sqlLesson127 from '../courses/sql-server/14-transactions-error-handling-backup/07-full-backup.json';
import sqlLesson128 from '../courses/sql-server/14-transactions-error-handling-backup/08-differential-backup.json';
import sqlLesson129 from '../courses/sql-server/14-transactions-error-handling-backup/09-transaction-log-backup.json';
import sqlLesson130 from '../courses/sql-server/14-transactions-error-handling-backup/10-recovery-model.json';
import sqlLesson131 from '../courses/sql-server/14-transactions-error-handling-backup/11-database-snapshot.json';
import sqlLesson132 from '../courses/sql-server/15-advanced-topics/01-cursor.json';
import sqlLesson133 from '../courses/sql-server/15-advanced-topics/02-temporary-tables.json';
import sqlLesson134 from '../courses/sql-server/15-advanced-topics/03-table-variables.json';
import sqlLesson135 from '../courses/sql-server/15-advanced-topics/04-case-expression.json';
import sqlLesson136 from '../courses/sql-server/15-advanced-topics/05-coalesce-expression.json';
import sqlLesson137 from '../courses/sql-server/15-advanced-topics/06-nullif.json';
import sqlLesson138 from '../courses/sql-server/15-advanced-topics/07-dynamic-sql.json';
import sqlLesson139 from '../courses/sql-server/15-advanced-topics/08-deadlock.json';
import sqlLesson140 from '../courses/sql-server/15-advanced-topics/09-while-loop.json';
import sqlLesson141 from '../courses/sql-server/15-advanced-topics/10-break-statement.json';
import sqlLesson142 from '../courses/sql-server/15-advanced-topics/11-continue-statement.json';

import aspLesson1 from '../courses/aspnet-core/01-getting-started-aspnet-core-mvc/first-aspnet-core-10-0-mvc-application.json';
import aspLesson2 from '../courses/aspnet-core/01-getting-started-aspnet-core-mvc/first-crud-application-aspnet-core-mvc.json';
import aspLesson3 from '../courses/aspnet-core/01-getting-started-aspnet-core-mvc/introduction-to-aspnet-core-mvc.json';
import aspLesson4 from '../courses/aspnet-core/01-getting-started-aspnet-core-mvc/learn-aspnet-core-examples-codes.json';
import aspLesson5 from '../courses/aspnet-core/02-controllers-routing/actions-in-aspnet-core.json';
import aspLesson6 from '../courses/aspnet-core/02-controllers-routing/aspnet-core-convention-based-routing.json';
import aspLesson7 from '../courses/aspnet-core/02-controllers-routing/controllers-in-aspnet-core.json';
import aspLesson8 from '../courses/aspnet-core/03-model-binding-validation/advanced-model-binding-concepts.json';
import aspLesson9 from '../courses/aspnet-core/03-model-binding-validation/model-binding-aspnet-core-beginner-advanced.json';
import aspLesson10 from '../courses/aspnet-core/03-model-binding-validation/model-validation-aspnet-core-beginner-expert.json';
import aspLesson11 from '../courses/aspnet-core/04-views-tag-helpers/built-in-tag-helpers.json';
import aspLesson12 from '../courses/aspnet-core/04-views-tag-helpers/custom-tag-helper.json';
import aspLesson13 from '../courses/aspnet-core/04-views-tag-helpers/introduction-to-tag-helpers.json';
import aspLesson14 from '../courses/aspnet-core/04-views-tag-helpers/views-in-aspnet-core.json';
import aspLesson15 from '../courses/aspnet-core/05-dependency-injection-configuration/aspnet-core-configurations-program-middleware-appsettings.json';
import aspLesson16 from '../courses/aspnet-core/05-dependency-injection-configuration/dependency-injection-aspnet-core.json';
import aspLesson17 from '../courses/aspnet-core/06-filters/aspnet-core-filters-dependency-injection-global-filters.json';
import aspLesson18 from '../courses/aspnet-core/06-filters/filters-aspnet-core-beginner-expert.json';
import aspLesson19 from '../courses/aspnet-core/07-web-api/call-web-api-aspnet-core-net10.json';
import aspLesson20 from '../courses/aspnet-core/07-web-api/call-web-api-javascript-xmlhttprequest.json';
import aspLesson21 from '../courses/aspnet-core/07-web-api/call-web-api-jquery-aspnet-core.json';
import aspLesson22 from '../courses/aspnet-core/07-web-api/create-web-apis-aspnet-core-restful-pattern.json';
import aspLesson23 from '../courses/aspnet-core/08-authentication-identity/add-custom-user-properties-aspnet-core-identity.json';
import aspLesson24 from '../courses/aspnet-core/08-authentication-identity/authentication-of-users-aspnet-core-identity.json';
import aspLesson25 from '../courses/aspnet-core/08-authentication-identity/create-read-update-delete-users-aspnet-core-identity.json';
import aspLesson26 from '../courses/aspnet-core/08-authentication-identity/implement-cookie-authentication-aspnet-core.json';
import aspLesson27 from '../courses/aspnet-core/08-authentication-identity/integrate-google-login-aspnet-core-identity.json';
import aspLesson28 from '../courses/aspnet-core/08-authentication-identity/setup-configure-aspnet-core-identity.json';
import aspLesson29 from '../courses/aspnet-core/08-authentication-identity/username-email-password-policy-aspnet-core-identity.json';
import aspLesson30 from '../courses/aspnet-core/08-authentication-identity/work-with-claims-aspnet-core-identity.json';
import aspLesson31 from '../courses/aspnet-core/08-authentication-identity/work-with-policies-aspnet-core-identity.json';
import aspLesson32 from '../courses/aspnet-core/08-authentication-identity/work-with-roles-aspnet-core-identity.json';
import aspLesson33 from '../courses/aspnet-core/09-localization-globalization/globalization-localization-resource-files.json';
import aspLesson34 from '../courses/aspnet-core/09-localization-globalization/localization-portable-object-po-files.json';
import aspLesson35 from '../courses/aspnet-core/09-localization-globalization/use-globalization-localization-aspnet-core.json';
import aspLesson36 from '../courses/aspnet-core/10-ado-net-data-access/learn-ado-net-crud-operations-aspnet-core.json';
import aspLesson37 from '../courses/aspnet-core/11-cors-cross-origin/enable-cors-aspnet-core.json';

const rawLessons = [sqlLesson1, sqlLesson2, sqlLesson3, sqlLesson4, sqlLesson5, sqlLesson6, sqlLesson7, sqlLesson8, sqlLesson9, sqlLesson10, sqlLesson11, sqlLesson12, sqlLesson13, sqlLesson14, sqlLesson15, sqlLesson16, sqlLesson17, sqlLesson18, sqlLesson19, sqlLesson20, sqlLesson21, sqlLesson22, sqlLesson23, sqlLesson24, sqlLesson25, sqlLesson26, sqlLesson27, sqlLesson28, sqlLesson29, sqlLesson30, sqlLesson31, sqlLesson32, sqlLesson33, sqlLesson34, sqlLesson35, sqlLesson36, sqlLesson37, sqlLesson38, sqlLesson39, sqlLesson40, sqlLesson41, sqlLesson42, sqlLesson43, sqlLesson44, sqlLesson45, sqlLesson46, sqlLesson47, sqlLesson48, sqlLesson49, sqlLesson50, sqlLesson51, sqlLesson52, sqlLesson53, sqlLesson54, sqlLesson55, sqlLesson56, sqlLesson57, sqlLesson58, sqlLesson59, sqlLesson60, sqlLesson61, sqlLesson62, sqlLesson63, sqlLesson64, sqlLesson65, sqlLesson66, sqlLesson67, sqlLesson68, sqlLesson69, sqlLesson70, sqlLesson71, sqlLesson72, sqlLesson73, sqlLesson74, sqlLesson75, sqlLesson76, sqlLesson77, sqlLesson78, sqlLesson79, sqlLesson80, sqlLesson81, sqlLesson82, sqlLesson83, sqlLesson84, sqlLesson85, sqlLesson86, sqlLesson87, sqlLesson88, sqlLesson89, sqlLesson90, sqlLesson91, sqlLesson92, sqlLesson93, sqlLesson94, sqlLesson95, sqlLesson96, sqlLesson97, sqlLesson98, sqlLesson99, sqlLesson100, sqlLesson101, sqlLesson102, sqlLesson103, sqlLesson104, sqlLesson105, sqlLesson106, sqlLesson107, sqlLesson108, sqlLesson109, sqlLesson110, sqlLesson111, sqlLesson112, sqlLesson113, sqlLesson114, sqlLesson115, sqlLesson116, sqlLesson117, sqlLesson118, sqlLesson119, sqlLesson120, sqlLesson121, sqlLesson122, sqlLesson123, sqlLesson124, sqlLesson125, sqlLesson126, sqlLesson127, sqlLesson128, sqlLesson129, sqlLesson130, sqlLesson131, sqlLesson132, sqlLesson133, sqlLesson134, sqlLesson135, sqlLesson136, sqlLesson137, sqlLesson138, sqlLesson139, sqlLesson140, sqlLesson141, sqlLesson142, aspLesson1, aspLesson2, aspLesson3, aspLesson4, aspLesson5, aspLesson6, aspLesson7, aspLesson8, aspLesson9, aspLesson10, aspLesson11, aspLesson12, aspLesson13, aspLesson14, aspLesson15, aspLesson16, aspLesson17, aspLesson18, aspLesson19, aspLesson20, aspLesson21, aspLesson22, aspLesson23, aspLesson24, aspLesson25, aspLesson26, aspLesson27, aspLesson28, aspLesson29, aspLesson30, aspLesson31, aspLesson32, aspLesson33, aspLesson34, aspLesson35, aspLesson36, aspLesson37];

export const lessons: Lesson[] = rawLessons as unknown as Lesson[];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}

export function getLessonsByModule(moduleSlug: string): Lesson[] {
  return lessons
    .filter((l) => l.moduleSlug === moduleSlug)
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
