<script setup>
defineProps({
  gradientStyle: {
    type: String,
    default: '',
  },
  gradientType: {
    type: String,
    default: '',
  },
})

defineEmits(['gradient:randomise'])
</script>

<template>
  <section class="border-b border-t border-gray-800/75 bg-gray-900 text-white">
    <div class="mx-auto max-w-screen-xl space-y-4 px-4 py-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-3">
        <div class="flex items-center">
          <ActionSave
            :gradient-style="gradientStyle"
            :gradient-type="gradientType"
          />

          <button
            class="ml-2 rounded-xl bg-gray-800/75 p-2.5 transition-colors hover:text-pink-500"
            @click="$emit('gradient:randomise')"
          >
            <span class="sr-only"> Generate random gradient </span>

            <IconRefresh class="h-4 w-4" />
          </button>
        </div>

        <div class="mt-4 lg:col-span-2 lg:mt-0">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>
