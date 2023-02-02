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
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: () => import('../views/TelaThree.vue')
  },
  {
    path: '/purchase-summary',
    name: 'purchase-summary',
    component: () => import('../views/TelaFor.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
