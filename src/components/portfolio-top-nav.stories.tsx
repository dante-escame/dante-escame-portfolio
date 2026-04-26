import type { Story, StoryDefault } from "@ladle/react";

import { PortfolioTopNav } from "./portfolio-top-nav";

export default {
  title: "Components/PortfolioTopNav",
} satisfies StoryDefault;

const frameClassName = "min-h-screen bg-(--color-bg)";

export const WhoAmIActive: Story = () => (
  <div className={frameClassName}>
    <PortfolioTopNav activeHref="/who-am-i" />
  </div>
);

export const MyBackgroundActive: Story = () => (
  <div className={frameClassName}>
    <PortfolioTopNav activeHref="/my-background" />
  </div>
);
