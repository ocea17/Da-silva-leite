<template>
  <section id="realisations" class="bg-brand-foret py-24">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div v-motion :initial="{ opacity:0, y:24 }" :visibleOnce="{ opacity:1, y:0, transition:{ duration:600 } }">
          <div class="section-label mb-3" style="color:#6DC319">
            <span style="background:#6DC319" class="block w-6 h-0.5 rounded-full mr-2 inline-block align-middle"></span>
            Nos réalisations
          </div>
          <h2 class="font-display text-4xl md:text-5xl text-white leading-tight">Avant &amp; après</h2>
        </div>
        <div v-motion :initial="{ opacity:0, y:16 }" :visibleOnce="{ opacity:1, y:0, transition:{ delay:150, duration:600 } }" class="flex flex-col items-start md:items-end gap-3">
          <p class="text-white/55 text-sm leading-relaxed max-w-xs md:text-right">
            Le meilleur argument, c'est le résultat. Quelques chantiers réalisés en Île-de-France.
          </p>
          <RouterLink to="/realisations" class="btn-outline text-sm !py-2.5">
            Voir toutes les réalisations <ArrowRight class="w-4 h-4" />
          </RouterLink>
        </div>
      </div>

      <!-- Grille avant/après -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(real, i) in realisations" :key="i"
          v-motion :initial="{ opacity:0, y:32 }"
          :visibleOnce="{ opacity:1, y:0, transition:{ delay: i * 80, duration:600 } }"
          class="group relative rounded-2xl overflow-hidden cursor-pointer"
          @mouseenter="real.showAfter = true"
          @mouseleave="real.showAfter = false"
        >
          <!-- Image (placeholder coloré) -->
          <div class="aspect-[4/3] relative overflow-hidden">
            <!-- Avant -->
            <div
              :class="real.colorBefore"
              class="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
              :style="real.showAfter ? 'opacity:0' : 'opacity:1'"
            >
              <div class="text-center text-white/30">
                <component :is="real.icon" class="w-12 h-12 mx-auto mb-2" />
                <p class="text-xs font-medium uppercase tracking-widest">Avant</p>
              </div>
            </div>
            <!-- Après -->
            <div
              :class="real.colorAfter"
              class="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
              :style="real.showAfter ? 'opacity:1' : 'opacity:0'"
            >
              <div class="text-center text-white/40">
                <CheckCircle class="w-12 h-12 mx-auto mb-2" />
                <p class="text-xs font-medium uppercase tracking-widest">Après</p>
              </div>
            </div>
          </div>

          <!-- Overlay bas -->
          <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <div class="flex items-end justify-between">
              <div>
                <p class="text-white font-semibold text-sm">{{ real.title }}</p>
                <p class="text-white/60 text-xs">{{ real.location }}</p>
              </div>
              <!-- Badge avant/après -->
              <div class="text-[10px] font-bold px-2 py-1 rounded-full transition-all duration-300"
                   :class="real.showAfter ? 'bg-brand-vif text-white' : 'bg-white/20 text-white'">
                {{ real.showAfter ? 'Après' : 'Avant' }}
              </div>
            </div>
          </div>

          <!-- Tag catégorie -->
          <div class="absolute top-3 left-3 bg-brand-vif/90 text-white text-[10px] font-semibold
                      px-2.5 py-1 rounded-full tracking-wide">
            {{ real.category }}
          </div>

          <!-- Hint hover -->
          <div class="absolute top-3 right-3 bg-black/40 text-white/70 text-[10px] px-2 py-1 rounded-full
                      opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            Survoler pour voir après
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowRight, CheckCircle, PaintBucket, Grid2X2, Building2, Sparkles } from 'lucide-vue-next'

const realisations = ref([
  { title: 'Salon complet', location: 'Mantes-la-Jolie (78)', category: 'Peinture intérieure', icon: PaintBucket, colorBefore: 'bg-gray-600',   colorAfter: 'bg-brand-foret',  showAfter: false },
  { title: 'Ravalement façade', location: 'Versailles (78)',      category: 'Ravalement',          icon: Building2,   colorBefore: 'bg-gray-500',   colorAfter: 'bg-green-700',    showAfter: false },
  { title: 'Salle de bain', location: 'Rosny-sur-Seine (78)', category: 'Revêtement',          icon: Grid2X2,     colorBefore: 'bg-stone-600',   colorAfter: 'bg-teal-700',     showAfter: false },
  { title: 'Entrée décorée', location: 'Île-de-France',         category: 'Aménagement',         icon: Sparkles,    colorBefore: 'bg-zinc-600',    colorAfter: 'bg-emerald-700',  showAfter: false },
  { title: 'Façade villa', location: 'Yvelines (78)',          category: 'Peinture extérieure', icon: Building2,   colorBefore: 'bg-neutral-600', colorAfter: 'bg-brand-foret',  showAfter: false },
  { title: 'Pose parquet', location: 'Mantes-la-Jolie (78)', category: 'Revêtement',          icon: Grid2X2,     colorBefore: 'bg-amber-800',   colorAfter: 'bg-amber-600',    showAfter: false },
])
</script>
