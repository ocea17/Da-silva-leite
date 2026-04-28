<template>
  <main>

    <!-- ─── Hero ─── -->
    <section class="relative bg-brand-foret pt-36 pb-20 overflow-hidden">
      <div class="absolute inset-0 opacity-10"
           style="background:radial-gradient(ellipse at top right, #6DC319 0%, transparent 60%)" />
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-[-15%] right-[-8%] w-[55vw] h-[120vh]
                    rounded-[40%_0_0_55%] bg-brand-vif/8" />
      </div>

      <div class="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <!-- Breadcrumb -->
        <div
          v-motion :initial="{ opacity:0, y:10 }"
          :enter="{ opacity:1, y:0, transition:{ duration:500 } }"
          class="flex items-center justify-center gap-2 text-white/40 text-xs mb-8"
        >
          <RouterLink to="/" class="hover:text-brand-vif transition-colors">Accueil</RouterLink>
          <ChevronRight class="w-3 h-3" />
          <span class="text-brand-vif">Réalisations</span>
        </div>

        <!-- Badge -->
        <div
          v-motion :initial="{ opacity:0, y:20 }"
          :enter="{ opacity:1, y:0, transition:{ delay:100, duration:600 } }"
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6
                 bg-brand-vif/18 border border-brand-vif/40
                 text-brand-vif text-xs font-semibold tracking-widest uppercase"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-brand-vif" />
          Portfolio
        </div>

        <!-- Titre -->
        <h1
          v-motion :initial="{ opacity:0, y:28 }"
          :enter="{ opacity:1, y:0, transition:{ delay:200, duration:700 } }"
          class="font-display text-5xl lg:text-6xl text-white leading-tight mb-5"
        >
          Nos réalisations<br/>
          <span class="text-brand-vif">Avant &amp; après</span>
        </h1>

        <!-- Sous-titre -->
        <p
          v-motion :initial="{ opacity:0 }"
          :enter="{ opacity:1, transition:{ delay:400, duration:600 } }"
          class="text-white/60 text-base leading-loose max-w-xl mx-auto mb-10"
        >
          Le meilleur argument, c'est le résultat. Retrouvez nos chantiers réalisés dans les Yvelines et en Île-de-France.
        </p>

        <!-- CTA -->
        <div
          v-motion :initial="{ opacity:0, y:12 }"
          :enter="{ opacity:1, y:0, transition:{ delay:550, duration:600 } }"
        >
          <a href="/#contact" class="btn-primary">
            <CheckCircle class="w-4 h-4" /> Demander un devis gratuit
          </a>
        </div>
      </div>
    </section>

    <!-- ─── Filtres ─── -->
    <section class="bg-brand-clair py-8 sticky top-16 z-30 border-b border-brand-vif/10">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex flex-wrap gap-3">
          <button
            v-for="cat in categories" :key="cat"
            @click="activeFilter = cat"
            class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
            :class="activeFilter === cat
              ? 'bg-brand-foret text-white shadow-md'
              : 'bg-white text-gray-600 hover:bg-brand-foret/5 border border-gray-200'"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- ─── Grille réalisations ─── -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(real, i) in filteredRealisations" :key="i"
            v-motion :initial="{ opacity:0, y:24 }"
            :visibleOnce="{ opacity:1, y:0, transition:{ delay: (i % 3) * 80, duration:500 } }"
            class="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl
                   transition-all duration-300 border border-gray-100"
          >
            <!-- Avant / Après -->
            <div class="relative aspect-[4/3] overflow-hidden">
              <!-- Avant -->
              <div class="absolute inset-0 transition-opacity duration-500 flex items-center justify-center"
                   :class="real.bgBefore"
                   :style="real.showAfter ? 'opacity:0' : 'opacity:1'">
                <div class="text-center text-white/25">
                  <component :is="real.icon" class="w-14 h-14 mx-auto mb-2" />
                  <p class="text-xs uppercase tracking-widest font-poppins">Photo avant</p>
                  <p class="text-[10px] mt-1 opacity-60 font-poppins">À intégrer</p>
                </div>
              </div>
              <!-- Après -->
              <div class="absolute inset-0 transition-opacity duration-500 flex items-center justify-center"
                   :class="real.bgAfter"
                   :style="real.showAfter ? 'opacity:1' : 'opacity:0'">
                <div class="text-center text-white/30">
                  <CheckCircle class="w-14 h-14 mx-auto mb-2" />
                  <p class="text-xs uppercase tracking-widest font-poppins">Photo après</p>
                  <p class="text-[10px] mt-1 opacity-60 font-poppins">À intégrer</p>
                </div>
              </div>

              <!-- Boutons toggle -->
              <div class="absolute top-3 right-3 flex gap-1.5">
                <button
                  @click="real.showAfter = false"
                  class="px-3 py-1 rounded-full text-[10px] font-bold font-poppins transition-all duration-200"
                  :class="!real.showAfter ? 'bg-white text-brand-foret shadow' : 'bg-black/30 text-white'"
                >Avant</button>
                <button
                  @click="real.showAfter = true"
                  class="px-3 py-1 rounded-full text-[10px] font-bold font-poppins transition-all duration-200"
                  :class="real.showAfter ? 'bg-brand-vif text-white shadow' : 'bg-black/30 text-white'"
                >Après</button>
              </div>

              <!-- Catégorie -->
              <div class="absolute top-3 left-3 bg-brand-foret/80 text-white text-[10px]
                          font-semibold font-poppins px-2.5 py-1 rounded-full backdrop-blur-sm">
                {{ real.category }}
              </div>
            </div>

            <!-- Infos — titre en Poppins -->
            <div class="p-5">
              <h3 class="font-poppins font-semibold text-brand-foret text-base mb-1">
                {{ real.title }}
              </h3>
              <div class="flex items-center gap-2 text-gray-400 text-xs mb-3 font-poppins">
                <MapPin class="w-3.5 h-3.5 flex-shrink-0" />
                {{ real.location }}
              </div>
              <p class="text-gray-500 text-xs leading-relaxed font-poppins">{{ real.desc }}</p>
            </div>
          </div>
        </div>

        <p class="text-center text-gray-300 text-xs mt-12 italic font-poppins">
          Les photos de vos chantiers seront intégrées ici — placeholders temporaires
        </p>
      </div>
    </section>

    <!-- ─── CTA ─── -->
    <section class="bg-brand-clair py-16">
      <div class="max-w-2xl mx-auto px-6 text-center">
        <h2 class="section-title mb-4">Vous avez un projet similaire ?</h2>
        <p class="text-gray-500 text-sm leading-loose mb-8">
          Chaque réalisation est le fruit d'une écoute attentive et d'un travail soigné. Contactez-moi pour discuter de votre projet.
        </p>
        <a href="/#contact" class="btn-primary">
          <PhoneCall class="w-4 h-4" /> Demander un devis gratuit
        </a>
      </div>
    </section>

  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { CheckCircle, MapPin, PhoneCall, ChevronRight, PaintBucket, Grid2X2, Building2, Sparkles } from 'lucide-vue-next'

