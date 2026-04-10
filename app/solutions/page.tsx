import { SolutionsClient } from "./solutions-client";
import { SiteFooter, SiteHeader } from "@/components/landing";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50/80 text-slate-900 dark:from-[#050912] dark:via-[#070e18] dark:to-[#060b14] dark:text-white">
      <SiteHeader />
      <main className="flex min-h-[calc(100vh-72px)] items-center bg-transparent py-10 sm:py-14">
        <SolutionsClient />
      </main>
      <SiteFooter />
    </div>
  );
}
