import { HOW_IT_WORKS } from "@/lib/site-content";

export function HowItWorksSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-20 dark:border-white/5 dark:bg-[#020617] sm:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-400">
            {HOW_IT_WORKS.eyebrow}
          </p>
          <div className="mt-6 space-y-5 text-slate-600 dark:text-slate-300">
            {HOW_IT_WORKS.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed sm:text-lg">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/3] w-full max-w-lg">
          <img 
            src="/weAre.png" 
            alt="How it works diagram" 
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
