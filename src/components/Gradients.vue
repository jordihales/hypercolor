<template>
  <section>
    <div
      class="sticky inset-x-0 top-0 z-40 bg-white border-t border-b border-gray-100 dark:border-gray-800 dark:bg-gray-900"
    >
      <div class="container flex items-center justify-between py-4 space-x-6">
        <FilterTheme
          :themes="themes"
          :selected="theme"
          @action="handleTheme"
        />

        <SaveOptions
          :type="type"
          @setSaveOption="handleType"
        />
      </div>
    </div>

    <div class="container mt-12 space-y-8 sm:mt-16">
      <ConicBlog v-if="theme.theme === 'Conic'" />
      <RadialBlog v-if="theme.theme === 'Radial'" />

      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Gradient
          v-for="gradient in filteredGradients"
          :key="gradient.title"
          :title="gradient.title"
          :colors="gradient.colors"
          :theme="gradient.theme"
          :type="type"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { getGradients, gradients } from '@/assets/data/gradients'
import { themes } from '@/assets/data/themes'

import FilterTheme from '@/components/FilterTheme'
import SaveOptions from '@/components/SaveOptions'
import Gradient from '@/components/Gradient'
import ConicBlog from '@/components/ConicBlog'
import RadialBlog from '@/components/RadialBlog'

export default {
  components: {
    FilterTheme,
    SaveOptions,
    Gradient,
    ConicBlog,
    RadialBlog,
  },
  data() {
    return {
      gradients,
      themes,
      theme: themes[0],
      type: 'Tailwind',
    }
  },
  computed: {
    filteredGradients() {
      const name = this.theme.theme
      return getGradients(name)
    },
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
}
</script>
