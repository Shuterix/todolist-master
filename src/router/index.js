import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../components/homePage.vue'
import lvlOnePage from '../components/lvlOnePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'The Landing Page. (Home Screen)',
      component: homePage,
    },
    {
      path: '/todoList',
      name: 'First Level of Vue part in appkademia.',
      component: lvlOnePage,
    },
  ]
})

export default router
