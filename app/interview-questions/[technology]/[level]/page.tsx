import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Clock } from 'lucide-react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { ReadingTimeBadge } from '@/components/ui/ReadingTimeBadge';
import { getInterviewTechnologies, getInterviewQuestions, getLessonBySlug } from '@/lib/content';

const TECH_NAME_MAP: Record<string, string> = {
  'csharp': 'C#',
  'aspnet-core': 'ASP.NET Core',
  'oop': 'OOP',
  'javascript': 'JavaScript',
  'general': 'General',
  'system-design': 'System Design',
  'behavioral': 'Behavioral',
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
  const params: { technology: string; level: string }[] = [];
  for (const tech of technologies) {
    const techSlug = Object.entries(TECH_NAME_MAP).find(([, v]) => v === tech)?.[0] ?? tech.toLowerCase();
    const questions = getInterviewQuestions(tech, '');
    // We need to get unique levels for this technology
    const levels = new Set<string>();
    for (const q of questions) {
      const mod = q.moduleSlug;
      const levelName = LEVEL_NAME_MAP[mod] ?? mod;
      levels.add(levelName.toLowerCase().replace(/\s+/g, '-'));
    }
    for (const level of levels) {
      params.push({ technology: techSlug, level });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ technology: string; level: string }> }): Promise<Metadata> {
  const { technology, level } = await params;
  const tech = TECH_NAME_MAP[technology] ?? technology;
  const levelName = LEVEL_NAME_MAP[level] ?? level;
  return {
    title: `${tech} ${levelName} Interview Questions`,
    description: `Browse ${tech} ${levelName.toLowerCase()} interview questions and answers.`,
  };
}

export default async function InterviewLevelPage({ params }: { params: Promise<{ technology: string; level: string }> }) {
  const { technology, level } = await params;
  const tech = TECH_NAME_MAP[technology] ?? technology;
  const levelName = LEVEL_NAME_MAP[level] ?? level;

  const questions = getInterviewQuestions(tech, levelName);

  if (questions.length === 0) {
    notFound();
  }

  const techSlug = Object.entries(TECH_NAME_MAP).find(([, v]) => v === tech)?.[0] ?? technology;

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
        title={`${tech} ${levelName} Questions`}
        description={`${questions.length} ${levelName.toLowerCase()} interview questions for ${tech}.`}
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
