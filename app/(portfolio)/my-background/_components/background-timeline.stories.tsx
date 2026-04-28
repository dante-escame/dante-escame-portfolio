import React from "react";
import { BackgroundTimeline, TimelineItem } from "./background-timeline";

export default {
  title: "Sections/BackgroundTimeline",
  component: BackgroundTimeline,
};

export const Default = () => (
  <div className="bg-[#010104] min-h-screen">
    <BackgroundTimeline />
  </div>
);

const customData: TimelineItem[] = [
  {
    date: "2024",
    title: "Project Alpha",
    subtitle: "Lead Developer",
    description: "Successfully led a team of 5 to deliver a high-performance web application."
  },
  {
    date: "2023",
    title: "Senior Engineer",
    subtitle: "Tech Stack Overhaul",
    description: "Migrated legacy infrastructure to a modern serverless architecture."
  }
];

export const CustomData = () => (
  <div className="bg-[#010104] min-h-screen">
    <BackgroundTimeline items={customData} />
  </div>
);
