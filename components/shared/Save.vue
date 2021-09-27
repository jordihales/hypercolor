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
        <icons-clipboard-check v-if="checked === 'tailwind'" class="w-4 h-4" />
        <icons-tailwind v-else class="w-4 h-4" />
      </button>

      <button
        class="p-2.5 rounded-xl bg-gray-800/75 hover:text-pink-500 transition-colors"
        @click="handleCode"
      >
        <icons-clipboard-check v-if="checked === 'code'" class="w-4 h-4" />
        <icons-code v-else class="w-4 h-4" />
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
  data () {
    return {
      checked: ''
    }
  },
  methods: {
    handleTailwind () {
      this.code = this.gradient
      navigator.clipboard.writeText(this.code)
      this.handleIconChange('tailwind')
    },
    handleCode () {
      this.code = getComputedStyle(this.$refs.image).getPropertyValue('background-image')
      navigator.clipboard.writeText(this.code)
      this.handleIconChange('code')
    },
    handleImage () {
      htmlToImage.toJpeg(this.$refs.image, { pixelRatio: 1, quality: 1 }).then((data) => {
        const link = document.createElement('a')

        link.download = this.name
        link.href = data
        link.click()
      })
    },
    handleIconChange (type) {
      this.checked = type
      setTimeout(() => (this.checked = null), 500)
    }
  }
}
</script>
