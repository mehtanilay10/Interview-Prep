"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Search, LogOut, User } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Logo } from "@/components/ui/Logo";
import { PWAInstallButton } from "@/components/ui/PWAInstallButton";
import { SearchSuggestions } from "@/components/ui/SearchSuggestions";
import { cn } from "@/lib/utils";
import { registerShortcut } from "@/hooks/useKeyboardShortcuts";
import { useSession, signOut } from "next-auth/react";

const NAV_LINKS = [
  { href: "/courses", label: "Courses" },
  { href: "/cheatsheet", label: "Cheat Sheets" },
  { href: "/problems", label: "Problems" },
  { href: "/interview-questions", label: "Interview Questions" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchMode, setSearchMode] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
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
    if (!userMenuOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [userMenuOpen]);

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
          <div className="hidden flex-1 items-center md:flex">
            <div className="relative w-full max-w-2xl transition-all duration-300 ease-in-out">
              <SearchSuggestions
                ref={searchInputRef}
                value={searchQuery}
                onChange={setSearchQuery}
                onSearch={handleSearch}
                placeholder="Search lessons, modules, topics..."
                size="md"
              />
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
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
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
          <ThemeToggle />
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
                <div className="absolute right-0 mt-2 w-48 rounded-lg border border-border bg-canvas shadow-lg py-1">
                  <Link
                    href="/progress"
                    className="block px-4 py-2 text-sm text-fg-default hover:bg-canvas-subtle"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Progress Dashboard
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
            <SearchSuggestions
              value={searchQuery}
              onChange={setSearchQuery}
              onSearch={handleSearch}
              placeholder="Search lessons, modules, topics..."
              className="mb-2"
              size="sm"
            />
            {NAV_LINKS.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className={cn("rounded-md px-3 py-2 text-sm font-medium transition-colors", isActive ? "bg-accent-subtle text-accent-fg" : "text-fg-muted hover:bg-canvas hover:text-fg-default")}>
                  {link.label}
                </Link>
              );
            })}
            {isLoggedIn ? (
              <>
                <Link href="/progress" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-fg-muted hover:bg-canvas hover:text-fg-default">
                  Progress Dashboard
                </Link>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    handleSignOut();
                  }}
                  className="rounded-md px-3 py-2 text-sm font-medium text-left text-fg-muted hover:bg-canvas hover:text-fg-default"
                >
                  Sign out
                </button>
              </>
            ) : (
              <Link href="/login" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-fg-muted hover:bg-canvas hover:text-fg-default">
                Sign in
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
