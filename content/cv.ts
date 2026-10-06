export type CvLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type CvExperience = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
};

export type CvProject = {
  title: string;
  href?: string;
  bullets: string[];
};

export type CvSkillGroup = {
  label: string;
  items: string;
};

export const cv = {
  legalName: "Mahesh Dangal",
  displayName: "Samundra Mahesh",
  phone: "+977 9843897396",
  phoneHref: "tel:+9779843897396",
  email: "mahesamun@gmail.com",
  location: "Kathmandu, Nepal",
  summary:
    "Flutter developer and UI/UX designer skilled in building smooth, cross-platform apps with a clean code approach. Passionate about crafting intuitive user experiences and exploring creative content and design strategies.",
  links: [
    {
      label: "Portfolio",
      href: "/",
    },
    {
      label: "Email",
      href: "mailto:mahesamun@gmail.com",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/themundra/",
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/themundra",
      external: true,
    },
  ] as CvLink[],
  skills: [
    {
      label: "Development environment",
      items: "VS Code, Android Studio, Prompt Engineering, Vibe Coding",
    },
    {
      label: "Development",
      items: "Flutter, React Native (low proficiency), FastAPI (mid proficiency)",
    },
    {
      label: "Languages",
      items: "C, C++, Dart, Java, Python, JavaScript",
    },
    {
      label: "Data",
      items: "SQL & NoSQL — PostgreSQL, MySQL, MongoDB",
    },
    {
      label: "Testing",
      items: "Postman, Restfox",
    },
    {
      label: "System design",
      items: "Figma, Eraser.io",
    },
    {
      label: "Social media management",
      items:
        "Channel strategy & positioning, content calendars, brand voice, Instagram / TikTok / YouTube / WhatsApp storytelling, audience growth habits, creative direction, performance review (retention & engagement)",
    },
    {
      label: "Content creation",
      items:
        "Short-form video editing, motion graphics, captions & hooks, sound-aware cuts, campaign asset packs, CapCut / Premiere-style workflows, offer-led scripting, scroll-stopping thumbnails",
    },
    {
      label: "Collaboration",
      items: "GitHub, Slack",
    },
    {
      label: "Concepts",
      items:
        "MVC, Feature First, Clean Patterns, OOP, Domain-Driven Development",
    },
    {
      label: "Non-technical",
      items:
        "Verbal communication, attention to detail, problem solving, leadership",
    },
  ] as CvSkillGroup[],
  experience: [
    {
      company: "Drone Hospital Nepal",
      role: "COO and Software Technician",
      location: "Kathmandu, Nepal",
      period: "Feb 2025 – Present",
      bullets: [
        "Developed and implemented SOPs to streamline repair workflows, improve turnaround time, and keep service quality consistent across technical teams.",
        "Designed and implemented an integrated operations dashboard to monitor service workflows, financial performance, and customer/reference tracking.",
        "Directed content creation for social and marketing — repair and service workflows through visuals and video.",
        "Diagnosed and resolved software-related drone issues; coordinated with hardware technicians for synchronized software-hardware repairs.",
        "Performed firmware flashing, calibrations, and internal-level software repairs for DJI and other drone models.",
      ],
    },
    {
      company: "Reflex IT Solution",
      role: "Flutter Developer",
      location: "Lalitpur, Nepal",
      period: "March 2024 – Feb 2025",
      bullets: [
        "Flutter mobile development with UI/UX design in Figma.",
        "Requirement engineering with teammates and clients to set clear project goals.",
        "Focused on user-friendly, visually coherent interfaces across product surfaces.",
        "Domain experience across ecommerce, resource management, and hotel management systems.",
      ],
    },
    {
      company: "St. Lawrence Secondary School",
      role: "Computer Lab Assistant",
      location: "Kathmandu, Nepal",
      period: "November 2021 – July 2022",
      bullets: [
        "Assisted with installation and maintenance of operating systems, network infrastructure, peripherals, and related hardware/software.",
        "Provided technical support to students and faculty.",
        "Guided software selection for specific tasks.",
        "Instructed C, JavaScript, Python, and HTML/CSS to high school students.",
      ],
    },
  ] as CvExperience[],
  education: {
    degree: "BSc. CSIT — St. Lawrence College, Kathmandu",
    institution: "Tribhuvan University",
    period: "2021 – 2024",
    courses: [
      "Data Structures & Algorithms",
      "Java",
      "Network Programming",
      "Cloud Computing",
      "C# / .NET",
      "Web development (HTML, CSS, JavaScript, PHP)",
    ],
  },
  projects: [
    {
      title: "Trackify",
      href: "/portfolio/trackify",
      bullets: [
        "Privacy-first, end-to-end encrypted personal finance tracker.",
        "Expenses across cash, cards, digital wallets, and bank transfers.",
        "Built with accessibility best practices.",
        "Flutter, Firebase, Hive, Riverpod.",
      ],
    },
    {
      title: "Courier Direct",
      href: "/portfolio/courier-direct",
      bullets: [
        "UI/UX design of a logistics company website.",
        "Tools: Figma.",
      ],
    },
    {
      title: "Ason Bazaar",
      bullets: [
        "UI/UX design for a multivendor ecommerce product.",
        "App design and development.",
        "Tools: Figma and Flutter.",
      ],
    },
    {
      title: "Falano College",
      href: "/portfolio/falanocollege",
      bullets: [
        "Responsive WordPress site with study materials for high school students.",
        "Content management for notes, syllabus, past questions, blogs, and news.",
        "Own project.",
      ],
    },
    {
      title: "Drone Hospital Nepal",
      href: "/services/drone-hospital",
      bullets: [
        "Responsive portfolio site for the company.",
        "Operations dashboard for overall management.",
      ],
    },
  ] as CvProject[],
  /** Optional static file under public/ for direct download */
  downloadHref: "/downloads/Mahesh_Dangal_CV_2026.md",
  downloadLabel: "Download markdown",
} as const;

export const cvPage = {
  eyebrow: "Curriculum vitae",
  headline: "Mahesh Dangal",
  support:
    "Flutter, UI/UX, and operations — roles, skills, education, and selected projects. Print or save as PDF from your browser if you need a file.",
} as const;
