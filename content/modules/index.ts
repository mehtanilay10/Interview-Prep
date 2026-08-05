import type { Module } from '@/types';

import module1 from '../courses/dummy-course/module-1/content.json';
import module2 from '../courses/dummy-course/module-2/content.json';
import sqlModule1 from '../courses/sql-server/01-getting-started/content.json';
import sqlModule2 from '../courses/sql-server/02-querying-data/content.json';
import sqlModule3 from '../courses/sql-server/03-joins/content.json';
import sqlModule4 from '../courses/sql-server/04-set-operations/content.json';

const rawModules = [module1, module2, sqlModule1, sqlModule2, sqlModule3, sqlModule4];

export const modules: Module[] = rawModules as unknown as Module[];

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}

export function getModulesByCourse(courseSlug: string): Module[] {
  return modules
    .filter((m) => m.courseSlug === courseSlug)
    .sort((a, b) => a.order - b.order);
}
