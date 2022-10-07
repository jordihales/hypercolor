<template>
  <article class="relative">
    <button
      aria-label="Save gradient to favourites"
      class="absolute top-4 right-4 rounded-full bg-gray-800 p-2.5 transition-colors"
      :class="favourite"
      @click="saveGradient"
    >
      <icon-heart class="h-4 w-4" />
    </button>

    <div ref="gradient" class="h-64 rounded-3xl" :class="gradient" />

    <div class="mx-1.5 rounded-3xl bg-gray-900 p-6 text-white" :class="card">
      <div class="flex items-center justify-between">
        <p class="font-black uppercase tracking-wide" v-text="name" />

        <action-save :gradient="gradient" :name="name" />
      </div>

      <div v-if="controls" class="mt-6 flow-root">
        <div class="-m-0.5 flex flex-wrap justify-center">
          <span v-for="dir of directions" :key="dir.id" class="p-0.5">
            <button
              class="rounded-lg bg-gray-800/75 p-1.5 transition-colors hover:text-pink-500"
              :aria-label="`Change gradient direction to ${dir.key}`"
              @click="handleDirection(dir)"
            >
              <icon-center
                v-if="dir.key === 'center'"
                class="h-5 w-5"
                :class="dir.chevron"
              />
              <icon-chevron v-else class="h-5 w-5" :class="dir.chevron" />
            </button>
          </span>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
/* eslint-disable space-before-function-paren */

import { directions } from '~/assets/data/directions'

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
      return this.version
        ? directions
        : directions.filter((dir) => dir.key !== 'center')
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
