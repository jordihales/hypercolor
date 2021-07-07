<template>
  <div
    v-if="showPopup"
    class="fixed bottom-0 left-0 z-50 p-2"
  >
    <div class="relative max-w-sm">
      <div
        class="absolute inset-0 rounded-xl"
        :class="gradient.colors"
      />

      <button
        type="button"
        class="absolute z-10 p-1 text-gray-600 bg-white border border-gray-200 rounded-full dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700 -top-1.5 -right-1.5"
        aria-label="Close popup"
        @click="showPopup = false"
      >
        <CloseIcon />
      </button>

      <div class="relative p-0.5">
        <div class="p-6 bg-gray-100 rounded-xl dark:bg-gray-800">
          <h2 class="text-xl font-black leading-snug tracking-widest uppercase">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              Hypercolor
            </span>

            <span
              class="block text-3xl text-transparent bg-clip-text"
              :class="gradient.colors"
            >
              Full Access
            </span>
          </h2>

          <p class="mt-4 text-sm text-gray-600 dark:text-gray-300">
            With the full access upgrade, you get the ability to download the gradients you love from our ever growing
            collection as JPEGs.
          </p>

          <div class="justify-between mt-6 sm:flex">
            <a
              href="https://twitter.com/itsmarkmead/status/1396148858191630340?s=20"
              rel="noreferrer"
              target="_blank"
              class="block w-full px-6 py-3 text-sm font-medium text-center text-white border border-pink-500 rounded-lg"
            >
              Watch preview
            </a>

            <a
              href="https://gumroad.com/a/1027282035/TjkKF"
              rel="noreferrer"
              target="_blank"
              class="block w-full px-6 py-3 mt-3 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 sm:mt-0 sm:ml-3"
            >
              Buy for $3
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validLicense } from '@/utils/auth'
import { randomGradient } from '@/assets/data/gradients'

import CloseIcon from '@/components/icons/Close'

export default {
  components: {
    CloseIcon
  },
  data() {
    return {
      showPopup: false,
      gradient: '',
    }
  },
  mounted() {
    let showPopup = validLicense() === null
    showPopup = showPopup ? this.$route.name !== 'Validate' : false

    this.gradient = randomGradient()
    this.showPopup = showPopup

    setInterval(() => {
      this.gradient = randomGradient()
    }, 1500)
  },
}
</script>
