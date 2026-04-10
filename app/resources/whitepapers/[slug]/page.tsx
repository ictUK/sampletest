import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "@/components/landing";
import { OTHER_INDUSTRIES, WHITEPAPERS } from "@/lib/whitepapers-content";

export default async function WhitepaperDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const paper = WHITEPAPERS.find((item) => item.slug === slug);
  if (!paper) notFound();

  return (
    <div className="min-h-screen bg-[#e7ebf1] text-slate-900 dark:bg-[#070b14] dark:text-white">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/10 dark:border-white/10 dark:bg-[#0f162a]">
          <div className="min-h-[210px] bg-gradient-to-r from-[#0f9bbf] via-[#1f65c0] to-[#4b93d8] px-6 py-10 sm:min-h-[240px] sm:px-10">
            <p className="text-sm font-medium text-white/90">{paper.industry} Industry</p>
            <h1 className="mt-2 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">{paper.title}</h1>
          </div>

          <div className="-mt-5 rounded-t-2xl bg-white px-6 py-8 dark:bg-[#0f162a] sm:px-10 sm:py-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_220px]">
              <article className="space-y-8">
                <div className="space-y-4 text-[15px] leading-7 text-slate-700 dark:text-slate-300">
                  {paper.intro.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>

                <section>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Inside This Whitepaper</h2>
                  <ul className="mt-4 list-inside list-disc space-y-2 text-[14px] leading-6 text-slate-700 marker:text-[#4f7db5] dark:text-slate-300 dark:marker:text-[#8fb2de]">
                    {paper.highlights.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">What Makes XPeer.ai Different</h2>
                  <ul className="mt-4 list-inside list-disc space-y-2 text-[14px] leading-6 text-slate-700 marker:text-[#4f7db5] dark:text-slate-300 dark:marker:text-[#8fb2de]">
                    {paper.differentiators.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{paper.ctaTitle}</h2>
                  <p className="mt-3 max-w-3xl text-[15px] leading-7 text-slate-700 dark:text-slate-300">{paper.ctaText}</p>
                  <p className="mt-4 text-sm text-[#5279aa] underline decoration-[#8aa7cb] underline-offset-4 dark:text-[#9fc0eb]">
                    {paper.contactLabel}
                  </p>
                </section>

                <div className="border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500 dark:border-white/10 dark:text-slate-400">
                  XPeer.ai | info@icodetest.com | xpeer.ai Hyderabad, India | +91 95506 25480
                  <br />
                  Statistics cited are based on published research and sample implementations; results may vary by scope and system maturity.
                </div>

                <Link
                  href="/resources"
                  className="inline-flex text-xs text-[#6d87a8] underline decoration-[#90a8c7] underline-offset-4 transition hover:text-[#4f719c] dark:text-[#98b4da] dark:hover:text-[#b8cceb]"
                >
                  Return to resources page
                </Link>
              </article>

              <aside className="border-slate-200 lg:border-l lg:pl-6 dark:lg:border-white/10">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Other Industries</h3>
                <ul className="mt-4 space-y-1.5 text-sm text-[#2a3d57] dark:text-slate-300">
                  {OTHER_INDUSTRIES.map((item) => (
                    <li key={item} className="underline decoration-transparent underline-offset-2 hover:decoration-current">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl bg-gradient-to-b from-[#7ea3d7] to-[#4f7ec0] p-4 text-white">
                  <p className="text-xl font-semibold leading-6">Get your own Peer</p>
                  <Link
                    href="/book-demo"
                    className="mt-3 inline-flex rounded-md bg-white/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#2b4d82]"
                  >
                    Book a demo
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
