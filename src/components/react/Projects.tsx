import { useState } from "react";
import { projects } from "../../data/cv";
import { Icon } from "@iconify/react";
import { skillIcon } from "../../data/skillIcons";

export default function Projects() {
    const INITIAL_PROJECTS = 4;
    const LOAD_AMOUNT = 4;

    const [visibleCount, setVisibleCount] = useState(INITIAL_PROJECTS);

    const visibleProjects = projects.slice(0, visibleCount);
    const hasMore = visibleCount < projects.length;

    const handleLoadMore = () => {
        setVisibleCount((current) => Math.min(current + LOAD_AMOUNT, projects.length));
    };

    const handleShowLess = () => {
        setVisibleCount(INITIAL_PROJECTS);
    };

    return (
        <section id="projects" className="bg-canvas-soft px-4 py-16 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-(--container-page)">
                {/* Section header */}
                <div className="max-w-2xl">
                    <span className="text-caption-mono animate-fade-up inline-block text-mute">04 - Projects</span>

                    <h2 className="text-display-lg animate-fade-up mt-2 text-ink [animation-delay:80ms]">
                        Things I&apos;ve built.
                    </h2>

                    <p className="text-body-md animate-fade-up mt-4 text-body [animation-delay:160ms]">
                        A selection of products, applications, and developer tools I&apos;ve worked on.
                    </p>
                </div>

                {/* Projects */}
                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
                    {visibleProjects.map((project, i) => {
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
                                style={{
                                    animationDelay: `${i * 70}ms`,
                                }}
                                className={[
                                    "group animate-fade-up overflow-hidden",
                                    "rounded-xl border border-hairline",
                                    "bg-canvas transition-all duration-300",
                                    "hover:-translate-y-1 hover:shadow-level-5",
                                    project.link ? "cursor-pointer" : "cursor-default",
                                    "lg:col-span-6",
                                ].join(" ")}
                            >
                                {/* Thumbnail */}
                                <div className={["relative overflow-hidden bg-canvas-soft-2"].join(" ")}>
                                    <img
                                        src={project.thumbnail.src}
                                        alt={`${project.name} preview`}
                                        loading={i < 2 ? "eager" : "lazy"}
                                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                                    />

                                    {/* Overlay */}
                                    {project.link && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10">
                                            <span className="translate-y-2 rounded-full bg-canvas/90 px-4 py-2 text-sm font-medium text-ink opacity-0 shadow-level-3 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                                View project →
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex flex-col p-5 sm:p-6 lg:p-7">
                                    <div className="flex flex-1 flex-col">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <h3 className="text-display-md mt-2 text-ink">{project.name}</h3>
                                                <p className="text-body-sm mt-1 text-mute">{project.tagline}</p>
                                            </div>
                                        </div>

                                        {/* Stack */}
                                        <div className="mt-auto pt-8">
                                            <div className="flex flex-wrap gap-1.5">
                                                {project.stack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="text-caption-mono inline-flex items-center gap-1.5 rounded-full border border-hairline bg-canvas-soft px-2.5 py-1.5 text-body"
                                                    >
                                                        <Icon
                                                            icon={skillIcon[tech] ?? "mdi:code-tags"}
                                                            className="size-3.5"
                                                            aria-hidden="true"
                                                        />

                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Wrapper>
                        );
                    })}
                </div>

                {/* Load more */}
                {projects.length > INITIAL_PROJECTS && (
                    <div className="mt-10 flex justify-center">
                        {hasMore ? (
                            <button
                                type="button"
                                onClick={handleLoadMore}
                                className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 "
                            >
                                Load more projects
                                <span className="transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={handleShowLess}
                                className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 "
                            >
                                Show less
                                <span className="transition-transform duration-200 group-hover:-translate-y-0.5">
                                    ↑
                                </span>
                            </button>
                        )}
                    </div>
                )}

                {/* Project counter */}
                {projects.length > INITIAL_PROJECTS && (
                    <p className="text-caption-mono mt-4 text-center text-mute">
                        Showing {visibleProjects.length} of {projects.length} projects
                    </p>
                )}
            </div>
        </section>
    );
}
