<template>
  <article class="relative">
    <div ref="gradient" class="h-64 rounded-3xl" :class="gradient" />

    <div class="p-6 mx-1.5 -mt-8 text-white bg-gray-900 rounded-3xl">
      <div class="flex items-center justify-between">
        <p class="font-black tracking-wide uppercase" v-text="name" />

        <shared-save :gradient="gradient" :name="name" />
      </div>

      <div class="flow-root mt-6">
        <div class="flex flex-wrap justify-center -m-0.5">
          <span
            v-for="dir of directions"
            :key="dir.id"
            class="p-0.5"
          >
            <button
              class="p-1.5 rounded-lg bg-gray-800/75 hover:text-pink-500 transition-colors"
              @click="handleDirection(dir)"
            >
              <icons-center v-if="dir.key === 'center'" class="w-5 h-5" :class="dir.chevron" />
              <icons-chevron v-else class="w-5 h-5" :class="dir.chevron" />
            </button>
          </span>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
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
    }
  },
  data () {
    return {
      currentDirection: this.direction,
      copyCode: ''
    }
  },
  computed: {
    gradient () {
      return `${this.currentDirection} ${this.colors}`
    },
    directions () {
      return this.version ? directions : directions.filter(dir => dir.key !== 'center')
    }
  },
  methods: {
    handleDirection (data) {
      this.currentDirection = this.version ? data[this.version.toLowerCase()] : data.gradient

      this.$ga.event({
        eventCategory: 'Direction',
        eventAction: 'Change Direction',
        eventLabel: this.name,
        eventValue: this.currentDirection
      })
    }
  }
}
</script>
