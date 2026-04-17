import type { Story, StoryDefault } from "@ladle/react";

import { WhoAmISection } from "./who-am-i-section";

export default {
  title: "Sections/WhoAmISection"
} satisfies StoryDefault;

export const Default: Story = () => <WhoAmISection />;
