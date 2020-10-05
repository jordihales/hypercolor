<template>
  <div id="app" class="max-w-screen-xl px-6 mx-auto font-sans lg:px-0">
    <Banner></Banner>
    <Gradients></Gradients>
  </div>
</template>

<script>
import Banner from './components/Banner'
import Gradients from './components/Gradients'
export default {
  name: 'app',
  components: {
    Banner,
    Gradients,
  },
}
</script>

<style lang="scss">
@import 'assets/styles/main.scss';
</style>
