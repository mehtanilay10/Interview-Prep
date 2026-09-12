import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Clock } from 'lucide-react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { getInterviewTechnologies, getInterviewQuestionCount } from '@/lib/content';
import { formatHours } from '@/lib/utils';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Interview Questions',
  description: 'Browse technical interview questions and answers organized by technology and level.',
  path: '/interview-questions',
});

const TECH_ICONS: Record<string, string> = {
  'C#': '💻',
  'ASP.NET Core': '🌐',
  'OOP': '🧩',
  'JavaScript': '⚡',
  'General': '📚',
  'System Design': '🏗️',
  'Behavioral': '💬',
  'SQL Server': '🗄️',
};

const TECH_DESCRIPTIONS: Record<string, string> = {
  'C#': 'C# language fundamentals, advanced features, and .NET runtime internals.',
  'ASP.NET Core': 'ASP.NET Core framework, middleware, pipeline, and Entity Framework Core.',
  'OOP': 'Object-oriented programming principles including SOLID, inheritance, and design patterns.',
  'JavaScript': 'JavaScript language features, type coercion, and core concepts.',
  'General': 'Cross-technology fundamentals, security, performance, and architecture concepts.',
  'System Design': 'Scalable system design, microservices, and real-world architecture problems.',
  'Behavioral': 'Scenario-based problem solving, debugging approaches, and soft skills.',
  'SQL Server': 'SQL Server database concepts, queries, indexing, and performance optimization.',
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
};

export default function InterviewQuestionsPage() {
  const technologies = getInterviewTechnologies();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow="🎯 Interview Prep"
        title="Technical Interview Questions"
        description="Choose a technology to browse questions organized by difficulty level."
        titleAs="h1"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech) => {
          const count = getInterviewQuestionCount(tech);
          return (
            <Link
              key={tech}
              href={`/interview-questions/${TECH_SLUG_MAP[tech.toLowerCase()] ?? tech.toLowerCase()}`}
              className="group flex flex-col rounded-xl border border-border bg-canvas p-5 transition-all hover:border-accent-fg hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="text-2xl leading-none" aria-hidden="true">
                  {TECH_ICONS[tech] ?? '📝'}
                </span>
                <h3 className="font-semibold text-fg-default group-hover:text-accent-fg transition-colors">
                  {tech}
                </h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-fg-muted line-clamp-2">
                {TECH_DESCRIPTIONS[tech] ?? 'Interview questions for this technology.'}
              </p>
              <div className="mt-auto flex items-center gap-2 text-xs text-fg-subtle">
                <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{count} questions</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
