<template>
  <header class="py-24 text-center lg:flex lg:items-center lg:min-h-screen lg:py-0">
    <div class="mx-auto space-y-8">
      <h1
        class="text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
      >
        Hypercolor
      </h1>

      <div class="max-w-xl mx-auto font-medium text-gray-900 dark:text-gray-100">
        <p>
          A curated collection of beautiful premade gradients using default colors from the
          <a class="text-teal-400 hover:text-teal-300" href="https://tailwindcss.com/">Tailwind</a>
          palette as well as a selection of custom color gradients.
        </p>
        <p class="mt-1">
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
