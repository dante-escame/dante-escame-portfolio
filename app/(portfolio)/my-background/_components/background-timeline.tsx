"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export interface TimelineItem {
  date: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
}

const defaultTimelineData: TimelineItem[] = [
  {
    date: "Node 01",
    title: "Generic Milestone One",
    subtitle: "Placeholder event",
    paragraphs: [
      "Placeholder summary for the first background checkpoint.",
      "Replace this with crawler-fed content later."
    ]
  },
  {
    date: "Node 02",
    title: "Generic Milestone Two",
    subtitle: "Placeholder event",
    paragraphs: [
      "Placeholder summary for the second background checkpoint.",
      "Replace this with crawler-fed content later."
    ]
  },
  {
    date: "Node 03",
    title: "Generic Milestone Three",
    subtitle: "Placeholder event",
    paragraphs: [
      "Placeholder summary for the third background checkpoint.",
      "Replace this with crawler-fed content later."
    ]
  },
  {
    date: "Node 04",
    title: "Generic Milestone Four",
    subtitle: "Placeholder event",
    paragraphs: [
      "Placeholder summary for the fourth background checkpoint.",
      "Replace this with crawler-fed content later."
    ]
  },
  {
    date: "Node 05",
    title: "Generic Milestone Five",
    subtitle: "Placeholder event",
    paragraphs: [
      "Placeholder summary for the fifth background checkpoint.",
      "Replace this with crawler-fed content later."
    ]
  },
  {
    date: "Node 06",
    title: "Generic Milestone Six",
    subtitle: "Placeholder event",
    paragraphs: [
      "Placeholder summary for the sixth background checkpoint.",
      "Replace this with crawler-fed content later."
    ]
  }
];

interface BackgroundTimelineProps {
  items?: TimelineItem[];
}

export function BackgroundTimeline({ items = defaultTimelineData }: BackgroundTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative max-w-6xl mx-auto py-16 px-6">
      {/* Animated Vertical Line - Centered on desktop, left on mobile */}
      <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-purple-900/20">
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute top-0 left-0 right-0 bottom-0 w-full bg-[#800080] origin-top shadow-[0_0_15px_rgba(128,0,128,0.6)]"
        />
      </div>

      <div className="space-y-24 md:space-y-36">
        {items.map((item, index) => (
          <TimelineEntry key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

function TimelineEntry({ item, index }: { item: TimelineItem; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-center justify-between w-full ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
      {/* Centered Dot */}
      <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
         <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-4 h-4 rounded-full bg-[#df024a] border-2 border-[#f6d8ff] shadow-[0_0_12px_rgba(223,2,74,0.8)]" 
         />
      </div>

      {/* Date (Opposite side on desktop) */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className={`hidden md:flex md:w-[42%] ${isEven ? "justify-end text-right" : "justify-start text-left"}`}
      >
        <div className="flex flex-col">
           <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#0dcdcd] px-3 py-1 bg-[#0dcdcd]/5 border-r-2 md:border-r-0 md:border-l-2 md:border-[#0dcdcd]/40 border-[#0dcdcd]/40">
             {item.date}
           </span>
        </div>
      </motion.div>

      {/* Spacer for center line on desktop */}
      <div className="hidden md:block md:w-[6%]" />

      {/* Content (Main side on desktop) */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-[42%] pl-16 md:pl-0"
      >
        <div 
          className="relative p-6 md:p-8 border border-purple-500/20 backdrop-blur-md hover:border-purple-500/60 transition-all duration-500 group"
          style={{ background: "rgba(8, 4, 13, 0.85)" }}
        >
          {/* Mobile Date Label */}
          <div className="md:hidden mb-4 inline-block px-2 py-0.5 text-[10px] font-bold tracking-widest text-[#0dcdcd] border border-[#0dcdcd]/30 uppercase">
             {item.date}
          </div>

          <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#f6d8ff] group-hover:text-white transition-colors">
            {item.title}
          </h3>
          <h4 className="text-xs md:text-sm font-semibold mb-4 text-[#0dcdcd] tracking-widest uppercase">
            {item.subtitle}
          </h4>
          <div className="w-12 h-[1px] bg-[#df024a] mb-4 group-hover:w-20 transition-all duration-500" />
          <p className="text-sm md:text-[13px] leading-relaxed text-[#ee0869]/90 font-medium">
            {item.paragraphs.map((paragraph, paragraphIndex) => (
              <React.Fragment key={paragraphIndex}>
                {paragraph}
                {paragraphIndex < item.paragraphs.length - 1 ? <br /> : null}
              </React.Fragment>
            ))}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
