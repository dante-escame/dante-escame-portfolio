import type { Story, StoryDefault } from "@ladle/react";

import { PortfolioTechnologiesGrid } from "./portfolio-technologies-grid";

export default {
  title: "Components/PortfolioTechnologiesGrid"
} satisfies StoryDefault;

export const Default: Story = () => (
  <div className="mx-auto max-w-6xl p-6">
    <PortfolioTechnologiesGrid />
  </div>
);
