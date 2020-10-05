<template>
  <div id="app" class="bg-gray-100">
    <div class="max-w-screen-xl px-6 mx-auto font-sans lg:px-0">
      <Banner />
      <Gradients />
    </div>
    <Footer></Footer>
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
}
</script>
