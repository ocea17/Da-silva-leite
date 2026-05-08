<template>
  <section class="relative min-h-screen bg-brand-foret flex items-center overflow-hidden">

    <!-- Fond décoratif -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-[-15%] right-[-8%] w-[55vw] h-[120vh]
                  rounded-[40%_0_0_55%] bg-brand-vif/10 animate-float" />
      <div class="absolute bottom-[-20%] left-[-8%] w-[40vw] h-[55vh]
                  rounded-[0_55%_35%_0] bg-brand-vif/6 animate-float" style="animation-delay:3s" />
      <div class="absolute inset-0 opacity-[0.04]"
           style="background:repeating-linear-gradient(-45deg,transparent,transparent 60px,#6DC319 60px,#6DC319 61px)" />
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pt-24 sm:pt-28 pb-16 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        <!-- ─── Colonne gauche — texte ─── -->
        <div>
          <!-- Badge -->
          <div
            v-motion :initial="{ opacity:0, y:20 }"
            :enter="{ opacity:1, y:0, transition:{ delay:200, duration:600 } }"
            class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 sm:mb-8
                   bg-brand-vif/18 border border-brand-vif/40
                   text-brand-vif text-xs font-semibold tracking-widest uppercase"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-brand-vif animate-pulse" />
            Artisan peintre depuis 2007
          </div>

          <!-- H1 -->
          <h1
            v-motion :initial="{ opacity:0, y:28 }"
            :enter="{ opacity:1, y:0, transition:{ delay:350, duration:700 } }"
            class="font-display text-4xl sm:text-5xl lg:text-[5rem] xl:text-[5.5rem]
                   text-white leading-[1.0] mb-5 sm:mb-6"
          >
            Votre artisan<br/>
            peintre dans<br/>
            <span class="text-brand-vif">les Yvelines</span>
          </h1>

          <!-- Sous-titre -->
          <p
            v-motion :initial="{ opacity:0, y:20 }"
            :enter="{ opacity:1, y:0, transition:{ delay:550, duration:600 } }"
            class="text-white/65 text-sm sm:text-base leading-loose max-w-md mb-8 sm:mb-10"
          >
            Peinture intérieure &amp; extérieure, revêtements, ravalement de façade
            dans les Yvelines et alentour.
          </p>

          <!-- CTA -->
          <div
            v-motion :initial="{ opacity:0, y:16 }"
            :enter="{ opacity:1, y:0, transition:{ delay:700, duration:600 } }"
            class="flex flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-14"
          >
            <a href="#contact" class="btn-primary">
              <CheckCircle class="w-4 h-4" />
              Devis gratuit
            </a>
            <a href="#realisations" class="btn-outline">
              Nos réalisations
              <ArrowRight class="w-4 h-4" />
            </a>
          </div>

          <!-- Stats -->
          <div
            v-motion :initial="{ opacity:0 }"
            :enter="{ opacity:1, transition:{ delay:950, duration:700 } }"
            class="flex"
          >
            <div
              v-for="(stat, i) in stats" :key="stat.label"
              class="pr-5 sm:pr-8 border-l border-white/15 first:border-l-0 first:pl-0"
              :class="i > 0 ? 'pl-5 sm:pl-8' : ''"
            >
              <div class="font-display text-3xl sm:text-4xl text-brand-vif leading-none">{{ stat.value }}</div>
              <div class="text-white/45 text-[10px] sm:text-xs mt-1 tracking-wide">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- ─── Colonne droite — mosaïque d'images ─── -->
        <div
          v-motion :initial="{ opacity:0, x:40 }"
          :enter="{ opacity:1, x:0, transition:{ delay:500, duration:800 } }"
          class="hidden lg:block relative h-[620px]"
        >
          <!-- Card grande — gauche -->
         <div class="absolute left-0 top-0 w-[54%] h-[60%] rounded-2xl overflow-hidden
            shadow-2xl group cursor-default">
            <img
              src="/photo/hero/peinture-chambre.jpeg"
              alt="Peinture intérieure"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <!-- Overlay tag -->
            <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <span class="text-white text-xs font-semibold">Peinture intérieure</span>
            </div>
          </div>

          <!-- Card petite — haut droite -->
          <div class="absolute right-0 top-0 w-[42%] h-[30%] rounded-2xl overflow-hidden
                      shadow-xl group cursor-default">
            <img
              src="/photo/hero/escalier.jpeg"
              alt="Peinture"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-3">
              <span class="text-white text-xs font-semibold">Peinture intérieure</span>
            </div>
          </div>

          <!-- Card milieu droite -->
          <div class="absolute right-0 top-[32%] w-[42%] h-[30%] rounded-2xl overflow-hidden
                      shadow-xl group cursor-default">
            <img
              src="/photo/hero/bibliotheque.jpeg"
              alt="Aménagement intérieur"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-3">
              <span class="text-white text-xs font-semibold">Aménagement intérieur</span>
            </div>
          </div>

          <!-- Card large — bas -->
          <div class="absolute left-0 bottom-0 w-full h-[36%]  rounded-2xl overflow-hidden
                      shadow-xl group cursor-default">
            <img
              src="/photo/hero/exterieur.jpeg"
              alt="Peinture extérieure vitrine"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <span class="text-white text-xs font-semibold">Peinture extérieure</span>
            </div>
          </div>

          <!-- Badge flottant avant/après -->
          <div class="absolute top-[28%] left-[48%] -translate-x-1/2 -translate-y-1/2 z-20
                      bg-brand-vif text-white rounded-2xl px-4 py-3 shadow-xl shadow-brand-vif/40
                      text-center animate-float">
            <div class="font-display text-2xl leading-none">300+</div>
            <div class="text-[10px] font-light mt-0.5 opacity-90 whitespace-nowrap">Chantiers réalisés</div>
          </div>

          <!-- Badge étoile -->
          <div class="absolute bottom-[36%] right-[44%] z-20
                      bg-white text-brand-foret rounded-xl px-3 py-2 shadow-lg
                      flex items-center gap-2">
            <Star class="w-4 h-4 text-brand-vif fill-brand-vif" />
            <span class="text-xs font-bold">5/5 clients</span>
          </div>
        </div>

      </div>
    </div>

    <!-- Scroll indicator -->
    <a href="#services"
       class="absolute bottom-6 sm:bottom-8 left-0 right-0
              flex flex-col items-center gap-2 text-white/35 hover:text-brand-vif
              text-[10px] tracking-widest uppercase animate-bounce z-10 transition-colors duration-300
              text-center">
      <span>Découvrir</span>
      <ChevronDown class="w-4 h-4 mx-auto" />
    </a>
  </section>
</template>

<script setup>
import { CheckCircle, ArrowRight, ChevronDown, Star } from 'lucide-vue-next'

const stats = [
  { value: '15+',  label: 'Années d\'expérience' },
  { value: '300+', label: 'Chantiers réalisés'   },
  { value: '5★',   label: 'Note clients'          },
]
</script>