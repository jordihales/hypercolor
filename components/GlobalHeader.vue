<script setup>
const appRouter = useRouter()

const showMobile = ref(false)

const navigationItems = computed(() => {
  return [
    {
      name: 'generator',
      title: 'Generator',
    },
    {
      name: 'mesh',
      title: 'Mesh',
    },
    {
      name: 'grainy',
      title: 'Grainy',
    },
    {
      name: 'flags',
      title: 'Flags',
    },
  ]
})

watch(
  () => appRouter.currentRoute.value,
  () => (showMobile.value = false)
)

function toggleMobile() {
  showMobile.value = !showMobile.value
}
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-gray-800/75 bg-gray-900 text-sm font-medium text-white"
  >
    <div
      class="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8"
    >
      <nav class="hidden md:flex md:items-center md:gap-4 lg:gap-8">
        <NuxtLink :to="{ name: 'index' }"> Gradients </NuxtLink>

        <NuxtLink
          v-for="{ title, name } in navigationItems"
          :key="name"
          :to="{ name }"
        >
          {{ title }}
        </NuxtLink>
      </nav>

      <div class="hidden md:block">
        <HeaderGithub />
      </div>

      <NuxtLink :to="{ name: 'index' }" class="block md:hidden">
        Gradients
      </NuxtLink>

      <button
        class="inline-block rounded-xl bg-gray-800/75 p-2.5 md:hidden"
        @click="toggleMobile"
      >
        <span class="sr-only">
          {{ showMobile ? 'Close' : 'Open' }} mobile menu
        </span>

        <IconMenu class="h-4 w-4" />
      </button>
    </div>

    <div v-if="showMobile" class="absolute z-50 w-full p-4">
      <div class="rounded-xl bg-gray-900 p-8 ring-2 ring-pink-500">
        <nav class="flex flex-col items-center space-y-4">
          <NuxtLink
            v-for="{ title, name } in navigationItems"
            :key="name"
            :to="{ name }"
          >
            {{ title }}
          </NuxtLink>
        </nav>

        <div class="mt-8 flex justify-center">
          <HeaderGithub />
        </div>
      </div>
    </div>
  </header>
</template>
