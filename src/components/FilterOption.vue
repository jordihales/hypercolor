<template>
  <a
    class="flex items-center transition-opacity opacity-60 sm:justify-center hover:opacity-100"
    :class="activeClass"
    @click="fireAction(theme)"
    :href="url"
  >
    <span class="flex-shrink-0 block w-10 h-10 rounded-lg" :class="colors"></span>
    <span class="ml-4 text-gray-500 app-subtitle dark:text-gray-300" v-text="theme" />
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
      return this.active === this.theme ? 'opacity-100' : ''
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
