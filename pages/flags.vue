<script setup>
import { flagTitle, siteSeo } from '~/assets/data/siteSeo'
import { gradientsFlag } from '~/assets/data/gradientsFlag'

const gradientItems = computed(() => gradientsFlag)

useSeoMeta({
  ...siteSeo,
  title: flagTitle,
  ogTitle: flagTitle,
  twitterTitle: flagTitle,
})
</script>

<template>
  <div>
    <ContentBanner
      title="World Flags"
      subtitle="Flag Gradients with Tailwind CSS"
    >
      A collection of country flags created with Tailwind CSS.
    </ContentBanner>

    <GradientGrid :gradient-items="gradientItems" />
  </div>
</template>
