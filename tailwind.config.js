/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './app/**/*.{js,ts,jsx,tsx,.json}'],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: ['tailwindcss-animate'],
};
