<template>
  <button
    type="button"
    class="fixed bottom-0 right-0 px-6 py-3 text-sm font-medium leading-none text-white transform -translate-x-6 -translate-y-6 rounded-lg shadow-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 focus:outline-none focus:shadow-outline"
    @click="fireAction"
  >
    Toggle Theme
  </button>
</template>

<script>
export default {
  methods: {
    fireAction() {
      this.$emit('action')
    },
  },
}
</script>
