import type { Story, StoryDefault } from "@ladle/react";

import { CyberToggle } from "./cyber-toggle";

export default {
  title: "UI/CyberToggle"
} satisfies StoryDefault;

export const Off: Story = () => <CyberToggle defaultChecked={false} label="Neural Link" />;

export const On: Story = () => <CyberToggle defaultChecked label="Encryption" />;
