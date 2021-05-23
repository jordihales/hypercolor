<template>
  <div>
    <button
      class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 text-gray-500 bg-gray-100 rounded-lg dark:text-gray-300 dark:bg-gray-800"
      @click="handleClick"
    >
      <ImageIcon className="w-5 h-5" />
    </button>

    <div class="sr-only">
      <div :class="gradient" ref="gradient" class="w-screen h-screen"></div>
    </div>
  </div>
</template>

<script>
import * as htmlToImage from 'html-to-image'

export default {
  components: {
    ImageIcon: () => import('@/components/icons/Image'),
  },
  props: {
    gradient: String,
    name: String,
  },
  methods: {
    handleClick() {
      htmlToImage.toJpeg(this.$refs.gradient, { pixelRatio: 1, quality: 1 }).then((dataUrl) => {
        this.handleDownload(this.name, dataUrl)
      })

      this.$gtag.event('Success', {
        event_category: 'Save Gradient',
        event_label: this.name,
      })
    },
    handleDownload(title, data) {
      const link = document.createElement('a')

      link.download = title
      link.href = data
      link.click()
    },
  },
}
</script>
