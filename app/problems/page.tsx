import type { Metadata } from 'next';
import Link from 'next/link';
import { Puzzle } from 'lucide-react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { getModulesForCourse } from '@/lib/content';
import { formatHours } from '@/lib/utils';

const PROBLEM_ICONS: Record<string, string> = {
  'array-string-problems': '📊',
  'linked-list-problems': '🔗',
  'tree-graph-problems': '🌳',
  'dynamic-programming-problems': '📈',
  'sorting-searching-problems': '🔍',
};

export const metadata: Metadata = {
  title: 'Coding Problems',
  description: 'Practice problems with multiple C# implementations and detailed explanations.',
};

export default function ProblemsPage() {
  const modules = getModulesForCourse('problems');

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow="🧩 Practice"
        title="Coding Problems"
        description="Master algorithms and data structures with multiple implementation approaches and detailed complexity analysis."
        titleAs="h1"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((mod) => {
          const icon = PROBLEM_ICONS[mod.slug] ?? '🧩';
          return (
            <Link
              key={mod.slug}
              href={`/problems/${mod.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-canvas p-5 transition-all hover:border-accent-fg hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="text-2xl leading-none" aria-hidden="true">
                  {icon}
                </span>
                <h3 className="font-semibold text-fg-default group-hover:text-accent-fg transition-colors">
                  {mod.title}
                </h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-fg-muted line-clamp-2">
                {mod.description}
              </p>
              <div className="mt-auto flex items-center gap-3 text-xs text-fg-subtle">
                <span>{mod.lessonSlugs.length} problems</span>
                <span>·</span>
                <span>{formatHours(mod.estimatedHours)}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
