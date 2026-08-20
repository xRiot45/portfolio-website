import { Mail } from "lucide-react";
import { profile } from "../../data/cv";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function ContactCTA() {
    return (
        <section id="contact" className="bg-primary px-4 py-24 text-on-primary sm:px-6">
            <div className="mx-auto flex max-w-(--container-page) flex-col items-start">
                <span className="text-caption-mono text-hairline-strong">06 - Contact</span>
                <h2 className="text-display-lg mt-2 max-w-xl">Let&apos;s build something</h2>
                <p className="text-body-lg mt-4 max-w-lg text-hairline-strong">
                    Open to full-time roles, freelance projects, and interesting problems in the JavaScript/TypeScript
                    ecosystem. The fastest way to reach me is email
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a
                        href={`mailto:${profile.email}`}
                        className="text-button-md inline-flex h-12 items-center justify-center gap-1 rounded-pill bg-canvas px-6 text-ink transition-opacity hover:opacity-90"
                    >
                        <Mail size={16} />
                        {profile.email}
                    </a>
                    <div className="flex items-center gap-3">
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-hairline-strong/40 transition-colors hover:bg-canvas-soft-2/10"
                        >
                            <GithubIcon width={18} height={18} />
                        </a>
                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-hairline-strong/40 transition-colors hover:bg-canvas-soft-2/10"
                        >
                            <LinkedinIcon width={18} height={18} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
