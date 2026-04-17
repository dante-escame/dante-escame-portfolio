import Image from "next/image";
import Link from "next/link";

const experienceStartYear = 2018;
const techBreadth = "10+";

const strengths = [
  {
    title: "Full-stack delivery",
    detail:
      "From structure and APIs to frontend implementation, I like closing the loop and shipping complete work."
  },
  {
    title: "Backend performance",
    detail:
      "I pay attention to the parts that keep software reliable, responsive, and easier to scale."
  },
  {
    title: "Product thinking",
    detail:
      "I care about whether the solution is useful, understandable, and worth maintaining after launch."
  },
  {
    title: "Stack breadth",
    detail:
      "I adapt quickly across tools and layers when the product needs practical progress instead of rigid specialization."
  }
] as const;

const highlights = [
  {
    label: "Projects shipped",
    value: "Active delivery",
    note: "Professional and personal work with an emphasis on polished execution."
  },
  {
    label: "Work style",
    value: "Full-stack balance",
    note: "Technical depth where it matters without losing product clarity."
  },
  {
    label: "Availability",
    value: "Remote-ready",
    note: "Open to remote opportunities, full-time roles, and contract work."
  },
  {
    label: "Priority",
    value: "Useful software",
    note: "Shipping practical digital products is the standard I optimize for."
  }
] as const;

function getExperienceLabel(currentYear: number) {
  const elapsedYears = Math.max(1, currentYear - experienceStartYear);
  const publicFacingYears = Math.min(elapsedYears, 6);

  return `${publicFacingYears}+ years`;
}

