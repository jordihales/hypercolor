<template>
  <div>
    <content-banner
      title="Mesh Gradient Generator"
      subtitle="Mesh Gradient Generator for Tailwind CSS"
    >
      Create beautiful mesh style gradients using the full range of Tailwind CSS
      colors, perfect for your desktop or phone wallpaper.
    </content-banner>

    <div
      class="grid max-w-screen-xl grid-cols-1 gap-8 px-4 mx-auto sm:px-6 lg:grid-cols-4 lg:px-8"
    >
      <div class="lg:col-span-3">
        <div class="flex items-center text-white">
          <action-save
            :gradient="gradient()"
            type="mesh"
            name="Hypercolor Gradient"
          />

          <button
            class="ml-2 rounded-xl bg-gray-800/75 p-2.5 transition-colors hover:text-pink-500"
            @click="handleRandomiser"
          >
            <span class="sr-only">Random Gradient</span>
            <icon-refresh class="w-4 h-4" />
          </button>
        </div>

        <div class="mt-4 lg:sticky lg:top-20">
          <mesh-preview
            :gradient="gradient()"
            :controls="showControls"
            :stops="stops"
          />
        </div>
      </div>

      <div class="space-y-8 text-white lg:mt-[3.25rem]">
        <div class="flex gap-4">
          <button
            class="w-full py-3 text-sm font-medium transition-colors rounded-xl bg-gray-800/75 hover:text-pink-500"
            @click="showControls = !showControls"
          >
            <span v-if="showControls">Hide</span>
            <span v-else>Show</span>
            Stops
          </button>

          <button
            class="w-full py-3 text-sm font-medium transition-colors rounded-xl bg-gray-800/75 hover:text-pink-500"
            @click="addStop"
          >
            Add Stop
          </button>
        </div>

        <div>
          <generator-select
            id="BackgroundColor"
            v-model="color"
            :label="true"
            :items="bgColors"
          />
        </div>

        <div>
          <p class="text-xs font-medium">Color Stops</p>

          <div class="mt-2 space-y-1">
            <details
              v-for="(stop, index) in stops"
              :key="index"
              class="rounded-xl border border-gray-800/75 p-2.5 focus-within:ring focus-within:ring-pink-500"
            >
              <summary
                class="flex items-center justify-between text-sm font-medium transition-colors cursor-pointer hover:text-pink-500 focus:ring-0"
              >
                <p class="text-xs font-medium">
                  {{ index + 1 }}
                </p>

                <p class="font-mono text-xs font-medium">
                  {{ colors[index] }} / {{ stop.position.left }}% /
                  {{ stop.position.top }}% / {{ stop.transparent }}%
                </p>
              </summary>

              <div class="mt-4 space-y-4">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      :for="`Left${index}`"
                      class="mb-1 text-xs font-medium"
                    >
                      Left -

                      <span class="font-mono text-xs font-medium">
                        {{ stop.position.left }}%
                      </span>
                    </label>

                    <input
                      :id="`Left${index}`"
                      v-model="stop.position.left"
                      type="range"
                    />
                  </div>

                  <div>
                    <label
                      :for="`Top${index}`"
                      class="mb-1 text-xs font-medium"
                    >
                      Top -

                      <span class="font-mono text-xs font-medium">
                        {{ stop.position.top }}%
                      </span>
                    </label>

                    <input
                      :id="`Top${index}`"
                      v-model="stop.position.top"
                      type="range"
                    />
                  </div>

                  <div>
                    <label
                      :for="`Transparent${index}`"
                      class="mb-1 text-xs font-medium"
                    >
                      Transparent -

                      <span class="font-mono text-xs font-medium">
                        {{ stop.transparent }}%
                      </span>
                    </label>

                    <input
                      :id="`Transparent${index}`"
                      v-model="stop.transparent"
                      type="range"
                    />
                  </div>
                </div>

                <generator-select
                  :id="`Background${index}`"
                  v-model="colors[index]"
                  :items="bgColors"
                />

                <button
                  class="w-full py-3 text-sm font-medium transition-colors rounded-xl bg-gray-800/75 hover:text-pink-500"
                  @click="removeStop(index)"
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
      <span ref="bgColor" :class="color" />

      <span
        v-for="(_, index) in colors"
        :key="index"
        :ref="`color${index}`"
        :class="colors[index]"
      />
    </div>
  </div>
</template>

<script>
import { getBackgroundColor } from '@/utils/getColor'
import { createColorClasses } from '@/utils/createColors'

export default {
  name: 'MeshPage',
  asyncData() {
    return {
      bgColors: createColorClasses('bg'),
    }
  },
  data() {
    return {
      color: '',
      colors: [],
      stops: [],
      rgbColor: '',
      rgbColors: [],
      showControls: false,
    }
  },
  head() {
    return {
      title: 'Mesh Gradients for Tailwind CSS',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Create beautiful mesh style gradients using the full range of Tailwind CSS colors, perfect for your desktop or phone wallpaper.',
        },
      ],
    }
  },
  watch: {
    color: {
      handler() {
        this.update()
      },
    },
    colors: {
      handler() {
        this.update()
      },
      deep: true,
    },
  },
  mounted() {
    this.handleRandomiser()
  },
  methods: {
    getRandomColor(array) {
      return array[Math.floor(Math.random() * array.length)]
    },
    getRandomNumber() {
      return Math.floor(Math.random() * 100) + 1
    },
    handleRandomiser() {
      this.color = this.getRandomColor(this.bgColors)

      this.colors = []
      this.stops = []

      // eslint-disable-next-line array-callback-return
      Array.from(new Array(6), () => {
        this.colors.push(this.getRandomColor(this.bgColors))

        const newStop = {
          position: {
            left: this.getRandomNumber(),
            top: this.getRandomNumber(),
          },
          transparent: this.getRandomNumber(),
        }

        this.stops.push(newStop)
      })

      this.$nextTick(() => this.generate())
    },
    gradient() {
      return `
        background-color: ${this.rgbColor};
        background-image: ${this.stops
          .map(
            (stop, index) =>
              `radial-gradient(at ${stop.position.left}% ${stop.position.top}%, ${this.rgbColors[index]} 0, transparent ${stop.transparent}%)`
          )
          .join(', ')};
      `
    },
    generate() {
      this.rgbColor = getBackgroundColor(this.$refs.bgColor)

      this.rgbColors = this.colors.map((_, index) =>
        getBackgroundColor(this.$refs[`color${index}`][0])
      )
    },
    update() {
      this.$nextTick(() => this.generate())
    },
    removeStop(index) {
      this.stops.splice(index, 1)
    },
    addStop() {
      const newStop = {
        position: {
          left: this.getRandomNumber(),
          top: this.getRandomNumber(),
        },
        transparent: this.getRandomNumber(),
      }
      const color =
        this.bgColors[Math.floor(Math.random() * this.bgColors.length)]

      this.stops.push(newStop)

      this.colors.push(color)
    },
  },
}
</script>
