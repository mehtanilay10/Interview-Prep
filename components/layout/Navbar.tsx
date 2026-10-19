"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Search, LogOut, User, Settings2, Bookmark, StickyNote, BarChart3, ChevronRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { PWAInstallButton } from "@/components/ui/PWAInstallButton";
import { SearchSuggestions } from "@/components/ui/SearchSuggestions";
import { SearchErrorBoundary } from "@/components/ui/SearchErrorBoundary";
import { cn } from "@/lib/utils";
import { registerShortcut } from "@/hooks/useKeyboardShortcuts";
import { useSession, signOut } from "next-auth/react";

const CATEGORIES = [
  {
    key: "fundamentals",
    label: "Fundamentals",
    icon: "🌱",
    courses: [
      { slug: "programming-computer-web-foundations", title: "Programming, Computer & Web Foundations" },
      { slug: "oops-concepts", title: "OOP Concepts" },
      { slug: "senior-software-engineering", title: "Senior Software Engineering" },
    ],
  },
  {
    key: "ai",
    label: "AI",
    icon: "🤖",
    courses: [
      { slug: "ai-basics", title: "AI Basics" },
      { slug: "dotnet-ai-backend", title: ".NET AI Backend" },
    ],
  },
  {
    key: "dotnet",
    label: ".NET",
    icon: "💜",
    courses: [
      { slug: "csharp-fundamentals", title: "C# Fundamentals" },
      { slug: "linq", title: "LINQ" },
      { slug: "ef-core", title: "EF Core" },
      { slug: "aspnet-core", title: "ASP.NET Core" },
      { slug: "aspnet-core-web-api", title: "ASP.NET Core Web API" },
      { slug: "dotnet-nuget-packages", title: ".NET NuGet Packages" },
      { slug: "unit-testing-dotnet", title: "Unit Testing .NET" },
      { slug: "authentication-authorization", title: "Authentication & Authorization" },
      { slug: "graphql-dotnet", title: "GraphQL .NET" },
      { slug: "aws-for-aspnet", title: "AWS for ASP.NET" },
      { slug: "azure-for-aspnet", title: "Azure for ASP.NET" },
    ],
  },
  {
    key: "frontend",
    label: "Frontend",
    icon: "⚛️",
    courses: [
      { slug: "react-fundamentals", title: "React Fundamentals" },
      { slug: "typescript-for-react", title: "TypeScript for React" },
      { slug: "redux", title: "Redux" },
      { slug: "react-query", title: "React Query" },
      { slug: "react-testing", title: "React Testing" },
      { slug: "apollo", title: "Apollo Client" },
      { slug: "react-advanced-patterns", title: "React Advanced Patterns" },
      { slug: "next-js-full-stack-react", title: "Next.js Full-Stack React" },
      { slug: "prisma", title: "Prisma" },
      { slug: "yarn-npm-packages", title: "Yarn & npm Packages" },
    ],
  },
  {
    key: "database",
    label: "Database",
    icon: "🗄️",
    courses: [
      { slug: "postgresql", title: "PostgreSQL" },
      { slug: "sql-server", title: "SQL Server" },
    ],
  },
  {
    key: "cloud",
    label: "Cloud",
    icon: "☁️",
    courses: [
      { slug: "aws", title: "AWS" },
      { slug: "azure", title: "Azure" },
    ],
  },
  {
    key: "devops",
    label: "DevOps",
    icon: "🚀",
    courses: [
      { slug: "devops", title: "DevOps" },
      { slug: "git-linux-developer-workflow", title: "Git & Linux Developer Workflow" },
    ],
  },
  {
    key: "architecture",
    label: "Architecture",
    icon: "🏗️",
    courses: [
      { slug: "design-patterns", title: "Design Patterns" },
      { slug: "clean-code-csharp", title: "Clean Code C#" },
      { slug: "redis-caching-strategies", title: "Redis Caching Strategies" },
      { slug: "fullstack-security", title: "Full-Stack Security" },
      { slug: "message-queues-event-streaming", title: "Message Queues & Event Streaming" },
      { slug: "microservices-architecture", title: "Microservices Architecture" },
      { slug: "system-design-interviews", title: "System Design Interviews" },
      { slug: "frontend-performance-engineering", title: "Frontend Performance Engineering" },
    ],
  },
];

