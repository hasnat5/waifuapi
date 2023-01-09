/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },

      colors: {
        primary: "#EBF5FB", // //FAFAFA //#EBF5FB //#FBF9E3
        secondary: "#243850",
        tertiary: "#F7D08B",
        quaternary: "#848588",
      }

    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lofi",],
  },
}

//https://www.flaticon.com/free-icon/clapperboard_2184561?term=cinema&page=2&position=19&origin=search&related_id=2184561
//https://www.flaticon.com/free-icon/cinema_2828307?related_id=2828307
//https://www.flaticon.com/free-icon/clapperboard_9217183
