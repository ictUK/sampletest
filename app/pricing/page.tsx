import { PricingPageSection } from "@/components/landing/pricing-section";
import { SiteFooter, SiteHeader } from "@/components/landing";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#070b12] text-white">
      <SiteHeader />
      <main className="flex min-h-[calc(100vh-72px)] items-center">
        <PricingPageSection />
      </main>
      <SiteFooter />
    </div>
  );
}
