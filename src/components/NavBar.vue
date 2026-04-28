<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-brand-foret py-3 shadow-xl' : 'bg-transparent py-5'"
  >
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-between">

      <!-- Logo -->
      <a href="#" class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-brand-vif/20 flex items-center justify-center">
          <Home class="w-5 h-5 text-brand-vif" />
        </div>
        <div class="flex flex-col leading-none">
          <span class="font-display text-xl text-white tracking-wide">Da Silva Leite</span>
          <span class="text-[10px] font-normal text-brand-vif tracking-widest uppercase">Entreprise de peinture</span>
        </div>
      </a>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-white/80 hover:text-white relative group transition-colors"
        >
          {{ link.label }}
          <span class="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-vif rounded transition-all duration-300 group-hover:w-full" />
        </a>
        <a href="#contact" class="btn-primary text-sm !py-2.5">
          <PhoneCall class="w-4 h-4" />
          Devis gratuit
        </a>
      </div>

      <!-- Mobile burger -->
      <button
        class="md:hidden text-white p-2"
        @click="mobileOpen = !mobileOpen"
        aria-label="Menu"
      >
        <Menu v-if="!mobileOpen" class="w-6 h-6" />
        <X     v-else            class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide-down">
      <div
        v-if="mobileOpen"
        class="md:hidden bg-brand-foret border-t border-white/10 px-6 py-6 flex flex-col gap-6"
      >
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="font-display text-3xl text-white hover:text-brand-vif transition-colors"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </a>
        <a href="#contact" class="btn-primary self-start" @click="mobileOpen = false">
          <PhoneCall class="w-4 h-4" />
          Devis gratuit
        </a>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Home, Menu, X, PhoneCall } from 'lucide-vue-next'

const scrolled    = ref(false)
const mobileOpen  = ref(false)

const navLinks = [
  { href: '#services',     label: 'Nos services' },
  { href: '#about',        label: 'À propos' },
  { href: '#realisations', label: 'Réalisations' },
  { href: '#contact',      label: 'Contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 60
}

onMounted(()  => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
/* Transition menu mobile */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
