import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { ContentBlockRenderer } from '@/components/content/ContentBlockRenderer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { getModuleBySlug, getLessonsForModule } from '@/lib/content';
import { buildLessonMetadata } from '@/lib/seo';
import { PdfDownloadButton } from '@/components/ui/PdfDownloadButton';

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
  const modules = getModuleBySlug('csharp') ? ['csharp', 'sql-server', 'react', 'redux', 'apollo', 'graphql', 'docker-compose', 'javascript', 'typescript', 'react-router'] : [];
  return modules.map((tech) => ({ technology: tech }));
}

export async function generateMetadata({ params }: { params: Promise<{ technology: string }> }): Promise<Metadata> {
  const { technology } = await params;
  const mod = getModuleBySlug(technology);
  if (!mod) return {};
  return buildLessonMetadata({
    title: mod.title,
    description: mod.description,
    moduleSlug: mod.slug,
    lessonSlug: 'cheatsheet',
  });
}

export default async function CheatsheetPage({ params }: { params: Promise<{ technology: string }> }) {
  const { technology } = await params;
  const mod = getModuleBySlug(technology);
  if (!mod || mod.courseSlug !== 'cheatsheet') notFound();

  const lessons = getLessonsForModule(technology, 'cheatsheet');
  const lesson = lessons[0];
  if (!lesson) notFound();

  const icon = TECH_ICONS[technology] ?? '📝';
  const techName = TECH_NAMES[technology] ?? technology;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { label: 'Cheat Sheets', href: '/cheatsheet' },
          { label: techName },
        ]}
        className="mb-4"
      />

      <div className="mb-8">
        <Link
          href="/cheatsheet"
          className="inline-flex items-center gap-1 text-sm text-fg-muted transition-colors hover:text-accent-fg"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to all cheat sheets
        </Link>
      </div>

      <SectionHeader
        eyebrow="⚡ Quick Reference"
        title={mod.title}
        description={mod.description}
        titleAs="h1"
      />

      <div className="mb-6 flex justify-end">
        <PdfDownloadButton
          targetId="cheatsheet-content"
          filename={`${technology}-cheatsheet.pdf`}
          label="Download PDF"
        />
      </div>

      <div id="cheatsheet-content" className="prose prose-slate dark:prose-invert max-w-none">
        <ContentBlockRenderer blocks={lesson.blocks} />
      </div>
    </div>
  );
}
