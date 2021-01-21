<template>
  <section id="gradients">
    <div>
      <div class="sm:hidden">
        <select
          aria-label="Filter"
          class="block w-full px-4 py-2 text-gray-900 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-100"
          v-model="theme"
        >
          <option v-for="gradient in themes" :key="gradient.title" :value="gradient.theme">
            {{ gradient.theme }}
          </option>
        </select>
      </div>

      <div class="hidden sm:block">
        <div class="flex items-center justify-center space-x-8">
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

    <div class="py-12 space-y-6 md:grid lg:py-16 md:gap-x-8 md:gap-y-16 md:grid-cols-2 lg:grid-cols-3 md:space-y-0">
      <Gradient
        v-for="gradient in filteredGradients"
        :key="gradient.title"
        :title="gradient.title"
        :colors="gradient.colors"
        data-aos="fade-up"
      />
    </div>
  </section>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

import FilterOption from '@/components/FilterOption'
import Gradient from '@/components/Gradient'

export default {
  data() {
    return {
      gradients: [],
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
    fetch(`${window.location.origin}/gradients.json`).then((response) =>
      response
        .json()
        .then((data) => ({
          data: data,
        }))
        .then((response) => {
          this.gradients = response.data.gradients
        })
        .then(() => {
          let themes = this.gradients.filter(
            (gradient, index, self) => self.findIndex((item) => item.theme === gradient.theme) === index
          )

          themes.unshift({ theme: 'All', colors: 'bg-gradient-to-r from-green-400 to-green-600' })

          this.themes = themes
        })
    )

    AOS.init()
  },
}
</script>
