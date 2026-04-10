import { FOOTER_NAV, SITE, SOCIAL_LINKS } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 py-14 text-slate-300 dark:border-white/10 dark:bg-black">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <img src={SITE.logo} alt={SITE.logoAlt} className="h-10 w-auto" />
              <span className="sr-only">{SITE.name}</span>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              <a href={`mailto:${SITE.email}`} className="text-slate-300 hover:text-cyan-300">
                {SITE.email}
              </a>
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300/20 bg-white/5 transition hover:bg-white/10 hover:border-cyan-400/50"
                  aria-label={s.name}
                >
                  <img src={s.icon} alt={s.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {FOOTER_NAV.map((col) => (
              <div key={col.heading}>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{col.heading}</p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-slate-300 hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-slate-600 sm:text-left">
          © {new Date().getFullYear()} XpeerAI Pvt Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
