// Single source of truth for all portfolio content.
// Edit this file to update the site — components only render what is here.

export const profile = {
  name: "Muhammad Shahrob Abbas",
  shortName: "Shahrob",
  initials: "SA",
  role: "Senior Full Stack Engineer",
  location: "Sahiwal, Pakistan",
  timezone: "PKT (UTC+5)",
  email: "shahrobk@gmail.com",
  phone: "+92 306 8635828",
  phoneHref: "tel:+923068635828",
  available: true,
  availability: "Open to senior / lead roles & select freelance work",
  headline: "I design and ship scalable web, mobile and backend products.",
  summary:
    "Senior full stack engineer with 5+ years of experience building production systems end to end — from React and React Native clients to Node.js / NestJS microservices, real-time infrastructure and cloud deployments. I care about clean architecture, measurable performance, and teams that ship with confidence.",
  socials: {
    github: "https://github.com/shahrob",
    linkedin: "https://www.linkedin.com/in/shahrob-abbas/",
    twitter: "https://twitter.com/shahrob_abbas",
    instagram: "https://www.instagram.com/shahrob1",
  },
};

export const metrics = [
  { value: "5+", label: "Years shipping production software" },
  { value: "12+", label: "Web & mobile apps delivered" },
  { value: "10k+", label: "Concurrent users on real-time systems" },
  { value: "40%", label: "Avg. performance gain on optimised apps" },
];

export const about = {
  paragraphs: [
    "I started out writing Android apps in Java, moved into React Native, and grew into owning full products — APIs, data models, infrastructure and the interfaces people actually touch. That path gave me a pragmatic, whole-system view of software.",
    "Today I lead development at Meta Logix Tech, where I architect NestJS / Node.js services, build React and React Native clients, run AWS infrastructure and CI/CD, and mentor a team of developers through code review and pairing.",
    "Outside of work you'll find me travelling the northern mountains of Pakistan or unwinding with a good game.",
  ],
  principles: [
    {
      title: "Architecture first",
      text: "Clear boundaries, typed contracts and boring, reliable infrastructure that scales with the product.",
    },
    {
      title: "Measure, then optimise",
      text: "Profiling, caching and query tuning driven by real numbers — not guesswork.",
    },
    {
      title: "Ship with confidence",
      text: "Automated tests, CI/CD and thoughtful code review so the team can move fast safely.",
    },
    {
      title: "Lift the team",
      text: "Mentoring, documentation and pairing — senior work is making everyone around you better.",
    },
  ],
};

export const experience = [
  {
    role: "Senior Full Stack Developer",
    company: "Meta Logix Tech",
    location: "Pakistan",
    period: "Oct 2023 — Present",
    type: "Full-time",
    summary:
      "Leading development of scalable web and mobile products and the backend platforms behind them.",
    highlights: [
      "Architect microservice backends with NestJS and Express.js; lead a team of 5 developers on major client projects.",
      "Improved application performance by ~40% through profiling, caching and query optimisation.",
      "Introduced automated testing and CI/CD on AWS, cutting production bugs by ~60%.",
      "Mentor junior engineers and own code-review standards across the team.",
    ],
    stack: ["React", "React Native", "Node.js", "NestJS", "MongoDB", "AWS", "Docker", "FastAPI", "Pandas"],
  },
  {
    role: "Node.js Backend Developer",
    company: "Dynamic Logix · Meta Logix Tech",
    location: "Sahiwal",
    period: "Jan 2023 — Oct 2023",
    type: "Full-time",
    summary: "Built and scaled backend services, APIs and real-time features.",
    highlights: [
      "Built a real-time chat system with Socket.io and Redis supporting 10k+ concurrent users.",
      "Reduced API response times by ~35% through schema design and query optimisation (MongoDB, PostgreSQL).",
      "Designed RESTful APIs with JWT auth, validation and third-party integrations.",
    ],
    stack: ["Node.js", "NestJS", "Express.js", "PostgreSQL", "MongoDB", "Redis", "Socket.io", "Docker"],
  },
  {
    role: "Associate Mobile Developer",
    company: "Dynamic Logix",
    location: "Sahiwal",
    period: "Dec 2021 — Jan 2023",
    type: "Full-time",
    summary: "Delivered cross-platform mobile apps from first commit to the app stores.",
    highlights: [
      "Shipped 4 client React Native apps to iOS and Android.",
      "Implemented in-app purchases, payment gateways, maps and location-aware features.",
      "Added real-time features over WebSockets and reduced crashes and load times across devices.",
    ],
    stack: ["React Native", "TypeScript", "Redux", "Firebase", "Google Maps SDK", "WebSockets"],
  },
  {
    role: "Junior React Native Developer",
    company: "Dynamic Logix",
    location: "Sahiwal",
    period: "Dec 2020 — Dec 2021",
    type: "Full-time",
    summary: "Built reusable UI and integrated APIs for cross-platform mobile apps.",
    highlights: [
      "Delivered 4 client apps on schedule with Redux-based state management.",
      "Built a library of reusable, responsive components for iOS and Android.",
    ],
    stack: ["React Native", "JavaScript", "Redux", "REST APIs"],
  },
  {
    role: "Android Developer Intern",
    company: "Dynamic Logix",
    location: "Pakistan",
    period: "Oct 2020 — Dec 2020",
    type: "Internship",
    summary: "Started my career building native Android apps in Java.",
    highlights: ["Contributed to 2 Android applications through development and testing."],
    stack: ["Java", "Android", "SQLite"],
  },
];

