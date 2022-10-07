<template>
  <header
    class="sticky top-0 z-50 border-b border-gray-800/75 bg-gray-900 text-sm font-medium text-white"
  >
    <div
      class="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8"
    >
      <nav class="hidden sm:flex sm:items-center sm:gap-4 lg:gap-8">
        <nuxt-link :to="{ name: 'index' }"> Gradients </nuxt-link>

        <nuxt-link
          v-for="{ title, name } in navigation"
          :key="name"
          :to="{ name }"
          v-text="title"
        />
      </nav>

      <div class="hidden md:flex md:items-center md:gap-4 lg:gap-8">
        <header-jordi class="hidden md:block" />
        <header-mark class="hidden md:block" />
        <header-github />
      </div>

      <nuxt-link :to="{ name: 'index' }" class="block sm:hidden">
        Gradients
      </nuxt-link>

      <button
        aria-label="Toggle mobile menu"
        class="inline-block rounded-xl bg-gray-800/75 p-2.5 md:hidden"
        @click="toggleMobile"
      >
        <icon-menu class="h-4 w-4" />
      </button>
    </div>

    <div v-if="mobile" class="absolute z-50 w-full p-4">
      <div class="rounded-xl bg-gray-900 p-8 ring-2 ring-pink-500">
        <nav class="flex flex-col items-center space-y-4">
          <nuxt-link
            v-for="{ title, name } in navigation"
            :key="name"
            :to="{ name }"
            v-text="title"
          />
        </nav>

        <div class="mt-8 flex items-center justify-center gap-8">
          <header-jordi />
          <header-mark />
          <header-github />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
/* eslint-disable space-before-function-paren */

import { siteNavigation } from '@/assets/data/siteNavigation'

export default {
  data() {
    return {
      mobile: false,
    }
  },
  computed: {
    navigation() {
      return siteNavigation
    },
  },
  watch: {
    $route() {
      this.mobile = false
    },
  },
  methods: {
    toggleMobile() {
      this.mobile = !this.mobile
    },
  },
}
</script>
