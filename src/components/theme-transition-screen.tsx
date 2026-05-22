"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";

const CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const COLUMN_COUNT = 20;

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

interface RainColumnProps {
  left: number;
  delay: number;
  duration: number;
}

function RainColumn({ left, delay, duration }: RainColumnProps) {
  const chars = useMemo(
    () =>
      Array.from({ length: Math.floor(Math.random() * 14) + 10 }, () => ({
        char: randomChar(),
        opacity: 0.12 + Math.random() * 0.5,
      })),
    [],
  );

  return (
    <div
      className="theme-transition-rain-column"
      style={{
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      {chars.map((c, i) => (
        <div key={i} className="theme-transition-rain-char" style={{ opacity: c.opacity }}>
          {c.char}
        </div>
      ))}
    </div>
  );
}

interface ThemeTransitionScreenProps {
  isVisible: boolean;
  themeName: string;
}

export function ThemeTransitionScreen({ isVisible, themeName }: ThemeTransitionScreenProps) {
  const columns = useMemo(
    () =>
      Array.from({ length: COLUMN_COUNT }, (_, i) => ({
        left: (i / COLUMN_COUNT) * 100 + Math.random() * 2,
        delay: Math.random() * 0.15,
        duration: 1.0 + Math.random() * 0.4,
      })),
    [],
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="theme-transition"
          aria-hidden="true"
          className="theme-transition-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.15 } }}
          exit={{ opacity: 0, transition: { duration: 0.35 } }}
        >
          <div className="theme-transition-scan-line" />

          <div className="theme-transition-rain">
            {columns.map((col, i) => (
              <RainColumn key={i} {...col} />
            ))}
          </div>

          <motion.div
            className="theme-transition-badge"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.2 }}
          >
            <div className="theme-transition-badge-corner theme-transition-badge-corner--tl" />
            <div className="theme-transition-badge-corner theme-transition-badge-corner--tr" />
            <div className="theme-transition-badge-corner theme-transition-badge-corner--bl" />
            <div className="theme-transition-badge-corner theme-transition-badge-corner--br" />
            <div className="theme-transition-badge-label">{themeName.toUpperCase()}</div>
            <div className="theme-transition-badge-sub">INITIALIZING</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
