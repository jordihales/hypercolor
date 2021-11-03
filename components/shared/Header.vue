<template>
  <header
    class="sticky top-0 z-50 text-sm font-medium text-white bg-gray-900 border-b border-gray-800/75"
  >
    <div class="container flex items-center justify-between h-16">
      <nav class="hidden sm:items-center sm:space-x-8 sm:flex">
        <nuxt-link :to="{ name: 'index' }">
          Gradients
        </nuxt-link>

        <nuxt-link :to="{ name: 'generator' }">
          Generator
        </nuxt-link>

        <nuxt-link :to="{ name: 'mesh' }">
          Mesh
        </nuxt-link>

        <nuxt-link :to="{ name: 'favourite' }">
          Favourite
        </nuxt-link>

        <nuxt-link :to="{ name: 'grainy' }">
          Grainy
        </nuxt-link>
      </nav>

      <div class="hidden sm:items-center sm:flex sm:space-x-8">
        <a
          href="https://twitter.com/consolelogjordi"
          target="_blank"
          rel="noreferrer"
          class="hidden sm:block"
        >
          Jordi
        </a>

        <a
          href="https://twitter.com/itsmarkmead"
          target="_blank"
          rel="noreferrer"
          class="hidden sm:block"
        >
          Mark
        </a>

        <a
          href="https://github.com/jordihales/hypercolor"
          target="_blank"
          rel="noreferrer"
        >
          <span class="sr-only">GitHub</span>
          <icons-github class="w-5 h-5" />
        </a>
      </div>

      <nuxt-link :to="{ name: 'index' }" class="block sm:hidden">
        Gradients
      </nuxt-link>

      <button
        type="button"
        class="inline-block sm:hidden p-2.5 rounded-xl bg-gray-800/75"
        @click="toggleMobile"
      >
        <icons-menu class="w-4 h-4" />
      </button>
    </div>

    <div v-if="mobile" class="absolute z-50 w-full p-4">
      <div class="p-8 bg-gray-900 ring-2 ring-pink-500 rounded-xl">
        <nav class="flex flex-col items-center space-y-4">
          <nuxt-link :to="{ name: 'generator' }">
            Generator
          </nuxt-link>

          <nuxt-link :to="{ name: 'mesh' }">
            Mesh
          </nuxt-link>

          <nuxt-link :to="{ name: 'favourite' }">
            Favourite
          </nuxt-link>
        </nav>

        <div class="flex items-center justify-center mt-8 space-x-8">
          <a
            href="https://twitter.com/consolelogjordi"
            target="_blank"
            rel="noreferrer"
          >
            Jordi
          </a>

          <a
            href="https://twitter.com/itsmarkmead"
            target="_blank"
            rel="noreferrer"
          >
            Mark
          </a>

          <a
            href="https://github.com/jordihales/hypercolor"
            target="_blank"
            rel="noreferrer"
          >
            <span class="sr-only">GitHub</span>
            <icons-github class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobile: false
    }
  },
  methods: {
    toggleMobile() {
      this.mobile = !this.mobile
    }
  }
}
</script>
