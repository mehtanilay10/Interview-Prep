import Link from 'next/link';
import { Layers, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { getNavigationCategories, getProblemCoursesByCategory } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Problems',
  description: 'Practice interview problems grouped by category — design problems, coding sets, and guided solutions.',
  path: '/problems',
});

export default function AllProblemsPage() {
  const categories = getNavigationCategories().filter((cat) =>
    cat.sections.some((s) => s.href.endsWith('/problems'))
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow="🧩 Practice"
        title="Problems"
        description="Interview practice sets grouped by category, with guided solutions."
        titleAs="h1"
      />

      <div className="space-y-10">
        {categories.map((cat) => {
          const courses = getProblemCoursesByCategory(cat.key);
          return (
            <section key={cat.key} aria-labelledby={`category-${cat.key}`}>
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 id={`category-${cat.key}`} className="flex items-center gap-2 text-lg font-semibold text-fg-default">
                  <span aria-hidden="true">{cat.icon}</span>
                  {cat.label}
                </h2>
                <Link
                  href={`/${cat.key}/problems`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent-fg hover:underline"
                >
                  View all
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                  <Link
                    key={course.id}
                    href={`/${cat.key}/problems/${course.slug}`}
                    className="group flex flex-col gap-3 rounded-xl border border-border bg-canvas p-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                  >
                    <span className="text-3xl" aria-hidden="true">{course.icon}</span>
                    <h3 className="text-sm font-semibold text-fg-default group-hover:text-accent-fg transition-colors">
                      {course.title}
                    </h3>
                    <p className="line-clamp-2 text-sm text-fg-muted flex-1">
                      {course.subtitle || course.description}
                    </p>
                    <span className="flex items-center gap-1 text-xs text-fg-subtle">
                      <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                      {course.moduleSlugs.length} sets
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
