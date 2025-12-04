import { Comparison } from "@/components/sections/comparison";
import { CtaSection } from "@/components/sections/cta-section";
import { ExampleOutput } from "@/components/sections/example-output";
import { Features } from "@/components/sections/features";
import { FrameworkTabs } from "@/components/sections/framework-tabs";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Integrations } from "@/components/sections/integrations";
import { LogoMarquee } from "@/components/sections/logo-marquee";

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
