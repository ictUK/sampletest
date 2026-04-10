import { RESOURCE_TILES, SITE } from "@/lib/site-content";

const tileBase =
  "group relative flex min-h-[180px] flex-col justify-end overflow-hidden rounded-2xl border border-slate-200/90 p-8 shadow-sm transition hover:border-blue-400/50 hover:shadow-lg dark:border-white/10 dark:shadow-none dark:hover:border-cyan-400/40 dark:hover:shadow-cyan-500/10 sm:min-h-[220px]";

export function ResourceGridSection() {
  return (
    <section
      id="resources"
      className="bg-gradient-to-b from-slate-50 to-white py-20 dark:from-[#020617] dark:to-black sm:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto flex w-fit items-center gap-2 text-center text-sm font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-cyan-400">
          <img src={SITE.logo} alt={SITE.logoAlt} className="h-8 w-auto" />
          <span className="sr-only">{SITE.name.replace(".", " ")}</span>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-[minmax(260px,280px)_minmax(320px,1fr)_minmax(260px,280px)] sm:grid-rows-[minmax(220px,1fr)_minmax(220px,1fr)]">
          {RESOURCE_TILES.map((tile, index) => {
            const tilePosition =
              index === 0
                ? "sm:row-start-1 sm:col-start-1"
                : index === 1
                ? "sm:row-span-2 sm:row-start-1 sm:col-start-2"
                : index === 2
                ? "sm:row-span-2 sm:row-start-1 sm:col-start-3"
                : "sm:row-start-2 sm:col-start-1";

            if (tile.variant === "solid") {
              return (
                <a key={tile.title} href={tile.href} className={`${tileBase} ${tilePosition} bg-[#1e40af] text-white relative overflow-hidden`}>
                  <img 
                    src="/bookADemo.png" 
                    alt={tile.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                  />
                  <span className="text-xl font-bold relative z-10">{tile.title}</span>
                </a>
              );
            }
            if (tile.variant === "dots") {
              return (
                <a
                  key={tile.title}
                  href={tile.href}
                  className={`${tileBase} ${tilePosition} bg-[#172554] text-white dark:bg-[#172554]`}
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1.5px)",
                    backgroundSize: "14px 14px",
                  }}
                >
                  <span className="text-xl font-bold drop-shadow-md">{tile.title}</span>
                </a>
              );
            }
            if (tile.variant === "gradient") {
              return (
                <a
                  key={tile.title}
                  href={tile.href}
                  className={`${tileBase} ${tilePosition} bg-gradient-to-br from-slate-600 via-[#1e3a8a] to-[#0ea5e9] text-white`}
                >
                  <span className="text-xl font-bold">{tile.title}</span>
                </a>
              );
            }
            if (tile.variant === "community") {
              return (
                <a
                  key={tile.title}
                  href={tile.href}
                  className={`${tileBase} ${tilePosition} bg-[#1d4ed8] text-white relative overflow-hidden`}
                >
                  <img
                    src="/JoinOurCommunity.png"
                    alt={tile.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-30"
                  />
                  <span className="text-xl font-bold relative z-10">{tile.title}</span>
                </a>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
}
