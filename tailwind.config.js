/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eefdf5',
          100: '#d6f8e3',
          200: '#aff0c9',
          300: '#77e0a8',
          400: '#3ec786',
          500: '#18ab6c',
          600: '#0f8a58',
          700: '#0f6d48',
          800: '#0f573b',
          900: '#0d4832',
        },
      },
    },
  },
  plugins: [],
};
