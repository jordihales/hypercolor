<template>
  <div>
    <shared-banner
      title="Mesh Gradients"
      subtitle="Mesh Gradients for Tailwind CSS"
    >
      Beautiful mesh style gradients using the full range of Tailwind CSS
      colors, perfect for your desktop or phone wallpaper.
    </shared-banner>

    <span ref="zColor" class="sr-only" :class="color" />
    <span ref="aColor" class="sr-only" :class="colors[0]" />
    <span ref="bColor" class="sr-only" :class="colors[1]" />
    <span ref="cColor" class="sr-only" :class="colors[2]" />
    <span ref="dColor" class="sr-only" :class="colors[3]" />
    <span ref="eColor" class="sr-only" :class="colors[4]" />
    <span ref="fColor" class="sr-only" :class="colors[5]" />
    <span ref="gColor" class="sr-only" :class="colors[6]" />

    <div class="text-white">
      <div class="fixed inset-x-0 bottom-0 z-50 flex items-center h-32 bg-gray-900">
        <button @click="showControls = !showControls">
          Controls
        </button>

        <generator-select id="Color" v-model="color" :items="bgColors" />

        <div
          v-for="(stop, index) in stops"
          :key="index"
        >
          <p>{{ index }}</p>
          <input v-model="stop.position.left" type="range">
          <input v-model="stop.position.top" type="range">
          <input v-model="stop.transparent" type="range">
          <generator-select id="Background" v-model="colors[index]" :items="bgColors" />
        </div>
      </div>

      <div class="relative w-screen h-screen" :style="gradient()">
        <div
          v-if="showControls"
          v-for="(stop, index) in stops"
          :key="index"
          class="absolute w-6 h-6 text-xs font-medium leading-6 text-center bg-gray-900 rounded-full"
          :style="`left: ${stop.position.left}%; top: ${stop.position.top}%;`"
          v-text="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */

import { bgColors } from '~/assets/data/colors'
import { getColor } from '@/utils/colors'

export default {
  asyncData () {
    return {
      bgColors
    }
  },
  data() {
    return {
      stops: [
        {
          position: {
            left: 61,
            top: 76
          },
          transparent: 56
        },
        {
          position: {
            left: 81,
            top: 12
          },
          transparent: 46
        },
        {
          position: {
            left: 69,
            top: 5
          },
          transparent: 48
        },
        {
          position: {
            left: 21,
            top: 87
          },
          transparent: 47
        },
        {
          position: {
            left: 5,
            top: 62
          },
          transparent: 58
        },
        {
          position: {
            left: 97,
            top: 70
          },
          transparent: 55
        },
        {
          position: {
            left: 64,
            top: 80
          },
          transparent: 41
        }
      ],
      color: 'bg-yellow-100',
      colors: [
        'bg-blue-500',
        'bg-red-500',
        'bg-yellow-500',
        'bg-green-500',
        'bg-purple-500',
        'bg-orange-500',
        'bg-indigo-500'
      ],
      rgbColor: '',
      rgbColors: [],
      showControls: false
    }
  },
  head() {
    return {
      title: 'Mesh Gradients for Tailwind CSS',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Beautiful mesh style gradients using the full range of Tailwind CSS colors, perfect for your desktop or phone wallpaper.'
        }
      ]
    }
  },
  watch: {
    color: {
      handler() {
        this.update()
      }
    },
    colors: {
      handler() {
        this.update()
      },
      deep: true
    }
  },
  mounted() {
    this.generate()
  },
  methods: {
    gradient() {
      return `
        background-color: ${this.rgbColor};
        background-image: ${this.stops.map((stop, index) => `radial-gradient(at ${stop.position.left}% ${stop.position.top}%, ${this.rgbColors[index]} 0, transparent ${stop.transparent}%)`).join(', ')};
      `
    },
    generate() {
      this.rgbColor = getColor(this.$refs.zColor)

      this.rgbColors = [
        getColor(this.$refs.aColor),
        getColor(this.$refs.bColor),
        getColor(this.$refs.cColor),
        getColor(this.$refs.dColor),
        getColor(this.$refs.eColor),
        getColor(this.$refs.fColor),
        getColor(this.$refs.gColor)
      ]
    },
    update() {
      this.$nextTick(() => this.generate())
    }
  }
}
</script>
