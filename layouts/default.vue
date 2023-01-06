<template>
  <div class="bg-gray-900">
    <global-header />

    <main style="min-height: calc(100vh - 198px)">
      <Nuxt />
    </main>

    <global-footer />
  </div>
</template>

<script>
export default {
  name: 'LayoutComponent',
}
</script>
