import { profile } from "../../data/cv";

export default function About() {
    return (
        <section id="about" className="bg-canvas px-4 py-16 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-page">
                {/* <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="text-caption-mono text-mute">01 · About Me</span>
            <h2 className="text-display-lg mt-2 text-ink">
              Full-stack, end to end.
            </h2>
            <p className="text-body-md mt-4 max-w-lg text-body">
              {profile.longSummary}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-md bg-canvas-soft p-6 shadow-level-1"
              >
                <dt className="text-display-md text-ink">{stat.value}</dt>
                <dd className="text-body-sm mt-1 text-body">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div> */}
                <div>
                    <span className="text-caption-mono text-mute">01 - About Me</span>
                    <h2 className="text-display-lg mt-2 text-ink">Full-stack, end to end</h2>
                    <p className="text-body-md mt-4  text-body">{profile.longSummary}</p>
                </div>
            </div>
        </section>
    );
}
