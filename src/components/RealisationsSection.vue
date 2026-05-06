<template>
  <section id="realisations" class="bg-brand-foret py-16 sm:py-24">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
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
          @click="real.showAfter = !real.showAfter"
        >
          <!-- Image (placeholder coloré) -->
          <div class="aspect-[4/3] relative overflow-hidden">
            <!-- Avant -->
            <img
              :src="real.imgBefore"
              alt="Avant"
              :class="['absolute inset-0 w-full h-full object-cover transition-opacity duration-500', real.imgPositionBefore ?? 'object-center']"
              :style="real.showAfter ? 'opacity:0' : 'opacity:1'"
            />
            <img
              :src="real.imgAfter"
              alt="Après"
              :class="['absolute inset-0 w-full h-full object-cover transition-opacity duration-500', real.imgPositionAfter ?? 'object-center']"
              :style="real.showAfter ? 'opacity:1' : 'opacity:0'"
            />
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
            <span class="hidden sm:inline">Survoler</span><span class="sm:hidden">Toucher</span> pour voir après
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
  {
    title: 'Ravalement de façade',
    location: 'Mantes-la-Jolie (78)',
    category: 'Ravalement',
    imgBefore: '/photo/realisations/peinture5_avant.jpeg',
    imgAfter:  '/photo/realisations/peinture5_apres.jpeg',
    showAfter: false
  },
  {
    title: 'Revetement moquette sur escalier',
    location: 'Versailles (78)',
    category: 'Revetement',
    imgBefore: '/photo/realisations/escalier_avant.jpeg',
    imgAfter:  '/photo/realisations/escalier_apres.jpeg',
    showAfter: false
  },
  {
    title: 'Isolation par l\'extérieur',
    location: 'Poissy (78)',
    category: 'Isolation',
    imgBefore: '/photo/realisations/renovation3_avant.jpeg',
    imgAfter:  '/photo/realisations/renovation3_apres.jpeg',
    imgPositionBefore: 'object-[center_80%]',
    showAfter: false
  },
  {
    title: 'Isolation par l\'extérieur',
    location: 'Les Mureaux (78)',
    category: 'Isolation',
    imgBefore: '/photo/realisations/renovation7_avant.png',
    imgAfter:  '/photo/realisations/renovation7_apres.jpeg',
    showAfter: false
  },
  {
    title: 'Ravalement de façade',
    location: 'Rambouillet (78)',
    category: 'Ravalement',
    imgBefore: '/photo/realisations/peinture6_avant.jpeg',
    imgAfter:  '/photo/realisations/peinture6_apres.jpeg',
    showAfter: false
  },
   {
    title: 'Aménagement d\'intérieur',
    location: 'Versailles (78)',
    category: 'Aménagement',
    imgBefore: '/photo/realisations/renovation6_avant.jpeg',
    imgAfter:  '/photo/realisations/renovation6_apres.jpeg',
    imgPositionAfter:  'object-[center_10%]',
    showAfter: false
  },
  
])
</script>