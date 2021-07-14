<template>
  <button
    class="block p-2 text-gray-600 bg-gray-100 rounded-lg dark:text-gray-300 dark:bg-gray-800"
    :aria-label="`Change gradient direction ${direction}`"
    @click="fireAction(direction)"
  >
    <span
      class="relative block transform"
      :class="chevronClass"
    >
      <StatusIcon v-if="title === 'c'" />
      <ChevronUpIcon v-else />
    </span>
  </button>
</template>

<script>
import { chevronDirections } from '@/assets/data/directions'

import ChevronUpIcon from '@/components/icons/ChevronUp'
import StatusIcon from '@/components/icons/Status'

export default {
  components: {
    ChevronUpIcon,
    StatusIcon
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
