import { BookDemoSection } from "@/components/landing/book-demo-section";
import { SiteFooter, SiteHeader } from "@/components/landing";

export default function BookDemoPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#020617] dark:text-white">
      <SiteHeader />
      <main className="flex min-h-[calc(100vh-72px)] items-center">
        <BookDemoSection />
      </main>
      <SiteFooter />
    </div>
  );
}
