<template>
  <header class="py-24 text-center lg:flex lg:items-center lg:min-h-screen lg:py-0">
    <div class="w-full space-y-8">
      <h1
        class="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
      >
        Hypercolor
      </h1>

      <div class="max-w-xl mx-auto font-medium text-app-text">
        <p>
          A curated collection of beautiful premade gradients using default colors from the
          <a class="text-green-600" href="https://tailwindcss.com/">Tailwind</a>
          palette as well as a selection of custom color gradients.
          <br class="hidden md:block" />
          Simply copy the code snippets to use within your own apps.
        </p>
      </div>

      <ScrollButton />
    </div>
  </header>
</template>

<script>
import ScrollButton from '@/components/ScrollButton'

export default {
  components: {
    ScrollButton,
  },
}
</script>
