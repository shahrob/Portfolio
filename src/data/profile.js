import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import {
  SiAmazonaws,
  SiAndroid,
  SiApple,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRedis,
  SiRedux,
  SiStripe,
  SiTypescript,
  SiUpwork,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { TbBrandFiverr, TbBrandReactNative } from "react-icons/tb";
import {
  FiBell,
  FiCloud,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiMessageSquare,
  FiPhoneCall,
  FiServer,
  FiSmartphone,
  FiTool,
} from "react-icons/fi";
import resumePdf from "../Assets/Shahrob_Resume.pdf";

// Single source of truth for the site's content. It mirrors the LinkedIn
// profile and the Upwork profile, so update those and this file together.

const UPWORK_URL = "https://www.upwork.com/freelancers/~01589f1d414475058b";
const FIVERR_URL = "https://www.fiverr.com/s/1EKlGDz";

export const profile = {
  name: "Muhammad Shahrob Abbas",
  shortName: "Shahrob",
  role: "Senior Full Stack Developer",
  location: "Sahiwal, Pakistan",
  locationShort: "Sahiwal, PK",
  timeZone: "Asia/Karachi",
  utcOffset: "UTC+5",
  email: "shahrobk@gmail.com",
  phone: "+92 306 8635828",
  phoneHref: "tel:+923068635828",
  availability: "Open to new projects",
  resume: resumePdf,
  github: "https://github.com/shahrob",
  sourceCode: "https://github.com/shahrob/Portfolio",
  currentRole: {
    title: "Senior Full Stack Developer",
    company: "Meta Logix Tech",
    since: "Oct 2022",
  },
  rotatingWords: [
    "SaaS platforms",
    "mobile apps",
    "backend systems",
    "AI-powered products",
  ],
};

export const socials = [
  {
    id: "github",
    label: "GitHub",
    handle: "@shahrob",
    url: "https://github.com/shahrob",
    icon: FaGithub,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "in/shahrob-abbas",
    url: "https://www.linkedin.com/in/shahrob-abbas/",
    icon: FaLinkedinIn,
  },
  {
    id: "upwork",
    label: "Upwork",
    handle: "Freelance profile",
    url: UPWORK_URL,
    icon: SiUpwork,
  },
  {
    id: "fiverr",
    label: "Fiverr",
    handle: "Freelance profile",
    url: FIVERR_URL,
    icon: TbBrandFiverr,
  },
  {
    id: "x",
    label: "X (Twitter)",
    handle: "@shahrob_abbas",
    url: "https://twitter.com/shahrob_abbas",
    icon: FaXTwitter,
  },
  {
    id: "instagram",
    label: "Instagram",
    handle: "@shahrob1",
    url: "https://www.instagram.com/shahrob1",
    icon: FaInstagram,
  },
];

// Freelance platforms where clients can hire me. Shown as "Hire me" links in
// the hero, the services and projects call-to-action bands, the contact
// section and the command menu.
export const hirePlatforms = [
  {
    id: "upwork",
    name: "Upwork",
    url: UPWORK_URL,
    icon: SiUpwork,
    color: "#14a800",
    description:
      "Start a contract for full stack, mobile or AI work, with payments handled by Upwork. My profile has 2 verified client testimonials.",
  },
  {
    id: "fiverr",
    name: "Fiverr",
    url: FIVERR_URL,
    icon: TbBrandFiverr,
    color: "#1dbf73",
    description:
      "Order a gig for web, mobile, backend or AI work, with the scope and price agreed up front and payments handled by Fiverr.",
  },
];

// Profiles other than the hire platforms, for places that show the hire
// platforms separately.
export const otherSocials = socials.filter(
  (social) => !hirePlatforms.some((platform) => platform.id === social.id)
);

// Home page sections, in page order. Used by the navbar, the footer and the
// command menu.
export const sections = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

// Routes from the previous multi-page version of the site. They still render
// the home page and scroll to the matching section, so old links keep working.
export const legacySectionRoutes = {
  "/about": "about",
  "/skills": "stack",
  "/experience": "experience",
  "/services": "services",
  "/testimonials": "recommendations",
  "/stats": "about",
  "/contact": "contact",
};

// Every number here can be checked against the LinkedIn and Upwork profiles.
export const stats = {
  years: {
    value: "6+",
    label: "Years building web, mobile and backend products",
  },
  apps: {
    value: "3",
    label: "Apps live on the App Store and Google Play",
  },
};

export const about = {
  focus: {
    title: "AI features in production apps",
    text: "LLM integrations, RAG pipelines, embeddings and vector search with pgvector.",
  },
  education: {
    degree: "Bachelor's degree in Computer Science",
    school: "University of Sahiwal",
    period: "2017 – 2021",
  },
  venture: {
    name: "Khurshid Dairy",
    summary:
      "My own D2C desi ghee business. I built and run the online store end to end.",
    url: "https://khurshiddairy.online",
  },
  interests: ["Playing games", "Travelling"],
  motto: "Strive to build things that make a difference!",
};

export const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "Meta Logix Tech",
    location: "Sahiwal, Pakistan",
    period: "Oct 2022 – Present",
    type: "Full-time",
    current: true,
    summary:
      "Senior Full Stack Developer building FinTech, SaaS, marketplace and e-commerce products.",
    achievements: [
      "Built Node.js/NestJS microservices and REST APIs with PostgreSQL, MongoDB and Redis",
      "Built React, Next.js and React Native apps for web, iOS and Android",
      "Integrated Stripe subscriptions, Yapily open banking and HMRC (Making Tax Digital) APIs",
      "Built an AI image search: LLM image descriptions, embeddings and pgvector similarity search",
      "Fixed cross-country WebRTC audio/video calling with TURN server setup",
      "Built a financial market data platform using S&P Global APIs",
      "Deployed and maintained apps on AWS (EC2, S3) with Docker and CI/CD",
    ],
    technologies: [
      "Node.js",
      "NestJS",
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "PostgreSQL",
      "pgvector",
      "MongoDB",
      "Redis",
      "Stripe",
      "Yapily Open Banking",
      "WebRTC",
      "AWS (EC2, S3)",
      "Docker",
      "CI/CD",
    ],
  },
  {
    title: "Application Developer (React Native)",
    company: "Dynamic Logix",
    location: "Sahiwal, Pakistan",
    period: "Oct 2020 – Oct 2022",
    type: "Full-time",
    current: false,
    summary: "React Native mobile app developer for iOS and Android.",
    achievements: [
      "Built and shipped React Native apps to Google Play and the App Store",
      "Built reusable, scalable UI components and integrated REST APIs",
      "Implemented Firebase, push notifications, authentication and payment gateways",
      "Optimized app performance and managed iOS and Android production releases",
      "Started as an Android developer (Java) before moving to React Native",
    ],
    technologies: [
      "React Native",
      "JavaScript",
      "Redux",
      "Firebase",
      "Push Notifications",
      "REST APIs",
      "Android (Java)",
    ],
  },
];

