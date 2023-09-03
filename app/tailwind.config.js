/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        darkBlack: "#181e1e",
        red: "#e63946",
        pink: "#ff6864",
        yellow: "#ffca28",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};