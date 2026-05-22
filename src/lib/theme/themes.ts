export type ThemeId = "cyberpunk" | "rustic" | "natural";

export type ThemeTokens = {
  bg: string;
  bgElevated: string;
  panel: string;
  heading: string;
  text: string;
  accent: string;
  pink: string;
  cyan: string;
  gold: string;
  border: string;
  borderCyan: string;
  shadowGlowSoft: string;
  bodyBg: string;
  bodyGridColor: string;
  fallingCharColor: string;
  fallingCharShadowColor: string;
  canvas: {
    wireframe: string;
    light1: string;
    light2: string;
    light3: string;
    ambient: string;
  };
};

export const themes: Record<ThemeId, ThemeTokens> = {
  cyberpunk: {
    bg: "#010104",
    bgElevated: "#08040d",
    panel: "rgba(12, 4, 18, 0.92)",
    heading: "#f6d8ff",
    text: "#ee0869",
    accent: "#800080",
    pink: "#df024a",
    cyan: "#0dcdcd",
    gold: "#f9f338",
    border: "rgba(128, 0, 128, 0.52)",
    borderCyan: "rgba(13, 205, 205, 0.48)",
    shadowGlowSoft: "0 0 24px rgba(128, 0, 128, 0.32)",
    bodyBg: [
      "radial-gradient(circle at top, rgba(128, 0, 128, 0.12), transparent 26%)",
      "radial-gradient(circle at 82% 16%, rgba(13, 205, 205, 0.05), transparent 18%)",
      "linear-gradient(180deg, #06020a 0%, #020104 46%, #000001 100%)",
    ].join(", "),
    bodyGridColor: "rgba(128, 0, 128, 0.08)",
    fallingCharColor: "rgba(223, 2, 74, 0.78)",
    fallingCharShadowColor: "rgba(223, 2, 74, 0.7)",
    canvas: {
      wireframe: "#df024a",
      light1: "#df024a",
      light2: "#800080",
      light3: "#0dcdcd",
      ambient: "#f6d8ff",
    },
  },

  rustic: {
    bg: "#1a1513",
    bgElevated: "#282328",
    panel: "rgba(40, 35, 40, 0.92)",
    heading: "#E5DFC4",
    text: "#C1A17A",
    accent: "#977862",
    pink: "#7a5540",
    cyan: "#C1A17A",
    gold: "#D4A868",
    border: "rgba(151, 120, 98, 0.52)",
    borderCyan: "rgba(193, 161, 122, 0.48)",
    shadowGlowSoft: "0 0 24px rgba(151, 120, 98, 0.32)",
    bodyBg: [
      "radial-gradient(circle at top, rgba(151, 120, 98, 0.12), transparent 26%)",
      "radial-gradient(circle at 82% 16%, rgba(193, 161, 122, 0.05), transparent 18%)",
      "linear-gradient(180deg, #120e0b 0%, #0e0a07 46%, #0a0705 100%)",
    ].join(", "),
    bodyGridColor: "rgba(151, 120, 98, 0.08)",
    fallingCharColor: "rgba(193, 161, 122, 0.78)",
    fallingCharShadowColor: "rgba(193, 161, 122, 0.7)",
    canvas: {
      wireframe: "#977862",
      light1: "#977862",
      light2: "#C1A17A",
      light3: "#E5DFC4",
      ambient: "#E5DFC4",
    },
  },

  natural: {
    bg: "#0c1a0c",
    bgElevated: "#162716",
    panel: "rgba(20, 38, 20, 0.92)",
    heading: "#F2E8CF",
    text: "#A7C957",
    accent: "#386641",
    pink: "#BC4749",
    cyan: "#6a994e",
    gold: "#A7C957",
    border: "rgba(56, 102, 65, 0.52)",
    borderCyan: "rgba(106, 153, 78, 0.48)",
    shadowGlowSoft: "0 0 24px rgba(56, 102, 65, 0.32)",
    bodyBg: [
      "radial-gradient(circle at top, rgba(56, 102, 65, 0.12), transparent 26%)",
      "radial-gradient(circle at 82% 16%, rgba(106, 153, 78, 0.05), transparent 18%)",
      "linear-gradient(180deg, #050e05 0%, #080d06 46%, #040903 100%)",
    ].join(", "),
    bodyGridColor: "rgba(56, 102, 65, 0.08)",
    fallingCharColor: "rgba(106, 153, 78, 0.78)",
    fallingCharShadowColor: "rgba(106, 153, 78, 0.7)",
    canvas: {
      wireframe: "#BC4749",
      light1: "#BC4749",
      light2: "#386641",
      light3: "#6a994e",
      ambient: "#F2E8CF",
    },
  },
};

export const defaultTheme: ThemeId = "cyberpunk";

export function isValidTheme(value: unknown): value is ThemeId {
  return value === "cyberpunk" || value === "rustic" || value === "natural";
}
