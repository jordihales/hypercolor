<template>
  <article class="relative">
    <button
      aria-label="Save gradient to favourites"
      class="absolute top-4 right-4 rounded-full bg-gray-800 p-2.5 transition-colors"
      :class="favourite"
      @click="saveGradient"
    >
      <icon-heart class="w-4 h-4" />
    </button>

    <div ref="gradient" class="h-64 rounded-3xl" :class="gradient" />

    <div class="mx-1.5 rounded-3xl bg-gray-900 p-6 text-white" :class="card">
      <p class="font-black tracking-wide uppercase" v-text="name" />

      <div class="flex items-center gap-4 mt-4">
        <generator-select
          id="Direction"
          v-model="currentDirection"
          :items="directions"
          label-key="name"
          value-key="css"
        />

        <action-save :gradient="gradient" :name="name" />
      </div>
    </div>
  </article>
</template>

<script>
/* eslint-disable space-before-function-paren */

// import {
//   directionOptions,
//   directionOptionsEnhanced,
// } from '@/assets/data/directionOptions'

import { getDirections } from '@/utils/getDirections'

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    colors: {
      type: String,
      required: true,
    },
    direction: {
      type: [String, Boolean],
      default: false,
    },
    version: {
      type: [String, Boolean],
      default: false,
    },
    controls: {
      type: Boolean,
      default: true,
    },
    overlap: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      currentDirection: this.direction,
      copyCode: '',
      isFavourite: false,
    }
  },
  computed: {
    gradient() {
      return this.currentDirection
        ? `${this.currentDirection} ${this.colors}`
        : `${this.colors}`
    },
    directions() {
      return getDirections()
      // return this.version
      //   ? directionOptions
      //   : directionOptions.filter((dir) => dir.key !== 'center')
    },
    favourite() {
      return this.isFavourite ? 'text-rose-500' : 'text-white'
    },
    card() {
      return this.overlap && '-mt-8'
    },
  },
  mounted() {
    this.isFavourite = this.checkFavourite()
  },
  methods: {
    handleDirection(data) {
      this.currentDirection = this.version
        ? data[this.version.toLowerCase()]
        : data.gradient
    },
    saveGradient() {
      const gradients = JSON.parse(localStorage.getItem('gradients')) || []

      const exists = gradients.find((gradient) => gradient.name === this.name)

      if (exists) {
        gradients.splice(gradients.indexOf(exists), 1)

        this.isFavourite = false

        this.$toast.success('Removed from Favourites')
      } else {
        gradients.push({
          name: this.name,
          colors: this.colors,
          direction: this.currentDirection,
          version: this.version,
        })

        this.isFavourite = true

        this.$toast.success('Added to Favourites')
      }

      localStorage.setItem('gradients', JSON.stringify(gradients))

      this.$emit('update')
    },
    checkFavourite() {
      const gradients = JSON.parse(localStorage.getItem('gradients')) || []

      return gradients.find((gradient) => gradient.name === this.name)
    },
  },
}
</script>
