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
             class="flex items-center justify-center gap-2 text-white/40 text-xs mb-6 sm:mb-8">
          <RouterLink to="/" class="hover:text-brand-vif transition-colors">Accueil</RouterLink>
          <ChevronRight class="w-3 h-3" />
          <span class="text-brand-vif">Nos services</span>
        </div>

        <!-- Badge -->
        <div v-motion :initial="{ opacity:0, y:20 }" :enter="{ opacity:1, y:0, transition:{ delay:100, duration:600 } }"
             class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 sm:mb-6
                    bg-brand-vif/18 border border-brand-vif/40 text-brand-vif text-xs font-semibold tracking-widest uppercase">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-vif animate-pulse" />
          Nos services
        </div>

        <!-- Titre -->
        <h1 v-motion :initial="{ opacity:0, y:28 }" :enter="{ opacity:1, y:0, transition:{ delay:200, duration:700 } }"
            class="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4 sm:mb-5">
          Nos prestations de<br/>
          <span class="text-brand-vif">peinture &amp; rénovation</span>
        </h1>

        <!-- Sous-titre -->
        <p v-motion :initial="{ opacity:0 }" :enter="{ opacity:1, transition:{ delay:400, duration:600 } }"
           class="text-white/60 text-sm sm:text-base leading-loose max-w-xl mx-auto mb-8 sm:mb-10">
          Artisan peintre dans les Yvelines depuis 2007, j'interviens chez des particuliers
          en Île-de-France pour tous vos travaux de peinture, rénovation et décoration.
        </p>

        <!-- CTA -->
        <a href="/#contact" v-motion :initial="{ opacity:0, y:12 }" :enter="{ opacity:1, y:0, transition:{ delay:550, duration:600 } }"
           class="btn-primary inline-flex">
          <CheckCircle class="w-4 h-4" /> Devis gratuit
        </a>
      </div>
    </section>

    <!-- ─── Liste des services ─── -->
    <section class="py-16 sm:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-16 sm:gap-24">
        <div
          v-for="(service, i) in services" :key="service.slug"
          v-motion :initial="{ opacity:0, y:32 }"
          :visibleOnce="{ opacity:1, y:0, transition:{ duration:600 } }"
          class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          <!-- Visuel -->
          <div :class="i % 2 === 1 ? 'lg:order-2' : ''">
            <div class="relative rounded-2xl overflow-hidden aspect-[4/3]" :class="service.bgColor">
              <div class="absolute inset-0 flex items-center justify-center">
                <img :src="service.icon" :alt="service.name" class="w-24 sm:w-32 h-24 sm:h-32 brightness-200 opacity-20" />
              </div>
              <div class="absolute bottom-4 sm:bottom-6 left-4 sm:left-6
                          w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-brand-vif
                          flex items-center justify-center shadow-xl">
                <img :src="service.icon" :alt="service.name" class="w-6 h-6 sm:w-9 sm:h-9 brightness-200" />
              </div>
            </div>
          </div>

          <!-- Texte -->
          <div :class="i % 2 === 1 ? 'lg:order-1' : ''">
            <div class="section-label mb-3 sm:mb-4">Service {{ String(i + 1).padStart(2, '0') }}</div>
            <h2 class="section-title mb-4 sm:mb-5">{{ service.name }}</h2>
            <p class="text-gray-500 text-sm leading-loose mb-6 sm:mb-8">{{ service.intro }}</p>

            <ul class="flex flex-col gap-2 sm:gap-3 mb-6 sm:mb-8">
              <li v-for="item in service.prestations" :key="item" class="flex items-start gap-3">
                <div class="w-5 h-5 rounded-full bg-brand-vif flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check class="w-3 h-3 text-white" />
                </div>
                <span class="text-sm text-gray-600">{{ item }}</span>
              </li>
            </ul>

            <a href="/#contact" class="btn-primary">
              <PhoneCall class="w-4 h-4" /> Demander un devis
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Zone d'intervention ─── -->
    <section class="bg-brand-clair py-12 sm:py-16">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div class="section-label mb-4 justify-center">Zone d'intervention</div>
        <h2 class="section-title mb-5 sm:mb-6">Yvelines &amp; Île-de-France</h2>
        <p class="text-gray-500 text-sm leading-loose mb-6 sm:mb-8">
          Basé à Rosny-sur-Seine, j'interviens principalement dans les secteurs de Mantes-la-Jolie,
          Versailles, et plus largement dans tout le département des Yvelines (78) et en Île-de-France.
        </p>
        <div class="flex flex-wrap justify-center gap-2 sm:gap-3">
          <span v-for="ville in villes" :key="ville"
                class="px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full text-xs sm:text-sm
                       font-medium text-brand-foret shadow-sm border border-brand-vif/15">
            {{ ville }}
          </span>
        </div>
      </div>
    </section>

    <!-- ─── Contact ─── -->
    <ContactSection />
  </main>
