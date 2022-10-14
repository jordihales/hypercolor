<template>
  <div>
    <label
      :for="id"
      :class="`${sr ? 'sr-only' : 'text-xs font-medium'}`"
      v-text="id"
    />

    <select
      :id="id"
      class="w-full p-3 font-medium bg-gray-900 rounded-xl border-gray-800/75 sm:text-sm"
      :class="`${!sr && 'mt-2'}`"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
      <option
        v-for="item of items"
        :key="labelKey ? item[labelKey] : item"
        :value="valueKey ? item[valueKey] : item"
        v-text="labelKey ? item[labelKey] : item"
      />
    </select>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    sr: {
      type: Boolean,
      default: true,
    },
    labelKey: {
      type: String,
      required: false,
    },
    valueKey: {
      type: String,
      required: false,
    },
  },
}
</script>
