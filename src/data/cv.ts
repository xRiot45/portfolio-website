import type { ImageMetadata } from "astro";
import tirtavaraThumb from "../assets/projects/tirtavara.webp";
import rasaBorneoThumb from "../assets/projects/rasaborneo.webp";
import expressJsCliThumb from "../assets/projects/express-js-cli.webp";
import goparkirThumb from "../assets/projects/goparkir.webp";
import elysiaJsCliThumb from "../assets/projects/elysia-js-cli.webp";
import rumahkodingkuThumb from "../assets/projects/rumahkodingku.webp";
import nestjsModularMonolithStarterKitThumb from "../assets/projects/nestjs-modular-monolith.webp";
import tradeJournalBackendThumb from "../assets/projects/trade-journal-backend.webp";
import tradeJournalFrontendThumb from "../assets/projects/trade-journal-frontend.webp";
import digipagesThumb from "../assets/projects/digipages.webp";

export type SkillGroup = {
    eyebrow: string;
    title: string;
    items: string[];
};

export type ExperienceItem = {
    role: string;
    org: string;
    period: string;
    location: string;
    type: string;
    bullets: string[];
};

export type ProjectItem = {
    name: string;
    tagline: string;
    stack: string[];
    link?: string;
    thumbnail: ImageMetadata;
};

export const profile = {
    name: "Thomas Alberto",
    title: "Full-Stack Software Engineer",
    location: "Putussibau, Kalimantan Barat, Indonesia",
    email: "tomasalberto527@gmail.com",
    phone: "+62 822 5264 8923",
    linkedin: "https://linkedin.com/in/thomasalberto",
    github: "https://github.com/xRiot45",
    githubHandle: "github.com/xRiot45",
    site: "https://thomasalbertodev.vercel.app",
    summary:
        "Full-Stack Software Engineer specializing in the JavaScript / TypeScript ecosystem - React, Next.js, NestJS, React Native. I ship production systems end-to-end, from schema to deploy",
    longSummary:
        "Full-Stack Software Engineer specializing in the JavaScript/TypeScript ecosystem (React, Next.js, NestJS, React Native) with a track record of shipping production systems end-to-end. Maintained public-service SKCK Online infrastructure across 14 police locations in West Kalimantan and published an open-source CLI tool with 1,500+ npm downloads. Founder and full-time engineer at RumahKodingku. Information Systems graduate with a 3.86 / 4.00 GPA",
} as const;

export const stats = [
    { value: "3+", label: "Years shipping production code" },
    { value: "1,500+", label: "npm downloads on Express JS CLI" },
    { value: "14", label: "Police locations kept running" },
    { value: "3.86", label: "GPA, Information Systems" },
] as const;

export const skillGroups: SkillGroup[] = [
    {
        eyebrow: "01 · Core",
        title: "Languages & frameworks",
        items: [
            "JavaScript",
            "TypeScript",
            "PHP",
            "React.js",
            "Next.js",
            "React Native",
            "Node.js",
            "Express.js",
            "NestJS",
            "Laravel",
            "Tailwind CSS",
        ],
    },
    {
        eyebrow: "02 · Mobile",
        title: "Mobile engineering",
        items: ["React Native", "Expo", "NativeWind", "Expo EAS"],
    },
    {
        eyebrow: "03 · Backend & data",
        title: "Backend & data",
        items: ["REST API design", "MySQL", "PostgreSQL", "TypeORM", "Sequelize ORM", "Modular Monolith Architecture"],
    },
    {
        eyebrow: "04 · Quality",
        title: "Testing & quality",
        items: ["Jest", "Supertest", "Mocha", "Chai", "ESLint", "Prettier", "Husky", "Commitlint", "Playwright"],
    },
    {
        eyebrow: "05 · Tooling",
        title: "DevOps & tools",
        items: ["Git", "GitHub", "Docker", "Vercel", "Cloudflare R2", "CI/CD", "Linux", "Postman", "Figma"],
    },
    {
        eyebrow: "06 · Exploring",
        title: "Currently learning",
        items: ["Golang", "Prisma", "Rust", "Java Spring Boot"],
    },
];

