<template>
  <li>
    <a
      class="inline-flex items-center p-3 space-x-3 text-gray-600 border border-gray-200 dark:border-gray-700 rounded-xl dark:text-gray-300"
      href="https://gumroad.com/a/1027282035/TjkKF"
      rel="noreferrer"
      aria-label="Upgrade access Gumroad product page"
      target="_blank"
    >
      <span
        class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-100 rounded-lg dark:bg-gray-800"
      >
        <ImageIcon />
      </span>
      <span class="hidden text-sm font-medium sm:block">
        JPEG
      </span>
    </a>
  </li>
</template>

<script>
import ImageIcon from '@/components/icons/Image'

export default {
  components: {
    ImageIcon
  },
  props: {
    name: String,
    type: String,
  },
}
</script>
