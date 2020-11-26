<template>
  <button
    type="button"
    class="inline-flex items-center justify-center w-6 h-6 text-sm font-semibold transition-opacity duration-100 ease-in rounded-full lg:w-8 lg:h-8 text-app-text bg-app-btn hover:opacity-50"
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
