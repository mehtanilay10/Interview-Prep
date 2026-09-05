import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Clock } from 'lucide-react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { ReadingTimeBadge } from '@/components/ui/ReadingTimeBadge';
import { getInterviewTechnologies, getInterviewQuestions, getInterviewLevelsForTechnology } from '@/lib/content';

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

export async function generateStaticParams() {
  const technologies = getInterviewTechnologies();
  const params: { technology: string; level: string }[] = [];
  for (const tech of technologies) {
    const techSlug = TECH_SLUG_MAP[tech.toLowerCase()] ?? tech.toLowerCase();
    const levels = getInterviewLevelsForTechnology(tech);
    for (const level of levels) {
      params.push({ technology: techSlug, level: level.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ technology: string; level: string }> }): Promise<Metadata> {
  const { technology, level } = await params;
  const levelInfo = getInterviewLevelsForTechnology(technology).find(l => l.slug === level);
  const title = levelInfo?.title ?? level;
  return {
    title: `${technology} ${title} Interview Questions`,
    description: `Browse ${technology} ${title.toLowerCase()} interview questions and answers.`,
  };
}

export default async function InterviewLevelPage({ params }: { params: Promise<{ technology: string; level: string }> }) {
  const { technology, level } = await params;
  const tech = TECH_NAME_MAP[technology] ?? technology;
  const levelInfo = getInterviewLevelsForTechnology(tech).find(l => l.slug === level);
  const levelTitle = levelInfo?.title ?? level;

  const questions = getInterviewQuestions(tech, level);

  if (questions.length === 0) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-6">
        <Link
          href={`/interview-questions/${technology}`}
          className="inline-flex items-center gap-1 text-sm text-fg-muted transition-colors hover:text-accent-fg"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to {tech} levels
        </Link>
      </div>

      <SectionHeader
        eyebrow="🎯 Interview Prep"
        title={`${tech} ${levelTitle} Questions`}
        description={`${questions.length} ${levelTitle.toLowerCase()} interview questions for ${tech}.`}
        titleAs="h1"
      />

      <div className="space-y-3">
        {questions.map((q) => (
          <Link
            key={q.id}
            href={`/interview-questions/${technology}/${level}/${q.slug}`}
            className="group flex items-center gap-4 rounded-lg border border-border bg-canvas p-4 transition-all hover:border-accent-fg hover:shadow-sm"
          >
            <div className="flex-1 min-w-0">
              <p className="font-medium text-fg-default group-hover:text-accent-fg transition-colors">
                {q.title}
              </p>
              <p className="mt-1 text-sm text-fg-muted line-clamp-1">
                {q.description}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <ReadingTimeBadge minutes={q.estimatedMinutes} />
              <BookOpen className="h-4 w-4 text-fg-subtle" aria-hidden="true" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
