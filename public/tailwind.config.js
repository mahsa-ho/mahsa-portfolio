/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandPink: "#ff8ec7",
        brandLightPink: "#ffe2f1",
        brandDarkPink: "#ff5aaa",
      },
      fontFamily: {
        cute: ["Nunito", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
