<template>
  <div>
    <shared-banner title="World Flags" subtitle="Flag Gradients with Tailwind CSS">
      A collection of country flags created with Tailwind CSS.
    </shared-banner>

    <gradients-grid :gradients="gradients" :directions="false" :overlap="false" />
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
