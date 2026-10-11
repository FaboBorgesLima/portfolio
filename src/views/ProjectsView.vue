<!-- views/ProjectsView.vue -->
<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { projects } from '@/data/projects';
import { Tech } from '@/types/tech';
import AuroraBackground from '@/components/AuroraBackground.vue';
import { ArrowLeftIcon, CodeBracketSquareIcon, ArrowTopRightOnSquareIcon, FunnelIcon, ChevronDownIcon, CheckIcon } from '@heroicons/vue/24/outline';

const route = useRoute();
const router = useRouter();

const activeTech = computed(() => route.query.tech as string | undefined);

const filteredProjects = computed(() =>
    activeTech.value
        ? projects.filter(p => p.techs.includes(activeTech.value as Tech))
        : projects,
);

const allTechs = computed(() =>
    [...new Set(projects.flatMap(p => p.techs))].sort(),
);

function selectTech(tech: string) {
    router.push({ name: 'projects', query: tech === activeTech.value ? undefined : { tech } });
}

// Custom dropdown
const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

function pickTech(val: string) {
    router.push({ name: 'projects', query: val ? { tech: val } : undefined });
    isOpen.value = false;
}

function handleClickOutside(e: MouseEvent) {
    if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
        isOpen.value = false;
    }
}

onMounted(() => document.addEventListener('mousedown', handleClickOutside));
onUnmounted(() => document.removeEventListener('mousedown', handleClickOutside));
</script>

