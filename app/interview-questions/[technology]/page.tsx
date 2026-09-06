import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Clock } from 'lucide-react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { ReadingTimeBadge } from '@/components/ui/ReadingTimeBadge';
import { getInterviewTechnologies, getInterviewQuestions, getInterviewLevelsForTechnology, getInterviewQuestionCount } from '@/lib/content';
import { formatHours } from '@/lib/utils';

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
  return technologies.map((tech) => ({
    technology: TECH_SLUG_MAP[tech.toLowerCase()] ?? tech.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ technology: string }> }): Promise<Metadata> {
  const { technology } = await params;
  const tech = TECH_NAME_MAP[technology] ?? technology;
  const count = getInterviewQuestionCount(tech);
  return {
    title: `${tech} Interview Questions`,
    description: `${count} ${tech} interview questions and answers organized by difficulty level.`,
  };
}

export default async function InterviewTechnologyPage({ params }: { params: Promise<{ technology: string }> }) {
  const { technology } = await params;
  const tech = TECH_NAME_MAP[technology] ?? technology;
  const levels = getInterviewLevelsForTechnology(tech);

  if (levels.length === 0) {
    notFound();
  }

  const allQuestions = getInterviewQuestions(tech);
  const totalCount = allQuestions.length;
  const totalMinutes = allQuestions.reduce((sum, l) => sum + (l.estimatedMinutes || 0), 0);

  // Group questions by level (module slug)
  const questionsByLevel = new Map<string, { level: typeof levels[0]; questions: typeof allQuestions }>();
  for (const q of allQuestions) {
    const level = levels.find(l => l.slug === q.moduleSlug);
    if (!level) continue;
    if (!questionsByLevel.has(q.moduleSlug)) {
      questionsByLevel.set(q.moduleSlug, { level, questions: [] });
    }
    questionsByLevel.get(q.moduleSlug)!.questions.push(q);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-6">
        <Link
          href="/interview-questions"
          className="inline-flex items-center gap-1 text-sm text-fg-muted transition-colors hover:text-accent-fg"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to all technologies
        </Link>
      </div>

      <SectionHeader
        eyebrow="🎯 Interview Prep"
        title={`${tech} Interview Questions`}
        description={`${totalCount} questions · ${formatHours(totalMinutes)} total`}
        titleAs="h1"
      />

      <div className="mb-8 flex items-center gap-4 text-xs text-fg-subtle">
        <span className="flex items-center gap-1">
          <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
          {totalCount} questions
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {formatHours(totalMinutes)}
        </span>
      </div>

      {levels.map((level) => {
        const group = questionsByLevel.get(level.slug);
        if (!group || group.questions.length === 0) return null;

        return (
          <section key={level.slug} className="mb-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-2xl leading-none" aria-hidden="true">
                {level.icon}
              </span>
              <h2 className="text-lg font-semibold text-fg-default">{level.title}</h2>
              <span className="text-xs text-fg-subtle">
                {group.questions.length} question{group.questions.length !== 1 ? 's' : ''}
              </span>
            </div>
            <div className="space-y-3">
              {group.questions.map((q, idx) => (
                <Link
                  key={q.id}
                  href={`/interview-questions/${technology}/${q.slug}`}
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
          </section>
        );
      })}
    </div>
  );
}
