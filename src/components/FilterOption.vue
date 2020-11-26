<template>
  <button
    type="button"
    class="inline-flex items-center justify-center px-4 py-3 border rounded hover:border-app-border"
    :class="activeClass"
    @click="fireAction(theme)"
  >
    <div class="w-10 h-10 rounded" :class="colors"></div>
    <span class="ml-3 text-sm font-medium text-app-text">
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
      return this.active === this.theme ? 'border-app-border' : 'border-transparent'
    },
  },
  methods: {
    fireAction(theme) {
      this.$emit('action', theme)
    },
  },
}
</script>