// Client and product work, in the same order as the Projects section on
// LinkedIn. `highlight` marks the projects shown on the home page.
export const projects = [
  {
    name: "MMAREKANI",
    tagline: "B2B Marketplace, AI Image Search & WebRTC",
    role: "Backend Developer",
    category: "Backend & APIs",
    highlight: true,
    description:
      "B2B marketplace connecting buyers and suppliers directly. Restructured and stabilised the backend, then built real-time messaging (text, image and voice), WebRTC audio calling, FCM and PushKit notifications, and an AI image search pipeline: product images are described by an LLM, converted to embeddings and matched with similarity search in PostgreSQL.",
    pipeline: [
      "Product image",
      "LLM description",
      "Embeddings",
      "Similarity search in PostgreSQL",
    ],
    highlights: [
      { icon: FiMessageSquare, text: "Real-time messaging: text, image and voice" },
      { icon: FiPhoneCall, text: "WebRTC audio calling" },
      { icon: FiBell, text: "FCM and PushKit notifications" },
      { icon: FiTool, text: "Backend restructured and stabilised" },
    ],
    techStack: [
      "Node.js",
      "PostgreSQL",
      "RAG",
      "AI Embeddings",
      "WebRTC",
      "Socket.IO",
      "Firebase FCM",
      "Apple PushKit",
    ],
    links: [],
  },
  {
    name: "InvoiceMe",
    tagline: "Open Banking Invoicing SaaS",
    role: "Full Stack Developer / Open Banking & SaaS Engineer",
    category: "Backend & APIs",
    highlight: true,
    description:
      "Backend services for a web-based invoicing SaaS: invoice creation, email delivery, banking integrations and automated invoicing workflows. Researched and integrated Yapily Open Banking, Sumsub identity verification and scheduled backend jobs.",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Yapily Open Banking",
      "Sumsub",
      "Cron Jobs",
    ],
    links: [{ label: "Live Site", url: "https://invoiceme.today" }],
  },
  {
    name: "UK Tax SaaS",
    tagline: "HMRC, Open Banking & Stripe",
    role: "Backend Developer",
    category: "Backend & APIs",
    highlight: true,
    description:
      "Backend services for Making Tax Digital Simple, a UK tax SaaS with Admin, Bookkeeper, Accountant and Client roles. Integrated HMRC for VAT and tax workflows, Yapily Open Banking for consent-based payments, Sumsub verification, Stripe subscriptions, email services and cron jobs.",
    techStack: [
      "Node.js",
      "Express.js",
      "Mongoose",
      "HMRC APIs",
      "Yapily",
      "Sumsub",
      "Stripe",
    ],
    links: [{ label: "Live Site", url: "https://makingtaxdigitalsimple.com" }],
  },
  {
    name: "WAZIN",
    tagline: "GCC Financial Markets App Backend",
    role: "Backend Developer",
    category: "Backend & APIs",
    description:
      "Backend services for a GCC financial-market mobile app, integrating S&P Global APIs for companies, listings, tickers, sectors, market indices and market performance. Built secure authentication, real-time communication, push notifications and cloud media storage.",
    techStack: [
      "Node.js",
      "Express.js",
      "S&P Global APIs",
      "JWT",
      "Firebase Cloud Messaging",
      "Socket.IO",
      "AWS S3",
    ],
    links: [],
  },
  {
    name: "Vissioon",
    tagline: "Multi-Tenant Coaching SaaS",
    role: "Backend Developer",
    category: "Backend & APIs",
    highlight: true,
    description:
      "Backend services for a multi-tenant SaaS for coaches built on microservices: three applications and databases serving Admin, Sub-Admin, Coach, Client and Sub-Client workflows. Implemented Stripe subscriptions, coach website creation, client payment plans, programs, portals, calendar events, email templates and community features.",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React",
      "Microservices",
      "Stripe",
    ],
    links: [{ label: "Live Site", url: "https://vissioon.co" }],
  },
  {
    name: "FrogEater",
    tagline: "iOS App Backend & AI Verification",
    role: "Backend Developer",
    category: "Backend & APIs",
    description:
      "Backend for an iOS app with Apple Sign-In, In-App Purchases and access control. Built AI-powered before/after image verification for task completion, with image URLs that expire after 15 minutes to protect uploads.",
    techStack: [
      "Node.js",
      "Apple Sign-In",
      "In-App Purchases",
      "AI Image Analysis",
    ],
    links: [],
  },
  {
    name: "OphthoWorld",
    tagline: "Online Exam Platform",
    role: "Backend Developer",
    category: "Backend & APIs",
    description:
      "Ophthalmology training and assessment platform for residents preparing for OKAP, ABO, Royal College and ICO exams, with 2,500+ board-style questions across 11 subspecialties. Owned the backend from requirements and ERD design through assessment statistics, first-attempt leaderboards, rankings, Moyasar payments, PDF invoices and email workflows.",
    techStack: ["Node.js", "Express.js", "MongoDB", "JWT", "Joi", "Moyasar"],
    links: [],
  },
  {
    name: "LA Moving Star",
    tagline: "Logistics Platform Backend",
    role: "Backend Developer",
    category: "Backend & APIs",
    description:
      "Backend services for a logistics tracking platform supporting Admin, Company, Client, Foreman, Salesman and Driver workflows. Implemented Google Calendar OAuth so users can connect their calendars and create events from the application.",
    techStack: [
      "Node.js",
      "Express.js",
      "SQL",
      "Sequelize",
      "Google Calendar API",
      "Google Maps",
    ],
    links: [{ label: "Live Site", url: "https://client.lamovingstar.com" }],
  },
  {
    name: "DONE",
    tagline: "Task Management App",
    role: "React Native & Backend Developer",
    category: "Full Stack",
    description:
      "Web and mobile task and performance management platform. Contributed to both the React Native app and the backend: UI, state management, API integration, task management and performance tracking across iOS, Android and web.",
    techStack: [
      "React Native",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "REST APIs",
      "Microservices",
    ],
    links: [{ label: "Live Site", url: "https://doneworkspace.com" }],
  },
  {
    name: "Khurshid Dairy",
    tagline: "Full-Stack E-Commerce Store",
    role: "Founder & Full-Stack Engineer",
    category: "Full Stack",
    highlight: true,
    description:
      "My own D2C desi ghee business: a complete live e-commerce platform built with Next.js, backend APIs, Redux state management, MongoDB Atlas and Nodemailer email notifications, with a cost-efficient deployment on Vercel and managed services.",
    techStack: ["Next.js", "Redux", "MongoDB Atlas", "Nodemailer", "Vercel"],
    links: [{ label: "Live Site", url: "https://khurshiddairy.online" }],
  },
  {
    name: "CalmVibe",
    tagline: "Meditation & Habit Tracker App",
    role: "React Native Developer",
    category: "Mobile Apps",
    highlight: true,
    description:
      "Meditation and habit tracker app with meditation tracks, a habit tracker, daily quotes and daily notes. Handled UI development, state management, API integration and cross-platform optimisation for iOS and Android.",
    techStack: [
      "React Native",
      "JavaScript",
      "iOS",
      "Android",
      "In-App Purchases",
    ],
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.calmvibe.app",
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/calmvibe-meditation-and-habit/id6450288489",
      },
    ],
  },
  {
    name: "SoulCalm",
    tagline: "Meditation App for iOS & Android",
    role: "React Native Developer",
    category: "Mobile Apps",
    description:
      "Meditation app offering a range of meditation tracks with an intuitive interface. Handled UI development, state management, API integration and smooth cross-platform performance on iOS and Android.",
    techStack: [
      "React Native",
      "JavaScript",
      "iOS",
      "Android",
      "In-App Purchases",
    ],
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.coachingoflife.app",
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/pk/app/soulcalm-relax-meditation/id1643130857",
      },
    ],
  },
  {
    name: "Postit",
    tagline: "Dental App for iOS & Android",
    role: "React Native Developer",
    category: "Mobile Apps",
    description:
      "Spanish-language dental app for a Spain-based client with Admin and Client workflows. Built the mobile UI, API integration, state management and cross-platform functionality in React Native.",
    techStack: ["React Native", "JavaScript", "iOS", "Android"],
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.p.postit",
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/post-it/id1628257892",
      },
    ],
  },
  {
    name: "The Source Clone",
    tagline: "Personal Development App",
    role: "React Native Developer",
    category: "Mobile Apps",
    description:
      "In-house React Native clone of 'The Source' app, focused on UI development, state management and API integration, optimised for both iOS and Android.",
    techStack: ["React Native", "JavaScript", "iOS", "Android"],
    links: [],
  },
];

