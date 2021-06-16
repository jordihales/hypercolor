<template>
  <div
    v-click-outside="hideDropdown"
    class="relative"
  >
    <button
      class="inline-flex items-center p-3 space-x-3 text-gray-500 border border-gray-200 dark:border-gray-700 rounded-xl dark:text-gray-300"
      @click="showDropdown = !showDropdown"
    >
      <span
        class="flex-shrink-0 w-8 h-8 rounded-lg"
        :class="selected.colors"
      />
      <span class="text-sm font-medium">
        {{ selected.theme }}
      </span>
      <SelectorIcon />
    </button>

    <ul
      v-show="showDropdown"
      class="absolute top-auto flex flex-wrap w-screen max-w-xs p-2 mt-2 bg-white border border-gray-200 sm:max-w-lg dark:border-gray-700 dark:bg-gray-900 rounded-xl"
    >
      <li
        v-for="theme in themes"
        :key="theme.title"
        class="p-2"
      >
        <button
          class="inline-flex items-center p-3 space-x-3 border border-gray-200 dark:border-gray-700 rounded-xl"
          @click="fireAction(theme)"
        >
          <span
            class="flex-shrink-0 w-8 h-8 rounded-lg"
            :class="theme.colors"
          />
          <span
            class="text-sm font-medium text-gray-500 dark:text-gray-300"
            v-text="theme.theme"
          />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import SelectorIcon from '@/components/icons/Selector'

export default {
  components: {
    SelectorIcon
  },
  props: {
    selected: Object,
    themes: Array,
  },
  data() {
    return {
      showDropdown: false,
    }
  },
  methods: {
    fireAction(name) {
      this.$emit('action', name)
    },
    hideDropdown() {
      this.showDropdown = false
    },
  },
}
</script>
