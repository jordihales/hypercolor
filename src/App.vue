<template>
  <div :class="themeClass">
    <Announcement />
    <Popup />

    <div
      class="min-h-screen bg-white dark:bg-gray-900"
      :class="paddingClass"
    >
      <Header @action="handleTheme" />

      <main role="main">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Announcement from '@/components/Announcement'
import Header from '@/components/Header'
import Popup from '@/components/Popup'

export default {
  components: {
    Announcement,
    Header,
    Popup,
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
    paddingClass() {
      if (this.$route.name === 'Validate' || this.$route.name === 'NotFound') return
      return 'pb-12 sm:pb-24'
    },
  },
  beforeMount() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) this.darkMode = true
  },
  methods: {
    handleTheme() {
      this.darkMode = !this.darkMode
      const pageTheme = this.darkMode ? 'Dark' : 'Light'

      this.$gtag.event('Change', {
        event_category: 'Change Page Theme',
        event_label: pageTheme,
      })
    },
  },
}
</script>

<style>
html button:focus,
html a:focus,
html input:focus {
  @apply outline-none ring ring-pink-600;
}
</style>
