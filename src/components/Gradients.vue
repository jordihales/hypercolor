<template>
  <section class="pt-16 sm:pt-24">
    <div class="container space-y-12 sm:space-y-16">
      <div class="space-y-8">
        <p class="text-center text-gray-500 app-subtitle dark:text-gray-300">
          Filter gradients
        </p>

        <div class="grid grid-cols-2 gap-8 sm:grid-cols-6">
          <FilterOption
            v-for="gradient in themes"
            :key="gradient.title"
            :theme="gradient.theme"
            :active="theme"
            :colors="gradient.colors"
            @action="handleFilter"
          />
        </div>
      </div>

      <ConicBlog v-if="theme === 'Conic'" />

      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Gradient
          v-for="gradient in filteredGradients"
          :key="gradient.title"
          :title="gradient.title"
          :colors="gradient.colors"
          :conic="gradient.conic"
          data-aos="fade-up"
        />
      </div>
    </div>
  </section>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

import { gradients } from '@/assets/data/gradients'

export default {
  components: {
    FilterOption: () => import('@/components/FilterOption'),
    Gradient: () => import('@/components/Gradient'),
    ConicBlog: () => import('@/components/ConicBlog'),
  },
  data() {
    return {
      gradients,
      theme: 'All',
      themes: [],
    }
  },
  methods: {
    handleFilter(theme) {
      this.theme = theme
    },
  },
  computed: {
    filteredGradients() {
      if (this.theme === 'All') return this.gradients
      return this.gradients.filter((gradient) => gradient.theme === this.theme)
    },
  },
  beforeMount() {
    if (window.location.hash) this.theme = window.location.hash.replace('#', '')

    const themes = this.gradients.filter(
      (gradient, index, self) => self.findIndex((_gradient) => _gradient.theme === gradient.theme) === index
    )

    themes.unshift({
      theme: 'All',
      colors: 'bg-gradient-to-r from-green-400 to-green-600',
    })

    this.themes = themes

    AOS.init()
  },
}
</script>
