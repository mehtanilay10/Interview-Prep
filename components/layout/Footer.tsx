"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { GitBranch, ExternalLink, ChevronDown } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { cn } from '@/lib/utils';

interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

export interface FooterCategory {
  key: string;
  label: string;
  icon: string;
  sections: { label: string; href: string; count: number }[];
}

interface FooterProps {
  /** Categories (with their Courses / Problems / Cheat Sheets sections), computed server-side from content. */
  categories: FooterCategory[];
}

const LEARN_LINKS: FooterLink[] = [
  { href: '/courses', label: 'All Courses' },
  { href: '/problems', label: 'Problems' },
  { href: '/cheatsheet', label: 'Cheat Sheets' },
  { href: '/interview-questions', label: 'Interview Questions' },
  { href: '/glossary', label: 'Glossary' },
  { href: '/roadmaps', label: 'Roadmaps' },
  { href: '/prompts', label: 'Prompt Templates' },
];

const ABOUT_LINKS: FooterLink[] = [
  { href: 'https://github.com/mehtanilay10/Interview-Prep/', label: 'GitHub', external: true },
  { href: 'https://mnilay.com/', label: 'Author', external: true },
  { href: 'https://www.youtube.com/c/TutorialsTeam', label: 'YouTube', external: true },
];

function FooterColumnGroup({ heading, children }: { heading: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border py-3 sm:border-none sm:py-0">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-1 sm:pointer-events-none sm:cursor-default sm:py-0"
        aria-expanded={isOpen}
      >
        <h3 className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
          {heading}
        </h3>
        <ChevronDown
          className={cn("h-4 w-4 text-fg-muted transition-transform sm:hidden", isOpen && "rotate-180")}
        />
      </button>
      <div className={cn("mt-3 overflow-hidden sm:mt-3", isOpen ? "block animate-slide-up" : "hidden")}>
        {children}
      </div>
    </div>
  );
}

function FooterLinkList({ links }: { links: FooterLink[] }) {
  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.href}>
          {link.external ? (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-1 text-sm text-fg-muted transition-colors hover:text-accent-fg"
            >
              {link.label}
            </a>
          ) : (
            <Link
              href={link.href}
              className="block py-1 text-sm text-fg-muted transition-colors hover:text-accent-fg"
            >
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

function FooterCategoryList({ categories }: { categories: FooterCategory[] }) {
  return (
    <ul className="space-y-3">
      {categories.map((cat) => (
        <li key={cat.key}>
          <p className="flex items-center gap-2 text-sm font-medium text-fg-default">
            <span aria-hidden="true">{cat.icon}</span>
            {cat.label}
          </p>
          <div className="ml-6 mt-1 flex flex-wrap gap-x-3 gap-y-0.5">
            {cat.sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="py-0.5 text-sm text-fg-muted transition-colors hover:text-accent-fg"
              >
                {section.label}
              </Link>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Footer({ categories }: FooterProps) {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border bg-canvas-subtle transition-theme">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-fg-default transition-colors hover:text-accent-fg"
            >
              <Logo className="h-6 w-6" />
              <span className="text-base">Interview Prep</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-fg-muted">
              Interview preparation with AI-powered tools. Practice, refine, and succeed — no coding required.
            </p>
          </div>

          {/* Learn */}
          <FooterColumnGroup heading="Learn">
            <FooterLinkList links={LEARN_LINKS} />
          </FooterColumnGroup>

          {/* Browse by category */}
          <FooterColumnGroup heading="Browse by Category">
            <FooterCategoryList categories={categories} />
          </FooterColumnGroup>

          {/* About */}
          <FooterColumnGroup heading="About">
            <FooterLinkList links={ABOUT_LINKS} />
          </FooterColumnGroup>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-fg-subtle sm:flex-row">
          <p>© {year ?? '2026'} Interview Prep. Open knowledge for everyone.</p>
          <a
            href="https://github.com/mehtanilay10/Interview-Prep/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 transition-colors hover:text-fg-default"
          >
            <GitBranch className="h-3.5 w-3.5" aria-hidden="true" />
            GitHub
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