export const projects = [
  {
    title: "SoulCalm",
    tagline: "Meditation & mindfulness app",
    description:
      "Cross-platform meditation app with guided sessions, progress tracking, customisable ambient soundscapes and cloud sync across devices.",
    stack: ["React Native", "Node.js", "MongoDB", "Firebase"],
    category: "Mobile",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.soulcalm",
      code: "https://github.com/shahrob/soulcalm",
    },
    accent: ["#6ee7b7", "#3b82f6"],
    featured: true,
  },
  {
    title: "Vision Analytics",
    tagline: "Real-time business dashboard",
    description:
      "Analytics platform with real-time data visualisation, custom report generation and role-based access, backed by PostgreSQL.",
    stack: ["React", "D3.js", "Node.js", "PostgreSQL"],
    category: "Web",
    links: {
      live: "https://vision-analytics.com",
      code: "https://github.com/shahrob/vision-analytics",
    },
    accent: ["#a78bfa", "#ec4899"],
    featured: true,
  },
  {
    title: "Evom",
    tagline: "Full-stack e-commerce platform",
    description:
      "E-commerce solution with product catalogue, cart, order management and secure Stripe payments.",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Full Stack",
    links: { live: "https://evom-store.com", code: "https://github.com/shahrob/evom" },
    accent: ["#fbbf24", "#f97316"],
  },
  {
    title: "WeFix",
    tagline: "Service management app",
    description:
      "Booking and job-tracking app for repair and maintenance services with live status updates over Socket.io.",
    stack: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    category: "Mobile",
    links: { live: "https://wefix-app.com", code: "https://github.com/shahrob/wefix" },
    accent: ["#38bdf8", "#6366f1"],
  },
  {
    title: "EAnimalHub",
    tagline: "Pet care platform",
    description:
      "MERN platform for pet profiles, veterinarian appointments and health tracking.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    category: "Full Stack",
    links: { live: "https://eanimalhub.com", code: "https://github.com/shahrob/eanimalhub" },
    accent: ["#34d399", "#14b8a6"],
  },
  {
    title: "Dynamite Digital",
    tagline: "Agency website",
    description:
      "Modern, responsive marketing site for a digital agency, built for speed and SEO.",
    stack: ["React", "Tailwind CSS", "Node.js"],
    category: "Web",
    links: {
      live: "https://dynamitedigital.com",
      code: "https://github.com/shahrob/dynamite-digital",
    },
    accent: ["#f472b6", "#f43f5e"],
  },
];

export const skills = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript (ES2023)", "Redux", "Tailwind CSS", "HTML / CSS"],
  },
  {
    group: "Mobile",
    items: ["React Native", "Expo", "iOS & Android", "In-app purchases", "Maps & location", "Firebase"],
  },
  {
    group: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "REST", "GraphQL", "Socket.io", "Microservices", "FastAPI"],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Pandas"],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS", "Docker", "CI/CD", "GitHub Actions", "Nginx", "Linux"],
  },
  {
    group: "Practices",
    items: ["System design", "Code review", "Automated testing", "Agile / Scrum", "Mentoring"],
  },
];

export const services = [
  {
    title: "Product engineering",
    text: "Own features end to end — from data model and API to polished UI — across web and mobile.",
  },
  {
    title: "Backend & architecture",
    text: "Design scalable Node.js / NestJS services, real-time systems and clean, well-documented APIs.",
  },
  {
    title: "Performance & reliability",
    text: "Audit slow apps, tune databases and caching, and set up testing and CI/CD that sticks.",
  },
];
