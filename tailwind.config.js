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
        jig : {
          100: '#93c69e',
          200: '#83be90',
          300: '#74b682',
          400: '#64ae74',
          500: '#5a9d68',
          600: '#508b5d',
          700: '#467a51',
          800: '#3c6846',
          900: '#32573a',
        },
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}
