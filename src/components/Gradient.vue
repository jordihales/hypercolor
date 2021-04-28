<template>
  <div class="aos-animate" data-aos="fade-up">
    <div class="h-64 rounded-t-3xl" :class="customisedColors"></div>
    <div class="w-full p-6 -mt-8 bg-white shadow-sm dark:bg-gray-900 rounded-3xl">
      <p class="text-lg font-medium text-gray-800 dark:text-gray-100">{{ title }}</p>

      <p
        class="p-2 mt-2 -mx-2 font-mono text-sm text-gray-600 bg-gray-100 rounded-lg dark:text-gray-300 dark:bg-gray-800"
      >
        {{ customisedColors }}
      </p>

      <div class="flex items-center mt-4 space-x-3">
        <p class="text-xs font-semibold tracking-widest text-gray-600 uppercase dark:text-gray-300">Copy as:</p>
        <CopyCSS :gradient="customisedColors" :name="title" />
        <CopyTailwind :gradient="customisedColors" :name="title" />
      </div>

      <div class="mt-4">
        <p class="text-xs font-semibold tracking-widest text-gray-600 uppercase dark:text-gray-300">Direction:</p>

        <div class="flex items-center mt-2 space-x-2">
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
</template>

<script>
import CopyTailwind from '@/components/CopyTailwind'
import CopyCSS from '@/components/CopyCSS'
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
    CopyTailwind,
    CopyCSS,
    DirectionOption,
  },
}
</script>
