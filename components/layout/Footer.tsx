"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Github, ExternalLink, ChevronDown } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { cn } from '@/lib/utils';

const FOOTER_LINKS = [
  {
    heading: 'Learn',
    links: [
      { href: '/courses', label: 'All Courses' },
      { href: '/interview-questions', label: 'Interview Questions' },
    ],
  },
];

function FooterLinkGroup({ col }: { col: typeof FOOTER_LINKS[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border py-3 sm:border-none sm:py-0">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-1 sm:pointer-events-none sm:cursor-default sm:py-0"
        aria-expanded={isOpen}
      >
        <h3 className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
          {col.heading}
        </h3>
        <ChevronDown 
          className={cn("h-4 w-4 text-fg-muted transition-transform sm:hidden", isOpen && "rotate-180")} 
        />
      </button>
      <ul className={cn("mt-3 space-y-2 overflow-hidden sm:mt-3 sm:block", isOpen ? "block animate-slide-up" : "hidden")}>
        {col.links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block py-1 text-sm text-fg-muted transition-colors hover:text-accent-fg sm:inline sm:py-0"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-canvas-subtle transition-theme">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="sm:col-span-1">
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

          {/* Link columns */}
          <div className="sm:col-span-1 lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8">
              {FOOTER_LINKS.map((col) => (
                <FooterLinkGroup key={col.heading} col={col} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-fg-subtle sm:mt-12 sm:flex-row">
          <p>© {new Date().getFullYear()} Interview Prep. Open knowledge for everyone.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mehtanilay10/Interview-Prep/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 transition-colors hover:text-fg-default"
            >
              <Github className="h-3.5 w-3.5" aria-hidden="true" />
              GitHub
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
