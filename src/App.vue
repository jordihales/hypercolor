<template>
  <div id="app" class="bg-gray-100">
    <div class="max-w-screen-xl px-6 mx-auto">
      <Banner />
      <Gradients />
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import Gradients from '@/components/Gradients'

export default {
  components: {
    Banner,
    Gradients,
  },
}
</script>

