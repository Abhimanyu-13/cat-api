/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        navbarColor: "#0f1111",
        headlineColor: "rgb(14 162 152)",
        headlineTextColor: "#555"
      }
    },
  },
  plugins: [],
}