<template>
  <button
    class="inline-flex items-center justify-center px-5 py-3 rounded-lg dark:hover:bg-gray-800 hover:bg-gray-100"
    :class="activeClass"
    @click="fireAction(theme)"
  >
    <div class="w-10 h-10 rounded" :class="colors"></div>
    <span class="ml-3 text-sm font-medium text-gray-600 dark:text-gray-200">
      {{ theme }}
    </span>
  </button>
</template>

<script>
export default {
  props: {
    active: String,
    colors: String,
    theme: String,
  },
  computed: {
    activeClass() {
      return this.active === this.theme ? 'dark:bg-gray-800 bg-gray-100' : ''
    },
  },
  methods: {
    fireAction(theme) {
      this.$emit('action', theme)
    },
  },
}
</script>
