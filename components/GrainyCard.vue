<template>
  <div>
    <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      <div class="flex items-center space-x-4">
        <h2
          class="text-xl font-black tracking-wide text-white uppercase"
          v-text="name"
        />

        <span class="w-6 h-px bg-white/50" />

        <button
          class="p-2.5 rounded-xl bg-gray-800/75 text-white hover:text-pink-500 transition-colors"
          @click="handleImage"
        >
          <icon-image class="w-4 h-4" />
        </button>
      </div>
    </div>

    <div class="mt-4">
      <div ref="parent" class="relative w-screen h-screen" :class="leftColor">
        <div
          class="absolute inset-0 filter brightness-100 contrast-150 noise"
          :style="`--color: ${color}`"
        />
        <div class="absolute inset-0 mix-blend-multiply" :class="rightColor" />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */

import { downloadImage } from '@/utils/download'

export default {
  props: {
    leftColor: {
      type: String,
      required: true
    },
    rightColor: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      color: ''
    }
  },
  mounted() {
    this.color = getComputedStyle(this.$refs.parent).getPropertyValue(
      'background-color'
    )
  },
  methods: {
    handleImage() {
      downloadImage(this.$refs.parent, this.name)
    }
  }
}
</script>

<style lang="postcss" scoped>
/* https://css-tricks.com/grainy-gradients/ */

.noise {
  background: linear-gradient(to right, var(--color), transparent),
    url(https://grainy-gradients.vercel.app/noise.svg);
}
</style>
