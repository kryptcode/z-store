/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // colors: {
    //   'lightpurp': '#8d2ce2',
    //   'darkpurp': '#4b01e0',
    // },
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },
    extend: {

    },
  },
  plugins: [
    require("daisyui"),
    require('tailwind-scrollbar')
  ],
}