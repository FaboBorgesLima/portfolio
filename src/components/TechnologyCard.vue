<!-- TechnologyCard.vue -->
<script setup lang="ts">
import type { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue';

defineProps<{
    icon: FunctionalComponent<HTMLAttributes & VNodeProps, {}, any, {}>,
    name: string,
    color?: string;
}>();
</script>

<template>
    <div
        class="group flex items-center flex-col gap-4 p-4 transition-all duration-300 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-violet-300 hover:dark:border-violet-400/30 hover:shadow-md">
        <!-- Icon Container -->
        <div class="p-3 rounded-lg bg-violet-100 dark:bg-slate-700">
            <component :is="icon" class="h-6 w-6 text-violet-600 dark:text-violet-400 transition-colors" />
        </div>

        <!-- Technology Name -->
        <h3 class="text-base text-center font-medium text-gray-700 dark:text-gray-300">
            {{ name }}
        </h3>
    </div>
</template>