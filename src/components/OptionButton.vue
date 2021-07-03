<template>
  <li>
    <button
      class="inline-flex items-center p-3 space-x-3 text-gray-600 border rounded-xl dark:text-gray-300"
      :class="activeClass"
      :aria-label="`Switch to saving gradients as ${type}`"
      @click="$emit('setSaveOption')"
    >
      <span
        class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-100 rounded-lg dark:bg-gray-800"
      >
        <SparkleIcon v-if="name === 'Tailwind'" />
        <CodeIcon v-if="name === 'CSS'" />
        <ImageIcon v-if="name === 'JPEG'" />
      </span>

      <span
        class="hidden text-sm font-medium sm:block"
        v-text="name"
      />
    </button>
  </li>
</template>

<script>
import SparkleIcon from '@/components/icons/Sparkle'
import ImageIcon from '@/components/icons/Image'
import CodeIcon from '@/components/icons/Code'

export default {
  components: {
    SparkleIcon,
    ImageIcon,
    CodeIcon,
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
