<template>
  <div>
    <shared-banner
      title="Mesh Gradients"
      subtitle="Mesh Gradients for Tailwind CSS"
    >
      Beautiful mesh style gradients using the full range of Tailwind CSS
      colors, perfect for your desktop or phone wallpaper.
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
/* eslint-disable space-before-function-paren */

import { gradients } from '~/assets/data/mesh'

export default {
  asyncData() {
    return {
      gradients
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
            'Beautiful mesh style gradients using the full range of Tailwind CSS colors, perfect for your desktop or phone wallpaper.'
        }
      ]
    }
  }
}
</script>
