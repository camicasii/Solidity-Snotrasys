const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './public/index.html'
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },       
      colors: {
          'backgrount': '#B3E2FF',
          '': '#5c6ac4',
          'indigo-dark': '#202e78',
        }
      
    },
  },
  variants: {
    extend: {},
  },
 plugins: [
  require('@tailwindcss/typography')
],
}
