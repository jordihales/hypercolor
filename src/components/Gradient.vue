<template>
  <div class="rounded-lg shadow-md">
    <div class="h-48 rounded-t-lg" :class="colors"></div>
    <div class="px-6 py-8 space-y-4">
      <h2 class="text-lg font-extrabold text-gray-900">{{ title }}</h2>
      <div class="font-mono text-sm text-gray-900">
        {{ colors }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    colors: String,
  },
}
</script>