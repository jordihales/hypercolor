<template>
  <div>
    <section role="banner">
      <div class="container pt-24 pb-12 lg:pt-36">
        <div class="max-w-2xl mx-auto text-center">
          <h1
            class="text-4xl font-black leading-snug tracking-widest text-transparent uppercase sm:text-6xl bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
          >
            Create Your Own Gradient
          </h1>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="max-w-3xl mx-auto mt-8 space-y-8">
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div>
            <label
              for="direction"
              class="text-xs font-medium tracking-widest text-gray-600 uppercase dark:text-gray-300"
            >
              Direction
            </label>

            <select
              id="direction"
              v-model="direction"
              class="w-full p-3 mt-1 space-x-3 text-sm text-gray-600 bg-transparent border border-gray-200 dark:border-gray-700 rounded-xl dark:text-gray-300"
              @change="updateControlsKey"
            >
              <option
                v-for="twDirection of directions"
                :key="twDirection"
                :value="twDirection"
              >
                {{ twDirection }}
              </option>
            </select>
          </div>

          <div>
            <label
              for="from"
              class="text-xs font-medium tracking-widest text-gray-600 uppercase dark:text-gray-300"
            >
              From
            </label>

            <select
              id="from"
              v-model="from"
              class="w-full p-3 mt-1 space-x-3 text-sm text-gray-600 bg-transparent border border-gray-200 dark:border-gray-700 rounded-xl dark:text-gray-300"
              @change="updateControlsKey"
            >
              <option
                v-for="color of fromColors"
                :key="color"
                :value="color"
              >
                {{ color }}
              </option>
            </select>
          </div>

          <div>
            <label
              for="via"
              class="text-xs font-medium tracking-widest text-gray-600 uppercase dark:text-gray-300"
            >
              Via
            </label>

            <select
              id="via"
              v-model="via"
              class="w-full p-3 mt-1 space-x-3 text-sm text-gray-600 bg-transparent border border-gray-200 dark:border-gray-700 rounded-xl dark:text-gray-300"
              @change="updateControlsKey"
            >
              <option
                v-for="color of viaColors"
                :key="color"
                :value="color"
              >
                {{ color }}
              </option>
            </select>
          </div>

          <div>
            <label
              for="to"
              class="text-xs font-medium tracking-widest text-gray-600 uppercase dark:text-gray-300"
            >
              To
            </label>

            <select
              id="to"
              v-model="to"
              class="w-full p-3 mt-1 space-x-3 text-sm text-gray-600 bg-transparent border border-gray-200 dark:border-gray-700 rounded-xl dark:text-gray-300"
              @change="updateControlsKey"
            >
              <option
                v-for="color of toColors"
                :key="color"
                :value="color"
              >
                {{ color }}
              </option>
            </select>
          </div>
        </div>

        <div
          class="w-full rounded-lg h-96"
          :class="customisedColors"
        />

        <div class="flex items-center justify-between">
          <button
            class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 text-gray-600 bg-gray-100 rounded-lg dark:text-gray-300 dark:bg-gray-800"
            aria-label="Save gradient as image"
            @click="generateGradient"
          >
            <RefreshIcon />
          </button>

          <div
            :key="controlsKey"
            class="flex space-x-3"
          >
            <CopyButton
              type="Tailwind"
              :gradient="customisedColors"
              name="Created Gradient"
              :show-title="true"
            />

            <CopyButton
              type="CSS"
              :gradient="customisedColors"
              name="Created Gradient"
              :show-title="true"
            />

            <SaveButton
              v-if="valid"
              :gradient="customisedColors"
              name="Created Gradient"
            />

            <span
              v-else
              class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 text-gray-600 bg-gray-100 rounded-lg opacity-50 cursor-not-allowed dark:text-gray-300 dark:bg-gray-800"
              @mouseover="highlightCta"
              @mouseleave="unhighlightCta"
            >
              <ImageIcon />
            </span>
          </div>
        </div>

        <p
          v-if="!valid"
          ref="cta"
          class="max-w-xl mx-auto text-sm font-medium text-center text-white"
        >
          Want to download your gradient and all others in the Hypercolor library as an image?
          <a
            href="https://gumroad.com/a/1027282035/TjkKF"
            rel="noreferrer"
            target="_blank"
            class="block mt-1 text-pink-500 underline"
          >
            Upgrade to Hypercolor Pro for $3
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { validLicense } from '@/utils/auth'
import { fromColors, viaColors, toColors } from '@/assets/data/colors'
import { allDirections } from '@/assets/data/directions'

import CopyButton from '@/components/CopyButton'
import SaveButton from '@/components/SaveButton'
import RefreshIcon from '@/components/icons/Refresh'
import ImageIcon from '@/components/icons/Image'

export default {
  components: {
    CopyButton,
    SaveButton,
    RefreshIcon,
    ImageIcon,
  },
  data() {
    return {
      fromColors,
      viaColors,
      toColors,
      directions: allDirections(),
      direction: '',
      from: '',
      via: '',
      to: '',
      valid: false,
      controlsKey: 0
    }
  },
  computed: {
    customisedColors() {
      return this.via !== 'none'
        ? `${this.direction} ${this.from} ${this.via} ${this.to}`
        : `${this.direction} ${this.from} ${this.to}`
    },
  },
  mounted() {
    this.generateGradient()
    this.valid = validLicense()
  },
  methods: {
    generateGradient() {
      this.direction = this.directions[Math.floor(Math.random() * this.directions.length)]
      this.from = this.fromColors[Math.floor(Math.random() * this.fromColors.length)]
      this.via = this.viaColors[Math.floor(Math.random() * this.viaColors.length)]
      this.to = this.toColors[Math.floor(Math.random() * this.toColors.length)]

      this.updateControlsKey()
    },
    highlightCta() {
      this.$refs.cta.classList.add('active')
    },
    unhighlightCta() {
      this.$refs.cta.classList.remove('active')
    },
    updateControlsKey() {
      this.controlsKey += 1
    }
  },
}
</script>

<style scoped>
.active {
  @apply ring ring-pink-500;
}
</style>