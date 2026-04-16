import type { Story, StoryDefault } from "@ladle/react";

import { CyberTag } from "./cyber-tag";

export default {
  title: "UI/CyberTag"
} satisfies StoryDefault;

export const Cyan: Story = () => <CyberTag variant="cyan">Cybernetics</CyberTag>;

export const Pink: Story = () => <CyberTag variant="pink">Hardware</CyberTag>;

export const Gold: Story = () => <CyberTag variant="gold">Legendary</CyberTag>;
