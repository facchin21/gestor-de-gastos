/** @type {import('tailwindcss').Config} */

export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      "primary": '#E1ECC8',
      "secondary": '#38A37F',
      "dark": '#000000',
      'boder_botton': 'rgba(81, 81, 81)',
      
    },
    fontFamily: {
      "Caveat": ["Caveat", "cursive"],
      "Inter": ["Inter", "sans-serif"],
      "Roboto": ["Roboto", "sans-serif"],
    }
  },
};
export const plugins = [];

