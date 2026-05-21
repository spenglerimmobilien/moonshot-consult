import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { CtaSection } from "@/components/sections/CtaSection";

export function LandingPage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <WorkSection />
      <ProcessSection />
      <PhilosophySection />
      <CtaSection />
    </>
  );
}
