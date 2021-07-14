/* eslint-disable */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: ['./src/*.vue', './src/**/*.vue', './src/assets/data/*.js'],
    options: {
      safelist: [/to-/, /from-/, /via-/],
      keyframes: true,
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
        sky: colors.sky,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-conic-t': 'conic-gradient(at top, var(--tw-gradient-stops))',
        'gradient-conic-b': 'conic-gradient(at bottom, var(--tw-gradient-stops))',
        'gradient-conic-l': 'conic-gradient(at left, var(--tw-gradient-stops))',
        'gradient-conic-r': 'conic-gradient(at right, var(--tw-gradient-stops))',
        'gradient-conic-tl': 'conic-gradient(at top left, var(--tw-gradient-stops))',
        'gradient-conic-tr': 'conic-gradient(at top right, var(--tw-gradient-stops))',
        'gradient-conic-bl': 'conic-gradient(at bottom left, var(--tw-gradient-stops))',
        'gradient-conic-br': 'conic-gradient(at bottom right, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
        'gradient-radial-at-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
        'gradient-radial-at-l': 'radial-gradient(ellipse at left, var(--tw-gradient-stops))',
        'gradient-radial-at-r': 'radial-gradient(ellipse at right, var(--tw-gradient-stops))',
        'gradient-radial-at-tl': 'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
        'gradient-radial-at-tr': 'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
        'gradient-radial-at-bl': 'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))',
        'gradient-radial-at-br': 'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))',
      },
      rotate: {
        '135': '135deg',
        '-135': '-135deg',
      },
    },
  },
  variants: {
    gradientColorStops: [],
    backgroundImage: [],
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
