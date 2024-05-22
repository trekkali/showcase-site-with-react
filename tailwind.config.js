/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
    theme: {
        extend: {
          fontFamily: {
            oswald: ['Oswald', 'sans-serif'],
            dancing: ['Dancing Script', 'cursive'],
          },
        },
  
  },
  darkMode: "class",
  plugins: [require("tw-elements/plugin.cjs")],
};