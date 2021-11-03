<template>
  <div
    ref="parent"
    class="relative w-screen h-screen"
    :class="gradient.colors.left"
  >
    <div
      class="absolute inset-0 filter brightness-100 contrast-150 noise"
      :style="`--color: ${color}`"
    />
    <div
      class="absolute inset-0 mix-blend-multiply"
      :class="gradient.colors.right"
    />
  </div>
</template>

<script>
export default {
  props: {
    gradient: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      color: ''
    }
  },
  mounted() {
    this.color = getComputedStyle(this.$refs.parent).getPropertyValue(
      'background-color'
    )
  }
}
</script>

<style lang="postcss" scoped>
.noise {
  background: linear-gradient(to right, var(--color), transparent),
    url(https://grainy-gradients.vercel.app/noise.svg);
}
</style>
