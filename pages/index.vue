<template>
  <div>
    <shared-banner title="Hypercolor" subtitle="Gradients for Tailwind CSS">
      A curated collection of beautiful Tailwind CSS gradients using the full
      range of Tailwind CSS colors. Easily copy and paste the class names, CSS
      or even save the gradients as an image.
    </shared-banner>

    <gradients-grid :gradients="gradients" />
  </div>
</template>

<script>
import { gradients } from '~/assets/data/gradients'

export default {
  computed: {
    gradients() {
      return gradients
    }
  }
}
</script>
