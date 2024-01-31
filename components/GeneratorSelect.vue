<script setup>
const selectProps = defineProps({
  selectId: {
    type: String,
    default: '',
  },
  selectOptions: {
    type: Array,
    default: () => [],
  },
  labelKey: {
    type: String,
    default: '',
  },
  valueKey: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
})

const selectEmits = defineEmits(['update:modelValue'])

const localValue = computed({
  get() {
    return selectProps.modelValue
  },
  set(localValue) {
    selectEmits('update:modelValue', localValue)
  },
})
</script>

<template>
  <div>
    <label :for="selectId" class="sr-only">
      {{ selectId }}
    </label>

    <select
      :id="selectId"
      v-model="localValue"
      class="w-full rounded-xl border-gray-800/75 bg-gray-900 p-3 font-medium sm:text-sm"
    >
      <option
        v-for="(optionItem, itemIndex) of selectOptions"
        :key="itemIndex"
        :value="valueKey ? optionItem[valueKey] : optionItem"
      >
        {{ labelKey ? optionItem[labelKey] : optionItem }}
      </option>
    </select>
  </div>
</template>
