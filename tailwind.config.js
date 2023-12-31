/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["IBM Plex Mono", "monospace"],
        secondary: ["Raleway", "sans-serif"],
      },
      colors: {
        primary: "#080808",
        secondary: "#1B1B1B",
        monofont: "#9C9C9C",
        buttoncolor: "#3F8E00",
        formbackground: "#F8F8F8",
      },
    },
  },
  plugins: [],
};
