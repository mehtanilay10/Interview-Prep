import { MetadataRoute } from 'next';
import { getAllCourses } from '@/lib/content';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://interview-prep.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const courses = getAllCourses();

  const staticRoutes = [
    '/',
    '/courses',
    '/safety',
    '/advanced',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1 : 0.8,
  }));

  const courseRoutes = courses.map((course) => ({
    url: `${BASE_URL}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...courseRoutes];
}
