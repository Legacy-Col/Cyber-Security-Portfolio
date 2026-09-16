import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0D1214",
        panel: "#141B1F",
        panelHover: "#1A2328",
        border: "#232E33",
        ink: "#E7EAEA",
        muted: "#7C8791",
        amber: "#E8A33D",
        signal: "#4FA8D8",
      },
      fontFamily: {
        sans: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "72ch",
      },
    },
  },
  plugins: [],
};

export default config;