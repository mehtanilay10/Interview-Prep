/**
 * Category system for organizing content by technology stack.
 * Each course/problem is assigned to one or more categories.
 */

export type ContentCategory = 'backend' | 'frontend' | 'ai' | 'architecture' | 'devops';

export interface CategoryInfo {
  id: ContentCategory;
  label: string;
  icon: string;
  description: string;
  color: string;
}

export const CATEGORIES: Record<ContentCategory, CategoryInfo> = {
  backend: {
    id: 'backend',
    label: 'Backend',
    icon: '⚙️',
    description: 'Server-side development, APIs, databases, and backend services',
    color: 'accent',
  },
  frontend: {
    id: 'frontend',
    label: 'Frontend',
    icon: '🎨',
    description: 'Client-side development, UI/UX, React, and modern web frameworks',
    color: 'success',
  },
  ai: {
    id: 'ai',
    label: 'AI',
    icon: '🤖',
    description: 'Artificial intelligence, machine learning, LLMs, and AI tools',
    color: 'attention',
  },
  architecture: {
    id: 'architecture',
    label: 'Architecture',
    icon: '🏗️',
    description: 'System design, software architecture, and enterprise patterns',
    color: 'done',
  },
  devops: {
    id: 'devops',
    label: 'DevOps',
    icon: '🚀',
    description: 'DevOps, CI/CD, cloud services, and infrastructure',
    color: 'purple',
  },
};

/**
 * Map course slugs to their primary category
 */
export const COURSE_CATEGORY_MAP: Record<string, ContentCategory> = {
  // Backend
  'aspnet-core': 'backend',
  'aspnet-core-web-api': 'backend',
  'csharp-fundamentals': 'backend',
  'ef-core': 'backend',
  'linq': 'backend',
  'sql-server': 'backend',
  'postgresql': 'backend',
  'dotnet-nuget-packages': 'backend',
  'dotnet-ai-backend': 'backend',
  'unit-testing-dotnet': 'backend',
  'graphql-dotnet': 'backend',
  'authentication-authorization': 'backend',
  'message-queues-event-streaming': 'backend',
  'redis-caching-strategies': 'backend',
  'prisma': 'backend',

  // Frontend
  'react-fundamentals': 'frontend',
  'react-advanced-patterns': 'frontend',
  'react-query': 'frontend',
  'react-testing': 'frontend',
  'redux': 'frontend',
  'typescript-for-react': 'frontend',
  'next-js-full-stack-react': 'frontend',
  'frontend-performance-engineering': 'frontend',

  // AI
  'ai-basics': 'ai',
  'codex': 'ai',
  'claude': 'ai',
  'dotnet-react-ai-lead': 'ai',

  // Architecture
  'oops-concepts': 'architecture',
  'design-patterns': 'architecture',
  'microservices-architecture': 'architecture',
  'system-design-interviews': 'architecture',
  'clean-code-csharp': 'architecture',
  'senior-software-engineering': 'architecture',
  'programming-computer-web-foundations': 'architecture',

  // DevOps
  'devops': 'devops',
  'aws': 'devops',
  'azure': 'devops',
  'aws-for-aspnet': 'devops',
  'azure-for-aspnet': 'devops',
  'git-linux-developer-workflow': 'devops',
  'yarn-npm-packages': 'devops',
  'fullstack-security': 'devops',
};

/**
 * Map problem course slugs to their primary category
 */
export const PROBLEM_CATEGORY_MAP: Record<string, ContentCategory> = {
  'csharp-problems': 'backend',
  'sql-problems': 'backend',
  'system-design': 'architecture',
  'hld': 'architecture',
  'lld': 'architecture',
  'api-design': 'architecture',
  'database-design': 'backend',
  'architecture-decision-lab-problems': 'architecture',
  'aspnet-core-problems': 'backend',
  'azure-problems': 'devops',
  'production-incident-lab-problems': 'devops',
  'senior-code-review-lab-problems': 'architecture',
  'full-stack-senior-projects': 'architecture',
  'system-design-problems': 'architecture',
};

/**
 * Get category for a course slug
 */
export function getCategoryForCourse(slug: string): ContentCategory | null {
  return COURSE_CATEGORY_MAP[slug] || null;
}

/**
 * Get category for a problem course slug
 */
export function getCategoryForProblem(slug: string): ContentCategory | null {
  return PROBLEM_CATEGORY_MAP[slug] || null;
}

/**
 * Get category info
 */
export function getCategoryInfo(category: ContentCategory): CategoryInfo {
  return CATEGORIES[category];
}

/**
 * Get all categories
 */
export function getAllCategories(): CategoryInfo[] {
  return Object.values(CATEGORIES);
}
