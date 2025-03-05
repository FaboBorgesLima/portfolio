<!-- views/HomeView.vue -->
<script setup lang="ts">
import TechnologiesSection from '@/components/TechnologiesSection.vue';
import ContactCard from '@/components/ContactCard.vue';
</script>

<template>
  <div class="flex flex-col gap-20 py-16">
    <!-- Hero Section -->
    <section class="relative text-center">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative z-10">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Full Stack Developer
          </h1>
          <div class="inline-block bg-violet-100 dark:bg-slate-800 rounded-xl px-6 py-4">
            <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 italic">
              "Most of the good programmers do programming not because they expect to get paid or get adulation by the
              public, but because it is fun to program."
            </p>
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">- Linus Torvalds</p>
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
                🚀 Passionate developer with 1+ year of experience crafting full-stack solutions.
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
                <div class="h-full w-full bg-gray-200 dark:bg-slate-700 animate-pulse"></div>
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