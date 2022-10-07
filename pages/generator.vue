<template>
  <div>
    <content-banner
      title="Gradient Generator"
      subtitle="Gradient Generator for Tailwind CSS"
    >
      Create your own Tailwind CSS gradient with the full Tailwind CSS color
      library and the extended radial and conic gradient options provided
      through Hypercolor.
    </content-banner>

    <generator-controls :gradient="gradient" @random="handleRandomiser">
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <generator-select
          id="Direction"
          v-model="direction"
          :items="directions"
        />
        <generator-select id="From" v-model="from" :items="fromColors" />
        <generator-select id="Via" v-model="via" :items="viaColors" />
        <generator-select id="To" v-model="to" :items="toColors" />
      </div>
    </generator-controls>

    <generator-preview :gradient="gradient" />
  </div>
</template>

<script>
import { directions } from '~/assets/data/directions'
import { fromColors, viaColors, toColors } from '~/assets/data/colors'

export default {
  name: 'GeneratorPage',
  asyncData() {
    const filteredDirections = directions
      .flatMap((dir) => [dir.gradient, dir.radial, dir.conic])
      .filter((dir) => dir !== '')
      .sort()

    return {
      directions: filteredDirections,
      fromColors,
      viaColors,
      toColors,
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
  head() {
    return {
      title: 'Gradient Generator for Tailwind CSS',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Create your own Tailwind CSS gradient with the full Tailwind CSS color library and the extended radial and conic gradient options provided through Hypercolor.',
        },
      ],
    }
  },
  computed: {
    gradient() {
      return this.via !== 'none'
        ? `${this.direction} ${this.from} ${this.via} ${this.to}`
        : `${this.direction} ${this.from} ${this.to}`
    },
  },
  mounted() {
    this.handleRandomiser()
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
    },
  },
}
</script>
