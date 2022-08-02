<template>
  <section class="text-white bg-gray-900 border-t border-b border-gray-800/75">
    <div class="max-w-screen-xl px-4 py-4 mx-auto space-y-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-3">
        <div class="flex items-center">
          <action-save :gradient="gradient" :color="color" :type="type" name="Hypercolor Gradient" />

          <button
            class="p-2.5 rounded-xl bg-gray-800/75 ml-2 hover:text-pink-500 transition-colors"
            @click="$emit('random')"
          >
            <icon-refresh class="w-4 h-4" />
          </button>
        </div>

        <div class="mt-4 lg:mt-0 lg:col-span-2">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    directions: {
      type: Array,
      required: true
    },
    gradient: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'standard'
    }
  }
}
</script>
