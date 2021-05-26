<template>
  <div
    class="fixed inset-0 z-50 grid p-4 bg-gray-100 bg-opacity-50 place-content-center backdrop-filter dark:bg-gray-800 dark:bg-opacity-50 backdrop-blur-md"
  >
    <section class="max-w-2xl p-8 mx-auto text-center bg-gray-900 shadow-xl sm:p-12 rounded-xl">
      <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">Thank you for your purchase</p>

      <h5
        class="mt-4 text-3xl font-black leading-snug tracking-widest text-transparent uppercase bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
      >
        Validate your purchase to unlock the full power of Hypercolor
      </h5>

      <div class="mt-8 space-y-3">
        <div ref="error" class="text-sm font-medium text-red-500" v-if="error">{{ error }}</div>
        <div ref="success" class="text-sm font-medium text-green-500" v-if="success">
          License is valid, thank you for your support!
          <br />
          You will be now redirect to the home page with full access.
        </div>

        <input
          type="text"
          v-model="licenseKey"
          class="w-full p-6 text-gray-500 bg-transparent border border-gray-300 rounded-xl dark:text-gray-300 dark:border-gray-800"
          placeholder="Enter license key"
        />

        <button
          type="button"
          class="flex items-center justify-center w-full p-6 space-x-3 text-white rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
          @click="validatePurchase()"
        >
          <UnlockIcon class="w-5 h-5" />
          <span class="text-sm font-medium">
            Unlock for full power
          </span>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {
    UnlockIcon: () => import('@/components/icons/Unlock'),
  },
  data() {
    return {
      licenseKey: '',
      error: false,
      success: false,
    }
  },
  methods: {
    validatePurchase() {
      const self = this

      fetch('https://api.gumroad.com/v2/licenses/verify', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_permalink: 'TjkKF',
          license_key: this.licenseKey,
        }),
      })
        .then((res) => res.json())
        .then(function(data) {
          if (data.success) self.validateSuccess()
          else self.error = data.message
        })
        .catch(function(err) {
          console.log(err)
        })
    },
    validateSuccess() {
      this.error = false
      this.success = true
      localStorage.setItem('validLicense', true)
      setTimeout(() => (window.location.href = '/'), 5000)
    },
  },
}
</script>
