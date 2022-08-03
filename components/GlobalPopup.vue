<template>
  <aside
    v-if="show"
    class="fixed z-50 p-1 bottom-4 right-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-xl"
  >
    <div class="flex items-center px-5 py-3 bg-gray-900 rounded-lg">
      <a
        href="https://www.hyperui.dev/"
        target="_blank"
        rel="noopener noreferrer"
        class="block text-sm font-medium text-white transition hover:text-opacity-75"
      >
        Want Free Tailwind CSS Components? Click Here
      </a>

      <button
        class="p-2.5 rounded-xl bg-gray-800/75 hover:text-pink-500 transition-colors ml-2.5 text-white"
        aria-label="Close Popup"
        @click="hide"
      >
        <icon-close class="w-4 h-4" />
      </button>
    </div>
  </aside>
</template>

<script>
/* eslint-disable space-before-function-paren */

export default {
  data() {
    return {
      show: false
    }
  },
  mounted() {
    const showPopup = localStorage.getItem('showPopup')
    const showPopupDate = localStorage.getItem('showPopupDate')
    const hourHasPassed = showPopupDate && new Date().getTime() - new Date(showPopupDate).getTime() > 3600000

    if (hourHasPassed) {
      this.show = true

      localStorage.removeItem('showPopup')
      localStorage.removeItem('showPopupDate')
    }

    if (showPopup !== 'FALSE') {
      this.show = true
    }
  },
  methods: {
    hide() {
      this.show = false

      localStorage.setItem('showPopup', 'FALSE')
      localStorage.setItem('showPopupDate', new Date().toISOString())
    }
  }
}
</script>
