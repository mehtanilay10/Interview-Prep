"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Logo } from "@/components/ui/Logo";
import { PWAInstallButton } from "@/components/ui/PWAInstallButton";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/courses", label: "Courses" },
  { href: "/interview-questions", label: "Interview Questions" },
];

export function Navbar() {
	const pathname = usePathname();
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 border-b border-border bg-canvas transition-theme">
			<div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-2 font-semibold text-fg-default hover:text-accent-fg transition-colors">
					<Logo className="w-8 h-8" />
					<span className="text-base">Interview Prep</span>
				</Link>

				{/* Desktop nav */}
				<nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
					{NAV_LINKS.map((link) => {
						const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
						return (
							<Link key={link.href} href={link.href} className={cn("rounded-md px-3 py-1.5 text-sm font-medium transition-colors", isActive ? "bg-accent-subtle text-accent-fg" : "text-fg-muted hover:bg-canvas-subtle hover:text-fg-default")} aria-current={isActive ? "page" : undefined}>
								{link.label}
							</Link>
						);
					})}
				</nav>

				{/* Right side: theme toggle + mobile hamburger */}
				<div className="flex items-center gap-1">
					<ThemeToggle />
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

			{/* Mobile menu */}
			{mobileOpen && (
				<div id="mobile-nav" className="border-t border-border bg-canvas md:hidden animate-slide-up">
					<nav className="flex flex-col gap-1 px-4 py-3" aria-label="Mobile navigation">
						<PWAInstallButton className="mb-2" />

						{NAV_LINKS.map((link) => {
							const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
							return (
								<Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className={cn("rounded-md px-3 py-2 text-sm font-medium transition-colors", isActive ? "bg-accent-subtle text-accent-fg" : "text-fg-muted hover:bg-canvas-subtle hover:text-fg-default")}>
									{link.label}
								</Link>
							);
						})}
					</nav>
				</div>
			)}
		</header>
	);
}
