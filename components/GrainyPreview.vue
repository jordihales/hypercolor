<template>
  <div class="mx-auto mt-16 max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div
      :class="gradient"
      class="relative h-[300px] overflow-hidden rounded-3xl sm:h-[400px] lg:h-[600px]"
    >
      <div
        class="noise absolute inset-0 brightness-100 contrast-150 filter"
        :style="`--color: ${color}`"
      />
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
