"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { Play } from "lucide-react";

// Placeholder videos - replace with actual YouTube video IDs
const videos = [
  {
    id: "dQw4w9WgXcQ", // Placeholder
    title: "Getting Started with Memoria",
    description: "Learn how to set up Memoria in under 5 minutes",
  },
  {
    id: "jNQXAC9IVRw", // Placeholder
    title: "Understanding File Entanglement",
    description: "How Memoria detects implicit file dependencies",
  },
];

function VideoCard({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div variants={fadeInUp} className="group">
      <Card className="overflow-hidden p-0">
        <div className="relative aspect-video">
          {/* Placeholder thumbnail */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 text-white fill-white" />
            </div>
          </div>
          {/* Uncomment when you have real video IDs */}
          {/* <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          /> */}
        </div>
      </Card>
      <div className="mt-4">
        <h3 className="font-medium text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </motion.div>
  );
}

export function Videos() {
  return (
    <Section background="muted">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <motion.p
          variants={fadeInUp}
          className="text-sm text-muted-foreground uppercase tracking-wider font-medium"
        >
          Learn
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="mt-4 text-3xl md:text-4xl font-medium tracking-tight"
        >
          Video tutorials
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto"
        >
          Watch how Memoria transforms your AI coding experience
        </motion.p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {videos.map((video, index) => (
          <VideoCard key={`${video.id}-${index}`} {...video} />
        ))}
      </motion.div>
    </Section>
  );
}
