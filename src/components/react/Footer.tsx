import { navLinks, profile } from "../../data/cv";

const columns = [
    {
        eyebrow: "Navigate",
        links: navLinks.map((l) => ({ label: l.label, href: l.href })),
    },
    {
        eyebrow: "Connect",
        links: [
            { label: "GitHub", href: profile.github },
            { label: "LinkedIn", href: profile.linkedin },
            { label: "Email", href: `mailto:${profile.email}` },
        ],
    },
    {
        eyebrow: "Based in",
        links: [{ label: profile.location, href: "#top" }],
    },
];

export default function Footer() {
    return (
        <footer className="bg-canvas px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-(--container-page)">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <p className="text-body-sm-strong text-ink">
                            Thomas Alberto<span className="text-link">.</span>
                        </p>
                        <p className="text-body-sm mt-2 max-w-xs text-body">
                            Full-stack software engineer building for the web, mobile, and the teams behind them.
                        </p>
                    </div>

                    {columns.map((col) => (
                        <div key={col.eyebrow}>
                            <p className="text-caption-mono text-mute uppercase">{col.eyebrow}</p>
                            <ul className="mt-3 flex flex-col gap-2">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            target={link.href.startsWith("http") ? "_blank" : undefined}
                                            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                                            className="text-body-sm text-body transition-colors hover:text-ink"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="text-caption mt-12 flex flex-col gap-2 border-t border-hairline pt-6 text-mute sm:flex-row sm:items-center sm:justify-center">
                    <p>© {new Date().getFullYear()} Thomas Alberto. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
