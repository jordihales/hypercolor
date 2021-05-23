<template>
  <div>
    <button
      class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 text-gray-500 bg-gray-100 rounded-lg dark:text-gray-300 dark:bg-gray-800"
      v-clipboard:copy="value"
      v-clipboard:error="onError"
      v-clipboard:success="onCopy"
    >
      <ClipboardIcon className="w-5 h-5" />
    </button>

    <div :class="gradient" ref="gradient" v-if="isCSS"></div>
  </div>
</template>

<script>
export default {
  components: {
    ClipboardIcon: () => import('@/components/icons/Clipboard'),
  },
  data() {
    return {
      value: '',
    }
  },
  props: {
    gradient: String,
    name: String,
    type: String,
  },
  computed: {
    isCSS() {
      return this.type === 'CSS'
    },
  },
  methods: {
    onCopy() {
      this.$gtag.event('Success', {
        event_category: 'Copy Gradient',
        event_label: this.name,
      })
    },
    onError() {
      this.$gtag.event('Failed', {
        event_category: 'Copy Gradient',
        event_label: this.name,
      })
    },
  },
  mounted() {
    this.value = this.isCSS ? getComputedStyle(this.$refs.gradient).getPropertyValue('background-image') : this.gradient
  },
}
</script>
