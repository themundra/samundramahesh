export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  skills: string[];
};

/** Home experience accordion — aligned with CV (content/cv.ts). */
export const experience: ExperienceItem[] = [
  {
    company: "Drone Hospital Nepal",
    role: "COO and Software Technician",
    period: "Feb 2025 – Present",
    location: "Kathmandu, Nepal",
    bullets: [
      "Built SOPs and an operations dashboard for repair workflows, finance visibility, and customer/reference tracking.",
      "Led social/content for repair storytelling; handled firmware, calibration, and software-side drone diagnostics alongside hardware teams.",
      "Workshop venture for repair, maintenance, consultation, and practical pilot training.",
    ],
    skills: [
      "Operations",
      "Flutter / dashboards",
      "Firmware & diagnostics",
      "Content",
    ],
  },
  {
    company: "Reflex IT Solution",
    role: "Flutter Developer",
    period: "March 2024 – Feb 2025",
    location: "Lalitpur, Nepal",
    bullets: [
      "Flutter app development with Figma-led UI/UX across ecommerce, resource management, and hotel systems.",
      "Requirement engineering with clients and teammates to lock clear project goals.",
      "Shipped interfaces focused on clarity and maintainable delivery.",
    ],
    skills: ["Flutter", "Figma", "UI/UX", "Requirement engineering"],
  },
  {
    company: "Independent / Product",
    role: "Website & App Design · Creative Services",
    period: "2023–Present",
    location: "Kathmandu, Nepal",
    bullets: [
      "Shipped Trackify (Flutter, Hive, Firebase, Riverpod) — privacy-first finance with encrypted local storage.",
      "Built falanocollege.com and Courier Direct web/UI work; Ason Bazaar multivendor ecommerce design and Flutter development.",
      "Ongoing website, app, social, and business-content engagements end-to-end.",
    ],
    skills: ["Flutter", "WordPress", "Figma", "Creative services"],
  },
  {
    company: "St. Lawrence Secondary School",
    role: "Computer Lab Assistant",
    period: "Nov 2021 – July 2022",
    location: "Kathmandu, Nepal",
    bullets: [
      "Maintained lab OS, network, peripherals, and software; supported students and faculty.",
      "Instructed C, JavaScript, Python, and HTML/CSS to high school students.",
    ],
    skills: ["IT support", "Teaching", "Networking"],
  },
];
