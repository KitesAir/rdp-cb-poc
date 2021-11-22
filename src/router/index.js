import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/init',
    name: 'init',
    component: () => import(/* webpackChunkName: "about" */ '../views/Init.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
