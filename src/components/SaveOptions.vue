<template>
  <ul class="flex items-center space-x-3">
    <li v-for="type of types" :key="type">
      <button
        class="inline-flex items-center p-3 space-x-3 border rounded-xl"
        :class="activeClass(type)"
        @click="fireAction(type)"
      >
        <span class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-800 rounded-lg">
          <IconStar iconClass="w-5 h-5 text-gray-300" v-if="type === 'Tailwind'" />
          <IconCode iconClass="w-5 h-5 text-gray-300" v-if="type === 'CSS'" />
          <IconImage iconClass="w-5 h-5 text-gray-300" v-if="type === 'JPEG'" />
        </span>
        <span class="text-sm font-medium text-white" v-text="type" />
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  components: {
    IconStar: () => import('@/components/IconStar'),
    IconCode: () => import('@/components/IconCode'),
    IconImage: () => import('@/components/IconImage'),
  },
  props: {
    types: Array,
    type: String,
  },
  methods: {
    fireAction(name) {
      this.$emit('action', name)
    },
    activeClass(name) {
      return this.type === name ? 'border-teal-300' : 'border-gray-700'
    },
  },
}
</script>
