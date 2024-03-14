import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3a4642",
        secondary: "#777e54",
        dark: "#091a18",
        light: "#fffbf4",
        link: "#ba6748",
        gray: {
          50: "#f3f0e9",
          100: "#e7e5de",
          200: "#cecec8",
          300: "#b6b8b2",
          400: "#9da19b",
          500: "#848b86",
          600: "#6b7470",
          700: "#535d59",
          800: "#3a4642",
          900: "#22302d",
        },
      },
    },
  },
  plugins: [],
};
export default config;
