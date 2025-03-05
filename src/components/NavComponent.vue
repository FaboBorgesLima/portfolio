<script setup lang="ts">
import { HomeIcon } from '@heroicons/vue/24/solid';

const links = [
  { name: 'Home', path: '/', icon: HomeIcon },
];

</script>

<template>
  <nav class="max-w-6xl mx-auto p-6">
    <div class="flex justify-between items-center">
      <h1 class="text-xl font-bold text-gray-800 dark:text-gray-200">FaboBorgesLima</h1>
      <div class="flex gap-6">
        <RouterLink v-for="link in links" :key="link.path" :to="link.path"
          class="text-gray-600 flex gap-2 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
          <component :is="link.icon" class="h-6 w-6 text-violet-600 dark:text-violet-400 transition-colors" />
          {{ link.name }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
