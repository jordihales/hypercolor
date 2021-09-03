<template>
  <article>
    <div class="h-64 rounded-3xl" ref="gradient" :class="gradient"></div>

    <div class="p-6 mx-1.5 -mt-8 text-white bg-gray-900 rounded-3xl">
      <div class="flex items-center justify-between">
        <p class="font-black tracking-wide uppercase" v-text="name" />

        <shared-save :gradient="gradient" :name="name" />
      </div>

      <div class="flow-root mt-6">
        <div class="flex flex-wrap justify-center -m-0.5">
          <span
            v-for="direction of directions"
            :key="direction.id"
            class="p-0.5"
          >
            <button
              class="p-1.5 rounded-lg bg-gray-800/75"
              @click="handleDirection(direction)"
            >
              <icons-center class="w-5 h-5" :class="direction.chevron" v-if="direction.key === 'center'" />
              <icons-chevron class="w-5 h-5" :class="direction.chevron" v-else />
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
      required: true,
    },
    direction: {
      type: String,
      required: true,
    },
    version: {
      type: [String, Boolean],
      default: false
    }
  },
  data() {
    return {
      currentDirection: this.direction,
      copyCode: ''
    }
  },
  computed: {
    gradient() {
      return `${this.currentDirection} ${this.colors}`
    },
    directions() {
      return this.version ? directions : directions.filter(dir => dir.key !== 'center')
    }
  },
  methods: {
    handleDirection(data) {
      const version = this.version.toLowerCase()

      this.currentDirection = this.version ? data[version] : data.gradient
    },
  }
}
</script>