<template>
  <button
    class="inline-flex items-center justify-center w-8 h-8 text-xs font-semibold text-gray-500 uppercase transition-opacity bg-gray-100 rounded-lg dark:text-gray-300 dark:bg-gray-800 hover:bg-opacity-50"
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
