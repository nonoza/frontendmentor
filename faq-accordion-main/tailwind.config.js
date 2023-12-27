/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
   theme: {
    colors: {
      "faq-light-pink": "hsl(275, 100%, 97%)",
      "faq-grayish-blue" : "hsl(292, 16%, 49%)",
      "faq-dark-purple" : "hsl(292, 42%, 14%)"
    },
    fontSize: {
      "faq-body" : "18px",
      "faq-heading" : "35px",
      "faq-heading-mobile" : "20px"
    },
    fontFamily: {
      "faq-font-family" : ['Work Sans', 'sans-serif']
    },
    backgroundImage: {
      "desktop": "url('./assets/images/background-pattern-desktop.svg')",
      "mobile": "url('./assets/images/background-pattern-mobile.svg')"
    }
   }
}