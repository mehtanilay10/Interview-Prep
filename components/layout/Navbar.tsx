"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Search, LogOut, User } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Logo } from "@/components/ui/Logo";
import { PWAInstallButton } from "@/components/ui/PWAInstallButton";
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
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { data: session, status } = useSession();
  const isLoggedIn = status === 'authenticated';

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = new FormData(e.currentTarget).get("q")?.toString().trim() ?? "";
    if (q) {
      router.push(`/search?q=${encodeURIComponent(q)}`);
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    registerShortcut('/', 'Focus search', () => {
      searchInputRef.current?.focus();
      searchInputRef.current?.select();
    });
  }, []);

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

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link key={link.href} href={link.href} className={cn("rounded-md px-3 py-1.5 text-sm font-medium transition-colors", isActive ? "bg-accent-subtle text-accent-fg" : "text-fg-muted hover:bg-canvas-subtle hover:text-fg-default")} aria-current={isActive ? "page" : undefined}>
                {link.label}
              </Link>
            );
          })}
          <form onSubmit={handleSearch} className="relative ml-2">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-fg-muted" aria-hidden="true" />
            <input
              ref={searchInputRef}
              type="search"
              name="q"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search…"
              className="h-9 w-48 rounded-lg border border-border bg-canvas pl-9 pr-3 text-sm text-fg-default placeholder:text-fg-subtle transition-colors focus:border-accent-fg focus:outline-none focus:ring-2 focus:ring-accent-fg/20 md:w-64"
              aria-label="Search lessons and modules"
            />
          </form>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          {isLoggedIn && session?.user ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen((o) => !o)}
                className="flex items-center gap-2 rounded-md p-1.5 text-fg-muted transition-colors hover:bg-canvas-subtle hover:text-fg-default"
                aria-label="User menu"
                aria-expanded={userMenuOpen}
              >
                {session.user.image ? (
                  <img src={session.user.image} alt="" className="h-7 w-7 rounded-full" />
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
            <form onSubmit={handleSearch} className="mb-2">
              <div className="relative">
                <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-fg-muted" aria-hidden="true" />
                <input
                  type="search"
                  name="q"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search lessons and modules..."
                  className="w-full rounded-lg border border-border bg-canvas pl-9 pr-3 py-2 text-sm text-fg-default placeholder:text-fg-subtle focus:border-accent-fg focus:outline-none focus:ring-2 focus:ring-accent-fg/20"
                  aria-label="Search lessons and modules"
                />
              </div>
            </form>
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
