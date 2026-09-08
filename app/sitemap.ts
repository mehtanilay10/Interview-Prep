import { MetadataRoute } from 'next';
import { getAllCourses, getModulesForCourse, getLessonsForCourse, getInterviewTechnologies, getInterviewQuestions } from '@/lib/content';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://interview-prep.dev';

function toSitemapEntry(url: string, priority = 0.8, changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'] = 'monthly'): MetadataRoute.Sitemap[0] {
  return {
    url,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    toSitemapEntry(`${BASE_URL}/`, 1, 'weekly'),
    toSitemapEntry(`${BASE_URL}/courses`, 0.9, 'weekly'),
    toSitemapEntry(`${BASE_URL}/interview-questions`, 0.8, 'weekly'),
    toSitemapEntry(`${BASE_URL}/search`, 0.7, 'weekly'),
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
    entries.push(toSitemapEntry(`${BASE_URL}/interview-questions/${tech.toLowerCase()}`));

    const questions = getInterviewQuestions(tech);
    for (const q of questions) {
      entries.push(toSitemapEntry(`${BASE_URL}/interview-questions/${tech.toLowerCase()}/${q.slug}`));
    }
  }

  return entries;
}
