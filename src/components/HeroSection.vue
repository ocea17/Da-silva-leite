<template>
  <section class="relative min-h-screen bg-brand-foret flex items-center overflow-hidden">
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-[-15%] right-[-8%] w-[55vw] h-[120vh] rounded-[40%_0_0_55%] bg-brand-vif/10 animate-float" />
      <div class="absolute bottom-[-20%] left-[-8%] w-[40vw] h-[55vh] rounded-[0_55%_35%_0] bg-brand-vif/6 animate-float" style="animation-delay:3s" />
      <div class="absolute inset-0 opacity-5" style="background:repeating-linear-gradient(-45deg,transparent,transparent 60px,#6DC319 60px,#6DC319 61px)" />
    </div>

    <div class="max-w-6xl mx-auto px-6 relative z-10 pt-28 pb-16 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <!-- Gauche -->
        <div>
          <div v-motion :initial="{ opacity:0, y:20 }" :enter="{ opacity:1, y:0, transition:{ delay:200, duration:600 } }"
               class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 bg-brand-vif/18 border border-brand-vif/40 text-brand-vif text-xs font-semibold tracking-widest uppercase">
            <span class="w-1.5 h-1.5 rounded-full bg-brand-vif animate-pulse" />
            Artisan peintre depuis 2007
          </div>

          <h1 v-motion :initial="{ opacity:0, y:28 }" :enter="{ opacity:1, y:0, transition:{ delay:350, duration:700 } }"
              class="font-display text-5xl sm:text-6xl lg:text-[5.5rem] text-white leading-[1.0] mb-6">
            Votre artisan<br/>peintre dans<br/>
            <span class="text-brand-vif">les Yvelines</span>
          </h1>

          <p v-motion :initial="{ opacity:0, y:20 }" :enter="{ opacity:1, y:0, transition:{ delay:550, duration:600 } }"
             class="text-white/65 text-base leading-loose max-w-md mb-10">
            Peinture intérieure &amp; extérieure, revêtements, ravalement de façade et décoration à Mantes-la-Jolie, Versailles et en Île-de-France.
          </p>

          <div v-motion :initial="{ opacity:0, y:16 }" :enter="{ opacity:1, y:0, transition:{ delay:700, duration:600 } }"
               class="flex flex-wrap gap-4 mb-14">
            <a href="#contact" class="btn-primary">
              <CheckCircle class="w-4 h-4" /> Devis gratuit
            </a>
            <a href="#realisations" class="btn-outline">
              Voir nos réalisations <ArrowRight class="w-4 h-4" />
            </a>
          </div>

          <div v-motion :initial="{ opacity:0 }" :enter="{ opacity:1, transition:{ delay:950, duration:700 } }" class="flex">
            <div v-for="(stat, i) in stats" :key="stat.label"
                 class="pr-8 border-l border-white/15 first:border-l-0 first:pl-0" :class="i > 0 ? 'pl-8' : ''">
              <div class="font-display text-4xl text-brand-vif leading-none">{{ stat.value }}</div>
              <div class="text-white/45 text-xs mt-1 tracking-wide">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Droite — logo + cercles animés -->
        <div v-motion :initial="{ opacity:0, scale:0.9 }" :enter="{ opacity:1, scale:1, transition:{ delay:500, duration:800 } }"
             class="hidden lg:flex items-center justify-center relative h-[460px]">
          <div class="absolute w-[420px] h-[420px] rounded-full border border-brand-vif/12 animate-spin-slow" />
          <div class="absolute w-[320px] h-[320px] rounded-full border border-brand-vif/20" />
          <div class="absolute w-[220px] h-[220px] rounded-full bg-brand-vif/8 border border-brand-vif/25 animate-float" />

          <div class="relative z-10 flex flex-col items-center gap-6">
            <img :src="logoPrincipalBlanc" alt="Da Silva Leite" class="w-64 drop-shadow-2xl" />
            <div class="flex items-center gap-3">
              <div class="h-px w-10 bg-brand-vif/50" />
              <span class="text-white/50 text-xs tracking-[0.2em] uppercase font-light">Depuis 2007</span>
              <div class="h-px w-10 bg-brand-vif/50" />
            </div>
          </div>

          <div v-for="(s, i) in serviceOrbit" :key="s.name"
               class="absolute w-14 h-14 rounded-2xl bg-brand-foret border border-brand-vif/30 flex items-center justify-center shadow-xl hover:bg-brand-vif/20 transition-colors duration-300 group"
               :style="orbitStyle(i)">
            <img :src="s.icon" :alt="s.name" class="w-7 h-7 brightness-200 opacity-70 group-hover:opacity-100 transition-opacity" />
            <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-brand-vif text-white text-[10px] font-semibold px-2 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {{ s.name }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator cliquable -->
    <a href="#services"
       class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
              text-white/35 hover:text-brand-vif text-[10px] tracking-widest uppercase
              animate-bounce z-10 transition-colors duration-300">
      <span>Découvrir</span>
      <ChevronDown class="w-4 h-4" />
    </a>
  </section>
</template>

<script setup>
import { CheckCircle, ArrowRight, ChevronDown } from 'lucide-vue-next'
import logoPrincipalBlanc from '@/assets/images/loog_pincipale_blanc.svg'
import iconPeinture       from '@/assets/images/peinture.svg'
import iconRevetement     from '@/assets/images/revetement.svg'
import iconRavalement     from '@/assets/images/ravalement.svg'
import iconAmenagement    from '@/assets/images/amenagement.svg'

const stats = [
  { value: '15+',  label: 'Années d\'expérience' },
  { value: '300+', label: 'Chantiers réalisés'   },
  { value: '5★',   label: 'Note clients'          },
]
const serviceOrbit = [
  { name: 'Peinture',    icon: iconPeinture,    deg: -60  },
  { name: 'Revêtement',  icon: iconRevetement,  deg: 30   },
  { name: 'Ravalement',  icon: iconRavalement,  deg: 120  },
  { name: 'Aménagement', icon: iconAmenagement, deg: 210  },
]
function orbitStyle(i) {
  const rad = (serviceOrbit[i].deg * Math.PI) / 180
  return { transform: `translate(${Math.cos(rad) * 200}px, ${Math.sin(rad) * 200}px)` }
}
</script>

<style scoped>
@keyframes spin-slow { to { transform: rotate(360deg); } }
.animate-spin-slow { animation: spin-slow 30s linear infinite; }
</style>
