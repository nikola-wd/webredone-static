import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import type { PluginAPI } from 'tailwindcss/types/config';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textShadow: {
        lg: '1px 1px 30px rgba(0, 0, 0, 0.15)',
      },
      fontFamily: {
        primary: ['var(--font-montserrat)'],
        secondary: ['var(--font-raleway)'],
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(45deg, #1d81cc, #162838 50%)',
        'dots-light':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Ccircle fill='%23ffffff' cx='4' cy='4' r='1' /%3E%3C/svg%3E%0A\")",
        'dots-dark':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Ccircle fill='%23817f8c' cx='4' cy='4' r='1' /%3E%3C/svg%3E%0A\")",
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        brand: '#162838',
        silver: '#f2edf5',
        secondary: '#1d81cc',
        success: '#5e7f2c',
        txt: '#7c7c7c',
        gray: '#f5f5f5',
      },
      transitionTimingFunction: {
        'cubic-in-out': 'cubic-bezier(0.65, 0.05, 0.36, 1)',
      },
      // Add container configurations
      maxWidth: {
        container: '1470px',
      },
      screens: {
        xl: { min: '1520px' },
        lg: { min: '1250px' },
        md: { min: '720px' },
      },
    },
  },
  plugins: [
    typography,
    ({ addUtilities }: PluginAPI) => {
      addUtilities({
        '.text-shadow-lg': {
          textShadow: '1px 1px 30px rgba(0, 0, 0, 0.15)',
        },
      });
    },
  ],
} satisfies Config;
