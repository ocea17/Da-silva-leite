<template>
  <section id="about" class="py-16 sm:py-24">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <!-- Visual -->
        <div
          v-motion :initial="{ opacity:0, x:-40 }"
          :visibleOnce="{ opacity:1, x:0, transition:{ duration:700 } }"
          class="relative mx-auto w-full max-w-md lg:max-w-none"
        >
        <!-- Photo principale -->
        <div class="w-full aspect-[4/3] rounded-2xl overflow-hidden group">
          <img
            src="/photo/about/salomon.jpeg"
            alt="Chantier de peinture Da Silva Leite"
            class="w-full h-full object-cover object-[center_16%] transition-transform duration-700 group-hover:scale-105"
          />
        </div>

          <!-- Photo accent -->
          <div class="hidden sm:block absolute -bottom-5 -right-5 lg:-bottom-6 lg:-right-6
            w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-2xl
            border-4 border-white shadow-xl overflow-hidden group">
            <img
              src="/photo/about/camion.png"
              alt="Camion de l'entreprise Da Silva Leite"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <!-- Badge flottant -->
          <div class="absolute -top-5 left-2 sm:-top-4 sm:-left-4
            bg-brand-vif text-white rounded-2xl p-4 sm:p-5
            shadow-xl shadow-brand-vif/40 animate-float">
            <div class="font-display text-3xl sm:text-4xl leading-none">2007</div>
            <div class="text-[10px] sm:text-xs font-light mt-1 ">Année de création</div>
          </div>
        </div>

        <!-- Texte -->
        <div
          v-motion :initial="{ opacity:0, y:30 }"
          :visibleOnce="{ opacity:1, y:0, transition:{ delay:200, duration:700 } }"
          class="mt-8 sm:mt-10 lg:mt-0"
        >
          <div class="section-label mb-4">À propos</div>
          <h2 class="section-title mb-5 sm:mb-6">
            Salomon Leite,<br/>
            artisan peintre<br/>
            indépendant
          </h2>
          <p class="text-gray-500 text-sm leading-loose mb-6 sm:mb-8">
            Basé dans les Yvelines et ses environs, j’interviens depuis 2007 auprès de particuliers en 
            Île-de-France pour des travaux de peinture, rénovation et menuiserie. Mon engagement : un travail 
            soigné, une relation de confiance et un résultat à la hauteur de vos attentes.
          </p>

          <!-- Valeurs -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
            <div v-for="val in values" :key="val.text" class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-brand-vif flex-shrink-0 mt-2" />
              <span class="text-sm font-medium text-gray-700">{{ val.text }}</span>
            </div>
          </div>

          <a href="#contact" class="btn-primary">
            <PhoneCall class="w-4 h-4" />
            Demander un devis
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Building2, CheckCircle, PhoneCall } from 'lucide-vue-next'

const values = [
  { text: 'Écoute et disponibilité' },
  { text: 'Soin du détail' },
  { text: 'Devis gratuit' },
  { text: 'Relation de confiance' },
]
</script>