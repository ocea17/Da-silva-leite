<template>
  <footer class="bg-[#111c13] pt-12 pb-6">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Top row -->
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between
                  gap-8 pb-10 border-b border-white/8">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-brand-vif/20 flex items-center justify-center">
            <Home class="w-5 h-5 text-brand-vif" />
          </div>
          <div class="flex flex-col leading-none">
            <span class="font-display text-xl text-white tracking-wide">Da Silva Leite</span>
            <span class="text-[10px] font-normal text-brand-vif tracking-widest uppercase">Entreprise de peinture</span>
          </div>
        </div>

        <!-- Nav links -->
        <div class="flex flex-wrap gap-6">
          <a v-for="link in footerLinks" :key="link" href="#"
             class="text-white/40 text-sm hover:text-brand-vif transition-colors">
            {{ link }}
          </a>
        </div>
      </div>

      <!-- Bottom row -->
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between
                  gap-3 pt-6">
        <p class="text-white/25 text-xs">
          © 2026 Da Silva Leite · SIRET 49487511500029 · 1 av. Henry IV, 78710 Rosny-sur-Seine
        </p>
        <p class="text-white/20 text-xs">
          Site réalisé par Océane Leite · Stage BUT MMI Troyes 2026
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Home } from 'lucide-vue-next'

const footerLinks = ['Nos services', 'À propos', 'Réalisations', 'Contact', 'Mentions légales']
</script>
