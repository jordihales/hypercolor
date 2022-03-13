<template>
  <div>
    <shared-banner
      title="Mesh Gradients"
      subtitle="Mesh Gradients for Tailwind CSS"
    >
      Beautiful mesh style gradients using the full range of Tailwind CSS
      colors, perfect for your desktop or phone wallpaper.
    </shared-banner>

    <div class="container grid grid-cols-1 gap-8 lg:grid-cols-4">
      <div class="sticky top-20 lg:col-span-3">
        <div class="h-[600px] rounded-3xl" :style="gradient()">
          <div v-if="showControls" class="absolute inset-0">
            <div
              v-for="(stop, index) in stops"
              :key="index"
              class="absolute w-6 h-6 text-xs font-medium leading-6 text-center text-white bg-gray-900 rounded-full"
              :style="`left: ${stop.position.left}%; top: ${stop.position.top}%;`"
              v-text="index"
            />
          </div>
        </div>

        <div class="mt-4 text-white">
          <shared-save :gradient="gradient()" :style="true" :tailwind="false" name="Mesh Gradient" />
        </div>
      </div>

      <div>
        <span ref="zColor" class="sr-only" :class="color" />

        <span
          v-for="(_, index) in colors"
          :key="index"
          :ref="`color${index}`"
          class="sr-only"
          :class="colors[index]"
        />

        <div class="space-y-8 text-white">
          <div class="flex gap-4">
            <button
              class="w-full py-3 text-sm font-medium transition-colors rounded-xl bg-gray-800/75 hover:text-pink-500"
              @click="showControls = !showControls"
            >
              <span v-if="showControls">Hide</span>
              <span v-else>Show</span>
              Stops
            </button>

            <button
              class="w-full py-3 text-sm font-medium transition-colors rounded-xl bg-gray-800/75 hover:text-pink-500"
              @click="addStop"
            >
              Add Stop
            </button>
          </div>

          <div>
            <p class="mb-1 text-xs font-medium">
              Background Color
            </p>

            <generator-select id="Color" v-model="color" :items="bgColors" />
          </div>

          <div>
             <p class="mb-1 text-xs font-medium">
              Color Stops
            </p>

            <div class="space-y-1">
              <details
                v-for="(stop, index) in stops"
                :key="index"
                class="border border-gray-800/75 rounded-xl p-2.5 focus-within:ring focus-within:ring-pink-500"
              >
                <summary class="flex items-center justify-between text-sm font-medium transition-colors cursor-pointer hover:text-pink-500 focus:ring-0">
                  <p class="text-xs font-medium">
                    {{ index }}
                  </p>

                  <div class="font-mono text-xs font-medium">
                    {{ colors[index] }} / {{ stop.position.left }}% / {{ stop.position.top }}% / {{ stop.transparent }}%
                  </div>
                </summary>

                <div class="mt-4 space-y-4">
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label for="Left" class="mb-1 text-xs font-medium">
                        Left
                      </label>

                      <input id="Left" v-model="stop.position.left" type="range">
                    </div>

                    <div>
                      <label for="Top" class="mb-1 text-xs font-medium">
                        Top
                      </label>

                      <input id="Top" v-model="stop.position.top" type="range">
                    </div>

                    <div>
                      <label for="Transparent" class="mb-1 text-xs font-medium">
                        Transparent
                      </label>

                      <input id="Transparent" v-model="stop.transparent" type="range">
                    </div>
                  </div>

                  <generator-select id="Background" v-model="colors[index]" :items="bgColors" />

                  <button
                    class="w-full py-3 text-sm font-medium transition-colors rounded-xl bg-gray-800/75 hover:text-pink-500"
                    @click="removeStop(index)"
                  >
                    Remove Stop
                  </button>
                </div>
              </details>
            </div>
          </div>
        </div>
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

      this.rgbColors = this.colors.map((_, index) =>
        getColor(this.$refs[`color${index}`][0])
      )
    },
    update() {
      this.$nextTick(() => this.generate())
    },
    removeStop(index) {
      this.stops.splice(index, 1)
    },
    addStop() {
      const left = Math.floor(Math.random() * 100)
      const top = Math.floor(Math.random() * 100)
      const transparent = Math.floor(Math.random() * 100)
      const color = this.bgColors[Math.floor(Math.random() * this.bgColors.length)]

      this.stops.push({
        position: {
          left,
          top
        },
        transparent
      })

      this.colors.push(color)
    }
  }
}
</script>
