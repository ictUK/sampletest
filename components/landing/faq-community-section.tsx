import { SITE } from "@/lib/site-content";

const FAQ = [
  {
    q: "How does XPEER AI integrate with our CI/CD?",
    a: "Native pipelines hook into GitHub, GitLab, Jenkins, and cloud CI so every merge gets the right depth of validation without flaky queues.",
  },
  {
    q: "Do we need to maintain brittle selectors?",
    a: "No. The platform continuously reconciles UI and API drift so cases stay aligned to the product—not last week’s DOM snapshot.",
  },
  {
    q: "Is our data secure?",
    a: "Enterprise-grade isolation, role-based access, and deployment options that match your compliance posture. We’ll map to your security review checklist.",
  },
] as const;

export function FaqCommunitySection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 dark:border-white/5 dark:bg-[#0a0f1a]">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-2">
          <div id="faq" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Frequently asked questions</h2>
            <dl className="mt-8 space-y-8">
              {FAQ.map((item) => (
                <div key={item.q}>
                  <dt className="font-semibold text-blue-800 dark:text-cyan-200">{item.q}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div
            id="community"
            className="scroll-mt-24 flex flex-col justify-center rounded-2xl border border-slate-200 bg-slate-50 p-10 dark:border-white/10 dark:bg-[#0f1729]"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Join our community</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Connect with other quality leaders shipping AI-native automation: office hours, release notes, and
              early access to new capabilities.
            </p>
            <a
              href={`mailto:${SITE.email}?subject=Community`}
              className="mt-8 inline-flex w-fit rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 dark:bg-cyan-500 dark:text-black dark:hover:bg-cyan-400"
            >
              Request an invite
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