const NAV_LINKS = [
  { href: "/courses", label: "All Courses" },
  { href: "/cheatsheet", label: "Cheat Sheets" },
  { href: "/problems", label: "Problems" },
  { href: "/interview-questions", label: "Interview Q&A" },
  { href: "/glossary", label: "Glossary" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState<string | null>(null);
  const [searchMode, setSearchMode] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const categoryMenuRef = useRef<HTMLDivElement>(null);
  const { data: session, status } = useSession();
  const isLoggedIn = status === 'authenticated';

  const handleSearch = (q: string) => {
    router.push(`/search?q=${encodeURIComponent(q)}`);
    setMobileOpen(false);
    setSearchMode(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!searchMode) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSearchMode(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [searchMode]);

  useEffect(() => {
    registerShortcut('/', 'Focus search', () => {
      if (!searchMode) setSearchMode(true);
      searchInputRef.current?.focus();
      searchInputRef.current?.select();
    });
  }, [searchMode]);

  useEffect(() => {
    if (!userMenuOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [userMenuOpen]);

  useEffect(() => {
    if (!categoriesOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (categoryMenuRef.current && !categoryMenuRef.current.contains(event.target as Node)) {
        setCategoriesOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [categoriesOpen]);

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-200",
        scrolled
          ? "border-b border-border bg-canvas/75 backdrop-blur-xl shadow-md"
          : "border-b border-border bg-canvas/95 shadow-sm"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-fg-default hover:text-accent-fg transition-colors">
          <Logo className="w-8 h-8" />
          <span className="text-base">Interview Prep</span>
        </Link>

        {searchMode ? (
          <div className="hidden flex-1 items-center justify-center md:flex">
            <div className="relative w-full max-w-2xl transition-all duration-300 ease-in-out">
              <SearchErrorBoundary>
                <SearchSuggestions
                  ref={searchInputRef}
                  value={searchQuery}
                  onChange={setSearchQuery}
                  onSearch={handleSearch}
                  placeholder="Search lessons, modules, topics..."
                  size="md"
                />
              </SearchErrorBoundary>
            </div>
            <button
              type="button"
              onClick={() => setSearchMode(false)}
              className="ml-3 flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-fg-muted transition-colors hover:bg-canvas-subtle hover:text-fg-default"
              aria-label="Close search"
            >
              <X className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">Cancel</span>
            </button>
          </div>
        ) : (
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation" ref={categoryMenuRef}>
            {/* Categories Mega Menu */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCategoriesOpen(categoriesOpen ? null : "all")}
                className="rounded-md px-3 py-1.5 text-sm font-medium text-fg-muted transition-colors hover:bg-canvas-subtle hover:text-fg-default"
                aria-expanded={!!categoriesOpen}
                aria-haspopup="true"
              >
                Categories
              </button>
              {categoriesOpen && (
                <div className="absolute left-0 mt-2 w-full min-w-[800px] max-w-[1000px] rounded-lg border border-border bg-canvas shadow-lg py-4 z-50">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 p-4">
                    {CATEGORIES.map((cat) => (
                      <div key={cat.key} className="col-span-1 md:col-span-2 lg:col-span-1">
                        <Link
                          href={`/${cat.key}/courses`}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg font-semibold text-fg-default hover:bg-canvas-subtle transition-colors"
                          onClick={() => setCategoriesOpen(null)}
                        >
                          <span className="text-lg" aria-hidden="true">{cat.icon}</span>
                          <span>{cat.label}</span>
                        </Link>
                        <ul className="mt-1 space-y-1 ml-6">
                          {cat.courses.map((course) => (
                            <li key={course.slug}>
                              <Link
                                href={`/${cat.key}/courses/${course.slug}`}
                                className="block px-3 py-1.5 text-sm text-fg-muted hover:bg-canvas-subtle hover:text-fg-default rounded-md transition-colors"
                                onClick={() => setCategoriesOpen(null)}
                              >
                                {course.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border mt-2 pt-2 px-4">
                    <Link
                      href="/courses"
                      className="text-sm font-medium text-accent-fg hover:underline"
                      onClick={() => setCategoriesOpen(null)}
                    >
                      View all courses →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {NAV_LINKS.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link key={link.href} href={link.href} className={cn("rounded-md px-3 py-1.5 text-sm font-medium transition-colors", isActive ? "bg-accent-subtle text-accent-fg" : "text-fg-muted hover:bg-canvas-subtle hover:text-fg-default")} aria-current={isActive ? "page" : undefined}>
                  {link.label}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={() => setSearchMode(true)}
              className="ml-2 flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium text-fg-muted transition-colors hover:bg-canvas-subtle hover:text-fg-default"
              aria-label="Open search"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
              <span className="hidden lg:inline">Search</span>
            </button>
          </nav>
        )}

        <div className="flex items-center gap-1">
          {isLoggedIn && session?.user ? (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen((o) => !o)}
                className="flex items-center gap-2 rounded-md p-1.5 text-fg-muted transition-colors hover:bg-canvas-subtle hover:text-fg-default"
                aria-label="User menu"
                aria-expanded={userMenuOpen}
              >
                {session.user.image ? (
                  <Image src={session.user.image} alt="" width={28} height={28} className="h-7 w-7 rounded-full object-cover" unoptimized />
                ) : (
                  <User className="h-5 w-5" aria-hidden="true" />
                )}
                <span className="hidden text-sm font-medium sm:block">{session.user.name}</span>
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-lg border border-border bg-canvas shadow-lg py-1">
                  <Link
                    href="/progress"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-fg-default hover:bg-canvas-subtle"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <BarChart3 className="h-4 w-4" aria-hidden="true" />
                    Progress Dashboard
                  </Link>
                  <Link
                    href="/bookmarks"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-fg-default hover:bg-canvas-subtle"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <Bookmark className="h-4 w-4" aria-hidden="true" />
                    Bookmarks
                  </Link>
                  <Link
                    href="/notes"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-fg-default hover:bg-canvas-subtle"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <StickyNote className="h-4 w-4" aria-hidden="true" />
                    Notes
                  </Link>
                  <Link
                    href="/personalization"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-fg-default hover:bg-canvas-subtle"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <Settings2 className="h-4 w-4" aria-hidden="true" />
                    Personalization
                  </Link>
                  <button
                    onClick={() => {
                      setUserMenuOpen(false);
                      handleSignOut();
                    }}
                    className="flex w-full items-center gap-2 px-4 py-2 text-sm text-fg-muted hover:bg-canvas-subtle hover:text-fg-default"
                  >
                    <LogOut className="h-4 w-4" aria-hidden="true" />
                    Sign out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="rounded-md px-3 py-1.5 text-sm font-medium text-fg-muted transition-colors hover:bg-canvas-subtle hover:text-fg-default"
            >
              Sign in
            </Link>
          )}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="rounded-md p-2 text-fg-muted transition-colors hover:bg-canvas-subtle hover:text-fg-default md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className="md:hidden animate-slide-up border-t border-border bg-canvas-subtle"
        >
          <nav className="flex flex-col gap-1 px-4 py-3" aria-label="Mobile navigation">
            <PWAInstallButton className="mb-2" />
            <SearchErrorBoundary>
              <SearchSuggestions
                value={searchQuery}
                onChange={setSearchQuery}
                onSearch={handleSearch}
                placeholder="Search lessons, modules, topics..."
                className="mb-2"
                size="sm"
              />
            </SearchErrorBoundary>
            {/* Mobile Categories */}
            <div className="space-y-2">
              {CATEGORIES.map((cat) => (
                <div key={cat.key} className="border border-border rounded-lg overflow-hidden">
                  <Link
                    href={`/${cat.key}/courses`}
                    className="flex items-center gap-2 px-3 py-2 font-semibold text-fg-default hover:bg-canvas"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="text-lg" aria-hidden="true">{cat.icon}</span>
                    <span>{cat.label}</span>
                    <ChevronRight className="h-4 w-4 ml-auto text-fg-muted" aria-hidden="true" />
                  </Link>
                  <ul className="border-t border-border bg-canvas">
                    {cat.courses.map((course) => (
                      <li key={course.slug}>
                        <Link
                          href={`/${cat.key}/courses/${course.slug}`}
                          className="block px-6 py-2 text-sm text-fg-muted hover:bg-canvas-subtle hover:text-fg-default"
                          onClick={() => setMobileOpen(false)}
                        >
                          {course.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-border">
              {NAV_LINKS.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className={cn("rounded-md px-3 py-2 text-sm font-medium transition-colors", isActive ? "bg-accent-subtle text-accent-fg" : "text-fg-muted hover:bg-canvas hover:text-fg-default")}>
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
