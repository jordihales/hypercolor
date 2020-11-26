<template>
  <div class="container">
    <button
      class="text-sm font-medium group text-app-text"
      type="button"
      v-clipboard:copy="gradient"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"
      :data-gradient="name"
    >
      <span ref="text">Copy CSS</span>
      <span
        class="block w-full h-1 mt-1 transition-transform origin-left scale-x-50 rounded-full transform-gpu group-hover:scale-x-100"
        :class="gradient"
      ></span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    gradient: String,
    name: String,
  },
  methods: {
    onCopy(e) {
      const text = this.$refs.text.innerText
      const gradient = e.trigger.dataset.gradient

      this.$refs.text.innerText = 'Copied 🎉'

      setTimeout(() => (this.$refs.text.innerText = text), 2000)

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
}
</script>
