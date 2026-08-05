import type { Module } from '@/types';

import module1 from '../courses/dummy-course/module-1/content.json';
import module2 from '../courses/dummy-course/module-2/content.json';

const rawModules = [module1, module2];

export const modules: Module[] = rawModules as unknown as Module[];

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}

export function getModulesByCourse(courseSlug: string): Module[] {
  return modules
    .filter((m) => m.courseSlug === courseSlug)
    .sort((a, b) => a.order - b.order);
}
