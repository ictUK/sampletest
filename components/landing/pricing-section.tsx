import Link from "next/link";
import { SectionShell } from "@/components/landing/section-shell";

function PhoneIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className} aria-hidden>
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l3.27-3.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const PLANS = [
  {
    name: "Individual",
    headerClass: "bg-[#6eb3d9]",
    description: "For freelancers, students and early stage creators.",
    features: [
      "3 Peer Assistants",
      "Local execution",
      "Single Project controller",
      "Autonomous Task and Data",
    ],
  },
  {
    name: "Team",
    headerClass: "bg-[#3d7ab8]",
    description: "Ideal for inter team collaborations.",
    features: [
      "All Individual capabilities",
      "Unlimited Project Controller",
      "CodeLinkage across repositories",
      "Team workspace and shared peers",
      "Standard Professional Support",
      "Shared peer libraries",
      "Centralized policy and governance",
      "CI/CD integrations",
      "Usage and coverage reporting",
      "Multi-project orchestration",
      "Email and chat support SLA",
    ],
  },
  {
    name: "Enterprise",
    headerClass: "bg-[#5a6d82]",
    description: "Best for multiple teams.",
    features: [
      "All Team capabilities",
      "Premium Professional Support",
      "Customised Infrastructure",
      "Customised External AI agents",
      "Dedicated Customer Success Manager",
      "Custom SLAs and escalation paths",
      "Private deployment options",
      "Advanced security and compliance reviews",
      "Custom integrations and connectors",
      "Executive business reviews",
      "Training and enablement workshops",
      "Optional on-site advisory",
      "Volume licensing and enterprise billing",
      "Custom contract and procurement support",
    ],
  },
] as const;

export function PricingPageSection() {
  return (
    <section
      id="pricing"
      className="relative flex min-h-[calc(100vh-72px)] w-full scroll-mt-24 items-center bg-gradient-to-b from-[#eef1f5] via-[#edf1f6] to-[#a7c9e8] py-10 text-slate-900 dark:from-[#070b12] dark:via-[#0a1020] dark:to-[#060912] dark:text-white sm:py-12"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18] dark:opacity-[0.35]"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59, 130, 246, 0.35), transparent 55%), radial-gradient(ellipse 60% 40% at 100% 80%, rgba(14, 165, 233, 0.15), transparent 50%)",
        }}
        aria-hidden
      />
      <SectionShell className="relative">
        <h1 className="text-center text-3xl font-semibold tracking-wide text-[#4c7db4] dark:text-[#8eb8e8] sm:text-4xl">PRICING</h1>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-600 dark:text-slate-400">
          Plans tailored to how you build. Contact us to match seats, capacity, and integrations.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#90b2d8] bg-white/95 shadow-[0_8px_18px_rgba(15,23,42,0.14)] backdrop-blur-sm dark:border-cyan-400/20 dark:bg-[#0c1222]/95 dark:shadow-lg dark:shadow-black/30"
            >
              <div className={`px-5 py-4 ${plan.headerClass}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/95">{plan.name}</p>
                <p className="mt-2 text-sm leading-snug text-white/95">{plan.description}</p>
              </div>
              <div className="flex flex-1 flex-col gap-5 p-5">
                <Link
                  href="/book-demo"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-[#f4f7fb] px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-[#0f1729] transition hover:bg-slate-100 dark:border-white/20 dark:bg-[#0f1729] dark:text-white dark:hover:bg-white/10"
                >
                  <PhoneIcon className="size-4 shrink-0" />
                  Contact sales
                </Link>
                <ul className="space-y-2.5 text-sm leading-snug text-slate-800 dark:text-slate-300">
                  {plan.features.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#4f7fb9] dark:bg-cyan-400/80" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}
