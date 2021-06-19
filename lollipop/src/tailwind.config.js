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
