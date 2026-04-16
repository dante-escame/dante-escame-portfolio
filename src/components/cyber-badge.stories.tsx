import type { Story, StoryDefault } from "@ladle/react";

import { CyberBadge } from "./cyber-badge";

export default {
  title: "UI/CyberBadge"
} satisfies StoryDefault;

export const Pink: Story = () => <CyberBadge variant="pink">Admin</CyberBadge>;

export const Cyan: Story = () => <CyberBadge variant="cyan">User</CyberBadge>;

export const Gold: Story = () => <CyberBadge variant="gold">Root</CyberBadge>;
