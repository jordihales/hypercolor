<template>
  <a
    :href="url"
    target="_blank"
    class="font-medium text-gray-600 dark:text-gray-300"
    rel="noreferrer"
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
