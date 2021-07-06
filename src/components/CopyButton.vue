<template>
  <div>
    <button
      v-clipboard:copy="copyValue"
      v-clipboard:error="onError"
      v-clipboard:success="onCopy"
      class="inline-flex items-center justify-center h-12 text-gray-600 bg-gray-100 rounded-lg dark:text-gray-300 dark:bg-gray-800"
      :class="buttonClass"
      :aria-label="`Copy gradient as ${type}`"
    >
      <span
        v-if="showTitle"
        class="text-sm font-medium"
        v-text="type"
      />
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
    showTitle: Boolean
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
    buttonClass() {
      return this.showTitle ? 'px-4 space-x-3': 'w-12'
    }
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
