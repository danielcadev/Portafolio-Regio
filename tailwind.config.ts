import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Habilita el modo oscuro
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'dom-blue': '#000f4a',
      },
      perspective: {
        '1000': '1000px',
      },
      perspectiveOrigin: {
        'center': 'center',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      spacing: {
        '30': '7.5rem',
        '40': '10rem',  
      },
    },
  },
  plugins: [
    require('tailwindcss-3d'),
    require('tailwindcss/plugin')(function({ addUtilities }: { addUtilities: (utilities: object, variants: string[]) => void }) {
      addUtilities({
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.transform-center': {
          transformOrigin: 'center',
        },
      }, ['responsive']);
    }),
  ],
};

export default config;