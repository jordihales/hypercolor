<template>
  <div>
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-4">
        <h2
          class="text-xl font-black uppercase tracking-wide text-white"
          v-text="name"
        />

        <span class="h-px w-6 bg-white/50" />

        <button
          class="rounded-xl bg-gray-800/75 p-2.5 text-white transition-colors hover:text-pink-500"
          @click="handleImage"
        >
          <icon-image class="h-4 w-4" />
        </button>
      </div>
    </div>

    <div class="mt-4">
      <div ref="parent" class="relative h-screen w-screen" :class="leftColor">
        <div
          class="noise absolute inset-0 brightness-100 contrast-150 filter"
          :style="`--color: ${color}`"
        />
        <div class="absolute inset-0 mix-blend-multiply" :class="rightColor" />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */

import { createAndDownloadImage } from '@/utils/downloadImage'

export default {
  props: {
    leftColor: {
      type: String,
      required: true,
    },
    rightColor: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      color: '',
    }
  },
  mounted() {
    this.color = getComputedStyle(this.$refs.parent).getPropertyValue(
      'background-color'
    )
  },
  methods: {
    handleImage() {
      createAndDownloadImage(this.$refs.parent, this.name)
    },
  },
}
</script>

<style lang="postcss" scoped>
/* https://css-tricks.com/grainy-gradients/ */

.noise {
  background: linear-gradient(to right, var(--color), transparent),
    url(https://grainy-gradients.vercel.app/noise.svg);
}
</style>
