<template>
  <div class="max-w-screen-xl px-4 mx-auto mt-16 sm:px-6 lg:px-8">
    <div :class="gradient" class="h-[300px] sm:h-[400px] lg:h-[600px] rounded-3xl overflow-hidden relative">
      <div class="absolute inset-0 filter brightness-100 contrast-150 noise" :style="`--color: ${color}`" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gradient: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
/* https://css-tricks.com/grainy-gradients/ */

.noise {
  background: linear-gradient(to right, var(--color), transparent),
    url(https://grainy-gradients.vercel.app/noise.svg);
}
</style>
