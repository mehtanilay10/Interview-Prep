import type { PlanWeek } from '@/types';

import aiBasicsPlan from './ai-basics-12-week.json';
import codexPlan from './codex-12-week.json';

const rawPlans = [aiBasicsPlan, codexPlan];

export const plans: PlanWeek[][] = rawPlans as unknown as PlanWeek[][];

export function getPlanForCourse(courseSlug: string): PlanWeek[] | undefined {
  if (courseSlug === 'ai-basics') return plans[0];
  if (courseSlug === 'codex') return plans[1];
  return undefined;
}

export function getPlanWeek(courseSlug: string, week: number): PlanWeek | undefined {
  const plan = getPlanForCourse(courseSlug);
  if (!plan) return undefined;
  return plan.find((w) => w.week === week);
}
