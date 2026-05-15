import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',                 name: 'home',             component: () => import('@/views/HomeView.vue')            },
    { path: '/services',         name: 'services',         component: () => import('@/views/ServiceView.vue')         },
    { path: '/realisations',     name: 'realisations',     component: () => import('@/views/RealisationsView.vue')    },
    { path: '/mentions-legales', name: 'mentions-legales', component: () => import('@/views/MentionsLegalesView.vue') },
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})

export default router