<template>
  <section id="contact" class="bg-brand-clair py-16 sm:py-24">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

        <!-- Infos -->
        <div
          v-motion :initial="{ opacity:0, y:24 }"
          :visibleOnce="{ opacity:1, y:0, transition:{ duration:600 } }"
        >
          <div class="section-label mb-4">Contact</div>
          <h2 class="section-title mb-5">Parlons de<br/>votre projet</h2>
          <p class="text-gray-500 text-sm leading-loose mb-8">
            Vous avez un projet en Île-de-France ? Remplissez le formulaire ou
            contactez directement — réponse rapide, devis gratuit sans engagement.
          </p>

          <div class="flex flex-col gap-3 sm:gap-4">
            <a
              v-for="card in contactCards" :key="card.label"
              :href="card.href"
              class="group flex items-center gap-4 bg-white rounded-xl px-4 sm:px-5 py-3 sm:py-4
                     shadow-sm hover:shadow-md hover:translate-x-1.5 transition-all duration-300"
            >
              <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand-clair flex items-center justify-center flex-shrink-0
                          group-hover:bg-brand-vif transition-colors duration-300">
                <component :is="card.icon"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-brand-foret group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <div class="text-[10px] font-semibold uppercase tracking-widest text-gray-400">{{ card.label }}</div>
                <div class="text-sm font-semibold text-brand-foret mt-0.5">{{ card.value }}</div>
              </div>
            </a>
          </div>
        </div>

        <!-- Formulaire -->
        <div
          v-motion :initial="{ opacity:0, y:24 }"
          :visibleOnce="{ opacity:1, y:0, transition:{ delay:200, duration:600 } }"
          class="bg-white rounded-2xl p-6 sm:p-8 shadow-sm"
        >
          <form @submit.prevent="handleSubmit" class="flex flex-col gap-4 sm:gap-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="flex flex-col gap-1.5">
                <label class="text-xs font-semibold text-brand-foret tracking-wide">Nom complet</label>
                <input v-model="form.name" type="text" placeholder="Votre nom" required
                  class="px-4 py-3 border border-green-100 rounded-lg text-sm
                         focus:outline-none focus:border-brand-vif focus:ring-2 focus:ring-brand-vif/15
                         transition-all placeholder-gray-300" />
              </div>
              <div class="flex flex-col gap-1.5">
                <label class="text-xs font-semibold text-brand-foret tracking-wide">Téléphone</label>
                <input v-model="form.phone" type="tel" placeholder="Votre numéro"
                  class="px-4 py-3 border border-green-100 rounded-lg text-sm
                         focus:outline-none focus:border-brand-vif focus:ring-2 focus:ring-brand-vif/15
                         transition-all placeholder-gray-300" />
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <label class="text-xs font-semibold text-brand-foret tracking-wide">E-mail</label>
              <input v-model="form.email" type="email" placeholder="Votre adresse e-mail" required
                class="px-4 py-3 border border-green-100 rounded-lg text-sm
                       focus:outline-none focus:border-brand-vif focus:ring-2 focus:ring-brand-vif/15
                       transition-all placeholder-gray-300" />
            </div>

            <div class="flex flex-col gap-1.5">
              <label class="text-xs font-semibold text-brand-foret tracking-wide">Votre projet</label>
              <textarea v-model="form.message" rows="5" placeholder="Décrivez votre projet en quelques mots…" required
                class="px-4 py-3 border border-green-100 rounded-lg text-sm resize-none
                       focus:outline-none focus:border-brand-vif focus:ring-2 focus:ring-brand-vif/15
                       transition-all placeholder-gray-300" />
            </div>

            <button type="submit" :disabled="sent"
              class="w-full flex items-center justify-center gap-2 py-3 sm:py-4 rounded-lg
                     bg-brand-foret text-white font-semibold text-sm
                     hover:bg-brand-vif transition-all duration-300
                     hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-vif/30
                     disabled:opacity-60 disabled:cursor-not-allowed">
              <Send class="w-4 h-4" />
              {{ sent ? 'Message envoyé ✓' : 'Envoyer ma demande' }}
            </button>

            <p class="text-[11px] text-gray-400 text-center leading-relaxed">
              Réponse rapide · Devis gratuit sans engagement · Données confidentielles (RGPD)
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Phone, Mail, MapPin, Send } from 'lucide-vue-next'

const sent = ref(false)
const form = ref({ name: '', phone: '', email: '', message: '' })

const contactCards = [
  { label: 'Téléphone', value: '06 64 84 16 78',            href: 'tel:0664841678',                icon: Phone  },
  { label: 'Email',     value: 'peinture.sld@gmail.com',    href: 'mailto:peinture.sld@gmail.com', icon: Mail   },
  { label: 'Zone',      value: 'Yvelines (78) — Île-de-France', href: '#',                         icon: MapPin },
]

function handleSubmit() {
  // TODO: intégrer EmailJS (semaine 5)
  console.log('Form submitted:', form.value)
  sent.value = true
  setTimeout(() => { sent.value = false }, 4000)
}
</script>