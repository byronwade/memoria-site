"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/motion";

export function ProblemSolution() {
  return (
    <Section background="muted">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold"
        >
          The Problem
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          AI assistants don&apos;t understand implicit file dependencies
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Without Memoria */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInLeft}
        >
          <Card className="h-full bg-red-500/5 border-red-500/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar className="bg-red-500/10">
                  <AvatarFallback className="bg-transparent">
                    <X className="w-5 h-5 text-red-500" />
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold text-red-500">
                  Without Memoria
                </h3>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm md:text-base">
                <div className="flex gap-3">
                  <span className="font-medium text-muted-foreground shrink-0">
                    You:
                  </span>
                  <span>&quot;Update stripe/route.ts for the new schema&quot;</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-medium text-muted-foreground shrink-0">
                    AI:
                  </span>
                  <span>&quot;Done!&quot; ✅</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-medium text-muted-foreground shrink-0">
                    Result:
                  </span>
                  <span className="text-red-500 font-semibold">💥 CRASH</span>
                </div>
                <p className="text-muted-foreground italic pt-2 border-t border-red-500/10">
                  dashboard/billing/page.tsx expected the old schema. The AI
                  didn&apos;t know they were connected.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* With Memoria */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInRight}
        >
          <Card className="h-full bg-green-500/5 border-green-500/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar className="bg-green-500/10">
                  <AvatarFallback className="bg-transparent">
                    <Check className="w-5 h-5 text-green-500" />
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold text-green-500">
                  With Memoria
                </h3>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm md:text-base">
                <div className="flex gap-3">
                  <span className="font-medium text-muted-foreground shrink-0">
                    You:
                  </span>
                  <span>&quot;Update stripe/route.ts for the new schema&quot;</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-medium text-muted-foreground shrink-0">
                    Memoria:
                  </span>
                  <span className="text-amber-500">
                    &quot;⚠️ 85% coupled with dashboard/billing/page.tsx&quot;
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="font-medium text-muted-foreground shrink-0">
                    AI:
                  </span>
                  <span>&quot;I&apos;ll update both files to match.&quot;</span>
                </div>
                <div className="flex gap-3 pt-2 border-t border-green-500/10">
                  <span className="font-medium text-muted-foreground shrink-0">
                    Result:
                  </span>
                  <span className="text-green-500 font-semibold">
                    ✅ IT JUST WORKS
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
