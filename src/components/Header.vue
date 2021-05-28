<template>
  <header class="bg-white dark:bg-gray-900" v-if="!hideHeader">
    <div class="container flex items-center py-4 space-x-8">
      <button
        class="block p-2 text-gray-500 transition-colors bg-gray-100 rounded-lg dark:text-gray-300 dark:bg-gray-800 dark:hover:text-white hover:text-gray-800"
        @click="fireAction"
        aria-label="Toggle theme"
      >
        <SunIcon className="w-5 h-5" />
      </button>

      <nav class="flex items-center space-x-4" role="navigation">
        <NavLink url="https://twitter.com/consolelogjordi" title="Jordi" />
        <NavLink url="https://twitter.com/itsmarkmead" title="Mark" />
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  components: {
    NavLink: () => import('@/components/NavLink'),
    SunIcon: () => import('@/components/icons/Sun'),
  },
  data() {
    return {
      hideHeader: false,
    }
  },
  methods: {
    fireAction() {
      this.$emit('action')
    },
  },
  mounted() {
    this.hideHeader = this.$route.name === 'Validate' || this.$route.name === 'NotFound'
  },
}
</script>
