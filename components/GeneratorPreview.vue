<template>
  <section>
    <div
      class="mx-auto mt-16 grid max-w-screen-xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"
    >
      <div
        :class="gradient"
        class="h-[300px] rounded-3xl lg:h-full lg:min-h-[400px]"
      />

      <div
        :class="background"
        class="relative flex items-center rounded-xl p-8"
      >
        <div class="absolute inset-x-0 top-0 flex items-center justify-end p-4">
          <button
            class="rounded-xl bg-gray-800 p-2.5 text-white"
            @click="handleEdit"
          >
            <icon-pencil class="h-4 w-4" />
          </button>

          <button
            class="ml-2 rounded-xl bg-gray-800 p-2.5 text-white"
            @click="handleBackground"
          >
            <icon-bulb class="h-4 w-4" />
          </button>
        </div>

        <p
          ref="text"
          :class="gradient"
          class="min-w-full rounded bg-clip-text p-2 text-center text-2xl font-bold text-transparent caret-pink-600"
          spellcheck="false"
          contenteditable="true"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec erat
          in turpis tincidunt mollis.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    gradient: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dark: true,
      edit: false,
    }
  },
  computed: {
    background() {
      return this.dark ? 'bg-black' : 'bg-white'
    },
  },
  methods: {
    handleBackground() {
      this.dark = !this.dark
    },
    handleEdit() {
      this.$nextTick(() => this.$refs.text.focus())
    },
  },
}
</script>
