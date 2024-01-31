<template>
  <div class="flex min-h-screen flex-col justify-between bg-gray-900">
    <GlobalHeader />

    <main>
      <slot />
    </main>

    <GlobalFooter />
  </div>
</template>
