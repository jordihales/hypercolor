<template>
  <ul class="flex items-center space-x-3">
    <OptionButton name="Tailwind" :type="type" @setSaveOption="setSaveOption('Tailwind')" />
    <OptionButton name="CSS" :type="type" @setSaveOption="setSaveOption('CSS')" />
    <OptionButton name="JPEG" :type="type" @setSaveOption="setSaveOption('JPEG')" v-if="valid" />
    <UpgradeButton v-if="!valid" />
  </ul>
</template>

<script>
export default {
  components: {
    OptionButton: () => import('@/components/OptionButton'),
    UpgradeButton: () => import('@/components/UpgradeButton'),
  },
  props: {
    type: String,
  },
  data() {
    return {
      valid: false,
    }
  },
  methods: {
    setSaveOption(option) {
      this.$emit('setSaveOption', option)
    },
  },
}
</script>
