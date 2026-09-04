import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { BookOpen, Clock } from 'lucide-react';
import { getModulesForCourse, getLessonsForModule } from '@/lib/content';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';
import { formatHours } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Interview Questions',
  description: 'Browse technical interview questions and answers organized by topic and difficulty.',
};

export default function InterviewQuestionsPage() {
  const modules = getModulesForCourse('interview-qa');

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow="🎯 Interview Prep"
        title="Technical Interview Questions"
        description="Browse interview questions organized by topic and difficulty. Each question includes a detailed answer to help you prepare."
        titleAs="h1"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {modules.map((mod) => {
          const lessons = getLessonsForModule(mod.slug, 'interview-qa');
          const totalMinutes = lessons.reduce((sum, l) => sum + l.estimatedMinutes, 0);

          return (
            <Link
              key={mod.id}
              href={`/interview-questions/${mod.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-canvas p-5 transition-all hover:border-accent-fg hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="text-2xl leading-none" aria-hidden="true">
                  {mod.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-fg-default group-hover:text-accent-fg transition-colors truncate">
                    {mod.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <DifficultyBadge difficulty={mod.difficulty} />
                  </div>
                </div>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-fg-muted line-clamp-2">
                {mod.description}
              </p>
              <div className="mt-auto flex items-center gap-4 text-xs text-fg-subtle">
                <span className="flex items-center gap-1">
                  <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                  {lessons.length} questions
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {formatHours(mod.estimatedHours)}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
