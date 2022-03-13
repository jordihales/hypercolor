<template>
  <div>
    <label
      :for="id"
      :class="`${label ? 'text-xs font-medium' : 'sr-only'}`"
      v-text="id"
    />

    <select
      :id="id"
      class="w-full p-3 font-medium bg-gray-900 rounded-xl border-gray-800/75 sm:text-sm"
      :class="`${label ? 'mt-2' : ''}`"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
      <option v-for="item of items" :key="item" :value="item" v-text="item" />
    </select>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    label: {
      type: Boolean,
      default: false
    }
  }
}
</script>
