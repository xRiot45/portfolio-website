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
    "Next.js": "logos:nextjs",
    "React Native": "devicon:reactnative",
    "Node.js": "logos:nodejs",
    "Express.js": "devicon:express",
    NestJS: "logos:nestjs",
    Laravel: "logos:laravel",
    "Tailwind CSS": "logos:tailwindcss",
    "Inertia.js": "thesvg-color:inertia",
    "Vue.js": "logos:vue",

    // Mobile
    Expo: "logos:expo",
    NativeWind: "logos:tailwindcss",
    "Expo EAS": "logos:expo",

    // Backend & data
    "REST API design": "mdi:api",
    MySQL: "logos:mysql",
    PostgreSQL: "logos:postgresql",
    TypeORM: "mdi:database-cog-outline",
    "Sequelize ORM": "mdi:database-search-outline",
    "Modular Monolith Architecture": "mdi:cube-outline",

    // Quality
    Jest: "logos:jest",
    Supertest: "mdi:test-tube",
    Mocha: "logos:mocha",
    Chai: "logos:chai",
    ESLint: "logos:eslint",
    Prettier: "logos:prettier",
    Husky: "mdi:dog",
    Commitlint: "mdi:git-commit",
    Playwright: "logos:playwright",

    // Tooling
    Git: "logos:git-icon",
    GitHub: "logos:github-icon",
    Docker: "logos:docker-icon",
    Vercel: "logos:vercel",
    "Cloudflare R2": "logos:cloudflare",
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
