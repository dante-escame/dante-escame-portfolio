import type { Story, StoryDefault } from "@ladle/react";

import { CyberSlider } from "./cyber-slider";

export default {
  title: "UI/CyberSlider"
} satisfies StoryDefault;

export const Default: Story = () => (
  <CyberSlider defaultValue={75} label="Signal Strength" />
);
