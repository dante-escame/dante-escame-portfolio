import { DigitalRainBackground } from "../../../src/components/digital-rain-background";
import { CyberBadge } from "../../../src/components/cyber-badge";
import { CyberTag } from "../../../src/components/cyber-tag";
import { StylePanel, StylePanelHeader } from "../../../src/components/style-kit";

import { BackgroundTimeline } from "./_components/background-timeline";

export default function MyBackgroundPage() {
  return (
    <main className="min-h-screen overflow-x-hidden text-(--color-text)">
      <section
        aria-label="My background timeline"
        className="background-page-shell isolate mx-auto min-h-[calc(100vh-53px)] w-full max-w-7xl px-6 py-10 md:px-10 md:py-12"
      >
        <div className="portfolio-background-layer" aria-hidden="true">
          <div className="intro-loading-grid portfolio-background-grid background-page-grid" />
          <DigitalRainBackground className="intro-falling-numbers portfolio-falling-numbers" />
          <div className="intro-loading-noise portfolio-background-noise background-page-noise" />
        </div>
        <div className="background-page-orb background-page-orb-left" aria-hidden="true" />
        <div className="background-page-orb background-page-orb-right" aria-hidden="true" />

        <div className="relative z-10 space-y-6 py-4 md:py-8">
          <div className="flex flex-wrap items-center gap-3">
            <CyberBadge variant="cyan">My Background</CyberBadge>
            <CyberTag variant="pink">Timeline feed</CyberTag>
            <CyberTag variant="gold">Vertical mode</CyberTag>
          </div>

          <StylePanel className="space-y-8 p-5 md:p-8">
            <StylePanelHeader
              description="Let's see how is my journey so far."
              eyebrow="Chronology layer"
              title="Welcome to my background timeline"
              titleAs="h2"
            />

            <BackgroundTimeline />
          </StylePanel>
        </div>
      </section>
    </main>
  );
}
