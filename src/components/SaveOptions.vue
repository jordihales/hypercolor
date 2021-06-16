<template>
  <ul class="flex items-center space-x-3">
    <OptionButton
      name="Tailwind"
      :type="type"
      @setSaveOption="setSaveOption('Tailwind')"
    />
    <OptionButton
      name="CSS"
      :type="type"
      @setSaveOption="setSaveOption('CSS')"
    />
    <OptionButton
      v-if="valid"
      name="JPEG"
      :type="type"
      @setSaveOption="setSaveOption('JPEG')"
    />
    <UpgradeButton v-if="!valid" />
  </ul>
</template>

<script>
import { validLicense } from '@/utils/auth'

import OptionButton from '@/components/OptionButton'
import UpgradeButton from '@/components/UpgradeButton'

export default {
  components: {
    OptionButton,
    UpgradeButton,
  },
  props: {
    type: String,
  },
  data() {
    return {
      valid: false,
    }
  },
  mounted() {
    this.valid = validLicense()
  },
  methods: {
    setSaveOption(option) {
      this.$emit('setSaveOption', option)
    },
  },
}
</script>
