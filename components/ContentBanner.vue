<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="relative text-center">
    <div
      class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      <div class="mx-auto flex max-w-3xl flex-col">
        <h1
          class="mt-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-4xl font-extrabold uppercase tracking-tighter text-transparent sm:text-5xl lg:text-7xl"
        >
          {{ title }}
        </h1>

        <h2
          class="order-first bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text font-medium tracking-wide text-transparent"
        >
          {{ subtitle }}
        </h2>
      </div>

      <p class="mx-auto mt-8 max-w-2xl text-xl font-medium text-white">
        <slot />
      </p>

      <div class="mx-auto mt-8">
        <EthicalAds />
      </div>
    </div>
  </section>
</template>
