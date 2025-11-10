const nativewind = require("nativewind/preset");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', 
    './components/**/*.{js,ts,tsx}', 
    './navigation/**/*.{js,ts,tsx}', './screens/**/*.{js,ts,tsx}'],

  presets: [nativewind],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        primary: '#8ed5e8',
        secondary: '#f4a261',
        accent: '#e76f51',
        background: '#EFECE3',
      },
      fontFamily: {
        roboto: ['Roboto'],
        quicksand: ['Quicksand_700Bold'],
      }
    },
  },
  plugins: [],
};
