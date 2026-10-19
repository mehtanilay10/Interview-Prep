import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://interview-prep.dev';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // API routes are internal; /user/* is login-gated account data.
      disallow: ['/api/', '/user/'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
