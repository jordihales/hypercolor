<template>
  <div class="relative bg-app-bg" :class="themeClass">
    <main class="max-w-screen-xl px-6 mx-auto">
      <Banner />
      <Gradients />
    </main>
    <Footer />

    <button type="button" class="fixed bottom-0 right-0 px-6 py-3 text-sm font-medium leading-none text-white transform -translate-x-6 -translate-y-6 rounded-lg shadow-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 focus:outline-none focus:shadow-outline" @click="handleTheme">
      Toggle Theme
    </button>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import Gradients from '@/components/Gradients'
import Footer from '@/components/Footer'

export default {
  data() {
    return {
      darkMode: false
    }
  },
  components: {
    Banner,
    Gradients,
    Footer,
  },
  computed: {
    themeClass() {
      return this.darkMode ? 'dark-mode' : 'light-mode'
    }
  },
  methods: {
    handleTheme() {
      this.darkMode = !this.darkMode
    },
    track() {
      this.$gtag.pageview({
        page_path: '/',
      })
    },
  },
  beforeMount() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.darkMode = true
    }
  }
}
</script>
