<template>
  <section class="relative text-center">
    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24 lg:py-32">
      <div class="flex flex-col max-w-3xl mx-auto">
        <h1
          class="mt-1 text-4xl font-extrabold text-transparent uppercase tracking-tighest sm:text-5xl lg:text-7xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text"
          v-text="title"
        />

        <h2
          class="order-first font-medium tracking-wide text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text"
          v-text="subtitle"
        />
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
