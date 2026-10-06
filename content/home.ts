import { site } from "./site";

export const home = {
  hero: {
    brand: site.name,
    headline: "Websites, apps, and creative systems with calm precision.",
    support:
      "I design and build digital products, help brands with social and business content, and run Drone Hospital Nepal as a workshop venture.",
    role: site.role,
    primaryCta: { href: "/portfolio", label: "View work" },
    secondaryCta: { href: "/contact", label: "Get in touch →" },
  },
  work: {
    eyebrow: "Selected work",
    headline: "Products worth opening",
    support:
      "From privacy-first finance to education and logistics — featured projects with case studies.",
  },
  services: {
    eyebrow: "What I do",
    headline: "Clear craft. Strong delivery.",
    support:
      "Website and app design, social media, business content, and Drone Hospital workshop services.",
  },
  experience: {
    eyebrow: "Experience",
    headline: "Path so far",
    support:
      "Independent product and creative work, plus founding Drone Hospital Nepal.",
  },
  blog: {
    eyebrow: "Writing",
    headline: "Recent notes",
    support: "Short notes on product craft, Flutter, and interface discipline.",
  },
  contact: {
    headline: "Let’s build something precise",
    support:
      "A website or app, social presence, business content, or a workshop question — tell me what you need.",
    cta: { href: "/contact", label: "Get in touch" },
  },
} as const;
