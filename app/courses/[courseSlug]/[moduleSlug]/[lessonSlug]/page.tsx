import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import {
  getAllCourses,
  getCourseBySlug,
  getModulesForCourse,
  getModuleBySlug,
  getLessonBySlug,
  getLessonsForModule,
  getLessonsForCourse,
  extractTOC,
} from '@/lib/content';
import { buildLessonMetadata } from '@/lib/seo';
import { ContentBlockRenderer } from '@/components/content/ContentBlockRenderer';
import { FurtherReading } from '@/components/content/FurtherReading';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { LessonSidebar } from '@/components/layout/LessonSidebar';
import { MobileProgressAndContents } from '@/components/course/MobileProgressAndContents';
import { TableOfContents } from '@/components/course/TableOfContents';
import { ProgressTracker } from '@/components/course/ProgressTracker';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';
import { ReadingTimeBadge } from '@/components/ui/ReadingTimeBadge';
import { LessonCard } from '@/components/course/LessonCard';
import { LessonActions } from '@/components/progress/LessonActions';
import { LessonNotes } from '@/components/lesson/LessonNotes';
import { OfflineSaveButton } from '@/components/lesson/OfflineSaveButton';

interface Params {
  params: Promise<{ courseSlug: string; moduleSlug: string; lessonSlug: string }>;
}

export async function generateStaticParams() {
  const courses = getAllCourses();
  return courses.flatMap((c) =>
    getLessonsForCourse(c.slug).map((l) => ({
      courseSlug: c.slug,
      moduleSlug: l.moduleSlug,
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

export default async function CourseLessonDetailPage({ params }: Params) {
  const { courseSlug, moduleSlug, lessonSlug } = await params;
  const course = getCourseBySlug(courseSlug);
  const lesson = getLessonBySlug(lessonSlug);
  const mod = getModuleBySlug(moduleSlug);

  if (!course || !lesson || !mod) notFound();

  const courseModules = getModulesForCourse(courseSlug);
  const moduleLessons = getLessonsForModule(moduleSlug, courseSlug);
  const toc = extractTOC(lesson.blocks);

  // Adjacent lessons within the course
  const courseLessons = getLessonsForCourse(courseSlug);
  const currentIdx = courseLessons.findIndex((l) => l.slug === lessonSlug);
  const prev = currentIdx > 0 ? courseLessons[currentIdx - 1] : null;
  const next = currentIdx < courseLessons.length - 1 ? courseLessons[currentIdx + 1] : null;

  // Build lessonsByModule map (course-scoped only)
  const lessonsByModule: Record<string, typeof moduleLessons> = {};
  for (const m of courseModules) {
    lessonsByModule[m.slug] = getLessonsForModule(m.slug, courseSlug);
  }

  // Related lessons
  const relatedLessons = (lesson.relatedLessons ?? [])
    .map((slug) => getLessonBySlug(slug))
    .filter(Boolean) as NonNullable<ReturnType<typeof getLessonBySlug>>[];

  return (
    <div className="flex min-h-screen">
      {/* Desktop sidebar */}
      <aside
        className="hidden w-64 shrink-0 lg:block"
        aria-label="Course sidebar"
      >
        <div className="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto p-4">
          <LessonSidebar
            currentModuleSlug={moduleSlug}
            currentLessonSlug={lessonSlug}
            courseSlug={courseSlug}
            modules={courseModules}
            lessonsByModule={lessonsByModule}
          />
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 min-w-0">
        <article className="mx-auto w-full max-w-[800px] min-w-0 px-4 py-8 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: 'Courses', href: '/courses' },
              { label: course.title, href: `/courses/${courseSlug}` },
              { label: mod.title, href: `/courses/${courseSlug}/${moduleSlug}` },
              { label: lesson.title },
            ]}
            className="mb-4"
          />

          {/* Lesson header */}
          <header className="mb-8">
            <LessonActions lesson={lesson} courseSlug={courseSlug} moduleSlug={moduleSlug} />
            <h1 className="mb-2 text-2xl font-bold leading-snug text-fg-default sm:text-3xl">
              {lesson.title}
            </h1>
            <p className="text-base text-fg-muted">{lesson.description}</p>

            {lesson.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {lesson.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-canvas-subtle px-2 py-0.5 text-xs text-fg-subtle"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Mobile: progress tracker + course contents (combined) */}
          <div className="mb-6 lg:hidden">
            <MobileProgressAndContents
              lessonSlug={lessonSlug}
              moduleSlug={moduleSlug}
              courseSlug={courseSlug}
              allModuleLessonSlugs={moduleLessons.map((l) => l.slug)}
              modules={courseModules}
              lessonsByModule={lessonsByModule}
            />
          </div>

          {/* Content blocks */}
          <div id="lesson-content" className="prose prose-slate dark:prose-invert max-w-none">
            <ContentBlockRenderer blocks={lesson.blocks} />
          </div>

          {/* Lesson notes */}
          <div className="mt-8">
            <LessonNotes courseSlug={courseSlug} moduleSlug={moduleSlug} lessonSlug={lessonSlug} />
          </div>

          {/* Offline save */}
          <div className="mt-4">
            <OfflineSaveButton courseSlug={courseSlug} moduleSlug={moduleSlug} lessonSlug={lessonSlug} title={lesson.title} />
          </div>

          {/* Further reading */}
          {lesson.furtherReading && lesson.furtherReading.length > 0 && (
            <FurtherReading items={lesson.furtherReading} />
          )}

          {/* Lesson navigation */}
          <div className="mt-10 flex items-center justify-between gap-4 border-t border-border pt-6">
            {prev ? (
              <Link
                href={`/courses/${courseSlug}/${prev.moduleSlug}/${prev.slug}`}
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
                href={`/courses/${courseSlug}/${next.moduleSlug}/${next.slug}`}
                className="flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-fg-muted transition-colors hover:border-accent-fg hover:text-accent-fg max-w-[45%]"
              >
                <span className="line-clamp-1">{next.title}</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            )}
          </div>

          {/* Related lessons */}
          {relatedLessons.length > 0 && (
            <section className="mt-10" aria-label="Related lessons">
              <h2 className="mb-4 text-lg font-bold text-fg-default">Related lessons</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {relatedLessons.map((rel) => (
                  <LessonCard
                    key={rel.slug}
                    lesson={rel}
                    moduleSlug={rel.moduleSlug}
                    courseSlug={courseSlug}
                  />
                ))}
              </div>
            </section>
          )}
        </article>

        {/* Right sidebar: TOC + progress (desktop) */}
        <aside
          className="hidden w-56 shrink-0 xl:block"
          aria-label="Page navigation"
        >
          <div className="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto space-y-6 p-4">
            <ProgressTracker
              lessonSlug={lessonSlug}
              moduleSlug={moduleSlug}
              allModuleLessonSlugs={moduleLessons.map((l) => l.slug)}
            />
            <TableOfContents entries={toc} />
          </div>
        </aside>
      </div>
    </div>
  );
}
