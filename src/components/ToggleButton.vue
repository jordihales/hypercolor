<template>
  <button
    class="px-6 py-3 text-sm font-medium text-white rounded-lg shadow-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
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
