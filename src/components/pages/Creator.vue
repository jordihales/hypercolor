<template>
  <div>
    <section role="banner">
      <div class="container pt-24 pb-12 lg:pt-36">
        <div class="max-w-2xl mx-auto text-center">
          <h1
            class="text-4xl font-black leading-snug tracking-widest text-transparent uppercase sm:text-6xl bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
          >
            Create Your Own Gradient
          </h1>
        </div>
      </div>
    </section>

    <div class="max-w-3xl mx-auto">
      <div
        class="w-full rounded-lg h-96"
        :class="gradient"
      />

      <div class="grid grid-cols-4 gap-4 mt-8">
        <div>
          <label
            for="direction"
            class="text-xs font-medium tracking-widest text-gray-600 uppercase dark:text-gray-300"
          >
            Direction
          </label>

          <select
            id="direction"
            v-model="direction"
            class="w-full p-3 mt-1 text-sm text-white bg-transparent border border-white rounded-lg"
          >
            <option
              v-for="twDirection of directions"
              :key="twDirection"
              :value="twDirection"
            >
              {{ twDirection }}
            </option>
          </select>
        </div>

        <div>
          <label
            for="from"
            class="text-xs font-medium tracking-widest text-gray-600 uppercase dark:text-gray-300"
          >
            From
          </label>

          <select
            id="from"
            v-model="from"
            class="w-full p-3 mt-1 text-sm text-white bg-transparent border border-white rounded-lg"
          >
            <option
              v-for="color of fromColors"
              :key="color"
              :value="color"
            >
              {{ color }}
            </option>
          </select>
        </div>

        <div>
          <label
            for="via"
            class="text-xs font-medium tracking-widest text-gray-600 uppercase dark:text-gray-300"
          >
            Via
          </label>

          <select
            id="via"
            v-model="via"
            class="w-full p-3 mt-1 text-sm text-white bg-transparent border border-white rounded-lg"
          >
            <option
              v-for="color of viaColors"
              :key="color"
              :value="color"
            >
              {{ color }}
            </option>
          </select>
        </div>

        <div>
          <label
            for="to"
            class="text-xs font-medium tracking-widest text-gray-600 uppercase dark:text-gray-300"
          >
            To
          </label>

          <select
            id="to"
            v-model="to"
            class="w-full p-3 mt-1 text-sm text-white bg-transparent border border-white rounded-lg"
          >
            <option
              v-for="color of toColors"
              :key="color"
              :value="color"
            >
              {{ color }}
            </option>
          </select>
        </div>
      </div>

      <button
        type="button"
        class="block px-6 py-3 mx-auto mt-8 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
        @click="generateGradient"
      >
        Randomise Gradient
      </button>
    </div>
  </div>
</template>

<script>
import { fromColors, viaColors, toColors } from '@/assets/data/colors'
import { allDirections } from '@/assets/data/directions'

export default {
  data() {
    return {
      fromColors,
      viaColors,
      toColors,
      directions: allDirections(),
      direction: '',
      from: '',
      via: '',
      to:'',
    }
  },
  computed: {
    gradient() {
      if(this.via !== 'none') {
        return `${this.direction} ${this.from} ${this.via} ${this.to}`
      } else {
        return `${this.direction} ${this.from} ${this.to}`
      }
    }
  },
  mounted() {
    this.generateGradient()
  },
  methods: {
    generateGradient() {
      this.direction = this.directions[Math.floor(Math.random() * this.directions.length)]
      this.from = this.fromColors[Math.floor(Math.random() * this.fromColors.length)]
      this.via = this.viaColors[Math.floor(Math.random() * this.viaColors.length)]
      this.to = this.toColors[Math.floor(Math.random() * this.toColors.length)]
    },
    changeShowcaseKey() {
      this.generateGradient()

    }
  }
}
</script>