<template>
  <div>
    <Banner />
    <Gradients />
  </div>
</template>

<script>
export default {
  components: {
    Banner: () => import('@/components/Banner'),
    Gradients: () => import('@/components/Gradients'),
  },
}
</script>
