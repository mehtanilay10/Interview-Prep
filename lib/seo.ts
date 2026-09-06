import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://interview-prep.dev';
const SITE_NAME = 'Interview Prep';
const DEFAULT_DESCRIPTION =
  'AI-powered interview preparation course. Master AI tools, prompting, automation, and modern workflows for technical interviews.';

export function buildMetadata({
  title,
  description,
  path = '',
  image,
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const desc = description ?? DEFAULT_DESCRIPTION;
  const url = `${BASE_URL}${path}`;
  const ogImage = image ?? `${BASE_URL}/og-default.png`;

  return {
    title: fullTitle,
    description: desc,
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      images: [ogImage],
    },
    alternates: { canonical: url },
    robots: { index: true, follow: true },
  };
}

export function buildLessonMetadata(opts: {
  title: string;
  description: string;
  moduleSlug: string;
  lessonSlug: string;
}): Metadata {
  return buildMetadata({
    title: opts.title,
    description: opts.description,
    path: `/courses/${opts.moduleSlug}/${opts.lessonSlug}`,
  });
}

export function buildModuleMetadata(opts: {
  title: string;
  description: string;
  moduleSlug: string;
}): Metadata {
  return buildMetadata({
    title: opts.title,
    description: opts.description,
    path: `/courses/${opts.moduleSlug}`,
  });
}
