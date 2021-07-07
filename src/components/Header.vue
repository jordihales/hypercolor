<template>
  <header
    v-if="!hideHeader"
    class="bg-white dark:bg-gray-900"
  >
    <div class="container flex items-center py-4 space-x-8">
      <button
        class="block p-2 text-gray-600 transition-colors bg-gray-100 rounded-lg dark:text-gray-300 dark:bg-gray-800 dark:hover:text-white hover:text-gray-800"
        aria-label="Toggle website theme"
        @click="fireAction"
      >
        <SunIcon />
      </button>

      <nav
        class="flex items-center justify-between flex-1"
        role="navigation"
      >
        <div class="flex space-x-6">
          <NavLink
            url="/"
            title="Home"
            :external="false"
          />

          <NavLink
            url="/generator"
            title="Generator"
            :external="false"
          />
        </div>

        <div class="hidden sm:flex sm:space-x-6">
          <NavLink
            url="https://twitter.com/consolelogjordi"
            title="Jordi"
            :external="true"
          />
          <NavLink
            url="https://twitter.com/itsmarkmead"
            title="Mark"
            :external="true"
          />
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import NavLink from '@/components/NavLink'
import SunIcon from '@/components/icons/Sun'

export default {
  components: {
    NavLink,
    SunIcon,
  },
  data() {
    return {
      hideHeader: false,
    }
  },
  mounted() {
    this.hideHeader = this.$route.name === 'Validate' || this.$route.name === 'NotFound'
  },
  methods: {
    fireAction() {
      this.$emit('action')
    },
  },
}
</script>
