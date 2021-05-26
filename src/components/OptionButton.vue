<template>
  <li>
    <button
      class="inline-flex items-center p-3 space-x-3 text-gray-500 border rounded-xl dark:text-gray-300"
      :class="activeClass"
      @click="$emit('setSaveOption')"
    >
      <span
        class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-100 rounded-lg dark:bg-gray-800"
      >
        <SparkleIcon className="w-5 h-5" v-if="name === 'Tailwind'" />
        <CodeIcon className="w-5 h-5" v-if="name === 'CSS'" />
        <ImageIcon className="w-5 h-5" v-if="name === 'JPEG'" />
      </span>
      <span class="text-sm font-medium" v-text="name" />
    </button>
  </li>
</template>

<script>
export default {
  components: {
    SparkleIcon: () => import('@/components/icons/Sparkle'),
    ImageIcon: () => import('@/components/icons/Image'),
    CodeIcon: () => import('@/components/icons/Code'),
  },
  props: {
    name: String,
    type: String,
  },
  computed: {
    activeClass() {
      return this.type === this.name ? 'border-teal-300' : 'border-gray-200 dark:border-gray-700'
    },
  },
}
</script>
