<template>
  <div>
    <content-banner
      title="Grainy Gradient Generator"
      subtitle="Grainy Gradient Generator for Tailwind CSS"
    >
      Create beautiful grainy style gradients using the full range of Tailwind
      CSS colors, perfect for your desktop or phone wallpaper.
    </content-banner>

    <generator-controls
      :gradient="gradient"
      :color="color"
      type="grainy"
      @random="handleRandomiser"
    >
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <generator-select
          id="Direction"
          v-model="direction"
          :items="directions"
          label-key="name"
          value-key="css"
        />
        <generator-select id="From" v-model="from" :items="fromColors" />
        <generator-select id="Via" v-model="via" :items="viaColors" />
        <generator-select id="To" v-model="to" :items="toColors" />
      </div>
    </generator-controls>

    <span ref="bgColor" class="sr-only" :class="bgColor" />

    <grainy-preview :gradient="gradient" :color="color" />
  </div>
</template>

<script>
import { getBackgroundColor } from '@/utils/getColor'
import { createColorClasses } from '@/utils/createColors'
import { getDirections } from '@/utils/getDirections'

export default {
  name: 'GrainyPage',
  asyncData () {
    return {
      fromColors: createColorClasses('from'),
      viaColors: createColorClasses('via'),
      toColors: createColorClasses('to')
    }
  },
  data () {
    return {
      direction: '',
      from: '',
      via: '',
      to: '',
      color: ''
    }
  },
  head () {
    return {
      title: 'Gradient Generator for Tailwind CSS',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Create your own Tailwind CSS gradient with the full Tailwind CSS color library and the extended radial and conic gradient options provided through Hypercolor.'
        }
      ]
    }
  },
  computed: {
    gradient () {
      return this.via !== 'none'
        ? `${this.direction} ${this.from} ${this.via} ${this.to}`
        : `${this.direction} ${this.from} ${this.to}`
    },
    bgColor () {
      return this.from.replace('from', 'bg')
    },
    directions () {
      return getDirections()
    }
  },
  watch: {
    from () {
      this.getColor()
    }
  },
  mounted () {
    this.handleRandomiser()

    this.$nextTick(() => this.getColor())
  },
  methods: {
    getRandom (array) {
      return array[Math.floor(Math.random() * array.length)]
    },
    handleRandomiser () {
      this.direction = this.getRandom(this.directions).css
      this.from = this.getRandom(this.fromColors)
      this.via = this.getRandom(this.viaColors)
      this.to = this.getRandom(this.toColors)
    },
    getColor () {
      this.color = getBackgroundColor(this.$refs.bgColor)
    }
  }
}
</script>
