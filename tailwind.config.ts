import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f7f3f9",
          100: "#efe7f4",
          200: "#dfcfea",
          300: "#cfb6e0",
          400: "#bf9ed5",
          500: "#a683bd",
          600: "#926ca9",
          700: "#7d5695",
          800: "#67407a",
          900: "#523260",
          950: "#34203d",
          DEFAULT: "#a683bd",
        },
        secondary: {
          50: "#eef2fb",
          100: "#dbe4f6",
          200: "#bcc8ee",
          300: "#97a6e3",
          400: "#6f7ad5",
          500: "#4b57c3",
          600: "#2a3f8b",
          700: "#223271",
          800: "#1a2757",
          900: "#121b3d",
          950: "#0c1126",
          DEFAULT: "#2a3f8b",
        },
        "background-light": "#f6f7f8",
        "background-dark": "#111921",
        "neutral-border": "#e5e7eb",
        "neutral-text-main": "#111418",
        "neutral-text-sub": "#637588",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
