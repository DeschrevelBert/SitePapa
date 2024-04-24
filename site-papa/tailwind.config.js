module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkgrey: '#7C7C7C',
        grey: '#B0B0B0',
        white: '#F2ECFF',
        green: '#00C896'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}