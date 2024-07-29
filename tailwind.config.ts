import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bb-bg-one": "url('../public/assets/images/landingHero.png')",
        "bb-bg-two": "url('../public/assets/images/about-hero.png')",
      },
      colors: {
        bb: {
          "black-28": "#00000047",

          "gray-25": "#FCFCFD",
          "gray-100": "#F2F4F7",
          "gray-200": "#EAECF0",
          "gray-300": "#D0D5DD",
          "gray-400": "#98A2B3",
          "gray-500": "#667085",
          "gray-600": "#099250",
          "gray-700": "#475467",
          "gray-750": "#344054",
          "gray-900": "#101828",

          "primary-25": "#F6FEF9",
          "primary-600": "#099250",
          "primary-700": "#087443",
        },
      },
      boxShadow: {
        "1xl": "0 1px 2px 0px rgba(16, 24, 40, 0.051)",
      },
    },
  },
  plugins: [],
};
export default config;
