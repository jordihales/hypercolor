<template>
  <transition name="fade">
    <a
      href="#gradients"
      class="px-6 py-3 text-sm font-medium text-white rounded-lg shadow-lg bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
      aria-label="Scroll to gradients"
      v-show="show"
    >
      Scroll to Top
    </a>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    const gradients = document.getElementById('gradients')

    document.addEventListener('scroll', () => {
      if (window.scrollY > gradients.getBoundingClientRect().bottom) {
        this.show = true
      } else {
        this.show = false
      }
    })
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition-all duration-300;
}
.fade-enter,
.fade-leave-to {
  @apply transform translate-y-2 opacity-0;
}
</style>
