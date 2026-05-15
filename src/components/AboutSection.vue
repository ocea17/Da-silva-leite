<template>
  <section id="about" class="py-16 sm:py-24">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

        <!-- Visual -->
        <!-- ✅ x:-40 retiré — opacity uniquement pour éviter le CLS -->
        <div
          v-motion :initial="{ opacity:0 }"
          :visibleOnce="{ opacity:1, transition:{ duration:700 } }"
          class="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <!-- Photo principale — Salomon -->
          <div class="w-full aspect-[4/3] rounded-2xl overflow-hidden group">
            <picture>
              <!-- ✅ Source WebP correcte pour salomon -->
              <source srcset="/photo/about/salomon.webp" type="image/webp" />
              <img
                src="/photo/about/salomon.jpeg"
                alt="Salomon Leite, artisan peintre"
                width="896"
                height="672"
                loading="lazy"
                decoding="async"
                class="w-full h-full object-cover object-[center_16%] transition-transform duration-700 group-hover:scale-105"
              />
            </picture>
          </div>

          <!-- Photo accent — Camion -->
          <div class="hidden sm:block absolute -bottom-5 -right-5 lg:-bottom-6 lg:-right-6
            w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-2xl
            border-4 border-white shadow-xl overflow-hidden group">
            <picture>
              <source srcset="/photo/about/camion.webp" type="image/webp" />
              <img
                src="/photo/about/camion.png"
                alt="Camion de l'entreprise Da Silva Leite"
                width="534"
                height="400"
                loading="lazy"
                decoding="async"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </picture>
          </div>

          <!-- Badge flottant -->
          <div class="absolute -top-5 left-2 sm:-top-4 sm:-left-4
            bg-brand-vif text-white rounded-2xl p-4 sm:p-5
            shadow-xl shadow-brand-vif/40 animate-float">
            <div class="font-display text-3xl sm:text-4xl leading-none">2007</div>
            <div class="text-[10px] sm:text-xs font-light mt-1">Année de création</div>
          </div>
        </div>

        <!-- Texte -->
        <div
          v-motion :initial="{ opacity:0 }"
          :visibleOnce="{ opacity:1, transition:{ delay:200, duration:700 } }"
          class="mt-8 sm:mt-10 md:mt-0"
        >
          <div class="section-label mb-4">À propos</div>
          <h2 class="section-title mb-5 sm:mb-6">
            Salomon Leite,<br/>
            artisan peintre<br/>
            indépendant
          </h2>
          <p class="text-gray-500 text-sm leading-loose mb-6 sm:mb-8">
            Basé dans les Yvelines et ses environs, j'interviens depuis 2007 auprès de particuliers en
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
import { PhoneCall } from 'lucide-vue-next'

const values = [
  { text: 'Écoute et disponibilité' },
  { text: 'Soin du détail' },
  { text: 'Devis gratuit' },
  { text: 'Relation de confiance' },
]
</script>