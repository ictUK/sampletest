"use client";

import { useState } from "react";
import { DIVE_DEEPER_TABS } from "@/lib/site-content";

function ArrowIcon({ direction }: { direction: "up" | "down" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {direction === "up" ? (
        <path d="M12 19V5M5 12l7-7 7 7" />
      ) : (
        <path d="M12 5v14M19 12l-7 7-7-7" />
      )}
    </svg>
  );
}

function TabLeadingIcon({ active }: { active: boolean }) {
  if (!active) return <span className="inline-block w-6 shrink-0" aria-hidden />;
  return (
    <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white shadow-sm dark:bg-cyan-500">
      <ArrowIcon direction="up" />
    </span>
  );
}

function isItalicBlock(x: unknown): x is { italic: string } {
  return typeof x === "object" && x !== null && "italic" in x && typeof (x as { italic: string }).italic === "string";
}

function isFooterBlock(x: unknown): x is { footer: string } {
  return typeof x === "object" && x !== null && "footer" in x && typeof (x as { footer: string }).footer === "string";
}

function isNumberedItem(x: unknown): x is { n: number; title: string; body: string } {
  return (
    typeof x === "object" &&
    x !== null &&
    "n" in x &&
    "title" in x &&
    "body" in x &&
    typeof (x as { n: number }).n === "number"
  );
}

export function DiveDeeperPanel() {
  const [tabIndex, setTabIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const tab = DIVE_DEEPER_TABS[tabIndex];

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xl dark:border-white/10 dark:bg-[#161b26] dark:shadow-black/40">
      {/* Tab bar */}
      <div
        className="flex flex-col divide-y divide-slate-200 sm:flex-row sm:divide-x sm:divide-y-0 dark:divide-white/10"
        role="tablist"
        aria-label="Dive deeper topics"
      >
        {DIVE_DEEPER_TABS.map((t, i) => {
          const active = i === tabIndex;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`dive-tab-${t.id}`}
              aria-selected={active}
              tabIndex={active ? 0 : -1}
              onClick={() => setTabIndex(i)}
              className={[
                "flex flex-1 items-center justify-center gap-2 px-3 py-4 text-center text-[0.65rem] font-bold uppercase leading-tight tracking-wide transition sm:min-h-[4.5rem] sm:px-4 sm:text-xs lg:text-[0.8125rem]",
                active
                  ? "text-sky-600 dark:text-cyan-300"
                  : "text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-white/5",
              ].join(" ")}
            >
              <TabLeadingIcon active={active} />
              <span className="text-balance">{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Expandable body */}
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
        style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
      >
        <div className="min-h-0 overflow-hidden" inert={!expanded}>
          <div className="border-t border-slate-200 px-5 py-8 dark:border-white/10 sm:px-8 lg:px-10">
            {tab.kind === "numbered" && (
              <div className="grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-10">
                {tab.columns.map((col, ci) => (
                  <div
                    key={ci}
                    className="space-y-8 md:border-l md:border-dashed md:border-slate-200 md:pl-6 md:first:border-l-0 md:first:pl-0 dark:md:border-white/15"
                  >
                    {col.map((block, bi) => {
                      if (isNumberedItem(block)) {
                        return (
                          <div key={bi}>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">
                              <span className="mr-1.5 font-black text-sky-600 dark:text-cyan-400">{block.n}.</span>
                              {block.title}
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                              {block.body}
                            </p>
                          </div>
                        );
                      }
                      if (isItalicBlock(block)) {
                        return (
                          <p
                            key={bi}
                            className="text-sm italic leading-relaxed text-slate-700 dark:text-slate-300"
                          >
                            {block.italic}
                          </p>
                        );
                      }
                      if (isFooterBlock(block)) {
                        return (
                          <p key={bi} className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                            {block.footer}
                          </p>
                        );
                      }
                      return null;
                    })}
                  </div>
                ))}
              </div>
            )}

            {tab.kind === "multi-param" && (
              <div>
                <p className="text-sm italic leading-relaxed text-slate-700 dark:text-slate-300">{tab.intro}</p>
                <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
                  {tab.items.map((item) => (
                    <div
                      key={item.title}
                      className="lg:border-l lg:border-slate-200 lg:pl-5 lg:first:border-l-0 lg:first:pl-0 dark:lg:border-white/15"
                    >
                      <p className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab.kind === "coverage" && (
              <div className="grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-10">
                {tab.columns.map((col, ci) => (
                  <div
                    key={ci}
                    className="space-y-8 md:border-l md:border-dashed md:border-slate-200 md:pl-6 md:first:border-l-0 md:first:pl-0 dark:md:border-white/15"
                  >
                    {col.map((block) => (
                      <div key={block.title}>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">{block.title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{block.body}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Expand / collapse control */}
      <div className="flex justify-end border-t border-slate-200 bg-slate-50 px-5 py-4 dark:border-white/10 dark:bg-[#0f141d] sm:px-8">
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-white/15 dark:bg-[#1e2533] dark:text-slate-200 dark:hover:bg-white/10"
          aria-expanded={expanded}
        >
          <span className="inline-flex size-7 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-cyan-500/20 dark:text-cyan-300">
            <ArrowIcon direction={expanded ? "up" : "down"} />
          </span>
          {expanded ? "Collapse" : "Expand"}
        </button>
      </div>
    </div>
  );
}
