import { BadgeCheck, GraduationCap } from "lucide-react";
import { education, certifications } from "../../data/cv";

export default function EducationCerts() {
    return (
        <section id="education" className="bg-canvas px-4 py-16 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-(--container-page)">
                <div className="max-w-2xl">
                    <span className="text-caption-mono text-mute">05 - Education & certifications</span>
                    <h2 className="text-display-lg mt-2 max-w-xl text-ink">Credentials along the way</h2>
                    <p className="text-body-md mt-4 max-w-xl text-body">
                        Academic background and professional certifications supporting my software engineering
                        experience
                    </p>
                </div>

                <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Education */}
                    <div>
                        <div className="flex items-center gap-2 pb-6">
                            <GraduationCap size={18} className="text-ink" />
                            <h3 className="text-display-sm text-ink">Education</h3>
                        </div>

                        <ol className="relative border-l border-hairline pl-6">
                            {education.map((item, i) => (
                                <li
                                    key={`${item.degree}-${item.org}`}
                                    style={{
                                        animationDelay: `${i * 80}ms`,
                                    }}
                                    className="animate-fade-up relative pb-10 last:pb-0"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="absolute -left-7.25 top-1.5 size-2.5 rounded-full border-2 border-canvas bg-ink"
                                    />

                                    <p className="text-caption-mono text-mute">{item.period}</p>

                                    <h4 className="text-body-md-strong mt-2 text-ink">{item.degree}</h4>

                                    <p className="text-body-sm mt-1 text-body">{item.org}</p>

                                    <div className="text-caption-mono mt-3 flex flex-wrap gap-x-3 gap-y-1 text-mute">
                                        <span>{item.location}</span>
                                        <span aria-hidden="true">·</span>
                                        <span>{item.detail}</span>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Certifications */}
                    <div>
                        <div className="flex items-center gap-2 pb-6">
                            <BadgeCheck size={18} className="text-ink" />
                            <h3 className="text-display-sm text-ink">Certifications</h3>
                        </div>

                        <ol className="relative border-l border-hairline pl-6">
                            {certifications.map((item, i) => (
                                <li
                                    key={`${item.name}-${item.org}`}
                                    style={{
                                        animationDelay: `${i * 80}ms`,
                                    }}
                                    className="animate-fade-up relative pb-10 last:pb-0"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="absolute -left-7.25 top-1.5 size-2.5 rounded-full border-2 border-canvas bg-ink"
                                    />

                                    <p className="text-caption-mono text-mute">{item.period}</p>

                                    <h4 className="text-body-md-strong mt-2 text-ink">{item.name}</h4>

                                    <p className="text-body-sm mt-1 text-body">{item.org}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}
6;
