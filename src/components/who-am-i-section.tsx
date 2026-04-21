import Image from "next/image";
import Link from "next/link";

import { AttentionBox } from "./attention-box";
import { CyberBadge } from "./cyber-badge";
import { CyberTag } from "./cyber-tag";
import { TextPatternBlock } from "./text-pattern-block";
import { TopicsInList } from "./topics-in-list";
import { TopicsInSquares } from "./topics-in-squares";
import {
  StyleCardGrid,
  StyleChipList,
  StylePanel
} from "./style-kit";

const experienceStartYear = 2018;
const techBreadth = "10+";

const stackSignals = [
  "TypeScript systems: Node, React and Next",
  "Full-stack delivery: ",
  "Backend delivery with C#, .NET 10, EF Core and Dapper",
  "Domain Driven Design, Vertical Slices and CQRS",
  "Performance-oriented debugging",
  "UI polish with intent",
];

const personalNotes = [
  "Reading keeps the taste level sharp.",
  "Gym work keeps the routine disciplined.",
  "I prefer clarity over noise in both code and communication.",
];

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

        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <CyberBadge variant="cyan">Who Am I</CyberBadge>
            <CyberTag variant="pink">Dante Escame</CyberTag>
            <CyberTag>Full-stack engineer</CyberTag>
            <CyberTag variant="gold">Remote-ready</CyberTag>
          </div>

          <div className="space-y-6">
            <StylePanel className="overflow-hidden p-5">
              <div className="grid gap-5 sm:grid-cols-[128px_1fr] sm:items-center">
                <div className="top-portrait-frame mx-auto h-32 w-32 sm:mx-0">
                  <Image
                      alt="Portrait of Dante Escame"
                      className="top-portrait-image"
                      fill
                      priority
                      sizes="128px"
                      src="/profile.jpg"
                  />
                  <div className="top-portrait-overlay" />
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <CyberBadge variant="purple">Profile signal</CyberBadge>
                  </div>
                  <p className="text-lg font-semibold uppercase tracking-[0.14em] text-(--color-heading)">
                    Full-stack software engineer
                  </p>
                  <p className="text-sm leading-7 text-(--color-text)/85">
                    "Everything should be made as simple as possible, but not simpler."
                  </p>
                </div>
              </div>
            </StylePanel>

            <TopicsInSquares
                className="p-6"
                note="Core stack signal"
                title="What I tend to build around"
                topics={stackSignals}
            />
          </div>

          <section className="w-full">
            <StylePanel className="w-full space-y-8 p-6 md:p-8">
              <div className="max-w-3xl text-sm leading-7 text-(--color-text) md:text-base">
                <p>
                  Hi, I&apos;m Dante. I build products with a delivery mindset and
                  a focus on backend performance.
                  By applying optimal market patterns,
                </p>
                <p className="mt-4">
                  The goal is straightforward: ship work that feels precise,
                  maintainable, and worth using.
                </p>
              </div>

              <StyleChipList
                items={[
                  "Full-stack software engineer",
                  "Backend performance aware",
                  `Experience since ${experienceStartYear}`,
                  "Open to serious builds",
                ]}
              />

              <div className="grid gap-4 md:grid-cols-2">
                <TextPatternBlock
                  title="Operating Mode"
                  subtitle="How I work"
                  variant="cyan"
                >
                  <p>
                    I like owning the path from product idea to implementation,
                    then tightening the system until it feels reliable and easy
                    to keep moving.
                  </p>
                  <p>
                    That usually means balancing frontend clarity, backend
                    responsiveness, and enough taste to keep the final result
                    sharp instead of noisy.
                  </p>
                </TextPatternBlock>

                <TextPatternBlock
                  title="Collaboration Signal"
                  subtitle="Current posture"
                >
                  <p>
                    Open to remote collaboration, full-time roles, and contract
                    work where the product direction is clear and the build
                    quality matters.
                  </p>
                  <AttentionBox
                    className="mt-4"
                    title="Priority"
                    variant="gold"
                  >
                    Useful software first. Visual style and technical depth
                    should support that, not distract from it.
                  </AttentionBox>
                </TextPatternBlock>
              </div>

              <StyleCardGrid
                className="md:grid-cols-2"
                columnsClassName=""
                items={[
                  {
                    title: "Stack breadth",
                    value: techBreadth,
                    description: "Technologies used across product delivery",
                    meta: <CyberBadge variant="cyan">Breadth</CyberBadge>,
                  },
                  {
                    title: "Experience",
                    value: experienceLabel,
                    description: `Shipping since ${experienceStartYear}`,
                    meta: <CyberBadge variant="pink">Timeline</CyberBadge>,
                  },
                ]}
              />

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
            </StylePanel>
          </section>

          <TopicsInList
              className="p-6"
              title="Outside the terminal"
              topics={personalNotes}
          />
        </div>
      </section>
    </main>
  );
}
