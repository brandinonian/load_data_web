/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: 'transparent',
      blue: {
        100: '#1bbcd1',
        200: '#1d8491',
        300: '#0e3a40',
        400: '#082124',
        500: '#081314',
      },
      grey: {
        100: '#dce4e6',
        200: '#b6bebf',
        300: '#252626',
        400: '#161717',
        500: '#0f0f0f',
      },
      display: {
        100: '#ccfce1',
        200: '#89e0af',
        300: '#6be39f',
        400: '#3ade81',
        500: '#1bf579',
      },
      gold: '#c99d22',
    },
  },
  plugins: [require('daisyui'),],
};
