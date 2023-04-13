import { createRouter, createWebHistory } from 'vue-router'

import TodoList from "@/pages/TodoList.vue";
import CompletedList from "@/pages/CompletedList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: TodoList,
    },
    {
      path: '/CompletedList',
      name: 'List of the completed things.',
      component: CompletedList,
    },
  ]
})

export default router
