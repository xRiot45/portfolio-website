import { ArrowRight, Download } from "lucide-react";
import { profile } from "../../data/cv";

export default function Hero() {
    return (
        <section id="top" className="relative overflow-hidden bg-canvas px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-24">
            <div aria-hidden="true" />

            <div className="relative mx-auto flex max-w-page flex-col items-start">
                <span className="text-caption-mono animate-fade-up inline-flex items-center gap-1 rounded-full border border-hairline bg-canvas px-3 py-1 text-body">
                    <span className="h-1.5 w-1.5 rounded-full bg-success" />
                    Available for new work
                </span>

                <h1 className="text-display-xl animate-fade-up mt-6 max-w-3xl text-ink [animation-delay:80ms]">
                    Build software that ships
                </h1>

                <p className="text-body-lg animate-fade-up mt-4 max-w-xl text-body [animation-delay:160ms]">
                    {profile.summary}
                </p>

                <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:items-center [animation-delay:240ms]">
                    <a
                        href="#projects"
                        className="text-button-lg inline-flex h-12 items-center justify-center gap-1 rounded-pill bg-primary px-6 text-on-primary transition-opacity hover:opacity-90"
                    >
                        View my work
                        <ArrowRight size={16} />
                    </a>
                    <a
                        href="#contact"
                        className="text-button-lg inline-flex h-12 items-center justify-center rounded-pill bg-canvas px-6 text-ink shadow-level-1 transition-colors hover:bg-canvas-soft"
                    >
                        Get in touch
                    </a>
                    <a
                        href="/Thomas-Alberto-CV.pdf"
                        download
                        className="text-body-sm-strong inline-flex h-12 items-center justify-center gap-1 px-3 text-body transition-colors hover:text-ink"
                    >
                        <Download size={15} />
                        Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
