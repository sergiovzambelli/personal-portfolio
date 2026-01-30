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
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular'],
      },
      colors: {
        // Core Cyber Palette
        background: '#0D1117', // GitHub Dimmed / Dark Terminal
        surface: '#161B22',    // Lighter background for cards/panels
        primary: '#06B6D4',    // Cyan - Active/Focus (Cyber)
        secondary: '#0EA5E9',  // Sky Blue - Secondary information
        accent: '#F59E0B',     // Amber - Warnings / Attention
        command: '#10B981',    // Emerald - Success / Prompt

        // Text Colors
        foreground: '#C9D1D9', // Main text (off-white for readability)
        muted: '#8B949E',      // Comments / metadata

        // Legacy (to be removed after full migration)
        bg: "#101a30",
        'bg-alt': "#162238",
        fg: "#c0d0f0",
        'fg-alt': "#d0e0ff",
      },
      lineHeight: {
        tight: '1.2',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
