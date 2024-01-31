<script setup>
defineProps({
  gradientStyle: {
    type: String,
    default: '',
  },
  gradientStops: {
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
  <div
    class="relative h-[300px] rounded-3xl sm:h-[400px] lg:h-[600px]"
    :style="gradientStyle"
  >
    <div v-if="showControls" class="absolute inset-0">
      <div
        v-for="(stopItem, itemIndex) in gradientStops"
        :key="itemIndex"
        class="absolute h-6 w-6 rounded-full bg-gray-900 text-center text-xs font-medium leading-6 text-white"
        :style="`left: ${stopItem.position.left}%; top: ${stopItem.position.top}%;`"
      >
        {{ itemIndex + 1 }}
      </div>
    </div>
  </div>
</template>
