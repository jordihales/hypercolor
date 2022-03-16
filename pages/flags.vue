<template>
  <div>
    <shared-banner title="Hypercolor" subtitle="Gradients for Tailwind CSS">
      A curated collection of beautiful Tailwind CSS gradients using the full
      range of Tailwind CSS colors. Easily copy and paste the class names, CSS
      or even save the gradients as an image.
    </shared-banner>

    <gradients-grid :gradients="gradients" :directions="false" />
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */

import { gradients } from '~/assets/data/flags'

export default {
  computed: {
    gradients() {
      return gradients
    }
  }
}
</script>
