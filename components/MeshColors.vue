<script setup>
defineProps({
  tlColor: {
    type: String,
    required: true,
  },
  trColor: {
    type: String,
    required: true,
  },
  blColor: {
    type: String,
    required: true,
  },
  brColor: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div>
    <span :class="tlColor" />
    <span :class="trColor" />
    <span :class="blColor" />
    <span :class="brColor" />
  </div>
</template>
