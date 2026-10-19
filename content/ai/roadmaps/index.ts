import type { RoadmapNode } from '@/types';

import aiBasicsRoadmap from './ai-basics-roadmap.json';
import codexRoadmap from './codex-roadmap.json';
import claudeRoadmap from './claude-roadmap.json';

const rawRoadmaps = [aiBasicsRoadmap, codexRoadmap, claudeRoadmap];

export const roadmaps: RoadmapNode[] = rawRoadmaps as unknown as RoadmapNode[];

export function getRoadmapForCourse(courseSlug: string): RoadmapNode | undefined {
  return roadmaps.find((r) => r.id.includes(courseSlug));
}
