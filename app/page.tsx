import Link from 'next/link';
import { ArrowRight, BookOpen, LayoutGrid, Compass, Zap, MessageSquare, ShieldCheck, Clock } from 'lucide-react';
import { HeroSection } from '@/components/sections/HeroSection';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { getCourseStats, getAllCourses, getCourseCategory } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';
import type { Course } from '@/types';

export const metadata = buildMetadata({
  title: 'Interview Prep — Master Interview Skills & AI',
  description: 'Comprehensive learning platform for interview preparation and AI literacy. Learn interview techniques, AI tools, programming, and more — all in one place.',
  path: '/',
});

export default function HomePage() {
  const stats = getCourseStats();
  const courses = getAllCourses().filter((c) => !c.isInterview);
  const firstCourse = courses[0];

  const featureCards = [
    {
      icon: <BookOpen className="h-5 w-5 text-accent-fg" aria-hidden="true" />,
      title: 'Learning Roadmaps',
      description: 'Follow clear paths from fundamentals to advanced topics. Know exactly what to study next.',
    },
    {
      icon: <Zap className="h-5 w-5 text-success-fg" aria-hidden="true" />,
      title: 'Practical Focus',
      description: 'Every lesson connects to real-world scenarios. You\'ll apply what you learn the same day.',
    },
    {
      icon: <MessageSquare className="h-5 w-5 text-done-fg" aria-hidden="true" />,
      title: 'Interview Questions',
      description: 'Practice with realistic interview questions and get prepared for technical interviews.',
    },
    {
      icon: <Compass className="h-5 w-5 text-attention-fg" aria-hidden="true" />,
      title: 'AI Tools Mastery',
      description: 'Master modern AI tools like ChatGPT, Claude, and local AI for productivity.',
    },
    {
      icon: <LayoutGrid className="h-5 w-5 text-accent-fg" aria-hidden="true" />,
      title: 'Visual Reference',
      description: 'Diagrams, decision frameworks, and structured guides make complex topics click.',
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-success-fg" aria-hidden="true" />,
      title: 'Best Practices',
      description: 'Learn professional standards and techniques that help you succeed in interviews and work.',
    },
  ];

  const audience = [
    { emoji: '👔', label: 'Professionals', desc: 'Enhance your interview skills and master AI tools for career growth.' },
    { emoji: '🎓', label: 'Students', desc: 'Build a strong foundation in programming, interviews, and AI literacy.' },
    { emoji: '🔄', label: 'Career Changers', desc: 'Learn interview techniques and modern tech skills to transition successfully.' },
    { emoji: '🤖', label: 'AI Enthusiasts', desc: 'Master AI tools, prompting, and automation to boost productivity.' },
    { emoji: '💻', label: 'Developers', desc: 'Sharpen technical skills, prepare for coding interviews, and learn AI-assisted development.' },
  ];

  return (
    <>
      <HeroSection
        totalLessons={stats.totalLessons}
        totalHours={stats.totalHours}
      />

      {/* Who is this for */}
      <section className="border-b border-border bg-canvas-subtle py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Who this is for"
            title="Learning for everyone"
            description="Whether you're preparing for interviews, learning AI tools, or mastering programming skills — this platform was built for you."
            align="center"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audience.map((item) => (
              <article
                key={item.label}
                className="group flex items-start gap-3 rounded-xl border border-border bg-canvas p-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-canvas-inset text-xl"
                  aria-hidden="true"
                >
                  {item.emoji}
                </span>
                <div>
                  <p className="font-semibold text-fg-default text-sm group-hover:text-accent-fg transition-colors">
                    {item.label}
                  </p>
                  <p className="text-sm text-fg-muted mt-0.5">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-border py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="What's included"
            title="Everything you need to learn and grow"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((card) => (
              <article
                key={card.title}
                className="group flex flex-col gap-3 rounded-xl border border-border bg-canvas p-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-canvas-inset"
                  aria-hidden="true"
                >
                  {card.icon}
                </span>
                <h3 className="text-sm font-semibold text-fg-default group-hover:text-accent-fg transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-fg-muted">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Courses preview */}
      <section className="border-b border-border py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Learning paths"
            title="Browse courses"
            description="Self-contained paths built for beginners and working professionals alike."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 6).map((course: Course) => (
              <Link
                key={course.id}
              href={`/${getCourseCategory(course.slug)}/courses/${course.slug}`}
                className="group flex flex-col gap-3 rounded-xl border border-border bg-canvas p-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="text-3xl" aria-hidden="true">{course.icon}</span>
                <h3 className="text-sm font-semibold text-fg-default group-hover:text-accent-fg transition-colors">
                  {course.title}
                </h3>
                <p className="line-clamp-2 text-sm text-fg-muted flex-1">
                  {course.subtitle}
                </p>
                <span className="flex items-center gap-1 text-xs text-fg-subtle">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {formatCourseHours(course)} read
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-canvas px-4 py-2 text-sm font-medium text-fg-default transition-colors hover:bg-canvas-subtle hover:text-accent-fg"
            >
              View all courses
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <div className="mx-auto max-w-xl rounded-2xl border border-accent-subtle bg-accent-subtle/40 px-6 py-10">
            <h2 className="mb-3 text-2xl font-bold text-fg-default">
              Ready to start learning?
            </h2>
            <p className="mb-6 text-fg-muted">
              Start with any course — no account needed, no cost. Master interviews, AI tools, and programming skills.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={firstCourse ? `/${getCourseCategory(firstCourse.slug)}/courses/${firstCourse.slug}` : '/courses'}
                className="flex items-center gap-2 rounded-lg bg-accent-fg px-5 py-2.5 font-medium text-white transition-colors hover:bg-accent-emphasis"
              >
                Start Learning
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/roadmaps"
                className="flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 font-medium text-fg-muted transition-colors hover:bg-canvas-subtle hover:text-fg-default"
              >
                View Roadmaps
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function formatCourseHours(course: Course): string {
  const hours = Math.max(1, Math.round((course.moduleSlugs.length || 1) * 1.5));
  return `${hours}h`;
}
