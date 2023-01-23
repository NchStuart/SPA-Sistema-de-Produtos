import { createRouter, createWebHistory } from 'vue-router'
import TelaOne from '../views/TelaOne.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: TelaOne
  },
  {
    path: '/categorias',
    name: 'categorias',
    component: () => import('../views/TelaTwo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