export function WhoAmISection() {
  const currentYear = new Date().getFullYear();
  const experienceLabel = getExperienceLabel(currentYear);

  return (
    <main className="min-h-screen overflow-x-hidden text-(--color-text)">
      <section className="relative isolate mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 py-16 md:px-10 md:py-20">
        <div className="ambient-orb ambient-orb-left" aria-hidden="true" />
        <div className="ambient-orb ambient-orb-right" aria-hidden="true" />

        <div className="relative z-10 space-y-8">
          <header className="flex flex-col gap-4">
            <div className="flex items-start gap-4 md:gap-6">
              <div className="top-portrait-frame shrink-0">
                <Image
                  alt="Portrait of Dante Escame"
                  className="top-portrait-image"
                  fill
                  priority
                  sizes="120px"
                  src="/profile.jpg"
                />
                <div className="top-portrait-overlay" />
              </div>

              <div className="space-y-3">
                <p className="inline-flex w-fit items-center gap-2 border border-(--color-accent)/55 bg-(--color-panel) px-3 py-1 text-[10px] uppercase tracking-[0.34em] text-(--color-cyan)">
                  <span className="h-2 w-2 rounded-full bg-(--color-pink) shadow-[0_0_14px_rgba(223,2,74,0.8)]" />
                  Who Am I?
                </p>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.34em] text-(--color-pink)">
                    Dante Escame
                  </p>
                  <h2 className="max-w-3xl text-3xl font-black uppercase tracking-[0.08em] text-(--color-heading) md:text-5xl xl:text-6xl">
                    Dante Escame
                  </h2>
                  <p className="max-w-2xl text-sm leading-7 text-(--color-heading)/78 md:text-base">
                    Hi, I&apos;m Dante. It&apos;s nice to have you here.
                  </p>

                  <div className="panel-cut max-w-md space-y-2 px-4 py-3">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-(--color-cyan)">
                      Current status
                    </p>
                    <p className="text-lg font-bold uppercase tracking-[0.12em] text-(--color-heading)">
                      Let&apos;s work together!
                    </p>
                    <p className="text-sm leading-6 text-(--color-heading)/75">
                      Open to remote opportunities, full-time roles, and contract work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="grid gap-6 xl:grid-cols-[1.45fr_0.8fr]">
            <section className="panel-cut space-y-8 p-6 md:p-8">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-[10px] uppercase tracking-[0.34em] text-(--color-pink)">
                    Full-stack software engineer
                  </p>
                  <span className="h-px w-12 bg-(--color-accent)/70" />
                  <p className="text-[10px] uppercase tracking-[0.28em] text-(--color-cyan)">
                    Open to remote opportunities
                  </p>
                </div>

                <h1 className="max-w-4xl text-4xl font-black uppercase leading-none tracking-[0.06em] text-(--color-heading) md:text-6xl xl:text-[4.75rem]">
                  Full-stack software engineer
                </h1>

                <p className="max-w-3xl text-sm leading-7 text-(--color-heading)/80 md:text-base">
                  I build ideas into usable software with a full-stack approach,
                  a delivery mindset, and direct attention to backend
                  performance when the product needs speed, reliability, and
                  clarity.
                </p>

                <p className="inline-flex w-fit border border-(--color-border-cyan) bg-[rgba(13,205,205,0.08)] px-3 py-2 text-[10px] uppercase tracking-[0.26em] text-(--color-cyan)">
                  Ship useful products. Keep the implementation practical.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <article className="data-stat">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-(--color-cyan)">
                        Stack breadth
                      </p>
                      <p className="mt-3 text-4xl font-black uppercase tracking-[0.08em] text-(--color-heading)">
                        {techBreadth}
                      </p>
                      <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-(--color-pink)">
                        Technologies
                      </p>
                    </article>

                    <article className="data-stat">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-(--color-cyan)">
                        Experience
                      </p>
                      <p className="mt-3 text-3xl font-black uppercase tracking-[0.08em] text-(--color-heading)">
                        {experienceLabel}
                      </p>
                      <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-(--color-pink)">
                        Since {experienceStartYear}
                      </p>
                    </article>
                  </div>

                  <p className="max-w-2xl text-sm leading-7 text-(--color-heading)/72">
                    Delivery across multiple layers of the stack, shaped by
                    product usefulness, maintainable systems, and polished
                    implementation details.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <Link className="action-link action-link-primary" href="#highlights">
                      See My Work
                    </Link>
                    <a
                      className="action-link action-link-secondary"
                      download
                      href="/Profile.pdf"
                    >
                      Download CV
                    </a>
                  </div>
                </div>

                <aside className="signal-frame flex min-h-[320px] flex-col overflow-hidden p-5">
                  <div className="scan-line" aria-hidden="true" />
                  <div className="relative z-10 space-y-3">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-(--color-cyan)">
                      Profile signal
                    </p>
                    <div className="portrait-placeholder">
                      <div className="relative z-10 ml-auto mt-auto w-full space-y-3 border border-(--color-border-cyan) bg-[rgba(5,6,9,0.72)] p-4">
                        <p className="text-[10px] uppercase tracking-[0.24em] text-(--color-cyan)">
                          Dante Escame
                        </p>
                        <p className="text-[11px] uppercase tracking-[0.18em] text-(--color-heading)/78">
                          Full-stack software engineer
                        </p>
                        <p className="text-xs leading-6 text-(--color-heading)/72">
                          Building practical digital products with a full-stack mindset and delivery focus.
                        </p>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </section>

            <aside className="space-y-6">
              <section className="panel-cut space-y-4 p-6">
                <p className="text-[10px] uppercase tracking-[0.32em] text-(--color-cyan)">
                  Personal note
                </p>
                <p className="text-sm leading-7 text-(--color-heading)/80">
                  Outside of software, I like reading and going to the gym. It
                  keeps me curious, grounded, and consistent without turning the
                  work into noise.
                </p>
              </section>

              <section className="panel-cut space-y-4 p-6">
                <p className="text-[10px] uppercase tracking-[0.32em] text-(--color-cyan)">
                  First impression
                </p>
                <ul className="space-y-3 text-sm leading-7 text-(--color-heading)/76">
                  <li>Professional-first positioning with visible personality.</li>
                  <li>Recruiter-safe structure with controlled cyberpunk details.</li>
                  <li>Clear path toward work samples instead of decorative filler.</li>
                </ul>
              </section>
            </aside>
          </div>

          <section
            aria-labelledby="highlights-title"
            className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]"
            id="highlights"
          >
            <div className="panel-cut space-y-5 p-6">
              <p className="text-[10px] uppercase tracking-[0.32em] text-(--color-cyan)">
                Current status
              </p>
              <h2
                className="text-3xl font-black uppercase tracking-[0.08em] text-(--color-heading)"
                id="highlights-title"
              >
                Available for the next serious build.
              </h2>
              <p className="text-sm leading-7 text-(--color-heading)/78">
                I&apos;m open to remote collaboration across full-time or
                contract work, with a preference for products that value useful
                execution over unnecessary complexity.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex border border-(--color-border-cyan) px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-(--color-cyan)">
                  Remote opportunities
                </span>
                <span className="inline-flex border border-(--color-border) px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-(--color-pink)">
                  Full-time
                </span>
                <span className="inline-flex border border-(--color-border) px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-(--color-pink)">
                  Contract
                </span>
              </div>
            </div>

            <div className="panel-cut space-y-5 p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.32em] text-(--color-cyan)">
                    Highlights
                  </p>
                  <h2 className="mt-3 text-2xl font-black uppercase tracking-[0.08em] text-(--color-heading)">
                    Compact proof points.
                  </h2>
                </div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-(--color-pink)">
                  Delivery-focused
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {highlights.map((item) => (
                  <article
                    key={item.label}
                    className="border border-(--color-border)/70 bg-[rgba(9,4,13,0.72)] p-4"
                  >
                    <p className="text-[10px] uppercase tracking-[0.26em] text-(--color-cyan)">
                      {item.label}
                    </p>
                    <p className="mt-3 text-lg font-bold uppercase tracking-[0.12em] text-(--color-heading)">
                      {item.value}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-(--color-heading)/72">
                      {item.note}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="panel-cut space-y-5 p-6" aria-labelledby="strengths-title">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-(--color-cyan)">
                  Selected strengths
                </p>
                <h2
                  className="mt-3 text-2xl font-black uppercase tracking-[0.08em] text-(--color-heading)"
                  id="strengths-title"
                >
                  The work tends to center here.
                </h2>
              </div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-(--color-pink)">
                4 focus areas
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {strengths.map((strength, index) => (
                <article
                  key={strength.title}
                  className={[
                    "border p-4",
                    index === 0
                      ? "border-(--color-border-cyan) bg-[rgba(13,205,205,0.07)]"
                      : "border-(--color-border)/70 bg-[rgba(9,4,13,0.72)]"
                  ].join(" ")}
                >
                  <p className="text-[10px] uppercase tracking-[0.26em] text-(--color-cyan)">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-lg font-bold uppercase tracking-[0.11em] text-(--color-heading)">
                    {strength.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-(--color-heading)/72">
                    {strength.detail}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
