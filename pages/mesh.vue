<script setup>
import { meshTitle, siteSeo } from '~/assets/data/siteSeo'
import { getBackgroundColor } from '~/utils/getColor'
import { createColorClasses } from '~/utils/createColors'

const bgColors = computed(() => createColorClasses('bg'))

const bgColor = ref(null)

const currentColor = ref('')
const currentColors = ref([])
const currentStops = ref([])
const currentRgbColor = ref('')
const currentRgbColors = ref([])
const showControls = ref(false)

watch(
  () => currentColor.value,
  () => nextTick(() => handleGenerate())
)

watch(
  () => currentColors.value,
  () =>
    nextTick(() => {
      handleGenerate()

      currentStops.value = currentStops.value.map((stopItem, itemIndex) => {
        return {
          ...stopItem,
          colorName: currentColors.value[itemIndex].replace('bg-', ''),
        }
      })
    }),
  { deep: true }
)

onMounted(() => handleRandomiser())

function getRandomColor(itemArray) {
  return itemArray[Math.floor(Math.random() * itemArray.length)]
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1
}

function handleRandomiser() {
  currentColor.value = getRandomColor(bgColors.value)

  currentColors.value = []
  currentStops.value = []

  Array.from(Array.from({ length: 6 }), () => addStop())

  nextTick(() => handleGenerate())
}

function handleGenerate() {
  currentRgbColor.value = getBackgroundColor(bgColor.value)

  currentRgbColors.value = currentColors.value.map((_, colorIndex) => {
    return getBackgroundColor(document.getElementById(`Color${colorIndex}`))
  })
}

function removeStop(stopIndex) {
  currentStops.value.splice(stopIndex, 1)
}

function addStop() {
  const newColor = getRandomColor(bgColors.value)

  const newStop = {
    colorName: newColor.replace('bg-', ''),
    colorSize: getRandomNumber(),
    positionLeft: getRandomNumber(),
    positionTop: getRandomNumber(),
  }

  currentStops.value.push(newStop)

  currentColors.value.push(newColor)
}

function getGradient() {
  return `
    background-color: ${currentRgbColor.value};
    background-image: ${currentStops.value
      .map(
        (stopItem, itemIndex) =>
          `radial-gradient(at ${stopItem.positionLeft}% ${stopItem.positionTop}%, ${currentRgbColors.value[itemIndex]} 0, transparent ${stopItem.colorSize}%)`
      )
      .join(', ')};
  `
}

useSeoMeta({
  ...siteSeo,
  title: meshTitle,
  ogTitle: meshTitle,
  twitterTitle: meshTitle,
})
</script>

<template>
  <div>
    <ContentBanner
      title="Mesh Gradient Generator"
      subtitle="Mesh Gradient Generator for Tailwind CSS"
    >
      Create beautiful mesh style gradients using the full range of Tailwind CSS
      colors, perfect for your desktop or phone wallpaper.
    </ContentBanner>

    <div
      class="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8"
    >
      <div class="lg:col-span-3">
        <div class="flex items-center text-white gap-2">
          <ActionSave :gradient-style="getGradient()" gradient-type="mesh" />

          <button
            class="rounded-xl bg-gray-800/75 p-2.5 transition-colors hover:text-pink-500"
            @click="handleRandomiser"
          >
            <span class="sr-only"> Generate random gradient </span>

            <IconRefresh class="h-4 w-4" />
          </button>

          <div
            class="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg p-0.5 ml-auto"
          >
            <div class="rounded-md bg-gray-900 p-2.5">
              <p class="text-sm font-medium text-white">
                You can now drag the stops to change the position of the colors!
                🎉
              </p>
            </div>
          </div>
        </div>

        <div class="mt-4 lg:sticky lg:top-20">
          <MeshPreview
            :show-controls="showControls"
            :gradient-style="getGradient()"
            :gradient-stops="currentStops"
          />
        </div>
      </div>

      <div class="space-y-8 text-white lg:mt-[3.25rem]">
        <div class="flex gap-4">
          <button
            class="w-full rounded-xl bg-gray-800/75 py-3 text-sm font-medium transition-colors hover:text-pink-500"
            @click="showControls = !showControls"
          >
            <span v-if="showControls">Hide</span>
            <span v-else>Show</span>
            Stops
          </button>

          <button
            class="w-full rounded-xl bg-gray-800/75 py-3 text-sm font-medium transition-colors hover:text-pink-500"
            @click="addStop"
          >
            Add Stop
          </button>
        </div>

        <div>
          <GeneratorSelect
            v-model="currentColor"
            select-id="BackgroundColor"
            :select-options="bgColors"
          />
        </div>

        <div>
          <p class="text-xs font-medium"> Color Stops </p>

          <div class="mt-2 space-y-1">
            <details
              v-for="(stopItem, itemIndex) in currentStops"
              :key="itemIndex"
              class="rounded-xl border border-gray-800/75 p-2.5 focus-within:ring focus-within:ring-pink-500"
            >
              <summary
                class="flex cursor-pointer items-center justify-between text-sm font-medium transition-colors hover:text-pink-500 focus:ring-0"
              >
                <p class="text-xs font-medium">
                  {{ itemIndex + 1 }}
                </p>

                <p
                  class="font-mono text-xs font-medium max-w-[30ch] overflow-hidden truncate"
                >
                  {{ stopItem.colorName }} / {{ stopItem.positionLeft }}% /
                  {{ stopItem.positionTop }}% / {{ stopItem.colorSize }}%
                </p>
              </summary>

              <div class="mt-4 space-y-4">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      :for="`Left${itemIndex}`"
                      class="mb-1 text-xs font-medium"
                    >
                      Left -

                      <span class="font-mono text-xs font-medium">
                        {{ stopItem.positionLeft }}%
                      </span>
                    </label>

                    <input
                      :id="`Left${itemIndex}`"
                      v-model="stopItem.positionLeft"
                      type="range"
                    />
                  </div>

                  <div>
                    <label
                      :for="`Top${itemIndex}`"
                      class="mb-1 text-xs font-medium"
                    >
                      Top -

                      <span class="font-mono text-xs font-medium">
                        {{ stopItem.positionTop }}%
                      </span>
                    </label>

                    <input
                      :id="`Top${itemIndex}`"
                      v-model="stopItem.positionTop"
                      type="range"
                    />
                  </div>

                  <div>
                    <label
                      :for="`Transparent${itemIndex}`"
                      class="mb-1 text-xs font-medium"
                    >
                      Size -

                      <span class="font-mono text-xs font-medium">
                        {{ stopItem.colorSize }}%
                      </span>
                    </label>

                    <input
                      :id="`Transparent${itemIndex}`"
                      v-model="stopItem.colorSize"
                      type="range"
                    />
                  </div>
                </div>

                <GeneratorSelect
                  v-model="currentColors[itemIndex]"
                  :select-id="`Background${itemIndex}`"
                  :select-options="bgColors"
                />

                <button
                  class="w-full rounded-xl bg-gray-800/75 py-3 text-sm font-medium transition-colors hover:text-pink-500"
                  @click="removeStop(itemIndex)"
                >
                  Remove Stop
                </button>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>

    <div class="sr-only">
      <span ref="bgColor" :class="currentColor" />

      <span
        v-for="(_, colorIndex) in currentColors"
        :id="`Color${colorIndex}`"
        :key="colorIndex"
        :class="currentColors[colorIndex]"
      />
    </div>
  </div>
</template>
