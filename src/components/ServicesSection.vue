<template>
  <section id="services" class="bg-brand-clair py-24">
    <div class="max-w-6xl mx-auto px-6">

      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div v-motion :initial="{ opacity:0, y:24 }" :visibleOnce="{ opacity:1, y:0, transition:{ duration:600 } }">
          <div class="section-label mb-3">Ce que nous faisons</div>
          <h2 class="section-title">Nos prestations<br/>de peinture</h2>
        </div>
        <p v-motion :initial="{ opacity:0, y:16 }" :visibleOnce="{ opacity:1, y:0, transition:{ delay:150, duration:600 } }"
           class="text-gray-500 text-sm leading-relaxed max-w-xs md:text-right">
          Des finitions soignées, des matériaux durables et une écoute attentive à chaque étape de votre projet.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <RouterLink
          v-for="(service, i) in services" :key="service.name"
          :to="`/services`"
          v-motion :initial="{ opacity:0, y:32 }"
          :visibleOnce="{ opacity:1, y:0, transition:{ delay: i * 100, duration:600 } }"
          class="group bg-white rounded-2xl p-8 relative overflow-hidden border border-transparent
                 hover:border-brand-vif/20 shadow-sm hover:shadow-xl hover:shadow-brand-foret/10
                 transition-all duration-300 hover:-translate-y-2"
        >
          <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-vif scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

          <!-- Icône plus grande -->
          <div class="w-20 h-20 rounded-2xl bg-brand-clair flex items-center justify-center mb-6
                      group-hover:bg-brand-vif transition-colors duration-300">
            <img :src="service.icon" :alt="service.name"
                 class="w-12 h-12 transition-all duration-300 group-hover:brightness-200" />
          </div>

          <h3 class="font-display text-2xl text-brand-foret tracking-wide mb-3">{{ service.name }}</h3>
          <p class="text-gray-500 text-sm leading-relaxed mb-5">{{ service.desc }}</p>

          <div class="flex items-center gap-2 text-brand-vif text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            En savoir plus <ArrowRight class="w-3.5 h-3.5" />
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'
import iconPeinture    from '@/assets/images/peinture.svg'
import iconRevetement  from '@/assets/images/revetement.svg'
import iconRavalement  from '@/assets/images/ravalement.svg'
import iconAmenagement from '@/assets/images/amenagement.svg'

const services = [
  { icon: iconPeinture,    name: 'Peinture',    desc: 'Intérieure & extérieure. Murs, plafonds, boiseries, façades — préparation et finition impeccable.' },
  { icon: iconRevetement,  name: 'Revêtement',  desc: 'Sols et murs : carrelage, parquet, faïence, vinyl, moquette — conseil et pose soignée.' },
  { icon: iconRavalement,  name: 'Ravalement',  desc: 'Ravalement de façade avec matériaux durables pour redonner vie à vos murs extérieurs.' },
  { icon: iconAmenagement, name: 'Aménagement', desc: 'Décoration intérieure, enduits décoratifs, béton ciré, stuc — pour un intérieur unique.' },
]
</script>
