import { createRouter, createWebHistory } from 'vue-router'
import HomeView           from '@/views/HomeView.vue'
import ServiceView        from '@/views/ServiceView.vue'
import RealisationsView   from '@/views/RealisationsView.vue'
import MentionsLegalesView from '@/views/MentionsLegalesView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',                 name: 'home',            component: HomeView            },
    { path: '/services',         name: 'services',        component: ServiceView         },
    { path: '/realisations',     name: 'realisations',    component: RealisationsView    },
    { path: '/mentions-legales', name: 'mentions-legales', component: MentionsLegalesView },
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})

export default router
