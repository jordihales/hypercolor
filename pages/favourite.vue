<template>
  <div>
    <content-banner
      title="Favourite Gradients"
      subtitle="Your Favourite Hypercolor Gradients"
    >
      Easily view all your favourite Hypercolor gradients for quick access to
      their Tailwind CSS classes, CSS code and image download.
    </content-banner>

    <gradient-grid :gradients="gradients" @update="setGradients" />
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */

export default {
  name: 'FavouritePage',
  data() {
    return {
      gradients: []
    }
  },
  mounted() {
    this.setGradients()
  },
  methods: {
    setGradients() {
      this.gradients = JSON.parse(localStorage.getItem('gradients'))
    }
  }
}
</script>
