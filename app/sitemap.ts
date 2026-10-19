import { MetadataRoute } from 'next';
import { getAllCourses, getProblemCourses, getModulesForCourse, getLessonsForCourse, getInterviewTechnologies, getInterviewQuestions, getNavigationCategories } from '@/lib/content';
import { getCourseCategory } from '@/lib/content';

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
    toSitemapEntry(`${BASE_URL}/interview-questions`, 0.8, 'weekly'),
    toSitemapEntry(`${BASE_URL}/roadmaps`, 0.8, 'weekly'),
    toSitemapEntry(`${BASE_URL}/search`, 0.7, 'weekly'),
    toSitemapEntry(`${BASE_URL}/ai/glossary`, 0.8, 'weekly'),
    toSitemapEntry(`${BASE_URL}/ai/prompts`, 0.8, 'weekly'),
    toSitemapEntry(`${BASE_URL}/user/progress`, 0.7, 'weekly'),
    toSitemapEntry(`${BASE_URL}/user/bookmarks`, 0.7, 'weekly'),
    toSitemapEntry(`${BASE_URL}/user/notes`, 0.7, 'weekly'),
    toSitemapEntry(`${BASE_URL}/user/personalization`, 0.7, 'weekly'),
    toSitemapEntry(`${BASE_URL}/user/login`, 0.5, 'monthly'),
  ];

  const courses = getAllCourses().filter((c) => !c.isInterview);

  // Category listing pages (/[category]/courses, /problems, /cheatsheets)
  for (const cat of getNavigationCategories()) {
    for (const section of cat.sections) {
      entries.push(toSitemapEntry(`${BASE_URL}${section.href}`, 0.8, 'weekly'));
    }
  }

  for (const course of courses) {
    const category = getCourseCategory(course.slug);
    entries.push(toSitemapEntry(`${BASE_URL}/${category}/courses/${course.slug}`));

    const modules = getModulesForCourse(course.slug);
    const courseLessons = getLessonsForCourse(course.slug);
    for (const mod of modules) {
      entries.push(toSitemapEntry(`${BASE_URL}/${category}/courses/${course.slug}/${mod.slug}`));

      const lessons = courseLessons.filter((l) => l.moduleSlug === mod.slug);
      for (const lesson of lessons) {
        entries.push(toSitemapEntry(`${BASE_URL}/${category}/courses/${course.slug}/${mod.slug}/${lesson.slug}`));
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
  const cheatsheetLessons = getLessonsForCourse('cheatsheet');
  for (const mod of cheatsheetModules) {
    const category = getCourseCategory(mod.slug);
    entries.push(toSitemapEntry(`${BASE_URL}/${category}/cheatsheets/${mod.slug}`));

    const lessons = cheatsheetLessons.filter((l) => l.moduleSlug === mod.slug);
    for (const lesson of lessons) {
      entries.push(toSitemapEntry(`${BASE_URL}/${category}/cheatsheets/${mod.slug}/${lesson.slug}`));
    }
  }

  const problemCourses = getProblemCourses();

  for (const course of problemCourses) {
    const category = getCourseCategory(course.slug);
    entries.push(toSitemapEntry(`${BASE_URL}/${category}/problems/${course.slug}`, 0.8, 'weekly'));

    const modules = getModulesForCourse(course.slug);
    const courseLessons = getLessonsForCourse(course.slug);
    for (const mod of modules) {
      entries.push(toSitemapEntry(`${BASE_URL}/${category}/problems/${course.slug}/${mod.slug}`));

      const lessons = courseLessons.filter((l) => l.moduleSlug === mod.slug);
      for (const lesson of lessons) {
        entries.push(toSitemapEntry(`${BASE_URL}/${category}/problems/${course.slug}/${mod.slug}/${lesson.slug}`));
      }
    }
  }

  return entries;
}
