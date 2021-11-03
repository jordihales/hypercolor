<template>
  <div>
    <div v-for="gradient in gradients" :key="gradient.name">
      <grainy-card :gradient="gradient" />
    </div>
  </div>
</template>

<script>
import { gradients } from '~/assets/data/grainy'

export default {
  asyncData() {
    return {
      gradients
    }
  }
}
</script>
