import { ArrowRight, Download } from "lucide-react";
import { profile } from "../../data/cv";
import portrait from "../../assets/images/thomasalberto.webp";

export default function Hero() {
    return (
        <section id="top" className="relative overflow-hidden bg-canvas px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-24">
            {/* Optional Modern Touch: Subtle background glow */}
            <div
                className="pointer-events-none absolute left-1/2 top-0 -z-10 h-150 w-150 -translate-x-1/2 -translate-y-1/2 bg-primary/10 opacity-30 blur-[100px] lg:h-200 lg:w-200"
                aria-hidden="true"
            />

            <div className="relative mx-auto flex max-w-page flex-col gap-12 lg:grid lg:grid-cols-12 lg:items-center lg:gap-8">
                {/* 
                  KOLOM TEKS 
                  Mobile: order-2 (di bawah gambar), rata tengah.
                  Desktop (lg): order-1 (di kiri), rata kiri.
                */}
                <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:col-span-7 lg:items-start lg:text-left">
                    {/* Status Badge */}
                    <span className="text-caption-mono animate-fade-up inline-flex items-center gap-2 rounded-full border border-hairline bg-canvas/50 px-4 py-1.5 text-body backdrop-blur-md ">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"></span>
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success"></span>
                        </span>
                        Available for new work
                    </span>

                    {/* Heading */}
                    <h1 className="text-display-xl animate-fade-up mt-6 max-w-3xl font-bold tracking-tight text-ink [animation-delay:80ms]">
                        Build software that ships
                    </h1>

                    {/* Summary */}
                    <p className="text-body-lg animate-fade-up mt-6 max-w-xl leading-relaxed text-body [animation-delay:160ms]">
                        {profile.summary}
                    </p>

                    {/* CTA Buttons */}
                    <div className="animate-fade-up mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center [animation-delay:240ms]">
                        <a
                            href="#projects"
                            className="text-button-lg group relative inline-flex h-12 w-full items-center justify-center gap-2 rounded-pill bg-primary px-8 font-medium text-on-primary transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25 sm:w-auto"
                        >
                            View my work
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#contact"
                            className="text-button-lg inline-flex h-12 w-full items-center justify-center rounded-pill border border-hairline bg-canvas px-8 font-medium text-ink shadow-sm transition-all hover:bg-canvas-soft hover:shadow-md sm:w-auto"
                        >
                            Get in touch
                        </a>
                        <a
                            href="/Thomas-Alberto-CV.pdf"
                            download
                            className="text-body-sm-strong group inline-flex h-12 w-full items-center justify-center gap-2 px-4 transition-colors hover:text-ink sm:w-auto"
                        >
                            <Download
                                size={18}
                                className="text-body transition-transform group-hover:-translate-y-1 group-hover:text-ink"
                            />
                            Resume
                        </a>
                    </div>
                </div>

                {/* 
                  KOLOM GAMBAR 
                  Mobile: order-1 (di atas teks), rata tengah.
                  Desktop (lg): order-2 (di kanan), rata kanan.
                */}
                <div className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">
                    <div className="relative w-64 sm:w-72 lg:w-full lg:max-w-sm">
                        {/* Modern Background Glow */}
                        <div
                            className="absolute -inset-4 rounded-full  from-primary/30 to-blue-500/30 blur-2xl transition-all duration-700 group-hover:opacity-70"
                            aria-hidden="true"
                        />

                        {/* Decorative Offset Ring */}
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 translate-x-4 translate-y-4 rounded-full border-2 border-hairline transition-transform duration-500 hover:translate-x-5 hover:translate-y-5"
                        />

                        {/* Main Image Container */}
                        <div className="relative aspect-square overflow-hidden rounded-full bg-canvas-soft-2">
                            <img
                                src={portrait.src}
                                width={portrait.width}
                                height={portrait.height}
                                alt="Thomas Alberto — Full-Stack Software Engineer"
                                loading="eager"
                                fetchPriority="high"
                                className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
