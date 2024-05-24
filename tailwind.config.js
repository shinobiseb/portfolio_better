/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#eb5e28',
        'black' : '#252422',
        'gray' : '#403d39',
        'lightgray' : '#ccc5b9',
        'white' : '#fffcf2',
      },
      assets: {
      },
    },
  },
  plugins: [],
}