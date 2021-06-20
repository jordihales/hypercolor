<template>
  <button
    class="block p-2 text-gray-500 bg-gray-100 rounded-lg dark:text-gray-300 dark:bg-gray-800"
    :aria-label="`Change gradient direction ${direction}`"
    @click="fireAction(direction)"
  >
    <span
      class="relative block transform"
      :class="chevronClass"
    >
      <ChevronUpIcon />
    </span>
  </button>
</template>

<script>
import { chevronDirections } from '@/assets/data/directions'

import ChevronUpIcon from '@/components/icons/ChevronUp'

export default {
  components: {
    ChevronUpIcon
  },
  props: {
    direction: String,
    title: String,
  },
  data() {
    return {
      chevronDirections,
    }
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
