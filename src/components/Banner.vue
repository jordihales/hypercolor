<template>
  <header class="py-24 text-center lg:flex lg:items-center lg:min-h-screen lg:py-0">
    <div class="mx-auto space-y-8">
      <h1
        class="text-5xl font-extrabold leading-snug text-transparent lg:leading-tight lg:text-6xl bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
      >
        Hypercolor
      </h1>

      <div class="max-w-xl mx-auto text-lg leading-relaxed text-gray-900 dark:text-gray-100">
        <p>
          A curated collection of beautiful premade gradients using default colors from the
          <a class="text-cyan-400 hover:text-cyan-300" href="https://tailwindcss.com/">Tailwind CSS</a>
          color palette. Simply copy the code snippets to use within your own apps.
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
