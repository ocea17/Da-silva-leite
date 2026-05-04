<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-brand-foret py-2 shadow-xl' : 'bg-transparent py-4'"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">

      <!-- Logo principal -->
      <RouterLink to="/" class="hidden md:flex items-center">
        <img
          :src="logoWhite"
          alt="Da Silva Leite — Entreprise de peinture"
          class="h-8 sm:h-14 w-auto transition-all duration-300"
          :class="scrolled ? 'sm:h-12' : 'sm:h-14'"
        />
      </RouterLink>

      <!-- Logo secondaire — mobile uniquement -->
      <RouterLink to="/" class="md:hidden flex items-center">
        <img
          :src="logoSecondary"
          alt="Da Silva Leite"
          class="h-10 w-auto transition-all duration-300"
          :class="scrolled ? 'h-8' : 'h-10'"
        />
      </RouterLink>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center gap-8 ml-32">
        <RouterLink
          v-for="link in navLinks" :key="link.to" :to="link.to"
          class="text-base font-medium text-white/80 hover:text-white relative group transition-colors"
          :class="isActive(link.to) ? 'text-white' : ''"
        >
          {{ link.label }}
          <span class="absolute -bottom-0.5 left-0 h-0.5 bg-brand-vif rounded transition-all duration-300"
                :class="isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'" />
        </RouterLink>

        <a href="/#contact" class="btn-primary text-base !py-2.5">
          <PhoneCall class="w-4 h-4" />
          Devis gratuit
        </a>
      </div>

      <!-- Mobile burger -->
      <button class="md:hidden text-white p-2" @click="mobileOpen = !mobileOpen" aria-label="Menu">
        <Menu v-if="!mobileOpen" class="w-6 h-6" />
        <X    v-else             class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide-down">
      <div v-if="mobileOpen"
           class="md:hidden bg-brand-foret border-t border-white/10 px-4 sm:px-6 py-6 flex flex-col gap-5">
        <RouterLink
          v-for="link in navLinks" :key="link.to" :to="link.to"
          class="font-display text-3xl text-white hover:text-brand-vif transition-colors"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </RouterLink>
        <a href="/#contact" class="btn-primary self-start mt-2" @click="mobileOpen = false">
          <PhoneCall class="w-4 h-4" />
          Devis gratuit
        </a>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X, PhoneCall } from 'lucide-vue-next'
import logoWhite    from '@/assets/images/logo_principale_blanc.svg'
import logoSecondary from '@/assets/images/logo_secondaire_blanc.svg'

const scrolled   = ref(false)
const mobileOpen = ref(false)
const route      = useRoute()

const navLinks = [
  { to: '/',             label: 'Accueil'       },
  { to: '/services',     label: 'Nos services'  },
  { to: '/realisations', label: 'Réalisations'  },
  { to: '/#about',       label: 'À propos'      },
  { to: '/#contact',     label: 'Contact'       },
]

function isActive(to) {
  return route.path === to
}

function onScroll() { scrolled.value = window.scrollY > 60 }
onMounted(()  => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active { transition: all 0.3s ease; }
.slide-down-enter-from,
.slide-down-leave-to { opacity: 0; transform: translateY(-12px); }
</style>