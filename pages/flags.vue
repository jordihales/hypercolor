<template>
  <div>
    <content-banner title="World Flags" subtitle="Flag Gradients with Tailwind CSS">
      A collection of country flags created with Tailwind CSS.
    </content-banner>

    <gradient-grid :gradients="gradients" :directions="false" :overlap="false" />
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */

import { gradients } from '~/assets/data/flags'

export default {
  name: 'FlagsPage',
  computed: {
    gradients() {
      return gradients
    }
  }
}
</script>
