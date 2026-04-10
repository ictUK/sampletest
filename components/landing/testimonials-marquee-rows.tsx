import type { TestimonialMarqueeCard } from "@/lib/site-content";
import { TESTIMONIAL_MARQUEE_BOTTOM, TESTIMONIAL_MARQUEE_TOP } from "@/lib/site-content";

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-8 w-8"
    >
      <path d="M10 11H6c0 5 4 8 8 8V11c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h2" />
      <path d="M20 11h-4c0 5 4 8 8 8V11c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h2" />
    </svg>
  );
}

function MarqueeCard({ item }: { item: TestimonialMarqueeCard }) {
  return (
    <article
      className="flex min-h-[300px] w-[320px] shrink-0 flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200/70 dark:bg-[#0f172a] dark:ring-1 dark:ring-white/10 sm:min-h-[320px] sm:w-[360px] md:min-h-[340px] md:w-[420px] md:p-10"
      aria-label={`Testimonial from ${item.name}`}
    >
      <div className="text-blue-600 dark:text-cyan-300">
        <QuoteIcon />
      </div>

      <blockquote className="mt-2 text-sm font-normal leading-relaxed text-slate-700 dark:text-slate-200">
        {item.quote}
      </blockquote>

      <footer className="mt-8">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.name}</p>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.role}</p>
        <p className="mt-0.5 text-xs text-slate-400 dark:text-slate-500">{item.org}</p>
      </footer>
    </article>
  );
}

function Row({ items, direction }: TestimonialMarqueeRowProps) {
  const doubled: TestimonialMarqueeCard[] = [...items, ...items];
  return (
    <div className="testimonial-marquee-fade overflow-hidden h-[340px] sm:h-[360px] md:h-[380px]">
      <div
        className={`flex w-max gap-4 ${direction === "left" ? "testimonial-marquee-left" : "testimonial-marquee-right"}`}
      >
        {doubled.map((item, i) => (
          <MarqueeCard key={`${direction}-${i}-${item.name}`} item={item} />
        ))}
      </div>
    </div>
  );
}

type TestimonialMarqueeRowProps = {
  items: TestimonialMarqueeCard[];
  direction: "left" | "right";
};

export function TestimonialsMarqueeRows() {
  return (
    <div>
      <Row items={TESTIMONIAL_MARQUEE_TOP} direction="left" />
      <Row items={TESTIMONIAL_MARQUEE_BOTTOM} direction="right" />
    </div>
  );
}
