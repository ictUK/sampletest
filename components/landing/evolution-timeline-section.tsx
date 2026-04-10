import { EVOLUTION_STEPS } from "@/lib/site-content";

export function EvolutionTimelineSection() {
  return (
    <section
      id="evolution"
      className="scroll-mt-24 border-t border-slate-200 bg-white py-16 dark:border-white/5 dark:bg-[#0a0f1a] sm:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(240px,40%)_minmax(320px,1fr)] lg:items-start">
          <div className="mt-6 lg:mt-10 rounded-3xl p-8 text-center !text-[#84A7F4] text-[32px] font-semibold border-none bg-none shadow-none">
            <p className="text-lg italic leading-8 sm:text-xl">
              Every wave of automation <br />improved speed and <br /> capability. Each also shifted <br /> where effort lived inside the <br /> team.
            </p>
          </div>

          <div className="text-left">
            <h2 className="text-2xl font-bold uppercase tracking-wide text-[#2f5ea3] dark:text-[#6ba3e8] sm:text-3xl">
              Evolution of test automation
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300 sm:text-base lg:max-w-[34rem]">
              Generation: Your QA was the one who manually tested every workflow manually via Agents, Agentic, Skills, Skillers, all keep changing with time, your peers don't. We evolve with your application.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300 sm:text-base lg:max-w-[34rem]">
              If your choice of test automation tool has a learning curve, you are not on the right path. Most test automation approaches require software teams to build and maintain 2 softwares, one for testing and one which is the actual business priority.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300 sm:text-base lg:max-w-[34rem]">
              No training overhead, no learning curve, as simple to use as using/navigating your application.
            </p>
          </div>
        </div>

        <div className="mt-10 overflow-x-auto pb-6 [-webkit-overflow-scrolling:touch] md:overflow-x-visible">
          <div className="relative flex min-w-[1080px] justify-center gap-3 md:min-w-0 md:gap-4 md:flex-wrap lg:justify-between lg:gap-2">
            {/* subtle baseline like the infographic */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-[250px] hidden h-px bg-slate-900/10 dark:bg-white/10 lg:block"
            />

            <img src="/Evolution.png" alt="Evolution Timeline" className="w-full md:w-auto h-auto max-w-full" />
          </div>
        </div>
        <div className="flex justify-center items-center w-1/2 mx-auto mt-12 text-center">
          Despite five generations of tools, teams still struggle with brittle tests, maintenance overhead, and validation gaps. The core problem hasn’t been tooling sophistication, it's been the paradigm itself.
          <br /><br />
          XPeer.ai doesn’t represent another generation of automation. It represents a shift from test execution to quality intelligence.
        </div>
      </div>

    </section>
  );
}
