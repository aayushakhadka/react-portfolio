/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      // hideNav: { max: "600px" },
      mobileS:"320px",
      mobileM: "375px",
      mobileL: "425px",
      mobilexl:'502px',
      tablet: "768px",
      laptop1: "1024px",
      laptop: "1440px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        display:["Poppins",'sans serif'],
      },
    },
  },
  plugins: [],
};
