<template>
  <section>
    <div class="container">
      <div class="mt-12">
        <p class="text-xs font-semibold tracking-widest text-center text-gray-500 uppercase dark:text-gray-300">
          Select gradient type:
        </p>

        <div class="grid max-w-5xl grid-cols-2 gap-4 mx-auto mt-8 sm:grid-cols-6">
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

      <div class="grid grid-cols-1 gap-8 mt-12 sm:mt-24 sm:grid-cols-2 lg:grid-cols-3">
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

import FilterOption from '@/components/FilterOption'
import Gradient from '@/components/Gradient'

import { gradients } from '@/assets/data/gradients'

export default {
  data() {
    return {
      gradients,
      theme: 'All',
      themes: [],
    }
  },
  components: {
    FilterOption,
    Gradient,
    ConicBlog: () => import('@/components/ConicBlog'),
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
    let themes = this.gradients.filter(
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
