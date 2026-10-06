export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  skills: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Independent / Product",
    role: "Flutter Developer & UI/UX Designer",
    period: "Present",
    location: "Kathmandu, Nepal",
    bullets: [
      "Design and ship Flutter products including Trackify, a privacy-first finance tracker.",
      "Build delivery and education app surfaces with focus on clarity and performance.",
      "Own end-to-end UI craft: Figma through production micro-interactions.",
    ],
    skills: ["Flutter", "Dart", "UI/UX", "Product design"],
  },
  {
    company: "Drone Hospital Nepal",
    role: "Founder",
    period: "Ongoing",
    location: "Kathmandu, Nepal",
    bullets: [
      "Run a workshop for drone repair, maintenance, and pilot training.",
      "Provide consultation for operators and hobbyists.",
      "Keep the venture framed as a service line — personal portfolio remains primary.",
    ],
    skills: ["Operations", "Training", "Hardware service"],
  },
];
