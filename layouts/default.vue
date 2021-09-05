<template>
  <div class="bg-gray-900">
    <shared-header />

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
</style>
