<template>
  <section>
    <div class="container grid grid-cols-1 gap-8 mt-16 lg:grid-cols-2">
      <div :class="gradient" class="h-[300px] lg:h-full lg:min-h-[400px] rounded-3xl" />

      <div :class="background" class="relative flex items-center p-8 rounded-xl">
        <div class="absolute inset-x-0 top-0 flex items-center justify-end p-4">
          <button
            @click="handleEdit"
            class="text-white bg-gray-800 p-2.5 rounded-xl"
          >
            <icons-pencil class="w-4 h-4" />
          </button>

          <button
            @click="handleBackground"
            class="ml-2 text-white bg-gray-800 p-2.5 rounded-xl"
          >
            <icons-bulb class="w-4 h-4" />
          </button>
        </div>

        <p
          :class="gradient"
          ref="text"
          class="min-w-full p-2 text-2xl font-bold text-center text-transparent rounded bg-clip-text caret-pink-600"
          spellcheck="false"
          contenteditable="true"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec erat in turpis tincidunt mollis.
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
        required: true
      }
    },
    data() {
      return {
        dark: true,
        edit: false
      }
    },
    methods: {
      handleBackground() {
        this.dark = !this.dark
      },
      handleEdit() {
        this.$nextTick(() => this.$refs.text.focus())
      },
    },
    computed: {
      background() {
        return this.dark ? "bg-black" : "bg-white"
      }
    }
  }
</script>