</template>

<script setup>
import { CheckCircle, Check, PhoneCall, ChevronRight } from 'lucide-vue-next'
import ContactSection from '@/components/ContactSection.vue'
import iconPeinture    from '@/assets/images/peinture.svg'
import iconRevetement  from '@/assets/images/revetement.svg'
import iconRavalement  from '@/assets/images/ravalement.svg'
import iconAmenagement from '@/assets/images/amenagement.svg'

const services = [
  {
    slug: 'peinture', name: 'Peinture', icon: iconPeinture, bgColor: 'bg-brand-foret',
    intro: 'Je prends en charge la préparation des surfaces, l\'application des peintures et la finition, pour un résultat impeccable et durable — intérieur comme extérieur.',
    prestations: ['Peinture intérieure : murs, plafonds, boiseries', 'Peinture extérieure : façades, volets, portails', 'Pose de papier peint et revêtements décoratifs', 'Enduits décoratifs (béton ciré, stuc, tadelakt)', 'Préparation des supports : enduit, ponçage, impression'],
  },
  {
    slug: 'revetement', name: 'Revêtement', icon: iconRevetement, bgColor: 'bg-teal-800',
    intro: 'Carrelage, parquet, faïence, sol souple — je vous conseille sur le choix des matériaux et assure une pose soignée dans les règles de l\'art.',
    prestations: ['Carrelage et faïence (salle de bain, cuisine, séjour)', 'Parquet : pose flottante ou collée', 'Sol vinyle, stratifié, moquette', 'Revêtements muraux décoratifs', 'Ragréage et préparation des sols'],
  },
  {
    slug: 'ravalement', name: 'Ravalement de façade', icon: iconRavalement, bgColor: 'bg-green-800',
    intro: 'Expertise et matériaux durables pour redonner vie à vos murs extérieurs. Un ravalement soigné protège votre bien et valorise votre patrimoine.',
    prestations: ['Ravalement de façade complet', 'Traitement et reprise des fissures', 'Peinture de façade minérale ou organique', 'Enduit de façade : gratté, taloché, à la chaux', 'Nettoyage haute pression et démoussage'],
  },
  {
    slug: 'amenagement', name: 'Aménagement & décoration', icon: iconAmenagement, bgColor: 'bg-emerald-800',
    intro: 'Décoration intérieure, agencement, petits travaux de rénovation — pour créer un intérieur qui vous ressemble, fonctionnel et esthétique.',
    prestations: ['Conseil en décoration intérieure (couleurs, matières)', 'Enduits décoratifs : béton ciré, stuc, chaux', 'Cloisons et faux-plafonds en placo', 'Carrelage décoratif : mosaïque, zellige', 'Petits travaux de rénovation et finitions'],
  },
]

const villes = ['Mantes-la-Jolie', 'Versailles', 'Rosny-sur-Seine', 'Les Mureaux', 'Poissy', 'Rambouillet', 'Yvelines (78)', 'Île-de-France']
</script>

<style scoped>
@keyframes spin-slow { to { transform: rotate(360deg); } }
.animate-spin-slow { animation: spin-slow 30s linear infinite; }
</style>
