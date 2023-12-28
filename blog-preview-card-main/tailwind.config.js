/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    backgroundColor: {
     "blog-yellow" : "hsl(47, 88%, 63%)",
     "blog-white": "hsl(0, 0%, 100%)"
    },
    colors: {
      "blog-grey" : "hsl(0, 0%, 50%)",
      "blog-black" : "hsl(0, 0%, 7%)"
    },
    fontSize: {
      "blog-body" : "16px",
      "blog-heading" : "23px",
    
    },
    fontFamily: {
      "blog-font-family" : ['Figtree', 'sans-serif']
    },
    boxShadow: {
      "blog-box-shadow": "10px 9px hsl(0, 0%, 7%);"
    }
   },
  plugins: [],
}
