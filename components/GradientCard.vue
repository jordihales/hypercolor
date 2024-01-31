<script setup>
import { getDirections } from '~/utils/getDirections'

const cardProps = defineProps({
  gradientItem: {
    type: Object,
    default: () => {},
  },
  showControls: {
    type: Boolean,
    default: true,
  },
})

const currentDirection = ref(cardProps.gradientItem.direction)

const gradientName = computed(() => cardProps.gradientItem.name)
const gradientColors = computed(() => cardProps.gradientItem.colors)
const gradientId = computed(() => cardProps.gradientItem.name.replace(' ', ''))

const gradientStyle = computed(() => {
  return currentDirection.value
    ? `${currentDirection.value} ${gradientColors.value}`
    : `${gradientColors.value}`
})

const directionId = computed(() => `Direction${gradientId.value}`)
const directionOptions = computed(() => getDirections())
</script>

<template>
  <article class="relative">
    <div class="h-64 rounded-3xl" :class="gradientStyle" />

    <div class="mx-1.5 -mt-6 rounded-3xl bg-gray-900 p-6 text-white">
      <p class="font-black uppercase tracking-wide">
        {{ gradientName }}
      </p>

      <div class="mt-4 flex items-center gap-4">
        <GeneratorSelect
          v-if="showControls"
          v-model="currentDirection"
          :select-id="directionId"
          :select-options="directionOptions"
          value-key="css"
          label-key="name"
        />

        <ActionSave
          :gradient-style="gradientStyle"
          :gradient-name="gradientName"
          gradient-type="standard"
        />
      </div>
    </div>
  </article>
</template>
