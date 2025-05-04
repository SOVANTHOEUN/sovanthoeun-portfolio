import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/1_app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/2_view/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/3_widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/4_features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/5_entities/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/6_shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{html,js,json}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // You can add custom colors here if needed
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "inherit",
            a: {
              color: "inherit",
              textDecoration: "none",
              fontWeight: "500",
            },
            strong: {
              color: "inherit",
            },
            code: {
              color: "inherit",
            },
            h1: {
              color: "inherit",
            },
            h2: {
              color: "inherit",
            },
            h3: {
              color: "inherit",
            },
            h4: {
              color: "inherit",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
