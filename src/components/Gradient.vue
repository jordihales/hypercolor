<template>
  <article class="relative">
    <div
      class="absolute top-3 right-3"
    >
      <button
        v-if="favourite"
        type="button"
        class="p-2 text-gray-600 bg-white rounded-full dark:text-gray-300 dark:bg-gray-900"
        @click="handleRemoveFavourite"
      >
        <HeartIcon class="text-transparent fill-red" />
      </button>

      <button
        v-else
        type="button"
        class="p-2 text-gray-600 bg-white rounded-full dark:text-gray-300 dark:bg-gray-900"
        @click="handleSaveFavourite"
      >
        <HeartIcon />
      </button>
    </div>

    <div
      class="h-64 rounded-3xl"
      :class="customisedColors"
    />

    <div class="px-0.5 -mt-8">
      <div class="p-6 space-y-4 bg-white shadow-sm dark:bg-gray-900 rounded-3xl">
        <p class="text-xl font-medium text-gray-900 dark:text-white">
          {{ title }}
        </p>

        <div class="flex items-stretch space-x-3">
          <code class="h-12 p-2 text-xs text-gray-600 bg-gray-100 rounded-lg dark:text-gray-300 dark:bg-gray-800">
            {{ customisedColors }}
          </code>

          <div :key="copyKey">
            <CopyButton
              v-if="['Tailwind', 'CSS'].includes(type)"
              :type="type"
              :gradient="customisedColors"
              :name="title"
            />
            <SaveButton
              v-if="type === 'JPEG'"
              :gradient="customisedColors"
              :name="title"
            />
          </div>
        </div>

        <div>
          <p class="font-medium text-gray-600 dark:text-gray-300">
            Direction:
          </p>

          <div class="flex mt-2 space-x-1">
            <DirectionOption
              v-for="(value, key) of directions"
              :key="key"
              :direction="value"
              :title="key"
              @action="handleDirection"
            />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { getDirections } from '@/assets/data/directions'

import CopyButton from '@/components/CopyButton'
import SaveButton from '@/components/SaveButton'
import DirectionOption from '@/components/DirectionOption'
import HeartIcon from '@/components/icons/Heart'

export default {
  components: {
    CopyButton,
    SaveButton,
    DirectionOption,
    HeartIcon,
  },
  props: {
    colors: String,
    title: String,
    type: String,
    theme: String,
  },
  data() {
    return {
      direction: '',
      directions: [],
      copyKey: '',
      favourite: null
    }
  },
  computed: {
    customisedColors() {
      if (!this.direction) return this.colors

      const colors = this.colors.split(' ')
      colors[0] = this.direction

      return colors.join(' ')
    },
  },
  mounted() {
    this.directions = getDirections(this.theme)
    this.copyKey = this.setCopyKey()
    this.favourite = localStorage.getItem(this.title) === '❤️'
  },
  methods: {
    handleDirection(direction) {
      this.direction = direction
      this.copyKey = this.setCopyKey()

      this.$gtag.event('Change', {
        event_category: 'Change Direction',
        event_label: direction,
      })
    },
    setCopyKey() {
      return `${this.title} ${Math.random()}`
    },
    handleSaveFavourite() {
      localStorage.setItem(this.title, '❤️')
      this.favourite = true
    },
    handleRemoveFavourite() {
      localStorage.removeItem(this.title)
      this.favourite = false
      this.$emit('removeGradient')
    }
  },
}
</script>
