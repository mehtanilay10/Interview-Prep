import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
  getModuleBySlug,
  getLessonBySlug,
  getLessonsForModule,
  getModulesForCourse,
  extractTOC,
} from '@/lib/content';
import { buildLessonMetadata } from '@/lib/seo';
import { ContentBlockRenderer } from '@/components/content/ContentBlockRenderer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';
import { ReadingTimeBadge } from '@/components/ui/ReadingTimeBadge';

interface Params {
  params: Promise<{ moduleSlug: string; lessonSlug: string }>;
}

export async function generateStaticParams() {
  const modules = getModulesForCourse('interview-qa');
  return modules.flatMap((mod) =>
    getLessonsForModule(mod.slug, 'interview-qa').map((l) => ({
      moduleSlug: mod.slug,
      lessonSlug: l.slug,
    }))
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { moduleSlug, lessonSlug } = await params;
  const lesson = getLessonBySlug(lessonSlug);
  if (!lesson) return {};
  return buildLessonMetadata({
    title: lesson.title,
    description: lesson.description,
    moduleSlug,
    lessonSlug,
  });
}

export default async function InterviewLessonPage({ params }: Params) {
  const { moduleSlug, lessonSlug } = await params;
  const mod = getModuleBySlug(moduleSlug);
  const lesson = getLessonBySlug(lessonSlug);

  if (!mod || !lesson) notFound();

  const moduleLessons = getLessonsForModule(moduleSlug, 'interview-qa');
  const toc = extractTOC(lesson.blocks);
  const currentIdx = moduleLessons.findIndex((l) => l.slug === lessonSlug);
  const prev = currentIdx > 0 ? moduleLessons[currentIdx - 1] : null;
  const next = currentIdx < moduleLessons.length - 1 ? moduleLessons[currentIdx + 1] : null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { label: 'Interview Questions', href: '/interview-questions' },
          { label: mod.title, href: `/interview-questions/${moduleSlug}` },
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
            href={`/interview-questions/${moduleSlug}/${prev.slug}`}
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
            href={`/interview-questions/${moduleSlug}/${next.slug}`}
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
