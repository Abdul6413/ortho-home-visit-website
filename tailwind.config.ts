import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { 50: "#f3f6fb", 100: "#e3eaf5", 200: "#c5d3e8", 600: "#2b5088", 700: "#1d4175", 800: "#13315c", 900: "#0b2545", 950: "#07182f" },
        brand: { 50: "#effafa", 100: "#d5f2f1", 200: "#a9e4e1", 500: "#14958f", 600: "#0f7b76", 700: "#0b635f", 900: "#083f3d" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: { soft: "0 8px 30px -12px rgba(11,37,69,0.18)" },
    },
  },
  plugins: [],
};
export default config;
