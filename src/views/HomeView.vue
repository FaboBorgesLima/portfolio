<!-- views/HomeView.vue -->
<script setup lang="ts">
import TechnologiesSection from '@/components/TechnologiesSection.vue';
import ContactCard from '@/components/ContactCard.vue';
import AuroraBackground from '@/components/AuroraBackground.vue';

const startExperience = new Date(2024, 0, 2); // January 2, 2024

function getExperienceTime(start: Date): number {
  const currentDate = new Date();
  const experienceTime = currentDate.getTime() - start.getTime();
  return experienceTime;
}

function getExperienceYears(start: Date): string {
  const experienceTime = getExperienceTime(start);

  const experienceYears = experienceTime / (1000 * 60 * 60 * 24 * 365);

  return experienceYears.toFixed(1) + (experienceYears % 1 > 0.2 ? '+' : '');
}

</script>

<template>
  <div class="relative flex flex-col gap-20 py-16 overflow-hidden z-10">
    <AuroraBackground />
    <!-- Hero Section -->
    <section class="relative text-center">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative z-10 flex flex-col items-center gap-6">
          <span class="inline-flex items-center gap-2 rounded-full border border-violet-300 dark:border-violet-700
                       bg-violet-50 dark:bg-violet-950/50 px-4 py-1.5 text-sm font-medium
                       text-violet-700 dark:text-violet-300">
            <span class="relative flex h-2 w-2">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            Available for work
          </span>

          <h1 class="text-5xl md:text-7xl font-bold tracking-tight">
            <span class="bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500
                         dark:from-violet-400 dark:via-purple-300 dark:to-indigo-400
                         bg-clip-text text-transparent">
              Full Stack
            </span>
            <br />
            <span class="text-gray-900 dark:text-gray-100">Developer</span>
          </h1>

          <div class="relative max-w-2xl">
            <div
              class="absolute -inset-px rounded-2xl bg-gradient-to-r from-violet-500/30 via-purple-500/20 to-indigo-500/30 blur-sm">
            </div>
            <div class="relative rounded-2xl border border-white/60 dark:border-slate-700/60
                        bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm px-8 py-6 text-left">
              <span class="absolute -top-3 left-6 text-4xl leading-none text-violet-400 select-none">"</span>
              <p class="text-base md:text-lg text-gray-600 dark:text-gray-300 italic leading-relaxed pt-2">
                Most of the good programmers do programming not because they expect to get paid or get adulation by the
                public, but because it is fun to program.
              </p>
              <p class="mt-3 text-sm font-medium text-violet-600 dark:text-violet-400">— Linus Torvalds</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              About Me
            </h2>
            <div class="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                🚀 Passionate developer with {{ getExperienceYears(startExperience) }} year of experience
                crafting
                full-stack
                solutions.
                Specializing in modern web technologies and clean architecture.
              </p>
              <div class="mt-6 grid grid-cols-2 gap-4">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-violet-500 rounded-full"></span>
                  <span>Fast learner</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-violet-500 rounded-full"></span>
                  <span>Highly communicative</span>
                </div>
              </div>
            </div>
          </div>
          <div class="order-1 md:order-2 flex justify-center">
            <div class="relative group w-64 h-64">
              <div class="absolute inset-0 bg-violet-500/10 rounded-full transform group-hover:scale-105 
                        transition duration-300"></div>
              <div class="relative h-64 w-64 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 
                        shadow-xl transform group-hover:rotate-2 transition duration-300">
                <img src="../assets/me.jpeg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <TechnologiesSection />

    <!-- Contact Section -->
    <section class="relative">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactCard />
      </div>
    </section>
  </div>
</template>
