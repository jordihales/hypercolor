export default {
  target: 'static',
  head: {
    titleTemplate: (titleChunk) => {
      return titleChunk
        ? `${titleChunk} | Hypercolor`
        : 'Gradients for Tailwind CSS | Hypercolor'
    },
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'A curated collection of beautiful Tailwind CSS gradients using the full range of Tailwind CSS colors. Easily copy and paste the class names, CSS or even save the gradients as an image.'
      },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://hypercolor.dev/' },
      {
        property: 'og:title',
        content: 'Gradients for Tailwind CSS | Hypercolor'
      },
      {
        property: 'og:description',
        content:
          'A curated collection of beautiful Tailwind CSS gradients using the full range of Tailwind CSS colors. Easily copy and paste the class names, CSS or even save the gradients as an image.'
      },
      { property: 'og:image', content: '/social.png' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://hypercolor.dev/' },
      {
        property: 'twitter:title',
        content: 'Gradients for Tailwind CSS | Hypercolor'
      },
      {
        property: 'twitter:description',
        content:
          'A curated collection of beautiful Tailwind CSS gradients using the full range of Tailwind CSS colors. Easily copy and paste the class names, CSS or even save the gradients as an image.'
      },
      { property: 'twitter:image', content: '/social.png' }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/google-analytics'
  ],
  modules: [],
  build: {},
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700, 900]
    }
  },
  googleAnalytics: {
    id: 'UA-177960351-4',
    checkDuplicatedScript: true,
    autoTracking: {
      screenview: true
    }
  }
}
