<template>
  <div class="relative overflow-hidden rounded-lg shadow-md">
    <div class="h-48 rounded-t-lg" :class="customisedColors" />

    <div class="px-6 py-8 space-y-4 bg-white dark:bg-gray-900">
      <div class="space-y-4">
        <h2 class="text-xl font-extrabold text-gray-900 dark:text-gray-100">{{ title }}</h2>
        <div class="font-mono text-sm text-gray-800 dark:text-gray-200">
          {{ customisedColors }}
        </div>
        <ClickCopy :gradient="customisedColors" :name="title" />
      </div>

      <div class="space-y-4">
        <h2 class="font-bold text-gray-900 dark:text-gray-100">Direction</h2>
        <div class="flex items-center space-x-2">
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

    <div class="absolute inset-x-0 bottom-0 hidden w-full h-1 dark:block" :class="customisedColors" />
  </div>
</template>

<script>
import ClickCopy from '@/components/ClickCopy'
import DirectionOption from '@/components/DirectionOption'

import { directions } from '@/assets/data/directions'

export default {
  data() {
    return {
      direction: '',
      directions,
    }
  },
  props: {
    colors: String,
    title: String,
  },
  computed: {
    customisedColors() {
      if (!this.direction) return this.colors

      let colors = this.colors.split(' ')
      colors[0] = this.direction

      return colors.join(' ')
    },
  },
  methods: {
    handleDirection(direction) {
      this.direction = direction
    },
  },
  components: {
    ClickCopy,
    DirectionOption,
  },
}
</script>
