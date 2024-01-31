<script setup>
import { grainyTitle, siteSeo } from '~/assets/data/siteSeo'
import { getDirections } from '~/utils/getDirections'
import { createColorClasses } from '~/utils/createColors'

const currentDirection = ref('')
const currentFrom = ref('')
const currentVia = ref('')
const currentTo = ref('')

const fromColors = computed(() => createColorClasses('from'))
const viaColors = computed(() => createColorClasses('via'))
const toColors = computed(() => createColorClasses('to'))

const gradientStyle = computed(() => {
  return currentDirection.value
    ? `${currentDirection.value} ${currentFrom.value} ${currentVia.value} ${currentTo.value}`
    : `${currentFrom.value} ${currentVia.value} ${currentTo.value}`
})

const directionOptions = computed(() => getDirections())

onMounted(() => handleRandomiser())

function getRandom(itemArray) {
  return itemArray[Math.floor(Math.random() * itemArray.length)]
}

function handleRandomiser() {
  currentDirection.value = getRandom(directionOptions.value).css
  currentFrom.value = getRandom(fromColors.value)
  currentVia.value = getRandom(viaColors.value)
  currentTo.value = getRandom(toColors.value)
}

useSeoMeta({
  ...siteSeo,
  title: grainyTitle,
  ogTitle: grainyTitle,
  twitterTitle: grainyTitle,
})
</script>

<template>
  <div>
    <ContentBanner
      title="Grainy Gradient Generator"
      subtitle="Grainy Gradient Generator for Tailwind CSS"
    >
      Create beautiful grainy style gradients using the full range of Tailwind
      CSS colors, perfect for your desktop or phone wallpaper.
    </ContentBanner>

    <GeneratorControls
      :gradient-style="gradientStyle"
      gradient-type="grainy"
      @gradient:randomise="handleRandomiser"
    >
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <GeneratorSelect
          v-model="currentDirection"
          select-id="Direction"
          :select-options="directionOptions"
          label-key="name"
          value-key="css"
        />

        <GeneratorSelect
          v-model="currentFrom"
          select-id="From"
          :select-options="fromColors"
        />

        <GeneratorSelect
          v-model="currentVia"
          select-id="Via"
          :select-options="viaColors"
        />

        <GeneratorSelect
          v-model="currentTo"
          select-id="To"
          :select-options="toColors"
        />
      </div>
    </GeneratorControls>

    <GrainyPreview :gradient-style="gradientStyle" />
  </div>
</template>
