<template>
  <div class="container">
    <input type="hidden" v-model="gradient" />
    <div class="inline-flex flex-col items-start group">
      <button
        class="text-sm font-medium text-gray-900 focus:outline-none focus:shadow-outline dark:text-gray-100"
        type="button"
        v-clipboard:copy="gradient"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
        :data-gradient="name"
      >
        Copy CSS
      </button>
      <span
        class="inline-block w-6 h-1 mt-1 duration-100 ease-in-out rounded-full transition-size group-hover:w-full"
        :class="gradient"
      ></span>
    </div>
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
      const text = e.trigger.innerText
      const gradient = e.trigger.dataset.gradient

      e.trigger.innerText = 'Copied 🎉'

      setTimeout(() => (e.trigger.innerText = text), 2000)

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
