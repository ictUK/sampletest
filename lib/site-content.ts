export const SITE = {
  name: "XPEER.AI",
  logo: "/xpeer.ai logo.webp",
  logoAlt: "XPEER AI logo",
  email: "info@xpeer.ai",
  tagline: "Stop finding bugs. Start preventing them before they reach production.",
} as const;

export const HERO_STATS = [
  { value: "75%", label: "Reduction in costs" },
  { value: "70%", label: "Reduction in maintenance cost" },
  { value: "40%", label: "Developer productivity improvement" },
] as const;

/** Rotating hero copy — cycles in the hero headline (see HeroRotatingHeadline). */
export const HERO_SLIDES = [
  {
    lines: [
      { text: "Stop finding bugs.", italic: false, large: false },
      { text: "Start preventing them before", italic: true, large: true },
      { text: "they reach production", italic: true, large: true },
    ],
  },
  {
    lines: [
      { text: "Make QA a", italic: false, large: false },
      { text: "competitive advantage", italic: false, large: true },
      { text: "not a cost center,", italic: true, large: false },
    ],
  },
  {
    lines: [
      { text: "Ditch the regressions,", italic: false, large: false },
      { text: "let the engineering team", italic: false, large: false },
      { text: "ship with certainty", italic: false, large: true },
    ],
  },
  {
    lines: [
      { text: "In the AI era,", italic: false, large: false },
      { text: "bug detection is table stakes.", italic: false, large: false },
      { text: "Prevention is the advantage", italic: false, large: true },
    ],
  },
  {
    lines: [
      { text: "Your business logic, learned.", italic: false, large: false },
      { text: "Your defects, prevented.", italic: false, large: false },
      { text: "Ship fearlessly", italic: false, large: true },
    ],
  },
] as const;

export const HOW_IT_WORKS = {
  eyebrow: "WE ARE XPEER.AI",
  paragraphs: [
   "XPeer.ai is built on the principles of Extreme Programming and Peer Programming. In Extreme Programming, early feedback is crucial, developers quickly build a minimal version, gather business feedback, and iterate. In the same spirit, XPeer.ai brings AI Peers into your development cycle, giving business-level feedback while you code.",
   "At the same time, AI Peers perform contextual unit tests and code reviews. This rich data informs automated functional tests, across UI, APIs, and data, ensuring every feature, story, and epic is validated at the developer’s local environment, before a single PR even hits the repo."
  ],
  venn: {
    circles: [
      { label: "AI-Powered", className: "left-[8%] top-[12%] md:left-[10%] md:top-[15%]" },
      { label: "Autonomous", className: "right-[8%] top-[12%] md:right-[12%] md:top-[15%]" },
    ],
    center: "XPEER AI",
  },
} as const;

