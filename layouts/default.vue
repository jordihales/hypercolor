<template>
  <div class="bg-gray-900">
    <global-announcement />
    <global-header />
    <global-popup />

    <main>
      <Nuxt />
    </main>

    <global-footer />
  </div>
</template>

<script>
export default {
  name: 'LayoutComponent'
}
</script>

<style lang="postcss">
*:focus {
  @apply border-transparent outline-none ring-2 ring-pink-500 ring-offset-2 ring-offset-gray-900;
}

.toasted-container.notification-container.bottom-center {
  @apply mx-auto max-w-xs p-4;
}

.toasted.notification.toasted-primary.success {
  @apply justify-center rounded-lg bg-blue-500 px-6 py-4 text-xs font-bold uppercase tracking-wide text-white shadow-xl;
}
</style>
