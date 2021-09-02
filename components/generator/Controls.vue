<template>
  <section class="sticky top-0 z-50 text-white bg-gray-900 border-t border-b border-gray-800/75">
    <div class="container py-4 space-y-4">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    edit: {
      type: Boolean,
      default: false
    }
  }
}
</script>