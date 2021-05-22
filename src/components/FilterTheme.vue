<template>
  <div class="relative" v-click-outside="hideDropdown">
    <button
      class="inline-flex items-center p-3 space-x-3 border border-gray-200 dark:border-gray-700 rounded-xl"
      @click="showDropdown = !showDropdown"
    >
      <span class="flex-shrink-0 w-8 h-8 rounded-lg" :class="theme.colors"></span>
      <span class="text-sm font-medium text-gray-500 dark:text-gray-300">
        {{ theme.theme }}
      </span>
      <IconSelector iconClass="w-5 h-5 text-gray-300" />
    </button>

    <ul
      v-show="showDropdown"
      class="absolute top-auto flex flex-wrap w-screen max-w-xs p-2 mt-2 bg-white border border-gray-200 sm:max-w-lg dark:border-gray-700 dark:bg-gray-900 rounded-xl"
    >
      <li v-for="theme in themes" :key="theme.title" class="p-2">
        <a
          class="inline-flex items-center p-3 space-x-3 border border-gray-200 dark:border-gray-700 rounded-xl"
          :href="themeHref(theme.theme)"
          @click="fireAction(theme)"
        >
          <span class="flex-shrink-0 w-8 h-8 rounded-lg" :class="theme.colors"></span>
          <span class="text-sm font-medium text-gray-500 dark:text-gray-300">
            {{ theme.theme }}
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
    IconSelector: () => import('@/components/IconSelector'),
  },
  data() {
    return {
      showDropdown: false,
    }
  },
  props: {
    theme: Object,
    themes: Array,
  },
  methods: {
    fireAction(name) {
      this.$emit('action', name)
    },
    themeHref(name) {
      return `#${name}`
    },
    hideDropdown() {
      this.showDropdown = false
    },
  },
}
</script>
