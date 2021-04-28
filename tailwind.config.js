const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: ['./src/*.vue', './src/**/*.vue', './src/assets/data/*.js'],
    options: {
      safelist: ['aos-init', 'aos-animate', /to-/, /from-/, /via-/],
    },
  },
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'blue-gray': colors.blueGray,
        'cool-gray': colors.coolGray,
        'true-gray': colors.trueGray,
        'warm-gray': colors.warmGray,
        orange: colors.orange,
        amber: colors.amber,
        lime: colors.lime,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        'light-blue': colors.lightBlue,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
      },
    },
  },
  variants: {
    gradientColorStops: [],
    backgroundImage: [],
    extend: {
      display: ['dark'],
      scale: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
