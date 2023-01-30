/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mercury: "rgb(30, 193, 162)",
        venus: "rgb(237, 162, 73)",
        earth: "rgb(109, 46, 213)",
        mars: "rgb(209, 76, 50)",
        jupiter: "rgb(216, 58, 52)",
        saturn: "rgb(205, 81, 32)",
        uranus: "rgb(30, 193, 162)",
        neptune: "rgb(45, 104, 240)",
        lightgrey: "rgb(131, 131, 145)",
        darkgrey: "rgb(56, 56, 79)",
        background: "rgb(7, 7, 36)",
        white: "#ffffff",
      },
    },
    fontFamily: {
      antonio: ["Antonio, sans-serif"],
      spartan: ["League Spartan, sans-serif"],
    },
    backgroundImage: {
      bgimage: "url('../public/assets/background-stars.svg')",
    },
    screens: {
      sm: { min: "375px", max: "767px" },
      md: { min: "768px", max: "1439px" },
      lg: { min: "1440px" }, 
    },
  },

  plugins: [],
};
