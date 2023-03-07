/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  extend: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
  },
  theme: {
    extend: {
      animation: {
        "pulse-s": "pulse-s 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "pulse-s": {
          "0%": { color: "black" },
          "40%": { color: "transparent" },
          "80%": { color: "transparent" },
          "100%": { color: "black" },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
