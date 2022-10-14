<template>
  <div>
    <content-banner
      title="World Flags"
      subtitle="Flag Gradients with Tailwind CSS"
    >
      A collection of country flags created with Tailwind CSS.
    </content-banner>

    <gradient-grid
      :gradients="gradients"
      :directions="false"
      :overlap="false"
    />
  </div>
</template>

<script>
import { gradientsFlag } from '@/assets/data/gradientsFlag'

export default {
  name: 'FlagsPage',
  computed: {
    gradients () {
      return gradientsFlag
    }
  }
}
</script>
