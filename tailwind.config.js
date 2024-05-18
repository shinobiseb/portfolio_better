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
        'arrow' : 'url(https://pouch.jumpshare.com/preview/brFjsc61kW-krMesmRJZgZpUGsVmDj7YLQ7T3QBgVhkzbhcrh8CVhdkeO1Mu-8rKL9BoFa7pRGzl3y6s3NY2rVYLTTmLIZ6Wf1EYsB-2ugk)'
      },
    },
  },
  plugins: [],
}