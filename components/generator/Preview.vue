<template>
  <section>
    <div class="container grid grid-cols-1 gap-8 mt-16 lg:grid-cols-2">
      <div
        class="h-[300px] lg:h-full lg:min-h-[400px] rounded-3xl"
        :class="gradient"
      />

      <div class="grid gap-y-8">
        <div
          class="flex items-center p-8 text-center rounded-xl"
          v-for="example of examples"
          :key="example.id"
          :class="example"
        >
          <p
            class="text-lg font-black text-transparent sm:text-2xl bg-clip-text"
            :class="gradient"
            v-text="text"
          />
        </div>
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
    },
    text: {
      type: String,
      required: true
    }
  },
  computed: {
    examples() {
      return ['bg-white', 'bg-black']
    }
  }
}
</script>