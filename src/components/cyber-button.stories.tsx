import type { Story, StoryDefault } from "@ladle/react";

import { CyberButton } from "./cyber-button";

export default {
  title: "UI/CyberButton"
} satisfies StoryDefault;

export const Primary: Story = () => (
  <CyberButton variant="primary">Execute</CyberButton>
);

export const Secondary: Story = () => (
  <CyberButton variant="secondary">Cancel</CyberButton>
);

export const Gold: Story = () => <CyberButton variant="gold">Gold-Tier</CyberButton>;

export const Disabled: Story = () => (
  <CyberButton disabled variant="primary">
    Locked
  </CyberButton>
);
