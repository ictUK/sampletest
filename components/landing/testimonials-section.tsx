import { PARTNER_LOGOS } from "@/lib/site-content";
import { SectionShell } from "@/components/landing/section-shell";
import { TestimonialsMarqueeRows } from "@/components/landing/testimonials-marquee-rows";

export function TestimonialsSection() {
  const logoTrack = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section className="border-t border-slate-200 bg-white pt-16 pb-10 dark:border-white/5 dark:bg-[#020617] sm:pt-20 sm:pb-12">
      <SectionShell>
        <h2 className="max-w-4xl text-2xl font-bold uppercase leading-snug tracking-wide text-slate-900 dark:text-white sm:text-3xl">
          HEAR From the XPEER.AI USERS
        </h2>      

        <div className="testimonial-marquee-fade mt-8 overflow-hidden border-b border-slate-200 pb-7 dark:border-white/10">
          <div className="partner-logo-marquee flex w-max items-center gap-10 sm:gap-14">
            {logoTrack.map((logo, idx) => (
              <div
                key={`${logo.src}-${idx}`}
                className="flex h-12 w-28 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white/80 px-3 py-2 dark:border-white/10 dark:bg-white/[0.03] sm:h-14 sm:w-32"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain opacity-90 grayscale transition hover:opacity-100 hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-8 transform-gpu overflow-hidden px-4 py-5 bg-transparent shadow-[0_1px_3px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.45)]">
          <TestimonialsMarqueeRows />
        </div>
      </SectionShell>
    </section>
  );
}
