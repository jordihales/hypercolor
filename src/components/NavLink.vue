<template>
  <a
    v-if="external"
    :href="url"
    class="text-sm font-medium text-gray-600 dark:text-gray-300"
    rel="noreferrer"
    target="_blank"
    v-text="title"
  />

  <router-link
    v-else
    :to="url"
    class="text-sm font-medium text-gray-600 dark:text-gray-300"
    v-text="title"
  />
</template>

<script>
export default {
  props: {
    url: String,
    title: String,
    external: Boolean
  },
}
</script>
