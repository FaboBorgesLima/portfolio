<script setup lang="ts">
const socialLinks = [
    { name: 'GitHub', url: '#', icon: 'github' },
    { name: 'LinkedIn', url: '#', icon: 'linkedin' },
    { name: 'Email', url: 'mailto:you@email.com', icon: 'email' }
];

</script>

<template>
    <section>
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Get in Touch</h2>
            <div class="flex justify-center gap-6">
                <a v-for="link in socialLinks" :key="link.name" :href="link.url"
                    class="p-4 rounded-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                    <span class="sr-only">{{ link.name }}</span>
                </a>
            </div>
        </div>
    </section>
</template>