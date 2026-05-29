import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // USA Flag Patriotic Theme
        'usa-blue': '#0B3C6D',      // Primary - USA Blue
        'usa-red': '#C1121F',        // Secondary - Crimson Red
        'usa-gold': '#D4A017',       // Accent - Gold
        'usa-light': '#F8F9FC',      // Background
        'usa-dark': '#1B263B',       // Foreground
        
        // Supporting colors
        'usa-blue-light': '#1E5288',
        'usa-blue-dark': '#062847',
        'usa-red-dark': '#A00D1A',
        'usa-gray-light': '#E6EBF4',
        'usa-gray-muted': '#536079',
        
        // Semantic colors
        primary: '#0B3C6D',
        secondary: '#C1121F',
        accent: '#D4A017',
        background: '#F8F9FC',
        foreground: '#1B263B',
        border: '#D8E0EE',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'usa': '0 18px 38px rgba(11, 60, 109, 0.20)',
        'usa-md': '0 4px 12px rgba(11, 60, 109, 0.10)',
        'usa-lg': '0 12px 24px rgba(11, 60, 109, 0.15)',
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'fadeUp': 'fadeUp 0.75s ease-out both',
        'slideIn': 'slideIn 0.85s ease-out both',
      },
    },
  },
  plugins: [],
}

export default config
