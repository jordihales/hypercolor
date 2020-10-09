<template>
  <div class="relative flex flex-col rounded-lg shadow-md">
    <div class="h-48 rounded-t-lg" :class="customisedColors" />
    <div class="flex flex-col justify-between flex-1 px-6 py-8 space-y-4 rounded-b-lg bg-app-bg">
      <div class="space-y-4">
        <h2 class="text-xl font-extrabold text-app-text">{{ title }}</h2>
        <div class="font-mono text-sm text-app-text">
          {{ customisedColors }}
        </div>
        <ClickCopy :gradient="customisedColors" :name="title" />
      </div>
      <div class="space-y-4">
        <h2 class="font-bold text-app-text">Direction</h2>
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
    <div class="dark-border" :class="customisedColors" />
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
.dark-border {
  @apply h-1 absolute inset-x-0 bottom-0 rounded-b-lg;

  .light-mode & {
    @apply hidden;
  }
}
</style>