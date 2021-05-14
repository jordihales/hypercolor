<template>
  <div class="aos-animate" data-aos="fade-up">
    <div class="h-64 rounded-3xl" :class="customisedColors"></div>

    <div class="px-0.5 -mt-8">
      <div class="p-6 space-y-4 bg-white shadow-sm dark:bg-gray-900 rounded-3xl">
        <p class="text-xl font-semibold text-gray-800 dark:text-gray-300">{{ title }}</p>

        <p class="p-2 -mx-2 font-mono text-xs text-gray-500 bg-gray-100 rounded-lg dark:text-gray-300 dark:bg-gray-800">
          {{ customisedColors }}
        </p>

        <div class="flex items-center space-x-2">
          <p class="text-xs font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-300">Copy:</p>
          <CopyButton :gradient="customisedColors" :name="title" :css="true" />
          <CopyButton :gradient="customisedColors" :name="title" :css="false" />
        </div>

        <div>
          <p class="text-xs font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-300">Direction:</p>

          <div class="flow-root mt-2">
            <div class="flex flex-wrap -m-1">
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
    </div>
  </div>
</template>

<script>
import CopyButton from '@/components/CopyButton'
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
    CopyButton,
    DirectionOption,
  },
}
</script>
