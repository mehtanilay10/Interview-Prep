import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { ContentBlockRenderer } from '@/components/content/ContentBlockRenderer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { getCheatsheetModuleBySlug, getCheatsheetModules, getLessonsForModule, getCourseCategory, getCategoryMeta } from '@/lib/content';
import { buildLessonMetadata } from '@/lib/seo';
import { LessonActions } from '@/components/progress/LessonActions';
import { LessonNotesButton } from '@/components/lesson/LessonNotesButton';
import { NotesModalProvider } from '@/components/lesson/NotesModalContext';
import { OfflineSaveButton } from '@/components/lesson/OfflineSaveButton';

const TECH_ICONS: Record<string, string> = {
  'csharp': '💻',
  'sql-server': '🗄️',
  'react': '⚛️',
  'redux': '🔄',
  'apollo': '🚀',
  'graphql': '◼️',
  'docker-compose': '🐳',
  'javascript': '⚡',
  'typescript': '📘',
  'react-router': '🧭',
};

const TECH_NAMES: Record<string, string> = {
  'csharp': 'C#',
  'sql-server': 'SQL Server',
  'react': 'React',
  'redux': 'Redux',
  'apollo': 'Apollo Client',
  'graphql': 'GraphQL',
  'docker-compose': 'Docker Compose',
  'javascript': 'JavaScript',
  'typescript': 'TypeScript',
  'react-router': 'React Router',
};

export async function generateStaticParams() {
  return getCheatsheetModules().map((mod) => ({
    technology: mod.slug,
    category: getCourseCategory(mod.slug)
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ technology: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const { technology } = resolvedParams;
  const mod = getCheatsheetModuleBySlug(technology);
  if (!mod) return {};
  return buildLessonMetadata({
    title: mod.title,
    description: mod.description,
    moduleSlug: mod.slug,
    lessonSlug: 'cheatsheet',
    basePath: `/${getCourseCategory(technology)}/cheatsheets`,
  });
}

export default async function CheatsheetPage({ params }: { params: Promise<{ category: string; technology: string }> }) {
  const resolvedParams = await params;
  const category = resolvedParams?.category;
  const technology = resolvedParams?.technology;
  
  if (!category || !technology) {
    notFound();
  }
  const mod = getCheatsheetModuleBySlug(technology);
  if (!mod) notFound();

  // Validate category matches
  const expectedCategory = getCourseCategory(technology);
  if (category !== expectedCategory) notFound();

  const lessons = getLessonsForModule(technology, 'cheatsheet');
  const lesson = lessons[0];
  if (!lesson) notFound();

  const icon = TECH_ICONS[technology] ?? '📝';
  const techName = TECH_NAMES[technology] ?? technology;
  const categoryMeta = getCategoryMeta(category);

  return (
    <NotesModalProvider courseSlug="cheatsheet" moduleSlug={technology} lessonSlug={lesson.slug}>
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Breadcrumbs
        items={[
          { label: 'Cheat Sheets', href: '/cheatsheet' },
          { label: categoryMeta.label, href: `/${category}/cheatsheets` },
          { label: techName },
        ]}
        className="mb-4"
      />

      <div className="mb-8">
        <Link
          href={`/${category}/cheatsheets`}
          className="inline-flex items-center gap-1 text-sm text-fg-muted transition-colors hover:text-accent-fg"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to {categoryMeta.label} cheat sheets
        </Link>
      </div>

      <SectionHeader
        eyebrow="⚡ Quick Reference"
        title={mod.title}
        description={mod.description}
        titleAs="h1"
      />

      <LessonActions
        lesson={{
          slug: lesson.slug,
          title: lesson.title,
          difficulty: lesson.difficulty,
          estimatedMinutes: lesson.estimatedMinutes,
          isOptional: lesson.isOptional,
          tags: lesson.tags,
        }}
        courseSlug="cheatsheet"
        moduleSlug={technology}
        category="lessons"
      >
        <LessonNotesButton courseSlug="cheatsheet" moduleSlug={technology} lessonSlug={lesson.slug} />
        <OfflineSaveButton courseSlug="cheatsheet" moduleSlug={technology} lessonSlug={lesson.slug} title={lesson.title} />
      </LessonActions>

      <div id="cheatsheet-content" className="prose prose-slate dark:prose-invert max-w-none">
        <ContentBlockRenderer blocks={lesson.blocks} />
      </div>

    </div>
    </NotesModalProvider>
  );
}