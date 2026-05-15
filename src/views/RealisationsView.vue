<template>
  <main>

    <!-- ─── Hero ─── -->
    <section class="relative bg-brand-foret pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div class="absolute top-1/2 right-[8%] -translate-y-1/2
                    w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] rounded-full
                    border border-brand-vif/15 animate-spin-slow" />
        <div class="absolute top-1/2 right-[8%] -translate-y-1/2
                    w-[240px] sm:w-[360px] h-[240px] sm:h-[360px] rounded-full
                    border border-brand-vif/20" />
        <div class="absolute top-1/2 right-[8%] -translate-y-1/2
                    w-[160px] sm:w-[240px] h-[160px] sm:h-[240px] rounded-full
                    bg-brand-vif/8 border border-brand-vif/25 animate-float" />
        <div class="absolute bottom-[-15%] left-[-5%] w-[35vw] h-[50vh]
                    rounded-[0_55%_35%_0] bg-brand-vif/6 animate-float" style="animation-delay:2s" />
        <div class="absolute inset-0 opacity-[0.03]"
             style="background:repeating-linear-gradient(-45deg,transparent,transparent 60px,#6DC319 60px,#6DC319 61px)" />
      </div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <!-- Breadcrumb -->
        <div v-motion :initial="{ opacity:0, y:10 }" :enter="{ opacity:1, y:0, transition:{ duration:500 } }"
             class="flex items-center justify-center gap-2 text-white/40 text-sm mb-6 sm:mb-8">
          <RouterLink to="/" class="hover:text-brand-vif transition-colors">Accueil</RouterLink>
          <ChevronRight class="w-3 h-3" />
          <span class="text-brand-vif">Réalisations</span>
        </div>

        <!-- Badge -->
        <div v-motion :initial="{ opacity:0, y:20 }" :enter="{ opacity:1, y:0, transition:{ delay:100, duration:600 } }"
             class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 sm:mb-6
                    bg-brand-vif/18 border border-brand-vif/40 text-brand-vif text-sm font-semibold tracking-widest uppercase">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-vif animate-pulse" />
          Portfolio
        </div>

        <!-- Titre -->
        <h1 v-motion :initial="{ opacity:0, y:28 }" :enter="{ opacity:1, y:0, transition:{ delay:200, duration:700 } }"
            class="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4 sm:mb-5">
          Nos réalisations<br/>
          <span class="text-brand-vif">Avant &amp; après</span>
        </h1>

        <!-- Sous-titre -->
        <p v-motion :initial="{ opacity:0 }" :enter="{ opacity:1, transition:{ delay:400, duration:600 } }"
           class="text-white/60 text-sm sm:text-base leading-loose max-w-xl mx-auto mb-8 sm:mb-10">
          Le meilleur argument, c'est le résultat. Retrouvez nos chantiers réalisés
          dans les Yvelines et en Île-de-France.
        </p>

        <!-- CTA -->
        <a href="/#contact" v-motion :initial="{ opacity:0, y:12 }" :enter="{ opacity:1, y:0, transition:{ delay:550, duration:600 } }"
           class="btn-primary inline-flex">
          <CheckCircle class="w-4 h-4" /> Demander un devis gratuit
        </a>
      </div>
    </section>

    <!-- ─── Section Chantiers complets ─── -->
    <section class="py-16 sm:py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">

        <div v-motion :initial="{ opacity:0, y:24 }" :visibleOnce="{ opacity:1, y:0, transition:{ duration:600 } }"
             class="mb-10 sm:mb-12">
          <div class="section-label mb-3">Chantiers complets</div>
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 class="section-title">Suivez nos projets<br/>de A à Z</h2>
            <p class="text-gray-500 text-sm max-w-xs leading-relaxed">
              Plusieurs photos par chantier pour voir l'évolution complète du travail.
            </p>
          </div>
        </div>

        <!-- Tabs sélection chantier -->
        <div class="-mx-4 sm:mx-0 mb-8">
          <div class="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none px-4 sm:px-0"
               style="overflow-x: auto; -webkit-overflow-scrolling: touch;">
            <button
              v-for="(chantier, i) in chantiers" :key="chantier.id"
              @click="activeChantier = i"
              class="flex-none whitespace-nowrap px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300"
              :class="activeChantier === i
                ? 'bg-brand-foret text-white shadow-md'
                : 'bg-brand-clair text-gray-600 hover:bg-brand-foret/10 border border-brand-vif/20'"
            >
              {{ chantier.name }}
            </button>
            <div class="flex-none w-4 sm:hidden" />
          </div>
        </div>

        <!-- Chantier actif -->
        <Transition name="fade-chantier" mode="out-in">
          <div :key="activeChantier">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
              <!-- Infos chantier -->
              <div class="lg:col-span-1 bg-brand-clair rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div class="w-12 h-12 rounded-2xl bg-brand-vif flex items-center justify-center mb-5">
                    <img :src="chantiers[activeChantier].icon" :alt="chantiers[activeChantier].name"
                         class="w-7 h-7 brightness-200" />
                  </div>
                  <div class="text-sm font-semibold uppercase tracking-widest text-brand-vif mb-2">
                    {{ chantiers[activeChantier].category }}
                  </div>
                  <h3 class="font-display text-2xl sm:text-3xl text-brand-foret mb-3">
                    {{ chantiers[activeChantier].name }}
                  </h3>
                  <p class="text-gray-500 text-sm leading-relaxed mb-5">
                    {{ chantiers[activeChantier].desc }}
                  </p>
                  <div class="flex flex-col gap-2">
                    <div class="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin class="w-3.5 h-3.5 text-brand-vif flex-shrink-0" />
                      {{ chantiers[activeChantier].location }}
                    </div>
                  </div>
                </div>

                <!-- Travaux réalisés -->
                <div class="mt-6 pt-6 border-t border-brand-vif/15">
                  <p class="text-sm font-semibold uppercase tracking-widest text-brand-foret mb-3">Travaux réalisés</p>
                  <ul class="flex flex-col gap-2">
                    <li v-for="t in chantiers[activeChantier].travaux" :key="t"
                        class="flex items-start gap-2 text-sm text-gray-600">
                      <div class="w-4 h-4 rounded-full bg-brand-vif flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check class="w-2.5 h-2.5 text-white" />
                      </div>
                      {{ t }}
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Galerie photos du chantier -->
              <div class="lg:col-span-2">
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div
                    v-for="(photo, pi) in chantiers[activeChantier].photos" :key="pi"
                    class="relative rounded-xl overflow-hidden group cursor-pointer"
                    :class="[pi === 0 ? 'col-span-2 sm:col-span-2 row-span-2 aspect-square' : 'aspect-square']"
                    @click="openLightbox(activeChantier, pi)"
                  >
                    <div class="relative rounded-xl overflow-hidden group cursor-pointer"
                        :class="[pi === 0 ? 'col-span-2 sm:col-span-2 row-span-2 aspect-square' : 'aspect-square']"
                        @click="openLightbox(activeChantier, pi)">
                      <img
                        :src="photo.src"
                        :alt="photo.label"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100
                                transition-opacity duration-300 flex items-center justify-center">
                      <ZoomIn class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div class="absolute top-2 left-2 bg-brand-foret/80 text-white text-[10px]
                                font-semibold px-2 py-0.5 rounded-full backdrop-blur-sm">
                      {{ photo.etape }}
                    </div>
                  </div>
                </div>
                <p class="text-gray-400 text-[10px] italic text-center mt-3">
                  Cliquer pour agrandir
                </p>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </section>

    <!-- ─── Filtres + Grille avant/après ─── -->
    <section class="bg-brand-clair py-12 sm:py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div v-motion :initial="{ opacity:0, y:24 }" :visibleOnce="{ opacity:1, y:0, transition:{ duration:600 } }"
             class="mb-8 sm:mb-10">
          <div class="section-label mb-3">Avant & après</div>
          <h2 class="section-title">Toutes nos réalisations</h2>
        </div>

        <!-- Filtres -->
        <div class="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
          <button
            v-for="cat in categories" :key="cat"
            @click="activeFilter = cat"
            class="flex-none whitespace-nowrap px-4 sm:px-5 py-2 rounded-full text-xs sm:text-base font-medium transition-all duration-300"
            :class="activeFilter === cat
              ? 'bg-brand-foret text-white shadow-md'
              : 'bg-white text-gray-600 hover:bg-brand-foret/5 border border-gray-200'"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Grille -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          <div
            v-for="(real, i) in paginatedRealisations" :key="i"
            v-motion :initial="{ opacity:0, y:24 }"
            :visibleOnce="{ opacity:1, y:0, transition:{ delay: (i % 3) * 80, duration:500 } }"
            class="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl
                   transition-all duration-300 border border-gray-100 bg-white"
          >
            <div class="relative aspect-[4/3] overflow-hidden select-none"
                 @mouseenter="real.showAfter = true"
                 @mouseleave="real.showAfter = false"
                 @touchend.prevent="toggleCard(real)">

              <!-- Avant -->
              <img
                :src="real.imgBefore"
                :alt="`Avant — ${real.title} à ${real.location}`"
                class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                :style="real.showAfter ? 'opacity:0' : 'opacity:1'"
              />
              <!-- Après -->
              <img
                :src="real.imgAfter"
                :alt="`Après — ${real.title} à ${real.location}`"
                class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                :style="real.showAfter ? 'opacity:1' : 'opacity:0'"
              />

              <!-- Catégorie -->
              <div class="absolute top-2 sm:top-3 left-2 sm:left-3 bg-brand-foret/80 text-white text-[10px]
                          font-semibold px-2 sm:px-2.5 py-1 rounded-full">
                {{ real.category }}
              </div>

              <!-- Overlay bas -->
              <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <div v-if="!real.showAfter"
                     class="absolute bottom-3 left-3 flex items-center gap-1 bg-black/40 text-white/70 text-xs font-medium
                            px-2 py-0.5 rounded-full backdrop-blur-sm sm:hidden pointer-events-none">
                  Toucher pour voir après
                </div>
                <div class="absolute bottom-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full transition-all duration-300"
                     :class="real.showAfter ? 'bg-brand-vif text-white' : 'bg-white/20 text-white'">
                  {{ real.showAfter ? 'Après' : 'Avant' }}
                </div>
              </div>

              <!-- Hint hover desktop -->
              <div class="absolute top-3 right-3 bg-black/40 text-white/80 text-[10px] px-2.5 py-1
                          rounded-full transition-opacity duration-300
                          opacity-100 group-hover:opacity-0 hidden sm:block pointer-events-none">
                Survoler pour voir après
              </div>
            </div>

            <!-- Infos -->
            <div class="p-4 sm:p-5">
              <h3 class="font-poppins font-semibold text-brand-foret text-base mb-1">{{ real.title }}</h3>
              <div class="flex items-center gap-2 text-gray-400 text-sm mb-2 sm:mb-3 font-poppins">
                <MapPin class="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                {{ real.location }}
              </div>
              <p class="text-gray-500 text-sm leading-relaxed font-poppins line-clamp-2 sm:line-clamp-none">{{ real.desc }}</p>
            </div>
          </div>
        </div>

        <!-- Voir plus -->
        <div v-if="filteredRealisations.length > visibleCount"
             class="mt-10 sm:mt-16 text-center">
          <button @click="visibleCount += 9"
                  class="inline-flex items-center gap-2 px-7 sm:px-14 py-3 rounded-full
                         bg-brand-foret text-white font-semibold text-sm
                         hover:bg-brand-vif transition-all duration-300 shadow-md hover:shadow-brand-vif/30">
            <Plus class="w-4 h-4" />
            Voir plus
            <span class="text-white/60 text-xs">
              ({{ Math.min(filteredRealisations.length - visibleCount, 9) }} de plus)
            </span>
          </button>
        </div>
      </div>
    </section>

    <!-- ─── CTA ─── -->
    <section class="bg-white py-12 sm:py-16">
      <div class="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="section-title px-4 mb-4">Vous avez un projet similaire ?</h2>
        <p class="text-gray-500 text-sm leading-loose mb-6 sm:mb-8">
          Chaque réalisation est le fruit d'une écoute attentive et d'un travail soigné.
          Contactez-moi pour discuter de votre projet.
        </p>
        <a href="/#contact" class="btn-primary">
          <PhoneCall class="w-4 h-4" /> Demander un devis gratuit
        </a>
      </div>
    </section>

    <!-- ─── Lightbox ─── -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div v-if="lightbox.open"
             class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
             @click.self="lightbox.open = false">
          <div class="relative max-w-2xl w-full">
            <!-- Fermer -->
            <button @click="lightbox.open = false"
                    class="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors">
              <X class="w-7 h-7" />
            </button>

            <!-- Image -->
            <div class="rounded-2xl overflow-hidden aspect-[4/3] select-none relative">
              <img
                v-if="lightbox.photo?.src"
                :src="lightbox.photo.src"
                :alt="lightbox.photo.label"
                class="w-full h-full object-cover"
              />
              <div v-else class="w-full h-full flex items-center justify-center bg-gray-800 text-white/30">
                <div class="text-center">
                  <Image class="w-16 h-16 mx-auto mb-2" />
                  <p class="text-base">{{ lightbox.photo?.label }}</p>
                  <p class="text-sm mt-1 opacity-60">{{ lightbox.photo?.etape }}</p>
                </div>
              </div>
              <div v-if="lightbox.photo?.etape"
                   class="absolute top-3 left-3 bg-brand-foret/80 text-white text-xs
                          font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                {{ lightbox.photo.etape }}
              </div>
              <!-- Zones de tap mobile -->
              <button @touchend.prevent="prevPhoto"
                      :disabled="lightbox.photoIndex === 0"
                      class="absolute inset-y-0 left-0 w-1/2 sm:hidden disabled:opacity-0" />
              <button @touchend.prevent="nextPhoto"
                      :disabled="lightbox.photoIndex === chantiers[lightbox.chantierIndex]?.photos.length - 1"
                      class="absolute inset-y-0 right-0 w-1/2 sm:hidden disabled:opacity-0" />
            </div>

            <!-- Navigation -->
            <div class="flex justify-between mt-4">
              <button @click="prevPhoto" :disabled="lightbox.photoIndex === 0"
                      class="flex items-center gap-2 text-white/60 hover:text-white transition-colors disabled:opacity-30">
                <ChevronLeft class="w-5 h-5" /> <span class="hidden sm:inline">Photo précédente</span>
              </button>
              <div class="text-center">
                <span class="text-white/40 text-base">
                  {{ lightbox.photoIndex + 1 }} / {{ chantiers[lightbox.chantierIndex]?.photos.length }}
                </span>
                <p class="text-white/25 text-xs mt-0.5 sm:hidden">← Toucher →</p>
              </div>
              <button @click="nextPhoto"
                      :disabled="lightbox.photoIndex === chantiers[lightbox.chantierIndex]?.photos.length - 1"
                      class="flex items-center gap-2 text-white/60 hover:text-white transition-colors disabled:opacity-30">
                <span class="hidden sm:inline">Photo suivante</span> <ChevronRight class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

  </main>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import {
  CheckCircle, MapPin, PhoneCall, ChevronRight, ChevronLeft, Check,
  Image, ZoomIn, Clock, X, Plus
} from 'lucide-vue-next'

