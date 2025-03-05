<script setup lang="ts">
import TechnologyCard from '@/components/TechnologyCard.vue';
import { CodeBracketIcon, ServerIcon, CircleStackIcon, CloudIcon } from '@heroicons/vue/24/solid'

const technologies = {
    frontend: [
        { name: 'HTML5', icon: CodeBracketIcon },
        { name: 'CSS3', icon: CodeBracketIcon },
        { name: 'Bootstrap', icon: CodeBracketIcon },
        { name: 'Tailwind CSS', icon: CodeBracketIcon },
        { name: 'Angular', icon: CodeBracketIcon },
        { name: 'Vue', icon: CodeBracketIcon },
        { name: 'React', icon: CodeBracketIcon },
    ],
    backend: [
        { name: 'PHP', icon: ServerIcon },
        { name: 'Laravel', icon: ServerIcon },
        { name: 'Python', icon: ServerIcon },
        { name: 'Node.js', icon: ServerIcon },
        { name: 'Fastify', icon: ServerIcon },
        { name: 'TypeScript', icon: ServerIcon },
    ],
    database: [
        { name: 'MySQL', icon: CircleStackIcon },
        { name: 'MongoDB', icon: CircleStackIcon }
    ],
    infra: [
        { name: 'Linux', icon: CloudIcon },
        { name: 'Docker', icon: CloudIcon },
        { name: 'Kubernetes', icon: CloudIcon }
    ]
}
</script>

<template>
    <section class="">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
                Technical Expertise
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <div v-for="(items, category) in technologies" :key="category"
                    class="bg-white dark:bg-violet-500/5 rounded-2xl border border-gray-200 dark:border-slate-700 p-6">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="p-3 rounded-lg bg-violet-100 dark:bg-slate-700">
                            <component :is="items[0].icon" class="h-6 w-6 text-violet-600 dark:text-violet-400" />
                        </div>
                        <h3 class="text-xl font-semibold capitalize text-gray-800 dark:text-gray-200">
                            {{ category }}
                        </h3>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <TechnologyCard v-for="(item, index) in items" v-bind="item" :key="index">

                        </TechnologyCard>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>