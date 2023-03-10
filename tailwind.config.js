/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: { max: "375px" },
      // => @media (max-width: 375px) { ... }
      mobileLandscape: { raw: "(max-height: 440px)" },
      // => @media (max-height: 440px) { ... }
      md: "784px",
      // => @media (min-width: 784px) { ... }

      lg: "1040px",
      // => @media (min-width: 1040px) { ... }
    },
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen md": {
            maxWidth: "688px",
          },
          "@screen lg": {
            maxWidth: "1040px",
          },
        },
      });
    },
  ],
};
