export type ServiceProcessStep = {
  title: string;
  detail: string;
};

export type ServiceProof = {
  src: string;
  alt: string;
  caption: string;
};

export type Service = {
  id: string;
  title: string;
  /** Short line for home preview + scan strip */
  teaser: string;
  /** Medium blurb for /services index rows */
  summary: string;
  /** Subtle mono label — e.g. Most requested — not a pill */
  label?: string;
  /** Long-form opening on the detail page */
  overview: string;
  /** Who this is a fit for */
  suitedFor: string[];
  /** What is included */
  includes: string[];
  /** How engagement typically runs */
  process: ServiceProcessStep[];
  /** Nuanced craft / philosophy note */
  approach: string;
  /** Optional anonymized or workshop proof frames */
  proof?: ServiceProof[];
};

export const servicesPage = {
  eyebrow: "What I do",
  headline: "Clear craft. Strong delivery.",
  support:
    "Website and app experiences, social storytelling, business content, and a focused drone workshop — built to ship and stay maintainable.",
} as const;

export const services: Service[] = [
  {
    id: "website-app",
    title: "Website / App Design & Development",
    label: "Most requested",
    teaser:
      "Fast, maintainable websites and mobile apps — designed and built to last past launch.",
    summary:
      "Design and development in one surface: clear structure, calm interfaces, and code you can keep updating — including Flutter for mobile.",
    overview:
      "Most products fail after launch because design and engineering were never speaking the same language. This service covers both: information architecture and interface craft, then production builds that stay readable. For mobile, Flutter is a core delivery path; for the web, the same standards apply — performance, accessibility, and a UI that feels intentional rather than assembled from templates.",
    suitedFor: [
      "Founders and teams who need a website or app that can be maintained after handoff",
      "Products that need UX clarity before more features are stacked on",
      "Flutter or cross-platform mobile work with a design-led bar",
      "Rebuilds where the current site or app looks finished but is hard to extend",
    ],
    includes: [
      "Discovery on goals, users, and constraints",
      "IA, flows, and high-fidelity UI (Figma when needed)",
      "Website and/or Flutter app implementation",
      "Prototypes that survive into production",
      "Launch packaging and a maintainable handoff",
    ],
    process: [
      {
        title: "Frame",
        detail:
          "Align on audience, outcomes, and what “done” means — before pixels or tickets sprawl.",
      },
      {
        title: "Shape",
        detail:
          "Structure flows and visual hierarchy; validate the critical path early.",
      },
      {
        title: "Build",
        detail:
          "Implement with calm UI and readable architecture so the next change is not expensive.",
      },
      {
        title: "Hand off",
        detail:
          "Ship, document what matters, and leave a path for iteration — not a frozen demo.",
      },
    ],
    approach:
      "Motion stays on a tight budget. Cards and chrome stay rare. The product should feel precise — the same Ink Studio discipline used on this site.",
  },
  {
    id: "social-media",
    title: "Social Media Management",
    teaser:
      "Channel presence, audience storytelling, and creative direction for brands that need consistency.",
    summary:
      "Steady social presence with coherent voice and visuals — storytelling that compounds, not random posting.",
    overview:
      "Social fails when it is treated as a leftover task. This service sets a sustainable rhythm: voice, visual system, and channel habits that a brand can keep. The work is creative direction plus execution — so the feed reads like one mind, not a pile of unrelated assets.",
    suitedFor: [
      "Brands and creators who need consistency more than one-off viral bets",
      "Teams without an in-house creative lead for social",
      "Launches or seasons that need a clear narrative arc",
      "Accounts that post often but still feel scattered",
    ],
    includes: [
      "Channel audit and positioning notes",
      "Content calendar and posting rhythm",
      "Creative direction for visuals and copy tone",
      "Short-form framing aligned to the brand",
      "Practical review of what is earning attention",
    ],
    process: [
      {
        title: "Listen",
        detail:
          "Review the brand, audience, and current channels — what to keep, cut, or rewrite.",
      },
      {
        title: "System",
        detail:
          "Define voice, formats, and a calendar the team can actually sustain.",
      },
      {
        title: "Ship",
        detail:
          "Produce and publish in a steady cadence with clear creative direction.",
      },
      {
        title: "Tune",
        detail:
          "Adjust based on what people finish watching or engage with — not vanity-only vanity metrics.",
      },
    ],
    approach:
      "No emoji wallpaper, no pill-cluster “growth hacks.” Clarity and rhythm beat noise. The goal is a presence that compounds.",
    proof: [
      {
        src: "/images/services/social-rhythm-still.jpg",
        alt: "Anonymized social content frame showing rhythm structure",
        caption:
          "Anonymized frame — weekly rhythm structure without client marks.",
      },
    ],
  },
  {
    id: "content-creation",
    title: "Content Creation for Business",
    teaser:
      "Scroll-stopping cuts, motion, and captions crafted to earn attention and watch time.",
    summary:
      "Business content built for retention: paced edits, motion, sound, and captions that serve a real offer.",
    overview:
      "Attention is scarce. Business content has to earn the next second — then point somewhere useful. This service focuses on short-form and campaign assets: editing, motion, captions, and pacing that match how people actually watch, while staying tied to an offer or story the business cares about.",
    suitedFor: [
      "Businesses that need content that sells attention for a real product or service",
      "Teams with raw footage or ideas but no finishing craft",
      "Campaigns that need a coherent set of reusable assets",
      "Social-led funnels where watch time matters more than post count",
    ],
    includes: [
      "Short-form video editing with clear pacing",
      "Motion graphics and subtitle treatment",
      "Sound-aware cuts tuned to platform habits",
      "Caption and hook framing for retention",
      "Asset packs reusable across channels",
    ],
    process: [
      {
        title: "Brief",
        detail:
          "Lock the offer, audience, and platform so every cut has a job.",
      },
      {
        title: "Cut",
        detail:
          "Edit for energy and clarity — hooks early, payoffs earned, no filler.",
      },
      {
        title: "Dress",
        detail:
          "Motion, captions, and sound that raise retention without drowning the message.",
      },
      {
        title: "Package",
        detail:
          "Export variants and a small library the business can redeploy.",
      },
    ],
    approach:
      "Content is not decoration. If it does not earn watch time or clarify the offer, it does not ship. Craft stays sharp; gimmicks stay out.",
    proof: [
      {
        src: "/images/services/content-cut-still.jpg",
        alt: "Anonymized content cut frame showing hook and offer structure",
        caption:
          "Anonymized cut frame — hook, pacing, and offer without client marks.",
      },
    ],
  },
  {
    id: "drone-hospital",
    title: "Drone Hospital",
    teaser:
      "Repair, maintenance, consultation, and pilot training — a Kathmandu workshop venture.",
    summary:
      "Workshop services for repair, maintenance, consultation, and training — a venture line, not a co-brand on this site.",
    overview:
      "Drone Hospital Nepal is the Kathmandu workshop I run for drone repair, maintenance, consultation, and pilot training. On this portfolio it appears as a service line — personal brand first, venture second. The work is practical: diagnose before parts, maintain before failures, and teach operators habits that transfer to real flights. Base is in-person in Kathmandu; remote triage is possible when symptoms and aircraft details are clear enough to advise without opening every panel on day one.",
    suitedFor: [
      "Hobby and field operators who need repair or diagnostics",
      "Teams that want maintenance plans rather than one-off fixes",
      "People seeking consultation before buying or expanding a fleet",
      "Learners who want practical pilot training, not theory-only sessions",
    ],
    includes: [
      "Repair and diagnostics — hardware, electronics, firmware/calibration, motors and props (DJI-class and custom builds)",
      "Preventive maintenance — performance checks, cleaning, calibration, battery health guidance",
      "Operator consultation before purchase, expansion, or recurring service plans",
      "Pilot training workshops with practical drills, safety habits, and CAAN-oriented preparation when certification is the goal",
    ],
    process: [
      {
        title: "Assess",
        detail:
          "Understand the aircraft, symptoms, and how you fly — before opening the wrong panel.",
      },
      {
        title: "Service",
        detail:
          "Repair, maintain, or advise with clear next steps and realistic downtime expectations.",
      },
      {
        title: "Train",
        detail:
          "When training is the need, focus on drills and habits that transfer to real flights — not slide-only sessions.",
      },
      {
        title: "Follow up",
        detail:
          "Leave you with maintenance notes or practice cues — not a black-box handoff.",
      },
    ],
    approach:
      "This site does not become a dual-brand marketing home for the workshop. Drone Hospital stays linked and useful — precise, not loud. Say whether you need repair, maintenance, training, or consultation so the next step has a name.",
  },
];
