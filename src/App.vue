<template>
  <div>
    <NavBar />
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar         from '@/components/NavBar.vue'
import HeroSection    from '@/components/HeroSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import AboutSection   from '@/components/AboutSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterSection  from '@/components/FooterSection.vue'
</script>
