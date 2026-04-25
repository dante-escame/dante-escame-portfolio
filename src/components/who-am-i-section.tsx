import Image from "next/image";

import { AnimatedRevealText } from "./animated-reveal-text";
import { AnimatedSignalTitle } from "./animated-signal-title";
import { CyberBadge } from "./cyber-badge";
import { CyberTag } from "./cyber-tag";
import { DigitalRainBackground } from "./digital-rain-background";
import { PortfolioTechnologiesGrid } from "./portfolio-technologies-grid";
import { StylePanel } from "./style-kit";

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

const introCopy = [
  "Senior Software Engineer with 6+ years of experience in full-stack development across high-impact, large-scale applications.",
  "I build products with a delivery mindset and focus on backend performance, by applying market patterns with: .NET, C#, React, Node, Next, AWS, Kubernetes and Docker.",
];

export function WhoAmISection() {
  return (
    <main className="min-h-screen overflow-x-hidden text-(--color-text)">
      <section className="relative isolate mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 py-16 md:px-10 md:py-20">
        <div className="portfolio-background-layer" aria-hidden="true">
          <div className="intro-loading-grid portfolio-background-grid" />
          <DigitalRainBackground className="intro-falling-numbers portfolio-falling-numbers" />
          <div className="intro-loading-noise portfolio-background-noise" />
        </div>
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
              <div className="w-full text-sm leading-7 text-(--color-text) md:text-base">
                <AnimatedRevealText>
                  {introCopy[0]}
                </AnimatedRevealText>
                <AnimatedRevealText className="mt-4" delay={0.12}>
                  {introCopy[1]}
                </AnimatedRevealText>
              </div>
            </StylePanel>
          </section>

          <PortfolioTechnologiesGrid />

        </div>
      </section>
    </main>
  );
}
