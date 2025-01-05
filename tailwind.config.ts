import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        bg: "#23283e",
        'bg-alt': "#2a2f4c",
        fg: "#bdbddd",
        'fg-alt': "#cdcdff",
        primary: "#90a0d9",
      },
      lineHeight: {
        tight: '1.2',
      },
    },
  },
  plugins: [],
} satisfies Config;
