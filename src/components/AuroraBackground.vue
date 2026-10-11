<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrollY = ref(0)

function handleScroll() {
    scrollY.value = window.scrollY
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div class="orb-layer" :style="{ transform: `translateY(${scrollY * 0.1}px)` }">
            <div class="orb orb-1"></div>
        </div>
        <div class="orb-layer" :style="{ transform: `translateY(${scrollY * 0.22}px)` }">
            <div class="orb orb-2"></div>
        </div>
        <div class="orb-layer" :style="{ transform: `translateY(${scrollY * 0.15}px)` }">
            <div class="orb orb-3"></div>
        </div>
        <div class="grid-overlay"></div>
    </div>
</template>

<style scoped>
.orb-layer {
    position: absolute;
    inset: 0;
}

.orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.35;
    animation: float linear infinite;
}

.orb-1 {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, #7c3aed, #4f46e5);
    top: -10%;
    left: -10%;
    animation-duration: 20s;
}

.orb-2 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, #db2777, #7c3aed);
    top: 40%;
    right: -5%;
    animation-duration: 26s;
    animation-direction: reverse;
}

.orb-3 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, #2563eb, #06b6d4);
    bottom: 5%;
    left: 20%;
    animation-duration: 18s;
    animation-delay: -8s;
}

.grid-overlay {
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(to right, rgba(100, 100, 120, 0.07) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(100, 100, 120, 0.07) 1px, transparent 1px);
    background-size: 48px 48px;
}

@keyframes float {
    0% {
        transform: translate(0, 0) scale(1);
    }

    25% {
        transform: translate(40px, -30px) scale(1.05);
    }

    50% {
        transform: translate(20px, 50px) scale(0.95);
    }

    75% {
        transform: translate(-30px, 20px) scale(1.03);
    }

    100% {
        transform: translate(0, 0) scale(1);
    }
}

:global(.dark) .orb {
    opacity: 0.2;
}
</style>
