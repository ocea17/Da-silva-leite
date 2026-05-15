<template>
  <NavBar />
<main class="min-h-screen">
  <RouterView />
</main>
<FooterSection />

  <!-- ─── Bouton retour en haut ─── -->
  <Transition name="scroll-top">
    <button
      v-if="showScrollTop"
      @click="scrollToTop"
      aria-label="Remonter en haut de page"
      class="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full
             bg-brand-vif text-white shadow-lg shadow-brand-vif/30
             flex items-center justify-center
             hover:bg-green-600 hover:-translate-y-1 hover:shadow-xl
             transition-all duration-300"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="2.5"
           stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar        from '@/components/NavBar.vue'
import FooterSection from '@/components/FooterSection.vue'

const showScrollTop = ref(false)

function onScroll() {
  showScrollTop.value = window.scrollY > 300
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.scroll-top-enter-active,
.scroll-top-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.scroll-top-enter-from,
.scroll-top-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>