<template>
  <div>
    <shared-banner
      title="Favourite Gradients"
      subtitle="Your Favourite Hypercolor Gradients"
    >
      Easily view all your favourite Hypercolor gradients for quick access to
      their Tailwind CSS classes, CSS code and image download.
    </shared-banner>

    <gradients-grid :gradients="gradients" @update="setGradients" />
  </div>
</template>

<script>
export default {
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
