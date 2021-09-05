<template>
  <div>
    <label
      :for="id"
      class="sr-only"
      v-text="id"
    />

    <select
      :id="id"
      class="w-full p-3 font-medium rounded-xl bg-gray-800/10 border-gray-800/75 sm:text-sm"
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
    }
  }
}
</script>
