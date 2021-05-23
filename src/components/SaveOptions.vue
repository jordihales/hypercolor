<template>
  <ul class="flex items-center space-x-3">
    <li>
      <button
        class="inline-flex items-center p-3 space-x-3 text-gray-500 border rounded-xl dark:text-gray-300"
        :class="activeClass('Tailwind')"
        @click="fireAction('Tailwind')"
      >
        <span
          class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-100 rounded-lg dark:bg-gray-800"
        >
          <SparkleIcon className="w-5 h-5" />
        </span>
        <span class="text-sm font-medium">
          Tailwind
        </span>
      </button>
    </li>

    <li>
      <button
        class="inline-flex items-center p-3 space-x-3 text-gray-500 border rounded-xl dark:text-gray-300"
        :class="activeClass('CSS')"
        @click="fireAction('CSS')"
      >
        <span
          class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-100 rounded-lg dark:bg-gray-800"
        >
          <CodeIcon className="w-5 h-5" />
        </span>
        <span class="text-sm font-medium">
          CSS
        </span>
      </button>
    </li>

    <li class="pr-4 sm:pr-0">
      <button
        class="inline-flex items-center p-3 space-x-3 text-gray-500 border rounded-xl dark:text-gray-300"
        :class="activeClass('JPEG')"
        @click="fireAction('JPEG')"
      >
        <span
          class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-100 rounded-lg dark:bg-gray-800"
        >
          <ImageIcon className="w-5 h-5" />
        </span>
        <span class="text-sm font-medium">
          JPEG
        </span>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  components: {
    SparkleIcon: () => import('@/components/icons/Sparkle'),
    CodeIcon: () => import('@/components/icons/Code'),
    ImageIcon: () => import('@/components/icons/Image'),
  },
  props: {
    type: String,
  },
  methods: {
    fireAction(name) {
      this.$emit('action', name)
    },
    activeClass(name) {
      return this.type === name ? 'border-teal-300' : 'border-gray-200 dark:border-gray-700'
    },
  },
}
</script>
