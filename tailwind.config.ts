import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        light: {
          primary: '#0ea5e9',
          'primary-hover': '#0284c7',
          'primary-light': '#bae6fd',
          'primary-dark': '#0369a1',
          secondary: '#06b6d4',
          'secondary-hover': '#0891b2',
          'secondary-light': '#a5f3fc',
          success: '#10b981',
          'success-hover': '#059669',
          'success-light': '#a7f3d0',
          warning: '#f59e0b',
          'warning-hover': '#d97706',
          'warning-light': '#fde68a',
          error: '#ef4444',
          'error-hover': '#dc2626',
          'error-light': '#fecaca',
          background: '#f0f9ff',
          surface: '#ffffff',
          text: '#0f172a',
          'text-secondary': '#334155',
          'text-tertiary': '#64748b',
          border: '#e2e8f0',
          'border-accent': '#bae6fd',
          'border-strong': '#94a3b8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Tajawal', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
      },
      backgroundImage: {
        'light-gradient': 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #e0f2fe 100%)',
        'light-primary-gradient': 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
        'light-secondary-gradient': 'linear-gradient(135deg, #bae6fd 0%, #a5f3fc 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      },
      boxShadow: {
        'light': '0 4px 6px -1px rgba(14, 165, 233, 0.1), 0 2px 4px -1px rgba(14, 165, 233, 0.06)',
        'light-lg': '0 10px 15px -3px rgba(14, 165, 233, 0.1), 0 4px 6px -2px rgba(14, 165, 233, 0.05)',
        'light-xl': '0 20px 25px -5px rgba(14, 165, 233, 0.1), 0 10px 10px -5px rgba(14, 165, 233, 0.04)',
        'light-glow': '0 0 20px rgba(14, 165, 233, 0.3)',
        'light-glow-lg': '0 0 30px rgba(14, 165, 233, 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;