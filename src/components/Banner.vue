<template>
  <div class="flex flex-col items-center justify-center py-24 text-center lg:min-h-screen lg:py-0">
    <h1
      class="mb-6 text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
    >
      Hypercolor
    </h1>
    <div class="max-w-xl mx-auto mb-12 font-medium tracking-tight text-app-text">
      <p>
        A curated collection of beautiful premade gradients using default colors from the
        <a class="text-teal-600" href="https://tailwindcss.com/">Tailwind</a>
        palette as well as a selection of custom color gradients.
        <br class="hidden md:block" />
        Simply copy the code snippets to use within your own apps.
      </p>
    </div>
    <ScrollButton />
  </div>
</template>

<script>
import ScrollButton from '@/components/ScrollButton'

export default {
  components: {
    ScrollButton,
  },
}
</script>
