export type Service = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    id: "flutter",
    title: "Flutter apps",
    summary:
      "Mobile products with clean architecture, solid performance, and UI that feels intentional.",
    bullets: [
      "App architecture and feature delivery",
      "Local storage, sync, and analytics surfaces",
      "Release packaging for Android distribution",
    ],
  },
  {
    id: "uiux",
    title: "UI / UX",
    summary:
      "Figma systems, prototypes, and case-study-ready interfaces for mobile products.",
    bullets: [
      "Information architecture and flows",
      "High-fidelity mobile UI and prototypes",
      "Accessible, calm interaction patterns",
    ],
  },
  {
    id: "drone-hospital",
    title: "Drone Hospital",
    summary:
      "A workshop venture for drone repair, maintenance, consultation, and pilot training — not a co-equal brand on this site.",
    bullets: [
      "Repair and diagnostics",
      "Maintenance and consultation",
      "Pilot training workshops",
    ],
  },
];
