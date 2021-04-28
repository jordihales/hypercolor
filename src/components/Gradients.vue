<template>
  <section>
    <div class="container">
      <div class="mt-12">
        <p class="text-xs font-semibold tracking-widest text-center text-gray-600 uppercase dark:text-gray-300">
          Select gradient type:
        </p>
        <div class="flex items-center justify-center mt-8 space-x-8">
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

      <div class="grid grid-cols-1 gap-8 mt-24 sm:grid-cols-2 lg:grid-cols-3">
        <Gradient
          v-for="gradient in filteredGradients"
          :key="gradient.title"
          :title="gradient.title"
          :colors="gradient.colors"
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
