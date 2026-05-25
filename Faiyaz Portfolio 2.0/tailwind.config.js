/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f9d0d8',
          300: '#f4a8b8',
          400: '#ed7290',
          500: '#e04070',
          600: '#cc1f56',
          700: '#ab1245',
          800: '#8f123e',
          900: '#7a1239',
          950: '#6b0030',
        },
        crimson: '#8B0032',
        'crimson-deep': '#6B0026',
        'crimson-light': '#A8003E',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(139, 0, 50, 0.08), 0 2px 8px rgba(0,0,0,0.04)',
        'glass-lg': '0 24px 64px 0 rgba(139, 0, 50, 0.12), 0 4px 16px rgba(0,0,0,0.06)',
        'glass-hover': '0 32px 80px 0 rgba(139, 0, 50, 0.18), 0 8px 32px rgba(0,0,0,0.08)',
        'maroon': '0 8px 32px rgba(139, 0, 50, 0.25)',
        'maroon-lg': '0 16px 48px rgba(139, 0, 50, 0.35)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'blob': 'blob 10s infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(1deg)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%': { borderRadius: '50% 60% 30% 60% / 30% 60% 70% 40%' },
          '75%': { borderRadius: '60% 40% 60% 30% / 60% 30% 60% 50%' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