<template>
    <div class="relative min-h-screen py-16">
        <AuroraBackground class="z-10" />

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header -->
            <div class="mb-12">
                <RouterLink to="/" class="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400
                           hover:text-violet-600 dark:hover:text-violet-400 transition-colors mb-6">
                    <ArrowLeftIcon class="h-4 w-4" />
                    Back home
                </RouterLink>

                <h1 class="text-5xl font-bold bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500
                           dark:from-violet-400 dark:via-purple-300 dark:to-indigo-400
                           bg-clip-text text-transparent">
                    Projects
                </h1>

                <p v-if="activeTech" class="mt-3 text-gray-500 dark:text-gray-400">
                    Showing projects using
                    <span class="font-semibold text-violet-600 dark:text-violet-400">{{ activeTech }}</span>
                    &mdash;
                    <button @click="router.push({ name: 'projects' })"
                        class="underline hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                        clear filter
                    </button>
                </p>
                <p v-else class="mt-3 text-gray-500 dark:text-gray-400">
                    {{ projects.length }} projects &mdash; click a tag to filter
                </p>
            </div>

            <!-- Tech filter dropdown -->
            <div class="flex items-center gap-3 mb-10">
                <div class="relative" ref="dropdownRef">
                    <!-- Trigger -->
                    <button @click="isOpen = !isOpen" class="flex items-center gap-2 pl-4 pr-3 py-2.5 rounded-xl text-sm font-medium
                               border border-gray-200 dark:border-slate-700
                               bg-white dark:bg-slate-800
                               text-gray-700 dark:text-gray-200
                               hover:border-violet-400 dark:hover:border-violet-500
                               focus:outline-none focus:ring-2 focus:ring-violet-500/40
                               transition-all duration-200 min-w-52 justify-between"
                        :class="isOpen ? 'border-violet-500 ring-2 ring-violet-500/30' : ''">
                        <span class="flex items-center gap-2">
                            <FunnelIcon class="h-4 w-4 text-gray-400" />
                            <span :class="activeTech ? 'text-violet-600 dark:text-violet-400 font-semibold' : ''">
                                {{ activeTech ?? 'All technologies' }}
                            </span>
                        </span>
                        <ChevronDownIcon class="h-4 w-4 text-gray-400 transition-transform duration-200"
                            :class="isOpen ? 'rotate-180' : ''" />
                    </button>

                    <!-- Panel -->
                    <Transition enter-active-class="transition duration-150 ease-out"
                        enter-from-class="opacity-0 scale-95 -translate-y-1"
                        enter-to-class="opacity-100 scale-100 translate-y-0"
                        leave-active-class="transition duration-100 ease-in"
                        leave-from-class="opacity-100 scale-100 translate-y-0"
                        leave-to-class="opacity-0 scale-95 -translate-y-1">
                        <div v-if="isOpen" class="absolute top-full left-0 mt-2 z-50 w-56
                                   rounded-xl border border-gray-200 dark:border-slate-700
                                   bg-white dark:bg-slate-800
                                   shadow-xl dark:shadow-slate-900/60
                                   overflow-hidden">
                            <div class="max-h-72 overflow-y-auto p-1.5">
                                <!-- All option -->
                                <button @click="pickTech('')" class="flex items-center justify-between w-full px-3 py-2 rounded-lg
                                           text-sm transition-colors duration-150"
                                    :class="!activeTech
                                        ? 'bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 font-medium'
                                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'">
                                    All technologies
                                    <CheckIcon v-if="!activeTech" class="h-4 w-4 text-violet-500" />
                                </button>

                                <div class="my-1 border-t border-gray-100 dark:border-slate-700"></div>

                                <!-- Tech options -->
                                <button v-for="tech in allTechs" :key="tech" @click="pickTech(tech)" class="flex items-center justify-between w-full px-3 py-2 rounded-lg
                                           text-sm transition-colors duration-150"
                                    :class="tech === activeTech
                                        ? 'bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 font-medium'
                                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'">
                                    {{ tech }}
                                    <CheckIcon v-if="tech === activeTech" class="h-4 w-4 text-violet-500" />
                                </button>
                            </div>
                        </div>
                    </Transition>
                </div>

                <span class="text-sm text-gray-500 dark:text-gray-400">
                    {{ filteredProjects.length }} project{{ filteredProjects.length !== 1 ? 's' : '' }}
                </span>

                <button v-if="activeTech" @click="router.push({ name: 'projects' })"
                    class="text-sm text-violet-600 dark:text-violet-400 hover:underline transition-colors">
                    Clear
                </button>
            </div>

            <!-- Project grid -->
            <Transition name="fade" mode="out-in">
                <div :key="activeTech" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    <div v-for="project in filteredProjects" :key="project.title" class="relative flex flex-col rounded-2xl border border-gray-200 dark:border-slate-700
                               bg-white dark:bg-slate-800
                               overflow-hidden hover:shadow-xl dark:hover:shadow-violet-900/20 hover:border-violet-400/40
                               transition-all duration-300">
                        <!-- top accent bar -->
                        <div class="h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500"></div>

                        <div class="flex flex-col flex-1 p-6">
                            <div class="flex items-start justify-between gap-3 mb-3">
                                <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                    {{ project.title }}
                                </h2>
                                <div class="flex items-center gap-2 shrink-0">
                                    <a v-if="project.repo && project.repo !== '#'" :href="project.repo" target="_blank"
                                        rel="noopener" class="text-gray-400 hover:text-violet-500 transition-colors">
                                        <CodeBracketSquareIcon class="h-5 w-5" />
                                    </a>
                                    <a v-if="project.link" :href="project.link" target="_blank" rel="noopener"
                                        class="text-gray-400 hover:text-violet-500 transition-colors">
                                        <ArrowTopRightOnSquareIcon class="h-5 w-5" />
                                    </a>
                                </div>
                            </div>

                            <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1">
                                {{ project.description }}
                            </p>

                            <div class="flex flex-wrap gap-2 mt-5">
                                <button v-for="tech in project.techs" :key="tech" @click="selectTech(tech)"
                                    class="px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-200"
                                    :class="tech === activeTech
                                        ? 'bg-violet-600 text-white'
                                        : 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 hover:bg-violet-200 dark:hover:bg-violet-900/60'">
                                    {{ tech }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Empty state -->
                    <div v-if="filteredProjects.length === 0"
                        class="col-span-full text-center py-24 text-gray-400 dark:text-gray-500">
                        <CodeBracketSquareIcon class="h-12 w-12 mx-auto mb-4 opacity-40" />
                        <p class="text-lg">No projects found for <span class="font-semibold">{{ activeTech }}</span></p>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
