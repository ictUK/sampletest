"use client";

import { useEffect, useState } from "react";
import { HERO_SLIDES } from "@/lib/site-content";

/** Time each hero message stays visible before cross-fading to the next. */
const ROTATE_MS = 5500;

function lineClassName(large: boolean, italic: boolean, reducedMotion: boolean) {
  const size = large
    ? "text-4xl font-semibold leading-[1.12] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
    : "text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.65rem]";
  const style = italic
    ? "italic text-slate-900 dark:text-white"
    : "text-slate-900 dark:text-white";
  const motion = reducedMotion ? "" : "hero-line-rise";
  return [size, style, motion].filter(Boolean).join(" ");
}

function BrandLockup() {
  return (
    // <span className="inline-flex items-baseline gap-px font-sans text-[1em] font-black tracking-tight not-italic sm:text-[1.05em]">
    //   <span
    //     className="inline-block bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-sky-300 dark:via-blue-400 dark:to-indigo-500"
    //     aria-hidden
    //   >
    //     X
    //   </span>
    //   <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-blue-600 bg-clip-text text-transparent dark:from-slate-50 dark:via-sky-200 dark:to-cyan-300">
    //     PEER.AI
    //   </span>
    // </span>
    <img src="/xpeer.ai logo.webp" alt="XPEER AI Logo" className="h-10 w-auto" />
  );
}

export function HeroRotatingHeadline() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReducedMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  const slide = HERO_SLIDES[index];
  const lineCount = slide.lines.length;

  return (
    <div className="min-h-[13rem] text-left sm:min-h-[15rem] lg:min-h-[17rem]">
      <div key={index} aria-live="polite" aria-atomic="true">
        {slide.lines.map((line, i) => (
          <p
            key={`${index}-${i}-${line.text}`}
            className={cn(
              lineClassName(line.large, line.italic, reducedMotion),
              // i > 0 && "mt-2 sm:mt-3",
            )}
            style={
              reducedMotion
                ? undefined
                : { animationDelay: `${70 + i * 100}ms` }
            }
          >
            {line.text}
          </p>
        ))}
        <p
          className={cn(
            "mt-6 flex flex-wrap items-baseline gap-x-2.5 gap-y-1",
            !reducedMotion && "hero-line-rise",
          )}
          style={
            reducedMotion
              ? undefined
              : { animationDelay: `${70 + lineCount * 100 + 120}ms` }
          }
        >
          <span className="font-serif text-lg italic tracking-tight text-slate-700 dark:text-white/90 sm:text-xl">
            with
          </span>
          <BrandLockup />
        </p>
      </div>
    </div>
  );
}

function cn(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}