import iconPeinture    from '@/assets/images/peinture.svg'
import iconRevetement  from '@/assets/images/revetement.svg'
import iconRavalement  from '@/assets/images/ravalement.svg'
import iconAmenagement from '@/assets/images/amenagement.svg'

import { usePageMeta } from '@/composables/usePageMeta'

// ─── SEO ───
usePageMeta({
  title:       'Réalisations Avant/Après — Peinture & Rénovation dans les Yvelines | Da Silva Leite',
  description: 'Découvrez les réalisations de Da Silva Leite : photos avant/après de chantiers de peinture, revêtements, ravalement et aménagement dans les Yvelines (78).',
  canonical:   'https://peinturesld.oceaneleite.fr/og-image.png',
  ogImage:     'https://peinturesld.oceaneleite.fr/og-image.png',
})

// ─── Chantiers complets ───
const chantiers = [
  {
    id: 1,
    name: 'Rénovation chambre',
    category: 'Peinture intérieure',
    icon: iconPeinture,
    location: 'Mantes-la-Jolie (78)',
    desc: 'Rénovation complète d’une chambre : préparation des murs, pose de placo et doublage isolant en polystyrène, travaux de menuiserie avec création de tablettes de fenêtres en bois, bandes à joint et réparation de l’armoire. Application d’une peinture velours blanche sur les murs, plafond et fenêtres, avec un mur décoratif en papier peint. Pose d’un lino souple effet bois pour un rendu moderne, chaleureux et facile d’entretien.',
    travaux: ['Rebouchage et ponçage', 'Isolation plaque doublage polyester', 'Pose de placo BA13', 'Travaux de menuiseries', 'Revêtement de sol', 'Couches peinture blanche velours', 'Mur en papier peint décoratif'],
    photos: [
      { label: 'Vue d\'ensemble avant', etape: 'Avant',       src: '/photo/realisations/travaux_complet/avant.jpeg' },
      { label: 'Préparation murs',      etape: 'Préparation',  src: '/photo/realisations/travaux_complet/preparation.png' },
      { label: 'Isolation plaque doublage polyester', etape: 'Isolation', src: '/photo/realisations/travaux_complet/enduit.jpeg' },
      { label: 'Isolation plaque doublage polyester', etape: 'Isolation', src: '/photo/realisations/travaux_complet/couche.jpeg' },
      { label: 'Peinture et papier peint', etape: 'Peinture', src: '/photo/realisations/travaux_complet/apres.jpeg' },
      { label: 'Résultat final',       etape: 'Finition',     src: '/photo/realisations/travaux_complet/finition.jpeg' },
    ]
  },
  {
    id: 2,
    name: 'Aménagement d\'un atelier',
    category: 'Aménagement intérieur',
    icon: iconAmenagement,
    location: 'Saint-Rémy-l\'Honoré (78)',
    desc: 'Aménagement d’un atelier avec pose de parquet, quarts-de-rond et plinthes en bois, peinture des murs, du plafond et des Velux intérieurs. Montage de meubles, travaux de menuiserie et création d’étagères avec finition noir mat afin d’optimiser l’espace de travail et améliorer l’ergonomie.',
    travaux: ['Pose de parquet', 'Peinture', 'Travaux de menuiserie', 'Création d\'étagères', 'Montage de meubles', 'Finitions'],
    photos: [
      { label: 'Atelier avant',         etape: 'Avant',      src: '/photo/realisations/travaux1_complet/avant.png' },
      { label: 'Montage de meubles',    etape: 'Montage',    src: '/photo/realisations/travaux1_complet/montage.jpeg' },
      { label: 'Création d\'étagères',  etape: 'Menuiserie', src: '/photo/realisations/travaux1_complet/menuiserie.jpeg' },
      { label: 'Application peinture',  etape: 'Peinture',   src: '/photo/realisations/travaux1_complet/peinture1.jpeg' },
      { label: 'Application peinture',  etape: 'Peinture',   src: '/photo/realisations/travaux1_complet/peinture.jpeg' },
      { label: 'Résultat final',        etape: 'Après',      src: '/photo/realisations/travaux1_complet/finition.jpeg' },
    ]
  },
]

