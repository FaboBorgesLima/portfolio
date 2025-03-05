<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavComponent from './components/NavComponent.vue';

</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-slate-950 transition-colors duration-300 flex flex-col gap-4">
    <header
      class="sticky z-50 top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-gray-200 dark:border-slate-800">
      <NavComponent></NavComponent>
    </header>

    <main class="grow">
      <RouterView />
    </main>

    <footer class="border-t border-gray-200 dark:border-slate-800">
      <div class="max-w-6xl mx-auto p-6 text-center text-gray-600 dark:text-gray-400">
        © 2025 FaboBorgesLima. All rights reserved.
      </div>
    </footer>
  </div>
</template>