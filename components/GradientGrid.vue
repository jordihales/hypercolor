<template>
  <section>
    <div
      class="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8"
    >
      <gradient-card
        v-for="gradient of gradients"
        :key="gradient.id"
        :name="gradient.name"
        :colors="gradient.colors"
        :direction="gradient.direction"
        :version="gradient.version"
        :controls="directions"
        :overlap="overlap"
        v-on="$listeners"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    gradients: {
      type: Array,
      required: true,
    },
    directions: {
      type: Boolean,
      default: true,
    },
    overlap: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
