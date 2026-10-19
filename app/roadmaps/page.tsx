import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { roadmaps, getRoadmapForCourse } from '@/content/ai/roadmaps';
import { getAllCourses, getCourseCategory } from '@/lib/content';

/** Resolve a roadmap href (stored category-less, e.g. `/courses/ai-basics/...`) to its category-prefixed route. */
function resolveRoadmapHref(href: string, courseSlug: string): string {
  if (href.startsWith('/courses/') || href.startsWith('/problems/') || href.startsWith('/cheatsheets/')) {
    return `/${getCourseCategory(courseSlug)}${href}`;
  }
  return href;
}
import { BookOpen, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Learning Roadmap',
  description: 'Visual learning roadmaps for AI Basics, Codex, and Claude courses. See your path from beginner to confident AI user.',
};

function RoadmapNodeComponent({ node, courseSlug, depth = 0 }: { node: import('@/types').RoadmapNode; courseSlug: string; depth?: number }) {
  const isPhase = node.type === 'phase';
  const isMilestone = node.type === 'milestone';
  const isModule = node.type === 'module';

  return (
    <div className={cn('relative', depth > 0 && 'ml-6 border-l border-border pl-4')}>
      <div className={cn('py-2', isPhase && 'py-3')}>
        {isPhase && (
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">{depth === 0 ? '📚' : '📂'}</span>
            <h3 className="font-bold text-fg-default text-base sm:text-lg">{node.title}</h3>
          </div>
        )}

        {isMilestone && (
          <div className="flex items-center gap-2 py-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-subtle text-accent-fg">
              <Target className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span className="font-semibold text-accent-fg text-sm">{node.title}</span>
          </div>
        )}

        {isModule && (
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 py-1.5">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <span className="text-sm">{depth === 0 ? '📘' : '📖'}</span>
              {node.href ? (
                <Link
                  href={resolveRoadmapHref(node.href, courseSlug)}
                  className="text-sm font-medium text-fg-default hover:text-accent-fg transition-colors truncate"
                >
                  {node.title}
                </Link>
              ) : (
                <span className="text-sm font-medium text-fg-default truncate">{node.title}</span>
              )}
            </div>
            <div className="flex items-center gap-2 ml-4 sm:ml-0">
              {node.difficulty && (
                <span
                  className={cn(
                    'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium',
                    node.difficulty === 'beginner' && 'bg-success-subtle text-success-fg',
                    node.difficulty === 'intermediate' && 'bg-attention-subtle text-attention-fg',
                    node.difficulty === 'advanced' && 'bg-done-subtle text-done-fg'
                  )}
                >
                  {node.difficulty}
                </span>
              )}
              {node.isOptional && (
                <span className="inline-flex items-center rounded-full border border-border px-2 py-0.5 text-xs text-fg-muted">
                  Optional
                </span>
              )}
            </div>
          </div>
        )}

        {node.children && node.children.length > 0 && (
          <div className="mt-1 space-y-1">
            {node.children.map((child) => (
              <RoadmapNodeComponent key={child.id} node={child} courseSlug={courseSlug} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function RoadmapPage() {
  const courses = getAllCourses();
  const COURSE_SLUGS = courses.map(c => c.slug) as string[];
  const activeSlug = COURSE_SLUGS[0];

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow="Your path forward"
        title="Learning Roadmap"
        description="Each course is organized into phases and modules. Follow the roadmap from start to finish, or jump to the topics that matter most to you."
        titleAs="h1"
      />

      {/* Course selector */}
      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Course roadmaps">
        {courses.map((course) => {
          const roadmap = getRoadmapForCourse(course.slug);
          if (!roadmap) return null;
          return (
            <Link
              key={course.slug}
              href={`/roadmaps#${course.slug}`}
              className={cn(
                'flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors',
                course.slug === activeSlug
                  ? 'border-accent-fg bg-accent-subtle text-accent-fg'
                  : 'border-border bg-canvas text-fg-muted hover:border-accent-fg hover:text-fg-default'
              )}
              aria-selected={course.slug === activeSlug}
              role="tab"
            >
              <span aria-hidden="true">{course.icon}</span>
              {course.title}
            </Link>
          );
        })}
      </div>

      {/* Roadmaps */}
      <div className="mt-10 space-y-12">
        {COURSE_SLUGS.map((slug) => {
          const roadmap = getRoadmapForCourse(slug);
          if (!roadmap) return null;
          const course = courses.find((c) => c.slug === slug);

          return (
            <section key={slug} id={slug} className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl" aria-hidden="true">{course?.icon}</span>
                <div>
                  <h2 className="text-xl font-bold text-fg-default">{roadmap.title}</h2>
                  {course && <p className="text-sm text-fg-muted">{course.subtitle}</p>}
                </div>
              </div>

              <div className="rounded-xl border border-border bg-canvas p-4 sm:p-6 dark:bg-canvas-subtle">
                <div className="space-y-2">
                  {roadmap.children?.map((phase) => (
                    <RoadmapNodeComponent key={phase.id} node={phase} courseSlug={slug} depth={0} />
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center gap-4 text-xs text-fg-muted">
                <span className="flex items-center gap-1">
                  <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                  Click any module to start learning
                </span>
                <span className="flex items-center gap-1">
                  <Target className="h-3.5 w-3.5" aria-hidden="true" />
                  Milestones mark key checkpoints
                </span>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
