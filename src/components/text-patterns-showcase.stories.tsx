import type { Story, StoryDefault } from "@ladle/react";

import { TextPatternsShowcase } from "./text-patterns-showcase";

export default {
  title: "Sections/TextPatternsShowcase"
} satisfies StoryDefault;

export const Default: Story = () => (
  <div className="mx-auto max-w-4xl p-8">
    <TextPatternsShowcase />
  </div>
);
