<template>
  <button
    class="inline-flex items-center justify-center w-6 h-6 text-xs font-semibold text-gray-600 uppercase transition-opacity bg-gray-100 rounded-lg dark:text-gray-100 dark:bg-gray-800 hover:bg-opacity-50 lg:w-8 lg:h-8"
    @click="fireAction(direction)"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    direction: String,
    title: String,
  },
  methods: {
    fireAction(direction) {
      this.$emit('action', direction)
    },
  },
}
</script>
