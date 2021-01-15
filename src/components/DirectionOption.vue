<template>
  <button
    class="inline-flex items-center justify-center w-6 h-6 text-sm font-medium transition-opacity duration-100 ease-in bg-gray-100 rounded-full lg:w-8 lg:h-8 hover:bg-opacity-50 dark:bg-gray-800 dark:text-gray-100"
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
