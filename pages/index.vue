<script setup>
import { siteSeo } from '~/assets/data/siteSeo'
import { gradientsCore } from '~/assets/data/gradientsCore'

const gradientItems = computed(() => gradientsCore)

useSeoMeta({
  ...siteSeo,
})
</script>

<template>
  <div>
    <ContentBanner title="Hypercolor" subtitle="Gradients for Tailwind CSS">
      A curated collection of beautiful Tailwind CSS gradients using the full
      range of Tailwind CSS colors. Easily copy and paste the class names, CSS
      or even save the gradients as an image.
    </ContentBanner>

    <GradientGrid show-controls :gradient-items="gradientItems" />
  </div>
</template>
