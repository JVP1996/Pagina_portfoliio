import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        hyorin: {
          bg: "#050811",
          card: "rgba(11, 19, 43, 0.45)",
          border: "rgba(56, 189, 248, 0.2)",
          cyan: "#00f2fe",
          ice: "#38bdf8",
          glow: "rgba(0, 242, 254, 0.15)",
        },
      },
      boxShadow: {
        ice: "0 0 25px -5px rgba(0, 242, 254, 0.25)",
        "ice-hover": "0 0 35px 2px rgba(56, 189, 248, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
