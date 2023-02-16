/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#205990",
        secondary: "#F7A355",
        informative: " #6D8B74",
        black: "#424242",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
