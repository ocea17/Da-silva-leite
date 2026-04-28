<template>
  <footer class="bg-[#111c13] pt-12 pb-6">
    <div class="max-w-6xl mx-auto px-6">

      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/8">
        <!-- Logo plus grand -->
        <RouterLink to="/">
          <img :src="logoWhite" alt="Da Silva Leite" class="h-16 w-auto" />
        </RouterLink>

        <!-- Liens -->
        <div class="flex flex-wrap gap-6">
          <RouterLink to="/"         class="text-white/40 text-sm hover:text-brand-vif transition-colors">Accueil</RouterLink>
          <RouterLink to="/services"         class="text-white/40 text-sm hover:text-brand-vif transition-colors">Nos services</RouterLink>
          <RouterLink to="/realisations"     class="text-white/40 text-sm hover:text-brand-vif transition-colors">Réalisations</RouterLink>
          <a href="/#about"                  class="text-white/40 text-sm hover:text-brand-vif transition-colors">À propos</a>
          <a href="/#contact"               class="text-white/40 text-sm hover:text-brand-vif transition-colors">Contact</a>
          <RouterLink to="/mentions-legales" class="text-white/40 text-sm hover:text-brand-vif transition-colors">Mentions légales</RouterLink>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pt-6">
        <p class="text-white/25 text-xs">
          © 2026 Da Silva Leite · SIRET 49487511500029 
        </p>
        <p class="text-white/20 text-xs">
          Site réalisé par Océane Leite · <a href="https://oceaneleite.fr/" class="underline hover:text-brand-vif transition-colors">oceaneleite.fr</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import logoWhite from '@/assets/images/loog_secondaire_blanc.svg'
</script>
