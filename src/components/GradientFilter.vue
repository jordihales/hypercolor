<template>
  <div>
    <div class="sm:hidden">
      <select aria-label="Selected tab" class="block w-full form-select">
        <option v-for="gradient in gradients" :key="gradient.theme">
          {{ gradient }}
        </option>
      </select>
    </div>
    <div class="hidden sm:block">
      <div class="flex items-center justify-center space-x-8">
        <FilterOption
          v-for="gradient in gradients"
          :key="gradient.title"
          :theme="gradient.theme"
          :active="theme"
          :colors="gradient.colors"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FilterOption from '@/components/FilterOption'

export default {
  props: {
    gradients: Array,
  },
  components: {
    FilterOption,
  },
}
</script>