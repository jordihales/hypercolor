<template>
  <div>
    <div class="sr-only">
      <div v-if="tailwind" ref="image" class="w-screen h-screen" :class="gradient" />
      <div v-else ref="image" class="w-screen h-screen" :style="gradient" />
    </div>

    <div class="flex items-center space-x-2">
      <button
        v-if="tailwind"
        class="p-2.5 rounded-xl bg-gray-800/75 hover:text-pink-500 transition-colors"
        @click="handleTailwind"
      >
        <icons-tailwind class="w-4 h-4" />
      </button>

      <button
        class="p-2.5 rounded-xl bg-gray-800/75 hover:text-pink-500 transition-colors"
        @click="handleCode"
      >
        <icons-code class="w-4 h-4" />
      </button>

      <button
        class="p-2.5 rounded-xl bg-gray-800/75 hover:text-pink-500 transition-colors"
        @click="handleImage"
      >
        <icons-image class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */

import * as htmlToImage from 'html-to-image'

export default {
  props: {
    gradient: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    tailwind: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleTailwind() {
      this.code = this.gradient
      navigator.clipboard.writeText(this.code)

      this.showToast()
    },
    handleCode() {
      this.code = this.tailwind
        ? getComputedStyle(this.$refs.image).getPropertyValue('background-image')
        : this.gradient

      navigator.clipboard.writeText(this.code)

      this.showToast()
    },
    handleImage() {
      htmlToImage
        .toJpeg(this.$refs.image, { pixelRatio: 1, quality: 1 })
        .then((data) => {
          const link = document.createElement('a')

          link.download = this.name
          link.href = data
          link.click()
        })
    },
    showToast() {
      this.$toast.success('Copied to Clipboard')
    }
  }
}
</script>
