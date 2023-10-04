<template>
  <article class="relative">
    <div ref="gradient" class="h-64 rounded-3xl" :class="gradient" />

    <div class="mx-1.5 -mt-6 rounded-3xl bg-gray-900 p-6 text-white">
      <p class="font-black uppercase tracking-wide" v-text="name" />

      <div class="mt-4 flex items-center gap-4">
        <generator-select
          :id="id"
          v-model="currentDirection"
          :items="directions"
          label-key="name"
          value-key="css"
          v-if="direction"
        />

        <action-save :gradient="gradient" :name="name" />
      </div>
    </div>
  </article>
</template>

<script>
import { getDirections } from '@/utils/getDirections'

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
    controls: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      currentDirection: this.direction,
      copyCode: '',
    }
  },
  computed: {
    gradient() {
      return this.currentDirection
        ? `${this.currentDirection} ${this.colors}`
        : `${this.colors}`
    },
    directions() {
      return getDirections()
    },
    id() {
      return `Direction${this.name.replace(' ', '')}`
    },
  },
}
</script>
