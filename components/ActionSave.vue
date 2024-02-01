<script setup>
import { getBackgroundImage } from '~/utils/getColor'
import { createAndDownloadImage } from '~/utils/downloadImage'

const saveProps = defineProps({
  gradientName: {
    type: String,
    default: 'Hypercolor Gradient',
  },
  gradientStyle: {
    type: String,
    default: '',
  },
  gradientType: {
    type: String,
    default: '',
  },
})

const gradientPreview = ref(null)

const isStandard = computed(() => saveProps.gradientType === 'standard')
const isMesh = computed(() => saveProps.gradientType === 'mesh')
const isGrainy = computed(() => saveProps.gradientType === 'grainy')

function handleTailwind() {
  navigator.clipboard.writeText(saveProps.gradientStyle)
}

function handleCode() {
  navigator.clipboard.writeText(
    isMesh.value
      ? saveProps.gradientStyle
      : getBackgroundImage(gradientPreview.value)
  )
}

function handleImage() {
  createAndDownloadImage(gradientPreview.value, saveProps.gradientName)
}
</script>

<template>
  <div>
    <div class="sr-only fixed inset-0">
      <div
        v-if="isStandard"
        ref="gradientPreview"
        class="h-screen w-screen"
        :class="gradientStyle"
      />

      <div
        v-if="isMesh"
        ref="gradientPreview"
        class="h-screen w-screen"
        :style="gradientStyle"
      />

      <div
        v-if="isGrainy"
        ref="gradientPreview"
        class="relative h-screen w-screen"
        :class="gradientStyle"
      >
        <div
          class="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-25 brightness-100 contrast-150"
        />
      </div>
    </div>

    <div class="flex items-center gap-2">
      <button
        v-if="isStandard"
        class="rounded-xl bg-gray-800/75 p-2.5 transition-colors hover:text-pink-500"
        aria-label="Copy Tailwind CSS class names"
        @click="handleTailwind"
      >
        <IconTailwind class="h-4 w-4" />
      </button>

      <button
        v-if="isStandard || isMesh"
        class="rounded-xl bg-gray-800/75 p-2.5 transition-colors hover:text-pink-500"
        aria-label="Copy CSS"
        @click="handleCode"
      >
        <IconCode class="h-4 w-4" />
      </button>

      <button
        class="rounded-xl bg-gray-800/75 p-2.5 transition-colors hover:text-pink-500"
        aria-label="Download image"
        @click="handleImage"
      >
        <IconImage class="h-4 w-4" />
      </button>
    </div>
  </div>
</template>
