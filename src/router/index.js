import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import TodoList from '../pages/TodoList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'The Landing Page. (Home Screen)',
      component: Home,
    },
    {
      path: '/todoList',
      name: 'First Level of Vue part in appkademia.',
      component: TodoList,
    },
  ]
})

export default router
