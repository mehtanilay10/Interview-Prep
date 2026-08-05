import type { Module } from '@/types';

import sqlModule1 from '../courses/sql-server/01-getting-started/content.json';
import sqlModule2 from '../courses/sql-server/02-querying-data/content.json';
import sqlModule3 from '../courses/sql-server/03-joins/content.json';
import sqlModule4 from '../courses/sql-server/04-set-operations/content.json';
import sqlModule5 from '../courses/sql-server/05-grouping-aggregation-subqueries/content.json';
import sqlModule6 from '../courses/sql-server/06-data-modification-dml/content.json';
import sqlModule7 from '../courses/sql-server/07-database-schema-table-objects/content.json';
import sqlModule8 from '../courses/sql-server/08-data-types/content.json';
import sqlModule9 from '../courses/sql-server/09-constraints/content.json';
import sqlModule10 from '../courses/sql-server/10-indexes/content.json';
import sqlModule11 from '../courses/sql-server/11-views/content.json';
import sqlModule12 from '../courses/sql-server/12-stored-procedures-functions/content.json';

import sqlModule13 from '../courses/sql-server/13-triggers/content.json';
import sqlModule14 from '../courses/sql-server/14-transactions-error-handling-backup/content.json';
import sqlModule15 from '../courses/sql-server/15-advanced-topics/content.json';

const rawModules = [sqlModule1, sqlModule2, sqlModule3, sqlModule4, sqlModule5, sqlModule6, sqlModule7, sqlModule8, sqlModule9, sqlModule10, sqlModule11, sqlModule12, sqlModule13, sqlModule14, sqlModule15];

export const modules: Module[] = rawModules as unknown as Module[];

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}

export function getModulesByCourse(courseSlug: string): Module[] {
  return modules
    .filter((m) => m.courseSlug === courseSlug)
    .sort((a, b) => a.order - b.order);
}
