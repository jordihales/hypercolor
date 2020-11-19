const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: ['./src/*.vue', './src/components/*.vue', './src/assets/data/*.js'],
    options: {
      whitelist: ['aos-init', 'aos-animate'],
    },
  },
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'app-text': 'var(--text-color)',
        'app-border': 'var(--border-color)',
        'app-bg': 'var(--bg-color)',
        'app-btn': 'var(--btn-bg-color)',
      },
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
