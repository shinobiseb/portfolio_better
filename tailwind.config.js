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
        'black': '#252422',
        'gray': '#403d39',
        'lightgray': '#ccc5b9',
        'white': '#fffcf2',
      },
      keyframes: {
        revolve: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        revolve: 'revolve 10s linear infinite',
      },
    },
  },
  plugins: [],
}
