<template>
  <main>
    <!-- Hero -->
    <section class="bg-brand-foret pt-24 sm:pt-36 pb-12 sm:pb-16">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6
                    bg-brand-vif/18 border border-brand-vif/40 text-brand-vif text-xs font-semibold tracking-widest uppercase">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-vif" />
          Informations légales
        </div>
        <h1 class="font-display text-3xl sm:text-5xl text-white mb-4">Mentions légales</h1>
        <p class="text-white/50 text-sm">Da Silva Leite — Site vitrine</p>
      </div>
    </section>

    <!-- Contenu -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">

        <div class="flex flex-col gap-10">

          <!-- Éditeur -->
          <div class="rounded-2xl border border-gray-100 p-5 sm:p-8">
            <h2 class="font-display text-xl sm:text-2xl text-brand-foret mb-4 sm:mb-6 flex items-center gap-3">
              <span class="w-8 h-8 rounded-full bg-brand-vif flex items-center justify-center text-white text-sm font-bold">1</span>
              Éditeur du site
            </h2>
            <dl class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="item in editeur" :key="item.label" class="flex flex-col gap-1">
                <dt class="text-xs font-semibold uppercase tracking-widest text-gray-400">{{ item.label }}</dt>
                <dd class="text-sm text-brand-foret font-medium">
                  {{ item.value }}<a v-if="item.link" :href="item.link" target="_blank" rel="noopener noreferrer" class="text-brand-vif hover:underline">{{ item.linkText }}</a>
                </dd>
              </div>
            </dl>
          </div>

          <!-- Hébergeur -->
          <div class="rounded-2xl border border-gray-100 p-5 sm:p-8">
            <h2 class="font-display text-xl sm:text-2xl text-brand-foret mb-4 sm:mb-6 flex items-center gap-3">
              <span class="w-8 h-8 rounded-full bg-brand-vif flex items-center justify-center text-white text-sm font-bold">2</span>
              Hébergeur
            </h2>
            <dl class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="item in hebergeur" :key="item.label" class="flex flex-col gap-1">
                <dt class="text-xs font-semibold uppercase tracking-widest text-gray-400">{{ item.label }}</dt>
                <dd class="text-sm text-brand-foret font-medium">{{ item.value }}</dd>
              </div>
            </dl>
          </div>

          <!-- Propriété intellectuelle -->
          <div class="rounded-2xl border border-gray-100 p-5 sm:p-8">
            <h2 class="font-display text-xl sm:text-2xl text-brand-foret mb-4 flex items-center gap-3">
              <span class="w-8 h-8 rounded-full bg-brand-vif flex items-center justify-center text-white text-sm font-bold">3</span>
              Propriété intellectuelle
            </h2>
            <p class="text-gray-500 text-sm leading-relaxed">
              L'ensemble des contenus présents sur ce site (textes, images, photographies, structure) sont la propriété exclusive de DA SILVA LEITE. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.
            </p>
          </div>

          <!-- RGPD -->
          <div class="rounded-2xl border border-gray-100 p-5 sm:p-8">
            <h2 class="font-display text-xl sm:text-2xl text-brand-foret mb-4 flex items-center gap-3">
              <span class="w-8 h-8 rounded-full bg-brand-vif flex items-center justify-center text-white text-sm font-bold">4</span>
              Données personnelles (RGPD)
            </h2>
            <p class="text-gray-500 text-sm leading-relaxed mb-4">
              Les données collectées via le formulaire de contact (nom, téléphone, e-mail, message) sont utilisées uniquement pour répondre aux demandes des utilisateurs. Elles ne sont pas transmises à des tiers.
            </p>
            <p class="text-gray-500 text-sm leading-relaxed">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez :
              <a href="mailto:peinture.sld@gmail.com" class="text-brand-vif hover:underline font-medium">peinture.sld@gmail.com</a>
            </p>
          </div>

          <!-- Responsabilité -->
          <div class="rounded-2xl border border-gray-100 p-5 sm:p-8">
            <h2 class="font-display text-xl sm:text-2xl text-brand-foret mb-4 flex items-center gap-3">
              <span class="w-8 h-8 rounded-full bg-brand-vif flex items-center justify-center text-white text-sm font-bold">5</span>
              Responsabilité
            </h2>
            <p class="text-gray-500 text-sm leading-relaxed">
              DA SILVA LEITE s'efforce d'assurer l'exactitude des informations publiées sur ce site, mais ne saurait être tenu responsable des erreurs, omissions ou des résultats obtenus par un mauvais usage de ces informations.
            </p>
          </div>
        </div>

        <!-- Retour accueil -->
        <div class="mt-12 text-center">
          <RouterLink to="/" class="btn-primary">
            <ArrowLeft class="w-4 h-4" /> Retour à l'accueil
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { usePageMeta } from '@/composables/usePageMeta'
import { ArrowLeft } from 'lucide-vue-next'

// ─── SEO ───
usePageMeta({
  title: 'Mentions légales | Da Silva Leite',
  description: 'Mentions légales du site de Da Silva Leite, artisan peintre dans les Yvelines.',
  canonical: 'https://peinturesld.oceaneleite.fr/mentions-legales',
  ogImage: 'https://peinturesld.oceaneleite.fr/og-image.png'
})

const editeur = [
  { label: 'Raison sociale', value: 'DA SILVA LEITE' },
  { label: 'Gérant',         value: 'Salomon LEITE' },
  { label: 'Code APE',       value: '4334Z — Travaux de peinture et vitrerie' },
  { label: 'N° SIRET',       value: '49487511500029' },
  { label: 'E-mail',         value: 'peinture.sld@gmail.com' },
  { label: 'Téléphone',      value: '06 64 84 16 78' },
  { label: 'Adresse',        value: '1 avenue Henry IV, 78710 Rosny-sur-Seine — Intervention uniquement à domicile, pas d\'accueil au siège' },
  { label: 'Développé par',  value: 'Océane Leite — ', linkText: 'oceaneleite.fr', link: 'https://oceaneleite.fr' },
]

const hebergeur = [
  { label: 'Hébergeur',  value: 'IONOS SE' },
  { label: 'Adresse',   value: '7 place de la Gare, 57200 Sarreguemines' },
  { label: 'Site web',  value: 'www.ionos.fr' },
]
</script>