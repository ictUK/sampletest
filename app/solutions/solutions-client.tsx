"use client";

import { useState } from "react";

const INDUSTRIES = [
  "Financial Services",
  "Insurance",
  "Healthcare",
  "Telecomm",
  "Retail",
  "Travel and Entertainment",
  "Logistics, Supply chain",
  "Public Sector",
] as const;

const PEOPLE = ["Developers", "QA Teams", "Business Leaders"] as const;
type Persona = (typeof PEOPLE)[number];

const PERSONA_CONTENT: Record<
  Persona,
  { headline: string; paragraphs: string[]; cards: { title: string; body: string }[] }
> = {
  Developers: {
    headline: "For Developers: Focus on Building, Not Bug-Fixing",
    paragraphs: [
      "Quality does not belong only at the end of a sprint. XPeer.ai keeps validation aligned with your code changes so you spend time shipping features—not triaging flaky suites or chasing regressions.",
      "Get fast, trustworthy feedback on what broke and why, with less manual test maintenance and fewer last‑minute release surprises.",
    ],
    cards: [
      {
        title: "Continuous validation in your workflow",
        body: "Checks run with meaningful context so you see impact early, before merges widen the blast radius.",
      },
      {
        title: "Change impact you can trust",
        body: "Understand which flows and integrations are affected by a diff—not guesswork from green builds.",
      },
      {
        title: "Less script churn",
        body: "Reduce brittle UI suites and rework. Focus on architecture, performance, and real product problems.",
      },
      {
        title: "CI that developers respect",
        body: "Clear signals and fewer false alarms mean your pipeline stays a helper, not a nag.",
      },
    ],
  },
  "QA Teams": {
    headline: "For QA Teams: From Tester to Quality Leader",
    paragraphs: [
      "Manual testing does not scale. You cannot test every scenario before each release, and spending time on flaky checks still misses critical risk.",
      "XPeer.ai transforms QA without requiring programming. As your automation adapts to UI and logic changes, QA evolves from regression execution to strategic quality leadership with complete end-to-end coverage.",
    ],
    cards: [
      {
        title: "Drag, drop, done",
        body: "Build and run coverage quickly without heavy scripting. Teams can automate in hours and keep focus on product quality.",
      },
      {
        title: "Complete testing coverage",
        body: "Validate regressions, APIs, and end-to-end business workflows in one unified flow aligned to real user journeys.",
      },
      {
        title: "Automation that adapts",
        body: "When UI or flow changes, validation updates intelligently, reducing brittle suites and repetitive rework.",
      },
      {
        title: "Strategic quality advocacy",
        body: "Move from execution to leadership. Own quality signals, release confidence, and cross-team alignment.",
      },
    ],
  },
  "Business Leaders": {
    headline: "For Business Leaders: The Only Testing Platform Where ROI Is Guaranteed",
    paragraphs: [
      "You know this already. Every bug is a cost to the company. Every production incident is exponentially more expensive. Every delayed release impacts revenue.",
      "What you might not realize is just how much money you're leaving on the table with traditional testing approaches.",
    ],
    cards: [
      {
        title: "Predictable releases",
        body: "Reduce escape rate and incident load so roadmaps stay credible.",
      },
      {
        title: "Clear ROI narrative",
        body: "Tie automation and quality investment to time saved, incidents avoided, and customer outcomes.",
      },
      {
        title: "Scale without linear headcount",
        body: "Grow product surface area without multiplying manual QA hours or framework debt.",
      },
      {
        title: "Partner-ready assurance",
        body: "Enterprise buyers and regulators see disciplined validation—not ad hoc testing.",
      },
    ],
  },
};

export function SolutionsClient() {
  const [industry, setIndustry] = useState<(typeof INDUSTRIES)[number]>("Retail");
  const [persona, setPersona] = useState<Persona>("Developers");
  const content = PERSONA_CONTENT[persona];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
        <h1 className="mt-3 text-3xl font-semibold uppercase leading-[1.15] tracking-tight text-[#1e4a7a] dark:text-[#8eb8f0] sm:text-4xl lg:text-[2.65rem]">
          One stop solution for everyone
        </h1>  
      </div>

      {/* Industries */}
      <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-start">
        <div className="lg:col-span-7">
          <h2 className="text-base font-semibold text-[#3d6ea8] dark:text-[#7eb0ec]">Industries we cater</h2>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {INDUSTRIES.map((name) => {
              const active = name === industry;
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => setIndustry(name)}
                  className={[
                    "min-h-[3.25rem] rounded-xl px-3 py-3 text-center text-[11px] font-semibold leading-snug transition sm:text-xs",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4c7db4] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#060b14]",
                    active
                      ? "bg-[#5b8cc9] text-white shadow-md shadow-slate-900/15 ring-1 ring-[#4a7aad]/80 dark:bg-[#4a78a8] dark:text-white dark:shadow-black/40 dark:ring-[#6ea0d4]/50"
                      : "border border-slate-200/80 bg-slate-50 text-slate-800 hover:border-slate-300 hover:bg-slate-100/90 dark:border-white/10 dark:bg-[#121a28] dark:text-slate-200 dark:hover:border-white/20 dark:hover:bg-white/[0.08]",
                  ].join(" ")}
                >
                  {name}
                </button>
              );
            })}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="p-6">
            <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{industry}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              XPeer.ai adapts workflows to regulated and fast-moving sectors alike—from core systems to customer-facing
              apps—so teams in <span className="font-medium text-slate-800 dark:text-slate-200">{industry}</span>{" "}
              validate what matters without slowing release cadence.
            </p>
          </div>
        </div>
      </div>

      <div className="my-14 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-white/10" />

      {/* People + detail */}
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-start">
        <div className="lg:col-span-4">
          <h2 className="text-base font-semibold text-[#3d6ea8] dark:text-[#7eb0ec]">Who we cater</h2>
          <div className="mt-5 flex flex-col gap-3">
            {PEOPLE.map((p) => {
              const active = p === persona;
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPersona(p)}
                  className={[
                    "w-full rounded-xl px-5 py-4 text-left text-sm font-semibold transition",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4c7db4] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#060b14]",
                    active
                      ? "bg-[#5b8cc9] text-white shadow-lg shadow-slate-900/12 ring-1 ring-[#4a7aad]/70 dark:bg-[#4a78a8] dark:shadow-black/35 dark:ring-[#6ea0d4]/45"
                      : "border border-slate-200/80 bg-slate-50 text-slate-800 hover:border-slate-300 hover:bg-white dark:border-white/10 dark:bg-[#121a28] dark:text-slate-200 dark:hover:bg-white/[0.07]",
                  ].join(" ")}
                >
                  {p}
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-8">
          <h3 className="text-xl font-semibold leading-snug text-[#1e4a7a] dark:text-[#9dc6f5] sm:text-2xl">
            {content.headline}
          </h3>
          <div className="mt-5 space-y-4">
            {content.paragraphs.map((para, i) => (
              <p key={i} className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {content.cards.map((card) => (
              <article
                key={card.title}
                className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-5 shadow-sm transition hover:border-[#9bb9d9]/80 hover:shadow-md dark:border-white/10 dark:bg-[#0e1524] dark:hover:border-[#5a7fb0]/40"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#5b8cc9] to-[#3d6ea8] opacity-90 dark:from-[#6ea0d4] dark:to-[#3d6496]" />
                <div className="pl-3">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{card.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
