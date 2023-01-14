const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'assets/**/*.js',
    'components/**/*.{vue,js}',
    'layouts/**/*.{vue,js}',
    'pages/**/*.{vue,js}'
  ],
  safelist: [
    {
      pattern: /(from|via|to|bg)-(black|white)/
    },
    {
      pattern: /(from|via|to|bg)-(.+)-([1-9]00)/
    }
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
