<template>
  <div class="max-w-screen-xl px-4 mx-auto mt-16 sm:px-6 lg:px-8">
    <div
      :class="gradient"
      class="relative h-[300px] overflow-hidden rounded-3xl sm:h-[400px] lg:h-[600px]"
    >
      <div
        class="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-25 brightness-100 contrast-150"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gradient: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
}
</script>
