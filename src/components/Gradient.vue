<template>
  <div class="relative rounded-lg light:shadow-md">
    <div class="absolute inset-0 hidden rounded-lg outer-shadow dark:block" :class="customisedColors"></div>
    <div class="relative flex flex-col h-full">
      <div class="flex-shrink-0 h-48 rounded-t-lg" :class="customisedColors"></div>
      <div class="flex-1 px-6 py-8 space-y-4 bg-gray-100 rounded-lg dark:bg-gray-900">
        <h2 class="text-xl font-extrabold text-gray-900 dark:text-gray-100">{{ title }}</h2>
        <div class="font-mono text-sm text-gray-900 dark:text-gray-100">
          {{ customisedColors }}
        </div>
        <ClickCopy :gradient="customisedColors" :name="title" />
        <div>
          <h2 class="font-bold text-gray-900 dark:text-gray-100">Direction</h2>
          <div class="flex items-center mt-4 space-x-2">
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
    title: String,
    colors: String,
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
    DirectionOption,
    ClickCopy,
  },
}
</script>

<style lang="scss" scoped>
.outer-shadow {
  @screen dark {
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    margin: -4px;
  }
}
</style>