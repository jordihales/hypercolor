<template>
  <li>
    <a
      class="inline-flex items-center p-3 space-x-3 text-gray-500 border border-gray-200 dark:border-gray-700 rounded-xl dark:text-gray-300"
      href="https://gumroad.com/a/1027282035/TjkKF?wanted=true"
      @click="trackClick"
      data-gumroad-single-product="true"
    >
      <span
        class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-100 rounded-lg dark:bg-gray-800"
      >
        <ImageIcon className="w-5 h-5" />
      </span>
      <span class="hidden text-sm font-medium sm:block">
        JPEG
      </span>
    </a>
  </li>
</template>

<script>
export default {
  components: {
    ImageIcon: () => import('@/components/icons/Image'),
  },
  props: {
    name: String,
    type: String,
  },
  methods: {
    trackClick() {
      this.$gtag.event('Click', {
        event_category: 'Gumroad',
        event_label: 'Hypercolor',
      })
    },
  },
}
</script>
