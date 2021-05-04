<template>
  <div :class="themeClass">
    <Announcement />
    <div class="pb-20 bg-white dark:bg-gray-900">
      <Header @action="handleTheme" />

      <main>
        <Banner />
        <Gradients />
      </main>
    </div>
  </div>
</template>

<script>
import Announcement from '@/components/Announcement'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Gradients from '@/components/Gradients'

export default {
  data() {
    return {
      darkMode: false,
    }
  },
  components: {
    Announcement,
    Header,
    Banner,
    Gradients,
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
