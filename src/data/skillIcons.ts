import { skillGroups } from "./cv";

export type Skill = {
    name: string;
    icon: string;
};

export const skillIcon: Record<string, string> = {
    // Core
    JavaScript: "logos:javascript",
    TypeScript: "devicon:typescript",
    PHP: "logos:php",
    "React.js": "logos:react",
    "Next.js": "devicon:nextjs",
    "React Native": "devicon:reactnative",
    "Node.js": "logos:nodejs",
    "Express.js": "devicon:express",
    NestJS: "logos:nestjs",
    Laravel: "logos:laravel",
    "Tailwind CSS": "devicon:tailwindcss",
    "Inertia.js": "thesvg-color:inertia",
    "Vue.js": "logos:vue",
    Bun: "material-icon-theme:bun",
    "Elysia.js": "skill-icons:elysia-dark",
    Fumadocs: "selfhst:fumadocs",

    // Mobile
    Expo: "devicon:expo",
    NativeWind: "thesvg-color:nativewind",
    "Expo EAS": "logos:expo",

    // Backend & data
    "REST API design": "mdi:api",
    MySQL: "logos:mysql",
    PostgreSQL: "devicon:postgresql",
    TypeORM: "logos:typeorm",
    "Sequelize ORM": "material-icon-theme:sequelize",
    "Modular Monolith Architecture": "mdi:cube-outline",

    // Quality
    Jest: "logos:jest",
    Supertest: "mdi:test-tube",
    Mocha: "logos:mocha",
    Chai: "logos:chai",
    ESLint: "logos:eslint",
    Prettier: "logos:prettier",
    Husky: "file-icons:husky",
    Commitlint: "material-icon-theme:commitlint",
    Playwright: "logos:playwright",

    // Tooling
    Git: "logos:git-icon",
    GitHub: "logos:github-icon",
    Docker: "logos:docker-icon",
    Vercel: "logos:vercel",
    "Cloudflare R2": "devicon:cloudflare",
    "CI/CD": "mdi:truck-fast",
    Linux: "logos:linux-tux",
    Postman: "logos:postman",
    Figma: "logos:figma",

    // Exploring
    Golang: "logos:go",
    Prisma: "logos:prisma",
    Rust: "logos:rust",
    "Java Spring Boot": "logos:spring-icon",

    // Project stack extras
    Sequelize: "logos:sequelize",
    Midtrans: "simple-icons:midtrans",
    "Backend API": "mdi:server-outline",
    "UI Design": "mdi:palette-outline",
    "Hackathon MVP": "mdi:rocket-launch-outline",
};

/** Flatten skillGroups into a deduped list of { name, icon } preserving order. */
export const flatSkills: Skill[] = (() => {
    const seen = new Set<string>();
    const out: Skill[] = [];
    for (const group of skillGroups) {
        for (const name of group.items) {
            if (seen.has(name)) continue;
            seen.add(name);
            out.push({ name, icon: skillIcon[name] ?? "mdi:code-tags" });
        }
    }
    return out;
})();
