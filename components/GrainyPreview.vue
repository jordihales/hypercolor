<script setup>
defineProps({
  gradientStyle: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="mx-auto mt-16 max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div
      :class="gradientStyle"
      class="relative h-[300px] overflow-hidden rounded-3xl sm:h-[400px] lg:h-[600px]"
    >
      <div
        class="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-25 brightness-100 contrast-150"
      />
    </div>
  </div>
</template>
