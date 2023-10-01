/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        desktop: '0rem',
      }
    },
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        'white-soft': 'rgb(var(--color-white-soft) / <alpha-value>)',
        'white-mute': 'rgb(var(--color-white-mute) / <alpha-value>)',
        'black-soft': 'rgb(var(--color-black-soft) / <alpha-value>)',
        'black-mute': 'rgb(var(--color-black-mute) / <alpha-value>)',
        'light-1': 'rgb(var(--color-text-light-1) / <alpha-value>)',
        'light-2': 'rgb(var(--color-text-light-1) / <alpha-value>)',
        'dark-1': 'rgb(var(--color-text-dark-1) / <alpha-value>)',
        'dark-2': 'rgb(var(--color-text-dark-2) / <alpha-value>)',
        'divider-light-1': 'rgb(var(--color-divider-light-1) / <alpha-value>)',
        'divider-light-2': 'rgb(var(--color-divider-light-1) / <alpha-value>)',
        'divider-dark-1': 'rgb(var(--color-divider-dark-1) / <alpha-value>)',
        'divider-dark-2': 'rgb(var(--color-divider-dark-2) / <alpha-value>)',
      }
    },
  },
  plugins: [],
}