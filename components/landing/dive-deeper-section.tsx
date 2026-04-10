import { DiveDeeperPanel } from "@/components/landing/dive-deeper-panel";

export function DiveDeeperSection() {
  return (
    <section
      id="dive-deeper"
      className="bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700 py-16 dark:from-teal-900 dark:via-cyan-950 dark:to-blue-950 sm:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <h2 className="max-w-4xl text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl lg:text-4xl">
          Dive Deeper With XPEER.AI
        </h2>
        <p className="mt-2 text-sm text-white/85 sm:text-base">
          Explore how the platform works, how validation runs, and what coverage includes.
        </p>

        <div className="mt-10">
          <DiveDeeperPanel />
        </div>
      </div>
    </section>
  );
}
