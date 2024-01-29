/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './components/**/*.{html,js}',
  './pages/**/*.{html,js}',
  './index.html',],
  theme: {
    colors: {
      'white': 'hsl(0, 0%, 100%)',
      'grey': 'hsl(0, 0%, 20%)',
      'dark-grey': 'hsl(0, 0%, 12%)',
      'off-dark': 'hsl(0, 0%, 8%)',
      'green': 'hsl(75, 94%, 57%)',  
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    screens: {
      'small': "375px",
      'desktop': '1400px',
    },
    fontWeight: {
      "regular-weight": "400",
      "semi-bold": "600",
      "bold": "700",
    },
   
    extend: {
      fontSize: {
        'heading-size': "24px",
        'body-size': '14px',
      },
    
    }
  },
}