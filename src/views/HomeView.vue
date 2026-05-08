<template>
  <main>
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <RealisationsSection />
    <ContactSection />
  </main>
</template>

<script setup>
import { usePageMeta } from '@/composables/usePageMeta'
import HeroSection         from '@/components/HeroSection.vue'
import ServicesSection     from '@/components/ServicesSection.vue'
import AboutSection        from '@/components/AboutSection.vue'
import RealisationsSection from '@/components/RealisationsSection.vue'
import ContactSection      from '@/components/ContactSection.vue'

usePageMeta({
  title: 'Da Silva Leite — Artisan Peintre dans les Yvelines',
  description: 'Artisan peintre indépendant dans les Yvelines depuis 2007. Peinture intérieure et extérieure, ravalement de façade, revêtements, aménagement. Devis gratuit.',
  canonical: 'https://peinturesld.oceaneleite.fr/',
  ogImage: 'https://peinturesld.oceaneleite.fr/og-image.png'
})
</script>