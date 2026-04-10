import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "@/components/landing";
import { type ArticleBlock, RESOURCE_BLOGS } from "@/lib/resources-content";

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
      className={`group relative flex min-h-[120px] items-end overflow-hidden rounded-md border border-slate-300/70 p-3 transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 ${classes[variant]}`}
    >
      <h3 className="relative z-10 text-sm font-semibold leading-snug sm:text-base">{title}</h3>
    </Link>
  );
}

function ArticleBlocks({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="mt-6 space-y-6">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "lead":
            return (
              <p
                key={idx}
                className="text-[17px] font-medium leading-relaxed text-slate-800 dark:text-slate-100"
              >
                {block.text}
              </p>
            );
          case "p":
            return (
              <p key={idx} className="text-[15px] leading-8 text-slate-700 dark:text-slate-300">
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2
                key={idx}
                className="flex flex-wrap items-baseline gap-3 border-b border-slate-200 pb-2 pt-2 text-xl font-semibold text-slate-900 dark:border-white/10 dark:text-white"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#5c86b9]/15 text-sm font-bold text-[#4a6fa8] dark:bg-[#8eb2e3]/20 dark:text-[#a8c4ec]">
                  {block.num}
                </span>
                <span>{block.title}</span>
              </h2>
            );
          case "h3":
            return (
              <h3 key={idx} className="pt-1 text-base font-semibold text-slate-900 dark:text-white">
                {block.title}
              </h3>
            );
          case "quote":
            return (
              <blockquote
                key={idx}
                className="relative rounded-xl border border-[#5c86b9]/25 bg-gradient-to-br from-[#5c86b9]/10 via-slate-50 to-transparent px-5 py-4 text-[15px] font-medium italic leading-relaxed text-slate-800 shadow-sm dark:border-[#8eb2e3]/25 dark:from-[#1a2744] dark:via-[#0f162a] dark:to-transparent dark:text-slate-200"
              >
                <span className="absolute left-3 top-2 font-serif text-3xl leading-none text-[#5c86b9]/40 dark:text-[#8eb2e3]/50" aria-hidden>
                  &ldquo;
                </span>
                <span className="relative block pl-5">{block.text}</span>
              </blockquote>
            );
          case "ul":
            return (
              <ul
                key={idx}
                className="list-inside list-disc space-y-2.5 pl-1 text-[15px] leading-7 text-slate-700 marker:text-[#5c86b9] dark:text-slate-300 dark:marker:text-[#8eb2e3]"
              >
                {block.items.map((item, j) => (
                  <li key={j} className="pl-1">
                    {item}
                  </li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export default async function ResourceBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = RESOURCE_BLOGS.find((item) => item.slug === slug);
  if (!post) notFound();

  const otherBlogs = RESOURCE_BLOGS.filter((item) => item.slug !== slug).slice(0, 4);
  const isRichArticle = Boolean(post.blocks?.length);

  return (
    <div className="min-h-screen bg-[#e9edf4] text-slate-900 dark:bg-[#070b14] dark:text-white">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/10 dark:border-white/10 dark:bg-[#0f162a]">
          <div
            className={`relative flex flex-col justify-end ${
              post.image
                ? "bg-gradient-to-r from-[#1a9bc6] via-[#2b6fc2] to-[#4a8fda] dark:from-[#0f4860] dark:via-[#25488a] dark:to-[#355f9c]"
                : "bg-slate-100 dark:bg-[#141c2d]"
            } ${isRichArticle ? "min-h-[280px] sm:min-h-[320px]" : "min-h-[160px] sm:min-h-[176px]"}`}
            style={
              post.image
                ? {
                    backgroundImage: `linear-gradient(105deg, rgba(15,40,70,0.75) 0%, rgba(30,90,150,0.45) 45%, rgba(20,50,90,0.55) 100%), url(${post.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : undefined
            }
          />

          <div className="-mt-5 grid gap-5 rounded-t-2xl bg-white px-6 py-7 dark:bg-[#0f162a] sm:px-8 lg:grid-cols-[minmax(0,1fr)_170px]">
            <article className="max-w-[760px]">
              <h1
                className={`font-semibold leading-tight ${
                  isRichArticle
                    ? "text-3xl text-[#4f75ab] dark:text-[#9abbe8] sm:text-[2rem]"
                    : "text-3xl text-[#5c86b9] dark:text-[#8eb2e3]"
                }`}
              >
                {post.title}
              </h1>
              <p
                className={`mt-1 ${
                  isRichArticle ? "text-[17px] text-slate-600 dark:text-slate-300" : "text-base text-slate-500 dark:text-slate-300"
                }`}
              >
                {post.subtitle}
              </p>

              {isRichArticle && post.meta ? (
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
                  {post.meta.author ? (
                    <span className="font-medium text-slate-700 dark:text-slate-200">{post.meta.author}</span>
                  ) : null}
                  {post.meta.date ? (
                    <>
                      <span aria-hidden className="text-slate-300 dark:text-white/25">
                        ·
                      </span>
                      <time dateTime={post.meta.date}>{post.meta.date}</time>
                    </>
                  ) : null}
                  {post.meta.readTime ? (
                    <>
                      <span aria-hidden className="text-slate-300 dark:text-white/25">
                        ·
                      </span>
                      <span>{post.meta.readTime}</span>
                    </>
                  ) : null}
                </div>
              ) : null}

              {isRichArticle && post.blocks ? (
                <ArticleBlocks blocks={post.blocks} />
              ) : (
                <div className="mt-6 space-y-4 text-[15px] leading-7 text-slate-700 dark:text-slate-300">
                  {post.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              )}

              {isRichArticle && post.meta?.tags?.length ? (
                <div className="mt-10 flex flex-wrap gap-2">
                  {post.meta.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}

              <h2 className="mt-10 text-lg font-semibold tracking-wide text-slate-900 dark:text-white">OTHER BLOGS</h2>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {otherBlogs.map((item) => (
                  <BlogTile key={item.slug} href={`/resources/${item.slug}`} title={item.title} variant={item.variant} />
                ))}
              </div>

              <p className="mt-6 text-center">
                <Link
                  href="/resources"
                  className="text-[11px] text-[#6d87a8] underline decoration-[#90a8c7] underline-offset-4 transition hover:text-[#4a6b96] dark:text-[#8ea6cc] dark:hover:text-[#b5cae8]"
                >
                  Return to resources page
                </Link>
              </p>
            </article>

            <aside className="space-y-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
                  Share this article
                </p>
                <div className="mt-3 flex gap-2">
                  <button className="rounded-md border border-slate-300 px-2 py-1 text-xs dark:border-white/20">in</button>
                  <button className="rounded-md border border-slate-300 px-2 py-1 text-xs dark:border-white/20">f</button>
                  <button className="rounded-md border border-slate-300 px-2 py-1 text-xs dark:border-white/20">x</button>
                </div>
              </div>

              <div className="rounded-xl bg-gradient-to-b from-[#7ea3d7] to-[#4f7ec0] p-4 text-white">
                <p className="text-sm font-semibold">Get your own peer</p>
                <Link
                  href="/book-demo"
                  className="mt-3 inline-flex rounded-md bg-white/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#2b4d82]"
                >
                  Book a demo
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

