<template>
  <section class="text-white bg-gray-900 border-t border-b border-gray-800/75">
    <div class="container py-4 space-y-4">
      <div class="lg:grid lg:grid-cols-3">
        <div class="flex items-center">
          <shared-save :gradient="gradient" :color="color" :type="type" name="Hypercolor Gradient" />

          <button class="p-2.5 rounded-xl bg-gray-800/75 ml-2" @click="$emit('random')">
            <icons-refresh class="w-4 h-4" />
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
