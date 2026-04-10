export type NavLink = {
  href: string;
  label: string;
  match: string;
  /** Shorter label for constrained nav (full string still in `label` for tooltip/mobile). */
  labelShort?: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: "#info", label: "Info", match: "info" },
  { href: "#calculate", label: "ROI Calculator", match: "calculate" },
  { href: "/pricing", label: "Price", match: "pricing" },
  { href: "#case-studies", label: "Case Studies", match: "case-studies" },
  { href: "#resources", label: "Resources", match: "resources" },
  { href: "/solutions", label: "Solutions", match: "solutions" },
  { href: "/faqs", label: "FAQs", match: "faq" },
  { href: "/book-demo", label: "BOOK A DEMO", match: "book-demo" },
];
