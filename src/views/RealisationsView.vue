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

        <!-- CTA → section contact accueil -->
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
        <div class="flex gap-2 sm:gap-3 mb-8 overflow-x-auto pb-2 scrollbar-none">
          <button
            v-for="(chantier, i) in chantiers" :key="chantier.id"
            @click="activeChantier = i"
            class="flex-shrink-0 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300"
            :class="activeChantier === i
              ? 'bg-brand-foret text-white shadow-md'
              : 'bg-brand-clair text-gray-600 hover:bg-brand-foret/10 border border-brand-vif/20'"
          >
            {{ chantier.name }}
          </button>
        </div>

        <!-- Chantier actif -->
        <Transition name="fade-chantier" mode="out-in">
          <div :key="activeChantier">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
              <!-- Infos chantier -->
              <div class="lg:col-span-1 bg-brand-clair rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <!-- Icône catégorie -->
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
                  <!-- Détails -->
                  <div class="flex flex-col gap-2">
                    <div class="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin class="w-3.5 h-3.5 text-brand-vif flex-shrink-0" />
                      {{ chantiers[activeChantier].location }}
                    </div>
                    <div class="flex items-center gap-2 text-sm text-gray-500">
                      <Clock class="w-3.5 h-3.5 text-brand-vif flex-shrink-0" />
                      {{ chantiers[activeChantier].duree }}
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
                    :class="[
                      pi === 0 ? 'col-span-2 sm:col-span-2 row-span-2 aspect-square' : 'aspect-square',
                    ]"
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

                    <!-- Overlay hover -->
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100
                                transition-opacity duration-300 flex items-center justify-center">
                      <ZoomIn class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>

                    <!-- Badge étape -->
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
            class="px-4 sm:px-5 py-2 rounded-full text-xs sm:text-base font-medium transition-all duration-300"
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
            v-for="(real, i) in filteredRealisations" :key="i"
            v-motion :initial="{ opacity:0, y:24 }"
            :visibleOnce="{ opacity:1, y:0, transition:{ delay: (i % 3) * 80, duration:500 } }"
            class="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl
                   transition-all duration-300 border border-gray-100 bg-white"
          >
            <div class="relative aspect-[4/3] overflow-hidden select-none"
                 @touchstart="onCardTouchStart($event)"
                 @touchend="onCardTouchEnd($event, real)">
              <!-- Hint swipe mobile -->
              <div class="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 pointer-events-none
                          flex items-center gap-1 bg-black/40 text-white/70 text-xs font-medium
                          px-2 py-0.5 rounded-full backdrop-blur-sm sm:hidden">
                <ChevronLeft class="w-2.5 h-2.5" /> Glisser <ChevronRight class="w-2.5 h-2.5" />
              </div>
              
              <!-- Avant -->
                <img
                  :src="real.imgBefore"
                  alt="Avant"
                  class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                  :style="real.showAfter ? 'opacity:0' : 'opacity:1'"
                />
                <!-- Après -->
                <img
                  :src="real.imgAfter"
                  alt="Après"
                  class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                  :style="real.showAfter ? 'opacity:1' : 'opacity:0'"
                />

              <!-- Toggle -->
              <div class="absolute top-2 sm:top-3 right-2 sm:right-3 flex gap-1.5">
                <button @click="real.showAfter = false"
                  class="px-2.5 sm:px-3 py-1 rounded-full text-[10px] font-bold transition-all duration-200"
                  :class="!real.showAfter ? 'bg-white text-brand-foret shadow' : 'bg-black/30 text-white'">Avant</button>
                <button @click="real.showAfter = true"
                  class="px-2.5 sm:px-3 py-1 rounded-full text-[10px] font-bold transition-all duration-200"
                  :class="real.showAfter ? 'bg-brand-vif text-white shadow' : 'bg-black/30 text-white'">Après</button>
              </div>

              <!-- Catégorie -->
              <div class="absolute top-2 sm:top-3 left-2 sm:left-3 bg-brand-foret/80 text-white text-[10px]
                          font-semibold px-2 sm:px-2.5 py-1 rounded-full">
                {{ real.category }}
              </div>
            </div>

            <!-- Infos -->
            <div class="p-4 sm:p-5">
              <h3 class="font-poppins font-semibold text-brand-foret text-base sm:text-base mb-1">{{ real.title }}</h3>
              <div class="flex items-center gap-2 text-gray-400 text-sm mb-2 sm:mb-3 font-poppins">
                <MapPin class="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                {{ real.location }}
              </div>
              <p class="text-gray-500 text-sm leading-relaxed font-poppins line-clamp-2 sm:line-clamp-none">{{ real.desc }}</p>
            </div>
          </div>
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

            <!-- Image (swipeable sur mobile) -->
            <div class="rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center select-none"
                 :class="lightbox.photo?.bg"
                 @touchstart="onLightboxTouchStart($event)"
                 @touchend="onLightboxTouchEnd($event)">
              <div class="text-center text-white/30">
                <Image class="w-16 h-16 mx-auto mb-2" />
                <p class="text-base">{{ lightbox.photo?.label }}</p>
                <p class="text-sm mt-1 opacity-60">{{ lightbox.photo?.etape }}</p>
              </div>
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
                <p class="text-white/25 text-xs mt-0.5 sm:hidden">← Glisser →</p>
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
import { ref, computed } from 'vue'
import {
  CheckCircle, MapPin, PhoneCall, ChevronRight, ChevronLeft, Check,
  PaintBucket, Grid2X2, Building2, Sparkles, Image, ZoomIn, Clock, X
} from 'lucide-vue-next'