const categories   = ['Tous', 'Peinture intérieure', 'Peinture extérieure', 'Revêtement', 'Ravalement', 'Aménagement']
const activeFilter = ref('Tous')

const realisations = ref([
  { title: 'Rénovation salon',    location: 'Mantes-la-Jolie (78)',  category: 'Peinture intérieure', icon: PaintBucket, bgBefore: 'bg-gray-500',    bgAfter: 'bg-brand-foret',  desc: 'Préparation des murs, enduit, 2 couches peinture finition blanc satiné.',          showAfter: false },
  { title: 'Ravalement façade',   location: 'Versailles (78)',        category: 'Ravalement',          icon: Building2,   bgBefore: 'bg-stone-500',   bgAfter: 'bg-green-700',    desc: 'Nettoyage haute pression, traitement des fissures, enduit et peinture minérale.', showAfter: false },
  { title: 'Salle de bain',       location: 'Rosny-sur-Seine (78)',   category: 'Revêtement',          icon: Grid2X2,     bgBefore: 'bg-zinc-500',    bgAfter: 'bg-teal-700',     desc: 'Dépose ancien carrelage, ragréage sol, pose faïence murale et carrelage sol.',    showAfter: false },
  { title: 'Couloir & entrée',    location: 'Les Mureaux (78)',       category: 'Aménagement',         icon: Sparkles,    bgBefore: 'bg-neutral-500', bgAfter: 'bg-emerald-700',  desc: 'Enduit à la chaux, stuc décoratif, mise en valeur de l\'espace d\'entrée.',      showAfter: false },
  { title: 'Façade maison',       location: 'Poissy (78)',            category: 'Peinture extérieure', icon: Building2,   bgBefore: 'bg-gray-600',    bgAfter: 'bg-brand-foret',  desc: 'Préparation façade, impression, 2 couches de peinture façade résine.',           showAfter: false },
  { title: 'Pose parquet chêne',  location: 'Yvelines (78)',          category: 'Revêtement',          icon: Grid2X2,     bgBefore: 'bg-amber-800',   bgAfter: 'bg-amber-600',    desc: 'Dépose moquette, ragréage, pose parquet chêne massif 14mm collé.',               showAfter: false },
  { title: 'Chambre parentale',   location: 'Mantes-la-Jolie (78)',  category: 'Peinture intérieure', icon: PaintBucket, bgBefore: 'bg-slate-500',   bgAfter: 'bg-indigo-800',   desc: 'Peinture couleur profonde, tête de lit peinte, finition mat velouté.',           showAfter: false },
  { title: 'Terrasse carrelée',   location: 'Île-de-France',          category: 'Revêtement',          icon: Grid2X2,     bgBefore: 'bg-stone-600',   bgAfter: 'bg-stone-400',    desc: 'Préparation dalle béton, pose carrelage grès cérame antidérapant 60x60.',        showAfter: false },
  { title: 'Ravalement enduit',   location: 'Rambouillet (78)',       category: 'Ravalement',          icon: Building2,   bgBefore: 'bg-gray-400',    bgAfter: 'bg-green-600',    desc: 'Dépose ancien enduit, application enduit monocouche taloché fin.',               showAfter: false },
])

const filteredRealisations = computed(() =>
  activeFilter.value === 'Tous'
    ? realisations.value
    : realisations.value.filter(r => r.category === activeFilter.value)
)
</script>
