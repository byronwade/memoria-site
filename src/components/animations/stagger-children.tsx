"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";

interface StaggerChildrenProps {
	children: React.ReactNode;
	className?: string;
}

export function StaggerChildren({
	children,
	className = "",
}: StaggerChildrenProps) {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-50px" }}
			variants={staggerContainer}
			className={className}
		>
			{children}
		</motion.div>
	);
}
