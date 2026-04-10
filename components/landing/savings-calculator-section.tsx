"use client";

import { FormEvent, useState } from "react";

const CURRENCIES = ["INR", "USD", "EUR", "GBP"] as const;

function formatMoney(n: number, currency: string) {
  if (!Number.isFinite(n)) return "—";
  try {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(n);
  } catch {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n);
  }
}

export function SavingsCalculatorSection() {
  const [currency, setCurrency] = useState<string>("INR");
  const [annualSpend, setAnnualSpend] = useState("");
  const [testingWeeks, setTestingWeeks] = useState("");
  const [testingHours, setTestingHours] = useState("");
  const [bugsPerProject, setBugsPerProject] = useState("");
  const [releasesPerYear, setReleasesPerYear] = useState(1);
  const [estimate, setEstimate] = useState<number | null>(null);
  const [result, setResult] = useState<{
    annualSaved: number;
    newTestingHours: number;
    hoursReclaimedAnnually: number;
    projectsOnTime: number;
    onTimePct: number;
  } | null>(null);

  const inputRowClass =
    "h-11 w-full rounded-lg border border-white/30 bg-white/10 px-3 text-white outline-none placeholder:text-white/60 focus:border-white/60";

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const annual = parseFloat(annualSpend.replace(/,/g, "")) || 0;
    const weeks = parseFloat(testingWeeks.replace(/,/g, "")) || 0;
    const hours = parseFloat(testingHours.replace(/,/g, "")) || 0;
    const bugs = parseFloat(bugsPerProject.replace(/,/g, "")) || 0;
    const rel = releasesPerYear;

    const hoursPerRelease = weeks * 40 + hours;
    const maintenanceReduction = annual * 0.35;
    const velocityLift = rel * 5000 * 0.15;
    const timeSavings = hoursPerRelease * rel * 45;
    const bugSavings = bugs * 650 * Math.min(rel, 12);

    const total = maintenanceReduction + velocityLift + timeSavings + bugSavings;
    const computedEstimate = Math.max(0, Math.round(total));
    setEstimate(computedEstimate);

    const reducedHours = Math.max(1, Math.round(hoursPerRelease * 0.58));
    const hoursBeforeAnnual = hoursPerRelease * rel;
    const hoursAfterAnnual = reducedHours * rel;
    const hoursReclaimedAnnually = Math.max(0, Math.round(hoursBeforeAnnual - hoursAfterAnnual));
    const projectsOnTime = Math.max(1, Math.round((bugs + rel) * 1.8));
    const onTimePct = Math.min(99, Math.max(35, Math.round(55 + rel * 1.5)));
    setResult({
      annualSaved: computedEstimate,
      newTestingHours: reducedHours,
      hoursReclaimedAnnually,
      projectsOnTime,
      onTimePct,
    });
  }

  return (
    <section id="calculate" className="scroll-mt-24 bg-[#f7f9fc] py-14 dark:bg-[#05070d] sm:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-900/10 dark:border-white/5 dark:bg-[#080a12] dark:shadow-black/50">
          <div className="grid lg:grid-cols-[1fr_1.25fr]">
            <div className="relative flex min-h-[460px] flex-col justify-end bg-[#eef2f7] px-8 py-12 dark:bg-black sm:px-12">
              <div className="absolute left-8 top-10 h-20 w-20 rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.35)_2px,_transparent_3px)] [background-size:10px_10px] dark:opacity-90" />
              <div className="absolute right-8 top-10 text-xs font-medium tracking-wide text-[#2f5ea3] dark:text-[#2d80d5]">
                XPEER.AI
              </div>
              <h2 className="max-w-sm text-4xl font-semibold leading-tight tracking-tight text-[#2f5ea3] dark:text-[#3d79c2] sm:text-5xl">
                Let&apos;s calculate your savings with XPEER.AI
              </h2>
              {estimate !== null && (
                <p className="mt-6 max-w-sm rounded-xl border border-blue-200/80 bg-blue-50 px-4 py-3 text-sm text-blue-900 dark:border-cyan-400/30 dark:bg-cyan-500/10 dark:text-cyan-100">
                  Estimated annual impact:{" "}
                  <span className="font-semibold">{formatMoney(estimate, currency)}</span>
                </p>
              )}
            </div>

            <div
              className={[
                "relative min-h-[460px] px-8 py-10 sm:px-12",
                result ? "bg-[#f2f4f8] dark:bg-[#171d35]" : "bg-[#5d88bc] dark:bg-[#3336a2]",
              ].join(" ")}
            >
              <div
                aria-hidden
                className={[
                  "absolute -left-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 rotate-45 lg:block",
                  result ? "bg-[#f2f4f8] dark:bg-[#171d35]" : "bg-[#5d88bc] dark:bg-[#3336a2]",
                ].join(" ")}
              />
              <div
                className={[
                  "absolute bottom-6 right-8 h-20 w-20 rounded-full [background-size:10px_10px] opacity-70",
                  result
                    ? "bg-[radial-gradient(circle,_rgba(93,136,188,0.6)_2px,_transparent_3px)] dark:bg-[radial-gradient(circle,_rgba(147,197,253,0.55)_2px,_transparent_3px)]"
                    : "bg-[radial-gradient(circle,_rgba(255,255,255,0.55)_2px,_transparent_3px)]",
                ].join(" ")}
              />

              {result ? (
                <div className="calculator-result-enter mx-auto max-w-xl text-[#4a6fa0] dark:text-[#b7c7ef]">
                  <div className="flex items-start justify-between gap-6 border-b border-[#5d88bc]/15 pb-6 dark:border-white/10">
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium tracking-normal text-[#5d88bc]/90 dark:text-[#9fb4e8]">
                        Amount spent on testing with XPeer.AI (QAs/Developers etc)
                      </p>
                      <div className="mt-4 inline-flex min-h-[3.25rem] items-center rounded-xl bg-[#5d88bc] px-5 py-3 shadow-md shadow-[#5d88bc]/25 dark:bg-[#4a63b7] dark:shadow-black/30">
                        <span className="text-2xl font-semibold tabular-nums tracking-tight text-white sm:text-3xl">
                          {formatMoney(result.annualSaved, currency)}
                        </span>
                      </div>
                      <p className="mt-4 text-xl font-semibold tracking-tight text-[#5d88bc] dark:text-[#bcd0ff] sm:text-2xl">
                        {Math.round(result.annualSaved).toLocaleString()}{" "}
                        <span className="font-medium text-[#5d88bc]/85 dark:text-[#9fb4e8]">saved</span>
                      </p>
                    </div>
                    <p className="shrink-0 text-right text-lg font-semibold tracking-tight text-[#5d88bc] dark:text-[#bcd0ff] sm:text-xl">
                      XPEER.AI
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-1 items-start gap-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-12">
                    <div className="space-y-10">
                      <div>
                        <p className="text-[11px] font-semibold tracking-[0.18em] text-[#5d88bc]/90 dark:text-[#9fb4e8]">
                          New time spent on testing
                        </p>
                      <p className="mt-2 text-4xl font-semibold tabular-nums tracking-tight text-[#5d88bc] dark:text-[#d2dcff] sm:text-5xl">
                          {result.newTestingHours}
                          <span className="ml-2 text-2xl font-medium text-[#5d88bc]/80 dark:text-[#afc0f2] sm:text-3xl">hours</span>
                          <span className="ml-2 text-lg font-normal text-[#5d88bc]/70 dark:text-[#8ea4dd] sm:text-xl">/ release</span>
                        </p>
                        {result.hoursReclaimedAnnually > 0 && (
                          <p className="mt-2 text-sm font-medium text-[#5d88bc]/75 dark:text-[#9fb4e8]">
                            ~{result.hoursReclaimedAnnually.toLocaleString()} hours reclaimed across releases annually
                          </p>
                        )}
                      </div>
                      <div>
                        <p className="text-xs font-medium tracking-normal text-[#5d88bc]/90 dark:text-[#9fb4e8]">
                          Estimated projects on time
                        </p>
                        <p className="mt-2 text-4xl font-semibold tabular-nums tracking-tight text-[#5d88bc] dark:text-[#d2dcff] sm:text-5xl">
                          {result.projectsOnTime.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center sm:justify-end sm:pt-1">
                      <div className="grid size-40 place-items-center rounded-full bg-[#5d88bc] text-5xl font-semibold tabular-nums tracking-tight text-white shadow-lg shadow-[#5d88bc]/30 dark:bg-[#4a63b7] dark:shadow-black/35 sm:size-44 sm:text-6xl">
                        {result.onTimePct}%
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                    <button
                      type="button"
                      className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#5d88bc] px-6 text-sm font-medium text-white shadow-md shadow-[#5d88bc]/25 transition hover:brightness-105 dark:bg-[#4a63b7] dark:shadow-black/30"
                    >
                      Share link
                    </button>
                    <button
                      type="button"
                      className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#5d88bc] px-6 text-sm font-medium text-white shadow-md shadow-[#5d88bc]/25 transition hover:brightness-105 dark:bg-[#4a63b7] dark:shadow-black/30"
                    >
                      Download
                    </button>
                    <button
                      type="button"
                      onClick={() => setResult(null)}
                      className="inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-[#5d88bc] bg-white px-6 text-sm font-medium text-[#5d88bc] transition hover:bg-[#5d88bc]/5 dark:border-[#9fb4e8] dark:bg-transparent dark:text-[#bcd0ff] dark:hover:bg-white/5"
                    >
                      Edit inputs
                    </button>
                  </div>
                </div>
              ) : (
                <form className="mx-auto max-w-xl space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-white/90">
                    Amount spent on testing each year. (QAs/Developers etc)
                  </label>
                  <div className="mt-2 flex gap-0 overflow-hidden rounded-lg border border-white/30 bg-white/10">
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="shrink-0 border-0 border-r border-white/20 bg-white/15 px-3 py-2.5 text-sm font-medium text-white outline-none"
                      aria-label="Currency"
                    >
                      {CURRENCIES.map((c) => (
                        <option key={c} value={c} className="bg-slate-900 text-white">
                          {c}
                        </option>
                      ))}
                    </select>
                    <input
                      required
                      inputMode="decimal"
                      value={annualSpend}
                      onChange={(e) => setAnnualSpend(e.target.value)}
                      className="min-w-0 flex-1 border-0 bg-transparent px-3 py-2.5 text-white outline-none placeholder:text-white/60"
                      placeholder="0"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-white/90">
                      On Average, how much time is spent testing each release/update?
                    </label>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      <div>
                        <span className="sr-only">Weeks</span>
                        <input
                          required
                          inputMode="decimal"
                          value={testingWeeks}
                          onChange={(e) => setTestingWeeks(e.target.value)}
                          className={inputRowClass}
                          placeholder="Weeks"
                        />
                      </div>
                      <div>
                        <span className="sr-only">Hours</span>
                        <input
                          required
                          inputMode="decimal"
                          value={testingHours}
                          onChange={(e) => setTestingHours(e.target.value)}
                          className={inputRowClass}
                          placeholder="Hours"
                        />
                      </div>
                    </div>
                  </div>
                  <label className="block text-sm font-medium text-white/90">
                    Average number of bugs detected in projects.
                    <input
                      required
                      inputMode="numeric"
                      value={bugsPerProject}
                      onChange={(e) => setBugsPerProject(e.target.value)}
                      className={`mt-2 ${inputRowClass}`}
                      placeholder=""
                    />
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/90" htmlFor="releases-slider">
                    How many releases/updates do you have per year?
                  </label>
                  <div className="mt-3 flex items-center gap-3">
                    <output
                      htmlFor="releases-slider"
                      className="min-w-[2.25rem] rounded-full bg-[#2a2f8b] px-2.5 py-1 text-center text-xs font-semibold text-white tabular-nums"
                    >
                      {releasesPerYear}
                    </output>
                    <input
                      id="releases-slider"
                      type="range"
                      min={1}
                      max={52}
                      value={releasesPerYear}
                      onChange={(e) => setReleasesPerYear(Number(e.target.value))}
                      className="h-2 flex-1 cursor-pointer appearance-none rounded-full bg-white/20 accent-white [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-3 inline-flex rounded-xl bg-white px-6 py-2.5 text-base font-semibold text-[#2a4f84] transition hover:bg-slate-100 dark:bg-black dark:text-white dark:hover:bg-slate-900"
                >
                  Calculate
                </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
