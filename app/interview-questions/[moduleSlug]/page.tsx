import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Clock } from 'lucide-react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { ReadingTimeBadge } from '@/components/ui/ReadingTimeBadge';
import { getModuleBySlug, getLessonsForModule, getCourseBySlug } from '@/lib/content';

interface Params {
  params: Promise<{ moduleSlug: string }>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { moduleSlug } = await params;
  const mod = getModuleBySlug(moduleSlug);
  if (!mod) return {};
  return {
    title: mod.title,
    description: mod.description,
  };
}

export default async function InterviewModulePage({ params }: Params) {
  const { moduleSlug } = await params;
  const mod = getModuleBySlug(moduleSlug);
  if (!mod) notFound();

  const course = getCourseBySlug('interview-qa');
  const lessons = getLessonsForModule(moduleSlug, 'interview-qa');

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow={course?.icon ?? '🎯'}
        title={mod.title}
        description={mod.description}
        titleAs="h1"
      />

      <div className="mb-6">
        <Link
          href="/interview-questions"
          className="inline-flex items-center gap-1 text-sm text-fg-muted transition-colors hover:text-accent-fg"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to all questions
        </Link>
      </div>

      <div className="space-y-3">
        {lessons.map((lesson) => (
          <Link
            key={lesson.id}
            href={`/interview-questions/${moduleSlug}/${lesson.slug}`}
            className="group flex items-center gap-4 rounded-lg border border-border bg-canvas p-4 transition-all hover:border-accent-fg hover:shadow-sm"
          >
            <div className="flex-1 min-w-0">
              <p className="font-medium text-fg-default group-hover:text-accent-fg transition-colors">
                {lesson.title}
              </p>
              <p className="mt-1 text-sm text-fg-muted line-clamp-1">
                {lesson.description}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <ReadingTimeBadge minutes={lesson.estimatedMinutes} />
              <BookOpen className="h-4 w-4 text-fg-subtle" aria-hidden="true" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
