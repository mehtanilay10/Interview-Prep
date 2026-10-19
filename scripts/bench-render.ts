/**
 * TEMPORARY build benchmark — measures:
 *   1. Content graph import time
 *   2. generateStaticParams() cost per route (cold + warm)
 *   3. Per-page: helper computation (page fn) vs React SSR (renderToString)
 * Run: npx tsx scripts/bench-render.ts
 */
import { performance } from 'node:perf_hooks';
import React from 'react';
import { renderToString } from 'react-dom/server';

const t00 = performance.now();

type PageModule = {
  generateStaticParams?: () => Promise<unknown[]> | unknown[];
  default: (props: { params: Promise<Record<string, string>> }) => Promise<React.ReactElement> | React.ReactElement;
};

function ms(t: number): string {
  return t.toFixed(1) + 'ms';
}

function stats(arr: number[]): string {
  const s = [...arr].sort((a, b) => a - b);
  const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
  return `avg=${ms(avg)} p50=${ms(s[Math.floor(s.length / 2)])} max=${ms(s[s.length - 1])} n=${arr.length}`;
}

async function main() {
  // ── 1. content graph import ────────────────────────────────────────────────
  const content = await import('../lib/content');
  const importMs = performance.now() - t00;
  console.log(`[1] import content graph: ${ms(importMs)}`);
  console.log(
    `    courses=${content.courses.length} modules=${content.modules.length} lessons=${content.lessons.length}`
  );

  // ── 2. shared layout helpers (Navbar/Footer run this twice per page) ──────
  {
    const t = performance.now();
    for (let i = 0; i < 100; i++) content.getNavigationCategories();
    console.log(`[2] getNavigationCategories x100: ${ms(performance.now() - t)}`);
  }
  {
    const course = content.getAllCourses()[0];
    const t = performance.now();
    for (let i = 0; i < 100; i++) content.getLessonsForCourse(course.slug);
    console.log(`[3] getLessonsForCourse x100 (course=${course.slug}, lessons=${content.getLessonsForCourse(course.slug).length}): ${ms(performance.now() - t)}`);
  }
  {
    const techs = content.getInterviewTechnologies();
    const t = performance.now();
    for (let i = 0; i < 20; i++) content.getInterviewLevelsForTechnology(techs[0]);
    console.log(`[4] getInterviewLevelsForTechnology x20: ${ms(performance.now() - t)}`);
  }

  // ── 2. generateStaticParams per route ─────────────────────────────────────
  const routes: { name: string; path: string }[] = [
    { name: 'courses/[courseSlug]', path: '../app/[category]/courses/[courseSlug]/page' },
    { name: 'courses/[courseSlug]/[moduleSlug]', path: '../app/[category]/courses/[courseSlug]/[moduleSlug]/page' },
    { name: 'courses/.../[lessonSlug]', path: '../app/[category]/courses/[courseSlug]/[moduleSlug]/[lessonSlug]/page' },
    { name: 'problems/[courseSlug]', path: '../app/[category]/problems/[courseSlug]/page' },
    { name: 'problems/.../[moduleSlug]', path: '../app/[category]/problems/[courseSlug]/[moduleSlug]/page' },
    { name: 'problems/.../[lessonSlug]', path: '../app/[category]/problems/[courseSlug]/[moduleSlug]/[lessonSlug]/page' },
    { name: 'cheatsheets/[technology]', path: '../app/[category]/cheatsheets/[technology]/page' },
    { name: 'interview-questions/[technology]', path: '../app/interview-questions/[technology]/page' },
    { name: 'interview-questions/.../[slug]', path: '../app/interview-questions/[technology]/[slug]/page' },
    { name: 'courses index', path: '../app/[category]/courses/page' },
  ];

  const loaded: Record<string, PageModule> = {};
  console.log(`\n[5] generateStaticParams():`);
  for (const r of routes) {
    try {
      const mod = (await import(r.path)) as PageModule;
      loaded[r.name] = mod;
      if (!mod.generateStaticParams) {
        console.log(`    ${r.name}: (none)`);
        continue;
      }
      const t = performance.now();
      await mod.generateStaticParams();
      const cold = performance.now() - t;
      const t2 = performance.now();
      await mod.generateStaticParams();
      const warm = performance.now() - t2;
      let n = 0;
      try {
        n = (await mod.generateStaticParams!()).length;
      } catch {
        /* ignore */
      }
      console.log(`    ${r.name}: cold=${ms(cold)} warm=${ms(warm)} params=${n}`);
    } catch (e) {
      console.log(`    ${r.name}: ERROR ${String(e).slice(0, 200)}`);
    }
  }

  // ── 3. providers (same as root layout) ─────────────────────────────────────
  const { AuthProvider } = await import('../components/auth/AuthProvider');
  const { ProgressProvider } = await import('../components/progress/ProgressProvider');
  const { BookmarkProvider } = await import('../components/bookmarks/BookmarkProvider');
  const { ThemeProvider } = await import('../components/ui/ThemeProvider');
  const { Navbar } = await import('../components/layout/Navbar');
  const { Footer } = await import('../components/layout/Footer');

  const wrap = (el: React.ReactElement) =>
    React.createElement(
      AuthProvider,
      null,
      React.createElement(
        ProgressProvider,
        null,
        React.createElement(
          BookmarkProvider,
          null,
          React.createElement(ThemeProvider, null, el)
        )
      )
    );

  // Minimal router contexts (Navbar uses useRouter/usePathname during SSR).
  const { AppRouterContext } = await import('next/dist/shared/lib/app-router-context.shared-runtime');
  const { PathnameContext, SearchParamsContext } = await import(
    'next/dist/shared/lib/hooks-client-context.shared-runtime'
  );
  const fakeRouter = {
    back() {},
    forward() {},
    refresh() {},
    push() {},
    replace() {},
    prefetch() {},
    bfcacheId: 'bench',
  };
  const wrapRouter = (el: React.ReactElement) =>
    React.createElement(
      AppRouterContext.Provider,
      { value: fakeRouter as never },
      React.createElement(
        PathnameContext.Provider,
        { value: '/bench' as never },
        React.createElement(SearchParamsContext.Provider, { value: null as never }, el)
      )
    );
  const fullWrap = (el: React.ReactElement) => wrap(wrapRouter(el));

  // Navbar + Footer (runs getNavigationCategories twice — once per page in layout)
  {
    const cats = content.getNavigationCategories();
    const t = performance.now();
    for (let i = 0; i < 20; i++) {
      renderToString(
        fullWrap(
          React.createElement(
            React.Fragment,
            null,
            React.createElement(Navbar, { categories: cats }),
            React.createElement(Footer, { categories: cats })
          )
        )
      );
    }
    console.log(`\n[6] Navbar+Footer renderToString x20: ${ms((performance.now() - t) / 20)}/page`);
  }

  // ── 4. page renders ───────────────────────────────────────────────────────
  interface Case {
    name: string;
    mod: string;
    sample: (params: unknown[]) => unknown[];
    getLabel?: (p: Record<string, string>) => string;
  }

  const cases: Case[] = [
    { name: 'course lesson page', mod: 'courses/.../[lessonSlug]', sample: (p) => p.filter((_, i) => i % 173 === 0).slice(0, 12) },
    {
      name: 'interview-qa course lesson',
      mod: 'courses/.../[lessonSlug]',
      sample: (p) => p.filter((x: any) => x.courseSlug === 'interview-qa').filter((_, i) => i % 14 === 0).slice(0, 14),
    },
    {
      name: 'database course lesson',
      mod: 'courses/.../[lessonSlug]',
      sample: (p) => p.filter((x: any) => x.category === 'database').filter((_, i) => i % 20 === 0).slice(0, 12),
    },
    { name: 'course module page', mod: 'courses/[courseSlug]/[moduleSlug]', sample: (p) => p.filter((_, i) => i % 29 === 0).slice(0, 10) },
    { name: 'course page', mod: 'courses/[courseSlug]', sample: (p) => p.slice(0, 10) },
    { name: 'problem lesson page', mod: 'problems/.../[lessonSlug]', sample: (p) => p.filter((_, i) => i % 37 === 0).slice(0, 10) },
    { name: 'interview question page', mod: 'interview-questions/.../[slug]', sample: (p) => p.filter((_, i) => i % 17 === 0).slice(0, 12) },
    { name: 'cheatsheet page', mod: 'cheatsheets/[technology]', sample: (p) => p.slice(0, 8) },
  ];

  console.log(`\n[6] per-page render (pageFn = helper time, ssr = React renderToString):`);
  for (const c of cases) {
    const mod = loaded[c.mod];
    if (!mod?.generateStaticParams) {
      console.log(`    ${c.name}: module not loaded`);
      continue;
    }
    const params = (await mod.generateStaticParams!()) as Record<string, string>[];
    const sample = c.sample(params) as Record<string, string>[];
    const fnTimes: number[] = [];
    const ssrTimes: number[] = [];
    const sizes: number[] = [];
    for (const p of sample) {
      const t1 = performance.now();
      let el: React.ReactElement;
      try {
        el = (await mod.default({ params: Promise.resolve(p) })) as React.ReactElement;
      } catch (e) {
        console.log(`      render error for ${JSON.stringify(p)}: ${String(e).slice(0, 150)}`);
        continue;
      }
      fnTimes.push(performance.now() - t1);
      const t2 = performance.now();
      const html = renderToString(fullWrap(el));
      ssrTimes.push(performance.now() - t2);
      sizes.push(html.length);
    }
    if (fnTimes.length) {
      const avgSize = Math.round(sizes.reduce((a, b) => a + b, 0) / sizes.length / 1024);
      console.log(
        `    ${c.name}: pageFn ${stats(fnTimes)} | ssr ${stats(ssrTimes)} | html~${avgSize}KB`
      );
    }
  }

  console.log(`\ntotal bench: ${ms(performance.now() - t00)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
