import type { Story, StoryDefault } from "@ladle/react";

import { PillSelector } from "./pill-selector";

export default {
  title: "UI/PillSelector"
} satisfies StoryDefault;

export const Default: Story = () => (
  <PillSelector
    defaultValue="cc"
    options={[
      { label: "Night City", value: "nc" },
      { label: "Chiba City", value: "cc" },
      { label: "Neo-Tokyo", value: "nt" }
    ]}
  />
);
