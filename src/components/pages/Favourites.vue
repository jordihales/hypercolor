<template>
  <div>
    <section role="banner">
      <div class="container pt-24 pb-12 lg:pt-36">
        <div class="max-w-2xl mx-auto text-center">
          <h1
            class="text-4xl font-black leading-snug tracking-widest text-transparent uppercase sm:text-6xl bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
          >
            Your Favourite Gradients
          </h1>
        </div>
      </div>
    </section>

    <section>
      <div
        v-if="favouriteGradients.length > 0"
        class="sticky inset-x-0 top-0 z-40 bg-white border-t border-b border-gray-100 dark:border-gray-800 dark:bg-gray-900"
      >
        <div class="container flex items-center justify-center py-4 space-x-6">
          <SaveOptions
            :type="type"
            @setSaveOption="handleType"
          />
        </div>
      </div>

      <div class="container mt-8">
        <div
          v-if="favouriteGradients.length > 0"
          class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <Gradient
            v-for="gradient in favouriteGradients"
            :key="gradient.title"
            :title="gradient.title"
            :colors="gradient.colors"
            :theme="gradient.theme"
            :type="type"
          />
        </div>

        <div
          v-else
          class="text-center text-gray-500 dark:text-gray-300"
        >
          <p class="text-2xl font-medium">
            There's nothing here...
          </p>

          <p class="mt-4">
            Add some gradients to your favourites for them to appear here
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { gradients } from '@/assets/data/gradients'
import { themes } from '@/assets/data/themes'

import SaveOptions from '@/components/SaveOptions'
import Gradient from '@/components/Gradient'

export default {
  components: {
    SaveOptions,
    Gradient,
  },
  data() {
    return {
      gradients,
      themes,
      type: 'Tailwind'
    }
  },
  computed: {
    favouriteGradients() {
      const keys = Object.keys(localStorage)

      return this.gradients.filter(gradient => keys.includes(gradient.title))
    }
  },
  methods: {
    handleType(type) {
      this.type = type
    },
  }
}
</script>