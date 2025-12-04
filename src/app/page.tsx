import { Hero } from "@/components/sections/hero";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { Comparison } from "@/components/sections/comparison";
import { ExampleOutput } from "@/components/sections/example-output";
import { Features } from "@/components/sections/features";
import { FrameworkTabs } from "@/components/sections/framework-tabs";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Integrations } from "@/components/sections/integrations";
import { Videos } from "@/components/sections/videos";
import { CtaSection } from "@/components/sections/cta-section";

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
      <Videos />
      <CtaSection />
    </div>
  );
}