/** Tabbed “Dive deeper” panel — see `DiveDeeperPanel`. */
export const DIVE_DEEPER_TABS = [
  {
    id: "how",
    label: "HOW XPEER.AI WORKS",
    kind: "numbered" as const,
    columns: [
      [
        {
          n: 1,
          title: "Demonstrate Your Workflow",
          body: "Show your end-to-end workflow and convert it into durable automation: XPEER AI pairs with engineering intent so what you demonstrate becomes coverage—not a throwaway recording.",
        },
        {
          n: 2,
          title: "AI Understands Intent",
          body: "Beyond selectors and scripts, the engine reasons about what the product should do—so validation tracks meaning and user outcomes, not brittle UI snapshots.",
        },
        {
          n: 3,
          title: "Designed for human-like behaviour in changing environments",
          body: "Flows drift, data varies, and UIs evolve. Coverage adapts continuously so your suites stay aligned to real behaviour—not last week’s build.",
        },
      ],
      [
        {
          n: 4,
          title: "Continuous Validation",
          body: "Every meaningful change gets the right checks—pipelines stay fast while risk surfaces early, before code merges widen the blast radius.",
        },
        {
          n: 5,
          title: "Alignment of entire team for quality output",
          body: "Engineering, QA, and product share the same picture of risk and coverage—so prioritization is data-led, not opinion-led.",
        },
        {
          italic:
            "Together, these steps turn quality from a gate at the end of the sprint into a steady signal across the whole delivery workflow.",
        },
      ],
      [
        {
          n: 6,
          title: "Transform your testers into QA and software developers to super developers",
          body: "Your team spends less time nursing frameworks and more time on exploratory testing, architecture, and product risk. Automation handles repetition; people handle judgment—so throughput and depth both go up.",
        },
        {
          footer:
            "That shift is how organizations scale coverage without scaling headcount linearly—and still ship with confidence.",
        },
      ],
    ],
  },
  {
    id: "multi",
    label: "MULTI PARAMETER VALIDATION",
    kind: "multi-param" as const,
    intro:
      "Traditional tools rely primarily on DOM element identification or Page Object Models. XPEER AI analyzes applications via multiple different parameters simultaneously:",
    items: [
      {
        title: "Visual recognition",
        body: "Understanding interface elements as humans perceive them—not only coordinates or attributes that break on the next CSS tweak.",
      },
      {
        title: "Functional validation",
        body: "Verifying behaviour and business logic, not merely that an element exists or a request returned 200.",
      },
      {
        title: "Data flow integrity",
        body: "Ensuring information moves correctly through systems and workflows, including hand-offs between UI, API, and backend.",
      },
      {
        title: "Cross-browser consistency",
        body: "Validation across major browsers and environments automatically—without duplicating suites per target.",
      },
      {
        title: "Performance",
        body: "Application performance from the developer experience through to production—so regressions in latency and stability surface with functional issues.",
      },
    ],
  },
  {
    id: "coverage",
    label: "COMPREHENSIVE TESTING COVERAGE",
    kind: "coverage" as const,
    columns: [
      [
        {
          title: "UI Testing",
          body: "Validate user interfaces, forms, flows, and responsive behaviours across breakpoints—so UX issues are caught before customers do.",
        },
        {
          title: "API Testing",
          body: "Exercise APIs and backend services with contracts, payloads, and negative paths aligned to how your product actually runs in production.",
        },
        {
          title: "Regression Testing",
          body: "Automated regression suites that scale with release cadence—focused on what changed and what could break because of it.",
        },
      ],
      [
        {
          title: "End-to-End Functional Testing",
          body: "Validate complete user journeys from frontend to backend, including integrations—mirroring real usage, not isolated happy paths.",
        },
        {
          title: "Mobile Testing",
          body: "Exercise mobile apps across devices and OS versions where your users actually are—without maintaining a device lab by hand.",
        },
      ],
      [
        {
          title: "Universal platform support",
          body: "Run meaningful coverage across the stacks your enterprise uses—web, packaged apps, and common platforms—so one strategy replaces a patchwork of tools.",
        },
        {
          title: "Impact",
          body: "Teams achieve broad coverage without manual script authorship at every layer—so quality keeps pace with roadmap pressure, not the other way around.",
        },
      ],
    ],
  },
] as const;

export const PARTNER_LOGOS = [
  { src: "/ai user logo/User (1).png", alt: "Partner logo 1" },
  { src: "/ai user logo/User (2).png", alt: "Partner logo 2" },
  { src: "/ai user logo/User (3).png", alt: "Partner logo 3" },
  { src: "/ai user logo/User (4).png", alt: "Partner logo 4" },
  { src: "/ai user logo/User (5).png", alt: "Partner logo 5" },
  { src: "/ai user logo/User (6).png", alt: "Partner logo 6" },
] as const;

export type TestimonialMarqueeCard = {
  quote: string;
  name: string;
  role: string;
  org: string;
};

/** Dual-row infinite marquee — see `TestimonialsSection`. */
export const TESTIMONIAL_MARQUEE_TOP: TestimonialMarqueeCard[] = [
  {
    quote:
      "XPEER AI has significantly streamlined our coding practices, reducing complexity and improving efficiency. By consolidating multiple tools into one platform, we've cut down on SaaS expenses and made team training much easier.",
    name: "Jordan Lee",
    role: "Founder",
    org: "Investor networking platform",
  },
  {
    quote:
      "With XPEER AI, our development workflow has become much more efficient. We no longer need to juggle multiple tools, which has lowered costs and simplified onboarding for new team members. It's a game-changer for tech teams!",
    name: "Samira Patel",
    role: "Founder",
    org: "IT services and consulting",
  },
  {
    quote:
      "We cut escaped defects dramatically while shipping twice as often. The maintenance tax of our old framework is just gone.",
    name: "Priya Sharma",
    role: "Engineering Manager",
    org: "Enterprise SaaS",
  },
  {
    quote:
      "From onboarding to meaningful coverage took days, not quarters. It's the first automation stack our developers actually trusted in CI.",
    name: "Marcus Chen",
    role: "Director of Quality",
    org: "B2B platform",
  },
  {
    quote:
      "Coverage maps finally match how our product actually behaves. We spend stand-ups on risk, not on why builds turned red.",
    name: "Elena Vasquez",
    role: "VP Engineering",
    org: "Health tech",
  },
];

