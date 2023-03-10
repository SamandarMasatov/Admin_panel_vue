import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/aboutadd',
        name: 'About-Add',
        component: () => import('../views/AboutAdd.vue')
      },
      {
        path: '/aboutsee',
        name: 'About-See',
        component: () => import('../views/AboutSee.vue')
      },
    ]
  })

export default router