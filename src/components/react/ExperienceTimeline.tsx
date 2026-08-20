import { experience } from "../../data/cv";

export default function ExperienceTimeline() {
    return (
        <section id="experience" className="bg-canvas px-4 py-16 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-(--container-page)">
                <span className="text-caption-mono text-mute">03 - Experience</span>
                <h2 className="text-display-lg mt-2 max-w-xl text-ink">Where I&apos;ve worked</h2>
                <p className="text-body-md animate-fade-up mt-4 max-w-prose text-body [animation-delay:160ms]">
                    A look at my professional experience and the work I’ve been part of
                </p>

                <ol className="mt-10 flex flex-col">
                    {experience.map((item) => (
                        <li
                            key={`${item.org}-${item.period}`}
                            className="relative grid gap-2 border-t border-hairline py-8 first:border-t-0 sm:grid-cols-[200px_1fr] sm:gap-8"
                        >
                            <div>
                                <span className="text-caption-mono block text-mute">{item.period}</span>
                                <span className="text-caption mt-1 inline-block text-body">{item.type}</span>
                            </div>

                            <div>
                                <h3 className="text-display-sm text-ink">{item.role}</h3>
                                <p className="text-body-sm-strong mt-1 text-body">
                                    {item.org}
                                    <span className="text-body font-normal"> - {item.location}</span>
                                </p>
                                <ul className="mt-3 flex flex-col gap-2">
                                    {item.bullets.map((bullet) => (
                                        <li key={bullet} className="text-body-sm flex gap-2 text-body">
                                            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-hairline-strong" />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
