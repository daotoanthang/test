/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        bgColor: "#1f1f38",
        bgVariant: "#2c2c6c",
        primary: "#db2b44",
        primaryVariant: "rgba(77,181,255,0.4)",
        light: "rgba(255,255,255,0.6)",
      },
    },
  },
  plugins: [],
};
