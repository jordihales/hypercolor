<template>
  <button
    type="button"
    class="inline-flex items-center justify-center px-4 py-3 border rounded focus:outline-none focus:shadow-outline hover:border-gray-300 dark:hover:border-gray-700"
    :class="activeClass"
    @click="fireAction(theme)"
  >
    <div class="w-10 h-10 rounded" :class="colors"></div>
    <span class="ml-3 text-sm font-medium leading-none text-gray-600 dark:text-gray-400">
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
      return this.active === this.theme ? 'border-gray-300 dark:border-gray-700' : 'border-transparent'
    },
  },
  methods: {
    fireAction(theme) {
      this.$emit('action', theme)
    },
  },
}
</script>
