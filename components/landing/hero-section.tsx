import { HERO_STATS } from "@/lib/site-content";
import { HeroRotatingHeadline } from "@/components/landing/hero-rotating-headline";

export function HeroSection() {
  return (
    <section
      id="info"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-sky-100 via-white to-slate-50 pb-20 pt-14 dark:from-[#0d1e7c] dark:via-[#050818] dark:to-[#000000] sm:pt-16"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70 dark:hidden"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 70% 10%, rgba(14, 165, 233, 0.2), transparent 55%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 hidden opacity-40 dark:block"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56, 189, 248, 0.25), transparent 60%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <HeroRotatingHeadline />

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="p-2 text-left sm:p-0"
                >
                  <p className="text-3xl font-semibold tracking-tight text-blue-700 dark:text-cyan-300 sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs font-medium leading-snug text-slate-600 dark:text-slate-300 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="scroll-mt-28 lg:justify-self-end">
            <div className="max-w-md">
              <a
                href="/book-demo"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:bg-white/15 hover:border-white/30 dark:border-white/20 dark:bg-white/10"
              >
                BOOK A DEMO
              </a>

              <p className="mt-8 text-lg leading-snug text-slate-900 dark:text-white">
                XPeer.ai transforms quality assurance from reactive testing into continuous, AI-native validation.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-slate-700 dark:text-white/80">
                It understands your business logic and verifies real system outcomes before every release,
                delivering enterprise-grade reliability at scale. No scripts. No maintenance overhead. Ship with
                certainty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
