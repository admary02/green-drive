/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        asphalt: {
          DEFAULT: '#18191b', // fundal principal
          800: '#202226', // carduri pe fundal închis
          700: '#2c2f33', // borduri / hover
        },
        signal: {
          DEFAULT: '#ffc629', // galben marcaj rutier
          600: '#f0b400', // hover
        },
        paper: '#f3f2ef', // fundal secțiune prețuri
      },
      fontFamily: {
        sans: ['Archivo', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
