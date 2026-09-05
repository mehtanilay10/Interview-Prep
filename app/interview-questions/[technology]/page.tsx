import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { getInterviewTechnologies, getInterviewLevelsForTechnology, getInterviewQuestions, getInterviewQuestionCount } from '@/lib/content';
import { formatHours } from '@/lib/utils';

const TECH_SLUG_MAP: Record<string, string> = {
  'c#': 'csharp',
  'asp.net core': 'aspnet-core',
  'oop': 'oop',
  'javascript': 'javascript',
  'general': 'general',
  'system design': 'system-design',
  'behavioral': 'behavioral',
};

const TECH_NAME_MAP: Record<string, string> = {
  'csharp': 'C#',
  'aspnet-core': 'ASP.NET Core',
  'oop': 'OOP',
  'javascript': 'JavaScript',
  'general': 'General',
  'system-design': 'System Design',
  'behavioral': 'Behavioral',
};

const LEVEL_ICONS: Record<string, string> = {
  'Beginner': '🌱',
  'Intermediate': '🌿',
  'Advanced': '🌳',
  'Scenario': '🎭',
  'System Design': '🏗️',
  'Rapid Fire': '⚡',
  'Interview Traps': '⚠️',
};

export async function generateStaticParams() {
  const technologies = getInterviewTechnologies();
  return technologies.map((tech) => ({
    technology: TECH_SLUG_MAP[tech.toLowerCase()] ?? tech.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ technology: string }> }): Promise<Metadata> {
  const { technology } = await params;
  const tech = TECH_NAME_MAP[technology] ?? technology;
  return {
    title: `${tech} Interview Questions`,
    description: `Browse ${tech} interview questions organized by difficulty level.`,
  };
}

export default async function InterviewTechnologyPage({ params }: { params: Promise<{ technology: string }> }) {
  const { technology } = await params;
  const tech = TECH_NAME_MAP[technology] ?? technology;
  const levels = getInterviewLevelsForTechnology(tech);

  if (levels.length === 0) {
    notFound();
  }

  const totalCount = getInterviewQuestionCount(tech);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <div className="mb-6">
        <Link
          href="/interview-questions"
          className="inline-flex items-center gap-1 text-sm text-fg-muted transition-colors hover:text-accent-fg"
        >
          ← Back to all technologies
        </Link>
      </div>

      <SectionHeader
        eyebrow="🎯 Interview Prep"
        title={`${tech} Interview Questions`}
        description={`${totalCount} questions organized by difficulty level. Choose a level to start practicing.`}
        titleAs="h1"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {levels.map((level) => {
          const questions = getInterviewQuestions(tech, level);
          const totalMinutes = questions.reduce((sum, l) => sum + l.estimatedMinutes, 0);

          return (
            <Link
              key={level}
              href={`/interview-questions/${technology}/${encodeURIComponent(level.toLowerCase().replace(/\s+/g, '-'))}`}
              className="group flex flex-col rounded-xl border border-border bg-canvas p-5 transition-all hover:border-accent-fg hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="text-2xl leading-none" aria-hidden="true">
                  {LEVEL_ICONS[level] ?? '📝'}
                </span>
                <h3 className="font-semibold text-fg-default group-hover:text-accent-fg transition-colors">
                  {level}
                </h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-fg-muted">
                {questions.length} questions · {formatHours(totalMinutes)}
              </p>
              <div className="mt-auto flex items-center gap-1 text-sm font-medium text-accent-fg">
                View questions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
