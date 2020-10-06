<template>
  <button
    type="button"
    class="inline-flex items-center justify-center w-6 h-6 text-sm font-semibold leading-none bg-gray-200 rounded-full lg:w-8 lg:h-8 focus:outline-none focus:shadow-outline hover:bg-gray-300"
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