export const TESTIMONIAL_MARQUEE_BOTTOM: TestimonialMarqueeCard[] = [
  {
    quote:
      "The team actually looked forward to adopt it—noticeably simpler than the other test automation tools we'd been wrestling with.",
    name: "Chris Okonkwo",
    role: "Lead SDET",
    org: "Retail technology",
  },
  {
    quote:
      "Regression used to eat up half our sprint. Now it runs overnight and we ship without doubt the next morning.",
    name: "Amelia Frost",
    role: "Engineering Manager",
    org: "Insurance provider",
  },
  {
    quote:
      "We went from dozens of flaky suites to one coherent layer. The tests just keep up with the product instead of fighting it.",
    name: "Diego Alvarez",
    role: "QA Lead",
    org: "Hospital network",
  },
  {
    quote:
      "API and UI checks finally run as one story. When something breaks, we know the blast radius in minutes—not days.",
    name: "Kenji Tan",
    role: "Platform engineer",
    org: "Logistics software",
  },
  {
    quote:
      "Our compliance reviews got easier because evidence is continuous, not a folder of screenshots before release.",
    name: "Rachel Meyer",
    role: "Head of engineering",
    org: "Financial services",
  },
];

/** Six generations — matches “Evolution of test automation” infographic structure. */
export const EVOLUTION_STEPS = [
  {
    step: 1,
    title: "Record and Playback",
    enabled: "Faster replication of manual test steps",
    reality:
      "Reduced repetition initially, but introduced fragile flows requiring frequent rework",
  },
  {
    step: 2,
    title: "Scripting Frameworks (Selenium, etc.)",
    enabled: "Engineering-level control and extensibility",
    reality: "Required dedicated automation engineers and ongoing maintenance cycles",
  },
  {
    step: 3,
    title: "Keyword / Data-Driven",
    enabled: "Reusability and modularization",
    reality: "Lowered duplication, but still dependent on structured scripting logic",
  },
  {
    step: 4,
    title: "BDD & Codeless Tools",
    enabled: "Better collaboration between business and QA",
    reality:
      "Improved readability, yet validation remained scenario-driven and maintenance-heavy",
  },
  {
    step: 5,
    title: "AI-Enhanced Automation",
    enabled: "Self-healing and smarter execution",
    reality: "Reduced script breakage, but still centered around test artifacts and suites",
  },
  {
    step: 6,
    title: "AI-Native Quality Peers (XPeer.ai)",
    enabled: "Continuous validation of business logic and system behavior",
    reality:
      "Eliminates repetitive scripting, enables QA at development time, reduces rework before release, no learning curve",
  },
] as const;

export const RESOURCE_TILES = [
  { title: "Book A Demo", href: "/book-demo", variant: "solid" as const },
  { title: "Whitepapers And Blogs", href: "/resources", variant: "dots" as const },
  { title: "Frequently Ask Questions", href: "#faq", variant: "gradient" as const },
  { title: "Join Our Community", href: "#community", variant: "community" as const },
] as const;

export const FOOTER_NAV = [
  { heading: "Company", links: ["About Us", "Mission", "Vision"] as const },
  { heading: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] as const },
  { heading: "Resources", links: ["Whitepapers"] as const },
] as const;

export const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/xpeerai", icon: "/linkedin.png" },
  { name: "Facebook", href: "https://www.facebook.com/codetestsolution", icon: "/facebook.png" },
  { name: "Twitter", href: "https://x.com/codetestsoln", icon: "/twitter.png" },
  { name: "Instagram", href: "https://www.instagram.com/codetestsolution/", icon: "/instagram.png" },
] as const;
