<template>
  <div>
    <button
      class="p-2 text-xs font-semibold text-gray-500 uppercase transition-opacity bg-gray-100 rounded-lg dark:text-gray-300 dark:bg-gray-800 hover:bg-opacity-50"
      v-clipboard:copy="value"
      v-clipboard:error="onError"
      v-clipboard:success="onCopy"
      :data-gradient="name"
    >
      {{ label }}
    </button>
    <div :class="gradient" ref="gradient" v-if="css"></div>
  </div>
</template>

<script>
export default {
  props: {
    css: Boolean,
    gradient: String,
    name: String,
  },
  data() {
    return {
      value: '',
    }
  },
  computed: {
    label() {
      return this.css ? 'CSS' : 'Tailwind'
    },
  },
  methods: {
    onCopy(e) {
      const gradient = e.trigger.dataset.gradient
      e.trigger.innerText = 'Copied'

      setTimeout(() => (e.trigger.innerText = this.label), 2000)

      this.$gtag.event('Success', {
        event_category: 'Copy Gradient',
        event_label: gradient,
      })
    },
    onError(e) {
      const gradient = e.trigger.dataset.gradient

      alert(`Failed to copy ${gradient}`)

      this.$gtag.event('Failed', {
        event_category: 'Copy Gradient',
        event_label: gradient,
      })
    },
  },
  mounted() {
    this.value = this.css ? getComputedStyle(this.$refs.gradient).getPropertyValue('background-image') : this.gradient
  },
}
</script>
