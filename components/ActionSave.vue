<template>
  <div>
    <div class="sr-only">
      <div
        v-if="standard"
        ref="image"
        class="h-screen w-screen"
        :class="gradient"
      />
      <div
        v-if="mesh"
        ref="image"
        class="h-screen w-screen"
        :style="gradient"
      />
      <div
        v-if="grainy"
        ref="image"
        class="relative h-screen w-screen"
        :class="gradient"
      >
        <div
          class="noise absolute inset-0 brightness-100 contrast-150 filter"
          :style="`--color: ${color}`"
        />
      </div>
    </div>

    <div class="flex items-center gap-2">
      <button
        v-if="standard"
        class="rounded-xl bg-gray-800/75 p-2.5 transition-colors hover:text-pink-500"
        aria-label="Copy Tailwind CSS class names"
        @click="handleTailwind"
      >
        <icon-tailwind class="h-4 w-4" />
      </button>

      <button
        v-if="standard || mesh"
        class="rounded-xl bg-gray-800/75 p-2.5 transition-colors hover:text-pink-500"
        aria-label="Copy CSS"
        @click="handleCode"
      >
        <icon-code class="h-4 w-4" />
      </button>

      <button
        class="rounded-xl bg-gray-800/75 p-2.5 transition-colors hover:text-pink-500"
        aria-label="Download image"
        @click="handleImage"
      >
        <icon-image class="h-4 w-4" />
      </button>
    </div>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */

import * as htmlToImage from 'html-to-image'

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    gradient: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'standard',
    },
  },
  computed: {
    standard() {
      return this.type === 'standard'
    },
    mesh() {
      return this.type === 'mesh'
    },
    grainy() {
      return this.type === 'grainy'
    },
  },
  methods: {
    handleTailwind() {
      this.code = this.gradient
      navigator.clipboard.writeText(this.code)

      this.showToast()
    },
    handleCode() {
      this.code = this.mesh
        ? this.gradient
        : getComputedStyle(this.$refs.image).getPropertyValue(
            'background-image'
          )

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
