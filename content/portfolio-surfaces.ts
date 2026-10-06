import type { SurfaceItem } from "@/components/ProductSurfaces";

/** Case-study product surface galleries, keyed by portfolio slug */
export const portfolioSurfaces: Record<string, SurfaceItem[]> = {
  trackify: [
    {
      src: "/images/portfolio/trackify/homescreen.jpg",
      alt: "Trackify home — balances and recent activity",
      title: "Home",
      detail:
        "Balances and recent activity at a glance — local-first, no account wall.",
    },
    {
      src: "/images/portfolio/trackify/analytics.jpg",
      alt: "Weekly analytics and category breakdowns",
      title: "Analytics",
      detail:
        "Weekly trends and category breakdowns that stay readable on a phone.",
    },
    {
      src: "/images/portfolio/trackify/transactions.jpg",
      alt: "Transaction list with category context",
      title: "Transactions",
      detail: "Chronological list with category context for quick scanning.",
    },
    {
      src: "/images/portfolio/trackify/currencyset.jpg",
      alt: "Multi-method currency and payment setup",
      title: "Methods & currency",
      detail:
        "Cash, cards, wallets, and transfers — multi-method balances without cloud-first assumptions.",
    },
    {
      src: "/images/portfolio/trackify/settings.jpg",
      alt: "Settings — privacy, sync, and preferences",
      title: "Settings",
      detail:
        "Privacy, optional sync, and preferences — sync stays opt-in, not the center of the product.",
    },
  ],
};
