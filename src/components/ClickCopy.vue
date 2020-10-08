<template>
  <div class="container">
    <input type="hidden" v-model="gradient" />
    <div class="inline-flex flex-col items-start group">
      <button
        class="text-sm font-medium focus:outline-none focus:shadow-outline"
        type="button"
        v-clipboard:copy="gradient"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
        data-gradient="gradient"
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
  },
  methods: {
    onCopy(e) {
      const text = e.trigger.innerText
      e.trigger.innerText = 'Copied!'

      setTimeout(() => (e.trigger.innerText = text), 2000)

      this.$gtag.event('Success', {
        event_category: 'Copy Gradient',
        value: e.trigger.dataset.gradient,
      })
    },
    onError(e) {
      alert('Failed to copy texts')
      this.$gtag.event('Failed', {
        event_category: 'Copy Gradient',
        value: e.trigger.dataset.gradient,
      })
    },
  },
}
</script>