import iconPeinture    from '@/assets/images/peinture.svg'
import iconRevetement  from '@/assets/images/revetement.svg'
import iconRavalement  from '@/assets/images/ravalement.svg'
import iconAmenagement from '@/assets/images/amenagement.svg'

// ─── Chantiers complets ───
const chantiers = [
  {
    id: 1,
    name: 'Rénovation salon',
    category: 'Peinture intérieure',
    icon: iconPeinture,
    location: 'Mantes-la-Jolie (78)',
    duree: '3 jours de chantier',
    desc: 'Rénovation complète d\'un salon de 35m² : préparation des murs, enduit de lissage, 2 couches de peinture finition blanc satiné et mise en valeur d\'un mur accent couleur.',
    travaux: ['Rebouchage et ponçage', 'Application enduit de lissage', 'Impression fond blanc', '2 couches peinture satin', 'Mur accent couleur profonde'],
    photos: [
      { label: 'Vue d\'ensemble avant', etape: 'Avant',       src: '/photo/realisations/travaux_complet/avant.jpeg' },
      { label: 'Préparation murs',      etape: 'Préparation',  src: '/photo/realisations/travaux_complet/preparation.png' },
      { label: 'Enduit de lissage',     etape: 'Enduit',       src: '/photo/realisations/travaux_complet/enduit.jpeg' },
      { label: 'Première couche',       etape: '1ère couche',  src: '/photo/realisations/travaux_complet/couche.jpeg' },
      { label: 'Résultat final',        etape: 'Après',        src: '/photo/realisations/travaux_complet/apres.jpeg' },
      { label: 'Détail finition',       etape: 'Finition',     src: '/photo/realisations/travaux_complet/apres.png' },
    ]
  },
  {
    id: 2,
    name: 'Ravalement façade',
    category: 'Ravalement',
    icon: iconRavalement,
    location: 'Poissy (78)',
    duree: '1 semaine de chantier',
    desc: 'Ravalement complet d\'une maison individuelle : nettoyage haute pression, traitement des fissures, application d\'un enduit monocouche taloché et finition peinture façade.',
    travaux: ['Nettoyage haute pression', 'Traitement fissures', 'Application enduit', 'Peinture façade 2 couches', 'Finitions autour menuiseries'],
    photos: [
      { label: 'Façade avant',           etape: 'Avant',       bg: 'bg-gray-500' },
      { label: 'Nettoyage HP',           etape: 'Nettoyage',   bg: 'bg-slate-500' },
      { label: 'Reprise fissures',       etape: 'Réparation',  bg: 'bg-stone-500' },
      { label: 'Application enduit',     etape: 'Enduit',      bg: 'bg-green-900' },
      { label: '1ère couche peinture',   etape: '1ère couche', bg: 'bg-green-800' },
      { label: 'Résultat final',         etape: 'Après',       bg: 'bg-green-700' },
    ]
  },
]

