<template>
  <section id="about" class="py-24">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        <!-- Visual -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -40 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 700 } }"
          class="relative"
        >
          <!-- Photo principale (placeholder) -->
          <div class="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-brand-foret to-green-800
                      flex items-center justify-center">
            <div class="text-white/20 text-center">
              <Building2 class="w-20 h-20 mx-auto mb-3" />
              <p class="text-sm">Photo de chantier</p>
            </div>
          </div>

          <!-- Photo accent -->
          <div class="absolute -bottom-6 -right-6 w-44 h-44 rounded-2xl border-4 border-white
                      bg-gradient-to-br from-brand-moyen to-brand-foret
                      flex items-center justify-center shadow-xl">
            <CheckCircle class="w-10 h-10 text-white/30" />
          </div>

          <!-- Badge flottant -->
          <div class="absolute -top-4 -left-4 bg-brand-vif text-white rounded-2xl p-5 shadow-xl shadow-brand-vif/40">
            <div class="font-display text-4xl leading-none">2007</div>
            <div class="text-xs font-light mt-1 opacity-90">Année de création</div>
          </div>
        </div>

        <!-- Texte -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200, duration: 700 } }"
        >
          <div class="section-label mb-4">À propos</div>
          <h2 class="section-title mb-6">
            Salomon Leite,<br/>
            artisan peintre<br/>
            indépendant
          </h2>
          <p class="text-gray-500 text-sm leading-loose mb-8">
            Basé à Rosny-sur-Seine dans les Yvelines, j'interviens depuis 2007 chez des
            particuliers en Île-de-France pour des travaux de peinture, rénovation et
            décoration. Ce qui me tient à cœur : un travail soigné, une relation de
            confiance et un résultat dont vous serez fier.
          </p>

          <!-- Valeurs -->
          <div class="grid grid-cols-2 gap-4 mb-10">
            <div
              v-for="val in values"
              :key="val.text"
              class="flex items-start gap-3"
            >
              <div class="w-2 h-2 rounded-full bg-brand-vif flex-shrink-0 mt-1.5" />
              <span class="text-sm font-medium text-gray-700">{{ val.text }}</span>
            </div>
          </div>

          <a href="#contact" class="btn-primary">
            <PhoneCall class="w-4 h-4" />
            Demander un devis gratuit
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
  { text: 'Devis transparent' },
  { text: 'Respect des délais' },
]
</script>
