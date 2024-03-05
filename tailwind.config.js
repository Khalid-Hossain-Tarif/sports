/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: "#F8FF29",
        secondary: "#393536",
        gray: "#494549",
        textGray: "#444D56",
        // grayLight: "#ECEDEC",
        // dark: "#03030A",

        // success: "#39B54A",
        danger: "#D32F2F",
        // warning: "#ff8f3c",
        // info: "#1ba2db",
        // review: "#F9AC00",

        // heading: "#222836",
        body: "#f7f8f9",

        // borderLight: "#e5e5e5",
        // borderDark: "#2B364A",
      },
    },
  },
  plugins: [],
};
