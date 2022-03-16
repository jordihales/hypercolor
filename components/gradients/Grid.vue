<template>
  <section>
    <div class="container grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <gradients-card
        v-for="gradient of gradients"
        :key="gradient.id"
        :name="gradient.name"
        :colors="gradient.colors"
        :direction="gradient.direction"
        :version="gradient.version"
        :controls="directions"
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
      required: true
    },
    directions: {
      type: Boolean,
      default: true
    }
  }
}
</script>