export const experience: ExperienceItem[] = [
    {
        role: "Founder & Software Engineer",
        org: "RumahKodingku",
        period: "Apr 2024 — Present",
        location: "Own company",
        type: "Full-time",
        bullets: [
            "Founded and lead engineering, shipping production web and mobile products with Next.js, React Native, TypeScript, NestJS, and Tailwind CSS.",
            "Built and sell NestJS Modular Monolith Starter Premium, a paid backend boilerplate with a production-ready modular-monolith architecture.",
            "Developed Tirtavara, an offline-first hydroponic farm management app covering installations, planting cycles, water quality, reminders, pests, harvests, and finances.",
            "Built and maintain the RumahKodingku website — responsive UI, SEO, and production deployment.",
            "Design and implement backend services and APIs in NestJS, following modular architecture and reusable-component principles.",
            "Manage Git, Docker, Vercel, Cloudflare R2, and CI/CD across dev, staging, and production.",
        ],
    },
    {
        role: "IT Support SKCK Online System",
        org: "PT. Dasa Aprilindo Sentosa",
        period: "Jul 2025 — Dec 2025",
        location: "Pontianak, Kalimantan Barat",
        type: "Contract",
        bullets: [
            "Performed preventive and corrective maintenance of hardware and software for the SKCK Online system at the Provincial Police Headquarters and 13 district police stations across West Kalimantan.",
            "Managed system installation, configuration, and updates to keep the SKCK issuance process running without interruption.",
            "Handled remote troubleshooting for 30+ field operators, reducing downtime caused by technical or human error.",
            "Conducted technical audits of IT infrastructure across West Kalimantan to standardize device performance against public-service requirements.",
        ],
    },
    {
        role: "Freelance Web Developer",
        org: "Self Employed",
        period: "Nov 2023 — Present",
        location: "Putussibau, Kalimantan Barat",
        type: "Side work",
        bullets: [
            "Developed web solutions for 5+ clients, including the government sector, improving digital visibility and public access to information.",
            "Translated client business needs into technical specifications and functional interface designs before development.",
            "Implemented responsive, mobile-first UI code focused on load-time optimization.",
            "Ensured application quality through cross-browser testing and debugging across major browsers and device sizes.",
        ],
    },
    {
        role: "Full-Stack Web Developer & UI Designer Intern",
        org: "PT. Kreasi Putra Hotama",
        period: "Aug 2024 — Nov 2024",
        location: "Pontianak, Kalimantan Barat",
        type: "Academic internship",
        bullets: [
            "Developed two web applications — a fintech platform and a company-profile site — end-to-end as the sole developer.",
            "Designed system architecture and database schemas (ERD) using Laravel 11 for the backend and React.js (TypeScript) for the frontend.",
            "Owned the full UI/UX design process in Figma and translated designs directly into functional code.",
            "Managed the project timeline independently to ship key features on schedule.",
        ],
    },
    {
        role: "Co-Founder & Lead Creative & UI Designer",
        org: "Digipages",
        period: "Sep 2022 — Jan 2024",
        location: "Pontianak, Kalimantan Barat",
        type: "Part-time, alongside studies",
        bullets: [
            "Led the digital product design cycle from wireframe to high-fidelity prototype, contributing to increased user engagement and retention.",
            "Translated user pain points into intuitive UI solutions through lightweight UX research.",
            "Collaborated with the developer team to keep designs aligned with technical and business requirements.",
        ],
    },
];

export const projects: ProjectItem[] = [
    {
        name: "Tirtavara",
        tagline: "Offline-first hydroponic farm management app",
        link: "https://tirtavara.id",
        stack: ["React Native", "Expo", "TypeScript", "NativeWind"],
        thumbnail: tirtavaraThumb,
    },
    {
        name: "RumahKodingku",
        tagline: "Official Website RumahKodingku",
        link: "https://rumahkodingku.com",
        stack: ["Next.js", "Tailwind CSS", "TypeScript"],
        thumbnail: rumahkodingkuThumb,
    },
    {
        name: "NestJS Modular Monolith Premium Starter Kit",
        tagline: "Official Website & Web documentation for nestjs modular monolith starter kit",
        link: "https://nestjs-modular-monolith-website.vercel.app",
        stack: ["Next.js", "Tailwind CSS", "TypeScript", "NestJS", "Fumadocs"],
        thumbnail: nestjsModularMonolithStarterKitThumb,
    },
    {
        name: "RasaBorneo",
        tagline: "Multi-merchant food ordering platform",
        stack: ["React.js", "Laravel", "MySQL", "Inertia.js"],
        thumbnail: rasaBorneoThumb,
    },
    {
        name: "Express JS CLI",
        tagline: "Open-source RESTful API project scaffolder with Express JS Framework",
        link: "https://www.npmjs.com/package/express-api-cli-tool",
        stack: ["Node.js", "Express.js", "JavaScript"],
        thumbnail: expressJsCliThumb,
    },
    {
        name: "Elysia JS CLI",
        tagline: "Open-source RESTful API project scaffolder with Elysia JS Framework",
        link: "https://www.npmjs.com/package/elysia-js-cli",
        stack: ["Bun", "Elysia.js", "TypeScript"],
        thumbnail: elysiaJsCliThumb,
    },
    {
        name: "Trade Journal RESTful API",
        tagline: "Trading journal application REST API",
        stack: ["NestJS", "Node.js", "MySQL", "TypeScript"],
        thumbnail: tradeJournalBackendThumb,
    },
    {
        name: "Trade Journal Web Application",
        tagline: "Trading journal web application",
        stack: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
        thumbnail: tradeJournalFrontendThumb,
    },
    {
        name: "GoParkir",
        tagline: "Digital parking management system",
        stack: ["NestJS", "Figma", "Vue.js"],
        thumbnail: goparkirThumb,
    },
    {
        name: "Digipages",
        tagline: "A mobile app for finding nearby items in our vicinity.",
        stack: ["Figma"],
        thumbnail: digipagesThumb,
    },
];

export const education = [
    {
        degree: "Diploma (D3), Information Systems",
        org: "Universitas Bina Sarana Informatika",
        period: "Sep 2022 — Aug 2025",
        location: "Pontianak, Kalimantan Barat",
        detail: "GPA 3.86 / 4.00",
    },
    {
        degree: "Cybersecurity Independent Study",
        org: "Celerates School",
        period: "Feb 2024 — Jul 2024",
        location: "Pontianak, Kalimantan Barat",
        detail: "Achievement score 89.67 / 100",
    },
] as const;

export const certifications = [
    {
        name: "Certified Program Analyst",
        org: "Badan Nasional Sertifikasi Profesi (BNSP)",
        period: "2025 — 2028",
    },
    {
        name: "Certified Programmer",
        org: "Badan Nasional Sertifikasi Profesi (BNSP)",
        period: "2024 — 2027",
    },
    {
        name: "Certified Junior Office Operator",
        org: "Badan Nasional Sertifikasi Profesi (BNSP)",
        period: "2023 — 2026",
    },
] as const;

export const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
] as const;
