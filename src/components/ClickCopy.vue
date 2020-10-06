<template>
  <div class="container">
    <input type="hidden" v-model="gradient" />
    <div class="inline-flex flex-col items-start group">
      <button
        class="text-sm font-light"
        type="button"
        v-clipboard:copy="gradient"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
      >
        Copy CSS
      </button>
      <span
        class="inline-block w-6 h-1 mt-1 duration-100 ease-in-out rounded-full transition-size group-hover:w-full"
        :class="gradient"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gradient: String,
  },
  methods: {
    onCopy: function(e) {
      const text = e.trigger.innerText
      e.trigger.innerText = 'Copied!'
      setTimeout(() => {
        e.trigger.innerText = text
      }, 2000)
    },
    onError: function() {
      alert('Failed to copy texts')
    },
  },
}
</script>
