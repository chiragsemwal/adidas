/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customAdidasYellow: "#eee735",
        customAdidasGrey: "#282c32",
      },
    },
  },
  plugins: [],
};
