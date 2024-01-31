<script setup>
defineProps({
  gradientItems: {
    type: Array,
    default: () => [],
  },
  showControls: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <section>
    <div
      class="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8"
    >
      <GradientCard
        v-for="(gradientItem, itemIndex) of gradientItems"
        :key="itemIndex"
        :gradient-item="gradientItem"
        :show-controls="showControls"
      />
    </div>
  </section>
</template>
