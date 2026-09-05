import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
  getLessonBySlug,
  getInterviewQuestions,
  getInterviewTechnologies,
  getInterviewLevelsForTechnology,
} from '@/lib/content';
import { buildLessonMetadata } from '@/lib/seo';
import { ContentBlockRenderer } from '@/components/content/ContentBlockRenderer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';
import { ReadingTimeBadge } from '@/components/ui/ReadingTimeBadge';

const TECH_NAME_MAP: Record<string, string> = {
  'csharp': 'C#',
  'aspnet-core': 'ASP.NET Core',
  'oop': 'OOP',
  'javascript': 'JavaScript',
  'general': 'General',
  'system-design': 'System Design',
  'behavioral': 'Behavioral',
};

const TECH_SLUG_MAP: Record<string, string> = {
  'c#': 'csharp',
  'asp.net core': 'aspnet-core',
  'oop': 'oop',
  'javascript': 'javascript',
  'general': 'general',
  'system design': 'system-design',
  'behavioral': 'behavioral',
};

const LEVEL_NAME_MAP: Record<string, string> = {
  'beginner': 'Beginner',
  'intermediate': 'Intermediate',
  'advanced': 'Advanced',
  'scenario': 'Scenario',
  'system-design': 'System Design',
  'rapid-fire': 'Rapid Fire',
  'interview-traps': 'Interview Traps',
};

export async function generateStaticParams() {
  const technologies = getInterviewTechnologies();
  const params: { technology: string; level: string; slug: string }[] = [];
  for (const tech of technologies) {
    const techSlug = Object.entries(TECH_SLUG_MAP).find(([, v]) => v === tech.toLowerCase())?.[0] ?? tech.toLowerCase();
    const questions = getInterviewQuestions(tech, '');
    const seen = new Set<string>();
    for (const q of questions) {
      const key = `${q.slug}`;
      if (seen.has(key)) continue;
      seen.add(key);
      params.push({ technology: techSlug, level: q.moduleSlug, slug: q.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ technology: string; level: string; slug: string }> }): Promise<Metadata> {
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

export default async function InterviewLessonDetailPage({ params }: { params: Promise<{ technology: string; level: string; slug: string }> }) {
  const { technology, level, slug } = await params;
  const tech = TECH_NAME_MAP[technology] ?? technology;
  const levelInfo = getInterviewLevelsForTechnology(tech).find(l => l.slug === level);
  const levelTitle = levelInfo?.title ?? level;

  const lesson = getLessonBySlug(slug);
  if (!lesson) notFound();

  const moduleQuestions = getInterviewQuestions(tech, level);
  const currentIdx = moduleQuestions.findIndex((q) => q.slug === slug);
  const prev = currentIdx > 0 ? moduleQuestions[currentIdx - 1] : null;
  const next = currentIdx < moduleQuestions.length - 1 ? moduleQuestions[currentIdx + 1] : null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { label: 'Interview Questions', href: '/interview-questions' },
          { label: tech, href: `/interview-questions/${technology}` },
          { label: levelTitle, href: `/interview-questions/${technology}/${level}` },
          { label: lesson.title },
        ]}
        className="mb-4"
      />

      <header className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <DifficultyBadge difficulty={lesson.difficulty} size="md" />
          <ReadingTimeBadge minutes={lesson.estimatedMinutes} />
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
            href={`/interview-questions/${technology}/${level}/${prev.slug}`}
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
            href={`/interview-questions/${technology}/${level}/${next.slug}`}
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
