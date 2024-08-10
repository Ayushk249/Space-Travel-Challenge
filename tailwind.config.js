/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        Bellefair: ["Bellefair", "serif"],
        Barlow: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
}

