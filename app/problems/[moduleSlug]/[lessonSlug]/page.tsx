import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { ContentBlockRenderer } from '@/components/content/ContentBlockRenderer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { getModuleBySlug, getLessonBySlug } from '@/lib/content';

export async function generateStaticParams() {
  const modules = getModulesForCourse('problems');
  const params: { moduleSlug: string; lessonSlug: string }[] = [];
  for (const mod of modules) {
    const lessons = getLessonsForModule(mod.slug, 'problems');
    for (const lesson of lessons) {
      params.push({ moduleSlug: mod.slug, lessonSlug: lesson.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ moduleSlug: string; lessonSlug: string }> }): Promise<Metadata> {
  const { moduleSlug, lessonSlug } = await params;
  const mod = getModuleBySlug(moduleSlug);
  const lesson = getLessonBySlug(lessonSlug);
  if (!mod || !lesson) return {};
  return {
    title: `${lesson.title} — Coding Problems`,
    description: lesson.description,
  };
}

export default async function ProblemDetailPage({ params }: { params: Promise<{ moduleSlug: string; lessonSlug: string }> }) {
  const { moduleSlug, lessonSlug } = await params;
  const mod = getModuleBySlug(moduleSlug);
  const lesson = getLessonBySlug(lessonSlug);

  if (!mod || !lesson || mod.courseSlug !== 'problems' || lesson.courseSlug !== 'problems') {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { label: 'Coding Problems', href: '/problems' },
          { label: mod.title, href: `/problems/${moduleSlug}` },
          { label: lesson.title },
        ]}
        className="mb-4"
      />

      <div className="mb-8">
        <Link
          href={`/problems/${moduleSlug}`}
          className="inline-flex items-center gap-1 text-sm text-fg-muted transition-colors hover:text-accent-fg"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to {mod.title}
        </Link>
      </div>

      <SectionHeader
        eyebrow="🧩 Problem"
        title={lesson.title}
        description={lesson.description}
        titleAs="h1"
      />

      <div className="mb-6 flex items-center gap-3 text-sm text-fg-muted">
        <span className="rounded-full border border-border px-2.5 py-0.5 capitalize">
          {lesson.difficulty}
        </span>
        <span>{lesson.estimatedMinutes} min</span>
      </div>

      <ContentBlockRenderer blocks={lesson.blocks} />
    </div>
  );
}