export const projectCategories = ["Backend & APIs", "Full Stack", "Mobile Apps"];

// Mirrors the "Technical Expertise" list on Upwork and the skills on LinkedIn.
export const skills = [
  {
    id: "ai",
    title: "AI",
    featured: true,
    icons: [{ icon: SiOpenai }, { icon: FiCpu }],
    items: [
      "OpenAI",
      "LLM Integration",
      "RAG",
      "AI Agents",
      "Chatbots",
      "Embeddings",
      "Vector Search",
      "pgvector",
      "Prompt Engineering",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icons: [
      { icon: SiReact, color: "#61DAFB" },
      { icon: SiNextdotjs },
      { icon: SiTypescript, color: "#3178C6" },
    ],
    items: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Responsive UI",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icons: [
      { icon: SiNodedotjs, color: "#5FA04E" },
      { icon: SiNestjs, color: "#E0234E" },
      { icon: SiExpress },
    ],
    items: [
      "Node.js",
      "NestJS",
      "Express.js",
      "REST APIs",
      "Microservices",
      "Webhooks",
      "JWT",
      "OAuth",
      "RBAC",
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    icons: [
      { icon: TbBrandReactNative, color: "#61DAFB" },
      { icon: SiAndroid, color: "#34A853" },
      { icon: SiApple },
    ],
    items: [
      "React Native",
      "Android (Java)",
      "iOS",
      "Redux Toolkit",
      "React Navigation",
      "Push Notifications",
      "WebRTC",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icons: [
      { icon: SiPostgresql, color: "#4169E1" },
      { icon: SiMongodb, color: "#47A248" },
      { icon: SiRedis, color: "#DC382D" },
    ],
    items: ["PostgreSQL", "MongoDB", "Redis", "SQL", "Mongoose"],
  },
  {
    id: "payments",
    title: "Payments & Integrations",
    icons: [{ icon: SiStripe, color: "#635BFF" }],
    items: [
      "Stripe",
      "Open Banking (Yapily)",
      "HMRC & FBR APIs",
      "Subscriptions",
      "Third-Party APIs",
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    icons: [
      { icon: SiAmazonaws, color: "#FF9900" },
      { icon: SiDocker, color: "#2496ED" },
      { icon: SiVercel },
      { icon: SiNginx, color: "#009639" },
    ],
    items: ["AWS EC2 & S3", "Docker", "Git", "CI/CD", "Vercel", "Linux", "Nginx"],
  },
  {
    id: "tools",
    title: "Tools",
    icons: [
      { icon: SiVisualstudiocode, color: "#007ACC" },
      { icon: SiFigma, color: "#F24E1E" },
      { icon: SiPostman, color: "#FF6C37" },
    ],
    items: [
      "macOS",
      "VS Code",
      "Android Studio",
      "Xcode",
      "Postman",
      "Figma",
      "GitHub",
      "Slack",
      "Trello",
      "Jira",
      "Notion",
    ],
  },
];

// The scrolling tech strip in the hero.
export const marqueeStack = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "Express.js", icon: SiExpress },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "OpenAI / LLMs", icon: SiOpenai },
  { name: "Stripe", icon: SiStripe, color: "#635BFF" },
  { name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Java", icon: DiJava, color: "#ED8B00" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
];

// Mirrors the "Core Services" list on Upwork.
export const services = [
  {
    icon: FiLayers,
    title: "Full Stack & SaaS Development",
    hue: "violet",
    description:
      "Web apps, SaaS platforms, dashboards and portals with React.js, Next.js, Node.js, NestJS and TypeScript.",
    features: [
      "SaaS Products & Startup MVPs",
      "Multi-Tenant Platforms",
      "Dashboards & Admin Panels",
      "B2B Marketplaces & E-Commerce",
      "CRM Systems & Business Automation",
      "Payment & Subscription Integrations",
    ],
  },
  {
    icon: FiSmartphone,
    title: "Mobile App Development",
    hue: "blue",
    description:
      "iOS and Android apps with React Native: authentication, API integration, push notifications, WebRTC calling and maintainable architecture.",
    features: [
      "Cross-Platform iOS & Android Apps",
      "Authentication & API Integration",
      "Push Notifications",
      "WebRTC Video/Voice Calling",
      "In-App Purchases",
      "App Store & Google Play Releases",
    ],
  },
  {
    icon: FiCpu,
    title: "AI Applications & Automation",
    hue: "pink",
    description:
      "AI agents, LLM integrations, RAG pipelines, embeddings, vector search and automated workflows.",
    features: [
      "AI Agents & Chatbots",
      "LLM Integrations (OpenAI and other providers)",
      "RAG Pipelines",
      "Embeddings & Vector Search (pgvector)",
      "AI-Powered Image Search",
      "Workflow Automation",
    ],
  },
  {
    icon: FiServer,
    title: "Backend & API Engineering",
    hue: "emerald",
    description:
      "Secure REST APIs, auth, RBAC, microservices and scalable architecture with Node.js, NestJS and Express.js.",
    features: [
      "REST APIs & Webhooks",
      "Authentication, JWT & OAuth",
      "Role-Based Access Control",
      "Microservices Architecture",
      "Real-Time Chat, Messaging & Notifications",
      "Stripe, Open Banking & Third-Party Integrations",
    ],
  },
  {
    icon: FiDatabase,
    title: "Database Design & Performance",
    hue: "amber",
    description:
      "PostgreSQL (pgvector), MongoDB, Redis, data modeling, query optimization, caching and background jobs.",
    features: [
      "Data Modeling",
      "PostgreSQL & pgvector",
      "MongoDB & Mongoose",
      "Redis Caching",
      "Query Optimization",
      "Background Jobs",
    ],
  },
  {
    icon: FiCloud,
    title: "Deployment & DevOps",
    hue: "cyan",
    description:
      "AWS (EC2, S3), Docker, CI/CD, Nginx, Linux, Git workflows and production deployment.",
    features: [
      "AWS EC2 & S3",
      "Docker",
      "CI/CD Pipelines",
      "Nginx & Linux",
      "Git Workflows",
      "Production Deployment",
    ],
  },
];

// Only real, checkable feedback: these point to the recommendations and
// testimonials published on LinkedIn and Upwork.
export const recommendations = [
  {
    id: "linkedin",
    icon: FaLinkedinIn,
    color: "#0A66C2",
    count: 3,
    title: "LinkedIn recommendations",
    summary:
      "3 recommendations on my LinkedIn profile from people I have worked with.",
    linkLabel: "Read on LinkedIn",
    url: "https://www.linkedin.com/in/shahrob-abbas/",
  },
  {
    id: "upwork",
    icon: SiUpwork,
    count: 2,
    color: "#14A800",
    title: "Upwork testimonials",
    summary:
      "2 verified testimonials on my Upwork profile for full stack web and mobile work.",
    linkLabel: "Read on Upwork",
    url: UPWORK_URL,
  },
];

export const projectTypes = [
  "Full Stack / SaaS Web App",
  "Mobile App (React Native)",
  "AI / LLM Integration",
  "Backend & API",
  "Database Design & Performance",
  "Deployment & DevOps",
  "Other",
];
