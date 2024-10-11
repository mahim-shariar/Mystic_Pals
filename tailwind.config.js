// // tailwind.config.js

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     // ...
//     // make sure it's pointing to the ROOT node_module
//     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   darkMode: "class",
//   plugins: [nextui()],
// };

const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0A0A23",
        lightBlue: "#6FC3DF",
        teal: "#3D9CA8",
        primary: "#8A4D9E",
        pink: "#E06A8A",
        white: "#FFFFFF", // Default white can also be used directly in Tailwind
        secondary: "#7ED6E8",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
