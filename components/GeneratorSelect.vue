<template>
  <div>
    <label
      :for="id"
      :class="`${sr ? 'sr-only' : 'text-xs font-medium'}`"
      v-text="id"
    />

    <select
      :id="id"
      class="w-full rounded-xl border-gray-800/75 bg-gray-900 p-3 font-medium sm:text-sm"
      :class="`${!sr && 'mt-2'}`"
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
  },
}
</script>
