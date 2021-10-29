<template>
  <header
    class="sticky top-0 z-50 text-sm font-medium text-white bg-gray-900 border-b border-gray-800/75"
  >
    <div class="container flex items-center justify-between h-16">
      <nav class="flex items-center space-x-8">
        <nuxt-link :to="{ name: 'index' }">
          Gradients
        </nuxt-link>

        <nuxt-link :to="{ name: 'generator' }">
          Generator
        </nuxt-link>

        <nuxt-link :to="{ name: 'mesh' }">
          Mesh
          <span
            class="px-1 py-0.5 text-xs font-medium text-white bg-blue-500 rounded ml-1.5"
          >
            WIP
          </span>
        </nuxt-link>

        <nuxt-link :to="{ name: 'love' }">
          Love
        </nuxt-link>
      </nav>

      <div class="flex items-center sm:space-x-8">
        <a
          href="https://twitter.com/consolelogjordi"
          target="_blank"
          rel="noreferrer"
          class="hidden sm:block"
        >
          Jordi
        </a>

        <a
          href="https://twitter.com/itsmarkmead"
          target="_blank"
          rel="noreferrer"
          class="hidden sm:block"
        >
          Mark
        </a>

        <a
          href="https://github.com/jordihales/hypercolor"
          target="_blank"
          rel="noreferrer"
        >
          <span class="sr-only">GitHub</span>
          <icons-github class="w-5 h-5" />
        </a>
      </div>
    </div>
  </header>
</template>
