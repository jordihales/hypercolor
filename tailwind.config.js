module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/*.vue', './src/components/*.vue', './src/assets/data/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter',
      },
      animation: {
        bounce: 'bounce 1.5s ease-in-out infinite',
      },
      transition: {
        size: ['width', 'height'],
      },
    },
  },
  variants: {
    width: ['hover', 'responsive', 'group-hover'],
  },
  plugins: [],
}
