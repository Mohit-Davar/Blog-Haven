/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Views/**/*.{ejs,html,js}"],
  theme: {
    extend: {
      colors: {
        "theme-one": "#e97370",
        "theme-two": "#5ba8b9"
      },
      boxShadow: {
        "button": "3px 3px 0px 0px rgb(0,0,0)",
        "buttonTwo": "0px 0px 0px 5px rgb(255,255,255) , 0px 0px 0px 10px rgb(91, 168, 185)"
      },
      fontFamily: {
        "Roboto": ['Roboto', 'sans-serif'],
        "Playwrite": ['Playwrite DE Grund', 'sans-serif'],
        "Lobster": ['Lobster', 'sans-serif']
      }

    },
  },
  plugins: [],
}
