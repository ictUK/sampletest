"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { NAV_LINKS } from "@/lib/nav";
import { useAppTheme } from "@/components/theme-provider";

function Logo() {
  return (
    <Link href="/#info" className="flex items-center">
      <img 
        src="/xpeer.ai logo.webp" 
        alt="XPEER AI Logo" 
        className="h-10 w-auto"
      />
    </Link>
  );
}

function SunIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className} aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className} aria-hidden>
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useAppTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/80 bg-white/80 text-slate-800 shadow-sm transition hover:bg-slate-50 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {!mounted ? (
        <span className="block size-5 rounded-full bg-slate-200 dark:bg-slate-600" />
      ) : theme === "dark" ? (
        <SunIcon className="size-5" />
      ) : (
        <MoonIcon className="size-5" />
      )}
    </button>
  );
}

export function SiteHeader() {
  const [active, setActive] = useState("info");
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const primaryLinks = useMemo(
    () => NAV_LINKS.filter((link) => link.match !== "book-demo"),
    [],
  );
  const bookDemoLink = useMemo(
    () => NAV_LINKS.find((link) => link.match === "book-demo"),
    [],
  );

  const resolveHref = (href: string, match: string) => {
    if (match === "book-demo") {
      // On the dedicated page, keep it as an in-page anchor.
      if (pathname === "/book-demo") return "#book-demo";
      // Everywhere else, take users to the dedicated page.
      return "/book-demo";
    }

    if (match === "faq") {
      return "/faqs";
    }

    if (match === "pricing") {
      return "/pricing";
    }
    if (match === "solutions") {
      return "/solutions";
    }

    // Section links live on the landing page. From other routes, route back to home.
    if (href.startsWith("#") && pathname !== "/") return `/${href}`;
    return href;
  };

  useEffect(() => {
    const sync = () => {
      if (pathname === "/pricing") {
        setActive("pricing");
        return;
      }
      if (pathname === "/faqs") {
        setActive("faq");
        return;
      }
      if (pathname === "/solutions") {
        setActive("solutions");
        return;
      }
      const raw = window.location.hash.replace(/^#/, "");
      setActive(raw && NAV_LINKS.some((l) => l.match === raw) ? raw : "info");
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white dark:border-white/10 dark:bg-black/75 dark:backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:gap-8 lg:px-12">
        <Logo />

        <nav className="hidden flex-1 items-center justify-center lg:flex" aria-label="Main">
          {primaryLinks.map((item, idx) => {
            const isActive = active === item.match;
            return (
              <div key={item.href} className="flex items-center">
                {idx !== 0 && (
                  <span
                    aria-hidden="true"
                    className="mx-3 hidden h-5 w-px bg-slate-300/30 lg:inline-block dark:bg-white/20"
                  />
                )}
                <Link
                  href={resolveHref(item.href, item.match)}
                  title={item.label}
                  className={[
                    "text-xs font-medium text-slate-600 transition hover:text-blue-600 xl:text-[0.8125rem] 2xl:text-sm",
                    "dark:text-slate-200 dark:hover:text-cyan-300",
                    isActive && "font-semibold text-blue-600 dark:text-cyan-300",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          {bookDemoLink && (
            <Link
              href={resolveHref(bookDemoLink.href, bookDemoLink.match)}
              className="hidden rounded-full bg-[#2563eb] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md transition hover:bg-[#1d4ed8] lg:inline-flex lg:items-center"
            >
              {bookDemoLink.label}
            </Link>
          )}
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300/80 text-slate-800 dark:border-white/15 dark:text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-slate-200 bg-white px-4 py-4 dark:border-white/10 dark:bg-[#0a0f1a] lg:hidden"
        >
          <nav className="flex flex-col gap-2.5" aria-label="Mobile">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={resolveHref(item.href, item.match)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
