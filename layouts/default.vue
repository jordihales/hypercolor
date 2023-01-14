<template>
  <div class="flex flex-col justify-between min-h-screen bg-gray-900">
    <global-header />

    <main>
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
