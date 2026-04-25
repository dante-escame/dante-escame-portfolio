import type { Story, StoryDefault } from "@ladle/react";

import { DigitalRainBackground } from "./digital-rain-background";

export default {
  title: "Components/DigitalRainBackground"
} satisfies StoryDefault;

export const Default: Story = () => (
  <div className="relative min-h-[32rem] overflow-hidden rounded border border-(--color-border) bg-(--color-bg-elevated)">
    <div className="intro-loading-grid" aria-hidden="true" />
    <DigitalRainBackground />
    <div className="intro-loading-noise" aria-hidden="true" />

    <div className="relative z-10 flex min-h-[32rem] items-end p-6">
      <p className="max-w-md text-sm uppercase tracking-[0.22em] text-(--color-cyan)">
        Loader-style numeric rain reused as an ambient background layer.
      </p>
    </div>
  </div>
);
