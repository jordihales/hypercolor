<template>
  <div>
    <div class="sr-only">
      <div ref="image" class="w-screen h-screen" :class="gradient" />
    </div>

    <div class="flex items-center space-x-2">
      <button
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
    }
  },
  methods: {
    handleTailwind () {
      this.code = this.gradient
      navigator.clipboard.writeText(this.code)
    },
    handleCode () {
      this.code = getComputedStyle(this.$refs.image).getPropertyValue('background-image')
      navigator.clipboard.writeText(this.code)
    },
    handleImage () {
      htmlToImage.toJpeg(this.$refs.image, { pixelRatio: 1, quality: 1 }).then((data) => {
        const link = document.createElement('a')

        link.download = this.name
        link.href = data
        link.click()
      })
    }
  }
}
</script>
