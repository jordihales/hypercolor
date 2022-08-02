<template>
  <div class="h-[300px] sm:h-[400px] lg:h-[600px] rounded-3xl relative" :style="gradient">
    <div v-if="controls" class="absolute inset-0">
      <div
        v-for="(stop, index) in stops"
        :key="index"
        class="absolute w-6 h-6 text-xs font-medium leading-6 text-center text-white bg-gray-900 rounded-full"
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
      required: true
    },
    controls: {
      type: Boolean,
      default: false
    },
    stops: {
      type: Array,
      required: true
    }
  }
}
</script>