const activeChantier = ref(0)

// ─── Lightbox ───
const lightbox = ref({ open: false, chantierIndex: 0, photoIndex: 0, photo: null })

function openLightbox(ci, pi) {
  lightbox.value = { open: true, chantierIndex: ci, photoIndex: pi, photo: chantiers[ci].photos[pi] }
}
function prevPhoto() {
  if (lightbox.value.photoIndex > 0) {
    lightbox.value.photoIndex--
    lightbox.value.photo = chantiers[lightbox.value.chantierIndex].photos[lightbox.value.photoIndex]
  }
}
function nextPhoto() {
  const photos = chantiers[lightbox.value.chantierIndex].photos
  if (lightbox.value.photoIndex < photos.length - 1) {
    lightbox.value.photoIndex++
    lightbox.value.photo = photos[lightbox.value.photoIndex]
  }
}

// ─── Toggle carte avant/après (mobile) ───
function toggleCard(real) {
  const wasShowing = real.showAfter
  realisations.value.forEach(r => { r.showAfter = false })
  real.showAfter = !wasShowing
}

const categories = ['Tous', 'Peinture', 'Isolation', 'Revêtement', 'Ravalement', 'Aménagement']

const realisations = ref([
  { title: 'Revêtement escalier',          location: 'Versailles (78)',           category: 'Revêtement',  imgBefore: '/photo/realisations/escalier_avant.jpeg',    imgAfter: '/photo/realisations/escalier_apres.jpeg',    desc: 'Pose de revêtement lino souple effet bois sur un escalier en béton, pour un résultat moderne et chaleureux, facile d\'entretien.',                                                                                                               showAfter: false },
  { title: 'Revêtements muraux',           location: 'Mantes-la-Jolie (78)',      category: 'Revêtement',  imgBefore: '/photo/realisations/mur_avant.jpeg',         imgAfter: '/photo/realisations/mur_apres.jpeg',         desc: 'Pose de revêtements muraux décoratifs pour un intérieur esthétique et moderne.',                                                                                                                                                             showAfter: false },
  { title: 'Ravalement de façade',         location: 'Rambouillet (78)',          category: 'Ravalement',  imgBefore: '/photo/realisations/peinture6_avant.jpeg',   imgAfter: '/photo/realisations/peinture6_apres.jpeg',   desc: 'Ravalement de façade peinture complète sur la façade, les volets et la porte de garage, pour un résultat harmonieux.',                                                                                                                        showAfter: false },
  { title: 'Peinture d\'une salle à manger', location: 'Poissy (78)',             category: 'Peinture',    imgBefore: '/photo/realisations/peinture2_avant.jpeg',   imgAfter: '/photo/realisations/peinture2_apres.jpeg',   desc: 'Peinture intérieure d\'une salle à manger avec une couleur chaleureuse et un style moderne.',                                                                                                                                                showAfter: false },
  { title: 'Isolation d\'intérieur',       location: 'Mantes-la-Jolie (78)',      category: 'Isolation',   imgBefore: '/photo/realisations/renovation7_avant.png',  imgAfter: '/photo/realisations/renovation7_apres.jpeg', desc: 'Isolation intérieure avec pose de placo et de plaques de doublage en polystyrène pour un meilleur confort thermique et acoustique.',                                                                                                        showAfter: false },
  { title: 'Revêtement escalier',          location: 'Mantes-la-Jolie (78)',      category: 'Revêtement',  imgBefore: '/photo/realisations/escalier1_avant.jpeg',   imgAfter: '/photo/realisations/escalier1_apres.jpeg',   desc: 'Pose de revêtement en lino souple sur escalier en béton avec nez de marche antidérapant collé à la néoprène, pour un rendu moderne, chaleureux et facile d\'entretien.',                                                                   showAfter: false },
  { title: 'Ravalement de façade',         location: 'Mantes-la-Jolie (78)',      category: 'Ravalement',  imgBefore: '/photo/realisations/peinture5_avant.jpeg',   imgAfter: '/photo/realisations/peinture5_apres.jpeg',   desc: 'Ravalement de façade avec nettoyage et peinture complète pour un résultat harmonieux et soigné.',                                                                                                                                        showAfter: false },
  { title: 'Peinture et papier peint',     location: 'Germain-en-Laye (78)',      category: 'Peinture',    imgBefore: '/photo/realisations/peinture1_avant.jpeg',   imgAfter: '/photo/realisations/peinture1_apres.jpeg',   desc: 'Peinture intérieure et pose de papier peint décoratif pour un intérieur esthétique et moderne.',                                                                                                                                         showAfter: false },
  { title: 'Aménagement d\'intérieur',     location: 'Mantes-la-Jolie (78)',      category: 'Aménagement', imgBefore: '/photo/realisations/renovation6_avant.jpeg', imgAfter: '/photo/realisations/renovation6_apres.jpeg', desc: 'Isolation : placo, doublage polystyrène, peinture, papier peint et menuiserie (rebords de fenêtre) pour le confort thermique et acoustique.',                                                                                               showAfter: false },
  { title: 'Revêtement sur escalier',      location: 'Buchelay (78)',             category: 'Revêtement',  imgBefore: '/photo/realisations/escaler2_avant.jpeg',    imgAfter: '/photo/realisations/escaler2_apres.jpeg',    desc: 'Pose de revêtement en moquette sur des marches en bois pour un rendu chaleureux et confortable, idéal pour les espaces de vie.',                                                                                                            showAfter: false },
  { title: 'Revêtement en parquet',        location: 'Coignières (78)',           category: 'Revêtement',  imgBefore: '/photo/realisations/sol_avant.png',          imgAfter: '/photo/realisations/sol_apres.jpeg',         desc: 'Installation de parquet stratifié pour apporter une ambiance moderne et chaleureuse, tout en garantissant un entretien facile.',                                                                                                              showAfter: false },
  { title: 'Peinture sur une cheminée',    location: 'Limay (78)',                category: 'Peinture',    imgBefore: '/photo/realisations/peinture_avant.jpeg',    imgAfter: '/photo/realisations/peinture_apres.jpeg',    desc: 'Mise en peinture d\'une cheminée pour un rendu élégant et convivial, tout en assurant une maintenance simple.',                                                                                                                           showAfter: false },
  { title: 'Aménagement de WC suspendu',   location: 'Mantes-la-Jolie (78)',      category: 'Aménagement', imgBefore: '/photo/realisations/toilette_avant.jpeg',    imgAfter: '/photo/realisations/toilette_apres.jpeg',    desc: 'Création de WC suspendu, faïence murale et peinture, avec pose de placo pour dissimuler le tuyau d\'évacuation, pour un résultat soigné et confortable.',                                                                               showAfter: false },
  { title: 'Isolation d\'intérieur',       location: 'Issou (78)',                category: 'Isolation',   imgBefore: '/photo/realisations/renovation1_avant.jpeg', imgAfter: '/photo/realisations/renovation1_apres.jpeg', desc: 'Isolation intérieure par la pose de placo et de plaques de doublage en polystyrène afin d\'optimiser le confort thermique et acoustique.',                                                                                              showAfter: false },
  { title: 'Isolation d\'intérieur',       location: 'Mantes-la-Jolie (78)',      category: 'Isolation',   imgBefore: '/photo/realisations/renovation2_avant.jpeg', imgAfter: '/photo/realisations/renovation2_apres.jpeg', desc: 'Isolation intérieure avec pose de placo et de plaques de doublage en polystyrène, ainsi que de petits travaux de menuiserie, pour améliorer le confort thermique et acoustique.',                                                         showAfter: false },
  { title: 'Ravalement de façade',         location: 'Rambouillet (78)',          category: 'Ravalement',  imgBefore: '/photo/realisations/peinture7_avant.jpeg',   imgAfter: '/photo/realisations/peinture7_apres.jpeg',   desc: 'Ravalement de façade peinture complète sur la façade, les volets et la porte de garage, pour un résultat harmonieux.',                                                                                                                    showAfter: false },
  { title: 'Isolation fenêtre WC',         location: 'Rennemoulin (78)',          category: 'Isolation',   imgBefore: '/photo/realisations/renovation_avant.jpeg',  imgAfter: '/photo/realisations/renovation_apres.jpeg',  desc: 'Isolation des fenêtres du WC pour améliorer le confort thermique et acoustique.',                                                                                                                                                    showAfter: false },
  { title: 'Peinture et papier peint',     location: 'Germain-en-Laye (78)',      category: 'Peinture',    imgBefore: '/photo/realisations/peinture3_avant.jpeg',   imgAfter: '/photo/realisations/peinture3_apres.jpeg',   desc: 'Peinture intérieure et pose de papier peint décoratif pour un intérieur esthétique et moderne.',                                                                                                                                         showAfter: false },
  { title: 'Revêtement escalier',          location: 'Mantes-la-Jolie (78)',      category: 'Revêtement',  imgBefore: '/photo/realisations/escalier4_avant.jpeg',   imgAfter: '/photo/realisations/escalier4_apres.jpeg',   desc: 'Pose de revêtement en lino souple sur escalier en béton avec nez de marche antidérapant collé à la néoprène, pour un rendu moderne, chaleureux et facile d\'entretien.',                                                                   showAfter: false },
  { title: 'Aménagement d\'atelier',       location: 'Saint-Rémy-l\'Honoré (78)', category: 'Aménagement', imgBefore: '/photo/realisations/ammenagement1_avant.png', imgAfter: '/photo/realisations/ammenagement1_apres.jpeg', desc: 'Aménagement d\'un atelier avec pose de parquet, peinture, travaux de menuiserie et création d\'étagères pour optimiser l\'espace de travail.',                                                                                         showAfter: false },
  { title: 'Peinture du WC',               location: 'Voisins-le-Bretonneux (78)', category: 'Peinture',   imgBefore: '/photo/realisations/renovation5_avant.png',  imgAfter: '/photo/realisations/renovation5_apres.png',  desc: 'Peinture intérieure et pose de vinyle souple du WC pour un résultat propre et moderne.',                                                                                                                                               showAfter: false },
  { title: 'Isolation murs et fenêtres',   location: 'Rennemoulin (78)',          category: 'Isolation',   imgBefore: '/photo/realisations/isolation_avant.jpeg',   imgAfter: '/photo/realisations/isolation_apres.jpeg',   desc: 'Nettoyage et isolation des murs et fenêtres pour améliorer le confort thermique et acoustique.',                                                                                                                                        showAfter: false },
  { title: 'Aménagement d\'atelier',       location: 'Saint-Rémy-l\'Honoré (78)', category: 'Aménagement', imgBefore: '/photo/realisations/ammenagement2_avant.jpeg', imgAfter: '/photo/realisations/ammenagement2_apres.jpeg', desc: 'Aménagement d\'un atelier avec pose de parquet, peinture, travaux de menuiserie et création d\'étagères pour optimiser l\'espace de travail.',                                                                                        showAfter: false },
  { title: 'Revêtement d\'escalier',       location: 'Versailles (78)',           category: 'Revêtement',  imgBefore: '/photo/realisations/escalier5_avant.png',    imgAfter: '/photo/realisations/escalier5_apres.jpeg',   desc: 'Pose de revêtement en moquette sur des marches en bois pour un rendu moderne, chaleureux et facile d\'entretien.',                                                                                                                         showAfter: false },
])

const activeFilter = ref('Tous')
const visibleCount  = ref(9)

watch(activeFilter, () => { visibleCount.value = 9 })

const filteredRealisations = computed(() =>
  activeFilter.value === 'Tous'
    ? realisations.value
    : realisations.value.filter(r => r.category === activeFilter.value)
)

const paginatedRealisations = computed(() =>
  filteredRealisations.value.slice(0, visibleCount.value)
)
</script>

<style scoped>
@keyframes spin-slow { to { transform: rotate(360deg); } }
.animate-spin-slow { animation: spin-slow 30s linear infinite; }

.fade-chantier-enter-active,
.fade-chantier-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.fade-chantier-enter-from { opacity: 0; transform: translateY(12px); }
.fade-chantier-leave-to   { opacity: 0; transform: translateY(-8px); }

.lightbox-enter-active,
.lightbox-leave-active { transition: opacity 0.25s ease; }
.lightbox-enter-from,
.lightbox-leave-to { opacity: 0; }

.scrollbar-none { scrollbar-width: none; }
.scrollbar-none::-webkit-scrollbar { display: none; }
</style>