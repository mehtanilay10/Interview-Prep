import type { Roadmap } from "@/types";

import aiRoadmap from "./ai/roadmaps/roadmap.json";
import architectureRoadmap from "./architecture/roadmaps/roadmap.json";
import backendRoadmap from "./backend/roadmaps/roadmap.json";
import databaseRoadmap from "./database/roadmaps/roadmap.json";
import devopsRoadmap from "./devops/roadmaps/roadmap.json";
import frontendRoadmap from "./frontend/roadmaps/roadmap.json";
import fundamentalsRoadmap from "./fundamentals/roadmaps/roadmap.json";

export const roadmaps: Roadmap[] = [
	{ ...aiRoadmap, category: "ai", slug: "roadmap" },
	{ ...architectureRoadmap, category: "architecture", slug: "roadmap" },
	{ ...backendRoadmap, category: "backend", slug: "roadmap" },
	{ ...databaseRoadmap, category: "database", slug: "roadmap" },
	{ ...devopsRoadmap, category: "devops", slug: "roadmap" },
	{ ...frontendRoadmap, category: "frontend", slug: "roadmap" },
	{ ...fundamentalsRoadmap, category: "fundamentals", slug: "roadmap" },
] as unknown as Roadmap[];

export function getRoadmapByCategory(category: string): Roadmap | undefined {
	return roadmaps.find((r) => r.category === category);
}
