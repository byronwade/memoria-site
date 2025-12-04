"use client";

import { m } from "framer-motion";
import { ArrowRight, Check, Copy, Lock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const installCommand = "npx @byronwade/memoria";

function CopyInput({ text }: { text: string }) {
	const [copied, setCopied] = useState(false);

	const copy = async () => {
		await navigator.clipboard.writeText(text);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<Card className="flex items-center gap-2 px-4 py-3 max-w-md mx-auto flex-row">
			<Label htmlFor="install-command" className="sr-only">
				Install command
			</Label>
			<span className="text-muted-foreground font-mono" aria-hidden="true">
				$
			</span>
			<Input
				id="install-command"
				type="text"
				value={text}
				readOnly
				className="flex-1 bg-transparent font-mono text-sm border-0 shadow-none focus-visible:ring-0 p-0 h-auto"
			/>
			<Button
				variant="ghost"
				size="icon"
				onClick={copy}
				aria-label="Copy to clipboard"
				className="h-8 w-8"
			>
				{copied ? (
					<Check className="w-4 h-4 text-accent" />
				) : (
					<Copy className="w-4 h-4 text-muted-foreground" />
				)}
			</Button>
		</Card>
	);
}

export function Hero() {
	return (
		<section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
			{/* Subtle background gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-accent/3 via-transparent to-transparent" />

			<Container size="md" className="relative z-10">
				<div className="text-center">
					{/* Badges */}
					<m.div
						className="flex items-center justify-center gap-3 flex-wrap"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
					>
						<a
							href="https://www.npmjs.com/package/@byronwade/memoria"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="https://img.shields.io/npm/v/@byronwade/memoria.svg"
								alt="npm version"
								width={80}
								height={20}
								className="h-5"
							/>
						</a>
						<a
							href="https://github.com/byronwade/memoria"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="https://img.shields.io/github/stars/byronwade/memoria?style=social"
								alt="GitHub stars"
								width={90}
								height={20}
								className="h-5"
							/>
						</a>
						<a
							href="https://smithery.ai/server/@byronwade/memoria"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="https://smithery.ai/badge/@byronwade/memoria"
								alt="Smithery"
								width={110}
								height={20}
								className="h-5"
							/>
						</a>
					</m.div>

					{/* Small label */}
					<m.p
						className="mt-4 text-sm text-muted-foreground uppercase tracking-wider font-medium"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.05 }}
					>
						MCP Server for AI Assistants
					</m.p>

					{/* Headline - cleaner, lighter weight */}
					<m.h1
						className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-balance"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						The Memory Your AI <span className="text-accent">Lacks</span>
					</m.h1>

					{/* Subtext */}
					<m.p
						className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto text-balance"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						Prevents your AI from breaking code by revealing hidden file
						dependencies through git forensics.
					</m.p>

					{/* Copy input */}
					<m.div
						className="mt-10"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<CopyInput text={installCommand} />
					</m.div>

					{/* Links row */}
					<m.div
						className="mt-6 flex items-center justify-center gap-6"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						<Link
							href="/docs"
							className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
						>
							Read the docs
							<ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
						</Link>
						<span className="text-card-border">|</span>
						<span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
							<Lock className="w-3.5 h-3.5" />
							100% local & private
						</span>
					</m.div>

					{/* Terminal preview */}
					<m.div
						className="mt-16 max-w-2xl mx-auto"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5 }}
					>
						<Card className="bg-gray-900 overflow-hidden shadow-xl border-gray-800 p-0">
							<div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
								<div className="flex gap-1.5">
									<div className="w-3 h-3 rounded-full bg-red-500/80" />
									<div className="w-3 h-3 rounded-full bg-yellow-500/80" />
									<div className="w-3 h-3 rounded-full bg-green-500/80" />
								</div>
								<span className="text-gray-500 text-xs font-mono ml-2">
									memoria
								</span>
							</div>
							<div className="p-4 text-left font-mono text-sm">
								<div className="text-gray-400">
									You: &quot;Update route.ts&quot;
								</div>
								<div className="mt-3 text-emerald-400">
									Memoria: Warning - 85% coupled with billing.tsx
								</div>
								<div className="mt-1 text-gray-300 pl-4">
									<div>These files share type definitions.</div>
									<div>If you modify types in one, update the other.</div>
								</div>
								<div className="mt-3 text-gray-400">
									AI: &quot;I&apos;ll update both files&quot;
								</div>
								<div className="mt-1 text-emerald-400">Result: Works</div>
							</div>
						</Card>
					</m.div>
				</div>
			</Container>
		</section>
	);
}
