import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
  getLessonBySlug,
  getInterviewQuestions,
  getInterviewTechnologies,
} from '@/lib/content';
import { buildLessonMetadata } from '@/lib/seo';
import { ContentBlockRenderer } from '@/components/content/ContentBlockRenderer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';
import { ReadingTimeBadge } from '@/components/ui/ReadingTimeBadge';
import { PrintButton } from '@/components/ui/PrintButton';

const TECH_NAME_MAP: Record<string, string> = {
  'csharp': 'C#',
  'aspnet-core': 'ASP.NET Core',
  'oop': 'OOP',
  'javascript': 'JavaScript',
  'general': 'General',
  'system-design': 'System Design',
  'behavioral': 'Behavioral',
  'sql-server': 'SQL Server',
  'fullstack-scenarios': 'Full-Stack Scenarios',
  'performance-optimization': 'Performance Optimization',
  'cicd-pipelines': 'CI/CD Pipelines',
};

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

/**
 * Maintenance rule:
 * When adding a new interview question technology, update BOTH:
 * - The lesson JSON `technology` field
 * - TECH_NAME_MAP and TECH_SLUG_MAP in both interview question pages
 *   (`app/interview-questions/[technology]/page.tsx` and
 *    `app/interview-questions/[technology]/[slug]/page.tsx`)
 */

export async function generateStaticParams() {
  const technologies = getInterviewTechnologies();
  const params: { technology: string; slug: string }[] = [];
  for (const tech of technologies) {
    const questions = getInterviewQuestions(tech, '');
    const seen = new Set<string>();
    for (const q of questions) {
      const key = `${q.slug}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const techSlug = TECH_SLUG_MAP[tech.toLowerCase()] ?? tech.toLowerCase();
      params.push({ technology: techSlug, slug: q.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ technology: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  if (!lesson) return {};
  return buildLessonMetadata({
    title: lesson.title,
    description: lesson.description,
    moduleSlug: lesson.moduleSlug,
    lessonSlug: slug,
  });
}

export default async function InterviewLessonDetailPage({ params }: { params: Promise<{ technology: string; slug: string }> }) {
  const { technology, slug } = await params;
  const tech = TECH_NAME_MAP[technology] ?? technology;

  const lesson = getLessonBySlug(slug);
  if (!lesson) notFound();

  const allQuestions = getInterviewQuestions(tech);
  const currentIdx = allQuestions.findIndex((q) => q.slug === slug);
  const prev = currentIdx > 0 ? allQuestions[currentIdx - 1] : null;
  const next = currentIdx < allQuestions.length - 1 ? allQuestions[currentIdx + 1] : null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { label: 'Interview Questions', href: '/interview-questions' },
          { label: tech, href: `/interview-questions/${technology}` },
          { label: lesson.title },
        ]}
        className="mb-4"
      />

      <header className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <DifficultyBadge difficulty={lesson.difficulty} size="md" />
          <ReadingTimeBadge minutes={lesson.estimatedMinutes} />
          <PrintButton label="Print / PDF" />
        </div>
        <h1 className="mb-2 text-2xl font-bold leading-snug text-fg-default sm:text-3xl">
          {lesson.title}
        </h1>
        <p className="text-base text-fg-muted">{lesson.description}</p>
      </header>

      <ContentBlockRenderer blocks={lesson.blocks} />

      <div className="mt-10 flex items-center justify-between gap-4 border-t border-border pt-6">
        {prev ? (
          <Link
            href={`/interview-questions/${technology}/${prev.slug}`}
            className="flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-fg-muted transition-colors hover:border-accent-fg hover:text-accent-fg max-w-[45%]"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="line-clamp-1">{prev.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {next && (
          <Link
            href={`/interview-questions/${technology}/${next.slug}`}
            className="flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-fg-muted transition-colors hover:border-accent-fg hover:text-accent-fg max-w-[45%]"
          >
            <span className="line-clamp-1">{next.title}</span>
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </Link>
        )}
      </div>
    </div>
  );
}
