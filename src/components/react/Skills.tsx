import { Icon } from "@iconify/react";
import { flatSkills } from "../../data/skillIcons";

function SkillRow({ skills, reverse }: { skills: typeof flatSkills; reverse?: boolean }) {
    const track = [...skills, ...skills];
    return (
        <div className="group relative w-full overflow-hidden border-hairline border-y bg-canvas">
            <div
                className={`flex w-max items-center ${
                    reverse ? "animate-marquee-reverse" : "animate-marquee"
                } [animation-play-state:running] group-hover:[animation-play-state:paused]`}
            >
                {track.map((skill, i) => (
                    <div
                        key={`${skill.name}-${i}`}
                        className="flex items-center gap-2 border-r border-hairline px-6 py-4"
                    >
                        <Icon icon={skill.icon} className="size-5 shrink-0" aria-hidden="true" />
                        <span className="text-body-sm-strong whitespace-nowrap text-ink">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Skills() {
    const mid = Math.ceil(flatSkills.length / 2);
    const rowA = flatSkills.slice(0, mid);
    const rowB = flatSkills.slice(mid);

    return (
        <section id="skills" className="bg-canvas-soft overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-(--container-page)">
                <span className="text-caption-mono animate-fade-up inline-block text-mute">02 - Skills</span>
                <h2 className="text-display-lg animate-fade-up mt-2 max-w-xl text-ink [animation-delay:80ms]">
                    The stack I reach for
                </h2>
                <p className="text-body-md animate-fade-up mt-4 max-w-prose text-body [animation-delay:160ms]">
                    The tools I reach for to design, build, and ship production-grade software end-to-end
                </p>
            </div>

            <div className="mt-12 flex flex-col gap-3">
                <div className="animate-fade-up [animation-delay:240ms]">
                    <SkillRow skills={rowA} />
                </div>
                <div className="animate-fade-up [animation-delay:320ms]">
                    <SkillRow skills={rowB} reverse />
                </div>
            </div>
        </section>
    );
}
