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
    Header: () => import('@/components/Header'),
    Banner: () => import('@/components/Banner'),
    Gradients: () => import('@/components/Gradients'),
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
.app-subtitle {
  @apply text-xs font-semibold uppercase tracking-widest;
}
</style>
