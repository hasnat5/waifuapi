/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },

      colors: {
        primary: "#F2F4F8",
        secondary: "",
        thirdy: "#F2F4F8"
      }

    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lofi",],
  },
}
