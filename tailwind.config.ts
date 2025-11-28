
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
        ios: {
          blue: '#007AFF',
          gray: '#8E8E93',
          bg: '#F5F7FA', // Winter-ish light gray-blue
          card: '#FFFFFF',
          divider: '#C6C6C8',
        },
        winter: {
          100: '#E3F2FD', // Very light blue
          200: '#BBDEFB',
          300: '#90CAF9',
          text: '#1E3A8A', // Deep blue for text
        }
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      }
    },
  },
  plugins: [],
};
export default config;
