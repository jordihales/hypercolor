<template>
  <div>
    <shared-banner
      title="Mesh Gradients"
      subtitle="Mesh Gradients with Tailwind CSS"
    >
      A collection of beautiful mesh style gradients using the full range of Tailwind CSS colors. Simply download your favouries as images.
    </shared-banner>

    <div class="space-y-12">
      <mesh-canvas
        v-for="gradient of gradients"
        :key="gradient.name"
        :tl-color="gradient.topLeft"
        :tr-color="gradient.topRight"
        :bl-color="gradient.bottomLeft"
        :br-color="gradient.bottomRight"
        :name="gradient.name"
      />
    </div>
  </div>
</template>

<script>
import { gradients } from '~/assets/data/mesh'

export default {
  asyncData () {
    return {
      gradients
    }
  }
}
</script>
