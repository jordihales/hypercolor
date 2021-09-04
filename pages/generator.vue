<template>
  <div>
    <shared-banner
      title="Gradient Generator"
      subtitle="Gradient Generator for Tailwind CSS"
    >
      A curated collection of beautiful Tailwind CSS gradients using the full range of Tailwind CSS colors. Easily copy and paste the class names, CSS or even save the gradients as an image.
    </shared-banner>

    <generator-controls :gradient="gradient" @random="handleRandomiser">
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <generator-select v-model="direction" :items="directions" id="Direction" />
        <generator-select v-model="from" :items="fromColors" id="From" />
        <generator-select v-model="via" :items="viaColors" id="Via" />
        <generator-select v-model="to" :items="toColors" id="To" />
      </div>
    </generator-controls>

    <generator-preview :gradient="gradient" />
  </div>
</template>

<script>
import { directions } from '~/assets/data/directions'
import { fromColors, viaColors, toColors } from '~/assets/data/colors'

export default {
  asyncData() {
    const filteredDirections = directions
      .flatMap(dir => [dir.gradient, dir.radial, dir.conic])
      .filter(dir => dir !== '')
      .sort()

    return {
      directions: filteredDirections,
      fromColors,
      viaColors,
      toColors
    }
  },
  data() {
    return {
      direction: '',
      from: '',
      via: '',
      to: '',
    }
  },
  computed: {
    gradient() {
      return this.via !== "none"
        ? `${this.direction} ${this.from} ${this.via} ${this.to}`
        : `${this.direction} ${this.from} ${this.to}`
    }
  },
  methods: {
    getRandom(array) {
      return array[Math.floor(Math.random() * array.length)]
    },
    handleRandomiser() {
      this.direction = this.getRandom(this.directions)
      this.from = this.getRandom(this.fromColors)
      this.via = this.getRandom(this.viaColors)
      this.to = this.getRandom(this.toColors)
    }
  },
  mounted() {
    this.handleRandomiser()
  }
}
</script>
