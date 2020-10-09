<template>
  <div class="relative bg-app-bg" :class="themeClass">
    <main class="max-w-screen-xl px-6 mx-auto">
      <Banner />
      <Gradients />
    </main>
    <Footer />
    <ToggleButton @action="handleTheme" />
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import Gradients from '@/components/Gradients'
import Footer from '@/components/Footer'
import ToggleButton from '@/components/ToggleButton'

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
    ToggleButton
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
