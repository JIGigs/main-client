/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        jig: {
          100: '#x',
          200: '#69788C',
          300: '#6A87A1',
          400: '#2C76DC',
          500: '#0F284A',
          600: '#082144',
          700: '#235eb0',
          800: '#5691e3',
        },
      },
      fontFamily: {
        body: ['INTER', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#2C76DC",
          "secondary": "#69788C",
          "accent": "#6A87A1",
          "neutral": "#2A303C",
          "base-100": "#FCFCFC",
          "info": "#CCEDFF",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
