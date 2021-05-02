const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './pages/**/*.{js,jsx,ts,tsx,vue}',
    './components/**/*.{js,jsx,ts,tsx,vue}',
    './public/**/*.{js,jsx,ts,tsx,vue}'
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      }, 
    },
  },
  variants: {
    extend: {},
  },
 plugins: [
  require('@tailwindcss/typography')
],
}
