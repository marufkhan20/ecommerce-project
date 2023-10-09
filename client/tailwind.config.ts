import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#111827",
        secondary: "#64748b",
        success: "#3BCC70",
        "slate-hover": "#F1F5F9",
      },
    },
  },
  plugins: [],
};
export default config;
