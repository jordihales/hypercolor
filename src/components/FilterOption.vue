<template>
  <a
    class="inline-flex items-center justify-center p-1 rounded-xl group"
    :class="colors"
    @click="fireAction(theme)"
    :href="url"
  >
    <span
      class="w-full px-6 py-4 text-xs font-semibold tracking-widest text-center text-gray-800 uppercase transition-opacity bg-white rounded-lg group-hover:opacity-0 dark:text-gray-300 dark:bg-gray-900"
      :class="activeClass"
    >
      {{ theme }}
    </span>
  </a>
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
      return this.active === this.theme ? 'opacity-0' : ''
    },
    url() {
      return `#${this.theme}`
    },
  },
  methods: {
    fireAction(theme) {
      this.$emit('action', theme)
    },
  },
}
</script>
