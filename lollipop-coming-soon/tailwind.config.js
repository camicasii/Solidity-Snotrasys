module.exports = {
  purge: [
        'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
          sans: ['Roboto', 'sans-serif', 'system-ui', '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',]
           },
    extend: {
      colors:{
        'pink-primary': '#e84a94',
        'blue-primary': '#57baeb',
      },
 screens: {
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1920px',
        print: {raw: 'print'},
      },
    },
  },
  variants: {
    extend: {},
  },
 plugins: [

],
}
