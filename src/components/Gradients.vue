<template>
  <section>
    <div class="container">
      <div class="mt-12">
        <p class="text-xs font-semibold tracking-widest text-center text-gray-500 uppercase dark:text-gray-300">
          Select gradient type:
        </p>
        <div class="flow-root mt-8">
          <div class="flex flex-wrap items-center justify-center -m-2">
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
      </div>

      <div
        v-if="theme === 'Conic'"
        class="max-w-5xl p-8 mx-auto mt-16 text-gray-500 bg-gray-200 rounded-lg dark:text-gray-300 dark:bg-gray-800"
      >
        <p class="text-lg font-semibold">Add the following to your <code>tailwind.config.js</code></p>

        <pre class="mt-4 overflow-x-auto">
          <code>
backgroundImage: {
  'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
  'gradient-conic-t': 'conic-gradient(at top, var(--tw-gradient-stops))',
  'gradient-conic-r': 'conic-gradient(at right, var(--tw-gradient-stops))',
  'gradient-conic-b': 'conic-gradient(at bottom, var(--tw-gradient-stops))',
  'gradient-conic-l': 'conic-gradient(at left, var(--tw-gradient-stops))',
  'gradient-conic-tr': 'conic-gradient(at top right, var(--tw-gradient-stops))',
  'gradient-conic-tl': 'conic-gradient(at top left, var(--tw-gradient-stops))',
  'gradient-conic-br': 'conic-gradient(at bottom right, var(--tw-gradient-stops))',
  'gradient-conic-bl': 'conic-gradient(at bottom left, var(--tw-gradient-stops))',
},
          </code>
        </pre>
      </div>

      <div class="grid grid-cols-1 gap-8 mt-24 sm:grid-cols-2 lg:grid-cols-3">
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
