import type { Lesson } from '@/types';

import lesson1 from '../courses/dummy-course/module-1/lesson-1.json';
import lesson2 from '../courses/dummy-course/module-1/lesson-2.json';
import lesson3 from '../courses/dummy-course/module-2/lesson-1.json';
import sqlLesson1 from '../courses/sql-server/01-getting-started/01-what-is-sql-server.json';
import sqlLesson2 from '../courses/sql-server/01-getting-started/02-sql-server-basics.json';
import sqlLesson3 from '../courses/sql-server/01-getting-started/03-sql-server-aliases.json';
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

const rawLessons = [lesson1, lesson2, lesson3, sqlLesson1, sqlLesson2, sqlLesson3, sqlLesson4, sqlLesson5, sqlLesson6, sqlLesson7, sqlLesson8, sqlLesson9, sqlLesson10, sqlLesson11, sqlLesson12, sqlLesson13, sqlLesson14, sqlLesson15, sqlLesson16, sqlLesson17, sqlLesson18, sqlLesson19, sqlLesson20, sqlLesson21, sqlLesson22, sqlLesson23, sqlLesson24, sqlLesson25, sqlLesson26, sqlLesson27, sqlLesson28, sqlLesson29, sqlLesson30, sqlLesson31, sqlLesson32, sqlLesson33, sqlLesson34, sqlLesson35, sqlLesson36, sqlLesson37, sqlLesson38, sqlLesson39, sqlLesson40, sqlLesson41, sqlLesson42, sqlLesson43, sqlLesson44, sqlLesson45, sqlLesson46, sqlLesson47, sqlLesson48, sqlLesson49, sqlLesson50, sqlLesson51, sqlLesson52, sqlLesson53, sqlLesson54, sqlLesson55, sqlLesson56, sqlLesson57, sqlLesson58, sqlLesson59, sqlLesson60, sqlLesson61, sqlLesson62, sqlLesson63, sqlLesson64, sqlLesson65, sqlLesson66, sqlLesson67, sqlLesson68, sqlLesson69, sqlLesson70, sqlLesson71, sqlLesson72, sqlLesson73, sqlLesson74, sqlLesson75, sqlLesson76, sqlLesson77, sqlLesson78, sqlLesson79, sqlLesson80, sqlLesson81, sqlLesson82, sqlLesson83, sqlLesson84];

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
