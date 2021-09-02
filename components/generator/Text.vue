<template>
  <div>
    <label
      :for="id"
      v-text="id"
      class="sr-only"
    />

    <textarea
      :value="value"
      :id="id"
      @input="$emit('input', $event.target.value)"
      class="w-full p-3 font-medium rounded-xl bg-gray-800/10 border-gray-800/75"
      rows="4"
    />
  </div>
</template>

<script>
export default {
  props: {
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