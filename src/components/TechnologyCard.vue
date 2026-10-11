<!-- TechnologyCard.vue -->
<script setup lang="ts">
import type { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue';
import { RouterLink, type RouteLocationRaw } from 'vue-router';

defineProps<{
    icon: FunctionalComponent<HTMLAttributes & VNodeProps, {}, any, {}>,
    name: string,
    iconBg?: string,
    iconColor?: string,
    to?: RouteLocationRaw,
}>();
</script>

<template>
    <component :is="to ? RouterLink : 'div'" :to="to" class="group aspect-square flex flex-col items-center justify-center gap-3 p-3
               rounded-xl border border-gray-200 dark:border-slate-700
               bg-gray-50/80 dark:bg-slate-800/50
               hover:border-current hover:shadow-md
               transition-all duration-300" :class="to ? 'cursor-pointer hover:scale-105' : 'cursor-default'">
        <div class="p-2 rounded-lg transition-colors" :class="iconBg ?? 'bg-violet-100 dark:bg-slate-700'">
            <component :is="icon" class="h-5 w-5 transition-colors"
                :class="iconColor ?? 'text-violet-600 dark:text-violet-400'" />
        </div>
        <span class="text-xs font-medium text-center text-gray-700 dark:text-gray-300 leading-tight">
            {{ name }}
        </span>
    </component>
</template>