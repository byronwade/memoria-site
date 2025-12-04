"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, Link2, Shield, Search, GitBranch } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const features = [
  {
    slug: "volatility-engine",
    title: "Volatility Engine",
    description:
      "Scans commits for panic keywords (fix, bug, revert, urgent, hotfix) with time-decay. Recent bugs matter more. Also tracks Bus Factor.",
    icon: Flame,
  },
  {
    slug: "entanglement-engine",
    title: "Entanglement Engine",
    description:
      "Finds files that change together >15% of the time. Reveals implicit dependencies that imports can't show.",
    icon: Link2,
  },
  {
    slug: "sentinel-engine",
    title: "Sentinel Engine",
    description:
      "Detects when coupled files are >7 days out of sync. Flags stale dependencies before they cause bugs.",
    icon: Shield,
  },
  {
    slug: "static-import-engine",
    title: "Static Import Engine",
    description:
      "Uses git grep to find files that import the target - even for brand new files with no git history.",
    icon: GitBranch,
  },
  {
    slug: "history-search",
    title: "History Search",
    description:
      "Search git history to understand WHY code was written. Solves the Chesterton's Fence problem before you delete that weird-looking code.",
    icon: Search,
  },
];

export function Features() {
  return (
    <Section id="features">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.p
          variants={fadeInUp}
          className="text-sm text-muted-foreground uppercase tracking-wider font-medium"
        >
          Under the Hood
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="mt-4 text-3xl md:text-4xl font-medium tracking-tight"
        >
          Five powerful engines
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Memoria analyzes your git history to uncover hidden dependencies and prevent bugs
        </motion.p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((feature) => (
          <Link
            key={feature.slug}
            href={`/docs/features/${feature.slug}`}
            className="block group"
          >
            <Card className="h-full transition-colors hover:border-accent/50">
              <CardContent className="pt-6">
                <feature.icon className="w-10 h-10 text-accent" />
                <h3 className="mt-4 text-lg font-semibold group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-2 text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </motion.div>
    </Section>
  );
}
