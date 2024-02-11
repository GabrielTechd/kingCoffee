import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#1A120B",
        "texto": "#f1f1f1",
        "primaria": "#C8AE7D",
        "secundaria": "#B0926A",
        "destaque": "#3C2A21",
      },
    },
  },
  plugins: [],
};
export default config;
