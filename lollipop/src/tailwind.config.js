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
      display: ["Inter Regular", "sans-serif"],
      body: ["Inter Regular", "sans-serif"],
    },
    extend: {
      colors:{
        'brown-primary': '#eed9cc',
        'brown-secondary': '#fff9f0',
        'brown-third': '#fff3e0',
        'brown-five':'#c58560' 
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
