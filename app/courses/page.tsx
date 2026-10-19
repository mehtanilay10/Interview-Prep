import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { getNavigationCategories, getCoursesByCategory } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'All Courses',
  description: 'Browse every course, grouped by category — from fundamentals to architecture and cloud.',
  path: '/courses',
});

export default function AllCoursesPage() {
  const categories = getNavigationCategories().filter((cat) =>
    cat.sections.some((s) => s.href.endsWith('/courses'))
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow="📚 Learning paths"
        title="All Courses"
        description="Self-contained courses grouped by category. Pick a category and start learning."
        titleAs="h1"
      />

      <div className="space-y-10">
        {categories.map((cat) => {
          const courses = getCoursesByCategory(cat.key);
          return (
            <section key={cat.key} aria-labelledby={`category-${cat.key}`}>
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 id={`category-${cat.key}`} className="flex items-center gap-2 text-lg font-semibold text-fg-default">
                  <span aria-hidden="true">{cat.icon}</span>
                  {cat.label}
                </h2>
                <Link
                  href={`/${cat.key}/courses`}
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
                    href={`/${cat.key}/courses/${course.slug}`}
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
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {Math.max(1, Math.round((course.moduleSlugs.length || 1) * 1.5))}h read
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
