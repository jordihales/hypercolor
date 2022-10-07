<template>
  <div>
    <mesh-colors
      ref="colors"
      :tl-color="tlColor"
      :tr-color="trColor"
      :bl-color="blColor"
      :br-color="brColor"
    />

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
      <canvas ref="canvas" />
    </div>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */

import { createAndDownloadImage } from '@/utils/downloadImage'
import { getBackgroundColor, convertToRgba } from '@/utils/getColor'

export default {
  props: {
    tlColor: {
      type: String,
      required: true,
    },
    trColor: {
      type: String,
      required: true,
    },
    blColor: {
      type: String,
      required: true,
    },
    brColor: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.drawCanvas()
  },
  methods: {
    drawCanvas() {
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d')
      const [width, height] = [window.innerWidth, window.innerHeight]
      const colors = this.$refs.colors
      const tlColor = getBackgroundColor(colors.$refs.topLeft)
      const trColor = getBackgroundColor(colors.$refs.topRight)
      const blColor = getBackgroundColor(colors.$refs.bottomLeft)
      const brColor = getBackgroundColor(colors.$refs.bottomRight)

      canvas.width = width
      canvas.height = height

      // prettier-ignore
      const topLeft = ctx.createRadialGradient(0, 0, 1, 0, 0, height)
      topLeft.addColorStop(0, tlColor)
      topLeft.addColorStop(1, convertToRgba(tlColor))

      // prettier-ignore
      const bottomLeft = ctx.createRadialGradient(0, height, 1, 0, height, height)
      bottomLeft.addColorStop(0, blColor)
      bottomLeft.addColorStop(1, convertToRgba(blColor))

      // prettier-ignore
      const topRight = ctx.createRadialGradient(width, 0, 1, height, 0, height)
      topRight.addColorStop(0, trColor)
      topRight.addColorStop(1, convertToRgba(trColor))

      // prettier-ignore
      const bottomRight = ctx.createRadialGradient(width, height, 1, height, height, width)
      bottomRight.addColorStop(0, brColor)
      bottomRight.addColorStop(1, convertToRgba(brColor))

      ctx.fillStyle = bottomRight
      ctx.fillRect(0, 0, width, height)
      ctx.fillStyle = bottomLeft
      ctx.fillRect(0, 0, width, height)
      ctx.fillStyle = topRight
      ctx.fillRect(0, 0, width, height)
      ctx.fillStyle = topLeft
      ctx.fillRect(0, 0, width, height)
    },
    handleImage() {
      createAndDownloadImage(this.$refs.canvas, this.name)
    },
  },
}
</script>
