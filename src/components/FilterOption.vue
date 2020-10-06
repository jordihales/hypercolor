<template>
  <button
    type="button"
    class="inline-flex items-center justify-center px-4 py-3 border rounded focus:outline-none focus:shadow-outline hover:border-gray-300"
    :class="activeClass"
    @click="fireAction(theme)"
  >
    <div class="w-10 h-10 rounded" :class="colors"></div>
    <span class="ml-3 text-sm font-semibold leading-none text-gray-500">
      {{ theme }}
    </span>
  </button>
</template>

<script>
export default {
  props: {
    theme: String,
    colors: String,
    active: String,
  },
  computed: {
    activeClass() {
      return this.active === this.theme
        ? 'border-gray-300 bg-gray-50'
        : 'border-transparent'
    },
  },
  methods: {
    fireAction(theme) {
      this.$emit('action', theme)
    },
  },
}
</script>