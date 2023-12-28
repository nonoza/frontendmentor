/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        title:["Poppins", "sans-serif"],
        copy: ['Lato', 'sans-serif'],
       },
       fontSize: {
         titleSize:"24px",
         bodySize:"16px",
       },
       colors: {
        "brand-lightGrey":"#F2F5F9",
        "brand-white": "#FFFFFF",
        "brand-blue":"#111729",
        "brand-dark-grey":"#677489",
      }
    },
  },
  plugins: [],
}