<template>
  <article class="aos-animate" data-aos="fade-up">
    <div class="h-64 rounded-3xl" :class="customisedColors"></div>

    <div class="px-0.5 -mt-8">
      <div class="p-6 space-y-4 bg-white shadow-sm dark:bg-gray-900 rounded-3xl">
        <p class="text-xl font-medium text-gray-900 dark:text-white">{{ title }}</p>

        <p class="p-2 -mx-2 font-mono text-xs text-gray-500 bg-gray-100 rounded-lg dark:text-gray-300 dark:bg-gray-800">
          {{ customisedColors }}
        </p>

        <div class="flex items-center space-x-2">
          <p class="text-gray-500 app-subtitle dark:text-gray-300">Copy:</p>

          <CopyButton :gradient="customisedColors" :name="title" :css="true" :key="cssKey" />
          <CopyButton :gradient="customisedColors" :name="title" :css="false" :key="tailwindKey" />
        </div>

        <div>
          <p class="text-gray-500 app-subtitle dark:text-gray-300">Direction:</p>

          <div class="flex mt-2 space-x-1">
            <DirectionOption
              v-for="(value, key) of directions"
              :key="key"
              :direction="value"
              :title="key"
              @action="handleDirection"
            />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { directions, conicDirections } from '@/assets/data/directions'

export default {
  components: {
    CopyButton: () => import('@/components/CopyButton'),
    DirectionOption: () => import('@/components/DirectionOption'),
  },
  data() {
    return {
      direction: '',
      directions,
      cssKey: 0,
      tailwindKey: 0,
    }
  },
  props: {
    colors: String,
    title: String,
    conic: Boolean,
  },
  computed: {
    customisedColors() {
      if (!this.direction) return this.colors

      const colors = this.colors.split(' ')
      colors[0] = this.direction

      return colors.join(' ')
    },
  },
  methods: {
    handleDirection(direction) {
      this.direction = direction
      this.cssKey += 1
      this.tailwindKey += 1
    },
  },
  mounted() {
    this.directions = this.conic ? conicDirections : directions
  },
}
</script>
