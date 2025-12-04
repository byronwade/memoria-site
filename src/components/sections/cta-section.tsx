"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/motion";

export function CtaSection() {
	return (
		<Section>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="text-center"
			>
				<motion.h2
					variants={fadeInUp}
					className="text-3xl md:text-4xl lg:text-5xl font-bold"
				>
					Ready to give your AI <span className="text-accent">memory</span>?
				</motion.h2>
				<motion.p
					variants={fadeInUp}
					className="mt-6 text-xl text-muted-foreground max-w-xl mx-auto"
				>
					Install in seconds. No configuration required.
				</motion.p>
				<motion.div
					variants={fadeInUp}
					className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
				>
					<Button size="lg" asChild>
						<Link href="/docs/installation">
							Get Started
							<ArrowRight className="w-4 h-4 ml-2" />
						</Link>
					</Button>
					<Button variant="outline" size="lg" asChild>
						<a
							href="https://github.com/byronwade/memoria"
							target="_blank"
							rel="noopener noreferrer"
						>
							Star on GitHub
						</a>
					</Button>
				</motion.div>
			</motion.div>
		</Section>
	);
}
