<template>
  <aside
    v-if="show"
    class="fixed bottom-4 right-4 z-50 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1"
  >
    <div class="flex items-center rounded-lg bg-gray-900 px-5 py-3">
      <a
        href="https://www.hyperui.dev/"
        target="_blank"
        rel="noopener noreferrer"
        class="block text-sm font-medium text-white transition hover:text-opacity-75"
      >
        Want Free Tailwind CSS Components? Click Here
      </a>

      <button
        class="ml-2.5 rounded-xl bg-gray-800/75 p-2.5 text-white transition-colors hover:text-pink-500"
        aria-label="Close Popup"
        @click="hide"
      >
        <icon-close class="h-4 w-4" />
      </button>
    </div>
  </aside>
</template>

<script>
/* eslint-disable space-before-function-paren */

export default {
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    const showPopup = localStorage.getItem('showPopup')
    const showPopupDate = localStorage.getItem('showPopupDate')
    const hourHasPassed =
      showPopupDate &&
      new Date().getTime() - new Date(showPopupDate).getTime() > 3600000

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
    },
  },
}
</script>
