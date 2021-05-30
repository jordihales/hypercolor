<template>
  <div class="fixed inset-x-0 bottom-0 z-50 p-2" v-if="showPopup">
    <div class="relative max-w-xl p-6 bg-gray-100 rounded-lg shadow-sm dark:bg-gray-800">
      <button
        type="button"
        @click="showPopup = false"
        class="absolute p-1 text-gray-500 bg-white border border-gray-200 rounded-full dark:text-gray-300 dark:bg-gray-900 dark:border-gray-700 -top-1 -right-1"
      >
        <CloseIcon className="w-3 h-3" />
      </button>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div class="w-full h-full rounded-xl" :class="gradient.colors"></div>

        <div class="col-span-2">
          <h2 class="text-xl font-black leading-snug tracking-widest uppercase">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              Hypercolor
            </span>

            <span class="block text-3xl text-transparent bg-clip-text" :class="gradient.colors">
              Full Access
            </span>
          </h2>

          <p class="mt-4 text-sm text-gray-500 dark:text-gray-300">
            With the full access upgrade, you get the ability to download the gradients you love from our ever growing
            collection as JPEGs.
          </p>

          <div class="justify-between mt-6 sm:flex">
            <a
              href="https://twitter.com/itsmarkmead/status/1396148858191630340?s=20"
              target="_blank"
              class="block w-full px-6 py-3 text-sm font-medium text-center text-white border border-pink-500 rounded-lg"
            >
              Watch preview
            </a>

            <a
              href="https://gumroad.com/a/1027282035/TjkKF?wanted=true"
              @click="trackClick"
              data-gumroad-single-product="true"
              class="block w-full px-6 py-3 mt-3 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 sm:mt-0 sm:ml-3"
            >
              Buy for $1
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validLicense } from '@/utils/auth'
import { randomGradient } from '@/assets/data/gradients.js'

export default {
  components: {
    CloseIcon: () => import('@/components/icons/Close'),
  },
  data() {
    return {
      showPopup: false,
      gradient: '',
    }
  },
  methods: {
    trackClick() {
      this.$gtag.event('Click', {
        event_category: 'Offsite',
        event_label: 'Gumroad',
      })
    },
  },
  mounted() {
    let showPopup = validLicense() === null
    showPopup = showPopup ? this.$route.name !== 'Validate' : false

    this.gradient = randomGradient()
    this.showPopup = showPopup

    setInterval(() => {
      this.gradient = randomGradient()
    }, 3000)
  },
}
</script>
