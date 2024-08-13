/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : '#E1ECC8',
        "secondary" : '#38A37F',
        "dark" : '#000000',

      },
      fontFamily : {
        "Caveat" : ["Caveat", "cursive"],
        "Inter" : ["Inter", "sans-serif"],
         
      }
    },
  },
  plugins: [],
}

