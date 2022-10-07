<template>
  <div
    class="relative h-[300px] rounded-3xl sm:h-[400px] lg:h-[600px]"
    :style="gradient"
  >
    <div v-if="controls" class="absolute inset-0">
      <div
        v-for="(stop, index) in stops"
        :key="index"
        class="absolute h-6 w-6 rounded-full bg-gray-900 text-center text-xs font-medium leading-6 text-white"
        :style="`left: ${stop.position.left}%; top: ${stop.position.top}%;`"
        v-text="index + 1"
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
    controls: {
      type: Boolean,
      default: false,
    },
    stops: {
      type: Array,
      required: true,
    },
  },
}
</script>
