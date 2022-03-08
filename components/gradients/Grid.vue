<template>
  <section>
    <div class="container grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <gradients-card
        v-for="gradient of gradients"
        :key="gradient.id"
        :class="gridClass"
        :name="gradient.name"
        :colors="gradient.colors"
        :direction="gradient.direction"
        :version="gradient.version"
        :css="gradient.css"
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
    first: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    gridClass () {
      return this.first ? 'first:lg:col-span-3 first:sm:col-span-2' : ''
    }
  }
}
</script>
