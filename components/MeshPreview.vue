<script setup>
const previewProps = defineProps({
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

function handleStartDrag(stopIndex) {
  const stopEl = document.getElementById(`Stop${stopIndex}`)
  const stopItem = previewProps.gradientStops[stopIndex]

  const handleMouseMove = (dragEvent) => {
    const { clientX, clientY } = dragEvent

    const { left: elLeft, top: elTop } =
      stopEl.parentElement.getBoundingClientRect()

    const newPositionLeft = (
      ((clientX - elLeft) / stopEl.parentElement.offsetWidth) *
      100
    ).toFixed(2)

    const newPositionTop = (
      ((clientY - elTop) / stopEl.parentElement.offsetHeight) *
      100
    ).toFixed(2)

    stopItem.positionLeft = newPositionLeft
    stopItem.positionTop = newPositionTop
  }

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }

  document.addEventListener('mousemove', handleMouseMove)

  document.addEventListener('mouseup', handleMouseUp)
}
</script>

<template>
  <div
    class="relative h-[300px] rounded-3xl sm:h-[400px] lg:h-[600px]"
    :style="gradientStyle"
  >
    <div v-if="showControls" class="absolute inset-0">
      <div
        v-for="(stopItem, itemIndex) in gradientStops"
        :id="`Stop${itemIndex}`"
        :key="itemIndex"
        class="absolute h-6 w-6 rounded-full bg-gray-900 text-center text-xs font-medium leading-6 text-white cursor-move -mt-3 -ml-3 select-none"
        :style="`left: ${stopItem.positionLeft}%; top: ${stopItem.positionTop}%;`"
        @mousedown="handleStartDrag(itemIndex)"
      >
        {{ itemIndex + 1 }}
      </div>
    </div>
  </div>
</template>
