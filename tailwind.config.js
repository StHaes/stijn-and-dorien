module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'usf': '#67131e',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