const activeChantier = ref(0)

// ─── Lightbox ───
const lightbox = ref({ open: false, chantierIndex: 0, photoIndex: 0, photo: null })

function openLightbox(ci, pi) {
  lightbox.value = {
    open: true,
    chantierIndex: ci,
    photoIndex: pi,
    photo: chantiers[ci].photos[pi]
  }
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

// ─── Touch / Swipe ───
const touchStartX = ref(0)

// Lightbox swipe
function onLightboxTouchStart(e) {
  touchStartX.value = e.changedTouches[0].clientX
}
function onLightboxTouchEnd(e) {
  const delta = e.changedTouches[0].clientX - touchStartX.value
  if (Math.abs(delta) < 40) return
  if (delta < 0) nextPhoto()
  else prevPhoto()
}

// Cartes Avant/Après swipe
const cardTouchStartX = ref(0)
function onCardTouchStart(e) {
  cardTouchStartX.value = e.changedTouches[0].clientX
}
function onCardTouchEnd(e, real) {
  const delta = e.changedTouches[0].clientX - cardTouchStartX.value
  if (Math.abs(delta) < 40) return
  real.showAfter = delta < 0
}


const categories   = ['Tous', 'Peinture', 'Isolation', 'Revêtement', 'Ravalement', 'Aménagement']
const activeFilter = ref('Tous')

const realisations = ref([
  
{ 
  title: 'Revêtement escalier',
  location: 'Versailles (78)',
  category: 'Revêtement',
  imgBefore: '/photo/realisations/escalier_avant.jpeg',
  imgAfter:  '/photo/realisations/escalier_apres.jpeg',
  desc: 'Pose de revêtement lino souple effet bois sur un escalier en béton, pour un résultat moderne et chaleureux, facile d\'entretien.',
  showAfter: false
},
{ 
  title: 'Revêtemens muraux',
  location: 'Mantes-la-Jolie (78)',
  category: 'Revêtement',
  imgBefore: '/photo/realisations/mur_avant.jpeg',
  imgAfter:  '/photo/realisations/mur_apres.jpeg',
  desc: 'Pose de revêtements muraux décoratifs pour un intérieur esthétique et moderne.',
  showAfter: false
},
{ 
  title: 'Ravalement de façade',
  location: 'Rambouillet (78)',
  category: 'Ravalement',
  imgBefore: '/photo/realisations/peinture6_avant.jpeg',
  imgAfter:  '/photo/realisations/peinture6_apres.jpeg',
  desc: 'Ravalement de façade peinture complete sur la façade, les volets et la porte de garage, pour un résultat harmonieux.',
  showAfter: false
},
{ 
  title: 'Peinture d\'une salle à manger',
  location: 'Poissy (78)',
  category: 'Peinture',
  imgBefore: '/photo/realisations/peinture2_avant.jpeg',
  imgAfter:  '/photo/realisations/peinture2_apres.jpeg',
  desc: 'Peinture intérieure d\'une salle à manger avec une couleur chaleureuse et un style moderne.',
  showAfter: false
},
{ 
  title: 'Isolation d\'intérieur',
  location: 'Les Mureaux (78)',
  category: 'Isolation',
  imgBefore: '/photo/realisations/renovation7_avant.png',
  imgAfter:  '/photo/realisations/renovation7_apres.jpeg',
  desc: 'Isolation intérieure avec pose de placo et de plaques de doublage en polystyrène pour un meilleur confort thermique et acoustique.',
  showAfter: false
},
{ 
  title: 'Revêtement escalier',
  location: 'Mantes-la-Jolie (78)',
  category: 'Revêtement',
  imgBefore: '/photo/realisations/escalier1_avant.jpeg',
  imgAfter:  '/photo/realisations/escalier1_apres.jpeg',
  desc: 'Pose de revêtement en lino souple sur escalier en béton avec nez de marche antidérapant collé à la néoprène, pour un rendu moderne, chaleureux et facile d’entretien.',
  showAfter: false
},
{ 
  title: 'Ravalement de façade',
  location: 'Mantes-la-Jolie (78)',
  category: 'Ravalement',
  imgBefore: '/photo/realisations/peinture5_avant.jpeg',
  imgAfter:  '/photo/realisations/peinture5_apres.jpeg',
  desc: 'Ravalement de façade avec nettoyage et peinture complète pour un résultat harmonieux et soigné.',
  showAfter: false
},
{ 
  title: 'Peinture et papier peint',
  location: 'Germain-en-Laye (78)',
  category: 'Peinture',
  imgBefore: '/photo/realisations/peinture1_avant.jpeg',
  imgAfter:  '/photo/realisations/peinture1_apres.jpeg',
  desc: 'Peinture intérieure et pose de papier peint décoratif pour un intérieur esthétique et moderne.',
  showAfter: false
},
{ 
  title: 'Aménagement d\'intérieur',
  location: 'Versailles (78)',
  category: 'Aménagement',
  imgBefore: '/photo/realisations/renovation6_avant.jpeg',
  imgAfter:  '/photo/realisations/renovation6_apres.jpeg',
  desc: 'Isolation : placo, doublage polystyrène, peinture, papier peint et menuiserie (rebords de fenêtre) pour le confort thermique et acoustique.',
  showAfter: false
},
{ 
  title: 'Revêtement sur escalier',
  location: 'Buchelay (78)',
  category: 'Revêtement',
  imgBefore: '/photo/realisations/escaler2_avant.jpeg',
  imgAfter:  '/photo/realisations/escaler2_apres.jpeg',
  desc: 'Pose de revêtement en moquette sur des marche en bois pour un rendu chaleureux et confortable, idéal pour les espaces de vie.',
  showAfter: false
},
{ 
  title: 'Revêtement en parquet',
  location: 'Coignières (78)',
  category: 'Revêtement',
  imgBefore: '/photo/realisations/sol_avant.png',
  imgAfter:  '/photo/realisations/sol_apres.jpeg',
  desc: 'Installation de parquet stratifié pour apporter une ambiance moderne et chaleureuse, tout en garantissant un entretien facile.',
  showAfter: false
},
{ 
  title: 'Peinture sur une cheminée',
  location: 'Limay (78)',
  category: 'Peinture',
  imgBefore: '/photo/realisations/peinture_avant.jpeg',
  imgAfter:  '/photo/realisations/peinture_apres.jpeg',
  desc: 'Mise en peinture d’une cheminée pour un rendu élégant et convivial, tout en assurant une maintenance simple.',
  showAfter: false
},
{ 
  title: 'Aménagement de WC suspendu',
  location: 'Mantes-la-Jolie (78)',
  category: 'Aménagement',
  imgBefore: '/photo/realisations/toilette_avant.jpeg',
  imgAfter:  '/photo/realisations/toilette_apres.jpeg',
  desc: 'Création de WC suspendu, faïence murale et peinture, avec pose de placo pour dissimuler le tuyau d’évacuation, pour un résultat soigné et confortable.',
  showAfter: false
},
{ 
  title: 'Isolation d\'intérieur',
  location: 'Issou (78)',
  category: 'Isolation',
  imgBefore: '/photo/realisations/renovation1_avant.jpeg',
  imgAfter:  '/photo/realisations/renovation1_apres.jpeg',
  desc: 'Isolation intérieure par la pose de placo et de plaques de doublage en polystyrène afin d’optimiser le confort thermique et acoustique.',
  showAfter: false
},
{ 
  title: 'Isolation d\'intérieur',
  location: 'Longnes (78)',
  category: 'Isolation',
  imgBefore: '/photo/realisations/renovation2_avant.jpeg',
  imgAfter:  '/photo/realisations/renovation2_apres.jpeg',
  desc: 'Isolation intérieure avec pose de placo et de plaques de doublage en polystyrène, ainsi que de petits travaux de menuiserie, pour améliorer le confort thermique et acoustique.',
  showAfter: false
},
{ 
  title: 'Ravalement de façade',
  location: 'Rambouillet (78)',
  category: 'Ravalement',
  imgBefore: '/photo/realisations/peinture7_avant.jpeg',
  imgAfter:  '/photo/realisations/peinture7_apres.jpeg',
  desc: 'Ravalement de façade peinture complete sur la façade, les volets et la porte de garage, pour un résultat harmonieux.',
  showAfter: false
},
{ 
  title: 'Isolation fenêtre WC',
  location: 'Rennemoulin (78)',
  category: 'Isolation',
  imgBefore: '/photo/realisations/renovation_avant.jpeg',
  imgAfter:  '/photo/realisations/renovation_apres.jpeg',
  desc: 'Isolation des fenêtres du WC pour améliorer le confort thermique et acoustique.',
  showAfter: false
},
{ 
  title: 'Peinture et papier peint',
  location: 'Germain-en-Laye (78)',
  category: 'Peinture',
  imgBefore: '/photo/realisations/peinture3_avant.jpeg',
  imgAfter:  '/photo/realisations/peinture3_apres.jpeg',
  desc: 'Peinture intérieure et pose de papier peint décoratif pour un intérieur esthétique et moderne.',
  showAfter: false
},
{ 
  title: 'Revêtement escalier',
  location: 'Mantes-la-Jolie (78)',
  category: 'Revêtement',
  imgBefore: '/photo/realisations/escalier4_avant.jpeg',
  imgAfter:  '/photo/realisations/escalier4_apres.jpeg',
  desc: 'Pose de revêtement en lino souple sur escalier en béton avec nez de marche antidérapant collé à la néoprène, pour un rendu moderne, chaleureux et facile d’entretien.',
  showAfter: false
},
{ 
  title: 'Aménagement d\'atelier',
  location: 'Saint-Rémy-l\'Honoré (78)',
  category: 'Aménagement',
  imgBefore: '/photo/realisations/ammenagement1_avant.png',
  imgAfter:  '/photo/realisations/ammenagement1_apres.jpeg',
  desc: 'Aménagement d\'un atelier avec pose de parquet, peinture, traveaux de menuiserie création d\'étagères pour optimiser l\'espace de travail et améliorer l\'ergonomie.',
  showAfter: false
},
{ 
  title: 'Peinture du WC',
  location: 'Voisins-le-Bretonneux (78)',
  category: 'Peinture',
  imgBefore: '/photo/realisations/renovation5_avant.png',
  imgAfter:  '/photo/realisations/renovation5_apres.png',
  desc: 'Peinture intérieure et pose de vinyle souple du WC pour un résultat propre et moderne.',
  showAfter: false
},
{ 
  title: 'Isolation murs et fenêtres',
  location: 'Rennemoulin (78)',
  category: 'Isolation',
  imgBefore: '/photo/realisations/isolation_avant.jpeg',
  imgAfter:  '/photo/realisations/isolation_apres.jpeg',
  desc: 'Nettoyage et isolation des murs et fenêtres pour améliorer le confort thermique et acoustique.',
  showAfter: false
},
{ 
  title: 'Aménagement d\'atelier',
  location: 'Saint-Rémy-l\'Honoré (78)',
  category: 'Aménagement',
  imgBefore: '/photo/realisations/ammenagement2_avant.jpeg',
  imgAfter:  '/photo/realisations/ammenagement2_apres.jpeg',
  desc: 'Aménagement d\'un atelier avec pose de parquet, peinture, traveaux de menuiserie création d\'étagères pour optimiser l\'espace de travail et améliorer l\'ergonomie.',
  showAfter: false
},
])

const filteredRealisations = computed(() =>
  activeFilter.value === 'Tous'
    ? realisations.value
    : realisations.value.filter(r => r.category === activeFilter.value)
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