<template>
  <button
    type="button"
    class="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold leading-none bg-gray-200 rounded-full focus:outline-none focus:shadow-outline hover:bg-gray-300"
    :class="activeClass"
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