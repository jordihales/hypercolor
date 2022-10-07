<template>
  <div>
    <span ref="topLeft" :class="tlColor" />
    <span ref="topRight" :class="trColor" />
    <span ref="bottomLeft" :class="blColor" />
    <span ref="bottomRight" :class="brColor" />
  </div>
</template>

<script>
export default {
  props: {
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
  },
}
</script>
