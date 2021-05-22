<template>
  <button
    class="block p-2 text-gray-500 bg-gray-100 rounded-lg dark:text-gray-300 dark:bg-gray-800"
    @click="fireAction(direction)"
  >
    <span class="relative block transform" :class="chevronClass">
      <IconChevron iconClass="w-5 h-5" />
    </span>
  </button>
</template>

<script>
import { chevronDirections } from '@/assets/data/directions.js'

export default {
  components: {
    IconChevron: () => import('@/components/IconChevron'),
  },
  data() {
    return {
      chevronDirections,
    }
  },
  props: {
    direction: String,
    title: String,
  },
  computed: {
    chevronClass() {
      return this.chevronDirections[this.title]
    },
  },
  methods: {
    fireAction(direction) {
      this.$emit('action', direction)
    },
  },
}
</script>
