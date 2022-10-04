<template>
  <article class="relative">
    <button
      aria-label="Save gradient to favourites"
      class="p-2.5 rounded-full transition-colors bg-gray-800 absolute top-4 right-4"
      :class="favourite"
      @click="saveGradient"
    >
      <icon-heart class="w-4 h-4" />
    </button>

    <div ref="gradient" class="h-64 rounded-3xl" :class="gradient" />

    <div class="p-6 mx-1.5 text-white bg-gray-900 rounded-3xl" :class="card">
      <div class="flex items-center justify-between">
        <p class="font-black tracking-wide uppercase" v-text="name" />

        <action-save :gradient="gradient" :name="name" />
      </div>

      <div v-if="controls" class="flow-root mt-6">
        <div class="flex flex-wrap justify-center -m-0.5">
          <span v-for="dir of directions" :key="dir.id" class="p-0.5">
            <button
              class="p-1.5 rounded-lg bg-gray-800/75 hover:text-pink-500 transition-colors"
              :aria-label="`Change gradient direction to ${dir.key}`"
              @click="handleDirection(dir)"
            >
              <icon-center
                v-if="dir.key === 'center'"
                class="w-5 h-5"
                :class="dir.chevron"
              />
              <icon-chevron v-else class="w-5 h-5" :class="dir.chevron" />
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
      required: true
    },
    colors: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      required: true
    },
    version: {
      type: [String, Boolean],
      default: false
    },
    controls: {
      type: Boolean,
      default: true
    },
    overlap: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentDirection: this.direction,
      copyCode: '',
      isFavourite: false
    }
  },
  computed: {
    gradient() {
      if (this.version === 'JIT') {
        return this.css
      }

      return this.currentDirection !== undefined ? `${this.currentDirection} ${this.colors}` : this.colors
    },
    directions() {
      return this.version
        ? directions
        : directions.filter(dir => dir.key !== 'center')
    },
    favourite() {
      return this.isFavourite ? 'text-rose-500' : 'text-white'
    },
    card() {
      return this.overlap && '-mt-8'
    }
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

      const exists = gradients.find(gradient => gradient.name === this.name)

      if (exists) {
        gradients.splice(gradients.indexOf(exists), 1)

        this.isFavourite = false

        this.$toast.success('Removed from Favourites')
      } else {
        gradients.push({
          name: this.name,
          colors: this.colors,
          direction: this.currentDirection,
          version: this.version
        })

        this.isFavourite = true

        this.$toast.success('Added to Favourites')
      }

      localStorage.setItem('gradients', JSON.stringify(gradients))

      this.$emit('update')
    },
    checkFavourite() {
      const gradients = JSON.parse(localStorage.getItem('gradients')) || []

      return gradients.find(gradient => gradient.name === this.name)
    }
  }
}
</script>
