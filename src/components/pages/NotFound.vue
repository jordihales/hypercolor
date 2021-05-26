<template>
  <section role="banner">
    <div class="container flex items-center h-screen">
      <div class="max-w-xl mx-auto space-y-8 text-center">
        <h1
          class="text-4xl font-black leading-snug tracking-widest text-transparent uppercase sm:text-6xl bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
        >
          404
        </h1>

        <a
          class="block w-full p-6 space-x-3 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
          href="/"
        >
          Return to home page
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  metaInfo: {
    title: '404 Not Found',
  },
}
</script>
