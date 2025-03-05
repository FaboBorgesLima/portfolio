<script setup lang="ts">
import GithubIcon from './icons/GithubIcon.vue';
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue';
import { EnvelopeIcon } from '@heroicons/vue/24/solid'

const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/FaboBorgesLima', icon: GithubIcon },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/flavio-borges-de-lima-6a708a270/', icon: LinkedinIcon },
    { name: 'Email', url: 'mailto:fabo.borges.lima@gmail.com', icon: EnvelopeIcon }
];

</script>

<template>
    <section>
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Get in Touch</h2>
            <div class="flex justify-center gap-6">
                <a v-for="link in socialLinks" :key="link.name" :href="link.url"
                    class="p-4 rounded-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                    <component :is="link.icon" class="h-6 w-6 text-violet-600 dark:text-violet-400 transition-colors" />
                    <span class="sr-only">{{ link.name }}</span>
                </a>
            </div>
        </div>
    </section>
</template>