import type { Story, StoryDefault } from "@ladle/react";

import { AttentionBox } from "./attention-box";

export default {
  title: "UI/AttentionBox"
} satisfies StoryDefault;

export const Default: Story = () => (
  <AttentionBox title="System Alert" variant="default">
    High-voltage interference detected in sector 7.
  </AttentionBox>
);

export const Gold: Story = () => (
  <AttentionBox title="Neuromancer Protocol" variant="gold">
    Protocol Gold-Alpha is now active.
  </AttentionBox>
);
