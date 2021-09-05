<template>
  <section class="relative text-center">
    <div class="container py-16 sm:py-24 lg:py-32">
      <div class="flex flex-col text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text">
        <h1 class="text-4xl font-extrabold uppercase tracking-tighest sm:text-5xl lg:text-7xl" v-text="title" />

        <h2 class="order-first font-medium tracking-wide" v-text="subtitle" />
      </div>

      <p class="max-w-2xl mx-auto mt-8 text-xl font-medium text-white">
        <slot />
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  }
}
</script>
