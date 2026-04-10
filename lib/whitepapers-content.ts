export type Whitepaper = {
  slug: string;
  title: string;
  subtitle: string;
  industry: string;
  intro: string[];
  highlights: string[];
  differentiators: string[];
  ctaTitle: string;
  ctaText: string;
  contactLabel: string;
};

export const OTHER_INDUSTRIES = [
  "Financial Services",
  "Insurance",
  "Healthcare",
  "Telecomm",
  "Retail",
  "Travel & Entertainment",
  "Logistics Supply chain",
  "Public Sector",
] as const;

export const WHITEPAPERS: Whitepaper[] = [
  {
    slug: "selenium-vs-xpeer-ai-deep-dive",
    title: "Selenium vs XPEER.AI: A Deep Dive",
    subtitle: "Why modern teams are moving beyond script-heavy frameworks",
    industry: "Cross-Industry",
    intro: [
      "Selenium pioneered browser automation and helped teams scale UI testing for years. But modern product teams now face higher release frequency, richer workflows, and broader integration complexity.",
      "This whitepaper compares traditional Selenium-heavy maintenance models with XPEER.AI's AI-native quality approach, including effort, reliability, and release confidence outcomes.",
    ],
    highlights: [
      "How maintenance load changes as test suites and product complexity grow.",
      "Where flaky checks and script drift affect release confidence the most.",
      "How AI-native validation improves coverage with less brittle authoring.",
      "What teams gain in lead time and QA overhead reduction after migration.",
    ],
    differentiators: [
      "Built for high-change release cycles with lower script dependency.",
      "Designed to validate business flows, not just UI interaction paths.",
      "Supports faster triage with contextual failure insights.",
      "Helps teams shift from reactive debugging to proactive quality signals.",
    ],
    ctaTitle: "Download the Full Whitepaper",
    ctaText:
      "Get the complete comparison framework, migration playbook, ROI model, and architecture examples used by teams modernizing from script-heavy automation.",
    contactLabel: "Contact us for whitepaper access",
  },
  {
    slug: "playwright-vs-xpeer-ai-why-teams-switch",
    title: "Playwright vs XPEER.AI: Why Teams Switch",
    subtitle: "From strong test execution to full-cycle quality intelligence",
    industry: "Cross-Industry",
    intro: [
      "Playwright delivers robust cross-browser automation and has become a preferred modern framework for many engineering teams.",
      "This whitepaper explores why teams that start with Playwright later add or shift to XPEER.AI when they need risk-aware validation, lower maintenance drag, and broader release intelligence.",
    ],
    highlights: [
      "Execution reliability vs long-term maintenance cost at scale.",
      "How teams handle feature velocity with limited QA bandwidth.",
      "The operational gap between test pass rates and true release confidence.",
      "Decision criteria for hybrid and phased adoption patterns.",
    ],
    differentiators: [
      "AI-driven prioritization for high-impact validation paths.",
      "Reduced dependency on manually authored test scripts.",
      "Cross-functional quality visibility for engineering and product teams.",
      "Faster confidence loops from change to release decision.",
    ],
    ctaTitle: "Download the Full Whitepaper",
    ctaText:
      "Access detailed benchmark scenarios, capability mapping, and a practical transition strategy used by high-growth product teams.",
    contactLabel: "Contact us for whitepaper access",
  },
  {
    slug: "salesforce-vs-xpeer-ai-crm-testing-with-ai-peers",
    title: "Salesforce vs XPEER.AI: CRM Testing with AI Peers",
    subtitle: "Modern quality strategy for complex CRM ecosystems",
    industry: "Enterprise CRM",
    intro: [
      "CRM programs demand high reliability across workflows, permissions, integrations, and compliance-sensitive processes.",
      "This whitepaper outlines how AI peers can continuously validate CRM behavior and reduce escaped defects in high-change Salesforce environments.",
    ],
    highlights: [
      "Common quality gaps in custom Salesforce and integration-heavy setups.",
      "How release risk increases with role-based and workflow complexity.",
      "Methods to improve confidence without multiplying brittle scripts.",
      "Case-style examples for high-volume enterprise operations.",
    ],
    differentiators: [
      "Workflow-aware validation aligned with CRM business outcomes.",
      "Coverage across custom objects, automation rules, and connected systems.",
      "Better signal quality for release approvals and rollback planning.",
      "Lower manual verification burden for recurring CRM releases.",
    ],
    ctaTitle: "Download the Full Whitepaper",
    ctaText:
      "Get implementation reference architectures, validation templates, and governance recommendations for AI-assisted CRM quality.",
    contactLabel: "Contact us for whitepaper access",
  },
  {
    slug: "test-automation-framework-with-xpeer-ai",
    title: "Test Automation Framework with XPEER.AI",
    subtitle: "A scalable quality architecture for fast-moving engineering teams",
    industry: "Cross-Industry",
    intro: [
      "Traditional automation frameworks often become costly to maintain as products evolve, teams expand, and release cadence accelerates.",
      "This whitepaper presents a reference automation architecture using XPEER.AI to improve quality outcomes while reducing repetitive script maintenance.",
    ],
    highlights: [
      "Core building blocks of an AI-native automation framework.",
      "How to balance deterministic checks with adaptive validation.",
      "Governance patterns for reliability, traceability, and auditability.",
      "Stepwise rollout model for enterprise and product-led teams.",
    ],
    differentiators: [
      "Framework design centered on risk and customer-critical flows.",
      "Seamless integration across CI/CD and modern engineering toolchains.",
      "Structured quality metrics tied to delivery and business objectives.",
      "Faster onboarding with lower dependency on specialized script authors.",
    ],
    ctaTitle: "Download the Full Whitepaper",
    ctaText:
      "Review the complete framework blueprint, maturity model, and rollout checklist to accelerate AI-native quality adoption.",
    contactLabel: "Contact us for whitepaper access",
  },
];
