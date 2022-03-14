<template>
  <div class="bg-gray-900">
    <shared-announcement />
    <shared-header />
    <shared-popup />

    <main>
      <Nuxt />
    </main>

    <shared-footer />
  </div>
</template>

<style lang="postcss">
*:focus {
  @apply outline-none ring-2 ring-pink-500 ring-offset-2 ring-offset-gray-900 border-transparent;
}

.toasted-container.notification-container.bottom-center {
  @apply max-w-xs mx-auto p-4;
}

.toasted.notification.toasted-primary.success {
  @apply bg-blue-500 text-white font-bold tracking-wide text-xs uppercase rounded-lg px-6 py-4 shadow-xl justify-center;
}
</style>
