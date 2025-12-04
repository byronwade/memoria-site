"use client";

import { Github, Heart, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SearchCommand } from "@/components/search-command";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
	{ href: "/docs", label: "Docs" },
	{ href: "/#features", label: "Features" },
	{ href: "/#how-it-works", label: "How It Works" },
];

export function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled || mobileMenuOpen
					? "bg-background/95 backdrop-blur-lg border-b border-card-border"
					: "bg-transparent"
			}`}
		>
			<Container>
				<div className="flex items-center justify-between h-16">
					{/* Logo + Nav */}
					<div className="flex items-center gap-8">
						<Link
							href="/"
							className="flex items-center gap-2 text-xl font-bold"
						>
							<img
								src="/memoria.svg"
								alt=""
								className="w-6 h-6 dark:invert"
								aria-hidden="true"
							/>
							Memoria
						</Link>

						{/* Desktop Nav */}
						<nav className="hidden md:flex items-center gap-6">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="text-muted-foreground hover:text-foreground transition-colors text-sm"
								>
									{link.label}
								</Link>
							))}
						</nav>
					</div>

					{/* Desktop CTAs */}
					<div className="hidden md:flex items-center gap-2">
						<SearchCommand />
						<a
							href="https://github.com/byronwade/memoria"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-foreground transition-colors p-2"
							aria-label="GitHub"
						>
							<Github className="w-5 h-5" />
						</a>
						<ThemeToggle />
						<Button variant="outline" size="sm" asChild>
							<a
								href="https://github.com/sponsors/byronwade"
								target="_blank"
								rel="noopener noreferrer"
								className="gap-2"
							>
								<Heart className="w-4 h-4" />
								Support
							</a>
						</Button>
						<Button size="sm" asChild>
							<Link href="/docs/installation">Get Started</Link>
						</Button>
					</div>

					{/* Mobile Actions */}
					<div className="flex items-center gap-1 md:hidden">
						<SearchCommand variant="mobile" />
						<ThemeToggle />
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
							aria-expanded={mobileMenuOpen}
						>
							{mobileMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</Button>
					</div>
				</div>

				{/* Mobile Menu */}
				{mobileMenuOpen && (
					<div className="md:hidden py-4 border-t border-card-border">
						<nav className="flex flex-col gap-3">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="text-muted-foreground hover:text-foreground transition-colors py-1"
									onClick={() => setMobileMenuOpen(false)}
								>
									{link.label}
								</Link>
							))}
							<div className="h-px bg-card-border my-2" />
							<a
								href="https://github.com/byronwade/memoria"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 py-1"
							>
								<Github className="w-4 h-4" />
								GitHub
							</a>
							<a
								href="https://github.com/sponsors/byronwade"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 py-1"
							>
								<Heart className="w-4 h-4" />
								Support
							</a>
							<div className="h-px bg-card-border my-2" />
							<Button className="w-full" asChild>
								<Link href="/docs/installation">Get Started</Link>
							</Button>
						</nav>
					</div>
				)}
			</Container>
		</header>
	);
}
