import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: "1200px",
    },
    colors: {
      "main-green": "#7AC751",
      "primary-gray": "#555555",
      "secondary-gray": "#515151",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
