<template>
  <div class="bg-gray-100 dark:bg-gray-900">
    <main class="max-w-screen-xl px-6 mx-auto">
      <Banner />
      <Gradients />
    </main>
    <Footer />
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import Gradients from '@/components/Gradients'
import Footer from '@/components/Footer'

export default {
  components: {
    Banner,
    Gradients,
    Footer,
  },
  methods: {
    track() {
      this.$gtag.pageview({
        page_path: '/',
      })
    },
  },
}
</script>
