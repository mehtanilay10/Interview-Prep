import { MetadataRoute } from 'next';
import { getAllCourses, getModulesForCourse, getLessonsForCourse, getInterviewTechnologies, getInterviewQuestions } from '@/lib/content';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://interview-prep.dev';

const TECH_SLUG_MAP: Record<string, string> = {
  'c#': 'csharp',
  'asp.net core': 'aspnet-core',
  'oop': 'oop',
  'javascript': 'javascript',
  'general': 'general',
  'system design': 'system-design',
  'behavioral': 'behavioral',
  'sql server': 'sql-server',
  'full-stack scenarios': 'fullstack-scenarios',
  'performance optimization': 'performance-optimization',
  'ci/cd pipelines': 'cicd-pipelines',
};

function toSitemapEntry(url: string, priority = 0.8, changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'] = 'monthly', lastModified?: Date): MetadataRoute.Sitemap[0] {
  return {
    url,
    lastModified: lastModified ?? new Date(),
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    toSitemapEntry(`${BASE_URL}/`, 1, 'weekly'),
    toSitemapEntry(`${BASE_URL}/courses`, 0.9, 'weekly'),
    toSitemapEntry(`${BASE_URL}/cheatsheet`, 0.8, 'weekly'),
    toSitemapEntry(`${BASE_URL}/interview-questions`, 0.8, 'weekly'),
    toSitemapEntry(`${BASE_URL}/problems`, 0.8, 'weekly'),
    toSitemapEntry(`${BASE_URL}/progress`, 0.7, 'weekly'),
    toSitemapEntry(`${BASE_URL}/search`, 0.7, 'weekly'),
    toSitemapEntry(`${BASE_URL}/login`, 0.5, 'monthly'),
  ];

  const courses = getAllCourses().filter((c) => !c.isInterview);

  for (const course of courses) {
    entries.push(toSitemapEntry(`${BASE_URL}/courses/${course.slug}`));

    const modules = getModulesForCourse(course.slug);
    for (const mod of modules) {
      entries.push(toSitemapEntry(`${BASE_URL}/courses/${course.slug}/${mod.slug}`));

      const lessons = getLessonsForCourse(course.slug).filter((l) => l.moduleSlug === mod.slug);
      for (const lesson of lessons) {
        entries.push(toSitemapEntry(`${BASE_URL}/courses/${course.slug}/${mod.slug}/${lesson.slug}`));
      }
    }
  }

  const technologies = getInterviewTechnologies();
  for (const tech of technologies) {
    const techSlug = TECH_SLUG_MAP[tech.toLowerCase()] ?? tech.toLowerCase();
    entries.push(toSitemapEntry(`${BASE_URL}/interview-questions/${techSlug}`));

    const questions = getInterviewQuestions(tech);
    for (const q of questions) {
      entries.push(toSitemapEntry(`${BASE_URL}/interview-questions/${techSlug}/${q.slug}`));
    }
  }

  const cheatsheetModules = getModulesForCourse('cheatsheet');
  for (const mod of cheatsheetModules) {
    entries.push(toSitemapEntry(`${BASE_URL}/cheatsheet/${mod.slug}`));

    const lessons = getLessonsForCourse('cheatsheet').filter((l) => l.moduleSlug === mod.slug);
    for (const lesson of lessons) {
      entries.push(toSitemapEntry(`${BASE_URL}/cheatsheet/${mod.slug}/${lesson.slug}`));
    }
  }

  const problemCourses = [
    { slug: 'csharp', label: 'C# Problems' },
    { slug: 'sql', label: 'SQL Problems' },
    { slug: 'system-design', label: 'System Design Problems' },
    { slug: 'azure-problems', label: 'Azure Problems' },
    { slug: 'lld-problems', label: 'Low Level Design Problems' },
    { slug: 'hld-problems', label: 'High Level Design Problems' },
  ];

  for (const course of problemCourses) {
    entries.push(toSitemapEntry(`${BASE_URL}/problems/${course.slug}`, 0.8, 'weekly'));

    const modules = getModulesForCourse(course.slug);
    for (const mod of modules) {
      entries.push(toSitemapEntry(`${BASE_URL}/problems/${course.slug}/${mod.slug}`));

      const lessons = getLessonsForCourse(course.slug).filter((l) => l.moduleSlug === mod.slug);
      for (const lesson of lessons) {
        entries.push(toSitemapEntry(`${BASE_URL}/problems/${course.slug}/${mod.slug}/${lesson.slug}`));
      }
    }
  }

  return entries;
}
