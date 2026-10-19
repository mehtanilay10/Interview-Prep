import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
  getLessonBySlug,
  getInterviewQuestions,
  getInterviewTechnologies,
} from '@/lib/content';
import { getInterviewTechName, getInterviewTechSlug } from '@/lib/content-hrefs';
import { buildLessonMetadata } from '@/lib/seo';
import { ContentBlockRenderer } from '@/components/content/ContentBlockRenderer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';
import { ReadingTimeBadge } from '@/components/ui/ReadingTimeBadge';
import { LessonActions } from '@/components/progress/LessonActions';
import { LessonNotesButton } from '@/components/lesson/LessonNotesButton';
import { NotesModalProvider } from '@/components/lesson/NotesModalContext';
import { OfflineSaveButton } from '@/components/lesson/OfflineSaveButton';

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
      params.push({ technology: getInterviewTechSlug(tech), slug: q.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ technology: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug, 'interview-qa');
  if (!lesson) return {};
  return buildLessonMetadata({
    title: lesson.title,
    description: lesson.description,
    moduleSlug: lesson.moduleSlug,
    lessonSlug: slug,
    basePath: '/interview-questions',
  });
}

export default async function InterviewLessonDetailPage({ params }: { params: Promise<{ technology: string; slug: string }> }) {
  const { technology, slug } = await params;
  const tech = getInterviewTechName(technology);

  const lesson = getLessonBySlug(slug, 'interview-qa');
  if (!lesson) notFound();

  const allQuestions = getInterviewQuestions(tech);
  const currentIdx = allQuestions.findIndex((q) => q.slug === slug);
  const prev = currentIdx > 0 ? allQuestions[currentIdx - 1] : null;
  const next = currentIdx < allQuestions.length - 1 ? allQuestions[currentIdx + 1] : null;

  return (
    <NotesModalProvider courseSlug="interview-qa" moduleSlug={technology} lessonSlug={lesson.slug}>
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
        <LessonActions
          lesson={{
            slug: lesson.slug,
            title: lesson.title,
            difficulty: lesson.difficulty,
            estimatedMinutes: lesson.estimatedMinutes,
            isOptional: lesson.isOptional,
            tags: lesson.tags,
          }}
          courseSlug="interview-qa"
          moduleSlug={technology}
          category="interviewQuestions"
        >
          <LessonNotesButton courseSlug="interview-qa" moduleSlug={technology} lessonSlug={lesson.slug} />
          <OfflineSaveButton courseSlug="interview-qa" moduleSlug={technology} lessonSlug={lesson.slug} title={lesson.title} />
        </LessonActions>
        <h1 className="mb-2 text-2xl font-bold leading-snug text-fg-default sm:text-3xl">
          {lesson.title}
        </h1>
        <p className="text-base text-fg-muted">{lesson.description}</p>
      </header>

      <div id="question-content" className="prose prose-slate dark:prose-invert max-w-none">
        <ContentBlockRenderer blocks={lesson.blocks} />
      </div>


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
    </NotesModalProvider>
  );
}
