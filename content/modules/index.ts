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

import aspModule1 from '../courses/aspnet-core/01-getting-started-aspnet-core-mvc/content.json';
import aspModule2 from '../courses/aspnet-core/02-controllers-routing/content.json';
import aspModule3 from '../courses/aspnet-core/03-model-binding-validation/content.json';
import aspModule4 from '../courses/aspnet-core/04-views-tag-helpers/content.json';
import aspModule5 from '../courses/aspnet-core/05-dependency-injection-configuration/content.json';
import aspModule6 from '../courses/aspnet-core/06-filters/content.json';
import aspModule7 from '../courses/aspnet-core/07-web-api/content.json';
import aspModule8 from '../courses/aspnet-core/08-authentication-identity/content.json';
import aspModule9 from '../courses/aspnet-core/09-localization-globalization/content.json';
import aspModule10 from '../courses/aspnet-core/10-ado-net-data-access/content.json';
import aspModule11 from '../courses/aspnet-core/11-cors-cross-origin/content.json';

const rawModules = [sqlModule1, sqlModule2, sqlModule3, sqlModule4, sqlModule5, sqlModule6, sqlModule7, sqlModule8, sqlModule9, sqlModule10, sqlModule11, sqlModule12, sqlModule13, sqlModule14, sqlModule15, aspModule1, aspModule2, aspModule3, aspModule4, aspModule5, aspModule6, aspModule7, aspModule8, aspModule9, aspModule10, aspModule11];

export const modules: Module[] = rawModules as unknown as Module[];

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}

export function getModulesByCourse(courseSlug: string): Module[] {
  return modules
    .filter((m) => m.courseSlug === courseSlug)
    .sort((a, b) => a.order - b.order);
}
