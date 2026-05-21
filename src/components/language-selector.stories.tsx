import type { Story, StoryDefault } from "@ladle/react";

import { LanguageSelector } from "./language-selector";

export default {
  title: "Components/LanguageSelector",
} satisfies StoryDefault;

export const Default: Story = () => (
  <div className="flex items-center gap-3 p-4">
    <LanguageSelector />
  </div>
);
