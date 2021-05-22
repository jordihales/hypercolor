<template>
  <div class="relative" v-click-outside="hideDropdown">
    <button
      class="inline-flex items-center p-3 space-x-3 text-gray-500 border border-gray-200 dark:border-gray-700 rounded-xl dark:text-gray-300"
      @click="showDropdown = !showDropdown"
    >
      <span class="flex-shrink-0 w-8 h-8 rounded-lg" :class="theme.colors"></span>
      <span class="text-sm font-medium">
        {{ theme.theme }}
      </span>
      <SelectorIcon className="w-5 h-5" />
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
          <span class="text-sm font-medium text-gray-500 dark:text-gray-300" v-text="theme.theme" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
    SelectorIcon: () => import('@/components/icons/Selector'),
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
