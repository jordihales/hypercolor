<template>
  <div :class="themeClass">
    <Announcement />

    <div class="pb-12 bg-white sm:pb-24 dark:bg-gray-900">
      <Header @action="handleTheme" />

      <main role="main">
        <Banner />
        <Gradients />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Announcement: () => import('@/components/Announcement'),
    Banner: () => import('@/components/Banner'),
    Gradients: () => import('@/components/Gradients'),
    Header: () => import('@/components/Header'),
  },
  data() {
    return {
      darkMode: false,
    }
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

<style>
html button:focus,
html a:focus {
  @apply outline-none ring ring-pink-600;
}
</style>
