import { Icon } from "@iconify/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/cv";
import { skillIcon } from "../../data/skillIcons";

export default function Projects() {
    return (
        <section id="projects" className="bg-canvas-soft px-4 py-16 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-(--container-page)">
                <span className="text-caption-mono animate-fade-up inline-block text-mute">04 - Projects</span>
                <h2 className="text-display-lg animate-fade-up mt-2 max-w-xl text-ink [animation-delay:80ms]">
                    Things I&apos;ve built
                </h2>
                <p className="text-body-md animate-fade-up mt-4 max-w-prose text-body [animation-delay:160ms]">
                    Selected work across mobile, web platform, and developer tooling
                </p>

                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                    {projects.map((project, i) => {
                        const Wrapper = project.link ? "a" : "div";
                        const wrapperProps = project.link
                            ? {
                                  href: project.link,
                                  target: "_blank",
                                  rel: "noreferrer",
                                  "aria-label": `Open ${project.name}`,
                              }
                            : {};

                        return (
                            <Wrapper
                                key={project.name}
                                {...wrapperProps}
                                style={{ animationDelay: `${i * 80}ms` }}
                                className={`group flex animate-fade-up flex-col overflow-hidden rounded-lg bg-canvas shadow-level-4 transition-shadow duration-200 hover:shadow-level-5 ${
                                    project.link ? "cursor-pointer" : "cursor-default"
                                }`}
                            >
                                <div className="w-full overflow-hidden bg-canvas-soft-2">
                                    <img
                                        src={project.thumbnail.src}
                                        alt={`${project.name} preview`}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                                    />
                                </div>

                                <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <h3 className="text-display-md text-ink">{project.name}</h3>
                                            <p className="text-body-sm mt-1 text-body">{project.tagline}</p>
                                        </div>
                                        {/* {project.link && (
                                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline text-ink transition-colors group-hover:bg-canvas-soft">
                                                <ArrowUpRight size={16} />
                                            </span>
                                        )} */}
                                    </div>

                                    <div className="mt-auto flex flex-wrap gap-1 border-t border-hairline pt-4">
                                        {project.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-caption-mono flex items-center gap-1 rounded-full bg-canvas-soft px-2 py-1 text-body"
                                            >
                                                <Icon
                                                    icon={skillIcon[tech] ?? "mdi:code-tags"}
                                                    className="size-4"
                                                    aria-hidden="true"
                                                />
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Wrapper>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
