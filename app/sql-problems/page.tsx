import type { Metadata } from 'next';
import Link from 'next/link';
import { Database } from 'lucide-react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { getModulesForCourse } from '@/lib/content';
import { formatHours } from '@/lib/utils';

const SQL_ICONS: Record<string, string> = {
  'sql-basics': '🟢',
  'sql-intermediate': '🟡',
  'sql-advanced': '🔴',
};

export const metadata: Metadata = {
  title: 'SQL Problems',
  description: 'Practice SQL Server interview problems from basic to advanced.',
};

export default function SqlProblemsPage() {
  const modules = getModulesForCourse('sql-problems');

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow="🗄️ Practice"
        title="SQL Problems"
        description="Master SQL Server with 50 interview-style problems covering SELECT, JOINs, subqueries, CTEs, window functions, stored procedures, and performance tuning."
        titleAs="h1"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((mod) => {
          const icon = SQL_ICONS[mod.slug] ?? '🗄️';
          return (
            <Link
              key={mod.slug}
              href={`/sql-problems/${mod.slug}`}
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
