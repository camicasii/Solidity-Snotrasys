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
        'brown-primary': '#eed9cc',
        'brown-secondary': '#fff9f0',
        'brown-third': '#fff3e0',
        'brown-five':'#c58560', 
        'brown-six': '#ffcd84',
        'brown-seven': '#120c09',
        'brown-eight': '#322925',
        'brown-nine': '#d6a485',
        'brown-ten': '#754d38',
        'brown-eleven': '#ac562a',
        'brown-twelve': '#1f2126',
        'brown-thirteen': '#906e59'
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
