<template>
  <section class="relative min-h-screen bg-brand-foret flex items-center overflow-hidden">

    <!-- Fond géométrique animé -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-[-10%] right-[-5%] w-[60vw] h-[110vh] rounded-[40%_0_0_60%]
                  bg-gradient-to-br from-brand-vif/14 to-brand-moyen/6 animate-float" />
      <div class="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[60vh] rounded-[0_60%_40%_0]
                  bg-brand-vif/7" />
    </div>

    <div class="max-w-6xl mx-auto px-6 relative z-10 pt-28 pb-16 w-full">
      <div class="max-w-xl">

        <!-- Badge -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                 bg-brand-vif/18 border border-brand-vif/40
                 text-brand-vif text-xs font-semibold tracking-widest uppercase mb-8"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-brand-vif" />
          Artisan peintre depuis 2007
        </div>

        <!-- Titre H1 -->
        <h1
          v-motion
          :initial="{ opacity: 0, y: 28 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 700 } }"
          class="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.0] mb-6"
        >
          Votre artisan<br/>
          peintre dans<br/>
          <span class="text-brand-vif">les Yvelines</span>
        </h1>

        <!-- Sous-titre -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 600 } }"
          class="text-white/70 text-base leading-relaxed max-w-md mb-10"
        >
          Peinture intérieure &amp; extérieure, revêtements, ravalement de façade
          et décoration à Mantes-la-Jolie, Versailles et en Île-de-France.
        </p>

        <!-- CTA buttons -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 800, duration: 600 } }"
          class="flex flex-wrap gap-4"
        >
          <a href="#contact" class="btn-primary">
            <CheckCircle class="w-4 h-4" />
            Devis gratuit
          </a>
          <a href="#realisations" class="btn-outline">
            Voir nos réalisations
            <ArrowRight class="w-4 h-4" />
          </a>
        </div>

        <!-- Stats -->
        <div
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 1000, duration: 700 } }"
          class="flex gap-0 mt-14"
        >
          <div
            v-for="(stat, i) in stats"
            :key="stat.label"
            class="pr-8 pl-0 border-l border-white/15 first:border-l-0 first:pl-0"
            :class="i > 0 ? 'pl-8' : ''"
          >
            <div class="font-display text-4xl text-brand-vif leading-none">{{ stat.value }}</div>
            <div class="text-white/50 text-xs mt-1 tracking-wide">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                text-white/40 text-[10px] tracking-widest uppercase animate-bounce z-10">
      <span>Découvrir</span>
      <ChevronDown class="w-4 h-4" />
    </div>
  </section>
</template>

<script setup>
import { CheckCircle, ArrowRight, ChevronDown } from 'lucide-vue-next'

const stats = [
  { value: '15+', label: 'Années d\'expérience' },
  { value: '300+', label: 'Chantiers réalisés' },
  { value: '5★',  label: 'Note clients' },
]
</script>
