"use client";

import Image from "next/image";
import Link from "next/link";

import { useTranslation } from "../lib/i18n/context";
import { AnimatedRevealText } from "./animated-reveal-text";
import { AnimatedSignalTitle } from "./animated-signal-title";
import { CyberBadge } from "./cyber-badge";
import { CyberTag } from "./cyber-tag";
import { DigitalRainBackground } from "./digital-rain-background";
import { IntroAvatar } from "./intro-avatar";
import { PortfolioTechnologiesGrid } from "./portfolio-technologies-grid";
import { StylePanel } from "./style-kit";

export function WhoAmISection() {
  const t = useTranslation();
  const w = t.whoAmI;

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
            <CyberBadge variant="cyan">{w.badge}</CyberBadge>
            <CyberTag variant="pink">{w.name}</CyberTag>
            <CyberTag>{w.role}</CyberTag>
            <CyberTag variant="gold">{w.availability}</CyberTag>
          </div>

          <div className="space-y-6">
            <StylePanel className="overflow-hidden p-5">
              <div className="grid gap-5 sm:grid-cols-[128px_1fr] sm:items-center">
                <div className="top-portrait-frame mx-auto h-32 w-32 sm:mx-0">
                  <Image
                    alt={w.portraitAlt}
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
                    <CyberBadge variant="purple">{w.signalBadge}</CyberBadge>
                  </div>
                  <AnimatedSignalTitle title={w.signalTitle} />
                  <AnimatedRevealText className="text-sm leading-7 text-(--color-text)/85">
                    {w.quote}
                  </AnimatedRevealText>
                </div>
              </div>
            </StylePanel>
          </div>

          <section className="w-full">
            <StylePanel className="w-full space-y-8 p-6 md:p-8">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
                <div className="w-full text-sm leading-7 text-(--color-text) md:text-base">
                  <AnimatedRevealText>
                    {w.introPara1}
                  </AnimatedRevealText>
                  <AnimatedRevealText className="mt-4" delay={0.12}>
                    {w.introPara2}
                  </AnimatedRevealText>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Link
                      className="relative inline-flex items-center justify-center border border-(--color-gold) bg-transparent px-6 py-3 text-xs font-black uppercase tracking-[0.15em] text-(--color-gold) transition-all duration-200 outline-none hover:bg-(--color-gold)/10 hover:shadow-[0_0_15px_rgba(249,243,56,0.4)] focus:ring-2 focus:ring-(--color-gold) focus:ring-offset-2 active:scale-95"
                      download
                      href="/Profile.pdf"
                      style={{
                        clipPath:
                          "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                      }}
                    >
                      {w.resumeBtn}
                    </Link>

                    <Link
                      className="relative inline-flex items-center justify-center border border-(--color-cyan) bg-transparent px-6 py-3 text-xs font-black uppercase tracking-[0.15em] text-(--color-cyan) transition-all duration-200 outline-none hover:bg-(--color-cyan)/10 hover:shadow-[0_0_15px_rgba(13,205,205,0.4)] focus:ring-2 focus:ring-(--color-cyan) focus:ring-offset-2 active:scale-95"
                      href="/projects"
                      style={{
                        clipPath:
                          "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                      }}
                    >
                      {w.projectsBtn}
                    </Link>

                    <Link
                      className="relative inline-flex items-center justify-center border border-(--color-pink) bg-transparent px-6 py-3 text-xs font-black uppercase tracking-[0.15em] text-(--color-pink) transition-all duration-200 outline-none hover:bg-(--color-pink)/10 hover:shadow-[0_0_15px_rgba(223,2,74,0.4)] focus:ring-2 focus:ring-(--color-pink) focus:ring-offset-2 active:scale-95"
                      href="https://www.linkedin.com/in/dante-escame/"
                      rel="noreferrer"
                      style={{
                        clipPath:
                          "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                      }}
                      target="_blank"
                    >
                      {w.linkedinBtn}
                    </Link>
                  </div>
                </div>

                <IntroAvatar />
              </div>
            </StylePanel>
          </section>

          <PortfolioTechnologiesGrid />
        </div>
      </section>
    </main>
  );
}
