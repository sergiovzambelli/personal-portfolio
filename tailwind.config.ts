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
        bg: "#101a30",       // Deep blue background
        'bg-alt': "#162238", // Slightly lighter, deeper blue background
        fg: "#c0d0f0",       // Lighter blue foreground
        'fg-alt': "#d0e0ff", // Even lighter blue foreground
        primary: "#5a78d0",  // Bold blue primary color
      },
      lineHeight: {
        tight: '1.2',
      },
    },
  },
  plugins: [],
} satisfies Config;
