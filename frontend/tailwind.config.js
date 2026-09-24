/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-deep': '#071A2B',
        'navy-dark': '#0B253D',
        'emerald-primary': '#10B981',
        'emerald-bright': '#34D399',
        'soft-bg': '#F5F8FA',
        'text-dark': '#102A43',
        'text-gray': '#64748B',
        'danger-red': '#EF4444',
        'warning-amber': '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
