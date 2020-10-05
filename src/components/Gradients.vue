<template>
  <div class="grid gap-6 py-12 grid-cols lg:grid-cols-3">
    <Gradient
      v-for="gradient in gradients"
      :key="gradient.title"
      :title="gradient.title"
      :colors="gradient.colors"
    />
  </div>
</template>

<script>
import Gradient from '@/components/Gradient'
import { gradients } from '@/assets/data/gradients'

export default {
  data() {
    return {
      gradients,
    }
  },
  components: {
    Gradient,
  },
}
</script>

<style></style>
