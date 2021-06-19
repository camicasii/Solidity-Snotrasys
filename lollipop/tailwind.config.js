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

      lineHeight: {
        tighter: 1.1,
      },
      margin: {
        '-full': '-100%',
        full: '100%',
        '-cat': '-100%',
      },
    },
  },
  variants: {
    extend: {},
  },
 plugins: [

],
}
