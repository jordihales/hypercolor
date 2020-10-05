<template>
  <div class="rounded-lg shadow-md">
    <div class="h-48 rounded-t-lg" :class="customisedColors"></div>
    <div class="px-6 py-8 space-y-4">
      <h2 class="text-lg font-extrabold text-gray-900">{{ title }}</h2>
      <div class="font-mono text-sm text-gray-900">
        {{ customisedColors }}
      </div>
      <div>
        <h2 class="font-bold text-gray-900">Direction</h2>
        <div class="inline-flex items-center mt-4 space-x-2">
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
import DirectionOption from '@/components/DirectionOption'

export default {
  data() {
    return {
      direction: '',
      directions: {
        t: 'bg-gradient-to-t',
        r: 'bg-gradient-to-r',
        b: 'bg-gradient-to-b',
        l: 'bg-gradient-to-l',
        tr: 'bg-gradient-to-tr',
        tl: 'bg-gradient-to-tl',
        br: 'bg-gradient-to-br',
        bl: 'bg-gradient-to-bl',
      },
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
  },
}
</script>