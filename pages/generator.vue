<script setup>
import { generatorTitle, siteSeo } from '~/assets/data/siteSeo'
import { createColorClasses } from '~/utils/createColors'
import { getDirections } from '~/utils/getDirections'

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
  title: generatorTitle,
  ogTitle: generatorTitle,
  twitterTitle: generatorTitle,
})
</script>

<template>
  <div>
    <ContentBanner
      title="Gradient Generator"
      subtitle="Gradient Generator for Tailwind CSS"
    >
      Create your own Tailwind CSS gradient with the full Tailwind CSS color
      library and the extended radial and conic gradient options provided
      through Hypercolor.
    </ContentBanner>

    <GeneratorControls
      :gradient-style="gradientStyle"
      gradient-type="standard"
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

    <GeneratorPreview :gradient-style="gradientStyle" />
  </div>
</template>
