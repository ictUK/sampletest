import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/landing";
import { RESOURCE_BLOGS } from "@/lib/resources-content";
import { WHITEPAPERS } from "@/lib/whitepapers-content";

function BlogTile({
  href,
  title,
  variant,
}: {
  href: string;
  title: string;
  variant: "grid-a" | "grid-b" | "grid-c" | "grid-d";
}) {
  const classes: Record<typeof variant, string> = {
    "grid-a":
      "bg-[#2f3b9d] text-white before:absolute before:inset-0 before:bg-[radial-gradient(circle,_rgba(0,0,0,0.75)_2px,_transparent_3px)] before:[background-size:18px_18px] before:opacity-70",
    "grid-b":
      "bg-[#304a5e] text-white before:absolute before:inset-0 before:bg-[radial-gradient(circle,_rgba(183,199,216,0.45)_2px,_transparent_3px)] before:[background-size:16px_16px] before:opacity-75",
    "grid-c":
      "bg-[#a8c3f4] text-[#1d3350] before:absolute before:inset-0 before:bg-[radial-gradient(circle,_rgba(93,124,175,0.5)_2px,_transparent_3px)] before:[background-size:17px_17px] before:opacity-70",
    "grid-d":
      "bg-white text-[#111827] before:absolute before:left-0 before:right-0 before:bottom-0 before:h-10 before:bg-gradient-to-r before:from-cyan-500 before:via-blue-500 before:to-white",
  };

  return (
    <Link
      href={href}
      className={`group relative flex min-h-[170px] items-end overflow-hidden rounded-md border border-slate-300/70 p-4 transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 ${classes[variant]}`}
    >
      <h3 className="relative z-10 text-lg font-semibold leading-snug">{title}</h3>
    </Link>
  );
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#eef2f8] text-slate-900 dark:bg-[#060b14] dark:text-white">
      <SiteHeader />
      <main className="py-10 sm:py-12">
        <section className="mx-auto w-full max-w-5xl rounded-2xl border border-slate-200/80 bg-[#edf1f7] px-6 py-8 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-gradient-to-b dark:from-[#121a3b] dark:to-[#050a12] sm:px-10 sm:py-10">
          <h1 className="text-3xl font-semibold text-[#7ea2cf]">Whitepapers</h1>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {WHITEPAPERS.map((paper) => (
              <Link
                key={paper.slug}
                href={`/resources/whitepapers/${paper.slug}`}
                className="rounded-md border border-slate-200 bg-white px-3 py-2 text-[11px] font-semibold uppercase leading-snug tracking-wide text-slate-700 shadow-sm transition hover:shadow dark:border-white/10 dark:bg-[#0f1732] dark:text-white/90"
              >
                {paper.title}
              </Link>
            ))}
          </div>

          <p className="mt-4 text-center text-[11px] text-[#6d87a8] underline decoration-[#90a8c7] underline-offset-4 dark:text-[#8ea6cc]">
            Contact us for whitepaper access
          </p>

          <h2 className="mt-14 text-3xl font-semibold text-[#4c7db4]">Blogs</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {RESOURCE_BLOGS.map((post) => (
              <BlogTile key={post.slug} href={`/resources/${post.slug}`} title={post.title} variant={post.variant} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

