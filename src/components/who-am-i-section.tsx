import Image from "next/image";
import Link from "next/link";

import { AttentionBox } from "./attention-box";
import { AnimatedRevealText } from "./animated-reveal-text";
import { AnimatedSignalTitle } from "./animated-signal-title";
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

const sectionBadges = {
  label: "Who Am I",
  name: "Dante Escame",
  role: "Full-stack engineer",
  availability: "Remote-ready",
};

const profileSignal = {
  badge: "Profile signal",
  title: "Senior Software Engineer",
  quote: '"Everything should be made as simple as possible, but not simpler."',
  portraitAlt: "Portrait of Dante Escame",
};

const stackSignals = [
  "Full-stack delivery: Node, React and Next",
  "High-volume processing backend systems: C#, .NET 10, EF Core and Dapper",
  "Asynchronous messaging: Network domain and integrations events",
  "Architecture Knowledge: Domain Driven Design, Event Driven Flows, Vertical Slices and CQRS",
  "Complete test pyramid: unit tests, integration tests and E2E tests",
  "Cloud Integration: experience with Amazon Web Services"
];

const stackSection = {
  note: "Core stack signal",
  title: "What I tend to build around",
};

const introCopy = [
  "Senior Software Engineer with 6+ years of experience in full-stack development across high-impact, large-scale applications.",
  "I build products with a delivery mindset and focus on backend performance, by applying market patterns with: .NET, C#, React, Node, Next, AWS, Kubernetes and Docker.",
];

const profileChips = [
  "Senior Software Engineer",
  "Backend performance aware",
  `Experience since ${experienceStartYear}`,
  "Open to serious builds",
];

const operatingModeCopy = {
  title: "Operating Mode",
  subtitle: "How I work",
  paragraphs: [
    "I like owning the path from product idea to implementation, then tightening the system until it feels reliable and easy to keep moving.",
    "That usually means balancing frontend clarity, backend responsiveness, and enough taste to keep the final result sharp instead of noisy.",
  ],
};

const collaborationCopy = {
  title: "Collaboration Signal",
  subtitle: "Current posture",
  paragraph:
    "Open to remote collaboration, full-time roles, and contract work where the product direction is clear and the build quality matters.",
  priorityTitle: "Priority",
  priority:
    "Useful software first. Visual style and technical depth should support that, not distract from it.",
};

const profileMetrics = {
  stackBreadth: {
    title: "Stack breadth",
    description: "Technologies used across product delivery",
    badge: "Breadth",
  },
  experience: {
    title: "Experience",
    badge: "Timeline",
  },
};

const sectionActions = {
  work: "See My Work",
  cv: "Download CV",
};

const personalNotes = [
  "I enjoy reading old russian romances and sci-fi.",
  "I never miss a day of gym.",
  "Life would not be the same without travels and beach.",
];

const personalSectionTitle = "Outside the terminal";

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
            <CyberBadge variant="cyan">{sectionBadges.label}</CyberBadge>
            <CyberTag variant="pink">{sectionBadges.name}</CyberTag>
            <CyberTag>{sectionBadges.role}</CyberTag>
            <CyberTag variant="gold">{sectionBadges.availability}</CyberTag>
          </div>

          <div className="space-y-6">
            <StylePanel className="overflow-hidden p-5">
              <div className="grid gap-5 sm:grid-cols-[128px_1fr] sm:items-center">
                <div className="top-portrait-frame mx-auto h-32 w-32 sm:mx-0">
                  <Image
                      alt={profileSignal.portraitAlt}
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
                    <CyberBadge variant="purple">{profileSignal.badge}</CyberBadge>
                  </div>
                  <AnimatedSignalTitle title={profileSignal.title} />
                  <AnimatedRevealText className="text-sm leading-7 text-(--color-text)/85">
                    {profileSignal.quote}
                  </AnimatedRevealText>
                </div>
              </div>
            </StylePanel>

          </div>

          <section className="w-full">
            <StylePanel className="w-full space-y-8 p-6 md:p-8">
              <div className="max-w-3xl text-sm leading-7 text-(--color-text) md:text-base">
                <AnimatedRevealText>
                  {introCopy[0]}
                </AnimatedRevealText>
                <AnimatedRevealText className="mt-4" delay={0.12}>
                  {introCopy[1]}
                </AnimatedRevealText>
              </div>

              <StyleChipList items={profileChips} />

              <div className="grid gap-4 md:grid-cols-2">
                <TextPatternBlock
                  title={operatingModeCopy.title}
                  subtitle={operatingModeCopy.subtitle}
                  variant="cyan"
                >
                  <p>
                    {operatingModeCopy.paragraphs[0]}
                  </p>
                  <p>
                    {operatingModeCopy.paragraphs[1]}
                  </p>
                </TextPatternBlock>

                <TextPatternBlock
                  title={collaborationCopy.title}
                  subtitle={collaborationCopy.subtitle}
                >
                  <p>
                    {collaborationCopy.paragraph}
                  </p>
                  <AttentionBox
                    className="mt-4"
                    title={collaborationCopy.priorityTitle}
                    variant="gold"
                  >
                    {collaborationCopy.priority}
                  </AttentionBox>
                </TextPatternBlock>
              </div>

              <StyleCardGrid
                className="md:grid-cols-2"
                columnsClassName=""
                items={[
                  {
                    title: profileMetrics.stackBreadth.title,
                    value: techBreadth,
                    description: profileMetrics.stackBreadth.description,
                    meta: <CyberBadge variant="cyan">{profileMetrics.stackBreadth.badge}</CyberBadge>,
                  },
                  {
                    title: profileMetrics.experience.title,
                    value: experienceLabel,
                    description: `Shipping since ${experienceStartYear}`,
                    meta: <CyberBadge variant="pink">{profileMetrics.experience.badge}</CyberBadge>,
                  },
                ]}
              />

              <div className="flex flex-wrap gap-3">
                <Link className="action-link action-link-primary" href="#highlights">
                  {sectionActions.work}
                </Link>
                <a
                  className="action-link action-link-secondary"
                  download
                  href="/Profile.pdf"
                >
                  {sectionActions.cv}
                </a>
              </div>
            </StylePanel>
          </section>

          <TopicsInSquares
              className="p-6"
              note={stackSection.note}
              title={stackSection.title}
              topics={stackSignals}
          />

          <TopicsInList
              className="p-6"
              title={personalSectionTitle}
              topics={personalNotes}
          />
        </div>
      </section>
    </main>
  );
}
