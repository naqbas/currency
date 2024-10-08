/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '425px'}
      },
      colors: {
        'green': '#85bb65'
      }
    },
  },
  plugins: [],
}