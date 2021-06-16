<template>
  <section>
    <div
      class="sticky inset-x-0 top-0 z-40 bg-white border-t border-b border-gray-100 dark:border-gray-800 dark:bg-gray-900"
    >
      <div class="container flex items-center justify-between py-4 space-x-6">
        <FilterTheme :themes="themes" :theme="theme" @action="handleTheme" />
        <SaveOptions :type="type" @setSaveOption="handleType" />
      </div>
    </div>

    <div class="container mt-12 space-y-8 sm:mt-16">
      <ConicBlog v-if="theme === 'Conic'" />

      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Gradient
          v-for="gradient in filteredGradients"
          :key="gradient.title"
          :title="gradient.title"
          :colors="gradient.colors"
          :conic="gradient.conic"
          :type="type"
          data-aos="fade-up"
        />
      </div>
    </div>
  </section>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

import { getGradients, gradients } from '@/assets/data/gradients'
import { getTheme, themes } from '@/assets/data/themes.js'

export default {
  components: {
    FilterTheme: () => import('@/components/FilterTheme'),
    SaveOptions: () => import('@/components/SaveOptions'),
    Gradient: () => import('@/components/Gradient'),
    ConicBlog: () => import('@/components/ConicBlog'),
  },
  data() {
    return {
      gradients,
      themes,
      theme: '',
      type: 'Tailwind',
    }
  },
  methods: {
    handleTheme(theme) {
      this.theme = theme

      this.$gtag.event('Change', {
        event_category: 'Change Theme',
        event_label: theme.theme,
      })
    },
    handleType(type) {
      this.type = type
    },
  },
  computed: {
    filteredGradients() {
      const name = this.theme.theme
      return getGradients(name)
    },
  },
  mounted() {
    const themeFromHash = window.location.hash.replace('#', '')
    this.theme = themeFromHash ? getTheme(themeFromHash) : themes[0]

    AOS.init()
  },
}
</script>
