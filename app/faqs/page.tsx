"use client";

import { useState } from "react";
import { SiteFooter, SiteHeader } from "@/components/landing";

const FAQ_ITEMS = [
  {
    q: "What exactly does XPeer.ai offer as an AI-powered automation tool?",
    a: "XPeer.ai provides AI-native quality validation across web, API, and end-to-end business workflows. It helps teams detect risk earlier, reduce repetitive test authoring, and improve release confidence with faster feedback.",
  },
  {
    q: "What's the difference between traditional automation and XPeer.ai?",
    a: "Traditional automation depends heavily on manually authored scripts that become expensive to maintain. XPeer.ai focuses on intelligent, outcome-driven validation and uses AI assistance to reduce fragile maintenance cycles.",
  },
  {
    q: "What's the difference between XPeer.ai and Selenium or Playwright?",
    a: "Selenium and Playwright are strong execution frameworks. XPeer.ai complements or replaces script-heavy approaches by adding AI-led quality intelligence, prioritized validation, and lower long-term maintenance overhead.",
  },
  {
    q: "What's the difference between software developers, QA engineers, manual testers, business analysts, and product managers?",
    a: "Developers build product capabilities, QA engineers define and govern quality strategy, manual testers provide exploratory and user-flow validation, business analysts align requirements to business outcomes, and product managers prioritize roadmap and customer value.",
  },
  {
    q: "Can XPeer.ai work with our existing CI/CD and release process?",
    a: "Yes. XPeer.ai can integrate with standard CI/CD systems and release workflows so validation runs continuously from change to deployment with clear confidence signals for every release.",
  },
] as const;

const TOPICS = [
  "Product Overview & Core Benefits",
  "Getting Started & Adoption",
  "Features & Integrations",
  "Technical Limitations & Methodology",
  "AI Accuracy & Defect Prevention",
  "Implementation & Cost",
  "Company Alignment & Developer Benefits",
  "Security, Privacy & Trust",
] as const;

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#060b14] dark:text-white">
      <SiteHeader />
      <main className="flex min-h-[calc(100vh-72px)] items-center bg-white py-12 sm:py-14 dark:bg-[#060b14]">
        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr]">
            <div>
              <h1 className="text-4xl font-semibold uppercase text-[#7da2dd] sm:text-5xl">Get to know us more</h1>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                XPeer.ai | info@icodetest.com | xpeer.ai | +91 95506 25480
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {TOPICS.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-md border border-[#88a7d2] bg-[#f2f6ff] px-3 py-1 text-[11px] font-medium text-[#3f5f8f] dark:border-[#3f5f8f] dark:bg-[#131f37] dark:text-[#9cb8df]"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              {FAQ_ITEMS.map((item, idx) => (
                <div
                  key={item.q}
                  className={`group rounded-md border bg-slate-50 dark:bg-[#101a31] ${
                    openIndex === idx
                      ? "border-[#5f7fb3] shadow-[inset_0_0_0_1px_rgba(95,127,179,0.4)] dark:border-[#6f8fc2]"
                      : "border-slate-200 dark:border-white/10"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex((prev) => (prev === idx ? null : idx))}
                    className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium text-slate-900 dark:text-white"
                  >
                    <span>{item.q}</span>
                    <span
                      className={`text-xl leading-none text-slate-500 transition dark:text-slate-300 ${
                        openIndex === idx ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {openIndex === idx ? (
                    <div className="border-t border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-600 dark:border-white/10 dark:bg-[#0b1224] dark:text-slate-300">
                      {item.a}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
