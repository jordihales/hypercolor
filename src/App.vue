<template>
  <div :class="themeClass">
    <div class="relative bg-white dark:bg-gray-900">
      <main class="max-w-screen-xl px-6 mx-auto">
        <Banner />
        <Gradients />
      </main>
      <Footer />
      <div class="fixed inline-flex items-center space-x-4 right-6 bottom-6">
        <ScrollTopButton />
        <ToggleButton @action="handleTheme" />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Gradients from '@/components/Gradients'
import ScrollTopButton from '@/components/ScrollTopButton'
import ToggleButton from '@/components/ToggleButton'

export default {
  data() {
    return {
      darkMode: false,
    }
  },
  components: {
    Banner,
    Footer,
    Gradients,
    ScrollTopButton,
    ToggleButton,
  },
  computed: {
    themeClass() {
      return this.darkMode ? 'dark' : 'light'
    },
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
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) this.darkMode = true
  },
}
</script>
