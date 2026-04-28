<template>
  <main>
    <!-- Hero -->
    <section class="relative bg-brand-foret pt-36 pb-20 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 right-0 w-[50vw] h-full opacity-10"
             style="background:radial-gradient(ellipse at top right, #6DC319 0%, transparent 70%)" />
      </div>
      <div class="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <div v-motion :initial="{ opacity:0, y:20 }" :enter="{ opacity:1, y:0, transition:{ delay:100, duration:600 } }"
             class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6
                    bg-brand-vif/18 border border-brand-vif/40 text-brand-vif text-xs font-semibold tracking-widest uppercase">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-vif" />
          Nos services
        </div>
        <h1 v-motion :initial="{ opacity:0, y:28 }" :enter="{ opacity:1, y:0, transition:{ delay:250, duration:700 } }"
            class="font-display text-5xl lg:text-6xl text-white leading-tight mb-5">
          Nos prestations de<br/>
          <span class="text-brand-vif">peinture & rénovation</span>
        </h1>
        <p v-motion :initial="{ opacity:0, y:16 }" :enter="{ opacity:1, y:0, transition:{ delay:400, duration:600 } }"
           class="text-white/65 text-base leading-loose max-w-xl mx-auto mb-10">
          Artisan peintre dans les Yvelines depuis 2007, j'interviens chez des particuliers en Île-de-France pour tous vos travaux de peinture, rénovation et décoration.
        </p>
        <a href="#contact" v-motion :initial="{ opacity:0 }" :enter="{ opacity:1, transition:{ delay:550, duration:600 } }" class="btn-primary">
          <CheckCircle class="w-4 h-4" /> Devis gratuit
        </a>
      </div>
    </section>

    <!-- Liste des services -->
    <section class="py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 flex flex-col gap-20">
        <div
          v-for="(service, i) in services" :key="service.slug"
          v-motion :initial="{ opacity:0, y:32 }" :visibleOnce="{ opacity:1, y:0, transition:{ duration:600 } }"
          class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          :class="i % 2 === 1 ? 'lg:flex-row-reverse' : ''"
        >
          <!-- Visuel -->
          <div :class="i % 2 === 1 ? 'lg:order-2' : ''">
            <div class="relative rounded-2xl overflow-hidden aspect-[4/3]"
                 :class="service.bgColor">
              <div class="absolute inset-0 flex items-center justify-center">
                <img :src="service.icon" :alt="service.name" class="w-32 h-32 brightness-200 opacity-20" />
              </div>
              <!-- Badge icône -->
              <div class="absolute bottom-6 left-6 w-16 h-16 rounded-2xl bg-brand-vif
                          flex items-center justify-center shadow-xl">
                <img :src="service.icon" :alt="service.name" class="w-9 h-9 brightness-200" />
              </div>
            </div>
          </div>

          <!-- Texte -->
          <div :class="i % 2 === 1 ? 'lg:order-1' : ''">
            <div class="section-label mb-4">Service {{ String(i + 1).padStart(2, '0') }}</div>
            <h2 class="section-title mb-5">{{ service.name }}</h2>
            <p class="text-gray-500 text-sm leading-loose mb-8">{{ service.intro }}</p>

            <ul class="flex flex-col gap-3 mb-8">
              <li v-for="item in service.prestations" :key="item"
                  class="flex items-start gap-3">
                <div class="w-5 h-5 rounded-full bg-brand-vif flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check class="w-3 h-3 text-white" />
                </div>
                <span class="text-sm text-gray-600">{{ item }}</span>
              </li>
            </ul>

            <a href="#contact" class="btn-primary">
              <PhoneCall class="w-4 h-4" /> Demander un devis
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Zone d'intervention -->
    <section class="bg-brand-clair py-16">
      <div class="max-w-3xl mx-auto px-6 text-center">
        <div class="section-label mb-4 justify-center">Zone d'intervention</div>
        <h2 class="section-title mb-6">Yvelines &amp; Île-de-France</h2>
        <p class="text-gray-500 text-sm leading-loose mb-8">
          Basé à Rosny-sur-Seine, j'interviens principalement dans les secteurs de Mantes-la-Jolie, Versailles, et plus largement dans tout le département des Yvelines (78) et en Île-de-France.
        </p>
        <div class="flex flex-wrap justify-center gap-3">
          <span v-for="ville in villes" :key="ville"
                class="px-4 py-2 bg-white rounded-full text-sm font-medium text-brand-foret shadow-sm border border-brand-vif/15">
            {{ ville }}
          </span>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <ContactSection />
  </main>
</template>

<script setup>
import { CheckCircle, Check, PhoneCall } from 'lucide-vue-next'
import ContactSection from '@/components/ContactSection.vue'
import iconPeinture    from '@/assets/images/peinture.svg'
import iconRevetement  from '@/assets/images/revetement.svg'
import iconRavalement  from '@/assets/images/ravalement.svg'
import iconAmenagement from '@/assets/images/amenagement.svg'

const services = [
  {
    slug: 'peinture', name: 'Peinture', icon: iconPeinture,
    bgColor: 'bg-brand-foret',
    intro: 'Je prends en charge la préparation des surfaces, l\'application des peintures et la finition, pour un résultat impeccable et durable — intérieur comme extérieur.',
    prestations: ['Peinture intérieure : murs, plafonds, boiseries', 'Peinture extérieure : façades, volets, portails', 'Pose de papier peint et revêtements décoratifs', 'Enduits décoratifs (béton ciré, stuc, tadelakt)', 'Préparation des supports : enduit, ponçage, impression'],
  },
  {
    slug: 'revetement', name: 'Revêtement', icon: iconRevetement,
    bgColor: 'bg-teal-800',
    intro: 'Carrelage, parquet, faïence, sol souple — je vous conseille sur le choix des matériaux et assure une pose soignée dans les règles de l\'art.',
    prestations: ['Carrelage et faïence (salle de bain, cuisine, séjour)', 'Parquet : pose flottante ou collée', 'Sol vinyle, stratifié, moquette', 'Revêtements muraux décoratifs', 'Ragréage et préparation des sols'],
  },
  {
    slug: 'ravalement', name: 'Ravalement de façade', icon: iconRavalement,
    bgColor: 'bg-green-800',
    intro: 'Expertise et matériaux durables pour redonner vie à vos murs extérieurs. Un ravalement soigné protège votre bien et valorise votre patrimoine.',
    prestations: ['Ravalement de façade complet', 'Traitement et reprise des fissures', 'Peinture de façade minérale ou organique', 'Enduit de façade : gratté, taloché, à la chaux', 'Nettoyage haute pression et démoussage'],
  },
  {
    slug: 'amenagement', name: 'Aménagement & décoration', icon: iconAmenagement,
    bgColor: 'bg-emerald-800',
    intro: 'Décoration intérieure, agencement, petits travaux de rénovation — pour créer un intérieur qui vous ressemble, fonctionnel et esthétique.',
    prestations: ['Conseil en décoration intérieure (couleurs, matières)', 'Enduits décoratifs : béton ciré, stuc, chaux', 'Cloisons et faux-plafonds en placo', 'Carrelage décoratif : mosaïque, zellige', 'Petits travaux de rénovation et finitions'],
  },
]

const villes = ['Mantes-la-Jolie', 'Versailles', 'Rosny-sur-Seine', 'Les Mureaux', 'Poissy', 'Rambouillet', 'Yvelines (78)', 'Île-de-France']
</script>
