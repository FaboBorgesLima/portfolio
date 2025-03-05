<script setup lang="ts">
const links = [
  { name: 'Home', path: '/' },
];

</script>

<template>
  <nav class="max-w-6xl mx-auto p-6">
    <div class="flex justify-between items-center">
      <h1 class="text-xl font-bold text-gray-800 dark:text-gray-200">FaboBorgesLima</h1>
      <div class="flex gap-6">
        <RouterLink v-for="link in links" :key="link.path" :to="link.path"
          class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
          {{ link.name }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
