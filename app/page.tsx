import {
  DiveDeeperSection,
  EvolutionTimelineSection,
  HeroSection,
  HowItWorksSection,
  ResourceGridSection,
  SavingsCalculatorSection,
  SiteFooter,
  SiteHeader,
  TestimonialsSection,
} from "@/components/landing";
import { DiveDeeperPanel } from "@/components/landing/dive-deeper-panel";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <HeroSection />
      <HowItWorksSection />
      <DiveDeeperSection />

      <TestimonialsSection />
      <SavingsCalculatorSection />
      <EvolutionTimelineSection />
      <ResourceGridSection />
      <SiteFooter />
    </div>
  );
}
