import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { LogoMarquee } from "@/components/sections/logo-marquee";

const Comparison = dynamic(
	() =>
		import("@/components/sections/comparison").then((mod) => mod.Comparison),
	{ ssr: true }
);
const ExampleOutput = dynamic(
	() =>
		import("@/components/sections/example-output").then(
			(mod) => mod.ExampleOutput
		),
	{ ssr: true }
);
const Features = dynamic(
	() => import("@/components/sections/features").then((mod) => mod.Features),
	{ ssr: true }
);
const FrameworkTabs = dynamic(
	() =>
		import("@/components/sections/framework-tabs").then(
			(mod) => mod.FrameworkTabs
		),
	{ ssr: true }
);
const HowItWorks = dynamic(
	() =>
		import("@/components/sections/how-it-works").then((mod) => mod.HowItWorks),
	{ ssr: true }
);
const Integrations = dynamic(
	() =>
		import("@/components/sections/integrations").then((mod) => mod.Integrations),
	{ ssr: true }
);
const CtaSection = dynamic(
	() =>
		import("@/components/sections/cta-section").then((mod) => mod.CtaSection),
	{ ssr: true }
);

export default function Home() {
	return (
		<div className="min-h-screen bg-background">
			<Hero />
			<LogoMarquee />
			<Comparison />
			<ExampleOutput />
			<Features />
			<FrameworkTabs />
			<HowItWorks />
			<Integrations />
			<CtaSection />
		</div>
	);
}
