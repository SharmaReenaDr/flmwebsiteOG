import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#faf9f7",
          100: "#f5f2ed",
          200: "#efeae3",
          300: "#e6e0d7",
          400: "#d9d2c7",
          500: "#ccc5ba",
        },
        teal: {
          400: "#52c2b3",
          500: "#48b4a5",
          600: "#3a8f7f",
        },
        gold: {
          400: "#d4b26f",
          500: "#c9a25f",
        },
        ink: {
          900: "#1c1a17",
          700: "#2d2a25",
          600: "#3a3733",
          500: "#4a443b",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["'Inter Variable'", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 60px rgba(0,0,0,0.08)",
      },
      backgroundImage: {
        "radial-soft": "radial-gradient(circle at 20% 20%, rgba(72,180,165,0.12), transparent 40%), radial-gradient(circle at 80% 0%, rgba(26, 22, 17, 0.08), transparent 35%), radial-gradient(circle at 50% 80%, rgba(120, 190, 170, 0.1), transparent 45%)",
      },
    },
  },
  plugins: [],
};

export default config;
