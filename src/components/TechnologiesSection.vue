<script setup lang="ts">
import TechnologyCard from '@/components/TechnologyCard.vue';
import { CodeBracketIcon, ServerIcon, CircleStackIcon, CloudIcon } from '@heroicons/vue/24/outline';
import { Tech } from '@/types/tech';

const categories = [
    {
        key: 'frontend',
        label: 'Frontend',
        icon: CodeBracketIcon,
        gradientFrom: 'from-violet-500',
        gradientTo: 'to-purple-500',
        iconBg: 'bg-violet-100 dark:bg-violet-900/40',
        iconColor: 'text-violet-600 dark:text-violet-400',
        cardAccent: 'hover:border-violet-400/60 hover:shadow-violet-500/10',
        items: [Tech.Bootstrap, Tech.TailwindCSS, Tech.Vue],
    },
    {
        key: 'backend',
        label: 'Backend',
        icon: ServerIcon,
        gradientFrom: 'from-emerald-500',
        gradientTo: 'to-teal-500',
        iconBg: 'bg-emerald-100 dark:bg-emerald-900/40',
        iconColor: 'text-emerald-600 dark:text-emerald-400',
        cardAccent: 'hover:border-emerald-400/60 hover:shadow-emerald-500/10',
        items: [Tech.Rails, Tech.NodeJS, Tech.NestJS, Tech.Rust],
    },
    {
        key: 'languages',
        label: 'Languages',
        icon: CodeBracketIcon,
        gradientFrom: 'from-rose-500',
        gradientTo: 'to-pink-500',
        iconBg: 'bg-rose-100 dark:bg-rose-900/40',
        iconColor: 'text-rose-600 dark:text-rose-400',
        cardAccent: 'hover:border-rose-400/60 hover:shadow-rose-500/10',
        items: [Tech.TypeScript, Tech.Python, Tech.Kotlin],
    },
    {
        key: 'database',
        label: 'Database',
        icon: CircleStackIcon,
        gradientFrom: 'from-amber-500',
        gradientTo: 'to-orange-500',
        iconBg: 'bg-amber-100 dark:bg-amber-900/40',
        iconColor: 'text-amber-600 dark:text-amber-400',
        cardAccent: 'hover:border-amber-400/60 hover:shadow-amber-500/10',
        items: [Tech.PostgreSQL],
    },
    {
        key: 'infra',
        label: 'Infrastructure',
        icon: CloudIcon,
        gradientFrom: 'from-sky-500',
        gradientTo: 'to-cyan-500',
        iconBg: 'bg-sky-100 dark:bg-sky-900/40',
        iconColor: 'text-sky-600 dark:text-sky-400',
        cardAccent: 'hover:border-sky-400/60 hover:shadow-sky-500/10',
        items: [Tech.Linux, Tech.Docker, Tech.Kubernetes],
    },
];
</script>

<template>
    <section>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-14">
                <h2 class="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600
                           dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                    Technical Expertise
                </h2>
                <p class="mt-3 text-gray-500 dark:text-gray-400">Tools &amp; technologies I work with</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-6">
                <div v-for="cat in categories" :key="cat.key" class="relative rounded-2xl border border-gray-200 dark:border-slate-700
                           bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm
                           overflow-hidden hover:shadow-xl transition-all duration-300" :class="cat.cardAccent">
                    <!-- colored top bar -->
                    <div class="absolute top-0 inset-x-0 h-1 bg-gradient-to-r"
                        :class="[cat.gradientFrom, cat.gradientTo]"></div>

                    <div class="p-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="p-2.5 rounded-xl" :class="cat.iconBg">
                                <component :is="cat.icon" class="h-5 w-5 transition-colors" :class="cat.iconColor" />
                            </div>
                            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                {{ cat.label }}
                            </h3>
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <TechnologyCard v-for="name in cat.items" :key="name" :name="name" :icon="cat.icon"
                                :icon-bg="cat.iconBg" :icon-color="cat.iconColor"
                                :to="{ name: 'projects', query: { tech: name } }" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>