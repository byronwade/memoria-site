"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Theme = "light" | "dark" | "system";

export function ThemeToggle() {
	const [theme, setTheme] = useState<Theme>("system");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const stored = localStorage.getItem("theme") as Theme | null;
		if (stored) {
			setTheme(stored);
		}
	}, []);

	useEffect(() => {
		if (!mounted) return;

		const root = document.documentElement;

		if (theme === "system") {
			localStorage.removeItem("theme");
			const systemDark = window.matchMedia(
				"(prefers-color-scheme: dark)",
			).matches;
			root.classList.toggle("dark", systemDark);
		} else {
			localStorage.setItem("theme", theme);
			root.classList.toggle("dark", theme === "dark");
		}
	}, [theme, mounted]);

	// Listen for system theme changes
	useEffect(() => {
		if (!mounted || theme !== "system") return;

		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handler = (e: MediaQueryListEvent) => {
			document.documentElement.classList.toggle("dark", e.matches);
		};

		mediaQuery.addEventListener("change", handler);
		return () => mediaQuery.removeEventListener("change", handler);
	}, [theme, mounted]);

	const cycleTheme = () => {
		const themes: Theme[] = ["light", "dark", "system"];
		const currentIndex = themes.indexOf(theme);
		const nextIndex = (currentIndex + 1) % themes.length;
		setTheme(themes[nextIndex]);
	};

	if (!mounted) {
		return (
			<Button variant="ghost" size="icon" aria-label="Toggle theme">
				<Monitor className="w-4 h-4 text-muted-foreground" />
			</Button>
		);
	}

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={cycleTheme}
			aria-label={`Current theme: ${theme}. Click to cycle.`}
			title={`Theme: ${theme}`}
		>
			{theme === "light" && <Sun className="w-4 h-4 text-muted-foreground" />}
			{theme === "dark" && <Moon className="w-4 h-4 text-muted-foreground" />}
			{theme === "system" && (
				<Monitor className="w-4 h-4 text-muted-foreground" />
			)}
		</Button>
	);
}
