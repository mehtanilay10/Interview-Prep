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

import linqModule1 from '../courses/linq/01-getting-started-linq/content.json';
import linqModule2 from '../courses/linq/02-linq-fundamentals-syntax/content.json';
import linqModule3 from '../courses/linq/03-filtering-projection/content.json';
import linqModule4 from '../courses/linq/04-sorting-grouping/content.json';
import linqModule5 from '../courses/linq/05-joining-data/content.json';
import linqModule6 from '../courses/linq/06-set-operations/content.json';
import linqModule7 from '../courses/linq/07-aggregation-operators/content.json';
import linqModule8 from '../courses/linq/08-quantifiers-element-operators/content.json';
import linqModule9 from '../courses/linq/09-partitioning-operators/content.json';
import linqModule10 from '../courses/linq/10-conversion-generation-operators/content.json';
import linqModule11 from '../courses/linq/11-advanced-linq-concepts/content.json';

import efModule1 from '../courses/ef-core/01-getting-started-ef-core/content.json';
import efModule2 from '../courses/ef-core/02-dbcontext-configuration/content.json';
import efModule3 from '../courses/ef-core/03-conventions-relationships/content.json';
import efModule4 from '../courses/ef-core/04-data-operations-connected/content.json';
import efModule5 from '../courses/ef-core/05-data-operations-disconnected/content.json';
import efModule6 from '../courses/ef-core/06-change-tracking/content.json';
import efModule7 from '../courses/ef-core/07-querying/content.json';
import efModule8 from '../courses/ef-core/08-inheritance-strategies/content.json';
import efModule9 from '../courses/ef-core/09-migrations/content.json';
import efModule10 from '../courses/ef-core/10-advanced-features/content.json';
import efModule11 from '../courses/ef-core/11-database-first-diagnostics/content.json';
import efModule12 from '../courses/ef-core/12-performance-bulk-operations/content.json';

import cleanCodeModule1 from '../courses/clean-code-csharp/01-solid-principles/content.json';
import cleanCodeModule2 from '../courses/clean-code-csharp/02-creational-patterns/content.json';
import cleanCodeModule3 from '../courses/clean-code-csharp/03-structural-patterns/content.json';
import cleanCodeModule4 from '../courses/clean-code-csharp/04-behavioral-patterns/content.json';
import cleanCodeModule5 from '../courses/clean-code-csharp/05-clean-code-practices/content.json';
import cleanCodeModule6 from '../courses/clean-code-csharp/06-architecture-patterns/content.json';

import unitTestModule1 from '../courses/unit-testing-dotnet/01-testing-fundamentals/content.json';
import unitTestModule2 from '../courses/unit-testing-dotnet/02-xunit-basics/content.json';
import unitTestModule3 from '../courses/unit-testing-dotnet/03-mocking-fakes/content.json';
import unitTestModule4 from '../courses/unit-testing-dotnet/04-integration-testing/content.json';
import unitTestModule5 from '../courses/unit-testing-dotnet/05-tdd/content.json';

import reactTestModule1 from '../courses/react-testing/01-testing-fundamentals/content.json';
import reactTestModule2 from '../courses/react-testing/02-jest-basics/content.json';
import reactTestModule3 from '../courses/react-testing/03-react-testing-library/content.json';
import reactTestModule4 from '../courses/react-testing/04-component-testing/content.json';
import reactTestModule5 from '../courses/react-testing/05-e2e-testing/content.json';

import oopModule1 from '../courses/oops-concepts/01-oop-fundamentals/content.json';
import oopModule2 from '../courses/oops-concepts/02-encapsulation-data-hiding/content.json';
import oopModule3 from '../courses/oops-concepts/03-inheritance/content.json';
import oopModule4 from '../courses/oops-concepts/04-polymorphism/content.json';
import oopModule5 from '../courses/oops-concepts/05-abstraction/content.json';
import oopModule6 from '../courses/oops-concepts/06-interfaces-abstract-classes/content.json';

const rawModules = [sqlModule1, sqlModule2, sqlModule3, sqlModule4, sqlModule5, sqlModule6, sqlModule7, sqlModule8, sqlModule9, sqlModule10, sqlModule11, sqlModule12, sqlModule13, sqlModule14, sqlModule15, aspModule1, aspModule2, aspModule3, aspModule4, aspModule5, aspModule6, aspModule7, aspModule8, aspModule9, aspModule10, aspModule11, linqModule1, linqModule2, linqModule3, linqModule4, linqModule5, linqModule6, linqModule7, linqModule8, linqModule9, linqModule10, linqModule11, efModule1, efModule2, efModule3, efModule4, efModule5, efModule6, efModule7, efModule8, efModule9, efModule10, efModule11, efModule12, cleanCodeModule1, cleanCodeModule2, cleanCodeModule3, cleanCodeModule4, cleanCodeModule5, cleanCodeModule6, unitTestModule1, unitTestModule2, unitTestModule3, unitTestModule4, unitTestModule5, reactTestModule1, reactTestModule2, reactTestModule3, reactTestModule4, reactTestModule5, oopModule1, oopModule2, oopModule3, oopModule4, oopModule5, oopModule6];

export const modules: Module[] = rawModules as unknown as Module[];

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}

export function getModulesByCourse(courseSlug: string): Module[] {
  return modules
    .filter((m) => m.courseSlug === courseSlug)
    .sort((a, b) => a.order - b.order);
}
