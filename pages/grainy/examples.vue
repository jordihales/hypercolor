<template>
  <div>
    <shared-banner title="Grainy Gradients" subtitle="Grainy Gradients for Tailwind CSS">
      Beautiful grainy style gradients using the full range of Tailwind CSS colors, perfect for your desktop or phone
      wallpaper.
    </shared-banner>

    <div class="space-y-12">
      <grainy-card
        v-for="gradient in gradients"
        :key="gradient.name"
        :name="gradient.name"
        :left-color="gradient.colors.left"
        :right-color="gradient.colors.right"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */

import { gradients } from '~/assets/data/grainy'

export default {
  asyncData() {
    return {
      gradients
    }
  },
  head() {
    return {
      title: 'Grainy Gradients for Tailwind CSS',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Beautiful grainy style gradients using the full range of Tailwind CSS colors, perfect for your desktop or phone wallpaper.'
        }
      ]
    }
  }
}
</script>
