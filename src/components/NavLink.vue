<template>
  <a
    :href="url"
    target="_blank"
    class="text-gray-500 transition-opacity opacity-75 app-subtitle dark:text-gray-300 hover:opacity-100"
    v-text="title"
  />
</template>

<script>
export default {
  props: {
    url: String,
    title: String,
  },
}
</script>
