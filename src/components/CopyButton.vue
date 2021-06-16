<template>
  <div>
    <button
      v-clipboard:copy="copyValue"
      v-clipboard:error="onError"
      v-clipboard:success="onCopy"
      class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 text-gray-500 bg-gray-100 rounded-lg dark:text-gray-300 dark:bg-gray-800"
    >
      <ClipboardIcon />
    </button>

    <div
      ref="gradient"
      :class="gradient"
    />
  </div>
</template>

<script>
import ClipboardIcon from '@/components/icons/Clipboard'

export default {
  components: {
    ClipboardIcon
  },
  props: {
    gradient: String,
    name: String,
    type: String,
  },
  data() {
    return {
      tailwindValue: '',
      cssValue: '',
    }
  },
  computed: {
    copyValue() {
      return this.type === 'CSS' ? this.cssValue : this.tailwindValue
    },
  },
  mounted() {
    this.cssValue = getComputedStyle(this.$refs.gradient).getPropertyValue('background-image')
    this.tailwindValue = this.gradient
  },
  methods: {
    onCopy() {
      this.$gtag.event('Success', {
        event_category: `Copy Gradient (${this.type})`,
        event_label: this.name,
      })
    },
    onError() {
      this.$gtag.event('Failed', {
        event_category: `Copy Gradient (${this.type})`,
        event_label: this.name,
      })
    },
  },
}
</script>
