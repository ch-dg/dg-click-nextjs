/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  corePlugins: {
    container: false,
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1200px",
          },
        },
      });
    },
  ],
  theme: {
    screens: {
      xs: { max: "375px" },
      // => @media (max-width: 375px) { ... }
      mobileLandscape: { raw: "(max-height: 440px)" },
      // => @media (max-height: 440px) { ... }
      md: "896px",
      // => @media (min-width: 784px) { ... }
      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        primary: "#0675CD",
      },
    },
  },
};
