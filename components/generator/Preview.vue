<template>
  <section>
    <div class="container mt-16 space-y-8">
      <div
        class="h-[400px] sm:h-[600px] rounded-3xl"
        :class="gradient"
      />

      <div
        class="p-8 text-center rounded-xl"
        v-for="example of examples"
        :key="example.id"
        :class="example"
      >
        <p
          class="text-2xl font-black text-transparent bg-clip-text"
          :class="gradient"
          v-text="text"
        />
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