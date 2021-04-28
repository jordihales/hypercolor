<template>
  <button
    class="p-2 text-xs font-semibold tracking-widest text-gray-600 uppercase transition-opacity bg-gray-100 rounded-lg dark:text-gray-100 dark:bg-gray-800 hover:bg-opacity-50"
    v-clipboard:copy="gradient"
    v-clipboard:error="onError"
    v-clipboard:success="onCopy"
    :data-gradient="name"
  >
    Tailwind
  </button>
</template>

<script>
export default {
  props: {
    gradient: String,
    name: String,
  },
  methods: {
    onCopy(e) {
      const gradient = e.trigger.dataset.gradient
      e.trigger.innerText = 'Copied'

      setTimeout(() => (e.trigger.innerText = 'Tailwind'), 2000)

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
