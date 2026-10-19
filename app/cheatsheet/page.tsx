import Link from 'next/link';
import { FileText, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { getNavigationCategories, getCheatsheetModulesByCategory } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Cheat Sheets',
  description: 'Quick-reference cheat sheets for every technology, grouped by category.',
  path: '/cheatsheet',
});

export default function AllCheatsheetsPage() {
  const categories = getNavigationCategories().filter((cat) =>
    cat.sections.some((s) => s.href.endsWith('/cheatsheets'))
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow="⚡ Quick reference"
        title="Cheat Sheets"
        description="Syntax, patterns, and commands at a glance — grouped by category."
        titleAs="h1"
      />

      <div className="space-y-10">
        {categories.map((cat) => {
          const cheatsheets = getCheatsheetModulesByCategory(cat.key);
          return (
            <section key={cat.key} aria-labelledby={`category-${cat.key}`}>
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 id={`category-${cat.key}`} className="flex items-center gap-2 text-lg font-semibold text-fg-default">
                  <span aria-hidden="true">{cat.icon}</span>
                  {cat.label}
                </h2>
                <Link
                  href={`/${cat.key}/cheatsheets`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent-fg hover:underline"
                >
                  View all
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cheatsheets.map((mod) => (
                  <Link
                    key={mod.id}
                    href={`/${cat.key}/cheatsheets/${mod.slug}`}
                    className="group flex flex-col gap-3 rounded-xl border border-border bg-canvas p-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                  >
                    <span className="text-3xl" aria-hidden="true">{mod.icon}</span>
                    <h3 className="text-sm font-semibold text-fg-default group-hover:text-accent-fg transition-colors">
                      {mod.title}
                    </h3>
                    <p className="line-clamp-2 text-sm text-fg-muted flex-1">
                      {mod.description}
                    </p>
                    <span className="flex items-center gap-1 text-xs text-fg-subtle">
                      <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                      {mod.lessonSlugs?.length ?? 1} sheet
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
