/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','login.html', 'request-demo.html'],
  darkMode: false,
  theme: {
    extend: {
      colors:{
        "proton-blue": "#172554",
        "proton-white": "#ffffff",
        "proton-grey": "#F7F7F7",
        "proton-dusty": "#601FA1",
        "proton-purple": "#DD58D6",
      },
      fontFamily:{
        inter: ['Inter, sans-serif'],
      },
    },
    container:{
      center: true,
      padding: "1rem",
      screens:{
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
}